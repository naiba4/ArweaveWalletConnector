import Emitter from './Emitter'

type ChannelController = {
	window?: Window | null,
	promise?: Promise<unknown>,
	resolve?: (value?: unknown) => void,
	reject?: (value?: unknown) => void,
}



export default class Bridge extends Emitter {
	private _url?: URL
	private _appInfo: object
	private _iframeEl?: HTMLIFrameElement | null
	private _iframe: ChannelController = {}
	private _popup: ChannelController = {}
	private _usePopup: boolean = true
	private _keepPopup: boolean = false
	private _address?: string
	private _listening: boolean = false
	private _promiseController: {
		resolve: (value?: string) => void,
		reject: (reason?: Error) => void
	}[] = []

	constructor(appInfo: object, connectToUrl?: string | URL) {
		super()
		this._appInfo = appInfo
		if (connectToUrl) { this.setUrl(connectToUrl) }
	}

	setUrl(connectToUrl: string | URL) {
		this.disconnect()
		this._url = typeof connectToUrl === 'string' ? new URL(connectToUrl.includes('://') ? connectToUrl : 'https://' + connectToUrl) : connectToUrl
		this._url.hash = new URLSearchParams({ origin: window.location.origin, ...this._appInfo, session: Math.random().toString().slice(2) }).toString()
		if (!this._listening) { window.addEventListener('message', this.listener) }
		this._listening = true
		this.openIframe()
	}

	get address() { return this._address }
	get connected() { return !!this._address }
	get url() { return this._url?.origin }
	get usePopup() { return this._usePopup }
	get keepPopup() { return this._keepPopup }
	set keepPopup(keep: boolean) {
		this._keepPopup = keep
		this.emit('keepPopup', keep)
		if (keep) { this.openPopup(true) }
		else { this.closePopup() }
	}



	private listener = (e: MessageEvent) => {
		const { method, params, id, result, error } = e.data
		if (e.source !== this._popup.window && e.source !== this._iframe?.window || e.origin !== this._url?.origin) { return }
		console.info(`WalletConnector:${e.source === this._popup.window ? 'popup' : 'iframe'}`, e.data)
		if (id != null) {
			if (typeof id !== 'number') { return }
			if (!this._promiseController[id]) { throw 'received result to nonexistent request' }
			if (error) { this._promiseController[id].reject(error) }
			if (result) { this._promiseController[id].resolve(result) }
			return
		}
		if (typeof method !== 'string') { return }

		// reserved methods
		if (method === 'ready') {
			if (e.source === this._popup.window) { this._popup.resolve?.() }
			if (e.source === this._iframe.window) { this._iframe.resolve?.() }
			return
		}
		if (method === 'change') { return }

		// verified methods
		if (method === 'connect') {
			if (typeof params !== 'string' || this._address === params) { return }
			this._address = params
			this.emit('change', params)
		}
		if (method === 'disconnect') {
			if (params) { return }
			this.disconnect()
			this.emit('change', undefined)
		}
		if (method === 'usePopup') {
			if (typeof params !== 'boolean') { return }
			this._usePopup = params
		}
		if (method === 'keepPopup') {
			if (typeof params !== 'boolean') { return }
			this._keepPopup = params
			if (!params) { this.closePopup() }
		}
		this.emit(method, params)
	}

	connect(address?: string): Promise<string> {
		const queueLength = this._promiseController.length
		const promise = new Promise<string>(resolve => this.once('connect', resolve))
			.finally(() => queueLength === this._promiseController.length && this.closePopup())
		this.deliverMessage({ connect: address })
		return promise
	}

	disconnect() {
		this.closeIframe()
		this.closePopup(true)
		window.removeEventListener('message', this.listener)
		this._listening = false
		this._address = undefined
		this.emit('disconnect', undefined)
	}

	postMessage(message: object) {
		const id = this._promiseController.length
		const promise = new Promise((resolve, reject) => this._promiseController.push({ resolve, reject }))
			.finally(() => (id === this._promiseController.length - 1) && this.closePopup())
		this.deliverMessage({ ...message, id })
		return promise
	}

	private openIframe() {
		if (this._iframeEl) { return }
		this._iframeEl = document.createElement('iframe')
		this._iframeEl.src = this._url!.toString()
		this._iframeEl.style.display = 'none'
		const promise = new Promise((resolve, reject) => this._iframe = { resolve, reject })
		this._iframe.promise = promise
		const injectIframe = () => {
			document.body.appendChild(this._iframeEl as Node)
			this._iframe.window = this._iframeEl?.contentWindow
		}
		if (document.readyState === 'complete' || document.readyState === 'interactive') { injectIframe() }
		else { document.addEventListener('DOMContentLoaded', injectIframe) }
	}

	private closeIframe() {
		if (!this._iframeEl) { return }
		this._iframeEl.src = 'about:blank'
		this._iframeEl.remove()
		this._iframeEl = undefined
		this._iframe.reject?.()
		this._iframe = {}
	}

	private openPopup(force?: boolean) {
		if (this._popup.window && !this._popup.window.closed) { this._popup.window.focus(); return }
		if (!this._usePopup && !force) { return }
		window.name = 'parent'
		const popupWindow = window.open(this._url!.toString(), '_blank', 'location,resizable,scrollbars,width=400,height=600')
		const promise = new Promise((resolve, reject) => this._popup = { window: popupWindow, resolve, reject })
		this._popup.promise = promise
		const timer = setInterval(() => {
			if (this._popup.window && !this._popup.window.closed) { return }
			if (this.keepPopup) { this.keepPopup = false }
			clearInterval(timer)
		}, 200)
	}

	private closePopup(force?: boolean) {
		if (!this._popup.window || this._popup.window?.closed) { return }
		if (this._keepPopup && !force) { return }
		this._popup.window.location.href = 'about:blank'
		this._popup.window.close()
		this._popup.reject?.()
		this._popup = {}
	}

	private deliverMessage(fullMessage: Object) {
		if (!this._url) { throw 'Missing URL' }
		this.openIframe()
		this._iframe.promise = this._iframe.promise!.then(() => this._iframe.window?.postMessage(fullMessage, this._url!.origin)).catch(() => { return })
		this.openPopup()
		this._popup.promise = this._popup.promise!.then(() => this._popup.window?.postMessage(fullMessage, this._url!.origin)).catch(() => { return })
	}
}