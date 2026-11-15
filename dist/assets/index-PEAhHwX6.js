(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function v_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var gh={exports:{}},fl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function X1(){if(lv)return fl;lv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var m in c)m!=="key"&&(f[m]=c[m])}else f=c;return c=f.ref,{$$typeof:o,type:r,key:d,ref:c!==void 0?c:null,props:f}}return fl.Fragment=t,fl.jsx=i,fl.jsxs=i,fl}var cv;function W1(){return cv||(cv=1,gh.exports=X1()),gh.exports}var h=W1(),xh={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function q1(){if(uv)return dt;uv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),y=Symbol.iterator;function A(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function D(O,ie,J){this.props=O,this.context=ie,this.refs=E,this.updater=J||w}D.prototype.isReactComponent={},D.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},D.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function I(){}I.prototype=D.prototype;function L(O,ie,J){this.props=O,this.context=ie,this.refs=E,this.updater=J||w}var B=L.prototype=new I;B.constructor=L,M(B,D.prototype),B.isPureReactComponent=!0;var P=Array.isArray;function b(){}var C={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function G(O,ie,J){var ce=J.ref;return{$$typeof:o,type:O,key:ie,ref:ce!==void 0?ce:null,props:J}}function F(O,ie){return G(O.type,ie,O.props)}function W(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function q(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(J){return ie[J]})}var z=/\/+/g;function ee(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?q(""+O.key):ie.toString(36)}function Z(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(b,b):(O.status="pending",O.then(function(ie){O.status==="pending"&&(O.status="fulfilled",O.value=ie)},function(ie){O.status==="pending"&&(O.status="rejected",O.reason=ie)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function V(O,ie,J,ce,he){var Te=typeof O;(Te==="undefined"||Te==="boolean")&&(O=null);var Xe=!1;if(O===null)Xe=!0;else switch(Te){case"bigint":case"string":case"number":Xe=!0;break;case"object":switch(O.$$typeof){case o:case t:Xe=!0;break;case _:return Xe=O._init,V(Xe(O._payload),ie,J,ce,he)}}if(Xe)return he=he(O),Xe=ce===""?"."+ee(O,0):ce,P(he)?(J="",Xe!=null&&(J=Xe.replace(z,"$&/")+"/"),V(he,ie,J,"",function(st){return st})):he!=null&&(W(he)&&(he=F(he,J+(he.key==null||O&&O.key===he.key?"":(""+he.key).replace(z,"$&/")+"/")+Xe)),ie.push(he)),1;Xe=0;var Se=ce===""?".":ce+":";if(P(O))for(var Ce=0;Ce<O.length;Ce++)ce=O[Ce],Te=Se+ee(ce,Ce),Xe+=V(ce,ie,J,Te,he);else if(Ce=A(O),typeof Ce=="function")for(O=Ce.call(O),Ce=0;!(ce=O.next()).done;)ce=ce.value,Te=Se+ee(ce,Ce++),Xe+=V(ce,ie,J,Te,he);else if(Te==="object"){if(typeof O.then=="function")return V(Z(O),ie,J,ce,he);throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return Xe}function me(O,ie,J){if(O==null)return O;var ce=[],he=0;return V(O,ce,"","",function(Te){return ie.call(J,Te,he++)}),ce}function Q(O){if(O._status===-1){var ie=O._result,J=ie();J.then(function(ce){(O._status===0||O._status===-1)&&(O._status=1,O._result=ce,J.status===void 0&&(J.status="fulfilled",J.value=ce))},function(ce){(O._status===0||O._status===-1)&&(O._status=2,O._result=ce,J.status===void 0&&(J.status="rejected",J.reason=ce))}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var pe=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function ye(O){var ie=C.T,J={};J.types=ie!==null?ie.types:null,C.T=J;try{var ce=O(),he=C.S;he!==null&&he(J,ce),typeof ce=="object"&&ce!==null&&typeof ce.then=="function"&&ce.then(b,pe)}catch(Te){pe(Te)}finally{ie!==null&&J.types!==null&&(ie.types=J.types),C.T=ie}}function je(O){var ie=C.T;if(ie!==null){var J=ie.types;J===null?ie.types=[O]:J.indexOf(O)===-1&&J.push(O)}else ye(je.bind(null,O))}var et={map:me,forEach:function(O,ie,J){me(O,function(){ie.apply(this,arguments)},J)},count:function(O){var ie=0;return me(O,function(){ie++}),ie},toArray:function(O){return me(O,function(ie){return ie})||[]},only:function(O){if(!W(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return dt.Activity=v,dt.Children=et,dt.Component=D,dt.Fragment=i,dt.Profiler=c,dt.PureComponent=L,dt.StrictMode=r,dt.Suspense=g,dt.ViewTransition=S,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,dt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return C.H.useMemoCache(O)}},dt.addTransitionType=je,dt.cache=function(O){return function(){return O.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(O,ie,J){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ce=M({},O.props),he=O.key;if(ie!=null)for(Te in ie.key!==void 0&&(he=""+ie.key),ie)!j.call(ie,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&ie.ref===void 0||(ce[Te]=ie[Te]);var Te=arguments.length-2;if(Te===1)ce.children=J;else if(1<Te){for(var Xe=Array(Te),Se=0;Se<Te;Se++)Xe[Se]=arguments[Se+2];ce.children=Xe}return G(O.type,he,ce)},dt.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:f,_context:O},O},dt.createElement=function(O,ie,J){var ce,he={},Te=null;if(ie!=null)for(ce in ie.key!==void 0&&(Te=""+ie.key),ie)j.call(ie,ce)&&ce!=="key"&&ce!=="__self"&&ce!=="__source"&&(he[ce]=ie[ce]);var Xe=arguments.length-2;if(Xe===1)he.children=J;else if(1<Xe){for(var Se=Array(Xe),Ce=0;Ce<Xe;Ce++)Se[Ce]=arguments[Ce+2];he.children=Se}if(O&&O.defaultProps)for(ce in Xe=O.defaultProps,Xe)he[ce]===void 0&&(he[ce]=Xe[ce]);return G(O,Te,he)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(O){return{$$typeof:m,render:O}},dt.isValidElement=W,dt.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:Q}},dt.memo=function(O,ie){return{$$typeof:p,type:O,compare:ie===void 0?null:ie}},dt.startTransition=ye,dt.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},dt.use=function(O){return C.H.use(O)},dt.useActionState=function(O,ie,J){return C.H.useActionState(O,ie,J)},dt.useCallback=function(O,ie){return C.H.useCallback(O,ie)},dt.useContext=function(O){return C.H.useContext(O)},dt.useDebugValue=function(){},dt.useDeferredValue=function(O,ie){return C.H.useDeferredValue(O,ie)},dt.useEffect=function(O,ie){return C.H.useEffect(O,ie)},dt.useEffectEvent=function(O){return C.H.useEffectEvent(O)},dt.useId=function(){return C.H.useId()},dt.useImperativeHandle=function(O,ie,J){return C.H.useImperativeHandle(O,ie,J)},dt.useInsertionEffect=function(O,ie){return C.H.useInsertionEffect(O,ie)},dt.useLayoutEffect=function(O,ie){return C.H.useLayoutEffect(O,ie)},dt.useMemo=function(O,ie){return C.H.useMemo(O,ie)},dt.useOptimistic=function(O,ie){return C.H.useOptimistic(O,ie)},dt.useReducer=function(O,ie,J){return C.H.useReducer(O,ie,J)},dt.useRef=function(O){return C.H.useRef(O)},dt.useState=function(O){return C.H.useState(O)},dt.useSyncExternalStore=function(O,ie,J){return C.H.useSyncExternalStore(O,ie,J)},dt.useTransition=function(){return C.H.useTransition()},dt.version="19.3.1",dt}var fv;function km(){return fv||(fv=1,xh.exports=q1()),xh.exports}var qe=km();const Y1=v_(qe);var vh={exports:{}},dl={},_h={exports:{}},Sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function Z1(){return dv||(dv=1,(function(o){function t(Z,V){var me=Z.length;Z.push(V);e:for(;0<me;){var Q=me-1>>>1,pe=Z[Q];if(0<c(pe,V))Z[Q]=V,Z[me]=pe,me=Q;else break e}}function i(Z){return Z.length===0?null:Z[0]}function r(Z){if(Z.length===0)return null;var V=Z[0],me=Z.pop();if(me!==V){Z[0]=me;e:for(var Q=0,pe=Z.length,ye=pe>>>1;Q<ye;){var je=2*(Q+1)-1,et=Z[je],O=je+1,ie=Z[O];if(0>c(et,me))O<pe&&0>c(ie,et)?(Z[Q]=ie,Z[O]=me,Q=O):(Z[Q]=et,Z[je]=me,Q=je);else if(O<pe&&0>c(ie,me))Z[Q]=ie,Z[O]=me,Q=O;else break e}}return V}function c(Z,V){var me=Z.sortIndex-V.sortIndex;return me!==0?me:Z.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,m=d.now();o.unstable_now=function(){return d.now()-m}}var g=[],p=[],_=1,v=null,S=3,y=!1,A=!1,w=!1,M=!1,E=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function L(Z){for(var V=i(p);V!==null;){if(V.callback===null)r(p);else if(V.startTime<=Z)r(p),V.sortIndex=V.expirationTime,t(g,V);else break;V=i(p)}}function B(Z){if(w=!1,L(Z),!A)if(i(g)!==null)A=!0,P||(P=!0,W());else{var V=i(p);V!==null&&ee(B,V.startTime-Z)}}var P=!1,b=-1,C=5,j=-1;function G(){return M?!0:!(o.unstable_now()-j<C)}function F(){if(M=!1,P){var Z=o.unstable_now();j=Z;var V=!0;try{e:{A=!1,w&&(w=!1,D(b),b=-1),y=!0;var me=S;try{t:{for(L(Z),v=i(g);v!==null&&!(v.expirationTime>Z&&G());){var Q=v.callback;if(typeof Q=="function"){v.callback=null,S=v.priorityLevel;var pe=Q(v.expirationTime<=Z);if(Z=o.unstable_now(),typeof pe=="function"){v.callback=pe,L(Z),V=!0;break t}v===i(g)&&r(g),L(Z)}else r(g);v=i(g)}if(v!==null)V=!0;else{var ye=i(p);ye!==null&&ee(B,ye.startTime-Z),V=!1}}break e}finally{v=null,S=me,y=!1}V=void 0}}finally{V?W():P=!1}}}var W;if(typeof I=="function")W=function(){I(F)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,z=q.port2;q.port1.onmessage=F,W=function(){z.postMessage(null)}}else W=function(){E(F,0)};function ee(Z,V){b=E(function(){Z(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Z){Z.callback=null},o.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Z?Math.floor(1e3/Z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(Z){switch(S){case 1:case 2:case 3:var V=3;break;default:V=S}var me=S;S=V;try{return Z()}finally{S=me}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(Z,V){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var me=S;S=Z;try{return V()}finally{S=me}},o.unstable_scheduleCallback=function(Z,V,me){var Q=o.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?Q+me:Q):me=Q,Z){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=me+pe,Z={id:_++,callback:V,priorityLevel:Z,startTime:me,expirationTime:pe,sortIndex:-1},me>Q?(Z.sortIndex=me,t(p,Z),i(g)===null&&Z===i(p)&&(w?(D(b),b=-1):w=!0,ee(B,me-Q))):(Z.sortIndex=pe,t(g,Z),A||y||(A=!0,P||(P=!0,W()))),Z},o.unstable_shouldYield=G,o.unstable_wrapCallback=function(Z){var V=S;return function(){var me=S;S=V;try{return Z.apply(this,arguments)}finally{S=me}}}})(Sh)),Sh}var hv;function K1(){return hv||(hv=1,_h.exports=Z1()),_h.exports}var Eh={exports:{}},Vn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function Q1(){if(mv)return Vn;mv=1;var o=km();function t(_){var v="https://react.dev/errors/"+_;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)v+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+_+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function m(_,v,S){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:y==null?null:y===d?d:""+y,children:_,containerInfo:v,implementation:S}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(_,v){if(_==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Vn.browser=function(_){return{$$typeof:f,_reason:_}},Vn.createPortal=function(_,v){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(t(299));return m(_,v,null,S)},Vn.flushSync=function(_){var v=g.T,S=r.p;try{if(g.T=null,r.p=2,_)return _()}finally{g.T=v,r.p=S,r.d.f()}},Vn.preconnect=function(_,v){typeof _=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,r.d.C(_,v))},Vn.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},Vn.preinit=function(_,v){if(typeof _=="string"&&v&&typeof v.as=="string"){var S=v.as,y=p(S,v.crossOrigin),A=typeof v.integrity=="string"?v.integrity:void 0,w=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;S==="style"?r.d.S(_,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:y,integrity:A,fetchPriority:w}):S==="script"&&r.d.X(_,{crossOrigin:y,integrity:A,fetchPriority:w,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Vn.preinitModule=function(_,v){if(typeof _=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var S=p(v.as,v.crossOrigin);r.d.M(_,{crossOrigin:S,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&r.d.M(_)},Vn.preload=function(_,v){if(typeof _=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var S=v.as,y=p(S,v.crossOrigin);r.d.L(_,S,{crossOrigin:y,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Vn.preloadModule=function(_,v){if(typeof _=="string")if(v){var S=p(v.as,v.crossOrigin);r.d.m(_,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:S,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else r.d.m(_)},Vn.requestFormReset=function(_){r.d.r(_)},Vn.unstable_batchedUpdates=function(_,v){return _(v)},Vn.useFormState=function(_,v,S){return g.H.useFormState(_,v,S)},Vn.useFormStatus=function(){return g.H.useHostTransitionStatus()},Vn.version="19.3.1",Vn}var pv;function J1(){if(pv)return Eh.exports;pv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Eh.exports=Q1(),Eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function $1(){if(gv)return dl;gv=1;var o=K1(),t=km(),i=J1();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(s=l.return,s!==null){a=s;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return g(l),e;if(u===s)return g(l),n;u=u.sibling}throw Error(r(188))}if(a.return!==s.return)a=l,s=u;else{for(var x=!1,R=l.child;R;){if(R===a){x=!0,a=l,s=u;break}if(R===s){x=!0,s=l,a=u;break}R=R.sibling}if(!x){for(R=u.child;R;){if(R===a){x=!0,a=u,s=l;break}if(R===s){x=!0,s=u,a=l;break}R=R.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}function v(e,n,a,s,l,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,s,l,u)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&v(e.child,n,a,s,l,u))return!0;e=e.sibling}return!1}function S(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function y(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function A(e){var n=[null,null],a=S(e);return a===null||w(n,e,a.child,{foundSelf:!1}),n}function w(e,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&w(e,n,a.child,s))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(r(559))}}var E=null,D=null;function I(e,n,a){return e===a?!0:e===n?(E=e,!0):!1}function L(e,n,a){return e===a?(D=e,!1):e===n?(D!==null&&(E=e),!0):!1}function B(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function P(e,n,a){for(var s=0,l=e;l;l=a(l))s++;l=0;for(var u=n;u;u=a(u))l++;for(;0<s-l;)e=a(e),s--;for(;0<l-s;)n=a(n),l--;for(;s--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var b=Object.assign,C=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),ye=Symbol.for("react.activity"),je=Symbol.for("react.legacy_hidden"),et=Symbol.for("react.memo_cache_sentinel"),O=Symbol.for("react.view_transition"),ie=Symbol.for("react.recoverable"),J=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var he=Symbol.for("react.client.reference");function Te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===he?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case q:return"Profiler";case W:return"StrictMode";case V:return"Suspense";case me:return"SuspenseList";case ye:return"Activity";case O:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case ee:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case Z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return n=e.displayName||null,n!==null?n:Te(e.type)||"Memo";case pe:n=e._payload,e=e._init;try{return Te(e(n))}catch{}}return null}var Xe=Array.isArray,Se=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ce=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st={pending:!1,data:null,method:null,action:null},$e=[],Et=-1;function yt(e){return{current:e}}function Nt(e){0>Et||(e.current=$e[Et],$e[Et]=null,Et--)}function rt(e,n){Et++,$e[Et]=e.current,e.current=n}var ln=yt(null),Jt=yt(null),cn=yt(null),un=yt(null);function Tn(e,n){switch(rt(cn,n),rt(Jt,e),rt(ln,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?xx(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=xx(n),e=vx(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Nt(ln),rt(ln,e)}function K(){Nt(ln),Nt(Jt),Nt(cn)}function Rn(e){var n=e.memoizedState;n!==null&&(Jr._currentValue=n.memoizedState,rt(un,e)),n=ln.current;var a=vx(n,e.type);n!==a&&(rt(Jt,e),rt(ln,a))}function It(e){Jt.current===e&&(Nt(ln),Nt(Jt)),un.current===e&&(Nt(un),Jr._currentValue=st)}var Gt,ze;function Ht(e){if(Gt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Gt=n&&n[1]||"",ze=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gt+e+ze}var tt=!1;function ot(e,n){if(!e||tt)return"";tt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(Ge){var $=Ge}Reflect.construct(e,[],be)}else{try{be.call()}catch(Ge){$=Ge}be=!1;try{var le=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),be=!0,new e}finally{be&&(le!==void 0?Object.defineProperty(e.prototype,"props",le):delete e.prototype.props)}}}else{try{throw Error()}catch(Ge){$=Ge}(be=e())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(Ge){if(Ge&&$&&typeof Ge.stack=="string")return[Ge.stack,$.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),x=u[0],R=u[1];if(x&&R){var H=x.split(`
`),ne=R.split(`
`);for(l=s=0;s<H.length&&!H[s].includes("DetermineComponentFrameRoot");)s++;for(;l<ne.length&&!ne[l].includes("DetermineComponentFrameRoot");)l++;if(s===H.length||l===ne.length)for(s=H.length-1,l=ne.length-1;1<=s&&0<=l&&H[s]!==ne[l];)l--;for(;1<=s&&0<=l;s--,l--)if(H[s]!==ne[l]){if(s!==1||l!==1)do if(s--,l--,0>l||H[s]!==ne[l]){var ue=`
`+H[s].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),ue}while(1<=s&&0<=l);break}}}finally{tt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ht(a):""}function U(e,n){switch(e.tag){case 26:case 27:case 5:return Ht(e.type);case 16:return Ht("Lazy");case 13:return e.child!==n&&n!==null?Ht("Suspense Fallback"):Ht("Suspense");case 19:return Ht("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return Ht("Activity");case 30:return Ht("ViewTransition");default:return""}}function T(e){try{var n="",a=null;do n+=U(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var oe=Object.prototype.hasOwnProperty,Re=o.unstable_scheduleCallback,Ee=o.unstable_cancelCallback,Ue=o.unstable_shouldYield,Ie=o.unstable_requestPaint,ge=o.unstable_now,_e=o.unstable_getCurrentPriorityLevel,Fe=o.unstable_ImmediatePriority,k=o.unstable_UserBlockingPriority,ve=o.unstable_NormalPriority,xe=o.unstable_LowPriority,we=o.unstable_IdlePriority,Ne=o.log,De=o.unstable_setDisableYieldValue,Ke=null,nt=null;function Ae(e){if(typeof Ne=="function"&&De(e),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(Ke,e)}catch{}}var Ye=Math.clz32?Math.clz32:Pt,ht=Math.log,Be=Math.LN2;function Pt(e){return e>>>=0,e===0?32:31-(ht(e)/Be|0)|0}var sn=256,Yn=262144,Ea=4194304;function ui(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qa(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var l=0,u=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var R=s&134217727;return R!==0?(s=R&~u,s!==0?l=ui(s):(x&=R,x!==0?l=ui(x):a||(a=R&~e,a!==0&&(l=ui(a))))):(R=s&~u,R!==0?l=ui(R):x!==0?l=ui(x):a||(a=s&~e,a!==0&&(l=ui(a)))),l===0?0:n!==0&&n!==l&&(n&u)===0&&(u=l&-l,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:l}function bi(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ls(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var s=31-Ye(a),l=1<<s;n|=e[s],a&=~l}return n}function yi(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ya(){var e=Ea;return Ea<<=1,(Ea&62914560)===0&&(Ea=4194304),e}function Ma(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function zi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xt(e,n,a,s,l,u){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,H=e.expirationTimes,ne=e.hiddenUpdates;for(a=x&~a;0<a;){var ue=31-Ye(a),be=1<<ue;R[ue]=0,H[ue]=-1;var $=ne[ue];if($!==null)for(ne[ue]=null,ue=0;ue<$.length;ue++){var le=$[ue];le!==null&&(le.lane&=-536870913)}a&=~be}s!==0&&ba(e,s,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(x&~n))}function ba(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Ye(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function $i(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Ye(a),l=1<<s;l&n|e[s]&n&&(e[s]|=n),a&=~l}}function ea(e,n){var a=n&-n;return a=(a&42)!==0?1:Us(a),(a&(e.suspendedLanes|n))!==0?0:a}function Us(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ta(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Fs(){var e=Ce.p;return e!==0?e:(e=window.event,e===void 0?32:tv(e.type))}function Is(e,n){var a=Ce.p;try{return Ce.p=e,n()}finally{Ce.p=a}}var _t=Math.random().toString(36).slice(2),mn="__reactFiber$"+_t,$t="__reactProps$"+_t,N="__reactContainer$"+_t,X="__reactEvents$"+_t,de="__reactListeners$"+_t,ae="__reactHandles$"+_t,se="__reactResources$"+_t,Oe="__reactMarker$"+_t,Ve="__reactLoad$"+_t;function Le(e){delete e[mn],delete e[$t],delete e[de],delete e[ae]}function Pe(e){var n;if(n=e[mn])return n;for(var a=e.parentNode;a;){if(n=a[N]||a[mn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Fx(e);e!==null;){if(a=e[mn])return a;e=Fx(e)}return n}e=a,a=e.parentNode}return null}function We(e){if(e=e[mn]||e[N]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function at(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ut(e){var n=e[se];return n||(n=e[se]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function He(e){e[Oe]=!0}function Mt(e){e[Ve]=void 0}var fn=new Set,qt={};function Dt(e,n){dn(e,n),dn(e+"Capture",n)}function dn(e,n){for(qt[e]=n,e=0;e<n.length;e++)fn.add(n[e])}var Qe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dn={},Ut={};function ya(e){return oe.call(Ut,e)?!0:oe.call(Dn,e)?!1:Qe.test(e)?Ut[e]=!0:(Dn[e]=!0,!1)}var ct=!1;function Ps(){var e=ct;return ct=!1,e}function fi(e,n,a){if(ya(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function Ai(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function gt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,s)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ti(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rn(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var l=s.get,u=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(x){a=""+x,u.call(this,x)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pn(e){if(!e._valueTracker){var n=ti(e)?"checked":"value";e._valueTracker=rn(e,n,""+e[n])}}function Ti(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=ti(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}var wl=/[\n"\\]/g;function Ri(e){return e.replace(wl,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Wu(e,n,a,s,l,u,x,R){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Vt(n)):e.value!==""+Vt(n)&&(e.value=""+Vt(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?x==="number"&&e.value==n?qu(e,Vt(e.value)):qu(e,Vt(n)):a!=null?qu(e,Vt(a)):s!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Vt(R):e.removeAttribute("name")}function rp(e,n,a,s,l,u,x,R){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){pn(e);return}a=a!=null?""+Vt(a):"",n=n!=null?""+Vt(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}s=s??l,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=R?e.checked:!!s,e.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),pn(e)}function qu(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function gr(e,n,a,s){if(e=e.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=n.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&s&&(e[a].defaultSelected=!0)}else{for(a=""+Vt(a),n=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,s&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function op(e,n,a){if(n!=null&&(n=""+Vt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Vt(a):""}function lp(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Xe(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Vt(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),pn(e)}function xr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var hE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cp(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||hE.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function up(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="",ct=!0);for(var l in n)s=n[l],n.hasOwnProperty(l)&&a[l]!==s&&(cp(e,l,s),ct=!0)}else for(var u in n)n.hasOwnProperty(u)&&cp(e,u,n[u])}function Yu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dl(e){return pE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function na(){}var Zu=null;function Ku(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vr=null,_r=null;function fp(e){var n=We(e);if(n&&(e=n.stateNode)){var a=e[$t]||null;e:switch(e=n.stateNode,n.type){case"input":if(Wu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ri(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var l=s[$t]||null;if(!l)throw Error(r(90));Wu(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ti(s)}break e;case"textarea":op(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&gr(e,!!a.multiple,n,!1)}}}var Qu=!1;function dp(e,n,a){if(Qu)return e(n,a);Qu=!0;try{var s=e(n);return s}finally{if(Qu=!1,(vr!==null||_r!==null)&&(Dc(),vr&&(n=vr,e=_r,_r=vr=null,fp(n),e)))for(n=0;n<e.length;n++)fp(e[n])}}function bo(e,n){var a=e.stateNode;if(a===null)return null;var s=a[$t]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=!1;if(Aa)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{Ju=!1}var Za=null,$u=null,Ol=null;function hp(){if(Ol)return Ol;var e,n=$u,a=n.length,s,l="value"in Za?Za.value:Za.textContent,u=l.length;for(e=0;e<a&&n[e]===l[e];e++);var x=a-e;for(s=1;s<=x&&n[a-s]===l[u-s];s++);return Ol=l.slice(e,1<s?1-s:void 0)}function Ll(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ul(){return!0}function mp(){return!1}function Zn(e){function n(a,s,l,u,x){this._reactName=a,this._targetInst=l,this.type=s,this.nativeEvent=u,this.target=x,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(u):u[R]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ul:mp,this.isPropagationStopped=mp,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Zn(Ka),Ao=b({},Ka,{view:0,detail:0}),gE=Zn(Ao),ef,tf,To,Il=b({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==To&&(To&&e.type==="mousemove"?(ef=e.screenX-To.screenX,tf=e.screenY-To.screenY):tf=ef=0,To=e),ef)},movementY:function(e){return"movementY"in e?e.movementY:tf}}),pp=Zn(Il),xE=b({},Il,{dataTransfer:0}),vE=Zn(xE),_E=b({},Ao,{relatedTarget:0}),nf=Zn(_E),SE=b({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),EE=Zn(SE),ME=b({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bE=Zn(ME),yE=b({},Ka,{data:0}),gp=Zn(yE),AE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NE(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=RE[e])?!!n[e]:!1}function af(){return NE}var CE=b({},Ao,{key:function(e){if(e.key){var n=AE[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ll(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?TE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(e){return e.type==="keypress"?Ll(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ll(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wE=Zn(CE),DE=b({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xp=Zn(DE),OE=b({},Ka,{submitter:0}),LE=Zn(OE),UE=b({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),FE=Zn(UE),IE=b({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),PE=Zn(IE),BE=b({},Il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zE=Zn(BE),HE=b({},Ka,{newState:0,oldState:0,source:0}),GE=Zn(HE),VE=[9,13,27,32],sf=Aa&&"CompositionEvent"in window,Ro=null;Aa&&"documentMode"in document&&(Ro=document.documentMode);var kE=Aa&&"TextEvent"in window&&!Ro,vp=Aa&&(!sf||Ro&&8<Ro&&11>=Ro),_p=" ",Sp=!1;function Ep(e,n){switch(e){case"keyup":return VE.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sr=!1;function jE(e,n){switch(e){case"compositionend":return Mp(n);case"keypress":return n.which!==32?null:(Sp=!0,_p);case"textInput":return e=n.data,e===_p&&Sp?null:e;default:return null}}function XE(e,n){if(Sr)return e==="compositionend"||!sf&&Ep(e,n)?(e=hp(),Ol=$u=Za=null,Sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vp&&n.locale!=="ko"?null:n.data;default:return null}}var WE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!WE[e.type]:n==="textarea"}function yp(e,n,a,s){vr?_r?_r.push(s):_r=[s]:vr=s,n=Pc(n,"onChange"),0<n.length&&(a=new Fl("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var No=null,Co=null;function qE(e){fx(e,0)}function Pl(e){var n=at(e);if(Ti(n))return e}function Ap(e,n){if(e==="change")return n}var Tp=!1;if(Aa){var rf;if(Aa){var of="oninput"in document;if(!of){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),of=typeof Rp.oninput=="function"}rf=of}else rf=!1;Tp=rf&&(!document.documentMode||9<document.documentMode)}function Np(){No&&(No.detachEvent("onpropertychange",Cp),Co=No=null)}function Cp(e){if(e.propertyName==="value"&&Pl(Co)){var n=[];yp(n,Co,e,Ku(e)),dp(qE,n)}}function YE(e,n,a){e==="focusin"?(Np(),No=n,Co=a,No.attachEvent("onpropertychange",Cp)):e==="focusout"&&Np()}function ZE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pl(Co)}function KE(e,n){if(e==="click")return Pl(n)}function QE(e,n){if(e==="input"||e==="change")return Pl(n)}function JE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var di=typeof Object.is=="function"?Object.is:JE;function wo(e,n){if(di(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var l=a[s];if(!oe.call(n,l)||!di(e[l],n[l]))return!1}return!0}function lf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dp(e,n){var a=wp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=wp(a)}}function Op(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Op(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Lp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=lf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=lf(e.document)}return n}function cf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var $E=Aa&&"documentMode"in document&&11>=document.documentMode,Er=null,uf=null,Do=null,ff=!1;function Up(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ff||Er==null||Er!==lf(s)||(s=Er,"selectionStart"in s&&cf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Do&&wo(Do,s)||(Do=s,s=Pc(uf,"onSelect"),0<s.length&&(n=new Fl("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Er)))}function Bs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Mr={animationend:Bs("Animation","AnimationEnd"),animationiteration:Bs("Animation","AnimationIteration"),animationstart:Bs("Animation","AnimationStart"),transitionrun:Bs("Transition","TransitionRun"),transitionstart:Bs("Transition","TransitionStart"),transitioncancel:Bs("Transition","TransitionCancel"),transitionend:Bs("Transition","TransitionEnd")},df={},Fp={};Aa&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function zs(e){if(df[e])return df[e];if(!Mr[e])return e;var n=Mr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Fp)return df[e]=n[a];return e}var Ip=zs("animationend"),Pp=zs("animationiteration"),Bp=zs("animationstart"),eM=zs("transitionrun"),tM=zs("transitionstart"),nM=zs("transitioncancel"),zp=zs("transitionend"),Hp=new Map,hf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hf.push("scrollEnd");function Hi(e,n){Hp.set(e,n),Dt(n,[e])}var iM=0;function Ta(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=ji.identifierPrefix;var a=iM++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function Gp(e){if(e==null||typeof e=="string")return e;var n=null,a=Vr;if(a!==null)for(var s=0;s<a.length;s++){var l=e[a[s]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??e.default}function Ra(e,n){return e=Gp(e),n=Gp(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ni=[],br=0,mf=0;function zl(){for(var e=br,n=mf=br=0;n<e;){var a=Ni[n];Ni[n++]=null;var s=Ni[n];Ni[n++]=null;var l=Ni[n];Ni[n++]=null;var u=Ni[n];if(Ni[n++]=null,s!==null&&l!==null){var x=s.pending;x===null?l.next=l:(l.next=x.next,x.next=l),s.pending=l}u!==0&&Vp(a,l,u)}}function Hl(e,n,a,s){Ni[br++]=e,Ni[br++]=n,Ni[br++]=a,Ni[br++]=s,mf|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function pf(e,n,a,s){return Hl(e,n,a,s),Gl(e)}function Hs(e,n){return Hl(e,null,null,n),Gl(e)}function Vp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var l=!1,u=e.return;u!==null;)u.childLanes|=a,s=u.alternate,s!==null&&(s.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&n!==null&&(l=31-Ye(a),e=u.hiddenUpdates,s=e[l],s===null?e[l]=[n]:s.push(n),n.lane=a|536870912),u):null}function Gl(e){if(50<$o)throw $o=0,wc=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var yr={};function aM(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,n,a,s){return new aM(e,n,a,s)}function gf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Na(e,n){var a=e.alternate;return a===null?(a=ni(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function kp(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Vl(e,n,a,s,l,u){var x=0;if(s=e,typeof s=="function")gf(s)&&(x=1);else if(typeof s=="string")x=O1(e,a,ln.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(s){case ye:return e=ni(31,a,n,l),e.elementType=ye,e.lanes=u,e;case F:return Gs(a.children,l,u,n);case W:x=8,l|=24;break;case q:return e=ni(12,a,n,l|2),e.elementType=q,e.lanes=u,e;case V:return e=ni(13,a,n,l),e.elementType=V,e.lanes=u,e;case me:return e=ni(19,a,n,l),e.elementType=me,e.lanes=u,e;case je:case O:return e=l|32,e=ni(30,a,n,e),e.elementType=O,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case ee:x=10;break e;case z:x=9;break e;case Z:x=11;break e;case Q:x=14;break e;case pe:x=16,s=null;break e}x=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=ni(x,a,n,l),n.elementType=e,n.type=s,n.lanes=u,n}function Gs(e,n,a,s){return e=ni(7,e,s,n),e.lanes=a,e}function xf(e,n,a){return e=ni(6,e,null,n),e.lanes=a,e}function jp(e){var n=ni(18,null,null,0);return n.stateNode=e,n}function vf(e,n,a){return n=ni(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Xp=new WeakMap;function Ci(e,n){if(typeof e=="object"&&e!==null){var a=Xp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:T(n)},Xp.set(e,n),n)}return{value:e,source:n,stack:T(n)}}var Ar=[],Tr=0,kl=null,Oo=0,wi=[],Di=0,Qa=null,ia=1,aa="";function Ca(e,n){Ar[Tr++]=Oo,Ar[Tr++]=kl,kl=e,Oo=n}function Wp(e,n,a){wi[Di++]=ia,wi[Di++]=aa,wi[Di++]=Qa,Qa=e;var s=ia;e=aa;var l=32-Ye(s)-1;s&=~(1<<l),a+=1;var u=32-Ye(n)+l;if(30<u){var x=l-l%5;u=(s&(1<<x)-1).toString(32),s>>=x,l-=x,ia=1<<32-Ye(n)+l|a<<l|s,aa=u+e}else ia=1<<u|a<<l|s,aa=e}function jl(e){e.return!==null&&(Ca(e,1),Wp(e,1,0))}function _f(e){for(;e===kl;)kl=Ar[--Tr],Ar[Tr]=null,Oo=Ar[--Tr],Ar[Tr]=null;for(;e===Qa;)Qa=wi[--Di],wi[Di]=null,aa=wi[--Di],wi[Di]=null,ia=wi[--Di],wi[Di]=null}function qp(e,n){wi[Di++]=ia,wi[Di++]=aa,wi[Di++]=Qa,ia=n.id,aa=n.overflow,Qa=e}var On=null,nn=null,bt=!1,Ja=null,Oi=!1,Sf=Error(r(519));function $a(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Lo(Ci(n,e)),Sf}function Yp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[mn]=e,n[$t]=s,a){case"dialog":Tt("cancel",n),Tt("close",n);break;case"iframe":case"object":case"embed":Tt("load",n);break;case"video":case"audio":for(a=0;a<tl.length;a++)Tt(tl[a],n);break;case"source":Tt("error",n);break;case"img":case"image":case"link":Tt("error",n),Tt("load",n);break;case"details":Tt("toggle",n);break;case"input":Tt("invalid",n),rp(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Tt("invalid",n);break;case"textarea":Tt("invalid",n),lp(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||px(n.textContent,a)?(s.popover!=null&&(Tt("beforetoggle",n),Tt("toggle",n)),s.onScroll!=null&&Tt("scroll",n),s.onScrollEnd!=null&&Tt("scrollend",n),s.onClick!=null&&(n.onclick=na),n=!0):n=!1,n||$a(e,!0)}function Xl(e){for(On=e.return;On;)switch(On.tag){case 5:case 31:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:On=On.return}}function Rr(e){if(e!==On)return!1;if(!bt)return Xl(e),bt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Kd(e.type,e.memoizedProps)),a=!a),a&&nn&&$a(e),Xl(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));nn=Ux(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));nn=Ux(e)}else n===27?(n=nn,ps(e.type)?(e=sh,sh=null,nn=e):nn=n):nn=On?Ui(e.stateNode.nextSibling):null;return!0}function Vs(){nn=On=null,bt=!1}function Ef(){var e=Ja;return e!==null&&(si===null?si=e:si.push.apply(si,e),Ja=null),e}function Lo(e){Ja===null?Ja=[e]:Ja.push(e)}var Mf=yt(null),ks=null,wa=null;function es(e,n,a){rt(Mf,n._currentValue),n._currentValue=a}function Da(e){e._currentValue=Mf.current,Nt(Mf)}function Wl(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function bf(e,n,a,s){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var x=l.child;u=u.firstContext;e:for(;u!==null;){var R=u;u=l;for(var H=0;H<n.length;H++)if(R.context===n[H]){u.lanes|=a,R=u.alternate,R!==null&&(R.lanes|=a),Wl(u.return,a,e),s||(x=null);break e}u=R.next}}else if(l.tag===18){if(x=l.return,x===null)throw Error(r(341));x.lanes|=a,u=x.alternate,u!==null&&(u.lanes|=a),Wl(x,a,e),x=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,x=l.alternate,x!==null&&(x.lanes|=a),Wl(l.return,a,e),x=l.child,x=x!==null?x.sibling:null):x=l.child;if(x!==null)x.return=l;else for(x=l;x!==null;){if(x===e){x=null;break}if(l=x.sibling,l!==null){l.return=x.return,x=l;break}x=x.return}l=x}}function js(e,n,a,s){e=null;for(var l=n,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var x=l.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var R=l.type;di(l.pendingProps.value,x.value)||(e!==null?e.push(R):e=[R])}}else if(l===un.current){if(x=l.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Jr):e=[Jr])}l=l.return}return e!==null&&bf(n,e,a,s),n.flags|=262144,e!==null}function ql(e){for(e=e.firstContext;e!==null;){if(!di(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xs(e){ks=e,wa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pn(e){return Zp(ks,e)}function Yl(e,n){return ks===null&&Xs(e),Zp(e,n)}function Zp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},wa===null){if(e===null)throw Error(r(308));wa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else wa=wa.next=n;return a}var sM=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},rM=o.unstable_scheduleCallback,oM=o.unstable_NormalPriority,En={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yf(){return{controller:new sM,data:new Map,refCount:0}}function Uo(e){e.refCount--,e.refCount===0&&rM(oM,function(){e.controller.abort()})}function Kp(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var s=n[e];a.indexOf(s)===-1&&a.push(s)}}}var Fo=null;function lM(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Io=null,Af=0,Ws=0,Nr=null;function cM(e,n){if(Io===null){var a=Io=[];Af=0,Ws=Gd(),Nr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Af++,n.then(Qp,Qp),n}function Qp(){if(--Af===0&&(Fo=null,Io!==null)){Nr!==null&&(Nr.status="fulfilled");var e=Io;Io=null,Ws=0,Nr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function uM(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(s.status="rejected",s.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),s}var Jp=Se.S;Se.S=function(e,n){if(jg=ge(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&cM(e,n),Fo!==null)for(var a=Wr;a!==null;)Kp(a,Fo),a=a.next;if(a=e.types,a!==null){for(var s=Wr;s!==null;)Kp(s,a),s=s.next;if(Ws!==0){s=Fo,s===null&&(s=Fo=[]);for(var l=0;l<a.length;l++){var u=a[l];s.indexOf(u)===-1&&s.push(u)}}}Jp!==null&&Jp(e,n)};var qs=yt(null);function Tf(){var e=qs.current;return e!==null?e:tn.pooledCache}function Zl(e,n){n===null?rt(qs,qs.current):rt(qs,n.pool)}function $p(){var e=Tf();return e===null?null:{parent:En._currentValue,pool:e}}var Cr=Error(r(460)),Rf=Error(r(474)),Kl=Error(r(542)),Ql={then:function(){}};function e0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function t0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(na,na),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,i0(e),e===void 0&&!("reason"in n)?Error(r(600)):e;default:if(typeof n.status=="string")n.then(na,na);else{if(e=tn,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=s}},function(s){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,i0(e),e}throw Zs=n,Cr}}function Ys(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Zs=a,Cr):a}}var Zs=null;function n0(){if(Zs===null)throw Error(r(459));var e=Zs;return Zs=null,e}function i0(e){if(e===Cr||e===Kl)throw Error(r(483))}var wr=null,Po=0;function Jl(e){var n=Po;return Po+=1,wr===null&&(wr=[]),t0(wr,e,n)}function ts(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function $l(e,n){throw n.$$typeof===C?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function a0(e){function n(te,Y){if(e){var re=te.deletions;re===null?(te.deletions=[Y],te.flags|=16):re.push(Y)}}function a(te,Y){if(!e)return null;for(;Y!==null;)n(te,Y),Y=Y.sibling;return null}function s(te){for(var Y=new Map;te!==null;)te.key===null?Y.set(te.index,te):Y.set(te.key,te),te=te.sibling;return Y}function l(te,Y){return te=Na(te,Y),te.index=0,te.sibling=null,te}function u(te,Y,re){return te.index=re,e?(re=te.alternate,re!==null?(re=re.index,re<Y?(te.flags|=2,Y):re):(te.flags|=134217730,Y)):(te.flags|=1048576,Y)}function x(te){return e&&te.alternate===null&&(te.flags|=134217730),te}function R(te,Y,re,Me){return Y===null||Y.tag!==6?(Y=xf(re,te.mode,Me),Y.return=te,Y):(Y=l(Y,re),Y.return=te,Y)}function H(te,Y,re,Me){var Ze=re.type;return Ze===F?(te=ue(te,Y,re.props.children,Me,re.key),ts(te,re),te):Y!==null&&(Y.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===pe&&Ys(Ze)===Y.type)?(Y=l(Y,re.props),ts(Y,re),Y.return=te,Y):(Y=Vl(re.type,re.key,re.props,null,te.mode,Me),ts(Y,re),Y.return=te,Y)}function ne(te,Y,re,Me){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==re.containerInfo||Y.stateNode.implementation!==re.implementation?(Y=vf(re,te.mode,Me),Y.return=te,Y):(Y=l(Y,re.children||[]),Y.return=te,Y)}function ue(te,Y,re,Me,Ze){return Y===null||Y.tag!==7?(Y=Gs(re,te.mode,Me,Ze),Y.return=te,Y):(Y=l(Y,re),Y.return=te,Y)}function be(te,Y,re){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=xf(""+Y,te.mode,re),Y.return=te,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case j:return re=Vl(Y.type,Y.key,Y.props,null,te.mode,re),ts(re,Y),re.return=te,re;case G:return Y=vf(Y,te.mode,re),Y.return=te,Y;case pe:return Y=Ys(Y),be(te,Y,re)}if(Xe(Y)||ce(Y))return Y=Gs(Y,te.mode,re,null),Y.return=te,Y;if(typeof Y.then=="function")return be(te,Jl(Y),re);if(Y.$$typeof===ee)return be(te,Yl(te,Y),re);$l(te,Y)}return null}function $(te,Y,re,Me){var Ze=Y!==null?Y.key:null;if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return Ze!==null?null:R(te,Y,""+re,Me);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case j:return re.key===Ze?H(te,Y,re,Me):null;case G:return re.key===Ze?ne(te,Y,re,Me):null;case pe:return re=Ys(re),$(te,Y,re,Me)}if(Xe(re)||ce(re))return Ze!==null?null:ue(te,Y,re,Me,null);if(typeof re.then=="function")return $(te,Y,Jl(re),Me);if(re.$$typeof===ee)return $(te,Y,Yl(te,re),Me);$l(te,re)}return null}function le(te,Y,re,Me,Ze){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return te=te.get(re)||null,R(Y,te,""+Me,Ze);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case j:return te=te.get(Me.key===null?re:Me.key)||null,H(Y,te,Me,Ze);case G:return te=te.get(Me.key===null?re:Me.key)||null,ne(Y,te,Me,Ze);case pe:return Me=Ys(Me),le(te,Y,re,Me,Ze)}if(Xe(Me)||ce(Me))return te=te.get(re)||null,ue(Y,te,Me,Ze,null);if(typeof Me.then=="function")return le(te,Y,re,Jl(Me),Ze);if(Me.$$typeof===ee)return le(te,Y,re,Yl(Y,Me),Ze);$l(Y,Me)}return null}function Ge(te,Y,re,Me){for(var Ze=null,wt=null,it=Y,lt=Y=0,yn=null;it!==null&&lt<re.length;lt++){it.index>lt?(yn=it,it=null):yn=it.sibling;var Ft=$(te,it,re[lt],Me);if(Ft===null){it===null&&(it=yn);break}e&&it&&Ft.alternate===null&&n(te,it),Y=u(Ft,Y,lt),wt===null?Ze=Ft:wt.sibling=Ft,wt=Ft,it=yn}if(lt===re.length)return a(te,it),bt&&Ca(te,lt),Ze;if(it===null){for(;lt<re.length;lt++)it=be(te,re[lt],Me),it!==null&&(Y=u(it,Y,lt),wt===null?Ze=it:wt.sibling=it,wt=it);return bt&&Ca(te,lt),Ze}for(it=s(it);lt<re.length;lt++)yn=le(it,te,lt,re[lt],Me),yn!==null&&(e&&(Ft=yn.alternate,Ft!==null&&it.delete(Ft.key===null?lt:Ft.key)),Y=u(yn,Y,lt),wt===null?Ze=yn:wt.sibling=yn,wt=yn);return e&&it.forEach(function(Ss){return n(te,Ss)}),bt&&Ca(te,lt),Ze}function Je(te,Y,re,Me){if(re==null)throw Error(r(151));for(var Ze=null,wt=null,it=Y,lt=Y=0,yn=null,Ft=re.next();it!==null&&!Ft.done;lt++,Ft=re.next()){it.index>lt?(yn=it,it=null):yn=it.sibling;var Ss=$(te,it,Ft.value,Me);if(Ss===null){it===null&&(it=yn);break}e&&it&&Ss.alternate===null&&n(te,it),Y=u(Ss,Y,lt),wt===null?Ze=Ss:wt.sibling=Ss,wt=Ss,it=yn}if(Ft.done)return a(te,it),bt&&Ca(te,lt),Ze;if(it===null){for(;!Ft.done;lt++,Ft=re.next())Ft=be(te,Ft.value,Me),Ft!==null&&(Y=u(Ft,Y,lt),wt===null?Ze=Ft:wt.sibling=Ft,wt=Ft);return bt&&Ca(te,lt),Ze}for(it=s(it);!Ft.done;lt++,Ft=re.next())Ft=le(it,te,lt,Ft.value,Me),Ft!==null&&(e&&(yn=Ft.alternate,yn!==null&&it.delete(yn.key===null?lt:yn.key)),Y=u(Ft,Y,lt),wt===null?Ze=Ft:wt.sibling=Ft,wt=Ft);return e&&it.forEach(function(j1){return n(te,j1)}),bt&&Ca(te,lt),Ze}function vt(te,Y,re,Me){if(typeof re=="object"&&re!==null&&re.type===F&&re.key===null&&re.props.ref===void 0&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case j:e:{for(var Ze=re.key;Y!==null;){if(Y.key===Ze){if(Ze=re.type,Ze===F){if(Y.tag===7){a(te,Y.sibling),Me=l(Y,re.props.children),ts(Me,re),Me.return=te,te=Me;break e}}else if(Y.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===pe&&Ys(Ze)===Y.type){a(te,Y.sibling),Me=l(Y,re.props),ts(Me,re),Me.return=te,te=Me;break e}a(te,Y);break}else n(te,Y);Y=Y.sibling}re.type===F?(Me=Gs(re.props.children,te.mode,Me,re.key),ts(Me,re),Me.return=te,te=Me):(Me=Vl(re.type,re.key,re.props,null,te.mode,Me),ts(Me,re),Me.return=te,te=Me)}return x(te);case G:e:{for(Ze=re.key;Y!==null;){if(Y.key===Ze)if(Y.tag===4&&Y.stateNode.containerInfo===re.containerInfo&&Y.stateNode.implementation===re.implementation){a(te,Y.sibling),Me=l(Y,re.children||[]),Me.return=te,te=Me;break e}else{a(te,Y);break}else n(te,Y);Y=Y.sibling}Me=vf(re,te.mode,Me),Me.return=te,te=Me}return x(te);case pe:return re=Ys(re),vt(te,Y,re,Me)}if(Xe(re))return Ge(te,Y,re,Me);if(ce(re)){if(Ze=ce(re),typeof Ze!="function")throw Error(r(150));return re=Ze.call(re),Je(te,Y,re,Me)}if(typeof re.then=="function")return vt(te,Y,Jl(re),Me);if(re.$$typeof===ee)return vt(te,Y,Yl(te,re),Me);$l(te,re)}return typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint"?(re=""+re,Y!==null&&Y.tag===6?(a(te,Y.sibling),Me=l(Y,re),Me.return=te,te=Me):(a(te,Y),Me=xf(re,te.mode,Me),Me.return=te,te=Me),x(te)):a(te,Y)}return function(te,Y,re,Me){try{Po=0;var Ze=vt(te,Y,re,Me);return wr=null,Ze}catch(it){if(it===Cr||it===Kl)throw it;var wt=ni(29,it,null,te.mode);return wt.lanes=Me,wt.return=te,wt}finally{}}}var Ks=a0(!0),s0=a0(!1),ns=!1;function Nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function is(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function as(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(kt&2)!==0){var l=s.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),s.pending=n,n=Gl(e),Vp(e,null,a),n}return Hl(e,s,n,a),Gl(e)}function Bo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,$i(e,a)}}function wf(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=x:u=u.next=x,a=a.next}while(a!==null);u===null?l=u=n:u=u.next=n}else l=u=n;a={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Df=!1;function zo(){if(Df){var e=Nr;if(e!==null)throw e}}function Ho(e,n,a,s){Df=!1;var l=e.updateQueue;ns=!1;var u=l.firstBaseUpdate,x=l.lastBaseUpdate,R=l.shared.pending;if(R!==null){l.shared.pending=null;var H=R,ne=H.next;H.next=null,x===null?u=ne:x.next=ne,x=H;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,R=ue.lastBaseUpdate,R!==x&&(R===null?ue.firstBaseUpdate=ne:R.next=ne,ue.lastBaseUpdate=H))}if(u!==null){var be=l.baseState;x=0,ue=ne=H=null,R=u;do{var $=R.lane&-536870913,le=$!==R.lane;if(le?(Ct&$)===$:(s&$)===$){$!==0&&$===Ws&&(Df=!0),ue!==null&&(ue=ue.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ge=e,Je=R;$=n;var vt=a;switch(Je.tag){case 1:if(Ge=Je.payload,typeof Ge=="function"){be=Ge.call(vt,be,$);break e}be=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=Je.payload,$=typeof Ge=="function"?Ge.call(vt,be,$):Ge,$==null)break e;be=b({},be,$);break e;case 2:ns=!0}}$=R.callback,$!==null&&(e.flags|=64,le&&(e.flags|=8192),le=l.callbacks,le===null?l.callbacks=[$]:le.push($))}else le={lane:$,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ue===null?(ne=ue=le,H=be):ue=ue.next=le,x|=$;if(R=R.next,R===null){if(R=l.shared.pending,R===null)break;le=R,R=le.next,le.next=null,l.lastBaseUpdate=le,l.shared.pending=null}}while(!0);ue===null&&(H=be),l.baseState=H,l.firstBaseUpdate=ne,l.lastBaseUpdate=ue,u===null&&(l.shared.lanes=0),fs|=x,e.lanes=x,e.memoizedState=be}}function r0(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function o0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)r0(a[e],n)}var ss=yt(null),ec=yt(0);function l0(e,n){e=Ia,rt(ec,e),rt(ss,n),Ia=e|n.baseLanes}function Of(){rt(ec,Ia),rt(ss,ss.current)}function Lf(){Ia=ec.current,Nt(ss),Nt(ec)}var Bn=yt(null),Xn=null;function rs(e){var n=e.alternate;rt(zn,zn.current&1),rt(Bn,e),Xn===null&&(n===null||ss.current!==null||n.memoizedState!==null)&&(Xn=e)}function Uf(e){rt(zn,zn.current),rt(Bn,e),Xn===null&&(Xn=e)}function c0(e){e.tag===22?(rt(zn,zn.current),rt(Bn,e),Xn===null&&(Xn=e)):os()}function os(){rt(zn,zn.current),rt(Bn,Bn.current)}function hi(e){Nt(Bn),Xn===e&&(Xn=null),Nt(zn)}var zn=yt(0);function Go(e,n){rt(Bn,Bn.current),rt(zn,n)}function Ff(e){Nt(zn),Nt(Bn),Xn===e&&(Xn=null)}function tc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ih(a)||ah(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Oa=0,xt=null,en=null,Mn=null,nc=!1,Dr=!1,Qs=!1,ic=0,Vo=0,Or=null,fM=0;function gn(){throw Error(r(321))}function If(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!di(e[a],n[a]))return!1;return!0}function Pf(e,n,a,s,l,u){return Oa=u,xt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Se.H=e===null||e.memoizedState===null?W0:q0,Qs=!1,u=a(s,l),Qs=!1,Dr&&(u=f0(n,a,s,l)),u0(e),u}function u0(e){Se.H=uc;var n=en!==null&&en.next!==null;if(Oa=0,Mn=en=xt=null,nc=!1,Vo=0,Or=null,n)throw Error(r(300));e===null||bn||(e=e.dependencies,e!==null&&ql(e)&&(bn=!0))}function f0(e,n,a,s){xt=e;var l=0;do{if(Dr&&(Or=null),Vo=0,Dr=!1,25<=l)throw Error(r(301));if(l+=1,Mn=en=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}Se.H=_M,u=n(a,s)}while(Dr);return u}function dM(){var e=Se.H,n=e.useState()[0];return n=typeof n.then=="function"?ko(n):n,e=e.useState()[0],(en!==null?en.memoizedState:null)!==e&&(xt.flags|=1024),n}function Bf(){var e=ic!==0;return ic=0,e}function zf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Hf(e){if(nc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}nc=!1}Oa=0,Mn=en=xt=null,Dr=!1,Vo=ic=0,Or=null}function Kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?xt.memoizedState=Mn=e:Mn=Mn.next=e,Mn}function Sn(){if(en===null){var e=xt.alternate;e=e!==null?e.memoizedState:null}else e=en.next;var n=Mn===null?xt.memoizedState:Mn.next;if(n!==null)Mn=n,en=e;else{if(e===null)throw xt.alternate===null?Error(r(467)):Error(r(310));en=e,e={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},Mn===null?xt.memoizedState=Mn=e:Mn=Mn.next=e}return Mn}function ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(e){var n=Vo;return Vo+=1,Or===null&&(Or=[]),e=t0(Or,e,n),n=xt,(Mn===null?n.memoizedState:Mn.next)===null&&(n=n.alternate,Se.H=n===null||n.memoizedState===null?W0:q0),e}function sc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ko(e);if(e.$$typeof===ie)return;if(e.$$typeof===ee)return Pn(e)}throw Error(r(438,String(e)))}function Gf(e){var n=null,a=xt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=xt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ac(),xt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=et;return n.index++,a}function La(e,n){return typeof n=="function"?n(e):n}function rc(e){var n=Sn();return Vf(n,en,e)}function Vf(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var l=e.baseQueue,u=s.pending;if(u!==null){if(l!==null){var x=l.next;l.next=u.next,u.next=x}n.baseQueue=l=u,s.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{n=l.next;var R=x=null,H=null,ne=n,ue=!1;do{var be=ne.lane&-536870913;if(be!==ne.lane?(Ct&be)===be:(Oa&be)===be){var $=ne.revertLane;if($===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),be===Ws&&(ue=!0);else if((Oa&$)===$){ne=ne.next,$===Ws&&(ue=!0);continue}else be={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(R=H=be,x=u):H=H.next=be,xt.lanes|=$,fs|=$;be=ne.action,Qs&&a(u,be),u=ne.hasEagerState?ne.eagerState:a(u,be)}else $={lane:be,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(R=H=$,x=u):H=H.next=$,xt.lanes|=be,fs|=be;ne=ne.next}while(ne!==null&&ne!==n);if(H===null?x=u:H.next=R,!di(u,e.memoizedState)&&(bn=!0,ue&&(a=Nr,a!==null)))throw a;e.memoizedState=u,e.baseState=x,e.baseQueue=H,s.lastRenderedState=u}return l===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function kf(e){var n=Sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,l=a.pending,u=n.memoizedState;if(l!==null){a.pending=null;var x=l=l.next;do u=e(u,x.action),x=x.next;while(x!==l);di(u,n.memoizedState)||(bn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,s]}function d0(e,n,a){var s=xt,l=Sn(),u=bt;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!di((en||l).memoizedState,a);if(x&&(l.memoizedState=a,bn=!0),l=l.queue,Wf(p0.bind(null,s,l,e),[e]),e=l.getSnapshot!==n||x||Mn!==null&&(Mn.memoizedState.tag&1)!==0,Lr(e?9:8,{destroy:void 0},m0.bind(null,s,l,a,n),null),e){if(s.flags|=2048,tn===null)throw Error(r(349));u||(Oa&127)!==0||h0(s,n,a)}return a}function h0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=xt.updateQueue,n===null?(n=ac(),xt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function m0(e,n,a,s){n.value=a,n.getSnapshot=s,g0(n)&&x0(e)}function p0(e,n,a){return a(function(){g0(n)&&x0(e)})}function g0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!di(e,a)}catch{return!0}}function x0(e){var n=Hs(e,2);n!==null&&ri(n,e,2)}function jf(e){var n=Kn();if(typeof e=="function"){var a=e;if(e=a(),Qs){Ae(!0);try{a()}finally{Ae(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:e},n}function v0(e,n,a,s){return e.baseState=a,Vf(e,en,typeof s=="function"?s:La)}function hM(e,n,a,s,l){if(cc(e))throw Error(r(485));if(e=n.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){u.listeners.push(x)}};Se.T!==null?a(!0):u.isTransition=!1,s(u),a=n.pending,a===null?(u.next=n.pending=u,_0(n,u)):(u.next=a.next,n.pending=a.next=u)}}function _0(e,n){var a=n.action,s=n.payload,l=e.state;if(n.isTransition){var u=Se.T,x={};x.types=u!==null?u.types:null,Se.T=x;try{var R=a(l,s),H=Se.S;H!==null&&H(x,R),S0(e,n,R)}catch(ne){Xf(e,n,ne)}finally{u!==null&&x.types!==null&&(u.types=x.types),Se.T=u}}else try{u=a(l,s),S0(e,n,u)}catch(ne){Xf(e,n,ne)}}function S0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){E0(e,n,s)},function(s){return Xf(e,n,s)}):E0(e,n,a)}function E0(e,n,a){n.status="fulfilled",n.value=a,M0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,_0(e,a)))}function Xf(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,M0(n),n=n.next;while(n!==s)}e.action=null}function M0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function b0(e,n){return n}function y0(e,n){if(bt){var a=tn.formState;if(a!==null){e:{var s=xt;if(bt){if(nn){t:{for(var l=nn,u=Oi;l.nodeType!==8;){if(!u){l=null;break t}if(l=Ui(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){nn=Ui(l.nextSibling),s=l.data==="F!";break e}}$a(s)}s=!1}s&&(n=a[0])}}return a=Kn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:b0,lastRenderedState:n},a.queue=s,a=k0.bind(null,xt,s),s.dispatch=a,s=jf(!1),u=Qf.bind(null,xt,!1,s.queue),s=Kn(),l={state:n,dispatch:null,action:e,pending:null},s.queue=l,a=hM.bind(null,xt,l,u,a),l.dispatch=a,s.memoizedState=e,[n,a,!1]}function A0(e){var n=Sn();return T0(n,en,e)}function T0(e,n,a){if(n=Vf(e,n,b0)[0],e=rc(La)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ko(n)}catch(x){throw x===Cr?Kl:x}else s=n;n=Sn();var l=n.queue,u=l.dispatch;return a!==n.memoizedState&&(xt.flags|=2048,Lr(9,{destroy:void 0},mM.bind(null,l,a),null)),[s,u,e]}function mM(e,n){e.action=n}function R0(e){var n=Sn(),a=en;if(a!==null)return T0(n,a,e);Sn(),n=n.memoizedState,a=Sn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Lr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=xt.updateQueue,n===null&&(n=ac(),xt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function N0(){return Sn().memoizedState}function oc(e,n,a,s){var l=Kn();xt.flags|=e,l.memoizedState=Lr(1|n,{destroy:void 0},a,s===void 0?null:s)}function lc(e,n,a,s){var l=Sn();s=s===void 0?null:s;var u=l.memoizedState.inst;en!==null&&s!==null&&If(s,en.memoizedState.deps)?l.memoizedState=Lr(n,u,a,s):(xt.flags|=e,l.memoizedState=Lr(1|n,u,a,s))}function C0(e,n){oc(8390656,8,e,n)}function Wf(e,n){lc(2048,8,e,n)}function pM(e){xt.flags|=4;var n=xt.updateQueue;if(n===null)n=ac(),xt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function w0(e){var n=Sn().memoizedState;return pM({ref:n,nextImpl:e}),function(){if((kt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function D0(e,n){return lc(4,2,e,n)}function O0(e,n){return lc(4,4,e,n)}function L0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function U0(e,n,a){a=a!=null?a.concat([e]):null,lc(4,4,L0.bind(null,n,e),a)}function qf(){}function F0(e,n){var a=Sn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&If(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function I0(e,n){var a=Sn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&If(n,s[1]))return s[0];if(s=e(),Qs){Ae(!0);try{e()}finally{Ae(!1)}}return a.memoizedState=[s,n],s}function Yf(e,n,a){return a===void 0||(Oa&1073741824)!==0&&(Ct&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Wg(),xt.lanes|=e,fs|=e,a)}function P0(e,n,a,s){return di(a,n)?a:ss.current!==null?(e=Yf(e,a,s),di(e,n)||(bn=!0),e):(Oa&106)===0||(Oa&1073741824)!==0&&(Ct&261930)===0?(bn=!0,e.memoizedState=a):(e=Wg(),xt.lanes|=e,fs|=e,n)}function B0(e,n,a,s,l){var u=Ce.p;Ce.p=u!==0&&8>u?u:8;var x=Se.T,R={};R.types=x!==null?x.types:null,Se.T=R,Qf(e,!1,n,a);try{var H=l(),ne=Se.S;if(ne!==null&&ne(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ue=uM(H,s);jo(e,n,ue,xi(e))}else jo(e,n,s,xi(e))}catch(be){jo(e,n,{then:function(){},status:"rejected",reason:be},xi())}finally{Ce.p=u,x!==null&&R.types!==null&&(x.types=R.types),Se.T=x}}function gM(){}function Zf(e,n,a,s){if(e.tag!==5)throw Error(r(476));var l=z0(e).queue;B0(e,l,n,st,a===null?gM:function(){return H0(e),a(s)})}function z0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:st,baseState:st,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:st},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function H0(e){var n=z0(e);n.next===null&&(n=e.alternate.memoizedState),jo(e,n.next.queue,{},xi())}function Kf(){return Pn(Jr)}function G0(){return Sn().memoizedState}function V0(){return Sn().memoizedState}function xM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=xi();e=is(a);var s=as(n,e,a);s!==null&&(ri(s,n,a),Bo(s,n,a)),n={cache:yf()},e.payload=n;return}n=n.return}}function vM(e,n,a){var s=xi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},cc(e)?j0(n,a):(a=pf(e,n,a,s),a!==null&&(ri(a,e,s),X0(a,n,s)))}function k0(e,n,a){var s=xi();jo(e,n,a,s)}function jo(e,n,a,s){var l={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(cc(e))j0(n,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var x=n.lastRenderedState,R=u(x,a);if(l.hasEagerState=!0,l.eagerState=R,di(R,x))return Hl(e,n,l,0),tn===null&&zl(),!1}catch{}finally{}if(a=pf(e,n,l,s),a!==null)return ri(a,e,s),X0(a,n,s),!0}return!1}function Qf(e,n,a,s){if(s={lane:2,revertLane:Gd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},cc(e)){if(n)throw Error(r(479))}else n=pf(e,a,s,2),n!==null&&ri(n,e,2)}function cc(e){var n=e.alternate;return e===xt||n!==null&&n===xt}function j0(e,n){Dr=nc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function X0(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,$i(e,a)}}var uc={readContext:Pn,use:sc,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useLayoutEffect:gn,useInsertionEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useSyncExternalStore:gn,useId:gn,useHostTransitionStatus:gn,useFormState:gn,useActionState:gn,useOptimistic:gn,useMemoCache:gn,useCacheRefresh:gn,useEffectEvent:gn},W0={readContext:Pn,use:sc,useCallback:function(e,n){return Kn().memoizedState=[e,n===void 0?null:n],e},useContext:Pn,useEffect:C0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,oc(4194308,4,L0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return oc(4194308,4,e,n)},useInsertionEffect:function(e,n){oc(4,2,e,n)},useMemo:function(e,n){var a=Kn();n=n===void 0?null:n;var s=e();if(Qs){Ae(!0);try{e()}finally{Ae(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Kn();if(a!==void 0){var l=a(n);if(Qs){Ae(!0);try{a(n)}finally{Ae(!1)}}}else l=n;return s.memoizedState=s.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},s.queue=e,e=e.dispatch=vM.bind(null,xt,e),[s.memoizedState,e]},useRef:function(e){var n=Kn();return e={current:e},n.memoizedState=e},useState:function(e){e=jf(e);var n=e.queue,a=k0.bind(null,xt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:qf,useDeferredValue:function(e,n){var a=Kn();return Yf(a,e,n)},useTransition:function(){var e=jf(!1);return e=B0.bind(null,xt,e.queue,!0,!1),Kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=xt,l=Kn();if(bt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),tn===null)throw Error(r(349));(Ct&127)!==0||h0(s,n,a)}l.memoizedState=a;var u={value:a,getSnapshot:n};return l.queue=u,C0(p0.bind(null,s,u,e),[e]),s.flags|=2048,Lr(9,{destroy:void 0},m0.bind(null,s,u,a,n),null),a},useId:function(){var e=Kn(),n=tn.identifierPrefix;if(bt){var a=aa,s=ia;a=(s&~(1<<32-Ye(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ic++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=fM++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Kf,useFormState:y0,useActionState:y0,useOptimistic:function(e){var n=Kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Qf.bind(null,xt,!0,a),a.dispatch=n,[e,n]},useMemoCache:Gf,useCacheRefresh:function(){return Kn().memoizedState=xM.bind(null,xt)},useEffectEvent:function(e){var n=Kn(),a={impl:e};return n.memoizedState=a,function(){if((kt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},q0={readContext:Pn,use:sc,useCallback:F0,useContext:Pn,useEffect:Wf,useImperativeHandle:U0,useInsertionEffect:D0,useLayoutEffect:O0,useMemo:I0,useReducer:rc,useRef:N0,useState:function(){return rc(La)},useDebugValue:qf,useDeferredValue:function(e,n){var a=Sn();return P0(a,en.memoizedState,e,n)},useTransition:function(){var e=rc(La)[0],n=Sn().memoizedState;return[typeof e=="boolean"?e:ko(e),n]},useSyncExternalStore:d0,useId:G0,useHostTransitionStatus:Kf,useFormState:A0,useActionState:A0,useOptimistic:function(e,n){var a=Sn();return v0(a,en,e,n)},useMemoCache:Gf,useCacheRefresh:V0,useEffectEvent:w0},_M={readContext:Pn,use:sc,useCallback:F0,useContext:Pn,useEffect:Wf,useImperativeHandle:U0,useInsertionEffect:D0,useLayoutEffect:O0,useMemo:I0,useReducer:kf,useRef:N0,useState:function(){return kf(La)},useDebugValue:qf,useDeferredValue:function(e,n){var a=Sn();return en===null?Yf(a,e,n):P0(a,en.memoizedState,e,n)},useTransition:function(){var e=kf(La)[0],n=Sn().memoizedState;return[typeof e=="boolean"?e:ko(e),n]},useSyncExternalStore:d0,useId:G0,useHostTransitionStatus:Kf,useFormState:R0,useActionState:R0,useOptimistic:function(e,n){var a=Sn();return en!==null?v0(a,en,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Gf,useCacheRefresh:V0,useEffectEvent:w0};function Jf(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:b({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var $f={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=xi(),l=is(s);l.payload=n,a!=null&&(l.callback=a),n=as(e,l,s),n!==null&&(ri(n,e,s),Bo(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=xi(),l=is(s);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=as(e,l,s),n!==null&&(ri(n,e,s),Bo(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=xi(),s=is(a);s.tag=2,n!=null&&(s.callback=n),n=as(e,s,a),n!==null&&(ri(n,e,a),Bo(n,e,a))}};function Y0(e,n,a,s,l,u,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,u,x):n.prototype&&n.prototype.isPureReactComponent?!wo(a,s)||!wo(l,u):!0}function Z0(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&$f.enqueueReplaceState(n,n.state,null)}function Js(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=b({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function K0(e){Bl(e)}function Q0(e){console.error(e)}function J0(e){Bl(e)}function fc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function $0(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function ed(e,n,a){return a=is(a),a.tag=3,a.payload={element:null},a.callback=function(){fc(e,n)},a}function eg(e){return e=is(e),e.tag=3,e}function tg(e,n,a,s){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=s.value;e.payload=function(){return l(u)},e.callback=function(){$0(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){$0(n,a,s),typeof l!="function"&&(ds===null?ds=new Set([this]):ds.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})})}function SM(e,n,a,s,l){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&js(n,a,l,!0),a=Bn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Xn===null?Oc():a.alternate===null&&xn===0&&(xn=3),a.flags&=-257,a.flags|=65536,a.lanes=l,s===Ql?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Bd(e,s,l)),!1;case 22:return a.flags|=65536,s===Ql?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Bd(e,s,l)),!1}throw Error(r(435,a.tag))}return Bd(e,s,l),Oc(),!1}if(bt)return n=Bn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,s!==Sf&&(e=Error(r(422),{cause:s}),Lo(Ci(e,a)))):(s!==Sf&&(n=Error(r(423),{cause:s}),Lo(Ci(n,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,s=Ci(s,a),l=ed(e.stateNode,s,l),wf(e,l),xn!==4&&(xn=2)),!1;var u=Error(r(520),{cause:s});if(u=Ci(u,a),Jo===null?Jo=[u]:Jo.push(u),xn!==4&&(xn=2),n===null)return!0;s=Ci(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=ed(a.stateNode,s,e),wf(a,e),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ds===null||!ds.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=eg(l),tg(l,e,a,s),wf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var td=Error(r(461)),bn=!1;function Nn(e,n,a,s){n.child=e===null?s0(n,null,a,s):Ks(n,e.child,a,s)}function ng(e,n,a,s,l){a=a.render;var u=n.ref;if("ref"in s){var x={};for(var R in s)R!=="ref"&&(x[R]=s[R])}else x=s;return Xs(n),s=Pf(e,n,a,x,u,l),R=Bf(),e!==null&&!bn?(zf(e,n,l),Ua(e,n,l)):(bt&&R&&jl(n),n.flags|=1,Nn(e,n,s,l),n.child)}function ig(e,n,a,s,l){if(e===null){var u=a.type;return typeof u=="function"&&!gf(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,ag(e,n,u,s,l)):(e=Vl(a.type,null,s,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!cd(e,l)){var x=u.memoizedProps;if(a=a.compare,a=a!==null?a:wo,a(x,s)&&e.ref===n.ref)return Ua(e,n,l)}return n.flags|=1,e=Na(u,s),e.ref=n.ref,e.return=n,n.child=e}function ag(e,n,a,s,l){if(e!==null){var u=e.memoizedProps;if(wo(u,s)&&e.ref===n.ref)if(bn=!1,n.pendingProps=s=u,cd(e,l))(e.flags&131072)!==0&&(bn=!0);else return n.lanes=e.lanes,Ua(e,n,l)}return nd(e,n,a,s,l)}function sg(e,n,a,s){var l=s.children,u=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(s=n.child=e.child,l=0;s!==null;)l=l|s.lanes|s.childLanes,s=s.sibling;s=l&~u}else s=0,n.child=null;return rg(e,n,u,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zl(n,u!==null?u.cachePool:null),u!==null?l0(n,u):Of(),c0(n);else return s=n.lanes=536870912,rg(e,n,u!==null?u.baseLanes|a:a,a,s)}else u!==null?(Zl(n,u.cachePool),l0(n,u),os(),n.memoizedState=null):(e!==null&&Zl(n,null),Of(),os());return Nn(e,n,l,a),n.child}function Xo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function rg(e,n,a,s,l){var u=Tf();return u=u===null?null:{parent:En._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Zl(n,null),Of(),c0(n),e!==null&&js(e,n,s,!0),n.childLanes=l,null}function dc(e,n){return n=hc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function og(e,n,a){return Ks(n,e.child,null,a),e=dc(n,n.pendingProps),e.flags|=2,hi(n),n.memoizedState=null,e}function EM(e,n,a){var s=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(bt){if(s.mode==="hidden")return e=dc(n,s),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Xo(null,e);if(Uf(n),(e=nn)?(e=Lx(e,Oi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:ia,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},a=jp(e),a.return=n,n.child=a,On=n,nn=null)):e=null,e===null)throw $a(n);return n.lanes=536870912,null}return dc(n,s)}var u=e.memoizedState;if(u!==null){var x=u.dehydrated;if(Uf(n),l)if(n.flags&256)n.flags&=-257,n=og(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(bn||js(e,n,a,!1),l=(a&e.childLanes)!==0,bn||l){if(ss.current===null){if(s=tn,s!==null&&(x=ea(s,a),x!==0&&x!==u.retryLane))throw u.retryLane=x,Hs(e,x),ri(s,e,x),td;Oc()}n=og(e,n,a)}else e=u.treeContext,nn=Ui(x.nextSibling),On=n,bt=!0,Ja=null,Oi=!1,e!==null&&qp(n,e),n=dc(n,s),n.flags|=134221824;return n}return e=Na(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ur(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function nd(e,n,a,s,l){return Xs(n),a=Pf(e,n,a,s,void 0,l),s=Bf(),e!==null&&!bn?(zf(e,n,l),Ua(e,n,l)):(bt&&s&&jl(n),n.flags|=1,Nn(e,n,a,l),n.child)}function lg(e,n,a,s,l,u){return Xs(n),n.updateQueue=null,a=f0(n,s,a,l),u0(e),s=Bf(),e!==null&&!bn?(zf(e,n,u),Ua(e,n,u)):(bt&&s&&jl(n),n.flags|=1,Nn(e,n,a,u),n.child)}function cg(e,n,a,s,l){if(Xs(n),n.stateNode===null){var u=yr,x=a.contextType;typeof x=="object"&&x!==null&&(u=Pn(x)),u=new a(s,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=$f,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=s,u.state=n.memoizedState,u.refs={},Nf(n),x=a.contextType,u.context=typeof x=="object"&&x!==null?Pn(x):yr,u.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Jf(n,a,x,s),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(x=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),x!==u.state&&$f.enqueueReplaceState(u,u.state,null),Ho(n,s,u,l),zo(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){u=n.stateNode;var R=n.memoizedProps,H=Js(a,R);u.props=H;var ne=u.context,ue=a.contextType;x=yr,typeof ue=="object"&&ue!==null&&(x=Pn(ue));var be=a.getDerivedStateFromProps;ue=typeof be=="function"||typeof u.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ue||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(R||ne!==x)&&Z0(n,u,s,x),ns=!1;var $=n.memoizedState;u.state=$,Ho(n,s,u,l),zo(),ne=n.memoizedState,R||$!==ne||ns?(typeof be=="function"&&(Jf(n,a,be,s),ne=n.memoizedState),(H=ns||Y0(n,a,H,s,$,ne,x))?(ue||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=ne),u.props=s,u.state=ne,u.context=x,s=H):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{u=n.stateNode,Cf(e,n),x=n.memoizedProps,ue=Js(a,x),u.props=ue,be=n.pendingProps,$=u.context,ne=a.contextType,H=yr,typeof ne=="object"&&ne!==null&&(H=Pn(ne)),R=a.getDerivedStateFromProps,(ne=typeof R=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(x!==be||$!==H)&&Z0(n,u,s,H),ns=!1,$=n.memoizedState,u.state=$,Ho(n,s,u,l),zo();var le=n.memoizedState;x!==be||$!==le||ns||e!==null&&e.dependencies!==null&&ql(e.dependencies)?(typeof R=="function"&&(Jf(n,a,R,s),le=n.memoizedState),(ue=ns||Y0(n,a,ue,s,$,le,H)||e!==null&&e.dependencies!==null&&ql(e.dependencies))?(ne||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,le,H),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,le,H)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=le),u.props=s,u.state=le,u.context=H,s=ue):(typeof u.componentDidUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),s=!1)}return u=s,Ur(e,n),s=(n.flags&128)!==0,u||s?(u=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,e!==null&&s?(n.child=Ks(n,e.child,null,l),n.child=Ks(n,null,a,l)):Nn(e,n,a,l),n.memoizedState=u.state,e=n.child):e=Ua(e,n,l),e}function ug(e,n,a,s){return Vs(),n.flags|=256,Nn(e,n,a,s),n.child}var id={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ad(e){return{baseLanes:e,cachePool:$p()}}function sd(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=gi),e}function fg(e,n,a){var s=n.pendingProps,l=!1,u=(n.flags&128)!==0,x;if((x=u)||(x=e!==null&&e.memoizedState===null?!1:(zn.current&2)!==0),x&&(l=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(bt){if(l?rs(n):os(),(e=nn)?(e=Lx(e,Oi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:ia,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},a=jp(e),a.return=n,n.child=a,On=n,nn=null)):e=null,e===null)throw $a(n);return ah(e)?n.lanes=32:n.lanes=536870912,null}return u=s.children,s=s.fallback,l?(os(),l=n.mode,u=hc({mode:"hidden",children:u},l),s=Gs(s,l,a,null),u.return=n,s.return=n,u.sibling=s,n.child=u,s=n.child,s.memoizedState=ad(a),s.childLanes=sd(e,x,a),n.memoizedState=id,Xo(null,s)):(rs(n),rd(n,u))}var R=e.memoizedState;if(R!==null){var H=R.dehydrated;if(H!==null)return MM(e,n,u,x,s,H,R,a)}return l?(os(),l=s.fallback,u=n.mode,R=e.child,H=R.sibling,s=Na(R,{mode:"hidden",children:s.children}),s.subtreeFlags=R.subtreeFlags&1206910976,H!==null?l=Na(H,l):(l=Gs(l,u,a,null),l.flags|=2),l.return=n,s.return=n,s.sibling=l,n.child=s,Xo(null,s),s=n.child,l=e.child.memoizedState,l===null?l=ad(a):(u=l.cachePool,u!==null?(R=En._currentValue,u=u.parent!==R?{parent:R,pool:R}:u):u=$p(),l={baseLanes:l.baseLanes|a,cachePool:u}),s.memoizedState=l,s.childLanes=sd(e,x,a),n.memoizedState=id,Xo(e.child,s)):(rs(n),a=e.child,e=a.sibling,a=Na(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function rd(e,n){return n=hc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function hc(e,n){return e=ni(22,e,null,n),e.lanes=0,e}function mc(e,n,a){return Ks(n,e.child,null,a),e=rd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function MM(e,n,a,s,l,u,x,R){if(a)return n.flags&256?(rs(n),n.flags&=-257,mc(e,n,R)):n.memoizedState!==null?(os(),n.child=e.child,n.flags|=128,null):(os(),u=l.fallback,x=n.mode,l=hc({mode:"visible",children:l.children},x),u=Gs(u,x,R,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,Ks(n,e.child,null,R),l=n.child,l.memoizedState=ad(R),l.childLanes=sd(e,s,R),n.memoizedState=id,Xo(null,l));if(rs(n),ah(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var H=s.dgst;return s=H,s!==""&&(l=Error(r(419)),l.stack="",l.digest=s,Lo({value:l,source:null,stack:null})),mc(e,n,R)}if(bn||js(e,n,R,!1),s=(R&e.childLanes)!==0,bn||s){if(ss.current!==null)return mc(e,n,R);if(s=tn,s!==null&&(l=ea(s,R),l!==0&&l!==x.retryLane))throw x.retryLane=l,Hs(e,l),ri(s,e,l),td;return ih(u)||Oc(),mc(e,n,R)}return ih(u)?(n.flags|=192,n.child=e.child,null):(e=x.treeContext,nn=Ui(u.nextSibling),On=n,bt=!0,Ja=null,Oi=!1,e!==null&&qp(n,e),n=rd(n,l.children),n.flags|=134221824,n)}function dg(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Wl(e.return,n,a)}function hg(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&tc(a)===null&&(n=e),e=e.sibling}return n}function pc(e,n,a,s,l,u){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:l,treeForkCount:u}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=s,x.tail=a,x.tailMode=l,x.treeForkCount=u)}function od(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function ld(e,n,a){var s=n.pendingProps,l=s.revealOrder,u=s.tail;s=s.children;var x=zn.current;if(n.flags&128)return Go(n,x),null;var R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,Go(n,x),l==="backwards"&&e!==null?(od(e),Nn(e,n,s,a),od(e)):Nn(e,n,s,a),s=bt?Oo:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dg(e,a,n);else if(e.tag===19)dg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":a=hg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,od(n)),pc(n,!0,l,null,u,s);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&tc(e)===null){n.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}pc(n,!0,a,null,u,s);break;case"together":pc(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=hg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),pc(n,!1,l,a,u,s)}return n.child}function mg(e,n,a){var s=n.pendingProps;return es(n,n.type,s.value),Nn(e,n,s.children,a),n.child}function Ua(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),fs|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(js(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Na(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Na(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function cd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ql(e)))}function bM(e,n,a){switch(n.tag){case 3:Tn(n,n.stateNode.containerInfo),es(n,En,e.memoizedState.cache),Vs();break;case 27:case 5:Rn(n);break;case 4:Tn(n,n.stateNode.containerInfo);break;case 10:es(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return rs(n),n.flags|=128,null;s=js(e,n,a,!1);var l=n.child.childLanes;return s||(a&l)!==0?fg(e,n,a):(rs(n),e=Ua(e,n,a),e!==null?e.sibling:null)}rs(n);break;case 19:if(n.flags&128)return ld(e,n,a);if(l=(e.flags&128)!==0,s=(a&n.childLanes)!==0,s||(js(e,n,a,!1),s=(a&n.childLanes)!==0),l){if(s)return ld(e,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Go(n,zn.current),s)break;return null;case 22:return n.lanes=0,sg(e,n,a,n.pendingProps);case 24:es(n,En,e.memoizedState.cache)}return Ua(e,n,a)}function pg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)bn=!0;else{if(!cd(e,a)&&(n.flags&128)===0)return bn=!1,bM(e,n,a);bn=(e.flags&131072)!==0}else bn=!1,bt&&(n.flags&1048576)!==0&&Wp(n,Oo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=Ys(n.elementType),n.type=e,typeof e=="function")gf(e)?(s=Js(e,s),n.tag=1,n=cg(null,n,e,s,a)):(n.tag=0,n=nd(null,n,e,s,a));else{if(e!=null){var l=e.$$typeof;if(l===Z){n.tag=11,n=ng(null,n,e,s,a);break e}else if(l===Q){n.tag=14,n=ig(null,n,e,s,a);break e}else if(l===ee){n.tag=10,n.type=e,n=mg(null,n,a);break e}}throw n=Te(e)||e,Error(r(306,n,""))}}return n;case 0:return nd(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,l=Js(s,n.pendingProps),cg(e,n,s,l,a);case 3:e:{if(Tn(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var u=n.memoizedState;l=u.element,Cf(e,n),Ho(n,s,null,a);var x=n.memoizedState;if(s=x.cache,es(n,En,s),s!==u.cache&&bf(n,[En],a,!0),zo(),s=x.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=ug(e,n,s,a);break e}else if(s!==l){l=Ci(Error(r(424)),n),Lo(l),n=ug(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nn=Ui(e.firstChild),On=n,bt=!0,Ja=null,Oi=!0,a=s0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Vs(),s===l){n=Ua(e,n,a);break e}Nn(e,n,s,a)}n=n.child}return n;case 26:return Ur(e,n),e===null?(a=Hx(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(n.stateNode=_x(n.type,n.pendingProps,cn.current,n)):n.memoizedState=Hx(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Rn(n),e===null&&bt&&(s=n.stateNode=Ix(n.type,n.pendingProps,cn.current),On=n,Oi=!0,l=nn,ps(n.type)?(sh=l,nn=Ui(s.firstChild)):nn=l),Nn(e,n,n.pendingProps.children,a),Ur(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&bt&&((l=s=nn)&&(s=x1(s,n.type,n.pendingProps,Oi),s!==null?(n.stateNode=s,On=n,nn=Ui(s.firstChild),Oi=!1,l=!0):l=!1),l||$a(n)),Rn(n),l=n.type,u=n.pendingProps,x=e!==null?e.memoizedProps:null,s=u.children,Kd(l,u)?s=null:x!==null&&Kd(l,x)&&(n.flags|=32),n.memoizedState!==null&&(l=Pf(e,n,dM,null,null,a),Jr._currentValue=l),Ur(e,n),Nn(e,n,s,a),n.child;case 6:return e===null&&bt&&((e=a=nn)&&(a=v1(a,n.pendingProps,Oi),a!==null?(n.stateNode=a,On=n,nn=null,e=!0):e=!1),e||$a(n)),null;case 13:return fg(e,n,a);case 4:return Tn(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Ks(n,null,s,a):Nn(e,n,s,a),n.child;case 11:return ng(e,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Ur(e,n),Nn(e,n,s,a),n.child;case 8:return Nn(e,n,n.pendingProps.children,a),n.child;case 12:return Nn(e,n,n.pendingProps.children,a),n.child;case 10:return mg(e,n,a);case 9:return l=n.type._context,s=n.pendingProps.children,Xs(n),l=Pn(l),s=s(l),n.flags|=1,Nn(e,n,s,a),n.child;case 14:return ig(e,n,n.type,n.pendingProps,a);case 15:return ag(e,n,n.type,n.pendingProps,a);case 19:return ld(e,n,a);case 31:return EM(e,n,a);case 22:return sg(e,n,a,n.pendingProps);case 24:return Xs(n),s=Pn(En),e===null?(l=Tf(),l===null&&(l=tn,u=yf(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),n.memoizedState={parent:s,cache:l},Nf(n),es(n,En,l)):((e.lanes&a)!==0&&(Cf(e,n),Ho(n,null,null,a),zo()),l=e.memoizedState,u=n.memoizedState,l.parent!==s?(l={parent:s,cache:s},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),es(n,En,s)):(s=u.cache,es(n,En,s),s!==l.cache&&bf(n,[En],a,!0))),Nn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=e===null?18882560:18874368:bt&&jl(n),e!==null&&e.memoizedProps.name!==s.name?n.flags|=4194816:Ur(e,n),Nn(e,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Fa(e){e.flags|=4}function ud(e,n,a,s,l){var u;if((u=(e.mode&32)!==0)&&(u=a===null?jx(n,s):jx(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),u){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Kg())e.flags|=8192;else throw Zs=Ql,Rf}else e.flags&=-16777217}function gg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Xx(n))if(Kg())e.flags|=8192;else throw Zs=Ql,Rf}function gc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ya():536870912,e.lanes|=n,zr|=n)}function Wo(e,n){if(!bt)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function an(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags&1206910976,s|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function yM(e,n,a){var s=n.pendingProps;switch(_f(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Da(En),K(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Rr(n)?Fa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ef())),an(n),null;case 26:var l=n.type,u=n.memoizedState;return e===null?(Fa(n),u!==null?(an(n),gg(n,u)):(an(n),ud(n,l,null,s,a))):u?u!==e.memoizedState?(Fa(n),an(n),gg(n,u)):(an(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Fa(n),an(n),ud(n,l,e,s,a)),null;case 27:if(It(n),a=cn.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Fa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return an(n),n.subtreeFlags&=-33554433,null}e=ln.current,Rr(n)?Yp(n):(e=Ix(l,s,a),n.stateNode=e,Fa(n))}return an(n),n.subtreeFlags&=-33554433,null;case 5:if(It(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Fa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return an(n),n.subtreeFlags&=-33554433,null}if(u=ln.current,Rr(n))Yp(n);else{var x=il(cn.current);switch(u){case 1:u=x.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=x.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=x.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=x.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=x.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?x.createElement("select",{is:s.is}):x.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?x.createElement(l,{is:s.is}):x.createElement(l)}}u[mn]=n,u[$t]=s;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)u.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=u;e:switch(Gn(u,l,s),l){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Fa(n)}}return an(n),n.subtreeFlags&=-33554433,ud(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Fa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=cn.current,Rr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,l=On,l!==null)switch(l.tag){case 27:case 5:s=l.memoizedProps}e[mn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||px(e.nodeValue,a)),e||$a(n,!0)}else e=il(e).createTextNode(s),e[mn]=n,n.stateNode=e}return an(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Rr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[mn]=n}else Vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),e=!1}else a=Ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(hi(n),n):(hi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return an(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Rr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[mn]=n}else Vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),l=!1}else l=Ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(hi(n),n):(hi(n),null)}return hi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,l=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(l=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==l&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),gc(n,n.updateQueue),an(n),null);case 4:return K(),e===null&&Xd(n.stateNode.containerInfo),n.flags|=67108864,an(n),null;case 10:return Da(n.type),an(n),null;case 19:if(Ff(n),s=n.memoizedState,s===null)return an(n),null;if(l=(n.flags&128)!==0,u=s.rendering,u===null)if(l)Wo(s,!1);else{if(xn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(u=tc(e),u!==null){for(n.flags|=128,Wo(s,!1),e=u.updateQueue,n.updateQueue=e,gc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)kp(a,e),a=a.sibling;return Go(n,zn.current&1|2),bt&&Ca(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&ge()>Nc&&(n.flags|=128,l=!0,Wo(s,!1),n.lanes=4194304)}else{if(!l)if(e=tc(u),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,gc(n,e),Wo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!u.alternate&&!bt)return an(n),null}else 2*ge()-s.renderingStartTime>Nc&&a!==536870912&&(n.flags|=128,l=!0,Wo(s,!1),n.lanes=4194304);s.isBackwards?(u.sibling=n.child,n.child=u):(e=s.last,e!==null?e.sibling=u:n.child=u,s.last=u)}if(s.tail!==null){e=s.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ge(),e.sibling=null,u=zn.current,u=l?u&1|2:u&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||bt?Go(n,u):(a=u,rt(Bn,n),rt(zn,a),Xn===null&&(Xn=n)),bt&&Ca(n,s.treeForkCount),e}return an(n),null;case 22:case 23:return hi(n),Lf(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),a=n.updateQueue,a!==null&&gc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&Nt(qs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Da(En),an(n),null;case 25:return null;case 30:return n.flags|=33554432,an(n),null}throw Error(r(156,n.tag))}function AM(e,n){switch(_f(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Da(En),K(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return It(n),null;case 31:if(n.memoizedState!==null){if(hi(n),n.alternate===null)throw Error(r(340));Vs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(hi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Vs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ff(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return K(),null;case 10:return Da(n.type),null;case 22:case 23:return hi(n),Lf(),e!==null&&Nt(qs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Da(En),null;case 25:return null;default:return null}}function xg(e,n){switch(_f(n),n.tag){case 3:Da(En),K();break;case 26:case 27:case 5:It(n);break;case 4:K();break;case 31:n.memoizedState!==null&&hi(n);break;case 13:hi(n);break;case 19:Ff(n);break;case 10:Da(n.type);break;case 22:case 23:hi(n),Lf(),e!==null&&Nt(qs);break;case 24:Da(En)}}function qo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var l=s.next;a=l;do{if((a.tag&e)===e){s=void 0;var u=a.create,x=a.inst;s=u(),x.destroy=s}a=a.next}while(a!==l)}}catch(R){Zt(n,n.return,R)}}function ls(e,n,a){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&e)===e){var x=s.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,l=n;var H=a,ne=R;try{ne()}catch(ue){Zt(l,H,ue)}}}s=s.next}while(s!==u)}}catch(ue){Zt(n,n.return,ue)}}function vg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{o0(n,a)}catch(s){Zt(e,e.return,s)}}}function _g(e,n,a){a.props=Js(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Zt(e,n,s)}}function sa(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:var l=e.stateNode,u=Ta(e.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=Tx(u)),s=l.ref;break;case 7:if(e.stateNode===null){var x=new vi(e);v(e.child,!1,p1,x,void 0,void 0),e.stateNode=x}s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(R){Zt(e,n,R)}}function Hn(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(l){Zt(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Zt(e,n,l)}else a.current=null}function xc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Ox(e.stateNode,n[a])}function Sg(e){for(var n=e.return;n!==null&&(dd(n)&&Ox(e.stateNode,n.stateNode),!fd(n));)n=n.return}function Yo(e){for(var n=e.return;n!==null&&(dd(n)&&g1(e.stateNode,n.stateNode),!fd(n));)n=n.return}function fd(e){return e.tag===5||e.tag===3||e.tag===27}function dd(e){return e&&e.tag===7&&e.stateNode!==null}function hd(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(l){Zt(e,e.return,l)}}function md(e,n,a){try{var s=e.stateNode;QM(s,e.type,a,n),s[$t]=n}catch(l){Zt(e,e.return,l)}}function Eg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ps(e.type)||e.tag===4}function pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Eg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ps(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gd(e,n,a,s){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=na)),xc(e,s),ct=!0;else if(l!==4&&(l===27&&(xc(e,s),s=null,ps(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(gd(e,n,a,s),e=e.sibling;e!==null;)gd(e,n,a,s),e=e.sibling}function vc(e,n,a,s){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?a.insertBefore(l,n):a.appendChild(l),xc(e,s),ct=!0;else if(l!==4&&(l===27&&(xc(e,s),s=null,ps(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(vc(e,n,a,s),e=e.sibling;e!==null;)vc(e,n,a,s),e=e.sibling}function Mg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Gn(n,s,a),n[mn]=e,n[$t]=a}catch(u){Zt(e,e.return,u)}}var _c=!1,mi=null;function bg(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(_c=!0)}var ra=null;function yg(){var e=ra;return ra=null,e}var ii=0;function Fr(e,n,a,s,l){return ii=0,Ag(e.child,n,a,s,l)}function Ag(e,n,a,s,l){for(var u=!1;e!==null;){if(e.tag===5){var x=e.stateNode;if(s!==null){var R=$d(x);s.push(R),R.view&&(u=!0)}else u||$d(x).view&&(u=!0);_c=!0,yx(x,ii===0?n:n+"_"+ii,a),ii++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||Ag(e.child,n,a,s,l)&&(u=!0));e=e.sibling}return u}function oa(e,n){for(;e!==null;)e.tag===5?Ax(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||oa(e.child,n)),e=e.sibling}function Sc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Sc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=Ra(n.default,n.share),n!=="none"&&(Fr(e,a,n,null,!1)||oa(e.child,!1))}e=e.sibling}}function xd(e,n){if(e.tag===30){var a=e.stateNode,s=e.memoizedProps,l=Ta(s,a),u=Ra(s.default,a.paired?s.share:s.enter);u!=="none"?Fr(e,l,u,null,!1)?(Sc(e),a.paired||n||kr(e,s.onEnter)):oa(e.child,!1):Sc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)xd(e,n),e=e.sibling;else Sc(e)}function vd(e){if(mi!==null&&mi.size!==0){var n=mi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var l=n.get(s);if(l!==void 0){var u=Ra(a.default,a.share);if(u!=="none"&&(Fr(e,s,u,null,!1)?(u=e.stateNode,l.paired=u,u.paired=l,kr(e,a.onShare)):oa(e.child,!1)),n.delete(s),n.size===0)break}}}vd(e)}e=e.sibling}}}function _d(e){if(e.tag===30){var n=e.memoizedProps,a=Ta(n,e.stateNode),s=mi!==null?mi.get(a):void 0,l=Ra(n.default,s!==void 0?n.share:n.exit);l!=="none"&&(Fr(e,a,l,null,!1)?s!==void 0?(l=e.stateNode,s.paired=l,l.paired=s,mi.delete(a),kr(e,n.onShare)):kr(e,n.onExit):oa(e.child,!1)),mi!==null&&vd(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)_d(e),e=e.sibling;else mi!==null&&vd(e)}function Tg(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=Ta(n,e.stateNode);n=Ra(n.default,n.update),e.flags&=-5,n!=="none"&&Fr(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Tg(e);e=e.sibling}}function Sd(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,oa(e.child,!1))}Sd(e)}e=e.sibling}}function Ec(e){if(e.tag===30)e.stateNode.paired=null,oa(e.child,!1),Sd(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ec(e),e=e.sibling;else Sd(e)}function Rg(e){for(e=e.child;e!==null;)e.tag===30?oa(e.child,!1):(e.subtreeFlags&33554432)!==0&&Rg(e),e=e.sibling}function Ed(e,n,a,s,l,u,x){for(var R=!1;n!==null;){if(n.tag===5){var H=n.stateNode;if(u!==null&&ii<u.length){var ne=u[ii],ue=$d(H);(ne.view||ue.view)&&(R=!0);var be;if(be=(e.flags&4)===0)if(ue.clip)be=!0;else{be=ne.rect;var $=ue.rect;be=be.y!==$.y||be.x!==$.x||be.height!==$.height||be.width!==$.width}be&&(e.flags|=4),ue.abs?ue=!ne.abs:(ne=ne.rect,ue=ue.rect,ue=ne.height!==ue.height||ne.width!==ue.width),ue&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&yx(H,ii===0?a:a+"_"+ii,l),R&&(e.flags&4)!==0||(ra===null&&(ra=[]),ra.push(H,ii===0?s:s+"_"+ii,n.memoizedProps)),ii++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&x?e.flags|=n.flags&32:Ed(e,n.child,a,s,l,u,x)&&(R=!0));n=n.sibling}return R}function Ng(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,s=e.stateNode,l=Ta(a,s),u=Ra(a.default,a.update),x;x=e.memoizedState,e.memoizedState=null,s=e;var R=e.child;ii=0,l=Ed(s,R,l,l,u,x,!1),(e.flags&4)!==0&&l&&kr(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Ng(e);e=e.sibling}}var Ln=!1,Wt=!1,la=!1,Md=!1,Cg=typeof WeakSet=="function"?WeakSet:Set,Un=null,ca=!1,Zo=!1,Mc=!1,bd=!1;function TM(e,n,a){if(e=e.containerInfo,Yd=$r,e=Lp(e),cf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,x=l.focusNode;l=l.focusOffset;try{s.nodeType,x.nodeType}catch{s=null;break e}var R=0,H=-1,ne=-1,ue=0,be=0,$=e,le=null;t:for(;;){for(var Ge;$!==s||u!==0&&$.nodeType!==3||(H=R+u),$!==x||l!==0&&$.nodeType!==3||(ne=R+l),$.nodeType===3&&(R+=$.nodeValue.length),(Ge=$.firstChild)!==null;)le=$,$=Ge;for(;;){if($===e)break t;if(le===s&&++ue===u&&(H=R),le===x&&++be===l&&(ne=R),(Ge=$.nextSibling)!==null)break;$=le,le=$.parentNode}$=Ge}s=H===-1||ne===-1?null:{start:H,end:ne}}else s=null}s=s||{start:0,end:0}}else s=null;for(Zd={focusedElem:e,selectionRange:s},$r=!1,a=(a&335544064)===a,Un=n,n=a?9270:1024;Un!==null;){if(e=Un,a&&(s=e.deletions,s!==null))for(u=0;u<s.length;u++)a&&_d(s[u]);if(e.alternate===null&&(e.flags&2)!==0)a&&bg(e),bc(a);else{if(e.tag===22){if(s=e.alternate,e.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&_d(s),bc(a);continue}else if(s!==null&&s.memoizedState!==null){a&&bg(e),bc(a);continue}}s=e.child,(e.subtreeFlags&n)!==0&&s!==null?(s.return=e,Un=s):(a&&Tg(e),bc(a))}}mi=null}function bc(e){for(;Un!==null;){var n=Un,a=e,s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&s!==null){a=void 0,l=s.memoizedProps,s=s.memoizedState;var u=n.stateNode;try{var x=Js(n.type,l);a=u.getSnapshotBeforeUpdate(x,s),u.__reactInternalSnapshotBeforeUpdate=a}catch(R){Zt(n,n.return,R)}}break;case 3:if((l&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)nh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":nh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=Ta(s.memoizedProps,s.stateNode),l=n.memoizedProps,l=Ra(l.default,l.update),l!=="none"&&Fr(s,a,l,s.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Un=s;break}Un=n.return}}function wg(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),s&4&&qo(5,a);break;case 1:if(ua(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Zt(a,a.return,x)}else{var l=Js(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Zt(a,a.return,x)}}s&64&&vg(a),s&512&&sa(a,a.return);break;case 3:if(ua(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{o0(e,n)}catch(x){Zt(a,a.return,x)}}break;case 27:n===null&&s&4&&Mg(a);case 26:case 5:ua(e,a),n===null&&s&4&&hd(a),s&512&&sa(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),s&4&&Ug(e,a);break;case 13:ua(e,a),s&4&&Fg(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=BM.bind(null,a),_1(e,a))));break;case 22:if(s=a.memoizedState!==null||Ln,!s){var u=n!==null&&n.memoizedState!==null||Wt;n=Ln,l=Wt,Ln=s,(Wt=u)&&!l?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),ki(e,a,s)):ua(e,a),Ln=n,Wt=l}break;case 30:ua(e,a),s&512&&sa(a,a.return);break;case 7:s&512&&sa(a,a.return);default:ua(e,a)}}function yd(e,n){for(e=e.child;e!==null;)Dg(e,n),e=e.sibling}function Dg(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var l=e.stateNode,u=e.memoizedProps.style,x=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(H){Zt(e,e.return,H)}Ad(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,ct=!0}catch(H){Zt(e,e.return,H)}break;case 18:try{var R=e.stateNode;n?bx(R,!0):bx(e.stateNode,!1)}catch(H){Zt(e,e.return,H)}break;case 22:case 23:e.memoizedState===null&&yd(e,n);break;default:yd(e,n)}}function Ad(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,s=n;switch(a.tag){case 4:Dg(a,s);break e;case 22:a.memoizedState===null&&Ad(a,s);break e;default:Ad(a,s)}}e=e.sibling}}function Og(e){var n=e.alternate;n!==null&&(e.alternate=null,Og(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Le(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var on=null,ai=!1;function Gi(e,n,a){for(a=a.child;a!==null;)Lg(e,n,a),a=a.sibling}function Lg(e,n,a){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Ke,a)}catch{}switch(a.tag){case 26:Wt||Hn(a,n),Gi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Wt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Wt||Hn(a,n),Yo(a);var s=on,l=ai;ps(a.type)&&(on=a.stateNode,ai=!1),Gi(e,n,a),Px(a.stateNode,a.type,a.memoizedProps),on=s,ai=l;break;case 5:Wt||Hn(a,n),Yo(a);case 6:if(a.tag===6&&Yo(a),s=on,l=ai,on=null,Gi(e,n,a),on=s,ai=l,on!==null)if(ai)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(a.stateNode),ct=!0}catch(u){Zt(a,n,u)}else try{on.removeChild(a.stateNode),ct=!0}catch(u){Zt(a,n,u)}break;case 18:on!==null&&(ai?(e=on,Mx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),eo(e)):Mx(on,a.stateNode));break;case 4:s=on,l=ai,on=a.stateNode.containerInfo,ai=!0,Gi(e,n,a),on=s,ai=l;break;case 0:case 11:case 14:case 15:ls(2,a,n),Wt||ls(4,a,n),Gi(e,n,a);break;case 1:Wt||(Hn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&_g(a,n,s)),Gi(e,n,a);break;case 21:Gi(e,n,a);break;case 22:Wt=(s=Wt)||a.memoizedState!==null,Gi(e,n,a),Wt=s;break;case 30:Hn(a,n),Gi(e,n,a);break;case 7:Wt||Hn(a,n),Gi(e,n,a);break;default:Gi(e,n,a)}}function Ug(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{eo(e)}catch(a){Zt(n,n.return,a)}}}function Fg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{eo(e)}catch(a){Zt(n,n.return,a)}}function RM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Cg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Cg),n;default:throw Error(r(435,e.tag))}}function yc(e,n){var a=RM(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var l=zM.bind(null,e,s);s.then(l,l)}})}function Qn(e,n,a){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],x=e,R=n,H=R;e:for(;H!==null;){switch(H.tag){case 27:if(ps(H.type)){on=H.stateNode,ai=!1;break e}break;case 5:on=H.stateNode,ai=!1;break e;case 3:case 4:on=H.stateNode.containerInfo,ai=!0;break e}H=H.return}if(on===null)throw Error(r(160));Lg(x,R,u),on=null,ai=!1,x=u.alternate,x!==null&&(x.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ig(n,e,a),n=n.sibling}var Vi=null;function Ig(e,n,a){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(s=e.updateQueue,s=s!==null?s.events:null,s!==null))for(var u=0;u<s.length;u++){var x=s[u];x.ref.impl=x.nextImpl}Qn(n,e,a),Jn(e),l&4&&(ls(3,e,e.return),qo(3,e),ls(5,e,e.return));break;case 1:Qn(n,e,a),Jn(e),l&512&&(Wt||s===null||Hn(s,s.return)),l&64&&Ln&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Vi,Qn(n,e,a),Jn(e),l&512&&(Wt||s===null||Hn(s,s.return)),l&4)if(l=s!==null?s.memoizedState:null,a=e.memoizedState,s===null)if(a===null)if(e.stateNode===null)if(Ln)e.stateNode=_x(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,a=e.memoizedProps,l=u.ownerDocument||u;t:switch(n){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Oe]||s[mn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(n),l.head.insertBefore(s,l.querySelector("head > title"))),Gn(s,n,a),s[mn]=e,He(s),n=s;break e;case"link":if(u=kx("link","href",l).get(n+(a.href||""))){for(x=0;x<u.length;x++)if(s=u[x],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(x,1);break t}}s=l.createElement(n),Gn(s,n,a),l.head.appendChild(s);break;case"meta":if(u=kx("meta","content",l).get(n+(a.content||""))){for(x=0;x<u.length;x++)if(s=u[x],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(x,1);break t}}s=l.createElement(n),Gn(s,n,a),l.head.appendChild(s);break;default:throw Error(r(468,n))}s[mn]=e,He(s),n=s}e.stateNode=n}else Ln||ch(u,e.type,e.stateNode);else e.stateNode=Vx(u,a,e.memoizedProps);else l!==a?(l===null?(n=s.stateNode,n===null||Wt||n.parentNode.removeChild(n)):l.count--,a===null?Ln||ch(u,e.type,e.stateNode):Vx(u,a,e.memoizedProps)):a===null&&e.stateNode!==null&&md(e,e.memoizedProps,s.memoizedProps);break;case 27:Qn(n,e,a),Jn(e),l&512&&(Wt||s===null||Hn(s,s.return)),s!==null&&l&4&&md(e,e.memoizedProps,s.memoizedProps);break;case 5:if(u=la,la=!1,Qn(n,e,a),la=u,Jn(e),l&512&&(Wt||s===null||Hn(s,s.return)),e.flags&32){n=e.stateNode;try{xr(n,""),ct=!0}catch(ue){Zt(e,e.return,ue)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,md(e,n,s!==null?s.memoizedProps:n)),l&1024&&(Md=!0);break;case 6:if(Qn(n,e,a),Jn(e),l&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,ct=!0}catch(ue){Zt(e,e.return,ue)}}break;case 3:if(ct=!1,zc=null,u=Vi,Vi=al(n.containerInfo),Qn(n,e,a),Vi=u,Jn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{eo(n.containerInfo)}catch(ue){Zt(e,e.return,ue)}Md&&(Md=!1,Pg(e)),ct=!1;break;case 4:l=la,la=Ln,s=Ps(),u=Vi,Vi=al(e.stateNode.containerInfo),Qn(n,e,a),Jn(e),Vi=u,ct&&Zo&&(Mc=!0),ct=s,la=l;break;case 12:Qn(n,e,a),Jn(e);break;case 31:Qn(n,e,a),Jn(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,yc(e,n)));break;case 13:Qn(n,e,a),Jn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Rc=ge()),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,yc(e,n)));break;case 22:u=e.memoizedState!==null,x=s!==null&&s.memoizedState!==null;var R=Ln,H=Wt,ne=la;Ln=R||u,la=ne||u,Wt=H||x,Qn(n,e,a),Wt=H,la=ne,Ln=R,Jn(e),l&8192&&(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||s===null||x||Ln||Wt||(n=x||Wt,a=Ln,s=Wt,Ln=u||Ln,Wt=n,cs(e,2),Ln=a,Wt=s),!u&&la||yd(e,u)),l&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,yc(e,a))));break;case 19:Qn(n,e,a),Jn(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,yc(e,n)));break;case 30:l&512&&(Wt||s===null||Hn(s,s.return)),l=Ps(),u=Zo,x=(a&335544064)===a,R=e.memoizedProps,Zo=x&&Ra(R.default,R.update)!=="none",Qn(n,e,a),Jn(e),x&&s!==null&&ct&&(e.flags|=4),Zo=u,ct=l;break;case 21:break;case 7:l&512&&(Wt||s===null||Hn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=e);default:Qn(n,e,a),Jn(e)}}function Jn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Eg(s)){a=s;break}s=s.return}s=null;for(var l=e.return;l!==null;){if(dd(l)){var u=l.stateNode;s===null?s=[u]:s.push(u)}if(fd(l))break;l=l.return}var x=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var R=a.stateNode,H=pd(e);vc(e,H,R,x);break;case 5:var ne=a.stateNode;a.flags&32&&(xr(ne,""),a.flags&=-33);var ue=pd(e);vc(e,ue,ne,x);break;case 3:case 4:var be=a.stateNode.containerInfo,$=pd(e);gd(e,$,be,x);break;default:throw Error(r(161))}}catch(le){Zt(e,e.return,le)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Pg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Pg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,$r=!0,n.reset(),$r=!1),e=e.sibling}}function Ir(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Bg(n,e),n=n.sibling;else Ng(n)}function Bg(e,n){var a=e.alternate;if(a===null)xd(e,!1);else switch(e.tag){case 3:if(bd=ca=!1,yg(),Ir(n,e),!ca&&!Mc){if(e=ra,e!==null)for(var s=0;s<e.length;s+=3){a=e[s];var l=e[s+1];Ax(a,e[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),bd=!0}ra=null;break;case 5:Ir(n,e);break;case 4:s=ca,ca=!1,Ir(n,e),ca&&(Mc=!0),ca=s;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?xd(e,!1):Ir(n,e));break;case 30:s=ca,l=yg(),ca=!1,Ir(n,e),ca&&(e.flags|=4);var u=e.memoizedProps,x=e.stateNode;n=Ta(u,x),x=Ta(a.memoizedProps,x);var R=Ra(u.default,u.update);R==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=e.child,ii=0,n=Ed(e,a,n,x,R,u,!0),ii!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(kr(e,e.memoizedProps.onUpdate),ra=l):l!==null&&(l.push.apply(l,ra),ra=l),ca=(e.flags&32)!==0?!0:s;break;default:Ir(n,e)}}function ua(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)wg(e,n.alternate,n),n=n.sibling}function cs(e,n){for(e=e.child;e!==null;){var a=e,s=n;switch(a.tag){case 0:case 11:case 14:case 15:ls(4,a,a.return),cs(a,s);break;case 1:Hn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&_g(a,a.return,l),cs(a,s);break;case 27:(s&2)!==0&&Px(a.stateNode,a.type,a.memoizedProps);case 5:Hn(a,a.return),a.tag!==5&&a.tag!==27||Yo(a),cs(a,s);break;case 6:Yo(a);break;case 26:Hn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||Wt||l.parentNode.removeChild(l),cs(a,s);break;case 22:a.memoizedState===null&&cs(a,s);break;case 30:Hn(a,a.return),cs(a,s);break;case 7:Hn(a,a.return);default:cs(a,s)}e=e.sibling}}function ki(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,l=e,u=n,x=u.flags,R=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:ki(l,u,a),qo(4,u);break;case 1:if(ki(l,u,a),s=u,l=s.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ue){Zt(s,s.return,ue)}if(s=u,l=s.updateQueue,l!==null){var H=s.stateNode;try{var ne=l.shared.hiddenCallbacks;if(ne!==null)for(l.shared.hiddenCallbacks=null,l=0;l<ne.length;l++)r0(ne[l],H)}catch(ue){Zt(s,s.return,ue)}}R&&x&64&&vg(u),sa(u,u.return);break;case 27:(a&2)!==0&&Mg(u);case 5:u.tag!==5&&u.tag!==27||Sg(u),ki(l,u,a),R&&s===null&&x&4&&hd(u),sa(u,u.return);break;case 6:Sg(u);break;case 26:H=u.stateNode,u.memoizedState!==null||H===null||Ln||ch(al(H.ownerDocument),u.type,H),ki(l,u,a),R&&s===null&&x&4&&hd(u),sa(u,u.return);break;case 12:ki(l,u,a);break;case 31:ki(l,u,a),R&&x&4&&Ug(l,u);break;case 13:ki(l,u,a),R&&x&4&&Fg(l,u);break;case 22:u.memoizedState===null&&ki(l,u,a),sa(u,u.return);break;case 30:ki(l,u,a),sa(u,u.return);break;case 7:sa(u,u.return);default:ki(l,u,a)}n=n.sibling}}function Td(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Uo(a))}function Rd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Uo(e))}function Li(e,n,a,s){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)zg(e,n,a,s),n=n.sibling;else l&&Rg(n)}function zg(e,n,a,s){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Ec(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:Li(e,n,a,s),u&2048&&qo(9,n);break;case 1:Li(e,n,a,s);break;case 3:Li(e,n,a,s),l&&bd&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&Uo(u)));break;case 12:if(u&2048){Li(e,n,a,s),u=n.stateNode;try{var x=n.memoizedProps,R=x.id,H=x.onPostCommit;typeof H=="function"&&H(R,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(ne){Zt(n,n.return,ne)}}else Li(e,n,a,s);break;case 31:Li(e,n,a,s);break;case 13:Li(e,n,a,s);break;case 23:break;case 22:x=n.stateNode,R=n.alternate,n.memoizedState!==null?(l&&R!==null&&R.memoizedState===null&&Ec(R),x._visibility&2?Li(e,n,a,s):Ko(e,n)):(l&&R!==null&&R.memoizedState!==null&&Ec(n),x._visibility&2?Li(e,n,a,s):(x._visibility|=2,Pr(e,n,a,s,(n.subtreeFlags&10256)!==0||!1))),u&2048&&Td(R,n);break;case 24:Li(e,n,a,s),u&2048&&Rd(n.alternate,n);break;case 30:l&&(u=n.alternate,u!==null&&(oa(u.child,!0),oa(n.child,!0))),Li(e,n,a,s);break;default:Li(e,n,a,s)}}function Pr(e,n,a,s,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=e,x=n,R=a,H=s,ne=x.flags;switch(x.tag){case 0:case 11:case 15:Pr(u,x,R,H,l),qo(8,x);break;case 23:break;case 22:var ue=x.stateNode;x.memoizedState!==null?ue._visibility&2?Pr(u,x,R,H,l):Ko(u,x):(ue._visibility|=2,Pr(u,x,R,H,l)),l&&ne&2048&&Td(x.alternate,x);break;case 24:Pr(u,x,R,H,l),l&&ne&2048&&Rd(x.alternate,x);break;default:Pr(u,x,R,H,l)}n=n.sibling}}function Ko(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,l=s.flags;switch(s.tag){case 22:Ko(a,s),l&2048&&Td(s.alternate,s);break;case 24:Ko(a,s),l&2048&&Rd(s.alternate,s);break;default:Ko(a,s)}n=n.sibling}}var $s=8192;function er(e,n,a){if(e.subtreeFlags&$s)for(e=e.child;e!==null;)Hg(e,n,a),e=e.sibling}function Hg(e,n,a){switch(e.tag){case 26:er(e,n,a),e.flags&$s&&(e.memoizedState!==null?L1(a,Vi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&qx(a,e)));break;case 5:er(e,n,a),e.flags&$s&&(e=e.stateNode,(n&335544128)===n&&qx(a,e));break;case 3:case 4:var s=Vi;Vi=al(e.stateNode.containerInfo),er(e,n,a),Vi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=$s,$s=16777216,er(e,n,a),$s=s):er(e,n,a));break;case 30:if((e.flags&$s)!==0&&(s=e.memoizedProps.name,s!=null&&s!=="auto")){var l=e.stateNode;l.paired=null,mi===null&&(mi=new Map),mi.set(s,l)}er(e,n,a);break;default:er(e,n,a)}}function Gg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Qo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Un=s,kg(s,e)}Gg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vg(e),e=e.sibling}function Vg(e){switch(e.tag){case 0:case 11:case 15:Qo(e),e.flags&2048&&ls(9,e,e.return);break;case 3:Qo(e);break;case 12:Qo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ac(e)):Qo(e);break;default:Qo(e)}}function Ac(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Un=s,kg(s,e)}Gg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ls(8,n,n.return),Ac(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ac(n));break;default:Ac(n)}e=e.sibling}}function kg(e,n){for(;Un!==null;){var a=Un;switch(a.tag){case 0:case 11:case 15:ls(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Uo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Un=s;else e:for(a=e;Un!==null;){s=Un;var l=s.sibling,u=s.return;if(Og(s),s===a){Un=null;break e}if(l!==null){l.return=u,Un=l;break e}Un=u}}}var NM={getCacheForType:function(e){var n=Pn(En),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Pn(En).controller.signal}},CM=typeof WeakMap=="function"?WeakMap:Map,kt=0,tn=null,At=null,Ct=0,Yt=0,pi=null,us=!1,Br=!1,Nd=!1,Ia=0,xn=0,fs=0,tr=0,Tc=0,gi=0,zr=0,Jo=null,si=null,Cd=!1,Rc=0,jg=0,Nc=1/0,Cc=null,ds=null,hn=0,ji=null,nr=null,fa=0,wd=0,Dd=null,Xg=null,Hr=null,Gr=null,Vr=null,$o=0,wc=null;function xi(){return(kt&2)!==0&&Ct!==0?Ct&-Ct:Se.T!==null?Gd():Fs()}function Wg(){if(gi===0)if((Ct&536870912)===0||bt){var e=Yn;Yn<<=1,(Yn&3932160)===0&&(Yn=262144),gi=e}else gi=536870912;return e=Bn.current,e!==null&&(e.flags|=32),gi}function kr(e,n){if(n!=null){var a=e.stateNode,s=a.ref;s===null&&(s=a.ref=Tx(Ta(e.memoizedProps,a))),Gr===null&&(Gr=[]),Gr.push(n.bind(null,s))}}function ri(e,n,a){(e===tn&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)&&(jr(e,0),hs(e,Ct,gi,!1)),zi(e,a),((kt&2)===0||e!==tn)&&(e===tn&&((kt&2)===0&&(tr|=a),xn===4&&hs(e,Ct,gi,!1)),da(e))}function qg(e,n,a){if((kt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||bi(e,n),l=s?OM(e,n):Ld(e,n,!0),u=s;do{if(l===0){Br&&!s&&hs(e,n,0,!1);break}else{if(a=e.current.alternate,u&&!wM(a)){l=Ld(e,n,!1),u=!1;continue}if(l===2){if(u=n,e.errorRecoveryDisabledLanes&u)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var R=e;l=Jo;var H=R.current.memoizedState.isDehydrated;if(H&&(jr(R,x).flags|=256),x=Ld(R,x,!1),x!==2&&x!==6){if(Nd&&!H){R.errorRecoveryDisabledLanes|=u,tr|=u,l=4;break e}u=si,si=l,u!==null&&(si===null?si=u:si.push.apply(si,u))}l=x}if(u=!1,l!==2)continue}}if(l===1){jr(e,0),hs(e,n,0,!0);break}e:{switch(s=e,u=l,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:hs(s,n,gi,!us);break e;case 2:si=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(l=Rc+300-ge(),10<l)){if(hs(s,n,gi,!us),qa(s,0,!0)!==0)break e;fa=n,s.timeoutHandle=Jd(Yg.bind(null,s,a,si,Cc,Cd,n,gi,tr,zr,us,u,"Throttled",-0,0),l);break e}Yg(s,a,si,Cc,Cd,n,gi,tr,zr,us,u,null,-0,0)}}break}while(!0);da(e)}function Yg(e,n,a,s,l,u,x,R,H,ne,ue,be,$,le){e.timeoutHandle=-1;var Ge=n.subtreeFlags,Je=(u&335544064)===u;if(be=null,(Je||Ge&8192||(Ge&16785408)===16785408)&&(be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},mi=null,Hg(n,u,be),Je&&(Ge=be,Je=e.containerInfo,Je=(Je.nodeType===9?Je:Je.ownerDocument).__reactViewTransition,Je!=null&&(Ge.count++,Ge.waitingForViewTransition=!0,Ge=ol.bind(Ge),Je.finished.then(Ge,Ge))),Ge=(u&62914560)===u?Rc-ge():(u&4194048)===u?jg-ge():0,Ge=U1(be,Ge),Ge!==null)){fa=u,e.cancelPendingCommit=Ge(nx.bind(null,e,n,u,a,s,l,x,R,H,ne,ue,be,null,$,le)),hs(e,u,x,!ne);return}nx(e,n,u,a,s,l,x,R,H,ne,ue,be)}function wM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var l=a[s],u=l.getSnapshot;l=l.value;try{if(!di(u(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function hs(e,n,a,s){n=Ls(e,n),n&=~Tc,n&=~tr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var l=n;0<l;){var u=31-Ye(l),x=1<<u;s[u]=-1,l&=~x}a!==0&&ba(e,a,n)}function Dc(){return(kt&6)===0?(el(0),!1):!0}function Od(){if(At!==null){if(Yt===0)var e=At.return;else e=At,wa=ks=null,Hf(e),wr=null,Po=0,e=At;for(;e!==null;)xg(e.alternate,e),e=e.return;At=null}}function jr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,e1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,Od(),tn=e,At=a=Na(e.current,null),Ct=n,Yt=0,pi=null,us=!1,Br=bi(e,n),Nd=!1,zr=gi=Tc=tr=fs=xn=0,si=Jo=null,Cd=!1,Ia=Ls(e,n),zl(),a}function Zg(e,n){xt=null,Se.H=uc,n===Cr||n===Kl?(n=n0(),Yt=3):n===Rf?(n=n0(),Yt=4):Yt=n===td?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,pi=n,At===null&&(xn=1,fc(e,Ci(n,e.current)))}function Kg(){var e=Bn.current;return e===null?!0:(Ct&4194048)===Ct?Xn===null:(Ct&62914560)===Ct||(Ct&536870912)!==0?e===Xn:!1}function Qg(){var e=Se.H;return Se.H=uc,e===null?uc:e}function Jg(){var e=Se.A;return Se.A=NM,e}function Oc(){xn=4,us||(Ct&4194048)!==Ct&&Bn.current!==null||(Br=!0),(fs&134217727)===0&&(tr&134217727)===0||tn===null||hs(tn,Ct,gi,!1)}function Ld(e,n,a){var s=kt;kt|=2;var l=Qg(),u=Jg();(tn!==e||Ct!==n)&&(Cc=null,jr(e,n)),n=!1;var x=xn;e:do try{if(Yt!==0&&At!==null){var R=At,H=pi;switch(Yt){case 8:Od(),x=6;break e;case 3:case 2:case 9:case 6:Bn.current===null&&(n=!0);var ne=Yt;if(Yt=0,pi=null,Xr(e,R,H,ne),a&&Br){x=0;break e}break;default:ne=Yt,Yt=0,pi=null,Xr(e,R,H,ne)}}DM(),x=xn;break}catch(ue){Zg(e,ue)}while(!0);return n&&e.shellSuspendCounter++,wa=ks=null,kt=s,Se.H=l,Se.A=u,At===null&&(tn=null,Ct=0,zl()),x}function DM(){for(;At!==null;)$g(At)}function OM(e,n){var a=kt;kt|=2;var s=Qg(),l=Jg();tn!==e||Ct!==n?(Cc=null,Nc=ge()+500,jr(e,n)):Br=bi(e,n);e:do try{if(Yt!==0&&At!==null){n=At;var u=pi;t:switch(Yt){case 1:Yt=0,pi=null,Xr(e,n,u,1);break;case 2:case 9:if(e0(u)){Yt=0,pi=null,ex(n);break}n=function(){Yt!==2&&Yt!==9||tn!==e||(Yt=7),da(e)},u.then(n,n);break e;case 3:Yt=7;break e;case 4:Yt=5;break e;case 7:e0(u)?(Yt=0,pi=null,ex(n)):(Yt=0,pi=null,Xr(e,n,u,7));break;case 5:var x=null;switch(At.tag){case 26:x=At.memoizedState;case 5:case 27:var R=At;if(x?Xx(x):R.stateNode.complete){Yt=0,pi=null;var H=R.sibling;if(H!==null)At=H;else{var ne=R.return;ne!==null?(At=ne,Lc(ne)):At=null}break t}}Yt=0,pi=null,Xr(e,n,u,5);break;case 6:Yt=0,pi=null,Xr(e,n,u,6);break;case 8:Od(),xn=6;break e;default:throw Error(r(462))}}LM();break}catch(ue){Zg(e,ue)}while(!0);return wa=ks=null,Se.H=s,Se.A=l,kt=a,At!==null?0:(tn=null,Ct=0,zl(),xn)}function LM(){for(;At!==null&&!Ue();)$g(At)}function $g(e){var n=pg(e.alternate,e,Ia);e.memoizedProps=e.pendingProps,n===null?Lc(e):At=n}function ex(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=lg(a,n,n.pendingProps,n.type,void 0,Ct);break;case 11:n=lg(a,n,n.pendingProps,n.type.render,n.ref,Ct);break;case 5:Hf(n);var s=n;s===On&&(bt?(Xl(s),s.tag===5&&s.stateNode!=null&&(nn=s.stateNode)):(Xl(s),bt=!0));default:xg(a,n),n=At=kp(n,Ia),n=pg(a,n,Ia)}e.memoizedProps=e.pendingProps,n===null?Lc(e):At=n}function Xr(e,n,a,s){wa=ks=null,Hf(n),wr=null,Po=0;var l=n.return;try{if(SM(e,l,n,a,Ct)){xn=1,fc(e,Ci(a,e.current)),At=null;return}}catch(u){if(l!==null)throw At=l,u;xn=1,fc(e,Ci(a,e.current)),At=null;return}n.flags&32768?(bt||s===1?e=!0:Br||(Ct&536870912)!==0?e=!1:(us=e=!0,(s===2||s===9||s===3||s===6)&&(s=Bn.current,s!==null&&s.tag===13&&(s.flags|=16384))),tx(n,e)):Lc(n)}function Lc(e){var n=e;do{if((n.flags&32768)!==0){tx(n,us);return}e=n.return;var a=yM(n.alternate,n,Ia);if(a!==null){At=a;return}if(n=n.sibling,n!==null){At=n;return}At=n=e}while(n!==null);xn===0&&(xn=5)}function tx(e,n){do{var a=AM(e.alternate,e);if(a!==null){a.flags&=32767,At=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){At=e;return}At=e=a}while(e!==null);xn=6,At=null}function nx(e,n,a,s,l,u,x,R,H,ne,ue,be){e.cancelPendingCommit=null;do Uc();while(hn!==0);if((kt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));e===tn&&(At=tn=null,Ct=0),nr=n,ji=e,fa=a,Dd=l,Xg=s,UM(e,n,a,x,R,H,be)}}function UM(e,n,a,s,l,u,x){var R=n.lanes|n.childLanes;if(wd=R,R|=mf,Xt(e,a,R,s,l,u),Gr=null,(a&335544064)===a?(Vr=lM(e),s=10262):(Vr=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(e.callbackNode=null,e.callbackPriority=0,HM(ve,function(){return Pd(),null})):(e.callbackNode=null,e.callbackPriority=0),_c=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Se.T,Se.T=null,l=Ce.p,Ce.p=2,u=kt,kt|=4;try{TM(e,n,a)}finally{kt=u,Ce.p=l,Se.T=s}}hn=1,_c?Hr=r1(x,e.containerInfo,Vr,Ud,Fd,IM,Id,Pd,FM):(Ud(),Fd(),Id())}function FM(e){if(hn!==0){var n=ji.onRecoverableError;n(e,{componentStack:null})}}function IM(){hn===3&&(hn=0,Bg(nr,ji),hn=4)}function Ud(){if(hn===1){hn=0;var e=ji,n=nr,a=fa,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Se.T,Se.T=null;var l=Ce.p;Ce.p=2;var u=kt;kt|=4;try{Zo=Mc=!1,Ig(n,e,a),a=Zd;var x=Lp(e.containerInfo),R=a.focusedElem,H=a.selectionRange;if(x!==R&&R&&R.ownerDocument&&Op(R.ownerDocument.documentElement,R)){if(H!==null&&cf(R)){var ne=H.start,ue=H.end;if(ue===void 0&&(ue=ne),"selectionStart"in R)R.selectionStart=ne,R.selectionEnd=Math.min(ue,R.value.length);else{var be=R.ownerDocument||document,$=be&&be.defaultView||window;if($.getSelection){var le=$.getSelection(),Ge=R.textContent.length,Je=Math.min(H.start,Ge),vt=H.end===void 0?Je:Math.min(H.end,Ge);!le.extend&&Je>vt&&(x=vt,vt=Je,Je=x);var te=Dp(R,Je),Y=Dp(R,vt);if(te&&Y&&(le.rangeCount!==1||le.anchorNode!==te.node||le.anchorOffset!==te.offset||le.focusNode!==Y.node||le.focusOffset!==Y.offset)){var re=be.createRange();re.setStart(te.node,te.offset),le.removeAllRanges(),Je>vt?(le.addRange(re),le.extend(Y.node,Y.offset)):(re.setEnd(Y.node,Y.offset),le.addRange(re))}}}}for(be=[],le=R;le=le.parentNode;)le.nodeType===1&&be.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<be.length;R++){var Me=be[R];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}$r=!!Yd,Zd=Yd=null}finally{kt=u,Ce.p=l,Se.T=s}}e.current=n,hn=2}}function Fd(){if(hn===2){hn=0;var e=ji,n=nr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Se.T,Se.T=null;var s=Ce.p;Ce.p=2;var l=kt;kt|=4;try{wg(e,n.alternate,n)}finally{kt=l,Ce.p=s,Se.T=a}}hn=3}}function Id(){if(hn===4||hn===3){hn=0;var e=Hr;Hr=null,Ie();var n=ji,a=nr,s=fa,l=Xg,u=(s&335544064)===s?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?hn=5:(hn=0,nr=ji=null,ix(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(ds=null),ta(s),a=a.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Ke,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=Se.T,u=Ce.p,Ce.p=2,Se.T=null;try{for(var x=n.onRecoverableError,R=0;R<l.length;R++){var H=l[R];x(H.value,{componentStack:H.stack})}}finally{Se.T=a,Ce.p=u}}if(l=Gr,x=Vr,Vr=null,l!==null&&(Gr=null,x===null&&(x=[]),e!==null))for(H=0;H<l.length;H++)a=(0,l[H])(x),a!==void 0&&e.finished.finally(a);(fa&3)!==0&&Uc(),da(n),u=n.pendingLanes,(s&261930)!==0&&(u&42)!==0?n===wc?$o++:($o=0,wc=n):($o=0,wc=null),el(0)}}function ix(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Uo(n)))}function Uc(){return Hr!==null&&(Hr.skipTransition(),Hr=null),Ud(),Fd(),Id(),Pd()}function Pd(){if(hn!==5)return!1;var e=ji,n=wd;wd=0;var a=ta(fa),s=Se.T,l=Ce.p;try{Ce.p=32>a?32:a,Se.T=null,a=Dd,Dd=null;var u=ji,x=fa;if(hn=0,nr=ji=null,fa=0,(kt&6)!==0)throw Error(r(331));var R=kt;if(kt|=4,Vg(u.current),zg(u,u.current,x,a),kt=R,el(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Ke,u)}catch{}return!0}finally{Ce.p=l,Se.T=s,ix(e,n)}}function ax(e,n,a){n=Ci(a,n),n=ed(e.stateNode,n,2),e=as(e,n,2),e!==null&&(zi(e,2),da(e))}function Zt(e,n,a){if(e.tag===3)ax(e,e,a);else for(;n!==null;){if(n.tag===3){ax(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ds===null||!ds.has(s))){e=Ci(a,e),a=eg(2),s=as(n,a,2),s!==null&&(tg(a,s,n,e),zi(s,2),da(s));break}}n=n.return}}function Bd(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new CM;var l=new Set;s.set(n,l)}else l=s.get(n),l===void 0&&(l=new Set,s.set(n,l));l.has(a)||(Nd=!0,l.add(a),e=PM.bind(null,e,n,a),n.then(e,e))}function PM(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,tn===e&&(Ct&a)===a&&((xn===4||xn===3&&(Ct&62914560)===Ct&&300>ge()-Rc)&&(kt&2)===0?jr(e,0):Tc|=a,zr===Ct&&(zr=0)),da(e)}function sx(e,n){n===0&&(n=Ya()),e=Hs(e,n),e!==null&&(zi(e,n),da(e))}function BM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),sx(e,a)}function zM(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),sx(e,a)}function HM(e,n){return Re(e,n)}var Wr=null,qr=null,zd=!1,Fc=!1,Hd=!1,ms=0;function da(e){e!==qr&&e.next===null&&(qr===null?Wr=qr=e:qr=qr.next=e),Fc=!0,zd||(zd=!0,VM())}function el(e,n){if(!Hd&&Fc){Hd=!0;do for(var a=!1,s=Wr;s!==null;){if(e!==0){var l=s.pendingLanes;if(l===0)var u=0;else{var x=s.suspendedLanes,R=s.pingedLanes;u=(1<<31-Ye(42|e)+1)-1,u&=l&~(x&~R),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,cx(s,u))}else u=Ct,u=qa(s,s===tn?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||bi(s,u)||(a=!0,cx(s,u));s=s.next}while(a);Hd=!1}}function GM(){rx()}function rx(){Fc=zd=!1;var e=0;ms!==0&&$M()&&(e=ms);for(var n=ge(),a=null,s=Wr;s!==null;){var l=s.next,u=ox(s,n);u===0?(s.next=null,a===null?Wr=l:a.next=l,l===null&&(qr=a)):(a=s,(e!==0||(u&3)!==0)&&(Fc=!0)),s=l}hn!==0&&hn!==5||el(e),ms!==0&&(ms=0)}function ox(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var x=31-Ye(u),R=1<<x,H=l[x];H===-1?((R&a)===0||(R&s)!==0)&&(l[x]=yi(R,n)):H<=n&&(e.expiredLanes|=R),u&=~R}if(n=tn,a=Ct,a=qa(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Ee(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||bi(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Ee(s),ta(a)){case 2:case 8:a=k;break;case 32:a=ve;break;case 268435456:a=we;break;default:a=ve}return s=lx.bind(null,e),a=Re(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Ee(s),e.callbackPriority=2,e.callbackNode=null,2}function lx(e,n){if(hn!==0&&hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Uc()&&e.callbackNode!==a)return null;var s=Ct;return s=qa(e,e===tn?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(qg(e,s,n),ox(e,ge()),e.callbackNode!=null&&e.callbackNode===a?lx.bind(null,e):null)}function cx(e,n){if(Uc())return null;qg(e,n,!0)}function VM(){t1(function(){(kt&6)!==0?Re(Fe,GM):rx()})}function Gd(){if(ms===0){var e=Ws;e===0&&(e=sn,sn<<=1,(sn&261888)===0&&(sn=256)),ms=e}return ms}function ux(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Dl(e)}function kM(e,n,a,s,l){if(n==="submit"&&a&&a.stateNode===l){var u=ux((l[$t]||null).action),x=s.submitter;x&&(n=(n=x[$t]||null)?ux(n.formAction):x.getAttribute("formAction"),n!==null&&(u=n,x=null));var R=new Fl("action","action",null,s,l);e.push({event:R,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ms!==0){var H=new FormData(l,x);Zf(a,{pending:!0,data:H,method:l.method,action:u},null,H)}}else typeof u=="function"&&(R.preventDefault(),H=new FormData(l,x),Zf(a,{pending:!0,data:H,method:l.method,action:u},u,H))},currentTarget:l}]})}}for(var Vd=0;Vd<hf.length;Vd++){var kd=hf[Vd],jM=kd.toLowerCase(),XM=kd[0].toUpperCase()+kd.slice(1);Hi(jM,"on"+XM)}Hi(Ip,"onAnimationEnd"),Hi(Pp,"onAnimationIteration"),Hi(Bp,"onAnimationStart"),Hi("dblclick","onDoubleClick"),Hi("focusin","onFocus"),Hi("focusout","onBlur"),Hi(eM,"onTransitionRun"),Hi(tM,"onTransitionStart"),Hi(nM,"onTransitionCancel"),Hi(zp,"onTransitionEnd"),dn("onMouseEnter",["mouseout","mouseover"]),dn("onMouseLeave",["mouseout","mouseover"]),dn("onPointerEnter",["pointerout","pointerover"]),dn("onPointerLeave",["pointerout","pointerover"]),Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function fx(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],l=s.event;s=s.listeners;e:{var u=void 0;if(n)for(var x=s.length-1;0<=x;x--){var R=s[x],H=R.instance,ne=R.currentTarget;if(R=R.listener,H!==u&&l.isPropagationStopped())break e;u=R,l.currentTarget=ne;try{u(l)}catch(ue){Bl(ue)}l.currentTarget=null,u=H}else for(x=0;x<s.length;x++){if(R=s[x],H=R.instance,ne=R.currentTarget,R=R.listener,H!==u&&l.isPropagationStopped())break e;u=R,l.currentTarget=ne;try{u(l)}catch(ue){Bl(ue)}l.currentTarget=null,u=H}}}}function Tt(e,n){var a=n[X];a===void 0&&(a=n[X]=new Set);var s=e+"__bubble";a.has(s)||(dx(n,e,2,!1),a.add(s))}function jd(e,n,a){var s=0;n&&(s|=4),dx(a,e,s,n)}var Ic="_reactListening"+Math.random().toString(36).slice(2);function Xd(e){if(!e[Ic]){e[Ic]=!0,fn.forEach(function(a){a!=="selectionchange"&&(WM.has(a)||jd(a,!1,e),jd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ic]||(n[Ic]=!0,jd("selectionchange",!1,n))}}function dx(e,n,a,s){switch(tv(n)){case 2:var l=B1;break;case 8:l=z1;break;default:l=fh}a=l.bind(null,n,a,e),l=void 0,!Ju||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),s?l!==void 0?e.addEventListener(n,a,{capture:!0,passive:l}):e.addEventListener(n,a,!0):l!==void 0?e.addEventListener(n,a,{passive:l}):e.addEventListener(n,a,!1)}function Wd(e,n,a,s,l){var u=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var R=s.stateNode.containerInfo;if(R===l)break;if(x===4)for(x=s.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===l)return;x=x.return}for(;R!==null;){if(x=Pe(R),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){s=u=x;continue e}R=R.parentNode}}s=s.return}dp(function(){var ne=u,ue=Ku(a),be=[];e:{var $=Hp.get(e);if($!==void 0){var le=Fl,Ge=e;switch(e){case"keypress":if(Ll(a)===0)break e;case"keydown":case"keyup":le=wE;break;case"focusin":Ge="focus",le=nf;break;case"focusout":Ge="blur",le=nf;break;case"beforeblur":case"afterblur":le=nf;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=vE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=FE;break;case Ip:case Pp:case Bp:le=EE;break;case zp:le=PE;break;case"scroll":case"scrollend":le=gE;break;case"wheel":le=zE;break;case"copy":case"cut":case"paste":le=bE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=xp;break;case"submit":le=LE;break;case"toggle":case"beforetoggle":le=GE}var Je=(n&4)!==0,vt=!Je&&(e==="scroll"||e==="scrollend"),te=Je?$!==null?$+"Capture":null:$;Je=[];for(var Y=ne,re;Y!==null;){var Me=Y;if(re=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||re===null||te===null||(Me=bo(Y,te),Me!=null&&Je.push(nl(Y,Me,re))),vt)break;Y=Y.return}0<Je.length&&($=new le($,Ge,null,a,ue),be.push({event:$,listeners:Je}))}}if((n&7)===0){e:{if(le=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",le&&a!==Zu&&(Ge=a.relatedTarget||a.fromElement)&&(Pe(Ge)||Ge[N]))break e;($||le)&&(Ge=ue.window===ue?ue:(le=ue.ownerDocument)?le.defaultView||le.parentWindow:window,$?(le=a.relatedTarget||a.toElement,$=ne,le=le?Pe(le):null,le!==null&&(vt=f(le),Je=le.tag,le!==vt||Je!==5&&Je!==27&&Je!==6)&&(le=null)):($=null,le=ne),$!==le&&(Je=pp,Me="onMouseLeave",te="onMouseEnter",Y="mouse",(e==="pointerout"||e==="pointerover")&&(Je=xp,Me="onPointerLeave",te="onPointerEnter",Y="pointer"),vt=$==null?Ge:at($),re=le==null?Ge:at(le),Ge=new Je(Me,Y+"leave",$,a,ue),Ge.target=vt,Ge.relatedTarget=re,Me=null,Pe(ue)===ne&&(Je=new Je(te,Y+"enter",le,a,ue),Je.target=re,Je.relatedTarget=vt,Me=Je),vt=Me,Je=$&&le?P($,le,qM):null,$!==null&&hx(be,Ge,$,Je,!1),le!==null&&vt!==null&&hx(be,vt,le,Je,!0)))}e:{if($=ne?at(ne):window,le=$.nodeName&&$.nodeName.toLowerCase(),le==="select"||le==="input"&&$.type==="file")var Ze=Ap;else if(bp($))if(Tp)Ze=QE;else{Ze=ZE;var wt=YE}else le=$.nodeName,!le||le.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?ne&&Yu(ne.elementType)&&(Ze=Ap):Ze=KE;if(Ze&&(Ze=Ze(e,ne))){yp(be,Ze,a,ue);break e}wt&&wt(e,$,ne)}switch(wt=ne?at(ne):window,e){case"focusin":(bp(wt)||wt.contentEditable==="true")&&(Er=wt,uf=ne,Do=null);break;case"focusout":Do=uf=Er=null;break;case"mousedown":ff=!0;break;case"contextmenu":case"mouseup":case"dragend":ff=!1,Up(be,a,ue);break;case"selectionchange":if($E)break;case"keydown":case"keyup":Up(be,a,ue)}var it;if(sf)e:{switch(e){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else Sr?Ep(e,a)&&(lt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(vp&&a.locale!=="ko"&&(Sr||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&Sr&&(it=hp()):(Za=ue,$u="value"in Za?Za.value:Za.textContent,Sr=!0)),wt=Pc(ne,lt),0<wt.length&&(lt=new gp(lt,e,null,a,ue),be.push({event:lt,listeners:wt}),it?lt.data=it:(it=Mp(a),it!==null&&(lt.data=it)))),(it=kE?jE(e,a):XE(e,a))&&(lt=Pc(ne,"onBeforeInput"),0<lt.length&&(wt=new gp("onBeforeInput","beforeinput",null,a,ue),be.push({event:wt,listeners:lt}),wt.data=it)),kM(be,e,ne,a,ue)}fx(be,n)})}function nl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Pc(e,n){for(var a=n+"Capture",s=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=bo(e,a),l!=null&&s.unshift(nl(e,l,u)),l=bo(e,n),l!=null&&s.push(nl(e,l,u))),e.tag===3)return s;e=e.return}return[]}function qM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hx(e,n,a,s,l){for(var u=n._reactName,x=[];a!==null&&a!==s;){var R=a,H=R.alternate,ne=R.stateNode;if(R=R.tag,H!==null&&H===s)break;R!==5&&R!==26&&R!==27||ne===null||(H=ne,l?(ne=bo(a,u),ne!=null&&x.unshift(nl(a,ne,H))):l||(ne=bo(a,u),ne!=null&&x.push(nl(a,ne,H)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var YM=/\r\n?/g,ZM=/\u0000|\uFFFD/g;function mx(e){return(typeof e=="string"?e:""+e).replace(YM,`
`).replace(ZM,"")}function px(e,n){return n=mx(n),mx(e)===n}function Kt(e,n,a,s,l,u){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||xr(e,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&xr(e,""+s);else return;break;case"className":Ai(e,"class",s);break;case"tabIndex":Ai(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ai(e,a,s);break;case"style":up(e,s,u);return;case"data":if(n!=="object"){Ai(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Dl(s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&Kt(e,n,"name",l.name,l,null),Kt(e,n,"formEncType",l.formEncType,l,null),Kt(e,n,"formMethod",l.formMethod,l,null),Kt(e,n,"formTarget",l.formTarget,l,null)):(Kt(e,n,"encType",l.encType,l,null),Kt(e,n,"method",l.method,l,null),Kt(e,n,"target",l.target,l,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Dl(s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=na);return;case"onScroll":s!=null&&Tt("scroll",e);return;case"onScrollEnd":s!=null&&Tt("scrollend",e);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Dl(s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Tt("beforetoggle",e),Tt("toggle",e),fi(e,"popover",s);break;case"xlinkActuate":gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":gt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":gt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":gt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":gt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":fi(e,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=mE.get(a)||a,fi(e,a,s);else return}ct=!0}function qd(e,n,a,s,l,u){switch(a){case"style":up(e,s,u);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof s=="string")xr(e,s);else if(typeof s=="number"||typeof s=="bigint")xr(e,""+s);else return;break;case"onScroll":s!=null&&Tt("scroll",e);return;case"onScrollEnd":s!=null&&Tt("scrollend",e);return;case"onClick":s!=null&&(e.onclick=na);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!qt.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),u=a.slice(2,l?a.length-7:void 0),n=e[$t]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(u,n,l),typeof s=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(u,s,l);break e}ct=!0,a in e?e[a]=s:s===!0?e.setAttribute(a,""):fi(e,a,s)}return}ct=!0}function Gn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",e),Tt("load",e);var s=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var x=a[u];if(x!=null)switch(u){case"src":s=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(e,n,u,x,a,null)}}l&&Kt(e,n,"srcSet",a.srcSet,a,null),s&&Kt(e,n,"src",a.src,a,null);return;case"input":Tt("invalid",e);var R=u=x=l=null,H=null,ne=null;for(s in a)if(a.hasOwnProperty(s)){var ue=a[s];if(ue!=null)switch(s){case"name":l=ue;break;case"type":x=ue;break;case"checked":H=ue;break;case"defaultChecked":ne=ue;break;case"value":u=ue;break;case"defaultValue":R=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:Kt(e,n,s,ue,a,null)}}rp(e,u,R,H,ne,x,l,!1);return;case"select":Tt("invalid",e),s=x=u=null;for(l in a)if(a.hasOwnProperty(l)&&(R=a[l],R!=null))switch(l){case"value":u=R;break;case"defaultValue":x=R;break;case"multiple":s=R;default:Kt(e,n,l,R,a,null)}n=u,a=x,e.multiple=!!s,n!=null?gr(e,!!s,n,!1):a!=null&&gr(e,!!s,a,!0);return;case"textarea":Tt("invalid",e),u=l=s=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":s=R;break;case"defaultValue":l=R;break;case"children":u=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Kt(e,n,x,R,a,null)}lp(e,s,l,u);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(s=a[H],s!=null))switch(H){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Kt(e,n,H,s,a,null)}return;case"dialog":Tt("beforetoggle",e),Tt("toggle",e),Tt("cancel",e),Tt("close",e);break;case"iframe":case"object":Tt("load",e);break;case"video":case"audio":for(s=0;s<tl.length;s++)Tt(tl[s],e);break;case"image":Tt("error",e),Tt("load",e);break;case"details":Tt("toggle",e);break;case"embed":case"source":case"link":Tt("error",e),Tt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(s=a[ne],s!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(e,n,ne,s,a,null)}return;default:if(Yu(n)){for(ue in a)a.hasOwnProperty(ue)&&(s=a[ue],s!==void 0&&qd(e,n,ue,s,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(s=a[R],s!=null&&Kt(e,n,R,s,a,null))}var KM={};function QM(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,x=null,R=null,H=null,ne=null,ue=null;for(le in a){var be=a[le];if(a.hasOwnProperty(le)&&be!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":H=be;default:s.hasOwnProperty(le)||Kt(e,n,le,null,s,be)}}for(var $ in s){var le=s[$];if(be=a[$],s.hasOwnProperty($)&&(le!=null||be!=null))switch($){case"type":le!==be&&(ct=!0),u=le;break;case"name":le!==be&&(ct=!0),l=le;break;case"checked":le!==be&&(ct=!0),ne=le;break;case"defaultChecked":le!==be&&(ct=!0),ue=le;break;case"value":le!==be&&(ct=!0),x=le;break;case"defaultValue":le!==be&&(ct=!0),R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==be&&Kt(e,n,$,le,s,be)}}Wu(e,x,R,H,ne,ue,u,l);return;case"select":le=x=R=$=null;for(u in a)if(H=a[u],a.hasOwnProperty(u)&&H!=null)switch(u){case"value":break;case"multiple":le=H;default:s.hasOwnProperty(u)||Kt(e,n,u,null,s,H)}for(l in s)if(u=s[l],H=a[l],s.hasOwnProperty(l)&&(u!=null||H!=null))switch(l){case"value":u!==H&&(ct=!0),$=u;break;case"defaultValue":u!==H&&(ct=!0),R=u;break;case"multiple":u!==H&&(ct=!0),x=u;default:u!==H&&Kt(e,n,l,u,s,H)}n=R,a=x,s=le,$!=null?gr(e,!!a,$,!1):!!s!=!!a&&(n!=null?gr(e,!!a,n,!0):gr(e,!!a,a?[]:"",!1));return;case"textarea":le=$=null;for(R in a)if(l=a[R],a.hasOwnProperty(R)&&l!=null&&!s.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Kt(e,n,R,null,s,l)}for(x in s)if(l=s[x],u=a[x],s.hasOwnProperty(x)&&(l!=null||u!=null))switch(x){case"value":l!==u&&(ct=!0),$=l;break;case"defaultValue":l!==u&&(ct=!0),le=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==u&&Kt(e,n,x,l,s,u)}op(e,$,le);return;case"option":for(var Ge in a)if($=a[Ge],a.hasOwnProperty(Ge)&&$!=null&&!s.hasOwnProperty(Ge))switch(Ge){case"selected":e.selected=!1;break;default:Kt(e,n,Ge,null,s,$)}for(H in s)if($=s[H],le=a[H],s.hasOwnProperty(H)&&$!==le&&($!=null||le!=null))switch(H){case"selected":$!==le&&(ct=!0),e.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Kt(e,n,H,$,s,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in a)$=a[Je],a.hasOwnProperty(Je)&&$!=null&&!s.hasOwnProperty(Je)&&Kt(e,n,Je,null,s,$);for(ne in s)if($=s[ne],le=a[ne],s.hasOwnProperty(ne)&&$!==le&&($!=null||le!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:Kt(e,n,ne,$,s,le)}return;default:if(Yu(n)){for(var vt in a)$=a[vt],a.hasOwnProperty(vt)&&$!==void 0&&!s.hasOwnProperty(vt)&&qd(e,n,vt,void 0,s,$);for(ue in s)$=s[ue],le=a[ue],!s.hasOwnProperty(ue)||$===le||$===void 0&&le===void 0||qd(e,n,ue,$,s,le);return}}for(var te in a)$=a[te],a.hasOwnProperty(te)&&$!=null&&!s.hasOwnProperty(te)&&Kt(e,n,te,null,s,$);for(be in s)$=s[be],le=a[be],!s.hasOwnProperty(be)||$===le||$==null&&le==null||Kt(e,n,be,$,s,le)}function gx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function JM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var l=a[s],u=l.transferSize,x=l.initiatorType,R=l.duration;if(u&&R&&gx(x)){for(x=0,R=l.responseEnd,s+=1;s<a.length;s++){var H=a[s],ne=H.startTime;if(ne>R)break;var ue=H.transferSize,be=H.initiatorType;ue&&gx(be)&&(H=H.responseEnd,x+=ue*(H<R?1:(R-ne)/(H-ne)))}if(--s,n+=8*(u+x)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Yd=null,Zd=null;function il(e){return e.nodeType===9?e:e.ownerDocument}function xx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vx(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function _x(e,n,a,s){return a=il(a).createElement(e),a[mn]=s,a[$t]=n,Gn(a,e,n),He(a),a}function Kd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qd=null;function $M(){var e=window.event;return e&&e.type==="popstate"?e===Qd?!1:(Qd=e,!0):(Qd=null,!1)}var Jd=typeof setTimeout=="function"?setTimeout:void 0,e1=typeof clearTimeout=="function"?clearTimeout:void 0,Sx=typeof Promise=="function"?Promise:void 0,Ex=typeof requestAnimationFrame=="function"?requestAnimationFrame:Jd,t1=typeof queueMicrotask=="function"?queueMicrotask:typeof Sx<"u"?function(e){return Sx.resolve(null).then(e).catch(n1)}:Jd;function n1(e){setTimeout(function(){throw e})}function ps(e){return e==="head"}function Mx(e,n){var a=n,s=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(l),eo(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")rh(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,rh(a);for(var u=a.firstChild;u;){var x=u.nextSibling,R=u.nodeName;u[Oe]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=x}}else a==="body"&&rh(e.ownerDocument.body);a=l}while(a);eo(n)}function bx(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function yx(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var s=1;else for(var l=s=0;l<n.length;l++){var u=n[l];0<u.width&&0<u.height&&s++}s===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function Ax(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function i1(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function $d(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return i1(n,a,e)}function a1(e){return e.documentElement.clientHeight}function s1(e){this.addEventListener("load",e),this.addEventListener("error",e)}function r1(e,n,a,s,l,u,x,R,H){var ne=n.nodeType===9?n:n.ownerDocument;try{var ue=ne.startViewTransition({update:function(){var $=ne.defaultView,le=$.navigation&&$.navigation.transition,Ge=ne.fonts.status;s();var Je=[];if(Ge==="loaded"&&(a1(ne),ne.fonts.status==="loading"&&Je.push(ne.fonts.ready)),Ge=Je.length,e!==null)for(var vt=e.suspenseyImages,te=0,Y=0;Y<vt.length;Y++){var re=vt[Y];if(!re.complete){var Me=re.getBoundingClientRect();if(0<Me.bottom&&0<Me.right&&Me.top<$.innerHeight&&Me.left<$.innerWidth){if(te+=Wx(re),te>Hc){Je.length=Ge;break}re=new Promise(s1.bind(re)),Je.push(re)}}}if(0<Je.length)return $=Promise.race([Promise.all(Je),new Promise(function(Ze){return setTimeout(Ze,500)})]).then(l,l),(le?Promise.allSettled([le.finished,$]):$).then(u,u);if(l(),le)return le.finished.then(u,u);u()},types:a});ne.__reactViewTransition=ue;var be=[];return ue.ready.then(function(){for(var $=ne.documentElement.getAnimations({subtree:!0}),le=0;le<$.length;le++){var Ge=$[le],Je=Ge.effect,vt=Je.pseudoElement;if(vt!=null&&vt.startsWith("::view-transition")){be.push(Ge),Ge=Je.getKeyframes();for(var te=vt=void 0,Y=!0,re=0;re<Ge.length;re++){var Me=Ge[re],Ze=Me.width;if(vt===void 0)vt=Ze;else if(vt!==Ze){Y=!1;break}if(Ze=Me.height,te===void 0)te=Ze;else if(te!==Ze){Y=!1;break}delete Me.width,delete Me.height,Me.transform==="none"&&delete Me.transform}Y&&vt!==void 0&&te!==void 0&&(Je.setKeyframes(Ge),Y=getComputedStyle(Je.target,Je.pseudoElement),Y.width!==vt||Y.height!==te)&&(Y=Ge[0],Y.width=vt,Y.height=te,Y=Ge[Ge.length-1],Y.width=vt,Y.height=te,Je.setKeyframes(Ge))}}x()},function($){ne.__reactViewTransition===ue&&(ne.__reactViewTransition=null);try{if(typeof $=="object"&&$!==null)switch($.name){case"InvalidStateError":($.message==="View transition was skipped because document visibility state is hidden."||$.message==="Skipping view transition because document visibility state has become hidden."||$.message==="Skipping view transition because viewport size changed."||$.message==="Transition was aborted because of invalid state")&&($=null)}$!==null&&H($)}finally{s(),l(),x()}}),ue.finished.finally(function(){for(var $=0;$<be.length;$++)be[$].cancel();ne.__reactViewTransition===ue&&(ne.__reactViewTransition=null),R()}),ue}catch{return s(),l(),x(),null}}function ir(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}ir.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:b({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},ir.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),s=[],l=0;l<a.length;l++){var u=a[l].effect;u!==null&&u.target===e&&u.pseudoElement===n&&s.push(a[l])}return s},ir.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Tx(e){return{name:e,group:new ir("group",e),imagePair:new ir("image-pair",e),old:new ir("old",e),new:new ir("new",e)}}function vi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}vi.prototype.addEventListener=function(e,n,a){var s=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(Nx(u,e,n,a)===-1){var x=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(H){x.removeEventListener(e,n,a),typeof n=="function"?n.call(this,H):n.handleEvent(H)}),s!==null&&(l=x.removeEventListener.bind(x,e,n,a),s.addEventListener("abort",l,{once:!0}),l=s.removeEventListener.bind(s,"abort",l)),s=Yr(a),u.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:l}),v(this._fragmentFiber.child,!1,o1,e,R,s)}this._eventListeners=u}};function o1(e,n,a,s){return M(e).addEventListener(n,a,s),!1}vi.prototype.removeEventListener=function(e,n,a){var s=this._eventListeners;if(s!==null&&(n=Nx(s,e,n,a),n!==-1)){var l=s[n];a=l.attachedListener;var u=l.cleanup;l=Yr(l.optionsOrUseCapture),v(this._fragmentFiber.child,!1,l1,e,a,l),s.splice(n,1),u!==null&&u()}};function l1(e,n,a,s){return M(e).removeEventListener(n,a,s),!1}function Yr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Rx(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Nx(e,n,a,s){if(e.length===0)return-1;s=Rx(s);for(var l=0;l<e.length;l++){var u=e[l];if(u.type===n&&u.listener===a&&Rx(u.optionsOrUseCapture)===s)return l}return-1}vi.prototype.dispatchEvent=function(e){var n=S(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var u=a[l];s.addEventListener(u.type,u.attachedListener,Yr(u.optionsOrUseCapture))}if(n.appendChild(s),e=s.dispatchEvent(e),a)for(l=0;l<a.length;l++)u=a[l],s.removeEventListener(u.type,u.attachedListener,Yr(u.optionsOrUseCapture));return n.removeChild(s),e}return n.dispatchEvent(e)},vi.prototype.focus=function(e){v(this._fragmentFiber.child,!0,Cx,e,void 0,void 0)};function Cx(e,n){return e.tag===6?!1:(e=M(e),S1(e,n))}vi.prototype.focusLast=function(e){var n=[];v(this._fragmentFiber.child,!0,eh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Cx(n[a],e);a--);};function eh(e,n){return n.push(e),!1}vi.prototype.blur=function(){var e=S(this._fragmentFiber);e!==null&&(e=M(e),e=il(e).activeElement,e!==null&&v(this._fragmentFiber.child,!1,c1,e,void 0,void 0))};function c1(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}vi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),v(this._fragmentFiber.child,!1,u1,e,void 0,void 0)};function u1(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}vi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),v(this._fragmentFiber.child,!1,f1,e,void 0,void 0);for(var a=n=0;a<Xi.length;a++){var s=Xi[a];s.fragmentInstance===this&&s.observer===e?e.unobserve(s.instance):Xi[n++]=s}Xi.length=n}};function f1(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Xi=[],th=!1;function d1(e,n,a){Xi.push({fragmentInstance:e,observer:n,instance:a}),th||(th=!0,E1(function(){th=!1;var s=Xi;Xi=[];for(var l=0;l<s.length;l++){var u=s[l];u.observer.unobserve(u.instance)}}))}vi.prototype.getClientRects=function(){var e=[];return v(this._fragmentFiber.child,!1,h1,e,void 0,void 0),e};function h1(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}vi.prototype.getRootNode=function(e){var n=S(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},vi.prototype.compareDocumentPosition=function(e){var n=S(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];v(this._fragmentFiber.child,!1,eh,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,y(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=s=a.compareDocumentPosition(e);return a===e?l=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=A(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),l=M(a[a.length-1]);var u=y(this._fragmentFiber)?n.parentElement:s;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=n.compareDocumentPosition(e),R=l.compareDocumentPosition(e),H=x&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=s&&u&&x&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===e||u&&l===e||H||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===e||!u&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||m1(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function m1(e,n,a,s,l){var u=Pe(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break e}u=u.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;e:{for(u=n,n=S(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=P(a,u,B),n===null?n=!1:(v(n,!0,I,u,a),u=E,E=null,n=u!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===s)&&(n=P(s,u,B),n===null?n=!1:(v(n,!0,L,u,s),u=E,D=E=null,n=u!==null)),n):!1}function wx(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}vi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(r(566));var n=[];v(this._fragmentFiber.child,!1,eh,n,void 0,void 0);var a=e!==!1;if(n.length===0){var s=A(this._fragmentFiber);if(s=a?s[1]||s[0]||S(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){e=M(s),wx(e,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(e);return}s.scrollIntoView(e)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var l=n[s];l.tag===6?(l=M(l),wx(l,a)):M(l).scrollIntoView(e),s+=a?-1:1}};function p1(e,n){return e=M(e),Dx(e,n),!1}function Dx(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function Ox(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];e.addEventListener(l.type,l.attachedListener,Yr(l.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var x=0,R=0;R<Xi.length;R++){var H=Xi[R];(H.fragmentInstance!==n||H.observer!==u||H.instance!==e)&&(Xi[x++]=H)}Xi.length=x,u.observe(e)}),Dx(e,n))}function g1(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];e.removeEventListener(l.type,l.attachedListener,Yr(l.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?d1(n,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function nh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nh(a),Le(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function x1(e,n,a,s){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Oe])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ui(e.nextSibling),e===null)break}return null}function v1(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ui(e.nextSibling),e===null))return null;return e}function Lx(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ui(e.nextSibling),e===null))return null;return e}function ih(e){return e.data==="$?"||e.data==="$~"}function ah(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _1(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var sh=null;function Ux(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Fx(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function S1(e,n){function a(){s=!0}if(e.ownerDocument.activeElement===e)return!0;var s=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return s}function E1(e){Ex(function(){Ex(function(n){return e(n)})})}function Ix(e,n,a){switch(n=il(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Px(e,n,a){for(var s in a){var l=a[s];a.hasOwnProperty(s)&&l!=null&&Kt(e,n,s,null,KM,l)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===na&&(e.onclick=null),Le(e)}function rh(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Le(e)}var Fi=new Map,Bx=new Set;function al(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Pa=Ce.d;Ce.d={f:M1,r:b1,D:y1,C:A1,L:T1,m:R1,X:C1,S:N1,M:w1};function M1(){var e=Pa.f(),n=Dc();return e||n}function b1(e){var n=We(e);n!==null&&n.tag===5&&n.type==="form"?H0(n):Pa.r(e)}var Zr=typeof document>"u"?null:document;function zx(e,n,a){var s=Zr;if(s&&typeof n=="string"&&n){var l=Ri(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Bx.has(l)||(Bx.add(l),e={rel:e,crossOrigin:a,href:n},s.querySelector(l)===null&&(n=s.createElement("link"),Gn(n,"link",e),He(n),s.head.appendChild(n)))}}function y1(e){Pa.D(e),zx("dns-prefetch",e,null)}function A1(e,n){Pa.C(e,n),zx("preconnect",e,n)}function T1(e,n,a){Pa.L(e,n,a);var s=Zr;if(s&&e&&n){var l='link[rel="preload"][as="'+Ri(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Ri(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Ri(a.imageSizes)+'"]')):l+='[href="'+Ri(e)+'"]';var u=l;switch(n){case"style":u=Kr(e);break;case"script":u=Qr(e)}if(!(Fi.has(u)||(e=b({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Fi.set(u,e),s.querySelector(l)!==null||n==="style"&&s.querySelector(sl(u))||n==="script"&&s.querySelector(rl(u))))){var x=s.createElement("link");Gn(x,"link",e),n==="style"&&(x[Ve]=!0,x.onload=x.onerror=function(){Mt(x)}),He(x),s.head.appendChild(x)}}}function R1(e,n){Pa.m(e,n);var a=Zr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Ri(s)+'"][href="'+Ri(e)+'"]',u=l;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Qr(e)}if(!Fi.has(u)&&(e=b({rel:"modulepreload",href:e},n),Fi.set(u,e),a.querySelector(l)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(rl(u)))return}s=a.createElement("link"),Gn(s,"link",e),He(s),a.head.appendChild(s)}}}function N1(e,n,a){Pa.S(e,n,a);var s=Zr;if(s&&e){var l=ut(s).hoistableStyles,u=Kr(e);n=n||"default";var x=l.get(u);if(!x){var R={loading:0,preload:null};if(x=s.querySelector(sl(u)))R.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Fi.get(u))&&oh(e,a);var H=x=s.createElement("link");He(H),Gn(H,"link",e),H._p=new Promise(function(ne,ue){H.onload=ne,H.onerror=ue}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Bc(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:R},l.set(u,x)}}}function C1(e,n){Pa.X(e,n);var a=Zr;if(a&&e){var s=ut(a).hoistableScripts,l=Qr(e),u=s.get(l);u||(u=a.querySelector(rl(l)),u||(e=b({src:e,async:!0},n),(n=Fi.get(l))&&lh(e,n),u=a.createElement("script"),He(u),Gn(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(l,u))}}function w1(e,n){Pa.M(e,n);var a=Zr;if(a&&e){var s=ut(a).hoistableScripts,l=Qr(e),u=s.get(l);u||(u=a.querySelector(rl(l)),u||(e=b({src:e,async:!0,type:"module"},n),(n=Fi.get(l))&&lh(e,n),u=a.createElement("script"),He(u),Gn(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(l,u))}}function Hx(e,n,a,s){var l=(l=cn.current)?al(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Kr(a.href),n=ut(l).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Kr(a.href);var u=ut(l).hoistableStyles,x=u.get(e);if(x||(l=l.ownerDocument||l,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,x),(u=l.querySelector(sl(e)))?u._p||(x.instance=u,x.state.loading=5):(u=Fi.get(e),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Fi.set(e,u)),D1(l,e,u,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Qr(a),n=ut(l).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Kr(e){return'href="'+Ri(e)+'"'}function sl(e){return'link[rel="stylesheet"]['+e+"]"}function Gx(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function D1(e,n,a,s){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ve]!==!0){s.loading=1;return}}else n=e.createElement("link"),n[Ve]=!0,n.onload=n.onerror=Mt.bind(null,n),Gn(n,"link",a),He(n),e.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Qr(e){return'[src="'+Ri(e)+'"]'}function rl(e){return"script[async]"+e}function Vx(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+Ri(a.href)+'"]');if(s)return n.instance=s,He(s),s;var l=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),He(s),Gn(s,"style",l),Bc(s,a.precedence,e),n.instance=s;case"stylesheet":l=Kr(a.href);var u=e.querySelector(sl(l));if(u)return n.state.loading|=4,n.instance=u,He(u),u;s=Gx(a),(l=Fi.get(l))&&oh(s,l),u=(e.ownerDocument||e).createElement("link"),He(u);var x=u;return x._p=new Promise(function(R,H){x.onload=R,x.onerror=H}),Gn(u,"link",s),n.state.loading|=4,Bc(u,a.precedence,e),n.instance=u;case"script":return u=Qr(a.src),(l=e.querySelector(rl(u)))?(n.instance=l,He(l),l):(s=a,(l=Fi.get(u))&&(s=b({},a),lh(s,l)),e=e.ownerDocument||e,l=e.createElement("script"),He(l),Gn(l,"link",s),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Bc(s,a.precedence,e));return n.instance}function Bc(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=s.length?s[s.length-1]:null,u=l,x=0;x<s.length;x++){var R=s[x];if(R.dataset.precedence===n)u=R;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function oh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function lh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var zc=null;function kx(e,n,a){if(zc===null){var s=new Map,l=zc=new Map;l.set(a,s)}else l=zc,s=l.get(a),s||(s=new Map,l.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var u=a[l];if(!(u[Oe]||u[mn]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var x=u.getAttribute(n)||"";x=e+x;var R=s.get(x);R?R.push(u):s.set(x,[u])}}return s}function ch(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function O1(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function jx(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Xx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Wx(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function qx(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=Wx(n),e.suspenseyImages.push(n)),e=F1.bind(e),n.decode().then(e,e))}function L1(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Kr(s.href),u=n.querySelector(sl(l));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ol.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=u,He(u);return}u=n.ownerDocument||n,s=Gx(s),(l=Fi.get(l))&&oh(s,l),u=u.createElement("link"),He(u);var x=u;x._p=new Promise(function(R,H){x.onload=R,x.onerror=H}),Gn(u,"link",s),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ol.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Hc=0;function U1(e,n){return e.stylesheets&&e.count===0&&Vc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Vc(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+n);0<e.imgBytes&&Hc===0&&(Hc=62500*JM());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vc(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Hc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(l)}}:null}function Yx(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Vc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function ol(){this.count--,Yx(this)}function F1(){this.imgCount--,Yx(this)}var Gc=null;function Vc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gc=new Map,n.forEach(I1,e),Gc=null,ol.call(e))}function I1(e,n){if(!(n.state.loading&4)){var a=Gc.get(e);if(a)var s=a.get(null);else{a=new Map,Gc.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var x=l[u];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}l=n.instance,x=l.getAttribute("data-precedence"),u=a.get(x)||s,u===s&&a.set(null,l),a.set(x,l),this.count++,s=ol.bind(this),l.addEventListener("load",s),l.addEventListener("error",s),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Jr={$$typeof:ee,Provider:null,Consumer:null,_currentValue:st,_currentValue2:st,_threadCount:0};function P1(e,n,a,s,l,u,x,R,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ma(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ma(0),this.hiddenUpdates=Ma(null),this.identifierPrefix=s,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.transitionTypes=null,this.incompleteTransitions=new Map}function Zx(e,n,a,s,l,u,x,R,H,ne,ue,be){return e=new P1(e,n,a,x,H,ne,ue,be,R),n=1,u===!0&&(n|=24),u=ni(3,null,null,n),e.current=u,u.stateNode=e,n=yf(),n.refCount++,e.pooledCache=n,n.refCount++,u.memoizedState={element:s,isDehydrated:a,cache:n},Nf(u),e}function Kx(e){return e?(e=yr,e):yr}function Qx(e,n,a,s,l,u){l=Kx(l),s.context===null?s.context=l:s.pendingContext=l,s=is(n),s.payload={element:a},u=u===void 0?null:u,u!==null&&(s.callback=u),a=as(e,s,n),a!==null&&(ri(a,e,n),Bo(a,e,n))}function Jx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function uh(e,n){Jx(e,n),(e=e.alternate)&&Jx(e,n)}function $x(e){if(e.tag===13||e.tag===31){var n=Hs(e,67108864);n!==null&&ri(n,e,67108864),uh(e,67108864)}}function ev(e){if(e.tag===13||e.tag===31){var n=xi();n=Us(n);var a=Hs(e,n);a!==null&&ri(a,e,n),uh(e,n)}}var $r=!0;function B1(e,n,a,s){var l=Se.T;Se.T=null;var u=Ce.p;try{Ce.p=2,fh(e,n,a,s)}finally{Ce.p=u,Se.T=l}}function z1(e,n,a,s){var l=Se.T;Se.T=null;var u=Ce.p;try{Ce.p=8,fh(e,n,a,s)}finally{Ce.p=u,Se.T=l}}function fh(e,n,a,s){if($r){var l=dh(s);if(l===null)Wd(e,n,s,kc,a),nv(e,s);else if(G1(l,e,n,a,s))s.stopPropagation();else if(nv(e,s),n&4&&-1<H1.indexOf(e)){for(;l!==null;){var u=We(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var x=ui(u.pendingLanes);if(x!==0){var R=u;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var H=1<<31-Ye(x);R.entanglements[1]|=H,x&=~H}da(u),(kt&6)===0&&(Nc=ge()+500,el(0))}}break;case 31:case 13:R=Hs(u,2),R!==null&&ri(R,u,2),Dc(),uh(u,2)}if(u=dh(s),u===null&&Wd(e,n,s,kc,a),u===l)break;l=u}l!==null&&s.stopPropagation()}else Wd(e,n,s,null,a)}}function dh(e){return e=Ku(e),hh(e)}var kc=null;function hh(e){if(kc=null,e=Pe(e),e!==null){var n=f(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=m(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return kc=e,null}function tv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_e()){case Fe:return 2;case k:return 8;case ve:case xe:return 32;case we:return 268435456;default:return 32}default:return 32}}var mh=!1,gs=null,xs=null,vs=null,ll=new Map,cl=new Map,_s=[],H1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function nv(e,n){switch(e){case"focusin":case"focusout":gs=null;break;case"dragenter":case"dragleave":xs=null;break;case"mouseover":case"mouseout":vs=null;break;case"pointerover":case"pointerout":ll.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(n.pointerId)}}function ul(e,n,a,s,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:u,targetContainers:[l]},n!==null&&(n=We(n),n!==null&&$x(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function G1(e,n,a,s,l){switch(n){case"focusin":return gs=ul(gs,e,n,a,s,l),!0;case"dragenter":return xs=ul(xs,e,n,a,s,l),!0;case"mouseover":return vs=ul(vs,e,n,a,s,l),!0;case"pointerover":var u=l.pointerId;return ll.set(u,ul(ll.get(u)||null,e,n,a,s,l)),!0;case"gotpointercapture":return u=l.pointerId,cl.set(u,ul(cl.get(u)||null,e,n,a,s,l)),!0}return!1}function iv(e){var n=Pe(e.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Is(e.priority,function(){ev(a)});return}}else if(n===31){if(n=m(a),n!==null){e.blockedOn=n,Is(e.priority,function(){ev(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=dh(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Zu=s,a.target.dispatchEvent(s),Zu=null}else return n=We(a),n!==null&&$x(n),e.blockedOn=a,!1;n.shift()}return!0}function av(e,n,a){jc(e)&&a.delete(n)}function V1(){mh=!1,gs!==null&&jc(gs)&&(gs=null),xs!==null&&jc(xs)&&(xs=null),vs!==null&&jc(vs)&&(vs=null),ll.forEach(av),cl.forEach(av)}function Xc(e,n){e.blockedOn===n&&(e.blockedOn=null,mh||(mh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,V1)))}var Wc=null;function sv(e){Wc!==e&&(Wc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Wc===e&&(Wc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],l=e[n+2];if(typeof s!="function"){if(hh(s||a)===null)continue;break}var u=We(a);u!==null&&(e.splice(n,3),n-=3,Zf(u,{pending:!0,data:l,method:a.method,action:s},s,l))}}))}function eo(e){function n(H){return Xc(H,e)}gs!==null&&Xc(gs,e),xs!==null&&Xc(xs,e),vs!==null&&Xc(vs,e),ll.forEach(n),cl.forEach(n);for(var a=0;a<_s.length;a++){var s=_s[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<_s.length&&(a=_s[0],a.blockedOn===null);)iv(a),a.blockedOn===null&&_s.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var l=a[s],u=a[s+1],x=l[$t]||null;if(typeof u=="function")x||sv(a);else if(x){var R=null;if(u&&u.hasAttribute("formAction")){if(l=u,x=u[$t]||null)R=x.formAction;else if(hh(l)!==null)continue}else R=x.action;typeof R=="function"?a[s+1]=R:(a.splice(s,3),s-=3),sv(a)}}}function rv(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(x){return l=x})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function ph(e){this._internalRoot=e}qc.prototype.render=ph.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=xi();Qx(a,s,e,n,null,null)},qc.prototype.unmount=ph.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Qx(e.current,2,null,e,null,null),Dc(),n[N]=null}};function qc(e){this._internalRoot=e}qc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Fs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<_s.length&&n!==0&&n<_s[a].priority;a++);_s.splice(a,0,e),a===0&&iv(e)}};var ov=t.version;if(ov!=="19.3.1")throw Error(r(527,ov,"19.3.1"));Ce.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var k1={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Se,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yc.isDisabled&&Yc.supportsFiber)try{Ke=Yc.inject(k1),nt=Yc}catch{}}return dl.createRoot=function(e,n){if(!c(e))throw Error(r(299));var a=!1,s="",l=K0,u=Q0,x=J0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Zx(e,1,!1,null,null,a,s,null,l,u,x,rv),e[N]=n.current,Xd(e),new ph(n)},dl.hydrateRoot=function(e,n,a){if(!c(e))throw Error(r(299));var s=!1,l="",u=K0,x=Q0,R=J0,H=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Zx(e,1,!0,n,a??null,s,l,H,u,x,R,rv),n.context=Kx(null),a=n.current,s=xi(),s=Us(s),l=is(s),l.callback=null,as(a,l,s),a=s,n.current.lanes=a,zi(n,a),da(n),e[N]=n.current,Xd(e),new qc(n)},dl.version="19.3.1",dl}var xv;function eb(){if(xv)return vh.exports;xv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),vh.exports=$1(),vh.exports}var tb=eb();const nb=v_(tb),ib="http://localhost:8000/api/tarefas.php",ab="http://localhost:3001/api/analisar-fadiga";function __(o){const{wpmAtual:t,taxaErro:i,tarefasCriticasPendentes:r,autoavaliacao:c}=o,f=65,d=Math.max(0,f-t),m=Math.min(60,d/f*55),g=Math.min(40,i*4),p=Math.min(100,Math.round(m+g)),_=Math.min(100,r*28);let v=Math.round(_*.5+p*.5),S=!1;c==="OTIMO"&&(t<35||i>8||v>60)?(S=!0,v=Math.min(100,v+18)):c==="EXAUSTO"&&(v=Math.min(100,v+12));let y="NOMINAL",A="Nenhuma restrição circadiana ativa. Estado operacional satisfatório.";return v>=75?(y="CRITICO",A="ALERTA: Bloqueio autônomo de tarefas críticas e atenuação do espectro de iluminação da cabine."):v>=45&&(y="ATENCAO",A="ATENÇÃO: Fadiga moderada em desenvolvimento. Sugerido micro-intervalo de recuperação."),{indiceFinal:Math.min(100,Math.max(8,v)),severidade:y,fatorOmissaoDetectado:S,scoreCarga:_,scoreDigitacao:p,recomendacao:A}}const vv={async sincronizarTarefas(o){try{const t=new AbortController,i=setTimeout(()=>t.abort(),1200),r=await fetch(ib,{method:"GET",signal:t.signal});if(clearTimeout(i),!r.ok)throw new Error(`HTTP status: ${r.status}`);const c=await r.json();return{tarefas:Array.isArray(c)?c:o,isEdge:!1}}catch{return{tarefas:o,isEdge:!0}}},async processarAnaliseFadiga(o){try{const t=new AbortController,i=setTimeout(()=>t.abort(),1200),r=await fetch(ab,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o),signal:t.signal});if(clearTimeout(i),!r.ok)throw new Error(`HTTP status: ${r.status}`);return{analise:await r.json(),isEdge:!1}}catch{return{analise:__({wpmAtual:o.wpmAtual,taxaErro:o.taxaErro,tarefasCriticasPendentes:o.tarefasCriticasPendentes,autoavaliacao:o.autoavaliacao}),isEdge:!0}}},async transmitirProtocoloRecuperacao(o){return new Promise(t=>{setTimeout(()=>{t({sucesso:!0,timestampAck:new Date().toISOString()})},800)})}},_v=[{id:"ast-01",nome:"Alex Vance",cargo:"Comandante da Missão",indicativo:"CDR-1",indiceFadiga:22,autoavaliacao:"OTIMO",wpm:68,taxaErro:1.4,latenciaTeclaMs:142,horasVigilia:7.5,statusOperacional:"NOMINAL",tarefaAtiva:"TSK-401: Repressurização do Airlock Quest",circadianDebtHoras:1.2,historicoDias:[{dia:"SOL 138",fadigaReal:18,autoAvaliacaoNum:20,wpm:72,omissao:!1},{dia:"SOL 139",fadigaReal:24,autoAvaliacaoNum:25,wpm:69,omissao:!1},{dia:"SOL 140",fadigaReal:68,autoAvaliacaoNum:20,wpm:38,omissao:!0,nota:'Discrepância Crítica: Autoavaliação "Ótimo", mas WPM caiu 45%'},{dia:"SOL 141",fadigaReal:44,autoAvaliacaoNum:40,wpm:58,omissao:!1},{dia:"SOL 142 (HOJE)",fadigaReal:22,autoAvaliacaoNum:20,wpm:68,omissao:!1}]},{id:"ast-02",nome:"Dra. Marcus Chen",cargo:"Especialista de Missão / Bio-Pesquisa",indicativo:"MS-1",indiceFadiga:38,autoavaliacao:"NEUTRO",wpm:61,taxaErro:2.1,latenciaTeclaMs:165,horasVigilia:9,statusOperacional:"NOMINAL",tarefaAtiva:"TSK-404: Telemetria Banda Ka",circadianDebtHoras:2.8,historicoDias:[{dia:"SOL 138",fadigaReal:30,autoAvaliacaoNum:30,wpm:65,omissao:!1},{dia:"SOL 139",fadigaReal:35,autoAvaliacaoNum:35,wpm:63,omissao:!1},{dia:"SOL 140",fadigaReal:42,autoAvaliacaoNum:40,wpm:59,omissao:!1},{dia:"SOL 141",fadigaReal:52,autoAvaliacaoNum:30,wpm:49,omissao:!0,nota:"Fator Omissão: WPM reduzido durante bio-experimento"},{dia:"SOL 142 (HOJE)",fadigaReal:38,autoAvaliacaoNum:35,wpm:61,omissao:!1}]},{id:"ast-03",nome:"Sarah Sato",cargo:"Engenheira de Voo e Propulsão",indicativo:"FE-2",indiceFadiga:49,autoavaliacao:"NEUTRO",wpm:54,taxaErro:3.8,latenciaTeclaMs:198,horasVigilia:11.2,statusOperacional:"FADIGA_MODERADA",tarefaAtiva:"TSK-403: Filtro CO2 Zarya",circadianDebtHoras:4.1,historicoDias:[{dia:"SOL 138",fadigaReal:28,autoAvaliacaoNum:25,wpm:67,omissao:!1},{dia:"SOL 139",fadigaReal:45,autoAvaliacaoNum:30,wpm:55,omissao:!0},{dia:"SOL 140",fadigaReal:60,autoAvaliacaoNum:35,wpm:46,omissao:!0},{dia:"SOL 141",fadigaReal:74,autoAvaliacaoNum:40,wpm:34,omissao:!0,nota:"Limiar Crítico Atingido - Bloqueio de RCS automático"},{dia:"SOL 142 (HOJE)",fadigaReal:49,autoAvaliacaoNum:45,wpm:54,omissao:!1}]}],Mh=[{id:"tsk-401",codigo:"TSK-401",titulo:"Repressurização e Teste Estático do Airlock Quest (EVA-2)",modulo:"AIRLOCK QUEST // EXTERNAL",criticidade:"CRITICA",status:"EM_ANDAMENTO",responsavelId:"ast-01",responsavelNome:"Alex Vance (CDR)",duracaoEstimadaMin:90,timestamp:"MET 142:07:30"},{id:"tsk-402",codigo:"TSK-402",titulo:"Válvula de Isolação do Propulsor RCS Bloco Bravo",modulo:"SERVICE PROPULSION // BLK-B",criticidade:"CRITICA",status:"PENDENTE",responsavelId:"ast-01",responsavelNome:"Alex Vance (CDR)",duracaoEstimadaMin:60,timestamp:"MET 142:09:00"},{id:"tsk-403",codigo:"TSK-403",titulo:"Substituição do Cartucho LiOH Depurador de CO2",modulo:"ECLSS // LIFE SUPPORT",criticidade:"ALTA",status:"EM_ANDAMENTO",responsavelId:"ast-03",responsavelNome:"Sarah Sato (FE-2)",duracaoEstimadaMin:45,timestamp:"MET 142:06:15"},{id:"tsk-404",codigo:"TSK-404",titulo:"Alinhamento de Ganho da Antena Banda Ka DSN",modulo:"COMM-ARRAY // HIGH-GAIN",criticidade:"PADRAO",status:"PENDENTE",responsavelId:"ast-02",responsavelNome:"Marcus Chen (MS-1)",duracaoEstimadaMin:30,timestamp:"MET 142:10:00"},{id:"tsk-405",codigo:"TSK-405",titulo:"Inventário e Purga do Tanque de O2 Criogênico 03",modulo:"CRYO-STORAGE // BAY-3",criticidade:"PADRAO",status:"PENDENTE",responsavelId:"ast-02",responsavelNome:"Marcus Chen (MS-1)",duracaoEstimadaMin:40,timestamp:"MET 142:11:30"}],Sv=[{id:"prot-01",codigo:"DELTA-CIRC-01",nome:"Protocolo de Atenuação Circadiana Noturna",descricao:"Reduz emissão de luz de 480nm em 85%, transiciona temperatura de cor para 2700K e ativa blackout de notificações operacionais secundárias.",reducaoEspectroAzul:85,temperaturaLuzK:2700,periodoDescansoMin:90,status:"STANDBY"},{id:"prot-02",codigo:"RAPID-RESET-04",nome:"Power-Nap de Alta Eficiência com Re-ignição Cognitiva",descricao:"Soneca orientada de 26 minutos (padrão NASA Ames Research) seguida por micro-tarefas não críticas com espectro luminoso de ativação a 6500K.",reducaoEspectroAzul:95,temperaturaLuzK:2200,periodoDescansoMin:26,status:"STANDBY"},{id:"prot-03",codigo:"OMEGA-OVERRIDE-CRIT",nome:"Contenção de Emergência por Sobrecarga de Vigília",descricao:"Bloqueio estrito de válvulas e propulsão manual. Transferência autônoma de autoridade de controle para a Terra / Computador Primário de Voo.",reducaoEspectroAzul:70,temperaturaLuzK:3e3,periodoDescansoMin:180,status:"STANDBY"}],sb=[{id:"log-001",timestamp:"MET 142:08:35.120",tipo:"MISSION_EVENT",nivel:"INFO",origem:"ONBOARD_EDGE",mensagem:"Inicialização nominal do motor ORBIT-IQ Core Sync v1.4.2",detalhe:"Arquitetura híbrida edge/Houston sincronizada."},{id:"log-002",timestamp:"MET 142:08:38.450",tipo:"KEYSTROKE",nivel:"SUCCESS",origem:"SENSORLESS_HYBRID",mensagem:"Linha de base de digitação validada para CDR-1: 68 WPM, 1.4% de erro",detalhe:"Latência média de clique: 142ms. Coeficiente de fluência dentro da curva nominal."},{id:"log-003",timestamp:"MET 142:08:41.890",tipo:"UPLINK_PACKET",nivel:"INFO",origem:"HOUSTON_GROUND",mensagem:"Pacote de telemetria recebido no Deep Space Network (Goldstone)",detalhe:"Vetor de atraso de propagação orbital calculado em -18m 42s."}],S_=qe.createContext(void 0),rb=({children:o})=>{const[t,i]=qe.useState("crew"),[r,c]=qe.useState(_v),[f,d]=qe.useState(Mh),[m,g]=qe.useState(Sv),[p,_]=qe.useState(sb),[v,S]=qe.useState(!0),[y,A]=qe.useState(!1),[w,M]=qe.useState(1.25),[E,D]=qe.useState(142*3600+480+44),I=r[0],[L,B]=qe.useState({sistolica:118,diastolica:76,pulsoBpm:68,status:"NORMAL",emMedicao:!1,alertaParadaObrigatoria:!1,timestampUltimaMedicao:"MET 142:08:15"}),[P,b]=qe.useState({velocidadeFalaPPM:138,tomVozHz:124,jitterAcusticoPercent:1.1,monotoniaScore:16,sindromeAstronautaRisco:12,edemaFacialDetectado:!1,diagnosticoClinico:"Parâmetros vocais e vestibulares em conformidade nominal. Sem sinais de disartria.",emChamada:!1,modoCamera:"SIMULADO"});qe.useEffect(()=>{const J=setInterval(()=>{D(ce=>ce+1)},1e3);return()=>clearInterval(J)},[]);const j=(J=>{const ce=Math.floor(J/86400),he=Math.floor(J%86400/3600),Te=Math.floor(J%3600/60),Xe=J%60;return`T+${ce.toString().padStart(3,"0")}:${he.toString().padStart(2,"0")}:${Te.toString().padStart(2,"0")}:${Xe.toString().padStart(2,"0")}`})(E),G="-18m 42s",F=qe.useCallback((J,ce,he,Te)=>{const Xe=new Date,Se=`MET 142:${Xe.getMinutes().toString().padStart(2,"0")}:${Xe.getSeconds().toString().padStart(2,"0")}.${Xe.getMilliseconds().toString().padStart(3,"0")}`,Ce={id:`log-${Date.now()}-${Math.random().toString(36).substring(2,6)}`,timestamp:Se,tipo:J,nivel:ce,origem:J==="UPLINK_PACKET"?"HOUSTON_GROUND":J==="KEYSTROKE"?"SENSORLESS_HYBRID":"ONBOARD_EDGE",mensagem:he,detalhe:Te};_(st=>[Ce,...st.slice(0,99)])},[]);qe.useEffect(()=>{vv.sincronizarTarefas(Mh).then(J=>{S(J.isEdge)})},[]);const W=qe.useMemo(()=>{const J=I.indiceFadiga,ce=L.status==="HIPERTENSAO_CRITICA",he=Te=>{const Xe=J*Te;return Xe>=68||ce?"CRITICO":Xe>=40?"ALERTA":"NORMAL"};return[{id:"zona-cabeca",nome:"Córtex Pré-Frontal & Visor Ocular",regiao:"CABECA_VISOR",nivelFadiga:he(1.1),percentual:Math.min(100,Math.round(J*1.05)),detalheClinico:J>=75?"Sobrecarga decisória severa. Espasmos sacádicos e micro-lapsos de foco.":J>=45?"Aumento de tempo de reação em telas de voo.":"Acuidade visual e reflexos em parâmetros ideais."},{id:"zona-coracao",nome:"Sistema Cardiovascular & Torácico",regiao:"CORACAO_TORAX",nivelFadiga:ce?"CRITICO":he(1),percentual:Math.min(100,Math.round(ce?92:J*.9)),detalheClinico:ce?`HIPERTENSÃO SISTÊMICA (${L.sistolica}/${L.diastolica} mmHg). Risco de arritmia espacial.`:J>=50?"Variabilidade da frequência cardíaca (HRV) reduzida.":"Ritmo sinusal regular. Oxigenação sanguínea a 99%."},{id:"zona-braco-esq",nome:"Braço Esquerdo // Manguito de Pressão Arterial",regiao:"BRACO_ESQUERDO",nivelFadiga:ce?"CRITICO":L.status==="ELEVADA"?"ALERTA":"NORMAL",percentual:Math.min(100,Math.round(L.sistolica/1.7)),detalheClinico:ce?"PRESSÃO ALTA: Manguito do traje acusa sobrecarga hemodinâmica. PARADA OBRIGATÓRIA.":`Sensor braquial nominal: ${L.sistolica}/${L.diastolica} mmHg (${L.pulsoBpm} bpm).`},{id:"zona-coluna",nome:"Coluna Cervical & Músculo Trapézio",regiao:"COLUNA_TRAPEZIO",nivelFadiga:he(.95),percentual:Math.min(100,Math.round(J*.95)),detalheClinico:J>=60?"Tensão muscular decorrente da ausência de gravidade (distensão espinhal +3.2cm).":"Contratura muscular dentro da margem de conforto."},{id:"zona-maos",nome:"Mãos & Motricidade Fina dos Dedos",regiao:"MAOS_DEDOS",nivelFadiga:I.taxaErro>8||J>=70?"CRITICO":J>=40?"ALERTA":"NORMAL",percentual:Math.min(100,Math.round(I.taxaErro*6+J*.4)),detalheClinico:I.taxaErro>8?`Descoordenação neuromuscular fina. Taxa de erros de digitação em ${I.taxaErro}%.`:"Cadência motora suficiente para manobras de precisão."},{id:"zona-pernas",nome:"Membros Inferiores & Traje G-Suit",regiao:"MEMBROS_INFERIORES",nivelFadiga:he(.75),percentual:Math.min(100,Math.round(J*.75)),detalheClinico:J>=65?"Deslocamento cefálico de fluidos (Cephalad Fluid Shift) provocando atrofia postural.":"Perfusão e pressão capilar nos membros inferiores normais."}]},[I.indiceFadiga,I.taxaErro,L]),q=qe.useCallback(async()=>{B($e=>({...$e,emMedicao:!0})),F("MISSION_EVENT","INFO","INFLAÇÃO DO MANGUITO BRAQUIAL ESQUERDO: Aferindo pressão arterial do traje...","Bomba micro-pneumática de bordo insuflando manguito bio-integrado no braço esquerdo."),await new Promise($e=>setTimeout($e,2500));const J=I.indiceFadiga>=75||y,ce=Math.floor(J?155+Math.random()*15:115+Math.random()*8),he=Math.floor(J?98+Math.random()*10:74+Math.random()*6),Te=Math.floor(J?105+Math.random()*15:66+Math.random()*6),Xe=ce>=140||he>=90,Se=Xe?"HIPERTENSAO_CRITICA":ce>=130?"ELEVADA":"NORMAL",Ce=new Date,st=`MET 142:${Ce.getMinutes().toString().padStart(2,"0")}:${Ce.getSeconds().toString().padStart(2,"0")}`;B({sistolica:ce,diastolica:he,pulsoBpm:Te,status:Se,emMedicao:!1,alertaParadaObrigatoria:Xe,timestampUltimaMedicao:st}),Xe?F("OVERRIDE_TRIGGER","CRITICAL",`ALERTA MÉDICO DE EMERGÊNCIA: HIPERTENSÃO SEVERA DETECTADA NO BRAÇO ESQUERDO (${ce}/${he} mmHg)`,"PROTOCOLO DE PARADA OPERACIONAL IMEDIATA ATIVADO. Tripulante proibido de manipular propulsão e airlock."):F("MISSION_EVENT","SUCCESS",`Medição braquial concluída: ${ce}/${he} mmHg (${Te} BPM)`,"Pressão arterial dentro dos limites de tolerância para operação de voo.")},[I.indiceFadiga,y,F]),z=qe.useCallback(()=>{b(J=>({...J,emChamada:!0,velocidadeFalaPPM:I.indiceFadiga>=75?84:136,tomVozHz:I.indiceFadiga>=75?98:124,jitterAcusticoPercent:I.indiceFadiga>=75?7.6:1.2,monotoniaScore:I.indiceFadiga>=75?82:18,sindromeAstronautaRisco:I.indiceFadiga>=75?86:14,edemaFacialDetectado:I.indiceFadiga>=75,diagnosticoClinico:I.indiceFadiga>=75?"SÍNDROME DE ADAPTAÇÃO ESPACIAL SEVERA (SAS): Disartria detectada, micro-hesitações vocais anormais e apatia acentuada.":"Parâmetros vocais e vestibulares em conformidade nominal. Sem sinais de disartria."})),F("UPLINK_PACKET","WARN","CANAL DE TELEMEDICINA ABERTO: Consulta médica em tempo real com Houston Flight Surgeon","IA acústica de bordo inicializada: monitorando velocidade de fala, jitter vocal e Síndrome do Astronauta.")},[I.indiceFadiga,F]),ee=qe.useCallback(()=>{b(J=>({...J,emChamada:!1})),F("MISSION_EVENT","INFO","Canal de telemedicina encerrado pelo cirurgião de voo.","Relatório de análise de voz salvo no prontuário do Core Sync.")},[F]),Z=qe.useCallback(()=>{b(J=>({...J,modoCamera:J.modoCamera==="SIMULADO"?"WEBCAM":"SIMULADO"}))},[]),V=qe.useCallback((J,ce,he)=>{const Te=f.filter($e=>$e.responsavelId==="ast-01"&&$e.criticidade==="CRITICA"&&$e.status!=="CONCLUIDA").length,Se=__({wpmAtual:J,taxaErro:ce,tarefasCriticasPendentes:Te,autoavaliacao:he}).indiceFinal,Ce=Se>=75;let st="NOMINAL";Ce?st="BLOQUEIO_AUTONOMO":Se>=55?st="RESTRICAO_CRITICA":Se>=40&&(st="FADIGA_MODERADA"),c($e=>$e.map(Et=>Et.id==="ast-01"?{...Et,indiceFadiga:Se,wpm:J,taxaErro:ce,autoavaliacao:he,statusOperacional:st}:Et)),Ce&&!y?(A(!0),B($e=>({...$e,sistolica:162,diastolica:104,pulsoBpm:112,status:"HIPERTENSAO_CRITICA",alertaParadaObrigatoria:!0})),F("OVERRIDE_TRIGGER","CRITICAL","AUTONOMOUS CIRCADIAN OVERRIDE: Limiar crítico de fadiga violado (>75%)","A nave assumiu a contenção. Tarefas críticas com risco de erro humano adiadas."),d($e=>$e.map(Et=>Et.responsavelId==="ast-01"&&Et.criticidade==="CRITICA"&&Et.status!=="CONCLUIDA"?{...Et,status:"ADIADA_POR_FADIGA",adiadaAutomaticamente:!0,motivoAdiantamento:"Sobrecarga cognitiva e hemodinâmica detectada por análise comportamental."}:Et))):!Ce&&y&&A(!1)},[f,y,F]),me=qe.useCallback((J,ce,he)=>{if(J.trim().length===0)return;const Te=J.trim().split(/\s+/).length,Xe=Math.max(.05,he/6e4),Se=Math.min(120,Math.round(Te/Xe)),Ce=J.length,st=Ce>0?Math.min(30,parseFloat((ce/Ce*100).toFixed(1))):1,$e=Math.round(Math.max(110,6e4/(Math.max(20,Se)*5)));c(Et=>Et.map(yt=>yt.id==="ast-01"?{...yt,wpm:Se,taxaErro:st,latenciaTeclaMs:$e}:yt)),F("KEYSTROKE","INFO",`Telemetria de digitação: ${Se} WPM | Erros: ${st}% | Latência: ${$e}ms`,"Amostragem comportamental capturada sem necessidade de wearables ou câmeras intrusivas."),V(Se,st,I.autoavaliacao)},[I.autoavaliacao,V,F]),Q=qe.useCallback(J=>{c(ce=>ce.map(he=>he.id==="ast-01"?{...he,autoavaliacao:J}:he)),F("CROSS_VALIDATION","INFO",`Micro-check-in subjetivo recebido: [${J}]`,"Orbit-IQ cruzando percepção subjetiva com biomarcadores de digitação e carga de trabalho."),V(I.wpm,I.taxaErro,J)},[I.wpm,I.taxaErro,V,F]),pe=qe.useCallback(J=>{d(ce=>ce.map(he=>he.id===J?{...he,status:"CONCLUIDA"}:he)),F("MISSION_EVENT","SUCCESS",`Tarefa ${J.toUpperCase()} concluída pelo tripulante a bordo`,"Carga operacional reajustada no modelo neural preditivo.")},[F]),ye=qe.useCallback(async J=>{const ce=m.find(he=>he.id===J);ce&&(g(he=>he.map(Te=>Te.id===J?{...Te,status:"TRANSMITINDO"}:Te)),F("UPLINK_PACKET","WARN",`Houston Uplink: Transmitindo ${ce.codigo} para o computador de bordo...`,"Protocolo médico circadiano de Houston enviado com retardo orbital (-18m 42s)."),await vv.transmitirProtocoloRecuperacao(),g(he=>he.map(Te=>Te.id===J?{...Te,status:"APLICADO_A_BORDO"}:Te)),F("OVERRIDE_TRIGGER","SUCCESS",`CONFIRMAÇÃO DE RECEBIMENTO: Protocolo ${ce.codigo} executado na cabine`,`Luz reduzida em ${ce.reducaoEspectroAzul}% (${ce.temperaturaLuzK}K). Janela de descanso de ${ce.periodoDescansoMin}m ativada.`))},[m,F]),je=qe.useCallback((J,ce)=>{d(he=>he.map(Te=>Te.id===J?{...Te,status:"PENDENTE",timestamp:ce,adiadaAutomaticamente:!1}:Te)),F("MISSION_EVENT","INFO",`CAPCOM / Houston aprovou reagendamento de ${J.toUpperCase()} para ${ce}`,"Cronograma oficial da missão recalculado e sincronizado com o Core Sync.")},[F]),et=qe.useCallback(J=>{d(ce=>ce.map(he=>he.id===J?{...he,status:"EM_ANDAMENTO",adiadaAutomaticamente:!1}:he)),F("MISSION_EVENT","WARN",`Override manual de CAPCOM: Tarefa ${J.toUpperCase()} restabelecida a bordo`,"Atenção: tripulante sob acompanhamento de risco de erro.")},[F]),O=qe.useCallback(()=>{A(!0),c(J=>J.map(ce=>ce.id==="ast-01"?{...ce,indiceFadiga:86,wpm:24,taxaErro:14.8,latenciaTeclaMs:390,horasVigilia:19,autoavaliacao:"OTIMO",statusOperacional:"BLOQUEIO_AUTONOMO"}:ce)),B({sistolica:165,diastolica:106,pulsoBpm:118,status:"HIPERTENSAO_CRITICA",emMedicao:!1,alertaParadaObrigatoria:!0,timestampUltimaMedicao:"MET 142:08:44 (ALERTA)"}),b(J=>({...J,velocidadeFalaPPM:78,tomVozHz:92,jitterAcusticoPercent:8.4,monotoniaScore:88,sindromeAstronautaRisco:91,edemaFacialDetectado:!0,diagnosticoClinico:"SÍNDROME DE ADAPTAÇÃO ESPACIAL GRAVE (SAS): Fala bradilálica, exaustão psicomotora e hipertensão no manguito esquerdo."})),d(J=>J.map(ce=>ce.criticidade==="CRITICA"&&ce.responsavelId==="ast-01"?{...ce,status:"ADIADA_POR_FADIGA",adiadaAutomaticamente:!0,motivoAdiantamento:"Fadiga extrema (>86%) e Hipertensão no Braço Esquerdo (165/106 mmHg). Risco severo."}:ce)),F("OVERRIDE_TRIGGER","CRITICAL","SIMULAÇÃO ATIVADA: ANOMALIA DE FADIGA CRÍTICA DISPARADA (86%) COM HIPERTENSÃO SEVERA","Braço esquerdo indicou 165/106 mmHg. Fala caiu para 78 PPM. Bloqueio operacional compulsório ativado.")},[F]),ie=qe.useCallback(()=>{A(!1),c(_v),d(Mh),g(Sv),B({sistolica:118,diastolica:76,pulsoBpm:68,status:"NORMAL",emMedicao:!1,alertaParadaObrigatoria:!1,timestampUltimaMedicao:"MET 142:08:15"}),b({velocidadeFalaPPM:138,tomVozHz:124,jitterAcusticoPercent:1.1,monotoniaScore:16,sindromeAstronautaRisco:12,edemaFacialDetectado:!1,diagnosticoClinico:"Parâmetros vocais e vestibulares em conformidade nominal. Sem sinais de disartria.",emChamada:!1,modoCamera:"SIMULADO"}),F("MISSION_EVENT","SUCCESS","RESET OPERACIONAL: Telemetria restaurada aos parâmetros nominais","Sistemas de bordo desativaram modo de contenção circadiana. Todas as barreiras nominais ativas.")},[F]);return h.jsx(S_.Provider,{value:{perfilAtivo:t,setPerfilAtivo:i,astronautas:r,astronautaAtivo:I,tarefas:f,logs:p,protocolos:m,isEdgeMode:v,modoContencaoAtivo:y,metTempo:j,delayHouston:G,escalaZoom:w,setEscalaZoom:M,pressaoArterial:L,aferirPressaoArterial:q,zonasCorporais:W,analiseVozIA:P,iniciarChamadaTelemedicina:z,encerrarChamadaTelemedicina:ee,alternarModoCamera:Z,registrarDigitacaoTerminal:me,atualizarAutoavaliacao:Q,completarTarefa:pe,transmitirProtocolo:ye,aprovarAjusteTarefa:je,reverterAdiantamento:et,forcarAnomaliaFadiga:O,resetarSistema:ie,adicionarLog:F},children:o})},Wa=()=>{const o=qe.useContext(S_);if(!o)throw new Error("useOrbit deve ser utilizado dentro de um OrbitProvider");return o};/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=o=>o==null?void 0:o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function lb(o,t,i=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:ob(o),size:24,node:t,...i.length>0?{aliases:i}:{}}}/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=o=>{let t="",i=!1;for(const r of o){if(r==="-"||r==="_"||r<=" "){i=t.length>0;continue}t.length===0?t+=r.toLowerCase():t+=i?r.toUpperCase():r,i=!1}return t};/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=o=>{const t=cb(o);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=(...o)=>o.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function bh(o){return o!=null}function fb(o,t={}){var S,y;const i=t.attributeNames??{},r=A=>i[A]??A,c=o.size??o.width??ar.width,f=o.size??o.height??ar.height,d=((S=o.aliases)==null?void 0:S.filter(A=>typeof A=="string"&&A.trim()!=="").map(A=>`lucide-${A}`))??[],m=[...o.name?[`lucide-${o.name}`]:[],...d],g=((y=t.className)==null?void 0:y.split(" ").filter(Boolean))??[],p=t.includeDefaultClasses===!1?Jh(...g):Jh("lucide",...m,...g),_=t.absoluteStrokeWidth?Number(t.strokeWidth??ar["stroke-width"])*Number(o.size??o.width??ar.width)/Number(t.size??t.width??ar.width):t.strokeWidth??ar["stroke-width"];return["svg",{...Object.entries(ar).reduce((A,[w,M])=>(A[r(w)]=M,A),{}),..."color"in t&&t.color&&{[r("stroke")]:t.color},..."size"in t&&bh(t.size)&&{[r("width")]:t.size,[r("height")]:t.size},..."width"in t&&bh(t.width)&&{[r("width")]:t.width},..."height"in t&&bh(t.height)&&{[r("height")]:t.height},[r("stroke-width")]:_,...p&&{[r("class")]:p},[r("viewBox")]:`0 0 ${c} ${f}`,...t.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},o.node.map(A=>{const[w,M,E]=A,D=t.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...M}:M;return E?[w,D,E]:[w,D]})]}/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function db(o,t={}){return fb(o,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},mb=qe.createContext({}),pb=()=>qe.useContext(mb),gb=qe.forwardRef(({color:o,size:t,width:i,height:r,strokeWidth:c,absoluteStrokeWidth:f,nonScalingStroke:d,className:m="",children:g,iconNode:p=[],icon:_={node:p,aliases:[],size:24},...v},S)=>{const{size:y=24,strokeWidth:A=2,absoluteStrokeWidth:w=!1,nonScalingStroke:M=!1,color:E="currentColor",className:D=""}=pb()??{},I=!!g||hb(v),[L,B,P=[]]=db(_,{color:o??E,width:i??t??y,height:r??t??y,strokeWidth:c??A,absoluteStrokeWidth:f??w,nonScalingStroke:d??M,className:Jh(D,m),hasA11yProp:I,attributes:v});return qe.createElement(L,{ref:S,...B},[...P.map(([b,C])=>qe.createElement(b,C)),...Array.isArray(g)?g:[g]])});/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function pt(o,t=[],i=[]){const r=typeof o=="string"?lb(o,t,i):o,c=qe.forwardRef(({className:f,...d},m)=>qe.createElement(gb,{ref:m,icon:r,className:f,...d}));return r.name&&(c.displayName=ub(r.name)),c}/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};E_.node;const Tu=pt(E_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};M_.node;const xb=pt(M_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};b_.node;const vb=pt(b_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};y_.node;const Ru=pt(y_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};A_.node;const Nu=pt(A_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};T_.node;const R_=pt(T_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};N_.node;const _b=pt(N_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};C_.node;const w_=pt(C_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};D_.node;const O_=pt(D_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};L_.node;const jm=pt(L_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};U_.node;const Sb=pt(U_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};F_.node;const Eb=pt(F_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};I_.node;const Mb=pt(I_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};P_.node;const bb=pt(P_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_={name:"gauge",size:24,node:[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]};B_.node;const z_=pt(B_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_={name:"heart-pulse",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]]};H_.node;const $h=pt(H_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]};G_.node;const yb=pt(G_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};V_.node;const Ab=pt(V_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};k_.node;const Tb=pt(k_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};j_.node;const Ev=pt(j_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_={name:"mic-off",size:24,node:[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]]};X_.node;const Rb=pt(X_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_={name:"mic",size:24,node:[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]]};W_.node;const Nb=pt(W_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};q_.node;const Cb=pt(q_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_={name:"octagon-exclamation-point",size:24,node:[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]],aliases:["alert-octagon","octagon-alert"]};Y_.node;const wb=pt(Y_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};Z_.node;const Db=pt(Z_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_={name:"phone-call",size:24,node:[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};K_.node;const Ob=pt(K_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_={name:"phone-off",size:24,node:[["path",{d:"M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272",key:"1wngk7"}],["path",{d:"M22 2 2 22",key:"y4kqgn"}],["path",{d:"M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473",key:"10hv5p"}]]};Q_.node;const Lb=pt(Q_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};J_.node;const Ub=pt(J_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};$_.node;const Cu=pt($_);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS={name:"rotate-3d",size:24,node:[["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M16.47214 7.52786 A 5 10 0 1 0 13 21.79796",key:"1245p8"}],["path",{d:"M21.79796 11 A 10 5 0 1 0 19 15.57071",key:"1i40ks"}]],aliases:["rotate-3-d"]};eS.node;const wu=pt(eS);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};tS.node;const Fb=pt(tS);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};nS.node;const iS=pt(nS);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};aS.node;const sS=pt(aS);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS={name:"shield-exclamation-point",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],aliases:["shield-alert"]};rS.node;const oS=pt(rS);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};lS.node;const cS=pt(lS);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS={name:"trending-up",size:24,node:[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]};uS.node;const Ib=pt(uS);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS={name:"triangle-exclamation-point",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle","triangle-alert"]};fS.node;const Gu=pt(fS);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS={name:"user-check",size:24,node:[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};dS.node;const Pb=pt(dS);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};hS.node;const Bb=pt(hS);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};mS.node;const Mv=pt(mS);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS={name:"video-off",size:24,node:[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",key:"w8jjjt"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",key:"1xawa7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};pS.node;const zb=pt(pS);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS={name:"video",size:24,node:[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]};gS.node;const Du=pt(gS);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};xS.node;const vS=pt(xS);/**
 * @license lucide-react v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S={name:"zoom-in",size:24,node:[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]};_S.node;const Hb=pt(_S),Gb=()=>{const{perfilAtivo:o,setPerfilAtivo:t,modoContencaoAtivo:i,metTempo:r,forcarAnomaliaFadiga:c,resetarSistema:f,escalaZoom:d,setEscalaZoom:m,astronautaAtivo:g}=Wa(),p=[{id:"crew",label:"1. ASTRONAUTA A BORDO",sub:"ONBOARD CREW // REAL TIME (0ms)",icon:Bb},{id:"medical",label:"2. EQUIPA MÉDICA",sub:"FLIGHT SURGEON // HOUSTON (-18m)",icon:$h},{id:"capcom",label:"3. COORDENAÇÃO DE MISSÃO",sub:"CAPCOM // MISSION CONTROL",icon:O_}];return h.jsxs("header",{className:`w-full border-b transition-colors duration-300 select-none ${i?"bg-[#18121E] border-[#F59E0B]/40 text-slate-100":"bg-[#0A192F] border-[#1E3A5F] text-slate-100"}`,children:[i&&h.jsxs("div",{className:"w-full bg-[#EF4444]/15 border-b border-[#EF4444]/40 px-4 py-2 flex items-center justify-between text-xs md:text-sm font-mono animate-pulse",children:[h.jsxs("div",{className:"flex items-center gap-2 text-[#EF4444]",children:[h.jsx(Gu,{className:"w-4 h-4 text-[#F59E0B] shrink-0"}),h.jsx("span",{className:"font-bold tracking-wider",children:"AVIONICS OVERRIDE ACTIVE // CONTENÇÃO CIRCADIANA DE EMERGÊNCIA ENGATADA"}),h.jsx("span",{className:"text-slate-300 hidden md:inline",children:"| Risco de erro em comandos manuais > 80%. Ações críticas bloqueadas pelo computador de bordo."})]}),h.jsx("div",{className:"text-[#F59E0B] font-bold tracking-wider text-xs md:text-sm",children:"CABIN SPECTRAL SHIFT: 2700K (LOW-BLUE)"})]}),h.jsxs("div",{className:"px-4 py-3 flex flex-wrap items-center justify-between gap-3",children:[h.jsx("div",{className:"flex items-center gap-3",children:h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx("div",{className:`p-2 rounded-none border ${i?"bg-[#251C30] border-[#F59E0B] text-[#F59E0B]":"bg-[#0F253E] border-[#0099FF] text-[#0099FF]"}`,children:h.jsx(jm,{className:"w-5 h-5"})}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"font-bold tracking-widest text-lg text-white font-mono",children:"ORBIT-IQ"}),h.jsx("span",{className:"text-xs px-2 py-0.5 bg-[#060F1E] border border-[#1E3A5F] text-[#38BDF8] font-mono tracking-wider font-semibold",children:"CORE SYNC"})]}),h.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-[#8892B0] font-mono mt-0.5",children:[h.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-[#10B981]"}),h.jsx("span",{className:"tracking-wider",children:"SENSORLESS HYBRID ENGINE"}),h.jsx("span",{className:"text-[#1E3A5F]",children:"|"}),h.jsx("span",{className:"text-[#8892B0]",children:"NASA SPACE APPS CHALLENGE"})]})]})]})}),h.jsxs("div",{className:"flex items-center bg-[#060F1E] border border-[#1E3A5F] p-1 gap-1",children:[h.jsx("div",{className:"px-2 py-1 text-xs text-[#8892B0] font-mono font-bold tracking-wider hidden xl:block",children:"VIEWPORT:"}),p.map(_=>{const v=_.icon,S=o===_.id;return h.jsxs("button",{onClick:()=>t(_.id),className:`flex items-center gap-2 px-3.5 py-2 text-xs md:text-sm font-mono font-medium transition-all text-left border ${S?i?"bg-[#251C30] border-[#F59E0B] text-white":"bg-[#0F253E] border-[#0099FF] text-white":"bg-transparent border-transparent text-[#8892B0] hover:text-slate-200 hover:bg-[#0F253E]/50"}`,children:[h.jsx(v,{className:`w-4 h-4 ${S?i?"text-[#F59E0B]":"text-[#38BDF8]":"text-[#8892B0]"}`}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"leading-tight font-bold tracking-wide",children:_.label}),h.jsx("span",{className:"text-[11px] text-[#8892B0] leading-none hidden lg:block",children:_.sub})]})]},_.id)})]}),h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-[#060F1E] border border-[#1E3A5F] font-mono text-xs md:text-sm",children:[h.jsx(w_,{className:"w-4 h-4 text-[#38BDF8]"}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"text-[10px] text-[#8892B0] leading-none",children:"MISSION TIME"}),h.jsx("span",{className:"font-bold text-white tracking-widest leading-tight",children:r})]})]}),h.jsxs("div",{className:`px-3 py-1.5 border font-mono text-xs md:text-sm flex items-center gap-1.5 ${i?"bg-[#251C30] border-[#EF4444] text-[#EF4444]":"bg-[#0F253E] border-[#10B981]/50 text-[#10B981]"}`,children:[h.jsx("span",{className:`w-2.5 h-2.5 rounded-none ${i?"bg-[#EF4444] animate-ping":"bg-[#10B981]"}`}),h.jsx("span",{className:"font-bold tracking-wider",children:i?"SYS_STATUS: INTERVENTION":"SYS_STATUS: NOMINAL"})]}),h.jsxs("div",{className:"hidden sm:flex items-center bg-[#060F1E] border border-[#1E3A5F] p-0.5 text-xs font-mono",children:[h.jsx("span",{className:"text-[10px] text-[#8892B0] px-1.5 hidden xl:inline",children:"ZOOM:"}),[1,1.25,1.4].map(_=>h.jsxs("button",{onClick:()=>m(_),title:`Ajustar resolução para ${Math.round(_*100)}%`,className:`px-1.5 py-1 text-xs font-bold transition-colors ${d===_?"bg-[#0099FF] text-white":"text-[#8892B0] hover:text-white"}`,children:[Math.round(_*100),"%"]},_))]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsxs("button",{onClick:c,title:"Disparar anomalia de fadiga extrema para demonstração aos jurados",className:"flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-mono font-bold tracking-wide bg-[#251C30] hover:bg-[#352545] border border-[#F59E0B] text-[#F59E0B] transition-colors",children:[h.jsx(vS,{className:"w-4 h-4 text-[#F59E0B]"}),h.jsx("span",{className:"hidden sm:inline",children:"FORÇAR ANOMALIA / FADIGA"}),h.jsx("span",{className:"sm:hidden",children:"SIMULAR FADIGA"})]}),h.jsxs("button",{onClick:f,title:"Restaurar parâmetros nominais",className:"flex items-center gap-1 px-3 py-2 text-xs md:text-sm font-mono font-medium tracking-wide bg-[#0F253E] hover:bg-[#153457] border border-[#1E3A5F] text-[#8892B0] hover:text-white transition-colors",children:[h.jsx(Fb,{className:"w-4 h-4"}),h.jsx("span",{className:"hidden md:inline",children:"RESET"})]})]})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xm="187",Vb=0,bv=1,kb=2,_u=1,jb=2,vl=3,fr=0,li=1,Mi=2,po=0,Sl=1,El=2,yv=3,Av=4,Xb=5,mo=100,Wb=101,qb=102,Yb=103,Zb=104,Kb=200,Qb=201,Jb=202,$b=203,SS=204,ES=205,ey=206,ty=207,ny=208,iy=209,ay=210,sy=211,ry=212,oy=213,ly=214,em=0,tm=1,nm=2,bl=3,im=4,am=5,sm=6,rm=7,MS=0,cy=1,uy=2,ja=0,bS=1,yS=2,AS=3,TS=4,RS=5,NS=6,CS=7,wS=300,xo=301,yl=302,yh=303,Ah=304,om=1e3,ka=1001,lm=1002,jn=1003,fy=1004,Zc=1005,oi=1006,Th=1007,Ns=1008,Pi=1009,DS=1010,OS=1011,Al=1012,Wm=1013,_a=1014,ga=1015,Sa=1016,qm=1017,Ym=1018,vo=1020,LS=35902,US=35899,FS=1021,IS=1022,xa=1023,Ds=1026,Cs=1027,PS=1028,Zm=1029,dr=1030,Km=1031,Qm=1033,Su=33776,Eu=33777,Mu=33778,bu=33779,cm=35840,um=35841,fm=35842,dm=35843,hm=36196,mm=37492,pm=37496,gm=37488,xm=37489,Ou=37490,vm=37491,_m=37808,Sm=37809,Em=37810,Mm=37811,bm=37812,ym=37813,Am=37814,Tm=37815,Rm=37816,Nm=37817,Cm=37818,wm=37819,Dm=37820,Om=37821,Lm=36492,Um=36494,Fm=36495,Im=36283,Pm=36284,Lu=36285,Bm=36286,dy=3200,Tv=0,hy=1,Rs="",Ei="srgb",Uu="srgb-linear",Fu="linear",Qt="srgb",Rh=7680,my=519,py=512,gy=513,xy=514,BS=515,vy=516,_y=517,zS=518,HS=519,Sy=35044,Rv="300 es",Ji=2e3,Iu=2001;function Ey(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Pu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function My(){const o=Pu("canvas");return o.style.display="block",o}const Nv={};function Cv(...o){const t="THREE."+o.shift();console.log(t,...o)}function GS(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ft(...o){o=GS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function jt(...o){o=GS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function yu(...o){const t=o.join(" ");t in Nv||(Nv[t]=!0,ft(...o))}function by(o,t,i){return new Promise(function(r,c){function f(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const yy={[em]:em,[nm]:sm,[im]:im,[bl]:am,[tm]:tm,[sm]:nm,[rm]:rm,[am]:bl};class pr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const c=r[t];if(c!==void 0){const f=c.indexOf(i);f!==-1&&c.splice(f,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const c=r.slice(0);for(let f=0,d=c.length;f<d;f++)c[f].call(this,t);t.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nh=Math.PI/180,zm=180/Math.PI;function Tl(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Wn[o&255]+Wn[o>>8&255]+Wn[o>>16&255]+Wn[o>>24&255]+"-"+Wn[t&255]+Wn[t>>8&255]+"-"+Wn[t>>16&15|64]+Wn[t>>24&255]+"-"+Wn[i&63|128]+Wn[i>>8&255]+"-"+Wn[i>>16&255]+Wn[i>>24&255]+Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]).toLowerCase()}function Lt(o,t,i){return Math.max(t,Math.min(i,o))}function Ay(o,t){return(o%t+t)%t}function Ch(o,t,i){return(1-i)*o+i*t}function Ty(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Jm(o){switch(o.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ry(o,t){if(t.constructor===Float32Array)return o;const i=Jm(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(o/i,-1)}function Ny(o,t){if(t.constructor===Float32Array)return o;const i=Jm(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(o*i)}const np=class np{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6],this.y=c[1]*i+c[4]*r+c[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Lt(this.x,t.x,i.x),this.y=Lt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Lt(this.x,t,i),this.y=Lt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Lt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Lt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),c=Math.sin(i),f=this.x-t.x,d=this.y-t.y;return this.x=f*r-d*c+t.x,this.y=f*c+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};np.prototype.isVector2=!0;let zt=np;class Eo{constructor(t=0,i=0,r=0,c=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=c}static slerpFlat(t,i,r,c,f,d,m){let g=r[c+0],p=r[c+1],_=r[c+2],v=r[c+3],S=f[d+0],y=f[d+1],A=f[d+2],w=f[d+3];if(v!==w||g!==S||p!==y||_!==A){let M=g*S+p*y+_*A+v*w;M<0&&(S=-S,y=-y,A=-A,w=-w,M=-M);let E=1-m;if(M<.9995){const D=Math.acos(M),I=Math.sin(D);E=Math.sin(E*D)/I,m=Math.sin(m*D)/I,g=g*E+S*m,p=p*E+y*m,_=_*E+A*m,v=v*E+w*m}else{g=g*E+S*m,p=p*E+y*m,_=_*E+A*m,v=v*E+w*m;const D=1/Math.sqrt(g*g+p*p+_*_+v*v);g*=D,p*=D,_*=D,v*=D}}t[i]=g,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,c,f,d){const m=r[c],g=r[c+1],p=r[c+2],_=r[c+3],v=f[d],S=f[d+1],y=f[d+2],A=f[d+3];return t[i]=m*A+_*v+g*y-p*S,t[i+1]=g*A+_*S+p*v-m*y,t[i+2]=p*A+_*y+m*S-g*v,t[i+3]=_*A-m*v-g*S-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,c){return this._x=t,this._y=i,this._z=r,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,c=t._y,f=t._z,d=t._order,m=Math.cos,g=Math.sin,p=m(r/2),_=m(c/2),v=m(f/2),S=g(r/2),y=g(c/2),A=g(f/2);switch(d){case"XYZ":this._x=S*_*v+p*y*A,this._y=p*y*v-S*_*A,this._z=p*_*A+S*y*v,this._w=p*_*v-S*y*A;break;case"YXZ":this._x=S*_*v+p*y*A,this._y=p*y*v-S*_*A,this._z=p*_*A-S*y*v,this._w=p*_*v+S*y*A;break;case"ZXY":this._x=S*_*v-p*y*A,this._y=p*y*v+S*_*A,this._z=p*_*A+S*y*v,this._w=p*_*v-S*y*A;break;case"ZYX":this._x=S*_*v-p*y*A,this._y=p*y*v+S*_*A,this._z=p*_*A-S*y*v,this._w=p*_*v+S*y*A;break;case"YZX":this._x=S*_*v+p*y*A,this._y=p*y*v+S*_*A,this._z=p*_*A-S*y*v,this._w=p*_*v-S*y*A;break;case"XZY":this._x=S*_*v-p*y*A,this._y=p*y*v-S*_*A,this._z=p*_*A+S*y*v,this._w=p*_*v+S*y*A;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,c=Math.sin(r);return this._x=t.x*c,this._y=t.y*c,this._z=t.z*c,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],c=i[4],f=i[8],d=i[1],m=i[5],g=i[9],p=i[2],_=i[6],v=i[10],S=r+m+v;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(_-g)*y,this._y=(f-p)*y,this._z=(d-c)*y}else if(r>m&&r>v){const y=2*Math.sqrt(1+r-m-v);this._w=(_-g)/y,this._x=.25*y,this._y=(c+d)/y,this._z=(f+p)/y}else if(m>v){const y=2*Math.sqrt(1+m-r-v);this._w=(f-p)/y,this._x=(c+d)/y,this._y=.25*y,this._z=(g+_)/y}else{const y=2*Math.sqrt(1+v-r-m);this._w=(d-c)/y,this._x=(f+p)/y,this._y=(g+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Lt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const c=Math.min(1,i/r);return this.slerp(t,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,c=t._y,f=t._z,d=t._w,m=i._x,g=i._y,p=i._z,_=i._w;return this._x=r*_+d*m+c*p-f*g,this._y=c*_+d*g+f*m-r*p,this._z=f*_+d*p+r*g-c*m,this._w=d*_-r*m-c*g-f*p,this._onChangeCallback(),this}slerp(t,i){let r=t._x,c=t._y,f=t._z,d=t._w,m=this.dot(t);m<0&&(r=-r,c=-c,f=-f,d=-d,m=-m);let g=1-i;if(m<.9995){const p=Math.acos(m),_=Math.sin(p);g=Math.sin(g*p)/_,i=Math.sin(i*p)/_,this._x=this._x*g+r*i,this._y=this._y*g+c*i,this._z=this._z*g+f*i,this._w=this._w*g+d*i,this._onChangeCallback()}else this._x=this._x*g+r*i,this._y=this._y*g+c*i,this._z=this._z*g+f*i,this._w=this._w*g+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),c=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(c*Math.sin(t),c*Math.cos(t),f*Math.sin(i),f*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ip=class ip{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(wv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(wv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[3]*r+f[6]*c,this.y=f[1]*i+f[4]*r+f[7]*c,this.z=f[2]*i+f[5]*r+f[8]*c,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,c=this.z,f=t.elements,d=1/(f[3]*i+f[7]*r+f[11]*c+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*c+f[12])*d,this.y=(f[1]*i+f[5]*r+f[9]*c+f[13])*d,this.z=(f[2]*i+f[6]*r+f[10]*c+f[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,c=this.z,f=t.x,d=t.y,m=t.z,g=t.w,p=2*(d*c-m*r),_=2*(m*i-f*c),v=2*(f*r-d*i);return this.x=i+g*p+d*v-m*_,this.y=r+g*_+m*p-f*v,this.z=c+g*v+f*_-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*c,this.y=f[1]*i+f[5]*r+f[9]*c,this.z=f[2]*i+f[6]*r+f[10]*c,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Lt(this.x,t.x,i.x),this.y=Lt(this.y,t.y,i.y),this.z=Lt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Lt(this.x,t,i),this.y=Lt(this.y,t,i),this.z=Lt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Lt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,c=t.y,f=t.z,d=i.x,m=i.y,g=i.z;return this.x=c*g-f*m,this.y=f*d-r*g,this.z=r*m-c*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return wh.copy(this).projectOnVector(t),this.sub(wh)}reflect(t){return this.sub(wh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Lt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,c=this.z-t.z;return i*i+r*r+c*c}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const c=Math.sin(i)*t;return this.x=c*Math.sin(r),this.y=Math.cos(i)*t,this.z=c*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),c=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=c,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ip.prototype.isVector3=!0;let fe=ip;const wh=new fe,wv=new Eo,ap=class ap{constructor(t,i,r,c,f,d,m,g,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,c,f,d,m,g,p)}set(t,i,r,c,f,d,m,g,p){const _=this.elements;return _[0]=t,_[1]=c,_[2]=m,_[3]=i,_[4]=f,_[5]=g,_[6]=r,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,c=i.elements,f=this.elements,d=r[0],m=r[3],g=r[6],p=r[1],_=r[4],v=r[7],S=r[2],y=r[5],A=r[8],w=c[0],M=c[3],E=c[6],D=c[1],I=c[4],L=c[7],B=c[2],P=c[5],b=c[8];return f[0]=d*w+m*D+g*B,f[3]=d*M+m*I+g*P,f[6]=d*E+m*L+g*b,f[1]=p*w+_*D+v*B,f[4]=p*M+_*I+v*P,f[7]=p*E+_*L+v*b,f[2]=S*w+y*D+A*B,f[5]=S*M+y*I+A*P,f[8]=S*E+y*L+A*b,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],c=t[2],f=t[3],d=t[4],m=t[5],g=t[6],p=t[7],_=t[8];return i*d*_-i*m*p-r*f*_+r*m*g+c*f*p-c*d*g}invert(){const t=this.elements,i=t[0],r=t[1],c=t[2],f=t[3],d=t[4],m=t[5],g=t[6],p=t[7],_=t[8],v=_*d-m*p,S=m*g-_*f,y=p*f-d*g,A=i*v+r*S+c*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=v*w,t[1]=(c*p-_*r)*w,t[2]=(m*r-c*d)*w,t[3]=S*w,t[4]=(_*i-c*g)*w,t[5]=(c*f-m*i)*w,t[6]=y*w,t[7]=(r*g-p*i)*w,t[8]=(d*i-r*f)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,c,f,d,m){const g=Math.cos(f),p=Math.sin(f);return this.set(r*g,r*p,-r*(g*d+p*m)+d+t,-c*p,c*g,-c*(-p*d+g*m)+m+i,0,0,1),this}scale(t,i){return yu("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dh.makeScale(t,i)),this}rotate(t){return yu("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dh.makeRotation(-t)),this}translate(t,i){return yu("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let c=0;c<9;c++)if(i[c]!==r[c])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ap.prototype.isMatrix3=!0;let mt=ap;const Dh=new mt,Dv=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ov=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cy(){const o={enabled:!0,workingColorSpace:Uu,spaces:{},convert:function(c,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Qt&&(c.r=Xa(c.r),c.g=Xa(c.g),c.b=Xa(c.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(c.applyMatrix3(this.spaces[f].toXYZ),c.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Qt&&(c.r=go(c.r),c.g=go(c.g),c.b=go(c.b))),c},workingToColorSpace:function(c,f){return this.convert(c,this.workingColorSpace,f)},colorSpaceToWorking:function(c,f){return this.convert(c,f,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===Rs?Fu:this.spaces[c].transfer},getToneMappingMode:function(c){return this.spaces[c].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(c,f=this.workingColorSpace){return c.fromArray(this.spaces[f].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,f,d){return c.copy(this.spaces[d].fromXYZ).multiply(this.spaces[f].toXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Uu]:{primaries:t,whitePoint:r,transfer:Fu,toXYZ:Dv,fromXYZ:Ov,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:t,whitePoint:r,transfer:Qt,toXYZ:Dv,fromXYZ:Ov,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}}),o}const Ot=Cy();function Xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function go(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let to;class wy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{to===void 0&&(to=Pu("canvas")),to.width=t.width,to.height=t.height;const c=to.getContext("2d");t instanceof ImageData?c.putImageData(t,0,0):c.drawImage(t,0,0,t.width,t.height),r=to}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Pu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const c=r.getImageData(0,0,t.width,t.height),f=c.data;for(let d=0;d<f.length;d++)f[d]=Xa(f[d]/255)*255;return r.putImageData(c,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Xa(i[r]/255)*255):i[r]=Xa(i[r]);return{data:i,width:t.width,height:t.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dy=0;class $m{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Tl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width||0,i.height||0,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let d=0,m=c.length;d<m;d++)c[d].isDataTexture?f.push(Oh(c[d].image)):f.push(Oh(c[d]))}else f=Oh(c);r.url=f}return i||(t.images[this.uuid]=r),r}}function Oh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?wy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let Oy=0;const Lh=new fe;class ei extends pr{constructor(t=ei.DEFAULT_IMAGE,i=ei.DEFAULT_MAPPING,r=ka,c=ka,f=oi,d=Ns,m=xa,g=Pi,p=ei.DEFAULT_ANISOTROPY,_=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Tl(),this.name="",this.source=new $m(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=c,this.magFilter=f,this.minFilter=d,this.anisotropy=p,this.format=m,this.internalFormat=null,this.type=g,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Lh).x}get height(){return this.source.getSize(Lh).y}get depth(){return this.source.getSize(Lh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ft(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){ft(`Texture.setValues(): property '${i}' does not exist.`);continue}c&&r&&c.isVector2&&r.isVector2||c&&r&&c.isVector3&&r.isVector3||c&&r&&c.isMatrix3&&r.isMatrix3?c.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case om:t.x=t.x-Math.floor(t.x);break;case ka:t.x=t.x<0?0:1;break;case lm:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case om:t.y=t.y-Math.floor(t.y);break;case ka:t.y=t.y<0?0:1;break;case lm:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=wS;ei.DEFAULT_ANISOTROPY=1;const sp=class sp{constructor(t=0,i=0,r=0,c=1){this.x=t,this.y=i,this.z=r,this.w=c}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,c){return this.x=t,this.y=i,this.z=r,this.w=c,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,c=this.z,f=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*c+d[12]*f,this.y=d[1]*i+d[5]*r+d[9]*c+d[13]*f,this.z=d[2]*i+d[6]*r+d[10]*c+d[14]*f,this.w=d[3]*i+d[7]*r+d[11]*c+d[15]*f,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,c,f;const g=t.elements,p=g[0],_=g[4],v=g[8],S=g[1],y=g[5],A=g[9],w=g[2],M=g[6],E=g[10];if(Math.abs(_-S)<.01&&Math.abs(v-w)<.01&&Math.abs(A-M)<.01){if(Math.abs(_+S)<.1&&Math.abs(v+w)<.1&&Math.abs(A+M)<.1&&Math.abs(p+y+E-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(p+1)/2,L=(y+1)/2,B=(E+1)/2,P=(_+S)/4,b=(v+w)/4,C=(A+M)/4;return I>L&&I>B?I<.01?(r=0,c=.707106781,f=.707106781):(r=Math.sqrt(I),c=P/r,f=b/r):L>B?L<.01?(r=.707106781,c=0,f=.707106781):(c=Math.sqrt(L),r=P/c,f=C/c):B<.01?(r=.707106781,c=.707106781,f=0):(f=Math.sqrt(B),r=b/f,c=C/f),this.set(r,c,f,i),this}let D=Math.sqrt((M-A)*(M-A)+(v-w)*(v-w)+(S-_)*(S-_));return Math.abs(D)<.001&&(D=1),this.x=(M-A)/D,this.y=(v-w)/D,this.z=(S-_)/D,this.w=Math.acos((p+y+E-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Lt(this.x,t.x,i.x),this.y=Lt(this.y,t.y,i.y),this.z=Lt(this.z,t.z,i.z),this.w=Lt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Lt(this.x,t,i),this.y=Lt(this.y,t,i),this.z=Lt(this.z,t,i),this.w=Lt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Lt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sp.prototype.isVector4=!0;let vn=sp;class Ly extends pr{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new vn(0,0,t,i),this.scissorTest=!1,this.viewport=new vn(0,0,t,i),this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=new ei({width:t,height:i,depth:r.depth}),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:oi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(i.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=t,this.textures[c].image.height=i,this.textures[c].image.depth=r,this.textures[c].isData3DTexture!==!0&&(this.textures[c].isArrayTexture=this.textures[c].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const c=Object.assign({},t.textures[i].image);this.textures[i].source=new $m(c)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class va extends Ly{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class VS extends ei{constructor(t=null,i=1,r=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:c},this.magFilter=jn,this.minFilter=jn,this.wrapR=ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uy extends ei{constructor(t=null,i=1,r=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:c},this.magFilter=jn,this.minFilter=jn,this.wrapR=ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Hu=class Hu{constructor(t,i,r,c,f,d,m,g,p,_,v,S,y,A,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,c,f,d,m,g,p,_,v,S,y,A,w,M)}set(t,i,r,c,f,d,m,g,p,_,v,S,y,A,w,M){const E=this.elements;return E[0]=t,E[4]=i,E[8]=r,E[12]=c,E[1]=f,E[5]=d,E[9]=m,E[13]=g,E[2]=p,E[6]=_,E[10]=v,E[14]=S,E[3]=y,E[7]=A,E[11]=w,E[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hu().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,r=t.elements,c=1/no.setFromMatrixColumn(t,0).length(),f=1/no.setFromMatrixColumn(t,1).length(),d=1/no.setFromMatrixColumn(t,2).length();return i[0]=r[0]*c,i[1]=r[1]*c,i[2]=r[2]*c,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,c=t.y,f=t.z,d=Math.cos(r),m=Math.sin(r),g=Math.cos(c),p=Math.sin(c),_=Math.cos(f),v=Math.sin(f);if(t.order==="XYZ"){const S=d*_,y=d*v,A=m*_,w=m*v;i[0]=g*_,i[4]=-g*v,i[8]=p,i[1]=y+A*p,i[5]=S-w*p,i[9]=-m*g,i[2]=w-S*p,i[6]=A+y*p,i[10]=d*g}else if(t.order==="YXZ"){const S=g*_,y=g*v,A=p*_,w=p*v;i[0]=S+w*m,i[4]=A*m-y,i[8]=d*p,i[1]=d*v,i[5]=d*_,i[9]=-m,i[2]=y*m-A,i[6]=w+S*m,i[10]=d*g}else if(t.order==="ZXY"){const S=g*_,y=g*v,A=p*_,w=p*v;i[0]=S-w*m,i[4]=-d*v,i[8]=A+y*m,i[1]=y+A*m,i[5]=d*_,i[9]=w-S*m,i[2]=-d*p,i[6]=m,i[10]=d*g}else if(t.order==="ZYX"){const S=d*_,y=d*v,A=m*_,w=m*v;i[0]=g*_,i[4]=A*p-y,i[8]=S*p+w,i[1]=g*v,i[5]=w*p+S,i[9]=y*p-A,i[2]=-p,i[6]=m*g,i[10]=d*g}else if(t.order==="YZX"){const S=d*g,y=d*p,A=m*g,w=m*p;i[0]=g*_,i[4]=w-S*v,i[8]=A*v+y,i[1]=v,i[5]=d*_,i[9]=-m*_,i[2]=-p*_,i[6]=y*v+A,i[10]=S-w*v}else if(t.order==="XZY"){const S=d*g,y=d*p,A=m*g,w=m*p;i[0]=g*_,i[4]=-v,i[8]=p*_,i[1]=S*v+w,i[5]=d*_,i[9]=y*v-A,i[2]=A*v-y,i[6]=m*_,i[10]=w*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fy,t,Iy)}lookAt(t,i,r){const c=this.elements;return _i.subVectors(t,i),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Es.crossVectors(r,_i),Es.lengthSq()===0&&(Math.abs(r.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Es.crossVectors(r,_i)),Es.normalize(),Kc.crossVectors(_i,Es),c[0]=Es.x,c[4]=Kc.x,c[8]=_i.x,c[1]=Es.y,c[5]=Kc.y,c[9]=_i.y,c[2]=Es.z,c[6]=Kc.z,c[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,c=i.elements,f=this.elements,d=r[0],m=r[4],g=r[8],p=r[12],_=r[1],v=r[5],S=r[9],y=r[13],A=r[2],w=r[6],M=r[10],E=r[14],D=r[3],I=r[7],L=r[11],B=r[15],P=c[0],b=c[4],C=c[8],j=c[12],G=c[1],F=c[5],W=c[9],q=c[13],z=c[2],ee=c[6],Z=c[10],V=c[14],me=c[3],Q=c[7],pe=c[11],ye=c[15];return f[0]=d*P+m*G+g*z+p*me,f[4]=d*b+m*F+g*ee+p*Q,f[8]=d*C+m*W+g*Z+p*pe,f[12]=d*j+m*q+g*V+p*ye,f[1]=_*P+v*G+S*z+y*me,f[5]=_*b+v*F+S*ee+y*Q,f[9]=_*C+v*W+S*Z+y*pe,f[13]=_*j+v*q+S*V+y*ye,f[2]=A*P+w*G+M*z+E*me,f[6]=A*b+w*F+M*ee+E*Q,f[10]=A*C+w*W+M*Z+E*pe,f[14]=A*j+w*q+M*V+E*ye,f[3]=D*P+I*G+L*z+B*me,f[7]=D*b+I*F+L*ee+B*Q,f[11]=D*C+I*W+L*Z+B*pe,f[15]=D*j+I*q+L*V+B*ye,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],c=t[8],f=t[12],d=t[1],m=t[5],g=t[9],p=t[13],_=t[2],v=t[6],S=t[10],y=t[14],A=t[3],w=t[7],M=t[11],E=t[15],D=g*y-p*S,I=m*y-p*v,L=m*S-g*v,B=d*y-p*_,P=d*S-g*_,b=d*v-m*_;return i*(w*D-M*I+E*L)-r*(A*D-M*B+E*P)+c*(A*I-w*B+E*b)-f*(A*L-w*P+M*b)}determinantAffine(){const t=this.elements,i=t[0],r=t[4],c=t[8],f=t[1],d=t[5],m=t[9],g=t[2],p=t[6],_=t[10];return i*(d*_-m*p)-r*(f*_-m*g)+c*(f*p-d*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const c=this.elements;return t.isVector3?(c[12]=t.x,c[13]=t.y,c[14]=t.z):(c[12]=t,c[13]=i,c[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],c=t[2],f=t[3],d=t[4],m=t[5],g=t[6],p=t[7],_=t[8],v=t[9],S=t[10],y=t[11],A=t[12],w=t[13],M=t[14],E=t[15],D=i*m-r*d,I=i*g-c*d,L=i*p-f*d,B=r*g-c*m,P=r*p-f*m,b=c*p-f*g,C=_*w-v*A,j=_*M-S*A,G=_*E-y*A,F=v*M-S*w,W=v*E-y*w,q=S*E-y*M,z=D*q-I*W+L*F+B*G-P*j+b*C;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/z;return t[0]=(m*q-g*W+p*F)*ee,t[1]=(c*W-r*q-f*F)*ee,t[2]=(w*b-M*P+E*B)*ee,t[3]=(S*P-v*b-y*B)*ee,t[4]=(g*G-d*q-p*j)*ee,t[5]=(i*q-c*G+f*j)*ee,t[6]=(M*L-A*b-E*I)*ee,t[7]=(_*b-S*L+y*I)*ee,t[8]=(d*W-m*G+p*C)*ee,t[9]=(r*G-i*W-f*C)*ee,t[10]=(A*P-w*L+E*D)*ee,t[11]=(v*L-_*P-y*D)*ee,t[12]=(m*j-d*F-g*C)*ee,t[13]=(i*F-r*j+c*C)*ee,t[14]=(w*I-A*B-M*D)*ee,t[15]=(_*B-v*I+S*D)*ee,this}scale(t){const i=this.elements,r=t.x,c=t.y,f=t.z;return i[0]*=r,i[4]*=c,i[8]*=f,i[1]*=r,i[5]*=c,i[9]*=f,i[2]*=r,i[6]*=c,i[10]*=f,i[3]*=r,i[7]*=c,i[11]*=f,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],c=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,c))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),c=Math.sin(i),f=1-r,d=t.x,m=t.y,g=t.z,p=f*d,_=f*m;return this.set(p*d+r,p*m-c*g,p*g+c*m,0,p*m+c*g,_*m+r,_*g-c*d,0,p*g-c*m,_*g+c*d,f*g*g+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,c,f,d){return this.set(1,r,f,0,t,1,d,0,i,c,1,0,0,0,0,1),this}compose(t,i,r){const c=this.elements,f=i._x,d=i._y,m=i._z,g=i._w,p=f+f,_=d+d,v=m+m,S=f*p,y=f*_,A=f*v,w=d*_,M=d*v,E=m*v,D=g*p,I=g*_,L=g*v,B=r.x,P=r.y,b=r.z;return c[0]=(1-(w+E))*B,c[1]=(y+L)*B,c[2]=(A-I)*B,c[3]=0,c[4]=(y-L)*P,c[5]=(1-(S+E))*P,c[6]=(M+D)*P,c[7]=0,c[8]=(A+I)*b,c[9]=(M-D)*b,c[10]=(1-(S+w))*b,c[11]=0,c[12]=t.x,c[13]=t.y,c[14]=t.z,c[15]=1,this}decompose(t,i,r){const c=this.elements;t.x=c[12],t.y=c[13],t.z=c[14];const f=this.determinantAffine();if(f===0)return r.set(1,1,1),i.identity(),this;let d=no.set(c[0],c[1],c[2]).length();const m=no.set(c[4],c[5],c[6]).length(),g=no.set(c[8],c[9],c[10]).length();f<0&&(d=-d),Wi.copy(this);const p=1/d,_=1/m,v=1/g;return Wi.elements[0]*=p,Wi.elements[1]*=p,Wi.elements[2]*=p,Wi.elements[4]*=_,Wi.elements[5]*=_,Wi.elements[6]*=_,Wi.elements[8]*=v,Wi.elements[9]*=v,Wi.elements[10]*=v,i.setFromRotationMatrix(Wi),r.x=d,r.y=m,r.z=g,this}makePerspective(t,i,r,c,f,d,m=Ji,g=!1){const p=this.elements,_=2*f/(i-t),v=2*f/(r-c),S=(i+t)/(i-t),y=(r+c)/(r-c);let A,w;if(g)A=f/(d-f),w=d*f/(d-f);else if(m===Ji)A=-(d+f)/(d-f),w=-2*d*f/(d-f);else if(m===Iu)A=-d/(d-f),w=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,c,f,d,m=Ji,g=!1){const p=this.elements,_=2/(i-t),v=2/(r-c),S=-(i+t)/(i-t),y=-(r+c)/(r-c);let A,w;if(g)A=1/(d-f),w=d/(d-f);else if(m===Ji)A=-2/(d-f),w=-(d+f)/(d-f);else if(m===Iu)A=-1/(d-f),w=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=A,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let c=0;c<16;c++)if(i[c]!==r[c])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}};Hu.prototype.isMatrix4=!0;let _n=Hu;const no=new fe,Wi=new _n,Fy=new fe(0,0,0),Iy=new fe(1,1,1),Es=new fe,Kc=new fe,_i=new fe,Lv=new _n,Uv=new Eo;class hr{constructor(t=0,i=0,r=0,c=hr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=c}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,c=this._order){return this._x=t,this._y=i,this._z=r,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const c=t.elements,f=c[0],d=c[4],m=c[8],g=c[1],p=c[5],_=c[9],v=c[2],S=c[6],y=c[10];switch(i){case"XYZ":this._y=Math.asin(Lt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(m,y),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-v,f),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-Lt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Lt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,f)):(this._x=0,this._y=Math.atan2(m,y));break;case"XZY":this._z=Math.asin(-Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(m,f)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Lv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lv,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Uv.setFromEuler(this),this.setFromQuaternion(Uv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hr.DEFAULT_ORDER="XYZ";class kS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Py=0;const Fv=new fe,io=new Eo,Ba=new _n,Qc=new fe,hl=new fe,By=new fe,zy=new Eo,Iv=new fe(1,0,0),Pv=new fe(0,1,0),Bv=new fe(0,0,1),zv={type:"added"},Hy={type:"removed"},ao={type:"childadded",child:null},Uh={type:"childremoved",child:null};class ci extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ci.DEFAULT_UP.clone();const t=new fe,i=new hr,r=new Eo,c=new fe(1,1,1);function f(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new _n},normalMatrix:{value:new mt}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return io.setFromAxisAngle(t,i),this.quaternion.multiply(io),this}rotateOnWorldAxis(t,i){return io.setFromAxisAngle(t,i),this.quaternion.premultiply(io),this}rotateX(t){return this.rotateOnAxis(Iv,t)}rotateY(t){return this.rotateOnAxis(Pv,t)}rotateZ(t){return this.rotateOnAxis(Bv,t)}translateOnAxis(t,i){return Fv.copy(t).applyQuaternion(this.quaternion),this.position.add(Fv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Iv,t)}translateY(t){return this.translateOnAxis(Pv,t)}translateZ(t){return this.translateOnAxis(Bv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ba.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Qc.copy(t):Qc.set(t,i,r);const c=this.parent;this.updateWorldMatrix(!0,!1),hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ba.lookAt(hl,Qc,this.up):Ba.lookAt(Qc,hl,this.up),this.quaternion.setFromRotationMatrix(Ba),c&&(Ba.extractRotation(c.matrixWorld),io.setFromRotationMatrix(Ba),this.quaternion.premultiply(io.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zv),ao.child=t,this.dispatchEvent(ao),ao.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Hy),Uh.child=t,this.dispatchEvent(Uh),Uh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ba.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ba.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ba),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zv),ao.child=t,this.dispatchEvent(ao),ao.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,c=this.children.length;r<c;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,t,By),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,zy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const i=this.children;for(let r=0,c=i.length;r<c;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,c=i.length;r<c;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,c=t.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*r-f[8]*c,f[13]+=r-f[1]*i-f[5]*r-f[9]*c,f[14]+=c-f[2]*i-f[6]*r-f[10]*c}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,c=i.length;r<c;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){const c=this.parent;if(t===!0&&c!==null&&c.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const f=this.children;for(let d=0,m=f.length;d<m;d++)f[d].updateWorldMatrix(!1,!0,r)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,c.name=this.name,c.castShadow=this.castShadow,c.receiveShadow=this.receiveShadow,c.visible=this.visible,c.frustumCulled=this.frustumCulled,c.renderOrder=this.renderOrder,c.static=this.static,c.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.pivot!==null&&(c.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(c.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(c.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),c.instanceInfo=this._instanceInfo.map(m=>({...m})),c.availableInstanceIds=this._availableInstanceIds.slice(),c.availableGeometryIds=this._availableGeometryIds.slice(),c.nextIndexStart=this._nextIndexStart,c.nextVertexStart=this._nextVertexStart,c.geometryCount=this._geometryCount,c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.matricesTexture=this._matricesTexture.toJSON(t),c.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(c.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(c.boundingBox=this.boundingBox.toJSON()));function f(m,g){return m[g.uuid]===void 0&&(m[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(t.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const g=m.shapes;if(Array.isArray(g))for(let p=0,_=g.length;p<_;p++){const v=g[p];f(t.shapes,v)}else f(t.shapes,g)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(t.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let g=0,p=this.material.length;g<p;g++)m.push(f(t.materials,this.material[g]));c.material=m}else c.material=f(t.materials,this.material);if(this.children.length>0){c.children=[];for(let m=0;m<this.children.length;m++)c.children.push(this.children[m].toJSON(t).object)}if(this.animations.length>0){c.animations=[];for(let m=0;m<this.animations.length;m++){const g=this.animations[m];c.animations.push(f(t.animations,g))}}if(i){const m=d(t.geometries),g=d(t.materials),p=d(t.textures),_=d(t.images),v=d(t.shapes),S=d(t.skeletons),y=d(t.animations),A=d(t.nodes);m.length>0&&(r.geometries=m),g.length>0&&(r.materials=g),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=c,r;function d(m){const g=[];for(const p in m){const _=m[p];delete _.metadata,g.push(_)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const c=t.children[r];this.add(c.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ci.DEFAULT_UP=new fe(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ur extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gy={type:"move"};class Fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let c=null,f=null,d=null;const m=this._targetRay,g=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,r),E=this._getHandJoint(p,w);M!==null&&(E.matrix.fromArray(M.transform.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=M.radius),E.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=_.position.distanceTo(v.position),y=.02,A=.005;p.inputState.pinching&&S>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(f=i.getPose(t.gripSpace,r),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:t,target:this})));m!==null&&(c=i.getPose(t.targetRaySpace,r),c===null&&f!==null&&(c=f),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(Gy)))}return m!==null&&(m.visible=c!==null),g!==null&&(g.visible=f!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new ur;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const jS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},Jc={h:0,s:0,l:0};function Ih(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Bt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const c=t;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ot.colorSpaceToWorking(this,i),this}setRGB(t,i,r,c=Ot.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ot.colorSpaceToWorking(this,c),this}setHSL(t,i,r,c=Ot.workingColorSpace){if(t=Ay(t,1),i=Lt(i,0,1),r=Lt(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,d=2*r-f;this.r=Ih(d,f,t+1/3),this.g=Ih(d,f,t),this.b=Ih(d,f,t-1/3)}return Ot.colorSpaceToWorking(this,c),this}setStyle(t,i=Ei){function r(f){f!==void 0&&parseFloat(f)<1&&ft("Color: Alpha component of "+t+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(t)){let f;const d=c[1],m=c[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(m))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(m))return r(f[4]),this.setRGB(Math.min(100,parseFloat(f[1]))/100,Math.min(100,parseFloat(f[2]))/100,Math.min(100,parseFloat(f[3]))/100,i);break;case"hsl":case"hsla":if(f=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(m))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:ft("Color: Unknown color model "+t)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(t)){const f=c[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ei){const r=jS[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xa(t.r),this.g=Xa(t.g),this.b=Xa(t.b),this}copyLinearToSRGB(t){return this.r=go(t.r),this.g=go(t.g),this.b=go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ei){return Ot.workingToColorSpace(qn.copy(this),t),Math.round(Lt(qn.r*255,0,255))*65536+Math.round(Lt(qn.g*255,0,255))*256+Math.round(Lt(qn.b*255,0,255))}getHexString(t=Ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ot.workingColorSpace){Ot.workingToColorSpace(qn.copy(this),i);const r=qn.r,c=qn.g,f=qn.b,d=Math.max(r,c,f),m=Math.min(r,c,f);let g,p;const _=(m+d)/2;if(m===d)g=0,p=0;else{const v=d-m;switch(p=_<=.5?v/(d+m):v/(2-d-m),d){case r:g=(c-f)/v+(c<f?6:0);break;case c:g=(f-r)/v+2;break;case f:g=(r-c)/v+4;break}g/=6}return t.h=g,t.s=p,t.l=_,t}getRGB(t,i=Ot.workingColorSpace){return Ot.workingToColorSpace(qn.copy(this),i),t.r=qn.r,t.g=qn.g,t.b=qn.b,t}getStyle(t=Ei){Ot.workingToColorSpace(qn.copy(this),t);const i=qn.r,r=qn.g,c=qn.b;return t!==Ei?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(c*255)})`}offsetHSL(t,i,r){return this.getHSL(Ms),this.setHSL(Ms.h+t,Ms.s+i,Ms.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ms),t.getHSL(Jc);const r=Ch(Ms.h,Jc.h,i),c=Ch(Ms.s,Jc.s,i),f=Ch(Ms.l,Jc.l,i);return this.setHSL(r,c,f),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,c=this.b,f=t.elements;return this.r=f[0]*i+f[3]*r+f[6]*c,this.g=f[1]*i+f[4]*r+f[7]*c,this.b=f[2]*i+f[5]*r+f[8]*c,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new Bt;Bt.NAMES=jS;class Vy extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hr,this.environmentIntensity=1,this.environmentRotation=new hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const qi=new fe,za=new fe,Ph=new fe,Ha=new fe,so=new fe,ro=new fe,Hv=new fe,Bh=new fe,zh=new fe,Hh=new fe,Gh=new vn,Vh=new vn,kh=new vn;class Qi{constructor(t=new fe,i=new fe,r=new fe){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,c){c.subVectors(r,i),qi.subVectors(t,i),c.cross(qi);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(t,i,r,c,f){qi.subVectors(c,i),za.subVectors(r,i),Ph.subVectors(t,i);const d=qi.dot(qi),m=qi.dot(za),g=qi.dot(Ph),p=za.dot(za),_=za.dot(Ph),v=d*p-m*m;if(v===0)return f.set(0,0,0),null;const S=1/v,y=(p*g-m*_)*S,A=(d*_-m*g)*S;return f.set(1-y-A,A,y)}static containsPoint(t,i,r,c){return this.getBarycoord(t,i,r,c,Ha)===null?!1:Ha.x>=0&&Ha.y>=0&&Ha.x+Ha.y<=1}static getInterpolation(t,i,r,c,f,d,m,g){return this.getBarycoord(t,i,r,c,Ha)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,Ha.x),g.addScaledVector(d,Ha.y),g.addScaledVector(m,Ha.z),g)}static getInterpolatedAttribute(t,i,r,c,f,d){return Gh.setScalar(0),Vh.setScalar(0),kh.setScalar(0),Gh.fromBufferAttribute(t,i),Vh.fromBufferAttribute(t,r),kh.fromBufferAttribute(t,c),d.setScalar(0),d.addScaledVector(Gh,f.x),d.addScaledVector(Vh,f.y),d.addScaledVector(kh,f.z),d}static isFrontFacing(t,i,r,c){return qi.subVectors(r,i),za.subVectors(t,i),qi.cross(za).dot(c)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,c){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[c]),this}setFromAttributeAndIndices(t,i,r,c){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,c),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qi.subVectors(this.c,this.b),za.subVectors(this.a,this.b),qi.cross(za).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Qi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,c,f){return Qi.getInterpolation(t,this.a,this.b,this.c,i,r,c,f)}containsPoint(t){return Qi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,c=this.b,f=this.c;let d,m;so.subVectors(c,r),ro.subVectors(f,r),Bh.subVectors(t,r);const g=so.dot(Bh),p=ro.dot(Bh);if(g<=0&&p<=0)return i.copy(r);zh.subVectors(t,c);const _=so.dot(zh),v=ro.dot(zh);if(_>=0&&v<=_)return i.copy(c);const S=g*v-_*p;if(S<=0&&g>=0&&_<=0&&g-_>0)return d=g/(g-_),i.copy(r).addScaledVector(so,d);Hh.subVectors(t,f);const y=so.dot(Hh),A=ro.dot(Hh);if(A>=0&&y<=A)return i.copy(f);const w=y*p-g*A;if(w<=0&&p>=0&&A<=0)return m=p/(p-A),i.copy(r).addScaledVector(ro,m);const M=_*A-y*v;if(M<=0&&v-_>=0&&y-A>=0)return Hv.subVectors(f,c),m=(v-_)/(v-_+(y-A)),i.copy(c).addScaledVector(Hv,m);const E=1/(M+w+S);return d=w*E,m=S*E,i.copy(r).addScaledVector(so,d).addScaledVector(ro,m)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Rl{constructor(t=new fe(1/0,1/0,1/0),i=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Yi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Yi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Yi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let d=0,m=f.count;d<m;d++)t.isMesh===!0?t.getVertexPosition(d,Yi):Yi.fromBufferAttribute(f,d),Yi.applyMatrix4(t.matrixWorld),this.expandByPoint(Yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$c.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$c.copy(r.boundingBox)),$c.applyMatrix4(t.matrixWorld),this.union($c)}const c=t.children;for(let f=0,d=c.length;f<d;f++)this.expandByObject(c[f],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yi),Yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ml),eu.subVectors(this.max,ml),oo.subVectors(t.a,ml),lo.subVectors(t.b,ml),co.subVectors(t.c,ml),bs.subVectors(lo,oo),ys.subVectors(co,lo),sr.subVectors(oo,co);let i=[0,-bs.z,bs.y,0,-ys.z,ys.y,0,-sr.z,sr.y,bs.z,0,-bs.x,ys.z,0,-ys.x,sr.z,0,-sr.x,-bs.y,bs.x,0,-ys.y,ys.x,0,-sr.y,sr.x,0];return!jh(i,oo,lo,co,eu)||(i=[1,0,0,0,1,0,0,0,1],!jh(i,oo,lo,co,eu))?!1:(tu.crossVectors(bs,ys),i=[tu.x,tu.y,tu.z],jh(i,oo,lo,co,eu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ga),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ga=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],Yi=new fe,$c=new Rl,oo=new fe,lo=new fe,co=new fe,bs=new fe,ys=new fe,sr=new fe,ml=new fe,eu=new fe,tu=new fe,rr=new fe;function jh(o,t,i,r,c){for(let f=0,d=o.length-3;f<=d;f+=3){rr.fromArray(o,f);const m=c.x*Math.abs(rr.x)+c.y*Math.abs(rr.y)+c.z*Math.abs(rr.z),g=t.dot(rr),p=i.dot(rr),_=r.dot(rr);if(Math.max(-Math.max(g,p,_),Math.min(g,p,_))>m)return!1}return!0}const An=new fe,nu=new zt;let ky=0;class ws extends pr{constructor(t,i,r=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ky++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Sy,this.updateRanges=[],this.gpuType=ga,this.version=0,this._normalizationScale=t!==void 0?Jm(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[t+c]=i.array[r+c];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)nu.fromBufferAttribute(this,i),nu.applyMatrix3(t),this.setXY(i,nu.x,nu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)An.fromBufferAttribute(this,i),An.applyMatrix3(t),this.setXYZ(i,An.x,An.y,An.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)An.fromBufferAttribute(this,i),An.applyMatrix4(t),this.setXYZ(i,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)An.fromBufferAttribute(this,i),An.applyNormalMatrix(t),this.setXYZ(i,An.x,An.y,An.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)An.fromBufferAttribute(this,i),An.transformDirection(t),this.setXYZ(i,An.x,An.y,An.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=this._denormalize(r)),r}setComponent(t,i,r){return this.normalized&&(r=this._normalize(r)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=this._denormalize(i)),i}setX(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=this._denormalize(i)),i}setY(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=this._denormalize(i)),i}setZ(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=this._denormalize(i)),i}setW(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,c){return t*=this.itemSize,this.normalized&&(i=this._normalize(i),r=this._normalize(r),c=this._normalize(c)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=c,this}setXYZW(t,i,r,c,f){return t*=this.itemSize,this.normalized&&(i=this._normalize(i),r=this._normalize(r),c=this._normalize(c),f=this._normalize(f)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=c,this.array[t+3]=f,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const i=this._normalizationScale;return i!==void 0?Math.max(t/i,-1):Ry(t,this.array)}_normalize(t){const i=this._normalizationScale;return i!==void 0?Math.round(t*i):Ny(t,this.array)}}class XS extends ws{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class WS extends ws{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class In extends ws{constructor(t,i,r){super(new Float32Array(t),i,r)}}const jy=new Rl,pl=new fe,Xh=new fe;class Vu{constructor(t=new fe,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):jy.setFromPoints(t).getCenter(r);let c=0;for(let f=0,d=t.length;f<d;f++)c=Math.max(c,r.distanceToSquared(t[f]));return this.radius=Math.sqrt(c),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pl.subVectors(t,this.center);const i=pl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),c=(r-this.radius)*.5;this.center.addScaledVector(pl,c/r),this.radius+=c}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pl.copy(t.center).add(Xh)),this.expandByPoint(pl.copy(t.center).sub(Xh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Xy=0;const Ii=new _n,Wh=new ci,uo=new fe,Si=new Rl,gl=new Rl,Fn=new fe;class Bi extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ey(t)?WS:XS)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new mt().getNormalMatrix(t);r.applyNormalMatrix(f),r.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(t),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ii.makeRotationFromQuaternion(t),this.applyMatrix4(Ii),this}rotateX(t){return Ii.makeRotationX(t),this.applyMatrix4(Ii),this}rotateY(t){return Ii.makeRotationY(t),this.applyMatrix4(Ii),this}rotateZ(t){return Ii.makeRotationZ(t),this.applyMatrix4(Ii),this}translate(t,i,r){return Ii.makeTranslation(t,i,r),this.applyMatrix4(Ii),this}scale(t,i,r){return Ii.makeScale(t,i,r),this.applyMatrix4(Ii),this}lookAt(t){return Wh.lookAt(t),Wh.updateMatrix(),this.applyMatrix4(Wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let c=0,f=t.length;c<f;c++){const d=t[c];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new In(r,3))}else{const r=Math.min(t.length,i.count);for(let c=0;c<r;c++){const f=t[c];i.setXYZ(c,f.x,f.y,f.z||0)}t.length>i.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,c=i.length;r<c;r++){const f=i[r];Si.setFromBufferAttribute(f),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(t){const r=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),i)for(let f=0,d=i.length;f<d;f++){const m=i[f];gl.setFromBufferAttribute(m),this.morphTargetsRelative?(Fn.addVectors(Si.min,gl.min),Si.expandByPoint(Fn),Fn.addVectors(Si.max,gl.max),Si.expandByPoint(Fn)):(Si.expandByPoint(gl.min),Si.expandByPoint(gl.max))}Si.getCenter(r);let c=0;for(let f=0,d=t.count;f<d;f++)Fn.fromBufferAttribute(t,f),c=Math.max(c,r.distanceToSquared(Fn));if(i)for(let f=0,d=i.length;f<d;f++){const m=i[f],g=this.morphTargetsRelative;for(let p=0,_=m.count;p<_;p++)Fn.fromBufferAttribute(m,p),g&&(uo.fromBufferAttribute(t,p),Fn.add(uo)),c=Math.max(c,r.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,c=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new ws(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const m=[],g=[],p=new Uint8Array(r.count);for(let j=0;j<r.count;j++)m[j]=new fe,g[j]=new fe;const _=new fe,v=new fe,S=new fe,y=new zt,A=new zt,w=new zt,M=new fe,E=new fe;function D(j,G,F){p[j]=p[G]=p[F]=1,_.fromBufferAttribute(r,j),v.fromBufferAttribute(r,G),S.fromBufferAttribute(r,F),y.fromBufferAttribute(f,j),A.fromBufferAttribute(f,G),w.fromBufferAttribute(f,F),v.sub(_),S.sub(_),A.sub(y),w.sub(y);const W=1/(A.x*w.y-w.x*A.y);isFinite(W)&&(M.copy(v).multiplyScalar(w.y).addScaledVector(S,-A.y).multiplyScalar(W),E.copy(S).multiplyScalar(A.x).addScaledVector(v,-w.x).multiplyScalar(W),m[j].add(M),m[G].add(M),m[F].add(M),g[j].add(E),g[G].add(E),g[F].add(E))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let j=0,G=I.length;j<G;++j){const F=I[j],W=F.start,q=F.count;for(let z=W,ee=W+q;z<ee;z+=3)D(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const L=new fe,B=new fe,P=new fe,b=new fe;function C(j){P.fromBufferAttribute(c,j),b.copy(P);const G=m[j];L.copy(G),L.sub(P.multiplyScalar(P.dot(G))).normalize(),B.crossVectors(b,G);const W=B.dot(g[j])<0?-1:1;d.setXYZW(j,L.x,L.y,L.z,W)}for(let j=0,G=r.count;j<G;++j)p[j]&&C(j);this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ws(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const c=new fe,f=new fe,d=new fe,m=new fe,g=new fe,p=new fe,_=new fe,v=new fe;if(t)for(let S=0,y=t.count;S<y;S+=3){const A=t.getX(S+0),w=t.getX(S+1),M=t.getX(S+2);c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),_.subVectors(d,f),v.subVectors(c,f),_.cross(v),m.fromBufferAttribute(r,A),g.fromBufferAttribute(r,w),p.fromBufferAttribute(r,M),m.add(_),g.add(_),p.add(_),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(w,g.x,g.y,g.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)c.fromBufferAttribute(i,S+0),f.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),_.subVectors(d,f),v.subVectors(c,f),_.cross(v),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Fn.fromBufferAttribute(t,i),Fn.normalize(),t.setXYZ(i,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function t(m,g){const p=m.array,_=m.itemSize,v=m.normalized,S=new p.constructor(g.length*_);let y=0,A=0;for(let w=0,M=g.length;w<M;w++){m.isInterleavedBufferAttribute?y=g[w]*m.data.stride+m.offset:y=g[w]*_;for(let E=0;E<_;E++)S[A++]=p[y++]}return new ws(S,_,v)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Bi,r=this.index.array,c=this.attributes;for(const m in c){const g=c[m],p=t(g,r);i.setAttribute(m,p)}const f=this.morphAttributes;for(const m in f){const g=[],p=f[m];for(let _=0,v=p.length;_<v;_++){const S=p[_],y=t(S,r);g.push(y)}i.morphAttributes[m]=g}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let m=0,g=d.length;m<g;m++){const p=d[m];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(t[p]=g[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const g in r){const p=r[g];t.data.attributes[g]=p.toJSON(t.data)}const c={};let f=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],_=[];for(let v=0,S=p.length;v<S;v++){const y=p[v];_.push(y.toJSON(t.data))}_.length>0&&(c[g]=_,f=!0)}f&&(t.data.morphAttributes=c,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const m=this.boundingSphere;return m!==null&&(t.data.boundingSphere=m.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const c=t.attributes;for(const p in c){const _=c[p];this.setAttribute(p,_.clone(i))}const f=t.morphAttributes;for(const p in f){const _=[],v=f[p];for(let S=0,y=v.length;S<y;S++)_.push(v[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,_=d.length;p<_;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const m=t.boundingBox;m!==null&&(this.boundingBox=m.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qh=new fe,Wy=new fe,qy=new mt;class Ts{constructor(t=new fe(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,c){return this.normal.set(t,i,r),this.constant=c,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const c=qh.subVectors(r,i).cross(Wy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(c,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,r=!0){const c=t.delta(qh),f=this.normal.dot(c);if(f===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/f;return r===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(c,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||qy.getNormalMatrix(t),c=this.coplanarPoint(qh).applyMatrix4(t),f=this.normal.applyMatrix3(r).normalize();return this.constant=-c.dot(f),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Yy=0;class Nl extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=Tl(),this.name="",this.type="Material",this.blending=Sl,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=SS,this.blendDst=ES,this.blendEquation=mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=my,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rh,this.stencilZFail=Rh,this.stencilZPass=Rh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ft(`Material: parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){ft(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(r):c&&c.isVector2&&r&&r.isVector2||c&&c.isEuler&&r&&r.isEuler||c&&c.isVector3&&r&&r.isVector3?c.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function c(f){const d=[];for(const m in f){const g=f[m];delete g.metadata,d.push(g)}return d}if(i){const f=c(t.textures),d=c(t.images);f.length>0&&(r.textures=f),d.length>0&&(r.images=d)}return r}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(r=>new Ts().fromJSON(r))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new zt().fromArray(r)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=i[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const c=i.length;r=new Array(c);for(let f=0;f!==c;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Va=new fe,Yh=new fe,iu=new fe,au=new fe;class qS{constructor(t=new fe,i=new fe(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Va)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Va.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Va.copy(this.origin).addScaledVector(this.direction,i),Va.distanceToSquared(t))}distanceSqToSegment(t,i,r,c){Yh.copy(t).add(i).multiplyScalar(.5),iu.copy(i).sub(t).normalize(),au.copy(this.origin).sub(Yh);const f=t.distanceTo(i)*.5,d=-this.direction.dot(iu),m=au.dot(this.direction),g=-au.dot(iu),p=au.lengthSq(),_=Math.abs(1-d*d);let v,S,y,A;if(_>0)if(v=d*g-m,S=d*m-g,A=f*_,v>=0)if(S>=-A)if(S<=A){const w=1/_;v*=w,S*=w,y=v*(v+d*S+2*m)+S*(d*v+S+2*g)+p}else S=f,v=Math.max(0,-(d*S+m)),y=-v*v+S*(S+2*g)+p;else S=-f,v=Math.max(0,-(d*S+m)),y=-v*v+S*(S+2*g)+p;else S<=-A?(v=Math.max(0,-(-d*f+m)),S=v>0?-f:Math.min(Math.max(-f,-g),f),y=-v*v+S*(S+2*g)+p):S<=A?(v=0,S=Math.min(Math.max(-f,-g),f),y=S*(S+2*g)+p):(v=Math.max(0,-(d*f+m)),S=v>0?f:Math.min(Math.max(-f,-g),f),y=-v*v+S*(S+2*g)+p);else S=d>0?-f:f,v=Math.max(0,-(d*S+m)),y=-v*v+S*(S+2*g)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),c&&c.copy(Yh).addScaledVector(iu,S),y}intersectSphere(t,i){if(t.radius<0)return null;Va.subVectors(t.center,this.origin);const r=Va.dot(this.direction),c=Va.dot(Va)-r*r,f=t.radius*t.radius;if(c>f)return null;const d=Math.sqrt(f-c),m=r-d,g=r+d;return g<0?null:m<0?this.at(g,i):this.at(m,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,c,f,d,m,g;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,c=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,c=(t.min.x-S.x)*p),_>=0?(f=(t.min.y-S.y)*_,d=(t.max.y-S.y)*_):(f=(t.max.y-S.y)*_,d=(t.min.y-S.y)*_),r>d||f>c||((f>r||isNaN(r))&&(r=f),(d<c||isNaN(c))&&(c=d),v>=0?(m=(t.min.z-S.z)*v,g=(t.max.z-S.z)*v):(m=(t.max.z-S.z)*v,g=(t.min.z-S.z)*v),r>g||m>c)||((m>r||r!==r)&&(r=m),(g<c||c!==c)&&(c=g),c<0)?null:this.at(r>=0?r:c,i)}intersectsBox(t){return this.intersectBox(t,Va)!==null}intersectTriangle(t,i,r,c,f){const d=this.origin,m=this.direction,g=m.x,p=m.y,_=m.z,v=t.x-d.x,S=t.y-d.y,y=t.z-d.z,A=i.x-d.x,w=i.y-d.y,M=i.z-d.z,E=r.x-d.x,D=r.y-d.y,I=r.z-d.z,L=Math.abs(g),B=Math.abs(p),P=Math.abs(_);let b,C,j,G,F,W,q,z,ee,Z,V,me;if(L>=B&&L>=P?(j=g,W=v,ee=A,me=E,g>=0?(b=p,C=_,G=S,F=y,q=w,z=M,Z=D,V=I):(b=_,C=p,G=y,F=S,q=M,z=w,Z=I,V=D)):B>=P?(j=p,W=S,ee=w,me=D,p>=0?(b=_,C=g,G=y,F=v,q=M,z=A,Z=I,V=E):(b=g,C=_,G=v,F=y,q=A,z=M,Z=E,V=I)):(j=_,W=y,ee=M,me=I,_>=0?(b=g,C=p,G=v,F=S,q=A,z=w,Z=E,V=D):(b=p,C=g,G=S,F=v,q=w,z=A,Z=D,V=E)),j===0)return null;const Q=b/j,pe=C/j,ye=1/j,je=G-Q*W,et=F-pe*W,O=q-Q*ee,ie=z-pe*ee,J=Z-Q*me,ce=V-pe*me,he=J*ie-ce*O,Te=je*ce-et*J,Xe=O*et-ie*je;if(c){if(he<0||Te<0||Xe<0)return null}else if((he<0||Te<0||Xe<0)&&(he>0||Te>0||Xe>0))return null;const Se=he+Te+Xe;if(Se===0)return null;const Ce=ye*(he*W+Te*ee+Xe*me);return(Se>0?Ce<0:Ce>0)?null:this.at(Ce/Se,f)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cr extends Nl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hr,this.combine=MS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Gv=new _n,or=new qS,su=new Vu,Vv=new fe,ru=new fe,ou=new fe,lu=new fe,Zh=new fe,cu=new fe,kv=new fe,uu=new fe;class Rt extends ci{constructor(t=new Bi,i=new cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const c=i[r[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const m=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=f}}}}getVertexPosition(t,i){const r=this.geometry,c=r.attributes.position,f=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(c,t);const m=this.morphTargetInfluences;if(f&&m){cu.set(0,0,0);for(let g=0,p=f.length;g<p;g++){const _=m[g],v=f[g];_!==0&&(Zh.fromBufferAttribute(v,t),d?cu.addScaledVector(Zh,_):cu.addScaledVector(Zh.sub(i),_))}i.add(cu)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const r=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),su.copy(r.boundingSphere),su.applyMatrix4(f),or.copy(t.ray).recast(t.near),!(su.containsPoint(or.origin)===!1&&(or.intersectSphere(su,Vv)===null||or.origin.distanceToSquared(Vv)>(t.far-t.near)**2))&&(Gv.copy(f).invert(),or.copy(t.ray).applyMatrix4(Gv),!(r.boundingBox!==null&&or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,or)))}_computeIntersections(t,i,r){let c;const f=this.geometry,d=this.material,m=f.index,g=f.attributes.position,p=f.attributes.uv,_=f.attributes.uv1,v=f.attributes.normal,S=f.groups,y=f.drawRange;if(m!==null)if(Array.isArray(d))for(let A=0,w=S.length;A<w;A++){const M=S[A],E=d[M.materialIndex],D=Math.max(M.start,y.start),I=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let L=D,B=I;L<B;L+=3){const P=m.getX(L),b=m.getX(L+1),C=m.getX(L+2);c=fu(this,E,t,r,p,_,v,P,b,C),c&&(c.faceIndex=Math.floor(L/3),c.face.materialIndex=M.materialIndex,i.push(c))}}else{const A=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=A,E=w;M<E;M+=3){const D=m.getX(M),I=m.getX(M+1),L=m.getX(M+2);c=fu(this,d,t,r,p,_,v,D,I,L),c&&(c.faceIndex=Math.floor(M/3),i.push(c))}}else if(g!==void 0)if(Array.isArray(d))for(let A=0,w=S.length;A<w;A++){const M=S[A],E=d[M.materialIndex],D=Math.max(M.start,y.start),I=Math.min(g.count,Math.min(M.start+M.count,y.start+y.count));for(let L=D,B=I;L<B;L+=3){const P=L,b=L+1,C=L+2;c=fu(this,E,t,r,p,_,v,P,b,C),c&&(c.faceIndex=Math.floor(L/3),c.face.materialIndex=M.materialIndex,i.push(c))}}else{const A=Math.max(0,y.start),w=Math.min(g.count,y.start+y.count);for(let M=A,E=w;M<E;M+=3){const D=M,I=M+1,L=M+2;c=fu(this,d,t,r,p,_,v,D,I,L),c&&(c.faceIndex=Math.floor(M/3),i.push(c))}}}}function Zy(o,t,i,r,c,f,d,m){let g;if(t.side===li?g=r.intersectTriangle(d,f,c,!0,m):g=r.intersectTriangle(c,f,d,t.side===fr,m),g===null)return null;uu.copy(m),uu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(uu);return p<i.near||p>i.far?null:{distance:p,point:uu.clone(),object:o}}function fu(o,t,i,r,c,f,d,m,g,p){o.getVertexPosition(m,ru),o.getVertexPosition(g,ou),o.getVertexPosition(p,lu);const _=Zy(o,t,i,r,ru,ou,lu,kv);if(_){const v=new fe;Qi.getBarycoord(kv,ru,ou,lu,v),c&&(_.uv=Qi.getInterpolatedAttribute(c,m,g,p,v,new zt)),f&&(_.uv1=Qi.getInterpolatedAttribute(f,m,g,p,v,new zt)),d&&(_.normal=Qi.getInterpolatedAttribute(d,m,g,p,v,new fe),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:m,b:g,c:p,normal:new fe,materialIndex:0};Qi.getNormal(ru,ou,lu,S.normal),_.face=S,_.barycoord=v}return _}class Ky extends ei{constructor(t=null,i=1,r=1,c,f,d,m,g,p=jn,_=jn,v,S){super(null,d,m,g,p,_,c,f,v,S),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lr=new Vu,Qy=new zt(.5,.5),du=new fe;class Bu{constructor(t=new Ts,i=new Ts,r=new Ts,c=new Ts,f=new Ts,d=new Ts){this.planes=[t,i,r,c,f,d]}set(t,i,r,c,f,d){const m=this.planes;return m[0].copy(t),m[1].copy(i),m[2].copy(r),m[3].copy(c),m[4].copy(f),m[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ji,r=!1){const c=this.planes,f=t.elements,d=f[0],m=f[1],g=f[2],p=f[3],_=f[4],v=f[5],S=f[6],y=f[7],A=f[8],w=f[9],M=f[10],E=f[11],D=f[12],I=f[13],L=f[14],B=f[15];if(c[0].setComponents(p-d,y-_,E-A,B-D).normalize(),c[1].setComponents(p+d,y+_,E+A,B+D).normalize(),c[2].setComponents(p+m,y+v,E+w,B+I).normalize(),c[3].setComponents(p-m,y-v,E-w,B-I).normalize(),r)c[4].setComponents(g,S,M,L).normalize(),c[5].setComponents(p-g,y-S,E-M,B-L).normalize();else if(c[4].setComponents(p-g,y-S,E-M,B-L).normalize(),i===Ji)c[5].setComponents(p+g,y+S,E+M,B+L).normalize();else if(i===Iu)c[5].setComponents(g,S,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(t){lr.center.set(0,0,0);const i=Qy.distanceTo(t.center);return lr.radius=.7071067811865476+i,lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(t){const i=this.planes,r=t.center,c=-t.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<c)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const c=i[r];if(du.x=c.normal.x>0?t.max.x:t.min.x,du.y=c.normal.y>0?t.max.y:t.min.y,du.z=c.normal.z>0?t.max.z:t.min.z,c.distanceToPoint(du)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const jv=new _n;class ep{constructor(){this.coordinateSystem=Ji,this._frustums=[],this._count=0}setFromArrayCamera(t){const i=t.cameras,r=this._frustums;for(let c=0;c<i.length;c++){const f=i[c];jv.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),r[c]===void 0&&(r[c]=new Bu),r[c].setFromProjectionMatrix(jv,f.coordinateSystem,f.reversedDepth)}return this._count=i.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){const i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){const i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){const i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const i=this._frustums,r=t._frustums;for(let c=0;c<t._count;c++)i[c]===void 0&&(i[c]=new Bu),i[c].copy(r[c]);return this._count=t._count,this}clone(){return new ep().copy(this)}}class YS extends Nl{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xv=new _n,Hm=new qS,hu=new Vu,mu=new fe;class Jy extends ci{constructor(t=new Bi,i=new YS){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const r=this.geometry,c=this.matrixWorld,f=t.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),hu.copy(r.boundingSphere),hu.applyMatrix4(c),hu.radius+=f,t.ray.intersectsSphere(hu)===!1)return;Xv.copy(c).invert(),Hm.copy(t.ray).applyMatrix4(Xv);const m=f/((this.scale.x+this.scale.y+this.scale.z)/3),g=m*m,p=r.index,v=r.attributes.position;if(p!==null){const S=Math.max(0,d.start),y=Math.min(p.count,d.start+d.count);for(let A=S,w=y;A<w;A++){const M=p.getX(A);mu.fromBufferAttribute(v,M),Wv(mu,M,g,c,t,i,this)}}else{const S=Math.max(0,d.start),y=Math.min(v.count,d.start+d.count);for(let A=S,w=y;A<w;A++)mu.fromBufferAttribute(v,A),Wv(mu,A,g,c,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const c=i[r[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const m=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=f}}}}}function Wv(o,t,i,r,c,f,d){const m=Hm.distanceSqToPoint(o);if(m<i){const g=new fe;Hm.closestPointToPoint(o,g),g.applyMatrix4(r);const p=c.ray.origin.distanceTo(g);if(p<c.near||p>c.far)return;f.push({distance:p,distanceToRay:Math.sqrt(m),point:g,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class ZS extends ei{constructor(t=[],i=xo,r,c,f,d,m,g,p,_){super(t,i,r,c,f,d,m,g,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _o extends ei{constructor(t,i,r=_a,c,f,d,m=jn,g=jn,p,_=Ds,v=1){if(_!==Ds&&_!==Cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:v};super(S,c,f,d,m,g,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $m(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class KS extends _o{constructor(t,i=_a,r=xo,c,f,d=jn,m=jn,g,p=Ds){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,r,c,f,d,m,g,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class QS extends ei{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class mr extends Bi{constructor(t=1,i=1,r=1,c=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:c,heightSegments:f,depthSegments:d};const m=this;c=Math.floor(c),f=Math.floor(f),d=Math.floor(d);const g=[],p=[],_=[],v=[];let S=0,y=0;A("z","y","x",-1,-1,r,i,t,d,f,0),A("z","y","x",1,-1,r,i,-t,d,f,1),A("x","z","y",1,1,t,r,i,c,d,2),A("x","z","y",1,-1,t,r,-i,c,d,3),A("x","y","z",1,-1,t,i,r,c,f,4),A("x","y","z",-1,-1,t,i,-r,c,f,5),this.setIndex(g),this.setAttribute("position",new In(p,3)),this.setAttribute("normal",new In(_,3)),this.setAttribute("uv",new In(v,2));function A(w,M,E,D,I,L,B,P,b,C,j){const G=L/b,F=B/C,W=L/2,q=B/2,z=P/2,ee=b+1,Z=C+1;let V=0,me=0;const Q=new fe;for(let pe=0;pe<Z;pe++){const ye=pe*F-q;for(let je=0;je<ee;je++){const et=je*G-W;Q[w]=et*D,Q[M]=ye*I,Q[E]=z,p.push(Q.x,Q.y,Q.z),Q[w]=0,Q[M]=0,Q[E]=P>0?1:-1,_.push(Q.x,Q.y,Q.z),v.push(je/b),v.push(1-pe/C),V+=1}}for(let pe=0;pe<C;pe++)for(let ye=0;ye<b;ye++){const je=S+ye+ee*pe,et=S+ye+ee*(pe+1),O=S+(ye+1)+ee*(pe+1),ie=S+(ye+1)+ee*pe;g.push(je,et,ie),g.push(et,O,ie),me+=6}m.addGroup(y,me,j),y+=me,S+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class kn extends Bi{constructor(t=1,i=1,r=1,c=32,f=1,d=!1,m=0,g=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:c,heightSegments:f,openEnded:d,thetaStart:m,thetaLength:g};const p=this;c=Math.floor(c),f=Math.floor(f);const _=[],v=[],S=[],y=[];let A=0;const w=[],M=r/2;let E=0;D(),d===!1&&(t>0&&I(!0),i>0&&I(!1)),this.setIndex(_),this.setAttribute("position",new In(v,3)),this.setAttribute("normal",new In(S,3)),this.setAttribute("uv",new In(y,2));function D(){const L=new fe,B=new fe;let P=0;const b=(i-t)/r;for(let C=0;C<=f;C++){const j=[],G=C/f,F=G*(i-t)+t;for(let W=0;W<=c;W++){const q=W/c,z=q*g+m,ee=Math.sin(z),Z=Math.cos(z);B.x=F*ee,B.y=-G*r+M,B.z=F*Z,v.push(B.x,B.y,B.z),L.set(ee,b,Z).normalize(),S.push(L.x,L.y,L.z),y.push(q,1-G),j.push(A++)}w.push(j)}for(let C=0;C<c;C++)for(let j=0;j<f;j++){const G=w[j][C],F=w[j+1][C],W=w[j+1][C+1],q=w[j][C+1];(t>0||j!==0)&&(_.push(G,F,q),P+=3),(i>0||j!==f-1)&&(_.push(F,W,q),P+=3)}p.addGroup(E,P,0),E+=P}function I(L){const B=A,P=new zt,b=new fe;let C=0;const j=L===!0?t:i,G=L===!0?1:-1;for(let W=1;W<=c;W++)v.push(0,M*G,0),S.push(0,G,0),y.push(.5,.5),A++;const F=A;for(let W=0;W<=c;W++){const z=W/c*g+m,ee=Math.cos(z),Z=Math.sin(z);b.x=j*Z,b.y=M*G,b.z=j*ee,v.push(b.x,b.y,b.z),S.push(0,G,0),P.x=ee*.5+.5,P.y=Z*.5*G+.5,y.push(P.x,P.y),A++}for(let W=0;W<c;W++){const q=B+W,z=F+W;L===!0?_.push(z,z+1,q):_.push(z+1,z,q),C+=3}p.addGroup(E,C,L===!0?1:2),E+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ku extends Bi{constructor(t=1,i=1,r=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:c};const f=t/2,d=i/2,m=Math.floor(r),g=Math.floor(c),p=m+1,_=g+1,v=t/m,S=i/g,y=[],A=[],w=[],M=[];for(let E=0;E<_;E++){const D=E*S-d;for(let I=0;I<p;I++){const L=I*v-f;A.push(L,-D,0),w.push(0,0,1),M.push(I/m),M.push(1-E/g)}}for(let E=0;E<g;E++)for(let D=0;D<m;D++){const I=D+p*E,L=D+p*(E+1),B=D+1+p*(E+1),P=D+1+p*E;y.push(I,L,P),y.push(L,B,P)}this.setIndex(y),this.setAttribute("position",new In(A,3)),this.setAttribute("normal",new In(w,3)),this.setAttribute("uv",new In(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ku(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ml extends Bi{constructor(t=.5,i=1,r=32,c=1,f=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:c,thetaStart:f,thetaLength:d},r=Math.max(3,r),c=Math.max(1,c);const m=[],g=[],p=[],_=[];let v=t;const S=(i-t)/c,y=new fe,A=new zt;for(let w=0;w<=c;w++){for(let M=0;M<=r;M++){const E=f+M/r*d;y.x=v*Math.cos(E),y.y=v*Math.sin(E),g.push(y.x,y.y,y.z),p.push(0,0,1),A.x=(y.x/i+1)/2,A.y=(y.y/i+1)/2,_.push(A.x,A.y)}v+=S}for(let w=0;w<c;w++){const M=w*(r+1);for(let E=0;E<r;E++){const D=E+M,I=D,L=D+r+1,B=D+r+2,P=D+1;m.push(I,L,P),m.push(L,B,P)}}this.setIndex(m),this.setAttribute("position",new In(g,3)),this.setAttribute("normal",new In(p,3)),this.setAttribute("uv",new In(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ml(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Zi extends Bi{constructor(t=1,i=32,r=16,c=0,f=Math.PI*2,d=0,m=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:c,phiLength:f,thetaStart:d,thetaLength:m},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const g=Math.min(d+m,Math.PI);let p=0;const _=[],v=new fe,S=new fe,y=[],A=[],w=[],M=[];for(let E=0;E<=r;E++){const D=[],I=E/r,L=d+I*m,B=t*Math.cos(L),P=Math.sqrt(t*t-B*B);let b=0;E===0&&d===0?b=.5/i:E===r&&g===Math.PI&&(b=-.5/i);for(let C=0;C<=i;C++){const j=C/i,G=c+j*f;v.x=-P*Math.cos(G),v.y=B,v.z=P*Math.sin(G),A.push(v.x,v.y,v.z),S.copy(v).normalize(),w.push(S.x,S.y,S.z),M.push(j+b,1-I),D.push(p++)}_.push(D)}for(let E=0;E<r;E++)for(let D=0;D<i;D++){const I=_[E][D+1],L=_[E][D],B=_[E+1][D],P=_[E+1][D+1];(E!==0||d>0)&&y.push(I,L,P),(E!==r-1||g<Math.PI)&&y.push(L,B,P)}this.setIndex(y),this.setAttribute("position",new In(A,3)),this.setAttribute("normal",new In(w,3)),this.setAttribute("uv",new In(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function So(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const c=o[i][r];if(qv(c))c.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=c.clone();else if(Array.isArray(c))if(qv(c[0])){const f=[];for(let d=0,m=c.length;d<m;d++)f[d]=c[d].clone();t[i][r]=f}else t[i][r]=c.slice();else t[i][r]=c}}return t}function $n(o){const t={};for(let i=0;i<o.length;i++){const r=So(o[i]);for(const c in r)t[c]=r[c]}return t}function qv(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function $y(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function JS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ot.workingColorSpace}const eA={clone:So,merge:$n};var tA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Os extends Nl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tA,this.fragmentShader=nA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=So(t.uniforms),this.uniformsGroups=$y(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const c in this.uniforms){const d=this.uniforms[c].value;d&&d.isTexture?i.uniforms[c]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[c]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[c]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[c]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[c]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[c]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[c]={type:"m4",value:d.toArray()}:i.uniforms[c]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const c in this.extensions)this.extensions[c]===!0&&(r[c]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const r in t.uniforms){const c=t.uniforms[r];switch(this.uniforms[r]={},c.type){case"t":this.uniforms[r].value=i[c.value]||null;break;case"c":this.uniforms[r].value=new Bt().setHex(c.value);break;case"v2":this.uniforms[r].value=new zt().fromArray(c.value);break;case"v3":this.uniforms[r].value=new fe().fromArray(c.value);break;case"v4":this.uniforms[r].value=new vn().fromArray(c.value);break;case"m3":this.uniforms[r].value=new mt().fromArray(c.value);break;case"m4":this.uniforms[r].value=new _n().fromArray(c.value);break;default:this.uniforms[r].value=c.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)this.extensions[r]=t.extensions[r];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class iA extends Os{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class aA extends Nl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sA extends Nl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const pu=new fe,gu=new Eo,ha=new fe;class $S extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(pu,gu,ha),ha.x===1&&ha.y===1&&ha.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pu,gu,ha.set(1,1,1)).invert()}updateWorldMatrix(t,i,r=!1){super.updateWorldMatrix(t,i,r),this.matrixWorld.decompose(pu,gu,ha),ha.x===1&&ha.y===1&&ha.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pu,gu,ha.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const As=new fe,Yv=new zt,Zv=new zt;class Ki extends $S{constructor(t=50,i=1,r=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=c,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=zm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Nh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zm*2*Math.atan(Math.tan(Nh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(As.x,As.y).multiplyScalar(-t/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(As.x,As.y).multiplyScalar(-t/As.z)}getViewSize(t,i){return this.getViewBounds(t,Yv,Zv),i.subVectors(Zv,Yv)}setViewOffset(t,i,r,c,f,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Nh*.5*this.fov)/this.zoom,r=2*i,c=this.aspect*r,f=-.5*c;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,p=d.fullHeight;f+=d.offsetX*c/g,i-=d.offsetY*r/p,c*=d.width/g,r*=d.height/p}const m=this.filmOffset;m!==0&&(f+=t*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class rA extends $S{constructor(t=-1,i=1,r=1,c=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=c,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,c,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=r-t,d=r+t,m=c+i,g=c-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,d=f+p*this.view.width,m-=_*this.view.offsetY,g=m-_*this.view.height}this.projectionMatrix.makeOrthographic(f,d,m,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const fo=-90,ho=1;class Gm extends ci{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new Ki(fo,ho,t,i);c.layers=this.layers,this.add(c);const f=new Ki(fo,ho,t,i);f.layers=this.layers,this.add(f);const d=new Ki(fo,ho,t,i);d.layers=this.layers,this.add(d);const m=new Ki(fo,ho,t,i);m.layers=this.layers,this.add(m);const g=new Ki(fo,ho,t,i);g.layers=this.layers,this.add(g);const p=new Ki(fo,ho,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,c,f,d,m,g]=i;for(const p of i)this.remove(p);if(t===Ji)r.up.set(0,1,0),r.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===Iu)r.up.set(0,-1,0),r.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:c}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[f,d,m,g,p,_]=this.children,v=t.getRenderTarget(),S=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(r,0,c),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(r,1,c),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(r,2,c),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(r,3,c),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(r,4,c),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),r.texture.mipmapsAutoUpdate=w,t.setRenderTarget(r,5,c),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,S,y),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class oA extends Ki{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class lA{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ft("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Kv(o,t,i,r){const c=cA(r);switch(i){case FS:return o*t;case PS:return o*t/c.components*c.byteLength;case Zm:return o*t/c.components*c.byteLength;case dr:return o*t*2/c.components*c.byteLength;case Km:return o*t*2/c.components*c.byteLength;case IS:return o*t*3/c.components*c.byteLength;case xa:return o*t*4/c.components*c.byteLength;case Qm:return o*t*4/c.components*c.byteLength;case Su:case Eu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Mu:case bu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case um:case dm:return Math.max(o,16)*Math.max(t,8)/4;case cm:case fm:return Math.max(o,8)*Math.max(t,8)/2;case hm:case mm:case gm:case xm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case pm:case Ou:case vm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case _m:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Sm:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Em:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Mm:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case bm:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case ym:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Am:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Tm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Rm:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Nm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Cm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case wm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Dm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Om:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Lm:case Um:case Fm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Im:case Pm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Lu:case Bm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function cA(o){switch(o){case Pi:case DS:return{byteLength:1,components:1};case Al:case OS:case Sa:return{byteLength:2,components:1};case qm:case Ym:return{byteLength:2,components:4};case _a:case Wm:case ga:return{byteLength:4,components:1};case LS:case US:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xm}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function eE(){let o=null,t=!1,i=null,r=null;function c(f,d){r=o.requestAnimationFrame(c),i(f,d)}return{start:function(){t!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(c),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function uA(o){const t=new WeakMap;function i(m,g){const p=m.array,_=m.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(g,S),o.bufferData(g,p,_),m.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)m.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:m.version,size:v}}function r(m,g,p){const _=g.array,v=g.updateRanges;if(o.bindBuffer(p,m),v.length===0)o.bufferSubData(p,0,_);else{v.sort((y,A)=>y.start-A.start);let S=0;for(let y=1;y<v.length;y++){const A=v[S],w=v[y];w.start<=A.start+A.count+1?A.count=Math.max(A.count,w.start+w.count-A.start):(++S,v[S]=w)}v.length=S+1;for(let y=0,A=v.length;y<A;y++){const w=v[y];o.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}g.clearUpdateRanges()}g.onUploadCallback()}function c(m){return m.isInterleavedBufferAttribute&&(m=m.data),t.get(m)}function f(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=t.get(m);g&&(o.deleteBuffer(g.buffer),t.delete(m))}function d(m,g){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const _=t.get(m);(!_||_.version<m.version)&&t.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const p=t.get(m);if(p===void 0)t.set(m,i(m,g));else if(p.version<m.version){if(p.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,m,g),p.version=m.version}}return{get:c,remove:f,update:d}}var fA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_A=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,SA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,AA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,DA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,OA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,LA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,UA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,FA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,IA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HA="gl_FragColor = linearToOutputTexel( gl_FragColor );",GA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,jA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$A=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,iT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dT=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_T=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ST=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ET=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yT=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,LT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,HT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$T=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,a2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,s2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,r2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h2=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,x2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,S2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,A2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,C2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,D2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,O2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,F2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,St={alphahash_fragment:fA,alphahash_pars_fragment:dA,alphamap_fragment:hA,alphamap_pars_fragment:mA,alphatest_fragment:pA,alphatest_pars_fragment:gA,aomap_fragment:xA,aomap_pars_fragment:vA,batching_pars_vertex:_A,batching_vertex:SA,begin_vertex:EA,beginnormal_vertex:MA,bsdfs:bA,iridescence_fragment:yA,bumpmap_pars_fragment:AA,clipping_planes_fragment:TA,clipping_planes_pars_fragment:RA,clipping_planes_pars_vertex:NA,clipping_planes_vertex:CA,color_fragment:wA,color_pars_fragment:DA,color_pars_vertex:OA,color_vertex:LA,common:UA,defaultnormal_vertex:FA,displacementmap_pars_vertex:IA,displacementmap_vertex:PA,emissivemap_fragment:BA,emissivemap_pars_fragment:zA,colorspace_fragment:HA,colorspace_pars_fragment:GA,envmap_fragment:VA,envmap_common_pars_fragment:kA,envmap_pars_fragment:jA,envmap_pars_vertex:XA,envmap_physical_pars_fragment:nT,envmap_vertex:WA,fog_vertex:qA,fog_pars_vertex:YA,fog_fragment:ZA,fog_pars_fragment:KA,gradientmap_pars_fragment:QA,lightmap_pars_fragment:JA,lights_lambert_fragment:$A,lights_lambert_pars_fragment:eT,lights_pars_begin:tT,lights_toon_fragment:iT,lights_toon_pars_fragment:aT,lights_phong_fragment:sT,lights_phong_pars_fragment:rT,lights_physical_fragment:oT,lights_physical_pars_fragment:lT,lights_fragment_begin:cT,lights_fragment_maps:uT,lights_fragment_end:fT,lightprobes_pars_fragment:dT,logdepthbuf_fragment:hT,logdepthbuf_pars_fragment:mT,logdepthbuf_pars_vertex:pT,logdepthbuf_vertex:gT,map_fragment:xT,map_pars_fragment:vT,map_particle_fragment:_T,map_particle_pars_fragment:ST,metalnessmap_fragment:ET,metalnessmap_pars_fragment:MT,morphinstance_vertex:bT,morphcolor_vertex:yT,morphnormal_vertex:AT,morphtarget_pars_vertex:TT,morphtarget_vertex:RT,normal_fragment_begin:NT,normal_fragment_maps:CT,normal_pars_fragment:wT,normal_pars_vertex:DT,normal_vertex:OT,normalmap_pars_fragment:LT,clearcoat_normal_fragment_begin:UT,clearcoat_normal_fragment_maps:FT,clearcoat_pars_fragment:IT,iridescence_pars_fragment:PT,opaque_fragment:BT,packing:zT,premultiplied_alpha_fragment:HT,project_vertex:GT,dithering_fragment:VT,dithering_pars_fragment:kT,roughnessmap_fragment:jT,roughnessmap_pars_fragment:XT,shadowmap_pars_fragment:WT,shadowmap_pars_vertex:qT,shadowmap_vertex:YT,shadowmask_pars_fragment:ZT,skinbase_vertex:KT,skinning_pars_vertex:QT,skinning_vertex:JT,skinnormal_vertex:$T,specularmap_fragment:e2,specularmap_pars_fragment:t2,tonemapping_fragment:n2,tonemapping_pars_fragment:i2,transmission_fragment:a2,transmission_pars_fragment:s2,uv_pars_fragment:r2,uv_pars_vertex:o2,uv_vertex:l2,worldpos_vertex:c2,background_vert:u2,background_frag:f2,backgroundCube_vert:d2,backgroundCube_frag:h2,cube_vert:m2,cube_frag:p2,depth_vert:g2,depth_frag:x2,distance_vert:v2,distance_frag:_2,equirect_vert:S2,equirect_frag:E2,linedashed_vert:M2,linedashed_frag:b2,meshbasic_vert:y2,meshbasic_frag:A2,meshlambert_vert:T2,meshlambert_frag:R2,meshmatcap_vert:N2,meshmatcap_frag:C2,meshnormal_vert:w2,meshnormal_frag:D2,meshphong_vert:O2,meshphong_frag:L2,meshphysical_vert:U2,meshphysical_frag:F2,meshtoon_vert:I2,meshtoon_frag:P2,points_vert:B2,points_frag:z2,shadow_vert:H2,shadow_frag:G2,sprite_vert:V2,sprite_frag:k2},ke={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},pa={basic:{uniforms:$n([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:$n([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:$n([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:$n([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:$n([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Bt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:$n([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:$n([ke.points,ke.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:$n([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:$n([ke.common,ke.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:$n([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:$n([ke.sprite,ke.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:$n([ke.common,ke.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:$n([ke.lights,ke.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};pa.physical={uniforms:$n([pa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new mt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const xu={r:0,b:0,g:0},j2=new _n,tE=new mt;tE.set(-1,0,0,0,1,0,0,0,1);function X2(o,t,i,r,c,f){const d=new Bt(0);let m=c===!0?0:1,g,p,_=null,v=0,S=null;function y(D){let I=D.isScene===!0?D.background:null;if(I&&I.isTexture){const L=D.backgroundBlurriness>0;I=t.get(I,L)}return I}function A(D){let I=!1;const L=y(D);L===null?M(d,m):L&&L.isColor&&(M(L,1),I=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(D,I){const L=y(I);L&&L.isCubeTexture?(p===void 0&&(p=new Rt(new mr(1,1,1),new Os({name:"BackgroundCubeMaterial",uniforms:So(pa.backgroundCube.uniforms),vertexShader:pa.backgroundCube.vertexShader,fragmentShader:pa.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,P,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=L,p.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(j2.makeRotationFromEuler(I.backgroundRotation)).transpose(),L.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(tE),p.material.toneMapped=Ot.getTransfer(L.colorSpace)!==Qt,(_!==L||v!==L.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,_=L,v=L.version,S=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(g===void 0&&(g=new Rt(new ku(2,2),new Os({name:"BackgroundMaterial",uniforms:So(pa.background.uniforms),vertexShader:pa.background.vertexShader,fragmentShader:pa.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(g)),g.material.uniforms.t2D.value=L,g.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,g.material.toneMapped=Ot.getTransfer(L.colorSpace)!==Qt,L.matrixAutoUpdate===!0&&L.updateMatrix(),g.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||v!==L.version||S!==o.toneMapping)&&(g.material.needsUpdate=!0,_=L,v=L.version,S=o.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null))}function M(D,I){D.getRGB(xu,JS(o)),i.buffers.color.setClear(xu.r,xu.g,xu.b,I,f)}function E(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,I=1){d.set(D),m=I,M(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,M(d,m)},render:A,addToRenderList:w,dispose:E}}function W2(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},c=S(null);let f=c,d=!1;function m(F,W,q,z,ee){let Z=!1;const V=v(F,z,q,W);f!==V&&(f=V,p(f.object)),Z=y(F,z,q,ee),Z&&A(F,z,q,ee),ee!==null&&t.update(ee,o.ELEMENT_ARRAY_BUFFER),(Z||d)&&(d=!1,L(F,W,q,z),ee!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function g(){return o.createVertexArray()}function p(F){return o.bindVertexArray(F)}function _(F){return o.deleteVertexArray(F)}function v(F,W,q,z){const ee=z.wireframe===!0;let Z=r[W.id];Z===void 0&&(Z={},r[W.id]=Z);const V=F.isInstancedMesh===!0?F.id:0;let me=Z[V];me===void 0&&(me={},Z[V]=me);let Q=me[q.id];Q===void 0&&(Q={},me[q.id]=Q);let pe=Q[ee];return pe===void 0&&(pe=S(g()),Q[ee]=pe),pe}function S(F){const W=[],q=[],z=[];for(let ee=0;ee<i;ee++)W[ee]=0,q[ee]=0,z[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:q,attributeDivisors:z,object:F,attributes:{},index:null}}function y(F,W,q,z){const ee=f.attributes,Z=W.attributes;let V=0;const me=q.getAttributes();for(const Q in me)if(me[Q].location>=0){const ye=ee[Q];let je=Z[Q];if(je===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(je=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(je=F.instanceColor)),ye===void 0||ye.attribute!==je||je&&ye.data!==je.data)return!0;V++}return f.attributesNum!==V||f.index!==z}function A(F,W,q,z){const ee={},Z=W.attributes;let V=0;const me=q.getAttributes();for(const Q in me)if(me[Q].location>=0){let ye=Z[Q];ye===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(ye=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(ye=F.instanceColor));const je={};je.attribute=ye,ye&&ye.data&&(je.data=ye.data),ee[Q]=je,V++}f.attributes=ee,f.attributesNum=V,f.index=z}function w(){const F=f.newAttributes;for(let W=0,q=F.length;W<q;W++)F[W]=0}function M(F){E(F,0)}function E(F,W){const q=f.newAttributes,z=f.enabledAttributes,ee=f.attributeDivisors;q[F]=1,z[F]===0&&(o.enableVertexAttribArray(F),z[F]=1),ee[F]!==W&&(o.vertexAttribDivisor(F,W),ee[F]=W)}function D(){const F=f.newAttributes,W=f.enabledAttributes;for(let q=0,z=W.length;q<z;q++)W[q]!==F[q]&&(o.disableVertexAttribArray(q),W[q]=0)}function I(F,W,q,z,ee,Z,V){V===!0?o.vertexAttribIPointer(F,W,q,ee,Z):o.vertexAttribPointer(F,W,q,z,ee,Z)}function L(F,W,q,z){w();const ee=z.attributes,Z=q.getAttributes(),V=W.defaultAttributeValues;for(const me in Z){const Q=Z[me];if(Q.location>=0){let pe=ee[me];if(pe===void 0&&(me==="instanceMatrix"&&F.instanceMatrix&&(pe=F.instanceMatrix),me==="instanceColor"&&F.instanceColor&&(pe=F.instanceColor)),pe!==void 0){const ye=pe.normalized,je=pe.itemSize,et=t.get(pe);if(et===void 0)continue;const O=et.buffer,ie=et.type,J=et.bytesPerElement,ce=ie===o.INT||ie===o.UNSIGNED_INT||pe.gpuType===Wm;if(pe.isInterleavedBufferAttribute){const he=pe.data,Te=he.isInterleavedBuffer===!0?he.stride:he.itemSize,Xe=pe.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let Se=0;Se<Q.locationSize;Se++)E(Q.location+Se,he.meshPerAttribute);F.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Se=0;Se<Q.locationSize;Se++)M(Q.location+Se);o.bindBuffer(o.ARRAY_BUFFER,O);for(let Se=0;Se<Q.locationSize;Se++)I(Q.location+Se,je/Q.locationSize,ie,ye,Te*J,(Xe+je/Q.locationSize*Se)*J,ce)}else{if(pe.isInstancedBufferAttribute){for(let he=0;he<Q.locationSize;he++)E(Q.location+he,pe.meshPerAttribute);F.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let he=0;he<Q.locationSize;he++)M(Q.location+he);o.bindBuffer(o.ARRAY_BUFFER,O);for(let he=0;he<Q.locationSize;he++)I(Q.location+he,je/Q.locationSize,ie,ye,je*J,je/Q.locationSize*he*J,ce)}}else if(V!==void 0){const ye=V[me];if(ye!==void 0)switch(ye.length){case 2:o.vertexAttrib2fv(Q.location,ye);break;case 3:o.vertexAttrib3fv(Q.location,ye);break;case 4:o.vertexAttrib4fv(Q.location,ye);break;default:o.vertexAttrib1fv(Q.location,ye)}}}}D()}function B(){j();for(const F in r){const W=r[F];for(const q in W){const z=W[q];for(const ee in z){const Z=z[ee];for(const V in Z)_(Z[V].object),delete Z[V];delete z[ee]}}delete r[F]}}function P(F){if(r[F.id]===void 0)return;const W=r[F.id];for(const q in W){const z=W[q];for(const ee in z){const Z=z[ee];for(const V in Z)_(Z[V].object),delete Z[V];delete z[ee]}}delete r[F.id]}function b(F){for(const W in r){const q=r[W];for(const z in q){const ee=q[z];if(ee[F.id]===void 0)continue;const Z=ee[F.id];for(const V in Z)_(Z[V].object),delete Z[V];delete ee[F.id]}}}function C(F){for(const W in r){const q=r[W],z=F.isInstancedMesh===!0?F.id:0,ee=q[z];if(ee!==void 0){for(const Z in ee){const V=ee[Z];for(const me in V)_(V[me].object),delete V[me];delete ee[Z]}delete q[z],Object.keys(q).length===0&&delete r[W]}}}function j(){G(),d=!0,f!==c&&(f=c,p(f.object))}function G(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:m,reset:j,resetDefaultState:G,dispose:B,releaseStatesOfGeometry:P,releaseStatesOfObject:C,releaseStatesOfProgram:b,initAttributes:w,enableAttribute:M,disableUnusedAttributes:D}}function q2(o,t,i){let r;function c(g){r=g}function f(g,p){o.drawArrays(r,g,p),i.update(p,r,1)}function d(g,p,_){_!==0&&(o.drawArraysInstanced(r,g,p,_),i.update(p,r,_))}function m(g,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,p,0,_);let S=0;for(let y=0;y<_;y++)S+=p[y];i.update(S,r,1)}this.setMode=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=m}function Y2(o,t,i,r){let c;function f(){if(c!==void 0)return c;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");c=o.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(b){return!(b!==xa&&r.convert(b)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(b){const C=b===Sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Pi&&b!==ga&&!C&&r.convert(b)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function g(b){if(b==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=g(p);_!==p&&(ft("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=i.logarithmicDepthBuffer===!0&&v===!1;i.reversedDepthBuffer===!0&&v===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),i.logarithmicDepthBuffer===!0&&v===!0&&ft("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),E=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=o.getParameter(o.MAX_SAMPLES),P=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:m,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:A,maxTextureSize:w,maxCubemapSize:M,maxAttributes:E,maxVertexUniforms:D,maxVaryings:I,maxFragmentUniforms:L,maxSamples:B,samples:P}}function Z2(o){const t=this;let i=null,r=0,c=!1,f=!1;const d=new Ts,m=new mt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const y=v.length!==0||S||r!==0||c;return c=S,r=v.length,y},this.beginShadows=function(){f=!0,_(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(v,S){i=_(v,S,0)},this.setState=function(v,S,y){const A=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,E=o.get(v);if(!c||A===null||A.length===0||f&&!M)f?_(null):p();else{const D=f?0:r,I=D*4;let L=E.clippingState||null;g.value=L,L=_(A,S,I,y);for(let B=0;B!==I;++B)L[B]=i[B];E.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function p(){g.value!==i&&(g.value=i,g.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(v,S,y,A){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=g.value,A!==!0||M===null){const E=y+w*4,D=S.matrixWorldInverse;m.getNormalMatrix(D),(M===null||M.length<E)&&(M=new Float32Array(E));for(let I=0,L=y;I!==w;++I,L+=4)d.copy(v[I]).applyMatrix4(D,m),d.normal.toArray(M,L),M[L+3]=d.constant}g.value=M,g.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}class tp extends va{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},c=[r,r,r,r,r,r];this.texture=new ZS(c),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},c=new mr(5,5,5),f=new Os({name:"CubemapFromEquirect",uniforms:So(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:li,blending:po});f.uniforms.tEquirect.value=i;const d=new Rt(c,f),m=i.minFilter;return i.minFilter===Ns&&(i.minFilter=oi),new Gm(1,10,this).update(t,d),i.minFilter=m,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,c=!0){const f=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,c);t.setRenderTarget(f)}}const Qv=256,K2=3,Q2=20,nE=256,iE=16,J2=3,$2=new fe,eR=new Bt;class zu{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Gm(1,10,null),this._boxMesh=new Rt(new mr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,i=0,r=.1,c=100,f={}){const{size:d=256,position:m=$2}=f,g=this._renderer;this._setSize(d);const p=this._allocateTarget(),_=this._getSourceTarget(!0);i>0&&(_.texture.mipmapsAutoUpdate=!1);const v=g.autoClear,S=g.autoClearColor,y=g.autoClearDepth,A=g.autoClearStencil,w=t.background;g.autoClear=!0,g.autoClearColor=!0,g.autoClearDepth=!0,g.autoClearStencil=!0,w===null&&(t.background=g.getClearColor(eR));const M=new Gm(r,c,_);return M.position.copy(m),M.update(g,t),g.autoClear=v,g.autoClearColor=S,g.autoClearDepth=y,g.autoClearStencil=A,t.background=w,i>0&&(_.texture.mipmapsAutoUpdate=!0,this._blur(p,i)),this._applyPMREM(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$v(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,i){return i>0?1-Math.sqrt(1-t/i):0}_setSize(t){this._cubeSize=Math.max(Qv,Ty(t))}_fromTexture(t,i){t.mapping===xo||t.mapping===yl?this._setSize(t.image.length===0?Qv:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const r=i||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(r),r}_allocateTarget(){const t=this._cubeSize,i=Jv(t,!1,!1),r=Math.log2(t)-K2;for(let c=0;c<=r;c++)i.texture.mipmaps.push({width:t>>c,height:t>>c});return i.texture.name="PMREM",i.texture.isPMREMTexture=!0,i}_getSourceTarget(t=!1){const i=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==i||t&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Jv(i,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,i,r){const c=this._boxMesh,f=this._cubeCamera;c.material=r,f.renderTarget=t,f.activeMipmapLevel=i;const d=t.width>>i;t.viewport.set(0,0,d,d),f.update(this._renderer,c),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let i;t.mapping===xo||t.mapping===yl?(this._cubemapMaterial===null&&(this._cubemapMaterial=e_()),i=this._cubemapMaterial,i.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=$v()),i=this._equirectMaterial),i.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,i)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=tR(),this._integrationMaterial=nR());const i=this._cubeSize,r=t.texture.mipmaps.length-1,c=this._ggxMaterial.uniforms;c.envMap.value=this._sourceTarget.texture;const f=this._integrationMaterial.uniforms;f.envMap.value=this._sourceTarget.texture,f.sourceLod.value=Math.log2(i/iE);for(let d=0;d<=r;d++){const m=zu.lodToRoughness(d,r);if(d>r-J2)f.roughness.value=m,this._renderCube(t,d,this._integrationMaterial);else{const g=m>0?Math.log2(i)+.5*Math.log2(6/(nE*Math.pow(m,4)))+.5:0;c.roughness.value=m,c.lodBias.value=g,this._renderCube(t,d,this._ggxMaterial)}}}_blur(t,i){this._blurMaterial===null&&(this._blurMaterial=iR());const r=this._blurMaterial,c=r.uniforms,f=this._sourceTarget;c.sigma.value=Math.min(i,Math.PI)/Math.SQRT2,c.envMap.value=f.texture,this._renderCube(t,0,r),c.envMap.value=t.texture,this._renderCube(f,0,r)}}function Jv(o,t,i){return new tp(o,{minFilter:Ns,generateMipmaps:t,type:Sa,colorSpace:Uu,depthBuffer:i})}function Cl(o,t,i){return new Os({name:o,uniforms:t,vertexShader:St.cube_vert,fragmentShader:i,side:li,blending:po,depthTest:!1,depthWrite:!1})}function tR(){return Cl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${nE}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function nR(){return Cl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:iE}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function iR(){return Cl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Q2}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function $v(){return Cl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function e_(){return Cl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function aR(o){let t=new WeakMap,i=new WeakMap,r=null;function c(S,y=!1){return S==null?null:y?d(S):f(S)}function f(S){if(S&&S.isTexture){const y=S.mapping;if(y===yh||y===Ah)if(t.has(S)){const A=t.get(S).texture;return m(A,S.mapping)}else{const A=S.image;if(A&&A.height>0){const w=new tp(A.height);return w.fromEquirectangularTexture(o,S),t.set(S,w),S.addEventListener("dispose",p),m(w.texture,S.mapping)}else return null}}return S}function d(S){if(S&&S.isTexture&&S.isPMREMTexture!==!0){const y=S.mapping,A=y===yh||y===Ah,w=y===xo||y===yl;if(A||w){let M=i.get(S);const E=M!==void 0?M.texture.pmremVersion:0;if(S.isRenderTargetTexture&&S.pmremVersion!==E)return r===null&&(r=new zu(o)),M=A?r.fromEquirectangular(S,M):r.fromCubemap(S,M),M.texture.pmremVersion=S.pmremVersion,i.set(S,M),M.texture;if(M!==void 0)return M.texture;{const D=S.image;return A&&D&&D.height>0||w&&D&&g(D)?(r===null&&(r=new zu(o)),M=A?r.fromEquirectangular(S):r.fromCubemap(S),M.texture.pmremVersion=S.pmremVersion,i.set(S,M),S.addEventListener("dispose",_),M.texture):null}}}return S}function m(S,y){return y===yh?S.mapping=xo:y===Ah&&(S.mapping=yl),S}function g(S){let y=0;const A=6;for(let w=0;w<A;w++)S[w]!==void 0&&y++;return y===A}function p(S){const y=S.target;y.removeEventListener("dispose",p);const A=t.get(y);A!==void 0&&(t.delete(y),A.dispose())}function _(S){const y=S.target;y.removeEventListener("dispose",_);const A=i.get(y);A!==void 0&&(i.delete(y),A.dispose())}function v(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:c,dispose:v}}function sR(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const c=o.getExtension(r);return t[r]=c,c}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const c=i(r);return c===null&&yu("WebGLRenderer: "+r+" extension not supported."),c}}}function rR(o,t,i,r){const c={},f=new WeakMap,d=new FinalizationRegistry(A=>delete c[A]);function m(A){g(A.target)}function g(A){A.index!==null&&t.remove(A.index);for(const M in A.attributes)t.remove(A.attributes[M]);A.removeEventListener("dispose",m),delete c[A.id],d.unregister(A);const w=f.get(A);w&&(t.remove(w),f.delete(A)),r.releaseStatesOfGeometry(A),A.isInstancedBufferGeometry===!0&&delete A._maxInstanceCount,i.memory.geometries--}function p(A,w){return c[w.id]!==void 0||(w.addEventListener("dispose",m),c[w.id]=new WeakRef(w),d.register(w,w.id,w),i.memory.geometries++),w}function _(A){const w=A.attributes;for(const M in w)t.update(w[M],o.ARRAY_BUFFER)}function v(A){const w=A.index,M=A.attributes.position;let E=0;if(M===void 0)return;const D=w!==null?w.array.length:M.array.length/3-1,I=M.count>=65535?WS:XS,L=new I(Math.ceil(D/3)*6,1),B=L.array;if(w!==null){const b=w.array;E=w.version;for(let C=0,j=0;C<D;C+=3){const G=b[C+0],F=b[C+1],W=b[C+2];B[j++]=G,B[j++]=F,B[j++]=F,B[j++]=W,B[j++]=W,B[j++]=G}}else{E=M.version;for(let b=0,C=0;b<D;b+=3){const j=b+0,G=b+1,F=b+2;B[C++]=j,B[C++]=G,B[C++]=G,B[C++]=F,B[C++]=F,B[C++]=j}}L.version=E;const P=f.get(A);P&&t.remove(P),f.set(A,L)}function S(A){const w=f.get(A);if(w){const M=A.index;M!==null&&w.version<M.version&&v(A)}else v(A);return f.get(A)}function y(){for(const A in c){const w=c[A].deref();w!==void 0&&g(w)}}return{get:p,update:_,getWireframeAttribute:S,dispose:y}}function oR(o,t,i){let r;function c(v){r=v}let f,d;function m(v){f=v.type,d=v.bytesPerElement}function g(v,S){o.drawElements(r,S,f,v*d),i.update(S,r,1)}function p(v,S,y){y!==0&&(o.drawElementsInstanced(r,S,f,v*d,y),i.update(S,r,y))}function _(v,S,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,f,v,0,y);let w=0;for(let M=0;M<y;M++)w+=S[M];i.update(w,r,1)}this.setMode=c,this.setIndex=m,this.render=g,this.renderInstances=p,this.renderMultiDraw=_}function lR(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,d,m){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=m*(f/3);break;case o.LINES:i.lines+=m*(f/2);break;case o.LINE_STRIP:i.lines+=m*(f-1);break;case o.LINE_LOOP:i.lines+=m*f;break;case o.POINTS:i.points+=m*f;break;default:jt("WebGLInfo: Unknown draw mode:",d);break}}function c(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:c,update:r}}function cR(o,t,i){const r=new WeakMap,c=new vn;function f(d,m,g){const p=d.morphTargetInfluences,_=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,v=_!==void 0?_.length:0;let S=r.get(m);if(S===void 0||S.count!==v){let G=function(){C.dispose(),r.delete(m),m.removeEventListener("dispose",G)};var y=G;S!==void 0&&S.texture.dispose();const A=m.morphAttributes.position!==void 0,w=m.morphAttributes.normal!==void 0,M=m.morphAttributes.color!==void 0,E=m.morphAttributes.position||[],D=m.morphAttributes.normal||[],I=m.morphAttributes.color||[];let L=0;A===!0&&(L=1),w===!0&&(L=2),M===!0&&(L=3);let B=m.attributes.position.count*L,P=1;B>t.maxTextureSize&&(P=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const b=new Float32Array(B*P*4*v),C=new VS(b,B,P,v);C.type=ga,C.needsUpdate=!0;const j=L*4;for(let F=0;F<v;F++){const W=E[F],q=D[F],z=I[F],ee=B*P*4*F;for(let Z=0;Z<W.count;Z++){const V=Z*j;A===!0&&(c.fromBufferAttribute(W,Z),b[ee+V+0]=c.x,b[ee+V+1]=c.y,b[ee+V+2]=c.z,b[ee+V+3]=0),w===!0&&(c.fromBufferAttribute(q,Z),b[ee+V+4]=c.x,b[ee+V+5]=c.y,b[ee+V+6]=c.z,b[ee+V+7]=0),M===!0&&(c.fromBufferAttribute(z,Z),b[ee+V+8]=c.x,b[ee+V+9]=c.y,b[ee+V+10]=c.z,b[ee+V+11]=z.itemSize===4?c.w:1)}}S={count:v,texture:C,size:new zt(B,P)},r.set(m,S),m.addEventListener("dispose",G)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const w=m.morphTargetsRelative?1:1-A;g.getUniforms().setValue(o,"morphTargetBaseInfluence",w),g.getUniforms().setValue(o,"morphTargetInfluences",p)}g.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function uR(o,t,i,r,c){let f=new WeakMap;function d(p){const _=c.render.frame,v=p.geometry,S=t.get(p,v);if(f.get(S)!==_&&(t.update(S),f.set(S,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",g)===!1&&p.addEventListener("dispose",g),f.get(p)!==_&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),f.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;f.get(y)!==_&&(y.update(),f.set(y,_))}return S}function m(){f=new WeakMap}function g(p){const _=p.target;_.removeEventListener("dispose",g),r.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:d,dispose:m}}const fR={[bS]:"LINEAR_TONE_MAPPING",[yS]:"REINHARD_TONE_MAPPING",[AS]:"CINEON_TONE_MAPPING",[TS]:"ACES_FILMIC_TONE_MAPPING",[NS]:"AGX_TONE_MAPPING",[CS]:"NEUTRAL_TONE_MAPPING",[RS]:"CUSTOM_TONE_MAPPING"};function dR(o,t,i,r,c,f){const d=new va(t,i,{type:o,depthBuffer:c,stencilBuffer:f,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let m=null,g=null,p=null;const _=new Bi;_.setAttribute("position",new In([-1,3,0,-1,-1,0,3,-1,0],3)),_.setAttribute("uv",new In([0,2,0,0,2,0],2));const v=new iA({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),S=new Rt(_,v),y=new rA(-1,1,1,-1,0,1);let A=null,w=null,M=!1,E,D=null,I=[],L=!1;this.setSize=function(B,P){d.setSize(B,P),m!==null&&m.setSize(B,P),g!==null&&g.setSize(B,P);for(let b=0;b<I.length;b++){const C=I[b];C.setSize&&C.setSize(B,P)}},this.setEffects=function(B){I=B,L=I.length>0&&I[0].isRenderPass===!0;const P=d.width,b=d.height;I.length>0&&m===null&&(m=new va(P,b,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),g=new va(P,b,{type:Sa,depthBuffer:!1,stencilBuffer:!1}));const C=c===!0&&I.some(j=>j.needsDepthTexture===!0);C!==(d.depthTexture!==null)&&(C===!0&&p===null&&(p=new _o(P,b),f===!0&&(p.format=Cs,p.type=vo)),d.dispose(),d.depthTexture=C?p:null,d.resolveDepthBuffer=C,d.storeMultisampledDepthBuffer=C);for(let j=0;j<I.length;j++){const G=I[j];G.setSize&&G.setSize(P,b),C&&G.needsDepthTexture===!0&&G.setDepthTexture&&G.setDepthTexture(p)}},this.begin=function(B,P){if(M||B.toneMapping===ja&&I.length===0)return!1;if(D=P,P!==null){const b=P.width,C=P.height;(d.width!==b||d.height!==C)&&this.setSize(b,C)}return L===!1&&B.setRenderTarget(d),E=B.toneMapping,B.toneMapping=ja,!0},this.hasRenderPass=function(){return L},this.end=function(B,P){B.toneMapping=E,M=!0;let b=d,C=m;for(let j=0;j<I.length;j++){const G=I[j];G.enabled!==!1&&(G.render(B,C,b,P),G.needsSwap!==!1&&(b=C,C=C===m?g:m))}if(A!==B.outputColorSpace||w!==B.toneMapping){A=B.outputColorSpace,w=B.toneMapping,v.defines={},Ot.getTransfer(A)===Qt&&(v.defines.SRGB_TRANSFER="");const j=fR[w];j&&(v.defines[j]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=b.texture,B.setRenderTarget(D),B.render(S,y),D=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){d.dispose(),m!==null&&m.dispose(),g!==null&&g.dispose(),_.dispose(),v.dispose()}}const aE=new ei,sE=new _o(1,1),rE=new KS(1),oE=new VS,lE=new Uy,cE=new ZS,t_=[],n_=[],i_=new Float32Array(16),a_=new Float32Array(9),s_=new Float32Array(4);function Mo(o,t,i){const r=o[0];if(r<=0||r>0)return o;const c=t*i;let f=t_[c];if(f===void 0&&(f=new Float32Array(c),t_[c]=f),t!==0){r.toArray(f,0);for(let d=1,m=0;d!==t;++d)m+=i,o[d].toArray(f,m)}return f}function Cn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function wn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function ju(o,t){let i=n_[t];i===void 0&&(i=new Int32Array(t),n_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function hR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function mR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Cn(i,t))return;o.uniform2fv(this.addr,t),wn(i,t)}}function pR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Cn(i,t))return;o.uniform3fv(this.addr,t),wn(i,t)}}function gR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Cn(i,t))return;o.uniform4fv(this.addr,t),wn(i,t)}}function xR(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(Cn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),wn(i,t)}else{if(Cn(i,r))return;s_.set(r),o.uniformMatrix2fv(this.addr,!1,s_),wn(i,r)}}function vR(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(Cn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),wn(i,t)}else{if(Cn(i,r))return;a_.set(r),o.uniformMatrix3fv(this.addr,!1,a_),wn(i,r)}}function _R(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(Cn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),wn(i,t)}else{if(Cn(i,r))return;i_.set(r),o.uniformMatrix4fv(this.addr,!1,i_),wn(i,r)}}function SR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function ER(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Cn(i,t))return;o.uniform2iv(this.addr,t),wn(i,t)}}function MR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Cn(i,t))return;o.uniform3iv(this.addr,t),wn(i,t)}}function bR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Cn(i,t))return;o.uniform4iv(this.addr,t),wn(i,t)}}function yR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function AR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Cn(i,t))return;o.uniform2uiv(this.addr,t),wn(i,t)}}function TR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Cn(i,t))return;o.uniform3uiv(this.addr,t),wn(i,t)}}function RR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Cn(i,t))return;o.uniform4uiv(this.addr,t),wn(i,t)}}function Xu(o){return o.version===0&&(o.compareFunction=HS,o.needsUpdate=!0),o}function NR(o,t,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c);let f;this.type===o.SAMPLER_2D_SHADOW?f=Xu(sE):f=aE,i.setTexture2D(t||f,c)}function CR(o,t,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),i.setTexture3D(t||lE,c)}function wR(o,t,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c);let f;this.type===o.SAMPLER_CUBE_SHADOW?f=Xu(rE):f=cE,i.setTextureCube(t||f,c)}function DR(o,t,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),i.setTexture2DArray(t||oE,c)}function OR(o){switch(o){case 5126:return hR;case 35664:return mR;case 35665:return pR;case 35666:return gR;case 35674:return xR;case 35675:return vR;case 35676:return _R;case 5124:case 35670:return SR;case 35667:case 35671:return ER;case 35668:case 35672:return MR;case 35669:case 35673:return bR;case 5125:return yR;case 36294:return AR;case 36295:return TR;case 36296:return RR;case 35678:case 36198:case 36298:case 36306:case 35682:return NR;case 35679:case 36299:case 36307:return CR;case 35680:case 36300:case 36308:case 36293:return wR;case 36289:case 36303:case 36311:case 36292:return DR}}function LR(o,t){o.uniform1fv(this.addr,t)}function UR(o,t){const i=Mo(t,this.size,2);o.uniform2fv(this.addr,i)}function FR(o,t){const i=Mo(t,this.size,3);o.uniform3fv(this.addr,i)}function IR(o,t){const i=Mo(t,this.size,4);o.uniform4fv(this.addr,i)}function PR(o,t){const i=Mo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function BR(o,t){const i=Mo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function zR(o,t){const i=Mo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function HR(o,t){o.uniform1iv(this.addr,t)}function GR(o,t){o.uniform2iv(this.addr,t)}function VR(o,t){o.uniform3iv(this.addr,t)}function kR(o,t){o.uniform4iv(this.addr,t)}function jR(o,t){o.uniform1uiv(this.addr,t)}function XR(o,t){o.uniform2uiv(this.addr,t)}function WR(o,t){o.uniform3uiv(this.addr,t)}function qR(o,t){o.uniform4uiv(this.addr,t)}function YR(o,t,i){const r=this.cache,c=t.length,f=ju(i,c);Cn(r,f)||(o.uniform1iv(this.addr,f),wn(r,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=Xu(sE):d=aE;for(let m=0;m!==c;++m)i.setTexture2D(t[m]||d,f[m])}function ZR(o,t,i){const r=this.cache,c=t.length,f=ju(i,c);Cn(r,f)||(o.uniform1iv(this.addr,f),wn(r,f));for(let d=0;d!==c;++d)i.setTexture3D(t[d]||lE,f[d])}function KR(o,t,i){const r=this.cache,c=t.length,f=ju(i,c);Cn(r,f)||(o.uniform1iv(this.addr,f),wn(r,f));let d;this.type===o.SAMPLER_CUBE_SHADOW?d=Xu(rE):d=cE;for(let m=0;m!==c;++m)i.setTextureCube(t[m]||d,f[m])}function QR(o,t,i){const r=this.cache,c=t.length,f=ju(i,c);Cn(r,f)||(o.uniform1iv(this.addr,f),wn(r,f));for(let d=0;d!==c;++d)i.setTexture2DArray(t[d]||oE,f[d])}function JR(o){switch(o){case 5126:return LR;case 35664:return UR;case 35665:return FR;case 35666:return IR;case 35674:return PR;case 35675:return BR;case 35676:return zR;case 5124:case 35670:return HR;case 35667:case 35671:return GR;case 35668:case 35672:return VR;case 35669:case 35673:return kR;case 5125:return jR;case 36294:return XR;case 36295:return WR;case 36296:return qR;case 35678:case 36198:case 36298:case 36306:case 35682:return YR;case 35679:case 36299:case 36307:return ZR;case 35680:case 36300:case 36308:case 36293:return KR;case 36289:case 36303:case 36311:case 36292:return QR}}class $R{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=OR(i.type)}}class e3{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=JR(i.type)}}class t3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const c=this.seq;for(let f=0,d=c.length;f!==d;++f){const m=c[f];m.setValue(t,i[m.id],r)}}}const Kh=/(\w+)(\])?(\[|\.)?/g;function r_(o,t){o.seq.push(t),o.map[t.id]=t}function n3(o,t,i){const r=o.name,c=r.length;for(Kh.lastIndex=0;;){const f=Kh.exec(r),d=Kh.lastIndex;let m=f[1];const g=f[2]==="]",p=f[3];if(g&&(m=m|0),p===void 0||p==="["&&d+2===c){r_(i,p===void 0?new $R(m,o,t):new e3(m,o,t));break}else{let v=i.map[m];v===void 0&&(v=new t3(m),r_(i,v)),i=v}}}class Au{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const m=t.getActiveUniform(i,d),g=t.getUniformLocation(i,m.name);n3(m,g,this)}const c=[],f=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?c.push(d):f.push(d);c.length>0&&(this.seq=c.concat(f))}setValue(t,i,r,c){const f=this.map[i];f!==void 0&&f.setValue(t,r,c)}setOptional(t,i,r){const c=i[r];c!==void 0&&this.setValue(t,r,c)}static upload(t,i,r,c){for(let f=0,d=i.length;f!==d;++f){const m=i[f],g=r[m.id];g.needsUpdate!==!1&&m.setValue(t,g.value,c)}}static seqWithValue(t,i){const r=[];for(let c=0,f=t.length;c!==f;++c){const d=t[c];d.id in i&&r.push(d)}return r}}function o_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const i3=37297;let a3=0;function s3(o,t){const i=o.split(`
`),r=[],c=Math.max(t-6,0),f=Math.min(t+6,i.length);for(let d=c;d<f;d++){const m=d+1;r.push(`${m===t?">":" "} ${m}: ${i[d]}`)}return r.join(`
`)}const l_=new mt;function r3(o){Ot._getMatrix(l_,Ot.workingColorSpace,o);const t=`mat3( ${l_.elements.map(i=>i.toFixed(4))} )`;switch(Ot.getTransfer(o)){case Fu:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function c_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),f=(o.getShaderInfoLog(t)||"").trim();if(r&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const m=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+s3(o.getShaderSource(t),m)}else return f}function o3(o,t){const i=r3(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const l3={[bS]:"Linear",[yS]:"Reinhard",[AS]:"Cineon",[TS]:"ACESFilmic",[NS]:"AgX",[CS]:"Neutral",[RS]:"Custom"};function c3(o,t){const i=l3[t];return i===void 0?(ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const vu=new fe;function u3(){Ot.getLuminanceCoefficients(vu);const o=vu.x.toFixed(4),t=vu.y.toFixed(4),i=vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_l).join(`
`)}function d3(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function h3(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let c=0;c<r;c++){const f=o.getActiveAttrib(t,c),d=f.name;let m=1;f.type===o.FLOAT_MAT2&&(m=2),f.type===o.FLOAT_MAT3&&(m=3),f.type===o.FLOAT_MAT4&&(m=4),i[d]={type:f.type,location:o.getAttribLocation(t,d),locationSize:m}}return i}function _l(o){return o!==""}function u_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function f_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const m3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vm(o){return o.replace(m3,p3)}function p3(o,t){const i=St[t];if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Vm(i)}const g3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d_(o){return o.replace(g3,x3)}function x3(o,t,i,r){let c="";for(let f=parseInt(t);f<parseInt(i);f++)c+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function h_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const v3={[_u]:"SHADOWMAP_TYPE_PCF",[vl]:"SHADOWMAP_TYPE_VSM"};function _3(o){return v3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const S3={[yl]:"ENVMAP_MODE_REFRACTION"};function E3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":S3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const M3={[MS]:"ENVMAP_BLENDING_MULTIPLY",[cy]:"ENVMAP_BLENDING_MIX",[uy]:"ENVMAP_BLENDING_ADD"};function b3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":M3[o.combine]||"ENVMAP_BLENDING_NONE"}function y3(o,t,i,r){const c=o.getContext(),f=i.defines;let d=i.vertexShader,m=i.fragmentShader;const g=_3(i),p=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",_=E3(i),v=b3(i),S=f3(i),y=d3(f),A=c.createProgram();let w,M,E=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(w=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y].filter(_l).join(`
`),w.length>0&&(w+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y].filter(_l).join(`
`),M.length>0&&(M+=`
`)):(w=[h_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_l).join(`
`),M=[h_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ja?"#define TONE_MAPPING":"",i.toneMapping!==ja?St.tonemapping_pars_fragment:"",i.toneMapping!==ja?c3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,o3("linearToOutputTexel",i.outputColorSpace),u3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(_l).join(`
`)),d=Vm(d),d=u_(d,i),d=f_(d,i),m=Vm(m),m=u_(m,i),m=f_(m,i),d=d_(d),m=d_(m),i.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,w=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,M=["#define varying in",i.glslVersion===Rv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Rv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const D=E+w+d,I=E+M+m,L=o_(c,c.VERTEX_SHADER,D),B=o_(c,c.FRAGMENT_SHADER,I);c.attachShader(A,L),c.attachShader(A,B),i.index0AttributeName!==void 0?c.bindAttribLocation(A,0,i.index0AttributeName):i.hasPositionAttribute===!0&&c.bindAttribLocation(A,0,"position"),c.linkProgram(A);function P(G){if(o.debug.checkShaderErrors){const F=c.getProgramInfoLog(A)||"",W=c.getShaderInfoLog(L)||"",q=c.getShaderInfoLog(B)||"",z=F.trim(),ee=W.trim(),Z=q.trim();let V=!0,me=!0;if(c.getProgramParameter(A,c.LINK_STATUS)===!1)if(V=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,A,L,B);else{const Q=c_(c,L,"vertex"),pe=c_(c,B,"fragment");jt("WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(A,c.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+z+`
`+Q+`
`+pe)}else z!==""?ft("WebGLProgram: Program Info Log:",z):(ee===""||Z==="")&&(me=!1);me&&(G.diagnostics={runnable:V,programLog:z,vertexShader:{log:ee,prefix:w},fragmentShader:{log:Z,prefix:M}})}c.deleteShader(L),c.deleteShader(B),b=new Au(c,A),C=h3(c,A)}let b;this.getUniforms=function(){return b===void 0&&P(this),b};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let j=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=c.getProgramParameter(A,i3)),j},this.destroy=function(){r.releaseStatesOfProgram(this),c.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=a3++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=B,this}let A3=0;class T3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,r){const c=this._getShaderCacheForMaterial(t);return c.has(i)===!1&&(c.add(i),i.usedTimes++),c.has(r)===!1&&(c.add(r),r.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new R3(t),i.set(t,r)),r}}class R3{constructor(t){this.id=A3++,this.code=t,this.usedTimes=0}}function N3(o){return o===dr||o===Ou||o===Lu}function C3(o,t,i,r,c,f){const d=new kS,m=new T3,g=new Set,p=[],_=new Map,v=r.logarithmicDepthBuffer,S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return g.add(b),b===0?"uv":`uv${b}`}function A(b,C,j,G,F,W){const q=G.fog,z=F.geometry,ee=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,Z=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,V=t.get(b.envMap||ee,Z),me=S[b.type];let Q=r.precision;b.precision!==null&&(Q=r.getMaxPrecision(b.precision),Q!==b.precision&&ft("WebGLProgram.getParameters:",b.precision,"not supported, using",Q,"instead."));const pe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ye=pe!==void 0?pe.length:0;let je=0;z.morphAttributes.position!==void 0&&(je=1),z.morphAttributes.normal!==void 0&&(je=2),z.morphAttributes.color!==void 0&&(je=3);let et,O,ie,J;if(me){const Be=pa[me];et=Be.vertexShader,O=Be.fragmentShader}else{et=b.vertexShader,O=b.fragmentShader;const Be=m.getVertexShaderStage(b),Pt=m.getFragmentShaderStage(b);m.update(b,Be,Pt),ie=Be.id,J=Pt.id}const ce=o.getRenderTarget(),he=o.state.buffers.depth.getReversed(),Te=F.isInstancedMesh===!0,Xe=F.isBatchedMesh===!0,Se=!!b.map,Ce=!!b.matcap,st=!!V,$e=st&&V.isPMREMTexture===!0,Et=!!b.aoMap,yt=!!b.lightMap,Nt=!!b.bumpMap&&b.wireframe===!1,rt=!!b.normalMap,ln=!!b.displacementMap,Jt=!!b.emissiveMap,cn=!!b.metalnessMap,un=!!b.roughnessMap,Tn=b.anisotropy>0,K=b.clearcoat>0,Rn=b.diffuseRoughness>0,It=b.dispersion>0,Gt=b.retroreflectivity>0,ze=b.iridescence>0,Ht=b.sheen>0,tt=b.transmission>0,ot=Tn&&!!b.anisotropyMap,U=K&&!!b.clearcoatMap,T=K&&!!b.clearcoatNormalMap,oe=K&&!!b.clearcoatRoughnessMap,Re=Rn&&!!b.diffuseRoughnessMap,Ee=ze&&!!b.iridescenceMap,Ue=ze&&!!b.iridescenceThicknessMap,Ie=Ht&&!!b.sheenColorMap,ge=Ht&&!!b.sheenRoughnessMap,_e=!!b.specularMap,Fe=!!b.specularColorMap,k=!!b.specularIntensityMap,ve=tt&&!!b.transmissionMap,xe=tt&&!!b.thicknessMap,we=!!b.gradientMap,Ne=!!b.alphaMap,De=b.alphaTest>0,Ke=!!b.alphaHash,nt=!!b.extensions;let Ae=ja;b.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Ae=o.toneMapping);const Ye=$e?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,ht={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:et,fragmentShader:O,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:J,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:Q,batching:Xe,batchingColor:Xe&&F._colorsTexture!==null,instancing:Te,instancingColor:Te&&F.instanceColor!==null,instancingMorph:Te&&F.morphTexture!==null,outputColorSpace:ce===null?o.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ot.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Se,matcap:Ce,envMap:st,envMapMode:st&&V.mapping,envMapPMREM:$e,envMapMaxLod:$e?Ye.length-1:null,envMapSize:$e?Ye[0].width:null,aoMap:Et,lightMap:yt,bumpMap:Nt,normalMap:rt,displacementMap:ln,emissiveMap:Jt,normalMapObjectSpace:rt&&b.normalMapType===hy,normalMapTangentSpace:rt&&b.normalMapType===Tv,packedNormalMap:rt&&b.normalMapType===Tv&&N3(b.normalMap.format),metalnessMap:cn,roughnessMap:un,anisotropy:Tn,anisotropyMap:ot,clearcoat:K,clearcoatMap:U,clearcoatNormalMap:T,clearcoatRoughnessMap:oe,diffuseRoughness:Rn,diffuseRoughnessMap:Re,dispersion:It,retroreflection:Gt,iridescence:ze,iridescenceMap:Ee,iridescenceThicknessMap:Ue,sheen:Ht,sheenColorMap:Ie,sheenRoughnessMap:ge,specularMap:_e,specularColorMap:Fe,specularIntensityMap:k,transmission:tt,transmissionMap:ve,thicknessMap:xe,gradientMap:we,opaque:b.transparent===!1&&b.blending===Sl&&b.alphaToCoverage===!1,alphaMap:Ne,alphaTest:De,alphaHash:Ke,combine:b.combine,mapUv:Se&&y(b.map.channel),aoMapUv:Et&&y(b.aoMap.channel),lightMapUv:yt&&y(b.lightMap.channel),bumpMapUv:Nt&&y(b.bumpMap.channel),normalMapUv:rt&&y(b.normalMap.channel),displacementMapUv:ln&&y(b.displacementMap.channel),emissiveMapUv:Jt&&y(b.emissiveMap.channel),metalnessMapUv:cn&&y(b.metalnessMap.channel),roughnessMapUv:un&&y(b.roughnessMap.channel),anisotropyMapUv:ot&&y(b.anisotropyMap.channel),clearcoatMapUv:U&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:T&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&y(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Re&&y(b.diffuseRoughnessMap.channel),iridescenceMapUv:Ee&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:ge&&y(b.sheenRoughnessMap.channel),specularMapUv:_e&&y(b.specularMap.channel),specularColorMapUv:Fe&&y(b.specularColorMap.channel),specularIntensityMapUv:k&&y(b.specularIntensityMap.channel),transmissionMapUv:ve&&y(b.transmissionMap.channel),thicknessMapUv:xe&&y(b.thicknessMap.channel),alphaMapUv:Ne&&y(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(rt||Tn),vertexNormals:!!z.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(Se||Ne),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||z.attributes.normal===void 0&&rt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:he,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:je,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:W.filter(Be=>Be.texture!==null).length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&j.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Se&&b.map.isVideoTexture===!0&&Ot.getTransfer(b.map.colorSpace)===Qt,decodeVideoTextureEmissive:Jt&&b.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(b.emissiveMap.colorSpace)===Qt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Mi,flipSided:b.side===li,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:nt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&b.extensions.multiDraw===!0||Xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ht.vertexUv1s=g.has(1),ht.vertexUv2s=g.has(2),ht.vertexUv3s=g.has(3),g.clear(),ht}function w(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const j in b.defines)C.push(j),C.push(b.defines[j]);return b.isRawShaderMaterial===!1&&(M(C,b),E(C,b),C.push(o.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function M(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapPMREM),b.push(C.envMapMaxLod),b.push(C.envMapSize),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.diffuseRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.numSunLights),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numSunLightShadows),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.numLightProbeGrids),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function E(b,C){d.disableAll(),C.instancing&&d.enable(0),C.instancingColor&&d.enable(1),C.instancingMorph&&d.enable(2),C.matcap&&d.enable(3),C.envMap&&d.enable(4),C.normalMapObjectSpace&&d.enable(5),C.normalMapTangentSpace&&d.enable(6),C.clearcoat&&d.enable(7),C.iridescence&&d.enable(8),C.alphaTest&&d.enable(9),C.vertexColors&&d.enable(10),C.vertexAlphas&&d.enable(11),C.vertexUv1s&&d.enable(12),C.vertexUv2s&&d.enable(13),C.vertexUv3s&&d.enable(14),C.vertexTangents&&d.enable(15),C.anisotropy&&d.enable(16),C.alphaHash&&d.enable(17),C.batching&&d.enable(18),C.dispersion&&d.enable(19),C.retroreflection&&d.enable(24),C.diffuseRoughness&&d.enable(25),C.batchingColor&&d.enable(20),C.gradientMap&&d.enable(21),C.packedNormalMap&&d.enable(22),C.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),C.numLightProbeGrids>0&&d.enable(22),C.hasPositionAttribute&&d.enable(23),b.push(d.mask)}function D(b){const C=S[b.type];let j;if(C){const G=pa[C];j=eA.clone(G.uniforms)}else j=b.uniforms;return j}function I(b,C){let j=_.get(C);return j!==void 0?++j.usedTimes:(j=new y3(o,C,b,c),p.push(j),_.set(C,j)),j}function L(b){if(--b.usedTimes===0){const C=p.indexOf(b);p[C]=p[p.length-1],p.pop(),_.delete(b.cacheKey),b.destroy()}}function B(b){m.remove(b)}function P(){m.dispose()}return{getParameters:A,getProgramCacheKey:w,getUniforms:D,acquireProgram:I,releaseProgram:L,releaseShaderCache:B,programs:p,dispose:P}}function w3(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let m=o.get(d);return m===void 0&&(m={},o.set(d,m)),m}function r(d){o.delete(d)}function c(d,m,g){o.get(d)[m]=g}function f(){o=new WeakMap}return{has:t,get:i,remove:r,update:c,dispose:f}}function D3(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function m_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function p_(){const o=[];let t=0;const i=[],r=[],c=[];function f(){t=0,i.length=0,r.length=0,c.length=0}function d(S){let y=0;return S.isInstancedMesh&&(y+=2),S.isSkinnedMesh&&(y+=1),y}function m(S,y,A,w,M,E){let D=o[t];return D===void 0?(D={id:S.id,object:S,geometry:y,material:A,materialVariant:d(S),groupOrder:w,renderOrder:S.renderOrder,z:M,group:E},o[t]=D):(D.id=S.id,D.object=S,D.geometry=y,D.material=A,D.materialVariant=d(S),D.groupOrder=w,D.renderOrder=S.renderOrder,D.z=M,D.group=E),t++,D}function g(S,y,A,w,M,E,D){D.reversedDepth===!0&&(M=-M);const I=m(S,y,A,w,M,E);A.transmission>0?r.push(I):A.transparent===!0?c.push(I):i.push(I)}function p(S,y,A,w,M,E){const D=m(S,y,A,w,M,E);A.transmission>0?r.unshift(D):A.transparent===!0?c.unshift(D):i.unshift(D)}function _(S,y){i.length>1&&i.sort(S||D3),r.length>1&&r.sort(y||m_),c.length>1&&c.sort(y||m_)}function v(){for(let S=t,y=o.length;S<y;S++){const A=o[S];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:r,transparent:c,init:f,push:g,unshift:p,finish:v,sort:_}}function O3(){let o=new WeakMap;function t(r,c){const f=o.get(r);let d;return f===void 0?(d=new p_,o.set(r,[d])):c>=f.length?(d=new p_,f.push(d)):d=f[c],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function L3(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new fe,color:new Bt};break;case"SpotLight":i={position:new fe,direction:new fe,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new fe,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new fe,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":i={color:new Bt,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return o[t.id]=i,i}}}function U3(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let F3=0;function I3(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function P3(o){const t=new L3,i=U3(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new fe);const c=new fe,f=new _n,d=new _n;function m(p){let _=0,v=0,S=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let y=0,A=0,w=0,M=0,E=0,D=0,I=0,L=0,B=0,P=0,b=0,C=0,j=0,G=0;p.sort(I3);for(let W=0,q=p.length;W<q;W++){const z=p[W],ee=z.color,Z=z.intensity,V=z.distance;let me=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===dr?me=z.shadow.map.texture:me=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)_+=ee.r*Z,v+=ee.g*Z,S+=ee.b*Z;else if(z.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(z.sh.coefficients[Q],Z);G++}else if(z.isSunLight){const Q=t.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const pe=z.shadow,ye=i.get(z);ye.shadowIntensity=pe.intensity,ye.shadowBias=pe.bias,ye.shadowNormalBias=pe.normalBias,ye.shadowRadius=pe.radius,ye.shadowMapSize.copy(pe.mapSize).multiply(pe.getFrameExtents()),r.sunShadow[A]=ye,r.sunShadowMap[A]=me;const je=pe.getViewportCount();for(let et=0;et<je;et++)r.sunShadowMatrix[w+et]=pe.getMatrix(et),r.sunShadowCascade[w+et]=pe._cascadeData[et];w+=je,A++}r.sun[y]=Q,y++}else if(z.isDirectionalLight){const Q=t.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const pe=z.shadow,ye=i.get(z);ye.shadowIntensity=pe.intensity,ye.shadowBias=pe.bias,ye.shadowNormalBias=pe.normalBias,ye.shadowRadius=pe.radius,ye.shadowMapSize=pe.mapSize,r.directionalShadow[M]=ye,r.directionalShadowMap[M]=me,r.directionalShadowMatrix[M]=z.shadow.matrix,B++}r.directional[M]=Q,M++}else if(z.isSpotLight){const Q=t.get(z);Q.position.setFromMatrixPosition(z.matrixWorld),Q.color.copy(ee).multiplyScalar(Z),Q.distance=V,Q.coneCos=Math.cos(z.angle),Q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Q.decay=z.decay,r.spot[D]=Q;const pe=z.shadow;if(z.map&&(r.spotLightMap[C]=z.map,C++,pe.updateMatrices(z),z.castShadow&&j++),r.spotLightMatrix[D]=pe.matrix,z.castShadow){const ye=i.get(z);ye.shadowIntensity=pe.intensity,ye.shadowBias=pe.bias,ye.shadowNormalBias=pe.normalBias,ye.shadowRadius=pe.radius,ye.shadowMapSize=pe.mapSize,r.spotShadow[D]=ye,r.spotShadowMap[D]=me,b++}D++}else if(z.isRectAreaLight){const Q=t.get(z);Q.color.copy(ee).multiplyScalar(Z),Q.halfWidth.set(z.width*.5,0,0),Q.halfHeight.set(0,z.height*.5,0),r.rectArea[I]=Q,I++}else if(z.isPointLight){const Q=t.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),Q.distance=z.distance,Q.decay=z.decay,z.castShadow){const pe=z.shadow,ye=i.get(z);ye.shadowIntensity=pe.intensity,ye.shadowBias=pe.bias,ye.shadowNormalBias=pe.normalBias,ye.shadowRadius=pe.radius,ye.shadowMapSize=pe.mapSize,ye.shadowCameraNear=pe.camera.near,ye.shadowCameraFar=pe.camera.far,r.pointShadow[E]=ye,r.pointShadowMap[E]=me,r.pointShadowMatrix[E]=z.shadow.matrix,P++}r.point[E]=Q,E++}else if(z.isHemisphereLight){const Q=t.get(z);Q.skyColor.copy(z.color).multiplyScalar(Z),Q.groundColor.copy(z.groundColor).multiplyScalar(Z),r.hemi[L]=Q,L++}}I>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ke.LTC_FLOAT_1,r.rectAreaLTC2=ke.LTC_FLOAT_2):(r.rectAreaLTC1=ke.LTC_HALF_1,r.rectAreaLTC2=ke.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=S;const F=r.hash;(F.sunLength!==y||F.directionalLength!==M||F.pointLength!==E||F.spotLength!==D||F.rectAreaLength!==I||F.hemiLength!==L||F.numSunShadows!==A||F.numDirectionalShadows!==B||F.numPointShadows!==P||F.numSpotShadows!==b||F.numSpotMaps!==C||F.numLightProbes!==G)&&(r.sun.length=y,r.directional.length=M,r.spot.length=D,r.rectArea.length=I,r.point.length=E,r.hemi.length=L,r.sunShadow.length=A,r.sunShadowMap.length=A,r.sunShadowMatrix.length=w,r.sunShadowCascade.length=w,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.directionalShadowMatrix.length=B,r.pointShadow.length=P,r.pointShadowMap.length=P,r.pointShadowMatrix.length=P,r.spotShadow.length=b,r.spotShadowMap.length=b,r.spotLightMatrix.length=b+C-j,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=j,r.numLightProbes=G,F.sunLength=y,F.directionalLength=M,F.pointLength=E,F.spotLength=D,F.rectAreaLength=I,F.hemiLength=L,F.numSunShadows=A,F.numDirectionalShadows=B,F.numPointShadows=P,F.numSpotShadows=b,F.numSpotMaps=C,F.numLightProbes=G,r.version=F3++)}function g(p,_){let v=0,S=0,y=0,A=0,w=0,M=0;const E=_.matrixWorldInverse;for(let D=0,I=p.length;D<I;D++){const L=p[D];if(L.isSunLight){const B=r.sun[v];B.direction.setFromMatrixPosition(L.matrixWorld),B.direction.transformDirection(E),v++}else if(L.isDirectionalLight){const B=r.directional[S];B.direction.setFromMatrixPosition(L.matrixWorld),c.setFromMatrixPosition(L.target.matrixWorld),B.direction.sub(c),B.direction.transformDirection(E),S++}else if(L.isSpotLight){const B=r.spot[A];B.position.setFromMatrixPosition(L.matrixWorld),B.position.applyMatrix4(E),B.direction.setFromMatrixPosition(L.matrixWorld),c.setFromMatrixPosition(L.target.matrixWorld),B.direction.sub(c),B.direction.transformDirection(E),A++}else if(L.isRectAreaLight){const B=r.rectArea[w];B.position.setFromMatrixPosition(L.matrixWorld),B.position.applyMatrix4(E),d.identity(),f.copy(L.matrixWorld),f.premultiply(E),d.extractRotation(f),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),B.halfWidth.applyMatrix4(d),B.halfHeight.applyMatrix4(d),w++}else if(L.isPointLight){const B=r.point[y];B.position.setFromMatrixPosition(L.matrixWorld),B.position.applyMatrix4(E),y++}else if(L.isHemisphereLight){const B=r.hemi[M];B.direction.setFromMatrixPosition(L.matrixWorld),B.direction.transformDirection(E),M++}}}return{setup:m,setupView:g,state:r}}function g_(o){const t=new P3(o),i=[],r=[],c=[];function f(v){_.camera=v,i.length=0,r.length=0,c.length=0}function d(v){v.isLightProbeGrid?c.push(v):i.push(v)}function m(v){r.push(v)}function g(){t.setup(i),c.sort((v,S)=>v.priority-S.priority||v.id-S.id)}function p(v){t.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:c,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:_,setupLights:g,setupLightsView:p,pushLight:d,pushShadow:m}}function B3(o){let t=new WeakMap;function i(c,f=0){const d=t.get(c);let m;return d===void 0?(m=new g_(o),t.set(c,[m])):f>=d.length?(m=new g_(o),d.push(m)):m=d[f],m}function r(){t=new WeakMap}return{get:i,dispose:r}}const z3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,G3=[new fe(1,0,0),new fe(-1,0,0),new fe(0,1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1)],V3=[new fe(0,-1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1),new fe(0,-1,0),new fe(0,-1,0)],x_=new _n,xl=new fe,Qh=new fe;function k3(o,t,i){let r=new Bu;const c=new zt,f=new zt,d=new vn,m=new aA,g=new sA,p={},_=i.maxTextureSize,v={[fr]:li,[li]:fr,[Mi]:Mi},S=new Os({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:z3,fragmentShader:H3}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const A=new Bi;A.setAttribute("position",new ws(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Rt(A,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let E=this.type;this.render=function(P,b,C){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||P.length===0)return;this.type===jb&&(ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_u);const j=o.getRenderTarget(),G=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),W=o.state;W.setBlending(po),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const q=E!==this.type;q&&b.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(ee=>ee.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,ee=P.length;z<ee;z++){const Z=P[z],V=Z.shadow;if(V===void 0){ft("WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;c.copy(V.mapSize);const me=V.getFrameExtents();c.multiply(me),f.copy(V.mapSize),(c.x>_||c.y>_)&&(c.x>_&&(f.x=Math.floor(_/me.x),c.x=f.x*me.x,V.mapSize.x=f.x),c.y>_&&(f.y=Math.floor(_/me.y),c.y=f.y*me.y,V.mapSize.y=f.y));const Q=o.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Q,V.map===null||q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===vl){if(Z.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new va(c.x,c.y,{format:dr,type:Sa,minFilter:oi,magFilter:oi,generateMipmaps:!1}),V.map.texture.name=Z.name+".shadowMap",V.map.depthTexture=new _o(c.x,c.y,ga),V.map.depthTexture.name=Z.name+".shadowMapDepth",V.map.depthTexture.format=Ds,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=jn,V.map.depthTexture.magFilter=jn}else Z.isPointLight?(V.map=new tp(c.x),V.map.depthTexture=new KS(c.x,_a)):(V.map=new va(c.x,c.y),V.map.depthTexture=new _o(c.x,c.y,_a)),V.map.depthTexture.name=Z.name+".shadowMap",V.map.depthTexture.format=Ds,this.type===_u?(V.map.depthTexture.compareFunction=Q?zS:BS,V.map.depthTexture.minFilter=oi,V.map.depthTexture.magFilter=oi):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=jn,V.map.depthTexture.magFilter=jn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==c.x||V.map.height!==c.y)&&V.map.setSize(c.x,c.y);const pe=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Z.isPointLight!==!0&&V.updateMatrices(Z,C);const ye=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:C.layers;for(let je=0;je<pe;je++){const et=V.getCamera(je);if(Z.isPointLight){const O=V.camera,ie=V.matrix,J=Z.distance||O.far;J!==O.far&&(O.far=J,O.updateProjectionMatrix()),xl.setFromMatrixPosition(Z.matrixWorld),O.position.copy(xl),Qh.copy(O.position),Qh.add(G3[je]),O.up.copy(V3[je]),O.lookAt(Qh),O.updateMatrixWorld(),ie.makeTranslation(-xl.x,-xl.y,-xl.z),x_.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),V._frustum.setFromProjectionMatrix(x_,O.coordinateSystem,O.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)o.setRenderTarget(V.map,je),o.clear();else{je===0&&(o.setRenderTarget(V.map),o.clear());const O=V.getViewport(je);d.set(f.x*O.x,f.y*O.y,f.x*O.z,f.y*O.w),W.viewport(d)}r=V.getFrustum(je),L(b,C,et,Z,ye,this.type)}V.isPointLightShadow!==!0&&this.type===vl&&D(V,C),V.needsUpdate=!1}E=this.type,M.needsUpdate=!1,o.setRenderTarget(j,G,F)};function D(P,b){const C=t.update(w);S.defines.VSM_SAMPLES!==P.blurSamples&&(S.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null?P.mapPass=new va(c.x,c.y,{format:dr,type:Sa}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),S.uniforms.shadow_pass.value=P.map.depthTexture,S.uniforms.resolution.value.set(P.map.width,P.map.height),S.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(b,null,C,S,w,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value.set(P.map.width,P.map.height),y.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(b,null,C,y,w,null)}function I(P,b,C,j){let G=null;const F=C.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)G=F;else if(G=C.isPointLight===!0?g:m,o.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const W=G.uuid,q=b.uuid;let z=p[W];z===void 0&&(z={},p[W]=z);let ee=z[q];ee===void 0&&(ee=G.clone(),z[q]=ee,b.addEventListener("dispose",B)),G=ee}if(G.visible=b.visible,G.wireframe=b.wireframe,j===vl?G.side=b.shadowSide!==null?b.shadowSide:b.side:G.side=b.shadowSide!==null?b.shadowSide:v[b.side],G.alphaMap=b.alphaMap,G.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,G.map=b.map,G.clipShadows=b.clipShadows,G.clippingPlanes=b.clippingPlanes,G.clipIntersection=b.clipIntersection,G.displacementMap=b.displacementMap,G.displacementScale=b.displacementScale,G.displacementBias=b.displacementBias,G.wireframeLinewidth=b.wireframeLinewidth,G.linewidth=b.linewidth,C.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const W=o.properties.get(G);W.light=C}return G}function L(P,b,C,j,G,F){if(P.visible===!1)return;if(P.layers.test(G)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&F===vl)&&(!P.frustumCulled||P.intersectsFrustum(r))){P.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,P.matrixWorld);const z=t.update(P),ee=P.material;if(Array.isArray(ee)){const Z=z.groups;for(let V=0,me=Z.length;V<me;V++){const Q=Z[V],pe=ee[Q.materialIndex];if(pe&&pe.visible){const ye=I(P,pe,j,F);P.onBeforeShadow(o,P,b,C,z,ye,Q),o.renderBufferDirect(C,null,z,ye,P,Q),P.onAfterShadow(o,P,b,C,z,ye,Q)}}}else if(ee.visible){const Z=I(P,ee,j,F);P.onBeforeShadow(o,P,b,C,z,Z,null),o.renderBufferDirect(C,null,z,Z,P,null),P.onAfterShadow(o,P,b,C,z,Z,null)}}const q=P.children;for(let z=0,ee=q.length;z<ee;z++)L(q[z],b,C,j,G,F)}function B(P){P.target.removeEventListener("dispose",B);for(const C in p){const j=p[C],G=P.target.uuid;G in j&&(j[G].dispose(),delete j[G])}}}function j3(o,t){function i(){let k=!1;const ve=new vn;let xe=null;const we=new vn(0,0,0,0);return{setMask:function(Ne){xe!==Ne&&!k&&(o.colorMask(Ne,Ne,Ne,Ne),xe=Ne)},setLocked:function(Ne){k=Ne},setClear:function(Ne,De,Ke,nt,Ae){Ae===!0&&(Ne*=nt,De*=nt,Ke*=nt),ve.set(Ne,De,Ke,nt),we.equals(ve)===!1&&(o.clearColor(Ne,De,Ke,nt),we.copy(ve))},reset:function(){k=!1,xe=null,we.set(-1,0,0,0)}}}function r(){let k=!1,ve=!1,xe=null,we=null,Ne=null;return{setReversed:function(De){if(ve!==De){const Ke=t.get("EXT_clip_control");De?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),ve=De;const nt=Ne;Ne=null,this.setClear(nt)}},getReversed:function(){return ve},setTest:function(De){De?he(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(De){xe!==De&&!k&&(o.depthMask(De),xe=De)},setFunc:function(De){if(ve&&(De=yy[De]),we!==De){switch(De){case em:o.depthFunc(o.NEVER);break;case tm:o.depthFunc(o.ALWAYS);break;case nm:o.depthFunc(o.LESS);break;case bl:o.depthFunc(o.LEQUAL);break;case im:o.depthFunc(o.EQUAL);break;case am:o.depthFunc(o.GEQUAL);break;case sm:o.depthFunc(o.GREATER);break;case rm:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}we=De}},setLocked:function(De){k=De},setClear:function(De){Ne!==De&&(Ne=De,ve&&(De=1-De),o.clearDepth(De))},reset:function(){k=!1,xe=null,we=null,Ne=null,ve=!1}}}function c(){let k=!1,ve=null,xe=null,we=null,Ne=null,De=null,Ke=null,nt=null,Ae=null;return{setTest:function(Ye){k||(Ye?he(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(Ye){ve!==Ye&&!k&&(o.stencilMask(Ye),ve=Ye)},setFunc:function(Ye,ht,Be){(xe!==Ye||we!==ht||Ne!==Be)&&(o.stencilFunc(Ye,ht,Be),xe=Ye,we=ht,Ne=Be)},setOp:function(Ye,ht,Be){(De!==Ye||Ke!==ht||nt!==Be)&&(o.stencilOp(Ye,ht,Be),De=Ye,Ke=ht,nt=Be)},setLocked:function(Ye){k=Ye},setClear:function(Ye){Ae!==Ye&&(o.clearStencil(Ye),Ae=Ye)},reset:function(){k=!1,ve=null,xe=null,we=null,Ne=null,De=null,Ke=null,nt=null,Ae=null}}}const f=new i,d=new r,m=new c;let g={};const p=new WeakMap;let _={},v={},S={},y=new WeakMap,A=[],w=null,M=!1,E=null,D=null,I=null,L=null,B=null,P=null,b=null,C=new Bt(0,0,0),j=0,G=!1,F=null,W=null,q=null,z=null,ee=null;const Z=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,me=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=me>=1):Q.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=me>=2);let pe=null,ye={};const je=o.getParameter(o.SCISSOR_BOX),et=o.getParameter(o.VIEWPORT),O=new vn().fromArray(je),ie=new vn().fromArray(et);function J(k,ve,xe,we){const Ne=new Uint8Array(4),De=o.createTexture();o.bindTexture(k,De),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ke=0;Ke<xe;Ke++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(ve,0,o.RGBA,1,1,we,0,o.RGBA,o.UNSIGNED_BYTE,Ne):o.texImage2D(ve+Ke,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ne);return De}const ce={};ce[o.TEXTURE_2D]=J(o.TEXTURE_2D,o.TEXTURE_2D,1),ce[o.TEXTURE_CUBE_MAP]=J(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[o.TEXTURE_2D_ARRAY]=J(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ce[o.TEXTURE_3D]=J(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),m.setClear(0),he(o.DEPTH_TEST),d.setFunc(bl),Nt(!1),rt(bv),he(o.CULL_FACE),Et(po);function he(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function Te(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function Xe(k,ve){return S[k]!==ve?(o.bindFramebuffer(k,ve),S[k]=ve,k===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=ve),k===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=ve),!0):!1}function Se(k,ve){let xe=A,we=!1;if(k){xe=y.get(ve),xe===void 0&&(xe=[],y.set(ve,xe));const Ne=k.textures;if(xe.length!==Ne.length||xe[0]!==o.COLOR_ATTACHMENT0){for(let De=0,Ke=Ne.length;De<Ke;De++)xe[De]=o.COLOR_ATTACHMENT0+De;xe.length=Ne.length,we=!0}}else xe[0]!==o.BACK&&(xe[0]=o.BACK,we=!0);we&&o.drawBuffers(xe)}function Ce(k){return w!==k?(o.useProgram(k),w=k,!0):!1}const st={[mo]:o.FUNC_ADD,[Wb]:o.FUNC_SUBTRACT,[qb]:o.FUNC_REVERSE_SUBTRACT};st[Yb]=o.MIN,st[Zb]=o.MAX;const $e={[Kb]:o.ZERO,[Qb]:o.ONE,[Jb]:o.SRC_COLOR,[SS]:o.SRC_ALPHA,[ay]:o.SRC_ALPHA_SATURATE,[ny]:o.DST_COLOR,[ey]:o.DST_ALPHA,[$b]:o.ONE_MINUS_SRC_COLOR,[ES]:o.ONE_MINUS_SRC_ALPHA,[iy]:o.ONE_MINUS_DST_COLOR,[ty]:o.ONE_MINUS_DST_ALPHA,[sy]:o.CONSTANT_COLOR,[ry]:o.ONE_MINUS_CONSTANT_COLOR,[oy]:o.CONSTANT_ALPHA,[ly]:o.ONE_MINUS_CONSTANT_ALPHA};function Et(k,ve,xe,we,Ne,De,Ke,nt,Ae,Ye){if(k===po){M===!0&&(Te(o.BLEND),M=!1);return}if(M===!1&&(he(o.BLEND),M=!0),k!==Xb){if(k!==E||Ye!==G){if((D!==mo||B!==mo)&&(o.blendEquation(o.FUNC_ADD),D=mo,B=mo),Ye)switch(k){case Sl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case El:o.blendFunc(o.ONE,o.ONE);break;case yv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Av:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:jt("WebGLState: Invalid blending: ",k);break}else switch(k){case Sl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case El:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case yv:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Av:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",k);break}I=null,L=null,P=null,b=null,C.set(0,0,0),j=0,E=k,G=Ye}return}Ne=Ne||ve,De=De||xe,Ke=Ke||we,(ve!==D||Ne!==B)&&(o.blendEquationSeparate(st[ve],st[Ne]),D=ve,B=Ne),(xe!==I||we!==L||De!==P||Ke!==b)&&(o.blendFuncSeparate($e[xe],$e[we],$e[De],$e[Ke]),I=xe,L=we,P=De,b=Ke),(nt.equals(C)===!1||Ae!==j)&&(o.blendColor(nt.r,nt.g,nt.b,Ae),C.copy(nt),j=Ae),E=k,G=!1}function yt(k,ve){k.side===Mi?Te(o.CULL_FACE):he(o.CULL_FACE);let xe=k.side===li;ve&&(xe=!xe),Nt(xe),k.blending===Sl&&k.transparent===!1?Et(po):Et(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),f.setMask(k.colorWrite);const we=k.stencilWrite;m.setTest(we),we&&(m.setMask(k.stencilWriteMask),m.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),m.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Jt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?he(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(k){F!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),F=k)}function rt(k){k!==Vb?(he(o.CULL_FACE),k!==W&&(k===bv?o.cullFace(o.BACK):k===kb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),W=k}function ln(k){k!==q&&(V&&o.lineWidth(k),q=k)}function Jt(k,ve,xe){k?(he(o.POLYGON_OFFSET_FILL),(z!==ve||ee!==xe)&&(z=ve,ee=xe,d.getReversed()&&(ve=-ve,xe=-xe),o.polygonOffset(ve,xe))):Te(o.POLYGON_OFFSET_FILL)}function cn(k){k?he(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function un(k){k===void 0&&(k=o.TEXTURE0+Z-1),pe!==k&&(o.activeTexture(k),pe=k)}function Tn(k,ve,xe){xe===void 0&&(pe===null?xe=o.TEXTURE0+Z-1:xe=pe);let we=ye[xe];we===void 0&&(we={type:void 0,texture:void 0},ye[xe]=we),(we.type!==k||we.texture!==ve)&&(pe!==xe&&(o.activeTexture(xe),pe=xe),o.bindTexture(k,ve||ce[k]),we.type=k,we.texture=ve)}function K(){const k=ye[pe];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Rn(){try{o.compressedTexImage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function It(){try{o.compressedTexImage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function Gt(){try{o.texSubImage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function ze(){try{o.texSubImage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function Ht(){try{o.compressedTexSubImage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function tt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function ot(){try{o.texStorage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function U(){try{o.texStorage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function T(){try{o.texImage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function oe(){try{o.texImage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function Re(k){return v[k]!==void 0?v[k]:o.getParameter(k)}function Ee(k,ve){v[k]!==ve&&(o.pixelStorei(k,ve),v[k]=ve)}function Ue(k){O.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),O.copy(k))}function Ie(k){ie.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),ie.copy(k))}function ge(k,ve){let xe=p.get(ve);xe===void 0&&(xe=new WeakMap,p.set(ve,xe));let we=xe.get(k);we===void 0&&(we=o.getUniformBlockIndex(ve,k.name),o.uniformBlockBinding(ve,we,we),xe.set(k,we))}function _e(k,ve,xe){const Ne=p.get(ve).get(k);g[Ne]!==xe&&(o.bindBufferBase(o.UNIFORM_BUFFER,Ne,xe),g[Ne]=xe)}function Fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),_={},v={},pe=null,ye={},S={},g={},y=new WeakMap,A=[],w=null,M=!1,E=null,D=null,I=null,L=null,B=null,P=null,b=null,C=new Bt(0,0,0),j=0,G=!1,F=null,W=null,q=null,z=null,ee=null,O.set(0,0,o.canvas.width,o.canvas.height),ie.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),m.reset()}return{buffers:{color:f,depth:d,stencil:m},enable:he,disable:Te,bindFramebuffer:Xe,drawBuffers:Se,useProgram:Ce,setBlending:Et,setMaterial:yt,setFlipSided:Nt,setCullFace:rt,setLineWidth:ln,setPolygonOffset:Jt,setScissorTest:cn,activeTexture:un,bindTexture:Tn,unbindTexture:K,compressedTexImage2D:Rn,compressedTexImage3D:It,texImage2D:T,texImage3D:oe,pixelStorei:Ee,getParameter:Re,updateUBOMapping:ge,uniformBlockBinding:_e,texStorage2D:ot,texStorage3D:U,texSubImage2D:Gt,texSubImage3D:ze,compressedTexSubImage2D:Ht,compressedTexSubImage3D:tt,scissor:Ue,viewport:Ie,reset:Fe}}function X3(o,t,i,r,c,f,d){const m=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new zt,_=new WeakMap,v=new Set;let S;const y=new WeakMap,A=new Set,w=new FinalizationRegistry(U=>A.delete(U));let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,T){return M?new OffscreenCanvas(U,T):Pu("canvas")}function D(U,T,oe){let Re=1;const Ee=ot(U);if((Ee.width>oe||Ee.height>oe)&&(Re=oe/Math.max(Ee.width,Ee.height)),Re<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ue=Math.floor(Re*Ee.width),Ie=Math.floor(Re*Ee.height);S===void 0&&(S=E(Ue,Ie));const ge=T?E(Ue,Ie):S;return ge.width=Ue,ge.height=Ie,ge.getContext("2d").drawImage(U,0,0,Ue,Ie),ft("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+Ue+"x"+Ie+")."),ge}else return"data"in U&&ft("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),U;return U}function I(U){return U.generateMipmaps}function L(U){o.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(U,T,oe,Re,Ee,Ue=!1){if(U!==null){if(o[U]!==void 0)return o[U];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ie;Re&&(Ie=t.get("EXT_texture_norm16"),Ie||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=T;if(T===o.RED&&(oe===o.FLOAT&&(ge=o.R32F),oe===o.HALF_FLOAT&&(ge=o.R16F),oe===o.UNSIGNED_BYTE&&(ge=o.R8),oe===o.UNSIGNED_SHORT&&Ie&&(ge=Ie.R16_EXT),oe===o.SHORT&&Ie&&(ge=Ie.R16_SNORM_EXT)),T===o.RED_INTEGER&&(oe===o.UNSIGNED_BYTE&&(ge=o.R8UI),oe===o.UNSIGNED_SHORT&&(ge=o.R16UI),oe===o.UNSIGNED_INT&&(ge=o.R32UI),oe===o.BYTE&&(ge=o.R8I),oe===o.SHORT&&(ge=o.R16I),oe===o.INT&&(ge=o.R32I)),T===o.RG&&(oe===o.FLOAT&&(ge=o.RG32F),oe===o.HALF_FLOAT&&(ge=o.RG16F),oe===o.UNSIGNED_BYTE&&(ge=o.RG8),oe===o.UNSIGNED_SHORT&&Ie&&(ge=Ie.RG16_EXT),oe===o.SHORT&&Ie&&(ge=Ie.RG16_SNORM_EXT)),T===o.RG_INTEGER&&(oe===o.UNSIGNED_BYTE&&(ge=o.RG8UI),oe===o.UNSIGNED_SHORT&&(ge=o.RG16UI),oe===o.UNSIGNED_INT&&(ge=o.RG32UI),oe===o.BYTE&&(ge=o.RG8I),oe===o.SHORT&&(ge=o.RG16I),oe===o.INT&&(ge=o.RG32I)),T===o.RGB_INTEGER&&(oe===o.UNSIGNED_BYTE&&(ge=o.RGB8UI),oe===o.UNSIGNED_SHORT&&(ge=o.RGB16UI),oe===o.UNSIGNED_INT&&(ge=o.RGB32UI),oe===o.BYTE&&(ge=o.RGB8I),oe===o.SHORT&&(ge=o.RGB16I),oe===o.INT&&(ge=o.RGB32I)),T===o.RGBA_INTEGER&&(oe===o.UNSIGNED_BYTE&&(ge=o.RGBA8UI),oe===o.UNSIGNED_SHORT&&(ge=o.RGBA16UI),oe===o.UNSIGNED_INT&&(ge=o.RGBA32UI),oe===o.BYTE&&(ge=o.RGBA8I),oe===o.SHORT&&(ge=o.RGBA16I),oe===o.INT&&(ge=o.RGBA32I)),T===o.RGB&&(oe===o.UNSIGNED_SHORT&&Ie&&(ge=Ie.RGB16_EXT),oe===o.SHORT&&Ie&&(ge=Ie.RGB16_SNORM_EXT),oe===o.UNSIGNED_INT_5_9_9_9_REV&&(ge=o.RGB9_E5),oe===o.UNSIGNED_INT_10F_11F_11F_REV&&(ge=o.R11F_G11F_B10F)),T===o.RGBA){const _e=Ue?Fu:Ot.getTransfer(Ee);oe===o.FLOAT&&(ge=o.RGBA32F),oe===o.HALF_FLOAT&&(ge=o.RGBA16F),oe===o.UNSIGNED_BYTE&&(ge=_e===Qt?o.SRGB8_ALPHA8:o.RGBA8),oe===o.UNSIGNED_SHORT&&Ie&&(ge=Ie.RGBA16_EXT),oe===o.SHORT&&Ie&&(ge=Ie.RGBA16_SNORM_EXT),oe===o.UNSIGNED_SHORT_4_4_4_4&&(ge=o.RGBA4),oe===o.UNSIGNED_SHORT_5_5_5_1&&(ge=o.RGB5_A1)}return(ge===o.R16F||ge===o.R32F||ge===o.RG16F||ge===o.RG32F||ge===o.RGBA16F||ge===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ge}function b(U,T){let oe;return U?T===null||T===_a||T===vo?oe=o.DEPTH24_STENCIL8:T===ga?oe=o.DEPTH32F_STENCIL8:T===Al&&(oe=o.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===_a||T===vo?oe=o.DEPTH_COMPONENT24:T===ga?oe=o.DEPTH_COMPONENT32F:T===Al&&(oe=o.DEPTH_COMPONENT16),oe}function C(U,T){return I(U)===!0||U.isFramebufferTexture&&U.minFilter!==jn&&U.minFilter!==oi?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function j(U){const T=new WeakRef(U);r.get(U).__ref=T,A.add(T),w.register(U,T,T)}function G(U){const T=r.get(U).__ref;T!==void 0&&(A.delete(T),w.unregister(T))}function F(U){q(U.target)}function W(U){z(U.target)}function q(U){U.removeEventListener("dispose",F),G(U),Z(U),U.isVideoTexture&&_.delete(U),U.isHTMLTexture&&v.delete(U)}function z(U){U.removeEventListener("dispose",W),G(U),me(U)}function ee(){for(const U of A){const T=U.deref();T!==void 0&&(T.isRenderTarget===!0?z(T):q(T))}A.clear(),v.clear()}function Z(U){const T=r.get(U);if(T.__webglInit===void 0)return;const oe=U.source,Re=y.get(oe);if(Re){const Ee=Re[T.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&V(U),Object.keys(Re).length===0&&y.delete(oe)}r.remove(U)}function V(U){const T=r.get(U);o.deleteTexture(T.__webglTexture);const oe=U.source,Re=y.get(oe);delete Re[T.__cacheKey],d.memory.textures--}function me(U){const T=r.get(U);T.__depthDisposeCallback&&T.__depthDisposeCallback();const oe=U.depthTexture;if(oe&&oe.renderTarget===U&&q(oe),U.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(T.__webglFramebuffer[Ee]))for(let Ue=0;Ue<T.__webglFramebuffer[Ee].length;Ue++)o.deleteFramebuffer(T.__webglFramebuffer[Ee][Ue]);else o.deleteFramebuffer(T.__webglFramebuffer[Ee]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[Ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let Ee=0;Ee<T.__webglFramebuffer.length;Ee++)o.deleteFramebuffer(T.__webglFramebuffer[Ee]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Ee=0;Ee<T.__webglColorRenderbuffer.length;Ee++)T.__webglColorRenderbuffer[Ee]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[Ee]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Re=U.textures;for(let Ee=0,Ue=Re.length;Ee<Ue;Ee++){const Ie=r.get(Re[Ee]);Ie.__webglTexture&&(o.deleteTexture(Ie.__webglTexture),d.memory.textures--),r.remove(Re[Ee])}r.remove(U)}let Q=0;function pe(){Q=0}function ye(){return Q}function je(U){Q=U}function et(){const U=Q;return U>=c.maxTextures&&ft("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+c.maxTextures),Q+=1,U}function O(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.mipmapsAutoUpdate),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function ie(U,T){const oe=r.get(U);if(U.isVideoTexture&&Ht(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&oe.__version!==U.version){const Re=U.image;if(Re===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(Re.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(oe,U,T);return}}else U.isExternalTexture&&(oe.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,oe.__webglTexture,o.TEXTURE0+T)}function J(U,T){const oe=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&oe.__version!==U.version){yt(oe,U,T);return}else U.isExternalTexture&&(oe.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,oe.__webglTexture,o.TEXTURE0+T)}function ce(U,T){const oe=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&oe.__version!==U.version){yt(oe,U,T);return}i.bindTexture(o.TEXTURE_3D,oe.__webglTexture,o.TEXTURE0+T)}function he(U,T){const oe=r.get(U);if(U.version>0&&oe.__version!==U.version){Nt(oe,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,oe.__webglTexture,o.TEXTURE0+T)}const Te={[om]:o.REPEAT,[ka]:o.CLAMP_TO_EDGE,[lm]:o.MIRRORED_REPEAT},Xe={[jn]:o.NEAREST,[fy]:o.NEAREST_MIPMAP_NEAREST,[Zc]:o.NEAREST_MIPMAP_LINEAR,[oi]:o.LINEAR,[Th]:o.LINEAR_MIPMAP_NEAREST,[Ns]:o.LINEAR_MIPMAP_LINEAR},Se={[py]:o.NEVER,[HS]:o.ALWAYS,[gy]:o.LESS,[BS]:o.LEQUAL,[xy]:o.EQUAL,[zS]:o.GEQUAL,[vy]:o.GREATER,[_y]:o.NOTEQUAL};function Ce(U,T){if(T.type===ga&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===oi||T.magFilter===Th||T.magFilter===Zc||T.magFilter===Ns||T.minFilter===oi||T.minFilter===Th||T.minFilter===Zc||T.minFilter===Ns)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,Te[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,Te[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,Te[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Xe[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Xe[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Se[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===jn||T.minFilter!==Zc&&T.minFilter!==Ns||T.type===ga&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const oe=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,c.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function st(U,T){let oe=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",F),j(T));const Re=T.source;let Ee=y.get(Re);Ee===void 0&&(Ee={},y.set(Re,Ee));const Ue=O(T);if(Ue!==U.__cacheKey){Ee[Ue]===void 0&&(Ee[Ue]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,oe=!0),Ee[Ue].usedTimes++;const Ie=Ee[U.__cacheKey];Ie!==void 0&&(Ee[U.__cacheKey].usedTimes--,Ie.usedTimes===0&&V(T)),U.__cacheKey=Ue,U.__webglTexture=Ee[Ue].texture}return oe}function $e(U,T,oe){return Math.floor(Math.floor(U/oe)/T)}function Et(U,T,oe,Re){const Ue=U.updateRanges;if(Ue.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,oe,Re,T.data);else{Ue.sort((k,ve)=>k.start-ve.start);let Ie=0;for(let k=1;k<Ue.length;k++){const ve=Ue[Ie],xe=Ue[k],we=ve.start+ve.count,Ne=$e(xe.start,T.width,4),De=$e(ve.start,T.width,4);xe.start<=we+1&&Ne===De&&$e(xe.start+xe.count-1,T.width,4)===Ne?ve.count=Math.max(ve.count,xe.start+xe.count-ve.start):(++Ie,Ue[Ie]=xe)}Ue.length=Ie+1;const ge=i.getParameter(o.UNPACK_ROW_LENGTH),_e=i.getParameter(o.UNPACK_SKIP_PIXELS),Fe=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let k=0,ve=Ue.length;k<ve;k++){const xe=Ue[k],we=Math.floor(xe.start/4),Ne=Math.ceil(xe.count/4),De=we%T.width,Ke=Math.floor(we/T.width),nt=Ne,Ae=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,De),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ke),i.texSubImage2D(o.TEXTURE_2D,0,De,Ke,nt,Ae,oe,Re,T.data)}U.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ge),i.pixelStorei(o.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(o.UNPACK_SKIP_ROWS,Fe)}}function yt(U,T,oe){let Re=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Re=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Re=o.TEXTURE_3D);const Ee=st(U,T),Ue=T.source;i.bindTexture(Re,U.__webglTexture,o.TEXTURE0+oe);const Ie=r.get(Ue);if(Ue.version!==Ie.__version||Ee===!0){if(i.activeTexture(o.TEXTURE0+oe),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Ae=Ot.getPrimaries(Ot.workingColorSpace),Ye=T.colorSpace===Rs?null:Ot.getPrimaries(T.colorSpace),ht=T.colorSpace===Rs||Ae===Ye?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht)}i.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment);let _e=D(T.image,!1,c.maxTextureSize);_e=tt(T,_e);const Fe=f.convert(T.format,T.colorSpace),k=f.convert(T.type);let ve=P(T.internalFormat,Fe,k,T.normalized,T.colorSpace,T.isVideoTexture);Ce(Re,T);let xe;const we=T.mipmaps,Ne=T.isVideoTexture!==!0,De=Ie.__version===void 0||Ee===!0,Ke=Ue.dataReady,nt=C(T,_e);if(T.isDepthTexture)ve=b(T.format===Cs,T.type),De&&(Ne?i.texStorage2D(o.TEXTURE_2D,1,ve,_e.width,_e.height):i.texImage2D(o.TEXTURE_2D,0,ve,_e.width,_e.height,0,Fe,k,null));else if(T.isDataTexture)if(we.length>0){Ne&&De&&i.texStorage2D(o.TEXTURE_2D,nt,ve,we[0].width,we[0].height);for(let Ae=0,Ye=we.length;Ae<Ye;Ae++)xe=we[Ae],Ne?Ke&&i.texSubImage2D(o.TEXTURE_2D,Ae,0,0,xe.width,xe.height,Fe,k,xe.data):i.texImage2D(o.TEXTURE_2D,Ae,ve,xe.width,xe.height,0,Fe,k,xe.data);T.generateMipmaps=!1}else Ne?(De&&i.texStorage2D(o.TEXTURE_2D,nt,ve,_e.width,_e.height),Ke&&Et(T,_e,Fe,k)):i.texImage2D(o.TEXTURE_2D,0,ve,_e.width,_e.height,0,Fe,k,_e.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ne&&De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,nt,ve,we[0].width,we[0].height,_e.depth);for(let Ae=0,Ye=we.length;Ae<Ye;Ae++)if(xe=we[Ae],T.format!==xa)if(Fe!==null)if(Ne){if(Ke)if(T.layerUpdates.size>0){const ht=Kv(xe.width,xe.height,T.format,T.type);for(const Be of T.layerUpdates){const Pt=xe.data.subarray(Be*ht/xe.data.BYTES_PER_ELEMENT,(Be+1)*ht/xe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ae,0,0,Be,xe.width,xe.height,1,Fe,Pt)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ae,0,0,0,xe.width,xe.height,_e.depth,Fe,xe.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ae,ve,xe.width,xe.height,_e.depth,0,xe.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?Ke&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ae,0,0,0,xe.width,xe.height,_e.depth,Fe,k,xe.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ae,ve,xe.width,xe.height,_e.depth,0,Fe,k,xe.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Ne&&De&&i.texStorage2D(o.TEXTURE_2D,nt,ve,we[0].width,we[0].height);for(let Ae=0,Ye=we.length;Ae<Ye;Ae++)xe=we[Ae],T.format!==xa?Fe!==null?Ne?Ke&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ae,0,0,xe.width,xe.height,Fe,xe.data):i.compressedTexImage2D(o.TEXTURE_2D,Ae,ve,xe.width,xe.height,0,xe.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?Ke&&i.texSubImage2D(o.TEXTURE_2D,Ae,0,0,xe.width,xe.height,Fe,k,xe.data):i.texImage2D(o.TEXTURE_2D,Ae,ve,xe.width,xe.height,0,Fe,k,xe.data)}else if(T.isDataArrayTexture)if(Ne){if(De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,nt,ve,_e.width,_e.height,_e.depth),Ke)if(T.layerUpdates.size>0){const Ae=Kv(_e.width,_e.height,T.format,T.type);for(const Ye of T.layerUpdates){const ht=_e.data.subarray(Ye*Ae/_e.data.BYTES_PER_ELEMENT,(Ye+1)*Ae/_e.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ye,_e.width,_e.height,1,Fe,k,ht)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Fe,k,_e.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ve,_e.width,_e.height,_e.depth,0,Fe,k,_e.data);else if(T.isData3DTexture)Ne?(De&&i.texStorage3D(o.TEXTURE_3D,nt,ve,_e.width,_e.height,_e.depth),Ke&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Fe,k,_e.data)):i.texImage3D(o.TEXTURE_3D,0,ve,_e.width,_e.height,_e.depth,0,Fe,k,_e.data);else if(T.isFramebufferTexture){if(De)if(Ne)i.texStorage2D(o.TEXTURE_2D,nt,ve,_e.width,_e.height);else{let Ae=_e.width,Ye=_e.height;for(let ht=0;ht<nt;ht++)i.texImage2D(o.TEXTURE_2D,ht,ve,Ae,Ye,0,Fe,k,null),Ae>>=1,Ye>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in o){const Ae=o.canvas;if(Ae.hasAttribute("layoutsubtree")||Ae.setAttribute("layoutsubtree","true"),_e.parentNode!==Ae){Ae.appendChild(_e),v.add(T),Ae.onpaint=Ye=>{const ht=Ye.changedElements;for(const Be of v)ht.includes(Be.image)&&(Be.needsUpdate=!0)},Ae.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,_e);else{const ht=o.RGBA,Be=o.RGBA,Pt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,ht,Be,Pt,_e)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(we.length>0){if(Ne&&De){const Ae=ot(we[0]);i.texStorage2D(o.TEXTURE_2D,nt,ve,Ae.width,Ae.height)}for(let Ae=0,Ye=we.length;Ae<Ye;Ae++)xe=we[Ae],Ne?Ke&&i.texSubImage2D(o.TEXTURE_2D,Ae,0,0,Fe,k,xe):i.texImage2D(o.TEXTURE_2D,Ae,ve,Fe,k,xe);T.generateMipmaps=!1}else if(Ne){if(De){const Ae=ot(_e);i.texStorage2D(o.TEXTURE_2D,nt,ve,Ae.width,Ae.height)}Ke&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Fe,k,_e)}else i.texImage2D(o.TEXTURE_2D,0,ve,Fe,k,_e);I(T)&&T.mipmapsAutoUpdate===!0&&L(Re),Ie.__version=Ue.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Nt(U,T,oe){if(T.image.length!==6)return;const Re=st(U,T),Ee=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+oe);const Ue=r.get(Ee);if(Ee.version!==Ue.__version||Re===!0){i.activeTexture(o.TEXTURE0+oe);const Ie=Ot.getPrimaries(Ot.workingColorSpace),ge=T.colorSpace===Rs?null:Ot.getPrimaries(T.colorSpace),_e=T.colorSpace===Rs||Ie===ge?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Fe=T.isCompressedTexture||T.image[0].isCompressedTexture,k=T.image[0]&&T.image[0].isDataTexture,ve=[];for(let Be=0;Be<6;Be++)!Fe&&!k?ve[Be]=D(T.image[Be],!0,c.maxCubemapSize):ve[Be]=k?T.image[Be].image:T.image[Be],ve[Be]=tt(T,ve[Be]);const xe=ve[0],we=f.convert(T.format,T.colorSpace),Ne=f.convert(T.type);let De=P(T.internalFormat,we,Ne,T.normalized,T.colorSpace);const Ke=T.isVideoTexture!==!0,nt=Ue.__version===void 0||Re===!0,Ae=Ee.dataReady;let Ye=C(T,xe);Ce(o.TEXTURE_CUBE_MAP,T);let ht;if(T.isDepthTexture){if(De=b(T.format===Cs,T.type),nt)if(Ke)i.texStorage2D(o.TEXTURE_CUBE_MAP,1,De,xe.width,xe.height);else for(let Be=0;Be<6;Be++)i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,De,xe.width,xe.height,0,we,Ne,null)}else if(Fe){Ke&&nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ye,De,xe.width,xe.height);for(let Be=0;Be<6;Be++){ht=ve[Be].mipmaps;for(let Pt=0;Pt<ht.length;Pt++){const sn=ht[Pt];T.format!==xa?we!==null?Ke?Ae&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Pt,0,0,sn.width,sn.height,we,sn.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Pt,De,sn.width,sn.height,0,sn.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Pt,0,0,sn.width,sn.height,we,Ne,sn.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Pt,De,sn.width,sn.height,0,we,Ne,sn.data)}}}else{if(ht=T.mipmaps,Ke&&nt){ht.length>0&&Ye++;const Be=ot(ve[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ye,De,Be.width,Be.height)}for(let Be=0;Be<6;Be++)if(k){Ke?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,0,0,ve[Be].width,ve[Be].height,we,Ne,ve[Be].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,De,ve[Be].width,ve[Be].height,0,we,Ne,ve[Be].data);for(let Pt=0;Pt<ht.length;Pt++){const Yn=ht[Pt].image[Be].image;Ke?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Pt+1,0,0,Yn.width,Yn.height,we,Ne,Yn.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Pt+1,De,Yn.width,Yn.height,0,we,Ne,Yn.data)}}else{Ke?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,0,0,we,Ne,ve[Be]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,De,we,Ne,ve[Be]);for(let Pt=0;Pt<ht.length;Pt++){const sn=ht[Pt];Ke?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Pt+1,0,0,we,Ne,sn.image[Be]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Pt+1,De,we,Ne,sn.image[Be])}}}I(T)&&T.mipmapsAutoUpdate===!0&&L(o.TEXTURE_CUBE_MAP),Ue.__version=Ee.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function rt(U,T,oe,Re,Ee,Ue){const Ie=f.convert(oe.format,oe.colorSpace),ge=f.convert(oe.type),_e=P(oe.internalFormat,Ie,ge,oe.normalized,oe.colorSpace),Fe=r.get(T),k=r.get(oe);if(k.__renderTarget=T,!Fe.__hasExternalTextures){const ve=Math.max(1,T.width>>Ue),xe=Math.max(1,T.height>>Ue);Ee===o.TEXTURE_3D||Ee===o.TEXTURE_2D_ARRAY?i.texImage3D(Ee,Ue,_e,ve,xe,T.depth,0,Ie,ge,null):i.texImage2D(Ee,Ue,_e,ve,xe,0,Ie,ge,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),ze(T)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Re,Ee,k.__webglTexture,0,Gt(T)):(Ee===o.TEXTURE_2D||Ee>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Re,Ee,k.__webglTexture,Ue),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ln(U,T,oe){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const Re=T.depthTexture,Ee=Re&&Re.isDepthTexture?Re.type:null,Ue=b(T.stencilBuffer,Ee),Ie=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;ze(T)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Gt(T),Ue,T.width,T.height):oe?o.renderbufferStorageMultisample(o.RENDERBUFFER,Gt(T),Ue,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ue,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ie,o.RENDERBUFFER,U)}else{const Re=T.textures;for(let Ee=0;Ee<Re.length;Ee++){const Ue=Re[Ee],Ie=f.convert(Ue.format,Ue.colorSpace),ge=f.convert(Ue.type),_e=P(Ue.internalFormat,Ie,ge,Ue.normalized,Ue.colorSpace);ze(T)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Gt(T),_e,T.width,T.height):oe?o.renderbufferStorageMultisample(o.RENDERBUFFER,Gt(T),_e,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,_e,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Jt(U,T,oe){const Re=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Ee=r.get(T.depthTexture);Ee.__renderTarget=T;const Ue=Re?T.depthTexture.image[0]:T.depthTexture.image;(!Ee.__webglTexture||Ue.width!==T.width||Ue.height!==T.height)&&(Ue.width=T.width,Ue.height=T.height,T.depthTexture.needsUpdate=!0),Re?he(T.depthTexture,0):ie(T.depthTexture,0);const Ie=Ee.__webglTexture,ge=Gt(T),_e=Re?o.TEXTURE_CUBE_MAP_POSITIVE_X+oe:o.TEXTURE_2D,Fe=T.depthTexture.format===Cs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ds)ze(T)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Fe,_e,Ie,0,ge):o.framebufferTexture2D(o.FRAMEBUFFER,Fe,_e,Ie,0);else if(T.depthTexture.format===Cs)ze(T)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Fe,_e,Ie,0,ge):o.framebufferTexture2D(o.FRAMEBUFFER,Fe,_e,Ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function cn(U){const T=r.get(U),oe=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const Re=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Re){const Ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Re.removeEventListener("dispose",Ee)};Re.addEventListener("dispose",Ee),T.__depthDisposeCallback=Ee}T.__boundDepthTexture=Re}if(U.depthTexture&&!T.__autoAllocateDepthBuffer)if(oe)for(let Re=0;Re<6;Re++)Jt(T.__webglFramebuffer[Re],U,Re);else U.texture.mipmaps.length>0?Jt(T.__webglFramebuffer[0],U,0):Jt(T.__webglFramebuffer,U,0);else if(oe){T.__webglDepthbuffer=[];for(let Re=0;Re<6;Re++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[Re]),T.__webglDepthbuffer[Re]===void 0)T.__webglDepthbuffer[Re]=o.createRenderbuffer(),ln(T.__webglDepthbuffer[Re],U,!1);else{const Ee=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ue=T.__webglDepthbuffer[Re];o.bindRenderbuffer(o.RENDERBUFFER,Ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,Ue)}}else if(U.texture.mipmaps.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),ln(T.__webglDepthbuffer,U,!1);else{const Ee=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ue=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,Ue)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function un(U,T,oe){const Re=r.get(U);T!==void 0&&rt(Re.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),oe!==void 0&&cn(U)}function Tn(U){const T=U.texture,oe=r.get(U),Re=r.get(T);U.addEventListener("dispose",W),j(U);const Ee=U.textures,Ue=U.isWebGLCubeRenderTarget===!0,Ie=Ee.length>1;if(Ie||(Re.__webglTexture===void 0&&(Re.__webglTexture=o.createTexture()),Re.__version=T.version,d.memory.textures++),Ue){oe.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(T.mipmaps.length>0){oe.__webglFramebuffer[ge]=[];for(let _e=0;_e<T.mipmaps.length;_e++)oe.__webglFramebuffer[ge][_e]=o.createFramebuffer()}else oe.__webglFramebuffer[ge]=o.createFramebuffer()}else{if(T.mipmaps.length>0){oe.__webglFramebuffer=[];for(let ge=0;ge<T.mipmaps.length;ge++)oe.__webglFramebuffer[ge]=o.createFramebuffer()}else oe.__webglFramebuffer=o.createFramebuffer();if(Ie)for(let ge=0,_e=Ee.length;ge<_e;ge++){const Fe=r.get(Ee[ge]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&ze(U)===!1){oe.__webglMultisampledFramebuffer=o.createFramebuffer(),oe.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let ge=0;ge<Ee.length;ge++){const _e=Ee[ge];oe.__webglColorRenderbuffer[ge]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,oe.__webglColorRenderbuffer[ge]);const Fe=f.convert(_e.format,_e.colorSpace),k=f.convert(_e.type),ve=P(_e.internalFormat,Fe,k,_e.normalized,_e.colorSpace,U.isXRRenderTarget===!0),xe=Gt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,xe,ve,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ge,o.RENDERBUFFER,oe.__webglColorRenderbuffer[ge])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(oe.__webglDepthRenderbuffer=o.createRenderbuffer(),ln(oe.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ue){i.bindTexture(o.TEXTURE_CUBE_MAP,Re.__webglTexture),Ce(o.TEXTURE_CUBE_MAP,T);for(let ge=0;ge<6;ge++)if(T.mipmaps.length>0)for(let _e=0;_e<T.mipmaps.length;_e++)rt(oe.__webglFramebuffer[ge][_e],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,_e);else rt(oe.__webglFramebuffer[ge],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);I(T)?L(o.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),i.unbindTexture()}else if(Ie){for(let ge=0,_e=Ee.length;ge<_e;ge++){const Fe=Ee[ge],k=r.get(Fe);let ve=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ve=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ve,k.__webglTexture),Ce(ve,Fe),rt(oe.__webglFramebuffer,U,Fe,o.COLOR_ATTACHMENT0+ge,ve,0),I(Fe)&&L(ve)}i.unbindTexture()}else{let ge=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ge=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ge,Re.__webglTexture),Ce(ge,T),T.mipmaps.length>0)for(let _e=0;_e<T.mipmaps.length;_e++)rt(oe.__webglFramebuffer[_e],U,T,o.COLOR_ATTACHMENT0,ge,_e);else rt(oe.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,ge,0);I(T)?L(ge):T.mipmaps.length>0&&o.texParameteri(ge,o.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),i.unbindTexture()}U.depthBuffer&&cn(U)}function K(U){const T=U.textures;for(let oe=0,Re=T.length;oe<Re;oe++){const Ee=T[oe];if(I(Ee)&&Ee.mipmapsAutoUpdate===!0){const Ue=B(U),Ie=r.get(Ee).__webglTexture;i.bindTexture(Ue,Ie),L(Ue),i.unbindTexture()}}}const Rn=[];function It(U){if(U.samples>0){if(ze(U)===!1){const T=U.textures,oe=U.width,Re=U.height;let Ee=o.COLOR_BUFFER_BIT;const Ue=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ie=r.get(U),ge=T.length>1;if(ge)for(let Fe=0;Fe<T.length;Fe++)i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),U.texture.mipmaps.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Fe=0;Fe<T.length;Fe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Ee|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Ee|=o.STENCIL_BUFFER_BIT)),ge){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[Fe]);const k=r.get(T[Fe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,k,0)}o.blitFramebuffer(0,0,oe,Re,0,0,oe,Re,Ee,o.NEAREST),g===!0&&(Rn.length=0,Rn.push(o.COLOR_ATTACHMENT0+Fe),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&Rn.push(Ue),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Rn))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ge)for(let Fe=0;Fe<T.length;Fe++){i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[Fe]);const k=r.get(T[Fe]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,k,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&g){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Gt(U){return Math.min(c.maxSamples,U.samples)}function ze(U){const T=r.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ht(U){const T=d.render.frame;_.get(U)!==T&&(_.set(U,T),U.update())}function tt(U,T){const oe=U.colorSpace,Re=U.format,Ee=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||oe!==Uu&&oe!==Rs&&(Ot.getTransfer(oe)===Qt?(Re!==xa||Ee!==Pi)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",oe)),T}function ot(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=et,this.resetTextureUnits=pe,this.getTextureUnits=ye,this.setTextureUnits=je,this.setTexture2D=ie,this.setTexture2DArray=J,this.setTexture3D=ce,this.setTextureCube=he,this.rebindTextures=un,this.setupRenderTarget=Tn,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=cn,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=ze,this.dispose=ee}function W3(o,t){function i(r,c=Rs){let f;const d=Ot.getTransfer(c);if(r===Pi)return o.UNSIGNED_BYTE;if(r===qm)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Ym)return o.UNSIGNED_SHORT_5_5_5_1;if(r===LS)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===US)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===DS)return o.BYTE;if(r===OS)return o.SHORT;if(r===Al)return o.UNSIGNED_SHORT;if(r===Wm)return o.INT;if(r===_a)return o.UNSIGNED_INT;if(r===ga)return o.FLOAT;if(r===Sa)return o.HALF_FLOAT;if(r===FS)return o.ALPHA;if(r===IS)return o.RGB;if(r===xa)return o.RGBA;if(r===Ds)return o.DEPTH_COMPONENT;if(r===Cs)return o.DEPTH_STENCIL;if(r===PS)return o.RED;if(r===Zm)return o.RED_INTEGER;if(r===dr)return o.RG;if(r===Km)return o.RG_INTEGER;if(r===Qm)return o.RGBA_INTEGER;if(r===Su||r===Eu||r===Mu||r===bu)if(d===Qt)if(f=t.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===Su)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Eu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=t.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===Su)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Eu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cm||r===um||r===fm||r===dm)if(f=t.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===cm)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===um)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fm)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===dm)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hm||r===mm||r===pm||r===gm||r===xm||r===Ou||r===vm)if(f=t.get("WEBGL_compressed_texture_etc"),f!==null){if(r===hm||r===mm)return d===Qt?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===pm)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(r===gm)return f.COMPRESSED_R11_EAC;if(r===xm)return f.COMPRESSED_SIGNED_R11_EAC;if(r===Ou)return f.COMPRESSED_RG11_EAC;if(r===vm)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===_m||r===Sm||r===Em||r===Mm||r===bm||r===ym||r===Am||r===Tm||r===Rm||r===Nm||r===Cm||r===wm||r===Dm||r===Om)if(f=t.get("WEBGL_compressed_texture_astc"),f!==null){if(r===_m)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sm)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Em)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mm)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bm)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ym)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Am)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Tm)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rm)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nm)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Cm)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wm)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dm)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Om)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lm||r===Um||r===Fm)if(f=t.get("EXT_texture_compression_bptc"),f!==null){if(r===Lm)return d===Qt?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Um)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fm)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Im||r===Pm||r===Lu||r===Bm)if(f=t.get("EXT_texture_compression_rgtc"),f!==null){if(r===Im)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Pm)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Lu)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bm)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===vo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const q3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Z3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new QS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Os({vertexShader:q3,fragmentShader:Y3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Rt(new ku(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K3 extends pr{constructor(t,i){super();const r=this;let c=null,f=1,d=null,m="local-floor",g=1,p=null,_=null,v=null,S=null,y=null,A=null;const w=typeof XRWebGLBinding<"u",M=new Z3,E={},D=i.getContextAttributes();let I=null,L=null;const B=[],P=[],b=new zt;let C=null,j=null;const G=new Ki;G.viewport=new vn;const F=new Ki;F.viewport=new vn;const W=[G,F],q=new oA;let z=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let ie=B[O];return ie===void 0&&(ie=new Fh,B[O]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(O){let ie=B[O];return ie===void 0&&(ie=new Fh,B[O]=ie),ie.getGripSpace()},this.getHand=function(O){let ie=B[O];return ie===void 0&&(ie=new Fh,B[O]=ie),ie.getHandSpace()};function Z(O){const ie=P.indexOf(O.inputSource);if(ie===-1)return;const J=B[ie];J!==void 0&&(J.update(O.inputSource,O.frame,p||d),J.dispatchEvent({type:O.type,data:O.inputSource}))}function V(){c.removeEventListener("select",Z),c.removeEventListener("selectstart",Z),c.removeEventListener("selectend",Z),c.removeEventListener("squeeze",Z),c.removeEventListener("squeezestart",Z),c.removeEventListener("squeezeend",Z),c.removeEventListener("end",V),c.removeEventListener("inputsourceschange",me);for(let O=0;O<B.length;O++){const ie=P[O];ie!==null&&(P[O]=null,B[O].disconnect(ie))}z=null,ee=null,M.reset();for(const O in E)delete E[O];if(t.setRenderTarget(I),y=null,S=null,v=null,c=null,L=null,et.stop(),r.isPresenting=!1,t.setPixelRatio(C),t.setSize(b.width,b.height,!1),j!==null){const O=j.camera;O.fov=j.fov,O.zoom=j.zoom,O.updateProjectionMatrix(),j=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){f=O,r.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){m=O,r.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(O){p=O},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(c,i)),v},this.getFrame=function(){return A},this.getSession=function(){return c},this.setSession=async function(O){if(c=O,c!==null){if(I=t.getRenderTarget(),c.addEventListener("select",Z),c.addEventListener("selectstart",Z),c.addEventListener("selectend",Z),c.addEventListener("squeeze",Z),c.addEventListener("squeezestart",Z),c.addEventListener("squeezeend",Z),c.addEventListener("end",V),c.addEventListener("inputsourceschange",me),D.xrCompatible!==!0&&await i.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(b),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,ce=null,he=null;D.depth&&(he=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,J=D.stencil?Cs:Ds,ce=D.stencil?vo:_a);const Te={colorFormat:i.RGBA8,depthFormat:he,scaleFactor:f};v=this.getBinding(),S=v.createProjectionLayer(Te),c.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),L=new va(S.textureWidth,S.textureHeight,{format:xa,type:Pi,depthTexture:new _o(S.textureWidth,S.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}else{const J={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:f};y=new XRWebGLLayer(c,i,J),c.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new va(y.framebufferWidth,y.framebufferHeight,{format:xa,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(g),p=null,d=await c.requestReferenceSpace(m),et.setContext(c),et.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function me(O){for(let ie=0;ie<O.removed.length;ie++){const J=O.removed[ie],ce=P.indexOf(J);ce>=0&&(P[ce]=null,B[ce].disconnect(J))}for(let ie=0;ie<O.added.length;ie++){const J=O.added[ie];let ce=P.indexOf(J);if(ce===-1){for(let Te=0;Te<B.length;Te++)if(Te>=P.length){P.push(J),ce=Te;break}else if(P[Te]===null){P[Te]=J,ce=Te;break}if(ce===-1)break}const he=B[ce];he&&he.connect(J)}}function Q(O,ie){ie===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(ie.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(c===null)return;let ie=O.near,J=O.far;M.texture!==null&&(M.depthNear>0&&(ie=M.depthNear),M.depthFar>0&&(J=M.depthFar)),q.near=F.near=G.near=ie,q.far=F.far=G.far=J,(z!==q.near||ee!==q.far)&&(c.updateRenderState({depthNear:q.near,depthFar:q.far}),z=q.near,ee=q.far),q.layers.mask=O.layers.mask|6,G.layers.mask=q.layers.mask&-5,F.layers.mask=q.layers.mask&-3;const ce=O.parent,he=q.cameras;Q(q,ce);for(let Te=0;Te<he.length;Te++)Q(he[Te],ce);q.projectionMatrix.copy(G.projectionMatrix),q.projectionMatrixInverse.copy(G.projectionMatrixInverse),j===null&&O.isPerspectiveCamera&&(j={camera:O,fov:O.fov,zoom:O.zoom}),pe(O,q,ce)};function pe(O,ie,J){J===null?O.matrix.copy(ie.matrixWorld):(O.matrix.copy(J.matrixWorld),O.matrix.invert(),O.matrix.multiply(ie.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(ie.projectionMatrix),O.projectionMatrixInverse.copy(ie.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=zm*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(S===null&&y===null))return g},this.setFoveation=function(O){g=O,S!==null&&(S.fixedFoveation=O),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=O)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(O){return E[O]};let ye=null;function je(O,ie){if(_=ie.getViewerPose(p||d),A=ie,_!==null){const J=_.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let ce=!1;J.length!==q.cameras.length&&(q.cameras.length=0,ce=!0);for(let Se=0;Se<J.length;Se++){const Ce=J[Se];let st=null;if(y!==null)st=y.getViewport(Ce);else{const Et=v.getViewSubImage(S,Ce);st=Et.viewport,Se===0&&(t.setRenderTargetTextures(L,Et.colorTexture,Et.depthStencilTexture),t.setRenderTarget(L))}let $e=W[Se];$e===void 0&&($e=new Ki,$e.layers.enable(Se),$e.viewport=new vn,W[Se]=$e),$e.matrix.fromArray(Ce.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Ce.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(st.x,st.y,st.width,st.height),Se===0&&(q.matrix.copy($e.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),ce===!0&&q.cameras.push($e)}const he=c.enabledFeatures;if(he&&he.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&w){v=r.getBinding();const Se=v.getDepthInformation(J[0]);Se&&Se.isValid&&Se.texture&&M.init(Se,c.renderState)}if(he&&he.includes("camera-access")&&w){t.state.unbindTexture(),v=r.getBinding();for(let Se=0;Se<J.length;Se++){const Ce=J[Se].camera;if(Ce){let st=E[Ce];st||(st=new QS,E[Ce]=st);const $e=v.getCameraImage(Ce);st.sourceTexture=$e}}}}for(let J=0;J<B.length;J++){const ce=P[J],he=B[J];ce!==null&&he!==void 0&&he.update(ce,ie,p||d)}ye&&ye(O,ie),ie.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ie}),A=null}const et=new eE;et.setAnimationLoop(je),this.setAnimationLoop=function(O){ye=O},this.dispose=function(){}}}const Q3=new _n,uE=new mt;uE.set(-1,0,0,0,1,0,0,0,1);function J3(o,t){function i(M,E){M.matrixAutoUpdate===!0&&M.updateMatrix(),E.value.copy(M.matrix)}function r(M,E){E.color.getRGB(M.fogColor.value,JS(o)),E.isFog?(M.fogNear.value=E.near,M.fogFar.value=E.far):E.isFogExp2&&(M.fogDensity.value=E.density)}function c(M,E,D,I,L){E.isNodeMaterial?E.uniformsNeedUpdate=!1:E.isMeshBasicMaterial?f(M,E):E.isMeshLambertMaterial?(f(M,E),E.envMap&&(M.envMapIntensity.value=E.envMapIntensity)):E.isMeshToonMaterial?(f(M,E),v(M,E)):E.isMeshPhongMaterial?(f(M,E),_(M,E),E.envMap&&(M.envMapIntensity.value=E.envMapIntensity)):E.isMeshStandardMaterial?(f(M,E),S(M,E),E.isMeshPhysicalMaterial&&y(M,E,L)):E.isMeshMatcapMaterial?(f(M,E),A(M,E)):E.isMeshDepthMaterial?f(M,E):E.isMeshDistanceMaterial?(f(M,E),w(M,E)):E.isMeshNormalMaterial?f(M,E):E.isLineBasicMaterial?(d(M,E),E.isLineDashedMaterial&&m(M,E)):E.isPointsMaterial?g(M,E,D,I):E.isSpriteMaterial?p(M,E):E.isShadowMaterial?(M.color.value.copy(E.color),M.opacity.value=E.opacity):E.isShaderMaterial&&(E.uniformsNeedUpdate=!1)}function f(M,E){M.opacity.value=E.opacity,E.color&&M.diffuse.value.copy(E.color),E.emissive&&M.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity),E.map&&(M.map.value=E.map,i(E.map,M.mapTransform)),E.alphaMap&&(M.alphaMap.value=E.alphaMap,i(E.alphaMap,M.alphaMapTransform)),E.bumpMap&&(M.bumpMap.value=E.bumpMap,i(E.bumpMap,M.bumpMapTransform),M.bumpScale.value=E.bumpScale,E.side===li&&(M.bumpScale.value*=-1)),E.normalMap&&(M.normalMap.value=E.normalMap,i(E.normalMap,M.normalMapTransform),M.normalScale.value.copy(E.normalScale),E.side===li&&M.normalScale.value.negate()),E.displacementMap&&(M.displacementMap.value=E.displacementMap,i(E.displacementMap,M.displacementMapTransform),M.displacementScale.value=E.displacementScale,M.displacementBias.value=E.displacementBias),E.emissiveMap&&(M.emissiveMap.value=E.emissiveMap,i(E.emissiveMap,M.emissiveMapTransform)),E.specularMap&&(M.specularMap.value=E.specularMap,i(E.specularMap,M.specularMapTransform)),E.alphaTest>0&&(M.alphaTest.value=E.alphaTest);const D=t.get(E),I=D.envMap,L=D.envMapRotation;I&&(M.envMap.value=I,M.envMapRotation.value.setFromMatrix4(Q3.makeRotationFromEuler(L)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(uE),M.reflectivity.value=E.reflectivity,M.ior.value=E.ior,M.refractionRatio.value=E.refractionRatio),E.lightMap&&(M.lightMap.value=E.lightMap,M.lightMapIntensity.value=E.lightMapIntensity,i(E.lightMap,M.lightMapTransform)),E.aoMap&&(M.aoMap.value=E.aoMap,M.aoMapIntensity.value=E.aoMapIntensity,i(E.aoMap,M.aoMapTransform))}function d(M,E){M.diffuse.value.copy(E.color),M.opacity.value=E.opacity,E.map&&(M.map.value=E.map,i(E.map,M.mapTransform))}function m(M,E){M.dashSize.value=E.dashSize,M.totalSize.value=E.dashSize+E.gapSize,M.scale.value=E.scale}function g(M,E,D,I){M.diffuse.value.copy(E.color),M.opacity.value=E.opacity,M.size.value=E.size*D,M.scale.value=I*.5,E.map&&(M.map.value=E.map,i(E.map,M.uvTransform)),E.alphaMap&&(M.alphaMap.value=E.alphaMap,i(E.alphaMap,M.alphaMapTransform)),E.alphaTest>0&&(M.alphaTest.value=E.alphaTest)}function p(M,E){M.diffuse.value.copy(E.color),M.opacity.value=E.opacity,M.rotation.value=E.rotation,E.map&&(M.map.value=E.map,i(E.map,M.mapTransform)),E.alphaMap&&(M.alphaMap.value=E.alphaMap,i(E.alphaMap,M.alphaMapTransform)),E.alphaTest>0&&(M.alphaTest.value=E.alphaTest)}function _(M,E){M.specular.value.copy(E.specular),M.shininess.value=Math.max(E.shininess,1e-4)}function v(M,E){E.gradientMap&&(M.gradientMap.value=E.gradientMap)}function S(M,E){M.metalness.value=E.metalness,E.metalnessMap&&(M.metalnessMap.value=E.metalnessMap,i(E.metalnessMap,M.metalnessMapTransform)),M.roughness.value=E.roughness,E.roughnessMap&&(M.roughnessMap.value=E.roughnessMap,i(E.roughnessMap,M.roughnessMapTransform)),E.envMap&&(M.envMapIntensity.value=E.envMapIntensity)}function y(M,E,D){M.ior.value=E.ior,E.diffuseRoughness>0&&(M.diffuseRoughness.value=E.diffuseRoughness,E.diffuseRoughnessMap&&(M.diffuseRoughnessMap.value=E.diffuseRoughnessMap,i(E.diffuseRoughnessMap,M.diffuseRoughnessMapTransform))),E.sheen>0&&(M.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),M.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap&&(M.sheenColorMap.value=E.sheenColorMap,i(E.sheenColorMap,M.sheenColorMapTransform)),E.sheenRoughnessMap&&(M.sheenRoughnessMap.value=E.sheenRoughnessMap,i(E.sheenRoughnessMap,M.sheenRoughnessMapTransform))),E.clearcoat>0&&(M.clearcoat.value=E.clearcoat,M.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap&&(M.clearcoatMap.value=E.clearcoatMap,i(E.clearcoatMap,M.clearcoatMapTransform)),E.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,i(E.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),E.clearcoatNormalMap&&(M.clearcoatNormalMap.value=E.clearcoatNormalMap,i(E.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===li&&M.clearcoatNormalScale.value.negate())),E.dispersion>0&&(M.dispersion.value=E.dispersion),E.retroreflectivity>0&&(M.retroreflectivity.value=E.retroreflectivity),E.iridescence>0&&(M.iridescence.value=E.iridescence,M.iridescenceIOR.value=E.iridescenceIOR,M.iridescenceThicknessMinimum.value=E.iridescenceThicknessMinimum,M.iridescenceThicknessMaximum.value=E.iridescenceThicknessMaximum,E.iridescenceMap&&(M.iridescenceMap.value=E.iridescenceMap,i(E.iridescenceMap,M.iridescenceMapTransform)),E.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=E.iridescenceThicknessMap,i(E.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),E.transmission>0&&(M.transmission.value=E.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),E.transmissionMap&&(M.transmissionMap.value=E.transmissionMap,i(E.transmissionMap,M.transmissionMapTransform)),M.thickness.value=E.thickness,E.thicknessMap&&(M.thicknessMap.value=E.thicknessMap,i(E.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=E.attenuationDistance,M.attenuationColor.value.copy(E.attenuationColor)),E.anisotropy>0&&(M.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap&&(M.anisotropyMap.value=E.anisotropyMap,i(E.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=E.specularIntensity,M.specularColor.value.copy(E.specularColor),E.specularColorMap&&(M.specularColorMap.value=E.specularColorMap,i(E.specularColorMap,M.specularColorMapTransform)),E.specularIntensityMap&&(M.specularIntensityMap.value=E.specularIntensityMap,i(E.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,E){E.matcap&&(M.matcap.value=E.matcap)}function w(M,E){const D=t.get(E).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:c}}function $3(o,t,i,r){let c={},f={};function d(D,I){const L=I.program;r.uniformBlockBinding(D,L,c[D.id])}function m(D,I){let L=c[D.id];L===void 0&&(A(D),L=g(D),c[D.id]=L,D.addEventListener("dispose",M));const B=I.program;r.updateUBOMapping(D,B);const P=t.render.frame;f[D.id]!==P&&(p(D),f[D.id]=P)}function g(D){const I=o.createBuffer(),L=D.__size,B=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,I),o.bufferData(o.UNIFORM_BUFFER,L,B),o.bindBuffer(o.UNIFORM_BUFFER,null),I}function p(D){const I=c[D.id],L=D.uniforms,B=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,I);for(let P=0,b=L.length;P<b;P++){const C=L[P];if(Array.isArray(C))for(let j=0,G=C.length;j<G;j++)_(C[j],P,j,B);else _(C,P,0,B)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function _(D,I,L,B){if(S(D,I,L,B)===!0){const P=D.__offset,b=D.value;if(Array.isArray(b)){let C=0;for(let j=0;j<b.length;j++){const G=b[j],F=w(G,!0);v(G,D.__data,C),C+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else v(b,D.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,P,D.__data)}}function v(D,I,L){typeof D=="number"||typeof D=="boolean"?I[L]=D:D.isMatrix3?(I[L]=D.elements[0],I[L+1]=D.elements[1],I[L+2]=D.elements[2],I[L+3]=0,I[L+4]=D.elements[3],I[L+5]=D.elements[4],I[L+6]=D.elements[5],I[L+7]=0,I[L+8]=D.elements[6],I[L+9]=D.elements[7],I[L+10]=D.elements[8],I[L+11]=0):ArrayBuffer.isView(D)?I.set(D.subarray(0,I.length-L),L):D.toArray(I,L)}function S(D,I,L,B){const P=D.value,b=I+"_"+L;if(Array.isArray(P)){B[b]===void 0&&(B[b]=[]);const C=B[b];let j=!1;for(let G=0;G<P.length;G++)y(P[G],C,G)===!0&&(j=!0);return j}return y(P,B,b)}function y(D,I,L){if(I[L]===void 0)return typeof D=="number"||typeof D=="boolean"?I[L]=D:ArrayBuffer.isView(D)?I[L]=D.slice():I[L]=D.clone(),!0;{const B=I[L];if(typeof D=="number"||typeof D=="boolean"){if(B!==D)return I[L]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(B.equals(D)===!1)return B.copy(D),!0}}return!1}function A(D){const I=D.uniforms;let L=0;const B=16;for(let b=0,C=I.length;b<C;b++){const j=Array.isArray(I[b])?I[b]:[I[b]];for(let G=0,F=j.length;G<F;G++){const W=j[G],q=Array.isArray(W.value)?W.value:[W.value],z=Array.isArray(I[b])||Array.isArray(W.value);let ee=L;for(let V=0,me=q.length;V<me;V++){const Q=q[V],pe=w(Q,z),ye=L%B,je=ye%pe.boundary,et=ye+je;L+=je,et!==0&&B-et<pe.storage&&(L+=B-et),V===0&&(ee=L),L+=pe.storage}const Z=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new Z((L-ee)/Float32Array.BYTES_PER_ELEMENT),W.__offset=ee}}const P=L%B;return P>0&&(L+=B-P),D.__size=L,D.__cache={},this}function w(D,I){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=16,L.storage=48):D.isMatrix4?(L.boundary=16,L.storage=64):D.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(L.boundary=16,L.storage=D.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",D),I===!0&&(L.boundary=16,L.storage=Math.ceil(L.storage/16)*16),L}function M(D){const I=D.target;I.removeEventListener("dispose",M),o.deleteBuffer(c[I.id]),delete c[I.id],delete f[I.id]}function E(){for(const D in c)o.deleteBuffer(c[D]);c={},f={}}return{bind:d,update:m,dispose:E}}const eN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ma=null;function tN(){return ma===null&&(ma=new Ky(eN,16,16,dr,Sa),ma.name="DFG_LUT",ma.minFilter=oi,ma.magFilter=oi,ma.wrapS=ka,ma.wrapT=ka,ma.generateMipmaps=!1,ma.needsUpdate=!0),ma}class nN{constructor(t={}){const{canvas:i=My(),context:r=null,depth:c=!0,stencil:f=!1,alpha:d=!1,antialias:m=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1,outputBufferType:y=Pi}=t;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=d;const w=y,M=new Set([Qm,Km,Zm]),E=new Set([Pi,_a,Al,vo,qm,Ym]),D=new Uint32Array(4),I=new Int32Array(4),L={textures:[],min:[],max:[],resolution:[]};let B=null,P=null;const b=[],C=[];let j=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let F=!1,W=null,q=null,z=null,ee=null;this._outputColorSpace=Ei;let Z=0,V=0,me=null,Q=-1,pe=null;const ye=new vn,je=new vn;let et=null;const O=new Bt(0);let ie=0,J=i.width,ce=i.height,he=1,Te=null,Xe=null;const Se=new vn(0,0,J,ce),Ce=new vn(0,0,J,ce);let st=!1;const $e=new Bu,Et=new ep;let yt=!1,Nt=!1;const rt=new _n,ln=new fe,Jt=new vn,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let un=!1;function Tn(){return me===null?he:1}let K=r;function Rn(N,X){return i.getContext(N,X)}let It,Gt,ze,Ht,tt,ot,U,T,oe,Re,Ee,Ue,Ie,ge,_e,Fe,k,ve,xe,we,Ne,De,Ke;try{const N={alpha:!0,depth:c,stencil:f,antialias:m,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Xm}`),i.addEventListener("webglcontextlost",Ye,!1),i.addEventListener("webglcontextrestored",ht,!1),i.addEventListener("webglcontextcreationerror",Be,!1),K===null){const X="webgl2";if(K=Rn(X,N),K===null)throw Rn(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(N){throw i.removeEventListener("webglcontextlost",Ye,!1),i.removeEventListener("webglcontextrestored",ht,!1),i.removeEventListener("webglcontextcreationerror",Be,!1),jt("WebGLRenderer: "+N.message),N}function nt(){It=new sR(K),It.init(),Ne=new W3(K,It),Gt=new Y2(K,It,t,Ne),ze=new j3(K,It),Gt.reversedDepthBuffer&&S&&ze.buffers.depth.setReversed(!0),q=K.createFramebuffer(),z=K.createFramebuffer(),ee=K.createFramebuffer(),Ht=new lR(K),tt=new w3,ot=new X3(K,It,ze,tt,Gt,Ne,Ht),U=new aR(G),T=new uA(K),De=new W2(K,T),oe=new rR(K,T,Ht,De),Re=new uR(K,oe,T,De,Ht),ve=new cR(K,Gt,ot),_e=new Z2(tt),Ee=new C3(G,U,It,Gt,De,_e),Ue=new J3(G,tt),Ie=new O3,ge=new B3(It),k=new X2(G,U,ze,Re,A,g),Fe=new k3(G,Re,Gt),Ke=new $3(K,Ht,Gt,ze),xe=new q2(K,It,Ht),we=new oR(K,It,Ht),Ht.programs=Ee.programs,G.capabilities=Gt,G.extensions=It,G.properties=tt,G.renderLists=Ie,G.shadowMap=Fe,G.state=ze,G.info=Ht}w!==Pi&&(j=new dR(w,i.width,i.height,m,c,f));const Ae=new K3(G,K);this.xr=Ae,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const N=It.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=It.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(N){N!==void 0&&(he=N,this.setSize(J,ce,!1))},this.getSize=function(N){return N.set(J,ce)},this.setSize=function(N,X,de=!0){if(Ae.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}J=N,ce=X,i.width=Math.floor(N*he),i.height=Math.floor(X*he),de===!0&&(i.style.width=N+"px",i.style.height=X+"px"),j!==null&&j.setSize(i.width,i.height),this.setViewport(0,0,N,X)},this.getDrawingBufferSize=function(N){return N.set(J*he,ce*he).floor()},this.setDrawingBufferSize=function(N,X,de){J=N,ce=X,he=de,i.width=Math.floor(N*de),i.height=Math.floor(X*de),this.setViewport(0,0,N,X)},this.setEffects=function(N){if(w===Pi){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let X=0;X<N.length;X++)if(N[X].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(ye)},this.getViewport=function(N){return N.copy(Se)},this.setViewport=function(N,X,de,ae){N.isVector4?Se.set(N.x,N.y,N.z,N.w):Se.set(N,X,de,ae),ze.viewport(ye.copy(Se).multiplyScalar(Tn()).round())},this.getScissor=function(N){return N.copy(Ce)},this.setScissor=function(N,X,de,ae){N.isVector4?Ce.set(N.x,N.y,N.z,N.w):Ce.set(N,X,de,ae),ze.scissor(je.copy(Ce).multiplyScalar(Tn()).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(N){ze.setScissorTest(st=N)},this.setOpaqueSort=function(N){Te=N},this.setTransparentSort=function(N){Xe=N},this.getClearColor=function(N){return N.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(N=!0,X=!0,de=!0){let ae=0;if(N){let se=!1;if(me!==null){const Oe=me.texture.format;se=M.has(Oe)}if(se){const Oe=me.texture.type,Ve=E.has(Oe),Le=k.getClearColor(),Pe=k.getClearAlpha(),We=Le.r,at=Le.g,ut=Le.b;Ve?(D[0]=We,D[1]=at,D[2]=ut,D[3]=Pe,K.clearBufferuiv(K.COLOR,0,D)):(I[0]=We,I[1]=at,I[2]=ut,I[3]=Pe,K.clearBufferiv(K.COLOR,0,I))}else ae|=K.COLOR_BUFFER_BIT}X&&(ae|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(ae|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&K.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),W=N},this.dispose=function(){i.removeEventListener("webglcontextlost",Ye,!1),i.removeEventListener("webglcontextrestored",ht,!1),i.removeEventListener("webglcontextcreationerror",Be,!1),k.dispose(),Ie.dispose(),ge.dispose(),ot.dispose(),tt.dispose(),U.dispose(),Re.dispose(),oe.dispose(),De.dispose(),Ke.dispose(),Ee.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",bi),Ae.removeEventListener("sessionend",Ls),yi.stop()};function Ye(N){N.preventDefault(),Cv("WebGLRenderer: Context Lost."),F=!0}function ht(){Cv("WebGLRenderer: Context Restored."),F=!1;const N=Ht.autoReset,X=Fe.enabled,de=Fe.autoUpdate,ae=Fe.needsUpdate,se=Fe.type;nt(),Ht.autoReset=N,Fe.enabled=X,Fe.autoUpdate=de,Fe.needsUpdate=ae,Fe.type=se}function Be(N){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Pt(N){const X=N.target;X.removeEventListener("dispose",Pt),sn(X)}function sn(N){Yn(N),tt.remove(N)}function Yn(N){const X=tt.get(N).programs;X!==void 0&&(X.forEach(function(de){Ee.releaseProgram(de)}),N.isShaderMaterial&&Ee.releaseShaderCache(N))}this.renderBufferDirect=function(N,X,de,ae,se,Oe){X===null&&(X=cn);const Ve=se.isMesh&&se.matrixWorld.determinantAffine()<0,Le=Is(N,X,de,ae,se);ze.setMaterial(ae,Ve);let Pe=de.index,We=1;if(ae.wireframe===!0){if(Pe=oe.getWireframeAttribute(de),Pe===void 0)return;We=2}const at=de.drawRange,ut=de.attributes.position;let He=at.start*We,Mt=(at.start+at.count)*We;Oe!==null&&(He=Math.max(He,Oe.start*We),Mt=Math.min(Mt,(Oe.start+Oe.count)*We)),Pe!==null?(He=Math.max(He,0),Mt=Math.min(Mt,Pe.count)):ut!=null&&(He=Math.max(He,0),Mt=Math.min(Mt,ut.count));const fn=Mt-He;if(fn<0||fn===1/0)return;De.setup(se,ae,Le,de,Pe);let qt,Dt=xe;if(Pe!==null&&(qt=T.get(Pe),Dt=we,Dt.setIndex(qt)),se.isMesh)ae.wireframe===!0?(ze.setLineWidth(ae.wireframeLinewidth*Tn()),Dt.setMode(K.LINES)):Dt.setMode(K.TRIANGLES);else if(se.isLine){let dn=ae.linewidth;dn===void 0&&(dn=1),ze.setLineWidth(dn*Tn()),se.isLineSegments?Dt.setMode(K.LINES):se.isLineLoop?Dt.setMode(K.LINE_LOOP):Dt.setMode(K.LINE_STRIP)}else se.isPoints?Dt.setMode(K.POINTS):se.isSprite&&Dt.setMode(K.TRIANGLES);if(se.isBatchedMesh)if(It.get("WEBGL_multi_draw"))Dt.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const dn=se._multiDrawStarts,Qe=se._multiDrawCounts,Dn=se._multiDrawCount,Ut=Pe?T.get(Pe).bytesPerElement:1,ya=tt.get(ae).currentProgram.getUniforms();for(let ct=0;ct<Dn;ct++)ya.setValue(K,"_gl_DrawID",ct),Dt.render(dn[ct]/Ut,Qe[ct])}else if(se.isInstancedMesh)Dt.renderInstances(He,fn,se.count);else if(de.isInstancedBufferGeometry){const dn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Qe=Math.min(de.instanceCount,dn);Dt.renderInstances(He,fn,Qe)}else Dt.render(He,fn)};function Ea(N,X,de,ae){W!==null&&N.isNodeMaterial&&W.setObject(ae,N),yt===!0&&_e.setState(N,de,!1),N.transparent===!0&&N.side===Mi&&N.forceSinglePass===!1?(N.side=li,N.needsUpdate=!0,ea(N,X,ae),N.side=fr,N.needsUpdate=!0,ea(N,X,ae),N.side=Mi):ea(N,X,ae)}this.compile=function(N,X,de=null){de===null&&(de=N),W!==null&&W.renderStart(N,X,de),P=ge.get(de),P.init(X),C.push(P),de.traverseVisible(function(se){se.isLight&&se.layers.test(X.layers)&&(P.pushLight(se),se.castShadow&&P.pushShadow(se))}),N!==de&&N.traverseVisible(function(se){se.isLight&&se.layers.test(X.layers)&&(P.pushLight(se),se.castShadow&&P.pushShadow(se))}),P.setupLights(),W!==null&&W.updateLights(P.state.lightsArray),Nt=this.localClippingEnabled,yt=_e.init(this.clippingPlanes,Nt),yt===!0&&_e.setGlobalState(this.clippingPlanes,X),W!==null&&Fe.render(P.state.shadowsArray,de,X);const ae=new Set;return N.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Oe=se.material;if(Oe)if(Array.isArray(Oe))for(let Ve=0;Ve<Oe.length;Ve++){const Le=Oe[Ve];Ea(Le,de,X,se),ae.add(Le)}else Ea(Oe,de,X,se),ae.add(Oe)}),P=C.pop(),W!==null&&W.renderEnd(),ae},this.compileAsync=function(N,X,de=null){const ae=this.compile(N,X,de);return new Promise(se=>{function Oe(){if(ae.forEach(function(Ve){const Pe=tt.get(Ve).currentProgram;(Pe===void 0||Pe.isReady())&&ae.delete(Ve)}),ae.size===0){se(N);return}setTimeout(Oe,10)}It.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let ui=null;function qa(N){ui&&ui(N)}function bi(){yi.stop()}function Ls(){yi.start()}const yi=new eE;yi.setAnimationLoop(qa),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(N){ui=N,Ae.setAnimationLoop(N),N===null?yi.stop():yi.start()},Ae.addEventListener("sessionstart",bi),Ae.addEventListener("sessionend",Ls),this.render=function(N,X){if(X!==void 0&&X.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;W!==null&&W.renderStart(N,X);const de=Ae.enabled===!0&&Ae.isPresenting===!0,ae=j!==null&&(me===null||de)&&j.begin(G,me);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(X),X=Ae.getCamera()),N.isScene===!0&&N.onBeforeRender(G,N,X,me),P=ge.get(N,C.length),P.init(X),P.state.textureUnits=ot.getTextureUnits(),C.push(P),rt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),X.isArrayCamera?Et.setFromArrayCamera(X):$e.setFromProjectionMatrix(rt,Ji,X.reversedDepth),Nt=this.localClippingEnabled,yt=_e.init(this.clippingPlanes,Nt),B=Ie.get(N,b.length),B.init(),b.push(B),this.info.render.frame++,Ae.enabled===!0&&Ae.isPresenting===!0){const Ve=G.xr.getDepthSensingMesh();Ve!==null&&Ya(Ve,X,-1/0,G.sortObjects)}Ya(N,X,0,G.sortObjects),B.finish(),W!==null&&W.updateLights(P.state.lightsArray),G.sortObjects===!0&&B.sort(Te,Xe),un=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,un&&k.addToRenderList(B,N),this.info.autoReset===!0&&this.info.reset(),yt===!0&&_e.beginShadows();const se=P.state.shadowsArray;if(Fe.render(se,N,X),yt===!0&&_e.endShadows(),(ae&&j.hasRenderPass())===!1){const Ve=B.opaque,Le=B.transmissive;if(P.setupLights(),X.isArrayCamera){const Pe=X.cameras;if(Le.length>0)for(let We=0,at=Pe.length;We<at;We++){const ut=Pe[We];zi(Ve,Le,N,ut)}un&&k.render(N);for(let We=0,at=Pe.length;We<at;We++){const ut=Pe[We];Ma(B,N,ut,ut.viewport)}}else Le.length>0&&zi(Ve,Le,N,X),un&&k.render(N),Ma(B,N,X)}me!==null&&V===0&&(ot.updateMultisampleRenderTarget(me),ot.updateRenderTargetMipmap(me)),ae&&j.end(G),N.isScene===!0&&N.onAfterRender(G,N,X),De.resetDefaultState(),Q=-1,pe=null,C.pop(),C.length>0?(P=C[C.length-1],ot.setTextureUnits(P.state.textureUnits),yt===!0&&_e.setGlobalState(G.clippingPlanes,P.state.camera)):P=null,b.pop(),b.length>0?B=b[b.length-1]:B=null,W!==null&&W.renderEnd()};function Ya(N,X,de,ae){if(N.visible===!1)return;if(N.layers.test(X.layers)){if(N.isGroup)de=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(X);else if(N.isLight)P.pushLight(N),N.castShadow&&P.pushShadow(N);else if(N.isSprite){const Ve=X.isArrayCamera?Et:$e;if(!N.frustumCulled||N.intersectsFrustum(Ve)){ae&&Jt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(rt);const Le=Re.update(N),Pe=N.material;Pe.visible&&B.push(N,Le,Pe,de,Jt.z,null,X)}}else if(N.isMesh||N.isLine||N.isPoints){const Ve=X.isArrayCamera?Et:$e;if(!N.frustumCulled||N.intersectsFrustum(Ve)){const Le=Re.update(N),Pe=N.material;if(ae&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Jt.copy(N.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Jt.copy(Le.boundingSphere.center)),Jt.applyMatrix4(N.matrixWorld).applyMatrix4(rt)),Array.isArray(Pe)){const We=Le.groups;for(let at=0,ut=We.length;at<ut;at++){const He=We[at],Mt=Pe[He.materialIndex];Mt&&Mt.visible&&B.push(N,Le,Mt,de,Jt.z,He,X)}}else Pe.visible&&B.push(N,Le,Pe,de,Jt.z,null,X)}}}const Oe=N.children;for(let Ve=0,Le=Oe.length;Ve<Le;Ve++)Ya(Oe[Ve],X,de,ae)}function Ma(N,X,de,ae){const{opaque:se,transmissive:Oe,transparent:Ve}=N;P.setupLightsView(de),yt===!0&&_e.setGlobalState(G.clippingPlanes,de),ae&&ze.viewport(ye.copy(ae)),se.length>0&&Xt(se,X,de),Oe.length>0&&Xt(Oe,X,de),Ve.length>0&&Xt(Ve,X,de),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function zi(N,X,de,ae){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ae.id]===void 0){const He=It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ae.id]=new va(1,1,{generateMipmaps:!0,type:He?Sa:Pi,minFilter:Ns,samples:Math.max(4,Gt.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}const Oe=P.state.transmissionRenderTarget[ae.id],Ve=ae.viewport||ye;Oe.setSize(Ve.z*G.transmissionResolutionScale,Ve.w*G.transmissionResolutionScale);const Le=G.getRenderTarget(),Pe=G.getActiveCubeFace(),We=G.getActiveMipmapLevel();G.setRenderTarget(Oe),G.getClearColor(O),ie=G.getClearAlpha(),ie<1&&G.setClearColor(16777215,.5),G.clear(),un&&k.render(de);const at=G.toneMapping;G.toneMapping=ja;const ut=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),P.setupLightsView(ae),yt===!0&&_e.setGlobalState(G.clippingPlanes,ae),Xt(N,de,ae),ot.updateMultisampleRenderTarget(Oe),ot.updateRenderTargetMipmap(Oe),It.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Mt=0,fn=X.length;Mt<fn;Mt++){const qt=X[Mt],{object:Dt,geometry:dn,material:Qe,group:Dn}=qt;if(Qe.side===Mi&&Dt.layers.test(ae.layers)){const Ut=Qe.side;Qe.side=li,Qe.needsUpdate=!0,ba(Dt,de,ae,dn,Qe,Dn),Qe.side=Ut,Qe.needsUpdate=!0,He=!0}}He===!0&&(ot.updateMultisampleRenderTarget(Oe),ot.updateRenderTargetMipmap(Oe))}G.setRenderTarget(Le,Pe,We),G.setClearColor(O,ie),ut!==void 0&&(ae.viewport=ut),G.toneMapping=at}function Xt(N,X,de){const ae=X.isScene===!0?X.overrideMaterial:null;for(let se=0,Oe=N.length;se<Oe;se++){const Ve=N[se],{object:Le,geometry:Pe,group:We}=Ve;let at=Ve.material;at.allowOverride===!0&&ae!==null&&(at=ae),Le.layers.test(de.layers)&&ba(Le,X,de,Pe,at,We)}}function ba(N,X,de,ae,se,Oe){W!==null&&se.isNodeMaterial&&W.setObject(N,se),N.onBeforeRender(G,X,de,ae,se,Oe),N.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),se.onBeforeRender(G,X,de,ae,N,Oe),se.transparent===!0&&se.side===Mi&&se.forceSinglePass===!1?(se.side=li,se.needsUpdate=!0,G.renderBufferDirect(de,X,ae,se,N,Oe),se.side=fr,se.needsUpdate=!0,G.renderBufferDirect(de,X,ae,se,N,Oe),se.side=Mi):G.renderBufferDirect(de,X,ae,se,N,Oe),N.onAfterRender(G,X,de,ae,se,Oe)}function $i(N){let X=0;for(const de of N)de.texture!==null&&X++;return X}function ea(N,X,de){X.isScene!==!0&&(X=cn);const ae=tt.get(N),se=P.state.lights,Oe=P.state.shadowsArray,Ve=se.state.version,Le=Ee.getParameters(N,se.state,Oe,X,de,P.state.lightProbeGridArray),Pe=Ee.getProgramCacheKey(Le);let We=ae.programs;ae.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?X.environment:null,ae.fog=X.fog;const at=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ae.envMap=U.get(N.envMap||ae.environment,at),ae.envMapRotation=ae.environment!==null&&N.envMap===null?X.environmentRotation:N.envMapRotation,We===void 0&&(N.addEventListener("dispose",Pt),We=new Map,ae.programs=We,ae.programVariants=new Map);let ut=We.get(Pe);if(ut!==void 0){if(ae.currentProgram===ut&&ae.lightsStateVersion===Ve)return Fs(N,Le),ut}else Le.uniforms=Ee.getUniforms(N),W!==null&&N.isNodeMaterial&&W.build(N,de,Le),N.onBeforeCompile(Le,G),ut=Ee.acquireProgram(Le,Pe),We.set(Pe,ut),ae.uniforms=Le.uniforms;const He=ae.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(He.clippingPlanes=_e.uniform),Fs(N,Le),ae.needsLights=mn(N),ae.lightsStateVersion=Ve,ae.needsLights&&(He.ambientLightColor.value=se.state.ambient,He.lightProbe.value=se.state.probe,He.sunLights.value=se.state.sun,He.sunLightShadows.value=se.state.sunShadow,He.directionalLights.value=se.state.directional,He.directionalLightShadows.value=se.state.directionalShadow,He.spotLights.value=se.state.spot,He.spotLightShadows.value=se.state.spotShadow,He.rectAreaLights.value=se.state.rectArea,He.ltc_1.value=se.state.rectAreaLTC1,He.ltc_2.value=se.state.rectAreaLTC2,He.pointLights.value=se.state.point,He.pointLightShadows.value=se.state.pointShadow,He.hemisphereLights.value=se.state.hemi,He.sunShadowMatrix.value=se.state.sunShadowMatrix,He.sunShadowCascade.value=se.state.sunShadowCascade,He.directionalShadowMatrix.value=se.state.directionalShadowMatrix,He.spotLightMatrix.value=se.state.spotLightMatrix,He.spotLightMap.value=se.state.spotLightMap,He.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.numLightProbeGrids=$i(P.state.lightProbeGridArray),ae.currentProgram=ut,ae.uniformsList=null,ut}function Us(N,X,de,ae,se){const Oe=tt.get(N),Ve=Oe.currentProgram.id+","+ae+","+se;let Le=Oe.programVariants.get(Ve);return Le===void 0?(Le=ea(N,X,de),Oe.programVariants.set(Ve,Le)):(Oe.currentProgram=Le,Oe.uniformsList=null,Oe.outputColorSpace=ae,Oe.toneMapping=se),Le}function ta(N){if(N.uniformsList===null){const X=N.currentProgram.getUniforms();N.uniformsList=Au.seqWithValue(X.seq,N.uniforms)}return N.uniformsList}function Fs(N,X){const de=tt.get(N);de.outputColorSpace=X.outputColorSpace,de.batching=X.batching,de.batchingColor=X.batchingColor,de.instancing=X.instancing,de.instancingColor=X.instancingColor,de.instancingMorph=X.instancingMorph,de.skinning=X.skinning,de.morphTargets=X.morphTargets,de.morphNormals=X.morphNormals,de.morphColors=X.morphColors,de.morphTargetsCount=X.morphTargetsCount,de.numClippingPlanes=X.numClippingPlanes,de.numIntersection=X.numClipIntersection,de.vertexAlphas=X.vertexAlphas,de.vertexTangents=X.vertexTangents,de.toneMapping=X.toneMapping}function Is(N,X,de,ae,se){X.isScene!==!0&&(X=cn),ot.resetTextureUnits();const Oe=X.fog,Ve=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?X.environment:null,Le=me===null?G.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ot.workingColorSpace,Pe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,We=U.get(ae.envMap||Ve,Pe),at=ae.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,ut=!!de.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),He=!!de.morphAttributes.position,Mt=!!de.morphAttributes.normal,fn=!!de.morphAttributes.color;let qt=ja;ae.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(qt=G.toneMapping);const Dt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,dn=Dt!==void 0?Dt.length:0,Qe=tt.get(ae),Dn=P.state.lights;if(yt===!0&&(Nt===!0||N!==pe)){const rn=N===pe&&ae.id===Q;_e.setState(ae,N,rn)}let Ut=!1,ya=!1;ae.version===Qe.__version?Qe.needsLights&&Qe.lightsStateVersion!==Dn.state.version||se.isBatchedMesh&&Qe.batching===!1||!se.isBatchedMesh&&Qe.batching===!0||se.isBatchedMesh&&Qe.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&Qe.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&Qe.instancing===!1||!se.isInstancedMesh&&Qe.instancing===!0||se.isSkinnedMesh&&Qe.skinning===!1||!se.isSkinnedMesh&&Qe.skinning===!0||se.isInstancedMesh&&Qe.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Qe.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Qe.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Qe.instancingMorph===!1&&se.morphTexture!==null||Qe.envMap!==We||ae.fog===!0&&Qe.fog!==Oe||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==_e.numPlanes||Qe.numIntersection!==_e.numIntersection)||Qe.vertexAlphas!==at||Qe.vertexTangents!==ut||Qe.morphTargets!==He||Qe.morphNormals!==Mt||Qe.morphColors!==fn||Qe.morphTargetsCount!==dn||Qe.numLightProbeGrids!==$i(P.state.lightProbeGridArray)?Ut=!0:(Qe.outputColorSpace!==Le||Qe.toneMapping!==qt)&&(ya=!0):(Ut=!0,Qe.__version=ae.version);let ct=Qe.currentProgram;(Ut===!0||ya===!0)&&(ct=ya===!0?Us(ae,X,se,Le,qt):ea(ae,X,se),W&&ae.isNodeMaterial&&W.onUpdateProgram(ae,ct,Qe));let Ps=!1,fi=!1,Ai=!1;const gt=ct.getUniforms(),Vt=Qe.uniforms;if(ze.useProgram(ct.program)&&(Ps=!0,fi=!0,Ai=!0),ae.id!==Q&&(Q=ae.id,fi=!0),Ps||pe!==N){ze.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),gt.setValue(K,"projectionMatrix",N.projectionMatrix),gt.setValue(K,"viewMatrix",N.matrixWorldInverse);const pn=gt.map.cameraPosition;pn!==void 0&&pn.setValue(K,ln.setFromMatrixPosition(N.matrixWorld)),Gt.logarithmicDepthBuffer&&gt.setValue(K,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&gt.setValue(K,"isOrthographic",N.isOrthographicCamera===!0),pe!==N&&(pe=N,fi=!0,Ai=!0)}if(Qe.needsLights&&(Dn.state.sunShadowMap.length>0&&gt.setValue(K,"sunShadowMap",Dn.state.sunShadowMap,ot),Dn.state.directionalShadowMap.length>0&&gt.setValue(K,"directionalShadowMap",Dn.state.directionalShadowMap,ot),Dn.state.spotShadowMap.length>0&&gt.setValue(K,"spotShadowMap",Dn.state.spotShadowMap,ot),Dn.state.pointShadowMap.length>0&&gt.setValue(K,"pointShadowMap",Dn.state.pointShadowMap,ot)),se.isSkinnedMesh){gt.setOptional(K,se,"bindMatrix"),gt.setOptional(K,se,"bindMatrixInverse");const rn=se.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),gt.setValue(K,"boneTexture",rn.boneTexture,ot))}se.isBatchedMesh&&(gt.setOptional(K,se,"batchingTexture"),gt.setValue(K,"batchingTexture",se._matricesTexture,ot),gt.setOptional(K,se,"batchingIdTexture"),gt.setValue(K,"batchingIdTexture",se._indirectTexture,ot),gt.setOptional(K,se,"batchingColorTexture"),se._colorsTexture!==null&&gt.setValue(K,"batchingColorTexture",se._colorsTexture,ot));const ti=de.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&ve.update(se,de,ct),(fi||Qe.receiveShadow!==se.receiveShadow)&&(Qe.receiveShadow=se.receiveShadow,gt.setValue(K,"receiveShadow",se.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&X.environment!==null&&(Vt.envMapIntensity.value=X.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=tN()),fi){if(gt.setValue(K,"toneMappingExposure",G.toneMappingExposure),Qe.needsLights&&_t(Vt,Ai),Oe&&ae.fog===!0&&Ue.refreshFogUniforms(Vt,Oe),Ue.refreshMaterialUniforms(Vt,ae,he,ce,P.state.transmissionRenderTarget[N.id]),Qe.needsLights&&Qe.numLightProbeGrids>0){const rn=L;let pn=0;for(const Ti of P.state.lightProbeGridArray)Ti.texture!==null&&(rn.textures[pn]=Ti.texture,rn.min[pn]=Ti.boundingBox.min,rn.max[pn]=Ti.boundingBox.max,rn.resolution[pn]=Ti.resolution,pn++);for(const Ti in rn)rn[Ti].length=pn;Vt.probesSH.value=rn.textures,Vt.probesMin.value=rn.min,Vt.probesMax.value=rn.max,Vt.probesResolution.value=rn.resolution}Au.upload(K,ta(Qe),Vt,ot)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Au.upload(K,ta(Qe),Vt,ot),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&gt.setValue(K,"center",se.center),gt.setValue(K,"modelViewMatrix",se.modelViewMatrix),gt.setValue(K,"normalMatrix",se.normalMatrix),gt.setValue(K,"modelMatrix",se.matrixWorld),ae.uniformsGroups!==void 0){const rn=ae.uniformsGroups;for(let pn=0,Ti=rn.length;pn<Ti;pn++){const wl=rn[pn];Ke.update(wl,ct),Ke.bind(wl,ct)}}return ct}function _t(N,X){N.ambientLightColor.needsUpdate=X,N.lightProbe.needsUpdate=X,N.sunLights.needsUpdate=X,N.sunLightShadows.needsUpdate=X,N.directionalLights.needsUpdate=X,N.directionalLightShadows.needsUpdate=X,N.pointLights.needsUpdate=X,N.pointLightShadows.needsUpdate=X,N.spotLights.needsUpdate=X,N.spotLightShadows.needsUpdate=X,N.rectAreaLights.needsUpdate=X,N.hemisphereLights.needsUpdate=X}function mn(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return me},this.setRenderTargetTextures=function(N,X,de){const ae=tt.get(N);ae.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),tt.get(N.texture).__webglTexture=X,tt.get(N.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:de,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,X){const de=tt.get(N);de.__webglFramebuffer=X,de.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(N,X=0,de=0){me=N,Z=X,V=de;let ae=null,se=!1,Oe=!1;if(N){const Le=tt.get(N);if(Le.__useDefaultFramebuffer!==void 0){ze.bindFramebuffer(K.FRAMEBUFFER,Le.__webglFramebuffer),ye.copy(N.viewport),je.copy(N.scissor),et=N.scissorTest,ze.viewport(ye),ze.scissor(je),ze.setScissorTest(et),Q=-1;return}else if(Le.__webglFramebuffer===void 0)ot.setupRenderTarget(N);else if(Le.__hasExternalTextures)ot.rebindTextures(N,tt.get(N.texture).__webglTexture,tt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const at=N.depthTexture;if(Le.__boundDepthTexture!==at){if(at!==null&&tt.has(at)&&(N.width!==at.image.width||N.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(N)}}const Pe=N.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Oe=!0);const We=tt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(We[X])?ae=We[X][de]:ae=We[X],se=!0):N.samples>0&&ot.useMultisampledRTT(N)===!1?ae=tt.get(N).__webglMultisampledFramebuffer:Array.isArray(We)?ae=We[de]:ae=We,ye.copy(N.viewport),je.copy(N.scissor),et=N.scissorTest}else ye.copy(Se).multiplyScalar(he).floor(),je.copy(Ce).multiplyScalar(he).floor(),et=st;if(de!==0&&(ae=q),ze.bindFramebuffer(K.FRAMEBUFFER,ae)&&ze.drawBuffers(N,ae),ze.viewport(ye),ze.scissor(je),ze.setScissorTest(et),se){const Le=tt.get(N.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+X,Le.__webglTexture,de)}else if(Oe){const Le=X;for(let Pe=0;Pe<N.textures.length;Pe++){const We=tt.get(N.textures[Pe]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Pe,We.__webglTexture,de,Le)}}else if(N!==null&&de!==0){const Le=tt.get(N.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Le.__webglTexture,de)}Q=-1};function $t(N){const X=tt.get(N);return(X.__readFormat!==N.format||X.__readType!==N.type)&&(X.__readFormat=N.format,X.__readType=N.type,X.__formatReadable=Gt.textureFormatReadable(N.format),X.__typeReadable=Gt.textureTypeReadable(N.type)),X}this.readRenderTargetPixels=function(N,X,de,ae,se,Oe,Ve,Le=0){if(!(N&&N.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=tt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ve!==void 0&&(Pe=Pe[Ve],Array.isArray(Pe)&&(Pe=Pe[0])),Pe){ze.bindFramebuffer(K.FRAMEBUFFER,Pe);try{const We=N.textures[Le],at=We.format,ut=We.type;N.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Le);const He=$t(We);if(He.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=N.width-ae&&de>=0&&de<=N.height-se&&K.readPixels(X,de,ae,se,Ne.convert(at),Ne.convert(ut),Oe)}finally{const We=me!==null?tt.get(me).__webglFramebuffer:null;ze.bindFramebuffer(K.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(N,X,de,ae,se,Oe,Ve,Le=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=tt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ve!==void 0&&(Pe=Pe[Ve],Array.isArray(Pe)&&(Pe=Pe[0])),Pe)if(X>=0&&X<=N.width-ae&&de>=0&&de<=N.height-se){ze.bindFramebuffer(K.FRAMEBUFFER,Pe);const We=N.textures[Le],at=We.format,ut=We.type;N.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Le);const He=$t(We);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Mt=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,Mt),K.bufferData(K.PIXEL_PACK_BUFFER,Oe.byteLength,K.STREAM_READ),K.readPixels(X,de,ae,se,Ne.convert(at),Ne.convert(ut),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const fn=me!==null?tt.get(me).__webglFramebuffer:null;ze.bindFramebuffer(K.FRAMEBUFFER,fn);const qt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await by(K,qt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,Mt),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Oe),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(Mt),K.deleteSync(qt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,X=null,de=0){const ae=Math.pow(2,-de),se=Math.floor(N.image.width*ae),Oe=Math.floor(N.image.height*ae),Ve=X!==null?X.x:0,Le=X!==null?X.y:0;ot.setTexture2D(N,0),K.copyTexSubImage2D(K.TEXTURE_2D,de,0,0,Ve,Le,se,Oe),ze.unbindTexture()},this.copyTextureToTexture=function(N,X,de=null,ae=null,se=0,Oe=0){let Ve,Le,Pe,We,at,ut,He,Mt,fn;const qt=N.isCompressedTexture?N.mipmaps[Oe]:N.image;if(de!==null)Ve=de.max.x-de.min.x,Le=de.max.y-de.min.y,Pe=de.isBox3?de.max.z-de.min.z:1,We=de.min.x,at=de.min.y,ut=de.isBox3?de.min.z:0;else{const gt=Math.pow(2,-se);Ve=Math.floor(qt.width*gt),Le=Math.floor(qt.height*gt),N.isDataArrayTexture?Pe=qt.depth:N.isData3DTexture?Pe=Math.floor(qt.depth*gt):Pe=1,We=0,at=0,ut=0}ae!==null?(He=ae.x,Mt=ae.y,fn=ae.z):(He=0,Mt=0,fn=0);const Dt=Ne.convert(X.format),dn=Ne.convert(X.type);let Qe;X.isData3DTexture?(ot.setTexture3D(X,0),Qe=K.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ot.setTexture2DArray(X,0),Qe=K.TEXTURE_2D_ARRAY):(ot.setTexture2D(X,0),Qe=K.TEXTURE_2D),ze.activeTexture(K.TEXTURE0),ze.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,X.flipY),ze.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),ze.pixelStorei(K.UNPACK_ALIGNMENT,X.unpackAlignment);const Dn=ze.getParameter(K.UNPACK_ROW_LENGTH),Ut=ze.getParameter(K.UNPACK_IMAGE_HEIGHT),ya=ze.getParameter(K.UNPACK_SKIP_PIXELS),ct=ze.getParameter(K.UNPACK_SKIP_ROWS),Ps=ze.getParameter(K.UNPACK_SKIP_IMAGES);ze.pixelStorei(K.UNPACK_ROW_LENGTH,qt.width),ze.pixelStorei(K.UNPACK_IMAGE_HEIGHT,qt.height),ze.pixelStorei(K.UNPACK_SKIP_PIXELS,We),ze.pixelStorei(K.UNPACK_SKIP_ROWS,at),ze.pixelStorei(K.UNPACK_SKIP_IMAGES,ut);const fi=N.isDataArrayTexture||N.isData3DTexture,Ai=X.isDataArrayTexture||X.isData3DTexture;if(N.isDepthTexture){const gt=tt.get(N),Vt=tt.get(X),ti=tt.get(gt.__renderTarget),rn=tt.get(Vt.__renderTarget);ze.bindFramebuffer(K.READ_FRAMEBUFFER,ti.__webglFramebuffer),ze.bindFramebuffer(K.DRAW_FRAMEBUFFER,rn.__webglFramebuffer);for(let pn=0;pn<Pe;pn++)fi&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,tt.get(N).__webglTexture,se,ut+pn),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,tt.get(X).__webglTexture,Oe,fn+pn)),K.blitFramebuffer(We,at,We+Ve,at+Le,He,Mt,He+Ve,Mt+Le,K.DEPTH_BUFFER_BIT,K.NEAREST);ze.bindFramebuffer(K.READ_FRAMEBUFFER,null),ze.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(se!==0||N.isRenderTargetTexture||tt.has(N)){const gt=tt.get(N),Vt=tt.get(X);ze.bindFramebuffer(K.READ_FRAMEBUFFER,z),ze.bindFramebuffer(K.DRAW_FRAMEBUFFER,ee);for(let ti=0;ti<Pe;ti++)fi?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,gt.__webglTexture,se,ut+ti):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,gt.__webglTexture,se),Ai?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Vt.__webglTexture,Oe,fn+ti):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Vt.__webglTexture,Oe),se!==0?K.blitFramebuffer(We,at,We+Ve,at+Le,He,Mt,He+Ve,Mt+Le,K.COLOR_BUFFER_BIT,K.NEAREST):Ai?K.copyTexSubImage3D(Qe,Oe,He,Mt,fn+ti,We,at,Ve,Le):K.copyTexSubImage2D(Qe,Oe,He,Mt,We,at,Ve,Le);ze.bindFramebuffer(K.READ_FRAMEBUFFER,null),ze.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Ai?N.isDataTexture||N.isData3DTexture?K.texSubImage3D(Qe,Oe,He,Mt,fn,Ve,Le,Pe,Dt,dn,qt.data):X.isCompressedArrayTexture?K.compressedTexSubImage3D(Qe,Oe,He,Mt,fn,Ve,Le,Pe,Dt,qt.data):K.texSubImage3D(Qe,Oe,He,Mt,fn,Ve,Le,Pe,Dt,dn,qt):N.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Oe,He,Mt,Ve,Le,Dt,dn,qt.data):N.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Oe,He,Mt,qt.width,qt.height,Dt,qt.data):K.texSubImage2D(K.TEXTURE_2D,Oe,He,Mt,Ve,Le,Dt,dn,qt);ze.pixelStorei(K.UNPACK_ROW_LENGTH,Dn),ze.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ut),ze.pixelStorei(K.UNPACK_SKIP_PIXELS,ya),ze.pixelStorei(K.UNPACK_SKIP_ROWS,ct),ze.pixelStorei(K.UNPACK_SKIP_IMAGES,Ps),Oe===0&&X.generateMipmaps===!0&&X.mipmapsAutoUpdate===!0&&K.generateMipmap(Qe),ze.unbindTexture()},this.initRenderTarget=function(N){tt.get(N).__webglFramebuffer===void 0&&ot.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ot.setTextureCube(N,0):N.isData3DTexture?ot.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ot.setTexture2DArray(N,0):ot.setTexture2D(N,0),ze.unbindTexture()},this.resetState=function(){Z=0,V=0,me=null,ze.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ot._getUnpackColorSpace()}}const iN=({rotacaoAngulo:o,onRotacaoChange:t,fadigaScore:i,pressaoArterial:r,zonasCorporais:c,zonaSelecionadaId:f,onSelecionarZona:d,modoRaioX:m=!1})=>{const g=qe.useRef(null),p=qe.useRef(null),_=qe.useRef(!1),v=qe.useRef(0),S=qe.useRef(0),y=r.status==="HIPERTENSAO_CRITICA",[A,w]=qe.useState(null),M=qe.useRef([]),E=qe.useCallback(j=>j==="CRITICO"?"#EF4444":j==="ALERTA"?"#F59E0B":"#10B981",[]),D=j=>{_.current=!0,v.current=j.clientX,S.current=o},I=j=>{if(_.current&&t){const G=j.clientX-v.current,F=(S.current+G*.8+360)%360;t(F)}else{const G=g.current;if(!G)return;const F=G.getBoundingClientRect(),W=j.clientX-F.left,q=j.clientY-F.top,z=M.current.find(ee=>Math.hypot(W-ee.sx,q-ee.sy)<=20);w(z?z.id:null)}},L=()=>{_.current=!1},B=j=>{const G=g.current;if(!G)return;const F=G.getBoundingClientRect(),W=j.clientX-F.left,q=j.clientY-F.top,z=M.current.find(ee=>Math.hypot(W-ee.sx,q-ee.sy)<=24);z&&d(z.zona)},P=j=>{j.touches.length===1&&(_.current=!0,v.current=j.touches[0].clientX,S.current=o)},b=j=>{if(_.current&&t&&j.touches.length===1){const G=j.touches[0].clientX-v.current,F=(S.current+G*.8+360)%360;t(F)}},C=()=>{_.current=!1};return qe.useEffect(()=>{const j=g.current;if(!j)return;const G=j.clientWidth||440,F=480,W=new Vy,q=new Ki(40,G/F,.1,100);q.position.set(0,.1,5.2);const z=new nN({antialias:!0,alpha:!0});z.setSize(G,F),z.setPixelRatio(Math.min(window.devicePixelRatio,2)),z.outputColorSpace=Ei,j.innerHTML="",j.appendChild(z.domElement);const ee=`
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vWorldPosition;

      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,Z=`
      uniform vec3 uColor;
      uniform vec3 uRimColor;
      uniform float uTime;
      uniform float uOpacity;
      uniform float uFresnelPower;
      uniform float uScanlineDensity;

      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vWorldPosition;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);

        // Efeito Fresnel Transparente de Vidro / Energia
        float fresnel = 1.0 - clamp(abs(dot(normal, viewDir)), 0.0, 1.0);
        fresnel = pow(fresnel, uFresnelPower);

        // Linhas de varredura holográfica vertical (Scanlines futuristas)
        float scanline = sin(vWorldPosition.y * uScanlineDensity - uTime * 4.0) * 0.08 + 0.92;

        // Combinação de cor do núcleo azul profundo com borda ciano vibrante
        vec3 finalColor = mix(uColor * 0.45, uRimColor * 1.5, fresnel) * scanline;
        finalColor += uRimColor * pow(fresnel, 2.5) * 0.75;

        float alpha = clamp(0.22 + fresnel * 0.78, 0.0, 1.0) * uOpacity;

        gl_FragColor = vec4(finalColor, alpha);
      }
    `,V=new Os({vertexShader:ee,fragmentShader:Z,uniforms:{uColor:{value:new Bt(m?35020:22015)},uRimColor:{value:new Bt(m?65535:3718648)},uTime:{value:0},uOpacity:{value:m?.75:.88},uFresnelPower:{value:m?1.6:2},uScanlineDensity:{value:28}},transparent:!0,depthWrite:!1,blending:El,side:Mi}),me=new cr({color:y?15680580:39423,wireframe:!1,transparent:!0,opacity:.85}),Q=new ur;W.add(Q);const pe=new Zi(.24,24,24);pe.scale(.85,1.15,.95);const ye=new Rt(pe,V);ye.position.set(0,1.55,0),Q.add(ye);const je=new kn(.12,.08,.16,16),et=new Rt(je,V);et.position.set(0,1.38,.06),et.rotation.x=.2,Q.add(et);const O=new kn(.11,.13,.22,16),ie=new Rt(O,V);ie.position.set(0,1.28,0),Q.add(ie);const J=new kn(.38,.32,.45,20);J.scale(1.15,1,.75);const ce=new Rt(J,V);ce.position.set(0,1.05,0),Q.add(ce);const he=new Zi(.15,16,16);he.scale(1.1,.75,.55);const Te=new Rt(he,V);Te.position.set(.14,1.08,.14),Q.add(Te);const Xe=new Rt(he,V);Xe.position.set(-.14,1.08,.14),Q.add(Xe);const Se=new kn(.3,.29,.42,20);Se.scale(1,1,.7);const Ce=new Rt(Se,V);Ce.position.set(0,.65,0),Q.add(Ce);const st=new kn(.29,.32,.28,20);st.scale(1.1,1,.75);const $e=new Rt(st,V);$e.position.set(0,.32,0),Q.add($e);const Et=new ur;for(let Xt=0;Xt<14;Xt++){const ba=new kn(.04,.045,.05,12),$i=new Rt(ba,new cr({color:3718648,transparent:!0,opacity:.65}));$i.position.set(0,.35+Xt*.07,-.06),Et.add($i)}Q.add(Et);const yt=new Zi(.075,14,14);yt.scale(.9,1.1,.85);const Nt=new Rt(yt,new cr({color:y?15680580:61695,transparent:!0,opacity:.9}));Nt.position.set(.12,1.04,.06),Q.add(Nt);const rt=new Rt(new Zi(.12,14,14),V);rt.position.set(.48,1.18,0),Q.add(rt);const ln=new kn(.09,.08,.38,16),Jt=new Rt(ln,V);Jt.position.set(.58,.98,0),Jt.rotation.z=-.32,Q.add(Jt);const cn=new kn(.115,.115,.14,24),un=new Rt(cn,me);un.position.set(.58,1,0),un.rotation.z=-.32,Q.add(un);const Tn=new kn(.075,.065,.42,16),K=new Rt(Tn,V);K.position.set(.72,.65,.04),K.rotation.z=-.38,Q.add(K);const Rn=new Zi(.06,12,12);Rn.scale(1.2,1.5,.6);const It=new Rt(Rn,V);It.position.set(.83,.38,.06),It.rotation.z=-.35,Q.add(It);const Gt=new Rt(new Zi(.12,14,14),V);Gt.position.set(-.48,1.18,0),Q.add(Gt);const ze=new kn(.09,.08,.38,16),Ht=new Rt(ze,V);Ht.position.set(-.58,.98,0),Ht.rotation.z=.32,Q.add(Ht);const tt=new kn(.075,.065,.42,16),ot=new Rt(tt,V);ot.position.set(-.72,.65,.04),ot.rotation.z=.38,Q.add(ot);const U=new Zi(.06,12,12);U.scale(1.2,1.5,.6);const T=new Rt(U,V);T.position.set(-.83,.38,.06),T.rotation.z=.35,Q.add(T);const oe=new kn(.14,.11,.65,18),Re=new Rt(oe,V);Re.position.set(.18,-.12,0),Re.rotation.z=-.06,Q.add(Re);const Ee=new Rt(new Zi(.1,14,14),V);Ee.position.set(.19,-.48,.02),Q.add(Ee);const Ue=new kn(.1,.075,.65,18),Ie=new Rt(Ue,V);Ie.position.set(.19,-.85,0),Q.add(Ie);const ge=new mr(.1,.07,.22),_e=new Rt(ge,V);_e.position.set(.2,-1.22,.07),Q.add(_e);const Fe=new kn(.14,.11,.65,18),k=new Rt(Fe,V);k.position.set(-.18,-.12,0),k.rotation.z=.06,Q.add(k);const ve=new Rt(new Zi(.1,14,14),V);ve.position.set(-.19,-.48,.02),Q.add(ve);const xe=new kn(.1,.075,.65,18),we=new Rt(xe,V);we.position.set(-.19,-.85,0),Q.add(we);const Ne=new mr(.1,.07,.22),De=new Rt(Ne,V);De.position.set(-.2,-1.22,.07),Q.add(De);const Ke=70,nt=new Bi,Ae=new Float32Array(Ke*3);for(let Xt=0;Xt<Ke;Xt++)Ae[Xt*3+0]=(Math.random()-.5)*.45,Ae[Xt*3+1]=(Math.random()-.5)*2.8+.2,Ae[Xt*3+2]=(Math.random()-.5)*.25;nt.setAttribute("position",new ws(Ae,3));const Ye=new YS({color:3718648,size:.035,transparent:!0,opacity:.75,blending:El}),ht=new Jy(nt,Ye);Q.add(ht);const Be=new ur;Be.position.set(0,-1.35,0),Be.rotation.x=Math.PI/2;const Pt=new Ml(1.05,1.08,64),sn=new cr({color:39423,side:Mi,transparent:!0,opacity:.5});Be.add(new Rt(Pt,sn));const Yn=new Ml(.72,.74,48),Ea=new cr({color:3718648,side:Mi,transparent:!0,opacity:.4});Be.add(new Rt(Yn,Ea)),W.add(Be);const ui=new Ml(.01,.95,32),qa=new cr({color:m?65535:3718648,side:Mi,transparent:!0,opacity:.25,blending:El}),bi=new Rt(ui,qa);bi.rotation.x=Math.PI/2,W.add(bi);const Ls=[{id:"zona-cabeca",zonaId:"zona-cabeca",label:"CÓRTEX // HUD",position:new fe(0,1.58,.26)},{id:"zona-coracao",zonaId:"zona-coracao",label:"CORAÇÃO",position:new fe(.12,1.05,.2)},{id:"zona-braco-esq",zonaId:"zona-braco-esq",label:"MANGUITO ESQ",position:new fe(.58,1,.15)},{id:"zona-coluna",zonaId:"zona-coluna",label:"COLUNA",position:new fe(0,.85,-.22)},{id:"zona-maos",zonaId:"zona-maos",label:"MOTRICIDADE",position:new fe(.83,.38,.1)},{id:"zona-pernas",zonaId:"zona-pernas",label:"CIRCULAÇÃO",position:new fe(.19,-.48,.14)}];let yi,Ya=new lA;const Ma=()=>{yi=requestAnimationFrame(Ma);const Xt=Ya.getElapsedTime(),ba=Math.sin(Xt*1.8)*.06,$i=Math.sin(Xt*1.2)*.015,ea=Math.cos(Xt*1.4)*.012;Q.position.y=ba,Q.rotation.x=$i,Q.rotation.z=ea;const Us=o*Math.PI/180;Q.rotation.y=Us;const ta=1+Math.sin(Xt*6.5)*.12;if(Nt.scale.set(ta,ta,ta),y){const _t=1+Math.sin(Xt*10)*.14;un.scale.set(_t,1,_t),me.color.setHex(15680580)}else un.scale.set(1,1,1),me.color.setHex(39423);const Fs=Math.sin(Xt*1.5)*1.45+.15;bi.position.y=Fs,Be.rotation.z=Xt*.4,V.uniforms.uTime.value=Xt,z.render(W,q);const Is=p.current;if(Is){const _t=Is.getContext("2d");if(_t){_t.clearRect(0,0,G,F);const mn=[];Ls.forEach($t=>{const N=c.find(We=>We.id===$t.zonaId);if(!N)return;const X=$t.position.clone();Q.localToWorld(X);const de=X.clone().project(q),ae=(de.x+1)/2*G,se=(-de.y+1)/2*F,Oe=de.z,Ve=f===N.id,Le=A===$t.id,Pe=E(N.nivelFadiga);if(mn.push({id:$t.id,zona:N,sx:ae,sy:se,sz:Oe,label:$t.label,color:Pe,isSelected:Ve}),de.z<1){_t.save(),_t.shadowColor=Pe,_t.shadowBlur=Ve?18:Le?14:8;const We=(Ve?9:6)+Math.sin(Xt*6)*2;_t.strokeStyle=Pe,_t.lineWidth=Ve?2.5:1.5,_t.beginPath(),_t.arc(ae,se,We,0,Math.PI*2),_t.stroke(),_t.fillStyle=Pe,_t.beginPath(),_t.arc(ae,se,Ve?5:4,0,Math.PI*2),_t.fill();const at=ae+($t.position.x>=0?38:-38),ut=se-14;_t.strokeStyle=Ve?"#FFFFFF":"rgba(56, 189, 248, 0.45)",_t.lineWidth=1,_t.beginPath(),_t.moveTo(ae,se),_t.lineTo(at,ut),_t.lineTo(at+($t.position.x>=0?46:-46),ut),_t.stroke(),_t.fillStyle=Ve?"#FFFFFF":"#38BDF8",_t.font="bold 9px JetBrains Mono, monospace",_t.textAlign=$t.position.x>=0?"left":"right",_t.fillText(`${$t.label} [${N.percentual}%]`,at+($t.position.x>=0?4:-4),ut-2),_t.restore()}}),M.current=mn}}};Ma();const zi=()=>{if(!j)return;const Xt=j.clientWidth||440;q.aspect=Xt/F,q.updateProjectionMatrix(),z.setSize(Xt,F),p.current&&(p.current.width=Xt,p.current.height=F)};return window.addEventListener("resize",zi),()=>{cancelAnimationFrame(yi),window.removeEventListener("resize",zi),z.dispose(),V.dispose(),me.dispose(),W.clear()}},[o,y,m,c,f,A,E]),h.jsx("div",{ref:g,onMouseDown:D,onMouseMove:I,onMouseUp:L,onMouseLeave:L,onClick:B,onTouchStart:P,onTouchMove:b,onTouchEnd:C,className:`relative w-full max-w-[440px] h-[480px] flex items-center justify-center select-none overflow-hidden ${A?"cursor-pointer":"cursor-grab active:cursor-grabbing"}`,title:"Arraste para girar o corpo humano holográfico 360° ou clique nos nós biométricos",children:h.jsx("canvas",{ref:p,width:440,height:480,className:"absolute inset-0 pointer-events-none z-10"})})},fE=()=>{const{astronautaAtivo:o,pressaoArterial:t,aferirPressaoArterial:i,zonasCorporais:r,modoContencaoAtivo:c}=Wa(),[f,d]=qe.useState(!0),[m,g]=qe.useState(0),[p,_]=qe.useState(null),[v,S]=qe.useState("HOLOGRAFICO");qe.useEffect(()=>{if(!f)return;const w=setInterval(()=>{g(M=>(M+.6)%360)},40);return()=>clearInterval(w)},[f]),qe.useEffect(()=>{!p&&r.length>0&&_(r[2])},[r,p]);const y=w=>w==="CRITICO"?{fill:"#EF4444",stroke:"#EF4444",bg:"bg-[#EF4444]/20",text:"text-[#EF4444]",border:"border-[#EF4444]",badge:"bg-[#EF4444] text-white",glow:"shadow-[0_0_15px_rgba(239,68,68,0.8)]"}:w==="ALERTA"?{fill:"#F59E0B",stroke:"#F59E0B",bg:"bg-[#F59E0B]/20",text:"text-[#F59E0B]",border:"border-[#F59E0B]",badge:"bg-[#F59E0B] text-black",glow:"shadow-[0_0_15px_rgba(245,158,11,0.8)]"}:{fill:"#10B981",stroke:"#10B981",bg:"bg-[#10B981]/20",text:"text-[#10B981]",border:"border-[#10B981]",badge:"bg-[#10B981] text-black",glow:"shadow-[0_0_15px_rgba(16,185,129,0.8)]"},A=t.status==="HIPERTENSAO_CRITICA";return h.jsxs("div",{className:`p-4 md:p-5 border transition-colors ${c||A?"bg-[#251C30] border-[#EF4444]":"bg-[#0F253E] border-[#1E3A5F]"}`,children:[A&&h.jsxs("div",{className:"mb-4 p-3.5 bg-[#EF4444]/25 border-2 border-[#EF4444] text-white text-xs md:text-sm font-mono flex items-center justify-between gap-3 animate-pulse",children:[h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx(oS,{className:"w-6 h-6 text-[#EF4444] shrink-0"}),h.jsxs("div",{children:[h.jsxs("strong",{className:"tracking-wider text-[#EF4444] text-sm md:text-base",children:["ALERTA MÉDICO DE HIPERTENSÃO SEVERA NO BRAÇO ESQUERDO (",t.sistolica,"/",t.diastolica," mmHg)"]}),h.jsx("div",{className:"text-slate-200 text-xs mt-0.5",children:"PARADA OPERACIONAL IMEDIATA EXIGIDA. Sobrecarga cardiovascular aguda detectada no traje espacial."})]})]}),h.jsx("span",{className:"px-3.5 py-1.5 bg-[#EF4444] text-black font-bold text-xs uppercase tracking-wider shrink-0",children:"PARADA OBRIGATÓRIA"})]}),h.jsxs("div",{className:"flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-[#1E3A5F] gap-2 font-mono",children:[h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx(Tu,{className:"w-5 h-5 text-[#38BDF8]"}),h.jsxs("div",{children:[h.jsx("span",{className:"font-bold text-sm md:text-base text-white tracking-wider",children:"HOLOGRAMA BIOMÉDICO 3D // CORPO HUMANO ANATÔMICO EM ROTAÇÃO 360°"}),h.jsxs("div",{className:"text-xs text-[#8892B0]",children:["Mapeamento anatômico de fadiga em tempo real de ",o.nome," (",o.indicativo,")"]})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("div",{className:"flex items-center bg-[#060F1E] border border-[#1E3A5F] p-0.5 text-xs",children:[h.jsx("button",{onClick:()=>S("HOLOGRAFICO"),className:`px-2.5 py-1 font-bold transition-colors ${v==="HOLOGRAFICO"?"bg-[#0099FF] text-white":"text-[#8892B0]"}`,children:"HOLOGRÁFICO"}),h.jsx("button",{onClick:()=>S("RAIO_X"),className:`px-2.5 py-1 font-bold transition-colors ${v==="RAIO_X"?"bg-[#0099FF] text-white":"text-[#8892B0]"}`,children:"RAIO-X"})]}),h.jsxs("div",{className:"flex items-center gap-2 bg-[#060F1E] border border-[#1E3A5F] p-1 text-xs",children:[h.jsx(wu,{className:"w-4 h-4 text-[#38BDF8] ml-1.5"}),h.jsxs("span",{className:"text-slate-300 font-bold px-1",children:[Math.round(m),"°"]}),h.jsxs("button",{onClick:()=>d(!f),className:`flex items-center gap-1 px-2.5 py-1 text-xs font-bold transition-colors ${f?"bg-[#0099FF] text-white":"bg-[#1E3A5F] text-[#8892B0] hover:text-white"}`,children:[f?h.jsx(Db,{className:"w-3.5 h-3.5"}):h.jsx(Ub,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:f?"PAUSAR":"GIRAR 360°"})]})]})]})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-5 items-center",children:[h.jsxs("div",{className:"lg:col-span-6 relative flex flex-col items-center justify-center bg-[#030712] border border-[#1E3A5F] p-4 min-h-[480px] overflow-hidden",children:[h.jsx("div",{className:"absolute inset-0 bg-grid-aerospace opacity-25 pointer-events-none"}),h.jsx("div",{className:"absolute w-80 h-80 border border-[#0099FF]/25 rounded-full pointer-events-none animate-spin",style:{animationDuration:"45s"}}),h.jsx("div",{className:"absolute w-96 h-96 border border-[#38BDF8]/15 rounded-full pointer-events-none"}),h.jsxs("div",{className:"absolute top-3 left-3 bg-[#0F253E]/90 backdrop-blur border border-[#1E3A5F] px-2.5 py-1 text-xs font-mono text-[#8892B0] z-20",children:["MOTOR: ",h.jsx("strong",{className:"text-white",children:"3D ANATOMICAL HOLOGRAM // LEVITAÇÃO MICROGRAVITACIONAL"})]}),h.jsxs("div",{className:"absolute top-3 right-3 bg-[#0F253E]/90 backdrop-blur border border-[#1E3A5F] px-2.5 py-1 text-xs font-mono z-20 flex items-center gap-1.5",children:[h.jsx("span",{className:`w-2.5 h-2.5 rounded-full ${o.indiceFadiga>=75?"bg-[#EF4444] animate-ping":o.indiceFadiga>=45?"bg-[#F59E0B]":"bg-[#10B981]"}`}),h.jsxs("span",{className:"text-white font-bold",children:["FADIGA: ",o.indiceFadiga,"%"]})]}),h.jsx("div",{className:"relative w-full flex items-center justify-center select-none py-1",children:h.jsx(iN,{rotacaoAngulo:m,onRotacaoChange:g,fadigaScore:o.indiceFadiga,pressaoArterial:t,zonasCorporais:r,zonaSelecionadaId:(p==null?void 0:p.id)||null,onSelecionarZona:_,modoRaioX:v==="RAIO_X"})}),h.jsxs("div",{className:"text-[11px] font-mono text-[#8892B0] mt-1 flex items-center gap-1.5 z-20",children:[h.jsx(wu,{className:"w-3.5 h-3.5 text-[#38BDF8]"}),h.jsx("span",{children:"Arraste com o mouse para girar 360° em qualquer direção | Clique nos nós para selecionar"})]}),h.jsxs("div",{className:"flex items-center gap-4 mt-2 bg-[#0F253E] border border-[#1E3A5F] px-3.5 py-1.5 text-xs font-mono z-20",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-3 h-3 rounded-full bg-[#10B981]"}),h.jsx("span",{className:"text-white",children:"Verde: Nominal"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-3 h-3 rounded-full bg-[#F59E0B]"}),h.jsx("span",{className:"text-[#F59E0B]",children:"Amarelo: Alerta"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-3 h-3 rounded-full bg-[#EF4444]"}),h.jsx("span",{className:"text-[#EF4444] font-bold",children:"Vermelho: Parar Urgente!"})]})]})]}),h.jsxs("div",{className:"lg:col-span-6 space-y-4 font-mono",children:[h.jsxs("div",{className:`p-4 border transition-all ${A?"bg-[#18121E] border-2 border-[#EF4444]":"bg-[#060F1E] border border-[#1E3A5F]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between pb-2 mb-2 border-b border-[#1E3A5F]",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(z_,{className:`w-5 h-5 ${A?"text-[#EF4444]":"text-[#38BDF8]"}`}),h.jsx("span",{className:"font-bold text-sm md:text-base text-white tracking-wider",children:"MANGUITO DO BRAÇO ESQUERDO // PRESSÃO ARTERIAL"})]}),h.jsx("span",{className:`text-xs px-2.5 py-0.5 font-bold ${A?"bg-[#EF4444] text-white":"bg-[#10B981]/20 text-[#10B981] border border-[#10B981]"}`,children:t.status.replace(/_/g," ")})]}),h.jsxs("div",{className:"grid grid-cols-3 gap-2.5 my-3 text-center",children:[h.jsxs("div",{className:"bg-[#0F253E] p-2.5 border border-[#1E3A5F]",children:[h.jsx("div",{className:"text-xs text-[#8892B0] mb-0.5",children:"SISTÓLICA"}),h.jsx("div",{className:`text-3xl font-bold ${A?"text-[#EF4444]":"text-white"}`,children:t.sistolica}),h.jsx("div",{className:"text-[10px] text-[#8892B0]",children:"mmHg"})]}),h.jsxs("div",{className:"bg-[#0F253E] p-2.5 border border-[#1E3A5F]",children:[h.jsx("div",{className:"text-xs text-[#8892B0] mb-0.5",children:"DIASTÓLICA"}),h.jsx("div",{className:`text-3xl font-bold ${A?"text-[#EF4444]":"text-white"}`,children:t.diastolica}),h.jsx("div",{className:"text-[10px] text-[#8892B0]",children:"mmHg"})]}),h.jsxs("div",{className:"bg-[#0F253E] p-2.5 border border-[#1E3A5F]",children:[h.jsx("div",{className:"text-xs text-[#8892B0] mb-0.5",children:"PULSO"}),h.jsx("div",{className:"text-3xl font-bold text-[#38BDF8]",children:t.pulsoBpm}),h.jsx("div",{className:"text-[10px] text-[#8892B0]",children:"BPM"})]})]}),h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#1E3A5F]/60",children:[h.jsxs("span",{className:"text-xs text-[#8892B0]",children:["Última leitura: ",h.jsx("strong",{className:"text-white",children:t.timestampUltimaMedicao})]}),h.jsxs("button",{onClick:i,disabled:t.emMedicao,className:`px-3.5 py-1.5 text-xs font-bold transition-all flex items-center gap-2 ${t.emMedicao?"bg-[#F59E0B] text-black animate-pulse cursor-wait":"bg-[#0099FF] hover:bg-[#0080dd] text-white"}`,children:[h.jsx(Tu,{className:`w-3.5 h-3.5 ${t.emMedicao?"animate-spin":""}`}),h.jsx("span",{children:t.emMedicao?"INSUFLANDO MANGUITO...":"AFERIR PRESSÃO AGORA"})]})]})]}),h.jsxs("div",{className:"bg-[#060F1E] border border-[#1E3A5F] p-3.5 space-y-2.5",children:[h.jsx("div",{className:"text-xs text-[#8892B0] font-bold tracking-wider",children:"INSPEÇÃO BIOMÉDICA POR REGIÃO DO CORPO HUMANO:"}),h.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2",children:r.map(w=>{const M=y(w.nivelFadiga),E=(p==null?void 0:p.id)===w.id;return h.jsxs("button",{onClick:()=>_(w),className:`p-2 text-left border transition-all text-xs font-mono ${E?`${M.bg} ${M.border} text-white`:"bg-[#0F253E] border-[#1E3A5F] text-[#8892B0] hover:text-white"}`,children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:`w-2.5 h-2.5 rounded-full ${w.nivelFadiga==="CRITICO"?"bg-[#EF4444]":w.nivelFadiga==="ALERTA"?"bg-[#F59E0B]":"bg-[#10B981]"}`}),h.jsxs("span",{className:"font-bold",children:[w.percentual,"%"]})]}),h.jsx("div",{className:"truncate font-semibold text-white leading-tight",children:w.nome.split("//")[0]})]},w.id)})}),p&&h.jsxs("div",{className:`p-3 border mt-2 ${y(p.nivelFadiga).bg} ${y(p.nivelFadiga).border}`,children:[h.jsxs("div",{className:"flex items-center justify-between text-xs mb-1",children:[h.jsx("span",{className:"font-bold text-white tracking-wide",children:p.nome}),h.jsx("span",{className:`px-2 py-0.5 text-xs font-bold ${y(p.nivelFadiga).badge}`,children:p.nivelFadiga==="CRITICO"?"PARAR URGENTE":p.nivelFadiga})]}),h.jsx("div",{className:"text-xs text-slate-200 leading-relaxed",children:p.detalheClinico})]})]})]})]})]})},dE=()=>{const{astronautaAtivo:o,analiseVozIA:t,iniciarChamadaTelemedicina:i,encerrarChamadaTelemedicina:r,alternarModoCamera:c,delayHouston:f,modoContencaoAtivo:d}=Wa(),[m,g]=qe.useState(!1),[p,_]=qe.useState(!1),[v,S]=qe.useState(0),y=qe.useRef(null),[A,w]=qe.useState(!1);qe.useEffect(()=>{if(!t.emChamada)return;const D=setInterval(()=>{S(I=>(I+1)%100)},80);return()=>clearInterval(D)},[t.emChamada]),qe.useEffect(()=>{var I;let D=null;return t.emChamada&&t.modoCamera==="WEBCAM"?(I=navigator.mediaDevices)==null||I.getUserMedia({video:!0,audio:!1}).then(L=>{D=L,y.current&&(y.current.srcObject=L),w(!0)}).catch(()=>{w(!1),c()}):(y.current&&y.current.srcObject&&(y.current.srcObject.getTracks().forEach(B=>B.stop()),y.current.srcObject=null),w(!1)),()=>{D&&D.getTracks().forEach(L=>L.stop())}},[t.emChamada,t.modoCamera,c]);const M=Array.from({length:24}).map((D,I)=>{if(!t.emChamada||m)return 8;const L=o.indiceFadiga>=75,B=L?.3:.8,P=L?24:48,b=Math.abs(Math.sin((I+v)*B)*P)+8;return Math.min(60,Math.round(b))}),E=o.indiceFadiga>=75||t.sindromeAstronautaRisco>=70;return h.jsxs("div",{className:`p-4 md:p-5 border font-mono transition-colors ${E?"bg-[#251C30] border-[#EF4444]":"bg-[#0F253E] border-[#1E3A5F]"}`,children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-[#1E3A5F] gap-2",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Du,{className:"w-5 h-5 text-[#38BDF8]"}),h.jsxs("div",{children:[h.jsx("span",{className:"font-bold text-sm md:text-base text-white tracking-wider",children:"TELEMEDICINA ESPACIAL // CONSULTA CLÍNICA AO VIVO"}),h.jsxs("div",{className:"text-xs text-[#8892B0]",children:["Canal Criptografado DSN: Astronauta ",o.nome," ⟷ Dra. Elena Rostova (Houston Flight Surgeon)"]})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("span",{className:"text-xs bg-[#060F1E] border border-[#1E3A5F] px-2.5 py-1 text-[#F59E0B] flex items-center gap-1.5",children:[h.jsx(Cu,{className:"w-3.5 h-3.5 animate-pulse text-[#F59E0B]"}),h.jsxs("span",{children:["DELAY HOUSTON: ",f]})]}),t.emChamada?h.jsxs("button",{onClick:r,className:"flex items-center gap-1.5 px-3 py-1.5 bg-[#EF4444] hover:bg-[#dc2626] text-white font-bold text-xs transition-colors",children:[h.jsx(Lb,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"DESCONECTAR"})]}):h.jsxs("button",{onClick:i,className:"flex items-center gap-1.5 px-3 py-1.5 bg-[#10B981] hover:bg-[#0da070] text-black font-bold text-xs transition-colors",children:[h.jsx(Ob,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"CONECTAR CONSULTA"})]})]})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-5",children:[h.jsxs("div",{className:"lg:col-span-7 bg-[#030712] border border-[#1E3A5F] relative min-h-[340px] flex flex-col justify-between overflow-hidden",children:[h.jsxs("div",{className:"absolute top-2 left-2 right-2 flex items-center justify-between z-20 text-xs",children:[h.jsxs("div",{className:"flex items-center gap-2 bg-[#060F1E]/80 backdrop-blur px-2.5 py-1 border border-[#1E3A5F]",children:[h.jsx("span",{className:`w-2 h-2 rounded-full ${t.emChamada?"bg-[#EF4444] animate-ping":"bg-slate-500"}`}),h.jsx("span",{className:"text-white font-bold",children:t.emChamada?"REC // LIVE FEED":"STANDBY"}),h.jsx("span",{className:"text-[#8892B0]",children:"|"}),h.jsx("span",{className:"text-[#38BDF8]",children:"1080p60 H.265"})]}),h.jsx("div",{className:"flex items-center gap-1.5",children:h.jsxs("button",{onClick:c,title:"Alternar entre simulação de cabine orbital e webcam real",className:"bg-[#0F253E]/80 hover:bg-[#1E3A5F] text-slate-200 border border-[#1E3A5F] px-2 py-1 text-xs flex items-center gap-1",children:[h.jsx(vb,{className:"w-3.5 h-3.5 text-[#38BDF8]"}),h.jsx("span",{children:t.modoCamera==="SIMULADO"?"USAR WEBCAM":"FEED ORBITAL"})]})})]}),h.jsx("div",{className:"relative w-full h-full flex-1 flex items-center justify-center p-4",children:t.modoCamera==="WEBCAM"&&A?h.jsx("video",{ref:y,autoPlay:!0,playsInline:!0,muted:!0,className:"w-full h-full object-cover rounded-none"}):h.jsxs("div",{className:"relative w-full h-[300px] bg-[#030712] flex items-center justify-center border border-[#1E3A5F]/50 overflow-hidden",children:[h.jsx("img",{src:"/astronaut-suit.jpg",alt:"Astronauta em Consulta Online - Telemedicina",className:"w-full h-full object-cover object-top opacity-90 filter contrast-110"}),h.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/40 pointer-events-none"}),h.jsx("div",{className:"absolute inset-0 bg-grid-aerospace opacity-20 pointer-events-none"}),h.jsx("div",{className:"absolute w-44 h-44 border border-[#0099FF]/40 rounded-full pointer-events-none"}),h.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-px bg-[#0099FF]/20 pointer-events-none"}),h.jsx("div",{className:"absolute left-1/2 top-0 bottom-0 w-px bg-[#0099FF]/20 pointer-events-none"}),h.jsxs("div",{className:"absolute bottom-3 left-3 bg-[#0F253E]/90 backdrop-blur border border-[#1E3A5F] px-3 py-1.5 z-10 font-mono",children:[h.jsxs("div",{className:"text-white font-bold text-xs",children:[o.nome," (",o.indicativo,")"]}),h.jsx("div",{className:"text-[10px] text-[#38BDF8]",children:"FATO ESPACIAL EVA MK-IV // ECLSS TELEMEDICINE BUS"})]}),h.jsxs("div",{className:"absolute bottom-3 right-3 w-32 h-24 bg-[#0F253E] border border-[#0099FF] z-20 p-1.5 flex flex-col justify-between shadow-2xl",children:[h.jsx("div",{className:"text-[10px] text-[#38BDF8] font-bold",children:"HOUSTON // SURGEON"}),h.jsx("div",{className:"flex items-center justify-center flex-1",children:h.jsx("span",{className:"text-xs text-white font-semibold",children:"Dra. Rostova"})}),h.jsxs("div",{className:"text-[9px] text-[#10B981] flex items-center gap-1 font-bold",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"}),h.jsx("span",{children:"LINK ATIVO (DSN)"})]})]})]})}),h.jsxs("div",{className:"bg-[#0A192F] border-t border-[#1E3A5F] px-4 py-2 flex items-center justify-between z-20",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{onClick:()=>g(!m),className:`p-2 border transition-colors ${m?"bg-[#EF4444]/20 border-[#EF4444] text-[#EF4444]":"bg-[#060F1E] border-[#1E3A5F] text-slate-200 hover:text-white"}`,title:m?"Desmutar Microfone":"Mutar Microfone",children:m?h.jsx(Rb,{className:"w-4 h-4"}):h.jsx(Nb,{className:"w-4 h-4"})}),h.jsx("button",{onClick:()=>_(!p),className:`p-2 border transition-colors ${p?"bg-[#EF4444]/20 border-[#EF4444] text-[#EF4444]":"bg-[#060F1E] border-[#1E3A5F] text-slate-200 hover:text-white"}`,title:p?"Ligar Câmera":"Desligar Câmera",children:p?h.jsx(zb,{className:"w-4 h-4"}):h.jsx(Du,{className:"w-4 h-4"})})]}),h.jsxs("div",{className:"flex items-center gap-1 h-8 px-2 bg-[#060F1E] border border-[#1E3A5F]",children:[h.jsx("span",{className:"text-[10px] text-[#8892B0] mr-1 hidden sm:inline",children:"VOZ:"}),M.map((D,I)=>h.jsx("div",{className:`w-1 rounded-sm transition-all duration-75 ${E?"bg-[#EF4444]":"bg-[#0099FF]"}`,style:{height:`${D}%`}},I))]})]})]}),h.jsx("div",{className:"lg:col-span-5 space-y-3.5",children:h.jsxs("div",{className:"bg-[#060F1E] border border-[#1E3A5F] p-4 space-y-3",children:[h.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-[#1E3A5F]",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(jm,{className:"w-4 h-4 text-[#38BDF8]"}),h.jsx("span",{className:"font-bold text-xs md:text-sm text-white tracking-wider",children:"ANÁLISE NEURO-ACÚSTICA POR IA"})]}),h.jsx("span",{className:"text-xs text-[#10B981] font-semibold",children:"PROCESSANDO AO VIVO"})]}),h.jsxs("div",{className:"p-2.5 bg-[#0F253E] border border-[#1E3A5F]",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs mb-1",children:[h.jsx("span",{className:"text-[#8892B0]",children:"VELOCIDADE DE FALA (PPM):"}),h.jsxs("strong",{className:`text-sm ${t.velocidadeFalaPPM<90?"text-[#EF4444]":"text-white"}`,children:[t.velocidadeFalaPPM," palavras/min"]})]}),h.jsx("div",{className:"w-full bg-[#060F1E] h-1.5 border border-[#1E3A5F]",children:h.jsx("div",{className:`h-full ${t.velocidadeFalaPPM<90?"bg-[#EF4444]":"bg-[#0099FF]"}`,style:{width:`${Math.min(100,t.velocidadeFalaPPM/150*100)}%`}})}),h.jsxs("div",{className:"text-[10px] text-[#8892B0] mt-1 flex justify-between",children:[h.jsx("span",{children:"Norma: 130-150 PPM"}),h.jsx("span",{children:t.velocidadeFalaPPM<90?"Bradilalia Severa (Lentidão)":"Cadência Nominal"})]})]}),h.jsxs("div",{className:"p-2.5 bg-[#0F253E] border border-[#1E3A5F]",children:[h.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[#8892B0]",children:"PITCH FUNDAMENTAL:"}),h.jsxs("div",{className:"text-sm font-bold text-white mt-0.5",children:[t.tomVozHz," Hz"]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[#8892B0]",children:"JITTER ACÚSTICO:"}),h.jsxs("div",{className:`text-sm font-bold mt-0.5 ${t.jitterAcusticoPercent>5?"text-[#EF4444]":"text-[#10B981]"}`,children:[t.jitterAcusticoPercent,"% (Tremor)"]})]})]}),h.jsx("div",{className:"text-[10px] text-[#8892B0] mt-1",children:t.monotoniaScore>60?"Entonação vocal monótona detectada (Apatia depressiva de isolamento).":"Modulação e harmônicos vocais com dinâmica normal."})]}),h.jsxs("div",{className:`p-3 border ${t.sindromeAstronautaRisco>=70?"bg-[#18121E] border-[#EF4444]":"bg-[#0F253E] border-[#1E3A5F]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between text-xs mb-1.5",children:[h.jsxs("span",{className:"font-bold text-white flex items-center gap-1.5",children:[h.jsx(Gu,{className:`w-3.5 h-3.5 ${t.sindromeAstronautaRisco>=70?"text-[#EF4444]":"text-[#F59E0B]"}`}),"SÍNDROME DO ASTRONAUTA (SAS):"]}),h.jsxs("span",{className:`px-2 py-0.5 text-xs font-bold ${t.sindromeAstronautaRisco>=70?"bg-[#EF4444] text-white":"bg-[#1E3A5F] text-[#38BDF8]"}`,children:[t.sindromeAstronautaRisco,"% RISCO"]})]}),h.jsx("div",{className:"text-xs text-slate-200 leading-relaxed mb-2",children:t.diagnosticoClinico}),h.jsxs("div",{className:"text-[10px] text-[#8892B0] border-t border-[#1E3A5F] pt-1.5 flex items-center justify-between",children:[h.jsx("span",{children:"DESVIO CEFÁLICO DE FLUIDOS:"}),h.jsx("strong",{className:t.edemaFacialDetectado?"text-[#EF4444]":"text-[#10B981]",children:t.edemaFacialDetectado?"CONFIRMADO (EDEMA VISÍVEL)":"NEGATIVO"})]})]})]})})]})]})},aN=()=>{const{astronautaAtivo:o,tarefas:t,modoContencaoAtivo:i,pressaoArterial:r,analiseVozIA:c,registrarDigitacaoTerminal:f,atualizarAutoavaliacao:d,completarTarefa:m,adicionarLog:g}=Wa(),[p,_]=qe.useState(""),[v,S]=qe.useState(0),[y,A]=qe.useState(null),w=qe.useRef(null),[M,E]=qe.useState(!0),[D,I]=qe.useState(!0),L=["Verificação dos atuadores do Airlock concluída. Pressão interna estável em 14.7 psi.","Alinhamento estático da antena primária concluído sem divergência nos sensores.","Sentindo cansaço visual acentuado e perda temporária de foco nos comandos manuais."],B=q=>{const z=q.target.value;y===null&&z.length>0&&A(Date.now()),_(z);const ee=y?Date.now()-y:1e3;f(z,v,ee)},P=q=>{q.key==="Backspace"&&S(z=>z+1),q.key==="Enter"&&!q.shiftKey&&(q.preventDefault(),b())},b=()=>{p.trim()&&(g("KEYSTROKE","SUCCESS",`CDR-1 Relatório de Bordo Registrado: "${p.slice(0,60)}${p.length>60?"...":""}"`,`Métricas gravadas no Core Sync: ${o.wpm} WPM | ${o.taxaErro}% erro.`),_(""),S(0),A(null))},C=q=>{_(q),S(Math.floor(Math.random()*4));const z=4500;A(Date.now()-z),f(q,2,z)},j=t.filter(q=>q.responsavelId===o.id),G=q=>q>=75?"text-[#EF4444] border-[#EF4444] bg-[#EF4444]/15":q>=45?"text-[#F59E0B] border-[#F59E0B] bg-[#F59E0B]/15":"text-[#10B981] border-[#10B981] bg-[#10B981]/15",F=q=>q>=75?"bg-[#EF4444]":q>=45?"bg-[#F59E0B]":"bg-[#0099FF]",W=r.status==="HIPERTENSAO_CRITICA";return h.jsxs("div",{className:"space-y-5",children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-[#1E3A5F] pb-2.5 text-xs md:text-sm font-mono",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"text-[#38BDF8] font-bold",children:"OPERATIONAL STATION:"}),h.jsx("span",{className:"text-white",children:"COMMAND FLIGHT DECK (LOCAL EDGE BUS)"}),h.jsx("span",{className:"text-[#8892B0]",children:"|"}),h.jsx("span",{className:"text-[#10B981] font-semibold",children:"LOCAL TELEMETRY LATENCY: 0.00ms"})]}),h.jsxs("div",{className:"flex items-center gap-2 text-[#8892B0]",children:[h.jsxs("span",{children:["PILOT: ",h.jsx("strong",{className:"text-white",children:o.nome})," (",o.indicativo,")"]}),h.jsx("span",{children:"|"}),h.jsxs("span",{children:["VIGILÂNCIA CONTÍNUA: ",h.jsxs("strong",{className:"text-white",children:[o.horasVigilia,"h"]})]})]})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5",children:[h.jsxs("div",{className:`p-4 border transition-colors ${i?"bg-[#251C30] border-[#EF4444]":"bg-[#0F253E] border-[#1E3A5F]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between text-xs md:text-sm font-mono text-[#8892B0] mb-1.5",children:[h.jsxs("span",{className:"flex items-center gap-1.5 font-bold tracking-wider",children:[h.jsx(z_,{className:"w-4 h-4 text-[#38BDF8]"}),"FADIGA COGNITIVA"]}),h.jsx("span",{className:"text-xs bg-[#060F1E] px-2 py-0.5 border border-[#1E3A5F] font-semibold",children:"SENSORLESS"})]}),h.jsxs("div",{className:"flex items-baseline justify-between my-2",children:[h.jsxs("div",{className:"flex items-baseline gap-1.5",children:[h.jsxs("span",{className:`text-4xl font-mono font-bold tracking-tight ${o.indiceFadiga>=75?"text-[#EF4444]":o.indiceFadiga>=45?"text-[#F59E0B]":"text-white"}`,children:[o.indiceFadiga,"%"]}),h.jsx("span",{className:"text-sm font-mono text-[#8892B0]",children:"/ 100"})]}),h.jsx("span",{className:`text-xs font-mono px-2.5 py-1 font-bold border ${G(o.indiceFadiga)}`,children:o.statusOperacional})]}),h.jsx("div",{className:"w-full bg-[#060F1E] h-2.5 border border-[#1E3A5F] overflow-hidden my-2.5",children:h.jsx("div",{className:`h-full transition-all duration-300 ${F(o.indiceFadiga)}`,style:{width:`${Math.min(100,Math.max(5,o.indiceFadiga))}%`}})}),h.jsxs("div",{className:"flex justify-between text-xs font-mono text-[#8892B0]",children:[h.jsx("span",{children:"NOMINAL (<45%)"}),h.jsx("span",{children:"ALERTA (>75%)"})]})]}),h.jsxs("div",{className:`p-4 border transition-colors ${i?"bg-[#251C30] border-[#1E3A5F]":"bg-[#0F253E] border-[#1E3A5F]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between text-xs md:text-sm font-mono text-[#8892B0] mb-2",children:[h.jsxs("span",{className:"flex items-center gap-1.5 font-bold tracking-wider",children:[h.jsx(Tu,{className:"w-4 h-4 text-[#38BDF8]"}),"TELEMETRIA MOTORA"]}),h.jsx("span",{className:"text-xs text-[#10B981] font-mono font-semibold",children:"LIVE FEED"})]}),h.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center font-mono",children:[h.jsxs("div",{className:"bg-[#060F1E] p-2 border border-[#1E3A5F]",children:[h.jsx("div",{className:"text-lg font-bold text-white leading-tight",children:o.wpm}),h.jsx("div",{className:"text-xs text-[#8892B0]",children:"WPM ATUAL"})]}),h.jsxs("div",{className:"bg-[#060F1E] p-2 border border-[#1E3A5F]",children:[h.jsxs("div",{className:`text-lg font-bold leading-tight ${o.taxaErro>8?"text-[#EF4444]":"text-white"}`,children:[o.taxaErro,"%"]}),h.jsx("div",{className:"text-xs text-[#8892B0]",children:"TAXA ERRO"})]}),h.jsxs("div",{className:"bg-[#060F1E] p-2 border border-[#1E3A5F]",children:[h.jsxs("div",{className:"text-lg font-bold text-[#38BDF8] leading-tight",children:[o.latenciaTeclaMs,"ms"]}),h.jsx("div",{className:"text-xs text-[#8892B0]",children:"LATÊNCIA"})]})]}),h.jsxs("div",{className:"mt-2 text-xs font-mono text-[#8892B0] flex items-center justify-between",children:[h.jsx("span",{children:"LINHA BASE: 68 WPM"}),h.jsxs("span",{className:o.wpm<40?"text-[#EF4444] font-semibold":"text-[#10B981] font-semibold",children:["Δ ",o.wpm-68," WPM"]})]})]}),h.jsxs("div",{className:`p-4 border transition-colors ${i?"bg-[#251C30] border-[#1E3A5F]":"bg-[#0F253E] border-[#1E3A5F]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between text-xs md:text-sm font-mono text-[#8892B0] mb-2",children:[h.jsxs("span",{className:"flex items-center gap-1.5 font-bold tracking-wider",children:[h.jsx(Eb,{className:"w-4 h-4 text-[#38BDF8]"}),"AUTOAVALIAÇÃO SUBJETIVA"]}),h.jsx("span",{className:"text-xs text-[#F59E0B] font-mono font-semibold",children:"30s PULSE"})]}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:["OTIMO","NEUTRO","EXAUSTO"].map(q=>{const z=o.autoavaliacao===q;return h.jsx("button",{onClick:()=>d(q),className:`py-2.5 px-1.5 text-xs font-mono font-bold tracking-wider border transition-all ${z?q==="OTIMO"?"bg-[#10B981]/25 border-[#10B981] text-[#10B981]":q==="NEUTRO"?"bg-[#0099FF]/25 border-[#0099FF] text-[#38BDF8]":"bg-[#EF4444]/25 border-[#EF4444] text-[#EF4444]":"bg-[#060F1E] border-[#1E3A5F] text-[#8892B0] hover:text-white hover:border-slate-500"}`,children:q},q)})}),o.autoavaliacao==="OTIMO"&&o.wpm<35&&h.jsxs("div",{className:"mt-2.5 p-2 bg-[#EF4444]/15 border border-[#EF4444] text-xs font-mono text-[#EF4444] flex items-center gap-1.5",children:[h.jsx(wb,{className:"w-4 h-4 shrink-0"}),h.jsx("span",{children:'DISSONÂNCIA: Autoavaliação "Ótimo", mas motricidade em colapso.'})]}),!(o.autoavaliacao==="OTIMO"&&o.wpm<35)&&h.jsxs("div",{className:"mt-2.5 text-xs font-mono text-[#8892B0]",children:["Status selecionado: ",h.jsx("strong",{className:"text-white",children:o.autoavaliacao})]})]}),h.jsxs("div",{className:`p-4 border transition-colors ${W?"bg-[#251C30] border-[#EF4444]":"bg-[#0F253E] border-[#1E3A5F]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between text-xs md:text-sm font-mono text-[#8892B0] mb-1.5",children:[h.jsxs("span",{className:"flex items-center gap-1.5 font-bold tracking-wider",children:[h.jsx(yb,{className:`w-4 h-4 ${W?"text-[#EF4444]":"text-[#38BDF8]"}`}),"BRAÇO ESQUERDO // PRESSÃO"]}),h.jsx("span",{className:`text-xs px-1.5 py-0.5 font-mono font-bold ${W?"bg-[#EF4444] text-white":"bg-[#1E3A5F] text-[#38BDF8]"}`,children:W?"HIPERTENSÃO":"NOMINAL"})]}),h.jsxs("div",{className:"space-y-2 mt-2 font-mono text-xs md:text-sm",children:[h.jsxs("div",{className:"flex justify-between items-center bg-[#060F1E] px-2.5 py-1.5 border border-[#1E3A5F]",children:[h.jsx("span",{className:"text-[#8892B0] text-xs",children:"MANGUITO ESQUERDO:"}),h.jsxs("span",{className:`font-bold ${W?"text-[#EF4444] text-sm animate-pulse":"text-white"}`,children:[r.sistolica,"/",r.diastolica," mmHg"]})]}),h.jsxs("div",{className:"flex justify-between items-center bg-[#060F1E] px-2.5 py-1.5 border border-[#1E3A5F]",children:[h.jsx("span",{className:"text-[#8892B0] text-xs",children:"ESTADO DO TRAJE:"}),h.jsx("span",{className:`font-bold flex items-center gap-1 ${W?"text-[#EF4444]":"text-[#10B981]"}`,children:W?h.jsxs(h.Fragment,{children:[h.jsx(Ev,{className:"w-3.5 h-3.5"})," BLOQUEIO ATIVO"]}):h.jsxs(h.Fragment,{children:[h.jsx(sS,{className:"w-3.5 h-3.5"})," NOMINAL (68 BPM)"]})})]})]})]})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-[#1E3A5F] pb-2 font-mono text-xs md:text-sm",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(wu,{className:"w-4 h-4 text-[#38BDF8]"}),h.jsx("span",{className:"text-white font-bold tracking-wider",children:"1. BONECO 3D HOLOGRÁFICO // CORPO HUMANO ANATÔMICO EM ROTAÇÃO 360° & MEDIDOR DE TENSÃO"}),h.jsx("span",{className:"text-xs text-[#8892B0] hidden md:inline",children:"(Holograma 3D translúcido azul com levitação orbital e rotação contínua e interativa mostrando zonas em Verde, Amarelo e Vermelho)"})]}),h.jsxs("button",{onClick:()=>E(!M),className:"flex items-center gap-1 px-2.5 py-1 bg-[#060F1E] border border-[#1E3A5F] text-[#8892B0] hover:text-white text-xs font-bold",children:[M?h.jsx(Nu,{className:"w-3.5 h-3.5"}):h.jsx(Ru,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:M?"RECOLHER SCANNER":"EXPANDIR SCANNER 3D"})]})]}),M&&h.jsx(fE,{})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-[#1E3A5F] pb-2 font-mono text-xs md:text-sm",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Du,{className:"w-4 h-4 text-[#38BDF8]"}),h.jsx("span",{className:"text-white font-bold tracking-wider",children:"2. CÂMARA DE TELEMEDICINA AO VIVO COM A EQUIPA MÉDICA // ANÁLISE DE VOZ & SÍNDROME SAS"}),c.emChamada&&h.jsx("span",{className:"text-xs px-2 py-0.5 bg-[#EF4444] text-white font-bold animate-pulse",children:"AO VIVO"})]}),h.jsxs("button",{onClick:()=>I(!D),className:"flex items-center gap-1 px-2.5 py-1 bg-[#060F1E] border border-[#1E3A5F] text-[#8892B0] hover:text-white text-xs font-bold",children:[D?h.jsx(Nu,{className:"w-3.5 h-3.5"}):h.jsx(Ru,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:D?"RECOLHER VÍDEO":"EXPANDIR CÂMARA"})]})]}),D&&h.jsx(dE,{})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4",children:[h.jsxs("div",{className:`lg:col-span-7 p-4 md:p-5 border ${i?"bg-[#251C30] border-[#F59E0B]/50":"bg-[#0F253E] border-[#1E3A5F]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between pb-2.5 mb-3 border-b border-[#1E3A5F]",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(cS,{className:"w-4 h-4 text-[#38BDF8]"}),h.jsx("span",{className:"font-mono font-bold text-sm md:text-base text-white tracking-wider",children:"TERMINAL DE COMANDO & REGISTRO OPERACIONAL"})]}),h.jsx("span",{className:"text-xs font-mono text-[#8892B0] hidden sm:inline",children:"DIGITE AO VIVO PARA CALCULAR WPM E ERROS"})]}),h.jsxs("div",{className:"mb-2.5",children:[h.jsx("div",{className:"text-xs font-mono text-[#8892B0] mb-1.5",children:"MODELOS RÁPIDOS DE DEMONSTRAÇÃO (CLIQUE PARA TESTAR):"}),h.jsx("div",{className:"flex flex-wrap gap-2",children:L.map((q,z)=>h.jsxs("button",{onClick:()=>C(q),className:"text-xs font-mono px-2.5 py-1.5 bg-[#060F1E] hover:bg-[#1E3A5F] border border-[#1E3A5F] text-slate-200 transition-colors text-left truncate max-w-[320px]",children:["> ",q]},z))})]}),h.jsxs("div",{className:"relative bg-[#030712] border border-[#1E3A5F] p-3.5 font-mono",children:[h.jsxs("div",{className:"text-xs md:text-sm text-[#0099FF] mb-1.5 font-bold flex items-center justify-between",children:[h.jsx("span",{children:"CDR-1@ORBIT-IQ:~/OPERATIONAL_LOG$"}),h.jsxs("span",{className:"text-xs text-[#8892B0]",children:[p.length," chars"]})]}),h.jsx("textarea",{ref:w,rows:4,value:p,onChange:B,onKeyDown:P,placeholder:"Digite aqui relatórios operacionais em tempo real (ex: verificação de cabine, checklist, dados de propulsão)... O motor analisa sua cadência de digitação e fadiga motora a cada caractere.",className:"w-full bg-transparent text-white font-mono text-xs md:text-sm focus:outline-none resize-none placeholder:text-slate-600 leading-relaxed"}),h.jsxs("div",{className:"flex items-center justify-between pt-2.5 border-t border-[#1E3A5F]/50 mt-1.5",children:[h.jsxs("span",{className:"text-xs text-[#8892B0]",children:["Pressione ",h.jsx("kbd",{className:"px-1.5 py-0.5 bg-[#0F253E] border border-[#1E3A5F] text-white font-bold",children:"Enter"})," para submeter"]}),h.jsxs("button",{onClick:b,disabled:!p.trim(),className:"flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0099FF] hover:bg-[#0080dd] disabled:opacity-40 disabled:hover:bg-[#0099FF] text-white text-xs md:text-sm font-mono font-bold transition-colors",children:[h.jsx(iS,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"REGISTRAR TELEMETRIA"})]})]})]}),h.jsxs("div",{className:"mt-3.5 p-2.5 bg-[#060F1E] border border-[#1E3A5F] flex items-center gap-2 text-xs font-mono text-[#8892B0]",children:[h.jsx(Ab,{className:"w-4 h-4 text-[#38BDF8] shrink-0"}),h.jsxs("span",{children:[h.jsx("strong",{className:"text-white",children:"Sensorless Intelligence:"})," Não requer câmeras ou sensores invasivos. O sistema deduz a sobrecarga cognitiva exclusivamente da cadência de digitação mecânica, desvio padrão entre teclas e volume de tarefas em curso."]})]})]}),h.jsxs("div",{className:`lg:col-span-5 p-4 md:p-5 border ${i?"bg-[#251C30] border-[#F59E0B]/50":"bg-[#0F253E] border-[#1E3A5F]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between pb-2.5 mb-3 border-b border-[#1E3A5F]",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(w_,{className:"w-4 h-4 text-[#38BDF8]"}),h.jsx("span",{className:"font-mono font-bold text-sm md:text-base text-white tracking-wider",children:"TAREFAS OPERACIONAIS EM CURSO"})]}),h.jsxs("span",{className:"text-xs md:text-sm font-mono text-[#38BDF8] font-bold",children:[j.filter(q=>q.status==="CONCLUIDA").length,"/",j.length," OK"]})]}),h.jsx("div",{className:"space-y-3 max-h-[380px] overflow-y-auto pr-1",children:j.map(q=>{const z=q.status==="ADIADA_POR_FADIGA",ee=q.status==="CONCLUIDA",Z=q.criticidade==="CRITICA";return h.jsxs("div",{className:`p-3 border font-mono transition-all ${z?"bg-[#18121E] border-[#EF4444]":ee?"bg-[#060F1E]/80 border-[#10B981]/30 opacity-70":"bg-[#060F1E] border-[#1E3A5F]"}`,children:[h.jsxs("div",{className:"flex items-start justify-between gap-2",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[h.jsx("span",{className:`text-xs px-2 py-0.5 font-bold ${Z?"bg-[#EF4444]/20 border border-[#EF4444] text-[#EF4444]":"bg-[#0099FF]/20 border border-[#0099FF] text-[#38BDF8]"}`,children:q.criticidade}),h.jsx("span",{className:"text-xs md:text-sm font-bold text-white",children:q.codigo}),h.jsx("span",{className:"text-xs text-[#8892B0]",children:q.modulo})]}),h.jsx("div",{className:"text-xs md:text-sm text-slate-200 font-medium leading-tight mb-1.5",children:q.titulo})]}),!ee&&!z&&h.jsx("button",{onClick:()=>m(q.id),className:"px-2.5 py-1 bg-[#1E3A5F] hover:bg-[#10B981] hover:text-black text-white text-xs font-bold transition-colors shrink-0",children:"CONCLUIR"}),ee&&h.jsxs("span",{className:"text-xs text-[#10B981] font-bold flex items-center gap-1 shrink-0",children:[h.jsx(_b,{className:"w-4 h-4"})," OK"]})]}),z&&h.jsxs("div",{className:"mt-2.5 p-2 bg-[#EF4444]/20 border border-[#EF4444] text-xs text-[#EF4444] flex items-start gap-2",children:[h.jsx(Ev,{className:"w-4 h-4 mt-0.5 shrink-0"}),h.jsxs("div",{children:[h.jsx("strong",{children:"BLOQUEIO AUTÔNOMO PELA NAVE:"})," ",q.motivoAdiantamento]})]}),h.jsxs("div",{className:"mt-2 flex items-center justify-between text-xs text-[#8892B0]",children:[h.jsxs("span",{children:["DURAÇÃO EST.: ",q.duracaoEstimadaMin," min"]}),h.jsxs("span",{children:["JANELA: ",q.timestamp]})]})]},q.id)})})]})]})]})},sN=()=>{const{astronautaAtivo:o,protocolos:t,transmitirProtocolo:i,delayHouston:r,modoContencaoAtivo:c,pressaoArterial:f,analiseVozIA:d}=Wa(),[m,g]=qe.useState(null),[p,_]=qe.useState(null),[v,S]=qe.useState(!0),[y,A]=qe.useState(!0),w=o.historicoDias,M=async F=>{_(F),await i(F),_(null)},E=740,D=240,I={top:25,right:35,bottom:40,left:50},L=E-I.left-I.right,B=D-I.top-I.bottom,P=F=>I.left+F/(w.length-1)*L,b=F=>I.top+B-F/100*B,C=w.map((F,W)=>`${P(W)},${b(F.fadigaReal)}`).join(" "),j=w.map((F,W)=>`${P(W)},${b(F.autoAvaliacaoNum)}`).join(" "),G=f.status==="HIPERTENSAO_CRITICA";return h.jsxs("div",{className:"space-y-5",children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-[#1E3A5F] pb-2.5 text-xs md:text-sm font-mono",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx($h,{className:"w-4 h-4 text-[#38BDF8]"}),h.jsx("span",{className:"text-[#38BDF8] font-bold",children:"MONITORAMENTO CLÍNICO LONGITUDINAL:"}),h.jsx("span",{className:"text-white",children:"NASA JSC // HOUSTON FLIGHT SURGEON CONSOLE 04"})]}),h.jsxs("div",{className:"flex items-center gap-2 bg-[#060F1E] px-3.5 py-1.5 border border-[#F59E0B]",children:[h.jsx(Cu,{className:"w-4 h-4 text-[#F59E0B] animate-pulse"}),h.jsx("span",{className:"text-[#8892B0]",children:"TELEMETRY SYNC DELAY:"}),h.jsx("strong",{className:"text-[#F59E0B] tracking-wider text-sm",children:r}),h.jsx("span",{className:"text-xs text-[#8892B0] hidden sm:inline",children:"(RETARDO ORBITAL ESTIMADO)"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 font-mono",children:[h.jsxs("div",{className:"bg-[#0F253E] border border-[#1E3A5F] p-4",children:[h.jsxs("div",{className:"text-xs text-[#8892B0] mb-1.5 flex items-center justify-between font-semibold",children:[h.jsx("span",{children:"DÉBITO CIRCADIANO ACUMULADO"}),h.jsx(Cb,{className:"w-4 h-4 text-[#38BDF8]"})]}),h.jsxs("div",{className:"text-3xl font-bold text-white leading-tight",children:["+",o.circadianDebtHoras," horas"]}),h.jsxs("div",{className:"text-xs text-[#8892B0] mt-1.5",children:["Status: ",h.jsx("span",{className:"text-[#F59E0B] font-semibold",children:"Defasagem REM moderada"})]})]}),h.jsxs("div",{className:"bg-[#0F253E] border border-[#1E3A5F] p-4",children:[h.jsxs("div",{className:"text-xs text-[#8892B0] mb-1.5 flex items-center justify-between font-semibold",children:[h.jsx("span",{children:"VULNERABILIDADE A MICRO-SONO"}),h.jsx(Tu,{className:"w-4 h-4 text-[#EF4444]"})]}),h.jsx("div",{className:`text-3xl font-bold leading-tight ${o.indiceFadiga>=75?"text-[#EF4444]":"text-[#F59E0B]"}`,children:o.indiceFadiga>=75?"ELEVADA (78%)":"CONTROLADA (24%)"}),h.jsxs("div",{className:"text-xs text-[#8892B0] mt-1.5",children:["Latência de reação: ",h.jsxs("strong",{className:"text-white",children:[o.latenciaTeclaMs,"ms"]})]})]}),h.jsxs("div",{className:`border p-4 transition-colors ${G?"bg-[#251C30] border-[#EF4444]":"bg-[#0F253E] border-[#1E3A5F]"}`,children:[h.jsxs("div",{className:"text-xs text-[#8892B0] mb-1.5 flex items-center justify-between font-semibold",children:[h.jsx("span",{children:"PRESSÃO DO BRAÇO ESQUERDO"}),h.jsx($h,{className:`w-4 h-4 ${G?"text-[#EF4444]":"text-[#F59E0B]"}`})]}),h.jsxs("div",{className:`text-3xl font-bold leading-tight ${G?"text-[#EF4444] animate-pulse":"text-white"}`,children:[f.sistolica,"/",f.diastolica]}),h.jsx("div",{className:"text-xs mt-1.5",children:h.jsx("span",{className:G?"text-[#EF4444] font-bold":"text-[#10B981]",children:G?"HIPERTENSÃO SEVERA":"Tensão sob controle"})})]}),h.jsxs("div",{className:"bg-[#0F253E] border border-[#1E3A5F] p-4",children:[h.jsxs("div",{className:"text-xs text-[#8892B0] mb-1.5 flex items-center justify-between font-semibold",children:[h.jsx("span",{children:'AUDITORIA "FATOR OMISSÃO"'}),h.jsx(Gu,{className:"w-4 h-4 text-[#F59E0B]"})]}),h.jsxs("div",{className:"text-3xl font-bold text-white leading-tight",children:[w.filter(F=>F.omissao).length," EVENTOS"]}),h.jsx("div",{className:"text-xs text-[#EF4444] mt-1.5 font-bold",children:o.autoavaliacao==="OTIMO"&&o.wpm<35?"Divergência Crítica Ativa":"Último desvio em SOL 140"})]})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-[#1E3A5F] pb-2 font-mono text-xs md:text-sm",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(wu,{className:"w-4 h-4 text-[#38BDF8]"}),h.jsx("span",{className:"text-white font-bold tracking-wider",children:"INSPEÇÃO ANATÔMICA 3D // HOLOGRAMA DO CORPO HUMANO EM 360° & MANGUITO BRAQUIAL"}),h.jsx("span",{className:"text-xs text-[#8892B0] hidden md:inline",children:"(Avaliação anatômica do corpo humano em 3D estilo holográfico com levitação microgravitacional contínua)"})]}),h.jsxs("button",{onClick:()=>S(!v),className:"flex items-center gap-1 px-2.5 py-1 bg-[#060F1E] border border-[#1E3A5F] text-[#8892B0] hover:text-white text-xs font-bold",children:[v?h.jsx(Nu,{className:"w-3.5 h-3.5"}):h.jsx(Ru,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:v?"RECOLHER SCANNER":"EXPANDIR SCANNER 3D"})]})]}),v&&h.jsx(fE,{})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-[#1E3A5F] pb-2 font-mono text-xs md:text-sm",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Du,{className:"w-4 h-4 text-[#38BDF8]"}),h.jsx("span",{className:"text-white font-bold tracking-wider",children:"TELECONSULTA CLÍNICA HOUSTON ⟷ NAVE // ANÁLISE DE VOZ & SÍNDROME DO ASTRONAUTA"}),d.emChamada&&h.jsx("span",{className:"text-xs px-2 py-0.5 bg-[#EF4444] text-white font-bold animate-pulse",children:"CANAL ABERTO"})]}),h.jsxs("button",{onClick:()=>A(!y),className:"flex items-center gap-1 px-2.5 py-1 bg-[#060F1E] border border-[#1E3A5F] text-[#8892B0] hover:text-white text-xs font-bold",children:[y?h.jsx(Nu,{className:"w-3.5 h-3.5"}):h.jsx(Ru,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:y?"RECOLHER TELEMEDICINA":"EXPANDIR CÂMARA"})]})]}),y&&h.jsx(dE,{})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4",children:[h.jsxs("div",{className:"lg:col-span-7 bg-[#0F253E] border border-[#1E3A5F] p-4 md:p-5",children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b border-[#1E3A5F] font-mono",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"font-bold text-sm md:text-base text-white tracking-wider flex items-center gap-2",children:[h.jsx(Ib,{className:"w-4 h-4 text-[#38BDF8]"}),"FADIGA REAL (SENSORLESS) VS. AUTOAVALIAÇÃO SUBJETIVA"]}),h.jsxs("div",{className:"text-xs text-[#8892B0]",children:["Evolução longitudinal de ",o.nome," (",o.indicativo,")"]})]}),h.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-3.5 h-1.5 bg-[#EF4444]"}),h.jsx("span",{className:"text-white",children:"Fadiga Real"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-3.5 h-1.5 bg-[#0099FF] stroke-dashed"}),h.jsx("span",{className:"text-white",children:"Autoavaliação"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-3.5 h-1 bg-[#F59E0B] border-t border-dashed border-[#F59E0B]"}),h.jsx("span",{className:"text-[#F59E0B]",children:"Limiar Crítico (75%)"})]})]})]}),h.jsx("div",{className:"w-full overflow-x-auto bg-[#060F1E] border border-[#1E3A5F] p-3",children:h.jsxs("svg",{viewBox:`0 0 ${E} ${D}`,className:"w-full h-auto max-h-[290px] font-mono text-xs",children:[[0,25,50,75,100].map(F=>{const W=b(F);return h.jsxs("g",{children:[h.jsx("line",{x1:I.left,y1:W,x2:E-I.right,y2:W,stroke:"#1E3A5F",strokeWidth:F===75?1.5:1,strokeDasharray:F===75?"4 3":"2 2",strokeOpacity:F===75?.9:.4}),h.jsxs("text",{x:I.left-8,y:W+4,textAnchor:"end",fill:F===75?"#F59E0B":"#8892B0",fontSize:"11",children:[F,"%"]})]},F)}),h.jsx("rect",{x:I.left,y:b(100),width:L,height:b(75)-b(100),fill:"#EF4444",fillOpacity:"0.08"}),h.jsx("polyline",{fill:"none",stroke:"#0099FF",strokeWidth:"2.5",strokeDasharray:"5 3",points:j}),h.jsx("polyline",{fill:"none",stroke:"#EF4444",strokeWidth:"3",points:C}),w.map((F,W)=>{const q=P(W),z=b(F.fadigaReal),ee=b(F.autoAvaliacaoNum),Z=m===W;return h.jsxs("g",{className:"cursor-pointer",onClick:()=>g(W),children:[h.jsx("line",{x1:q,y1:I.top,x2:q,y2:D-I.bottom,stroke:"#1E3A5F",strokeWidth:"1",strokeDasharray:"1 3"}),F.omissao&&h.jsxs("g",{children:[h.jsx("line",{x1:q,y1:z,x2:q,y2:ee,stroke:"#F59E0B",strokeWidth:"2.5"}),h.jsx("rect",{x:q-24,y:Math.min(z,ee)-18,width:"48",height:"16",fill:"#F59E0B",rx:"2"}),h.jsx("text",{x:q,y:Math.min(z,ee)-6,textAnchor:"middle",fill:"#000000",fontWeight:"bold",fontSize:"10",children:"OMISSÃO"})]}),h.jsx("circle",{cx:q,cy:z,r:Z?6:4.5,fill:"#EF4444",stroke:"#FFFFFF",strokeWidth:"2"}),h.jsx("circle",{cx:q,cy:ee,r:Z?5:4,fill:"#0099FF",stroke:"#FFFFFF",strokeWidth:"1.5"}),h.jsx("text",{x:q,y:D-I.bottom+20,textAnchor:"middle",fill:Z?"#38BDF8":"#8892B0",fontWeight:Z?"bold":"normal",fontSize:"11",children:F.dia})]},W)})]})}),h.jsxs("div",{className:"mt-3.5 p-3 bg-[#060F1E] border border-[#1E3A5F] text-xs font-mono text-[#8892B0]",children:[h.jsx("strong",{className:"text-white",children:"Interpretação Clínica:"}),' O "Fator Omissão" ocorre sistematicamente em astronautas experientes que tendem a subestimar ou esconder o cansaço para evitar cancelamento de caminhadas espaciais (EVA). O algoritmo do Orbit-IQ detecta a disparidade instantaneamente pela degradação neuromotora de digitação.']})]}),h.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[h.jsxs("div",{className:"bg-[#0F253E] border border-[#1E3A5F] p-4 md:p-5 font-mono",children:[h.jsxs("div",{className:"flex items-center justify-between pb-2.5 mb-3 border-b border-[#1E3A5F]",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Mb,{className:"w-4 h-4 text-[#F59E0B]"}),h.jsx("span",{className:"font-bold text-sm md:text-base text-white tracking-wider",children:"AUDITORIA DE INCONSISTÊNCIAS"})]}),h.jsx("span",{className:"text-xs text-[#F59E0B] font-bold",children:"FATOR OMISSÃO"})]}),h.jsxs("div",{className:"space-y-2.5 text-xs",children:[h.jsxs("div",{className:"p-3 bg-[#060F1E] border border-[#F59E0B]/50",children:[h.jsxs("div",{className:"flex justify-between items-center text-xs text-[#8892B0] mb-1.5",children:[h.jsx("span",{className:"text-[#F59E0B] font-bold",children:"SOL 140 // DETECÇÃO CRÍTICA"}),h.jsx("span",{children:"MET 140:14:22"})]}),h.jsx("div",{className:"text-white font-medium mb-1 text-sm",children:'Tripulante reportou "ÓTIMO" (20% subjetivo).'}),h.jsx("div",{className:"text-[#EF4444] text-xs leading-relaxed",children:"Biomarcadores mecânicos revelaram 68% de fadiga: queda de 45% em WPM e 8.2% de erros mecânicos."})]}),c&&h.jsxs("div",{className:"p-3 bg-[#251C30] border border-[#EF4444] animate-pulse",children:[h.jsxs("div",{className:"flex justify-between items-center text-xs text-[#EF4444] mb-1.5",children:[h.jsx("span",{className:"font-bold",children:"SOL 142 (AO VIVO) // ALERTA EM TEMPO REAL"}),h.jsx("span",{children:"MET 142:08:44"})]}),h.jsx("div",{className:"text-white font-medium mb-1 text-sm",children:"Fadiga em 84% com cadência reduzida para 26 WPM."}),h.jsx("div",{className:"text-[#F59E0B] text-xs leading-relaxed",children:"Nave engajou proteção autônoma. Recomendado envio imediato do protocolo circadiano."})]})]})]}),h.jsxs("div",{className:"bg-[#0F253E] border border-[#1E3A5F] p-4 md:p-5 font-mono",children:[h.jsxs("div",{className:"flex items-center justify-between pb-2.5 mb-3 border-b border-[#1E3A5F]",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(vS,{className:"w-4 h-4 text-[#38BDF8]"}),h.jsx("span",{className:"font-bold text-sm md:text-base text-white tracking-wider",children:"PROTOCOLOS DE RECUPERAÇÃO DE HOUSTON"})]}),h.jsx("span",{className:"text-xs text-[#10B981] font-semibold",children:"UPLINK ASYNC"})]}),h.jsx("div",{className:"space-y-3",children:t.map(F=>{const W=p===F.id,q=F.status==="APLICADO_A_BORDO";return h.jsxs("div",{className:"p-3 bg-[#060F1E] border border-[#1E3A5F] text-xs font-mono",children:[h.jsxs("div",{className:"flex items-start justify-between gap-2 mb-1.5",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"text-[#38BDF8] font-bold text-xs",children:F.codigo}),h.jsxs("span",{className:"text-xs px-1.5 py-0.5 bg-[#1E3A5F] text-white",children:[F.periodoDescansoMin,"m repouso"]})]}),h.jsx("div",{className:"font-bold text-white text-xs md:text-sm mt-1",children:F.nome})]}),h.jsx("button",{onClick:()=>M(F.id),disabled:W||q,className:`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold border transition-all shrink-0 ${q?"bg-[#10B981]/20 border-[#10B981] text-[#10B981]":W?"bg-[#F59E0B]/20 border-[#F59E0B] text-[#F59E0B] animate-pulse":"bg-[#0099FF] hover:bg-[#0080dd] text-white border-[#0099FF]"}`,children:q?h.jsxs(h.Fragment,{children:[h.jsx(R_,{className:"w-3.5 h-3.5"})," APLICADO"]}):W?h.jsxs(h.Fragment,{children:[h.jsx(Cu,{className:"w-3.5 h-3.5 animate-spin"})," ENVIANDO..."]}):h.jsxs(h.Fragment,{children:[h.jsx(iS,{className:"w-3.5 h-3.5"})," TRANSMITIR"]})})]}),h.jsx("p",{className:"text-xs text-[#8892B0] leading-relaxed mb-2",children:F.descricao}),h.jsxs("div",{className:"flex items-center justify-between text-xs text-[#8892B0] border-t border-[#1E3A5F]/50 pt-1.5",children:[h.jsxs("span",{children:["CORTE AZUL: -",F.reducaoEspectroAzul,"%"]}),h.jsxs("span",{children:["TEMP: ",F.temperaturaLuzK,"K"]})]})]},F.id)})})]})]})]})]})},rN=()=>{const{astronautas:o,tarefas:t,modoContencaoAtivo:i,aprovarAjusteTarefa:r,reverterAdiantamento:c}=Wa(),f=t.filter(m=>m.status==="ADIADA_POR_FADIGA"),d=Math.round(o.reduce((m,g)=>m+g.indiceFadiga,0)/o.length);return h.jsxs("div",{className:"space-y-4 font-mono",children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-[#1E3A5F] pb-2.5 text-xs md:text-sm",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(O_,{className:"w-4 h-4 text-[#38BDF8]"}),h.jsx("span",{className:"text-[#38BDF8] font-bold",children:"COORDENAÇÃO ESTRATÉGICA DE VOO:"}),h.jsx("span",{className:"text-white",children:"NASA MCC-HOUSTON // CAPCOM & FLIGHT DIRECTOR DESK"})]}),h.jsxs("div",{className:"flex items-center gap-2 text-[#8892B0]",children:[h.jsxs("span",{children:["EXPEDIÇÃO: ",h.jsx("strong",{className:"text-white",children:"EXP-74 CORE"})]}),h.jsx("span",{children:"|"}),h.jsxs("span",{children:["JANELA ORBITAL: ",h.jsx("strong",{className:"text-[#10B981]",children:"APOLLO/ARTEMIS COMPLIANT"})]})]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-xs",children:[h.jsxs("div",{className:"bg-[#0F253E] border border-[#1E3A5F] p-4",children:[h.jsxs("div",{className:"text-xs text-[#8892B0] mb-1.5 flex items-center justify-between font-semibold",children:[h.jsx("span",{children:"RISCO MÉDIO DA TRIPULAÇÃO"}),h.jsx(Mv,{className:"w-4 h-4 text-[#38BDF8]"})]}),h.jsxs("div",{className:"flex items-baseline gap-2",children:[h.jsxs("span",{className:`text-3xl font-bold ${d>=60?"text-[#EF4444]":d>=40?"text-[#F59E0B]":"text-white"}`,children:[d,"%"]}),h.jsx("span",{className:"text-xs text-[#8892B0]",children:"ÍNDICE COGNITIVO"})]}),h.jsxs("div",{className:"text-xs text-[#8892B0] mt-1.5",children:["Status: ",h.jsx("span",{className:i?"text-[#EF4444] font-bold":"text-[#10B981] font-semibold",children:i?"CONTENÇÃO CRÍTICA":"NOMINAL SEGURO"})]})]}),h.jsxs("div",{className:"bg-[#0F253E] border border-[#1E3A5F] p-4",children:[h.jsxs("div",{className:"text-xs text-[#8892B0] mb-1.5 flex items-center justify-between font-semibold",children:[h.jsx("span",{children:"TAREFAS ADIADAS PELA IA"}),h.jsx(Gu,{className:"w-4 h-4 text-[#F59E0B]"})]}),h.jsxs("div",{className:"text-3xl font-bold text-white",children:[f.length," EM ESPERA"]}),h.jsx("div",{className:"text-xs text-[#8892B0] mt-1.5",children:"Ações de alto risco bloqueadas"})]}),h.jsxs("div",{className:"bg-[#0F253E] border border-[#1E3A5F] p-4",children:[h.jsxs("div",{className:"text-xs text-[#8892B0] mb-1.5 flex items-center justify-between font-semibold",children:[h.jsx("span",{children:"DISPONIBILIDADE OPERACIONAL"}),h.jsx(Pb,{className:"w-4 h-4 text-[#10B981]"})]}),h.jsxs("div",{className:"text-3xl font-bold text-[#10B981]",children:[o.filter(m=>m.indiceFadiga<55).length," / ",o.length," TRIPULANTES"]}),h.jsx("div",{className:"text-xs text-[#8892B0] mt-1.5",children:"Aptos para tarefas críticas de propulsão"})]}),h.jsxs("div",{className:"bg-[#0F253E] border border-[#1E3A5F] p-4",children:[h.jsxs("div",{className:"text-xs text-[#8892B0] mb-1.5 flex items-center justify-between font-semibold",children:[h.jsx("span",{children:"AUTORIDADE DE COMANDO"}),h.jsx(Tb,{className:"w-4 h-4 text-[#38BDF8]"})]}),h.jsx("div",{className:"text-3xl font-bold text-white",children:i?"NAVE AUTÔNOMA":"CDR-1 PRIMÁRIO"}),h.jsx("div",{className:"text-xs text-[#8892B0] mt-1.5",children:i?"Fail-Safe Circadiano Ativo":"Comandos manuais habilitados"})]})]}),h.jsxs("div",{className:"bg-[#0F253E] border border-[#1E3A5F] p-4 md:p-5",children:[h.jsxs("div",{className:"flex items-center justify-between pb-2.5 mb-3 border-b border-[#1E3A5F]",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Mv,{className:"w-4 h-4 text-[#38BDF8]"}),h.jsx("span",{className:"font-bold text-sm md:text-base text-white tracking-wider",children:"MATRIZ CONSOLIDADA DE PRONTIDÃO DA TRIPULAÇÃO"})]}),h.jsx("span",{className:"text-xs text-[#8892B0]",children:"SISTEMA ORBIT-IQ // SENSORLESS FUSION"})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3.5",children:o.map(m=>{const g=m.indiceFadiga>=75,p=m.indiceFadiga>=45&&!g;return h.jsxs("div",{className:`p-3.5 border transition-colors ${g?"bg-[#18121E] border-[#EF4444]":p?"bg-[#060F1E] border-[#F59E0B]":"bg-[#060F1E] border-[#1E3A5F]"}`,children:[h.jsxs("div",{className:"flex items-start justify-between gap-1 mb-2.5",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"font-bold text-white text-base",children:m.nome}),h.jsx("span",{className:"text-xs px-1.5 py-0.5 bg-[#1E3A5F] text-[#38BDF8] font-bold",children:m.indicativo})]}),h.jsx("div",{className:"text-xs text-[#8892B0] mt-0.5",children:m.cargo})]}),h.jsx("span",{className:`text-xs px-2.5 py-1 font-bold border ${g?"bg-[#EF4444]/20 border-[#EF4444] text-[#EF4444]":p?"bg-[#F59E0B]/20 border-[#F59E0B] text-[#F59E0B]":"bg-[#10B981]/20 border-[#10B981] text-[#10B981]"}`,children:m.statusOperacional})]}),h.jsxs("div",{className:"space-y-1.5 mb-2.5",children:[h.jsxs("div",{className:"flex justify-between text-xs",children:[h.jsx("span",{className:"text-[#8892B0]",children:"ÍNDICE DE FADIGA:"}),h.jsxs("strong",{className:g?"text-[#EF4444]":p?"text-[#F59E0B]":"text-white",children:[m.indiceFadiga,"%"]})]}),h.jsx("div",{className:"w-full bg-[#030712] h-2 border border-[#1E3A5F]/50",children:h.jsx("div",{className:`h-full ${g?"bg-[#EF4444]":p?"bg-[#F59E0B]":"bg-[#0099FF]"}`,style:{width:`${Math.min(100,Math.max(5,m.indiceFadiga))}%`}})})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-1.5 text-xs bg-[#030712] p-2 border border-[#1E3A5F]/50 mb-2.5",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[#8892B0]",children:"DIGITAÇÃO:"})," ",h.jsxs("strong",{className:"text-white",children:[m.wpm," WPM"]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[#8892B0]",children:"VIGÍLIA:"})," ",h.jsxs("strong",{className:"text-white",children:[m.horasVigilia,"h"]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[#8892B0]",children:"AUTOAVAL.:"})," ",h.jsx("strong",{className:"text-white",children:m.autoavaliacao})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[#8892B0]",children:"ERROS:"})," ",h.jsxs("strong",{className:m.taxaErro>5?"text-[#EF4444]":"text-white",children:[m.taxaErro,"%"]})]})]}),h.jsxs("div",{className:"text-xs text-[#8892B0] truncate",children:["TAREFA: ",h.jsx("span",{className:"text-slate-200",children:m.tarefaAtiva})]})]},m.id)})})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4",children:[h.jsxs("div",{className:"lg:col-span-7 bg-[#0F253E] border border-[#1E3A5F] p-4 md:p-5",children:[h.jsxs("div",{className:"flex items-center justify-between pb-2.5 mb-3 border-b border-[#1E3A5F]",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(xb,{className:"w-4 h-4 text-[#38BDF8]"}),h.jsx("span",{className:"font-bold text-sm md:text-base text-white tracking-wider",children:"CRONOGRAMA DE OPERAÇÕES ORBITAIS (SOL 142)"})]}),h.jsx("span",{className:"text-xs text-[#8892B0]",children:"IMPACTO CIRCADIANO"})]}),h.jsx("div",{className:"space-y-2.5 text-xs",children:t.map(m=>{const g=m.status==="ADIADA_POR_FADIGA",p=m.status==="CONCLUIDA",_=m.status==="EM_ANDAMENTO";return h.jsxs("div",{className:`p-3 border transition-all ${g?"bg-[#18121E] border-[#EF4444]":_?"bg-[#060F1E] border-[#0099FF]":"bg-[#060F1E] border-[#1E3A5F]"}`,children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-1 mb-1.5",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:`text-xs px-2 py-0.5 font-bold ${m.criticidade==="CRITICA"?"bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]":"bg-[#0099FF]/20 text-[#38BDF8] border border-[#0099FF]"}`,children:m.criticidade}),h.jsx("span",{className:"text-white font-bold text-xs md:text-sm",children:m.codigo}),h.jsx("span",{className:"text-[#8892B0] text-xs",children:m.modulo})]}),h.jsx("span",{className:`text-xs px-2.5 py-0.5 font-bold ${g?"bg-[#EF4444] text-white":p?"bg-[#10B981]/20 text-[#10B981]":"bg-[#0099FF]/20 text-[#38BDF8]"}`,children:m.status.replace(/_/g," ")})]}),h.jsx("div",{className:"text-slate-200 text-xs md:text-sm font-medium mb-1.5",children:m.titulo}),h.jsxs("div",{className:"flex flex-wrap items-center justify-between text-xs text-[#8892B0]",children:[h.jsxs("span",{children:["RESPONSÁVEL: ",h.jsx("strong",{className:"text-white",children:m.responsavelNome})]}),h.jsxs("span",{children:["JANELA ATRIBUÍDA: ",h.jsx("strong",{className:"text-white",children:m.timestamp})]})]}),g&&h.jsx("div",{className:"mt-2.5 p-2 bg-[#EF4444]/20 border border-[#EF4444] text-xs text-[#EF4444] flex items-center justify-between",children:h.jsxs("span",{children:[h.jsx("strong",{children:"ADIAMENTO AUTÔNOMO:"})," ",m.motivoAdiantamento]})})]},m.id)})})]}),h.jsxs("div",{className:"lg:col-span-5 bg-[#0F253E] border border-[#1E3A5F] p-4 md:p-5",children:[h.jsxs("div",{className:"flex items-center justify-between pb-2.5 mb-3 border-b border-[#1E3A5F]",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(oS,{className:"w-4 h-4 text-[#F59E0B]"}),h.jsx("span",{className:"font-bold text-sm md:text-base text-white tracking-wider",children:"AUDITORIA DE ADIAMENTOS PELA IA"})]}),h.jsx("span",{className:"text-xs text-[#F59E0B] font-bold",children:"MCC-H APROVAL"})]}),f.length===0?h.jsxs("div",{className:"p-8 bg-[#060F1E] border border-[#1E3A5F] text-center text-xs md:text-sm text-[#8892B0]",children:[h.jsx(R_,{className:"w-7 h-7 text-[#10B981] mx-auto mb-2.5"}),"Nenhuma tarefa adiada por sobrecarga circadiana no momento.",h.jsx("div",{className:"text-xs mt-1.5 text-[#8892B0]",children:"O cronograma da missão está operando em conformidade nominal."})]}):h.jsx("div",{className:"space-y-3.5",children:f.map(m=>h.jsxs("div",{className:"p-3.5 bg-[#18121E] border border-[#EF4444] text-xs space-y-2.5",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:"text-[#EF4444] font-bold",children:"ALERTA DE SEGURANÇA"}),h.jsx("span",{className:"text-[#8892B0]",children:m.codigo})]}),h.jsx("div",{className:"font-bold text-white text-sm leading-tight",children:m.titulo}),h.jsx("div",{className:"text-xs text-[#F59E0B] leading-relaxed",children:m.motivoAdiantamento}),h.jsxs("div",{className:"pt-2.5 border-t border-[#1E3A5F] flex items-center justify-between gap-2.5",children:[h.jsx("button",{onClick:()=>r(m.id,"MET 142:14:00 (PÓS-DESCANSO)"),className:"px-3 py-2 bg-[#10B981] hover:bg-[#0da070] text-black font-bold text-xs transition-colors flex-1",children:"APROVAR NOVO HORÁRIO (14:00)"}),h.jsx("button",{onClick:()=>c(m.id),className:"px-3 py-2 bg-[#0F253E] hover:bg-[#1E3A5F] text-slate-200 border border-[#1E3A5F] font-bold text-xs transition-colors",title:"Forçar execução imediata por autoridade de Houston",children:"OVERRIDE MANUAL"})]})]},m.id))}),h.jsxs("div",{className:"mt-4 p-2.5 bg-[#060F1E] border border-[#1E3A5F] text-xs text-[#8892B0]",children:[h.jsx("strong",{className:"text-white",children:"Protocolo de Segurança NASA:"})," A Coordenação de Voo pode ratificar o reagendamento sugerido pelo Orbit-IQ Core Sync ou assumir o risco operacional por meio de Override de CAPCOM com telemetria restrita."]})]})]})]})},oN=()=>{const{logs:o}=Wa(),[t,i]=qe.useState("ALL"),r=o.filter(m=>t==="ALL"?!0:t==="CRITICAL"?m.nivel==="CRITICAL"||m.tipo==="OVERRIDE_TRIGGER":t==="KEYSTROKE"?m.tipo==="KEYSTROKE":t==="UPLINK"?m.tipo==="UPLINK_PACKET":!0),c=()=>{const m=JSON.stringify(o,null,2),g=new Blob([m],{type:"application/json"}),p=URL.createObjectURL(g),_=document.createElement("a");_.href=p,_.download=`orbit-iq-telemetry-${Date.now()}.json`,_.click(),URL.revokeObjectURL(p)},f=m=>{switch(m){case"CRITICAL":return"text-[#EF4444] font-bold";case"WARN":return"text-[#F59E0B] font-bold";case"SUCCESS":return"text-[#10B981] font-bold";default:return"text-[#38BDF8]"}},d=m=>{switch(m){case"ONBOARD_EDGE":return"text-[#38BDF8] bg-[#0F253E] border border-[#1E3A5F]";case"HOUSTON_GROUND":return"text-[#F59E0B] bg-[#251C30] border border-[#F59E0B]/30";case"SENSORLESS_HYBRID":return"text-[#10B981] bg-[#060F1E] border border-[#10B981]/30";default:return"text-slate-300"}};return h.jsxs("div",{className:"w-full bg-[#030712] border border-[#1E3A5F] font-mono select-text",children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between px-3.5 py-2 bg-[#0A192F] border-b border-[#1E3A5F] gap-2",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(cS,{className:"w-4 h-4 text-[#38BDF8]"}),h.jsx("span",{className:"font-bold text-white text-xs md:text-sm tracking-wider",children:"SYSTEM EVENT STREAM // REAL-TIME CROSS-VALIDATION BUS"}),h.jsxs("span",{className:"text-xs text-[#8892B0] hidden sm:inline",children:["(",r.length," eventos gravados)"]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("div",{className:"flex items-center gap-1 bg-[#060F1E] border border-[#1E3A5F] p-0.5",children:[h.jsx(bb,{className:"w-3.5 h-3.5 text-[#8892B0] ml-1"}),["ALL","CRITICAL","KEYSTROKE","UPLINK"].map(m=>h.jsx("button",{onClick:()=>i(m),className:`px-2 py-0.5 text-xs font-bold transition-colors ${t===m?"bg-[#0099FF] text-white":"text-[#8892B0] hover:text-white"}`,children:m},m))]}),h.jsxs("button",{onClick:c,title:"Exportar telemetria em formato JSON",className:"flex items-center gap-1.5 px-2.5 py-1 bg-[#060F1E] hover:bg-[#1E3A5F] border border-[#1E3A5F] text-[#8892B0] hover:text-white text-xs transition-colors",children:[h.jsx(Sb,{className:"w-3.5 h-3.5"}),h.jsx("span",{className:"hidden md:inline",children:"JSON"})]})]})]}),h.jsx("div",{className:"p-3 max-h-52 overflow-y-auto space-y-1.5 leading-relaxed scrollbar-thin",children:r.length===0?h.jsx("div",{className:"text-[#8892B0] text-xs py-2 text-center",children:"Nenhum evento registrado com o filtro selecionado."}):r.map(m=>h.jsxs("div",{className:"flex items-start gap-2.5 text-xs hover:bg-[#060F1E]/60 py-1 px-1.5",children:[h.jsx("span",{className:"text-[#8892B0] shrink-0 font-mono text-xs",children:m.timestamp}),h.jsx("span",{className:`text-xs px-1.5 py-0.5 shrink-0 ${d(m.origem)}`,children:m.origem}),h.jsxs("span",{className:`shrink-0 text-xs ${f(m.nivel)}`,children:["[",m.nivel,"]"]}),h.jsxs("div",{className:"text-slate-200",children:[h.jsx("span",{className:"text-white font-medium",children:m.mensagem}),m.detalhe&&h.jsxs("span",{className:"text-[#8892B0] ml-2 text-xs",children:["-- ",m.detalhe]})]})]},m.id))})]})},lN=()=>{const{isEdgeMode:o,escalaZoom:t,setEscalaZoom:i}=Wa();return h.jsx("footer",{className:"w-full bg-[#060F1E] border-t border-[#1E3A5F] px-4 py-2.5 font-mono text-xs text-[#8892B0] select-none",children:h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsxs("div",{className:"flex items-center gap-2 px-2.5 py-1 bg-[#0A192F] border border-[#1E3A5F] text-slate-200",children:[h.jsx("span",{className:`w-2 h-2 rounded-full ${o?"bg-[#38BDF8]":"bg-[#10B981]"}`}),h.jsx("span",{className:"font-bold tracking-wider text-xs",children:o?"ENGINE MODE: LOCAL EDGE SYNC ACTIVE (OFFLINE RESILIENT)":"ENGINE MODE: DUAL-HYBRID API CONNECTED (PHP/NODE)"})]}),h.jsx("span",{className:"hidden sm:inline text-[#1E3A5F]",children:"|"}),h.jsx("span",{className:"hidden sm:inline font-semibold",children:"ZERO-FAILOVER BUS"})]}),h.jsxs("div",{className:"hidden lg:flex items-center gap-4 text-xs",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx(jm,{className:"w-3.5 h-3.5 text-[#38BDF8]"}),h.jsx("span",{children:"HEURISTIC: SENSORLESS MOTOR ANALYSIS"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx(Cu,{className:"w-3.5 h-3.5 text-[#10B981]"}),h.jsx("span",{children:"SYNC FREQUENCY: 100Hz"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx(sS,{className:"w-3.5 h-3.5 text-[#38BDF8]"}),h.jsx("span",{children:"CIRCADIAN FAIL-SAFE: ACTIVE"})]})]}),h.jsxs("div",{className:"flex items-center gap-3 text-right",children:[h.jsxs("div",{className:"flex items-center gap-1 text-[#38BDF8]",children:[h.jsx(Hb,{className:"w-3.5 h-3.5"}),h.jsxs("span",{children:["ESCALA: ",Math.round(t*100),"%"]})]}),h.jsx("span",{className:"text-[#1E3A5F]",children:"|"}),h.jsx("span",{className:"text-white font-bold",children:"ORBIT-IQ: CORE SYNC"}),h.jsx("span",{className:"text-[#1E3A5F]",children:"|"}),h.jsx("span",{children:"NASA SPACE APPS CHALLENGE"})]})]})})},cN=()=>{const{perfilAtivo:o,modoContencaoAtivo:t,escalaZoom:i}=Wa();return h.jsxs("div",{style:{zoom:i},className:`min-h-screen flex flex-col transition-colors duration-500 ${t?"bg-[#18121E] text-slate-100 bg-grid-alert":"bg-[#060F1E] text-slate-100 bg-grid-aerospace"}`,children:[h.jsx(Gb,{}),h.jsxs("main",{className:"flex-1 p-3 md:p-5 max-w-[1720px] w-full mx-auto space-y-4",children:[o==="crew"&&h.jsx(aN,{}),o==="medical"&&h.jsx(sN,{}),o==="capcom"&&h.jsx(rN,{}),h.jsx("div",{className:"pt-2",children:h.jsx(oN,{})})]}),h.jsx(lN,{})]})};function uN(){return h.jsx(rb,{children:h.jsx(cN,{})})}nb.createRoot(document.getElementById("root")).render(h.jsx(Y1.StrictMode,{children:h.jsx(uN,{})}));
