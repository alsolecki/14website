function tv(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function nv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wp={exports:{}},fl={},Xp={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var To=Symbol.for("react.element"),iv=Symbol.for("react.portal"),rv=Symbol.for("react.fragment"),sv=Symbol.for("react.strict_mode"),ov=Symbol.for("react.profiler"),av=Symbol.for("react.provider"),lv=Symbol.for("react.context"),cv=Symbol.for("react.forward_ref"),uv=Symbol.for("react.suspense"),dv=Symbol.for("react.memo"),fv=Symbol.for("react.lazy"),af=Symbol.iterator;function hv(t){return t===null||typeof t!="object"?null:(t=af&&t[af]||t["@@iterator"],typeof t=="function"?t:null)}var jp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yp=Object.assign,qp={};function ys(t,e,n){this.props=t,this.context=e,this.refs=qp,this.updater=n||jp}ys.prototype.isReactComponent={};ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $p(){}$p.prototype=ys.prototype;function Zu(t,e,n){this.props=t,this.context=e,this.refs=qp,this.updater=n||jp}var Ju=Zu.prototype=new $p;Ju.constructor=Zu;Yp(Ju,ys.prototype);Ju.isPureReactComponent=!0;var lf=Array.isArray,Kp=Object.prototype.hasOwnProperty,Qu={current:null},Zp={key:!0,ref:!0,__self:!0,__source:!0};function Jp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Kp.call(e,i)&&!Zp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:To,type:t,key:s,ref:o,props:r,_owner:Qu.current}}function pv(t,e){return{$$typeof:To,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ed(t){return typeof t=="object"&&t!==null&&t.$$typeof===To}function mv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cf=/\/+/g;function kl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mv(""+t.key):e.toString(36)}function ba(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case To:case iv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+kl(o,0):i,lf(r)?(n="",t!=null&&(n=t.replace(cf,"$&/")+"/"),ba(r,e,n,"",function(c){return c})):r!=null&&(ed(r)&&(r=pv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(cf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",lf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+kl(s,a);o+=ba(s,e,n,l,r)}else if(l=hv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+kl(s,a++),o+=ba(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Oo(t,e,n){if(t==null)return t;var i=[],r=0;return ba(t,i,"","",function(s){return e.call(n,s,r++)}),i}function gv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Vt={current:null},Ta={transition:null},vv={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:Ta,ReactCurrentOwner:Qu};ze.Children={map:Oo,forEach:function(t,e,n){Oo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oo(t,function(){e++}),e},toArray:function(t){return Oo(t,function(e){return e})||[]},only:function(t){if(!ed(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=ys;ze.Fragment=rv;ze.Profiler=ov;ze.PureComponent=Zu;ze.StrictMode=sv;ze.Suspense=uv;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vv;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Yp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Kp.call(e,l)&&!Zp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:To,type:t.type,key:r,ref:s,props:i,_owner:o}};ze.createContext=function(t){return t={$$typeof:lv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:av,_context:t},t.Consumer=t};ze.createElement=Jp;ze.createFactory=function(t){var e=Jp.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:cv,render:t}};ze.isValidElement=ed;ze.lazy=function(t){return{$$typeof:fv,_payload:{_status:-1,_result:t},_init:gv}};ze.memo=function(t,e){return{$$typeof:dv,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=Ta.transition;Ta.transition={};try{t()}finally{Ta.transition=e}};ze.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ze.useCallback=function(t,e){return Vt.current.useCallback(t,e)};ze.useContext=function(t){return Vt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return Vt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return Vt.current.useEffect(t,e)};ze.useId=function(){return Vt.current.useId()};ze.useImperativeHandle=function(t,e,n){return Vt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return Vt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return Vt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return Vt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return Vt.current.useReducer(t,e,n)};ze.useRef=function(t){return Vt.current.useRef(t)};ze.useState=function(t){return Vt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return Vt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return Vt.current.useTransition()};ze.version="18.2.0";Xp.exports=ze;var ce=Xp.exports;const Qp=nv(ce),_v=tv({__proto__:null,default:Qp},[ce]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv=ce,xv=Symbol.for("react.element"),Sv=Symbol.for("react.fragment"),Mv=Object.prototype.hasOwnProperty,Ev=yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bv={key:!0,ref:!0,__self:!0,__source:!0};function em(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Mv.call(e,i)&&!bv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:xv,type:t,key:s,ref:o,props:r,_owner:Ev.current}}fl.Fragment=Sv;fl.jsx=em;fl.jsxs=em;Wp.exports=fl;var K=Wp.exports,Wc={},tm={exports:{}},un={},nm={exports:{}},im={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,V){var z=L.length;L.push(V);e:for(;0<z;){var I=z-1>>>1,O=L[I];if(0<r(O,V))L[I]=V,L[z]=O,z=I;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var V=L[0],z=L.pop();if(z!==V){L[0]=z;e:for(var I=0,O=L.length,ae=O>>>1;I<ae;){var se=2*(I+1)-1,de=L[se],ge=se+1,Me=L[ge];if(0>r(de,z))ge<O&&0>r(Me,de)?(L[I]=Me,L[ge]=z,I=ge):(L[I]=de,L[se]=z,I=se);else if(ge<O&&0>r(Me,z))L[I]=Me,L[ge]=z,I=ge;else break e}}return V}function r(L,V){var z=L.sortIndex-V.sortIndex;return z!==0?z:L.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,m=!1,_=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var V=n(c);V!==null;){if(V.callback===null)i(c);else if(V.startTime<=L)i(c),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(c)}}function x(L){if(y=!1,v(L),!_)if(n(l)!==null)_=!0,Z(E);else{var V=n(c);V!==null&&q(x,V.startTime-L)}}function E(L,V){_=!1,y&&(y=!1,u(P),P=-1),m=!0;var z=f;try{for(v(V),h=n(l);h!==null&&(!(h.expirationTime>V)||L&&!$());){var I=h.callback;if(typeof I=="function"){h.callback=null,f=h.priorityLevel;var O=I(h.expirationTime<=V);V=t.unstable_now(),typeof O=="function"?h.callback=O:h===n(l)&&i(l),v(V)}else i(l);h=n(l)}if(h!==null)var ae=!0;else{var se=n(c);se!==null&&q(x,se.startTime-V),ae=!1}return ae}finally{h=null,f=z,m=!1}}var R=!1,A=null,P=-1,M=5,T=-1;function $(){return!(t.unstable_now()-T<M)}function Q(){if(A!==null){var L=t.unstable_now();T=L;var V=!0;try{V=A(!0,L)}finally{V?k():(R=!1,A=null)}}else R=!1}var k;if(typeof g=="function")k=function(){g(Q)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Y=j.port2;j.port1.onmessage=Q,k=function(){Y.postMessage(null)}}else k=function(){p(Q,0)};function Z(L){A=L,R||(R=!0,k())}function q(L,V){P=p(function(){L(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,Z(E))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var z=f;f=V;try{return L()}finally{f=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,V){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var z=f;f=L;try{return V()}finally{f=z}},t.unstable_scheduleCallback=function(L,V,z){var I=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?I+z:I):z=I,L){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=z+O,L={id:d++,callback:V,priorityLevel:L,startTime:z,expirationTime:O,sortIndex:-1},z>I?(L.sortIndex=z,e(c,L),n(l)===null&&L===n(c)&&(y?(u(P),P=-1):y=!0,q(x,z-I))):(L.sortIndex=O,e(l,L),_||m||(_=!0,Z(E))),L},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(L){var V=f;return function(){var z=f;f=V;try{return L.apply(this,arguments)}finally{f=z}}}})(im);nm.exports=im;var Tv=nm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm=ce,cn=Tv;function J(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sm=new Set,ro={};function yr(t,e){ls(t,e),ls(t+"Capture",e)}function ls(t,e){for(ro[t]=e,t=0;t<e.length;t++)sm.add(e[t])}var li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=Object.prototype.hasOwnProperty,wv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uf={},df={};function Av(t){return Xc.call(df,t)?!0:Xc.call(uf,t)?!1:wv.test(t)?df[t]=!0:(uf[t]=!0,!1)}function Rv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Cv(t,e,n,i){if(e===null||typeof e>"u"||Rv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Rt[t]=new Wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Rt[e]=new Wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Rt[t]=new Wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Rt[t]=new Wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Rt[t]=new Wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Rt[t]=new Wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Rt[t]=new Wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Rt[t]=new Wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Rt[t]=new Wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var td=/[\-:]([a-z])/g;function nd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(td,nd);Rt[e]=new Wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(td,nd);Rt[e]=new Wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(td,nd);Rt[e]=new Wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Rt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Rt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function id(t,e,n,i){var r=Rt.hasOwnProperty(e)?Rt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Cv(e,n,r,i)&&(n=null),i||r===null?Av(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var fi=rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),Br=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),rd=Symbol.for("react.strict_mode"),jc=Symbol.for("react.profiler"),om=Symbol.for("react.provider"),am=Symbol.for("react.context"),sd=Symbol.for("react.forward_ref"),Yc=Symbol.for("react.suspense"),qc=Symbol.for("react.suspense_list"),od=Symbol.for("react.memo"),yi=Symbol.for("react.lazy"),lm=Symbol.for("react.offscreen"),ff=Symbol.iterator;function Rs(t){return t===null||typeof t!="object"?null:(t=ff&&t[ff]||t["@@iterator"],typeof t=="function"?t:null)}var st=Object.assign,zl;function Gs(t){if(zl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zl=e&&e[1]||""}return`
`+zl+t}var Bl=!1;function Hl(t,e){if(!t||Bl)return"";Bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Bl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Gs(t):""}function Lv(t){switch(t.tag){case 5:return Gs(t.type);case 16:return Gs("Lazy");case 13:return Gs("Suspense");case 19:return Gs("SuspenseList");case 0:case 2:case 15:return t=Hl(t.type,!1),t;case 11:return t=Hl(t.type.render,!1),t;case 1:return t=Hl(t.type,!0),t;default:return""}}function $c(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hr:return"Fragment";case Br:return"Portal";case jc:return"Profiler";case rd:return"StrictMode";case Yc:return"Suspense";case qc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case am:return(t.displayName||"Context")+".Consumer";case om:return(t._context.displayName||"Context")+".Provider";case sd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case od:return e=t.displayName||null,e!==null?e:$c(t.type)||"Memo";case yi:e=t._payload,t=t._init;try{return $c(t(e))}catch{}}return null}function Pv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $c(e);case 8:return e===rd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Bi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Uv(t){var e=cm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zo(t){t._valueTracker||(t._valueTracker=Uv(t))}function um(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=cm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Oa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kc(t,e){var n=e.checked;return st({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Bi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dm(t,e){e=e.checked,e!=null&&id(t,"checked",e,!1)}function Zc(t,e){dm(t,e);var n=Bi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Jc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Jc(t,e.type,Bi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Jc(t,e,n){(e!=="number"||Oa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vs=Array.isArray;function es(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Bi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Qc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return st({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(J(92));if(Vs(n)){if(1<n.length)throw Error(J(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Bi(n)}}function fm(t,e){var n=Bi(e.value),i=Bi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function gf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Bo,pm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Bo=Bo||document.createElement("div"),Bo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Bo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function so(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dv=["Webkit","ms","Moz","O"];Object.keys(Ys).forEach(function(t){Dv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ys[e]=Ys[t]})});function mm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ys.hasOwnProperty(t)&&Ys[t]?(""+e).trim():e+"px"}function gm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=mm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Iv=st({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tu(t,e){if(e){if(Iv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function nu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iu=null;function ad(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ru=null,ts=null,ns=null;function vf(t){if(t=Ro(t)){if(typeof ru!="function")throw Error(J(280));var e=t.stateNode;e&&(e=vl(e),ru(t.stateNode,t.type,e))}}function vm(t){ts?ns?ns.push(t):ns=[t]:ts=t}function _m(){if(ts){var t=ts,e=ns;if(ns=ts=null,vf(t),e)for(t=0;t<e.length;t++)vf(e[t])}}function ym(t,e){return t(e)}function xm(){}var Gl=!1;function Sm(t,e,n){if(Gl)return t(e,n);Gl=!0;try{return ym(t,e,n)}finally{Gl=!1,(ts!==null||ns!==null)&&(xm(),_m())}}function oo(t,e){var n=t.stateNode;if(n===null)return null;var i=vl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(J(231,e,typeof n));return n}var su=!1;if(li)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){su=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{su=!1}function Nv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var qs=!1,ka=null,za=!1,ou=null,Fv={onError:function(t){qs=!0,ka=t}};function Ov(t,e,n,i,r,s,o,a,l){qs=!1,ka=null,Nv.apply(Fv,arguments)}function kv(t,e,n,i,r,s,o,a,l){if(Ov.apply(this,arguments),qs){if(qs){var c=ka;qs=!1,ka=null}else throw Error(J(198));za||(za=!0,ou=c)}}function xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Mm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _f(t){if(xr(t)!==t)throw Error(J(188))}function zv(t){var e=t.alternate;if(!e){if(e=xr(t),e===null)throw Error(J(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return _f(r),t;if(s===i)return _f(r),e;s=s.sibling}throw Error(J(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?t:e}function Em(t){return t=zv(t),t!==null?bm(t):null}function bm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bm(t);if(e!==null)return e;t=t.sibling}return null}var Tm=cn.unstable_scheduleCallback,yf=cn.unstable_cancelCallback,Bv=cn.unstable_shouldYield,Hv=cn.unstable_requestPaint,ct=cn.unstable_now,Gv=cn.unstable_getCurrentPriorityLevel,ld=cn.unstable_ImmediatePriority,wm=cn.unstable_UserBlockingPriority,Ba=cn.unstable_NormalPriority,Vv=cn.unstable_LowPriority,Am=cn.unstable_IdlePriority,hl=null,Gn=null;function Wv(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(hl,t,void 0,(t.current.flags&128)===128)}catch{}}var Dn=Math.clz32?Math.clz32:Yv,Xv=Math.log,jv=Math.LN2;function Yv(t){return t>>>=0,t===0?32:31-(Xv(t)/jv|0)|0}var Ho=64,Go=4194304;function Ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ha(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ws(a):(s&=o,s!==0&&(i=Ws(s)))}else o=n&~r,o!==0?i=Ws(o):s!==0&&(i=Ws(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Dn(e),r=1<<n,i|=t[n],e&=~r;return i}function qv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $v(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Dn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=qv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function au(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rm(){var t=Ho;return Ho<<=1,!(Ho&4194240)&&(Ho=64),t}function Vl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dn(e),t[e]=n}function Kv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Dn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function cd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Dn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var je=0;function Cm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Lm,ud,Pm,Um,Dm,lu=!1,Vo=[],Ri=null,Ci=null,Li=null,ao=new Map,lo=new Map,Si=[],Zv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xf(t,e){switch(t){case"focusin":case"focusout":Ri=null;break;case"dragenter":case"dragleave":Ci=null;break;case"mouseover":case"mouseout":Li=null;break;case"pointerover":case"pointerout":ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(e.pointerId)}}function Ls(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ro(e),e!==null&&ud(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Jv(t,e,n,i,r){switch(e){case"focusin":return Ri=Ls(Ri,t,e,n,i,r),!0;case"dragenter":return Ci=Ls(Ci,t,e,n,i,r),!0;case"mouseover":return Li=Ls(Li,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ao.set(s,Ls(ao.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,lo.set(s,Ls(lo.get(s)||null,t,e,n,i,r)),!0}return!1}function Im(t){var e=ir(t.target);if(e!==null){var n=xr(e);if(n!==null){if(e=n.tag,e===13){if(e=Mm(n),e!==null){t.blockedOn=e,Dm(t.priority,function(){Pm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);iu=i,n.target.dispatchEvent(i),iu=null}else return e=Ro(n),e!==null&&ud(e),t.blockedOn=n,!1;e.shift()}return!0}function Sf(t,e,n){wa(t)&&n.delete(e)}function Qv(){lu=!1,Ri!==null&&wa(Ri)&&(Ri=null),Ci!==null&&wa(Ci)&&(Ci=null),Li!==null&&wa(Li)&&(Li=null),ao.forEach(Sf),lo.forEach(Sf)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,lu||(lu=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,Qv)))}function co(t){function e(r){return Ps(r,t)}if(0<Vo.length){Ps(Vo[0],t);for(var n=1;n<Vo.length;n++){var i=Vo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ri!==null&&Ps(Ri,t),Ci!==null&&Ps(Ci,t),Li!==null&&Ps(Li,t),ao.forEach(e),lo.forEach(e),n=0;n<Si.length;n++)i=Si[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Si.length&&(n=Si[0],n.blockedOn===null);)Im(n),n.blockedOn===null&&Si.shift()}var is=fi.ReactCurrentBatchConfig,Ga=!0;function e_(t,e,n,i){var r=je,s=is.transition;is.transition=null;try{je=1,dd(t,e,n,i)}finally{je=r,is.transition=s}}function t_(t,e,n,i){var r=je,s=is.transition;is.transition=null;try{je=4,dd(t,e,n,i)}finally{je=r,is.transition=s}}function dd(t,e,n,i){if(Ga){var r=cu(t,e,n,i);if(r===null)Ql(t,e,i,Va,n),xf(t,i);else if(Jv(r,t,e,n,i))i.stopPropagation();else if(xf(t,i),e&4&&-1<Zv.indexOf(t)){for(;r!==null;){var s=Ro(r);if(s!==null&&Lm(s),s=cu(t,e,n,i),s===null&&Ql(t,e,i,Va,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ql(t,e,i,null,n)}}var Va=null;function cu(t,e,n,i){if(Va=null,t=ad(i),t=ir(t),t!==null)if(e=xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Mm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Va=t,null}function Nm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gv()){case ld:return 1;case wm:return 4;case Ba:case Vv:return 16;case Am:return 536870912;default:return 16}default:return 16}}var Ei=null,fd=null,Aa=null;function Fm(){if(Aa)return Aa;var t,e=fd,n=e.length,i,r="value"in Ei?Ei.value:Ei.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Aa=r.slice(t,1<i?1-i:void 0)}function Ra(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function Mf(){return!1}function dn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wo:Mf,this.isPropagationStopped=Mf,this}return st(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),e}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=dn(xs),Ao=st({},xs,{view:0,detail:0}),n_=dn(Ao),Wl,Xl,Us,pl=st({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Us&&(Us&&t.type==="mousemove"?(Wl=t.screenX-Us.screenX,Xl=t.screenY-Us.screenY):Xl=Wl=0,Us=t),Wl)},movementY:function(t){return"movementY"in t?t.movementY:Xl}}),Ef=dn(pl),i_=st({},pl,{dataTransfer:0}),r_=dn(i_),s_=st({},Ao,{relatedTarget:0}),jl=dn(s_),o_=st({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),a_=dn(o_),l_=st({},xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),c_=dn(l_),u_=st({},xs,{data:0}),bf=dn(u_),d_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=h_[t])?!!e[t]:!1}function pd(){return p_}var m_=st({},Ao,{key:function(t){if(t.key){var e=d_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ra(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?f_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pd,charCode:function(t){return t.type==="keypress"?Ra(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ra(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),g_=dn(m_),v_=st({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tf=dn(v_),__=st({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pd}),y_=dn(__),x_=st({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),S_=dn(x_),M_=st({},pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),E_=dn(M_),b_=[9,13,27,32],md=li&&"CompositionEvent"in window,$s=null;li&&"documentMode"in document&&($s=document.documentMode);var T_=li&&"TextEvent"in window&&!$s,Om=li&&(!md||$s&&8<$s&&11>=$s),wf=String.fromCharCode(32),Af=!1;function km(t,e){switch(t){case"keyup":return b_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gr=!1;function w_(t,e){switch(t){case"compositionend":return zm(e);case"keypress":return e.which!==32?null:(Af=!0,wf);case"textInput":return t=e.data,t===wf&&Af?null:t;default:return null}}function A_(t,e){if(Gr)return t==="compositionend"||!md&&km(t,e)?(t=Fm(),Aa=fd=Ei=null,Gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Om&&e.locale!=="ko"?null:e.data;default:return null}}var R_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!R_[t.type]:e==="textarea"}function Bm(t,e,n,i){vm(i),e=Wa(e,"onChange"),0<e.length&&(n=new hd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ks=null,uo=null;function C_(t){Zm(t,0)}function ml(t){var e=Xr(t);if(um(e))return t}function L_(t,e){if(t==="change")return e}var Hm=!1;if(li){var Yl;if(li){var ql="oninput"in document;if(!ql){var Cf=document.createElement("div");Cf.setAttribute("oninput","return;"),ql=typeof Cf.oninput=="function"}Yl=ql}else Yl=!1;Hm=Yl&&(!document.documentMode||9<document.documentMode)}function Lf(){Ks&&(Ks.detachEvent("onpropertychange",Gm),uo=Ks=null)}function Gm(t){if(t.propertyName==="value"&&ml(uo)){var e=[];Bm(e,uo,t,ad(t)),Sm(C_,e)}}function P_(t,e,n){t==="focusin"?(Lf(),Ks=e,uo=n,Ks.attachEvent("onpropertychange",Gm)):t==="focusout"&&Lf()}function U_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ml(uo)}function D_(t,e){if(t==="click")return ml(e)}function I_(t,e){if(t==="input"||t==="change")return ml(e)}function N_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:N_;function fo(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Xc.call(e,r)||!Fn(t[r],e[r]))return!1}return!0}function Pf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uf(t,e){var n=Pf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pf(n)}}function Vm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wm(){for(var t=window,e=Oa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Oa(t.document)}return e}function gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function F_(t){var e=Wm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vm(n.ownerDocument.documentElement,n)){if(i!==null&&gd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Uf(n,s);var o=Uf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var O_=li&&"documentMode"in document&&11>=document.documentMode,Vr=null,uu=null,Zs=null,du=!1;function Df(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;du||Vr==null||Vr!==Oa(i)||(i=Vr,"selectionStart"in i&&gd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zs&&fo(Zs,i)||(Zs=i,i=Wa(uu,"onSelect"),0<i.length&&(e=new hd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Vr)))}function Xo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wr={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},$l={},Xm={};li&&(Xm=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function gl(t){if($l[t])return $l[t];if(!Wr[t])return t;var e=Wr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Xm)return $l[t]=e[n];return t}var jm=gl("animationend"),Ym=gl("animationiteration"),qm=gl("animationstart"),$m=gl("transitionend"),Km=new Map,If="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vi(t,e){Km.set(t,e),yr(e,[t])}for(var Kl=0;Kl<If.length;Kl++){var Zl=If[Kl],k_=Zl.toLowerCase(),z_=Zl[0].toUpperCase()+Zl.slice(1);Vi(k_,"on"+z_)}Vi(jm,"onAnimationEnd");Vi(Ym,"onAnimationIteration");Vi(qm,"onAnimationStart");Vi("dblclick","onDoubleClick");Vi("focusin","onFocus");Vi("focusout","onBlur");Vi($m,"onTransitionEnd");ls("onMouseEnter",["mouseout","mouseover"]);ls("onMouseLeave",["mouseout","mouseover"]);ls("onPointerEnter",["pointerout","pointerover"]);ls("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xs));function Nf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,kv(i,e,void 0,t),t.currentTarget=null}function Zm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Nf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Nf(r,a,c),s=l}}}if(za)throw t=ou,za=!1,ou=null,t}function Ze(t,e){var n=e[gu];n===void 0&&(n=e[gu]=new Set);var i=t+"__bubble";n.has(i)||(Jm(e,t,2,!1),n.add(i))}function Jl(t,e,n){var i=0;e&&(i|=4),Jm(n,t,i,e)}var jo="_reactListening"+Math.random().toString(36).slice(2);function ho(t){if(!t[jo]){t[jo]=!0,sm.forEach(function(n){n!=="selectionchange"&&(B_.has(n)||Jl(n,!1,t),Jl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[jo]||(e[jo]=!0,Jl("selectionchange",!1,e))}}function Jm(t,e,n,i){switch(Nm(e)){case 1:var r=e_;break;case 4:r=t_;break;default:r=dd}n=r.bind(null,e,n,t),r=void 0,!su||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ql(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ir(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Sm(function(){var c=s,d=ad(n),h=[];e:{var f=Km.get(t);if(f!==void 0){var m=hd,_=t;switch(t){case"keypress":if(Ra(n)===0)break e;case"keydown":case"keyup":m=g_;break;case"focusin":_="focus",m=jl;break;case"focusout":_="blur",m=jl;break;case"beforeblur":case"afterblur":m=jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=r_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=y_;break;case jm:case Ym:case qm:m=a_;break;case $m:m=S_;break;case"scroll":m=n_;break;case"wheel":m=E_;break;case"copy":case"cut":case"paste":m=c_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Tf}var y=(e&4)!==0,p=!y&&t==="scroll",u=y?f!==null?f+"Capture":null:f;y=[];for(var g=c,v;g!==null;){v=g;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,u!==null&&(x=oo(g,u),x!=null&&y.push(po(g,x,v)))),p)break;g=g.return}0<y.length&&(f=new m(f,_,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==iu&&(_=n.relatedTarget||n.fromElement)&&(ir(_)||_[ci]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?ir(_):null,_!==null&&(p=xr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(y=Ef,x="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Tf,x="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?f:Xr(m),v=_==null?f:Xr(_),f=new y(x,g+"leave",m,n,d),f.target=p,f.relatedTarget=v,x=null,ir(d)===c&&(y=new y(u,g+"enter",_,n,d),y.target=v,y.relatedTarget=p,x=y),p=x,m&&_)t:{for(y=m,u=_,g=0,v=y;v;v=Mr(v))g++;for(v=0,x=u;x;x=Mr(x))v++;for(;0<g-v;)y=Mr(y),g--;for(;0<v-g;)u=Mr(u),v--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=Mr(y),u=Mr(u)}y=null}else y=null;m!==null&&Ff(h,f,m,y,!1),_!==null&&p!==null&&Ff(h,p,_,y,!0)}}e:{if(f=c?Xr(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var E=L_;else if(Rf(f))if(Hm)E=I_;else{E=U_;var R=P_}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=D_);if(E&&(E=E(t,c))){Bm(h,E,n,d);break e}R&&R(t,f,c),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&Jc(f,"number",f.value)}switch(R=c?Xr(c):window,t){case"focusin":(Rf(R)||R.contentEditable==="true")&&(Vr=R,uu=c,Zs=null);break;case"focusout":Zs=uu=Vr=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,Df(h,n,d);break;case"selectionchange":if(O_)break;case"keydown":case"keyup":Df(h,n,d)}var A;if(md)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Gr?km(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Om&&n.locale!=="ko"&&(Gr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Gr&&(A=Fm()):(Ei=d,fd="value"in Ei?Ei.value:Ei.textContent,Gr=!0)),R=Wa(c,P),0<R.length&&(P=new bf(P,t,null,n,d),h.push({event:P,listeners:R}),A?P.data=A:(A=zm(n),A!==null&&(P.data=A)))),(A=T_?w_(t,n):A_(t,n))&&(c=Wa(c,"onBeforeInput"),0<c.length&&(d=new bf("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=A))}Zm(h,e)})}function po(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wa(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=oo(t,n),s!=null&&i.unshift(po(t,s,r)),s=oo(t,e),s!=null&&i.push(po(t,s,r))),t=t.return}return i}function Mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ff(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=oo(n,s),l!=null&&o.unshift(po(n,l,a))):r||(l=oo(n,s),l!=null&&o.push(po(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var H_=/\r\n?/g,G_=/\u0000|\uFFFD/g;function Of(t){return(typeof t=="string"?t:""+t).replace(H_,`
`).replace(G_,"")}function Yo(t,e,n){if(e=Of(e),Of(t)!==e&&n)throw Error(J(425))}function Xa(){}var fu=null,hu=null;function pu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,V_=typeof clearTimeout=="function"?clearTimeout:void 0,kf=typeof Promise=="function"?Promise:void 0,W_=typeof queueMicrotask=="function"?queueMicrotask:typeof kf<"u"?function(t){return kf.resolve(null).then(t).catch(X_)}:mu;function X_(t){setTimeout(function(){throw t})}function ec(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),co(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);co(e)}function Pi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),Hn="__reactFiber$"+Ss,mo="__reactProps$"+Ss,ci="__reactContainer$"+Ss,gu="__reactEvents$"+Ss,j_="__reactListeners$"+Ss,Y_="__reactHandles$"+Ss;function ir(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ci]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zf(t);t!==null;){if(n=t[Hn])return n;t=zf(t)}return e}t=n,n=t.parentNode}return null}function Ro(t){return t=t[Hn]||t[ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(J(33))}function vl(t){return t[mo]||null}var vu=[],jr=-1;function Wi(t){return{current:t}}function Je(t){0>jr||(t.current=vu[jr],vu[jr]=null,jr--)}function $e(t,e){jr++,vu[jr]=t.current,t.current=e}var Hi={},Ft=Wi(Hi),Kt=Wi(!1),fr=Hi;function cs(t,e){var n=t.type.contextTypes;if(!n)return Hi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Zt(t){return t=t.childContextTypes,t!=null}function ja(){Je(Kt),Je(Ft)}function Bf(t,e,n){if(Ft.current!==Hi)throw Error(J(168));$e(Ft,e),$e(Kt,n)}function Qm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,Pv(t)||"Unknown",r));return st({},n,i)}function Ya(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hi,fr=Ft.current,$e(Ft,t),$e(Kt,Kt.current),!0}function Hf(t,e,n){var i=t.stateNode;if(!i)throw Error(J(169));n?(t=Qm(t,e,fr),i.__reactInternalMemoizedMergedChildContext=t,Je(Kt),Je(Ft),$e(Ft,t)):Je(Kt),$e(Kt,n)}var ni=null,_l=!1,tc=!1;function eg(t){ni===null?ni=[t]:ni.push(t)}function q_(t){_l=!0,eg(t)}function Xi(){if(!tc&&ni!==null){tc=!0;var t=0,e=je;try{var n=ni;for(je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ni=null,_l=!1}catch(r){throw ni!==null&&(ni=ni.slice(t+1)),Tm(ld,Xi),r}finally{je=e,tc=!1}}return null}var Yr=[],qr=0,qa=null,$a=0,pn=[],mn=0,hr=null,ri=1,si="";function Ji(t,e){Yr[qr++]=$a,Yr[qr++]=qa,qa=t,$a=e}function tg(t,e,n){pn[mn++]=ri,pn[mn++]=si,pn[mn++]=hr,hr=t;var i=ri;t=si;var r=32-Dn(i)-1;i&=~(1<<r),n+=1;var s=32-Dn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ri=1<<32-Dn(e)+r|n<<r|i,si=s+t}else ri=1<<s|n<<r|i,si=t}function vd(t){t.return!==null&&(Ji(t,1),tg(t,1,0))}function _d(t){for(;t===qa;)qa=Yr[--qr],Yr[qr]=null,$a=Yr[--qr],Yr[qr]=null;for(;t===hr;)hr=pn[--mn],pn[mn]=null,si=pn[--mn],pn[mn]=null,ri=pn[--mn],pn[mn]=null}var an=null,on=null,Qe=!1,Cn=null;function ng(t,e){var n=vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,an=t,on=Pi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,an=t,on=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hr!==null?{id:ri,overflow:si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,an=t,on=null,!0):!1;default:return!1}}function _u(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yu(t){if(Qe){var e=on;if(e){var n=e;if(!Gf(t,e)){if(_u(t))throw Error(J(418));e=Pi(n.nextSibling);var i=an;e&&Gf(t,e)?ng(i,n):(t.flags=t.flags&-4097|2,Qe=!1,an=t)}}else{if(_u(t))throw Error(J(418));t.flags=t.flags&-4097|2,Qe=!1,an=t}}}function Vf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;an=t}function qo(t){if(t!==an)return!1;if(!Qe)return Vf(t),Qe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pu(t.type,t.memoizedProps)),e&&(e=on)){if(_u(t))throw ig(),Error(J(418));for(;e;)ng(t,e),e=Pi(e.nextSibling)}if(Vf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){on=Pi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}on=null}}else on=an?Pi(t.stateNode.nextSibling):null;return!0}function ig(){for(var t=on;t;)t=Pi(t.nextSibling)}function us(){on=an=null,Qe=!1}function yd(t){Cn===null?Cn=[t]:Cn.push(t)}var $_=fi.ReactCurrentBatchConfig;function An(t,e){if(t&&t.defaultProps){e=st({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ka=Wi(null),Za=null,$r=null,xd=null;function Sd(){xd=$r=Za=null}function Md(t){var e=Ka.current;Je(Ka),t._currentValue=e}function xu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){Za=t,xd=$r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($t=!0),t.firstContext=null)}function xn(t){var e=t._currentValue;if(xd!==t)if(t={context:t,memoizedValue:e,next:null},$r===null){if(Za===null)throw Error(J(308));$r=t,Za.dependencies={lanes:0,firstContext:t}}else $r=$r.next=t;return e}var rr=null;function Ed(t){rr===null?rr=[t]:rr.push(t)}function rg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ed(e)):(n.next=r.next,r.next=n),e.interleaved=n,ui(t,i)}function ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xi=!1;function bd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ui(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,He&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ui(t,n)}return r=i.interleaved,r===null?(e.next=e,Ed(i)):(e.next=r.next,r.next=e),i.interleaved=e,ui(t,n)}function Ca(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cd(t,n)}}function Wf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ja(t,e,n,i){var r=t.updateQueue;xi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(f=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(m,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(m,h,f):_,f==null)break e;h=st({},h,f);break e;case 2:xi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);mr|=o,t.lanes=o,t.memoizedState=h}}function Xf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var og=new rm.Component().refs;function Su(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:st({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yl={isMounted:function(t){return(t=t._reactInternals)?xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=Ii(t),s=ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(In(e,t,r,i),Ca(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=Ii(t),s=ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(In(e,t,r,i),Ca(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),i=Ii(t),r=ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ui(t,r,i),e!==null&&(In(e,t,i,n),Ca(e,t,i))}};function jf(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!fo(n,i)||!fo(r,s):!0}function ag(t,e,n){var i=!1,r=Hi,s=e.contextType;return typeof s=="object"&&s!==null?s=xn(s):(r=Zt(e)?fr:Ft.current,i=e.contextTypes,s=(i=i!=null)?cs(t,r):Hi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&yl.enqueueReplaceState(e,e.state,null)}function Mu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=og,bd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=xn(s):(s=Zt(e)?fr:Ft.current,r.context=cs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Su(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&yl.enqueueReplaceState(r,r.state,null),Ja(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var i=n.stateNode}if(!i)throw Error(J(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===og&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,t))}return t}function $o(t,e){throw t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qf(t){var e=t._init;return e(t._payload)}function lg(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Ni(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,v,x){return g===null||g.tag!==6?(g=lc(v,u.mode,x),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,x){var E=v.type;return E===Hr?d(u,g,v.props.children,x,v.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===yi&&qf(E)===g.type)?(x=r(g,v.props),x.ref=Ds(u,g,v),x.return=u,x):(x=Na(v.type,v.key,v.props,null,u.mode,x),x.ref=Ds(u,g,v),x.return=u,x)}function c(u,g,v,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=cc(v,u.mode,x),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function d(u,g,v,x,E){return g===null||g.tag!==7?(g=ar(v,u.mode,x,E),g.return=u,g):(g=r(g,v),g.return=u,g)}function h(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=lc(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ko:return v=Na(g.type,g.key,g.props,null,u.mode,v),v.ref=Ds(u,null,g),v.return=u,v;case Br:return g=cc(g,u.mode,v),g.return=u,g;case yi:var x=g._init;return h(u,x(g._payload),v)}if(Vs(g)||Rs(g))return g=ar(g,u.mode,v,null),g.return=u,g;$o(u,g)}return null}function f(u,g,v,x){var E=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:a(u,g,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ko:return v.key===E?l(u,g,v,x):null;case Br:return v.key===E?c(u,g,v,x):null;case yi:return E=v._init,f(u,g,E(v._payload),x)}if(Vs(v)||Rs(v))return E!==null?null:d(u,g,v,x,null);$o(u,v)}return null}function m(u,g,v,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(v)||null,a(g,u,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ko:return u=u.get(x.key===null?v:x.key)||null,l(g,u,x,E);case Br:return u=u.get(x.key===null?v:x.key)||null,c(g,u,x,E);case yi:var R=x._init;return m(u,g,v,R(x._payload),E)}if(Vs(x)||Rs(x))return u=u.get(v)||null,d(g,u,x,E,null);$o(g,x)}return null}function _(u,g,v,x){for(var E=null,R=null,A=g,P=g=0,M=null;A!==null&&P<v.length;P++){A.index>P?(M=A,A=null):M=A.sibling;var T=f(u,A,v[P],x);if(T===null){A===null&&(A=M);break}t&&A&&T.alternate===null&&e(u,A),g=s(T,g,P),R===null?E=T:R.sibling=T,R=T,A=M}if(P===v.length)return n(u,A),Qe&&Ji(u,P),E;if(A===null){for(;P<v.length;P++)A=h(u,v[P],x),A!==null&&(g=s(A,g,P),R===null?E=A:R.sibling=A,R=A);return Qe&&Ji(u,P),E}for(A=i(u,A);P<v.length;P++)M=m(A,u,P,v[P],x),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?P:M.key),g=s(M,g,P),R===null?E=M:R.sibling=M,R=M);return t&&A.forEach(function($){return e(u,$)}),Qe&&Ji(u,P),E}function y(u,g,v,x){var E=Rs(v);if(typeof E!="function")throw Error(J(150));if(v=E.call(v),v==null)throw Error(J(151));for(var R=E=null,A=g,P=g=0,M=null,T=v.next();A!==null&&!T.done;P++,T=v.next()){A.index>P?(M=A,A=null):M=A.sibling;var $=f(u,A,T.value,x);if($===null){A===null&&(A=M);break}t&&A&&$.alternate===null&&e(u,A),g=s($,g,P),R===null?E=$:R.sibling=$,R=$,A=M}if(T.done)return n(u,A),Qe&&Ji(u,P),E;if(A===null){for(;!T.done;P++,T=v.next())T=h(u,T.value,x),T!==null&&(g=s(T,g,P),R===null?E=T:R.sibling=T,R=T);return Qe&&Ji(u,P),E}for(A=i(u,A);!T.done;P++,T=v.next())T=m(A,u,P,T.value,x),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?P:T.key),g=s(T,g,P),R===null?E=T:R.sibling=T,R=T);return t&&A.forEach(function(Q){return e(u,Q)}),Qe&&Ji(u,P),E}function p(u,g,v,x){if(typeof v=="object"&&v!==null&&v.type===Hr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ko:e:{for(var E=v.key,R=g;R!==null;){if(R.key===E){if(E=v.type,E===Hr){if(R.tag===7){n(u,R.sibling),g=r(R,v.props.children),g.return=u,u=g;break e}}else if(R.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===yi&&qf(E)===R.type){n(u,R.sibling),g=r(R,v.props),g.ref=Ds(u,R,v),g.return=u,u=g;break e}n(u,R);break}else e(u,R);R=R.sibling}v.type===Hr?(g=ar(v.props.children,u.mode,x,v.key),g.return=u,u=g):(x=Na(v.type,v.key,v.props,null,u.mode,x),x.ref=Ds(u,g,v),x.return=u,u=x)}return o(u);case Br:e:{for(R=v.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=cc(v,u.mode,x),g.return=u,u=g}return o(u);case yi:return R=v._init,p(u,g,R(v._payload),x)}if(Vs(v))return _(u,g,v,x);if(Rs(v))return y(u,g,v,x);$o(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=lc(v,u.mode,x),g.return=u,u=g),o(u)):n(u,g)}return p}var ds=lg(!0),cg=lg(!1),Co={},Vn=Wi(Co),go=Wi(Co),vo=Wi(Co);function sr(t){if(t===Co)throw Error(J(174));return t}function Td(t,e){switch($e(vo,e),$e(go,t),$e(Vn,Co),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:eu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=eu(e,t)}Je(Vn),$e(Vn,e)}function fs(){Je(Vn),Je(go),Je(vo)}function ug(t){sr(vo.current);var e=sr(Vn.current),n=eu(e,t.type);e!==n&&($e(go,t),$e(Vn,n))}function wd(t){go.current===t&&(Je(Vn),Je(go))}var it=Wi(0);function Qa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nc=[];function Ad(){for(var t=0;t<nc.length;t++)nc[t]._workInProgressVersionPrimary=null;nc.length=0}var La=fi.ReactCurrentDispatcher,ic=fi.ReactCurrentBatchConfig,pr=0,rt=null,vt=null,Mt=null,el=!1,Js=!1,_o=0,K_=0;function Pt(){throw Error(J(321))}function Rd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function Cd(t,e,n,i,r,s){if(pr=s,rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,La.current=t===null||t.memoizedState===null?ey:ty,t=n(i,r),Js){s=0;do{if(Js=!1,_o=0,25<=s)throw Error(J(301));s+=1,Mt=vt=null,e.updateQueue=null,La.current=ny,t=n(i,r)}while(Js)}if(La.current=tl,e=vt!==null&&vt.next!==null,pr=0,Mt=vt=rt=null,el=!1,e)throw Error(J(300));return t}function Ld(){var t=_o!==0;return _o=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?rt.memoizedState=Mt=t:Mt=Mt.next=t,Mt}function Sn(){if(vt===null){var t=rt.alternate;t=t!==null?t.memoizedState:null}else t=vt.next;var e=Mt===null?rt.memoizedState:Mt.next;if(e!==null)Mt=e,vt=t;else{if(t===null)throw Error(J(310));vt=t,t={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},Mt===null?rt.memoizedState=Mt=t:Mt=Mt.next=t}return Mt}function yo(t,e){return typeof e=="function"?e(t):e}function rc(t){var e=Sn(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((pr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,rt.lanes|=d,mr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Fn(i,e.memoizedState)||($t=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,rt.lanes|=s,mr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sc(t){var e=Sn(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Fn(s,e.memoizedState)||($t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function dg(){}function fg(t,e){var n=rt,i=Sn(),r=e(),s=!Fn(i.memoizedState,r);if(s&&(i.memoizedState=r,$t=!0),i=i.queue,Pd(mg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Mt!==null&&Mt.memoizedState.tag&1){if(n.flags|=2048,xo(9,pg.bind(null,n,i,r,e),void 0,null),Et===null)throw Error(J(349));pr&30||hg(n,e,r)}return r}function hg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function pg(t,e,n,i){e.value=n,e.getSnapshot=i,gg(e)&&vg(t)}function mg(t,e,n){return n(function(){gg(e)&&vg(t)})}function gg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function vg(t){var e=ui(t,1);e!==null&&In(e,t,1,-1)}function $f(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},e.queue=t,t=t.dispatch=Q_.bind(null,rt,t),[e.memoizedState,t]}function xo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function _g(){return Sn().memoizedState}function Pa(t,e,n,i){var r=zn();rt.flags|=t,r.memoizedState=xo(1|e,n,void 0,i===void 0?null:i)}function xl(t,e,n,i){var r=Sn();i=i===void 0?null:i;var s=void 0;if(vt!==null){var o=vt.memoizedState;if(s=o.destroy,i!==null&&Rd(i,o.deps)){r.memoizedState=xo(e,n,s,i);return}}rt.flags|=t,r.memoizedState=xo(1|e,n,s,i)}function Kf(t,e){return Pa(8390656,8,t,e)}function Pd(t,e){return xl(2048,8,t,e)}function yg(t,e){return xl(4,2,t,e)}function xg(t,e){return xl(4,4,t,e)}function Sg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mg(t,e,n){return n=n!=null?n.concat([t]):null,xl(4,4,Sg.bind(null,e,t),n)}function Ud(){}function Eg(t,e){var n=Sn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function bg(t,e){var n=Sn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Tg(t,e,n){return pr&21?(Fn(n,e)||(n=Rm(),rt.lanes|=n,mr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=n)}function Z_(t,e){var n=je;je=n!==0&&4>n?n:4,t(!0);var i=ic.transition;ic.transition={};try{t(!1),e()}finally{je=n,ic.transition=i}}function wg(){return Sn().memoizedState}function J_(t,e,n){var i=Ii(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ag(t))Rg(e,n);else if(n=rg(t,e,n,i),n!==null){var r=Gt();In(n,t,i,r),Cg(n,e,i)}}function Q_(t,e,n){var i=Ii(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ag(t))Rg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Fn(a,o)){var l=e.interleaved;l===null?(r.next=r,Ed(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=rg(t,e,r,i),n!==null&&(r=Gt(),In(n,t,i,r),Cg(n,e,i))}}function Ag(t){var e=t.alternate;return t===rt||e!==null&&e===rt}function Rg(t,e){Js=el=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Cg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cd(t,n)}}var tl={readContext:xn,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},ey={readContext:xn,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:xn,useEffect:Kf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pa(4194308,4,Sg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pa(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=J_.bind(null,rt,t),[i.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:$f,useDebugValue:Ud,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=$f(!1),e=t[0];return t=Z_.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=rt,r=zn();if(Qe){if(n===void 0)throw Error(J(407));n=n()}else{if(n=e(),Et===null)throw Error(J(349));pr&30||hg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Kf(mg.bind(null,i,s,t),[t]),i.flags|=2048,xo(9,pg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=zn(),e=Et.identifierPrefix;if(Qe){var n=si,i=ri;n=(i&~(1<<32-Dn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=_o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=K_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ty={readContext:xn,useCallback:Eg,useContext:xn,useEffect:Pd,useImperativeHandle:Mg,useInsertionEffect:yg,useLayoutEffect:xg,useMemo:bg,useReducer:rc,useRef:_g,useState:function(){return rc(yo)},useDebugValue:Ud,useDeferredValue:function(t){var e=Sn();return Tg(e,vt.memoizedState,t)},useTransition:function(){var t=rc(yo)[0],e=Sn().memoizedState;return[t,e]},useMutableSource:dg,useSyncExternalStore:fg,useId:wg,unstable_isNewReconciler:!1},ny={readContext:xn,useCallback:Eg,useContext:xn,useEffect:Pd,useImperativeHandle:Mg,useInsertionEffect:yg,useLayoutEffect:xg,useMemo:bg,useReducer:sc,useRef:_g,useState:function(){return sc(yo)},useDebugValue:Ud,useDeferredValue:function(t){var e=Sn();return vt===null?e.memoizedState=t:Tg(e,vt.memoizedState,t)},useTransition:function(){var t=sc(yo)[0],e=Sn().memoizedState;return[t,e]},useMutableSource:dg,useSyncExternalStore:fg,useId:wg,unstable_isNewReconciler:!1};function hs(t,e){try{var n="",i=e;do n+=Lv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function oc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Eu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iy=typeof WeakMap=="function"?WeakMap:Map;function Lg(t,e,n){n=ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){il||(il=!0,Du=i),Eu(t,e)},n}function Pg(t,e,n){n=ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Eu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Eu(t,e),typeof i!="function"&&(Di===null?Di=new Set([this]):Di.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Zf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new iy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=vy.bind(null,t,e,n),e.then(t,t))}function Jf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ai(-1,1),e.tag=2,Ui(n,e,1))),n.lanes|=1),t)}var ry=fi.ReactCurrentOwner,$t=!1;function Bt(t,e,n,i){e.child=t===null?cg(e,null,n,i):ds(e,t.child,n,i)}function eh(t,e,n,i,r){n=n.render;var s=e.ref;return rs(e,r),i=Cd(t,e,n,i,s,r),n=Ld(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,di(t,e,r)):(Qe&&n&&vd(e),e.flags|=1,Bt(t,e,i,r),e.child)}function th(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Bd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ug(t,e,s,i,r)):(t=Na(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fo,n(o,i)&&t.ref===e.ref)return di(t,e,r)}return e.flags|=1,t=Ni(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ug(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(fo(s,i)&&t.ref===e.ref)if($t=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&($t=!0);else return e.lanes=t.lanes,di(t,e,r)}return bu(t,e,n,i,r)}function Dg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Zr,rn),rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$e(Zr,rn),rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,$e(Zr,rn),rn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,$e(Zr,rn),rn|=i;return Bt(t,e,r,n),e.child}function Ig(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bu(t,e,n,i,r){var s=Zt(n)?fr:Ft.current;return s=cs(e,s),rs(e,r),n=Cd(t,e,n,i,s,r),i=Ld(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,di(t,e,r)):(Qe&&i&&vd(e),e.flags|=1,Bt(t,e,n,r),e.child)}function nh(t,e,n,i,r){if(Zt(n)){var s=!0;Ya(e)}else s=!1;if(rs(e,r),e.stateNode===null)Ua(t,e),ag(e,n,i),Mu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=xn(c):(c=Zt(n)?fr:Ft.current,c=cs(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Yf(e,o,i,c),xi=!1;var f=e.memoizedState;o.state=f,Ja(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Kt.current||xi?(typeof d=="function"&&(Su(e,n,d,i),l=e.memoizedState),(a=xi||jf(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,sg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:An(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=xn(l):(l=Zt(n)?fr:Ft.current,l=cs(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Yf(e,o,i,l),xi=!1,f=e.memoizedState,o.state=f,Ja(e,i,o,r);var _=e.memoizedState;a!==h||f!==_||Kt.current||xi?(typeof m=="function"&&(Su(e,n,m,i),_=e.memoizedState),(c=xi||jf(e,n,c,i,f,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Tu(t,e,n,i,s,r)}function Tu(t,e,n,i,r,s){Ig(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Hf(e,n,!1),di(t,e,s);i=e.stateNode,ry.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ds(e,t.child,null,s),e.child=ds(e,null,a,s)):Bt(t,e,a,s),e.memoizedState=i.state,r&&Hf(e,n,!0),e.child}function Ng(t){var e=t.stateNode;e.pendingContext?Bf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bf(t,e.context,!1),Td(t,e.containerInfo)}function ih(t,e,n,i,r){return us(),yd(r),e.flags|=256,Bt(t,e,n,i),e.child}var wu={dehydrated:null,treeContext:null,retryLane:0};function Au(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fg(t,e,n){var i=e.pendingProps,r=it.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),$e(it,r&1),t===null)return yu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=El(o,i,0,null),t=ar(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Au(n),e.memoizedState=wu,t):Dd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return sy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ni(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ni(a,s):(s=ar(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Au(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wu,i}return s=t.child,t=s.sibling,i=Ni(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Dd(t,e){return e=El({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ko(t,e,n,i){return i!==null&&yd(i),ds(e,t.child,null,n),t=Dd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=oc(Error(J(422))),Ko(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=El({mode:"visible",children:i.children},r,0,null),s=ar(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ds(e,t.child,null,o),e.child.memoizedState=Au(o),e.memoizedState=wu,s);if(!(e.mode&1))return Ko(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(J(419)),i=oc(s,i,void 0),Ko(t,e,o,i)}if(a=(o&t.childLanes)!==0,$t||a){if(i=Et,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ui(t,r),In(i,t,r,-1))}return zd(),i=oc(Error(J(421))),Ko(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=_y.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,on=Pi(r.nextSibling),an=e,Qe=!0,Cn=null,t!==null&&(pn[mn++]=ri,pn[mn++]=si,pn[mn++]=hr,ri=t.id,si=t.overflow,hr=e),e=Dd(e,i.children),e.flags|=4096,e)}function rh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),xu(t.return,e,n)}function ac(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Og(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Bt(t,e,i.children,n),i=it.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rh(t,n,e);else if(t.tag===19)rh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if($e(it,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Qa(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ac(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Qa(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ac(e,!0,n,null,s);break;case"together":ac(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ua(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,n=Ni(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ni(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function oy(t,e,n){switch(e.tag){case 3:Ng(e),us();break;case 5:ug(e);break;case 1:Zt(e.type)&&Ya(e);break;case 4:Td(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;$e(Ka,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?($e(it,it.current&1),e.flags|=128,null):n&e.child.childLanes?Fg(t,e,n):($e(it,it.current&1),t=di(t,e,n),t!==null?t.sibling:null);$e(it,it.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Og(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),$e(it,it.current),i)break;return null;case 22:case 23:return e.lanes=0,Dg(t,e,n)}return di(t,e,n)}var kg,Ru,zg,Bg;kg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ru=function(){};zg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,sr(Vn.current);var s=null;switch(n){case"input":r=Kc(t,r),i=Kc(t,i),s=[];break;case"select":r=st({},r,{value:void 0}),i=st({},i,{value:void 0}),s=[];break;case"textarea":r=Qc(t,r),i=Qc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Xa)}tu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ro.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ro.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ze("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Bg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Is(t,e){if(!Qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ay(t,e,n){var i=e.pendingProps;switch(_d(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return Zt(e.type)&&ja(),Ut(e),null;case 3:return i=e.stateNode,fs(),Je(Kt),Je(Ft),Ad(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(qo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Cn!==null&&(Fu(Cn),Cn=null))),Ru(t,e),Ut(e),null;case 5:wd(e);var r=sr(vo.current);if(n=e.type,t!==null&&e.stateNode!=null)zg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return Ut(e),null}if(t=sr(Vn.current),qo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Hn]=e,i[mo]=s,t=(e.mode&1)!==0,n){case"dialog":Ze("cancel",i),Ze("close",i);break;case"iframe":case"object":case"embed":Ze("load",i);break;case"video":case"audio":for(r=0;r<Xs.length;r++)Ze(Xs[r],i);break;case"source":Ze("error",i);break;case"img":case"image":case"link":Ze("error",i),Ze("load",i);break;case"details":Ze("toggle",i);break;case"input":hf(i,s),Ze("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ze("invalid",i);break;case"textarea":mf(i,s),Ze("invalid",i)}tu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Yo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Yo(i.textContent,a,t),r=["children",""+a]):ro.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ze("scroll",i)}switch(n){case"input":zo(i),pf(i,s,!0);break;case"textarea":zo(i),gf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Xa)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Hn]=e,t[mo]=i,kg(t,e,!1,!1),e.stateNode=t;e:{switch(o=nu(n,i),n){case"dialog":Ze("cancel",t),Ze("close",t),r=i;break;case"iframe":case"object":case"embed":Ze("load",t),r=i;break;case"video":case"audio":for(r=0;r<Xs.length;r++)Ze(Xs[r],t);r=i;break;case"source":Ze("error",t),r=i;break;case"img":case"image":case"link":Ze("error",t),Ze("load",t),r=i;break;case"details":Ze("toggle",t),r=i;break;case"input":hf(t,i),r=Kc(t,i),Ze("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=st({},i,{value:void 0}),Ze("invalid",t);break;case"textarea":mf(t,i),r=Qc(t,i),Ze("invalid",t);break;default:r=i}tu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?gm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&so(t,l):typeof l=="number"&&so(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ro.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ze("scroll",t):l!=null&&id(t,s,l,o))}switch(n){case"input":zo(t),pf(t,i,!1);break;case"textarea":zo(t),gf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Bi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?es(t,!!i.multiple,s,!1):i.defaultValue!=null&&es(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Xa)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)Bg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(n=sr(vo.current),sr(Vn.current),qo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Hn]=e,(s=i.nodeValue!==n)&&(t=an,t!==null))switch(t.tag){case 3:Yo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Hn]=e,e.stateNode=i}return Ut(e),null;case 13:if(Je(it),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Qe&&on!==null&&e.mode&1&&!(e.flags&128))ig(),us(),e.flags|=98560,s=!1;else if(s=qo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[Hn]=e}else us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),s=!1}else Cn!==null&&(Fu(Cn),Cn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||it.current&1?_t===0&&(_t=3):zd())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return fs(),Ru(t,e),t===null&&ho(e.stateNode.containerInfo),Ut(e),null;case 10:return Md(e.type._context),Ut(e),null;case 17:return Zt(e.type)&&ja(),Ut(e),null;case 19:if(Je(it),s=e.memoizedState,s===null)return Ut(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Is(s,!1);else{if(_t!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Qa(t),o!==null){for(e.flags|=128,Is(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $e(it,it.current&1|2),e.child}t=t.sibling}s.tail!==null&&ct()>ps&&(e.flags|=128,i=!0,Is(s,!1),e.lanes=4194304)}else{if(!i)if(t=Qa(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Is(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Qe)return Ut(e),null}else 2*ct()-s.renderingStartTime>ps&&n!==1073741824&&(e.flags|=128,i=!0,Is(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ct(),e.sibling=null,n=it.current,$e(it,i?n&1|2:n&1),e):(Ut(e),null);case 22:case 23:return kd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?rn&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function ly(t,e){switch(_d(e),e.tag){case 1:return Zt(e.type)&&ja(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fs(),Je(Kt),Je(Ft),Ad(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wd(e),null;case 13:if(Je(it),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Je(it),null;case 4:return fs(),null;case 10:return Md(e.type._context),null;case 22:case 23:return kd(),null;case 24:return null;default:return null}}var Zo=!1,Nt=!1,cy=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Kr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){at(t,e,i)}else n.current=null}function Cu(t,e,n){try{n()}catch(i){at(t,e,i)}}var sh=!1;function uy(t,e){if(fu=Ga,t=Wm(),gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hu={focusedElem:t,selectionRange:n},Ga=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,p=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:An(e.type,y),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(x){at(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return _=sh,sh=!1,_}function Qs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Cu(e,n,s)}r=r.next}while(r!==i)}}function Sl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Lu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Hg(t){var e=t.alternate;e!==null&&(t.alternate=null,Hg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[mo],delete e[gu],delete e[j_],delete e[Y_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Gg(t){return t.tag===5||t.tag===3||t.tag===4}function oh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Gg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xa));else if(i!==4&&(t=t.child,t!==null))for(Pu(t,e,n),t=t.sibling;t!==null;)Pu(t,e,n),t=t.sibling}function Uu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Uu(t,e,n),t=t.sibling;t!==null;)Uu(t,e,n),t=t.sibling}var Tt=null,Rn=!1;function pi(t,e,n){for(n=n.child;n!==null;)Vg(t,e,n),n=n.sibling}function Vg(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:Nt||Kr(n,e);case 6:var i=Tt,r=Rn;Tt=null,pi(t,e,n),Tt=i,Rn=r,Tt!==null&&(Rn?(t=Tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Tt.removeChild(n.stateNode));break;case 18:Tt!==null&&(Rn?(t=Tt,n=n.stateNode,t.nodeType===8?ec(t.parentNode,n):t.nodeType===1&&ec(t,n),co(t)):ec(Tt,n.stateNode));break;case 4:i=Tt,r=Rn,Tt=n.stateNode.containerInfo,Rn=!0,pi(t,e,n),Tt=i,Rn=r;break;case 0:case 11:case 14:case 15:if(!Nt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Cu(n,e,o),r=r.next}while(r!==i)}pi(t,e,n);break;case 1:if(!Nt&&(Kr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){at(n,e,a)}pi(t,e,n);break;case 21:pi(t,e,n);break;case 22:n.mode&1?(Nt=(i=Nt)||n.memoizedState!==null,pi(t,e,n),Nt=i):pi(t,e,n);break;default:pi(t,e,n)}}function ah(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cy),e.forEach(function(i){var r=yy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Mn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Tt=a.stateNode,Rn=!1;break e;case 3:Tt=a.stateNode.containerInfo,Rn=!0;break e;case 4:Tt=a.stateNode.containerInfo,Rn=!0;break e}a=a.return}if(Tt===null)throw Error(J(160));Vg(s,o,r),Tt=null,Rn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){at(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Wg(e,t),e=e.sibling}function Wg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mn(e,t),kn(t),i&4){try{Qs(3,t,t.return),Sl(3,t)}catch(y){at(t,t.return,y)}try{Qs(5,t,t.return)}catch(y){at(t,t.return,y)}}break;case 1:Mn(e,t),kn(t),i&512&&n!==null&&Kr(n,n.return);break;case 5:if(Mn(e,t),kn(t),i&512&&n!==null&&Kr(n,n.return),t.flags&32){var r=t.stateNode;try{so(r,"")}catch(y){at(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&dm(r,s),nu(a,o);var c=nu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?gm(r,h):d==="dangerouslySetInnerHTML"?pm(r,h):d==="children"?so(r,h):id(r,d,h,c)}switch(a){case"input":Zc(r,s);break;case"textarea":fm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?es(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?es(r,!!s.multiple,s.defaultValue,!0):es(r,!!s.multiple,s.multiple?[]:"",!1))}r[mo]=s}catch(y){at(t,t.return,y)}}break;case 6:if(Mn(e,t),kn(t),i&4){if(t.stateNode===null)throw Error(J(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){at(t,t.return,y)}}break;case 3:if(Mn(e,t),kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(y){at(t,t.return,y)}break;case 4:Mn(e,t),kn(t);break;case 13:Mn(e,t),kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Fd=ct())),i&4&&ah(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Nt=(c=Nt)||d,Mn(e,t),Nt=c):Mn(e,t),kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(fe=t,d=t.child;d!==null;){for(h=fe=d;fe!==null;){switch(f=fe,m=f.child,f.tag){case 0:case 11:case 14:case 15:Qs(4,f,f.return);break;case 1:Kr(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){at(i,n,y)}}break;case 5:Kr(f,f.return);break;case 22:if(f.memoizedState!==null){ch(h);continue}}m!==null?(m.return=f,fe=m):ch(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=mm("display",o))}catch(y){at(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){at(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Mn(e,t),kn(t),i&4&&ah(t);break;case 21:break;default:Mn(e,t),kn(t)}}function kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Gg(n)){var i=n;break e}n=n.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(so(r,""),i.flags&=-33);var s=oh(t);Uu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=oh(t);Pu(t,a,o);break;default:throw Error(J(161))}}catch(l){at(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dy(t,e,n){fe=t,Xg(t)}function Xg(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Zo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Nt;a=Zo;var c=Nt;if(Zo=o,(Nt=l)&&!c)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?uh(r):l!==null?(l.return=o,fe=l):uh(r);for(;s!==null;)fe=s,Xg(s),s=s.sibling;fe=r,Zo=a,Nt=c}lh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):lh(t)}}function lh(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nt||Sl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Nt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:An(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xf(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&co(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}Nt||e.flags&512&&Lu(e)}catch(f){at(e,e.return,f)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function ch(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function uh(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Sl(4,e)}catch(l){at(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){at(e,r,l)}}var s=e.return;try{Lu(e)}catch(l){at(e,s,l)}break;case 5:var o=e.return;try{Lu(e)}catch(l){at(e,o,l)}}}catch(l){at(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var fy=Math.ceil,nl=fi.ReactCurrentDispatcher,Id=fi.ReactCurrentOwner,yn=fi.ReactCurrentBatchConfig,He=0,Et=null,mt=null,wt=0,rn=0,Zr=Wi(0),_t=0,So=null,mr=0,Ml=0,Nd=0,eo=null,Yt=null,Fd=0,ps=1/0,ti=null,il=!1,Du=null,Di=null,Jo=!1,bi=null,rl=0,to=0,Iu=null,Da=-1,Ia=0;function Gt(){return He&6?ct():Da!==-1?Da:Da=ct()}function Ii(t){return t.mode&1?He&2&&wt!==0?wt&-wt:$_.transition!==null?(Ia===0&&(Ia=Rm()),Ia):(t=je,t!==0||(t=window.event,t=t===void 0?16:Nm(t.type)),t):1}function In(t,e,n,i){if(50<to)throw to=0,Iu=null,Error(J(185));wo(t,n,i),(!(He&2)||t!==Et)&&(t===Et&&(!(He&2)&&(Ml|=n),_t===4&&Mi(t,wt)),Jt(t,i),n===1&&He===0&&!(e.mode&1)&&(ps=ct()+500,_l&&Xi()))}function Jt(t,e){var n=t.callbackNode;$v(t,e);var i=Ha(t,t===Et?wt:0);if(i===0)n!==null&&yf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&yf(n),e===1)t.tag===0?q_(dh.bind(null,t)):eg(dh.bind(null,t)),W_(function(){!(He&6)&&Xi()}),n=null;else{switch(Cm(i)){case 1:n=ld;break;case 4:n=wm;break;case 16:n=Ba;break;case 536870912:n=Am;break;default:n=Ba}n=Qg(n,jg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jg(t,e){if(Da=-1,Ia=0,He&6)throw Error(J(327));var n=t.callbackNode;if(ss()&&t.callbackNode!==n)return null;var i=Ha(t,t===Et?wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=sl(t,i);else{e=i;var r=He;He|=2;var s=qg();(Et!==t||wt!==e)&&(ti=null,ps=ct()+500,or(t,e));do try{my();break}catch(a){Yg(t,a)}while(1);Sd(),nl.current=s,He=r,mt!==null?e=0:(Et=null,wt=0,e=_t)}if(e!==0){if(e===2&&(r=au(t),r!==0&&(i=r,e=Nu(t,r))),e===1)throw n=So,or(t,0),Mi(t,i),Jt(t,ct()),n;if(e===6)Mi(t,i);else{if(r=t.current.alternate,!(i&30)&&!hy(r)&&(e=sl(t,i),e===2&&(s=au(t),s!==0&&(i=s,e=Nu(t,s))),e===1))throw n=So,or(t,0),Mi(t,i),Jt(t,ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:Qi(t,Yt,ti);break;case 3:if(Mi(t,i),(i&130023424)===i&&(e=Fd+500-ct(),10<e)){if(Ha(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Gt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=mu(Qi.bind(null,t,Yt,ti),e);break}Qi(t,Yt,ti);break;case 4:if(Mi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Dn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*fy(i/1960))-i,10<i){t.timeoutHandle=mu(Qi.bind(null,t,Yt,ti),i);break}Qi(t,Yt,ti);break;case 5:Qi(t,Yt,ti);break;default:throw Error(J(329))}}}return Jt(t,ct()),t.callbackNode===n?jg.bind(null,t):null}function Nu(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(or(t,e).flags|=256),t=sl(t,e),t!==2&&(e=Yt,Yt=n,e!==null&&Fu(e)),t}function Fu(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function hy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Fn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mi(t,e){for(e&=~Nd,e&=~Ml,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Dn(e),i=1<<n;t[n]=-1,e&=~i}}function dh(t){if(He&6)throw Error(J(327));ss();var e=Ha(t,0);if(!(e&1))return Jt(t,ct()),null;var n=sl(t,e);if(t.tag!==0&&n===2){var i=au(t);i!==0&&(e=i,n=Nu(t,i))}if(n===1)throw n=So,or(t,0),Mi(t,e),Jt(t,ct()),n;if(n===6)throw Error(J(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qi(t,Yt,ti),Jt(t,ct()),null}function Od(t,e){var n=He;He|=1;try{return t(e)}finally{He=n,He===0&&(ps=ct()+500,_l&&Xi())}}function gr(t){bi!==null&&bi.tag===0&&!(He&6)&&ss();var e=He;He|=1;var n=yn.transition,i=je;try{if(yn.transition=null,je=1,t)return t()}finally{je=i,yn.transition=n,He=e,!(He&6)&&Xi()}}function kd(){rn=Zr.current,Je(Zr)}function or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,V_(n)),mt!==null)for(n=mt.return;n!==null;){var i=n;switch(_d(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ja();break;case 3:fs(),Je(Kt),Je(Ft),Ad();break;case 5:wd(i);break;case 4:fs();break;case 13:Je(it);break;case 19:Je(it);break;case 10:Md(i.type._context);break;case 22:case 23:kd()}n=n.return}if(Et=t,mt=t=Ni(t.current,null),wt=rn=e,_t=0,So=null,Nd=Ml=mr=0,Yt=eo=null,rr!==null){for(e=0;e<rr.length;e++)if(n=rr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}rr=null}return t}function Yg(t,e){do{var n=mt;try{if(Sd(),La.current=tl,el){for(var i=rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}el=!1}if(pr=0,Mt=vt=rt=null,Js=!1,_o=0,Id.current=null,n===null||n.return===null){_t=1,So=e,mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Jf(o);if(m!==null){m.flags&=-257,Qf(m,o,a,s,e),m.mode&1&&Zf(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Zf(s,c,e),zd();break e}l=Error(J(426))}}else if(Qe&&a.mode&1){var p=Jf(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Qf(p,o,a,s,e),yd(hs(l,a));break e}}s=l=hs(l,a),_t!==4&&(_t=2),eo===null?eo=[s]:eo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Lg(s,l,e);Wf(s,u);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Di===null||!Di.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Pg(s,a,e);Wf(s,x);break e}}s=s.return}while(s!==null)}Kg(n)}catch(E){e=E,mt===n&&n!==null&&(mt=n=n.return);continue}break}while(1)}function qg(){var t=nl.current;return nl.current=tl,t===null?tl:t}function zd(){(_t===0||_t===3||_t===2)&&(_t=4),Et===null||!(mr&268435455)&&!(Ml&268435455)||Mi(Et,wt)}function sl(t,e){var n=He;He|=2;var i=qg();(Et!==t||wt!==e)&&(ti=null,or(t,e));do try{py();break}catch(r){Yg(t,r)}while(1);if(Sd(),He=n,nl.current=i,mt!==null)throw Error(J(261));return Et=null,wt=0,_t}function py(){for(;mt!==null;)$g(mt)}function my(){for(;mt!==null&&!Bv();)$g(mt)}function $g(t){var e=Jg(t.alternate,t,rn);t.memoizedProps=t.pendingProps,e===null?Kg(t):mt=e,Id.current=null}function Kg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ly(n,e),n!==null){n.flags&=32767,mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_t=6,mt=null;return}}else if(n=ay(n,e,rn),n!==null){mt=n;return}if(e=e.sibling,e!==null){mt=e;return}mt=e=t}while(e!==null);_t===0&&(_t=5)}function Qi(t,e,n){var i=je,r=yn.transition;try{yn.transition=null,je=1,gy(t,e,n,i)}finally{yn.transition=r,je=i}return null}function gy(t,e,n,i){do ss();while(bi!==null);if(He&6)throw Error(J(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(J(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Kv(t,s),t===Et&&(mt=Et=null,wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jo||(Jo=!0,Qg(Ba,function(){return ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yn.transition,yn.transition=null;var o=je;je=1;var a=He;He|=4,Id.current=null,uy(t,n),Wg(n,t),F_(hu),Ga=!!fu,hu=fu=null,t.current=n,dy(n),Hv(),He=a,je=o,yn.transition=s}else t.current=n;if(Jo&&(Jo=!1,bi=t,rl=r),s=t.pendingLanes,s===0&&(Di=null),Wv(n.stateNode),Jt(t,ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(il)throw il=!1,t=Du,Du=null,t;return rl&1&&t.tag!==0&&ss(),s=t.pendingLanes,s&1?t===Iu?to++:(to=0,Iu=t):to=0,Xi(),null}function ss(){if(bi!==null){var t=Cm(rl),e=yn.transition,n=je;try{if(yn.transition=null,je=16>t?16:t,bi===null)var i=!1;else{if(t=bi,bi=null,rl=0,He&6)throw Error(J(331));var r=He;for(He|=4,fe=t.current;fe!==null;){var s=fe,o=s.child;if(fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(fe=c;fe!==null;){var d=fe;switch(d.tag){case 0:case 11:case 15:Qs(8,d,s)}var h=d.child;if(h!==null)h.return=d,fe=h;else for(;fe!==null;){d=fe;var f=d.sibling,m=d.return;if(Hg(d),d===c){fe=null;break}if(f!==null){f.return=m,fe=f;break}fe=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qs(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,fe=u;break e}fe=s.return}}var g=t.current;for(fe=g;fe!==null;){o=fe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,fe=v;else e:for(o=g;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sl(9,a)}}catch(E){at(a,a.return,E)}if(a===o){fe=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,fe=x;break e}fe=a.return}}if(He=r,Xi(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(hl,t)}catch{}i=!0}return i}finally{je=n,yn.transition=e}}return!1}function fh(t,e,n){e=hs(n,e),e=Lg(t,e,1),t=Ui(t,e,1),e=Gt(),t!==null&&(wo(t,1,e),Jt(t,e))}function at(t,e,n){if(t.tag===3)fh(t,t,n);else for(;e!==null;){if(e.tag===3){fh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Di===null||!Di.has(i))){t=hs(n,t),t=Pg(e,t,1),e=Ui(e,t,1),t=Gt(),e!==null&&(wo(e,1,t),Jt(e,t));break}}e=e.return}}function vy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,Et===t&&(wt&n)===n&&(_t===4||_t===3&&(wt&130023424)===wt&&500>ct()-Fd?or(t,0):Nd|=n),Jt(t,e)}function Zg(t,e){e===0&&(t.mode&1?(e=Go,Go<<=1,!(Go&130023424)&&(Go=4194304)):e=1);var n=Gt();t=ui(t,e),t!==null&&(wo(t,e,n),Jt(t,n))}function _y(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Zg(t,n)}function yy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),Zg(t,n)}var Jg;Jg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Kt.current)$t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $t=!1,oy(t,e,n);$t=!!(t.flags&131072)}else $t=!1,Qe&&e.flags&1048576&&tg(e,$a,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ua(t,e),t=e.pendingProps;var r=cs(e,Ft.current);rs(e,n),r=Cd(null,e,i,t,r,n);var s=Ld();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(i)?(s=!0,Ya(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bd(e),r.updater=yl,e.stateNode=r,r._reactInternals=e,Mu(e,i,t,n),e=Tu(null,e,i,!0,s,n)):(e.tag=0,Qe&&s&&vd(e),Bt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ua(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Sy(i),t=An(i,t),r){case 0:e=bu(null,e,i,t,n);break e;case 1:e=nh(null,e,i,t,n);break e;case 11:e=eh(null,e,i,t,n);break e;case 14:e=th(null,e,i,An(i.type,t),n);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),bu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),nh(t,e,i,r,n);case 3:e:{if(Ng(e),t===null)throw Error(J(387));i=e.pendingProps,s=e.memoizedState,r=s.element,sg(t,e),Ja(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=hs(Error(J(423)),e),e=ih(t,e,i,n,r);break e}else if(i!==r){r=hs(Error(J(424)),e),e=ih(t,e,i,n,r);break e}else for(on=Pi(e.stateNode.containerInfo.firstChild),an=e,Qe=!0,Cn=null,n=cg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(us(),i===r){e=di(t,e,n);break e}Bt(t,e,i,n)}e=e.child}return e;case 5:return ug(e),t===null&&yu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,pu(i,r)?o=null:s!==null&&pu(i,s)&&(e.flags|=32),Ig(t,e),Bt(t,e,o,n),e.child;case 6:return t===null&&yu(e),null;case 13:return Fg(t,e,n);case 4:return Td(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ds(e,null,i,n):Bt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),eh(t,e,i,r,n);case 7:return Bt(t,e,e.pendingProps,n),e.child;case 8:return Bt(t,e,e.pendingProps.children,n),e.child;case 12:return Bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,$e(Ka,i._currentValue),i._currentValue=o,s!==null)if(Fn(s.value,o)){if(s.children===r.children&&!Kt.current){e=di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ai(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(J(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Bt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,rs(e,n),r=xn(r),i=i(r),e.flags|=1,Bt(t,e,i,n),e.child;case 14:return i=e.type,r=An(i,e.pendingProps),r=An(i.type,r),th(t,e,i,r,n);case 15:return Ug(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),Ua(t,e),e.tag=1,Zt(i)?(t=!0,Ya(e)):t=!1,rs(e,n),ag(e,i,r),Mu(e,i,r,n),Tu(null,e,i,!0,t,n);case 19:return Og(t,e,n);case 22:return Dg(t,e,n)}throw Error(J(156,e.tag))};function Qg(t,e){return Tm(t,e)}function xy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(t,e,n,i){return new xy(t,e,n,i)}function Bd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sy(t){if(typeof t=="function")return Bd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sd)return 11;if(t===od)return 14}return 2}function Ni(t,e){var n=t.alternate;return n===null?(n=vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Na(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Bd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hr:return ar(n.children,r,s,e);case rd:o=8,r|=8;break;case jc:return t=vn(12,n,e,r|2),t.elementType=jc,t.lanes=s,t;case Yc:return t=vn(13,n,e,r),t.elementType=Yc,t.lanes=s,t;case qc:return t=vn(19,n,e,r),t.elementType=qc,t.lanes=s,t;case lm:return El(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case om:o=10;break e;case am:o=9;break e;case sd:o=11;break e;case od:o=14;break e;case yi:o=16,i=null;break e}throw Error(J(130,t==null?t:typeof t,""))}return e=vn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ar(t,e,n,i){return t=vn(7,t,i,e),t.lanes=n,t}function El(t,e,n,i){return t=vn(22,t,i,e),t.elementType=lm,t.lanes=n,t.stateNode={isHidden:!1},t}function lc(t,e,n){return t=vn(6,t,null,e),t.lanes=n,t}function cc(t,e,n){return e=vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function My(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hd(t,e,n,i,r,s,o,a,l){return t=new My(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bd(s),t}function Ey(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Br,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function e0(t){if(!t)return Hi;t=t._reactInternals;e:{if(xr(t)!==t||t.tag!==1)throw Error(J(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(t.tag===1){var n=t.type;if(Zt(n))return Qm(t,n,e)}return e}function t0(t,e,n,i,r,s,o,a,l){return t=Hd(n,i,!0,t,r,s,o,a,l),t.context=e0(null),n=t.current,i=Gt(),r=Ii(n),s=ai(i,r),s.callback=e??null,Ui(n,s,r),t.current.lanes=r,wo(t,r,i),Jt(t,i),t}function bl(t,e,n,i){var r=e.current,s=Gt(),o=Ii(r);return n=e0(n),e.context===null?e.context=n:e.pendingContext=n,e=ai(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ui(r,e,o),t!==null&&(In(t,r,o,s),Ca(t,r,o)),o}function ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gd(t,e){hh(t,e),(t=t.alternate)&&hh(t,e)}function by(){return null}var n0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vd(t){this._internalRoot=t}Tl.prototype.render=Vd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));bl(t,e,null,null)};Tl.prototype.unmount=Vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gr(function(){bl(null,t,null,null)}),e[ci]=null}};function Tl(t){this._internalRoot=t}Tl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Um();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Si.length&&e!==0&&e<Si[n].priority;n++);Si.splice(n,0,t),n===0&&Im(t)}};function Wd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ph(){}function Ty(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ol(o);s.call(c)}}var o=t0(e,i,t,0,null,!1,!1,"",ph);return t._reactRootContainer=o,t[ci]=o.current,ho(t.nodeType===8?t.parentNode:t),gr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ol(l);a.call(c)}}var l=Hd(t,0,!1,null,null,!1,!1,"",ph);return t._reactRootContainer=l,t[ci]=l.current,ho(t.nodeType===8?t.parentNode:t),gr(function(){bl(e,l,n,i)}),l}function Al(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ol(o);a.call(l)}}bl(e,o,t,r)}else o=Ty(n,e,t,r,i);return ol(o)}Lm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ws(e.pendingLanes);n!==0&&(cd(e,n|1),Jt(e,ct()),!(He&6)&&(ps=ct()+500,Xi()))}break;case 13:gr(function(){var i=ui(t,1);if(i!==null){var r=Gt();In(i,t,1,r)}}),Gd(t,1)}};ud=function(t){if(t.tag===13){var e=ui(t,134217728);if(e!==null){var n=Gt();In(e,t,134217728,n)}Gd(t,134217728)}};Pm=function(t){if(t.tag===13){var e=Ii(t),n=ui(t,e);if(n!==null){var i=Gt();In(n,t,e,i)}Gd(t,e)}};Um=function(){return je};Dm=function(t,e){var n=je;try{return je=t,e()}finally{je=n}};ru=function(t,e,n){switch(e){case"input":if(Zc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=vl(i);if(!r)throw Error(J(90));um(i),Zc(i,r)}}}break;case"textarea":fm(t,n);break;case"select":e=n.value,e!=null&&es(t,!!n.multiple,e,!1)}};ym=Od;xm=gr;var wy={usingClientEntryPoint:!1,Events:[Ro,Xr,vl,vm,_m,Od]},Ns={findFiberByHostInstance:ir,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ay={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Em(t),t===null?null:t.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||by,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{hl=Qo.inject(Ay),Gn=Qo}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wy;un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wd(e))throw Error(J(200));return Ey(t,e,null,n)};un.createRoot=function(t,e){if(!Wd(t))throw Error(J(299));var n=!1,i="",r=n0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hd(t,1,!1,null,null,n,!1,i,r),t[ci]=e.current,ho(t.nodeType===8?t.parentNode:t),new Vd(e)};un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=Em(e),t=t===null?null:t.stateNode,t};un.flushSync=function(t){return gr(t)};un.hydrate=function(t,e,n){if(!wl(e))throw Error(J(200));return Al(null,t,e,!0,n)};un.hydrateRoot=function(t,e,n){if(!Wd(t))throw Error(J(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=n0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=t0(e,null,t,1,n??null,r,!1,s,o),t[ci]=e.current,ho(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Tl(e)};un.render=function(t,e,n){if(!wl(e))throw Error(J(200));return Al(null,t,e,!1,n)};un.unmountComponentAtNode=function(t){if(!wl(t))throw Error(J(40));return t._reactRootContainer?(gr(function(){Al(null,null,t,!1,function(){t._reactRootContainer=null,t[ci]=null})}),!0):!1};un.unstable_batchedUpdates=Od;un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!wl(n))throw Error(J(200));if(t==null||t._reactInternals===void 0)throw Error(J(38));return Al(t,e,n,!1,i)};un.version="18.2.0-next-9e3b772b8-20220608";function i0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i0)}catch(t){console.error(t)}}i0(),tm.exports=un;var Ry=tm.exports,mh=Ry;Wc.createRoot=mh.createRoot,Wc.hydrateRoot=mh.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mo(){return Mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Mo.apply(this,arguments)}var Ti;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ti||(Ti={}));const gh="popstate";function Cy(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Ou("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:al(r)}return Py(e,n,null,t)}function gt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Xd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ly(){return Math.random().toString(36).substr(2,8)}function vh(t,e){return{usr:t.state,key:t.key,idx:e}}function Ou(t,e,n,i){return n===void 0&&(n=null),Mo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ms(e):e,{state:n,key:e&&e.key||i||Ly()})}function al(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ms(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Py(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Ti.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(Mo({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=Ti.Pop;let p=d(),u=p==null?null:p-c;c=p,l&&l({action:a,location:y.location,delta:u})}function f(p,u){a=Ti.Push;let g=Ou(y.location,p,u);n&&n(g,p),c=d()+1;let v=vh(g,c),x=y.createHref(g);try{o.pushState(v,"",x)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;r.location.assign(x)}s&&l&&l({action:a,location:y.location,delta:1})}function m(p,u){a=Ti.Replace;let g=Ou(y.location,p,u);n&&n(g,p),c=d();let v=vh(g,c),x=y.createHref(g);o.replaceState(v,"",x),s&&l&&l({action:a,location:y.location,delta:0})}function _(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:al(p);return gt(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let y={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(gh,h),l=p,()=>{r.removeEventListener(gh,h),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let u=_(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:f,replace:m,go(p){return o.go(p)}};return y}var _h;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_h||(_h={}));function Uy(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?Ms(e):e,r=jd(i.pathname||"/",n);if(r==null)return null;let s=r0(t);Dy(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Gy(s[a],Xy(r));return o}function r0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(gt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Fi([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(gt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),r0(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:By(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of s0(s.path))r(s,o,l)}),e}function s0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=s0(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Dy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Hy(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Iy=/^:\w+$/,Ny=3,Fy=2,Oy=1,ky=10,zy=-2,yh=t=>t==="*";function By(t,e){let n=t.split("/"),i=n.length;return n.some(yh)&&(i+=zy),e&&(i+=Fy),n.filter(r=>!yh(r)).reduce((r,s)=>r+(Iy.test(s)?Ny:s===""?Oy:ky),i)}function Hy(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function Gy(t,e){let{routesMeta:n}=t,i={},r="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=r==="/"?e:e.slice(r.length)||"/",d=Vy({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!d)return null;Object.assign(i,d.params);let h=a.route;s.push({params:i,pathname:Fi([r,d.pathname]),pathnameBase:$y(Fi([r,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(r=Fi([r,d.pathnameBase]))}return s}function Vy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=Wy(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,d,h)=>{if(d==="*"){let f=a[h]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return c[d]=jy(a[h]||"",d),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Wy(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Xd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(i.push(a),"/([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Xy(t){try{return decodeURI(t)}catch(e){return Xd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function jy(t,e){try{return decodeURIComponent(t)}catch(n){return Xd(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function jd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function Yy(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Ms(t):t;return{pathname:n?n.startsWith("/")?n:qy(n,e):e,search:Ky(i),hash:Zy(r)}}function qy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function uc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function o0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function a0(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Ms(t):(r=Mo({},t),gt(!r.pathname||!r.pathname.includes("?"),uc("?","pathname","search",r)),gt(!r.pathname||!r.pathname.includes("#"),uc("#","pathname","hash",r)),gt(!r.search||!r.search.includes("#"),uc("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(i||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;r.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=Yy(r,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Fi=t=>t.join("/").replace(/\/\/+/g,"/"),$y=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ky=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Zy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Jy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const l0=["post","put","patch","delete"];new Set(l0);const Qy=["get",...l0];new Set(Qy);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ll.apply(this,arguments)}const Yd=ce.createContext(null),ex=ce.createContext(null),Es=ce.createContext(null),Rl=ce.createContext(null),Sr=ce.createContext({outlet:null,matches:[],isDataRoute:!1}),c0=ce.createContext(null);function tx(t,e){let{relative:n}=e===void 0?{}:e;Lo()||gt(!1);let{basename:i,navigator:r}=ce.useContext(Es),{hash:s,pathname:o,search:a}=d0(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:Fi([i,o])),r.createHref({pathname:l,search:a,hash:s})}function Lo(){return ce.useContext(Rl)!=null}function Cl(){return Lo()||gt(!1),ce.useContext(Rl).location}function u0(t){ce.useContext(Es).static||ce.useLayoutEffect(t)}function nx(){let{isDataRoute:t}=ce.useContext(Sr);return t?mx():ix()}function ix(){Lo()||gt(!1);let t=ce.useContext(Yd),{basename:e,navigator:n}=ce.useContext(Es),{matches:i}=ce.useContext(Sr),{pathname:r}=Cl(),s=JSON.stringify(o0(i).map(l=>l.pathnameBase)),o=ce.useRef(!1);return u0(()=>{o.current=!0}),ce.useCallback(function(l,c){if(c===void 0&&(c={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let d=a0(l,JSON.parse(s),r,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Fi([e,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[e,n,s,r,t])}function d0(t,e){let{relative:n}=e===void 0?{}:e,{matches:i}=ce.useContext(Sr),{pathname:r}=Cl(),s=JSON.stringify(o0(i).map(o=>o.pathnameBase));return ce.useMemo(()=>a0(t,JSON.parse(s),r,n==="path"),[t,s,r,n])}function rx(t,e){return sx(t,e)}function sx(t,e,n){Lo()||gt(!1);let{navigator:i}=ce.useContext(Es),{matches:r}=ce.useContext(Sr),s=r[r.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Cl(),c;if(e){var d;let y=typeof e=="string"?Ms(e):e;a==="/"||(d=y.pathname)!=null&&d.startsWith(a)||gt(!1),c=y}else c=l;let h=c.pathname||"/",f=a==="/"?h:h.slice(a.length)||"/",m=Uy(t,{pathname:f}),_=ux(m&&m.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Fi([a,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Fi([a,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),r,n);return e&&_?ce.createElement(Rl.Provider,{value:{location:ll({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ti.Pop}},_):_}function ox(){let t=px(),e=Jy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return ce.createElement(ce.Fragment,null,ce.createElement("h2",null,"Unexpected Application Error!"),ce.createElement("h3",{style:{fontStyle:"italic"}},e),n?ce.createElement("pre",{style:r},n):null,s)}const ax=ce.createElement(ox,null);class lx extends ce.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?ce.createElement(Sr.Provider,{value:this.props.routeContext},ce.createElement(c0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cx(t){let{routeContext:e,match:n,children:i}=t,r=ce.useContext(Yd);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ce.createElement(Sr.Provider,{value:e},i)}function ux(t,e,n){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var r;if((r=n)!=null&&r.errors)t=n.matches;else return null}let s=t,o=(i=n)==null?void 0:i.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||gt(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,c)=>{let d=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||ax);let f=e.concat(s.slice(0,c+1)),m=()=>{let _;return d?_=h:l.route.Component?_=ce.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=a,ce.createElement(cx,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?ce.createElement(lx,{location:n.location,revalidation:n.revalidation,component:h,error:d,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var f0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(f0||{}),cl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(cl||{});function dx(t){let e=ce.useContext(Yd);return e||gt(!1),e}function fx(t){let e=ce.useContext(ex);return e||gt(!1),e}function hx(t){let e=ce.useContext(Sr);return e||gt(!1),e}function h0(t){let e=hx(),n=e.matches[e.matches.length-1];return n.route.id||gt(!1),n.route.id}function px(){var t;let e=ce.useContext(c0),n=fx(cl.UseRouteError),i=h0(cl.UseRouteError);return e||((t=n.errors)==null?void 0:t[i])}function mx(){let{router:t}=dx(f0.UseNavigateStable),e=h0(cl.UseNavigateStable),n=ce.useRef(!1);return u0(()=>{n.current=!0}),ce.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,ll({fromRouteId:e},s)))},[t,e])}function ku(t){gt(!1)}function gx(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Ti.Pop,navigator:s,static:o=!1}=t;Lo()&&gt(!1);let a=e.replace(/^\/*/,"/"),l=ce.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof i=="string"&&(i=Ms(i));let{pathname:c="/",search:d="",hash:h="",state:f=null,key:m="default"}=i,_=ce.useMemo(()=>{let y=jd(c,a);return y==null?null:{location:{pathname:y,search:d,hash:h,state:f,key:m},navigationType:r}},[a,c,d,h,f,m,r]);return _==null?null:ce.createElement(Es.Provider,{value:l},ce.createElement(Rl.Provider,{children:n,value:_}))}function vx(t){let{children:e,location:n}=t;return rx(zu(e),n)}new Promise(()=>{});function zu(t,e){e===void 0&&(e=[]);let n=[];return ce.Children.forEach(t,(i,r)=>{if(!ce.isValidElement(i))return;let s=[...e,r];if(i.type===ce.Fragment){n.push.apply(n,zu(i.props.children,s));return}i.type!==ku&&gt(!1),!i.props.index||!i.props.children||gt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=zu(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bu(){return Bu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Bu.apply(this,arguments)}function _x(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function yx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function xx(t,e){return t.button===0&&(!e||e==="_self")&&!yx(t)}const Sx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Mx="startTransition",xh=_v[Mx];function Ex(t){let{basename:e,children:n,future:i,window:r}=t,s=ce.useRef();s.current==null&&(s.current=Cy({window:r,v5Compat:!0}));let o=s.current,[a,l]=ce.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},d=ce.useCallback(h=>{c&&xh?xh(()=>l(h)):l(h)},[l,c]);return ce.useLayoutEffect(()=>o.listen(d),[o,d]),ce.createElement(gx,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const bx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Tx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,no=ce.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d}=e,h=_x(e,Sx),{basename:f}=ce.useContext(Es),m,_=!1;if(typeof c=="string"&&Tx.test(c)&&(m=c,bx))try{let g=new URL(window.location.href),v=c.startsWith("//")?new URL(g.protocol+c):new URL(c),x=jd(v.pathname,f);v.origin===g.origin&&x!=null?c=x+v.search+v.hash:_=!0}catch{}let y=tx(c,{relative:r}),p=wx(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:r});function u(g){i&&i(g),g.defaultPrevented||p(g)}return ce.createElement("a",Bu({},h,{href:m||y,onClick:_||s?i:u,ref:n,target:l}))});var Sh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Sh||(Sh={}));var Mh;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Mh||(Mh={}));function wx(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=nx(),l=Cl(),c=d0(t,{relative:o});return ce.useCallback(d=>{if(xx(d,n)){d.preventDefault();let h=i!==void 0?i:al(l)===al(c);a(t,{replace:h,state:r,preventScrollReset:s,relative:o})}},[l,a,c,i,r,n,t,s,o])}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qd="155",Ax=0,Eh=1,Rx=2,p0=1,Cx=2,ei=3,Gi=0,Qt=1,ii=2,Oi=0,os=1,bh=2,Th=3,wh=4,Lx=5,zr=100,Px=101,Ux=102,Ah=103,Rh=104,Dx=200,Ix=201,Nx=202,Fx=203,m0=204,g0=205,Ox=206,kx=207,zx=208,Bx=209,Hx=210,Gx=0,Vx=1,Wx=2,Hu=3,Xx=4,jx=5,Yx=6,qx=7,v0=0,$x=1,Kx=2,ki=0,Zx=1,Jx=2,Qx=3,eS=4,tS=5,_0=300,ms=301,gs=302,Gu=303,Vu=304,Ll=306,Wu=1e3,Pn=1001,Xu=1002,Ht=1003,Ch=1004,dc=1005,gn=1006,nS=1007,Eo=1008,zi=1009,iS=1010,rS=1011,$d=1012,y0=1013,wi=1014,Ai=1015,bo=1016,x0=1017,S0=1018,lr=1020,sS=1021,Un=1023,oS=1024,aS=1025,cr=1026,vs=1027,lS=1028,M0=1029,cS=1030,E0=1031,b0=1033,fc=33776,hc=33777,pc=33778,mc=33779,Lh=35840,Ph=35841,Uh=35842,Dh=35843,uS=36196,Ih=37492,Nh=37496,Fh=37808,Oh=37809,kh=37810,zh=37811,Bh=37812,Hh=37813,Gh=37814,Vh=37815,Wh=37816,Xh=37817,jh=37818,Yh=37819,qh=37820,$h=37821,gc=36492,dS=36283,Kh=36284,Zh=36285,Jh=36286,T0=3e3,ur=3001,fS=3200,hS=3201,w0=0,pS=1,dr="",Ue="srgb",Xn="srgb-linear",A0="display-p3",vc=7680,mS=519,gS=512,vS=513,_S=514,yS=515,xS=516,SS=517,MS=518,ES=519,Qh=35044,ep="300 es",ju=1035,oi=2e3,ul=2001;class bs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_c=Math.PI/180,Yu=180/Math.PI;function Po(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[t&255]+Dt[t>>8&255]+Dt[t>>16&255]+Dt[t>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[n&63|128]+Dt[n>>8&255]+"-"+Dt[n>>16&255]+Dt[n>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function qt(t,e,n){return Math.max(e,Math.min(n,t))}function bS(t,e){return(t%e+e)%e}function yc(t,e,n){return(1-n)*t+n*e}function tp(t){return(t&t-1)===0&&t!==0}function qu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Fs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,n=0){Ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,n,i,r,s,o,a,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],_=i[8],y=r[0],p=r[3],u=r[6],g=r[1],v=r[4],x=r[7],E=r[2],R=r[5],A=r[8];return s[0]=o*y+a*g+l*E,s[3]=o*p+a*v+l*R,s[6]=o*u+a*x+l*A,s[1]=c*y+d*g+h*E,s[4]=c*p+d*v+h*R,s[7]=c*u+d*x+h*A,s[2]=f*y+m*g+_*E,s[5]=f*p+m*v+_*R,s[8]=f*u+m*x+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,m=c*s-o*l,_=n*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*c-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(xc.makeScale(e,n)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,n){return this.premultiply(xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xc=new Ne;function R0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function dl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const np={};function io(t){t in np||(np[t]=!0,console.warn(t))}function as(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Sc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const TS=new Ne().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),wS=new Ne().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function AS(t){return t.convertSRGBToLinear().applyMatrix3(wS)}function RS(t){return t.applyMatrix3(TS).convertLinearToSRGB()}const CS={[Xn]:t=>t,[Ue]:t=>t.convertSRGBToLinear(),[A0]:AS},LS={[Xn]:t=>t,[Ue]:t=>t.convertLinearToSRGB(),[A0]:RS},En={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Xn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=CS[e],r=LS[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Er;class C0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Er===void 0&&(Er=dl("canvas")),Er.width=e.width,Er.height=e.height;const i=Er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Er}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=dl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=as(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(as(n[i]/255)*255):n[i]=as(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PS=0;class L0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Po(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mc(r[o].image)):s.push(Mc(r[o]))}else s=Mc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Mc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?C0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let US=0;class ln extends bs{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Pn,r=Pn,s=gn,o=Eo,a=Un,l=zi,c=ln.DEFAULT_ANISOTROPY,d=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=Po(),this.name="",this.source=new L0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===ur?Ue:dr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wu:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Xu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wu:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Xu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ue?ur:T0}set encoding(e){io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ur?Ue:dr}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=_0;ln.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,n=0,i=0,r=1){et.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],_=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,x=(m+1)/2,E=(u+1)/2,R=(d+f)/4,A=(h+y)/4,P=(_+p)/4;return v>x&&v>E?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=A/i):x>E?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=R/r,s=P/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=A/s,r=P/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-_)*(p-_)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(p-_)/g,this.y=(h-y)/g,this.z=(f-d)/g,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DS extends bs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new et(0,0,e,n),this.scissorTest=!1,this.viewport=new et(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(io("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ur?Ue:dr),this.texture=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:gn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new L0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends DS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class P0 extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class IS extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(h!==y||l!==f||c!==m||d!==_){let p=1-a;const u=l*f+c*m+d*_+h*y,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const E=Math.sqrt(v),R=Math.atan2(E,u*g);p=Math.sin(p*R)/E,a=Math.sin(a*R)/E}const x=a*g;if(l=l*p+f*x,c=c*p+m*x,d=d*p+_*x,h=h*p+y*x,p===1-a){const E=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=E,c*=E,d*=E,h*=E}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+d*h+l*m-c*f,e[n+1]=l*_+d*f+c*h-a*m,e[n+2]=c*_+d*m+a*f-l*h,e[n+3]=d*_-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"YXZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"ZXY":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"ZYX":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"YZX":this._x=f*d*h+c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h-f*m*_;break;case"XZY":this._x=f*d*h-c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ip.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ip.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*r-a*i,d=l*i+a*n-s*r,h=l*r+s*i-o*n,f=-s*n-o*i-a*r;return this.x=c*l+f*-s+d*-a-h*-o,this.y=d*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-d*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ec=new D,ip=new Uo;class Do{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint($n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint($n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=$n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox),br.applyMatrix4(e.matrixWorld),this.union(br);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)$n.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint($n)}else r.boundingBox===null&&r.computeBoundingBox(),br.copy(r.boundingBox),br.applyMatrix4(e.matrixWorld),this.union(br)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),ea.subVectors(this.max,Os),Tr.subVectors(e.a,Os),wr.subVectors(e.b,Os),Ar.subVectors(e.c,Os),mi.subVectors(wr,Tr),gi.subVectors(Ar,wr),qi.subVectors(Tr,Ar);let n=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-qi.z,qi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,qi.z,0,-qi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-qi.y,qi.x,0];return!bc(n,Tr,wr,Ar,ea)||(n=[1,0,0,0,1,0,0,0,1],!bc(n,Tr,wr,Ar,ea))?!1:(ta.crossVectors(mi,gi),n=[ta.x,ta.y,ta.z],bc(n,Tr,wr,Ar,ea))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new D,new D,new D,new D,new D,new D,new D,new D],$n=new D,br=new Do,Tr=new D,wr=new D,Ar=new D,mi=new D,gi=new D,qi=new D,Os=new D,ea=new D,ta=new D,$i=new D;function bc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){$i.fromArray(t,s);const a=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),c=n.dot($i),d=i.dot($i);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const NS=new Do,ks=new D,Tc=new D;class Pl{constructor(e=new D,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):NS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const n=ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(Tc)),this.expandByPoint(ks.copy(e.center).sub(Tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new D,wc=new D,na=new D,vi=new D,Ac=new D,ia=new D,Rc=new D;class U0{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Kn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,n),Kn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){wc.copy(e).add(n).multiplyScalar(.5),na.copy(n).sub(e).normalize(),vi.copy(this.origin).sub(wc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(na),a=vi.dot(this.direction),l=-vi.dot(na),c=vi.lengthSq(),d=Math.abs(1-o*o);let h,f,m,_;if(d>0)if(h=o*l-a,f=o*a-l,_=s*d,h>=0)if(f>=-_)if(f<=_){const y=1/d;h*=y,f*=y,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(wc).addScaledVector(na,f),m}intersectSphere(e,n){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),r=Kn.dot(Kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,n,i,r,s){Ac.subVectors(n,e),ia.subVectors(i,e),Rc.crossVectors(Ac,ia);let o=this.direction.dot(Rc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(ia.crossVectors(vi,ia));if(l<0)return null;const c=a*this.direction.dot(Ac.cross(vi));if(c<0||l+c>o)return null;const d=-a*vi.dot(Rc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,n,i,r,s,o,a,l,c,d,h,f,m,_,y,p){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,m,_,y,p)}set(e,n,i,r,s,o,a,l,c,d,h,f,m,_,y,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=_,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),o=1/Rr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,m=o*h,_=a*d,y=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,_=c*d,y=c*h;n[0]=f+y*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=m*a-_,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,_=c*d,y=c*h;n[0]=f-y*a,n[4]=-o*h,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*d,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,m=o*h,_=a*d,y=a*h;n[0]=l*d,n[4]=_*c-m,n[8]=f*c+y,n[1]=l*h,n[5]=y*c+f,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,y=a*c;n[0]=l*d,n[4]=y-f*h,n[8]=_*h+m,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=m*h+_,n[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,y=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+y,n[5]=o*d,n[9]=m*h-_,n[2]=_*h-m,n[6]=a*d,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FS,e,OS)}lookAt(e,n,i){const r=this.elements;return tn.subVectors(e,n),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),_i.crossVectors(i,tn),_i.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),_i.crossVectors(i,tn)),_i.normalize(),ra.crossVectors(tn,_i),r[0]=_i.x,r[4]=ra.x,r[8]=tn.x,r[1]=_i.y,r[5]=ra.y,r[9]=tn.y,r[2]=_i.z,r[6]=ra.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],_=i[2],y=i[6],p=i[10],u=i[14],g=i[3],v=i[7],x=i[11],E=i[15],R=r[0],A=r[4],P=r[8],M=r[12],T=r[1],$=r[5],Q=r[9],k=r[13],j=r[2],Y=r[6],Z=r[10],q=r[14],L=r[3],V=r[7],z=r[11],I=r[15];return s[0]=o*R+a*T+l*j+c*L,s[4]=o*A+a*$+l*Y+c*V,s[8]=o*P+a*Q+l*Z+c*z,s[12]=o*M+a*k+l*q+c*I,s[1]=d*R+h*T+f*j+m*L,s[5]=d*A+h*$+f*Y+m*V,s[9]=d*P+h*Q+f*Z+m*z,s[13]=d*M+h*k+f*q+m*I,s[2]=_*R+y*T+p*j+u*L,s[6]=_*A+y*$+p*Y+u*V,s[10]=_*P+y*Q+p*Z+u*z,s[14]=_*M+y*k+p*q+u*I,s[3]=g*R+v*T+x*j+E*L,s[7]=g*A+v*$+x*Y+E*V,s[11]=g*P+v*Q+x*Z+E*z,s[15]=g*M+v*k+x*q+E*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],_=e[3],y=e[7],p=e[11],u=e[15];return _*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+y*(+n*l*m-n*c*f+s*o*f-r*o*m+r*c*d-s*l*d)+p*(+n*c*h-n*a*m-s*o*h+i*o*m+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],_=e[12],y=e[13],p=e[14],u=e[15],g=h*p*c-y*f*c+y*l*m-a*p*m-h*l*u+a*f*u,v=_*f*c-d*p*c-_*l*m+o*p*m+d*l*u-o*f*u,x=d*y*c-_*h*c+_*a*m-o*y*m-d*a*u+o*h*u,E=_*h*l-d*y*l-_*a*f+o*y*f+d*a*p-o*h*p,R=n*g+i*v+r*x+s*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=g*A,e[1]=(y*f*s-h*p*s-y*r*m+i*p*m+h*r*u-i*f*u)*A,e[2]=(a*p*s-y*l*s+y*r*c-i*p*c-a*r*u+i*l*u)*A,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*A,e[4]=v*A,e[5]=(d*p*s-_*f*s+_*r*m-n*p*m-d*r*u+n*f*u)*A,e[6]=(_*l*s-o*p*s-_*r*c+n*p*c+o*r*u-n*l*u)*A,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*m+n*l*m)*A,e[8]=x*A,e[9]=(_*h*s-d*y*s-_*i*m+n*y*m+d*i*u-n*h*u)*A,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*A,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*m-n*a*m)*A,e[12]=E*A,e[13]=(d*y*r-_*h*r+_*i*f-n*y*f-d*i*p+n*h*p)*A,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*p-n*a*p)*A,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,m=s*d,_=s*h,y=o*d,p=o*h,u=a*h,g=l*c,v=l*d,x=l*h,E=i.x,R=i.y,A=i.z;return r[0]=(1-(y+u))*E,r[1]=(m+x)*E,r[2]=(_-v)*E,r[3]=0,r[4]=(m-x)*R,r[5]=(1-(f+u))*R,r[6]=(p+g)*R,r[7]=0,r[8]=(_+v)*A,r[9]=(p-g)*A,r[10]=(1-(f+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Rr.set(r[0],r[1],r[2]).length();const o=Rr.set(r[4],r[5],r[6]).length(),a=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const c=1/s,d=1/o,h=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=d,bn.elements[5]*=d,bn.elements[6]*=d,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,n.setFromRotationMatrix(bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=oi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let m,_;if(a===oi)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ul)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=oi){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,m=(i+r)*d;let _,y;if(a===oi)_=(o+s)*h,y=-2*h;else if(a===ul)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Rr=new D,bn=new ut,FS=new D(0,0,0),OS=new D(1,1,1),_i=new D,ra=new D,tn=new D,rp=new ut,sp=new Uo;class Ul{constructor(e=0,n=0,i=0,r=Ul.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return rp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sp.setFromEuler(this),this.setFromQuaternion(sp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ul.DEFAULT_ORDER="XYZ";class D0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kS=0;const op=new D,Cr=new Uo,Zn=new ut,sa=new D,zs=new D,zS=new D,BS=new Uo,ap=new D(1,0,0),lp=new D(0,1,0),cp=new D(0,0,1),HS={type:"added"},up={type:"removed"};class At extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new D,n=new Ul,i=new Uo,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ne}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new D0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cr.setFromAxisAngle(e,n),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,n){return Cr.setFromAxisAngle(e,n),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(ap,e)}rotateY(e){return this.rotateOnAxis(lp,e)}rotateZ(e){return this.rotateOnAxis(cp,e)}translateOnAxis(e,n){return op.copy(e).applyQuaternion(this.quaternion),this.position.add(op.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ap,e)}translateY(e){return this.translateOnAxis(lp,e)}translateZ(e){return this.translateOnAxis(cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?sa.copy(e):sa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(zs,sa,this.up):Zn.lookAt(sa,zs,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),Cr.setFromRotationMatrix(Zn),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(HS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(up)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(up)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,zS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,BS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}At.DEFAULT_UP=new D(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new D,Jn=new D,Cc=new D,Qn=new D,Lr=new D,Pr=new D,dp=new D,Lc=new D,Pc=new D,Uc=new D;let oa=!1;class Ln{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Tn.subVectors(e,n),r.cross(Tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Tn.subVectors(r,n),Jn.subVectors(i,n),Cc.subVectors(e,n);const o=Tn.dot(Tn),a=Tn.dot(Jn),l=Tn.dot(Cc),c=Jn.dot(Jn),d=Jn.dot(Cc),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(c*l-a*d)*f,_=(o*d-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Qn),Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getUV(e,n,i,r,s,o,a,l){return oa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oa=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Qn),l.setScalar(0),l.addScaledVector(s,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l}static isFrontFacing(e,n,i,r){return Tn.subVectors(i,n),Jn.subVectors(e,n),Tn.cross(Jn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Tn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ln.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return oa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oa=!0),Ln.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Ln.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Lr.subVectors(r,i),Pr.subVectors(s,i),Lc.subVectors(e,i);const l=Lr.dot(Lc),c=Pr.dot(Lc);if(l<=0&&c<=0)return n.copy(i);Pc.subVectors(e,r);const d=Lr.dot(Pc),h=Pr.dot(Pc);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Lr,o);Uc.subVectors(e,s);const m=Lr.dot(Uc),_=Pr.dot(Uc);if(_>=0&&m<=_)return n.copy(s);const y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Pr,a);const p=d*_-m*h;if(p<=0&&h-d>=0&&m-_>=0)return dp.subVectors(s,r),a=(h-d)/(h-d+(m-_)),n.copy(r).addScaledVector(dp,a);const u=1/(p+y+f);return o=y*u,a=f*u,n.copy(i).addScaledVector(Lr,o).addScaledVector(Pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let GS=0;class Ts extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=os,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=m0,this.blendDst=g0,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Hu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vc,this.stencilZFail=vc,this.stencilZPass=vc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const I0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Dc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ue){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,En.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=En.workingColorSpace){return this.r=e,this.g=n,this.b=i,En.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=En.workingColorSpace){if(e=bS(e,1),n=qt(n,0,1),i=qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Dc(o,s,e+1/3),this.g=Dc(o,s,e),this.b=Dc(o,s,e-1/3)}return En.toWorkingColorSpace(this,r),this}setStyle(e,n=Ue){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ue){const i=I0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}copyLinearToSRGB(e){return this.r=Sc(e.r),this.g=Sc(e.g),this.b=Sc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ue){return En.fromWorkingColorSpace(It.copy(this),e),Math.round(qt(It.r*255,0,255))*65536+Math.round(qt(It.g*255,0,255))*256+Math.round(qt(It.b*255,0,255))}getHexString(e=Ue){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=En.workingColorSpace){En.fromWorkingColorSpace(It.copy(this),n);const i=It.r,r=It.g,s=It.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=En.workingColorSpace){return En.fromWorkingColorSpace(It.copy(this),n),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Ue){En.fromWorkingColorSpace(It.copy(this),e);const n=It.r,i=It.g,r=It.b;return e!==Ue?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(wn),wn.h+=e,wn.s+=n,wn.l+=i,this.setHSL(wn.h,wn.s,wn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(wn),e.getHSL(aa);const i=yc(wn.h,aa.h,n),r=yc(wn.s,aa.s,n),s=yc(wn.l,aa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Xe;Xe.NAMES=I0;class N0 extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=v0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new D,la=new Ve;class Nn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Qh,this.updateRange={offset:0,count:-1},this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)la.fromBufferAttribute(this,n),la.applyMatrix3(e),this.setXY(n,la.x,la.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyMatrix3(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyMatrix4(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyNormalMatrix(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.transformDirection(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fs(n,this.array)),n}setX(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fs(n,this.array)),n}setY(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fs(n,this.array)),n}setW(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class F0 extends Nn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class O0 extends Nn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Wn extends Nn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let VS=0;const hn=new ut,Ic=new At,Ur=new D,nn=new Do,Bs=new Do,St=new D;class jn extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(R0(e)?O0:F0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,n,i){return hn.makeTranslation(e,n,i),this.applyMatrix4(hn),this}scale(e,n,i){return hn.makeScale(e,n,i),this.applyMatrix4(hn),this}lookAt(e){return Ic.lookAt(e),Ic.updateMatrix(),this.applyMatrix4(Ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(nn.min,Bs.min),nn.expandByPoint(St),St.addVectors(nn.max,Bs.max),nn.expandByPoint(St)):(nn.expandByPoint(Bs.min),nn.expandByPoint(Bs.max))}nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)St.fromBufferAttribute(a,c),l&&(Ur.fromBufferAttribute(e,c),St.add(Ur)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let T=0;T<a;T++)c[T]=new D,d[T]=new D;const h=new D,f=new D,m=new D,_=new Ve,y=new Ve,p=new Ve,u=new D,g=new D;function v(T,$,Q){h.fromArray(r,T*3),f.fromArray(r,$*3),m.fromArray(r,Q*3),_.fromArray(o,T*2),y.fromArray(o,$*2),p.fromArray(o,Q*2),f.sub(h),m.sub(h),y.sub(_),p.sub(_);const k=1/(y.x*p.y-p.x*y.y);isFinite(k)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(k),g.copy(m).multiplyScalar(y.x).addScaledVector(f,-p.x).multiplyScalar(k),c[T].add(u),c[$].add(u),c[Q].add(u),d[T].add(g),d[$].add(g),d[Q].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let T=0,$=x.length;T<$;++T){const Q=x[T],k=Q.start,j=Q.count;for(let Y=k,Z=k+j;Y<Z;Y+=3)v(i[Y+0],i[Y+1],i[Y+2])}const E=new D,R=new D,A=new D,P=new D;function M(T){A.fromArray(s,T*3),P.copy(A);const $=c[T];E.copy($),E.sub(A.multiplyScalar(A.dot($))).normalize(),R.crossVectors(P,$);const k=R.dot(d[T])<0?-1:1;l[T*4]=E.x,l[T*4+1]=E.y,l[T*4+2]=E.z,l[T*4+3]=k}for(let T=0,$=x.length;T<$;++T){const Q=x[T],k=Q.start,j=Q.count;for(let Y=k,Z=k+j;Y<Z;Y+=3)M(i[Y+0]),M(i[Y+1]),M(i[Y+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,d=new D,h=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)St.fromBufferAttribute(e,n),St.normalize(),e.setXYZ(n,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let m=0,_=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*d;for(let u=0;u<d;u++)f[_++]=c[m++]}return new Nn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fp=new ut,Ki=new U0,ca=new Pl,hp=new D,Dr=new D,Ir=new D,Nr=new D,Nc=new D,ua=new D,da=new Ve,fa=new Ve,ha=new Ve,pp=new D,mp=new D,gp=new D,pa=new D,ma=new D;class _n extends At{constructor(e=new jn,n=new N0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(Nc.fromBufferAttribute(h,e),o?ua.addScaledVector(Nc,d):ua.addScaledVector(Nc.sub(n),d))}n.add(ua)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(s),Ki.copy(e.ray).recast(e.near),!(ca.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(ca,hp)===null||Ki.origin.distanceToSquared(hp)>(e.far-e.near)**2))&&(fp.copy(s).invert(),Ki.copy(e.ray).applyMatrix4(fp),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ki)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const p=f[_],u=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=g,E=v;x<E;x+=3){const R=a.getX(x),A=a.getX(x+1),P=a.getX(x+2);r=ga(this,u,e,i,c,d,h,R,A,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=_,u=y;p<u;p+=3){const g=a.getX(p),v=a.getX(p+1),x=a.getX(p+2);r=ga(this,o,e,i,c,d,h,g,v,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const p=f[_],u=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=g,E=v;x<E;x+=3){const R=x,A=x+1,P=x+2;r=ga(this,u,e,i,c,d,h,R,A,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=_,u=y;p<u;p+=3){const g=p,v=p+1,x=p+2;r=ga(this,o,e,i,c,d,h,g,v,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function WS(t,e,n,i,r,s,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Gi,a),l===null)return null;ma.copy(a),ma.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ma);return c<n.near||c>n.far?null:{distance:c,point:ma.clone(),object:t}}function ga(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Dr),t.getVertexPosition(l,Ir),t.getVertexPosition(c,Nr);const d=WS(t,e,n,i,Dr,Ir,Nr,pa);if(d){r&&(da.fromBufferAttribute(r,a),fa.fromBufferAttribute(r,l),ha.fromBufferAttribute(r,c),d.uv=Ln.getInterpolation(pa,Dr,Ir,Nr,da,fa,ha,new Ve)),s&&(da.fromBufferAttribute(s,a),fa.fromBufferAttribute(s,l),ha.fromBufferAttribute(s,c),d.uv1=Ln.getInterpolation(pa,Dr,Ir,Nr,da,fa,ha,new Ve),d.uv2=d.uv1),o&&(pp.fromBufferAttribute(o,a),mp.fromBufferAttribute(o,l),gp.fromBufferAttribute(o,c),d.normal=Ln.getInterpolation(pa,Dr,Ir,Nr,pp,mp,gp,new D),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};Ln.getNormal(Dr,Ir,Nr,h.normal),d.face=h}return d}class Io extends jn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wn(c,3)),this.setAttribute("normal",new Wn(d,3)),this.setAttribute("uv",new Wn(h,2));function _(y,p,u,g,v,x,E,R,A,P,M){const T=x/A,$=E/P,Q=x/2,k=E/2,j=R/2,Y=A+1,Z=P+1;let q=0,L=0;const V=new D;for(let z=0;z<Z;z++){const I=z*$-k;for(let O=0;O<Y;O++){const ae=O*T-Q;V[y]=ae*g,V[p]=I*v,V[u]=j,c.push(V.x,V.y,V.z),V[y]=0,V[p]=0,V[u]=R>0?1:-1,d.push(V.x,V.y,V.z),h.push(O/A),h.push(1-z/P),q+=1}}for(let z=0;z<P;z++)for(let I=0;I<A;I++){const O=f+I+Y*z,ae=f+I+Y*(z+1),se=f+(I+1)+Y*(z+1),de=f+(I+1)+Y*z;l.push(O,ae,de),l.push(ae,se,de),L+=6}a.addGroup(m,L,M),m+=L,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function zt(t){const e={};for(let n=0;n<t.length;n++){const i=_s(t[n]);for(const r in i)e[r]=i[r]}return e}function XS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function k0(t){return t.getRenderTarget()===null?t.outputColorSpace:Xn}const jS={clone:_s,merge:zt};var YS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YS,this.fragmentShader=qS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=XS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class z0 extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends z0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Yu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yu*2*Math.atan(Math.tan(_c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_c*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fr=-90,Or=1;class $S extends At{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new sn(Fr,Or,e,n);r.layers=this.layers,this.add(r);const s=new sn(Fr,Or,e,n);s.layers=this.layers,this.add(s);const o=new sn(Fr,Or,e,n);o.layers=this.layers,this.add(o);const a=new sn(Fr,Or,e,n);a.layers=this.layers,this.add(a);const l=new sn(Fr,Or,e,n);l.layers=this.layers,this.add(l);const c=new sn(Fr,Or,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,d=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(d),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class B0 extends ln{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:ms,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KS extends vr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(io("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ur?Ue:dr),this.texture=new B0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:gn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Io(5,5,5),s=new _r({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Oi});s.uniforms.tEquirect.value=n;const o=new _n(r,s),a=n.minFilter;return n.minFilter===Eo&&(n.minFilter=gn),new $S(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Fc=new D,ZS=new D,JS=new Ne;class er{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Fc.subVectors(i,n).cross(ZS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Fc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||JS.getNormalMatrix(e),r=this.coplanarPoint(Fc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new Pl,va=new D;class Kd{constructor(e=new er,n=new er,i=new er,r=new er,s=new er,o=new er){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],m=r[8],_=r[9],y=r[10],p=r[11],u=r[12],g=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,p-m,x-u).normalize(),i[1].setComponents(l+s,f+c,p+m,x+u).normalize(),i[2].setComponents(l+o,f+d,p+_,x+g).normalize(),i[3].setComponents(l-o,f-d,p-_,x-g).normalize(),i[4].setComponents(l-a,f-h,p-y,x-v).normalize(),n===oi)i[5].setComponents(l+a,f+h,p+y,x+v).normalize();else if(n===ul)i[5].setComponents(a,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(va.x=r.normal.x>0?e.max.x:e.min.x,va.y=r.normal.y>0?e.max.y:e.min.y,va.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function H0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function QS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const h=c.array,f=c.usage,m=t.createBuffer();t.bindBuffer(d,m),t.bufferData(d,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=t.SHORT;else if(h instanceof Uint32Array)_=t.UNSIGNED_INT;else if(h instanceof Int32Array)_=t.INT;else if(h instanceof Int8Array)_=t.BYTE;else if(h instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,d,h){const f=d.array,m=d.updateRange;t.bindBuffer(h,c),m.count===-1?t.bufferSubData(h,0,f):(n?t.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):t.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,d)):h.version<c.version&&(s(h.buffer,c,d),h.version=c.version)}return{get:o,remove:a,update:l}}class Zd extends jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,m=[],_=[],y=[],p=[];for(let u=0;u<d;u++){const g=u*f-o;for(let v=0;v<c;v++){const x=v*h-s;_.push(x,-g,0),y.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const v=g+c*u,x=g+c*(u+1),E=g+1+c*(u+1),R=g+1+c*u;m.push(v,x,R),m.push(x,E,R)}this.setIndex(m),this.setAttribute("position",new Wn(_,3)),this.setAttribute("normal",new Wn(y,3)),this.setAttribute("uv",new Wn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zd(e.width,e.height,e.widthSegments,e.heightSegments)}}var e1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t1=`#ifdef USE_ALPHAHASH
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
#endif`,n1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,s1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,a1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d1=`#ifdef USE_IRIDESCENCE
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
#endif`,f1=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,S1=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,M1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,E1=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R1="gl_FragColor = linearToOutputTexel( gl_FragColor );",C1=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,P1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U1=`#ifdef USE_ENVMAP
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
#endif`,D1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,N1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z1=`#ifdef USE_GRADIENTMAP
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
}`,B1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,H1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,X1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,j1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Z1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,J1=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,tM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sM=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,oM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lM=`#if defined( USE_POINTS_UV )
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
#endif`,cM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,pM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,gM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xM=`#ifdef USE_NORMALMAP
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
#endif`,SM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,MM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,IM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,FM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,OM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,zM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BM=`#ifdef USE_SKINNING
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
#endif`,HM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WM=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XM=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jM=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,rE=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,oE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,aE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dE=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,fE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,hE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,pE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,mE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,gE=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_E=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,xE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,SE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,ME=`#define STANDARD
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,bE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,TE=`uniform float size;
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
}`,wE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,AE=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,RE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,CE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,LE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Pe={alphahash_fragment:e1,alphahash_pars_fragment:t1,alphamap_fragment:n1,alphamap_pars_fragment:i1,alphatest_fragment:r1,alphatest_pars_fragment:s1,aomap_fragment:o1,aomap_pars_fragment:a1,begin_vertex:l1,beginnormal_vertex:c1,bsdfs:u1,iridescence_fragment:d1,bumpmap_pars_fragment:f1,clipping_planes_fragment:h1,clipping_planes_pars_fragment:p1,clipping_planes_pars_vertex:m1,clipping_planes_vertex:g1,color_fragment:v1,color_pars_fragment:_1,color_pars_vertex:y1,color_vertex:x1,common:S1,cube_uv_reflection_fragment:M1,defaultnormal_vertex:E1,displacementmap_pars_vertex:b1,displacementmap_vertex:T1,emissivemap_fragment:w1,emissivemap_pars_fragment:A1,colorspace_fragment:R1,colorspace_pars_fragment:C1,envmap_fragment:L1,envmap_common_pars_fragment:P1,envmap_pars_fragment:U1,envmap_pars_vertex:D1,envmap_physical_pars_fragment:X1,envmap_vertex:I1,fog_vertex:N1,fog_pars_vertex:F1,fog_fragment:O1,fog_pars_fragment:k1,gradientmap_pars_fragment:z1,lightmap_fragment:B1,lightmap_pars_fragment:H1,lights_lambert_fragment:G1,lights_lambert_pars_fragment:V1,lights_pars_begin:W1,lights_toon_fragment:j1,lights_toon_pars_fragment:Y1,lights_phong_fragment:q1,lights_phong_pars_fragment:$1,lights_physical_fragment:K1,lights_physical_pars_fragment:Z1,lights_fragment_begin:J1,lights_fragment_maps:Q1,lights_fragment_end:eM,logdepthbuf_fragment:tM,logdepthbuf_pars_fragment:nM,logdepthbuf_pars_vertex:iM,logdepthbuf_vertex:rM,map_fragment:sM,map_pars_fragment:oM,map_particle_fragment:aM,map_particle_pars_fragment:lM,metalnessmap_fragment:cM,metalnessmap_pars_fragment:uM,morphcolor_vertex:dM,morphnormal_vertex:fM,morphtarget_pars_vertex:hM,morphtarget_vertex:pM,normal_fragment_begin:mM,normal_fragment_maps:gM,normal_pars_fragment:vM,normal_pars_vertex:_M,normal_vertex:yM,normalmap_pars_fragment:xM,clearcoat_normal_fragment_begin:SM,clearcoat_normal_fragment_maps:MM,clearcoat_pars_fragment:EM,iridescence_pars_fragment:bM,opaque_fragment:TM,packing:wM,premultiplied_alpha_fragment:AM,project_vertex:RM,dithering_fragment:CM,dithering_pars_fragment:LM,roughnessmap_fragment:PM,roughnessmap_pars_fragment:UM,shadowmap_pars_fragment:DM,shadowmap_pars_vertex:IM,shadowmap_vertex:NM,shadowmask_pars_fragment:FM,skinbase_vertex:OM,skinning_pars_vertex:kM,skinning_vertex:zM,skinnormal_vertex:BM,specularmap_fragment:HM,specularmap_pars_fragment:GM,tonemapping_fragment:VM,tonemapping_pars_fragment:WM,transmission_fragment:XM,transmission_pars_fragment:jM,uv_pars_fragment:YM,uv_pars_vertex:qM,uv_vertex:$M,worldpos_vertex:KM,background_vert:ZM,background_frag:JM,backgroundCube_vert:QM,backgroundCube_frag:eE,cube_vert:tE,cube_frag:nE,depth_vert:iE,depth_frag:rE,distanceRGBA_vert:sE,distanceRGBA_frag:oE,equirect_vert:aE,equirect_frag:lE,linedashed_vert:cE,linedashed_frag:uE,meshbasic_vert:dE,meshbasic_frag:fE,meshlambert_vert:hE,meshlambert_frag:pE,meshmatcap_vert:mE,meshmatcap_frag:gE,meshnormal_vert:vE,meshnormal_frag:_E,meshphong_vert:yE,meshphong_frag:xE,meshphysical_vert:SE,meshphysical_frag:ME,meshtoon_vert:EE,meshtoon_frag:bE,points_vert:TE,points_frag:wE,shadow_vert:AE,shadow_frag:RE,sprite_vert:CE,sprite_frag:LE},oe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Bn={basic:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:zt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:zt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:zt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:zt([oe.points,oe.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:zt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:zt([oe.common,oe.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:zt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:zt([oe.sprite,oe.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:zt([oe.common,oe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:zt([oe.lights,oe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Bn.physical={uniforms:zt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const _a={r:0,b:0,g:0};function PE(t,e,n,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,c,d,h=null,f=0,m=null;function _(p,u){let g=!1,v=u.isScene===!0?u.background:null;switch(v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),g=!0),t.xr.getEnvironmentBlendMode()){case"opaque":g=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),g=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),g=!0;break}(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ll)?(d===void 0&&(d=new _n(new Io(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:_s(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=v.colorSpace!==Ue,(h!==v||f!==v.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=v,f=v.version,m=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new _n(new Zd(2,2),new _r({name:"BackgroundMaterial",uniforms:_s(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,u){p.getRGB(_a,k0(t)),i.buffers.color.setClear(_a.r,_a.g,_a.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(a,l)},render:_}}function UE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,d=!1;function h(j,Y,Z,q,L){let V=!1;if(o){const z=y(q,Z,Y);c!==z&&(c=z,m(c.object)),V=u(j,q,Z,L),V&&g(j,q,Z,L)}else{const z=Y.wireframe===!0;(c.geometry!==q.id||c.program!==Z.id||c.wireframe!==z)&&(c.geometry=q.id,c.program=Z.id,c.wireframe=z,V=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(V||d)&&(d=!1,P(j,Y,Z,q),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(j){return i.isWebGL2?t.bindVertexArray(j):s.bindVertexArrayOES(j)}function _(j){return i.isWebGL2?t.deleteVertexArray(j):s.deleteVertexArrayOES(j)}function y(j,Y,Z){const q=Z.wireframe===!0;let L=a[j.id];L===void 0&&(L={},a[j.id]=L);let V=L[Y.id];V===void 0&&(V={},L[Y.id]=V);let z=V[q];return z===void 0&&(z=p(f()),V[q]=z),z}function p(j){const Y=[],Z=[],q=[];for(let L=0;L<r;L++)Y[L]=0,Z[L]=0,q[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:Z,attributeDivisors:q,object:j,attributes:{},index:null}}function u(j,Y,Z,q){const L=c.attributes,V=Y.attributes;let z=0;const I=Z.getAttributes();for(const O in I)if(I[O].location>=0){const se=L[O];let de=V[O];if(de===void 0&&(O==="instanceMatrix"&&j.instanceMatrix&&(de=j.instanceMatrix),O==="instanceColor"&&j.instanceColor&&(de=j.instanceColor)),se===void 0||se.attribute!==de||de&&se.data!==de.data)return!0;z++}return c.attributesNum!==z||c.index!==q}function g(j,Y,Z,q){const L={},V=Y.attributes;let z=0;const I=Z.getAttributes();for(const O in I)if(I[O].location>=0){let se=V[O];se===void 0&&(O==="instanceMatrix"&&j.instanceMatrix&&(se=j.instanceMatrix),O==="instanceColor"&&j.instanceColor&&(se=j.instanceColor));const de={};de.attribute=se,se&&se.data&&(de.data=se.data),L[O]=de,z++}c.attributes=L,c.attributesNum=z,c.index=q}function v(){const j=c.newAttributes;for(let Y=0,Z=j.length;Y<Z;Y++)j[Y]=0}function x(j){E(j,0)}function E(j,Y){const Z=c.newAttributes,q=c.enabledAttributes,L=c.attributeDivisors;Z[j]=1,q[j]===0&&(t.enableVertexAttribArray(j),q[j]=1),L[j]!==Y&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,Y),L[j]=Y)}function R(){const j=c.newAttributes,Y=c.enabledAttributes;for(let Z=0,q=Y.length;Z<q;Z++)Y[Z]!==j[Z]&&(t.disableVertexAttribArray(Z),Y[Z]=0)}function A(j,Y,Z,q,L,V,z){z===!0?t.vertexAttribIPointer(j,Y,Z,L,V):t.vertexAttribPointer(j,Y,Z,q,L,V)}function P(j,Y,Z,q){if(i.isWebGL2===!1&&(j.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const L=q.attributes,V=Z.getAttributes(),z=Y.defaultAttributeValues;for(const I in V){const O=V[I];if(O.location>=0){let ae=L[I];if(ae===void 0&&(I==="instanceMatrix"&&j.instanceMatrix&&(ae=j.instanceMatrix),I==="instanceColor"&&j.instanceColor&&(ae=j.instanceColor)),ae!==void 0){const se=ae.normalized,de=ae.itemSize,ge=n.get(ae);if(ge===void 0)continue;const Me=ge.buffer,Ee=ge.type,We=ge.bytesPerElement,Xt=i.isWebGL2===!0&&(Ee===t.INT||Ee===t.UNSIGNED_INT||ae.gpuType===y0);if(ae.isInterleavedBufferAttribute){const De=ae.data,F=De.stride,Ct=ae.offset;if(De.isInstancedInterleavedBuffer){for(let be=0;be<O.locationSize;be++)E(O.location+be,De.meshPerAttribute);j.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let be=0;be<O.locationSize;be++)x(O.location+be);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let be=0;be<O.locationSize;be++)A(O.location+be,de/O.locationSize,Ee,se,F*We,(Ct+de/O.locationSize*be)*We,Xt)}else{if(ae.isInstancedBufferAttribute){for(let De=0;De<O.locationSize;De++)E(O.location+De,ae.meshPerAttribute);j.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let De=0;De<O.locationSize;De++)x(O.location+De);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let De=0;De<O.locationSize;De++)A(O.location+De,de/O.locationSize,Ee,se,de*We,de/O.locationSize*De*We,Xt)}}else if(z!==void 0){const se=z[I];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(O.location,se);break;case 3:t.vertexAttrib3fv(O.location,se);break;case 4:t.vertexAttrib4fv(O.location,se);break;default:t.vertexAttrib1fv(O.location,se)}}}}R()}function M(){Q();for(const j in a){const Y=a[j];for(const Z in Y){const q=Y[Z];for(const L in q)_(q[L].object),delete q[L];delete Y[Z]}delete a[j]}}function T(j){if(a[j.id]===void 0)return;const Y=a[j.id];for(const Z in Y){const q=Y[Z];for(const L in q)_(q[L].object),delete q[L];delete Y[Z]}delete a[j.id]}function $(j){for(const Y in a){const Z=a[Y];if(Z[j.id]===void 0)continue;const q=Z[j.id];for(const L in q)_(q[L].object),delete q[L];delete Z[j.id]}}function Q(){k(),d=!0,c!==l&&(c=l,m(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:k,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:$,initAttributes:v,enableAttribute:x,disableUnusedAttributes:R}}function DE(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,d){t.drawArrays(s,c,d),n.update(d,s,1)}function l(c,d,h){if(h===0)return;let f,m;if(r)f=t,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,d,h),n.update(d,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function IE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,x=o||e.has("OES_texture_float"),E=v&&x,R=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:E,maxSamples:R}}function NE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new er,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!p)s?d(null):c();else{const g=s?0:i,v=g*4;let x=u.clippingState||null;l.value=x,x=d(_,f,v,m);for(let E=0;E!==v;++E)x[E]=n[E];u.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,_){const y=h!==null?h.length:0;let p=null;if(y!==0){if(p=l.value,_!==!0||p===null){const u=m+y*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,x=m;v!==y;++v,x+=4)o.copy(h[v]).applyMatrix4(g,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function FE(t){let e=new WeakMap;function n(o,a){return a===Gu?o.mapping=ms:a===Vu&&(o.mapping=gs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Gu||a===Vu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new KS(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class G0 extends z0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Jr=4,vp=[.125,.215,.35,.446,.526,.582],nr=20,Oc=new G0,_p=new Xe;let kc=null;const tr=(1+Math.sqrt(5))/2,kr=1/tr,yp=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,tr,kr),new D(0,tr,-kr),new D(kr,0,tr),new D(-kr,0,tr),new D(tr,kr,0),new D(-tr,kr,0)];class xp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){kc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kc),e.scissorTest=!1,ya(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:bo,format:Un,colorSpace:Xn,depthBuffer:!1},r=Sp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OE(s)),this._blurMaterial=kE(s,e,n)}return r}_compileMaterial(e){const n=new _n(this._lodPlanes[0],e);this._renderer.compile(n,Oc)}_sceneToCubeUV(e,n,i,r){const a=new sn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(_p),d.toneMapping=ki,d.autoClear=!1;const m=new N0({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),_=new _n(new Io,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(_p),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;ya(r,g*v,u>2?v:0,v,v),d.setRenderTarget(r),y&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ms||e.mapping===gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new _n(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ya(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Oc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yp[(r-1)%yp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new _n(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*nr-1),y=s/_,p=isFinite(s)?1+Math.floor(d*y):nr;p>nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${nr}`);const u=[];let g=0;for(let A=0;A<nr;++A){const P=A/y,M=Math.exp(-P*P/2);u.push(M),A===0?g+=M:A<p&&(g+=2*M)}for(let A=0;A<u.length;A++)u[A]=u[A]/g;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const x=this._sizeLods[r],E=3*x*(r>v-Jr?r-v+Jr:0),R=4*(this._cubeSize-x);ya(n,E,R,3*x,2*x),l.setRenderTarget(n),l.render(h,Oc)}}function OE(t){const e=[],n=[],i=[];let r=t;const s=t-Jr+1+vp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Jr?l=vp[o-t+Jr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,y=3,p=2,u=1,g=new Float32Array(y*_*m),v=new Float32Array(p*_*m),x=new Float32Array(u*_*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,P=R>2?0:-1,M=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];g.set(M,y*_*R),v.set(f,p*_*R);const T=[R,R,R,R,R,R];x.set(T,u*_*R)}const E=new jn;E.setAttribute("position",new Nn(g,y)),E.setAttribute("uv",new Nn(v,p)),E.setAttribute("faceIndex",new Nn(x,u)),e.push(E),r>Jr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Sp(t,e,n){const i=new vr(t,e,n);return i.texture.mapping=Ll,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ya(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function kE(t,e,n){const i=new Float32Array(nr),r=new D(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Mp(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Ep(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Jd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Gu||l===Vu,d=l===ms||l===gs;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new xp(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&r(h)){n===null&&(n=new xp(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function BE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function HE(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let p=0,u=y.length;p<u;p++)e.remove(y[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const y=m[_];for(let p=0,u=y.length;p<u;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let y=0;if(m!==null){const g=m.array;y=m.version;for(let v=0,x=g.length;v<x;v+=3){const E=g[v+0],R=g[v+1],A=g[v+2];f.push(E,R,R,A,A,E)}}else if(_!==void 0){const g=_.array;y=_.version;for(let v=0,x=g.length/3-1;v<x;v+=3){const E=v+0,R=v+1,A=v+2;f.push(E,R,R,A,A,E)}}else return;const p=new(R0(f)?O0:F0)(f,1);p.version=y;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function GE(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function d(f,m){t.drawElements(s,m,a,f*l),n.update(m,s,1)}function h(f,m,_){if(_===0)return;let y,p;if(r)y=t,p="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[p](s,m,a,f*l,_),n.update(m,s,_)}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h}function VE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function WE(t,e){return t[0]-e[0]}function XE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function jE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new et,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let p=s.get(d);if(p===void 0||p.count!==y){let Y=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",Y)};var m=Y;p!==void 0&&p.texture.dispose();const v=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,R=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),E===!0&&(M=3);let T=d.attributes.position.count*M,$=1;T>e.maxTextureSize&&($=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const Q=new Float32Array(T*$*4*y),k=new P0(Q,T,$,y);k.type=Ai,k.needsUpdate=!0;const j=M*4;for(let Z=0;Z<y;Z++){const q=R[Z],L=A[Z],V=P[Z],z=T*$*4*Z;for(let I=0;I<q.count;I++){const O=I*j;v===!0&&(o.fromBufferAttribute(q,I),Q[z+O+0]=o.x,Q[z+O+1]=o.y,Q[z+O+2]=o.z,Q[z+O+3]=0),x===!0&&(o.fromBufferAttribute(L,I),Q[z+O+4]=o.x,Q[z+O+5]=o.y,Q[z+O+6]=o.z,Q[z+O+7]=0),E===!0&&(o.fromBufferAttribute(V,I),Q[z+O+8]=o.x,Q[z+O+9]=o.y,Q[z+O+10]=o.z,Q[z+O+11]=V.itemSize===4?o.w:1)}}p={count:y,texture:k,size:new Ve(T,$)},s.set(d,p),d.addEventListener("dispose",Y)}let u=0;for(let v=0;v<f.length;v++)u+=f[v];const g=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",f),h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let y=i[d.id];if(y===void 0||y.length!==_){y=[];for(let x=0;x<_;x++)y[x]=[x,0];i[d.id]=y}for(let x=0;x<_;x++){const E=y[x];E[0]=x,E[1]=f[x]}y.sort(XE);for(let x=0;x<8;x++)x<_&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(WE);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let g=0;for(let x=0;x<8;x++){const E=a[x],R=E[0],A=E[1];R!==Number.MAX_SAFE_INTEGER&&A?(p&&d.getAttribute("morphTarget"+x)!==p[R]&&d.setAttribute("morphTarget"+x,p[R]),u&&d.getAttribute("morphNormal"+x)!==u[R]&&d.setAttribute("morphNormal"+x,u[R]),r[x]=A,g+=A):(p&&d.hasAttribute("morphTarget"+x)===!0&&d.deleteAttribute("morphTarget"+x),u&&d.hasAttribute("morphNormal"+x)===!0&&d.deleteAttribute("morphNormal"+x),r[x]=0)}const v=d.morphTargetsRelative?1:1-g;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function YE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const V0=new ln,W0=new P0,X0=new IS,j0=new B0,bp=[],Tp=[],wp=new Float32Array(16),Ap=new Float32Array(9),Rp=new Float32Array(4);function ws(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=bp[r];if(s===void 0&&(s=new Float32Array(r),bp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Dl(t,e){let n=Tp[e];n===void 0&&(n=new Int32Array(e),Tp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2fv(this.addr,e),xt(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(yt(n,e))return;t.uniform3fv(this.addr,e),xt(n,e)}}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4fv(this.addr,e),xt(n,e)}}function JE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),xt(n,e)}else{if(yt(n,i))return;Rp.set(i),t.uniformMatrix2fv(this.addr,!1,Rp),xt(n,i)}}function QE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),xt(n,e)}else{if(yt(n,i))return;Ap.set(i),t.uniformMatrix3fv(this.addr,!1,Ap),xt(n,i)}}function eb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),xt(n,e)}else{if(yt(n,i))return;wp.set(i),t.uniformMatrix4fv(this.addr,!1,wp),xt(n,i)}}function tb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2iv(this.addr,e),xt(n,e)}}function ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3iv(this.addr,e),xt(n,e)}}function rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4iv(this.addr,e),xt(n,e)}}function sb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2uiv(this.addr,e),xt(n,e)}}function ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3uiv(this.addr,e),xt(n,e)}}function lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4uiv(this.addr,e),xt(n,e)}}function cb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||V0,r)}function ub(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||X0,r)}function db(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||j0,r)}function fb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||W0,r)}function hb(t){switch(t){case 5126:return qE;case 35664:return $E;case 35665:return KE;case 35666:return ZE;case 35674:return JE;case 35675:return QE;case 35676:return eb;case 5124:case 35670:return tb;case 35667:case 35671:return nb;case 35668:case 35672:return ib;case 35669:case 35673:return rb;case 5125:return sb;case 36294:return ob;case 36295:return ab;case 36296:return lb;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return fb}}function pb(t,e){t.uniform1fv(this.addr,e)}function mb(t,e){const n=ws(e,this.size,2);t.uniform2fv(this.addr,n)}function gb(t,e){const n=ws(e,this.size,3);t.uniform3fv(this.addr,n)}function vb(t,e){const n=ws(e,this.size,4);t.uniform4fv(this.addr,n)}function _b(t,e){const n=ws(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function yb(t,e){const n=ws(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function xb(t,e){const n=ws(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Sb(t,e){t.uniform1iv(this.addr,e)}function Mb(t,e){t.uniform2iv(this.addr,e)}function Eb(t,e){t.uniform3iv(this.addr,e)}function bb(t,e){t.uniform4iv(this.addr,e)}function Tb(t,e){t.uniform1uiv(this.addr,e)}function wb(t,e){t.uniform2uiv(this.addr,e)}function Ab(t,e){t.uniform3uiv(this.addr,e)}function Rb(t,e){t.uniform4uiv(this.addr,e)}function Cb(t,e,n){const i=this.cache,r=e.length,s=Dl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||V0,s[o])}function Lb(t,e,n){const i=this.cache,r=e.length,s=Dl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||X0,s[o])}function Pb(t,e,n){const i=this.cache,r=e.length,s=Dl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||j0,s[o])}function Ub(t,e,n){const i=this.cache,r=e.length,s=Dl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||W0,s[o])}function Db(t){switch(t){case 5126:return pb;case 35664:return mb;case 35665:return gb;case 35666:return vb;case 35674:return _b;case 35675:return yb;case 35676:return xb;case 5124:case 35670:return Sb;case 35667:case 35671:return Mb;case 35668:case 35672:return Eb;case 35669:case 35673:return bb;case 5125:return Tb;case 36294:return wb;case 36295:return Ab;case 36296:return Rb;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Ub}}class Ib{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=hb(n.type)}}class Nb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=Db(n.type)}}class Fb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const zc=/(\w+)(\])?(\[|\.)?/g;function Cp(t,e){t.seq.push(e),t.map[e.id]=e}function Ob(t,e,n){const i=t.name,r=i.length;for(zc.lastIndex=0;;){const s=zc.exec(i),o=zc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Cp(n,c===void 0?new Ib(a,t,e):new Nb(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Fb(a),Cp(n,h)),n=h}}}class Fa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Ob(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Lp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let kb=0;function zb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Bb(t){switch(t){case Xn:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Pp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+zb(t.getShaderSource(e),o)}else return r}function Hb(t,e){const n=Bb(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Gb(t,e){let n;switch(e){case Zx:n="Linear";break;case Jx:n="Reinhard";break;case Qx:n="OptimizedCineon";break;case eS:n="ACESFilmic";break;case tS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Vb(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(js).join(`
`)}function Wb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Xb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function js(t){return t!==""}function Up(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jb=/^[ \t]*#include +<([\w\d./]+)>/gm;function $u(t){return t.replace(jb,qb)}const Yb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qb(t,e){let n=Pe[e];if(n===void 0){const i=Yb.get(e);if(i!==void 0)n=Pe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $u(n)}const $b=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ip(t){return t.replace($b,Kb)}function Kb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Np(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===p0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Cx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function Jb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function eT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case v0:e="ENVMAP_BLENDING_MULTIPLY";break;case $x:e="ENVMAP_BLENDING_MIX";break;case Kx:e="ENVMAP_BLENDING_ADD";break}return e}function tT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function nT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Zb(n),c=Jb(n),d=Qb(n),h=eT(n),f=tT(n),m=n.isWebGL2?"":Vb(n),_=Wb(s),y=r.createProgram();let p,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(js).join(`
`),p.length>0&&(p+=`
`),u=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(js).join(`
`),u.length>0&&(u+=`
`)):(p=[Np(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),u=[m,Np(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?Pe.tonemapping_pars_fragment:"",n.toneMapping!==ki?Gb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,Hb("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(js).join(`
`)),o=$u(o),o=Up(o,n),o=Dp(o,n),a=$u(a),a=Up(a,n),a=Dp(a,n),o=Ip(o),a=Ip(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===ep?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ep?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=g+p+o,x=g+u+a,E=Lp(r,r.VERTEX_SHADER,v),R=Lp(r,r.FRAGMENT_SHADER,x);if(r.attachShader(y,E),r.attachShader(y,R),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),t.debug.checkShaderErrors){const M=r.getProgramInfoLog(y).trim(),T=r.getShaderInfoLog(E).trim(),$=r.getShaderInfoLog(R).trim();let Q=!0,k=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,E,R);else{const j=Pp(r,E,"vertex"),Y=Pp(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+j+`
`+Y)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(T===""||$==="")&&(k=!1);k&&(this.diagnostics={runnable:Q,programLog:M,vertexShader:{log:T,prefix:p},fragmentShader:{log:$,prefix:u}})}r.deleteShader(E),r.deleteShader(R);let A;this.getUniforms=function(){return A===void 0&&(A=new Fa(r,y)),A};let P;return this.getAttributes=function(){return P===void 0&&(P=Xb(r,y)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=R,this}let iT=0;class rT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new sT(e),n.set(e,i)),i}}class sT{constructor(e){this.id=iT++,this.code=e,this.usedTimes=0}}function oT(t,e,n,i,r,s,o){const a=new D0,l=new rT,c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function p(M,T,$,Q,k){const j=Q.fog,Y=k.geometry,Z=M.isMeshStandardMaterial?Q.environment:null,q=(M.isMeshStandardMaterial?n:e).get(M.envMap||Z),L=q&&q.mapping===Ll?q.image.height:null,V=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const z=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,I=z!==void 0?z.length:0;let O=0;Y.morphAttributes.position!==void 0&&(O=1),Y.morphAttributes.normal!==void 0&&(O=2),Y.morphAttributes.color!==void 0&&(O=3);let ae,se,de,ge;if(V){const Ke=Bn[V];ae=Ke.vertexShader,se=Ke.fragmentShader}else ae=M.vertexShader,se=M.fragmentShader,l.update(M),de=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);const Me=t.getRenderTarget(),Ee=k.isInstancedMesh===!0,We=!!M.map,Xt=!!M.matcap,De=!!q,F=!!M.aoMap,Ct=!!M.lightMap,be=!!M.bumpMap,Ce=!!M.normalMap,Re=!!M.displacementMap,tt=!!M.emissiveMap,Be=!!M.metalnessMap,Ie=!!M.roughnessMap,Ye=M.anisotropy>0,bt=M.clearcoat>0,Lt=M.iridescence>0,w=M.sheen>0,S=M.transmission>0,B=Ye&&!!M.anisotropyMap,te=bt&&!!M.clearcoatMap,ee=bt&&!!M.clearcoatNormalMap,ne=bt&&!!M.clearcoatRoughnessMap,ve=Lt&&!!M.iridescenceMap,ie=Lt&&!!M.iridescenceThicknessMap,G=w&&!!M.sheenColorMap,xe=w&&!!M.sheenRoughnessMap,_e=!!M.specularMap,ye=!!M.specularColorMap,pe=!!M.specularIntensityMap,me=S&&!!M.transmissionMap,Fe=S&&!!M.thicknessMap,qe=!!M.gradientMap,C=!!M.alphaMap,le=M.alphaTest>0,H=!!M.alphaHash,re=!!M.extensions,ue=!!Y.attributes.uv1,Ge=!!Y.attributes.uv2,nt=!!Y.attributes.uv3;let dt=ki;return M.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(dt=t.toneMapping),{isWebGL2:d,shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:ae,fragmentShader:se,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:Ee,instancingColor:Ee&&k.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Me===null?t.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Xn,map:We,matcap:Xt,envMap:De,envMapMode:De&&q.mapping,envMapCubeUVHeight:L,aoMap:F,lightMap:Ct,bumpMap:be,normalMap:Ce,displacementMap:f&&Re,emissiveMap:tt,normalMapObjectSpace:Ce&&M.normalMapType===pS,normalMapTangentSpace:Ce&&M.normalMapType===w0,metalnessMap:Be,roughnessMap:Ie,anisotropy:Ye,anisotropyMap:B,clearcoat:bt,clearcoatMap:te,clearcoatNormalMap:ee,clearcoatRoughnessMap:ne,iridescence:Lt,iridescenceMap:ve,iridescenceThicknessMap:ie,sheen:w,sheenColorMap:G,sheenRoughnessMap:xe,specularMap:_e,specularColorMap:ye,specularIntensityMap:pe,transmission:S,transmissionMap:me,thicknessMap:Fe,gradientMap:qe,opaque:M.transparent===!1&&M.blending===os,alphaMap:C,alphaTest:le,alphaHash:H,combine:M.combine,mapUv:We&&y(M.map.channel),aoMapUv:F&&y(M.aoMap.channel),lightMapUv:Ct&&y(M.lightMap.channel),bumpMapUv:be&&y(M.bumpMap.channel),normalMapUv:Ce&&y(M.normalMap.channel),displacementMapUv:Re&&y(M.displacementMap.channel),emissiveMapUv:tt&&y(M.emissiveMap.channel),metalnessMapUv:Be&&y(M.metalnessMap.channel),roughnessMapUv:Ie&&y(M.roughnessMap.channel),anisotropyMapUv:B&&y(M.anisotropyMap.channel),clearcoatMapUv:te&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:ee&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:G&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:xe&&y(M.sheenRoughnessMap.channel),specularMapUv:_e&&y(M.specularMap.channel),specularColorMapUv:ye&&y(M.specularColorMap.channel),specularIntensityMapUv:pe&&y(M.specularIntensityMap.channel),transmissionMapUv:me&&y(M.transmissionMap.channel),thicknessMapUv:Fe&&y(M.thicknessMap.channel),alphaMapUv:C&&y(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ce||Ye),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:ue,vertexUv2s:Ge,vertexUv3s:nt,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(We||C),fog:!!j,useFog:M.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:O,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&$.length>0,shadowMapType:t.shadowMap.type,toneMapping:dt,useLegacyLights:t._useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ii,flipSided:M.side===Qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:re&&M.extensions.derivatives===!0,extensionFragDepth:re&&M.extensions.fragDepth===!0,extensionDrawBuffers:re&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const $ in M.defines)T.push($),T.push(M.defines[$]);return M.isRawShaderMaterial===!1&&(g(T,M),v(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function g(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),M.push(a.mask)}function x(M){const T=_[M.type];let $;if(T){const Q=Bn[T];$=jS.clone(Q.uniforms)}else $=M.uniforms;return $}function E(M,T){let $;for(let Q=0,k=c.length;Q<k;Q++){const j=c[Q];if(j.cacheKey===T){$=j,++$.usedTimes;break}}return $===void 0&&($=new nT(t,T,M,s),c.push($)),$}function R(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:x,acquireProgram:E,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:P}}function aT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function lT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Fp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Op(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,m,_,y,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:y,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=y,u.group=p),e++,u}function a(h,f,m,_,y,p){const u=o(h,f,m,_,y,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,f,m,_,y,p){const u=o(h,f,m,_,y,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||lT),i.length>1&&i.sort(f||Fp),r.length>1&&r.sort(f||Fp)}function d(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function cT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Op,t.set(i,[o])):r>=s.length?(o=new Op,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function uT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new Xe};break;case"SpotLight":n={position:new D,direction:new D,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function dT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let fT=0;function hT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function pT(t,e){const n=new uT,i=dT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new D);const s=new D,o=new ut,a=new ut;function l(d,h){let f=0,m=0,_=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let y=0,p=0,u=0,g=0,v=0,x=0,E=0,R=0,A=0,P=0;d.sort(hT);const M=h===!0?Math.PI:1;for(let $=0,Q=d.length;$<Q;$++){const k=d[$],j=k.color,Y=k.intensity,Z=k.distance,q=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=j.r*Y*M,m+=j.g*Y*M,_+=j.b*Y*M;else if(k.isLightProbe)for(let L=0;L<9;L++)r.probe[L].addScaledVector(k.sh.coefficients[L],Y);else if(k.isDirectionalLight){const L=n.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity*M),k.castShadow){const V=k.shadow,z=i.get(k);z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,r.directionalShadow[y]=z,r.directionalShadowMap[y]=q,r.directionalShadowMatrix[y]=k.shadow.matrix,x++}r.directional[y]=L,y++}else if(k.isSpotLight){const L=n.get(k);L.position.setFromMatrixPosition(k.matrixWorld),L.color.copy(j).multiplyScalar(Y*M),L.distance=Z,L.coneCos=Math.cos(k.angle),L.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),L.decay=k.decay,r.spot[u]=L;const V=k.shadow;if(k.map&&(r.spotLightMap[A]=k.map,A++,V.updateMatrices(k),k.castShadow&&P++),r.spotLightMatrix[u]=V.matrix,k.castShadow){const z=i.get(k);z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,r.spotShadow[u]=z,r.spotShadowMap[u]=q,R++}u++}else if(k.isRectAreaLight){const L=n.get(k);L.color.copy(j).multiplyScalar(Y),L.halfWidth.set(k.width*.5,0,0),L.halfHeight.set(0,k.height*.5,0),r.rectArea[g]=L,g++}else if(k.isPointLight){const L=n.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity*M),L.distance=k.distance,L.decay=k.decay,k.castShadow){const V=k.shadow,z=i.get(k);z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,z.shadowCameraNear=V.camera.near,z.shadowCameraFar=V.camera.far,r.pointShadow[p]=z,r.pointShadowMap[p]=q,r.pointShadowMatrix[p]=k.shadow.matrix,E++}r.point[p]=L,p++}else if(k.isHemisphereLight){const L=n.get(k);L.skyColor.copy(k.color).multiplyScalar(Y*M),L.groundColor.copy(k.groundColor).multiplyScalar(Y*M),r.hemi[v]=L,v++}}g>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==y||T.pointLength!==p||T.spotLength!==u||T.rectAreaLength!==g||T.hemiLength!==v||T.numDirectionalShadows!==x||T.numPointShadows!==E||T.numSpotShadows!==R||T.numSpotMaps!==A)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=g,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=R+A-P,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=P,T.directionalLength=y,T.pointLength=p,T.spotLength=u,T.rectAreaLength=g,T.hemiLength=v,T.numDirectionalShadows=x,T.numPointShadows=E,T.numSpotShadows=R,T.numSpotMaps=A,r.version=fT++)}function c(d,h){let f=0,m=0,_=0,y=0,p=0;const u=h.matrixWorldInverse;for(let g=0,v=d.length;g<v;g++){const x=d[g];if(x.isDirectionalLight){const E=r.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(u),f++}else if(x.isSpotLight){const E=r.spot[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(u),_++}else if(x.isRectAreaLight){const E=r.rectArea[y];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(u),a.identity(),o.copy(x.matrixWorld),o.premultiply(u),a.extractRotation(o),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const E=r.point[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(u),m++}else if(x.isHemisphereLight){const E=r.hemi[p];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function kp(t,e){const n=new pT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function mT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new kp(t,e),n.set(s,[l])):o>=a.length?(l=new kp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class gT extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vT extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _T=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xT(t,e,n){let i=new Kd;const r=new Ve,s=new Ve,o=new et,a=new gT({depthPacking:hS}),l=new vT,c={},d=n.maxTextureSize,h={[Gi]:Qt,[Qt]:Gi,[ii]:ii},f=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:_T,fragmentShader:yT}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new jn;_.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new _n(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=p0;let u=this.type;this.render=function(E,R,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const P=t.getRenderTarget(),M=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),$=t.state;$.setBlending(Oi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Q=u!==ei&&this.type===ei,k=u===ei&&this.type!==ei;for(let j=0,Y=E.length;j<Y;j++){const Z=E[j],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const L=q.getFrameExtents();if(r.multiply(L),s.copy(q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/L.x),r.x=s.x*L.x,q.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/L.y),r.y=s.y*L.y,q.mapSize.y=s.y)),q.map===null||Q===!0||k===!0){const z=this.type!==ei?{minFilter:Ht,magFilter:Ht}:{};q.map!==null&&q.map.dispose(),q.map=new vr(r.x,r.y,z),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();const V=q.getViewportCount();for(let z=0;z<V;z++){const I=q.getViewport(z);o.set(s.x*I.x,s.y*I.y,s.x*I.z,s.y*I.w),$.viewport(o),q.updateMatrices(Z,z),i=q.getFrustum(),x(R,A,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===ei&&g(q,A),q.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(P,M,T)};function g(E,R){const A=e.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new vr(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(R,null,A,f,y,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(R,null,A,m,y,null)}function v(E,R,A,P){let M=null;const T=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)M=T;else if(M=A.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const $=M.uuid,Q=R.uuid;let k=c[$];k===void 0&&(k={},c[$]=k);let j=k[Q];j===void 0&&(j=M.clone(),k[Q]=j),M=j}if(M.visible=R.visible,M.wireframe=R.wireframe,P===ei?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const $=t.properties.get(M);$.light=A}return M}function x(E,R,A,P,M){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===ei)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const Q=e.update(E),k=E.material;if(Array.isArray(k)){const j=Q.groups;for(let Y=0,Z=j.length;Y<Z;Y++){const q=j[Y],L=k[q.materialIndex];if(L&&L.visible){const V=v(E,L,P,M);t.renderBufferDirect(A,null,Q,V,E,q)}}}else if(k.visible){const j=v(E,k,P,M);t.renderBufferDirect(A,null,Q,j,E,null)}}const $=E.children;for(let Q=0,k=$.length;Q<k;Q++)x($[Q],R,A,P,M)}}function ST(t,e,n){const i=n.isWebGL2;function r(){let C=!1;const le=new et;let H=null;const re=new et(0,0,0,0);return{setMask:function(ue){H!==ue&&!C&&(t.colorMask(ue,ue,ue,ue),H=ue)},setLocked:function(ue){C=ue},setClear:function(ue,Ge,nt,dt,hi){hi===!0&&(ue*=dt,Ge*=dt,nt*=dt),le.set(ue,Ge,nt,dt),re.equals(le)===!1&&(t.clearColor(ue,Ge,nt,dt),re.copy(le))},reset:function(){C=!1,H=null,re.set(-1,0,0,0)}}}function s(){let C=!1,le=null,H=null,re=null;return{setTest:function(ue){ue?Me(t.DEPTH_TEST):Ee(t.DEPTH_TEST)},setMask:function(ue){le!==ue&&!C&&(t.depthMask(ue),le=ue)},setFunc:function(ue){if(H!==ue){switch(ue){case Gx:t.depthFunc(t.NEVER);break;case Vx:t.depthFunc(t.ALWAYS);break;case Wx:t.depthFunc(t.LESS);break;case Hu:t.depthFunc(t.LEQUAL);break;case Xx:t.depthFunc(t.EQUAL);break;case jx:t.depthFunc(t.GEQUAL);break;case Yx:t.depthFunc(t.GREATER);break;case qx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}H=ue}},setLocked:function(ue){C=ue},setClear:function(ue){re!==ue&&(t.clearDepth(ue),re=ue)},reset:function(){C=!1,le=null,H=null,re=null}}}function o(){let C=!1,le=null,H=null,re=null,ue=null,Ge=null,nt=null,dt=null,hi=null;return{setTest:function(Ke){C||(Ke?Me(t.STENCIL_TEST):Ee(t.STENCIL_TEST))},setMask:function(Ke){le!==Ke&&!C&&(t.stencilMask(Ke),le=Ke)},setFunc:function(Ke,On,Ot){(H!==Ke||re!==On||ue!==Ot)&&(t.stencilFunc(Ke,On,Ot),H=Ke,re=On,ue=Ot)},setOp:function(Ke,On,Ot){(Ge!==Ke||nt!==On||dt!==Ot)&&(t.stencilOp(Ke,On,Ot),Ge=Ke,nt=On,dt=Ot)},setLocked:function(Ke){C=Ke},setClear:function(Ke){hi!==Ke&&(t.clearStencil(Ke),hi=Ke)},reset:function(){C=!1,le=null,H=null,re=null,ue=null,Ge=null,nt=null,dt=null,hi=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,y=[],p=null,u=!1,g=null,v=null,x=null,E=null,R=null,A=null,P=null,M=!1,T=null,$=null,Q=null,k=null,j=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,q=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(L)[1]),Z=q>=1):L.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),Z=q>=2);let V=null,z={};const I=t.getParameter(t.SCISSOR_BOX),O=t.getParameter(t.VIEWPORT),ae=new et().fromArray(I),se=new et().fromArray(O);function de(C,le,H,re){const ue=new Uint8Array(4),Ge=t.createTexture();t.bindTexture(C,Ge),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<H;nt++)i&&(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)?t.texImage3D(le,0,t.RGBA,1,1,re,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(le+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return Ge}const ge={};ge[t.TEXTURE_2D]=de(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=de(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ge[t.TEXTURE_2D_ARRAY]=de(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=de(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(t.DEPTH_TEST),l.setFunc(Hu),Re(!1),tt(Eh),Me(t.CULL_FACE),be(Oi);function Me(C){f[C]!==!0&&(t.enable(C),f[C]=!0)}function Ee(C){f[C]!==!1&&(t.disable(C),f[C]=!1)}function We(C,le){return m[C]!==le?(t.bindFramebuffer(C,le),m[C]=le,i&&(C===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=le),C===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=le)),!0):!1}function Xt(C,le){let H=y,re=!1;if(C)if(H=_.get(le),H===void 0&&(H=[],_.set(le,H)),C.isWebGLMultipleRenderTargets){const ue=C.texture;if(H.length!==ue.length||H[0]!==t.COLOR_ATTACHMENT0){for(let Ge=0,nt=ue.length;Ge<nt;Ge++)H[Ge]=t.COLOR_ATTACHMENT0+Ge;H.length=ue.length,re=!0}}else H[0]!==t.COLOR_ATTACHMENT0&&(H[0]=t.COLOR_ATTACHMENT0,re=!0);else H[0]!==t.BACK&&(H[0]=t.BACK,re=!0);re&&(n.isWebGL2?t.drawBuffers(H):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))}function De(C){return p!==C?(t.useProgram(C),p=C,!0):!1}const F={[zr]:t.FUNC_ADD,[Px]:t.FUNC_SUBTRACT,[Ux]:t.FUNC_REVERSE_SUBTRACT};if(i)F[Ah]=t.MIN,F[Rh]=t.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(F[Ah]=C.MIN_EXT,F[Rh]=C.MAX_EXT)}const Ct={[Dx]:t.ZERO,[Ix]:t.ONE,[Nx]:t.SRC_COLOR,[m0]:t.SRC_ALPHA,[Hx]:t.SRC_ALPHA_SATURATE,[zx]:t.DST_COLOR,[Ox]:t.DST_ALPHA,[Fx]:t.ONE_MINUS_SRC_COLOR,[g0]:t.ONE_MINUS_SRC_ALPHA,[Bx]:t.ONE_MINUS_DST_COLOR,[kx]:t.ONE_MINUS_DST_ALPHA};function be(C,le,H,re,ue,Ge,nt,dt){if(C===Oi){u===!0&&(Ee(t.BLEND),u=!1);return}if(u===!1&&(Me(t.BLEND),u=!0),C!==Lx){if(C!==g||dt!==M){if((v!==zr||R!==zr)&&(t.blendEquation(t.FUNC_ADD),v=zr,R=zr),dt)switch(C){case os:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bh:t.blendFunc(t.ONE,t.ONE);break;case Th:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case os:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Th:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}x=null,E=null,A=null,P=null,g=C,M=dt}return}ue=ue||le,Ge=Ge||H,nt=nt||re,(le!==v||ue!==R)&&(t.blendEquationSeparate(F[le],F[ue]),v=le,R=ue),(H!==x||re!==E||Ge!==A||nt!==P)&&(t.blendFuncSeparate(Ct[H],Ct[re],Ct[Ge],Ct[nt]),x=H,E=re,A=Ge,P=nt),g=C,M=!1}function Ce(C,le){C.side===ii?Ee(t.CULL_FACE):Me(t.CULL_FACE);let H=C.side===Qt;le&&(H=!H),Re(H),C.blending===os&&C.transparent===!1?be(Oi):be(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const re=C.stencilWrite;c.setTest(re),re&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ie(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Me(t.SAMPLE_ALPHA_TO_COVERAGE):Ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function Re(C){T!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),T=C)}function tt(C){C!==Ax?(Me(t.CULL_FACE),C!==$&&(C===Eh?t.cullFace(t.BACK):C===Rx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ee(t.CULL_FACE),$=C}function Be(C){C!==Q&&(Z&&t.lineWidth(C),Q=C)}function Ie(C,le,H){C?(Me(t.POLYGON_OFFSET_FILL),(k!==le||j!==H)&&(t.polygonOffset(le,H),k=le,j=H)):Ee(t.POLYGON_OFFSET_FILL)}function Ye(C){C?Me(t.SCISSOR_TEST):Ee(t.SCISSOR_TEST)}function bt(C){C===void 0&&(C=t.TEXTURE0+Y-1),V!==C&&(t.activeTexture(C),V=C)}function Lt(C,le,H){H===void 0&&(V===null?H=t.TEXTURE0+Y-1:H=V);let re=z[H];re===void 0&&(re={type:void 0,texture:void 0},z[H]=re),(re.type!==C||re.texture!==le)&&(V!==H&&(t.activeTexture(H),V=H),t.bindTexture(C,le||ge[C]),re.type=C,re.texture=le)}function w(){const C=z[V];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function S(){try{t.compressedTexImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function B(){try{t.compressedTexImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{t.texSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{t.texStorage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function G(){try{t.texStorage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{t.texImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ye(C){ae.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),ae.copy(C))}function pe(C){se.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),se.copy(C))}function me(C,le){let H=h.get(le);H===void 0&&(H=new WeakMap,h.set(le,H));let re=H.get(C);re===void 0&&(re=t.getUniformBlockIndex(le,C.name),H.set(C,re))}function Fe(C,le){const re=h.get(le).get(C);d.get(le)!==re&&(t.uniformBlockBinding(le,re,C.__bindingPointIndex),d.set(le,re))}function qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},V=null,z={},m={},_=new WeakMap,y=[],p=null,u=!1,g=null,v=null,x=null,E=null,R=null,A=null,P=null,M=!1,T=null,$=null,Q=null,k=null,j=null,ae.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Me,disable:Ee,bindFramebuffer:We,drawBuffers:Xt,useProgram:De,setBlending:be,setMaterial:Ce,setFlipSided:Re,setCullFace:tt,setLineWidth:Be,setPolygonOffset:Ie,setScissorTest:Ye,activeTexture:bt,bindTexture:Lt,unbindTexture:w,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:xe,texImage3D:_e,updateUBOMapping:me,uniformBlockBinding:Fe,texStorage2D:ie,texStorage3D:G,texSubImage2D:te,texSubImage3D:ee,compressedTexSubImage2D:ne,compressedTexSubImage3D:ve,scissor:ye,viewport:pe,reset:qe}}function MT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,d=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let y;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return u?new OffscreenCanvas(w,S):dl("canvas")}function v(w,S,B,te){let ee=1;if((w.width>te||w.height>te)&&(ee=te/Math.max(w.width,w.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ne=S?qu:Math.floor,ve=ne(ee*w.width),ie=ne(ee*w.height);y===void 0&&(y=g(ve,ie));const G=B?g(ve,ie):y;return G.width=ve,G.height=ie,G.getContext("2d").drawImage(w,0,0,ve,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ve+"x"+ie+")."),G}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function x(w){return tp(w.width)&&tp(w.height)}function E(w){return a?!1:w.wrapS!==Pn||w.wrapT!==Pn||w.minFilter!==Ht&&w.minFilter!==gn}function R(w,S){return w.generateMipmaps&&S&&w.minFilter!==Ht&&w.minFilter!==gn}function A(w){t.generateMipmap(w)}function P(w,S,B,te,ee=!1){if(a===!1)return S;if(w!==null){if(t[w]!==void 0)return t[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ne=S;return S===t.RED&&(B===t.FLOAT&&(ne=t.R32F),B===t.HALF_FLOAT&&(ne=t.R16F),B===t.UNSIGNED_BYTE&&(ne=t.R8)),S===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(ne=t.R8UI),B===t.UNSIGNED_SHORT&&(ne=t.R16UI),B===t.UNSIGNED_INT&&(ne=t.R32UI),B===t.BYTE&&(ne=t.R8I),B===t.SHORT&&(ne=t.R16I),B===t.INT&&(ne=t.R32I)),S===t.RG&&(B===t.FLOAT&&(ne=t.RG32F),B===t.HALF_FLOAT&&(ne=t.RG16F),B===t.UNSIGNED_BYTE&&(ne=t.RG8)),S===t.RGBA&&(B===t.FLOAT&&(ne=t.RGBA32F),B===t.HALF_FLOAT&&(ne=t.RGBA16F),B===t.UNSIGNED_BYTE&&(ne=te===Ue&&ee===!1?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)),(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function M(w,S,B){return R(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==Ht&&w.minFilter!==gn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function T(w){return w===Ht||w===Ch||w===dc?t.NEAREST:t.LINEAR}function $(w){const S=w.target;S.removeEventListener("dispose",$),k(S),S.isVideoTexture&&_.delete(S)}function Q(w){const S=w.target;S.removeEventListener("dispose",Q),Y(S)}function k(w){const S=i.get(w);if(S.__webglInit===void 0)return;const B=w.source,te=p.get(B);if(te){const ee=te[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&j(w),Object.keys(te).length===0&&p.delete(B)}i.remove(w)}function j(w){const S=i.get(w);t.deleteTexture(S.__webglTexture);const B=w.source,te=p.get(B);delete te[S.__cacheKey],o.memory.textures--}function Y(w){const S=w.texture,B=i.get(w),te=i.get(S);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(B.__webglFramebuffer[ee]))for(let ne=0;ne<B.__webglFramebuffer[ee].length;ne++)t.deleteFramebuffer(B.__webglFramebuffer[ee][ne]);else t.deleteFramebuffer(B.__webglFramebuffer[ee]);B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[ee])}else{if(Array.isArray(B.__webglFramebuffer))for(let ee=0;ee<B.__webglFramebuffer.length;ee++)t.deleteFramebuffer(B.__webglFramebuffer[ee]);else t.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ee=0;ee<B.__webglColorRenderbuffer.length;ee++)B.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[ee]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ee=0,ne=S.length;ee<ne;ee++){const ve=i.get(S[ee]);ve.__webglTexture&&(t.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(S[ee])}i.remove(S),i.remove(w)}let Z=0;function q(){Z=0}function L(){const w=Z;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),Z+=1,w}function V(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function z(w,S){const B=i.get(w);if(w.isVideoTexture&&bt(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const te=w.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(B,w,S);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+S)}function I(w,S){const B=i.get(w);if(w.version>0&&B.__version!==w.version){We(B,w,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+S)}function O(w,S){const B=i.get(w);if(w.version>0&&B.__version!==w.version){We(B,w,S);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+S)}function ae(w,S){const B=i.get(w);if(w.version>0&&B.__version!==w.version){Xt(B,w,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+S)}const se={[Wu]:t.REPEAT,[Pn]:t.CLAMP_TO_EDGE,[Xu]:t.MIRRORED_REPEAT},de={[Ht]:t.NEAREST,[Ch]:t.NEAREST_MIPMAP_NEAREST,[dc]:t.NEAREST_MIPMAP_LINEAR,[gn]:t.LINEAR,[nS]:t.LINEAR_MIPMAP_NEAREST,[Eo]:t.LINEAR_MIPMAP_LINEAR},ge={[gS]:t.NEVER,[ES]:t.ALWAYS,[vS]:t.LESS,[yS]:t.LEQUAL,[_S]:t.EQUAL,[MS]:t.GEQUAL,[xS]:t.GREATER,[SS]:t.NOTEQUAL};function Me(w,S,B){if(B?(t.texParameteri(w,t.TEXTURE_WRAP_S,se[S.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,se[S.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,se[S.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,de[S.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,de[S.minFilter])):(t.texParameteri(w,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(w,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Pn||S.wrapT!==Pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(w,t.TEXTURE_MAG_FILTER,T(S.magFilter)),t.texParameteri(w,t.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==Ht&&S.minFilter!==gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ht||S.minFilter!==dc&&S.minFilter!==Eo||S.type===Ai&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===bo&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(w,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Ee(w,S){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",$));const te=S.source;let ee=p.get(te);ee===void 0&&(ee={},p.set(te,ee));const ne=V(S);if(ne!==w.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[ne].usedTimes++;const ve=ee[w.__cacheKey];ve!==void 0&&(ee[w.__cacheKey].usedTimes--,ve.usedTimes===0&&j(S)),w.__cacheKey=ne,w.__webglTexture=ee[ne].texture}return B}function We(w,S,B){let te=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=t.TEXTURE_3D);const ee=Ee(w,S),ne=S.source;n.bindTexture(te,w.__webglTexture,t.TEXTURE0+B);const ve=i.get(ne);if(ne.version!==ve.__version||ee===!0){n.activeTexture(t.TEXTURE0+B),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ie=E(S)&&x(S.image)===!1;let G=v(S.image,ie,!1,d);G=Lt(S,G);const xe=x(G)||a,_e=s.convert(S.format,S.colorSpace);let ye=s.convert(S.type),pe=P(S.internalFormat,_e,ye,S.colorSpace);Me(te,S,xe);let me;const Fe=S.mipmaps,qe=a&&S.isVideoTexture!==!0,C=ve.__version===void 0||ee===!0,le=M(S,G,xe);if(S.isDepthTexture)pe=t.DEPTH_COMPONENT,a?S.type===Ai?pe=t.DEPTH_COMPONENT32F:S.type===wi?pe=t.DEPTH_COMPONENT24:S.type===lr?pe=t.DEPTH24_STENCIL8:pe=t.DEPTH_COMPONENT16:S.type===Ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===cr&&pe===t.DEPTH_COMPONENT&&S.type!==$d&&S.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=wi,ye=s.convert(S.type)),S.format===vs&&pe===t.DEPTH_COMPONENT&&(pe=t.DEPTH_STENCIL,S.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=lr,ye=s.convert(S.type))),C&&(qe?n.texStorage2D(t.TEXTURE_2D,1,pe,G.width,G.height):n.texImage2D(t.TEXTURE_2D,0,pe,G.width,G.height,0,_e,ye,null));else if(S.isDataTexture)if(Fe.length>0&&xe){qe&&C&&n.texStorage2D(t.TEXTURE_2D,le,pe,Fe[0].width,Fe[0].height);for(let H=0,re=Fe.length;H<re;H++)me=Fe[H],qe?n.texSubImage2D(t.TEXTURE_2D,H,0,0,me.width,me.height,_e,ye,me.data):n.texImage2D(t.TEXTURE_2D,H,pe,me.width,me.height,0,_e,ye,me.data);S.generateMipmaps=!1}else qe?(C&&n.texStorage2D(t.TEXTURE_2D,le,pe,G.width,G.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,G.width,G.height,_e,ye,G.data)):n.texImage2D(t.TEXTURE_2D,0,pe,G.width,G.height,0,_e,ye,G.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&C&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,pe,Fe[0].width,Fe[0].height,G.depth);for(let H=0,re=Fe.length;H<re;H++)me=Fe[H],S.format!==Un?_e!==null?qe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,me.width,me.height,G.depth,_e,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,H,pe,me.width,me.height,G.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,me.width,me.height,G.depth,_e,ye,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,H,pe,me.width,me.height,G.depth,0,_e,ye,me.data)}else{qe&&C&&n.texStorage2D(t.TEXTURE_2D,le,pe,Fe[0].width,Fe[0].height);for(let H=0,re=Fe.length;H<re;H++)me=Fe[H],S.format!==Un?_e!==null?qe?n.compressedTexSubImage2D(t.TEXTURE_2D,H,0,0,me.width,me.height,_e,me.data):n.compressedTexImage2D(t.TEXTURE_2D,H,pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?n.texSubImage2D(t.TEXTURE_2D,H,0,0,me.width,me.height,_e,ye,me.data):n.texImage2D(t.TEXTURE_2D,H,pe,me.width,me.height,0,_e,ye,me.data)}else if(S.isDataArrayTexture)qe?(C&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,pe,G.width,G.height,G.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,_e,ye,G.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,G.width,G.height,G.depth,0,_e,ye,G.data);else if(S.isData3DTexture)qe?(C&&n.texStorage3D(t.TEXTURE_3D,le,pe,G.width,G.height,G.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,_e,ye,G.data)):n.texImage3D(t.TEXTURE_3D,0,pe,G.width,G.height,G.depth,0,_e,ye,G.data);else if(S.isFramebufferTexture){if(C)if(qe)n.texStorage2D(t.TEXTURE_2D,le,pe,G.width,G.height);else{let H=G.width,re=G.height;for(let ue=0;ue<le;ue++)n.texImage2D(t.TEXTURE_2D,ue,pe,H,re,0,_e,ye,null),H>>=1,re>>=1}}else if(Fe.length>0&&xe){qe&&C&&n.texStorage2D(t.TEXTURE_2D,le,pe,Fe[0].width,Fe[0].height);for(let H=0,re=Fe.length;H<re;H++)me=Fe[H],qe?n.texSubImage2D(t.TEXTURE_2D,H,0,0,_e,ye,me):n.texImage2D(t.TEXTURE_2D,H,pe,_e,ye,me);S.generateMipmaps=!1}else qe?(C&&n.texStorage2D(t.TEXTURE_2D,le,pe,G.width,G.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,ye,G)):n.texImage2D(t.TEXTURE_2D,0,pe,_e,ye,G);R(S,xe)&&A(te),ve.__version=ne.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Xt(w,S,B){if(S.image.length!==6)return;const te=Ee(w,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+B);const ne=i.get(ee);if(ee.version!==ne.__version||te===!0){n.activeTexture(t.TEXTURE0+B),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ve=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,G=[];for(let H=0;H<6;H++)!ve&&!ie?G[H]=v(S.image[H],!1,!0,c):G[H]=ie?S.image[H].image:S.image[H],G[H]=Lt(S,G[H]);const xe=G[0],_e=x(xe)||a,ye=s.convert(S.format,S.colorSpace),pe=s.convert(S.type),me=P(S.internalFormat,ye,pe,S.colorSpace),Fe=a&&S.isVideoTexture!==!0,qe=ne.__version===void 0||te===!0;let C=M(S,xe,_e);Me(t.TEXTURE_CUBE_MAP,S,_e);let le;if(ve){Fe&&qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,C,me,xe.width,xe.height);for(let H=0;H<6;H++){le=G[H].mipmaps;for(let re=0;re<le.length;re++){const ue=le[re];S.format!==Un?ye!==null?Fe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,re,0,0,ue.width,ue.height,ye,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,re,me,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,re,0,0,ue.width,ue.height,ye,pe,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,re,me,ue.width,ue.height,0,ye,pe,ue.data)}}}else{le=S.mipmaps,Fe&&qe&&(le.length>0&&C++,n.texStorage2D(t.TEXTURE_CUBE_MAP,C,me,G[0].width,G[0].height));for(let H=0;H<6;H++)if(ie){Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,G[H].width,G[H].height,ye,pe,G[H].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,me,G[H].width,G[H].height,0,ye,pe,G[H].data);for(let re=0;re<le.length;re++){const Ge=le[re].image[H].image;Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,re+1,0,0,Ge.width,Ge.height,ye,pe,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,re+1,me,Ge.width,Ge.height,0,ye,pe,Ge.data)}}else{Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,ye,pe,G[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,me,ye,pe,G[H]);for(let re=0;re<le.length;re++){const ue=le[re];Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,re+1,0,0,ye,pe,ue.image[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,re+1,me,ye,pe,ue.image[H])}}}R(S,_e)&&A(t.TEXTURE_CUBE_MAP),ne.__version=ee.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function De(w,S,B,te,ee,ne){const ve=s.convert(B.format,B.colorSpace),ie=s.convert(B.type),G=P(B.internalFormat,ve,ie,B.colorSpace);if(!i.get(S).__hasExternalTextures){const _e=Math.max(1,S.width>>ne),ye=Math.max(1,S.height>>ne);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ne,G,_e,ye,S.depth,0,ve,ie,null):n.texImage2D(ee,ne,G,_e,ye,0,ve,ie,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),Ye(S)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,ee,i.get(B).__webglTexture,0,Ie(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,ee,i.get(B).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function F(w,S,B){if(t.bindRenderbuffer(t.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let te=t.DEPTH_COMPONENT16;if(B||Ye(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Ai?te=t.DEPTH_COMPONENT32F:ee.type===wi&&(te=t.DEPTH_COMPONENT24));const ne=Ie(S);Ye(S)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,te,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,te,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){const te=Ie(S);B&&Ye(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,S.width,S.height):Ye(S)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,w)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<te.length;ee++){const ne=te[ee],ve=s.convert(ne.format,ne.colorSpace),ie=s.convert(ne.type),G=P(ne.internalFormat,ve,ie,ne.colorSpace),xe=Ie(S);B&&Ye(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,G,S.width,S.height):Ye(S)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xe,G,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,G,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ct(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const te=i.get(S.depthTexture).__webglTexture,ee=Ie(S);if(S.depthTexture.format===cr)Ye(S)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(S.depthTexture.format===vs)Ye(S)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function be(w){const S=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ct(S.__webglFramebuffer,w)}else if(B){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=t.createRenderbuffer(),F(S.__webglDepthbuffer[te],w,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),F(S.__webglDepthbuffer,w,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(w,S,B){const te=i.get(w);S!==void 0&&De(te.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&be(w)}function Re(w){const S=w.texture,B=i.get(w),te=i.get(S);w.addEventListener("dispose",Q),w.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=S.version,o.memory.textures++);const ee=w.isWebGLCubeRenderTarget===!0,ne=w.isWebGLMultipleRenderTargets===!0,ve=x(w)||a;if(ee){B.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ie]=[];for(let G=0;G<S.mipmaps.length;G++)B.__webglFramebuffer[ie][G]=t.createFramebuffer()}else B.__webglFramebuffer[ie]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ie=0;ie<S.mipmaps.length;ie++)B.__webglFramebuffer[ie]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ne)if(r.drawBuffers){const ie=w.texture;for(let G=0,xe=ie.length;G<xe;G++){const _e=i.get(ie[G]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Ye(w)===!1){const ie=ne?S:[S];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let G=0;G<ie.length;G++){const xe=ie[G];B.__webglColorRenderbuffer[G]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[G]);const _e=s.convert(xe.format,xe.colorSpace),ye=s.convert(xe.type),pe=P(xe.internalFormat,_e,ye,xe.colorSpace,w.isXRRenderTarget===!0),me=Ie(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,me,pe,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.RENDERBUFFER,B.__webglColorRenderbuffer[G])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),F(B.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Me(t.TEXTURE_CUBE_MAP,S,ve);for(let ie=0;ie<6;ie++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let G=0;G<S.mipmaps.length;G++)De(B.__webglFramebuffer[ie][G],w,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,G);else De(B.__webglFramebuffer[ie],w,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);R(S,ve)&&A(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ne){const ie=w.texture;for(let G=0,xe=ie.length;G<xe;G++){const _e=ie[G],ye=i.get(_e);n.bindTexture(t.TEXTURE_2D,ye.__webglTexture),Me(t.TEXTURE_2D,_e,ve),De(B.__webglFramebuffer,w,_e,t.COLOR_ATTACHMENT0+G,t.TEXTURE_2D,0),R(_e,ve)&&A(t.TEXTURE_2D)}n.unbindTexture()}else{let ie=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ie=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ie,te.__webglTexture),Me(ie,S,ve),a&&S.mipmaps&&S.mipmaps.length>0)for(let G=0;G<S.mipmaps.length;G++)De(B.__webglFramebuffer[G],w,S,t.COLOR_ATTACHMENT0,ie,G);else De(B.__webglFramebuffer,w,S,t.COLOR_ATTACHMENT0,ie,0);R(S,ve)&&A(ie),n.unbindTexture()}w.depthBuffer&&be(w)}function tt(w){const S=x(w)||a,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0,ee=B.length;te<ee;te++){const ne=B[te];if(R(ne,S)){const ve=w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ie=i.get(ne).__webglTexture;n.bindTexture(ve,ie),A(ve),n.unbindTexture()}}}function Be(w){if(a&&w.samples>0&&Ye(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,te=w.height;let ee=t.COLOR_BUFFER_BIT;const ne=[],ve=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=i.get(w),G=w.isWebGLMultipleRenderTargets===!0;if(G)for(let xe=0;xe<S.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){ne.push(t.COLOR_ATTACHMENT0+xe),w.depthBuffer&&ne.push(ve);const _e=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(_e===!1&&(w.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),G&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ie.__webglColorRenderbuffer[xe]),_e===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ve]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ve])),G){const ye=i.get(S[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ye,0)}t.blitFramebuffer(0,0,B,te,0,0,B,te,ee,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),G)for(let xe=0;xe<S.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,ie.__webglColorRenderbuffer[xe]);const _e=i.get(S[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,_e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function Ie(w){return Math.min(h,w.samples)}function Ye(w){const S=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function bt(w){const S=o.render.frame;_.get(w)!==S&&(_.set(w,S),w.update())}function Lt(w,S){const B=w.colorSpace,te=w.format,ee=w.type;return w.isCompressedTexture===!0||w.format===ju||B!==Xn&&B!==dr&&(B===Ue?a===!1?e.has("EXT_sRGB")===!0&&te===Un?(w.format=ju,w.minFilter=gn,w.generateMipmaps=!1):S=C0.sRGBToLinear(S):(te!==Un||ee!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}this.allocateTextureUnit=L,this.resetTextureUnits=q,this.setTexture2D=z,this.setTexture2DArray=I,this.setTexture3D=O,this.setTextureCube=ae,this.rebindTextures=Ce,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ye}function ET(t,e,n){const i=n.isWebGL2;function r(s,o=dr){let a;if(s===zi)return t.UNSIGNED_BYTE;if(s===x0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===S0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===iS)return t.BYTE;if(s===rS)return t.SHORT;if(s===$d)return t.UNSIGNED_SHORT;if(s===y0)return t.INT;if(s===wi)return t.UNSIGNED_INT;if(s===Ai)return t.FLOAT;if(s===bo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===sS)return t.ALPHA;if(s===Un)return t.RGBA;if(s===oS)return t.LUMINANCE;if(s===aS)return t.LUMINANCE_ALPHA;if(s===cr)return t.DEPTH_COMPONENT;if(s===vs)return t.DEPTH_STENCIL;if(s===ju)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===lS)return t.RED;if(s===M0)return t.RED_INTEGER;if(s===cS)return t.RG;if(s===E0)return t.RG_INTEGER;if(s===b0)return t.RGBA_INTEGER;if(s===fc||s===hc||s===pc||s===mc)if(o===Ue)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===fc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===fc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===mc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lh||s===Ph||s===Uh||s===Dh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Lh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ph)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Uh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===uS)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ih||s===Nh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ih)return o===Ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Nh)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fh||s===Oh||s===kh||s===zh||s===Bh||s===Hh||s===Gh||s===Vh||s===Wh||s===Xh||s===jh||s===Yh||s===qh||s===$h)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Fh)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Oh)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kh)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zh)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bh)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Hh)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gh)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vh)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wh)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xh)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jh)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yh)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qh)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$h)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===gc)return o===Ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===dS||s===Kh||s===Zh||s===Jh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===gc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Kh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Zh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===lr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class bT extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xa extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TT={type:"move"};class Bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(TT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new xa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class wT extends ln{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:cr,d!==cr&&d!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===cr&&(i=wi),i===void 0&&d===vs&&(i=lr),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class AT extends bs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,_=null;const y=n.getContextAttributes();let p=null,u=null;const g=[],v=[],x=new sn;x.layers.enable(1),x.viewport=new et;const E=new sn;E.layers.enable(2),E.viewport=new et;const R=[x,E],A=new bT;A.layers.enable(1),A.layers.enable(2);let P=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let O=g[I];return O===void 0&&(O=new Bc,g[I]=O),O.getTargetRaySpace()},this.getControllerGrip=function(I){let O=g[I];return O===void 0&&(O=new Bc,g[I]=O),O.getGripSpace()},this.getHand=function(I){let O=g[I];return O===void 0&&(O=new Bc,g[I]=O),O.getHandSpace()};function T(I){const O=v.indexOf(I.inputSource);if(O===-1)return;const ae=g[O];ae!==void 0&&(ae.update(I.inputSource,I.frame,c||o),ae.dispatchEvent({type:I.type,data:I.inputSource}))}function $(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Q);for(let I=0;I<g.length;I++){const O=v[I];O!==null&&(v[I]=null,g[I].disconnect(O))}P=null,M=null,e.setRenderTarget(p),m=null,f=null,h=null,r=null,u=null,z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Q),y.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,O),r.updateRenderState({baseLayer:m}),u=new vr(m.framebufferWidth,m.framebufferHeight,{format:Un,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let O=null,ae=null,se=null;y.depth&&(se=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,O=y.stencil?vs:cr,ae=y.stencil?lr:wi);const de={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(de),r.updateRenderState({layers:[f]}),u=new vr(f.textureWidth,f.textureHeight,{format:Un,type:zi,depthTexture:new wT(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ge=e.properties.get(u);ge.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),z.setContext(r),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Q(I){for(let O=0;O<I.removed.length;O++){const ae=I.removed[O],se=v.indexOf(ae);se>=0&&(v[se]=null,g[se].disconnect(ae))}for(let O=0;O<I.added.length;O++){const ae=I.added[O];let se=v.indexOf(ae);if(se===-1){for(let ge=0;ge<g.length;ge++)if(ge>=v.length){v.push(ae),se=ge;break}else if(v[ge]===null){v[ge]=ae,se=ge;break}if(se===-1)break}const de=g[se];de&&de.connect(ae)}}const k=new D,j=new D;function Y(I,O,ae){k.setFromMatrixPosition(O.matrixWorld),j.setFromMatrixPosition(ae.matrixWorld);const se=k.distanceTo(j),de=O.projectionMatrix.elements,ge=ae.projectionMatrix.elements,Me=de[14]/(de[10]-1),Ee=de[14]/(de[10]+1),We=(de[9]+1)/de[5],Xt=(de[9]-1)/de[5],De=(de[8]-1)/de[0],F=(ge[8]+1)/ge[0],Ct=Me*De,be=Me*F,Ce=se/(-De+F),Re=Ce*-De;O.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Re),I.translateZ(Ce),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const tt=Me+Ce,Be=Ee+Ce,Ie=Ct-Re,Ye=be+(se-Re),bt=We*Ee/Be*tt,Lt=Xt*Ee/Be*tt;I.projectionMatrix.makePerspective(Ie,Ye,bt,Lt,tt,Be),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function Z(I,O){O===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(O.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;A.near=E.near=x.near=I.near,A.far=E.far=x.far=I.far,(P!==A.near||M!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,M=A.far);const O=I.parent,ae=A.cameras;Z(A,O);for(let se=0;se<ae.length;se++)Z(ae[se],O);ae.length===2?Y(A,x,E):A.projectionMatrix.copy(x.projectionMatrix),q(I,A,O)};function q(I,O,ae){ae===null?I.matrix.copy(O.matrixWorld):(I.matrix.copy(ae.matrixWorld),I.matrix.invert(),I.matrix.multiply(O.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0);const se=I.children;for(let de=0,ge=se.length;de<ge;de++)se[de].updateMatrixWorld(!0);I.projectionMatrix.copy(O.projectionMatrix),I.projectionMatrixInverse.copy(O.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Yu*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(I){l=I,f!==null&&(f.fixedFoveation=I),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=I)};let L=null;function V(I,O){if(d=O.getViewerPose(c||o),_=O,d!==null){const ae=d.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let se=!1;ae.length!==A.cameras.length&&(A.cameras.length=0,se=!0);for(let de=0;de<ae.length;de++){const ge=ae[de];let Me=null;if(m!==null)Me=m.getViewport(ge);else{const We=h.getViewSubImage(f,ge);Me=We.viewport,de===0&&(e.setRenderTargetTextures(u,We.colorTexture,f.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(u))}let Ee=R[de];Ee===void 0&&(Ee=new sn,Ee.layers.enable(de),Ee.viewport=new et,R[de]=Ee),Ee.matrix.fromArray(ge.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(ge.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Me.x,Me.y,Me.width,Me.height),de===0&&(A.matrix.copy(Ee.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),se===!0&&A.cameras.push(Ee)}}for(let ae=0;ae<g.length;ae++){const se=v[ae],de=g[ae];se!==null&&de!==void 0&&de.update(se,O,c||o)}L&&L(I,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),_=null}const z=new H0;z.setAnimationLoop(V),this.setAnimationLoop=function(I){L=I},this.dispose=function(){}}}function RT(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,k0(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,v,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,x)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),y(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,g,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Qt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Qt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Qt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function CT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,v){const x=v.program;i.uniformBlockBinding(g,x)}function c(g,v){let x=r[g.id];x===void 0&&(_(g),x=d(g),r[g.id]=x,g.addEventListener("dispose",p));const E=v.program;i.updateUBOMapping(g,E);const R=e.render.frame;s[g.id]!==R&&(f(g),s[g.id]=R)}function d(g){const v=h();g.__bindingPointIndex=v;const x=t.createBuffer(),E=g.__size,R=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,E,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const v=r[g.id],x=g.uniforms,E=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,A=x.length;R<A;R++){const P=x[R];if(m(P,R,E)===!0){const M=P.__offset,T=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let Q=0;Q<T.length;Q++){const k=T[Q],j=y(k);typeof k=="number"?(P.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,M+$,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=k.elements[0],P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=k.elements[0],P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=k.elements[0]):(k.toArray(P.__data,$),$+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,M,P.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,x){const E=g.value;if(x[v]===void 0){if(typeof E=="number")x[v]=E;else{const R=Array.isArray(E)?E:[E],A=[];for(let P=0;P<R.length;P++)A.push(R[P].clone());x[v]=A}return!0}else if(typeof E=="number"){if(x[v]!==E)return x[v]=E,!0}else{const R=Array.isArray(x[v])?x[v]:[x[v]],A=Array.isArray(E)?E:[E];for(let P=0;P<R.length;P++){const M=R[P];if(M.equals(A[P])===!1)return M.copy(A[P]),!0}}return!1}function _(g){const v=g.uniforms;let x=0;const E=16;let R=0;for(let A=0,P=v.length;A<P;A++){const M=v[A],T={boundary:0,storage:0},$=Array.isArray(M.value)?M.value:[M.value];for(let Q=0,k=$.length;Q<k;Q++){const j=$[Q],Y=y(j);T.boundary+=Y.boundary,T.storage+=Y.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,A>0){R=x%E;const Q=E-R;R!==0&&Q-T.boundary<0&&(x+=E-R,M.__offset=x)}x+=T.storage}return R=x%E,R>0&&(x+=E-R),g.__size=x,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}function LT(){const t=dl("canvas");return t.style.display="block",t}class Y0{constructor(e={}){const{canvas:n=LT(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,p=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ue,this._useLegacyLights=!1,this.toneMapping=ki,this.toneMappingExposure=1;const v=this;let x=!1,E=0,R=0,A=null,P=-1,M=null;const T=new et,$=new et;let Q=null;const k=new Xe(0);let j=0,Y=n.width,Z=n.height,q=1,L=null,V=null;const z=new et(0,0,Y,Z),I=new et(0,0,Y,Z);let O=!1;const ae=new Kd;let se=!1,de=!1,ge=null;const Me=new ut,Ee=new Ve,We=new D,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return A===null?q:1}let F=i;function Ct(b,N){for(let X=0;X<b.length;X++){const U=b[X],W=n.getContext(U,N);if(W!==null)return W}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qd}`),n.addEventListener("webglcontextlost",le,!1),n.addEventListener("webglcontextrestored",H,!1),n.addEventListener("webglcontextcreationerror",re,!1),F===null){const N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),F=Ct(N,b),F===null)throw Ct(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let be,Ce,Re,tt,Be,Ie,Ye,bt,Lt,w,S,B,te,ee,ne,ve,ie,G,xe,_e,ye,pe,me,Fe;function qe(){be=new BE(F),Ce=new IE(F,be,e),be.init(Ce),pe=new ET(F,be,Ce),Re=new ST(F,be,Ce),tt=new VE(F),Be=new aT,Ie=new MT(F,be,Re,Be,Ce,pe,tt),Ye=new FE(v),bt=new zE(v),Lt=new QS(F,Ce),me=new UE(F,be,Lt,Ce),w=new HE(F,Lt,tt,me),S=new YE(F,w,Lt,tt),xe=new jE(F,Ce,Ie),ve=new NE(Be),B=new oT(v,Ye,bt,be,Ce,me,ve),te=new RT(v,Be),ee=new cT,ne=new mT(be,Ce),G=new PE(v,Ye,bt,Re,S,f,l),ie=new xT(v,S,Ce),Fe=new CT(F,tt,Ce,Re),_e=new DE(F,be,tt,Ce),ye=new GE(F,be,tt,Ce),tt.programs=B.programs,v.capabilities=Ce,v.extensions=be,v.properties=Be,v.renderLists=ee,v.shadowMap=ie,v.state=Re,v.info=tt}qe();const C=new AT(v,F);this.xr=C,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=be.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=be.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(Y,Z,!1))},this.getSize=function(b){return b.set(Y,Z)},this.setSize=function(b,N,X=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,Z=N,n.width=Math.floor(b*q),n.height=Math.floor(N*q),X===!0&&(n.style.width=b+"px",n.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(Y*q,Z*q).floor()},this.setDrawingBufferSize=function(b,N,X){Y=b,Z=N,q=X,n.width=Math.floor(b*X),n.height=Math.floor(N*X),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(z)},this.setViewport=function(b,N,X,U){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,N,X,U),Re.viewport(T.copy(z).multiplyScalar(q).floor())},this.getScissor=function(b){return b.copy(I)},this.setScissor=function(b,N,X,U){b.isVector4?I.set(b.x,b.y,b.z,b.w):I.set(b,N,X,U),Re.scissor($.copy(I).multiplyScalar(q).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(b){Re.setScissorTest(O=b)},this.setOpaqueSort=function(b){L=b},this.setTransparentSort=function(b){V=b},this.getClearColor=function(b){return b.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor.apply(G,arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha.apply(G,arguments)},this.clear=function(b=!0,N=!0,X=!0){let U=0;if(b){let W=!1;if(A!==null){const he=A.texture.format;W=he===b0||he===E0||he===M0}if(W){const he=A.texture.type,Se=he===zi||he===wi||he===$d||he===lr||he===x0||he===S0,we=G.getClearColor(),Ae=G.getClearAlpha(),Oe=we.r,Te=we.g,Le=we.b;Se?(m[0]=Oe,m[1]=Te,m[2]=Le,m[3]=Ae,F.clearBufferuiv(F.COLOR,0,m)):(_[0]=Oe,_[1]=Te,_[2]=Le,_[3]=Ae,F.clearBufferiv(F.COLOR,0,_))}else U|=F.COLOR_BUFFER_BIT}N&&(U|=F.DEPTH_BUFFER_BIT),X&&(U|=F.STENCIL_BUFFER_BIT),F.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",le,!1),n.removeEventListener("webglcontextrestored",H,!1),n.removeEventListener("webglcontextcreationerror",re,!1),ee.dispose(),ne.dispose(),Be.dispose(),Ye.dispose(),bt.dispose(),S.dispose(),me.dispose(),Fe.dispose(),B.dispose(),C.dispose(),C.removeEventListener("sessionstart",Ke),C.removeEventListener("sessionend",On),ge&&(ge.dispose(),ge=null),Ot.stop()};function le(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const b=tt.autoReset,N=ie.enabled,X=ie.autoUpdate,U=ie.needsUpdate,W=ie.type;qe(),tt.autoReset=b,ie.enabled=N,ie.autoUpdate=X,ie.needsUpdate=U,ie.type=W}function re(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ue(b){const N=b.target;N.removeEventListener("dispose",ue),Ge(N)}function Ge(b){nt(b),Be.remove(b)}function nt(b){const N=Be.get(b).programs;N!==void 0&&(N.forEach(function(X){B.releaseProgram(X)}),b.isShaderMaterial&&B.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,X,U,W,he){N===null&&(N=Xt);const Se=W.isMesh&&W.matrixWorld.determinant()<0,we=Z0(b,N,X,U,W);Re.setMaterial(U,Se);let Ae=X.index,Oe=1;if(U.wireframe===!0){if(Ae=w.getWireframeAttribute(X),Ae===void 0)return;Oe=2}const Te=X.drawRange,Le=X.attributes.position;let ot=Te.start*Oe,lt=(Te.start+Te.count)*Oe;he!==null&&(ot=Math.max(ot,he.start*Oe),lt=Math.min(lt,(he.start+he.count)*Oe)),Ae!==null?(ot=Math.max(ot,0),lt=Math.min(lt,Ae.count)):Le!=null&&(ot=Math.max(ot,0),lt=Math.min(lt,Le.count));const fn=lt-ot;if(fn<0||fn===1/0)return;me.setup(W,U,we,X,Ae);let Yn,ft=_e;if(Ae!==null&&(Yn=Lt.get(Ae),ft=ye,ft.setIndex(Yn)),W.isMesh)U.wireframe===!0?(Re.setLineWidth(U.wireframeLinewidth*De()),ft.setMode(F.LINES)):ft.setMode(F.TRIANGLES);else if(W.isLine){let ke=U.linewidth;ke===void 0&&(ke=1),Re.setLineWidth(ke*De()),W.isLineSegments?ft.setMode(F.LINES):W.isLineLoop?ft.setMode(F.LINE_LOOP):ft.setMode(F.LINE_STRIP)}else W.isPoints?ft.setMode(F.POINTS):W.isSprite&&ft.setMode(F.TRIANGLES);if(W.isInstancedMesh)ft.renderInstances(ot,fn,W.count);else if(X.isInstancedBufferGeometry){const ke=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Il=Math.min(X.instanceCount,ke);ft.renderInstances(ot,fn,Il)}else ft.render(ot,fn)},this.compile=function(b,N){function X(U,W,he){U.transparent===!0&&U.side===ii&&U.forceSinglePass===!1?(U.side=Qt,U.needsUpdate=!0,Fo(U,W,he),U.side=Gi,U.needsUpdate=!0,Fo(U,W,he),U.side=ii):Fo(U,W,he)}p=ne.get(b),p.init(),g.push(p),b.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights(v._useLegacyLights),b.traverse(function(U){const W=U.material;if(W)if(Array.isArray(W))for(let he=0;he<W.length;he++){const Se=W[he];X(Se,b,U)}else X(W,b,U)}),g.pop(),p=null};let dt=null;function hi(b){dt&&dt(b)}function Ke(){Ot.stop()}function On(){Ot.start()}const Ot=new H0;Ot.setAnimationLoop(hi),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(b){dt=b,C.setAnimationLoop(b),b===null?Ot.stop():Ot.start()},C.addEventListener("sessionstart",Ke),C.addEventListener("sessionend",On),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(N),N=C.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,A),p=ne.get(b,g.length),p.init(),g.push(p),Me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ae.setFromProjectionMatrix(Me),de=this.localClippingEnabled,se=ve.init(this.clippingPlanes,de),y=ee.get(b,u.length),y.init(),u.push(y),ef(b,N,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(L,V),this.info.render.frame++,se===!0&&ve.beginShadows();const X=p.state.shadowsArray;if(ie.render(X,b,N),se===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),G.render(y,b),p.setupLights(v._useLegacyLights),N.isArrayCamera){const U=N.cameras;for(let W=0,he=U.length;W<he;W++){const Se=U[W];tf(y,b,Se,Se.viewport)}}else tf(y,b,N);A!==null&&(Ie.updateMultisampleRenderTarget(A),Ie.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(v,b,N),me.resetDefaultState(),P=-1,M=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function ef(b,N,X,U){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ae.intersectsSprite(b)){U&&We.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Me);const Se=S.update(b),we=b.material;we.visible&&y.push(b,Se,we,X,We.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ae.intersectsObject(b))){const Se=S.update(b),we=b.material;if(U&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),We.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),We.copy(Se.boundingSphere.center)),We.applyMatrix4(b.matrixWorld).applyMatrix4(Me)),Array.isArray(we)){const Ae=Se.groups;for(let Oe=0,Te=Ae.length;Oe<Te;Oe++){const Le=Ae[Oe],ot=we[Le.materialIndex];ot&&ot.visible&&y.push(b,Se,ot,X,We.z,Le)}}else we.visible&&y.push(b,Se,we,X,We.z,null)}}const he=b.children;for(let Se=0,we=he.length;Se<we;Se++)ef(he[Se],N,X,U)}function tf(b,N,X,U){const W=b.opaque,he=b.transmissive,Se=b.transparent;p.setupLightsView(X),se===!0&&ve.setGlobalState(v.clippingPlanes,X),he.length>0&&K0(W,he,N,X),U&&Re.viewport(T.copy(U)),W.length>0&&No(W,N,X),he.length>0&&No(he,N,X),Se.length>0&&No(Se,N,X),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function K0(b,N,X,U){const W=Ce.isWebGL2;ge===null&&(ge=new vr(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?bo:zi,minFilter:Eo,samples:W?4:0})),v.getDrawingBufferSize(Ee),W?ge.setSize(Ee.x,Ee.y):ge.setSize(qu(Ee.x),qu(Ee.y));const he=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(k),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear();const Se=v.toneMapping;v.toneMapping=ki,No(b,X,U),Ie.updateMultisampleRenderTarget(ge),Ie.updateRenderTargetMipmap(ge);let we=!1;for(let Ae=0,Oe=N.length;Ae<Oe;Ae++){const Te=N[Ae],Le=Te.object,ot=Te.geometry,lt=Te.material,fn=Te.group;if(lt.side===ii&&Le.layers.test(U.layers)){const Yn=lt.side;lt.side=Qt,lt.needsUpdate=!0,nf(Le,X,U,ot,lt,fn),lt.side=Yn,lt.needsUpdate=!0,we=!0}}we===!0&&(Ie.updateMultisampleRenderTarget(ge),Ie.updateRenderTargetMipmap(ge)),v.setRenderTarget(he),v.setClearColor(k,j),v.toneMapping=Se}function No(b,N,X){const U=N.isScene===!0?N.overrideMaterial:null;for(let W=0,he=b.length;W<he;W++){const Se=b[W],we=Se.object,Ae=Se.geometry,Oe=U===null?Se.material:U,Te=Se.group;we.layers.test(X.layers)&&nf(we,N,X,Ae,Oe,Te)}}function nf(b,N,X,U,W,he){b.onBeforeRender(v,N,X,U,W,he),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(v,N,X,U,b,he),W.transparent===!0&&W.side===ii&&W.forceSinglePass===!1?(W.side=Qt,W.needsUpdate=!0,v.renderBufferDirect(X,N,U,W,b,he),W.side=Gi,W.needsUpdate=!0,v.renderBufferDirect(X,N,U,W,b,he),W.side=ii):v.renderBufferDirect(X,N,U,W,b,he),b.onAfterRender(v,N,X,U,W,he)}function Fo(b,N,X){N.isScene!==!0&&(N=Xt);const U=Be.get(b),W=p.state.lights,he=p.state.shadowsArray,Se=W.state.version,we=B.getParameters(b,W.state,he,N,X),Ae=B.getProgramCacheKey(we);let Oe=U.programs;U.environment=b.isMeshStandardMaterial?N.environment:null,U.fog=N.fog,U.envMap=(b.isMeshStandardMaterial?bt:Ye).get(b.envMap||U.environment),Oe===void 0&&(b.addEventListener("dispose",ue),Oe=new Map,U.programs=Oe);let Te=Oe.get(Ae);if(Te!==void 0){if(U.currentProgram===Te&&U.lightsStateVersion===Se)return rf(b,we),Te}else we.uniforms=B.getUniforms(b),b.onBuild(X,we,v),b.onBeforeCompile(we,v),Te=B.acquireProgram(we,Ae),Oe.set(Ae,Te),U.uniforms=we.uniforms;const Le=U.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=ve.uniform),rf(b,we),U.needsLights=Q0(b),U.lightsStateVersion=Se,U.needsLights&&(Le.ambientLightColor.value=W.state.ambient,Le.lightProbe.value=W.state.probe,Le.directionalLights.value=W.state.directional,Le.directionalLightShadows.value=W.state.directionalShadow,Le.spotLights.value=W.state.spot,Le.spotLightShadows.value=W.state.spotShadow,Le.rectAreaLights.value=W.state.rectArea,Le.ltc_1.value=W.state.rectAreaLTC1,Le.ltc_2.value=W.state.rectAreaLTC2,Le.pointLights.value=W.state.point,Le.pointLightShadows.value=W.state.pointShadow,Le.hemisphereLights.value=W.state.hemi,Le.directionalShadowMap.value=W.state.directionalShadowMap,Le.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Le.spotShadowMap.value=W.state.spotShadowMap,Le.spotLightMatrix.value=W.state.spotLightMatrix,Le.spotLightMap.value=W.state.spotLightMap,Le.pointShadowMap.value=W.state.pointShadowMap,Le.pointShadowMatrix.value=W.state.pointShadowMatrix);const ot=Te.getUniforms(),lt=Fa.seqWithValue(ot.seq,Le);return U.currentProgram=Te,U.uniformsList=lt,Te}function rf(b,N){const X=Be.get(b);X.outputColorSpace=N.outputColorSpace,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Z0(b,N,X,U,W){N.isScene!==!0&&(N=Xt),Ie.resetTextureUnits();const he=N.fog,Se=U.isMeshStandardMaterial?N.environment:null,we=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Xn,Ae=(U.isMeshStandardMaterial?bt:Ye).get(U.envMap||Se),Oe=U.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Te=!!X.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Le=!!X.morphAttributes.position,ot=!!X.morphAttributes.normal,lt=!!X.morphAttributes.color;let fn=ki;U.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(fn=v.toneMapping);const Yn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ft=Yn!==void 0?Yn.length:0,ke=Be.get(U),Il=p.state.lights;if(se===!0&&(de===!0||b!==M)){const en=b===M&&U.id===P;ve.setState(U,b,en)}let ht=!1;U.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Il.state.version||ke.outputColorSpace!==we||W.isInstancedMesh&&ke.instancing===!1||!W.isInstancedMesh&&ke.instancing===!0||W.isSkinnedMesh&&ke.skinning===!1||!W.isSkinnedMesh&&ke.skinning===!0||W.isInstancedMesh&&ke.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ke.instancingColor===!1&&W.instanceColor!==null||ke.envMap!==Ae||U.fog===!0&&ke.fog!==he||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ve.numPlanes||ke.numIntersection!==ve.numIntersection)||ke.vertexAlphas!==Oe||ke.vertexTangents!==Te||ke.morphTargets!==Le||ke.morphNormals!==ot||ke.morphColors!==lt||ke.toneMapping!==fn||Ce.isWebGL2===!0&&ke.morphTargetsCount!==ft)&&(ht=!0):(ht=!0,ke.__version=U.version);let ji=ke.currentProgram;ht===!0&&(ji=Fo(U,N,W));let sf=!1,As=!1,Nl=!1;const kt=ji.getUniforms(),Yi=ke.uniforms;if(Re.useProgram(ji.program)&&(sf=!0,As=!0,Nl=!0),U.id!==P&&(P=U.id,As=!0),sf||M!==b){if(kt.setValue(F,"projectionMatrix",b.projectionMatrix),Ce.logarithmicDepthBuffer&&kt.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),M!==b&&(M=b,As=!0,Nl=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const en=kt.map.cameraPosition;en!==void 0&&en.setValue(F,We.setFromMatrixPosition(b.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&kt.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||W.isSkinnedMesh)&&kt.setValue(F,"viewMatrix",b.matrixWorldInverse)}if(W.isSkinnedMesh){kt.setOptional(F,W,"bindMatrix"),kt.setOptional(F,W,"bindMatrixInverse");const en=W.skeleton;en&&(Ce.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),kt.setValue(F,"boneTexture",en.boneTexture,Ie),kt.setValue(F,"boneTextureSize",en.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Fl=X.morphAttributes;if((Fl.position!==void 0||Fl.normal!==void 0||Fl.color!==void 0&&Ce.isWebGL2===!0)&&xe.update(W,X,ji),(As||ke.receiveShadow!==W.receiveShadow)&&(ke.receiveShadow=W.receiveShadow,kt.setValue(F,"receiveShadow",W.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Yi.envMap.value=Ae,Yi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),As&&(kt.setValue(F,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&J0(Yi,Nl),he&&U.fog===!0&&te.refreshFogUniforms(Yi,he),te.refreshMaterialUniforms(Yi,U,q,Z,ge),Fa.upload(F,ke.uniformsList,Yi,Ie)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Fa.upload(F,ke.uniformsList,Yi,Ie),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&kt.setValue(F,"center",W.center),kt.setValue(F,"modelViewMatrix",W.modelViewMatrix),kt.setValue(F,"normalMatrix",W.normalMatrix),kt.setValue(F,"modelMatrix",W.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const en=U.uniformsGroups;for(let Ol=0,ev=en.length;Ol<ev;Ol++)if(Ce.isWebGL2){const of=en[Ol];Fe.update(of,ji),Fe.bind(of,ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ji}function J0(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Q0(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,N,X){Be.get(b.texture).__webglTexture=N,Be.get(b.depthTexture).__webglTexture=X;const U=Be.get(b);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=X===void 0,U.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,N){const X=Be.get(b);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,X=0){A=b,E=N,R=X;let U=!0,W=null,he=!1,Se=!1;if(b){const Ae=Be.get(b);Ae.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(F.FRAMEBUFFER,null),U=!1):Ae.__webglFramebuffer===void 0?Ie.setupRenderTarget(b):Ae.__hasExternalTextures&&Ie.rebindTextures(b,Be.get(b.texture).__webglTexture,Be.get(b.depthTexture).__webglTexture);const Oe=b.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Se=!0);const Te=Be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Te[N])?W=Te[N][X]:W=Te[N],he=!0):Ce.isWebGL2&&b.samples>0&&Ie.useMultisampledRTT(b)===!1?W=Be.get(b).__webglMultisampledFramebuffer:Array.isArray(Te)?W=Te[X]:W=Te,T.copy(b.viewport),$.copy(b.scissor),Q=b.scissorTest}else T.copy(z).multiplyScalar(q).floor(),$.copy(I).multiplyScalar(q).floor(),Q=O;if(Re.bindFramebuffer(F.FRAMEBUFFER,W)&&Ce.drawBuffers&&U&&Re.drawBuffers(b,W),Re.viewport(T),Re.scissor($),Re.setScissorTest(Q),he){const Ae=Be.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ae.__webglTexture,X)}else if(Se){const Ae=Be.get(b.texture),Oe=N||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.__webglTexture,X||0,Oe)}P=-1},this.readRenderTargetPixels=function(b,N,X,U,W,he,Se){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){Re.bindFramebuffer(F.FRAMEBUFFER,we);try{const Ae=b.texture,Oe=Ae.format,Te=Ae.type;if(Oe!==Un&&pe.convert(Oe)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Te===bo&&(be.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&be.has("EXT_color_buffer_float"));if(Te!==zi&&pe.convert(Te)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Te===Ai&&(Ce.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-U&&X>=0&&X<=b.height-W&&F.readPixels(N,X,U,W,pe.convert(Oe),pe.convert(Te),he)}finally{const Ae=A!==null?Be.get(A).__webglFramebuffer:null;Re.bindFramebuffer(F.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(b,N,X=0){const U=Math.pow(2,-X),W=Math.floor(N.image.width*U),he=Math.floor(N.image.height*U);Ie.setTexture2D(N,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,b.x,b.y,W,he),Re.unbindTexture()},this.copyTextureToTexture=function(b,N,X,U=0){const W=N.image.width,he=N.image.height,Se=pe.convert(X.format),we=pe.convert(X.type);Ie.setTexture2D(X,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment),N.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,b.x,b.y,W,he,Se,we,N.image.data):N.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,b.x,b.y,N.mipmaps[0].width,N.mipmaps[0].height,Se,N.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,U,b.x,b.y,Se,we,N.image),U===0&&X.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(b,N,X,U,W=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=b.max.x-b.min.x+1,Se=b.max.y-b.min.y+1,we=b.max.z-b.min.z+1,Ae=pe.convert(U.format),Oe=pe.convert(U.type);let Te;if(U.isData3DTexture)Ie.setTexture3D(U,0),Te=F.TEXTURE_3D;else if(U.isDataArrayTexture)Ie.setTexture2DArray(U,0),Te=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const Le=F.getParameter(F.UNPACK_ROW_LENGTH),ot=F.getParameter(F.UNPACK_IMAGE_HEIGHT),lt=F.getParameter(F.UNPACK_SKIP_PIXELS),fn=F.getParameter(F.UNPACK_SKIP_ROWS),Yn=F.getParameter(F.UNPACK_SKIP_IMAGES),ft=X.isCompressedTexture?X.mipmaps[0]:X.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ft.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ft.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,b.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,b.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,b.min.z),X.isDataTexture||X.isData3DTexture?F.texSubImage3D(Te,W,N.x,N.y,N.z,he,Se,we,Ae,Oe,ft.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Te,W,N.x,N.y,N.z,he,Se,we,Ae,ft.data)):F.texSubImage3D(Te,W,N.x,N.y,N.z,he,Se,we,Ae,Oe,ft),F.pixelStorei(F.UNPACK_ROW_LENGTH,Le),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot),F.pixelStorei(F.UNPACK_SKIP_PIXELS,lt),F.pixelStorei(F.UNPACK_SKIP_ROWS,fn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Yn),W===0&&U.generateMipmaps&&F.generateMipmap(Te),Re.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Ie.setTextureCube(b,0):b.isData3DTexture?Ie.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ie.setTexture2DArray(b,0):Ie.setTexture2D(b,0),Re.unbindTexture()},this.resetState=function(){E=0,R=0,A=null,Re.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ue?ur:T0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ur?Ue:Xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class PT extends Y0{}PT.prototype.isWebGL1Renderer=!0;class UT extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class q0 extends Ts{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zp=new ut,Ku=new U0,Sa=new Pl,Ma=new D;class DT extends At{constructor(e=new jn,n=new q0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(r),Sa.radius+=s,e.ray.intersectsSphere(Sa)===!1)return;zp.copy(r).invert(),Ku.copy(e.ray).applyMatrix4(zp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=f,y=m;_<y;_++){const p=c.getX(_);Ma.fromBufferAttribute(h,p),Bp(Ma,p,l,r,e,n,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,y=m;_<y;_++)Ma.fromBufferAttribute(h,_),Bp(Ma,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bp(t,e,n,i,r,s,o){const a=Ku.distanceSqToPoint(t);if(a<n){const l=new D;Ku.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Qr extends jn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new D,h=new D,f=new D;for(let m=0;m<=i;m++)for(let _=0;_<=r;_++){const y=_/r*s,p=m/i*Math.PI*2;h.x=(e+n*Math.cos(p))*Math.cos(y),h.y=(e+n*Math.cos(p))*Math.sin(y),h.z=n*Math.sin(p),a.push(h.x,h.y,h.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=r;_++){const y=(r+1)*m+_-1,p=(r+1)*(m-1)+_-1,u=(r+1)*(m-1)+_,g=(r+1)*m+_;o.push(y,p,g),o.push(p,u,g)}this.setIndex(o),this.setAttribute("position",new Wn(a,3)),this.setAttribute("normal",new Wn(l,3)),this.setAttribute("uv",new Wn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ea extends Ts{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=w0,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qd extends At{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Hc=new ut,Hp=new D,Gp=new D;class $0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kd,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Hp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hp),Gp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Gp),n.updateMatrixWorld(),Hc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vp=new ut,Hs=new D,Gc=new D;class IT extends $0{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Hs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Hs),Gc.copy(i.position),Gc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Gc),i.updateMatrixWorld(),r.makeTranslation(-Hs.x,-Hs.y,-Hs.z),Vp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vp)}}class NT extends Qd{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new IT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class FT extends $0{constructor(){super(new G0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class OT extends Qd{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new FT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kT extends Qd{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);const zT=()=>{const t=ce.useRef(null);return ce.useEffect(()=>{const e=t.current,n=new UT,i=new sn(75,window.innerWidth/window.innerHeight,.01,1e4);i.position.z=0;const r=new Y0({canvas:e});r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight);const o=`hsl(${Math.random()*360}, 100%, 75%)`,a=`hsl(${Math.random()*360}, 100%, 75%)`,l=`hsl(${Math.random()*360}, 100%, 75%)`,c=new _n(new Qr(8,1.25,18,100),new Ea({color:o})),d=new _n(new Qr(10,.75,4,100),new Ea({color:a})),h=new _n(new Qr(12,1,18,100),new Ea({color:l})),f=new _n(new Qr(16,.5,18,100),new Ea({color:o}));n.add(c,d,h,f);const m=39,_=new Float32Array(m*3);for(let M=0;M<m;M++)_[M*3+0]=(Math.random()-.5)*80,_[M*3+1]=(Math.random()-.5)*30,_[M*3+2]=(Math.random()-.5)*60;const y=new jn;y.setAttribute("position",new Nn(_,3));const p=new q0({color:"rgb(255, 255, 255)",sizeAttenuation:!0,size:.03}),u=new DT(y,p);n.add(u);const g=new NT(16777215,100,100);g.position.set(20,20,-20);const v=new OT(12307677,1,100);v.position.set(50,50,0);const x=new kT(16777215,.05);n.add(g,v,x);const E=()=>{i.position.z=window.scrollY*.025};window.addEventListener("scroll",E);let R;const A=()=>{R=requestAnimationFrame(A),c.rotation.y+=.0025,d.rotation.y-=.001,h.rotation.y+=.0015,f.rotation.y-=5e-4,r.render(n,i)};A();const P=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",P),()=>{cancelAnimationFrame(R),window.removeEventListener("scroll",E),window.removeEventListener("resize",P),r.dispose()}},[]),K.jsx("canvas",{ref:t,style:{position:"fixed",top:0,left:0,zIndex:-1}})},BT=()=>K.jsx(K.Fragment,{children:K.jsx("div",{className:"footer"})}),HT="/assets/AS_Headshot2025-3c44829e.png",GT=()=>K.jsxs("section",{className:"hero",children:[K.jsx("img",{className:"headshot2",src:HT,alt:"headshot of Alex Solecki"}),K.jsxs("button",{children:[" ",K.jsx("a",{href:"mailto:alsolecki@gmail.com",children:"Contact Me"})]})]}),VT=()=>K.jsx("div",{className:"contact",children:K.jsxs("div",{className:"expand",children:[K.jsx("p",{className:"name",children:"Alex Solecki"}),K.jsx("p",{className:"city",children:"Washington DC Area"}),K.jsx("a",{href:"mailto:alsolecki@gmail.com",children:K.jsx("p",{children:"alsolecki@gmail.com"})}),K.jsx("a",{href:"https://github.com/alsolecki",children:K.jsx("p",{children:"github.com/alsolecki"})}),K.jsx("a",{href:"https://www.linkedin.com/in/alsolecki/",children:K.jsx("p",{children:"linkedin.com/alsolecki"})})]})});const WT=({devSubMenuOpen:t,setDevSubMenuOpen:e})=>K.jsx("div",{className:"dropdown",children:K.jsxs("ul",{className:t?"webdev-submenu":"webdev-submenu closed",onClick:()=>e(!t),children:[K.jsx("li",{children:K.jsx("a",{href:"https://learn-japanese-at-blair.netlify.app/",target:"_blank",rel:"noopener noreferrer",children:"JPL"})}),K.jsx("li",{children:K.jsx(no,{to:"https://wanna-watch.netlify.app",children:"WannaWatch"})}),K.jsx("li",{children:K.jsx(no,{to:"https://thedesignminds.com/",target:"_blank",rel:"noopener noreferrer",children:"TDM"})})]})}),XT="/assets/arsdesign-logo1-3876cad6.svg",jT=()=>{const[t,e]=ce.useState(!1),[n,i]=ce.useState(!1);let r=ce.useRef();return ce.useEffect(()=>{let s=o=>{r.current.contains(o.target)||e(!1)};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}}),K.jsxs("nav",{ref:r,children:[K.jsx("div",{className:"home",children:K.jsx("a",{href:"https://alsolecki.com/",children:K.jsx("img",{src:XT,alt:"ars design logo",style:{height:"98px",marginLeft:"-0.75rem"}})})}),K.jsxs("div",{className:"menu",onClick:()=>{e(!t)},children:[K.jsx("span",{}),K.jsx("span",{}),K.jsx("span",{})]}),K.jsxs("ul",{className:t?"open":"unopen",children:[K.jsx("li",{children:K.jsx(no,{to:"https://alsolecki.com/",children:"Home"})}),K.jsx("li",{children:K.jsx(no,{to:"https://solecki-exhibit-portfolio.netlify.app/",children:"Exhibits"})}),K.jsx("li",{children:K.jsx(no,{to:"/albums",children:"Top 50 Albums"})}),K.jsxs("li",{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[n&&K.jsx(WT,{devSubMenuOpen:"devSubMenuOpen",setDevSubMenuOpen:"setDevSubMenuOpen"}),K.jsx("a",{href:"/",children:"WebDev"})]}),K.jsx("li",{children:K.jsx("a",{href:"#contact",children:"Contact"})})]})]})},Vc=[{id:"the-strokes-is-this-it",title:"Is This It",artist:"The Strokes",year:2003,coverUrl:"https://i.scdn.co/image/ab67616d0000b27313f2466b83507515291acce4",rating:null,topRank:1,categories:["High School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/2k8KgmDp9oHrmu0MIj4XDE",discogs:""},musicbrainzId:"6d44b57a-2b9d-372a-b7c2-c670dca997d3"},{id:"david-bowie-heroes",title:"“Heroes”",artist:"David Bowie",year:1977,coverUrl:"https://i.scdn.co/image/ab67616d0000b273204f41d52743c6a9efd62985",rating:null,topRank:2,categories:["Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/4I5zzKYd2SKDgZ9DRf5LVk",discogs:""},musicbrainzId:"9eccd731-ccf8-3614-a4b8-82ec6d2d3ab5"},{id:"pavement-slanted-and-enchanted",title:"Slanted and Enchanted",artist:"Pavement",year:1992,coverUrl:"https://ia600506.us.archive.org/24/items/mbid-547b6b75-d81d-4d9e-a3a5-c2115224edaf/mbid-547b6b75-d81d-4d9e-a3a5-c2115224edaf-36814960831.jpg",rating:null,topRank:3,categories:["High School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/7o14zVcXSRk7clV6QCEdOD",discogs:""},musicbrainzId:"869f9eac-2a40-3a41-80a3-6bf2297a7cbc"},{id:"cake-motorcade-of-generosity",title:"Motorcade of Generosity",artist:"CAKE",year:1994,coverUrl:"https://i.scdn.co/image/ab67616d0000b273dadd32061ed455719bd196d1",rating:null,topRank:4,categories:["Middle School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/7sdz6zUhXNwbwzqVRskzj9",discogs:""},musicbrainzId:"af7c7ca3-e3a8-3d30-9984-05fe07ead521"},{id:"built-to-spill-perfect-from-now-on",title:"Perfect From Now On",artist:"Built to Spill",year:1996,coverUrl:"https://dn711000.ca.archive.org/0/items/mbid-a253ff2f-c934-4801-822a-5b476268ba36/mbid-a253ff2f-c934-4801-822a-5b476268ba36-22152232964.jpg",rating:null,topRank:5,categories:["High School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/6DlZzUnITGI5cWGTjIWSBm",discogs:""},musicbrainzId:"e79d22e8-bad6-4b4b-a7b1-ea62796b7eee"},{id:"sparklehorse-good-morning-spider",title:"Good Morning Spider",artist:"Sparklehorse",year:1998,coverUrl:"https://i.scdn.co/image/ab67616d0000b273b1b159766e2734a4dc5b3c5f",rating:null,topRank:6,categories:["College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/4FWzJKnZMl51qBHzmKClqP",discogs:""},musicbrainzId:"9bca2dce-c84f-3197-a43a-0d5538d21306"},{id:"leonard-cohen-songs-of-leonard-cohen",title:"Songs of Leonard Cohen",artist:"Leonard Cohen",year:1967,coverUrl:"https://dn711209.ca.archive.org/0/items/mbid-2fc159df-d05b-44f6-9659-51136c3ba66b/mbid-2fc159df-d05b-44f6-9659-51136c3ba66b-2144230905.jpg",rating:null,topRank:7,categories:["Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/6EcqWi6PA9CbvtulGbEsPN",discogs:""},musicbrainzId:"34291a49-8df9-304e-bd39-16b11d829d5f"},{id:"pixies-surfer-rosa",title:"Surfer Rosa",artist:"Pixies",year:1988,coverUrl:"https://dn710300.ca.archive.org/0/items/mbid-e78fc156-e0be-4e1a-a668-9338356dfe29/mbid-e78fc156-e0be-4e1a-a668-9338356dfe29-3350498477.jpg",rating:null,topRank:8,categories:["High School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/50j4Wm1b9hLpSpPIA39Vp9",discogs:""},musicbrainzId:"74e36cbc-a747-3ebf-a60e-51e656c87741"},{id:"radiohead-ok-computer",title:"OK Computer",artist:"Radiohead",year:1997,coverUrl:"https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856",rating:null,topRank:10,categories:["Middle School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/6dVIqQ8qmQ5GBnJ9shOYGE",discogs:""},musicbrainzId:"b1392450-e666-3926-a536-22c65f834433"},{id:"television-marquee-moon",title:"Marquee Moon",artist:"Television",year:1977,coverUrl:"https://i.scdn.co/image/ab67616d0000b27318b36d985b0ae01163ca9cf6",rating:null,topRank:13,categories:["College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/630o1rKTDsLeIPreOY1jqP",discogs:""},musicbrainzId:"2b9f99d8-becf-3fc3-86a6-2bdd4cef93fe"},{id:"jamiroquai-the-return-of-the-space-cowboy",title:"The Return of the Space Cowboy",artist:"Jamiroquai",year:1994,coverUrl:"https://ia601403.us.archive.org/34/items/mbid-992a052d-2f2e-3276-b9cf-c068b2dafa2a/mbid-992a052d-2f2e-3276-b9cf-c068b2dafa2a-11810687085.jpg",rating:null,topRank:14,categories:["High School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/3emhnEQ76nUUehouSvnGxk",discogs:""},musicbrainzId:"ec79a9d4-6fa3-38b9-b976-bcd2c56cd477"},{id:"silver-jews-the-natural-bridge",title:"The Natural Bridge",artist:"Silver Jews",year:1996,coverUrl:"https://i.scdn.co/image/ab67616d0000b273d3be14a41b75c3fc08f8f11d",rating:null,topRank:15,categories:["College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/53s93tksSeBis2gL50AQPJ",discogs:""},musicbrainzId:"675f2971-7de2-3fdc-a73e-f0516587ee99"},{id:"mgmt-oracular-spectacular",title:"Oracular Spectacular",artist:"MGMT",year:2007,coverUrl:"https://i.scdn.co/image/ab67616d0000b273abdf7749aeb5229dbf305f03",rating:null,topRank:16,categories:["Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/6mm1Skz3JE6AXneya9Nyiv",discogs:""},musicbrainzId:"f7da2770-bf72-3dea-8904-ff6135822724"},{id:"neil-young-after-the-gold-rush",title:"After the Gold Rush",artist:"Neil Young",year:1970,coverUrl:"https://i.scdn.co/image/ab67616d0000b273a2507ac7f34640ac11b3f31b",rating:null,topRank:17,categories:["Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/5EVlXlHbRQI8ybuNt4ArXI",discogs:""},musicbrainzId:"b6a3952b-9977-351c-a80a-73e023143858"},{id:"guided-by-voices-bee-thousand",title:"Bee Thousand",artist:"Guided by Voices",year:1994,coverUrl:"https://i.scdn.co/image/ab67616d0000b273bdbe874ff5ea3b896b3880d6",rating:null,topRank:18,categories:["Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/2VQKZAvtL5epxdEOuLVP6t",discogs:""},musicbrainzId:"b30f876f-1fe6-34ef-b334-9c68af820daa"},{id:"stevie-wonder-songs-in-the-key-of-life",title:"Songs in the Key of Life",artist:"Stevie Wonder",year:1976,coverUrl:"https://dn710000.ca.archive.org/0/items/mbid-8bf1769c-b081-4a70-ac6d-9a97c83ad135/mbid-8bf1769c-b081-4a70-ac6d-9a97c83ad135-39110820929.jpg",rating:null,topRank:19,categories:["Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/6YUCc2RiXcEKS9ibuZxjt0",discogs:""},musicbrainzId:"ea88b09b-fd34-33cf-a3e5-25a3a2fb4c6f"},{id:"of-montreal-the-sunlandic-twins",title:"The Sunlandic Twins",artist:"of Montreal",year:2005,coverUrl:"https://i.scdn.co/image/ab67616d0000b273c6458c69d33139ff88f2e70d",rating:null,topRank:20,categories:["College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/2h79iBNx5cNPafy42aI1NE",discogs:""},musicbrainzId:"d0b72322-9f88-3b55-a761-279b083d1c9d"},{id:"fugazi-the-argument",title:"The Argument",artist:"Fugazi",year:2001,coverUrl:"https://dn711104.ca.archive.org/0/items/mbid-0e789eca-d5e5-469f-8648-9fe5c1ca68a9/mbid-0e789eca-d5e5-469f-8648-9fe5c1ca68a9-31947820931.jpg",rating:null,topRank:21,categories:["College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/1zql8Jptd9BhBt2d8bgnVY",discogs:""},musicbrainzId:"7b1cb5fb-7ba5-3472-a687-1cb8f2d896e7"},{id:"talking-heads-remain-in-light",title:"Remain in Light",artist:"Talking Heads",year:1980,coverUrl:"https://i.scdn.co/image/ab67616d0000b273e49a405217bda217816f7bf5",rating:null,topRank:22,categories:["College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/1JvXxLsm0PxlGH4LXzqMGq",discogs:""},musicbrainzId:"f6b1b900-6108-32f0-abbd-2855af9151eb"},{id:"the-sea-and-cake-oui",title:"Oui",artist:"The Sea and Cake",year:2e3,coverUrl:"https://dn721803.ca.archive.org/0/items/mbid-10e20da9-b170-4ffa-8efd-cad37a6e1b5b/mbid-10e20da9-b170-4ffa-8efd-cad37a6e1b5b-34644236885.jpg",rating:null,topRank:23,categories:["College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/7wBQyxxN4LnPvbC2PaymVx",discogs:""},musicbrainzId:"3bca8854-8de4-3164-be57-1e83bf18bbb9"},{id:"john-maus-later-than-you-think",title:"Later Than You Think",artist:"John Maus",year:2025,coverUrl:"https://dn721300.ca.archive.org/0/items/mbid-4b67eae5-a5cd-433c-ac79-792b5a5af7a5/mbid-4b67eae5-a5cd-433c-ac79-792b5a5af7a5-43130269367.jpg",rating:null,topRank:24,categories:["Post Claudia"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/4cmHgG4abSTiNJ8MIZWoHJ",discogs:""},musicbrainzId:"06774d73-51a7-4f50-a63e-8506668b8ffd"},{id:"the-beatles-help",title:"Help!",artist:"The Beatles",year:1965,coverUrl:"https://i.scdn.co/image/ab67616d0000b273e3e3b64cea45265469d4cafa",rating:null,topRank:25,categories:["College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/0PT5m6hwPRrpBwIHVnvbFX",discogs:""},musicbrainzId:"0d44e1cb-c6e0-3453-8b68-4d2082f05421"},{id:"elliott-smith-either-or",title:"Either/Or",artist:"Elliott Smith",year:1997,coverUrl:"https://i.scdn.co/image/ab67616d0000b2732f3552dc6f9e4e2748c5b8ba",rating:null,topRank:26,categories:["Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/5bmpvyP7UGqB4VuXmrJUMy",discogs:""},musicbrainzId:"dfb85157-313b-3f5f-8739-a5162bcb6345"},{id:"sonic-youth-daydream-nation",title:"Daydream Nation",artist:"Sonic Youth",year:1988,coverUrl:"https://i.scdn.co/image/ab67616d0000b27320f51363b9e2cbd207f158ba",rating:null,topRank:27,categories:["College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/23O4F21GDWiGd33tFN3ZgI",discogs:""},musicbrainzId:"24769a99-8189-3d8c-947e-dbc8574dad5c"},{id:"the-feelies-crazy-rhythms",title:"Crazy Rhythms",artist:"The Feelies",year:1980,coverUrl:"https://i.scdn.co/image/ab67616d0000b2734de964b9e028a2d181611595",rating:null,topRank:28,categories:["College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/7uSnEvtwLuUJVtEmDFrsOU",discogs:""},musicbrainzId:"0e1245bc-b370-32ec-b39d-ec746be808fc"},{id:"destroyer-destroyer-s-rubies",title:"Destroyer’s Rubies",artist:"Destroyer",year:2006,coverUrl:"https://i.scdn.co/image/ab67616d0000b2733c6dca8d497f2566d0fc8e95",rating:null,topRank:29,categories:["Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/7p9WH2OIzR3ZwQA1PdKWVn",discogs:""},musicbrainzId:"bd207646-7cc8-3d4e-ae55-cc11b1804827"},{id:"the-beach-boys-pet-sounds",title:"Pet Sounds",artist:"The Beach Boys",year:1966,coverUrl:"https://i.scdn.co/image/ab67616d0000b27350eb0c521d2d3b2f599bff04",rating:null,topRank:30,categories:["Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/2CNEkSE8TADXRT2AzcEt1b",discogs:""},musicbrainzId:"fdd96703-7b21-365e-bdea-38029fbeb84e"},{id:"joni-mitchell-blue",title:"Blue",artist:"Joni Mitchell",year:1971,coverUrl:"https://dn710604.ca.archive.org/0/items/mbid-243fb7b0-e7f3-42e8-bdfc-a66fd9e23d0e/mbid-243fb7b0-e7f3-42e8-bdfc-a66fd9e23d0e-11322846424.jpg",rating:null,topRank:31,categories:["Mid Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/1vz94WpXDVYIEGja8cjFNa",discogs:""},musicbrainzId:"42d725fb-a8b7-388c-8866-3b02789af326"},{id:"the-delfonics-the-delfonics",title:"The Delfonics",artist:"The Delfonics",year:1970,coverUrl:"https://i.scdn.co/image/ab67616d0000b273f606a66ae319776c0dc86ce8",rating:null,topRank:32,categories:["Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/6Ie6D0KslXxrbkOAr5sbyX",discogs:""},musicbrainzId:"3b5e9ee2-7013-35c4-8424-1beda583fca5"},{id:"tortoise-tortoise",title:"Tortoise",artist:"Tortoise",year:1994,coverUrl:"https://ia601800.us.archive.org/6/items/mbid-c1b0eae2-6d66-4424-a8b3-5ae7ea20a2b0/mbid-c1b0eae2-6d66-4424-a8b3-5ae7ea20a2b0-8213201002.jpg",rating:null,topRank:33,categories:["College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/1AmtXhIDwENPsR1qzdoq3Q",discogs:""},musicbrainzId:"edb5b115-663c-3b62-a1f0-b44362a9b979"},{id:"cameron-winter-heavy-metal",title:"Heavy Metal",artist:"Cameron Winter",year:2024,coverUrl:"https://i.scdn.co/image/ab67616d0000b2734738aa171569052376f162fe",rating:null,topRank:34,categories:["Post Claudia"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/7mOrnQqDad3RgYQsJGaaqk",discogs:""},musicbrainzId:"a9b6e76b-190b-4802-b120-ddef0fd852b7"},{id:"blonde-redhead-melody-of-certain-damaged-lemons",title:"Melody of Certain Damaged Lemons",artist:"Blonde Redhead",year:2e3,coverUrl:"https://i.scdn.co/image/ab67616d0000b2735d03db2dbc21ba11e3e00330",rating:null,topRank:35,categories:["High School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/6wRDKCpKw3ap6dhkpdXNIN",discogs:""},musicbrainzId:"00014d9a-830d-3656-9b19-39bfd099b1a6"},{id:"rage-against-the-machine-evil-empire",title:"Evil Empire",artist:"Rage Against the Machine",year:1996,coverUrl:"https://i.scdn.co/image/ab67616d0000b273053f006079bce979e5fef1e1",rating:null,topRank:36,categories:["Middle School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/24E6rDvGDuYFjlGewp4ntF",discogs:""},musicbrainzId:"3188ab05-0ddb-4808-84fc-f5ca2fdcc4bf"},{id:"eddie-harris-exodus-to-jazz",title:"Exodus to Jazz",artist:"Eddie Harris",year:1961,coverUrl:"https://i.scdn.co/image/ab67616d0000b273f2f636ddfc5a8edcb53b58d3",rating:null,topRank:37,categories:["Mid Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/4X6bhFvpNfBG2v6DTBA7lL",discogs:""},musicbrainzId:"9bb40671-73ba-3c78-a56d-26a562bfc732"},{id:"mitski-laurel-hell",title:"Laurel Hell",artist:"Mitski",year:2022,coverUrl:"https://i.scdn.co/image/ab67616d0000b273d8041a531487d0e0e4cfb41f",rating:null,topRank:38,categories:["Mid Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/4rcinMUHEWOxpIwJo2sf22",discogs:""},musicbrainzId:"f99a6b54-900b-4f17-bdcf-451639873b5d"},{id:"mr-bungle-california",title:"California",artist:"Mr. Bungle",year:1999,coverUrl:"https://i.scdn.co/image/ab67616d0000b273c383eff4368b19f5f05b3108",rating:null,topRank:39,categories:["Middle School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/6QAKD1wqCrmkBYw1AsZfEy",discogs:""},musicbrainzId:"68445df6-13b2-360b-b43f-7b286e506c7c"},{id:"sean-nicholas-savage-flamingo",title:"Flamingo",artist:"Sean Nicholas Savage",year:2011,coverUrl:"https://i.scdn.co/image/ab67616d0000b2735ce4dbaa0e2f40eb7bb80aa4",rating:null,topRank:40,categories:["Mid Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/5BnYT7y6HaxH4ctmmkO7My",discogs:""},musicbrainzId:"049413f7-f3da-4a2f-9328-01840ac89ed1"},{id:"mac-demarco-salad-days",title:"Salad Days",artist:"Mac DeMarco",year:2014,coverUrl:"https://i.scdn.co/image/ab67616d0000b2738b221f2ccf777ae0d4b0db50",rating:null,topRank:41,categories:["Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/2r63qjVnXyfTc2eJRSptxS",discogs:""},musicbrainzId:"99c195d6-0247-48d0-83ab-640ecca7a74f"},{id:"the-unicorns-who-will-cut-our-hair-when-we-re-gone",title:"Who Will Cut Our Hair When We're Gone?",artist:"The Unicorns",year:2003,coverUrl:"https://dn721903.ca.archive.org/0/items/mbid-5ac0b48f-da4f-3151-96f9-fb41a986b603/mbid-5ac0b48f-da4f-3151-96f9-fb41a986b603-33424835505.jpg",rating:null,topRank:45,categories:["High School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/5YVJt1byIaOGa6PWU3SJ53",discogs:""},musicbrainzId:"78825696-29f8-3b33-abcf-29f56bf1ae5d"},{id:"saba-care-for-me",title:"CARE FOR ME",artist:"Saba",year:2018,coverUrl:"https://i.scdn.co/image/ab67616d0000b2734e40d77b9cd4e59f992eff87",rating:null,topRank:46,categories:["Mid Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/1crhG7YecAj6ZN0AAYMYsb",discogs:""},musicbrainzId:"88ff5382-b88b-4e83-baaa-61a3258a2305"},{id:"neutral-milk-hotel-in-the-aeroplane-over-the-sea",title:"In the Aeroplane Over the Sea",artist:"Neutral Milk Hotel",year:1998,coverUrl:"https://i.scdn.co/image/ab67616d0000b273bc1e41eed3ddbdfff6f2d74b",rating:null,topRank:47,categories:["Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/17q5eeNk3HAjX1gzQnkTX7",discogs:""},musicbrainzId:"8f310800-045b-3e12-8268-50b3d33a2267"},{id:"kurt-vile-smoke-ring-for-my-halo",title:"Smoke Ring for My Halo",artist:"Kurt Vile",year:2011,coverUrl:"https://dn711005.ca.archive.org/0/items/mbid-60eb5181-98aa-4845-8492-e5dfc144ef71/mbid-60eb5181-98aa-4845-8492-e5dfc144ef71-15911362429.jpg",rating:null,topRank:48,categories:["Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/1y4oIYqNUkzEZNPWncbbAr",discogs:""},musicbrainzId:"3963c451-0db1-4fa0-9a13-2476f4bd8b9a"},{id:"kraftwerk-the-man-machine",title:"The Man-Machine",artist:"Kraftwerk",year:1978,coverUrl:"https://i.scdn.co/image/ab67616d0000b273e4c3295cd6464ed5bc0f6c2c",rating:null,topRank:49,categories:["Post Claudia"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/3eyz60xEK5dGEeZF1JJSi9",discogs:""},musicbrainzId:"d147e89b-90ca-35b6-9f7b-3e34b8edf63f"},{id:"they-might-be-giants-lincoln",title:"Lincoln",artist:"They Might Be Giants",year:1988,coverUrl:"https://dn710707.ca.archive.org/0/items/mbid-3ff2bdd4-cdac-425c-a5db-e38e9ccd3bca/mbid-3ff2bdd4-cdac-425c-a5db-e38e9ccd3bca-44047034505.png",rating:null,topRank:50,categories:["Mid Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/1D94ri7k6pTBK7tlRClSl7",discogs:""},musicbrainzId:"715a2093-aab9-3cbe-bc15-0925533e59df"},{id:"metronomy-the-english-riviera",title:"The English Riviera",artist:"Metronomy",year:2011,coverUrl:"https://i.scdn.co/image/ab67616d0000b2738ca7d89456553e4bbbf3c981",rating:null,topRank:null,categories:["Top Bubble","Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/716fnrS2qXChPC3J2X73pK",discogs:""},musicbrainzId:"f5979376-c7af-4bb5-a25b-d38f9ab584dc"},{id:"sparks-propaganda",title:"Propaganda",artist:"Sparks",year:1974,coverUrl:"https://i.scdn.co/image/ab67616d0000b2733519a80d3768863e57eaeb31",rating:null,topRank:null,categories:["Top Bubble","Mid Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/3bOrSzGgJnjGOa9kOybRCs",discogs:""},musicbrainzId:"3500e8a2-22f4-44f7-860b-f382b77649ae"},{id:"laurie-anderson-big-science",title:"Big Science",artist:"Laurie Anderson",year:1982,coverUrl:"https://i.scdn.co/image/ab67616d0000b273588b07fde7427a6b8e2614fe",rating:null,topRank:null,categories:["Top Bubble","Post Claudia"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/5nfdstl6JxGrDQtm1B2LnZ",discogs:""},musicbrainzId:"9b7fd241-b8b6-3b0a-862c-de826b1189ed"},{id:"silkworm-firewater",title:"Firewater",artist:"Silkworm",year:1996,coverUrl:"https://i.scdn.co/image/ab67616d0000b273f8412c14f8b62f5183fdd71c",rating:null,topRank:null,categories:["Top Bubble","Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/2m7gT5baLs4GyMn0C1WyBf",discogs:""},musicbrainzId:"cb85916f-65b9-3fff-ad5e-6e4479517686"},{id:"animal-collective-sung-tongs",title:"Sung Tongs",artist:"Animal Collective",year:2004,coverUrl:"https://i.scdn.co/image/ab67616d0000b27302ed9d8a9c8d138641861c1b",rating:null,topRank:null,categories:["Mid Bubble","College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/4eBP58Wc5U1rmNt0BdQmMa",discogs:""},musicbrainzId:"264f585d-9a28-37b7-88b3-d8e090b4d2e7"},{id:"electrelane-the-power-out",title:"The Power Out",artist:"Electrelane",year:2004,coverUrl:"https://i.scdn.co/image/ab67616d0000b27300e4decab546af050b8ded05",rating:null,topRank:null,categories:["Mid Bubble","Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/2OI1JgWQRcAiNZJGTBeCk7",discogs:""},musicbrainzId:"8056312d-2c69-3e37-9ebe-abdf99affcc8"},{id:"belle-sebastian-the-boy-with-the-arab-strap",title:"The Boy With the Arab Strap",artist:"Belle & Sebastian",year:1998,coverUrl:"https://ia600808.us.archive.org/11/items/mbid-ea7b829c-3de6-33a6-8303-7101b3e669c6/mbid-ea7b829c-3de6-33a6-8303-7101b3e669c6-5806412500.jpg",rating:null,topRank:null,categories:["Mid Bubble","High School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/4AChnLbiWqxiotXz8kv6D7",discogs:""},musicbrainzId:"25f3f7bf-f308-390c-b512-e0d4caaa8417"},{id:"the-flaming-lips-yoshimi-battles-the-pink-robots",title:"Yoshimi Battles the Pink Robots",artist:"The Flaming Lips",year:2002,coverUrl:"https://dn710707.ca.archive.org/0/items/mbid-5ee8b734-e29a-36d9-9913-3319e21b5444/mbid-5ee8b734-e29a-36d9-9913-3319e21b5444-2572175401.jpg",rating:null,topRank:null,categories:["Mid Bubble","High School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/49LA20VMk65fQyEaIzYdvf",discogs:""},musicbrainzId:"54b1ad4e-7e86-308d-b053-a0843f6abbdb"},{id:"beck-sea-change",title:"Sea Change",artist:"Beck",year:2002,coverUrl:"https://i.scdn.co/image/ab67616d0000b273e7fc5b50ff71f92809db9d79",rating:null,topRank:null,categories:["Mid Bubble","College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/5ieP11rJQvuYz0Ov3k03cy",discogs:""},musicbrainzId:"5f84e8b9-b8e5-3fbf-b514-0192a62d88b6"},{id:"frank-black-frank-black",title:"Frank Black",artist:"Frank Black",year:1993,coverUrl:"https://i.scdn.co/image/ab67616d0000b2736665eaa6df0396174cbfc916",rating:null,topRank:null,categories:["Mid Bubble","High School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/20zAeTA8IYd1nfh6UgXjun",discogs:""},musicbrainzId:"2b526ca9-f06f-3cfe-b540-79a642426f61"},{id:"wilco-a-ghost-is-born",title:"A Ghost Is Born",artist:"Wilco",year:2005,coverUrl:"https://i.scdn.co/image/ab67616d0000b273cc48fe77912cd73e98d7612f",rating:null,topRank:null,categories:["Mid Bubble","College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/1RCxMEn5jFeUWbof3vy8oC",discogs:""},musicbrainzId:"46963f93-c190-42c9-a56b-d2b3c097961f"},{id:"ariel-pink-s-haunted-graffiti-house-arrest",title:"House Arrest",artist:"Ariel Pink’s Haunted Graffiti",year:2002,coverUrl:"https://dn721806.ca.archive.org/0/items/mbid-8186dc83-c885-4dcc-a4b0-3935c79c496c/mbid-8186dc83-c885-4dcc-a4b0-3935c79c496c-42158796471.jpg",rating:null,topRank:null,categories:["Mid Bubble","College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/6XYmhl9RunhHUoHLEdGbtZ",discogs:""},musicbrainzId:"ee0b9649-1b0e-3e6d-989a-d9eaae25afa3"},{id:"cate-le-bon-pompeii",title:"Pompeii",artist:"Cate Le Bon",year:2022,coverUrl:"https://i.scdn.co/image/ab67616d0000b27361ea5f5dad6699eafd00b71f",rating:null,topRank:null,categories:["Mid Bubble","Post Claudia"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/4r7yE87XtDMk6sXsfOm71D",discogs:""},musicbrainzId:"6aa59603-9427-4519-926d-f62fdf145447"},{id:"loving-if-i-am-only-my-thoughts",title:"If I Am Only My Thoughts",artist:"Loving",year:2020,coverUrl:"https://i.scdn.co/image/ab67616d0000b273d875b62508f3c29ca2146f11",rating:null,topRank:null,categories:["Mid Bubble","Mid Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/2wnCHhRVZUFVEiAO79F4XO",discogs:""},musicbrainzId:"7932545a-61da-451f-b979-7d4c7fe78ba3"},{id:"tops-picture-you-staring",title:"Picture You Staring",artist:"TOPS",year:2014,coverUrl:"https://i.scdn.co/image/ab67616d0000b273f2f978160a43c037297075af",rating:null,topRank:null,categories:["Mid Bubble","Mid Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/4z3LIKiUlP8T192JheUI1U",discogs:""},musicbrainzId:"5cddcae1-2d67-4e1a-be68-0dc05e118315"},{id:"orange-juice-the-orange-juice",title:"The Orange Juice",artist:"Orange Juice",year:1984,coverUrl:"https://i.scdn.co/image/ab67616d0000b273341a47b9de6f523f1969e9a2",rating:null,topRank:null,categories:["Low Bubble","Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/6q8BNcH6wkWwWC0fGoJwkS",discogs:""},musicbrainzId:"b52561f9-a734-37e7-8914-39d99fdff104"},{id:"mission-of-burma-vs",title:"Vs.",artist:"Mission of Burma",year:1982,coverUrl:"https://i.scdn.co/image/ab67616d0000b273a500dea4cc326f36ba998ef8",rating:null,topRank:null,categories:["Low Bubble","College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/7vC6N6yr0lqOiyp7AYX1qH",discogs:""},musicbrainzId:"d1877fe7-725e-3115-9dcf-f4865fd0b74e"},{id:"yo-la-tengo-i-can-hear-the-heart-beating-as-one",title:"I Can Hear the Heart Beating as One",artist:"Yo La Tengo",year:1997,coverUrl:"https://i.scdn.co/image/ab67616d0000b2731f00d48ee488c62bc46d2418",rating:null,topRank:null,categories:["Low Bubble","College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/3V18DIKvRuwdxc2LE4wuac",discogs:""},musicbrainzId:"901ddfef-b428-3022-a7b9-429f56513831"},{id:"arcade-fire-funeral",title:"Funeral",artist:"Arcade Fire",year:2004,coverUrl:"https://i.scdn.co/image/ab67616d0000b2737870762a58313ad6f981d664",rating:null,topRank:null,categories:["Low Bubble","High School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/6ZB8qaR9JNuS0Q0bG1nbcH",discogs:""},musicbrainzId:"05affa96-5959-32da-8d75-1c9eb985ca59"},{id:"the-modern-lovers-the-modern-lovers",title:"The Modern Lovers",artist:"The Modern Lovers",year:1976,coverUrl:"https://dn721808.ca.archive.org/0/items/mbid-4071d957-1ac3-3f35-9437-c06d364ea8a3/mbid-4071d957-1ac3-3f35-9437-c06d364ea8a3-9417504826.jpg",rating:null,topRank:null,categories:["Low Bubble","Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/7ro1W6lc4tuTaRyA8rnVm1",discogs:""},musicbrainzId:"91e1f88a-f081-3639-9972-0d46b3d3b616"},{id:"t-rex-electric-warrior",title:"Electric Warrior",artist:"T. Rex",year:1971,coverUrl:"https://i.scdn.co/image/ab67616d0000b273eaf232c7a3e9c9acb9acd51c",rating:null,topRank:null,categories:["Low Bubble","College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/4Yw5uS8at8GkWmH2gZmLY0",discogs:""},musicbrainzId:"e53310bf-8ccc-3d7f-a0b7-5ca4dbababcb"},{id:"the-db-s-stands-for-decibels",title:"Stands for deciBels",artist:"The dB’s",year:1981,coverUrl:"https://dn721902.ca.archive.org/0/items/mbid-2a08694c-8fff-4d16-9f64-cfda61504e27/mbid-2a08694c-8fff-4d16-9f64-cfda61504e27-43874540128.jpg",rating:null,topRank:null,categories:["Low Bubble","Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/2uT6JDQiHqhRDd7T49BztQ",discogs:""},musicbrainzId:"b400a062-78f4-3a50-9494-e4235304e160"},{id:"sam-prekop-who-s-your-new-professor",title:"Who's Your New Professor",artist:"Sam Prekop",year:2005,coverUrl:"https://ia600808.us.archive.org/22/items/mbid-2ad2ffda-12d6-4bb8-85cd-bcea25426c64/mbid-2ad2ffda-12d6-4bb8-85cd-bcea25426c64-21912333296.jpg",rating:null,topRank:null,categories:["Low Bubble","College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/0iUN5c7t6CWTKnLgtMY6gF",discogs:""},musicbrainzId:"0264709a-d67b-396d-aaf0-69b6a9904925"},{id:"the-wrens-the-meadowlands",title:"The Meadowlands",artist:"The Wrens",year:2002,coverUrl:"https://dn721907.ca.archive.org/0/items/mbid-cef6b0f6-32cf-4c0d-bd3a-2b7e0b9c2307/mbid-cef6b0f6-32cf-4c0d-bd3a-2b7e0b9c2307-10357614627.jpg",rating:null,topRank:null,categories:["Low Bubble","Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/4Olz2cm8ncBqhnRcDwqVFK",discogs:""},musicbrainzId:"cd359166-1c41-3b6a-844c-7ff740141611"},{id:"real-estate-days",title:"Days",artist:"Real Estate",year:2011,coverUrl:"https://dn710205.ca.archive.org/0/items/mbid-122259c2-d41f-434f-b319-fb31d560af86/mbid-122259c2-d41f-434f-b319-fb31d560af86-32581253093.jpg",rating:null,topRank:null,categories:["Low Bubble","Mid Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/4F6yLWrwSlHv5aZYZ3waAb",discogs:""},musicbrainzId:"0f8b895a-668f-48a9-a0b3-7dff5a78678b"},{id:"billy-joel-the-stranger",title:"The Stranger",artist:"Billy Joel",year:1977,coverUrl:"https://dn710807.ca.archive.org/0/items/mbid-cd0946e3-d1ac-4e2c-87e5-57eafec05e7d/mbid-cd0946e3-d1ac-4e2c-87e5-57eafec05e7d-11232338992.jpg",rating:null,topRank:null,categories:["Bubble Out"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/3IILMjMMnoN2sKzgesX8KV",discogs:""},musicbrainzId:"735bcee6-6be6-3957-af15-d21ba2bd355b"},{id:"wire-chairs-missing",title:"Chairs Missing",artist:"Wire",year:1978,coverUrl:"https://dn721808.ca.archive.org/0/items/mbid-51c51799-84aa-4fec-bd37-6319963b21f9/mbid-51c51799-84aa-4fec-bd37-6319963b21f9-39959233147.jpg",rating:null,topRank:null,categories:["Bubble Out"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/7tWxaE1as1wy12Yd1De41r",discogs:""},musicbrainzId:"3e60a576-5bd0-3028-a0db-558c4a9845c7"},{id:"archers-of-loaf-icky-mettle",title:"Icky Mettle",artist:"Archers of Loaf",year:1993,coverUrl:"https://i.scdn.co/image/ab67616d0000b27399221ebf6a55fb1433709cb1",rating:null,topRank:null,categories:["Bubble Out"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/37yjW2JMrSsYepDSKB1SiM",discogs:""},musicbrainzId:"1a366c4d-abb2-4b1f-8301-ba02d562fa98"},{id:"joy-division-unknown-pleasures",title:"Unknown Pleasures",artist:"Joy Division",year:1979,coverUrl:"https://ia600900.us.archive.org/27/items/mbid-c619a467-2f82-4618-9cc3-d5a0ce917756/mbid-c619a467-2f82-4618-9cc3-d5a0ce917756-41281267244.jpg",rating:null,topRank:null,categories:["Bubble Out"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/33qkK1brpt6t8unIpeM2Oy",discogs:""},musicbrainzId:"42352def-1aab-3000-b548-895ebd869cb6"},{id:"beastie-boys-ill-communication",title:"Ill Communication",artist:"Beastie Boys",year:1994,coverUrl:"https://i.scdn.co/image/ab67616d0000b273436a305db8bd85b820da3e5a",rating:null,topRank:null,categories:["Bubble Out"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/6lfjbwFGzQ6aSNP1N3JlT8",discogs:""},musicbrainzId:"1134696c-1078-3c38-bcaa-4ee7c320670a"},{id:"mercury-rev-all-is-dream",title:"All Is Dream",artist:"Mercury Rev",year:2001,coverUrl:"https://i.scdn.co/image/ab67616d0000b273ea4a809945577485a4f67e25",rating:null,topRank:null,categories:["Bubble Out"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/4N13GH5Ofi55VvG5yc3vFl",discogs:""},musicbrainzId:"08f53003-a3d8-3a84-8b02-0fb81a92b8de"},{id:"fountains-of-wayne-fountains-of-wayne",title:"Fountains of Wayne",artist:"Fountains of Wayne",year:1996,coverUrl:"https://i.scdn.co/image/ab67616d0000b273442b4cf01d16090a3a2bdf0b",rating:null,topRank:null,categories:["Bubble Out"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/4I9PfbZ1ErduBZWTimzz2s",discogs:""},musicbrainzId:"91514354-70e5-3d6b-9b7b-f03d36fa4527"},{id:"el-guapo-fake-french",title:"Fake French",artist:"El Guapo",year:2003,coverUrl:"https://dn721806.ca.archive.org/0/items/mbid-226a271a-d089-46eb-8f00-230ab3adde5b/mbid-226a271a-d089-46eb-8f00-230ab3adde5b-28836147392.jpg",rating:null,topRank:null,categories:["Bubble Out"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/4qqtyAwlhaiEhWnnC701oX",discogs:""},musicbrainzId:"218e34b1-c2f6-34ed-96f6-25ddc650f5b8"},{id:"ozma-rock-and-roll-part-three",title:"Rock and Roll Part Three",artist:"Ozma",year:2e3,coverUrl:"https://dn710004.ca.archive.org/0/items/mbid-ef52beed-d8a5-4d00-a200-e7b55badf257/mbid-ef52beed-d8a5-4d00-a200-e7b55badf257-44571304273.jpg",rating:null,topRank:null,categories:["Bubble Out"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/5JeGimoQI5Xu8XR4YUtacJ",discogs:""},musicbrainzId:"2b2bb9e5-f99a-3436-9a2c-041e33ef3644"},{id:"the-rentals-return-of-the-rentals",title:"Return of The Rentals",artist:"The Rentals",year:1995,coverUrl:"https://i.scdn.co/image/ab67616d0000b2736a3302363c1256a75043a20a",rating:null,topRank:null,categories:["Bubble Out"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/41IJ0wgo3DWza5gIlJarRg",discogs:""},musicbrainzId:"26eaea7b-1e9a-3055-acf7-fa3a2ada236f"},{id:"at-the-drive-in-vaya",title:"Vaya",artist:"At the Drive‐In",year:1999,coverUrl:"https://i.scdn.co/image/ab67616d0000b2736e665daffc5210317de18043",rating:null,topRank:null,categories:["Bubble Out"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/1dQADTXF672pzeJPcRwjbs",discogs:""},musicbrainzId:"3de8c52c-55e3-3ea5-a739-9b0d07cc3e4e"},{id:"ugly-casanova-sharpen-your-teeth",title:"Sharpen Your Teeth",artist:"Ugly Casanova",year:2002,coverUrl:"https://i.scdn.co/image/ab67616d0000b273aab82e50cc38785b341ea020",rating:null,topRank:null,categories:["Bubble Out"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/45736b9rINoo9P7CVjxDtK",discogs:""},musicbrainzId:"71171a43-963d-3158-966d-9981c5914674"},{id:"i-love-you-but-i-ve-chosen-darkness-i-love-you-but-i-ve-chosen-darkness",title:"I Love You but I've Chosen Darkness",artist:"I Love You but I’ve Chosen Darkness",year:2003,coverUrl:"https://i.scdn.co/image/ab67616d0000b2739c0c7ef8c1d830abef02f39c",rating:null,topRank:null,categories:["Bubble Out"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/17BC6WeyfRd0WjpGInFuZp",discogs:""},musicbrainzId:"d797a046-1a3d-36ae-992b-5bf8dd79ede6"},{id:"ted-leo-and-the-pharmacists-hearts-of-oak",title:"Hearts of Oak",artist:"Ted Leo and the Pharmacists",year:2003,coverUrl:"https://dn710805.ca.archive.org/0/items/mbid-8a94e4db-6ae2-4ff8-968d-0ca2884e7253/mbid-8a94e4db-6ae2-4ff8-968d-0ca2884e7253-17256841802.jpg",rating:null,topRank:null,categories:["Bubble Out"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/0k38q7xKqXcVvJi6sn4D7H",discogs:""},musicbrainzId:"89360b76-f23a-309e-8681-9dc7fe631090"},{id:"the-mars-volta-de-loused-in-the-comatorium",title:"De‐Loused in the Comatorium",artist:"The Mars Volta",year:2003,coverUrl:"https://dn710301.ca.archive.org/0/items/mbid-78d49ab6-02fc-4542-8b3d-abdcb8838cb0/mbid-78d49ab6-02fc-4542-8b3d-abdcb8838cb0-18721181872.jpg",rating:null,topRank:null,categories:["Bubble Out"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/3X3xy01oWmdpRSJIttm4NT",discogs:""},musicbrainzId:"605124dd-0f2a-382b-a8ba-720658c1fe45"},{id:"pedro-the-lion-control",title:"Control",artist:"Pedro the Lion",year:2002,coverUrl:"https://i.scdn.co/image/ab67616d0000b273e001e1438437cc9de5b64aab",rating:null,topRank:null,categories:["Bubble Out"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/3WPhii5HmncMeCKLHZUePr",discogs:""},musicbrainzId:"698f31a8-d3d4-36a7-8461-304c3540e60b"},{id:"air-moon-safari",title:"Moon Safari",artist:"Air",year:1998,coverUrl:"https://i.scdn.co/image/ab67616d0000b2737f4dc15877a3c43f611a2709",rating:null,topRank:null,categories:["Bubble Out"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/206GTDefY2qRMQxYXmfb0a",discogs:""},musicbrainzId:"b0bf2b77-b8cf-32f6-8893-9741d757b400"},{id:"stephen-malkmus-face-the-truth",title:"Face the Truth",artist:"Stephen Malkmus",year:2005,coverUrl:"https://i.scdn.co/image/ab67616d0000b2732b49070a930411915772a6a2",rating:null,topRank:null,categories:["Bubble Out"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/170oIBEzHXhsiuAPZCq9XK",discogs:""},musicbrainzId:"fa3dd29c-85ef-3512-8955-24f5be433c4a"},{id:"wolf-parade-apologies-to-the-queen-mary",title:"Apologies to the Queen Mary",artist:"Wolf Parade",year:2005,coverUrl:"https://i.scdn.co/image/ab67616d0000b2739f8ddfbf374df9eed7da21f0",rating:null,topRank:null,categories:["Bubble Out"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/3DgujEvq43y6okfTzV1FKy",discogs:""},musicbrainzId:"d147f6f8-1ca1-3df0-acd9-3c81808f2822"},{id:"spoon-girls-can-tell",title:"Girls Can Tell",artist:"Spoon",year:2001,coverUrl:"https://i.scdn.co/image/ab67616d0000b273f6087e1308518847564b7eb0",rating:null,topRank:null,categories:["Bubble Out","College","Alumni"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/1pitNtT99leODbWecrt7XJ",discogs:""},musicbrainzId:"836422a2-9619-38a5-9e70-022b40eec3c4"},{id:"nada-surf-high-low",title:"High/Low",artist:"Nada Surf",year:1996,coverUrl:"https://i.scdn.co/image/ab67616d0000b273af01617e24d88a6359eb33fd",rating:null,topRank:null,categories:["Bubble Out","High School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/4o7LG3LUbq67bPNMitn00L",discogs:""},musicbrainzId:"185c6b40-3361-32fa-ba46-bf7c89803058"},{id:"the-dandy-warhols-thirteen-tales-from-urban-bohemia",title:"Thirteen Tales From Urban Bohemia",artist:"The Dandy Warhols",year:2e3,coverUrl:"https://i.scdn.co/image/ab67616d0000b2739087219d9eeb22ad7a88c2c8",rating:null,topRank:null,categories:["Bubble Out","College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/3RFenjlpdmIfkYATMdkbak",discogs:""},musicbrainzId:"86870fef-fddd-390c-a639-85720706e0d8"},{id:"the-movies-in-one-era-out-the-other",title:"In One Era Out the Other",artist:"The Movies",year:2003,coverUrl:"https://i.scdn.co/image/ab67616d0000b2731118f8112d7cd5583cebabd6",rating:null,topRank:null,categories:["Bubble Out","Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/2J9w2V8Wr9ofD2O9NDHsu7",discogs:""},musicbrainzId:"28edde0b-85a5-3c5c-8747-613f3a7ba131"},{id:"beach-house-beach-house",title:"Beach House",artist:"Beach House",year:2006,coverUrl:"https://i.scdn.co/image/ab67616d0000b27369d8e3478a4964cf7219f3da",rating:null,topRank:null,categories:["Bubble Out","Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/32bJgeIOAFiNkucTCje5O5",discogs:""},musicbrainzId:"7d806d67-e9b0-3e35-8a4a-1aa5863ed45d"},{id:"the-white-stripes-white-blood-cells",title:"White Blood Cells",artist:"The White Stripes",year:2001,coverUrl:"https://i.scdn.co/image/ab67616d0000b273033dbfae219de887bd94952a",rating:null,topRank:null,categories:["Bubble Out","High School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/6Xvc1TfpVEhDeHhmTQEtp0",discogs:""},musicbrainzId:"c5a0411f-374e-360d-9364-3ddec3007162"},{id:"yeah-yeah-yeahs-fever-to-tell",title:"Fever to Tell",artist:"Yeah Yeah Yeahs",year:2003,coverUrl:"https://dn710908.ca.archive.org/0/items/mbid-ce74eeee-8e30-34db-addd-5ea135500e2e/mbid-ce74eeee-8e30-34db-addd-5ea135500e2e-5835206005.jpg",rating:null,topRank:null,categories:["Bubble Out","College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/0EabZMx74C2wyXhvMMO1eI",discogs:""},musicbrainzId:"e8e2d824-dd32-3b24-9c7c-24619fbe86a9"},{id:"the-get-up-kids-four-minute-mile",title:"Four Minute Mile",artist:"The Get Up Kids",year:1997,coverUrl:"https://dn710807.ca.archive.org/0/items/mbid-0ce252db-dded-43b5-8dfd-d060ebf01b89/mbid-0ce252db-dded-43b5-8dfd-d060ebf01b89-3366911754.jpg",rating:null,topRank:null,categories:["Bubble Out","High School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/0gaKw8mOvvM8exekel2NkK",discogs:""},musicbrainzId:"bc9a72e1-a018-30c5-993d-6b25949de89a"},{id:"sebadoh-bakesale",title:"Bakesale",artist:"Sebadoh",year:1994,coverUrl:"https://dn721201.ca.archive.org/0/items/mbid-a4fb6af6-2b82-4b6f-b153-fe8e6c222bcc/mbid-a4fb6af6-2b82-4b6f-b153-fe8e6c222bcc-22463472602.jpg",rating:null,topRank:null,categories:["Bubble Out","Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/2as2vy8om4QuIaDbUOdJVW",discogs:""},musicbrainzId:"a88aa7b4-5d1a-3617-85f1-b8e945bfe748"},{id:"super-furry-animals-phantom-power",title:"Phantom Power",artist:"Super Furry Animals",year:2003,coverUrl:"https://i.scdn.co/image/ab67616d0000b27311c7d9475ec777216b0c4e7b",rating:null,topRank:null,categories:["Bubble Out","College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/13zad2UPO1HqrNGyfK7G1L",discogs:""},musicbrainzId:"b3d9a0cc-1637-30f9-995a-0832e83eca62"},{id:"stereolab-transient-random-noise-bursts-with-announcements",title:"Transient Random‐Noise Bursts With Announcements",artist:"Stereolab",year:1993,coverUrl:"https://i.scdn.co/image/ab67616d0000b27336d122a5fdce2509d72ce49a",rating:null,topRank:null,categories:["Bubble Out","College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/0XwFmkEzDFl5KrVG5z0lE6",discogs:""},musicbrainzId:"9cb80efb-6b1a-3d7b-aff8-86f051737d91"},{id:"the-magnetic-fields-69-love-songs",title:"69 Love Songs",artist:"The Magnetic Fields",year:1999,coverUrl:"https://i.scdn.co/image/ab67616d0000b273206de07d4ccc1b14fbcb45df",rating:null,topRank:null,categories:["Bubble Out","Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/0K5FvRzJl6iTKikI9tMdAB",discogs:""},musicbrainzId:"5dfac852-1aed-35b2-93b6-e8f9c93fe521"},{id:"the-clash-london-calling",title:"London Calling",artist:"The Clash",year:1979,coverUrl:"https://dn710806.ca.archive.org/0/items/mbid-efc61929-387e-42a9-8194-caccdca7012e/mbid-efc61929-387e-42a9-8194-caccdca7012e-1978576697.jpg",rating:null,topRank:null,categories:["Bubble Out","College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/6FCzvataOZh68j8OKzOt9a",discogs:""},musicbrainzId:"68cd609c-112c-3240-b6e4-9daa51e1f0a7"},{id:"the-smashing-pumpkins-siamese-dream",title:"Siamese Dream",artist:"The Smashing Pumpkins",year:1993,coverUrl:"https://ia601400.us.archive.org/34/items/mbid-c8499dc3-843e-473e-9672-9ee95ec9d694/mbid-c8499dc3-843e-473e-9672-9ee95ec9d694-38221046992.jpg",rating:null,topRank:null,categories:["Bubble Out","Middle School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/0bQglEvsHphrS19FGODEGo",discogs:""},musicbrainzId:"a159e102-18bb-42ca-a59e-5f96a7eff241"},{id:"ben-folds-five-whatever-and-ever-amen",title:"Whatever and Ever Amen",artist:"Ben Folds Five",year:1997,coverUrl:"https://i.scdn.co/image/ab67616d0000b27398dc5ccf21dd6bc171962cb9",rating:null,topRank:null,categories:["Bubble Out","Middle School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/3oz8kworUyU7oXjaEVhDsZ",discogs:""},musicbrainzId:"f0731ed9-b6fd-3b1f-b95c-1c55041e492b"},{id:"the-walkmen-everyone-who-pretended-to-like-me-is-gone",title:"Everyone Who Pretended to Like Me Is Gone",artist:"The Walkmen",year:2002,coverUrl:"https://i.scdn.co/image/ab67616d0000b273a39b2ffd81fa1735eb88d791",rating:null,topRank:null,categories:["Bubble Out","High School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/40nISQwjb2EbI7CyTNmTea",discogs:""},musicbrainzId:"bea1d4f1-0851-3aef-90bc-d872e0d35481"},{id:"the-halo-benders-god-don-t-make-no-junk",title:"God Don’t Make No Junk",artist:"The Halo Benders",year:1994,coverUrl:"https://i.scdn.co/image/ab67616d0000b2734257e6a3c8ac61422c1547ea",rating:null,topRank:null,categories:["Bubble Out","High School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/15C0wqrSuM8V3b7wZy8T1v",discogs:""},musicbrainzId:"96494b0e-a4de-3ed4-a1d7-54a8b7a7d1e7"},{id:"badly-drawn-boy-the-hour-of-bewilderbeast",title:"The Hour of Bewilderbeast",artist:"Badly Drawn Boy",year:2e3,coverUrl:"https://i.scdn.co/image/ab67616d0000b273254f5b9a048c746142be98bc",rating:null,topRank:null,categories:["Bubble Out","College"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/7y0QwysyQgSf9fyBFr6Q3x",discogs:""},musicbrainzId:"b53623c2-266f-393f-9bc5-71eaac3b5a31"},{id:"modest-mouse-the-lonesome-crowded-west",title:"The Lonesome Crowded West",artist:"Modest Mouse",year:1997,coverUrl:"https://i.scdn.co/image/ab67616d0000b2736d36f5f881bb591a529e259b",rating:null,topRank:null,categories:["Bubble Out","High School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/5mvHTVy1iUIkAflIufoOpj",discogs:""},musicbrainzId:"041884b1-1ac5-3c8b-93cc-ac928c78c4a0"},{id:"weezer-blue-album",title:"Blue Album",artist:"Weezer",year:1994,coverUrl:"https://i.scdn.co/image/ab67616d0000b273de08e8e07eda87fa0066cd3a",rating:null,topRank:9,categories:["Middle School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/5TwSGjGqzyLHBhhCpmweT9",discogs:""},musicbrainzId:"c7b245c9-8099-32ea-af95-893acedde2cf"},{id:"de-la-soul-buhloone-mindstate",title:"Buhloone Mindstate",artist:"De La Soul",year:1993,coverUrl:"https://dn711005.ca.archive.org/0/items/mbid-8db21467-c1b9-40dd-88f0-109ab6cd9bd8/mbid-8db21467-c1b9-40dd-88f0-109ab6cd9bd8-40010489103.jpg",rating:null,topRank:11,categories:["High School"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/4ajtfXfaqumfNlJDTVjhOd",discogs:""},musicbrainzId:"898a6a79-9ff1-3913-814a-4514bfbff609"},{id:"brian-eno-another-green-world",title:"Another Green World",artist:"Brian Eno",year:1975,coverUrl:"https://ia600500.us.archive.org/22/items/mbid-47e5f695-0704-44fe-a803-b6de96523d5b/mbid-47e5f695-0704-44fe-a803-b6de96523d5b-30382229179.jpg",rating:null,topRank:12,categories:["Young Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/6uoeezh45SYEb8lcT8gDTY",discogs:""},musicbrainzId:"7d5a684e-73a3-325c-a59c-34c9a941d8d6"},{id:"the-drums-portamento",title:"Portamento",artist:"The Drums",year:2011,coverUrl:"https://i.scdn.co/image/ab67616d0000b2734c27d14a19e67dac23661031",rating:null,topRank:null,categories:["Bubble Out","Mid Adult"],notes:"",dateAdded:"2026-08-16",links:{spotify:"https://open.spotify.com/album/4I7uuSfSkHKJjrr1vpu4mi",discogs:""},musicbrainzId:"0d043584-6e84-4e2a-96b9-28d2a6323f46"}],YT=["Rock","Electronic","Hip-Hop","Jazz","Folk","Singer-Songwriter","Pop","Metal","Punk","Ambient","1960s","1970s","1980s","1990s","2000s","2010s","2020s","Headphones album","Rainy day listening","Road trip","Late night","Underrated","Currently obsessed","Alumni","Middle School","High School","College","Young Adult","Mid Adult","Post Claudia","Top Bubble","Mid Bubble","Low Bubble","Bubble Out"];const qT=(t,e)=>t.topRank==null&&e.topRank==null?0:t.topRank==null?1:e.topRank==null?-1:t.topRank-e.topRank,$T=({album:t,showRank:e})=>{var n,i,r;return K.jsxs("div",{className:"album-card",children:[e&&t.topRank!=null&&K.jsxs("div",{className:"album-rank",children:["#",t.topRank]}),K.jsx("div",{className:"album-cover",children:t.coverUrl?K.jsx("img",{src:t.coverUrl,alt:`${t.title} cover art`}):K.jsx("div",{className:"album-cover-placeholder",children:t.title[0]})}),K.jsxs("div",{className:"album-info",children:[K.jsx("h3",{children:t.title}),K.jsxs("h4",{children:[t.artist," · ",t.year]}),((n=t.categories)==null?void 0:n.length)>0&&K.jsx("div",{className:"album-tags",children:t.categories.map(s=>K.jsx("span",{className:"album-tag",children:s},s))}),t.notes&&K.jsx("p",{className:"album-notes",children:t.notes}),K.jsxs("div",{className:"album-links",children:[((i=t.links)==null?void 0:i.spotify)&&K.jsx("a",{href:t.links.spotify,target:"_blank",rel:"noreferrer",children:"Spotify"}),((r=t.links)==null?void 0:r.discogs)&&K.jsx("a",{href:t.links.discogs,target:"_blank",rel:"noreferrer",children:"Discogs"})]})]})]})},KT=()=>{const[t,e]=ce.useState("top50"),[n,i]=ce.useState(null),[r,s]=ce.useState(""),o=ce.useMemo(()=>[...Vc].filter(l=>l.topRank!=null).sort(qT),[]),a=ce.useMemo(()=>{const l=r.trim().toLowerCase();return[...Vc].filter(c=>{var d;return n?(d=c.categories)==null?void 0:d.includes(n):!0}).filter(c=>l?c.title.toLowerCase().includes(l)||c.artist.toLowerCase().includes(l):!0).sort((c,d)=>c.artist.localeCompare(d.artist))},[n,r]);return K.jsx("section",{className:"albums-page",children:K.jsx("div",{className:"content",children:K.jsxs("div",{className:"wrapper",children:[K.jsx("h1",{children:"Albums"}),K.jsx("h2",{children:"Top 50 Albums"}),K.jsxs("div",{className:"albums-view-toggle",children:[K.jsx("button",{className:t==="top50"?"active":"",onClick:()=>e("top50"),children:"Top 50"}),K.jsxs("button",{className:t==="collection"?"active":"",onClick:()=>e("collection"),children:["Full Collection (",Vc.length,")"]})]}),t==="collection"&&K.jsxs("div",{className:"albums-filters",children:[K.jsx("input",{type:"text",placeholder:"Search title or artist...",value:r,onChange:l=>s(l.target.value)}),K.jsxs("div",{className:"category-chips",children:[K.jsx("span",{className:`category-chip ${n===null?"active":""}`,onClick:()=>i(null),children:"All"}),YT.map(l=>K.jsx("span",{className:`category-chip ${n===l?"active":""}`,onClick:()=>i(l),children:l},l))]})]}),K.jsx("div",{className:"albums-grid",children:(t==="top50"?o:a).map(l=>K.jsx($T,{album:l,showRank:t==="top50"},l.id))}),t==="top50"&&o.length===0&&K.jsx("p",{children:"No albums have a topRank set yet — add one in albums.json to see it here."}),t==="collection"&&a.length===0&&K.jsx("p",{children:"No albums match that search/filter."})]})})})};function ZT(){return K.jsxs(K.Fragment,{children:[K.jsx(GT,{}),K.jsx("div",{className:"blankBox2"}),K.jsx("section",{id:"contact",children:K.jsx(VT,{})})]})}function JT(){return K.jsxs(K.Fragment,{children:[K.jsx(zT,{}),K.jsx(jT,{}),K.jsxs(vx,{children:[K.jsx(ku,{path:"/",element:K.jsx(ZT,{})}),K.jsx(ku,{path:"/albums",element:K.jsx(KT,{})})]}),K.jsx(BT,{})]})}Wc.createRoot(document.getElementById("root")).render(K.jsx(Qp.StrictMode,{children:K.jsx(Ex,{children:K.jsx(JT,{})})}));
