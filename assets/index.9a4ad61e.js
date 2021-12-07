var te=Object.defineProperty;var ie=(r,e,i)=>e in r?te(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i;var H=(r,e,i)=>(ie(r,typeof e!="symbol"?e+"":e,i),i);import{b as ne,o as b,c as k,a as g,m as se,t as M,r as N,d as B,e as x,w as q,f as $,T as D,p as R,g as Z,h as z,i as re,v as oe,u as w,j as le,n as K,k as ue,l as ae,q as de,s as ce,A as pe,x as he}from"./vendor.3d89126f.js";const fe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}};fe();window.global===void 0&&(window.global=window,window.Buffer=ne.Buffer);const I=document.createElement("link");I.setAttribute("rel","favicon icon");const W=r=>{I.remove(),r.matches?I.setAttribute("href","plugLightTheme.svg"):I.setAttribute("href","plug.svg"),document.head.appendChild(I)};if(window.matchMedia){const r=window.matchMedia("(prefers-color-scheme: light)");r.addEventListener("change",W),W(r)}else W({matches:!1});var S=(r,e)=>{for(const[i,t]of e)r[i]=t;return r};const _e={},ge={width:"100%",height:"100%",viewBox:"0 0 2330 2330",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},ve=g("path",{d:"M1164.58,0C1807.33,0 2329.16,521.832 2329.16,1164.58C2329.16,1807.33 1807.33,2329.16 1164.58,2329.16C521.829,2329.16 0,1807.33 0,1164.58C0,521.829 521.832,0 1164.58,0ZM1164.58,12.31C1800.54,12.31 2316.85,528.626 2316.85,1164.58C2316.85,1800.54 1800.53,2316.85 1164.58,2316.85C528.623,2316.85 12.31,1800.53 12.31,1164.58C12.31,528.623 528.626,12.31 1164.58,12.31ZM1164.58,169.088C615.151,169.088 169.085,615.154 169.085,1164.58C169.085,1714.01 615.151,2160.08 1164.58,2160.08C1714.01,2160.08 2160.08,1714.01 2160.08,1164.58C2160.08,615.154 1714.01,169.088 1164.58,169.088ZM1164.58,181.398C1707.22,181.398 2147.77,621.948 2147.77,1164.58C2147.77,1707.22 1707.22,2147.77 1164.58,2147.77C621.945,2147.77 181.395,1707.22 181.395,1164.58C181.395,621.948 621.945,181.398 1164.58,181.398Z",style:{fill:"white"}},null,-1),me=g("path",{d:"M1342.38,1536.38C1338.03,1525.56 1333.68,1514.74 1329.34,1501.75C1324.99,1488.76 1322.82,1473.61 1320.64,1460.63C1309.77,1473.61 1294.55,1484.43 1279.33,1497.42C1264.11,1508.24 1246.72,1519.06 1227.15,1527.72C1209.76,1536.38 1188.02,1542.88 1166.28,1547.2C1144.54,1551.53 1120.62,1555.86 1094.54,1555.86C1053.23,1555.86 1014.09,1549.37 977.132,1538.55C942.348,1525.56 911.913,1510.41 885.823,1486.6C859.734,1464.96 840.165,1438.98 827.124,1408.68C811.905,1378.38 805.38,1345.91 805.38,1309.12C805.38,1222.55 837.994,1155.45 903.214,1107.84C968.437,1060.22 1066.27,1036.41 1194.54,1036.41L1314.12,1036.41L1314.12,986.633C1314.12,947.673 1301.07,915.205 1274.98,893.563C1248.9,869.755 1211.94,858.934 1161.93,858.934C1118.45,858.934 1088.01,867.59 1066.27,887.072C1046.7,904.384 1035.84,930.357 1035.84,960.66L822.775,960.66C822.775,926.027 831.47,891.398 846.689,861.099C861.909,828.631 885.823,802.658 914.088,778.85C944.522,755.042 981.482,735.565 1022.79,722.578C1066.27,707.427 1116.27,700.936 1170.63,700.936C1220.63,700.936 1266.29,707.427 1309.77,718.248C1353.25,731.235 1390.21,748.551 1422.82,772.359C1455.43,796.167 1479.35,826.47 1496.74,863.264C1514.13,900.058 1522.83,941.178 1522.83,988.794L1522.83,1341.59C1522.83,1384.87 1525,1421.67 1531.53,1451.97C1538.05,1480.11 1544.57,1506.08 1555.44,1525.56L1563.77,1538.55L1343.33,1538.55L1342.38,1536.38ZM1541.9,1526.24L1351.58,1526.24C1348.05,1517.42 1344.53,1508.36 1341.01,1497.84C1336.86,1485.45 1334.86,1470.98 1332.78,1458.59C1331.99,1453.85 1328.51,1450.01 1323.87,1448.75C1319.23,1447.49 1314.29,1449.04 1311.2,1452.73C1300.83,1465.11 1286.28,1475.36 1271.76,1487.7C1257.27,1497.97 1240.75,1508.24 1222.17,1516.47C1222,1516.54 1221.83,1516.62 1221.67,1516.7C1205.16,1524.92 1184.51,1531.02 1163.88,1535.13C1163.88,1535.13 1163.87,1535.13 1163.87,1535.13C1142.86,1539.31 1119.75,1543.55 1094.54,1543.55C1054.6,1543.55 1016.76,1537.28 981.019,1526.86C947.957,1514.48 918.944,1500.16 894.121,1477.51C893.977,1477.38 893.831,1477.25 893.682,1477.12C869.132,1456.76 850.703,1432.33 838.431,1403.82C838.335,1403.59 838.233,1403.37 838.124,1403.16C823.753,1374.55 817.69,1343.86 817.69,1309.12C817.69,1226.86 848.502,1163.02 910.472,1117.78C974.04,1071.37 1069.53,1048.72 1194.54,1048.72C1194.54,1048.72 1314.12,1048.72 1314.12,1048.72C1320.91,1048.72 1326.43,1043.21 1326.43,1036.41L1326.43,986.633C1326.43,943.746 1311.71,908.154 1283.06,884.271C1255.04,858.813 1215.56,846.624 1161.93,846.624C1114.64,846.624 1081.74,856.701 1058.08,877.879C1038.75,894.998 1026.74,919.532 1024.08,948.35C1024.08,948.35 879.661,948.35 835.47,948.35C837.247,919.802 845.118,891.651 857.689,866.624C857.739,866.525 857.788,866.425 857.835,866.324C872.268,835.534 895.058,810.997 921.845,788.411C951.155,765.518 986.738,746.816 1026.48,734.321C1026.6,734.283 1026.72,734.244 1026.84,734.202C1069.12,719.468 1117.77,713.246 1170.63,713.246C1219.46,713.246 1264.05,719.576 1306.52,730.123C1348.44,742.67 1384.1,759.335 1415.57,782.301C1446.48,804.875 1469.12,833.638 1485.61,868.525C1502.27,903.772 1510.52,943.18 1510.52,988.794L1510.52,1341.59C1510.52,1385.89 1512.82,1423.55 1519.49,1454.56C1519.51,1454.62 1519.52,1454.69 1519.53,1454.75C1525.77,1481.65 1532.15,1506.6 1541.9,1526.24ZM1140.19,1399.35C1163.26,1399.35 1184.03,1396.94 1202.54,1390.16C1220.79,1385.56 1239.01,1378.69 1254.98,1369.6C1271.23,1360.36 1285.11,1351.04 1296.71,1339.49C1308.37,1327.89 1317.67,1316.26 1324.66,1304.65C1325.82,1302.73 1326.43,1300.54 1326.43,1298.3L1326.43,1157.62C1326.43,1150.82 1320.91,1145.31 1314.12,1145.31L1205.41,1145.31C1171.56,1145.31 1142.22,1149.82 1117.4,1156.56C1091.69,1163.54 1070.72,1173.05 1056.59,1184.65C1039.57,1196.84 1027.44,1211.52 1020.06,1230.93C1013,1247.43 1008.31,1266.29 1008.31,1287.48C1008.31,1318.92 1020.33,1345.58 1042.12,1367.38C1061.4,1388.75 1094.65,1399.35 1140.19,1399.35ZM1140.19,1387.04C1161.93,1387.04 1181.5,1384.87 1198.89,1378.38C1216.28,1374.05 1233.68,1367.56 1248.9,1358.9C1264.11,1350.24 1277.16,1341.59 1288.03,1330.77C1298.9,1319.94 1307.6,1309.12 1314.12,1298.3L1314.12,1157.62L1205.41,1157.62C1172.8,1157.62 1144.54,1161.94 1120.62,1168.44C1096.71,1174.93 1077.14,1183.59 1064.1,1194.41C1048.88,1205.23 1038.01,1218.22 1031.49,1235.53C1024.96,1250.68 1020.62,1268 1020.62,1287.48C1020.62,1315.62 1031.49,1339.42 1051.06,1358.9C1068.44,1378.38 1098.88,1387.04 1140.19,1387.04Z",style:{fill:"white"}},null,-1),we=[ve,me];function Ce(r,e){return b(),k("svg",ge,we)}var ye=S(_e,[["render",Ce]]);class F{constructor(){this.mittInstance=se()}emit(e,i){this.mittInstance.emit(e,i)}on(e,i){this.mittInstance.on(e,i)}off(e,i){this.mittInstance.off(e,i)}once(e,i){return new Promise(t=>{const n=s=>{this.off(e,n),t(s),i&&i(s)};this.on(e,n)})}}class be extends F{constructor(e,i){super();this._iframe={},this._popup={},this._usePopup=!0,this._keepPopup=!1,this._listening=!1,this._promiseController=[],this._pending=[],this.listener=t=>{var n,s,l,h,d,c;if(typeof t.data!="object")return;const{method:a,params:_,id:C,result:T,error:O,session:V}=t.data;if(t.source!==this._popup.window&&t.source!==((n=this._iframe)===null||n===void 0?void 0:n.window)||t.origin!==((s=this._url)===null||s===void 0?void 0:s.origin))return;if(console.info(`WalletConnector:${t.source===this._popup.window?"popup":"iframe"}`,t.data),C!=null){if(typeof C!="number"&&typeof C!="string"||typeof C=="string"&&isNaN(parseInt(C)))return;if(!this._promiseController[+C])throw"received result to nonexistent request";this._pending=this._pending.filter(o=>o!=C),O!=null&&this._promiseController[+C].reject(O),T!=null&&this._promiseController[+C].resolve(T);return}if(typeof a!="string")return;if(a==="ready"){t.source===this._popup.window&&(this._pending=[],(h=(l=this._popup).resolve)===null||h===void 0||h.call(l)),t.source===this._iframe.window&&((c=(d=this._iframe).resolve)===null||c===void 0||c.call(d));return}if(a==="change")return;if(a==="usePopup"){if(typeof _!="boolean")return;this._usePopup=_}if(a==="keepPopup"){if(typeof _!="boolean")return;this._keepPopup=_,_||this.closePopup()}const A={method:a,params:_,session:V};if(!M.is(A,o=>{function u(f){return typeof f!="string"?{}:null}function m(){return null}function y(f){return f!==void 0?{}:null}function J(f){return typeof f!="number"?{}:null}function Q(f){var P=[y,u,J];for(const ee of P){var j=ee(f);if(!j)return null}return{}}function Y(f){if(typeof f!="object"||f===null||Array.isArray(f))return{};if("method"in f){var P=u(f.method);if(P)return P}else return{};if("params"in f){var P=m(f.params);if(P)return P}else return{};if("session"in f){var P=Q(f.session);if(P)return P}return null}return Y(o)}))return console.warn("dropped");this.emit("message",A)},this._appInfo=i,this._url=typeof e=="string"?new URL(e.includes("://")?e:"https://"+e):e,this._url.hash=new URLSearchParams(Object.assign(Object.assign({origin:window.location.origin},this._appInfo),{session:Math.random().toString().slice(2)})).toString(),this._listening||window.addEventListener("message",this.listener),this._listening=!0,this.openIframe()}get url(){var e;return(e=this._url)===null||e===void 0?void 0:e.origin}get usePopup(){return this._usePopup}get keepPopup(){return this._keepPopup}set keepPopup(e){this._keepPopup=e,this.emit("builtin",{keepPopup:e}),e?this.openPopup(!0):this.closePopup()}disconnect(e){this.closeIframe(),this.closePopup(!0),window.removeEventListener("message",this.listener),this._listening=!1}postMessage(e){const i=this._promiseController.length,t=new Promise((n,s)=>this._promiseController.push({resolve:n,reject:s})).finally(()=>!this._pending.length&&this.closePopup());return this.deliverMessage(Object.assign(Object.assign({},e),{id:i})),t}openIframe(){if(this._iframeEl)return;this._iframeEl=document.createElement("iframe"),this._iframeEl.src=this._url.toString(),this._iframeEl.style.display="none";const e=new Promise((t,n)=>this._iframe={resolve:t,reject:n});this._iframe.promise=e;const i=()=>{var t;document.body.appendChild(this._iframeEl),this._iframe.window=(t=this._iframeEl)===null||t===void 0?void 0:t.contentWindow};document.readyState==="complete"||document.readyState==="interactive"?i():document.addEventListener("DOMContentLoaded",i)}closeIframe(){var e,i;!this._iframeEl||(this._iframeEl.src="about:blank",this._iframeEl.remove(),this._iframeEl=void 0,(i=(e=this._iframe).reject)===null||i===void 0||i.call(e),this._iframe={})}showIframe(){}openPopup(e){if(this._popup.window&&!this._popup.window.closed){this._popup.window.focus();return}if(!this._usePopup&&!e)return;window.name="parent";const i=window.open(this._url.toString(),"_blank","location,resizable,scrollbars,width=400,height=600"),t=new Promise((s,l)=>this._popup={window:i,resolve:s,reject:l});this._popup.promise=t;const n=setInterval(()=>{this._popup.window&&!this._popup.window.closed||(this.keepPopup&&(this.keepPopup=!1),clearInterval(n))},200)}closePopup(e){var i,t,n;!this._popup.window||((i=this._popup.window)===null||i===void 0?void 0:i.closed)||this._keepPopup&&!e||(this._popup.window.location.href="about:blank",this._popup.window.close(),(n=(t=this._popup).reject)===null||n===void 0||n.call(t),this._popup={})}completeRequest(){!this._pending.length&&this.closePopup()}deliverMessage(e){if(!this._url)throw"Missing URL";const i=Object.assign(Object.assign({},e),{jsonrpc:"2.0"});this.openIframe(),this._iframe.promise=this._iframe.promise.then(()=>{var t;return(t=this._iframe.window)===null||t===void 0?void 0:t.postMessage(i,this._url.origin)}).catch(()=>{}),this.openPopup(),this._popup.promise=this._popup.promise.then(()=>i.id!=null&&this._pending.push(i.id)).then(()=>{var t;return(t=this._popup.window)===null||t===void 0?void 0:t.postMessage(i,this._url.origin)}).catch(()=>{})}}var G=globalThis&&globalThis.__awaiter||function(r,e,i,t){function n(s){return s instanceof i?s:new i(function(l){l(s)})}return new(i||(i=Promise))(function(s,l){function h(a){try{c(t.next(a))}catch(_){l(_)}}function d(a){try{c(t.throw(a))}catch(_){l(_)}}function c(a){a.done?s(a.value):n(a.value).then(h,d)}c((t=t.apply(r,e||[])).next())})};class v extends F{constructor(e,i,t){super();this._session=0,this._protocolInfo=e,this._appInfo=i,this._listener=n=>{const{method:s,params:l,session:h}=n;if(!(h!=null&&this._session!=h)&&!(!h&&this._session)){if(s==="connect"){if(!M.is(l,d=>{function c(a){return typeof a!="string"?{}:null}return c(d)})||this._address===l)return;this._address=l,this.emit("connect",l),this.emit("change",l)}s==="disconnect"&&this.handleDisconnect()}},this._emitterPassthrough=n=>{const s=Object.entries(n)[0];this.emit(s[0],s[1])},t&&this.setUrl(t)}setUrl(e){this.disconnect();const i=typeof e=="string"?e:e.origin;if(!v._bridges[i])this._bridge=new be(e,this._appInfo),v._bridges[i]={bridge:this._bridge,sessions:[]};else{this._bridge=v._bridges[i].bridge;const t=v._bridges[i].sessions;for(let n=0;n<=t.length;n++)if(t.indexOf(n)<0){this._session=n;break}}v._bridges[i].sessions.push(this._session),this._bridge.on("message",this._listener),this._bridge.on("builtin",this._emitterPassthrough)}get address(){return this._address}get connected(){return!!this._address}get url(){var e;return(e=this._bridge)===null||e===void 0?void 0:e.url}get keepPopup(){var e;return((e=this._bridge)===null||e===void 0?void 0:e.keepPopup)||!1}set keepPopup(e){this._bridge&&(this._bridge.keepPopup=e)}connect(e){return G(this,void 0,void 0,function*(){if(!this._bridge)throw"URL missing";const i=new Promise(t=>this.once("connect",t)).finally(()=>{var t;return(t=this._bridge)===null||t===void 0?void 0:t.completeRequest()});return this._bridge.deliverMessage({method:"connect",params:e}),i})}disconnect(e){return G(this,void 0,void 0,function*(){if(!!this._bridge){try{yield this.postMessage("disconnect",e)}catch{console.warn("disconnect request failed")}this.handleDisconnect()}})}handleDisconnect(){var e;if(this._address=void 0,this.emit("disconnect",void 0),this.emit("change",void 0),!this._bridge)return;this._bridge.off("message",this._listener),this._bridge.off("builtin",this._emitterPassthrough);const i=this._bridge.url;v._bridges[i].sessions=(e=v._bridges[i].sessions)===null||e===void 0?void 0:e.filter(t=>t!=this._session),this._bridge=void 0,setTimeout(()=>{v._bridges[i].sessions.length||(v._bridges[i].bridge.disconnect(),delete v._bridges[i])},100)}postMessage(e,i){if(!this._bridge)throw"URL missing";return this._bridge.postMessage(Object.assign(Object.assign({method:e,params:i},this._protocolInfo),{session:this._session}))}}v._bridges={};var E=globalThis&&globalThis.__awaiter||function(r,e,i,t){function n(s){return s instanceof i?s:new i(function(l){l(s)})}return new(i||(i=Promise))(function(s,l){function h(a){try{c(t.next(a))}catch(_){l(_)}}function d(a){try{c(t.throw(a))}catch(_){l(_)}}function c(a){a.done?s(a.value):n(a.value).then(h,d)}c((t=t.apply(r,e||[])).next())})},Pe=globalThis&&globalThis.__rest||function(r,e){var i={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(i[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(r);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(r,t[n])&&(i[t[n]]=r[t[n]]);return i};class ke extends v{constructor(e,i){super({protocol:"arweave",version:"1.0.0"},Object.assign({},e),i)}getPublicKey(){return E(this,void 0,void 0,function*(){const e=yield this.postMessage("getPublicKey");if(!M.is(e,i=>{function t(n){return typeof n!="string"?{}:null}return t(i)}))throw"TypeError";return e})}getArweaveConfig(e){return E(this,void 0,void 0,function*(){const i=yield this.postMessage("getArweaveConfig",e);if(!M.is(i,t=>{function n(o){return o!==void 0?{}:null}function s(o){return typeof o!="string"?{}:null}function l(o){var u=[n,s];for(const y of u){var m=y(o);if(!m)return null}return{}}function h(o){return typeof o!="number"?{}:null}function d(o){var u=[n,s,h];for(const y of u){var m=y(o);if(!m)return null}return{}}function c(o){var u=[n,h];for(const y of u){var m=y(o);if(!m)return null}return{}}function a(o){return o!==!1?{}:null}function _(o){return o!==!0?{}:null}function C(o){var u=[n,a,_];for(const y of u){var m=y(o);if(!m)return null}return{}}function T(o){if(typeof o!="object"||o===null||Array.isArray(o))return{};if("protocol"in o){var u=l(o.protocol);if(u)return u}if("host"in o){var u=l(o.host);if(u)return u}if("port"in o){var u=d(o.port);if(u)return u}if("timeout"in o){var u=c(o.timeout);if(u)return u}if("logging"in o){var u=C(o.logging);if(u)return u}return null}function O(){return null}function V(o){if(typeof o!="object"||o===null||Array.isArray(o))return{};if("logger"in o){var u=O(o.logger);if(u)return u}else return{};return null}function A(o){var u=[T,V];for(const y of u){var m=y(o);if(m)return m}return null}return A(t)}))throw"TypeError";return delete i.logger,i})}signTransaction(e,i){return E(this,void 0,void 0,function*(){const t=Pe(e,["data","chunks"]),n=yield this.postMessage("signTransaction",{tx:t,options:i});if(!M.is(n,s=>{function l(d){return typeof d!="string"?{}:null}function h(d){if(typeof d!="object"||d===null||Array.isArray(d))return{};if("signature"in d){var c=l(d.signature);if(c)return c}else return{};if("fee"in d){var c=l(d.fee);if(c)return c}return null}return h(s)}))throw"TypeError";return e.signature=n.signature,n.fee&&(e.fee=n.fee),e})}sign(e,i){return E(this,void 0,void 0,function*(){const t=yield this.postMessage("sign",{message:e,options:i});if(!M.is(t,n=>{function s(l){return typeof l!="string"?{}:null}return s(n)}))throw"TypeError";return t})}decrypt(e,i){return E(this,void 0,void 0,function*(){const t=yield this.postMessage("decrypt",{message:e,options:i});if(!M.is(t,n=>{function s(l){return typeof l!="string"?{}:null}return s(n)}))throw"TypeError";return t})}}class Le extends ke{constructor(e,i){super(e,i);H(this,"state",N({url:"arweave.app",address:void 0,keepPopup:!1,error:""}));this.on("connect",t=>{this.state.address=t,this.state.url=p.url}),this.on("disconnect",()=>this.state.address=void 0),this.on("keepPopup",t=>this.state.keepPopup=t)}get url(){return this.state.url}get address(){return this.state.address}get keepPopup(){return this.state.keepPopup}set keepPopup(e){super.keepPopup=e}get error(){return this.state.error}set error(e){this.state.error=e}}const p=new Le({name:"Connector Example",logo:`${location.href}placeholder.svg`});const Me=B({props:["icon"]}),L=r=>(R("data-v-3056351f"),r=r(),Z(),r),xe={class:"img-container"},Ie={key:0,xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",fill:"currentColor"},Ee=L(()=>g("rect",{fill:"none",height:"24",width:"24"},null,-1)),Te=L(()=>g("path",{d:"M3,3v18h18V3H3z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7L17,8.41L13.41,12 L17,15.59z"},null,-1)),Oe=[Ee,Te],Ae={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},$e=L(()=>g("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1)),Se=L(()=>g("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"},null,-1)),Ve=[$e,Se],Be={key:2,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},ze=L(()=>g("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1)),We=L(()=>g("path",{d:"M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"},null,-1)),He=[ze,We],Ne={key:3,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},qe=L(()=>g("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1)),De=L(()=>g("path",{d:"M18 14.49V9c0-1-1.01-2.01-2-2V3h-2v4h-4V3H8v2.48l9.51 9.5.49-.49zm-1.76 1.77L7.2 7.2l-.01.01L3.98 4 2.71 5.25l3.36 3.36C6.04 8.74 6 8.87 6 9v5.48L9.5 18v3h5v-3l.48-.48L19.45 22l1.26-1.28-4.47-4.46z"},null,-1)),Re=[qe,De];function Ze(r,e,i,t,n,s){return b(),k("button",null,[g("div",xe,[x(D,{name:"fade"},{default:q(()=>[r.icon==="close"?(b(),k("svg",Ie,Oe)):r.icon==="launch"?(b(),k("svg",Ae,Ve)):r.icon==="plug"?(b(),k("svg",Be,He)):r.icon==="unplug"?(b(),k("svg",Ne,Re)):$("",!0)]),_:1})])])}var U=S(Me,[["render",Ze],["__scopeId","data-v-3056351f"]]);const Ke={class:"url-input"},Fe=["placeholder","onKeydown"],Ge={class:"actions"},Ue=B({setup(r){const e=N({url:p.url,loading:!1}),i=()=>{p.setUrl(e.url||p.url),p.connect(),e.loading=!0,p.once("change",()=>e.loading=!1)},t=()=>p.disconnect(),n=()=>p.keepPopup=!p.keepPopup,s=z(()=>p.keepPopup?"close":"launch"),l=z(()=>p.address?"unplug":"plug");return(h,d)=>(b(),k("div",Ke,[re(g("input",{class:"url","onUpdate:modelValue":d[0]||(d[0]=c=>w(e).url=c),placeholder:w(p).url,onKeydown:le(i,["enter"])},null,40,Fe),[[oe,w(e).url]]),g("div",Ge,[x(D,{name:"fade"},{default:q(()=>[w(p).address?(b(),ue(U,{key:0,class:K(["action",{dim:!w(p).keepPopup}]),icon:w(s),onClick:n},null,8,["icon","class"])):$("",!0)]),_:1}),x(U,{class:K(["action",{dim:w(e).loading}]),icon:w(l),onClick:d[1]||(d[1]=c=>w(p).address?t():i())},null,8,["icon","class"])])]))}});var Xe=S(Ue,[["__scopeId","data-v-ab3061d0"]]);const X=r=>(R("data-v-3bb53a79"),r=r(),Z(),r),Je={class:"app no-scrollbar"},Qe=X(()=>g("div",null,"The connector module itself has no visual element included. This page is an example on how it can be integrated",-1)),Ye=X(()=>g("button",null,"View on Github",-1)),je={key:0,id:"s1",class:"section"},et=B({setup(r){const e=async()=>{const t=pe.init({host:"arweave.net",port:443,protocol:"https"});try{const n=await t.createTransaction({quantity:"100000000000",owner:p.address,target:"TId0Wix2KFl1gArtAT6Do1CbWU_0wneGvS5X9BfW5PE",data:"hello world"});n.addTag("App-Name","Donate to the developer"),n.addTag("Tag-1","transaction tags are all displayed here"),n.addTag("Tag-2","this is a real transaction"),n.addTag("Tag-3","it will only be sent by clicking accept"),await p.signTransaction(n)}catch(n){console.error(n),p.error=n}};ae("");const i=z(()=>{const t=[p.address];let n=0;for(;t[n];)n++;return n});return de(i,(t,n)=>{t<=n||setTimeout(()=>{var s;return(s=document.querySelector("#s"+t))==null?void 0:s.scrollIntoView({behavior:"smooth"})})}),(t,n)=>(b(),k("div",Je,[x(ye,{class:"logo"}),x(Xe,{class:"wallet-selector"}),Qe,Ye,w(i)>=1?(b(),k("section",je,[g("div",null,ce(w(p).address),1),w(p).address?(b(),k("button",{key:0,onClick:e},"Sign Transaction")):$("",!0)])):$("",!0)]))}});var tt=S(et,[["__scopeId","data-v-3bb53a79"]]);he(tt).mount("#app");
