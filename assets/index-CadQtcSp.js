(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Yf={exports:{}},Co={};var g0;function oS(){if(g0)return Co;g0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Co.Fragment=e,Co.jsx=i,Co.jsxs=i,Co}var _0;function lS(){return _0||(_0=1,Yf.exports=oS()),Yf.exports}var It=lS(),jf={exports:{}},oe={};var v0;function cS(){if(v0)return oe;v0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),_=Symbol.iterator;function E(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function v(O,Y,gt){this.props=O,this.context=Y,this.refs=M,this.updater=gt||b}v.prototype.isReactComponent={},v.prototype.setState=function(O,Y){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Y,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=v.prototype;function P(O,Y,gt){this.props=O,this.context=Y,this.refs=M,this.updater=gt||b}var N=P.prototype=new D;N.constructor=P,C(N,v.prototype),N.isPureReactComponent=!0;var V=Array.isArray;function I(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(O,Y,gt){var Tt=gt.ref;return{$$typeof:o,type:O,key:Y,ref:Tt!==void 0?Tt:null,props:gt}}function ht(O,Y){return U(O.type,Y,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function $(O){var Y={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(gt){return Y[gt]})}var at=/\/+/g;function ot(O,Y){return typeof O=="object"&&O!==null&&O.key!=null?$(""+O.key):Y.toString(36)}function Z(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(I,I):(O.status="pending",O.then(function(Y){O.status==="pending"&&(O.status="fulfilled",O.value=Y)},function(Y){O.status==="pending"&&(O.status="rejected",O.reason=Y)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function w(O,Y,gt,Tt,Nt){var tt=typeof O;(tt==="undefined"||tt==="boolean")&&(O=null);var _t=!1;if(O===null)_t=!0;else switch(tt){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(O.$$typeof){case o:case e:_t=!0;break;case x:return _t=O._init,w(_t(O._payload),Y,gt,Tt,Nt)}}if(_t)return Nt=Nt(O),_t=Tt===""?"."+ot(O,0):Tt,V(Nt)?(gt="",_t!=null&&(gt=_t.replace(at,"$&/")+"/"),w(Nt,Y,gt,"",function(Ht){return Ht})):Nt!=null&&(H(Nt)&&(Nt=ht(Nt,gt+(Nt.key==null||O&&O.key===Nt.key?"":(""+Nt.key).replace(at,"$&/")+"/")+_t)),Y.push(Nt)),1;_t=0;var Mt=Tt===""?".":Tt+":";if(V(O))for(var Ot=0;Ot<O.length;Ot++)Tt=O[Ot],tt=Mt+ot(Tt,Ot),_t+=w(Tt,Y,gt,tt,Nt);else if(Ot=E(O),typeof Ot=="function")for(O=Ot.call(O),Ot=0;!(Tt=O.next()).done;)Tt=Tt.value,tt=Mt+ot(Tt,Ot++),_t+=w(Tt,Y,gt,tt,Nt);else if(tt==="object"){if(typeof O.then=="function")return w(Z(O),Y,gt,Tt,Nt);throw Y=String(O),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return _t}function F(O,Y,gt){if(O==null)return O;var Tt=[],Nt=0;return w(O,Tt,"","",function(tt){return Y.call(gt,tt,Nt++)}),Tt}function rt(O){if(O._status===-1){var Y=O._result;Y=Y(),Y.then(function(gt){(O._status===0||O._status===-1)&&(O._status=1,O._result=gt)},function(gt){(O._status===0||O._status===-1)&&(O._status=2,O._result=gt)}),O._status===-1&&(O._status=0,O._result=Y)}if(O._status===1)return O._result.default;throw O._result}var dt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},St={map:F,forEach:function(O,Y,gt){F(O,function(){Y.apply(this,arguments)},gt)},count:function(O){var Y=0;return F(O,function(){Y++}),Y},toArray:function(O){return F(O,function(Y){return Y})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return oe.Activity=S,oe.Children=St,oe.Component=v,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=P,oe.StrictMode=r,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,oe.__COMPILER_RUNTIME={__proto__:null,c:function(O){return B.H.useMemoCache(O)}},oe.cache=function(O){return function(){return O.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(O,Y,gt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Tt=C({},O.props),Nt=O.key;if(Y!=null)for(tt in Y.key!==void 0&&(Nt=""+Y.key),Y)!T.call(Y,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&Y.ref===void 0||(Tt[tt]=Y[tt]);var tt=arguments.length-2;if(tt===1)Tt.children=gt;else if(1<tt){for(var _t=Array(tt),Mt=0;Mt<tt;Mt++)_t[Mt]=arguments[Mt+2];Tt.children=_t}return U(O.type,Nt,Tt)},oe.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},oe.createElement=function(O,Y,gt){var Tt,Nt={},tt=null;if(Y!=null)for(Tt in Y.key!==void 0&&(tt=""+Y.key),Y)T.call(Y,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(Nt[Tt]=Y[Tt]);var _t=arguments.length-2;if(_t===1)Nt.children=gt;else if(1<_t){for(var Mt=Array(_t),Ot=0;Ot<_t;Ot++)Mt[Ot]=arguments[Ot+2];Nt.children=Mt}if(O&&O.defaultProps)for(Tt in _t=O.defaultProps,_t)Nt[Tt]===void 0&&(Nt[Tt]=_t[Tt]);return U(O,tt,Nt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(O){return{$$typeof:p,render:O}},oe.isValidElement=H,oe.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:rt}},oe.memo=function(O,Y){return{$$typeof:h,type:O,compare:Y===void 0?null:Y}},oe.startTransition=function(O){var Y=B.T,gt={};B.T=gt;try{var Tt=O(),Nt=B.S;Nt!==null&&Nt(gt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(I,dt)}catch(tt){dt(tt)}finally{Y!==null&&gt.types!==null&&(Y.types=gt.types),B.T=Y}},oe.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},oe.use=function(O){return B.H.use(O)},oe.useActionState=function(O,Y,gt){return B.H.useActionState(O,Y,gt)},oe.useCallback=function(O,Y){return B.H.useCallback(O,Y)},oe.useContext=function(O){return B.H.useContext(O)},oe.useDebugValue=function(){},oe.useDeferredValue=function(O,Y){return B.H.useDeferredValue(O,Y)},oe.useEffect=function(O,Y){return B.H.useEffect(O,Y)},oe.useEffectEvent=function(O){return B.H.useEffectEvent(O)},oe.useId=function(){return B.H.useId()},oe.useImperativeHandle=function(O,Y,gt){return B.H.useImperativeHandle(O,Y,gt)},oe.useInsertionEffect=function(O,Y){return B.H.useInsertionEffect(O,Y)},oe.useLayoutEffect=function(O,Y){return B.H.useLayoutEffect(O,Y)},oe.useMemo=function(O,Y){return B.H.useMemo(O,Y)},oe.useOptimistic=function(O,Y){return B.H.useOptimistic(O,Y)},oe.useReducer=function(O,Y,gt){return B.H.useReducer(O,Y,gt)},oe.useRef=function(O){return B.H.useRef(O)},oe.useState=function(O){return B.H.useState(O)},oe.useSyncExternalStore=function(O,Y,gt){return B.H.useSyncExternalStore(O,Y,gt)},oe.useTransition=function(){return B.H.useTransition()},oe.version="19.2.4",oe}var x0;function Th(){return x0||(x0=1,jf.exports=cS()),jf.exports}var ti=Th(),Zf={exports:{}},wo={},Kf={exports:{}},Qf={};var S0;function uS(){return S0||(S0=1,(function(o){function e(w,F){var rt=w.length;w.push(F);t:for(;0<rt;){var dt=rt-1>>>1,St=w[dt];if(0<l(St,F))w[dt]=F,w[rt]=St,rt=dt;else break t}}function i(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var F=w[0],rt=w.pop();if(rt!==F){w[0]=rt;t:for(var dt=0,St=w.length,O=St>>>1;dt<O;){var Y=2*(dt+1)-1,gt=w[Y],Tt=Y+1,Nt=w[Tt];if(0>l(gt,rt))Tt<St&&0>l(Nt,gt)?(w[dt]=Nt,w[Tt]=rt,dt=Tt):(w[dt]=gt,w[Y]=rt,dt=Y);else if(Tt<St&&0>l(Nt,rt))w[dt]=Nt,w[Tt]=rt,dt=Tt;else break t}}return F}function l(w,F){var rt=w.sortIndex-F.sortIndex;return rt!==0?rt:w.id-F.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],h=[],x=1,S=null,_=3,E=!1,b=!1,C=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function N(w){for(var F=i(h);F!==null;){if(F.callback===null)r(h);else if(F.startTime<=w)r(h),F.sortIndex=F.expirationTime,e(m,F);else break;F=i(h)}}function V(w){if(C=!1,N(w),!b)if(i(m)!==null)b=!0,I||(I=!0,$());else{var F=i(h);F!==null&&Z(V,F.startTime-w)}}var I=!1,B=-1,T=5,U=-1;function ht(){return M?!0:!(o.unstable_now()-U<T)}function H(){if(M=!1,I){var w=o.unstable_now();U=w;var F=!0;try{t:{b=!1,C&&(C=!1,D(B),B=-1),E=!0;var rt=_;try{e:{for(N(w),S=i(m);S!==null&&!(S.expirationTime>w&&ht());){var dt=S.callback;if(typeof dt=="function"){S.callback=null,_=S.priorityLevel;var St=dt(S.expirationTime<=w);if(w=o.unstable_now(),typeof St=="function"){S.callback=St,N(w),F=!0;break e}S===i(m)&&r(m),N(w)}else r(m);S=i(m)}if(S!==null)F=!0;else{var O=i(h);O!==null&&Z(V,O.startTime-w),F=!1}}break t}finally{S=null,_=rt,E=!1}F=void 0}}finally{F?$():I=!1}}}var $;if(typeof P=="function")$=function(){P(H)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ot=at.port2;at.port1.onmessage=H,$=function(){ot.postMessage(null)}}else $=function(){v(H,0)};function Z(w,F){B=v(function(){w(o.unstable_now())},F)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(w){w.callback=null},o.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<w?Math.floor(1e3/w):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(w){switch(_){case 1:case 2:case 3:var F=3;break;default:F=_}var rt=_;_=F;try{return w()}finally{_=rt}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(w,F){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var rt=_;_=w;try{return F()}finally{_=rt}},o.unstable_scheduleCallback=function(w,F,rt){var dt=o.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?dt+rt:dt):rt=dt,w){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=rt+St,w={id:x++,callback:F,priorityLevel:w,startTime:rt,expirationTime:St,sortIndex:-1},rt>dt?(w.sortIndex=rt,e(h,w),i(m)===null&&w===i(h)&&(C?(D(B),B=-1):C=!0,Z(V,rt-dt))):(w.sortIndex=St,e(m,w),b||E||(b=!0,I||(I=!0,$()))),w},o.unstable_shouldYield=ht,o.unstable_wrapCallback=function(w){var F=_;return function(){var rt=_;_=F;try{return w.apply(this,arguments)}finally{_=rt}}}})(Qf)),Qf}var M0;function fS(){return M0||(M0=1,Kf.exports=uS()),Kf.exports}var Jf={exports:{}},bn={};var y0;function dS(){if(y0)return bn;y0=1;var o=Th();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,h,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:h,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return u(m,h,null,x)},bn.flushSync=function(m){var h=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=x,r.d.f()}},bn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},bn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,S=p(x,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:_,fetchPriority:E}):x==="script"&&r.d.X(m,{crossOrigin:S,integrity:_,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},bn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},bn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,S=p(x,h.crossOrigin);r.d.L(m,x,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},bn.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},bn.requestFormReset=function(m){r.d.r(m)},bn.unstable_batchedUpdates=function(m,h){return m(h)},bn.useFormState=function(m,h,x){return d.H.useFormState(m,h,x)},bn.useFormStatus=function(){return d.H.useHostTransitionStatus()},bn.version="19.2.4",bn}var E0;function hS(){if(E0)return Jf.exports;E0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Jf.exports=dS(),Jf.exports}var b0;function pS(){if(b0)return wo;b0=1;var o=fS(),e=Th(),i=hS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,A=c.child;A;){if(A===a){g=!0,a=c,s=f;break}if(A===s){g=!0,s=c,a=f;break}A=A.sibling}if(!g){for(A=f.child;A;){if(A===a){g=!0,a=f,s=c;break}if(A===s){g=!0,s=f,a=c;break}A=A.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,_=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),P=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),ht=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var at=Symbol.for("react.client.reference");function ot(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===at?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case V:return"Suspense";case I:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case P:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:ot(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ot(t(n))}catch{}}return null}var Z=Array.isArray,w=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt={pending:!1,data:null,method:null,action:null},dt=[],St=-1;function O(t){return{current:t}}function Y(t){0>St||(t.current=dt[St],dt[St]=null,St--)}function gt(t,n){St++,dt[St]=t.current,t.current=n}var Tt=O(null),Nt=O(null),tt=O(null),_t=O(null);function Mt(t,n){switch(gt(tt,n),gt(Nt,t),gt(Tt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Ig(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Ig(n),t=Hg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(Tt),gt(Tt,t)}function Ot(){Y(Tt),Y(Nt),Y(tt)}function Ht(t){t.memoizedState!==null&&gt(_t,t);var n=Tt.current,a=Hg(n,t.type);n!==a&&(gt(Nt,t),gt(Tt,a))}function Kt(t){Nt.current===t&&(Y(Tt),Y(Nt)),_t.current===t&&(Y(_t),bo._currentValue=rt)}var Ue,ce;function me(t){if(Ue===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ue=n&&n[1]||"",ce=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ue+t+ce}var be=!1;function ie(t,n){if(!t||be)return"";be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(lt){var nt=lt}Reflect.construct(t,[],vt)}else{try{vt.call()}catch(lt){nt=lt}t.call(vt.prototype)}}else{try{throw Error()}catch(lt){nt=lt}(vt=t())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(lt){if(lt&&nt&&typeof lt.stack=="string")return[lt.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],A=f[1];if(g&&A){var z=g.split(`
`),J=A.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===J.length)for(s=z.length-1,c=J.length-1;1<=s&&0<=c&&z[s]!==J[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==J[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==J[c]){var ft=`
`+z[s].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=s&&0<=c);break}}}finally{be=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?me(a):""}function ke(t,n){switch(t.tag){case 26:case 27:case 5:return me(t.type);case 16:return me("Lazy");case 13:return t.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return ie(t.type,!1);case 11:return ie(t.type.render,!1);case 1:return ie(t.type,!0);case 31:return me("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=ke(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ye=Object.prototype.hasOwnProperty,ye=o.unstable_scheduleCallback,Ne=o.unstable_cancelCallback,Yt=o.unstable_shouldYield,L=o.unstable_requestPaint,y=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,Wt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,Qt=o.log,te=o.unstable_setDisableYieldValue,bt=null,yt=null;function Pt(t){if(typeof Qt=="function"&&te(t),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(bt,t)}catch{}}var Lt=Math.clz32?Math.clz32:W,Ft=Math.log,ue=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Ft(t)/ue|0)|0}var Rt=256,At=262144,Bt=4194304;function Et(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ct(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var A=s&134217727;return A!==0?(s=A&~f,s!==0?c=Et(s):(g&=A,g!==0?c=Et(g):a||(a=A&~t,a!==0&&(c=Et(a))))):(A=s&~f,A!==0?c=Et(A):g!==0?c=Et(g):a||(a=s&~t,a!==0&&(c=Et(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Gt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var t=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),t}function Te(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Cn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function hi(t,n,a,s,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,z=t.expirationTimes,J=t.hiddenUpdates;for(a=g&~a;0<a;){var ft=31-Lt(a),vt=1<<ft;A[ft]=0,z[ft]=-1;var nt=J[ft];if(nt!==null)for(J[ft]=null,ft=0;ft<nt.length;ft++){var lt=nt[ft];lt!==null&&(lt.lane&=-536870913)}a&=~vt}s!==0&&zs(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function zs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Lt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Lr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Lt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Yo(t,n){var a=n&-n;return a=(a&42)!==0?1:Nr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Nr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Or(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ri(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:c0(t.type))}function Pr(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var pi=Math.random().toString(36).slice(2),nn="__reactFiber$"+pi,dn="__reactProps$"+pi,Vi="__reactContainer$"+pi,Ma="__reactEvents$"+pi,jo="__reactListeners$"+pi,Zo="__reactHandles$"+pi,Ko="__reactResources$"+pi,nr="__reactMarker$"+pi;function Is(t){delete t[nn],delete t[dn],delete t[Ma],delete t[jo],delete t[Zo]}function ya(t){var n=t[nn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Vi]||a[nn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Yg(t);t!==null;){if(a=t[nn])return a;t=Yg(t)}return n}t=a,a=t.parentNode}return null}function Ea(t){if(t=t[nn]||t[Vi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ir(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function R(t){var n=t[Ko];return n||(n=t[Ko]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function k(t){t[nr]=!0}var st=new Set,et={};function K(t,n){wt(t,n),wt(t+"Capture",n)}function wt(t,n){for(et[t]=n,t=0;t<n.length;t++)st.add(n[t])}var zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dt={},qt={};function Zt(t){return Ye.call(qt,t)?!0:Ye.call(Dt,t)?!1:zt.test(t)?qt[t]=!0:(Dt[t]=!0,!1)}function ee(t,n,a){if(Zt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function se(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Vt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function fe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function je(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Re(t){if(!t._valueTracker){var n=je(t)?"checked":"value";t._valueTracker=Ze(t,n,""+t[n])}}function hn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=je(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var wn=/[\n"\\]/g;function ae(t){return t.replace(wn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Dn(t,n,a,s,c,f,g,A){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+fe(n)):t.value!==""+fe(n)&&(t.value=""+fe(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?mi(t,g,fe(n)):a!=null?mi(t,g,fe(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+fe(A):t.removeAttribute("name")}function Xn(t,n,a,s,c,f,g,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Re(t);return}a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Re(t)}function mi(t,n,a){n==="number"&&kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function kn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Oe(t,n,a){if(n!=null&&(n=""+fe(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+fe(a):""}function an(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Z(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=fe(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Re(t)}function Un(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var rn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gi(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||rn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Xi(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&gi(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&gi(t,f,n[f])}function Fr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),av=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qo(t){return av.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ki(){}var Xc=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Br=null,zr=null;function zh(t){var n=Ea(t);if(n&&(t=n.stateNode)){var a=t[dn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Dn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ae(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[dn]||null;if(!c)throw Error(r(90));Dn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&hn(s)}break t;case"textarea":Oe(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&kn(t,!!a.multiple,n,!1)}}}var Wc=!1;function Ih(t,n,a){if(Wc)return t(n,a);Wc=!0;try{var s=t(n);return s}finally{if(Wc=!1,(Br!==null||zr!==null)&&(zl(),Br&&(n=Br,t=zr,zr=Br=null,zh(n),t)))for(n=0;n<t.length;n++)zh(t[n])}}function Hs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[dn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qc=!1;if(Wi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){qc=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{qc=!1}var ba=null,Yc=null,Jo=null;function Hh(){if(Jo)return Jo;var t,n=Yc,a=n.length,s,c="value"in ba?ba.value:ba.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return Jo=c.slice(t,1<s?1-s:void 0)}function $o(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function Gh(){return!1}function Pn(t){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:Gh,this.isPropagationStopped=Gh,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=Pn(ar),Vs=S({},ar,{view:0,detail:0}),rv=Pn(Vs),jc,Zc,Xs,nl=S({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(jc=t.screenX-Xs.screenX,Zc=t.screenY-Xs.screenY):Zc=jc=0,Xs=t),jc)},movementY:function(t){return"movementY"in t?t.movementY:Zc}}),Vh=Pn(nl),sv=S({},nl,{dataTransfer:0}),ov=Pn(sv),lv=S({},Vs,{relatedTarget:0}),Kc=Pn(lv),cv=S({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),uv=Pn(cv),fv=S({},ar,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dv=Pn(fv),hv=S({},ar,{data:0}),Xh=Pn(hv),pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _v(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=gv[t])?!!n[t]:!1}function Qc(){return _v}var vv=S({},Vs,{key:function(t){if(t.key){var n=pv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=$o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(t){return t.type==="keypress"?$o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xv=Pn(vv),Sv=S({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kh=Pn(Sv),Mv=S({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),yv=Pn(Mv),Ev=S({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),bv=Pn(Ev),Tv=S({},nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Av=Pn(Tv),Rv=S({},ar,{newState:0,oldState:0}),Cv=Pn(Rv),wv=[9,13,27,32],Jc=Wi&&"CompositionEvent"in window,ks=null;Wi&&"documentMode"in document&&(ks=document.documentMode);var Dv=Wi&&"TextEvent"in window&&!ks,Wh=Wi&&(!Jc||ks&&8<ks&&11>=ks),qh=" ",Yh=!1;function jh(t,n){switch(t){case"keyup":return wv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ir=!1;function Uv(t,n){switch(t){case"compositionend":return Zh(n);case"keypress":return n.which!==32?null:(Yh=!0,qh);case"textInput":return t=n.data,t===qh&&Yh?null:t;default:return null}}function Lv(t,n){if(Ir)return t==="compositionend"||!Jc&&jh(t,n)?(t=Hh(),Jo=Yc=ba=null,Ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wh&&n.locale!=="ko"?null:n.data;default:return null}}var Nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Nv[t.type]:n==="textarea"}function Qh(t,n,a,s){Br?zr?zr.push(s):zr=[s]:Br=s,n=Wl(n,"onChange"),0<n.length&&(a=new el("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ws=null,qs=null;function Ov(t){Ng(t,0)}function il(t){var n=ir(t);if(hn(n))return t}function Jh(t,n){if(t==="change")return n}var $h=!1;if(Wi){var $c;if(Wi){var tu="oninput"in document;if(!tu){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),tu=typeof tp.oninput=="function"}$c=tu}else $c=!1;$h=$c&&(!document.documentMode||9<document.documentMode)}function ep(){Ws&&(Ws.detachEvent("onpropertychange",np),qs=Ws=null)}function np(t){if(t.propertyName==="value"&&il(qs)){var n=[];Qh(n,qs,t,kc(t)),Ih(Ov,n)}}function Pv(t,n,a){t==="focusin"?(ep(),Ws=n,qs=a,Ws.attachEvent("onpropertychange",np)):t==="focusout"&&ep()}function Fv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return il(qs)}function Bv(t,n){if(t==="click")return il(n)}function zv(t,n){if(t==="input"||t==="change")return il(n)}function Iv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Iv;function Ys(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ye.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ap(t,n){var a=ip(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ip(a)}}function rp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?rp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function sp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=kt(t.document)}return n}function eu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Hv=Wi&&"documentMode"in document&&11>=document.documentMode,Hr=null,nu=null,js=null,iu=!1;function op(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;iu||Hr==null||Hr!==kt(s)||(s=Hr,"selectionStart"in s&&eu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),js&&Ys(js,s)||(js=s,s=Wl(nu,"onSelect"),0<s.length&&(n=new el("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Hr)))}function rr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Gr={animationend:rr("Animation","AnimationEnd"),animationiteration:rr("Animation","AnimationIteration"),animationstart:rr("Animation","AnimationStart"),transitionrun:rr("Transition","TransitionRun"),transitionstart:rr("Transition","TransitionStart"),transitioncancel:rr("Transition","TransitionCancel"),transitionend:rr("Transition","TransitionEnd")},au={},lp={};Wi&&(lp=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function sr(t){if(au[t])return au[t];if(!Gr[t])return t;var n=Gr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in lp)return au[t]=n[a];return t}var cp=sr("animationend"),up=sr("animationiteration"),fp=sr("animationstart"),Gv=sr("transitionrun"),Vv=sr("transitionstart"),Xv=sr("transitioncancel"),dp=sr("transitionend"),hp=new Map,ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ru.push("scrollEnd");function _i(t,n){hp.set(t,n),K(n,[t])}var al=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],Vr=0,su=0;function rl(){for(var t=Vr,n=su=Vr=0;n<t;){var a=ni[n];ni[n++]=null;var s=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&pp(a,c,f)}}function sl(t,n,a,s){ni[Vr++]=t,ni[Vr++]=n,ni[Vr++]=a,ni[Vr++]=s,su|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function ou(t,n,a,s){return sl(t,n,a,s),ol(t)}function or(t,n){return sl(t,null,null,n),ol(t)}function pp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Lt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function ol(t){if(50<_o)throw _o=0,_f=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Xr={};function kv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,s){return new kv(t,n,a,s)}function lu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qi(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function mp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ll(t,n,a,s,c,f){var g=0;if(s=t,typeof t=="function")lu(t)&&(g=1);else if(typeof t=="string")g=Zx(t,a,Tt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case U:return t=qn(31,a,n,c),t.elementType=U,t.lanes=f,t;case C:return lr(a.children,c,f,n);case M:g=8,c|=24;break;case v:return t=qn(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case V:return t=qn(13,a,n,c),t.elementType=V,t.lanes=f,t;case I:return t=qn(19,a,n,c),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:g=10;break t;case D:g=9;break t;case N:g=11;break t;case B:g=14;break t;case T:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=qn(g,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function lr(t,n,a,s){return t=qn(7,t,s,n),t.lanes=a,t}function cu(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function gp(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function uu(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var _p=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=_p.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},_p.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var kr=[],Wr=0,cl=null,Zs=0,ai=[],ri=0,Ta=null,Ci=1,wi="";function Yi(t,n){kr[Wr++]=Zs,kr[Wr++]=cl,cl=t,Zs=n}function vp(t,n,a){ai[ri++]=Ci,ai[ri++]=wi,ai[ri++]=Ta,Ta=t;var s=Ci;t=wi;var c=32-Lt(s)-1;s&=~(1<<c),a+=1;var f=32-Lt(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Ci=1<<32-Lt(n)+c|a<<c|s,wi=f+t}else Ci=1<<f|a<<c|s,wi=t}function fu(t){t.return!==null&&(Yi(t,1),vp(t,1,0))}function du(t){for(;t===cl;)cl=kr[--Wr],kr[Wr]=null,Zs=kr[--Wr],kr[Wr]=null;for(;t===Ta;)Ta=ai[--ri],ai[ri]=null,wi=ai[--ri],ai[ri]=null,Ci=ai[--ri],ai[ri]=null}function xp(t,n){ai[ri++]=Ci,ai[ri++]=wi,ai[ri++]=Ta,Ci=n.id,wi=n.overflow,Ta=t}var xn=null,We=null,Se=!1,Aa=null,si=!1,hu=Error(r(519));function Ra(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ks(ii(n,t)),hu}function Sp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[nn]=t,n[dn]=s,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)_e(xo[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Xn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),an(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Bg(n.textContent,a)?(s.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),s.onScroll!=null&&_e("scroll",n),s.onScrollEnd!=null&&_e("scrollend",n),s.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Ra(t,!0)}function Mp(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:xn=xn.return}}function qr(t){if(t!==xn)return!1;if(!Se)return Mp(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Lf(t.type,t.memoizedProps)),a=!a),a&&We&&Ra(t),Mp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));We=qg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));We=qg(t)}else n===27?(n=We,Ga(t.type)?(t=Bf,Bf=null,We=t):We=n):We=xn?li(t.stateNode.nextSibling):null;return!0}function cr(){We=xn=null,Se=!1}function pu(){var t=Aa;return t!==null&&(In===null?In=t:In.push.apply(In,t),Aa=null),t}function Ks(t){Aa===null?Aa=[t]:Aa.push(t)}var mu=O(null),ur=null,ji=null;function Ca(t,n,a){gt(mu,n._currentValue),n._currentValue=a}function Zi(t){t._currentValue=mu.current,Y(mu)}function gu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function _u(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var z=0;z<n.length;z++)if(A.context===n[z]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),gu(f.return,a,t),s||(g=null);break t}f=A.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),gu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Yr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var A=c.type;Wn(c.pendingProps.value,g.value)||(t!==null?t.push(A):t=[A])}}else if(c===_t.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(bo):t=[bo])}c=c.return}t!==null&&_u(n,t,a,s),n.flags|=262144}function ul(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fr(t){ur=t,ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return yp(ur,t)}function fl(t,n){return ur===null&&fr(t),yp(t,n)}function yp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(t===null)throw Error(r(308));ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ji=ji.next=n;return a}var Wv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},qv=o.unstable_scheduleCallback,Yv=o.unstable_NormalPriority,sn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vu(){return{controller:new Wv,data:new Map,refCount:0}}function Qs(t){t.refCount--,t.refCount===0&&qv(Yv,function(){t.controller.abort()})}var Js=null,xu=0,jr=0,Zr=null;function jv(t,n){if(Js===null){var a=Js=[];xu=0,jr=Ef(),Zr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return xu++,n.then(Ep,Ep),n}function Ep(){if(--xu===0&&Js!==null){Zr!==null&&(Zr.status="fulfilled");var t=Js;Js=null,jr=0,Zr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Zv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var bp=w.S;w.S=function(t,n){og=y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&jv(t,n),bp!==null&&bp(t,n)};var dr=O(null);function Su(){var t=dr.current;return t!==null?t:Xe.pooledCache}function dl(t,n){n===null?gt(dr,dr.current):gt(dr,n.pool)}function Tp(){var t=Su();return t===null?null:{parent:sn._currentValue,pool:t}}var Kr=Error(r(460)),Mu=Error(r(474)),hl=Error(r(542)),pl={then:function(){}};function Ap(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Rp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,wp(t),t;default:if(typeof n.status=="string")n.then(ki,ki);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,wp(t),t}throw pr=n,Kr}}function hr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(pr=a,Kr):a}}var pr=null;function Cp(){if(pr===null)throw Error(r(459));var t=pr;return pr=null,t}function wp(t){if(t===Kr||t===hl)throw Error(r(483))}var Qr=null,$s=0;function ml(t){var n=$s;return $s+=1,Qr===null&&(Qr=[]),Rp(Qr,t,n)}function to(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function gl(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Dp(t){function n(j,X){if(t){var Q=j.deletions;Q===null?(j.deletions=[X],j.flags|=16):Q.push(X)}}function a(j,X){if(!t)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function s(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function c(j,X){return j=qi(j,X),j.index=0,j.sibling=null,j}function f(j,X,Q){return j.index=Q,t?(Q=j.alternate,Q!==null?(Q=Q.index,Q<X?(j.flags|=67108866,X):Q):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function g(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function A(j,X,Q,mt){return X===null||X.tag!==6?(X=cu(Q,j.mode,mt),X.return=j,X):(X=c(X,Q),X.return=j,X)}function z(j,X,Q,mt){var Jt=Q.type;return Jt===C?ft(j,X,Q.props.children,mt,Q.key):X!==null&&(X.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===T&&hr(Jt)===X.type)?(X=c(X,Q.props),to(X,Q),X.return=j,X):(X=ll(Q.type,Q.key,Q.props,null,j.mode,mt),to(X,Q),X.return=j,X)}function J(j,X,Q,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=uu(Q,j.mode,mt),X.return=j,X):(X=c(X,Q.children||[]),X.return=j,X)}function ft(j,X,Q,mt,Jt){return X===null||X.tag!==7?(X=lr(Q,j.mode,mt,Jt),X.return=j,X):(X=c(X,Q),X.return=j,X)}function vt(j,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=cu(""+X,j.mode,Q),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case E:return Q=ll(X.type,X.key,X.props,null,j.mode,Q),to(Q,X),Q.return=j,Q;case b:return X=uu(X,j.mode,Q),X.return=j,X;case T:return X=hr(X),vt(j,X,Q)}if(Z(X)||$(X))return X=lr(X,j.mode,Q,null),X.return=j,X;if(typeof X.then=="function")return vt(j,ml(X),Q);if(X.$$typeof===P)return vt(j,fl(j,X),Q);gl(j,X)}return null}function nt(j,X,Q,mt){var Jt=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Jt!==null?null:A(j,X,""+Q,mt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:return Q.key===Jt?z(j,X,Q,mt):null;case b:return Q.key===Jt?J(j,X,Q,mt):null;case T:return Q=hr(Q),nt(j,X,Q,mt)}if(Z(Q)||$(Q))return Jt!==null?null:ft(j,X,Q,mt,null);if(typeof Q.then=="function")return nt(j,X,ml(Q),mt);if(Q.$$typeof===P)return nt(j,X,fl(j,Q),mt);gl(j,Q)}return null}function lt(j,X,Q,mt,Jt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get(Q)||null,A(X,j,""+mt,Jt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case E:return j=j.get(mt.key===null?Q:mt.key)||null,z(X,j,mt,Jt);case b:return j=j.get(mt.key===null?Q:mt.key)||null,J(X,j,mt,Jt);case T:return mt=hr(mt),lt(j,X,Q,mt,Jt)}if(Z(mt)||$(mt))return j=j.get(Q)||null,ft(X,j,mt,Jt,null);if(typeof mt.then=="function")return lt(j,X,Q,ml(mt),Jt);if(mt.$$typeof===P)return lt(j,X,Q,fl(X,mt),Jt);gl(X,mt)}return null}function Xt(j,X,Q,mt){for(var Jt=null,Ce=null,jt=X,de=X=0,xe=null;jt!==null&&de<Q.length;de++){jt.index>de?(xe=jt,jt=null):xe=jt.sibling;var we=nt(j,jt,Q[de],mt);if(we===null){jt===null&&(jt=xe);break}t&&jt&&we.alternate===null&&n(j,jt),X=f(we,X,de),Ce===null?Jt=we:Ce.sibling=we,Ce=we,jt=xe}if(de===Q.length)return a(j,jt),Se&&Yi(j,de),Jt;if(jt===null){for(;de<Q.length;de++)jt=vt(j,Q[de],mt),jt!==null&&(X=f(jt,X,de),Ce===null?Jt=jt:Ce.sibling=jt,Ce=jt);return Se&&Yi(j,de),Jt}for(jt=s(jt);de<Q.length;de++)xe=lt(jt,j,de,Q[de],mt),xe!==null&&(t&&xe.alternate!==null&&jt.delete(xe.key===null?de:xe.key),X=f(xe,X,de),Ce===null?Jt=xe:Ce.sibling=xe,Ce=xe);return t&&jt.forEach(function(qa){return n(j,qa)}),Se&&Yi(j,de),Jt}function $t(j,X,Q,mt){if(Q==null)throw Error(r(151));for(var Jt=null,Ce=null,jt=X,de=X=0,xe=null,we=Q.next();jt!==null&&!we.done;de++,we=Q.next()){jt.index>de?(xe=jt,jt=null):xe=jt.sibling;var qa=nt(j,jt,we.value,mt);if(qa===null){jt===null&&(jt=xe);break}t&&jt&&qa.alternate===null&&n(j,jt),X=f(qa,X,de),Ce===null?Jt=qa:Ce.sibling=qa,Ce=qa,jt=xe}if(we.done)return a(j,jt),Se&&Yi(j,de),Jt;if(jt===null){for(;!we.done;de++,we=Q.next())we=vt(j,we.value,mt),we!==null&&(X=f(we,X,de),Ce===null?Jt=we:Ce.sibling=we,Ce=we);return Se&&Yi(j,de),Jt}for(jt=s(jt);!we.done;de++,we=Q.next())we=lt(jt,j,de,we.value,mt),we!==null&&(t&&we.alternate!==null&&jt.delete(we.key===null?de:we.key),X=f(we,X,de),Ce===null?Jt=we:Ce.sibling=we,Ce=we);return t&&jt.forEach(function(sS){return n(j,sS)}),Se&&Yi(j,de),Jt}function Ge(j,X,Q,mt){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:t:{for(var Jt=Q.key;X!==null;){if(X.key===Jt){if(Jt=Q.type,Jt===C){if(X.tag===7){a(j,X.sibling),mt=c(X,Q.props.children),mt.return=j,j=mt;break t}}else if(X.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===T&&hr(Jt)===X.type){a(j,X.sibling),mt=c(X,Q.props),to(mt,Q),mt.return=j,j=mt;break t}a(j,X);break}else n(j,X);X=X.sibling}Q.type===C?(mt=lr(Q.props.children,j.mode,mt,Q.key),mt.return=j,j=mt):(mt=ll(Q.type,Q.key,Q.props,null,j.mode,mt),to(mt,Q),mt.return=j,j=mt)}return g(j);case b:t:{for(Jt=Q.key;X!==null;){if(X.key===Jt)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){a(j,X.sibling),mt=c(X,Q.children||[]),mt.return=j,j=mt;break t}else{a(j,X);break}else n(j,X);X=X.sibling}mt=uu(Q,j.mode,mt),mt.return=j,j=mt}return g(j);case T:return Q=hr(Q),Ge(j,X,Q,mt)}if(Z(Q))return Xt(j,X,Q,mt);if($(Q)){if(Jt=$(Q),typeof Jt!="function")throw Error(r(150));return Q=Jt.call(Q),$t(j,X,Q,mt)}if(typeof Q.then=="function")return Ge(j,X,ml(Q),mt);if(Q.$$typeof===P)return Ge(j,X,fl(j,Q),mt);gl(j,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,X!==null&&X.tag===6?(a(j,X.sibling),mt=c(X,Q),mt.return=j,j=mt):(a(j,X),mt=cu(Q,j.mode,mt),mt.return=j,j=mt),g(j)):a(j,X)}return function(j,X,Q,mt){try{$s=0;var Jt=Ge(j,X,Q,mt);return Qr=null,Jt}catch(jt){if(jt===Kr||jt===hl)throw jt;var Ce=qn(29,jt,null,j.mode);return Ce.lanes=mt,Ce.return=j,Ce}}}var mr=Dp(!0),Up=Dp(!1),wa=!1;function yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Eu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Le&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=ol(t),pp(t,null,a),n}return sl(t,s,n,a),ol(t)}function eo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Lr(t,a)}}function bu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Tu=!1;function no(){if(Tu){var t=Zr;if(t!==null)throw t}}function io(t,n,a,s){Tu=!1;var c=t.updateQueue;wa=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var z=A,J=z.next;z.next=null,g===null?f=J:g.next=J,g=z;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==g&&(A===null?ft.firstBaseUpdate=J:A.next=J,ft.lastBaseUpdate=z))}if(f!==null){var vt=c.baseState;g=0,ft=J=z=null,A=f;do{var nt=A.lane&-536870913,lt=nt!==A.lane;if(lt?(ve&nt)===nt:(s&nt)===nt){nt!==0&&nt===jr&&(Tu=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Xt=t,$t=A;nt=n;var Ge=a;switch($t.tag){case 1:if(Xt=$t.payload,typeof Xt=="function"){vt=Xt.call(Ge,vt,nt);break t}vt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=$t.payload,nt=typeof Xt=="function"?Xt.call(Ge,vt,nt):Xt,nt==null)break t;vt=S({},vt,nt);break t;case 2:wa=!0}}nt=A.callback,nt!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[nt]:lt.push(nt))}else lt={lane:nt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?(J=ft=lt,z=vt):ft=ft.next=lt,g|=nt;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ft===null&&(z=vt),c.baseState=z,c.firstBaseUpdate=J,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),Fa|=g,t.lanes=g,t.memoizedState=vt}}function Lp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Np(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Lp(a[t],n)}var Jr=O(null),_l=O(0);function Op(t,n){t=aa,gt(_l,t),gt(Jr,n),aa=t|n.baseLanes}function Au(){gt(_l,aa),gt(Jr,Jr.current)}function Ru(){aa=_l.current,Y(Jr),Y(_l)}var Yn=O(null),oi=null;function La(t){var n=t.alternate;gt($e,$e.current&1),gt(Yn,t),oi===null&&(n===null||Jr.current!==null||n.memoizedState!==null)&&(oi=t)}function Cu(t){gt($e,$e.current),gt(Yn,t),oi===null&&(oi=t)}function Pp(t){t.tag===22?(gt($e,$e.current),gt(Yn,t),oi===null&&(oi=t)):Na()}function Na(){gt($e,$e.current),gt(Yn,Yn.current)}function jn(t){Y(Yn),oi===t&&(oi=null),Y($e)}var $e=O(0);function vl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Pf(a)||Ff(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ki=0,le=null,Ie=null,on=null,xl=!1,$r=!1,gr=!1,Sl=0,ao=0,ts=null,Kv=0;function Qe(){throw Error(r(321))}function wu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function Du(t,n,a,s,c,f){return Ki=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,w.H=t===null||t.memoizedState===null?vm:Wu,gr=!1,f=a(s,c),gr=!1,$r&&(f=Bp(n,a,s,c)),Fp(t),f}function Fp(t){w.H=oo;var n=Ie!==null&&Ie.next!==null;if(Ki=0,on=Ie=le=null,xl=!1,ao=0,ts=null,n)throw Error(r(300));t===null||ln||(t=t.dependencies,t!==null&&ul(t)&&(ln=!0))}function Bp(t,n,a,s){le=t;var c=0;do{if($r&&(ts=null),ao=0,$r=!1,25<=c)throw Error(r(301));if(c+=1,on=Ie=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}w.H=xm,f=n(a,s)}while($r);return f}function Qv(){var t=w.H,n=t.useState()[0];return n=typeof n.then=="function"?ro(n):n,t=t.useState()[0],(Ie!==null?Ie.memoizedState:null)!==t&&(le.flags|=1024),n}function Uu(){var t=Sl!==0;return Sl=0,t}function Lu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Nu(t){if(xl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}xl=!1}Ki=0,on=Ie=le=null,$r=!1,ao=Sl=0,ts=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?le.memoizedState=on=t:on=on.next=t,on}function tn(){if(Ie===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var n=on===null?le.memoizedState:on.next;if(n!==null)on=n,Ie=t;else{if(t===null)throw le.alternate===null?Error(r(467)):Error(r(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},on===null?le.memoizedState=on=t:on=on.next=t}return on}function Ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(t){var n=ao;return ao+=1,ts===null&&(ts=[]),t=Rp(ts,t,n),n=le,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,w.H=n===null||n.memoizedState===null?vm:Wu),t}function yl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ro(t);if(t.$$typeof===P)return Sn(t)}throw Error(r(438,String(t)))}function Ou(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=le.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ml(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=ht;return n.index++,a}function Qi(t,n){return typeof n=="function"?n(t):n}function El(t){var n=tn();return Pu(n,Ie,t)}function Pu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var A=g=null,z=null,J=n,ft=!1;do{var vt=J.lane&-536870913;if(vt!==J.lane?(ve&vt)===vt:(Ki&vt)===vt){var nt=J.revertLane;if(nt===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),vt===jr&&(ft=!0);else if((Ki&nt)===nt){J=J.next,nt===jr&&(ft=!0);continue}else vt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(A=z=vt,g=f):z=z.next=vt,le.lanes|=nt,Fa|=nt;vt=J.action,gr&&a(f,vt),f=J.hasEagerState?J.eagerState:a(f,vt)}else nt={lane:vt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(A=z=nt,g=f):z=z.next=nt,le.lanes|=vt,Fa|=vt;J=J.next}while(J!==null&&J!==n);if(z===null?g=f:z.next=A,!Wn(f,t.memoizedState)&&(ln=!0,ft&&(a=Zr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Fu(t){var n=tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Wn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function zp(t,n,a){var s=le,c=tn(),f=Se;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Wn((Ie||c).memoizedState,a);if(g&&(c.memoizedState=a,ln=!0),c=c.queue,Iu(Gp.bind(null,s,c,t),[t]),c.getSnapshot!==n||g||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,es(9,{destroy:void 0},Hp.bind(null,s,c,a,n),null),Xe===null)throw Error(r(349));f||(Ki&127)!==0||Ip(s,n,a)}return a}function Ip(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Ml(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Hp(t,n,a,s){n.value=a,n.getSnapshot=s,Vp(n)&&Xp(t)}function Gp(t,n,a){return a(function(){Vp(n)&&Xp(t)})}function Vp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function Xp(t){var n=or(t,2);n!==null&&Hn(n,t,2)}function Bu(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),gr){Pt(!0);try{a()}finally{Pt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:t},n}function kp(t,n,a,s){return t.baseState=a,Pu(t,Ie,typeof s=="function"?s:Qi)}function Jv(t,n,a,s,c){if(Al(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};w.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Wp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Wp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=w.T,g={};w.T=g;try{var A=a(c,s),z=w.S;z!==null&&z(g,A),qp(t,n,A)}catch(J){zu(t,n,J)}finally{f!==null&&g.types!==null&&(f.types=g.types),w.T=f}}else try{f=a(c,s),qp(t,n,f)}catch(J){zu(t,n,J)}}function qp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Yp(t,n,s)},function(s){return zu(t,n,s)}):Yp(t,n,a)}function Yp(t,n,a){n.status="fulfilled",n.value=a,jp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Wp(t,a)))}function zu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,jp(n),n=n.next;while(n!==s)}t.action=null}function jp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Zp(t,n){return n}function Kp(t,n){if(Se){var a=Xe.formState;if(a!==null){t:{var s=le;if(Se){if(We){e:{for(var c=We,f=si;c.nodeType!==8;){if(!f){c=null;break e}if(c=li(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){We=li(c.nextSibling),s=c.data==="F!";break t}}Ra(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zp,lastRenderedState:n},a.queue=s,a=mm.bind(null,le,s),s.dispatch=a,s=Bu(!1),f=ku.bind(null,le,!1,s.queue),s=Ln(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Jv.bind(null,le,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Qp(t){var n=tn();return Jp(n,Ie,t)}function Jp(t,n,a){if(n=Pu(t,n,Zp)[0],t=El(Qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ro(n)}catch(g){throw g===Kr?hl:g}else s=n;n=tn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,es(9,{destroy:void 0},$v.bind(null,c,a),null)),[s,f,t]}function $v(t,n){t.action=n}function $p(t){var n=tn(),a=Ie;if(a!==null)return Jp(n,a,t);tn(),n=n.memoizedState,a=tn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function es(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=le.updateQueue,n===null&&(n=Ml(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function tm(){return tn().memoizedState}function bl(t,n,a,s){var c=Ln();le.flags|=t,c.memoizedState=es(1|n,{destroy:void 0},a,s===void 0?null:s)}function Tl(t,n,a,s){var c=tn();s=s===void 0?null:s;var f=c.memoizedState.inst;Ie!==null&&s!==null&&wu(s,Ie.memoizedState.deps)?c.memoizedState=es(n,f,a,s):(le.flags|=t,c.memoizedState=es(1|n,f,a,s))}function em(t,n){bl(8390656,8,t,n)}function Iu(t,n){Tl(2048,8,t,n)}function tx(t){le.flags|=4;var n=le.updateQueue;if(n===null)n=Ml(),le.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function nm(t){var n=tn().memoizedState;return tx({ref:n,nextImpl:t}),function(){if((Le&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function im(t,n){return Tl(4,2,t,n)}function am(t,n){return Tl(4,4,t,n)}function rm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function sm(t,n,a){a=a!=null?a.concat([t]):null,Tl(4,4,rm.bind(null,n,t),a)}function Hu(){}function om(t,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&wu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function lm(t,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&wu(n,s[1]))return s[0];if(s=t(),gr){Pt(!0);try{t()}finally{Pt(!1)}}return a.memoizedState=[s,n],s}function Gu(t,n,a){return a===void 0||(Ki&1073741824)!==0&&(ve&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=cg(),le.lanes|=t,Fa|=t,a)}function cm(t,n,a,s){return Wn(a,n)?a:Jr.current!==null?(t=Gu(t,a,s),Wn(t,n)||(ln=!0),t):(Ki&42)===0||(Ki&1073741824)!==0&&(ve&261930)===0?(ln=!0,t.memoizedState=a):(t=cg(),le.lanes|=t,Fa|=t,n)}function um(t,n,a,s,c){var f=F.p;F.p=f!==0&&8>f?f:8;var g=w.T,A={};w.T=A,ku(t,!1,n,a);try{var z=c(),J=w.S;if(J!==null&&J(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ft=Zv(z,s);so(t,n,ft,Qn(t))}else so(t,n,s,Qn(t))}catch(vt){so(t,n,{then:function(){},status:"rejected",reason:vt},Qn())}finally{F.p=f,g!==null&&A.types!==null&&(g.types=A.types),w.T=g}}function ex(){}function Vu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=fm(t).queue;um(t,c,n,rt,a===null?ex:function(){return dm(t),a(s)})}function fm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:rt,baseState:rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:rt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function dm(t){var n=fm(t);n.next===null&&(n=t.alternate.memoizedState),so(t,n.next.queue,{},Qn())}function Xu(){return Sn(bo)}function hm(){return tn().memoizedState}function pm(){return tn().memoizedState}function nx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=Da(a);var s=Ua(n,t,a);s!==null&&(Hn(s,n,a),eo(s,n,a)),n={cache:vu()},t.payload=n;return}n=n.return}}function ix(t,n,a){var s=Qn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Al(t)?gm(n,a):(a=ou(t,n,a,s),a!==null&&(Hn(a,t,s),_m(a,n,s)))}function mm(t,n,a){var s=Qn();so(t,n,a,s)}function so(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(t))gm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,A=f(g,a);if(c.hasEagerState=!0,c.eagerState=A,Wn(A,g))return sl(t,n,c,0),Xe===null&&rl(),!1}catch{}if(a=ou(t,n,c,s),a!==null)return Hn(a,t,s),_m(a,n,s),!0}return!1}function ku(t,n,a,s){if(s={lane:2,revertLane:Ef(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Al(t)){if(n)throw Error(r(479))}else n=ou(t,a,s,2),n!==null&&Hn(n,t,2)}function Al(t){var n=t.alternate;return t===le||n!==null&&n===le}function gm(t,n){$r=xl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function _m(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Lr(t,a)}}var oo={readContext:Sn,use:yl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};oo.useEffectEvent=Qe;var vm={readContext:Sn,use:yl,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:em,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,bl(4194308,4,rm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return bl(4194308,4,t,n)},useInsertionEffect:function(t,n){bl(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var s=t();if(gr){Pt(!0);try{t()}finally{Pt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Ln();if(a!==void 0){var c=a(n);if(gr){Pt(!0);try{a(n)}finally{Pt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=ix.bind(null,le,t),[s.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Bu(t);var n=t.queue,a=mm.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Hu,useDeferredValue:function(t,n){var a=Ln();return Gu(a,t,n)},useTransition:function(){var t=Bu(!1);return t=um.bind(null,le,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=le,c=Ln();if(Se){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xe===null)throw Error(r(349));(ve&127)!==0||Ip(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,em(Gp.bind(null,s,f,t),[t]),s.flags|=2048,es(9,{destroy:void 0},Hp.bind(null,s,f,a,n),null),a},useId:function(){var t=Ln(),n=Xe.identifierPrefix;if(Se){var a=wi,s=Ci;a=(s&~(1<<32-Lt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Sl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Kv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Xu,useFormState:Kp,useActionState:Kp,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ku.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ou,useCacheRefresh:function(){return Ln().memoizedState=nx.bind(null,le)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Wu={readContext:Sn,use:yl,useCallback:om,useContext:Sn,useEffect:Iu,useImperativeHandle:sm,useInsertionEffect:im,useLayoutEffect:am,useMemo:lm,useReducer:El,useRef:tm,useState:function(){return El(Qi)},useDebugValue:Hu,useDeferredValue:function(t,n){var a=tn();return cm(a,Ie.memoizedState,t,n)},useTransition:function(){var t=El(Qi)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:zp,useId:hm,useHostTransitionStatus:Xu,useFormState:Qp,useActionState:Qp,useOptimistic:function(t,n){var a=tn();return kp(a,Ie,t,n)},useMemoCache:Ou,useCacheRefresh:pm};Wu.useEffectEvent=nm;var xm={readContext:Sn,use:yl,useCallback:om,useContext:Sn,useEffect:Iu,useImperativeHandle:sm,useInsertionEffect:im,useLayoutEffect:am,useMemo:lm,useReducer:Fu,useRef:tm,useState:function(){return Fu(Qi)},useDebugValue:Hu,useDeferredValue:function(t,n){var a=tn();return Ie===null?Gu(a,t,n):cm(a,Ie.memoizedState,t,n)},useTransition:function(){var t=Fu(Qi)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:zp,useId:hm,useHostTransitionStatus:Xu,useFormState:$p,useActionState:$p,useOptimistic:function(t,n){var a=tn();return Ie!==null?kp(a,Ie,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ou,useCacheRefresh:pm};xm.useEffectEvent=nm;function qu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Yu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=Da(s);c.payload=n,a!=null&&(c.callback=a),n=Ua(t,c,s),n!==null&&(Hn(n,t,s),eo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=Da(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ua(t,c,s),n!==null&&(Hn(n,t,s),eo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),s=Da(a);s.tag=2,n!=null&&(s.callback=n),n=Ua(t,s,a),n!==null&&(Hn(n,t,a),eo(n,t,a))}};function Sm(t,n,a,s,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Ys(a,s)||!Ys(c,f):!0}function Mm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Yu.enqueueReplaceState(n,n.state,null)}function _r(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function ym(t){al(t)}function Em(t){console.error(t)}function bm(t){al(t)}function Rl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Tm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ju(t,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){Rl(t,n)},a}function Am(t){return t=Da(t),t.tag=3,t}function Rm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Tm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Tm(n,a,s),typeof c!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function ax(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Yr(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Il():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Sf(t,s,c)),!1;case 22:return a.flags|=65536,s===pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Sf(t,s,c)),!1}throw Error(r(435,a.tag))}return Sf(t,s,c),Il(),!1}if(Se)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==hu&&(t=Error(r(422),{cause:s}),Ks(ii(t,a)))):(s!==hu&&(n=Error(r(423),{cause:s}),Ks(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ii(s,a),c=ju(t.stateNode,s,c),bu(t,c),Je!==4&&(Je=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),go===null?go=[f]:go.push(f),Je!==4&&(Je=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=ju(a.stateNode,s,t),bu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ba===null||!Ba.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Am(c),Rm(c,t,a,s),bu(a,c),!1}a=a.return}while(a!==null);return!1}var Zu=Error(r(461)),ln=!1;function Mn(t,n,a,s){n.child=t===null?Up(n,null,a,s):mr(n,t.child,a,s)}function Cm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var A in s)A!=="ref"&&(g[A]=s[A])}else g=s;return fr(n),s=Du(t,n,a,g,f,c),A=Uu(),t!==null&&!ln?(Lu(t,n,c),Ji(t,n,c)):(Se&&A&&fu(n),n.flags|=1,Mn(t,n,s,c),n.child)}function wm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!lu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Dm(t,n,f,s,c)):(t=ll(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!af(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ys,a(g,s)&&t.ref===n.ref)return Ji(t,n,c)}return n.flags|=1,t=qi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Dm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Ys(f,s)&&t.ref===n.ref)if(ln=!1,n.pendingProps=s=f,af(t,c))(t.flags&131072)!==0&&(ln=!0);else return n.lanes=t.lanes,Ji(t,n,c)}return Ku(t,n,a,s,c)}function Um(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Lm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&dl(n,f!==null?f.cachePool:null),f!==null?Op(n,f):Au(),Pp(n);else return s=n.lanes=536870912,Lm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(dl(n,f.cachePool),Op(n,f),Na(),n.memoizedState=null):(t!==null&&dl(n,null),Au(),Na());return Mn(t,n,c,a),n.child}function lo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Lm(t,n,a,s,c){var f=Su();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&dl(n,null),Au(),Pp(n),t!==null&&Yr(t,n,s,!0),n.childLanes=c,null}function Cl(t,n){return n=Dl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Nm(t,n,a){return mr(n,t.child,null,a),t=Cl(n,n.pendingProps),t.flags|=2,jn(n),n.memoizedState=null,t}function rx(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(s.mode==="hidden")return t=Cl(n,s),n.lanes=536870912,lo(null,t);if(Cu(n),(t=We)?(t=Wg(t,si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=gp(t),a.return=n,n.child=a,xn=n,We=null)):t=null,t===null)throw Ra(n);return n.lanes=536870912,null}return Cl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Cu(n),c)if(n.flags&256)n.flags&=-257,n=Nm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||Yr(t,n,a,!1),c=(a&t.childLanes)!==0,ln||c){if(s=Xe,s!==null&&(g=Yo(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,or(t,g),Hn(s,t,g),Zu;Il(),n=Nm(t,n,a)}else t=f.treeContext,We=li(g.nextSibling),xn=n,Se=!0,Aa=null,si=!1,t!==null&&xp(n,t),n=Cl(n,s),n.flags|=4096;return n}return t=qi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function wl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ku(t,n,a,s,c){return fr(n),a=Du(t,n,a,s,void 0,c),s=Uu(),t!==null&&!ln?(Lu(t,n,c),Ji(t,n,c)):(Se&&s&&fu(n),n.flags|=1,Mn(t,n,a,c),n.child)}function Om(t,n,a,s,c,f){return fr(n),n.updateQueue=null,a=Bp(n,s,a,c),Fp(t),s=Uu(),t!==null&&!ln?(Lu(t,n,f),Ji(t,n,f)):(Se&&s&&fu(n),n.flags|=1,Mn(t,n,a,f),n.child)}function Pm(t,n,a,s,c){if(fr(n),n.stateNode===null){var f=Xr,g=a.contextType;typeof g=="object"&&g!==null&&(f=Sn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Yu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},yu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Sn(g):Xr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(qu(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Yu.enqueueReplaceState(f,f.state,null),io(n,s,f,c),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,z=_r(a,A);f.props=z;var J=f.context,ft=a.contextType;g=Xr,typeof ft=="object"&&ft!==null&&(g=Sn(ft));var vt=a.getDerivedStateFromProps;ft=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||J!==g)&&Mm(n,f,s,g),wa=!1;var nt=n.memoizedState;f.state=nt,io(n,s,f,c),no(),J=n.memoizedState,A||nt!==J||wa?(typeof vt=="function"&&(qu(n,a,vt,s),J=n.memoizedState),(z=wa||Sm(n,a,z,s,nt,J,g))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=g,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Eu(t,n),g=n.memoizedProps,ft=_r(a,g),f.props=ft,vt=n.pendingProps,nt=f.context,J=a.contextType,z=Xr,typeof J=="object"&&J!==null&&(z=Sn(J)),A=a.getDerivedStateFromProps,(J=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==vt||nt!==z)&&Mm(n,f,s,z),wa=!1,nt=n.memoizedState,f.state=nt,io(n,s,f,c),no();var lt=n.memoizedState;g!==vt||nt!==lt||wa||t!==null&&t.dependencies!==null&&ul(t.dependencies)?(typeof A=="function"&&(qu(n,a,A,s),lt=n.memoizedState),(ft=wa||Sm(n,a,ft,s,nt,lt,z)||t!==null&&t.dependencies!==null&&ul(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,lt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,lt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),f.props=s,f.state=lt,f.context=z,s=ft):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,wl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=mr(n,t.child,null,c),n.child=mr(n,null,a,c)):Mn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Ji(t,n,c),t}function Fm(t,n,a,s){return cr(),n.flags|=256,Mn(t,n,a,s),n.child}var Qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ju(t){return{baseLanes:t,cachePool:Tp()}}function $u(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function Bm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:($e.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?La(n):Na(),(t=We)?(t=Wg(t,si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=gp(t),a.return=n,n.child=a,xn=n,We=null)):t=null,t===null)throw Ra(n);return Ff(t)?n.lanes=32:n.lanes=536870912,null}var A=s.children;return s=s.fallback,c?(Na(),c=n.mode,A=Dl({mode:"hidden",children:A},c),s=lr(s,c,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,s=n.child,s.memoizedState=Ju(a),s.childLanes=$u(t,g,a),n.memoizedState=Qu,lo(null,s)):(La(n),tf(n,A))}var z=t.memoizedState;if(z!==null&&(A=z.dehydrated,A!==null)){if(f)n.flags&256?(La(n),n.flags&=-257,n=ef(t,n,a)):n.memoizedState!==null?(Na(),n.child=t.child,n.flags|=128,n=null):(Na(),A=s.fallback,c=n.mode,s=Dl({mode:"visible",children:s.children},c),A=lr(A,c,a,null),A.flags|=2,s.return=n,A.return=n,s.sibling=A,n.child=s,mr(n,t.child,null,a),s=n.child,s.memoizedState=Ju(a),s.childLanes=$u(t,g,a),n.memoizedState=Qu,n=lo(null,s));else if(La(n),Ff(A)){if(g=A.nextSibling&&A.nextSibling.dataset,g)var J=g.dgst;g=J,s=Error(r(419)),s.stack="",s.digest=g,Ks({value:s,source:null,stack:null}),n=ef(t,n,a)}else if(ln||Yr(t,n,a,!1),g=(a&t.childLanes)!==0,ln||g){if(g=Xe,g!==null&&(s=Yo(g,a),s!==0&&s!==z.retryLane))throw z.retryLane=s,or(t,s),Hn(g,t,s),Zu;Pf(A)||Il(),n=ef(t,n,a)}else Pf(A)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,We=li(A.nextSibling),xn=n,Se=!0,Aa=null,si=!1,t!==null&&xp(n,t),n=tf(n,s.children),n.flags|=4096);return n}return c?(Na(),A=s.fallback,c=n.mode,z=t.child,J=z.sibling,s=qi(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,J!==null?A=qi(J,A):(A=lr(A,c,a,null),A.flags|=2),A.return=n,s.return=n,s.sibling=A,n.child=s,lo(null,s),s=n.child,A=t.child.memoizedState,A===null?A=Ju(a):(c=A.cachePool,c!==null?(z=sn._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=Tp(),A={baseLanes:A.baseLanes|a,cachePool:c}),s.memoizedState=A,s.childLanes=$u(t,g,a),n.memoizedState=Qu,lo(t.child,s)):(La(n),a=t.child,t=a.sibling,a=qi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function tf(t,n){return n=Dl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Dl(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function ef(t,n,a){return mr(n,t.child,null,a),t=tf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function zm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),gu(t.return,n,a)}function nf(t,n,a,s,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Im(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=$e.current,A=(g&2)!==0;if(A?(g=g&1|2,n.flags|=128):g&=1,gt($e,g),Mn(t,n,s,a),s=Se?Zs:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zm(t,a,n);else if(t.tag===19)zm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&vl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),nf(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&vl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}nf(n,!0,a,null,f,s);break;case"together":nf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Ji(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Fa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Yr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=qi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=qi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function af(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ul(t)))}function sx(t,n,a){switch(n.tag){case 3:Mt(n,n.stateNode.containerInfo),Ca(n,sn,t.memoizedState.cache),cr();break;case 27:case 5:Ht(n);break;case 4:Mt(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Cu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Bm(t,n,a):(La(n),t=Ji(t,n,a),t!==null?t.sibling:null);La(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Yr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Im(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),gt($e,$e.current),s)break;return null;case 22:return n.lanes=0,Um(t,n,a,n.pendingProps);case 24:Ca(n,sn,t.memoizedState.cache)}return Ji(t,n,a)}function Hm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ln=!0;else{if(!af(t,a)&&(n.flags&128)===0)return ln=!1,sx(t,n,a);ln=(t.flags&131072)!==0}else ln=!1,Se&&(n.flags&1048576)!==0&&vp(n,Zs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=hr(n.elementType),n.type=t,typeof t=="function")lu(t)?(s=_r(t,s),n.tag=1,n=Pm(null,n,t,s,a)):(n.tag=0,n=Ku(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===N){n.tag=11,n=Cm(null,n,t,s,a);break t}else if(c===B){n.tag=14,n=wm(null,n,t,s,a);break t}}throw n=ot(t)||t,Error(r(306,n,""))}}return n;case 0:return Ku(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=_r(s,n.pendingProps),Pm(t,n,s,c,a);case 3:t:{if(Mt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Eu(t,n),io(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Ca(n,sn,s),s!==f.cache&&_u(n,[sn],a,!0),no(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Fm(t,n,s,a);break t}else if(s!==c){c=ii(Error(r(424)),n),Ks(c),n=Fm(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,We=li(t.firstChild),xn=n,Se=!0,Aa=null,si=!0,a=Up(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(cr(),s===c){n=Ji(t,n,a);break t}Mn(t,n,s,a)}n=n.child}return n;case 26:return wl(t,n),t===null?(a=Qg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,s=ql(tt.current).createElement(a),s[nn]=n,s[dn]=t,yn(s,a,t),k(s),n.stateNode=s):n.memoizedState=Qg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ht(n),t===null&&Se&&(s=n.stateNode=jg(n.type,n.pendingProps,tt.current),xn=n,si=!0,c=We,Ga(n.type)?(Bf=c,We=li(s.firstChild)):We=c),Mn(t,n,n.pendingProps.children,a),wl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=s=We)&&(s=Fx(s,n.type,n.pendingProps,si),s!==null?(n.stateNode=s,xn=n,We=li(s.firstChild),si=!1,c=!0):c=!1),c||Ra(n)),Ht(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Lf(c,f)?s=null:g!==null&&Lf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Du(t,n,Qv,null,null,a),bo._currentValue=c),wl(t,n),Mn(t,n,s,a),n.child;case 6:return t===null&&Se&&((t=a=We)&&(a=Bx(a,n.pendingProps,si),a!==null?(n.stateNode=a,xn=n,We=null,t=!0):t=!1),t||Ra(n)),null;case 13:return Bm(t,n,a);case 4:return Mt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=mr(n,null,s,a):Mn(t,n,s,a),n.child;case 11:return Cm(t,n,n.type,n.pendingProps,a);case 7:return Mn(t,n,n.pendingProps,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Ca(n,n.type,s.value),Mn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,fr(n),c=Sn(c),s=s(c),n.flags|=1,Mn(t,n,s,a),n.child;case 14:return wm(t,n,n.type,n.pendingProps,a);case 15:return Dm(t,n,n.type,n.pendingProps,a);case 19:return Im(t,n,a);case 31:return rx(t,n,a);case 22:return Um(t,n,a,n.pendingProps);case 24:return fr(n),s=Sn(sn),t===null?(c=Su(),c===null&&(c=Xe,f=vu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},yu(n),Ca(n,sn,c)):((t.lanes&a)!==0&&(Eu(t,n),io(n,null,null,a),no()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ca(n,sn,s)):(s=f.cache,Ca(n,sn,s),s!==c.cache&&_u(n,[sn],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function $i(t){t.flags|=4}function rf(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(hg())t.flags|=8192;else throw pr=pl,Mu}else t.flags&=-16777217}function Gm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!n0(n))if(hg())t.flags|=8192;else throw pr=pl,Mu}function Ul(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Pe():536870912,t.lanes|=n,rs|=n)}function co(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function ox(t,n,a){var s=n.pendingProps;switch(du(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Zi(sn),Ot(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(qr(n)?$i(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,pu())),qe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?($i(n),f!==null?(qe(n),Gm(n,f)):(qe(n),rf(n,c,null,s,a))):f?f!==t.memoizedState?($i(n),qe(n),Gm(n,f)):(qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&$i(n),qe(n),rf(n,c,t,s,a)),null;case 27:if(Kt(n),a=tt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&$i(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}t=Tt.current,qr(n)?Sp(n):(t=jg(c,s,a),n.stateNode=t,$i(n))}return qe(n),null;case 5:if(Kt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&$i(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(f=Tt.current,qr(n))Sp(n);else{var g=ql(tt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[nn]=n,f[dn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(yn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&$i(n)}}return qe(n),rf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&$i(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=tt.current,qr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=xn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[nn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Bg(t.nodeValue,a)),t||Ra(n,!0)}else t=ql(t).createTextNode(s),t[nn]=n,n.stateNode=t}return qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=qr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[nn]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),t=!1}else a=pu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=qr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[nn]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=pu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ul(n,n.updateQueue),qe(n),null);case 4:return Ot(),t===null&&Rf(n.stateNode.containerInfo),qe(n),null;case 10:return Zi(n.type),qe(n),null;case 19:if(Y($e),s=n.memoizedState,s===null)return qe(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)co(s,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=vl(t),f!==null){for(n.flags|=128,co(s,!1),t=f.updateQueue,n.updateQueue=t,Ul(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)mp(a,t),a=a.sibling;return gt($e,$e.current&1|2),Se&&Yi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&y()>Fl&&(n.flags|=128,c=!0,co(s,!1),n.lanes=4194304)}else{if(!c)if(t=vl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Ul(n,t),co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Se)return qe(n),null}else 2*y()-s.renderingStartTime>Fl&&a!==536870912&&(n.flags|=128,c=!0,co(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=y(),t.sibling=null,a=$e.current,gt($e,c?a&1|2:a&1),Se&&Yi(n,s.treeForkCount),t):(qe(n),null);case 22:case 23:return jn(n),Ru(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Ul(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Y(dr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Zi(sn),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function lx(t,n){switch(du(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Zi(sn),Ot(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Kt(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(r(340));cr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));cr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y($e),null;case 4:return Ot(),null;case 10:return Zi(n.type),null;case 22:case 23:return jn(n),Ru(),t!==null&&Y(dr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Zi(sn),null;case 25:return null;default:return null}}function Vm(t,n){switch(du(n),n.tag){case 3:Zi(sn),Ot();break;case 26:case 27:case 5:Kt(n);break;case 4:Ot();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:Y($e);break;case 10:Zi(n.type);break;case 22:case 23:jn(n),Ru(),t!==null&&Y(dr);break;case 24:Zi(sn)}}function uo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(A){Be(n,n.return,A)}}function Oa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var g=s.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,c=n;var z=a,J=A;try{J()}catch(ft){Be(c,z,ft)}}}s=s.next}while(s!==f)}}catch(ft){Be(n,n.return,ft)}}function Xm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Np(n,a)}catch(s){Be(t,t.return,s)}}}function km(t,n,a){a.props=_r(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Be(t,n,s)}}function fo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Be(t,n,c)}}function Di(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Be(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(t,n,c)}else a.current=null}function Wm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Be(t,t.return,c)}}function sf(t,n,a){try{var s=t.stateNode;Dx(s,t.type,a,n),s[dn]=n}catch(c){Be(t,t.return,c)}}function qm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ga(t.type)||t.tag===4}function of(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||qm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ga(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki));else if(s!==4&&(s===27&&Ga(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(lf(t,n,a),t=t.sibling;t!==null;)lf(t,n,a),t=t.sibling}function Ll(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ga(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ll(t,n,a),t=t.sibling;t!==null;)Ll(t,n,a),t=t.sibling}function Ym(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);yn(n,s,a),n[nn]=t,n[dn]=a}catch(f){Be(t,t.return,f)}}var ta=!1,cn=!1,cf=!1,jm=typeof WeakSet=="function"?WeakSet:Set,_n=null;function cx(t,n){if(t=t.containerInfo,Df=$l,t=sp(t),eu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,A=-1,z=-1,J=0,ft=0,vt=t,nt=null;e:for(;;){for(var lt;vt!==a||c!==0&&vt.nodeType!==3||(A=g+c),vt!==f||s!==0&&vt.nodeType!==3||(z=g+s),vt.nodeType===3&&(g+=vt.nodeValue.length),(lt=vt.firstChild)!==null;)nt=vt,vt=lt;for(;;){if(vt===t)break e;if(nt===a&&++J===c&&(A=g),nt===f&&++ft===s&&(z=g),(lt=vt.nextSibling)!==null)break;vt=nt,nt=vt.parentNode}vt=lt}a=A===-1||z===-1?null:{start:A,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uf={focusedElem:t,selectionRange:a},$l=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Xt=_r(a.type,c);t=s.getSnapshotBeforeUpdate(Xt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch($t){Be(a,a.return,$t)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Of(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Of(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function Zm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:na(t,a),s&4&&uo(5,a);break;case 1:if(na(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Be(a,a.return,g)}else{var c=_r(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Be(a,a.return,g)}}s&64&&Xm(a),s&512&&fo(a,a.return);break;case 3:if(na(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Np(t,n)}catch(g){Be(a,a.return,g)}}break;case 27:n===null&&s&4&&Ym(a);case 26:case 5:na(t,a),n===null&&s&4&&Wm(a),s&512&&fo(a,a.return);break;case 12:na(t,a);break;case 31:na(t,a),s&4&&Jm(t,a);break;case 13:na(t,a),s&4&&$m(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=vx.bind(null,a),zx(t,a))));break;case 22:if(s=a.memoizedState!==null||ta,!s){n=n!==null&&n.memoizedState!==null||cn,c=ta;var f=cn;ta=s,(cn=n)&&!f?ia(t,a,(a.subtreeFlags&8772)!==0):na(t,a),ta=c,cn=f}break;case 30:break;default:na(t,a)}}function Km(t){var n=t.alternate;n!==null&&(t.alternate=null,Km(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Is(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ke=null,Fn=!1;function ea(t,n,a){for(a=a.child;a!==null;)Qm(t,n,a),a=a.sibling}function Qm(t,n,a){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:cn||Di(a,n),ea(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Di(a,n);var s=Ke,c=Fn;Ga(a.type)&&(Ke=a.stateNode,Fn=!1),ea(t,n,a),Mo(a.stateNode),Ke=s,Fn=c;break;case 5:cn||Di(a,n);case 6:if(s=Ke,c=Fn,Ke=null,ea(t,n,a),Ke=s,Fn=c,Ke!==null)if(Fn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Ke.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Ke!==null&&(Fn?(t=Ke,Xg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),hs(t)):Xg(Ke,a.stateNode));break;case 4:s=Ke,c=Fn,Ke=a.stateNode.containerInfo,Fn=!0,ea(t,n,a),Ke=s,Fn=c;break;case 0:case 11:case 14:case 15:Oa(2,a,n),cn||Oa(4,a,n),ea(t,n,a);break;case 1:cn||(Di(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&km(a,n,s)),ea(t,n,a);break;case 21:ea(t,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,ea(t,n,a),cn=s;break;default:ea(t,n,a)}}function Jm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{hs(t)}catch(a){Be(n,n.return,a)}}}function $m(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{hs(t)}catch(a){Be(n,n.return,a)}}function ux(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new jm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new jm),n;default:throw Error(r(435,t.tag))}}function Nl(t,n){var a=ux(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=xx.bind(null,t,s);s.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,g=n,A=g;t:for(;A!==null;){switch(A.tag){case 27:if(Ga(A.type)){Ke=A.stateNode,Fn=!1;break t}break;case 5:Ke=A.stateNode,Fn=!1;break t;case 3:case 4:Ke=A.stateNode.containerInfo,Fn=!0;break t}A=A.return}if(Ke===null)throw Error(r(160));Qm(f,g,c),Ke=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)tg(n,t),n=n.sibling}var vi=null;function tg(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),zn(t),s&4&&(Oa(3,t,t.return),uo(3,t),Oa(5,t,t.return));break;case 1:Bn(n,t),zn(t),s&512&&(cn||a===null||Di(a,a.return)),s&64&&ta&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=vi;if(Bn(n,t),zn(t),s&512&&(cn||a===null||Di(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[nr]||f[nn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),yn(f,s,a),f[nn]=t,k(f),s=f;break t;case"link":var g=t0("link","href",c).get(s+(a.href||""));if(g){for(var A=0;A<g.length;A++)if(f=g[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(A,1);break e}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;case"meta":if(g=t0("meta","content",c).get(s+(a.content||""))){for(A=0;A<g.length;A++)if(f=g[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(A,1);break e}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[nn]=t,k(f),s=f}t.stateNode=s}else e0(c,t.type,t.stateNode);else t.stateNode=$g(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?e0(c,t.type,t.stateNode):$g(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&sf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),zn(t),s&512&&(cn||a===null||Di(a,a.return)),a!==null&&s&4&&sf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),zn(t),s&512&&(cn||a===null||Di(a,a.return)),t.flags&32){c=t.stateNode;try{Un(c,"")}catch(Xt){Be(t,t.return,Xt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,sf(t,c,a!==null?a.memoizedProps:c)),s&1024&&(cf=!0);break;case 6:if(Bn(n,t),zn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Xt){Be(t,t.return,Xt)}}break;case 3:if(Zl=null,c=vi,vi=Yl(n.containerInfo),Bn(n,t),vi=c,zn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{hs(n.containerInfo)}catch(Xt){Be(t,t.return,Xt)}cf&&(cf=!1,eg(t));break;case 4:s=vi,vi=Yl(t.stateNode.containerInfo),Bn(n,t),zn(t),vi=s;break;case 12:Bn(n,t),zn(t);break;case 31:Bn(n,t),zn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 13:Bn(n,t),zn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pl=y()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 22:c=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,J=ta,ft=cn;if(ta=J||c,cn=ft||z,Bn(n,t),cn=ft,ta=J,zn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||ta||cn||vr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{A=z.stateNode;var vt=z.memoizedProps.style,nt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Xt){Be(z,z.return,Xt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(Xt){Be(z,z.return,Xt)}}}else if(n.tag===18){if(a===null){z=n;try{var lt=z.stateNode;c?kg(lt,!0):kg(z.stateNode,!1)}catch(Xt){Be(z,z.return,Xt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Nl(t,a))));break;case 19:Bn(n,t),zn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 30:break;case 21:break;default:Bn(n,t),zn(t)}}function zn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(qm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=of(t);Ll(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Un(g,""),a.flags&=-33);var A=of(t);Ll(t,A,g);break;case 3:case 4:var z=a.stateNode.containerInfo,J=of(t);lf(t,J,z);break;default:throw Error(r(161))}}catch(ft){Be(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function eg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;eg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function na(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Zm(t,n.alternate,n),n=n.sibling}function vr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),vr(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&km(n,n.return,a),vr(n);break;case 27:Mo(n.stateNode);case 26:case 5:Di(n,n.return),vr(n);break;case 22:n.memoizedState===null&&vr(n);break;case 30:vr(n);break;default:vr(n)}t=t.sibling}}function ia(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:ia(c,f,a),uo(4,f);break;case 1:if(ia(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Be(s,s.return,J)}if(s=f,c=s.updateQueue,c!==null){var A=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Lp(z[c],A)}catch(J){Be(s,s.return,J)}}a&&g&64&&Xm(f),fo(f,f.return);break;case 27:Ym(f);case 26:case 5:ia(c,f,a),a&&s===null&&g&4&&Wm(f),fo(f,f.return);break;case 12:ia(c,f,a);break;case 31:ia(c,f,a),a&&g&4&&Jm(c,f);break;case 13:ia(c,f,a),a&&g&4&&$m(c,f);break;case 22:f.memoizedState===null&&ia(c,f,a),fo(f,f.return);break;case 30:break;default:ia(c,f,a)}n=n.sibling}}function uf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Qs(a))}function ff(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t))}function xi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ng(t,n,a,s),n=n.sibling}function ng(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,s),c&2048&&uo(9,n);break;case 1:xi(t,n,a,s);break;case 3:xi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t)));break;case 12:if(c&2048){xi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,A=f.onPostCommit;typeof A=="function"&&A(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Be(n,n.return,z)}}else xi(t,n,a,s);break;case 31:xi(t,n,a,s);break;case 13:xi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?xi(t,n,a,s):ho(t,n):f._visibility&2?xi(t,n,a,s):(f._visibility|=2,ns(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&uf(g,n);break;case 24:xi(t,n,a,s),c&2048&&ff(n.alternate,n);break;default:xi(t,n,a,s)}}function ns(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,A=a,z=s,J=g.flags;switch(g.tag){case 0:case 11:case 15:ns(f,g,A,z,c),uo(8,g);break;case 23:break;case 22:var ft=g.stateNode;g.memoizedState!==null?ft._visibility&2?ns(f,g,A,z,c):ho(f,g):(ft._visibility|=2,ns(f,g,A,z,c)),c&&J&2048&&uf(g.alternate,g);break;case 24:ns(f,g,A,z,c),c&&J&2048&&ff(g.alternate,g);break;default:ns(f,g,A,z,c)}n=n.sibling}}function ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:ho(a,s),c&2048&&uf(s.alternate,s);break;case 24:ho(a,s),c&2048&&ff(s.alternate,s);break;default:ho(a,s)}n=n.sibling}}var po=8192;function is(t,n,a){if(t.subtreeFlags&po)for(t=t.child;t!==null;)ig(t,n,a),t=t.sibling}function ig(t,n,a){switch(t.tag){case 26:is(t,n,a),t.flags&po&&t.memoizedState!==null&&Kx(a,vi,t.memoizedState,t.memoizedProps);break;case 5:is(t,n,a);break;case 3:case 4:var s=vi;vi=Yl(t.stateNode.containerInfo),is(t,n,a),vi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=po,po=16777216,is(t,n,a),po=s):is(t,n,a));break;default:is(t,n,a)}}function ag(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,sg(s,t)}ag(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rg(t),t=t.sibling}function rg(t){switch(t.tag){case 0:case 11:case 15:mo(t),t.flags&2048&&Oa(9,t,t.return);break;case 3:mo(t);break;case 12:mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ol(t)):mo(t);break;default:mo(t)}}function Ol(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,sg(s,t)}ag(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(n));break;default:Ol(n)}t=t.sibling}}function sg(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,_n=s;else t:for(a=t;_n!==null;){s=_n;var c=s.sibling,f=s.return;if(Km(s),s===a){_n=null;break t}if(c!==null){c.return=f,_n=c;break t}_n=f}}}var fx={getCacheForType:function(t){var n=Sn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Sn(sn).controller.signal}},dx=typeof WeakMap=="function"?WeakMap:Map,Le=0,Xe=null,ge=null,ve=0,Fe=0,Zn=null,Pa=!1,as=!1,df=!1,aa=0,Je=0,Fa=0,xr=0,hf=0,Kn=0,rs=0,go=null,In=null,pf=!1,Pl=0,og=0,Fl=1/0,Bl=null,Ba=null,pn=0,za=null,ss=null,ra=0,mf=0,gf=null,lg=null,_o=0,_f=null;function Qn(){return(Le&2)!==0&&ve!==0?ve&-ve:w.T!==null?Ef():Ri()}function cg(){if(Kn===0)if((ve&536870912)===0||Se){var t=At;At<<=1,(At&3932160)===0&&(At=262144),Kn=t}else Kn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Kn}function Hn(t,n,a){(t===Xe&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(os(t,0),Ia(t,ve,Kn,!1)),Cn(t,a),((Le&2)===0||t!==Xe)&&(t===Xe&&((Le&2)===0&&(xr|=a),Je===4&&Ia(t,ve,Kn,!1)),Ui(t))}function ug(t,n,a){if((Le&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Gt(t,n),c=s?mx(t,n):xf(t,n,!0),f=s;do{if(c===0){as&&!s&&Ia(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!hx(a)){c=xf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var A=t;c=go;var z=A.current.memoizedState.isDehydrated;if(z&&(os(A,g).flags|=256),g=xf(A,g,!1),g!==2){if(df&&!z){A.errorRecoveryDisabledLanes|=f,xr|=f,c=4;break t}f=In,In=c,f!==null&&(In===null?In=f:In.push.apply(In,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){os(t,0),Ia(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ia(s,n,Kn,!Pa);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Pl+300-y(),10<c)){if(Ia(s,n,Kn,!Pa),ct(s,0,!0)!==0)break t;ra=n,s.timeoutHandle=Gg(fg.bind(null,s,a,In,Bl,pf,n,Kn,xr,rs,Pa,f,"Throttled",-0,0),c);break t}fg(s,a,In,Bl,pf,n,Kn,xr,rs,Pa,f,null,-0,0)}}break}while(!0);Ui(t)}function fg(t,n,a,s,c,f,g,A,z,J,ft,vt,nt,lt){if(t.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},ig(n,f,vt);var Xt=(f&62914560)===f?Pl-y():(f&4194048)===f?og-y():0;if(Xt=Qx(vt,Xt),Xt!==null){ra=f,t.cancelPendingCommit=Xt(xg.bind(null,t,n,f,a,s,c,g,A,z,ft,vt,null,nt,lt)),Ia(t,f,g,!J);return}}xg(t,n,f,a,s,c,g,A,z)}function hx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(t,n,a,s){n&=~hf,n&=~xr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Lt(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&zs(t,a,n)}function zl(){return(Le&6)===0?(vo(0),!1):!0}function vf(){if(ge!==null){if(Fe===0)var t=ge.return;else t=ge,ji=ur=null,Nu(t),Qr=null,$s=0,t=ge;for(;t!==null;)Vm(t.alternate,t),t=t.return;ge=null}}function os(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Nx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ra=0,vf(),Xe=t,ge=a=qi(t.current,null),ve=n,Fe=0,Zn=null,Pa=!1,as=Gt(t,n),df=!1,rs=Kn=hf=xr=Fa=Je=0,In=go=null,pf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Lt(s),f=1<<c;n|=t[c],s&=~f}return aa=n,rl(),a}function dg(t,n){le=null,w.H=oo,n===Kr||n===hl?(n=Cp(),Fe=3):n===Mu?(n=Cp(),Fe=4):Fe=n===Zu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,ge===null&&(Je=1,Rl(t,ii(n,t.current)))}function hg(){var t=Yn.current;return t===null?!0:(ve&4194048)===ve?oi===null:(ve&62914560)===ve||(ve&536870912)!==0?t===oi:!1}function pg(){var t=w.H;return w.H=oo,t===null?oo:t}function mg(){var t=w.A;return w.A=fx,t}function Il(){Je=4,Pa||(ve&4194048)!==ve&&Yn.current!==null||(as=!0),(Fa&134217727)===0&&(xr&134217727)===0||Xe===null||Ia(Xe,ve,Kn,!1)}function xf(t,n,a){var s=Le;Le|=2;var c=pg(),f=mg();(Xe!==t||ve!==n)&&(Bl=null,os(t,n)),n=!1;var g=Je;t:do try{if(Fe!==0&&ge!==null){var A=ge,z=Zn;switch(Fe){case 8:vf(),g=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var J=Fe;if(Fe=0,Zn=null,ls(t,A,z,J),a&&as){g=0;break t}break;default:J=Fe,Fe=0,Zn=null,ls(t,A,z,J)}}px(),g=Je;break}catch(ft){dg(t,ft)}while(!0);return n&&t.shellSuspendCounter++,ji=ur=null,Le=s,w.H=c,w.A=f,ge===null&&(Xe=null,ve=0,rl()),g}function px(){for(;ge!==null;)gg(ge)}function mx(t,n){var a=Le;Le|=2;var s=pg(),c=mg();Xe!==t||ve!==n?(Bl=null,Fl=y()+500,os(t,n)):as=Gt(t,n);t:do try{if(Fe!==0&&ge!==null){n=ge;var f=Zn;e:switch(Fe){case 1:Fe=0,Zn=null,ls(t,n,f,1);break;case 2:case 9:if(Ap(f)){Fe=0,Zn=null,_g(n);break}n=function(){Fe!==2&&Fe!==9||Xe!==t||(Fe=7),Ui(t)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Ap(f)?(Fe=0,Zn=null,_g(n)):(Fe=0,Zn=null,ls(t,n,f,7));break;case 5:var g=null;switch(ge.tag){case 26:g=ge.memoizedState;case 5:case 27:var A=ge;if(g?n0(g):A.stateNode.complete){Fe=0,Zn=null;var z=A.sibling;if(z!==null)ge=z;else{var J=A.return;J!==null?(ge=J,Hl(J)):ge=null}break e}}Fe=0,Zn=null,ls(t,n,f,5);break;case 6:Fe=0,Zn=null,ls(t,n,f,6);break;case 8:vf(),Je=6;break t;default:throw Error(r(462))}}gx();break}catch(ft){dg(t,ft)}while(!0);return ji=ur=null,w.H=s,w.A=c,Le=a,ge!==null?0:(Xe=null,ve=0,rl(),Je)}function gx(){for(;ge!==null&&!Yt();)gg(ge)}function gg(t){var n=Hm(t.alternate,t,aa);t.memoizedProps=t.pendingProps,n===null?Hl(t):ge=n}function _g(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Om(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Om(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Nu(n);default:Vm(a,n),n=ge=mp(n,aa),n=Hm(a,n,aa)}t.memoizedProps=t.pendingProps,n===null?Hl(t):ge=n}function ls(t,n,a,s){ji=ur=null,Nu(n),Qr=null,$s=0;var c=n.return;try{if(ax(t,c,n,a,ve)){Je=1,Rl(t,ii(a,t.current)),ge=null;return}}catch(f){if(c!==null)throw ge=c,f;Je=1,Rl(t,ii(a,t.current)),ge=null;return}n.flags&32768?(Se||s===1?t=!0:as||(ve&536870912)!==0?t=!1:(Pa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),vg(n,t)):Hl(n)}function Hl(t){var n=t;do{if((n.flags&32768)!==0){vg(n,Pa);return}t=n.return;var a=ox(n.alternate,n,aa);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=t}while(n!==null);Je===0&&(Je=5)}function vg(t,n){do{var a=lx(t.alternate,t);if(a!==null){a.flags&=32767,ge=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ge=t;return}ge=t=a}while(t!==null);Je=6,ge=null}function xg(t,n,a,s,c,f,g,A,z){t.cancelPendingCommit=null;do Gl();while(pn!==0);if((Le&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=su,hi(t,a,f,g,A,z),t===Xe&&(ge=Xe=null,ve=0),ss=n,za=t,ra=a,mf=f,gf=c,lg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Sx(ut,function(){return bg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=w.T,w.T=null,c=F.p,F.p=2,g=Le,Le|=4;try{cx(t,n,a)}finally{Le=g,F.p=c,w.T=s}}pn=1,Sg(),Mg(),yg()}}function Sg(){if(pn===1){pn=0;var t=za,n=ss,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=w.T,w.T=null;var s=F.p;F.p=2;var c=Le;Le|=4;try{tg(n,t);var f=Uf,g=sp(t.containerInfo),A=f.focusedElem,z=f.selectionRange;if(g!==A&&A&&A.ownerDocument&&rp(A.ownerDocument.documentElement,A)){if(z!==null&&eu(A)){var J=z.start,ft=z.end;if(ft===void 0&&(ft=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(ft,A.value.length);else{var vt=A.ownerDocument||document,nt=vt&&vt.defaultView||window;if(nt.getSelection){var lt=nt.getSelection(),Xt=A.textContent.length,$t=Math.min(z.start,Xt),Ge=z.end===void 0?$t:Math.min(z.end,Xt);!lt.extend&&$t>Ge&&(g=Ge,Ge=$t,$t=g);var j=ap(A,$t),X=ap(A,Ge);if(j&&X&&(lt.rangeCount!==1||lt.anchorNode!==j.node||lt.anchorOffset!==j.offset||lt.focusNode!==X.node||lt.focusOffset!==X.offset)){var Q=vt.createRange();Q.setStart(j.node,j.offset),lt.removeAllRanges(),$t>Ge?(lt.addRange(Q),lt.extend(X.node,X.offset)):(Q.setEnd(X.node,X.offset),lt.addRange(Q))}}}}for(vt=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&vt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var mt=vt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}$l=!!Df,Uf=Df=null}finally{Le=c,F.p=s,w.T=a}}t.current=n,pn=2}}function Mg(){if(pn===2){pn=0;var t=za,n=ss,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=w.T,w.T=null;var s=F.p;F.p=2;var c=Le;Le|=4;try{Zm(t,n.alternate,n)}finally{Le=c,F.p=s,w.T=a}}pn=3}}function yg(){if(pn===4||pn===3){pn=0,L();var t=za,n=ss,a=ra,s=lg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,ss=za=null,Eg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ba=null),Or(a),n=n.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=w.T,c=F.p,F.p=2,w.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var A=s[g];f(A.value,{componentStack:A.stack})}}finally{w.T=n,F.p=c}}(ra&3)!==0&&Gl(),Ui(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===_f?_o++:(_o=0,_f=t):_o=0,vo(0)}}function Eg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Qs(n)))}function Gl(){return Sg(),Mg(),yg(),bg()}function bg(){if(pn!==5)return!1;var t=za,n=mf;mf=0;var a=Or(ra),s=w.T,c=F.p;try{F.p=32>a?32:a,w.T=null,a=gf,gf=null;var f=za,g=ra;if(pn=0,ss=za=null,ra=0,(Le&6)!==0)throw Error(r(331));var A=Le;if(Le|=4,rg(f.current),ng(f,f.current,g,a),Le=A,vo(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{F.p=c,w.T=s,Eg(t,n)}}function Tg(t,n,a){n=ii(a,n),n=ju(t.stateNode,n,2),t=Ua(t,n,2),t!==null&&(Cn(t,2),Ui(t))}function Be(t,n,a){if(t.tag===3)Tg(t,t,a);else for(;n!==null;){if(n.tag===3){Tg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ba===null||!Ba.has(s))){t=ii(a,t),a=Am(2),s=Ua(n,a,2),s!==null&&(Rm(a,s,n,t),Cn(s,2),Ui(s));break}}n=n.return}}function Sf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new dx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(df=!0,c.add(a),t=_x.bind(null,t,n,a),n.then(t,t))}function _x(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(ve&a)===a&&(Je===4||Je===3&&(ve&62914560)===ve&&300>y()-Pl?(Le&2)===0&&os(t,0):hf|=a,rs===ve&&(rs=0)),Ui(t)}function Ag(t,n){n===0&&(n=Pe()),t=or(t,n),t!==null&&(Cn(t,n),Ui(t))}function vx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Ag(t,a)}function xx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Ag(t,a)}function Sx(t,n){return ye(t,n)}var Vl=null,cs=null,Mf=!1,Xl=!1,yf=!1,Ha=0;function Ui(t){t!==cs&&t.next===null&&(cs===null?Vl=cs=t:cs=cs.next=t),Xl=!0,Mf||(Mf=!0,yx())}function vo(t,n){if(!yf&&Xl){yf=!0;do for(var a=!1,s=Vl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-Lt(42|t)+1)-1,f&=c&~(g&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Dg(s,f))}else f=ve,f=ct(s,s===Xe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Gt(s,f)||(a=!0,Dg(s,f));s=s.next}while(a);yf=!1}}function Mx(){Rg()}function Rg(){Xl=Mf=!1;var t=0;Ha!==0&&Lx()&&(t=Ha);for(var n=y(),a=null,s=Vl;s!==null;){var c=s.next,f=Cg(s,n);f===0?(s.next=null,a===null?Vl=c:a.next=c,c===null&&(cs=a)):(a=s,(t!==0||(f&3)!==0)&&(Xl=!0)),s=c}pn!==0&&pn!==5||vo(t),Ha!==0&&(Ha=0)}function Cg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Lt(f),A=1<<g,z=c[g];z===-1?((A&a)===0||(A&s)!==0)&&(c[g]=ne(A,n)):z<=n&&(t.expiredLanes|=A),f&=~A}if(n=Xe,a=ve,a=ct(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ne(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Gt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Ne(s),Or(a)){case 2:case 8:a=xt;break;case 32:a=ut;break;case 268435456:a=Ct;break;default:a=ut}return s=wg.bind(null,t),a=ye(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Ne(s),t.callbackPriority=2,t.callbackNode=null,2}function wg(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Gl()&&t.callbackNode!==a)return null;var s=ve;return s=ct(t,t===Xe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(ug(t,s,n),Cg(t,y()),t.callbackNode!=null&&t.callbackNode===a?wg.bind(null,t):null)}function Dg(t,n){if(Gl())return null;ug(t,n,!0)}function yx(){Ox(function(){(Le&6)!==0?ye(pt,Mx):Rg()})}function Ef(){if(Ha===0){var t=jr;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Ha=t}return Ha}function Ug(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Qo(""+t)}function Lg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Ex(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Ug((c[dn]||null).action),g=s.submitter;g&&(n=(n=g[dn]||null)?Ug(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var A=new el("action","action",null,s,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ha!==0){var z=g?Lg(c,g):new FormData(c);Vu(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(A.preventDefault(),z=g?Lg(c,g):new FormData(c),Vu(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var bf=0;bf<ru.length;bf++){var Tf=ru[bf],bx=Tf.toLowerCase(),Tx=Tf[0].toUpperCase()+Tf.slice(1);_i(bx,"on"+Tx)}_i(cp,"onAnimationEnd"),_i(up,"onAnimationIteration"),_i(fp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(Gv,"onTransitionRun"),_i(Vv,"onTransitionStart"),_i(Xv,"onTransitionCancel"),_i(dp,"onTransitionEnd"),wt("onMouseEnter",["mouseout","mouseover"]),wt("onMouseLeave",["mouseout","mouseover"]),wt("onPointerEnter",["pointerout","pointerover"]),wt("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ax=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Ng(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var A=s[g],z=A.instance,J=A.currentTarget;if(A=A.listener,z!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=J;try{f(c)}catch(ft){al(ft)}c.currentTarget=null,f=z}else for(g=0;g<s.length;g++){if(A=s[g],z=A.instance,J=A.currentTarget,A=A.listener,z!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=J;try{f(c)}catch(ft){al(ft)}c.currentTarget=null,f=z}}}}function _e(t,n){var a=n[Ma];a===void 0&&(a=n[Ma]=new Set);var s=t+"__bubble";a.has(s)||(Og(n,t,2,!1),a.add(s))}function Af(t,n,a){var s=0;n&&(s|=4),Og(a,t,s,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Rf(t){if(!t[kl]){t[kl]=!0,st.forEach(function(a){a!=="selectionchange"&&(Ax.has(a)||Af(a,!1,t),Af(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[kl]||(n[kl]=!0,Af("selectionchange",!1,n))}}function Og(t,n,a,s){switch(c0(n)){case 2:var c=tS;break;case 8:c=eS;break;default:c=Vf}a=c.bind(null,n,a,t),c=void 0,!qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Cf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var A=s.stateNode.containerInfo;if(A===c)break;if(g===4)for(g=s.return;g!==null;){var z=g.tag;if((z===3||z===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;A!==null;){if(g=ya(A),g===null)return;if(z=g.tag,z===5||z===6||z===26||z===27){s=f=g;continue t}A=A.parentNode}}s=s.return}Ih(function(){var J=f,ft=kc(a),vt=[];t:{var nt=hp.get(t);if(nt!==void 0){var lt=el,Xt=t;switch(t){case"keypress":if($o(a)===0)break t;case"keydown":case"keyup":lt=xv;break;case"focusin":Xt="focus",lt=Kc;break;case"focusout":Xt="blur",lt=Kc;break;case"beforeblur":case"afterblur":lt=Kc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=yv;break;case cp:case up:case fp:lt=uv;break;case dp:lt=bv;break;case"scroll":case"scrollend":lt=rv;break;case"wheel":lt=Av;break;case"copy":case"cut":case"paste":lt=dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=kh;break;case"toggle":case"beforetoggle":lt=Cv}var $t=(n&4)!==0,Ge=!$t&&(t==="scroll"||t==="scrollend"),j=$t?nt!==null?nt+"Capture":null:nt;$t=[];for(var X=J,Q;X!==null;){var mt=X;if(Q=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||Q===null||j===null||(mt=Hs(X,j),mt!=null&&$t.push(So(X,mt,Q))),Ge)break;X=X.return}0<$t.length&&(nt=new lt(nt,Xt,null,a,ft),vt.push({event:nt,listeners:$t}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",lt=t==="mouseout"||t==="pointerout",nt&&a!==Xc&&(Xt=a.relatedTarget||a.fromElement)&&(ya(Xt)||Xt[Vi]))break t;if((lt||nt)&&(nt=ft.window===ft?ft:(nt=ft.ownerDocument)?nt.defaultView||nt.parentWindow:window,lt?(Xt=a.relatedTarget||a.toElement,lt=J,Xt=Xt?ya(Xt):null,Xt!==null&&(Ge=u(Xt),$t=Xt.tag,Xt!==Ge||$t!==5&&$t!==27&&$t!==6)&&(Xt=null)):(lt=null,Xt=J),lt!==Xt)){if($t=Vh,mt="onMouseLeave",j="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&($t=kh,mt="onPointerLeave",j="onPointerEnter",X="pointer"),Ge=lt==null?nt:ir(lt),Q=Xt==null?nt:ir(Xt),nt=new $t(mt,X+"leave",lt,a,ft),nt.target=Ge,nt.relatedTarget=Q,mt=null,ya(ft)===J&&($t=new $t(j,X+"enter",Xt,a,ft),$t.target=Q,$t.relatedTarget=Ge,mt=$t),Ge=mt,lt&&Xt)e:{for($t=Rx,j=lt,X=Xt,Q=0,mt=j;mt;mt=$t(mt))Q++;mt=0;for(var Jt=X;Jt;Jt=$t(Jt))mt++;for(;0<Q-mt;)j=$t(j),Q--;for(;0<mt-Q;)X=$t(X),mt--;for(;Q--;){if(j===X||X!==null&&j===X.alternate){$t=j;break e}j=$t(j),X=$t(X)}$t=null}else $t=null;lt!==null&&Pg(vt,nt,lt,$t,!1),Xt!==null&&Ge!==null&&Pg(vt,Ge,Xt,$t,!0)}}t:{if(nt=J?ir(J):window,lt=nt.nodeName&&nt.nodeName.toLowerCase(),lt==="select"||lt==="input"&&nt.type==="file")var Ce=Jh;else if(Kh(nt))if($h)Ce=zv;else{Ce=Fv;var jt=Pv}else lt=nt.nodeName,!lt||lt.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?J&&Fr(J.elementType)&&(Ce=Jh):Ce=Bv;if(Ce&&(Ce=Ce(t,J))){Qh(vt,Ce,a,ft);break t}jt&&jt(t,nt,J),t==="focusout"&&J&&nt.type==="number"&&J.memoizedProps.value!=null&&mi(nt,"number",nt.value)}switch(jt=J?ir(J):window,t){case"focusin":(Kh(jt)||jt.contentEditable==="true")&&(Hr=jt,nu=J,js=null);break;case"focusout":js=nu=Hr=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,op(vt,a,ft);break;case"selectionchange":if(Hv)break;case"keydown":case"keyup":op(vt,a,ft)}var de;if(Jc)t:{switch(t){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Ir?jh(t,a)&&(xe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(Wh&&a.locale!=="ko"&&(Ir||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Ir&&(de=Hh()):(ba=ft,Yc="value"in ba?ba.value:ba.textContent,Ir=!0)),jt=Wl(J,xe),0<jt.length&&(xe=new Xh(xe,t,null,a,ft),vt.push({event:xe,listeners:jt}),de?xe.data=de:(de=Zh(a),de!==null&&(xe.data=de)))),(de=Dv?Uv(t,a):Lv(t,a))&&(xe=Wl(J,"onBeforeInput"),0<xe.length&&(jt=new Xh("onBeforeInput","beforeinput",null,a,ft),vt.push({event:jt,listeners:xe}),jt.data=de)),Ex(vt,t,J,a,ft)}Ng(vt,n)})}function So(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Wl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Hs(t,a),c!=null&&s.unshift(So(t,c,f)),c=Hs(t,n),c!=null&&s.push(So(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Rx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Pg(t,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var A=a,z=A.alternate,J=A.stateNode;if(A=A.tag,z!==null&&z===s)break;A!==5&&A!==26&&A!==27||J===null||(z=J,c?(J=Hs(a,f),J!=null&&g.unshift(So(a,J,z))):c||(J=Hs(a,f),J!=null&&g.push(So(a,J,z)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Cx=/\r\n?/g,wx=/\u0000|\uFFFD/g;function Fg(t){return(typeof t=="string"?t:""+t).replace(Cx,`
`).replace(wx,"")}function Bg(t,n){return n=Fg(n),Fg(t)===n}function He(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Un(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Un(t,""+s);break;case"className":se(t,"class",s);break;case"tabIndex":se(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":se(t,a,s);break;case"style":Xi(t,s,f);break;case"data":if(n!=="object"){se(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Qo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",c.name,c,null),He(t,n,"formEncType",c.formEncType,c,null),He(t,n,"formMethod",c.formMethod,c,null),He(t,n,"formTarget",c.formTarget,c,null)):(He(t,n,"encType",c.encType,c,null),He(t,n,"method",c.method,c,null),He(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Qo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=ki);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Qo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":_e("beforetoggle",t),_e("toggle",t),ee(t,"popover",s);break;case"xlinkActuate":Vt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Vt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Vt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Vt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Vt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Vt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Vt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Vt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Vt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ee(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=iv.get(a)||a,ee(t,a,s))}}function wf(t,n,a,s,c,f){switch(a){case"style":Xi(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Un(t,s):(typeof s=="number"||typeof s=="bigint")&&Un(t,""+s);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"onClick":s!=null&&(t.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!et.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):ee(t,a,s)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,f,g,a,null)}}c&&He(t,n,"srcSet",a.srcSet,a,null),s&&He(t,n,"src",a.src,a,null);return;case"input":_e("invalid",t);var A=f=g=c=null,z=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":c=ft;break;case"type":g=ft;break;case"checked":z=ft;break;case"defaultChecked":J=ft;break;case"value":f=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:He(t,n,s,ft,a,null)}}Xn(t,f,A,z,J,g,c,!1);return;case"select":_e("invalid",t),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":g=A;break;case"multiple":s=A;default:He(t,n,c,A,a,null)}n=f,a=g,t.multiple=!!s,n!=null?kn(t,!!s,n,!1):a!=null&&kn(t,!!s,a,!0);return;case"textarea":_e("invalid",t),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(A=a[g],A!=null))switch(g){case"value":s=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:He(t,n,g,A,a,null)}an(t,s,c,f);return;case"option":for(z in a)a.hasOwnProperty(z)&&(s=a[z],s!=null)&&(z==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":He(t,n,z,s,a,null));return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(s=0;s<xo.length;s++)_e(xo[s],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,J,s,a,null)}return;default:if(Fr(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&wf(t,n,ft,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&He(t,n,A,s,a,null))}function Dx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,A=null,z=null,J=null,ft=null;for(lt in a){var vt=a[lt];if(a.hasOwnProperty(lt)&&vt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":z=vt;default:s.hasOwnProperty(lt)||He(t,n,lt,null,s,vt)}}for(var nt in s){var lt=s[nt];if(vt=a[nt],s.hasOwnProperty(nt)&&(lt!=null||vt!=null))switch(nt){case"type":f=lt;break;case"name":c=lt;break;case"checked":J=lt;break;case"defaultChecked":ft=lt;break;case"value":g=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==vt&&He(t,n,nt,lt,s,vt)}}Dn(t,g,A,z,J,ft,f,c);return;case"select":lt=g=A=nt=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":lt=z;default:s.hasOwnProperty(f)||He(t,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":nt=f;break;case"defaultValue":A=f;break;case"multiple":g=f;default:f!==z&&He(t,n,c,f,s,z)}n=A,a=g,s=lt,nt!=null?kn(t,!!a,nt,!1):!!s!=!!a&&(n!=null?kn(t,!!a,n,!0):kn(t,!!a,a?[]:"",!1));return;case"textarea":lt=nt=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:He(t,n,A,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":nt=c;break;case"defaultValue":lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&He(t,n,g,c,s,f)}Oe(t,nt,lt);return;case"option":for(var Xt in a)nt=a[Xt],a.hasOwnProperty(Xt)&&nt!=null&&!s.hasOwnProperty(Xt)&&(Xt==="selected"?t.selected=!1:He(t,n,Xt,null,s,nt));for(z in s)nt=s[z],lt=a[z],s.hasOwnProperty(z)&&nt!==lt&&(nt!=null||lt!=null)&&(z==="selected"?t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol":He(t,n,z,nt,s,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)nt=a[$t],a.hasOwnProperty($t)&&nt!=null&&!s.hasOwnProperty($t)&&He(t,n,$t,null,s,nt);for(J in s)if(nt=s[J],lt=a[J],s.hasOwnProperty(J)&&nt!==lt&&(nt!=null||lt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:He(t,n,J,nt,s,lt)}return;default:if(Fr(n)){for(var Ge in a)nt=a[Ge],a.hasOwnProperty(Ge)&&nt!==void 0&&!s.hasOwnProperty(Ge)&&wf(t,n,Ge,void 0,s,nt);for(ft in s)nt=s[ft],lt=a[ft],!s.hasOwnProperty(ft)||nt===lt||nt===void 0&&lt===void 0||wf(t,n,ft,nt,s,lt);return}}for(var j in a)nt=a[j],a.hasOwnProperty(j)&&nt!=null&&!s.hasOwnProperty(j)&&He(t,n,j,null,s,nt);for(vt in s)nt=s[vt],lt=a[vt],!s.hasOwnProperty(vt)||nt===lt||nt==null&&lt==null||He(t,n,vt,nt,s,lt)}function zg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ux(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,A=c.duration;if(f&&A&&zg(g)){for(g=0,A=c.responseEnd,s+=1;s<a.length;s++){var z=a[s],J=z.startTime;if(J>A)break;var ft=z.transferSize,vt=z.initiatorType;ft&&zg(vt)&&(z=z.responseEnd,g+=ft*(z<A?1:(A-J)/(z-J)))}if(--s,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Df=null,Uf=null;function ql(t){return t.nodeType===9?t:t.ownerDocument}function Ig(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Lf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Nf=null;function Lx(){var t=window.event;return t&&t.type==="popstate"?t===Nf?!1:(Nf=t,!0):(Nf=null,!1)}var Gg=typeof setTimeout=="function"?setTimeout:void 0,Nx=typeof clearTimeout=="function"?clearTimeout:void 0,Vg=typeof Promise=="function"?Promise:void 0,Ox=typeof queueMicrotask=="function"?queueMicrotask:typeof Vg<"u"?function(t){return Vg.resolve(null).then(t).catch(Px)}:Gg;function Px(t){setTimeout(function(){throw t})}function Ga(t){return t==="head"}function Xg(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),hs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Mo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,A=f.nodeName;f[nr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Mo(t.ownerDocument.body);a=c}while(a);hs(n)}function kg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Of(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Of(a),Is(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Fx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[nr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function Bx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function Wg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function Pf(t){return t.data==="$?"||t.data==="$~"}function Ff(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function zx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Bf=null;function qg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return li(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Yg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function jg(t,n,a){switch(n=ql(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Mo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Is(t)}var ci=new Map,Zg=new Set;function Yl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var sa=F.d;F.d={f:Ix,r:Hx,D:Gx,C:Vx,L:Xx,m:kx,X:qx,S:Wx,M:Yx};function Ix(){var t=sa.f(),n=zl();return t||n}function Hx(t){var n=Ea(t);n!==null&&n.tag===5&&n.type==="form"?dm(n):sa.r(t)}var us=typeof document>"u"?null:document;function Kg(t,n,a){var s=us;if(s&&typeof n=="string"&&n){var c=ae(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Zg.has(c)||(Zg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),yn(n,"link",t),k(n),s.head.appendChild(n)))}}function Gx(t){sa.D(t),Kg("dns-prefetch",t,null)}function Vx(t,n){sa.C(t,n),Kg("preconnect",t,n)}function Xx(t,n,a){sa.L(t,n,a);var s=us;if(s&&t&&n){var c='link[rel="preload"][as="'+ae(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ae(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ae(a.imageSizes)+'"]')):c+='[href="'+ae(t)+'"]';var f=c;switch(n){case"style":f=fs(t);break;case"script":f=ds(t)}ci.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ci.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(yo(f))||n==="script"&&s.querySelector(Eo(f))||(n=s.createElement("link"),yn(n,"link",t),k(n),s.head.appendChild(n)))}}function kx(t,n){sa.m(t,n);var a=us;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ae(s)+'"][href="'+ae(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ds(t)}if(!ci.has(f)&&(t=S({rel:"modulepreload",href:t},n),ci.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}s=a.createElement("link"),yn(s,"link",t),k(s),a.head.appendChild(s)}}}function Wx(t,n,a){sa.S(t,n,a);var s=us;if(s&&t){var c=R(s).hoistableStyles,f=fs(t);n=n||"default";var g=c.get(f);if(!g){var A={loading:0,preload:null};if(g=s.querySelector(yo(f)))A.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ci.get(f))&&zf(t,a);var z=g=s.createElement("link");k(z),yn(z,"link",t),z._p=new Promise(function(J,ft){z.onload=J,z.onerror=ft}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,jl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:A},c.set(f,g)}}}function qx(t,n){sa.X(t,n);var a=us;if(a&&t){var s=R(a).hoistableScripts,c=ds(t),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(t=S({src:t,async:!0},n),(n=ci.get(c))&&If(t,n),f=a.createElement("script"),k(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Yx(t,n){sa.M(t,n);var a=us;if(a&&t){var s=R(a).hoistableScripts,c=ds(t),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(t=S({src:t,async:!0,type:"module"},n),(n=ci.get(c))&&If(t,n),f=a.createElement("script"),k(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Qg(t,n,a,s){var c=(c=tt.current)?Yl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=fs(a.href),a=R(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=fs(a.href);var f=R(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(yo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(t,a),f||jx(c,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ds(a),a=R(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function fs(t){return'href="'+ae(t)+'"'}function yo(t){return'link[rel="stylesheet"]['+t+"]"}function Jg(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function jx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),yn(n,"link",a),k(n),t.head.appendChild(n))}function ds(t){return'[src="'+ae(t)+'"]'}function Eo(t){return"script[async]"+t}function $g(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ae(a.href)+'"]');if(s)return n.instance=s,k(s),s;var c=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),k(s),yn(s,"style",c),jl(s,a.precedence,t),n.instance=s;case"stylesheet":c=fs(a.href);var f=t.querySelector(yo(c));if(f)return n.state.loading|=4,n.instance=f,k(f),f;s=Jg(a),(c=ci.get(c))&&zf(s,c),f=(t.ownerDocument||t).createElement("link"),k(f);var g=f;return g._p=new Promise(function(A,z){g.onload=A,g.onerror=z}),yn(f,"link",s),n.state.loading|=4,jl(f,a.precedence,t),n.instance=f;case"script":return f=ds(a.src),(c=t.querySelector(Eo(f)))?(n.instance=c,k(c),c):(s=a,(c=ci.get(f))&&(s=S({},a),If(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),k(c),yn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,jl(s,a.precedence,t));return n.instance}function jl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var A=s[g];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function If(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Zl=null;function t0(t,n,a){if(Zl===null){var s=new Map,c=Zl=new Map;c.set(a,s)}else c=Zl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[nr]||f[nn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var A=s.get(g);A?A.push(f):s.set(g,[f])}}return s}function e0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Zx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function n0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Kx(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=fs(s.href),f=n.querySelector(yo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Kl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,k(f);return}f=n.ownerDocument||n,s=Jg(s),(c=ci.get(c))&&zf(s,c),f=f.createElement("link"),k(f);var g=f;g._p=new Promise(function(A,z){g.onload=A,g.onerror=z}),yn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Kl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Hf=0;function Qx(t,n){return t.stylesheets&&t.count===0&&Jl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Jl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Hf===0&&(Hf=62500*Ux());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Jl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Hf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ql=null;function Jl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ql=new Map,n.forEach(Jx,t),Ql=null,Kl.call(t))}function Jx(t,n){if(!(n.state.loading&4)){var a=Ql.get(t);if(a)var s=a.get(null);else{a=new Map,Ql.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=Kl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var bo={$$typeof:P,Provider:null,Consumer:null,_currentValue:rt,_currentValue2:rt,_threadCount:0};function $x(t,n,a,s,c,f,g,A,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function i0(t,n,a,s,c,f,g,A,z,J,ft,vt){return t=new $x(t,n,a,g,z,J,ft,vt,A),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=vu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},yu(f),t}function a0(t){return t?(t=Xr,t):Xr}function r0(t,n,a,s,c,f){c=a0(c),s.context===null?s.context=c:s.pendingContext=c,s=Da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ua(t,s,n),a!==null&&(Hn(a,t,n),eo(a,t,n))}function s0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Gf(t,n){s0(t,n),(t=t.alternate)&&s0(t,n)}function o0(t){if(t.tag===13||t.tag===31){var n=or(t,67108864);n!==null&&Hn(n,t,67108864),Gf(t,67108864)}}function l0(t){if(t.tag===13||t.tag===31){var n=Qn();n=Nr(n);var a=or(t,n);a!==null&&Hn(a,t,n),Gf(t,n)}}var $l=!0;function tS(t,n,a,s){var c=w.T;w.T=null;var f=F.p;try{F.p=2,Vf(t,n,a,s)}finally{F.p=f,w.T=c}}function eS(t,n,a,s){var c=w.T;w.T=null;var f=F.p;try{F.p=8,Vf(t,n,a,s)}finally{F.p=f,w.T=c}}function Vf(t,n,a,s){if($l){var c=Xf(s);if(c===null)Cf(t,n,s,tc,a),u0(t,s);else if(iS(c,t,n,a,s))s.stopPropagation();else if(u0(t,s),n&4&&-1<nS.indexOf(t)){for(;c!==null;){var f=Ea(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Et(f.pendingLanes);if(g!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var z=1<<31-Lt(g);A.entanglements[1]|=z,g&=~z}Ui(f),(Le&6)===0&&(Fl=y()+500,vo(0))}}break;case 31:case 13:A=or(f,2),A!==null&&Hn(A,f,2),zl(),Gf(f,2)}if(f=Xf(s),f===null&&Cf(t,n,s,tc,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Cf(t,n,s,null,a)}}function Xf(t){return t=kc(t),kf(t)}var tc=null;function kf(t){if(tc=null,t=ya(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return tc=t,null}function c0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case pt:return 2;case xt:return 8;case ut:case Wt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var Wf=!1,Va=null,Xa=null,ka=null,To=new Map,Ao=new Map,Wa=[],nS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function u0(t,n){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Ro(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ea(n),n!==null&&o0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function iS(t,n,a,s,c){switch(n){case"focusin":return Va=Ro(Va,t,n,a,s,c),!0;case"dragenter":return Xa=Ro(Xa,t,n,a,s,c),!0;case"mouseover":return ka=Ro(ka,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return To.set(f,Ro(To.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Ao.set(f,Ro(Ao.get(f)||null,t,n,a,s,c)),!0}return!1}function f0(t){var n=ya(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Pr(t.priority,function(){l0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Pr(t.priority,function(){l0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ec(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Xf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Xc=s,a.target.dispatchEvent(s),Xc=null}else return n=Ea(a),n!==null&&o0(n),t.blockedOn=a,!1;n.shift()}return!0}function d0(t,n,a){ec(t)&&a.delete(n)}function aS(){Wf=!1,Va!==null&&ec(Va)&&(Va=null),Xa!==null&&ec(Xa)&&(Xa=null),ka!==null&&ec(ka)&&(ka=null),To.forEach(d0),Ao.forEach(d0)}function nc(t,n){t.blockedOn===n&&(t.blockedOn=null,Wf||(Wf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,aS)))}var ic=null;function h0(t){ic!==t&&(ic=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ic===t&&(ic=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(kf(s||a)===null)continue;break}var f=Ea(a);f!==null&&(t.splice(n,3),n-=3,Vu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function hs(t){function n(z){return nc(z,t)}Va!==null&&nc(Va,t),Xa!==null&&nc(Xa,t),ka!==null&&nc(ka,t),To.forEach(n),Ao.forEach(n);for(var a=0;a<Wa.length;a++){var s=Wa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)f0(a),a.blockedOn===null&&Wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[dn]||null;if(typeof f=="function")g||h0(a);else if(g){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[dn]||null)A=g.formAction;else if(kf(c)!==null)continue}else A=g.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),h0(a)}}}function p0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function qf(t){this._internalRoot=t}ac.prototype.render=qf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Qn();r0(a,s,t,n,null,null)},ac.prototype.unmount=qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;r0(t.current,2,null,t,null,null),zl(),n[Vi]=null}};function ac(t){this._internalRoot=t}ac.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ri();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,t),a===0&&f0(t)}};var m0=e.version;if(m0!=="19.2.4")throw Error(r(527,m0,"19.2.4"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var rS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{bt=rc.inject(rS),yt=rc}catch{}}return wo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=ym,f=Em,g=bm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=i0(t,1,!1,null,null,a,s,null,c,f,g,p0),t[Vi]=n.current,Rf(t),new qf(n)},wo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=ym,g=Em,A=bm,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=i0(t,1,!0,n,a??null,s,c,z,f,g,A,p0),n.context=a0(null),a=n.current,s=Qn(),s=Nr(s),c=Da(s),c.callback=null,Ua(a,c,s),a=s,n.current.lanes=a,Cn(n,a),Ui(n),t[Vi]=n.current,Rf(t),new ac(n)},wo.version="19.2.4",wo}var T0;function mS(){if(T0)return Zf.exports;T0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Zf.exports=pS(),Zf.exports}var gS=mS();const Ah="183",_S=0,A0=1,vS=2,wc=1,xS=2,zo=3,er=0,Vn=1,da=2,pa=0,Cs=1,R0=2,C0=3,w0=4,SS=5,Rr=100,MS=101,yS=102,ES=103,bS=104,TS=200,AS=201,RS=202,CS=203,Nd=204,Od=205,wS=206,DS=207,US=208,LS=209,NS=210,OS=211,PS=212,FS=213,BS=214,Pd=0,Fd=1,Bd=2,Ds=3,zd=4,Id=5,Hd=6,Gd=7,E_=0,zS=1,IS=2,Bi=0,b_=1,T_=2,A_=3,R_=4,C_=5,w_=6,D_=7,U_=300,Ur=301,Us=302,$f=303,td=304,Ic=306,Vd=1e3,ha=1001,Xd=1002,En=1003,HS=1004,sc=1005,Rn=1006,ed=1007,wr=1008,di=1009,L_=1010,N_=1011,Ho=1012,Rh=1013,Hi=1014,Pi=1015,_a=1016,Ch=1017,wh=1018,Go=1020,O_=35902,P_=35899,F_=1021,B_=1022,Ti=1023,va=1026,Dr=1027,z_=1028,Dh=1029,Ls=1030,Uh=1031,Lh=1033,Dc=33776,Uc=33777,Lc=33778,Nc=33779,kd=35840,Wd=35841,qd=35842,Yd=35843,jd=36196,Zd=37492,Kd=37496,Qd=37488,Jd=37489,$d=37490,th=37491,eh=37808,nh=37809,ih=37810,ah=37811,rh=37812,sh=37813,oh=37814,lh=37815,ch=37816,uh=37817,fh=37818,dh=37819,hh=37820,ph=37821,mh=36492,gh=36494,_h=36495,vh=36283,xh=36284,Sh=36285,Mh=36286,GS=3200,VS=0,XS=1,$a="",fi="srgb",Ns="srgb-linear",Pc="linear",ze="srgb",ps=7680,D0=519,kS=512,WS=513,qS=514,Nh=515,YS=516,jS=517,Oh=518,ZS=519,U0=35044,L0="300 es",Fi=2e3,Fc=2001;function KS(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Bc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function QS(){const o=Bc("canvas");return o.style.display="block",o}const N0={};function O0(...o){const e="THREE."+o.shift();console.log(e,...o)}function I_(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function re(...o){o=I_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function De(...o){o=I_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function zc(...o){const e=o.join(" ");e in N0||(N0[e]=!0,re(...o))}function JS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const $S={[Pd]:Fd,[Bd]:Hd,[zd]:Gd,[Ds]:Id,[Fd]:Pd,[Hd]:Bd,[Gd]:zd,[Id]:Ds};class Ps{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nd=Math.PI/180,yh=180/Math.PI;function Xo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tn[o&255]+Tn[o>>8&255]+Tn[o>>16&255]+Tn[o>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[i&63|128]+Tn[i>>8&255]+"-"+Tn[i>>16&255]+Tn[i>>24&255]+Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]).toLowerCase()}function Me(o,e,i){return Math.max(e,Math.min(i,o))}function tM(o,e){return(o%e+e)%e}function id(o,e,i){return(1-i)*o+i*e}function Do(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(e=0,i=0){Ee.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,p){let m=r[l+0],h=r[l+1],x=r[l+2],S=r[l+3],_=u[d+0],E=u[d+1],b=u[d+2],C=u[d+3];if(S!==C||m!==_||h!==E||x!==b){let M=m*_+h*E+x*b+S*C;M<0&&(_=-_,E=-E,b=-b,C=-C,M=-M);let v=1-p;if(M<.9995){const D=Math.acos(M),P=Math.sin(D);v=Math.sin(v*D)/P,p=Math.sin(p*D)/P,m=m*v+_*p,h=h*v+E*p,x=x*v+b*p,S=S*v+C*p}else{m=m*v+_*p,h=h*v+E*p,x=x*v+b*p,S=S*v+C*p;const D=1/Math.sqrt(m*m+h*h+x*x+S*S);m*=D,h*=D,x*=D,S*=D}}e[i]=m,e[i+1]=h,e[i+2]=x,e[i+3]=S}static multiplyQuaternionsFlat(e,i,r,l,u,d){const p=r[l],m=r[l+1],h=r[l+2],x=r[l+3],S=u[d],_=u[d+1],E=u[d+2],b=u[d+3];return e[i]=p*b+x*S+m*E-h*_,e[i+1]=m*b+x*_+h*S-p*E,e[i+2]=h*b+x*E+p*_-m*S,e[i+3]=x*b-p*S-m*_-h*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(r/2),x=p(l/2),S=p(u/2),_=m(r/2),E=m(l/2),b=m(u/2);switch(d){case"XYZ":this._x=_*x*S+h*E*b,this._y=h*E*S-_*x*b,this._z=h*x*b+_*E*S,this._w=h*x*S-_*E*b;break;case"YXZ":this._x=_*x*S+h*E*b,this._y=h*E*S-_*x*b,this._z=h*x*b-_*E*S,this._w=h*x*S+_*E*b;break;case"ZXY":this._x=_*x*S-h*E*b,this._y=h*E*S+_*x*b,this._z=h*x*b+_*E*S,this._w=h*x*S-_*E*b;break;case"ZYX":this._x=_*x*S-h*E*b,this._y=h*E*S+_*x*b,this._z=h*x*b-_*E*S,this._w=h*x*S+_*E*b;break;case"YZX":this._x=_*x*S+h*E*b,this._y=h*E*S+_*x*b,this._z=h*x*b-_*E*S,this._w=h*x*S-_*E*b;break;case"XZY":this._x=_*x*S-h*E*b,this._y=h*E*S-_*x*b,this._z=h*x*b+_*E*S,this._w=h*x*S+_*E*b;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],p=i[5],m=i[9],h=i[2],x=i[6],S=i[10],_=r+p+S;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(x-m)*E,this._y=(u-h)*E,this._z=(d-l)*E}else if(r>p&&r>S){const E=2*Math.sqrt(1+r-p-S);this._w=(x-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(u+h)/E}else if(p>S){const E=2*Math.sqrt(1+p-r-S);this._w=(u-h)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+x)/E}else{const E=2*Math.sqrt(1+S-r-p);this._w=(d-l)/E,this._x=(u+h)/E,this._y=(m+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Me(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,p=i._x,m=i._y,h=i._z,x=i._w;return this._x=r*x+d*p+l*h-u*m,this._y=l*x+d*m+u*p-r*h,this._z=u*x+d*h+r*m-l*p,this._w=d*x-r*p-l*m-u*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,u=e._z,d=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,u=-u,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);m=Math.sin(m*h)/x,i=Math.sin(i*h)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(e=0,i=0,r=0){it.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(P0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(P0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*r),x=2*(p*i-u*l),S=2*(u*r-d*i);return this.x=i+m*h+d*S-p*x,this.y=r+m*x+p*h-u*S,this.z=l+m*S+u*x-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-u*p,this.y=u*d-r*m,this.z=r*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ad.copy(this).projectOnVector(e),this.sub(ad)}reflect(e){return this.sub(ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ad=new it,P0=new Fs;class he{constructor(e,i,r,l,u,d,p,m,h){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,p,m,h)}set(e,i,r,l,u,d,p,m,h){const x=this.elements;return x[0]=e,x[1]=l,x[2]=p,x[3]=i,x[4]=u,x[5]=m,x[6]=r,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],x=r[4],S=r[7],_=r[2],E=r[5],b=r[8],C=l[0],M=l[3],v=l[6],D=l[1],P=l[4],N=l[7],V=l[2],I=l[5],B=l[8];return u[0]=d*C+p*D+m*V,u[3]=d*M+p*P+m*I,u[6]=d*v+p*N+m*B,u[1]=h*C+x*D+S*V,u[4]=h*M+x*P+S*I,u[7]=h*v+x*N+S*B,u[2]=_*C+E*D+b*V,u[5]=_*M+E*P+b*I,u[8]=_*v+E*N+b*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8];return i*d*x-i*p*h-r*u*x+r*p*m+l*u*h-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8],S=x*d-p*h,_=p*m-x*u,E=h*u-d*m,b=i*S+r*_+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=S*C,e[1]=(l*h-x*r)*C,e[2]=(p*r-l*d)*C,e[3]=_*C,e[4]=(x*i-l*m)*C,e[5]=(l*u-p*i)*C,e[6]=E*C,e[7]=(r*m-h*i)*C,e[8]=(d*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,p){const m=Math.cos(u),h=Math.sin(u);return this.set(r*m,r*h,-r*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(rd.makeScale(e,i)),this}rotate(e){return this.premultiply(rd.makeRotation(-e)),this}translate(e,i){return this.premultiply(rd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rd=new he,F0=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),B0=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eM(){const o={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===ze&&(l.r=ma(l.r),l.g=ma(l.g),l.b=ma(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===ze&&(l.r=ws(l.r),l.g=ws(l.g),l.b=ws(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===$a?Pc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return zc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return zc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ns]:{primaries:e,whitePoint:r,transfer:Pc,toXYZ:F0,fromXYZ:B0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:ze,toXYZ:F0,fromXYZ:B0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),o}const Ae=eM();function ma(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ws(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ms;class nM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ms===void 0&&(ms=Bc("canvas")),ms.width=e.width,ms.height=e.height;const l=ms.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ms}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Bc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ma(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ma(i[r]/255)*255):i[r]=ma(i[r]);return{data:i,width:e.width,height:e.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iM=0;class Ph{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?u.push(sd(l[d].image)):u.push(sd(l[d]))}else u=sd(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function sd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?nM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let aM=0;const od=new it;class On extends Ps{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=ha,l=ha,u=Rn,d=wr,p=Ti,m=di,h=On.DEFAULT_ANISOTROPY,x=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Xo(),this.name="",this.source=new Ph(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vd:e.x=e.x-Math.floor(e.x);break;case ha:e.x=e.x<0?0:1;break;case Xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vd:e.y=e.y-Math.floor(e.y);break;case ha:e.y=e.y<0?0:1;break;case Xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=U_;On.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,r=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,h=m[0],x=m[4],S=m[8],_=m[1],E=m[5],b=m[9],C=m[2],M=m[6],v=m[10];if(Math.abs(x-_)<.01&&Math.abs(S-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(x+_)<.1&&Math.abs(S+C)<.1&&Math.abs(b+M)<.1&&Math.abs(h+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(h+1)/2,N=(E+1)/2,V=(v+1)/2,I=(x+_)/4,B=(S+C)/4,T=(b+M)/4;return P>N&&P>V?P<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(P),l=I/r,u=B/r):N>V?N<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),r=I/l,u=T/l):V<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(V),r=B/u,l=T/u),this.set(r,l,u,i),this}let D=Math.sqrt((M-b)*(M-b)+(S-C)*(S-C)+(_-x)*(_-x));return Math.abs(D)<.001&&(D=1),this.x=(M-b)/D,this.y=(S-C)/D,this.z=(_-x)/D,this.w=Math.acos((h+E+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this.w=Me(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this.w=Me(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rM extends Ps{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},u=new On(l),d=r.count;for(let p=0;p<d;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Ph(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends rM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class H_ extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=En,this.minFilter=En,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sM extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=En,this.minFilter=En,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn{constructor(e,i,r,l,u,d,p,m,h,x,S,_,E,b,C,M){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,p,m,h,x,S,_,E,b,C,M)}set(e,i,r,l,u,d,p,m,h,x,S,_,E,b,C,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=d,v[9]=p,v[13]=m,v[2]=h,v[6]=x,v[10]=S,v[14]=_,v[3]=E,v[7]=b,v[11]=C,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/gs.setFromMatrixColumn(e,0).length(),u=1/gs.setFromMatrixColumn(e,1).length(),d=1/gs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),x=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const _=d*x,E=d*S,b=p*x,C=p*S;i[0]=m*x,i[4]=-m*S,i[8]=h,i[1]=E+b*h,i[5]=_-C*h,i[9]=-p*m,i[2]=C-_*h,i[6]=b+E*h,i[10]=d*m}else if(e.order==="YXZ"){const _=m*x,E=m*S,b=h*x,C=h*S;i[0]=_+C*p,i[4]=b*p-E,i[8]=d*h,i[1]=d*S,i[5]=d*x,i[9]=-p,i[2]=E*p-b,i[6]=C+_*p,i[10]=d*m}else if(e.order==="ZXY"){const _=m*x,E=m*S,b=h*x,C=h*S;i[0]=_-C*p,i[4]=-d*S,i[8]=b+E*p,i[1]=E+b*p,i[5]=d*x,i[9]=C-_*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const _=d*x,E=d*S,b=p*x,C=p*S;i[0]=m*x,i[4]=b*h-E,i[8]=_*h+C,i[1]=m*S,i[5]=C*h+_,i[9]=E*h-b,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const _=d*m,E=d*h,b=p*m,C=p*h;i[0]=m*x,i[4]=C-_*S,i[8]=b*S+E,i[1]=S,i[5]=d*x,i[9]=-p*x,i[2]=-h*x,i[6]=E*S+b,i[10]=_-C*S}else if(e.order==="XZY"){const _=d*m,E=d*h,b=p*m,C=p*h;i[0]=m*x,i[4]=-S,i[8]=h*x,i[1]=_*S+C,i[5]=d*x,i[9]=E*S-b,i[2]=b*S-E,i[6]=p*x,i[10]=C*S+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oM,e,lM)}lookAt(e,i,r){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ya.crossVectors(r,Jn),Ya.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ya.crossVectors(r,Jn)),Ya.normalize(),oc.crossVectors(Jn,Ya),l[0]=Ya.x,l[4]=oc.x,l[8]=Jn.x,l[1]=Ya.y,l[5]=oc.y,l[9]=Jn.y,l[2]=Ya.z,l[6]=oc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],x=r[1],S=r[5],_=r[9],E=r[13],b=r[2],C=r[6],M=r[10],v=r[14],D=r[3],P=r[7],N=r[11],V=r[15],I=l[0],B=l[4],T=l[8],U=l[12],ht=l[1],H=l[5],$=l[9],at=l[13],ot=l[2],Z=l[6],w=l[10],F=l[14],rt=l[3],dt=l[7],St=l[11],O=l[15];return u[0]=d*I+p*ht+m*ot+h*rt,u[4]=d*B+p*H+m*Z+h*dt,u[8]=d*T+p*$+m*w+h*St,u[12]=d*U+p*at+m*F+h*O,u[1]=x*I+S*ht+_*ot+E*rt,u[5]=x*B+S*H+_*Z+E*dt,u[9]=x*T+S*$+_*w+E*St,u[13]=x*U+S*at+_*F+E*O,u[2]=b*I+C*ht+M*ot+v*rt,u[6]=b*B+C*H+M*Z+v*dt,u[10]=b*T+C*$+M*w+v*St,u[14]=b*U+C*at+M*F+v*O,u[3]=D*I+P*ht+N*ot+V*rt,u[7]=D*B+P*H+N*Z+V*dt,u[11]=D*T+P*$+N*w+V*St,u[15]=D*U+P*at+N*F+V*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],p=e[5],m=e[9],h=e[13],x=e[2],S=e[6],_=e[10],E=e[14],b=e[3],C=e[7],M=e[11],v=e[15],D=m*E-h*_,P=p*E-h*S,N=p*_-m*S,V=d*E-h*x,I=d*_-m*x,B=d*S-p*x;return i*(C*D-M*P+v*N)-r*(b*D-M*V+v*I)+l*(b*P-C*V+v*B)-u*(b*N-C*I+M*B)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8],S=e[9],_=e[10],E=e[11],b=e[12],C=e[13],M=e[14],v=e[15],D=i*p-r*d,P=i*m-l*d,N=i*h-u*d,V=r*m-l*p,I=r*h-u*p,B=l*h-u*m,T=x*C-S*b,U=x*M-_*b,ht=x*v-E*b,H=S*M-_*C,$=S*v-E*C,at=_*v-E*M,ot=D*at-P*$+N*H+V*ht-I*U+B*T;if(ot===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/ot;return e[0]=(p*at-m*$+h*H)*Z,e[1]=(l*$-r*at-u*H)*Z,e[2]=(C*B-M*I+v*V)*Z,e[3]=(_*I-S*B-E*V)*Z,e[4]=(m*ht-d*at-h*U)*Z,e[5]=(i*at-l*ht+u*U)*Z,e[6]=(M*N-b*B-v*P)*Z,e[7]=(x*B-_*N+E*P)*Z,e[8]=(d*$-p*ht+h*T)*Z,e[9]=(r*ht-i*$-u*T)*Z,e[10]=(b*I-C*N+v*D)*Z,e[11]=(S*N-x*I-E*D)*Z,e[12]=(p*U-d*H-m*T)*Z,e[13]=(i*H-r*U+l*T)*Z,e[14]=(C*P-b*V-M*D)*Z,e[15]=(x*V-S*P+_*D)*Z,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,p=e.y,m=e.z,h=u*d,x=u*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,x*p+r,x*m-l*d,0,h*m-l*p,x*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,p=i._z,m=i._w,h=u+u,x=d+d,S=p+p,_=u*h,E=u*x,b=u*S,C=d*x,M=d*S,v=p*S,D=m*h,P=m*x,N=m*S,V=r.x,I=r.y,B=r.z;return l[0]=(1-(C+v))*V,l[1]=(E+N)*V,l[2]=(b-P)*V,l[3]=0,l[4]=(E-N)*I,l[5]=(1-(_+v))*I,l[6]=(M+D)*I,l[7]=0,l[8]=(b+P)*B,l[9]=(M-D)*B,l[10]=(1-(_+C))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinant();if(u===0)return r.set(1,1,1),i.identity(),this;let d=gs.set(l[0],l[1],l[2]).length();const p=gs.set(l[4],l[5],l[6]).length(),m=gs.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Si.copy(this);const h=1/d,x=1/p,S=1/m;return Si.elements[0]*=h,Si.elements[1]*=h,Si.elements[2]*=h,Si.elements[4]*=x,Si.elements[5]*=x,Si.elements[6]*=x,Si.elements[8]*=S,Si.elements[9]*=S,Si.elements[10]*=S,i.setFromRotationMatrix(Si),r.x=d,r.y=p,r.z=m,this}makePerspective(e,i,r,l,u,d,p=Fi,m=!1){const h=this.elements,x=2*u/(i-e),S=2*u/(r-l),_=(i+e)/(i-e),E=(r+l)/(r-l);let b,C;if(m)b=u/(d-u),C=d*u/(d-u);else if(p===Fi)b=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(p===Fc)b=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=S,h[9]=E,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,u,d,p=Fi,m=!1){const h=this.elements,x=2/(i-e),S=2/(r-l),_=-(i+e)/(i-e),E=-(r+l)/(r-l);let b,C;if(m)b=1/(d-u),C=d/(d-u);else if(p===Fi)b=-2/(d-u),C=-(d+u)/(d-u);else if(p===Fc)b=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=S,h[9]=0,h[13]=E,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const gs=new it,Si=new fn,oM=new it(0,0,0),lM=new it(1,1,1),Ya=new it,oc=new it,Jn=new it,z0=new fn,I0=new Fs;class xa{constructor(e=0,i=0,r=0,l=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],p=l[8],m=l[1],h=l[5],x=l[9],S=l[2],_=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(Me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,E),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Me(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-x,E),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return z0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(z0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return I0.setFromEuler(this),this.setFromQuaternion(I0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class G_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cM=0;const H0=new it,_s=new Fs,oa=new fn,lc=new it,Uo=new it,uM=new it,fM=new Fs,G0=new it(1,0,0),V0=new it(0,1,0),X0=new it(0,0,1),k0={type:"added"},dM={type:"removed"},vs={type:"childadded",child:null},ld={type:"childremoved",child:null};class ei extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const e=new it,i=new xa,r=new Fs,l=new it(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new he}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new G_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return _s.setFromAxisAngle(e,i),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,i){return _s.setFromAxisAngle(e,i),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(G0,e)}rotateY(e){return this.rotateOnAxis(V0,e)}rotateZ(e){return this.rotateOnAxis(X0,e)}translateOnAxis(e,i){return H0.copy(e).applyQuaternion(this.quaternion),this.position.add(H0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(G0,e)}translateY(e){return this.translateOnAxis(V0,e)}translateZ(e){return this.translateOnAxis(X0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?lc.copy(e):lc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(Uo,lc,this.up):oa.lookAt(lc,Uo,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),_s.setFromRotationMatrix(oa),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(k0),vs.child=e,this.dispatchEvent(vs),vs.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(dM),ld.child=e,this.dispatchEvent(ld),ld.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oa.multiply(e.parent.matrixWorld)),e.applyMatrix4(oa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(k0),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,uM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,fM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const S=m[h];u(e.shapes,S)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(u(e.materials,this.material[m]));l.material=p}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(u(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),x=d(e.images),S=d(e.shapes),_=d(e.skeletons),E=d(e.animations),b=d(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),x.length>0&&(r.images=x),S.length>0&&(r.shapes=S),_.length>0&&(r.skeletons=_),E.length>0&&(r.animations=E),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(p){const m=[];for(const h in p){const x=p[h];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ei.DEFAULT_UP=new it(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cc extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hM={type:"move"};class cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),v=this._getHandJoint(h,C);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const x=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],_=x.position.distanceTo(S.position),E=.02,b=.005;h.inputState.pinching&&_>E+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=E-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(hM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new cc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const V_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},uc={h:0,s:0,l:0};function ud(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ve{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ae.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ae.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ae.workingColorSpace){if(e=tM(e,1),i=Me(i,0,1),r=Me(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=ud(d,u,e+1/3),this.g=ud(d,u,e),this.b=ud(d,u,e-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(e,i=fi){function r(u){u!==void 0&&parseFloat(u)<1&&re("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:re("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const r=V_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Ae.workingToColorSpace(An.copy(this),e),Math.round(Me(An.r*255,0,255))*65536+Math.round(Me(An.g*255,0,255))*256+Math.round(Me(An.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ae.workingColorSpace){Ae.workingToColorSpace(An.copy(this),i);const r=An.r,l=An.g,u=An.b,d=Math.max(r,l,u),p=Math.min(r,l,u);let m,h;const x=(p+d)/2;if(p===d)m=0,h=0;else{const S=d-p;switch(h=x<=.5?S/(d+p):S/(2-d-p),d){case r:m=(l-u)/S+(l<u?6:0);break;case l:m=(u-r)/S+2;break;case u:m=(r-l)/S+4;break}m/=6}return e.h=m,e.s=h,e.l=x,e}getRGB(e,i=Ae.workingColorSpace){return Ae.workingToColorSpace(An.copy(this),i),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=fi){Ae.workingToColorSpace(An.copy(this),e);const i=An.r,r=An.g,l=An.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(ja),this.setHSL(ja.h+e,ja.s+i,ja.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ja),e.getHSL(uc);const r=id(ja.h,uc.h,i),l=id(ja.s,uc.s,i),u=id(ja.l,uc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Ve;Ve.NAMES=V_;class pM extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xa,this.environmentIntensity=1,this.environmentRotation=new xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Mi=new it,la=new it,fd=new it,ca=new it,xs=new it,Ss=new it,W0=new it,dd=new it,hd=new it,pd=new it,md=new en,gd=new en,_d=new en;class bi{constructor(e=new it,i=new it,r=new it){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Mi.subVectors(e,i),l.cross(Mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Mi.subVectors(l,i),la.subVectors(r,i),fd.subVectors(e,i);const d=Mi.dot(Mi),p=Mi.dot(la),m=Mi.dot(fd),h=la.dot(la),x=la.dot(fd),S=d*h-p*p;if(S===0)return u.set(0,0,0),null;const _=1/S,E=(h*m-p*x)*_,b=(d*x-p*m)*_;return u.set(1-E-b,b,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ca)===null?!1:ca.x>=0&&ca.y>=0&&ca.x+ca.y<=1}static getInterpolation(e,i,r,l,u,d,p,m){return this.getBarycoord(e,i,r,l,ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ca.x),m.addScaledVector(d,ca.y),m.addScaledVector(p,ca.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return md.setScalar(0),gd.setScalar(0),_d.setScalar(0),md.fromBufferAttribute(e,i),gd.fromBufferAttribute(e,r),_d.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(md,u.x),d.addScaledVector(gd,u.y),d.addScaledVector(_d,u.z),d}static isFrontFacing(e,i,r,l){return Mi.subVectors(r,i),la.subVectors(e,i),Mi.cross(la).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),la.subVectors(this.a,this.b),Mi.cross(la).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return bi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,p;xs.subVectors(l,r),Ss.subVectors(u,r),dd.subVectors(e,r);const m=xs.dot(dd),h=Ss.dot(dd);if(m<=0&&h<=0)return i.copy(r);hd.subVectors(e,l);const x=xs.dot(hd),S=Ss.dot(hd);if(x>=0&&S<=x)return i.copy(l);const _=m*S-x*h;if(_<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(xs,d);pd.subVectors(e,u);const E=xs.dot(pd),b=Ss.dot(pd);if(b>=0&&E<=b)return i.copy(u);const C=E*h-m*b;if(C<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(r).addScaledVector(Ss,p);const M=x*b-E*S;if(M<=0&&S-x>=0&&E-b>=0)return W0.subVectors(u,l),p=(S-x)/(S-x+(E-b)),i.copy(l).addScaledVector(W0,p);const v=1/(M+C+_);return d=C*v,p=_*v,i.copy(r).addScaledVector(xs,d).addScaledVector(Ss,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ko{constructor(e=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=u.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,yi):yi.fromBufferAttribute(u,d),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fc.copy(r.boundingBox)),fc.applyMatrix4(e.matrixWorld),this.union(fc)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),dc.subVectors(this.max,Lo),Ms.subVectors(e.a,Lo),ys.subVectors(e.b,Lo),Es.subVectors(e.c,Lo),Za.subVectors(ys,Ms),Ka.subVectors(Es,ys),Sr.subVectors(Ms,Es);let i=[0,-Za.z,Za.y,0,-Ka.z,Ka.y,0,-Sr.z,Sr.y,Za.z,0,-Za.x,Ka.z,0,-Ka.x,Sr.z,0,-Sr.x,-Za.y,Za.x,0,-Ka.y,Ka.x,0,-Sr.y,Sr.x,0];return!vd(i,Ms,ys,Es,dc)||(i=[1,0,0,0,1,0,0,0,1],!vd(i,Ms,ys,Es,dc))?!1:(hc.crossVectors(Za,Ka),i=[hc.x,hc.y,hc.z],vd(i,Ms,ys,Es,dc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ua=[new it,new it,new it,new it,new it,new it,new it,new it],yi=new it,fc=new ko,Ms=new it,ys=new it,Es=new it,Za=new it,Ka=new it,Sr=new it,Lo=new it,dc=new it,hc=new it,Mr=new it;function vd(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){Mr.fromArray(o,u);const p=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=e.dot(Mr),h=i.dot(Mr),x=r.dot(Mr);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>p)return!1}return!0}const un=new it,pc=new Ee;let mM=0;class Ii{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=U0,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)pc.fromBufferAttribute(this,i),pc.applyMatrix3(e),this.setXY(i,pc.x,pc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Do(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Do(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Do(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Do(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Do(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==U0&&(e.usage=this.usage),e}}class X_ extends Ii{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class k_ extends Ii{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ga extends Ii{constructor(e,i,r){super(new Float32Array(e),i,r)}}const gM=new ko,No=new it,xd=new it;class Fh{constructor(e=new it,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):gM.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(xd)),this.expandByPoint(No.copy(e.center).sub(xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _M=0;const ui=new fn,Sd=new ei,bs=new it,$n=new ko,Oo=new ko,vn=new it;class Sa extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(KS(e)?k_:X_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new he().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,i,r){return ui.makeTranslation(e,i,r),this.applyMatrix4(ui),this}scale(e,i,r){return ui.makeScale(e,i,r),this.applyMatrix4(ui),this}lookAt(e){return Sd.lookAt(e),Sd.updateMatrix(),this.applyMatrix4(Sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ga(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const p=i[u];Oo.setFromBufferAttribute(p),this.morphTargetsRelative?(vn.addVectors($n.min,Oo.min),$n.expandByPoint(vn),vn.addVectors($n.max,Oo.max),$n.expandByPoint(vn)):($n.expandByPoint(Oo.min),$n.expandByPoint(Oo.max))}$n.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)vn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,d=i.length;u<d;u++){const p=i[u],m=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)vn.fromBufferAttribute(p,h),m&&(bs.fromBufferAttribute(e,h),vn.add(bs)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new it,m[T]=new it;const h=new it,x=new it,S=new it,_=new Ee,E=new Ee,b=new Ee,C=new it,M=new it;function v(T,U,ht){h.fromBufferAttribute(r,T),x.fromBufferAttribute(r,U),S.fromBufferAttribute(r,ht),_.fromBufferAttribute(u,T),E.fromBufferAttribute(u,U),b.fromBufferAttribute(u,ht),x.sub(h),S.sub(h),E.sub(_),b.sub(_);const H=1/(E.x*b.y-b.x*E.y);isFinite(H)&&(C.copy(x).multiplyScalar(b.y).addScaledVector(S,-E.y).multiplyScalar(H),M.copy(S).multiplyScalar(E.x).addScaledVector(x,-b.x).multiplyScalar(H),p[T].add(C),p[U].add(C),p[ht].add(C),m[T].add(M),m[U].add(M),m[ht].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let T=0,U=D.length;T<U;++T){const ht=D[T],H=ht.start,$=ht.count;for(let at=H,ot=H+$;at<ot;at+=3)v(e.getX(at+0),e.getX(at+1),e.getX(at+2))}const P=new it,N=new it,V=new it,I=new it;function B(T){V.fromBufferAttribute(l,T),I.copy(V);const U=p[T];P.copy(U),P.sub(V.multiplyScalar(V.dot(U))).normalize(),N.crossVectors(I,U);const H=N.dot(m[T])<0?-1:1;d.setXYZW(T,P.x,P.y,P.z,H)}for(let T=0,U=D.length;T<U;++T){const ht=D[T],H=ht.start,$=ht.count;for(let at=H,ot=H+$;at<ot;at+=3)B(e.getX(at+0)),B(e.getX(at+1)),B(e.getX(at+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ii(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,E=r.count;_<E;_++)r.setXYZ(_,0,0,0);const l=new it,u=new it,d=new it,p=new it,m=new it,h=new it,x=new it,S=new it;if(e)for(let _=0,E=e.count;_<E;_+=3){const b=e.getX(_+0),C=e.getX(_+1),M=e.getX(_+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,M),x.subVectors(d,u),S.subVectors(l,u),x.cross(S),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),h.fromBufferAttribute(r,M),p.add(x),m.add(x),h.add(x),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,h.x,h.y,h.z)}else for(let _=0,E=i.count;_<E;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),x.subVectors(d,u),S.subVectors(l,u),x.cross(S),r.setXYZ(_+0,x.x,x.y,x.z),r.setXYZ(_+1,x.x,x.y,x.z),r.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(p,m){const h=p.array,x=p.itemSize,S=p.normalized,_=new h.constructor(m.length*x);let E=0,b=0;for(let C=0,M=m.length;C<M;C++){p.isInterleavedBufferAttribute?E=m[C]*p.data.stride+p.offset:E=m[C]*x;for(let v=0;v<x;v++)_[b++]=h[E++]}return new Ii(_,x,S)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Sa,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,r);i.setAttribute(p,h)}const u=this.morphAttributes;for(const p in u){const m=[],h=u[p];for(let x=0,S=h.length;x<S;x++){const _=h[x],E=e(_,r);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let S=0,_=h.length;S<_;S++){const E=h[S];x.push(E.toJSON(e.data))}x.length>0&&(l[m]=x,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const u=e.morphAttributes;for(const h in u){const x=[],S=u[h];for(let _=0,E=S.length;_<E;_++)x.push(S[_].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,x=d.length;h<x;h++){const S=d[h];this.addGroup(S.start,S.count,S.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let vM=0;class Hc extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=Cs,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nd,this.blendDst=Od,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(r.blending=this.blending),this.side!==er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Nd&&(r.blendSrc=this.blendSrc),this.blendDst!==Od&&(r.blendDst=this.blendDst),this.blendEquation!==Rr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==D0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const p in u){const m=u[p];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fa=new it,Md=new it,mc=new it,Qa=new it,yd=new it,gc=new it,Ed=new it;class xM{constructor(e=new it,i=new it(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=fa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Md.copy(e).add(i).multiplyScalar(.5),mc.copy(i).sub(e).normalize(),Qa.copy(this.origin).sub(Md);const u=e.distanceTo(i)*.5,d=-this.direction.dot(mc),p=Qa.dot(this.direction),m=-Qa.dot(mc),h=Qa.lengthSq(),x=Math.abs(1-d*d);let S,_,E,b;if(x>0)if(S=d*m-p,_=d*p-m,b=u*x,S>=0)if(_>=-b)if(_<=b){const C=1/x;S*=C,_*=C,E=S*(S+d*_+2*p)+_*(d*S+_+2*m)+h}else _=u,S=Math.max(0,-(d*_+p)),E=-S*S+_*(_+2*m)+h;else _=-u,S=Math.max(0,-(d*_+p)),E=-S*S+_*(_+2*m)+h;else _<=-b?(S=Math.max(0,-(-d*u+p)),_=S>0?-u:Math.min(Math.max(-u,-m),u),E=-S*S+_*(_+2*m)+h):_<=b?(S=0,_=Math.min(Math.max(-u,-m),u),E=_*(_+2*m)+h):(S=Math.max(0,-(d*u+p)),_=S>0?u:Math.min(Math.max(-u,-m),u),E=-S*S+_*(_+2*m)+h);else _=d>0?-u:u,S=Math.max(0,-(d*_+p)),E=-S*S+_*(_+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Md).addScaledVector(mc,_),E}intersectSphere(e,i){fa.subVectors(e.center,this.origin);const r=fa.dot(this.direction),l=fa.dot(fa)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,p,m;const h=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,_=this.origin;return h>=0?(r=(e.min.x-_.x)*h,l=(e.max.x-_.x)*h):(r=(e.max.x-_.x)*h,l=(e.min.x-_.x)*h),x>=0?(u=(e.min.y-_.y)*x,d=(e.max.y-_.y)*x):(u=(e.max.y-_.y)*x,d=(e.min.y-_.y)*x),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),S>=0?(p=(e.min.z-_.z)*S,m=(e.max.z-_.z)*S):(p=(e.max.z-_.z)*S,m=(e.min.z-_.z)*S),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,fa)!==null}intersectTriangle(e,i,r,l,u){yd.subVectors(i,e),gc.subVectors(r,e),Ed.crossVectors(yd,gc);let d=this.direction.dot(Ed),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;Qa.subVectors(this.origin,e);const m=p*this.direction.dot(gc.crossVectors(Qa,gc));if(m<0)return null;const h=p*this.direction.dot(yd.cross(Qa));if(h<0||m+h>d)return null;const x=-p*Qa.dot(Ed);return x<0?null:this.at(x/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class W_ extends Hc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.combine=E_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const q0=new fn,yr=new xM,_c=new Fh,Y0=new it,vc=new it,xc=new it,Sc=new it,bd=new it,Mc=new it,j0=new it,yc=new it;class Gi extends ei{constructor(e=new Sa,i=new W_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(u&&p){Mc.set(0,0,0);for(let m=0,h=u.length;m<h;m++){const x=p[m],S=u[m];x!==0&&(bd.fromBufferAttribute(S,e),d?Mc.addScaledVector(bd,x):Mc.addScaledVector(bd.sub(i),x))}i.add(Mc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_c.copy(r.boundingSphere),_c.applyMatrix4(u),yr.copy(e.ray).recast(e.near),!(_c.containsPoint(yr.origin)===!1&&(yr.intersectSphere(_c,Y0)===null||yr.origin.distanceToSquared(Y0)>(e.far-e.near)**2))&&(q0.copy(u).invert(),yr.copy(e.ray).applyMatrix4(q0),!(r.boundingBox!==null&&yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,yr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,p=u.index,m=u.attributes.position,h=u.attributes.uv,x=u.attributes.uv1,S=u.attributes.normal,_=u.groups,E=u.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,C=_.length;b<C;b++){const M=_[b],v=d[M.materialIndex],D=Math.max(M.start,E.start),P=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let N=D,V=P;N<V;N+=3){const I=p.getX(N),B=p.getX(N+1),T=p.getX(N+2);l=Ec(this,v,e,r,h,x,S,I,B,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),C=Math.min(p.count,E.start+E.count);for(let M=b,v=C;M<v;M+=3){const D=p.getX(M),P=p.getX(M+1),N=p.getX(M+2);l=Ec(this,d,e,r,h,x,S,D,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,C=_.length;b<C;b++){const M=_[b],v=d[M.materialIndex],D=Math.max(M.start,E.start),P=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let N=D,V=P;N<V;N+=3){const I=N,B=N+1,T=N+2;l=Ec(this,v,e,r,h,x,S,I,B,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let M=b,v=C;M<v;M+=3){const D=M,P=M+1,N=M+2;l=Ec(this,d,e,r,h,x,S,D,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function SM(o,e,i,r,l,u,d,p){let m;if(e.side===Vn?m=r.intersectTriangle(d,u,l,!0,p):m=r.intersectTriangle(l,u,d,e.side===er,p),m===null)return null;yc.copy(p),yc.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(yc);return h<i.near||h>i.far?null:{distance:h,point:yc.clone(),object:o}}function Ec(o,e,i,r,l,u,d,p,m,h){o.getVertexPosition(p,vc),o.getVertexPosition(m,xc),o.getVertexPosition(h,Sc);const x=SM(o,e,i,r,vc,xc,Sc,j0);if(x){const S=new it;bi.getBarycoord(j0,vc,xc,Sc,S),l&&(x.uv=bi.getInterpolatedAttribute(l,p,m,h,S,new Ee)),u&&(x.uv1=bi.getInterpolatedAttribute(u,p,m,h,S,new Ee)),d&&(x.normal=bi.getInterpolatedAttribute(d,p,m,h,S,new it),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const _={a:p,b:m,c:h,normal:new it,materialIndex:0};bi.getNormal(vc,xc,Sc,_.normal),x.face=_,x.barycoord=S}return x}class MM extends On{constructor(e=null,i=1,r=1,l,u,d,p,m,h=En,x=En,S,_){super(null,d,p,m,h,x,l,u,S,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Td=new it,yM=new it,EM=new he;class Ar{constructor(e=new it(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Td.subVectors(r,i).cross(yM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Td),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||EM.getNormalMatrix(e),l=this.coplanarPoint(Td).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new Fh,bM=new Ee(.5,.5),bc=new it;class q_{constructor(e=new Ar,i=new Ar,r=new Ar,l=new Ar,u=new Ar,d=new Ar){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(u),p[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Fi,r=!1){const l=this.planes,u=e.elements,d=u[0],p=u[1],m=u[2],h=u[3],x=u[4],S=u[5],_=u[6],E=u[7],b=u[8],C=u[9],M=u[10],v=u[11],D=u[12],P=u[13],N=u[14],V=u[15];if(l[0].setComponents(h-d,E-x,v-b,V-D).normalize(),l[1].setComponents(h+d,E+x,v+b,V+D).normalize(),l[2].setComponents(h+p,E+S,v+C,V+P).normalize(),l[3].setComponents(h-p,E-S,v-C,V-P).normalize(),r)l[4].setComponents(m,_,M,N).normalize(),l[5].setComponents(h-m,E-_,v-M,V-N).normalize();else if(l[4].setComponents(h-m,E-_,v-M,V-N).normalize(),i===Fi)l[5].setComponents(h+m,E+_,v+M,V+N).normalize();else if(i===Fc)l[5].setComponents(m,_,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const i=bM.distanceTo(e.center);return Er.radius=.7071067811865476+i,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(bc.x=l.normal.x>0?e.max.x:e.min.x,bc.y=l.normal.y>0?e.max.y:e.min.y,bc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Y_ extends On{constructor(e=[],i=Ur,r,l,u,d,p,m,h,x){super(e,i,r,l,u,d,p,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vo extends On{constructor(e,i,r=Hi,l,u,d,p=En,m=En,h,x=va,S=1){if(x!==va&&x!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:S};super(_,l,u,d,p,m,x,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ph(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class TM extends Vo{constructor(e,i=Hi,r=Ur,l,u,d=En,p=En,m,h=va){const x={width:e,height:e,depth:1},S=[x,x,x,x,x,x];super(e,e,i,r,l,u,d,p,m,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class j_ extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wo extends Sa{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const p=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],h=[],x=[],S=[];let _=0,E=0;b("z","y","x",-1,-1,r,i,e,d,u,0),b("z","y","x",1,-1,r,i,-e,d,u,1),b("x","z","y",1,1,e,r,i,l,d,2),b("x","z","y",1,-1,e,r,-i,l,d,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new ga(h,3)),this.setAttribute("normal",new ga(x,3)),this.setAttribute("uv",new ga(S,2));function b(C,M,v,D,P,N,V,I,B,T,U){const ht=N/B,H=V/T,$=N/2,at=V/2,ot=I/2,Z=B+1,w=T+1;let F=0,rt=0;const dt=new it;for(let St=0;St<w;St++){const O=St*H-at;for(let Y=0;Y<Z;Y++){const gt=Y*ht-$;dt[C]=gt*D,dt[M]=O*P,dt[v]=ot,h.push(dt.x,dt.y,dt.z),dt[C]=0,dt[M]=0,dt[v]=I>0?1:-1,x.push(dt.x,dt.y,dt.z),S.push(Y/B),S.push(1-St/T),F+=1}}for(let St=0;St<T;St++)for(let O=0;O<B;O++){const Y=_+O+Z*St,gt=_+O+Z*(St+1),Tt=_+(O+1)+Z*(St+1),Nt=_+(O+1)+Z*St;m.push(Y,gt,Nt),m.push(gt,Tt,Nt),rt+=6}p.addGroup(E,rt,U),E+=rt,_+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class qo extends Sa{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,x=m+1,S=e/p,_=i/m,E=[],b=[],C=[],M=[];for(let v=0;v<x;v++){const D=v*_-d;for(let P=0;P<h;P++){const N=P*S-u;b.push(N,-D,0),C.push(0,0,1),M.push(P/p),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let D=0;D<p;D++){const P=D+h*v,N=D+h*(v+1),V=D+1+h*(v+1),I=D+1+h*v;E.push(P,N,I),E.push(N,V,I)}this.setIndex(E),this.setAttribute("position",new ga(b,3)),this.setAttribute("normal",new ga(C,3)),this.setAttribute("uv",new ga(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.width,e.height,e.widthSegments,e.heightSegments)}}function Os(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(o){const e={};for(let i=0;i<o.length;i++){const r=Os(o[i]);for(const l in r)e[l]=r[l]}return e}function AM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Z_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ae.workingColorSpace}const RM={clone:Os,merge:Nn};var CM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Hc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CM,this.fragmentShader=wM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=AM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class DM extends Ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class UM extends Hc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LM extends Hc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tc=new it,Ac=new Fs,Li=new it;class K_ extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tc,Ac,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,Ac,Li.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Tc,Ac,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,Ac,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new it,Z0=new Ee,K0=new Ee;class Ei extends K_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=yh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yh*2*Math.atan(Math.tan(nd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,i){return this.getViewBounds(e,Z0,K0),i.subVectors(K0,Z0)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(nd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(u+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Bh extends K_{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,d=u+h*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(u,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ts=-90,As=1;class NM extends ei{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(Ts,As,e,i);l.layers=this.layers,this.add(l);const u=new Ei(Ts,As,e,i);u.layers=this.layers,this.add(u);const d=new Ei(Ts,As,e,i);d.layers=this.layers,this.add(d);const p=new Ei(Ts,As,e,i);p.layers=this.layers,this.add(p);const m=new Ei(Ts,As,e,i);m.layers=this.layers,this.add(m);const h=new Ei(Ts,As,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,p,m]=i;for(const h of i)this.remove(h);if(e===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Fc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,p,m,h,x]=this.children,S=e.getRenderTarget(),_=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(S,_,E),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class OM extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class PM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,re("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Q0(o,e,i,r){const l=FM(r);switch(i){case F_:return o*e;case z_:return o*e/l.components*l.byteLength;case Dh:return o*e/l.components*l.byteLength;case Ls:return o*e*2/l.components*l.byteLength;case Uh:return o*e*2/l.components*l.byteLength;case B_:return o*e*3/l.components*l.byteLength;case Ti:return o*e*4/l.components*l.byteLength;case Lh:return o*e*4/l.components*l.byteLength;case Dc:case Uc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Lc:case Nc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Wd:case Yd:return Math.max(o,16)*Math.max(e,8)/4;case kd:case qd:return Math.max(o,8)*Math.max(e,8)/2;case jd:case Zd:case Qd:case Jd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Kd:case $d:case th:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ih:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ah:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case rh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case sh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case oh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case lh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ch:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case uh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case fh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case dh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case hh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case ph:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case mh:case gh:case _h:return Math.ceil(o/4)*Math.ceil(e/4)*16;case vh:case xh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Sh:case Mh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function FM(o){switch(o){case di:case L_:return{byteLength:1,components:1};case Ho:case N_:case _a:return{byteLength:2,components:1};case Ch:case wh:return{byteLength:2,components:4};case Hi:case Rh:case Pi:return{byteLength:4,components:1};case O_:case P_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ah}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ah);function Q_(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function BM(o){const e=new WeakMap;function i(p,m){const h=p.array,x=p.usage,S=h.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,h,x),p.onUploadCallback();let E;if(h instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)E=o.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=o.SHORT;else if(h instanceof Uint32Array)E=o.UNSIGNED_INT;else if(h instanceof Int32Array)E=o.INT;else if(h instanceof Int8Array)E=o.BYTE;else if(h instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:S}}function r(p,m,h){const x=m.array,S=m.updateRanges;if(o.bindBuffer(h,p),S.length===0)o.bufferSubData(h,0,x);else{S.sort((E,b)=>E.start-b.start);let _=0;for(let E=1;E<S.length;E++){const b=S[_],C=S[E];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++_,S[_]=C)}S.length=_+1;for(let E=0,b=S.length;E<b;E++){const C=S[E];o.bufferSubData(h,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=e.get(p);(!x||x.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:u,update:d}}var zM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IM=`#ifdef USE_ALPHAHASH
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
#endif`,HM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kM=`#ifdef USE_AOMAP
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
#endif`,WM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qM=`#ifdef USE_BATCHING
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
#endif`,YM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QM=`#ifdef USE_IRIDESCENCE
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
#endif`,JM=`#ifdef USE_BUMPMAP
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
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,oy=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,ly=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,cy=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,py="gl_FragColor = linearToOutputTexel( gl_FragColor );",my=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gy=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_y=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vy=`#ifdef USE_ENVMAP
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
#endif`,xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
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
#endif`,My=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ey=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,by=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ty=`#ifdef USE_GRADIENTMAP
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
}`,Ay=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ry=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wy=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Dy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Uy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ny=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Py=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Fy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,By=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Iy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ky=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yy=`#if defined( USE_POINTS_UV )
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
#endif`,jy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ky=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$y=`#ifdef USE_MORPHTARGETS
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
#endif`,tE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sE=`#ifdef USE_NORMALMAP
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
#endif`,oE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_E=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,ME=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,EE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bE=`#ifdef USE_SKINNING
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
#endif`,TE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AE=`#ifdef USE_SKINNING
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
#endif`,RE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UE=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LE=`#ifdef USE_TRANSMISSION
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
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zE=`uniform sampler2D t2D;
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
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`#include <common>
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
}`,kE=`#if DEPTH_PACKING == 3200
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
}`,WE=`#define DISTANCE
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
}`,qE=`#define DISTANCE
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
void main () {
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
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`uniform float scale;
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
}`,KE=`uniform vec3 diffuse;
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
}`,QE=`#include <common>
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
}`,JE=`uniform vec3 diffuse;
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
}`,$E=`#define LAMBERT
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
}`,tb=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,eb=`#define MATCAP
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
}`,nb=`#define MATCAP
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
}`,ib=`#define NORMAL
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
}`,ab=`#define NORMAL
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
}`,rb=`#define PHONG
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
}`,sb=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,ob=`#define STANDARD
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
}`,lb=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,cb=`#define TOON
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
}`,ub=`#define TOON
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
}`,fb=`uniform float size;
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
}`,db=`uniform vec3 diffuse;
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
}`,hb=`#include <common>
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
}`,pb=`uniform vec3 color;
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
}`,mb=`uniform float rotation;
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
}`,gb=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:zM,alphahash_pars_fragment:IM,alphamap_fragment:HM,alphamap_pars_fragment:GM,alphatest_fragment:VM,alphatest_pars_fragment:XM,aomap_fragment:kM,aomap_pars_fragment:WM,batching_pars_vertex:qM,batching_vertex:YM,begin_vertex:jM,beginnormal_vertex:ZM,bsdfs:KM,iridescence_fragment:QM,bumpmap_pars_fragment:JM,clipping_planes_fragment:$M,clipping_planes_pars_fragment:ty,clipping_planes_pars_vertex:ey,clipping_planes_vertex:ny,color_fragment:iy,color_pars_fragment:ay,color_pars_vertex:ry,color_vertex:sy,common:oy,cube_uv_reflection_fragment:ly,defaultnormal_vertex:cy,displacementmap_pars_vertex:uy,displacementmap_vertex:fy,emissivemap_fragment:dy,emissivemap_pars_fragment:hy,colorspace_fragment:py,colorspace_pars_fragment:my,envmap_fragment:gy,envmap_common_pars_fragment:_y,envmap_pars_fragment:vy,envmap_pars_vertex:xy,envmap_physical_pars_fragment:Dy,envmap_vertex:Sy,fog_vertex:My,fog_pars_vertex:yy,fog_fragment:Ey,fog_pars_fragment:by,gradientmap_pars_fragment:Ty,lightmap_pars_fragment:Ay,lights_lambert_fragment:Ry,lights_lambert_pars_fragment:Cy,lights_pars_begin:wy,lights_toon_fragment:Uy,lights_toon_pars_fragment:Ly,lights_phong_fragment:Ny,lights_phong_pars_fragment:Oy,lights_physical_fragment:Py,lights_physical_pars_fragment:Fy,lights_fragment_begin:By,lights_fragment_maps:zy,lights_fragment_end:Iy,logdepthbuf_fragment:Hy,logdepthbuf_pars_fragment:Gy,logdepthbuf_pars_vertex:Vy,logdepthbuf_vertex:Xy,map_fragment:ky,map_pars_fragment:Wy,map_particle_fragment:qy,map_particle_pars_fragment:Yy,metalnessmap_fragment:jy,metalnessmap_pars_fragment:Zy,morphinstance_vertex:Ky,morphcolor_vertex:Qy,morphnormal_vertex:Jy,morphtarget_pars_vertex:$y,morphtarget_vertex:tE,normal_fragment_begin:eE,normal_fragment_maps:nE,normal_pars_fragment:iE,normal_pars_vertex:aE,normal_vertex:rE,normalmap_pars_fragment:sE,clearcoat_normal_fragment_begin:oE,clearcoat_normal_fragment_maps:lE,clearcoat_pars_fragment:cE,iridescence_pars_fragment:uE,opaque_fragment:fE,packing:dE,premultiplied_alpha_fragment:hE,project_vertex:pE,dithering_fragment:mE,dithering_pars_fragment:gE,roughnessmap_fragment:_E,roughnessmap_pars_fragment:vE,shadowmap_pars_fragment:xE,shadowmap_pars_vertex:SE,shadowmap_vertex:ME,shadowmask_pars_fragment:yE,skinbase_vertex:EE,skinning_pars_vertex:bE,skinning_vertex:TE,skinnormal_vertex:AE,specularmap_fragment:RE,specularmap_pars_fragment:CE,tonemapping_fragment:wE,tonemapping_pars_fragment:DE,transmission_fragment:UE,transmission_pars_fragment:LE,uv_pars_fragment:NE,uv_pars_vertex:OE,uv_vertex:PE,worldpos_vertex:FE,background_vert:BE,background_frag:zE,backgroundCube_vert:IE,backgroundCube_frag:HE,cube_vert:GE,cube_frag:VE,depth_vert:XE,depth_frag:kE,distance_vert:WE,distance_frag:qE,equirect_vert:YE,equirect_frag:jE,linedashed_vert:ZE,linedashed_frag:KE,meshbasic_vert:QE,meshbasic_frag:JE,meshlambert_vert:$E,meshlambert_frag:tb,meshmatcap_vert:eb,meshmatcap_frag:nb,meshnormal_vert:ib,meshnormal_frag:ab,meshphong_vert:rb,meshphong_frag:sb,meshphysical_vert:ob,meshphysical_frag:lb,meshtoon_vert:cb,meshtoon_frag:ub,points_vert:fb,points_frag:db,shadow_vert:hb,shadow_frag:pb,sprite_vert:mb,sprite_frag:gb},Ut={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Oi={basic:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Nn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Nn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Ve(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Nn([Ut.points,Ut.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Nn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Nn([Ut.common,Ut.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Nn([Ut.sprite,Ut.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:Nn([Ut.common,Ut.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:Nn([Ut.lights,Ut.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Oi.physical={uniforms:Nn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Rc={r:0,b:0,g:0},br=new xa,_b=new fn;function vb(o,e,i,r,l,u){const d=new Ve(0);let p=l===!0?0:1,m,h,x=null,S=0,_=null;function E(D){let P=D.isScene===!0?D.background:null;if(P&&P.isTexture){const N=D.backgroundBlurriness>0;P=e.get(P,N)}return P}function b(D){let P=!1;const N=E(D);N===null?M(d,p):N&&N.isColor&&(M(N,1),P=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,u):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function C(D,P){const N=E(P);N&&(N.isCubeTexture||N.mapping===Ic)?(h===void 0&&(h=new Gi(new Wo(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Os(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),br.copy(P.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),h.material.uniforms.envMap.value=N,h.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_b.makeRotationFromEuler(br)),h.material.toneMapped=Ae.getTransfer(N.colorSpace)!==ze,(x!==N||S!==N.version||_!==o.toneMapping)&&(h.material.needsUpdate=!0,x=N,S=N.version,_=o.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Gi(new qo(2,2),new Ai({name:"BackgroundMaterial",uniforms:Os(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Ae.getTransfer(N.colorSpace)!==ze,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(x!==N||S!==N.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,x=N,S=N.version,_=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function M(D,P){D.getRGB(Rc,Z_(o)),i.buffers.color.setClear(Rc.r,Rc.g,Rc.b,P,u)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,P=1){d.set(D),p=P,M(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,M(d,p)},render:b,addToRenderList:C,dispose:v}}function xb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=_(null);let u=l,d=!1;function p(H,$,at,ot,Z){let w=!1;const F=S(H,ot,at,$);u!==F&&(u=F,h(u.object)),w=E(H,ot,at,Z),w&&b(H,ot,at,Z),Z!==null&&e.update(Z,o.ELEMENT_ARRAY_BUFFER),(w||d)&&(d=!1,N(H,$,at,ot),Z!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function m(){return o.createVertexArray()}function h(H){return o.bindVertexArray(H)}function x(H){return o.deleteVertexArray(H)}function S(H,$,at,ot){const Z=ot.wireframe===!0;let w=r[$.id];w===void 0&&(w={},r[$.id]=w);const F=H.isInstancedMesh===!0?H.id:0;let rt=w[F];rt===void 0&&(rt={},w[F]=rt);let dt=rt[at.id];dt===void 0&&(dt={},rt[at.id]=dt);let St=dt[Z];return St===void 0&&(St=_(m()),dt[Z]=St),St}function _(H){const $=[],at=[],ot=[];for(let Z=0;Z<i;Z++)$[Z]=0,at[Z]=0,ot[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:at,attributeDivisors:ot,object:H,attributes:{},index:null}}function E(H,$,at,ot){const Z=u.attributes,w=$.attributes;let F=0;const rt=at.getAttributes();for(const dt in rt)if(rt[dt].location>=0){const O=Z[dt];let Y=w[dt];if(Y===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor)),O===void 0||O.attribute!==Y||Y&&O.data!==Y.data)return!0;F++}return u.attributesNum!==F||u.index!==ot}function b(H,$,at,ot){const Z={},w=$.attributes;let F=0;const rt=at.getAttributes();for(const dt in rt)if(rt[dt].location>=0){let O=w[dt];O===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(O=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(O=H.instanceColor));const Y={};Y.attribute=O,O&&O.data&&(Y.data=O.data),Z[dt]=Y,F++}u.attributes=Z,u.attributesNum=F,u.index=ot}function C(){const H=u.newAttributes;for(let $=0,at=H.length;$<at;$++)H[$]=0}function M(H){v(H,0)}function v(H,$){const at=u.newAttributes,ot=u.enabledAttributes,Z=u.attributeDivisors;at[H]=1,ot[H]===0&&(o.enableVertexAttribArray(H),ot[H]=1),Z[H]!==$&&(o.vertexAttribDivisor(H,$),Z[H]=$)}function D(){const H=u.newAttributes,$=u.enabledAttributes;for(let at=0,ot=$.length;at<ot;at++)$[at]!==H[at]&&(o.disableVertexAttribArray(at),$[at]=0)}function P(H,$,at,ot,Z,w,F){F===!0?o.vertexAttribIPointer(H,$,at,Z,w):o.vertexAttribPointer(H,$,at,ot,Z,w)}function N(H,$,at,ot){C();const Z=ot.attributes,w=at.getAttributes(),F=$.defaultAttributeValues;for(const rt in w){const dt=w[rt];if(dt.location>=0){let St=Z[rt];if(St===void 0&&(rt==="instanceMatrix"&&H.instanceMatrix&&(St=H.instanceMatrix),rt==="instanceColor"&&H.instanceColor&&(St=H.instanceColor)),St!==void 0){const O=St.normalized,Y=St.itemSize,gt=e.get(St);if(gt===void 0)continue;const Tt=gt.buffer,Nt=gt.type,tt=gt.bytesPerElement,_t=Nt===o.INT||Nt===o.UNSIGNED_INT||St.gpuType===Rh;if(St.isInterleavedBufferAttribute){const Mt=St.data,Ot=Mt.stride,Ht=St.offset;if(Mt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<dt.locationSize;Kt++)v(dt.location+Kt,Mt.meshPerAttribute);H.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Kt=0;Kt<dt.locationSize;Kt++)M(dt.location+Kt);o.bindBuffer(o.ARRAY_BUFFER,Tt);for(let Kt=0;Kt<dt.locationSize;Kt++)P(dt.location+Kt,Y/dt.locationSize,Nt,O,Ot*tt,(Ht+Y/dt.locationSize*Kt)*tt,_t)}else{if(St.isInstancedBufferAttribute){for(let Mt=0;Mt<dt.locationSize;Mt++)v(dt.location+Mt,St.meshPerAttribute);H.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Mt=0;Mt<dt.locationSize;Mt++)M(dt.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,Tt);for(let Mt=0;Mt<dt.locationSize;Mt++)P(dt.location+Mt,Y/dt.locationSize,Nt,O,Y*tt,Y/dt.locationSize*Mt*tt,_t)}}else if(F!==void 0){const O=F[rt];if(O!==void 0)switch(O.length){case 2:o.vertexAttrib2fv(dt.location,O);break;case 3:o.vertexAttrib3fv(dt.location,O);break;case 4:o.vertexAttrib4fv(dt.location,O);break;default:o.vertexAttrib1fv(dt.location,O)}}}}D()}function V(){U();for(const H in r){const $=r[H];for(const at in $){const ot=$[at];for(const Z in ot){const w=ot[Z];for(const F in w)x(w[F].object),delete w[F];delete ot[Z]}}delete r[H]}}function I(H){if(r[H.id]===void 0)return;const $=r[H.id];for(const at in $){const ot=$[at];for(const Z in ot){const w=ot[Z];for(const F in w)x(w[F].object),delete w[F];delete ot[Z]}}delete r[H.id]}function B(H){for(const $ in r){const at=r[$];for(const ot in at){const Z=at[ot];if(Z[H.id]===void 0)continue;const w=Z[H.id];for(const F in w)x(w[F].object),delete w[F];delete Z[H.id]}}}function T(H){for(const $ in r){const at=r[$],ot=H.isInstancedMesh===!0?H.id:0,Z=at[ot];if(Z!==void 0){for(const w in Z){const F=Z[w];for(const rt in F)x(F[rt].object),delete F[rt];delete Z[w]}delete at[ot],Object.keys(at).length===0&&delete r[$]}}}function U(){ht(),d=!0,u!==l&&(u=l,h(u.object))}function ht(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:U,resetDefaultState:ht,dispose:V,releaseStatesOfGeometry:I,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:M,disableUnusedAttributes:D}}function Sb(o,e,i){let r;function l(h){r=h}function u(h,x){o.drawArrays(r,h,x),i.update(x,r,1)}function d(h,x,S){S!==0&&(o.drawArraysInstanced(r,h,x,S),i.update(x,r,S))}function p(h,x,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,x,0,S);let E=0;for(let b=0;b<S;b++)E+=x[b];i.update(E,r,1)}function m(h,x,S,_){if(S===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<h.length;b++)d(h[b],x[b],_[b]);else{E.multiDrawArraysInstancedWEBGL(r,h,0,x,0,_,0,S);let b=0;for(let C=0;C<S;C++)b+=x[C]*_[C];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function Mb(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==Ti&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(B){const T=B===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==di&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Pi&&!T)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=m(h);x!==h&&(re("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const S=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=o.getParameter(o.MAX_SAMPLES),I=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:N,maxSamples:V,samples:I}}function yb(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Ar,p=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const E=S.length!==0||_||r!==0||l;return l=_,r=S.length,E},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,_){i=x(S,_,0)},this.setState=function(S,_,E){const b=S.clippingPlanes,C=S.clipIntersection,M=S.clipShadows,v=o.get(S);if(!l||b===null||b.length===0||u&&!M)u?x(null):h();else{const D=u?0:r,P=D*4;let N=v.clippingState||null;m.value=N,N=x(b,_,P,E);for(let V=0;V!==P;++V)N[V]=i[V];v.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(S,_,E,b){const C=S!==null?S.length:0;let M=null;if(C!==0){if(M=m.value,b!==!0||M===null){const v=E+C*4,D=_.matrixWorldInverse;p.getNormalMatrix(D),(M===null||M.length<v)&&(M=new Float32Array(v));for(let P=0,N=E;P!==C;++P,N+=4)d.copy(S[P]).applyMatrix4(D,p),d.normal.toArray(M,N),M[N+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}const tr=4,J0=[.125,.215,.35,.446,.526,.582],Cr=20,Eb=256,Po=new Bh,$0=new Ve;let Ad=null,Rd=0,Cd=0,wd=!1;const bb=new it;class t_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:p=bb}=u;Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ad,Rd,Cd),this._renderer.xr.enabled=wd,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ur||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:_a,format:Ti,colorSpace:Ns,depthBuffer:!1},l=e_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e_(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Tb(u)),this._blurMaterial=Rb(u,e,i),this._ggxMaterial=Ab(u,e,i)}return l}_compileMaterial(e){const i=new Gi(new Sa,e);this._renderer.compile(i,Po)}_sceneToCubeUV(e,i,r,l,u){const m=new Ei(90,1,i,r),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,_=S.autoClear,E=S.toneMapping;S.getClearColor($0),S.toneMapping=Bi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gi(new Wo,new W_({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let v=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,v=!0):(M.color.copy($0),v=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(m.up.set(0,h[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[P],u.y,u.z)):N===1?(m.up.set(0,0,h[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[P],u.z)):(m.up.set(0,h[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[P]));const V=this._cubeSize;Rs(l,N*V,P>2?V:0,V,V),S.setRenderTarget(l),v&&S.render(C,m),S.render(e,m)}S.toneMapping=E,S.autoClear=_,e.background=D}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ur||e.mapping===Us;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=i_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const p=u.uniforms;p.envMap.value=e;const m=this._cubeSize;Rs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Po)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),S=Math.sqrt(h*h-x*x),_=0+h*1.25,E=S*_,{_lodMax:b}=this,C=this._sizeLods[r],M=3*C*(r>b-tr?r-b+tr:0),v=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=b-i,Rs(u,M,v,3*C,2*C),l.setRenderTarget(u),l.render(p,Po),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-r,Rs(e,M,v,3*C,2*C),l.setRenderTarget(e),l.render(p,Po)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[l];S.material=h;const _=h.uniforms,E=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Cr-1),C=u/b,M=isFinite(u)?1+Math.floor(x*C):Cr;M>Cr&&re(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Cr}`);const v=[];let D=0;for(let B=0;B<Cr;++B){const T=B/C,U=Math.exp(-T*T/2);v.push(U),B===0?D+=U:B<M&&(D+=2*U)}for(let B=0;B<v.length;B++)v[B]=v[B]/D;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=v,_.latitudinal.value=d==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:P}=this;_.dTheta.value=b,_.mipInt.value=P-r;const N=this._sizeLods[l],V=3*N*(l>P-tr?l-P+tr:0),I=4*(this._cubeSize-N);Rs(i,V,I,3*N,2*N),m.setRenderTarget(i),m.render(S,Po)}}function Tb(o){const e=[],i=[],r=[];let l=o;const u=o-tr+1+J0.length;for(let d=0;d<u;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>o-tr?m=J0[d-o+tr-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),x=-h,S=1+h,_=[x,x,S,x,S,S,x,x,S,S,x,S],E=6,b=6,C=3,M=2,v=1,D=new Float32Array(C*b*E),P=new Float32Array(M*b*E),N=new Float32Array(v*b*E);for(let I=0;I<E;I++){const B=I%3*2/3-1,T=I>2?0:-1,U=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];D.set(U,C*b*I),P.set(_,M*b*I);const ht=[I,I,I,I,I,I];N.set(ht,v*b*I)}const V=new Sa;V.setAttribute("position",new Ii(D,C)),V.setAttribute("uv",new Ii(P,M)),V.setAttribute("faceIndex",new Ii(N,v)),r.push(new Gi(V,null)),l>tr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function e_(o,e,i){const r=new zi(o,e,i);return r.texture.mapping=Ic,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rs(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function Ab(o,e,i){return new Ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Eb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function Rb(o,e,i){const r=new Float32Array(Cr),l=new it(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:pa,depthTest:!1,depthWrite:!1})}function n_(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:pa,depthTest:!1,depthWrite:!1})}function i_(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}class J_ extends zi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Y_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Wo(5,5,5),u=new Ai({name:"CubemapFromEquirect",uniforms:Os(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:pa});u.uniforms.tEquirect.value=i;const d=new Gi(l,u),p=i.minFilter;return i.minFilter===wr&&(i.minFilter=Rn),new NM(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}function Cb(o){let e=new WeakMap,i=new WeakMap,r=null;function l(_,E=!1){return _==null?null:E?d(_):u(_)}function u(_){if(_&&_.isTexture){const E=_.mapping;if(E===$f||E===td)if(e.has(_)){const b=e.get(_).texture;return p(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const C=new J_(b.height);return C.fromEquirectangularTexture(o,_),e.set(_,C),_.addEventListener("dispose",h),p(C.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture){const E=_.mapping,b=E===$f||E===td,C=E===Ur||E===Us;if(b||C){let M=i.get(_);const v=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==v)return r===null&&(r=new t_(o)),M=b?r.fromEquirectangular(_,M):r.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const D=_.image;return b&&D&&D.height>0||C&&D&&m(D)?(r===null&&(r=new t_(o)),M=b?r.fromEquirectangular(_):r.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",x),M.texture):null}}}return _}function p(_,E){return E===$f?_.mapping=Ur:E===td&&(_.mapping=Us),_}function m(_){let E=0;const b=6;for(let C=0;C<b;C++)_[C]!==void 0&&E++;return E===b}function h(_){const E=_.target;E.removeEventListener("dispose",h);const b=e.get(E);b!==void 0&&(e.delete(E),b.dispose())}function x(_){const E=_.target;E.removeEventListener("dispose",x);const b=i.get(E);b!==void 0&&(i.delete(E),b.dispose())}function S(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:S}}function wb(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&zc("WebGLRenderer: "+r+" extension not supported."),l}}}function Db(o,e,i,r){const l={},u=new WeakMap;function d(S){const _=S.target;_.index!==null&&e.remove(_.index);for(const b in _.attributes)e.remove(_.attributes[b]);_.removeEventListener("dispose",d),delete l[_.id];const E=u.get(_);E&&(e.remove(E),u.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(S,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function m(S){const _=S.attributes;for(const E in _)e.update(_[E],o.ARRAY_BUFFER)}function h(S){const _=[],E=S.index,b=S.attributes.position;let C=0;if(b===void 0)return;if(E!==null){const D=E.array;C=E.version;for(let P=0,N=D.length;P<N;P+=3){const V=D[P+0],I=D[P+1],B=D[P+2];_.push(V,I,I,B,B,V)}}else{const D=b.array;C=b.version;for(let P=0,N=D.length/3-1;P<N;P+=3){const V=P+0,I=P+1,B=P+2;_.push(V,I,I,B,B,V)}}const M=new(b.count>=65535?k_:X_)(_,1);M.version=C;const v=u.get(S);v&&e.remove(v),u.set(S,M)}function x(S){const _=u.get(S);if(_){const E=S.index;E!==null&&_.version<E.version&&h(S)}else h(S);return u.get(S)}return{get:p,update:m,getWireframeAttribute:x}}function Ub(o,e,i){let r;function l(_){r=_}let u,d;function p(_){u=_.type,d=_.bytesPerElement}function m(_,E){o.drawElements(r,E,u,_*d),i.update(E,r,1)}function h(_,E,b){b!==0&&(o.drawElementsInstanced(r,E,u,_*d,b),i.update(E,r,b))}function x(_,E,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,u,_,0,b);let M=0;for(let v=0;v<b;v++)M+=E[v];i.update(M,r,1)}function S(_,E,b,C){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<_.length;v++)h(_[v]/d,E[v],C[v]);else{M.multiDrawElementsInstancedWEBGL(r,E,0,u,_,0,C,0,b);let v=0;for(let D=0;D<b;D++)v+=E[D]*C[D];i.update(v,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=S}function Lb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(u/3);break;case o.LINES:i.lines+=p*(u/2);break;case o.LINE_STRIP:i.lines+=p*(u-1);break;case o.LINE_LOOP:i.lines+=p*u;break;case o.POINTS:i.points+=p*u;break;default:De("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Nb(o,e,i){const r=new WeakMap,l=new en;function u(d,p,m){const h=d.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=x!==void 0?x.length:0;let _=r.get(p);if(_===void 0||_.count!==S){let ht=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",ht)};var E=ht;_!==void 0&&_.texture.dispose();const b=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let N=0;b===!0&&(N=1),C===!0&&(N=2),M===!0&&(N=3);let V=p.attributes.position.count*N,I=1;V>e.maxTextureSize&&(I=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const B=new Float32Array(V*I*4*S),T=new H_(B,V,I,S);T.type=Pi,T.needsUpdate=!0;const U=N*4;for(let H=0;H<S;H++){const $=v[H],at=D[H],ot=P[H],Z=V*I*4*H;for(let w=0;w<$.count;w++){const F=w*U;b===!0&&(l.fromBufferAttribute($,w),B[Z+F+0]=l.x,B[Z+F+1]=l.y,B[Z+F+2]=l.z,B[Z+F+3]=0),C===!0&&(l.fromBufferAttribute(at,w),B[Z+F+4]=l.x,B[Z+F+5]=l.y,B[Z+F+6]=l.z,B[Z+F+7]=0),M===!0&&(l.fromBufferAttribute(ot,w),B[Z+F+8]=l.x,B[Z+F+9]=l.y,B[Z+F+10]=l.z,B[Z+F+11]=ot.itemSize===4?l.w:1)}}_={count:S,texture:T,size:new Ee(V,I)},r.set(p,_),p.addEventListener("dispose",ht)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let b=0;for(let M=0;M<h.length;M++)b+=h[M];const C=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",h)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:u}}function Ob(o,e,i,r,l){let u=new WeakMap;function d(h){const x=l.render.frame,S=h.geometry,_=e.get(h,S);if(u.get(_)!==x&&(e.update(_),u.set(_,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),u.get(h)!==x&&(i.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,o.ARRAY_BUFFER),u.set(h,x))),h.isSkinnedMesh){const E=h.skeleton;u.get(E)!==x&&(E.update(),u.set(E,x))}return _}function p(){u=new WeakMap}function m(h){const x=h.target;x.removeEventListener("dispose",m),r.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:p}}const Pb={[b_]:"LINEAR_TONE_MAPPING",[T_]:"REINHARD_TONE_MAPPING",[A_]:"CINEON_TONE_MAPPING",[R_]:"ACES_FILMIC_TONE_MAPPING",[w_]:"AGX_TONE_MAPPING",[D_]:"NEUTRAL_TONE_MAPPING",[C_]:"CUSTOM_TONE_MAPPING"};function Fb(o,e,i,r,l){const u=new zi(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),d=new zi(e,i,{type:_a,depthBuffer:!1,stencilBuffer:!1}),p=new Sa;p.setAttribute("position",new ga([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new ga([0,2,0,0,2,0],2));const m=new DM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Gi(p,m),x=new Bh(-1,1,1,-1,0,1);let S=null,_=null,E=!1,b,C=null,M=[],v=!1;this.setSize=function(D,P){u.setSize(D,P),d.setSize(D,P);for(let N=0;N<M.length;N++){const V=M[N];V.setSize&&V.setSize(D,P)}},this.setEffects=function(D){M=D,v=M.length>0&&M[0].isRenderPass===!0;const P=u.width,N=u.height;for(let V=0;V<M.length;V++){const I=M[V];I.setSize&&I.setSize(P,N)}},this.begin=function(D,P){if(E||D.toneMapping===Bi&&M.length===0)return!1;if(C=P,P!==null){const N=P.width,V=P.height;(u.width!==N||u.height!==V)&&this.setSize(N,V)}return v===!1&&D.setRenderTarget(u),b=D.toneMapping,D.toneMapping=Bi,!0},this.hasRenderPass=function(){return v},this.end=function(D,P){D.toneMapping=b,E=!0;let N=u,V=d;for(let I=0;I<M.length;I++){const B=M[I];if(B.enabled!==!1&&(B.render(D,V,N,P),B.needsSwap!==!1)){const T=N;N=V,V=T}}if(S!==D.outputColorSpace||_!==D.toneMapping){S=D.outputColorSpace,_=D.toneMapping,m.defines={},Ae.getTransfer(S)===ze&&(m.defines.SRGB_TRANSFER="");const I=Pb[_];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(C),D.render(h,x),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),d.dispose(),p.dispose(),m.dispose()}}const $_=new On,Eh=new Vo(1,1),tv=new H_,ev=new sM,nv=new Y_,a_=[],r_=[],s_=new Float32Array(16),o_=new Float32Array(9),l_=new Float32Array(4);function Bs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=a_[l];if(u===void 0&&(u=new Float32Array(l),a_[l]=u),e!==0){r.toArray(u,0);for(let d=1,p=0;d!==e;++d)p+=i,o[d].toArray(u,p)}return u}function mn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function gn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Vc(o,e){let i=r_[e];i===void 0&&(i=new Int32Array(e),r_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function Bb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function zb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2fv(this.addr,e),gn(i,e)}}function Ib(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;o.uniform3fv(this.addr,e),gn(i,e)}}function Hb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4fv(this.addr,e),gn(i,e)}}function Gb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;l_.set(r),o.uniformMatrix2fv(this.addr,!1,l_),gn(i,r)}}function Vb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;o_.set(r),o.uniformMatrix3fv(this.addr,!1,o_),gn(i,r)}}function Xb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;s_.set(r),o.uniformMatrix4fv(this.addr,!1,s_),gn(i,r)}}function kb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function Wb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2iv(this.addr,e),gn(i,e)}}function qb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3iv(this.addr,e),gn(i,e)}}function Yb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4iv(this.addr,e),gn(i,e)}}function jb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function Zb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2uiv(this.addr,e),gn(i,e)}}function Kb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3uiv(this.addr,e),gn(i,e)}}function Qb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4uiv(this.addr,e),gn(i,e)}}function Jb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Eh.compareFunction=i.isReversedDepthBuffer()?Oh:Nh,u=Eh):u=$_,i.setTexture2D(e||u,l)}function $b(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||ev,l)}function tT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||nv,l)}function eT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||tv,l)}function nT(o){switch(o){case 5126:return Bb;case 35664:return zb;case 35665:return Ib;case 35666:return Hb;case 35674:return Gb;case 35675:return Vb;case 35676:return Xb;case 5124:case 35670:return kb;case 35667:case 35671:return Wb;case 35668:case 35672:return qb;case 35669:case 35673:return Yb;case 5125:return jb;case 36294:return Zb;case 36295:return Kb;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return $b;case 35680:case 36300:case 36308:case 36293:return tT;case 36289:case 36303:case 36311:case 36292:return eT}}function iT(o,e){o.uniform1fv(this.addr,e)}function aT(o,e){const i=Bs(e,this.size,2);o.uniform2fv(this.addr,i)}function rT(o,e){const i=Bs(e,this.size,3);o.uniform3fv(this.addr,i)}function sT(o,e){const i=Bs(e,this.size,4);o.uniform4fv(this.addr,i)}function oT(o,e){const i=Bs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function lT(o,e){const i=Bs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function cT(o,e){const i=Bs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function uT(o,e){o.uniform1iv(this.addr,e)}function fT(o,e){o.uniform2iv(this.addr,e)}function dT(o,e){o.uniform3iv(this.addr,e)}function hT(o,e){o.uniform4iv(this.addr,e)}function pT(o,e){o.uniform1uiv(this.addr,e)}function mT(o,e){o.uniform2uiv(this.addr,e)}function gT(o,e){o.uniform3uiv(this.addr,e)}function _T(o,e){o.uniform4uiv(this.addr,e)}function vT(o,e,i){const r=this.cache,l=e.length,u=Vc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=Eh:d=$_;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,u[p])}function xT(o,e,i){const r=this.cache,l=e.length,u=Vc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||ev,u[d])}function ST(o,e,i){const r=this.cache,l=e.length,u=Vc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||nv,u[d])}function MT(o,e,i){const r=this.cache,l=e.length,u=Vc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||tv,u[d])}function yT(o){switch(o){case 5126:return iT;case 35664:return aT;case 35665:return rT;case 35666:return sT;case 35674:return oT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return fT;case 35668:case 35672:return dT;case 35669:case 35673:return hT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return MT}}class ET{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=nT(i.type)}}class bT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=yT(i.type)}}class TT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const p=l[u];p.setValue(e,i[p.id],r)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function c_(o,e){o.seq.push(e),o.map[e.id]=e}function AT(o,e,i){const r=o.name,l=r.length;for(Dd.lastIndex=0;;){const u=Dd.exec(r),d=Dd.lastIndex;let p=u[1];const m=u[2]==="]",h=u[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){c_(i,h===void 0?new ET(p,o,e):new bT(p,o,e));break}else{let S=i.map[p];S===void 0&&(S=new TT(p),c_(i,S)),i=S}}}class Oc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);AT(p,m,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const p=i[u],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function u_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const RT=37297;let CT=0;function wT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const p=d+1;r.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const f_=new he;function DT(o){Ae._getMatrix(f_,Ae.workingColorSpace,o);const e=`mat3( ${f_.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case Pc:return[e,"LinearTransferOETF"];case ze:return[e,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function d_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+wT(o.getShaderSource(e),p)}else return u}function UT(o,e){const i=DT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const LT={[b_]:"Linear",[T_]:"Reinhard",[A_]:"Cineon",[R_]:"ACESFilmic",[w_]:"AgX",[D_]:"Neutral",[C_]:"Custom"};function NT(o,e){const i=LT[e];return i===void 0?(re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cc=new it;function OT(){Ae.getLuminanceCoefficients(Cc);const o=Cc.x.toFixed(4),e=Cc.y.toFixed(4),i=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function FT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function BT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let p=1;u.type===o.FLOAT_MAT2&&(p=2),u.type===o.FLOAT_MAT3&&(p=3),u.type===o.FLOAT_MAT4&&(p=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:p}}return i}function Io(o){return o!==""}function h_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function p_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zT=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(o){return o.replace(zT,HT)}const IT=new Map;function HT(o,e){let i=pe[e];if(i===void 0){const r=IT.get(e);if(r!==void 0)i=pe[r],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return bh(i)}const GT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m_(o){return o.replace(GT,VT)}function VT(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function g_(o){let e=`precision ${o.precision} float;
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
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const XT={[wc]:"SHADOWMAP_TYPE_PCF",[zo]:"SHADOWMAP_TYPE_VSM"};function kT(o){return XT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const WT={[Ur]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[Ic]:"ENVMAP_TYPE_CUBE_UV"};function qT(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":WT[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const YT={[Us]:"ENVMAP_MODE_REFRACTION"};function jT(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":YT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ZT={[E_]:"ENVMAP_BLENDING_MULTIPLY",[zS]:"ENVMAP_BLENDING_MIX",[IS]:"ENVMAP_BLENDING_ADD"};function KT(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":ZT[o.combine]||"ENVMAP_BLENDING_NONE"}function QT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function JT(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=kT(i),h=qT(i),x=jT(i),S=KT(i),_=QT(i),E=PT(i),b=FT(u),C=l.createProgram();let M,v,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Io).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Io).join(`
`),v.length>0&&(v+=`
`)):(M=[g_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),v=[g_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+S:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Bi?"#define TONE_MAPPING":"",i.toneMapping!==Bi?pe.tonemapping_pars_fragment:"",i.toneMapping!==Bi?NT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,UT("linearToOutputTexel",i.outputColorSpace),OT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Io).join(`
`)),d=bh(d),d=h_(d,i),d=p_(d,i),p=bh(p),p=h_(p,i),p=p_(p,i),d=m_(d),p=m_(p),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===L0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===L0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=D+M+d,N=D+v+p,V=u_(l,l.VERTEX_SHADER,P),I=u_(l,l.FRAGMENT_SHADER,N);l.attachShader(C,V),l.attachShader(C,I),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function B(H){if(o.debug.checkShaderErrors){const $=l.getProgramInfoLog(C)||"",at=l.getShaderInfoLog(V)||"",ot=l.getShaderInfoLog(I)||"",Z=$.trim(),w=at.trim(),F=ot.trim();let rt=!0,dt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(rt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,V,I);else{const St=d_(l,V,"vertex"),O=d_(l,I,"fragment");De("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Z+`
`+St+`
`+O)}else Z!==""?re("WebGLProgram: Program Info Log:",Z):(w===""||F==="")&&(dt=!1);dt&&(H.diagnostics={runnable:rt,programLog:Z,vertexShader:{log:w,prefix:M},fragmentShader:{log:F,prefix:v}})}l.deleteShader(V),l.deleteShader(I),T=new Oc(l,C),U=BT(l,C)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let ht=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ht===!1&&(ht=l.getProgramParameter(C,RT)),ht},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=CT++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=V,this.fragmentShader=I,this}let $T=0;class t1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new e1(e),i.set(e,r)),r}}class e1{constructor(e){this.id=$T++,this.code=e,this.usedTimes=0}}function n1(o,e,i,r,l,u){const d=new G_,p=new t1,m=new Set,h=[],x=new Map,S=r.logarithmicDepthBuffer;let _=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,U,ht,H,$){const at=H.fog,ot=$.geometry,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,w=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,F=e.get(T.envMap||Z,w),rt=F&&F.mapping===Ic?F.image.height:null,dt=E[T.type];T.precision!==null&&(_=r.getMaxPrecision(T.precision),_!==T.precision&&re("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const St=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,O=St!==void 0?St.length:0;let Y=0;ot.morphAttributes.position!==void 0&&(Y=1),ot.morphAttributes.normal!==void 0&&(Y=2),ot.morphAttributes.color!==void 0&&(Y=3);let gt,Tt,Nt,tt;if(dt){const Te=Oi[dt];gt=Te.vertexShader,Tt=Te.fragmentShader}else gt=T.vertexShader,Tt=T.fragmentShader,p.update(T),Nt=p.getVertexShaderID(T),tt=p.getFragmentShaderID(T);const _t=o.getRenderTarget(),Mt=o.state.buffers.depth.getReversed(),Ot=$.isInstancedMesh===!0,Ht=$.isBatchedMesh===!0,Kt=!!T.map,Ue=!!T.matcap,ce=!!F,me=!!T.aoMap,be=!!T.lightMap,ie=!!T.bumpMap,ke=!!T.normalMap,G=!!T.displacementMap,Ye=!!T.emissiveMap,ye=!!T.metalnessMap,Ne=!!T.roughnessMap,Yt=T.anisotropy>0,L=T.clearcoat>0,y=T.dispersion>0,q=T.iridescence>0,pt=T.sheen>0,xt=T.transmission>0,ut=Yt&&!!T.anisotropyMap,Wt=L&&!!T.clearcoatMap,Ct=L&&!!T.clearcoatNormalMap,Qt=L&&!!T.clearcoatRoughnessMap,te=q&&!!T.iridescenceMap,bt=q&&!!T.iridescenceThicknessMap,yt=pt&&!!T.sheenColorMap,Pt=pt&&!!T.sheenRoughnessMap,Lt=!!T.specularMap,Ft=!!T.specularColorMap,ue=!!T.specularIntensityMap,W=xt&&!!T.transmissionMap,Rt=xt&&!!T.thicknessMap,At=!!T.gradientMap,Bt=!!T.alphaMap,Et=T.alphaTest>0,ct=!!T.alphaHash,Gt=!!T.extensions;let ne=Bi;T.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Pe={shaderID:dt,shaderType:T.type,shaderName:T.name,vertexShader:gt,fragmentShader:Tt,defines:T.defines,customVertexShaderID:Nt,customFragmentShaderID:tt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Ht,batchingColor:Ht&&$._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&$.instanceColor!==null,instancingMorph:Ot&&$.morphTexture!==null,outputColorSpace:_t===null?o.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Ns,alphaToCoverage:!!T.alphaToCoverage,map:Kt,matcap:Ue,envMap:ce,envMapMode:ce&&F.mapping,envMapCubeUVHeight:rt,aoMap:me,lightMap:be,bumpMap:ie,normalMap:ke,displacementMap:G,emissiveMap:Ye,normalMapObjectSpace:ke&&T.normalMapType===XS,normalMapTangentSpace:ke&&T.normalMapType===VS,metalnessMap:ye,roughnessMap:Ne,anisotropy:Yt,anisotropyMap:ut,clearcoat:L,clearcoatMap:Wt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Qt,dispersion:y,iridescence:q,iridescenceMap:te,iridescenceThicknessMap:bt,sheen:pt,sheenColorMap:yt,sheenRoughnessMap:Pt,specularMap:Lt,specularColorMap:Ft,specularIntensityMap:ue,transmission:xt,transmissionMap:W,thicknessMap:Rt,gradientMap:At,opaque:T.transparent===!1&&T.blending===Cs&&T.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Et,alphaHash:ct,combine:T.combine,mapUv:Kt&&b(T.map.channel),aoMapUv:me&&b(T.aoMap.channel),lightMapUv:be&&b(T.lightMap.channel),bumpMapUv:ie&&b(T.bumpMap.channel),normalMapUv:ke&&b(T.normalMap.channel),displacementMapUv:G&&b(T.displacementMap.channel),emissiveMapUv:Ye&&b(T.emissiveMap.channel),metalnessMapUv:ye&&b(T.metalnessMap.channel),roughnessMapUv:Ne&&b(T.roughnessMap.channel),anisotropyMapUv:ut&&b(T.anisotropyMap.channel),clearcoatMapUv:Wt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&b(T.sheenRoughnessMap.channel),specularMapUv:Lt&&b(T.specularMap.channel),specularColorMapUv:Ft&&b(T.specularColorMap.channel),specularIntensityMapUv:ue&&b(T.specularIntensityMap.channel),transmissionMapUv:W&&b(T.transmissionMap.channel),thicknessMapUv:Rt&&b(T.thicknessMap.channel),alphaMapUv:Bt&&b(T.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(ke||Yt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ot.attributes.uv&&(Kt||Bt),fog:!!at,useFog:T.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ot.attributes.normal===void 0&&ke===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Mt,skinning:$.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Y,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&ht.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:Kt&&T.map.isVideoTexture===!0&&Ae.getTransfer(T.map.colorSpace)===ze,decodeVideoTextureEmissive:Ye&&T.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(T.emissiveMap.colorSpace)===ze,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===da,flipSided:T.side===Vn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Gt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&T.extensions.multiDraw===!0||Ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Pe.vertexUv1s=m.has(1),Pe.vertexUv2s=m.has(2),Pe.vertexUv3s=m.has(3),m.clear(),Pe}function M(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ht in T.defines)U.push(ht),U.push(T.defines[ht]);return T.isRawShaderMaterial===!1&&(v(U,T),D(U,T),U.push(o.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function v(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function D(T,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),T.push(d.mask)}function P(T){const U=E[T.type];let ht;if(U){const H=Oi[U];ht=RM.clone(H.uniforms)}else ht=T.uniforms;return ht}function N(T,U){let ht=x.get(U);return ht!==void 0?++ht.usedTimes:(ht=new JT(o,U,T,l),h.push(ht),x.set(U,ht)),ht}function V(T){if(--T.usedTimes===0){const U=h.indexOf(T);h[U]=h[h.length-1],h.pop(),x.delete(T.cacheKey),T.destroy()}}function I(T){p.remove(T)}function B(){p.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:P,acquireProgram:N,releaseProgram:V,releaseShaderCache:I,programs:h,dispose:B}}function i1(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function r(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function a1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function __(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function v_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function p(_,E,b,C,M,v){let D=o[e];return D===void 0?(D={id:_.id,object:_,geometry:E,material:b,materialVariant:d(_),groupOrder:C,renderOrder:_.renderOrder,z:M,group:v},o[e]=D):(D.id=_.id,D.object=_,D.geometry=E,D.material=b,D.materialVariant=d(_),D.groupOrder=C,D.renderOrder=_.renderOrder,D.z=M,D.group=v),e++,D}function m(_,E,b,C,M,v){const D=p(_,E,b,C,M,v);b.transmission>0?r.push(D):b.transparent===!0?l.push(D):i.push(D)}function h(_,E,b,C,M,v){const D=p(_,E,b,C,M,v);b.transmission>0?r.unshift(D):b.transparent===!0?l.unshift(D):i.unshift(D)}function x(_,E){i.length>1&&i.sort(_||a1),r.length>1&&r.sort(E||__),l.length>1&&l.sort(E||__)}function S(){for(let _=e,E=o.length;_<E;_++){const b=o[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:m,unshift:h,finish:S,sort:x}}function r1(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new v_,o.set(r,[d])):l>=u.length?(d=new v_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function s1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new it,color:new Ve};break;case"SpotLight":i={position:new it,direction:new it,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":i={color:new Ve,position:new it,halfWidth:new it,halfHeight:new it};break}return o[e.id]=i,i}}}function o1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let l1=0;function c1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function u1(o){const e=new s1,i=o1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new it);const l=new it,u=new fn,d=new fn;function p(h){let x=0,S=0,_=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let E=0,b=0,C=0,M=0,v=0,D=0,P=0,N=0,V=0,I=0,B=0;h.sort(c1);for(let U=0,ht=h.length;U<ht;U++){const H=h[U],$=H.color,at=H.intensity,ot=H.distance;let Z=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Ls?Z=H.shadow.map.texture:Z=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)x+=$.r*at,S+=$.g*at,_+=$.b*at;else if(H.isLightProbe){for(let w=0;w<9;w++)r.probe[w].addScaledVector(H.sh.coefficients[w],at);B++}else if(H.isDirectionalLight){const w=e.get(H);if(w.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const F=H.shadow,rt=i.get(H);rt.shadowIntensity=F.intensity,rt.shadowBias=F.bias,rt.shadowNormalBias=F.normalBias,rt.shadowRadius=F.radius,rt.shadowMapSize=F.mapSize,r.directionalShadow[E]=rt,r.directionalShadowMap[E]=Z,r.directionalShadowMatrix[E]=H.shadow.matrix,D++}r.directional[E]=w,E++}else if(H.isSpotLight){const w=e.get(H);w.position.setFromMatrixPosition(H.matrixWorld),w.color.copy($).multiplyScalar(at),w.distance=ot,w.coneCos=Math.cos(H.angle),w.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),w.decay=H.decay,r.spot[C]=w;const F=H.shadow;if(H.map&&(r.spotLightMap[V]=H.map,V++,F.updateMatrices(H),H.castShadow&&I++),r.spotLightMatrix[C]=F.matrix,H.castShadow){const rt=i.get(H);rt.shadowIntensity=F.intensity,rt.shadowBias=F.bias,rt.shadowNormalBias=F.normalBias,rt.shadowRadius=F.radius,rt.shadowMapSize=F.mapSize,r.spotShadow[C]=rt,r.spotShadowMap[C]=Z,N++}C++}else if(H.isRectAreaLight){const w=e.get(H);w.color.copy($).multiplyScalar(at),w.halfWidth.set(H.width*.5,0,0),w.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=w,M++}else if(H.isPointLight){const w=e.get(H);if(w.color.copy(H.color).multiplyScalar(H.intensity),w.distance=H.distance,w.decay=H.decay,H.castShadow){const F=H.shadow,rt=i.get(H);rt.shadowIntensity=F.intensity,rt.shadowBias=F.bias,rt.shadowNormalBias=F.normalBias,rt.shadowRadius=F.radius,rt.shadowMapSize=F.mapSize,rt.shadowCameraNear=F.camera.near,rt.shadowCameraFar=F.camera.far,r.pointShadow[b]=rt,r.pointShadowMap[b]=Z,r.pointShadowMatrix[b]=H.shadow.matrix,P++}r.point[b]=w,b++}else if(H.isHemisphereLight){const w=e.get(H);w.skyColor.copy(H.color).multiplyScalar(at),w.groundColor.copy(H.groundColor).multiplyScalar(at),r.hemi[v]=w,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=S,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==E||T.pointLength!==b||T.spotLength!==C||T.rectAreaLength!==M||T.hemiLength!==v||T.numDirectionalShadows!==D||T.numPointShadows!==P||T.numSpotShadows!==N||T.numSpotMaps!==V||T.numLightProbes!==B)&&(r.directional.length=E,r.spot.length=C,r.rectArea.length=M,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=N+V-I,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=B,T.directionalLength=E,T.pointLength=b,T.spotLength=C,T.rectAreaLength=M,T.hemiLength=v,T.numDirectionalShadows=D,T.numPointShadows=P,T.numSpotShadows=N,T.numSpotMaps=V,T.numLightProbes=B,r.version=l1++)}function m(h,x){let S=0,_=0,E=0,b=0,C=0;const M=x.matrixWorldInverse;for(let v=0,D=h.length;v<D;v++){const P=h[v];if(P.isDirectionalLight){const N=r.directional[S];N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),S++}else if(P.isSpotLight){const N=r.spot[E];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),E++}else if(P.isRectAreaLight){const N=r.rectArea[b];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),d.identity(),u.copy(P.matrixWorld),u.premultiply(M),d.extractRotation(u),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),b++}else if(P.isPointLight){const N=r.point[_];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),_++}else if(P.isHemisphereLight){const N=r.hemi[C];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(M),C++}}}return{setup:p,setupView:m,state:r}}function x_(o){const e=new u1(o),i=[],r=[];function l(x){h.camera=x,i.length=0,r.length=0}function u(x){i.push(x)}function d(x){r.push(x)}function p(){e.setup(i)}function m(x){e.setupView(i,x)}const h={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:u,pushShadow:d}}function f1(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let p;return d===void 0?(p=new x_(o),e.set(l,[p])):u>=d.length?(p=new x_(o),d.push(p)):p=d[u],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const d1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h1=`uniform sampler2D shadow_pass;
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
}`,p1=[new it(1,0,0),new it(-1,0,0),new it(0,1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1)],m1=[new it(0,-1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1),new it(0,-1,0),new it(0,-1,0)],S_=new fn,Fo=new it,Ud=new it;function g1(o,e,i){let r=new q_;const l=new Ee,u=new Ee,d=new en,p=new UM,m=new LM,h={},x=i.maxTextureSize,S={[er]:Vn,[Vn]:er,[da]:da},_=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:d1,fragmentShader:h1}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const b=new Sa;b.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Gi(b,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let v=this.type;this.render=function(I,B,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;this.type===xS&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wc);const U=o.getRenderTarget(),ht=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),$=o.state;$.setBlending(pa),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const at=v!==this.type;at&&B.traverse(function(ot){ot.material&&(Array.isArray(ot.material)?ot.material.forEach(Z=>Z.needsUpdate=!0):ot.material.needsUpdate=!0)});for(let ot=0,Z=I.length;ot<Z;ot++){const w=I[ot],F=w.shadow;if(F===void 0){re("WebGLShadowMap:",w,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const rt=F.getFrameExtents();l.multiply(rt),u.copy(F.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/rt.x),l.x=u.x*rt.x,F.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/rt.y),l.y=u.y*rt.y,F.mapSize.y=u.y));const dt=o.state.buffers.depth.getReversed();if(F.camera._reversedDepth=dt,F.map===null||at===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===zo){if(w.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new zi(l.x,l.y,{format:Ls,type:_a,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),F.map.texture.name=w.name+".shadowMap",F.map.depthTexture=new Vo(l.x,l.y,Pi),F.map.depthTexture.name=w.name+".shadowMapDepth",F.map.depthTexture.format=va,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=En,F.map.depthTexture.magFilter=En}else w.isPointLight?(F.map=new J_(l.x),F.map.depthTexture=new TM(l.x,Hi)):(F.map=new zi(l.x,l.y),F.map.depthTexture=new Vo(l.x,l.y,Hi)),F.map.depthTexture.name=w.name+".shadowMap",F.map.depthTexture.format=va,this.type===wc?(F.map.depthTexture.compareFunction=dt?Oh:Nh,F.map.depthTexture.minFilter=Rn,F.map.depthTexture.magFilter=Rn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=En,F.map.depthTexture.magFilter=En);F.camera.updateProjectionMatrix()}const St=F.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<St;O++){if(F.map.isWebGLCubeRenderTarget)o.setRenderTarget(F.map,O),o.clear();else{O===0&&(o.setRenderTarget(F.map),o.clear());const Y=F.getViewport(O);d.set(u.x*Y.x,u.y*Y.y,u.x*Y.z,u.y*Y.w),$.viewport(d)}if(w.isPointLight){const Y=F.camera,gt=F.matrix,Tt=w.distance||Y.far;Tt!==Y.far&&(Y.far=Tt,Y.updateProjectionMatrix()),Fo.setFromMatrixPosition(w.matrixWorld),Y.position.copy(Fo),Ud.copy(Y.position),Ud.add(p1[O]),Y.up.copy(m1[O]),Y.lookAt(Ud),Y.updateMatrixWorld(),gt.makeTranslation(-Fo.x,-Fo.y,-Fo.z),S_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),F._frustum.setFromProjectionMatrix(S_,Y.coordinateSystem,Y.reversedDepth)}else F.updateMatrices(w);r=F.getFrustum(),N(B,T,F.camera,w,this.type)}F.isPointLightShadow!==!0&&this.type===zo&&D(F,T),F.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(U,ht,H)};function D(I,B){const T=e.update(C);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,E.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new zi(l.x,l.y,{format:Ls,type:_a})),_.uniforms.shadow_pass.value=I.map.depthTexture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(B,null,T,_,C,null),E.uniforms.shadow_pass.value=I.mapPass.texture,E.uniforms.resolution.value=I.mapSize,E.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(B,null,T,E,C,null)}function P(I,B,T,U){let ht=null;const H=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)ht=H;else if(ht=T.isPointLight===!0?m:p,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const $=ht.uuid,at=B.uuid;let ot=h[$];ot===void 0&&(ot={},h[$]=ot);let Z=ot[at];Z===void 0&&(Z=ht.clone(),ot[at]=Z,B.addEventListener("dispose",V)),ht=Z}if(ht.visible=B.visible,ht.wireframe=B.wireframe,U===zo?ht.side=B.shadowSide!==null?B.shadowSide:B.side:ht.side=B.shadowSide!==null?B.shadowSide:S[B.side],ht.alphaMap=B.alphaMap,ht.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,ht.map=B.map,ht.clipShadows=B.clipShadows,ht.clippingPlanes=B.clippingPlanes,ht.clipIntersection=B.clipIntersection,ht.displacementMap=B.displacementMap,ht.displacementScale=B.displacementScale,ht.displacementBias=B.displacementBias,ht.wireframeLinewidth=B.wireframeLinewidth,ht.linewidth=B.linewidth,T.isPointLight===!0&&ht.isMeshDistanceMaterial===!0){const $=o.properties.get(ht);$.light=T}return ht}function N(I,B,T,U,ht){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&ht===zo)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const at=e.update(I),ot=I.material;if(Array.isArray(ot)){const Z=at.groups;for(let w=0,F=Z.length;w<F;w++){const rt=Z[w],dt=ot[rt.materialIndex];if(dt&&dt.visible){const St=P(I,dt,U,ht);I.onBeforeShadow(o,I,B,T,at,St,rt),o.renderBufferDirect(T,null,at,St,I,rt),I.onAfterShadow(o,I,B,T,at,St,rt)}}}else if(ot.visible){const Z=P(I,ot,U,ht);I.onBeforeShadow(o,I,B,T,at,Z,null),o.renderBufferDirect(T,null,at,Z,I,null),I.onAfterShadow(o,I,B,T,at,Z,null)}}const $=I.children;for(let at=0,ot=$.length;at<ot;at++)N($[at],B,T,U,ht)}function V(I){I.target.removeEventListener("dispose",V);for(const T in h){const U=h[T],ht=I.target.uuid;ht in U&&(U[ht].dispose(),delete U[ht])}}}function _1(o,e){function i(){let W=!1;const Rt=new en;let At=null;const Bt=new en(0,0,0,0);return{setMask:function(Et){At!==Et&&!W&&(o.colorMask(Et,Et,Et,Et),At=Et)},setLocked:function(Et){W=Et},setClear:function(Et,ct,Gt,ne,Pe){Pe===!0&&(Et*=ne,ct*=ne,Gt*=ne),Rt.set(Et,ct,Gt,ne),Bt.equals(Rt)===!1&&(o.clearColor(Et,ct,Gt,ne),Bt.copy(Rt))},reset:function(){W=!1,At=null,Bt.set(-1,0,0,0)}}}function r(){let W=!1,Rt=!1,At=null,Bt=null,Et=null;return{setReversed:function(ct){if(Rt!==ct){const Gt=e.get("EXT_clip_control");ct?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),Rt=ct;const ne=Et;Et=null,this.setClear(ne)}},getReversed:function(){return Rt},setTest:function(ct){ct?_t(o.DEPTH_TEST):Mt(o.DEPTH_TEST)},setMask:function(ct){At!==ct&&!W&&(o.depthMask(ct),At=ct)},setFunc:function(ct){if(Rt&&(ct=$S[ct]),Bt!==ct){switch(ct){case Pd:o.depthFunc(o.NEVER);break;case Fd:o.depthFunc(o.ALWAYS);break;case Bd:o.depthFunc(o.LESS);break;case Ds:o.depthFunc(o.LEQUAL);break;case zd:o.depthFunc(o.EQUAL);break;case Id:o.depthFunc(o.GEQUAL);break;case Hd:o.depthFunc(o.GREATER);break;case Gd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=ct}},setLocked:function(ct){W=ct},setClear:function(ct){Et!==ct&&(Et=ct,Rt&&(ct=1-ct),o.clearDepth(ct))},reset:function(){W=!1,At=null,Bt=null,Et=null,Rt=!1}}}function l(){let W=!1,Rt=null,At=null,Bt=null,Et=null,ct=null,Gt=null,ne=null,Pe=null;return{setTest:function(Te){W||(Te?_t(o.STENCIL_TEST):Mt(o.STENCIL_TEST))},setMask:function(Te){Rt!==Te&&!W&&(o.stencilMask(Te),Rt=Te)},setFunc:function(Te,Cn,hi){(At!==Te||Bt!==Cn||Et!==hi)&&(o.stencilFunc(Te,Cn,hi),At=Te,Bt=Cn,Et=hi)},setOp:function(Te,Cn,hi){(ct!==Te||Gt!==Cn||ne!==hi)&&(o.stencilOp(Te,Cn,hi),ct=Te,Gt=Cn,ne=hi)},setLocked:function(Te){W=Te},setClear:function(Te){Pe!==Te&&(o.clearStencil(Te),Pe=Te)},reset:function(){W=!1,Rt=null,At=null,Bt=null,Et=null,ct=null,Gt=null,ne=null,Pe=null}}}const u=new i,d=new r,p=new l,m=new WeakMap,h=new WeakMap;let x={},S={},_=new WeakMap,E=[],b=null,C=!1,M=null,v=null,D=null,P=null,N=null,V=null,I=null,B=new Ve(0,0,0),T=0,U=!1,ht=null,H=null,$=null,at=null,ot=null;const Z=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let w=!1,F=0;const rt=o.getParameter(o.VERSION);rt.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(rt)[1]),w=F>=1):rt.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),w=F>=2);let dt=null,St={};const O=o.getParameter(o.SCISSOR_BOX),Y=o.getParameter(o.VIEWPORT),gt=new en().fromArray(O),Tt=new en().fromArray(Y);function Nt(W,Rt,At,Bt){const Et=new Uint8Array(4),ct=o.createTexture();o.bindTexture(W,ct),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Gt=0;Gt<At;Gt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(Rt+Gt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return ct}const tt={};tt[o.TEXTURE_2D]=Nt(o.TEXTURE_2D,o.TEXTURE_2D,1),tt[o.TEXTURE_CUBE_MAP]=Nt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[o.TEXTURE_2D_ARRAY]=Nt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),tt[o.TEXTURE_3D]=Nt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),p.setClear(0),_t(o.DEPTH_TEST),d.setFunc(Ds),ie(!1),ke(A0),_t(o.CULL_FACE),me(pa);function _t(W){x[W]!==!0&&(o.enable(W),x[W]=!0)}function Mt(W){x[W]!==!1&&(o.disable(W),x[W]=!1)}function Ot(W,Rt){return S[W]!==Rt?(o.bindFramebuffer(W,Rt),S[W]=Rt,W===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Rt),W===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Ht(W,Rt){let At=E,Bt=!1;if(W){At=_.get(Rt),At===void 0&&(At=[],_.set(Rt,At));const Et=W.textures;if(At.length!==Et.length||At[0]!==o.COLOR_ATTACHMENT0){for(let ct=0,Gt=Et.length;ct<Gt;ct++)At[ct]=o.COLOR_ATTACHMENT0+ct;At.length=Et.length,Bt=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(At)}function Kt(W){return b!==W?(o.useProgram(W),b=W,!0):!1}const Ue={[Rr]:o.FUNC_ADD,[MS]:o.FUNC_SUBTRACT,[yS]:o.FUNC_REVERSE_SUBTRACT};Ue[ES]=o.MIN,Ue[bS]=o.MAX;const ce={[TS]:o.ZERO,[AS]:o.ONE,[RS]:o.SRC_COLOR,[Nd]:o.SRC_ALPHA,[NS]:o.SRC_ALPHA_SATURATE,[US]:o.DST_COLOR,[wS]:o.DST_ALPHA,[CS]:o.ONE_MINUS_SRC_COLOR,[Od]:o.ONE_MINUS_SRC_ALPHA,[LS]:o.ONE_MINUS_DST_COLOR,[DS]:o.ONE_MINUS_DST_ALPHA,[OS]:o.CONSTANT_COLOR,[PS]:o.ONE_MINUS_CONSTANT_COLOR,[FS]:o.CONSTANT_ALPHA,[BS]:o.ONE_MINUS_CONSTANT_ALPHA};function me(W,Rt,At,Bt,Et,ct,Gt,ne,Pe,Te){if(W===pa){C===!0&&(Mt(o.BLEND),C=!1);return}if(C===!1&&(_t(o.BLEND),C=!0),W!==SS){if(W!==M||Te!==U){if((v!==Rr||N!==Rr)&&(o.blendEquation(o.FUNC_ADD),v=Rr,N=Rr),Te)switch(W){case Cs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case R0:o.blendFunc(o.ONE,o.ONE);break;case C0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case w0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:De("WebGLState: Invalid blending: ",W);break}else switch(W){case Cs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case R0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case C0:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case w0:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",W);break}D=null,P=null,V=null,I=null,B.set(0,0,0),T=0,M=W,U=Te}return}Et=Et||Rt,ct=ct||At,Gt=Gt||Bt,(Rt!==v||Et!==N)&&(o.blendEquationSeparate(Ue[Rt],Ue[Et]),v=Rt,N=Et),(At!==D||Bt!==P||ct!==V||Gt!==I)&&(o.blendFuncSeparate(ce[At],ce[Bt],ce[ct],ce[Gt]),D=At,P=Bt,V=ct,I=Gt),(ne.equals(B)===!1||Pe!==T)&&(o.blendColor(ne.r,ne.g,ne.b,Pe),B.copy(ne),T=Pe),M=W,U=!1}function be(W,Rt){W.side===da?Mt(o.CULL_FACE):_t(o.CULL_FACE);let At=W.side===Vn;Rt&&(At=!At),ie(At),W.blending===Cs&&W.transparent===!1?me(pa):me(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),u.setMask(W.colorWrite);const Bt=W.stencilWrite;p.setTest(Bt),Bt&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ye(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?_t(o.SAMPLE_ALPHA_TO_COVERAGE):Mt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ie(W){ht!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),ht=W)}function ke(W){W!==_S?(_t(o.CULL_FACE),W!==H&&(W===A0?o.cullFace(o.BACK):W===vS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Mt(o.CULL_FACE),H=W}function G(W){W!==$&&(w&&o.lineWidth(W),$=W)}function Ye(W,Rt,At){W?(_t(o.POLYGON_OFFSET_FILL),(at!==Rt||ot!==At)&&(at=Rt,ot=At,d.getReversed()&&(Rt=-Rt),o.polygonOffset(Rt,At))):Mt(o.POLYGON_OFFSET_FILL)}function ye(W){W?_t(o.SCISSOR_TEST):Mt(o.SCISSOR_TEST)}function Ne(W){W===void 0&&(W=o.TEXTURE0+Z-1),dt!==W&&(o.activeTexture(W),dt=W)}function Yt(W,Rt,At){At===void 0&&(dt===null?At=o.TEXTURE0+Z-1:At=dt);let Bt=St[At];Bt===void 0&&(Bt={type:void 0,texture:void 0},St[At]=Bt),(Bt.type!==W||Bt.texture!==Rt)&&(dt!==At&&(o.activeTexture(At),dt=At),o.bindTexture(W,Rt||tt[W]),Bt.type=W,Bt.texture=Rt)}function L(){const W=St[dt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function y(){try{o.compressedTexImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function pt(){try{o.texSubImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function xt(){try{o.texSubImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function Wt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function Ct(){try{o.texStorage2D(...arguments)}catch(W){De("WebGLState:",W)}}function Qt(){try{o.texStorage3D(...arguments)}catch(W){De("WebGLState:",W)}}function te(){try{o.texImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function bt(){try{o.texImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function yt(W){gt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function Pt(W){Tt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Tt.copy(W))}function Lt(W,Rt){let At=h.get(Rt);At===void 0&&(At=new WeakMap,h.set(Rt,At));let Bt=At.get(W);Bt===void 0&&(Bt=o.getUniformBlockIndex(Rt,W.name),At.set(W,Bt))}function Ft(W,Rt){const Bt=h.get(Rt).get(W);m.get(Rt)!==Bt&&(o.uniformBlockBinding(Rt,Bt,W.__bindingPointIndex),m.set(Rt,Bt))}function ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},dt=null,St={},S={},_=new WeakMap,E=[],b=null,C=!1,M=null,v=null,D=null,P=null,N=null,V=null,I=null,B=new Ve(0,0,0),T=0,U=!1,ht=null,H=null,$=null,at=null,ot=null,gt.set(0,0,o.canvas.width,o.canvas.height),Tt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),p.reset()}return{buffers:{color:u,depth:d,stencil:p},enable:_t,disable:Mt,bindFramebuffer:Ot,drawBuffers:Ht,useProgram:Kt,setBlending:me,setMaterial:be,setFlipSided:ie,setCullFace:ke,setLineWidth:G,setPolygonOffset:Ye,setScissorTest:ye,activeTexture:Ne,bindTexture:Yt,unbindTexture:L,compressedTexImage2D:y,compressedTexImage3D:q,texImage2D:te,texImage3D:bt,updateUBOMapping:Lt,uniformBlockBinding:Ft,texStorage2D:Ct,texStorage3D:Qt,texSubImage2D:pt,texSubImage3D:xt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Wt,scissor:yt,viewport:Pt,reset:ue}}function v1(o,e,i,r,l,u,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ee,x=new WeakMap;let S;const _=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,y){return E?new OffscreenCanvas(L,y):Bc("canvas")}function C(L,y,q){let pt=1;const xt=Yt(L);if((xt.width>q||xt.height>q)&&(pt=q/Math.max(xt.width,xt.height)),pt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ut=Math.floor(pt*xt.width),Wt=Math.floor(pt*xt.height);S===void 0&&(S=b(ut,Wt));const Ct=y?b(ut,Wt):S;return Ct.width=ut,Ct.height=Wt,Ct.getContext("2d").drawImage(L,0,0,ut,Wt),re("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ut+"x"+Wt+")."),Ct}else return"data"in L&&re("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),L;return L}function M(L){return L.generateMipmaps}function v(L){o.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(L,y,q,pt,xt=!1){if(L!==null){if(o[L]!==void 0)return o[L];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ut=y;if(y===o.RED&&(q===o.FLOAT&&(ut=o.R32F),q===o.HALF_FLOAT&&(ut=o.R16F),q===o.UNSIGNED_BYTE&&(ut=o.R8)),y===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.R8UI),q===o.UNSIGNED_SHORT&&(ut=o.R16UI),q===o.UNSIGNED_INT&&(ut=o.R32UI),q===o.BYTE&&(ut=o.R8I),q===o.SHORT&&(ut=o.R16I),q===o.INT&&(ut=o.R32I)),y===o.RG&&(q===o.FLOAT&&(ut=o.RG32F),q===o.HALF_FLOAT&&(ut=o.RG16F),q===o.UNSIGNED_BYTE&&(ut=o.RG8)),y===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.RG8UI),q===o.UNSIGNED_SHORT&&(ut=o.RG16UI),q===o.UNSIGNED_INT&&(ut=o.RG32UI),q===o.BYTE&&(ut=o.RG8I),q===o.SHORT&&(ut=o.RG16I),q===o.INT&&(ut=o.RG32I)),y===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),q===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),q===o.UNSIGNED_INT&&(ut=o.RGB32UI),q===o.BYTE&&(ut=o.RGB8I),q===o.SHORT&&(ut=o.RGB16I),q===o.INT&&(ut=o.RGB32I)),y===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),q===o.UNSIGNED_INT&&(ut=o.RGBA32UI),q===o.BYTE&&(ut=o.RGBA8I),q===o.SHORT&&(ut=o.RGBA16I),q===o.INT&&(ut=o.RGBA32I)),y===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),y===o.RGBA){const Wt=xt?Pc:Ae.getTransfer(pt);q===o.FLOAT&&(ut=o.RGBA32F),q===o.HALF_FLOAT&&(ut=o.RGBA16F),q===o.UNSIGNED_BYTE&&(ut=Wt===ze?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function N(L,y){let q;return L?y===null||y===Hi||y===Go?q=o.DEPTH24_STENCIL8:y===Pi?q=o.DEPTH32F_STENCIL8:y===Ho&&(q=o.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Hi||y===Go?q=o.DEPTH_COMPONENT24:y===Pi?q=o.DEPTH_COMPONENT32F:y===Ho&&(q=o.DEPTH_COMPONENT16),q}function V(L,y){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==En&&L.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?y.mipmaps.length:1}function I(L){const y=L.target;y.removeEventListener("dispose",I),T(y),y.isVideoTexture&&x.delete(y)}function B(L){const y=L.target;y.removeEventListener("dispose",B),ht(y)}function T(L){const y=r.get(L);if(y.__webglInit===void 0)return;const q=L.source,pt=_.get(q);if(pt){const xt=pt[y.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&U(L),Object.keys(pt).length===0&&_.delete(q)}r.remove(L)}function U(L){const y=r.get(L);o.deleteTexture(y.__webglTexture);const q=L.source,pt=_.get(q);delete pt[y.__cacheKey],d.memory.textures--}function ht(L){const y=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(y.__webglFramebuffer[pt]))for(let xt=0;xt<y.__webglFramebuffer[pt].length;xt++)o.deleteFramebuffer(y.__webglFramebuffer[pt][xt]);else o.deleteFramebuffer(y.__webglFramebuffer[pt]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[pt])}else{if(Array.isArray(y.__webglFramebuffer))for(let pt=0;pt<y.__webglFramebuffer.length;pt++)o.deleteFramebuffer(y.__webglFramebuffer[pt]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let pt=0;pt<y.__webglColorRenderbuffer.length;pt++)y.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[pt]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const q=L.textures;for(let pt=0,xt=q.length;pt<xt;pt++){const ut=r.get(q[pt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),d.memory.textures--),r.remove(q[pt])}r.remove(L)}let H=0;function $(){H=0}function at(){const L=H;return L>=l.maxTextures&&re("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function ot(L){const y=[];return y.push(L.wrapS),y.push(L.wrapT),y.push(L.wrapR||0),y.push(L.magFilter),y.push(L.minFilter),y.push(L.anisotropy),y.push(L.internalFormat),y.push(L.format),y.push(L.type),y.push(L.generateMipmaps),y.push(L.premultiplyAlpha),y.push(L.flipY),y.push(L.unpackAlignment),y.push(L.colorSpace),y.join()}function Z(L,y){const q=r.get(L);if(L.isVideoTexture&&ye(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const pt=L.image;if(pt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(q,L,y);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+y)}function w(L,y){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){tt(q,L,y);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+y)}function F(L,y){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){tt(q,L,y);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+y)}function rt(L,y){const q=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){_t(q,L,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+y)}const dt={[Vd]:o.REPEAT,[ha]:o.CLAMP_TO_EDGE,[Xd]:o.MIRRORED_REPEAT},St={[En]:o.NEAREST,[HS]:o.NEAREST_MIPMAP_NEAREST,[sc]:o.NEAREST_MIPMAP_LINEAR,[Rn]:o.LINEAR,[ed]:o.LINEAR_MIPMAP_NEAREST,[wr]:o.LINEAR_MIPMAP_LINEAR},O={[kS]:o.NEVER,[ZS]:o.ALWAYS,[WS]:o.LESS,[Nh]:o.LEQUAL,[qS]:o.EQUAL,[Oh]:o.GEQUAL,[YS]:o.GREATER,[jS]:o.NOTEQUAL};function Y(L,y){if(y.type===Pi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===ed||y.magFilter===sc||y.magFilter===wr||y.minFilter===Rn||y.minFilter===ed||y.minFilter===sc||y.minFilter===wr)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,dt[y.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,dt[y.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,dt[y.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,St[y.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,St[y.minFilter]),y.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,O[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===En||y.minFilter!==sc&&y.minFilter!==wr||y.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function gt(L,y){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,y.addEventListener("dispose",I));const pt=y.source;let xt=_.get(pt);xt===void 0&&(xt={},_.set(pt,xt));const ut=ot(y);if(ut!==L.__cacheKey){xt[ut]===void 0&&(xt[ut]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,q=!0),xt[ut].usedTimes++;const Wt=xt[L.__cacheKey];Wt!==void 0&&(xt[L.__cacheKey].usedTimes--,Wt.usedTimes===0&&U(y)),L.__cacheKey=ut,L.__webglTexture=xt[ut].texture}return q}function Tt(L,y,q){return Math.floor(Math.floor(L/q)/y)}function Nt(L,y,q,pt){const ut=L.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,q,pt,y.data);else{ut.sort((bt,yt)=>bt.start-yt.start);let Wt=0;for(let bt=1;bt<ut.length;bt++){const yt=ut[Wt],Pt=ut[bt],Lt=yt.start+yt.count,Ft=Tt(Pt.start,y.width,4),ue=Tt(yt.start,y.width,4);Pt.start<=Lt+1&&Ft===ue&&Tt(Pt.start+Pt.count-1,y.width,4)===Ft?yt.count=Math.max(yt.count,Pt.start+Pt.count-yt.start):(++Wt,ut[Wt]=Pt)}ut.length=Wt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Qt=o.getParameter(o.UNPACK_SKIP_PIXELS),te=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let bt=0,yt=ut.length;bt<yt;bt++){const Pt=ut[bt],Lt=Math.floor(Pt.start/4),Ft=Math.ceil(Pt.count/4),ue=Lt%y.width,W=Math.floor(Lt/y.width),Rt=Ft,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ue),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,ue,W,Rt,At,q,pt,y.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,te)}}function tt(L,y,q){let pt=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(pt=o.TEXTURE_3D);const xt=gt(L,y),ut=y.source;i.bindTexture(pt,L.__webglTexture,o.TEXTURE0+q);const Wt=r.get(ut);if(ut.version!==Wt.__version||xt===!0){i.activeTexture(o.TEXTURE0+q);const Ct=Ae.getPrimaries(Ae.workingColorSpace),Qt=y.colorSpace===$a?null:Ae.getPrimaries(y.colorSpace),te=y.colorSpace===$a||Ct===Qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let bt=C(y.image,!1,l.maxTextureSize);bt=Ne(y,bt);const yt=u.convert(y.format,y.colorSpace),Pt=u.convert(y.type);let Lt=P(y.internalFormat,yt,Pt,y.colorSpace,y.isVideoTexture);Y(pt,y);let Ft;const ue=y.mipmaps,W=y.isVideoTexture!==!0,Rt=Wt.__version===void 0||xt===!0,At=ut.dataReady,Bt=V(y,bt);if(y.isDepthTexture)Lt=N(y.format===Dr,y.type),Rt&&(W?i.texStorage2D(o.TEXTURE_2D,1,Lt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Lt,bt.width,bt.height,0,yt,Pt,null));else if(y.isDataTexture)if(ue.length>0){W&&Rt&&i.texStorage2D(o.TEXTURE_2D,Bt,Lt,ue[0].width,ue[0].height);for(let Et=0,ct=ue.length;Et<ct;Et++)Ft=ue[Et],W?At&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Ft.width,Ft.height,yt,Pt,Ft.data):i.texImage2D(o.TEXTURE_2D,Et,Lt,Ft.width,Ft.height,0,yt,Pt,Ft.data);y.generateMipmaps=!1}else W?(Rt&&i.texStorage2D(o.TEXTURE_2D,Bt,Lt,bt.width,bt.height),At&&Nt(y,bt,yt,Pt)):i.texImage2D(o.TEXTURE_2D,0,Lt,bt.width,bt.height,0,yt,Pt,bt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){W&&Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Lt,ue[0].width,ue[0].height,bt.depth);for(let Et=0,ct=ue.length;Et<ct;Et++)if(Ft=ue[Et],y.format!==Ti)if(yt!==null)if(W){if(At)if(y.layerUpdates.size>0){const Gt=Q0(Ft.width,Ft.height,y.format,y.type);for(const ne of y.layerUpdates){const Pe=Ft.data.subarray(ne*Gt/Ft.data.BYTES_PER_ELEMENT,(ne+1)*Gt/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,ne,Ft.width,Ft.height,1,yt,Pe)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Ft.width,Ft.height,bt.depth,yt,Ft.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,Lt,Ft.width,Ft.height,bt.depth,0,Ft.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Ft.width,Ft.height,bt.depth,yt,Pt,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Et,Lt,Ft.width,Ft.height,bt.depth,0,yt,Pt,Ft.data)}else{W&&Rt&&i.texStorage2D(o.TEXTURE_2D,Bt,Lt,ue[0].width,ue[0].height);for(let Et=0,ct=ue.length;Et<ct;Et++)Ft=ue[Et],y.format!==Ti?yt!==null?W?At&&i.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,Ft.width,Ft.height,yt,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,Et,Lt,Ft.width,Ft.height,0,Ft.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?At&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Ft.width,Ft.height,yt,Pt,Ft.data):i.texImage2D(o.TEXTURE_2D,Et,Lt,Ft.width,Ft.height,0,yt,Pt,Ft.data)}else if(y.isDataArrayTexture)if(W){if(Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Lt,bt.width,bt.height,bt.depth),At)if(y.layerUpdates.size>0){const Et=Q0(bt.width,bt.height,y.format,y.type);for(const ct of y.layerUpdates){const Gt=bt.data.subarray(ct*Et/bt.data.BYTES_PER_ELEMENT,(ct+1)*Et/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ct,bt.width,bt.height,1,yt,Pt,Gt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,yt,Pt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Lt,bt.width,bt.height,bt.depth,0,yt,Pt,bt.data);else if(y.isData3DTexture)W?(Rt&&i.texStorage3D(o.TEXTURE_3D,Bt,Lt,bt.width,bt.height,bt.depth),At&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,yt,Pt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Lt,bt.width,bt.height,bt.depth,0,yt,Pt,bt.data);else if(y.isFramebufferTexture){if(Rt)if(W)i.texStorage2D(o.TEXTURE_2D,Bt,Lt,bt.width,bt.height);else{let Et=bt.width,ct=bt.height;for(let Gt=0;Gt<Bt;Gt++)i.texImage2D(o.TEXTURE_2D,Gt,Lt,Et,ct,0,yt,Pt,null),Et>>=1,ct>>=1}}else if(ue.length>0){if(W&&Rt){const Et=Yt(ue[0]);i.texStorage2D(o.TEXTURE_2D,Bt,Lt,Et.width,Et.height)}for(let Et=0,ct=ue.length;Et<ct;Et++)Ft=ue[Et],W?At&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,yt,Pt,Ft):i.texImage2D(o.TEXTURE_2D,Et,Lt,yt,Pt,Ft);y.generateMipmaps=!1}else if(W){if(Rt){const Et=Yt(bt);i.texStorage2D(o.TEXTURE_2D,Bt,Lt,Et.width,Et.height)}At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,yt,Pt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Lt,yt,Pt,bt);M(y)&&v(pt),Wt.__version=ut.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function _t(L,y,q){if(y.image.length!==6)return;const pt=gt(L,y),xt=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+q);const ut=r.get(xt);if(xt.version!==ut.__version||pt===!0){i.activeTexture(o.TEXTURE0+q);const Wt=Ae.getPrimaries(Ae.workingColorSpace),Ct=y.colorSpace===$a?null:Ae.getPrimaries(y.colorSpace),Qt=y.colorSpace===$a||Wt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const te=y.isCompressedTexture||y.image[0].isCompressedTexture,bt=y.image[0]&&y.image[0].isDataTexture,yt=[];for(let ct=0;ct<6;ct++)!te&&!bt?yt[ct]=C(y.image[ct],!0,l.maxCubemapSize):yt[ct]=bt?y.image[ct].image:y.image[ct],yt[ct]=Ne(y,yt[ct]);const Pt=yt[0],Lt=u.convert(y.format,y.colorSpace),Ft=u.convert(y.type),ue=P(y.internalFormat,Lt,Ft,y.colorSpace),W=y.isVideoTexture!==!0,Rt=ut.__version===void 0||pt===!0,At=xt.dataReady;let Bt=V(y,Pt);Y(o.TEXTURE_CUBE_MAP,y);let Et;if(te){W&&Rt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,ue,Pt.width,Pt.height);for(let ct=0;ct<6;ct++){Et=yt[ct].mipmaps;for(let Gt=0;Gt<Et.length;Gt++){const ne=Et[Gt];y.format!==Ti?Lt!==null?W?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt,0,0,ne.width,ne.height,Lt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt,ue,ne.width,ne.height,0,ne.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt,0,0,ne.width,ne.height,Lt,Ft,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt,ue,ne.width,ne.height,0,Lt,Ft,ne.data)}}}else{if(Et=y.mipmaps,W&&Rt){Et.length>0&&Bt++;const ct=Yt(yt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,ue,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(bt){W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,yt[ct].width,yt[ct].height,Lt,Ft,yt[ct].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ue,yt[ct].width,yt[ct].height,0,Lt,Ft,yt[ct].data);for(let Gt=0;Gt<Et.length;Gt++){const Pe=Et[Gt].image[ct].image;W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt+1,0,0,Pe.width,Pe.height,Lt,Ft,Pe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt+1,ue,Pe.width,Pe.height,0,Lt,Ft,Pe.data)}}else{W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Lt,Ft,yt[ct]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ue,Lt,Ft,yt[ct]);for(let Gt=0;Gt<Et.length;Gt++){const ne=Et[Gt];W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt+1,0,0,Lt,Ft,ne.image[ct]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt+1,ue,Lt,Ft,ne.image[ct])}}}M(y)&&v(o.TEXTURE_CUBE_MAP),ut.__version=xt.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function Mt(L,y,q,pt,xt,ut){const Wt=u.convert(q.format,q.colorSpace),Ct=u.convert(q.type),Qt=P(q.internalFormat,Wt,Ct,q.colorSpace),te=r.get(y),bt=r.get(q);if(bt.__renderTarget=y,!te.__hasExternalTextures){const yt=Math.max(1,y.width>>ut),Pt=Math.max(1,y.height>>ut);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,ut,Qt,yt,Pt,y.depth,0,Wt,Ct,null):i.texImage2D(xt,ut,Qt,yt,Pt,0,Wt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Ye(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,xt,bt.__webglTexture,0,G(y)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,xt,bt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ot(L,y,q){if(o.bindRenderbuffer(o.RENDERBUFFER,L),y.depthBuffer){const pt=y.depthTexture,xt=pt&&pt.isDepthTexture?pt.type:null,ut=N(y.stencilBuffer,xt),Wt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ye(y)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),ut,y.width,y.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),ut,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,ut,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Wt,o.RENDERBUFFER,L)}else{const pt=y.textures;for(let xt=0;xt<pt.length;xt++){const ut=pt[xt],Wt=u.convert(ut.format,ut.colorSpace),Ct=u.convert(ut.type),Qt=P(ut.internalFormat,Wt,Ct,ut.colorSpace);Ye(y)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),Qt,y.width,y.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),Qt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Qt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(L,y,q){const pt=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=r.get(y.depthTexture);if(xt.__renderTarget=y,(!xt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),pt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,y.depthTexture.addEventListener("dispose",I)),xt.__webglTexture===void 0){xt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),Y(o.TEXTURE_CUBE_MAP,y.depthTexture);const te=u.convert(y.depthTexture.format),bt=u.convert(y.depthTexture.type);let yt;y.depthTexture.format===va?yt=o.DEPTH_COMPONENT24:y.depthTexture.format===Dr&&(yt=o.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,yt,y.width,y.height,0,te,bt,null)}}else Z(y.depthTexture,0);const ut=xt.__webglTexture,Wt=G(y),Ct=pt?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,Qt=y.depthTexture.format===Dr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===va)Ye(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Qt,Ct,ut,0,Wt):o.framebufferTexture2D(o.FRAMEBUFFER,Qt,Ct,ut,0);else if(y.depthTexture.format===Dr)Ye(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Qt,Ct,ut,0,Wt):o.framebufferTexture2D(o.FRAMEBUFFER,Qt,Ct,ut,0);else throw new Error("Unknown depthTexture format")}function Kt(L){const y=r.get(L),q=L.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==L.depthTexture){const pt=L.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),pt){const xt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,pt.removeEventListener("dispose",xt)};pt.addEventListener("dispose",xt),y.__depthDisposeCallback=xt}y.__boundDepthTexture=pt}if(L.depthTexture&&!y.__autoAllocateDepthBuffer)if(q)for(let pt=0;pt<6;pt++)Ht(y.__webglFramebuffer[pt],L,pt);else{const pt=L.texture.mipmaps;pt&&pt.length>0?Ht(y.__webglFramebuffer[0],L,0):Ht(y.__webglFramebuffer,L,0)}else if(q){y.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[pt]),y.__webglDepthbuffer[pt]===void 0)y.__webglDepthbuffer[pt]=o.createRenderbuffer(),Ot(y.__webglDepthbuffer[pt],L,!1);else{const xt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=y.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}else{const pt=L.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),Ot(y.__webglDepthbuffer,L,!1);else{const xt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ue(L,y,q){const pt=r.get(L);y!==void 0&&Mt(pt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&Kt(L)}function ce(L){const y=L.texture,q=r.get(L),pt=r.get(y);L.addEventListener("dispose",B);const xt=L.textures,ut=L.isWebGLCubeRenderTarget===!0,Wt=xt.length>1;if(Wt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=y.version,d.memory.textures++),ut){q.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[Ct]=[];for(let Qt=0;Qt<y.mipmaps.length;Qt++)q.__webglFramebuffer[Ct][Qt]=o.createFramebuffer()}else q.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ct=0;Ct<y.mipmaps.length;Ct++)q.__webglFramebuffer[Ct]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Wt)for(let Ct=0,Qt=xt.length;Ct<Qt;Ct++){const te=r.get(xt[Ct]);te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture(),d.memory.textures++)}if(L.samples>0&&Ye(L)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const Qt=xt[Ct];q.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[Ct]);const te=u.convert(Qt.format,Qt.colorSpace),bt=u.convert(Qt.type),yt=P(Qt.internalFormat,te,bt,Qt.colorSpace,L.isXRRenderTarget===!0),Pt=G(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,yt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,q.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),Ot(q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),Y(o.TEXTURE_CUBE_MAP,y);for(let Ct=0;Ct<6;Ct++)if(y.mipmaps&&y.mipmaps.length>0)for(let Qt=0;Qt<y.mipmaps.length;Qt++)Mt(q.__webglFramebuffer[Ct][Qt],L,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Qt);else Mt(q.__webglFramebuffer[Ct],L,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(y)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let Ct=0,Qt=xt.length;Ct<Qt;Ct++){const te=xt[Ct],bt=r.get(te);let yt=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(yt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(yt,bt.__webglTexture),Y(yt,te),Mt(q.__webglFramebuffer,L,te,o.COLOR_ATTACHMENT0+Ct,yt,0),M(te)&&v(yt)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,pt.__webglTexture),Y(Ct,y),y.mipmaps&&y.mipmaps.length>0)for(let Qt=0;Qt<y.mipmaps.length;Qt++)Mt(q.__webglFramebuffer[Qt],L,y,o.COLOR_ATTACHMENT0,Ct,Qt);else Mt(q.__webglFramebuffer,L,y,o.COLOR_ATTACHMENT0,Ct,0);M(y)&&v(Ct),i.unbindTexture()}L.depthBuffer&&Kt(L)}function me(L){const y=L.textures;for(let q=0,pt=y.length;q<pt;q++){const xt=y[q];if(M(xt)){const ut=D(L),Wt=r.get(xt).__webglTexture;i.bindTexture(ut,Wt),v(ut),i.unbindTexture()}}}const be=[],ie=[];function ke(L){if(L.samples>0){if(Ye(L)===!1){const y=L.textures,q=L.width,pt=L.height;let xt=o.COLOR_BUFFER_BIT;const ut=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Wt=r.get(L),Ct=y.length>1;if(Ct)for(let te=0;te<y.length;te++)i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const Qt=L.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let te=0;te<y.length;te++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[te]);const bt=r.get(y[te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,q,pt,0,0,q,pt,xt,o.NEAREST),m===!0&&(be.length=0,ie.length=0,be.push(o.COLOR_ATTACHMENT0+te),L.depthBuffer&&L.resolveDepthBuffer===!1&&(be.push(ut),ie.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ie)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,be))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let te=0;te<y.length;te++){i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[te]);const bt=r.get(y[te]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const y=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function G(L){return Math.min(l.maxSamples,L.samples)}function Ye(L){const y=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ye(L){const y=d.render.frame;x.get(L)!==y&&(x.set(L,y),L.update())}function Ne(L,y){const q=L.colorSpace,pt=L.format,xt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Ns&&q!==$a&&(Ae.getTransfer(q)===ze?(pt!==Ti||xt!==di)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",q)),y}function Yt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=at,this.resetTextureUnits=$,this.setTexture2D=Z,this.setTexture2DArray=w,this.setTexture3D=F,this.setTextureCube=rt,this.rebindTextures=Ue,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function x1(o,e){function i(r,l=$a){let u;const d=Ae.getTransfer(l);if(r===di)return o.UNSIGNED_BYTE;if(r===Ch)return o.UNSIGNED_SHORT_4_4_4_4;if(r===wh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===O_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===P_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===L_)return o.BYTE;if(r===N_)return o.SHORT;if(r===Ho)return o.UNSIGNED_SHORT;if(r===Rh)return o.INT;if(r===Hi)return o.UNSIGNED_INT;if(r===Pi)return o.FLOAT;if(r===_a)return o.HALF_FLOAT;if(r===F_)return o.ALPHA;if(r===B_)return o.RGB;if(r===Ti)return o.RGBA;if(r===va)return o.DEPTH_COMPONENT;if(r===Dr)return o.DEPTH_STENCIL;if(r===z_)return o.RED;if(r===Dh)return o.RED_INTEGER;if(r===Ls)return o.RG;if(r===Uh)return o.RG_INTEGER;if(r===Lh)return o.RGBA_INTEGER;if(r===Dc||r===Uc||r===Lc||r===Nc)if(d===ze)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Dc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Dc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Lc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Nc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kd||r===Wd||r===qd||r===Yd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===kd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===th)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===jd||r===Zd)return d===ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Kd)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Qd)return u.COMPRESSED_R11_EAC;if(r===Jd)return u.COMPRESSED_SIGNED_R11_EAC;if(r===$d)return u.COMPRESSED_RG11_EAC;if(r===th)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===eh||r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===eh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ih)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ah)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===oh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ch)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===uh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===hh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ph)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mh||r===gh||r===_h)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===mh)return d===ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_h)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vh||r===xh||r===Sh||r===Mh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===vh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===xh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Sh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Go?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const S1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M1=`
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

}`;class y1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new j_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ai({vertexShader:S1,fragmentShader:M1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Gi(new qo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E1 extends Ps{constructor(e,i){super();const r=this;let l=null,u=1,d=null,p="local-floor",m=1,h=null,x=null,S=null,_=null,E=null,b=null;const C=typeof XRWebGLBinding<"u",M=new y1,v={},D=i.getContextAttributes();let P=null,N=null;const V=[],I=[],B=new Ee;let T=null;const U=new Ei;U.viewport=new en;const ht=new Ei;ht.viewport=new en;const H=[U,ht],$=new OM;let at=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let _t=V[tt];return _t===void 0&&(_t=new cd,V[tt]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(tt){let _t=V[tt];return _t===void 0&&(_t=new cd,V[tt]=_t),_t.getGripSpace()},this.getHand=function(tt){let _t=V[tt];return _t===void 0&&(_t=new cd,V[tt]=_t),_t.getHandSpace()};function Z(tt){const _t=I.indexOf(tt.inputSource);if(_t===-1)return;const Mt=V[_t];Mt!==void 0&&(Mt.update(tt.inputSource,tt.frame,h||d),Mt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function w(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",w),l.removeEventListener("inputsourceschange",F);for(let tt=0;tt<V.length;tt++){const _t=I[tt];_t!==null&&(I[tt]=null,V[tt].disconnect(_t))}at=null,ot=null,M.reset();for(const tt in v)delete v[tt];e.setRenderTarget(P),E=null,_=null,S=null,l=null,N=null,Nt.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){u=tt,r.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){p=tt,r.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(tt){h=tt},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",w),l.addEventListener("inputsourceschange",F),D.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Ot=null,Ht=null;D.depth&&(Ht=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=D.stencil?Dr:va,Ot=D.stencil?Go:Hi);const Kt={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:u};S=this.getBinding(),_=S.createProjectionLayer(Kt),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new zi(_.textureWidth,_.textureHeight,{format:Ti,type:di,depthTexture:new Vo(_.textureWidth,_.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Mt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new zi(E.framebufferWidth,E.framebufferHeight,{format:Ti,type:di,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Nt.setContext(l),Nt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(tt){for(let _t=0;_t<tt.removed.length;_t++){const Mt=tt.removed[_t],Ot=I.indexOf(Mt);Ot>=0&&(I[Ot]=null,V[Ot].disconnect(Mt))}for(let _t=0;_t<tt.added.length;_t++){const Mt=tt.added[_t];let Ot=I.indexOf(Mt);if(Ot===-1){for(let Kt=0;Kt<V.length;Kt++)if(Kt>=I.length){I.push(Mt),Ot=Kt;break}else if(I[Kt]===null){I[Kt]=Mt,Ot=Kt;break}if(Ot===-1)break}const Ht=V[Ot];Ht&&Ht.connect(Mt)}}const rt=new it,dt=new it;function St(tt,_t,Mt){rt.setFromMatrixPosition(_t.matrixWorld),dt.setFromMatrixPosition(Mt.matrixWorld);const Ot=rt.distanceTo(dt),Ht=_t.projectionMatrix.elements,Kt=Mt.projectionMatrix.elements,Ue=Ht[14]/(Ht[10]-1),ce=Ht[14]/(Ht[10]+1),me=(Ht[9]+1)/Ht[5],be=(Ht[9]-1)/Ht[5],ie=(Ht[8]-1)/Ht[0],ke=(Kt[8]+1)/Kt[0],G=Ue*ie,Ye=Ue*ke,ye=Ot/(-ie+ke),Ne=ye*-ie;if(_t.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Ne),tt.translateZ(ye),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Ht[10]===-1)tt.projectionMatrix.copy(_t.projectionMatrix),tt.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const Yt=Ue+ye,L=ce+ye,y=G-Ne,q=Ye+(Ot-Ne),pt=me*ce/L*Yt,xt=be*ce/L*Yt;tt.projectionMatrix.makePerspective(y,q,pt,xt,Yt,L),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function O(tt,_t){_t===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(_t.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let _t=tt.near,Mt=tt.far;M.texture!==null&&(M.depthNear>0&&(_t=M.depthNear),M.depthFar>0&&(Mt=M.depthFar)),$.near=ht.near=U.near=_t,$.far=ht.far=U.far=Mt,(at!==$.near||ot!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),at=$.near,ot=$.far),$.layers.mask=tt.layers.mask|6,U.layers.mask=$.layers.mask&-5,ht.layers.mask=$.layers.mask&-3;const Ot=tt.parent,Ht=$.cameras;O($,Ot);for(let Kt=0;Kt<Ht.length;Kt++)O(Ht[Kt],Ot);Ht.length===2?St($,U,ht):$.projectionMatrix.copy(U.projectionMatrix),Y(tt,$,Ot)};function Y(tt,_t,Mt){Mt===null?tt.matrix.copy(_t.matrixWorld):(tt.matrix.copy(Mt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(_t.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(_t.projectionMatrix),tt.projectionMatrixInverse.copy(_t.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=yh*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(_===null&&E===null))return m},this.setFoveation=function(tt){m=tt,_!==null&&(_.fixedFoveation=tt),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh($)},this.getCameraTexture=function(tt){return v[tt]};let gt=null;function Tt(tt,_t){if(x=_t.getViewerPose(h||d),b=_t,x!==null){const Mt=x.views;E!==null&&(e.setRenderTargetFramebuffer(N,E.framebuffer),e.setRenderTarget(N));let Ot=!1;Mt.length!==$.cameras.length&&($.cameras.length=0,Ot=!0);for(let ce=0;ce<Mt.length;ce++){const me=Mt[ce];let be=null;if(E!==null)be=E.getViewport(me);else{const ke=S.getViewSubImage(_,me);be=ke.viewport,ce===0&&(e.setRenderTargetTextures(N,ke.colorTexture,ke.depthStencilTexture),e.setRenderTarget(N))}let ie=H[ce];ie===void 0&&(ie=new Ei,ie.layers.enable(ce),ie.viewport=new en,H[ce]=ie),ie.matrix.fromArray(me.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(me.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(be.x,be.y,be.width,be.height),ce===0&&($.matrix.copy(ie.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ot===!0&&$.cameras.push(ie)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){S=r.getBinding();const ce=S.getDepthInformation(Mt[0]);ce&&ce.isValid&&ce.texture&&M.init(ce,l.renderState)}if(Ht&&Ht.includes("camera-access")&&C){e.state.unbindTexture(),S=r.getBinding();for(let ce=0;ce<Mt.length;ce++){const me=Mt[ce].camera;if(me){let be=v[me];be||(be=new j_,v[me]=be);const ie=S.getCameraImage(me);be.sourceTexture=ie}}}}for(let Mt=0;Mt<V.length;Mt++){const Ot=I[Mt],Ht=V[Mt];Ot!==null&&Ht!==void 0&&Ht.update(Ot,_t,h||d)}gt&&gt(tt,_t),_t.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_t}),b=null}const Nt=new Q_;Nt.setAnimationLoop(Tt),this.setAnimationLoop=function(tt){gt=tt},this.dispose=function(){}}}const Tr=new xa,b1=new fn;function T1(o,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,Z_(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,D,P,N){v.isMeshBasicMaterial?u(M,v):v.isMeshLambertMaterial?(u(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(u(M,v),S(M,v)):v.isMeshPhongMaterial?(u(M,v),x(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(u(M,v),_(M,v),v.isMeshPhysicalMaterial&&E(M,v,N)):v.isMeshMatcapMaterial?(u(M,v),b(M,v)):v.isMeshDepthMaterial?u(M,v):v.isMeshDistanceMaterial?(u(M,v),C(M,v)):v.isMeshNormalMaterial?u(M,v):v.isLineBasicMaterial?(d(M,v),v.isLineDashedMaterial&&p(M,v)):v.isPointsMaterial?m(M,v,D,P):v.isSpriteMaterial?h(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Vn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Vn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const D=e.get(v),P=D.envMap,N=D.envMapRotation;P&&(M.envMap.value=P,Tr.copy(N),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),M.envMapRotation.value.setFromMatrix4(b1.makeRotationFromEuler(Tr)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function d(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function p(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,D,P){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*D,M.scale.value=P*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function x(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function S(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function _(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function E(M,v,D){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function C(M,v){const D=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function A1(o,e,i,r){let l={},u={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,P){const N=P.program;r.uniformBlockBinding(D,N)}function h(D,P){let N=l[D.id];N===void 0&&(b(D),N=x(D),l[D.id]=N,D.addEventListener("dispose",M));const V=P.program;r.updateUBOMapping(D,V);const I=e.render.frame;u[D.id]!==I&&(_(D),u[D.id]=I)}function x(D){const P=S();D.__bindingPointIndex=P;const N=o.createBuffer(),V=D.__size,I=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,V,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,N),N}function S(){for(let D=0;D<p;D++)if(d.indexOf(D)===-1)return d.push(D),D;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const P=l[D.id],N=D.uniforms,V=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let I=0,B=N.length;I<B;I++){const T=Array.isArray(N[I])?N[I]:[N[I]];for(let U=0,ht=T.length;U<ht;U++){const H=T[U];if(E(H,I,U,V)===!0){const $=H.__offset,at=Array.isArray(H.value)?H.value:[H.value];let ot=0;for(let Z=0;Z<at.length;Z++){const w=at[Z],F=C(w);typeof w=="number"||typeof w=="boolean"?(H.__data[0]=w,o.bufferSubData(o.UNIFORM_BUFFER,$+ot,H.__data)):w.isMatrix3?(H.__data[0]=w.elements[0],H.__data[1]=w.elements[1],H.__data[2]=w.elements[2],H.__data[3]=0,H.__data[4]=w.elements[3],H.__data[5]=w.elements[4],H.__data[6]=w.elements[5],H.__data[7]=0,H.__data[8]=w.elements[6],H.__data[9]=w.elements[7],H.__data[10]=w.elements[8],H.__data[11]=0):(w.toArray(H.__data,ot),ot+=F.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,$,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(D,P,N,V){const I=D.value,B=P+"_"+N;if(V[B]===void 0)return typeof I=="number"||typeof I=="boolean"?V[B]=I:V[B]=I.clone(),!0;{const T=V[B];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return V[B]=I,!0}else if(T.equals(I)===!1)return T.copy(I),!0}return!1}function b(D){const P=D.uniforms;let N=0;const V=16;for(let B=0,T=P.length;B<T;B++){const U=Array.isArray(P[B])?P[B]:[P[B]];for(let ht=0,H=U.length;ht<H;ht++){const $=U[ht],at=Array.isArray($.value)?$.value:[$.value];for(let ot=0,Z=at.length;ot<Z;ot++){const w=at[ot],F=C(w),rt=N%V,dt=rt%F.boundary,St=rt+dt;N+=dt,St!==0&&V-St<F.storage&&(N+=V-St),$.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=N,N+=F.storage}}}const I=N%V;return I>0&&(N+=V-I),D.__size=N,D.__cache={},this}function C(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",D),P}function M(D){const P=D.target;P.removeEventListener("dispose",M);const N=d.indexOf(P.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function v(){for(const D in l)o.deleteBuffer(l[D]);d=[],l={},u={}}return{bind:m,update:h,dispose:v}}const R1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ni=null;function C1(){return Ni===null&&(Ni=new MM(R1,16,16,Ls,_a),Ni.name="DFG_LUT",Ni.minFilter=Rn,Ni.magFilter=Rn,Ni.wrapS=ha,Ni.wrapT=ha,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}class w1{constructor(e={}){const{canvas:i=QS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:_=!1,outputBufferType:E=di}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const C=E,M=new Set([Lh,Uh,Dh]),v=new Set([di,Hi,Ho,Go,Ch,wh]),D=new Uint32Array(4),P=new Int32Array(4);let N=null,V=null;const I=[],B=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let ht=!1;this._outputColorSpace=fi;let H=0,$=0,at=null,ot=-1,Z=null;const w=new en,F=new en;let rt=null;const dt=new Ve(0);let St=0,O=i.width,Y=i.height,gt=1,Tt=null,Nt=null;const tt=new en(0,0,O,Y),_t=new en(0,0,O,Y);let Mt=!1;const Ot=new q_;let Ht=!1,Kt=!1;const Ue=new fn,ce=new it,me=new en,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function ke(){return at===null?gt:1}let G=r;function Ye(R,k){return i.getContext(R,k)}try{const R={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ah}`),i.addEventListener("webglcontextlost",Gt,!1),i.addEventListener("webglcontextrestored",ne,!1),i.addEventListener("webglcontextcreationerror",Pe,!1),G===null){const k="webgl2";if(G=Ye(k,R),G===null)throw Ye(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw De("WebGLRenderer: "+R.message),R}let ye,Ne,Yt,L,y,q,pt,xt,ut,Wt,Ct,Qt,te,bt,yt,Pt,Lt,Ft,ue,W,Rt,At,Bt;function Et(){ye=new wb(G),ye.init(),Rt=new x1(G,ye),Ne=new Mb(G,ye,e,Rt),Yt=new _1(G,ye),Ne.reversedDepthBuffer&&_&&Yt.buffers.depth.setReversed(!0),L=new Lb(G),y=new i1,q=new v1(G,ye,Yt,y,Ne,Rt,L),pt=new Cb(U),xt=new BM(G),At=new xb(G,xt),ut=new Db(G,xt,L,At),Wt=new Ob(G,ut,xt,At,L),Ft=new Nb(G,Ne,q),yt=new yb(y),Ct=new n1(U,pt,ye,Ne,At,yt),Qt=new T1(U,y),te=new r1,bt=new f1(ye),Lt=new vb(U,pt,Yt,Wt,b,m),Pt=new g1(U,Wt,Ne),Bt=new A1(G,L,Ne,Yt),ue=new Sb(G,ye,L),W=new Ub(G,ye,L),L.programs=Ct.programs,U.capabilities=Ne,U.extensions=ye,U.properties=y,U.renderLists=te,U.shadowMap=Pt,U.state=Yt,U.info=L}Et(),C!==di&&(T=new Fb(C,i.width,i.height,l,u));const ct=new E1(U,G);this.xr=ct,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=ye.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ye.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(R){R!==void 0&&(gt=R,this.setSize(O,Y,!1))},this.getSize=function(R){return R.set(O,Y)},this.setSize=function(R,k,st=!0){if(ct.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,Y=k,i.width=Math.floor(R*gt),i.height=Math.floor(k*gt),st===!0&&(i.style.width=R+"px",i.style.height=k+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(O*gt,Y*gt).floor()},this.setDrawingBufferSize=function(R,k,st){O=R,Y=k,gt=st,i.width=Math.floor(R*st),i.height=Math.floor(k*st),this.setViewport(0,0,R,k)},this.setEffects=function(R){if(C===di){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let k=0;k<R.length;k++)if(R[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(tt)},this.setViewport=function(R,k,st,et){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,k,st,et),Yt.viewport(w.copy(tt).multiplyScalar(gt).round())},this.getScissor=function(R){return R.copy(_t)},this.setScissor=function(R,k,st,et){R.isVector4?_t.set(R.x,R.y,R.z,R.w):_t.set(R,k,st,et),Yt.scissor(F.copy(_t).multiplyScalar(gt).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){Yt.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){Tt=R},this.setTransparentSort=function(R){Nt=R},this.getClearColor=function(R){return R.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,st=!0){let et=0;if(R){let K=!1;if(at!==null){const wt=at.texture.format;K=M.has(wt)}if(K){const wt=at.texture.type,zt=v.has(wt),Dt=Lt.getClearColor(),qt=Lt.getClearAlpha(),Zt=Dt.r,ee=Dt.g,se=Dt.b;zt?(D[0]=Zt,D[1]=ee,D[2]=se,D[3]=qt,G.clearBufferuiv(G.COLOR,0,D)):(P[0]=Zt,P[1]=ee,P[2]=se,P[3]=qt,G.clearBufferiv(G.COLOR,0,P))}else et|=G.COLOR_BUFFER_BIT}k&&(et|=G.DEPTH_BUFFER_BIT),st&&(et|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&G.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Gt,!1),i.removeEventListener("webglcontextrestored",ne,!1),i.removeEventListener("webglcontextcreationerror",Pe,!1),Lt.dispose(),te.dispose(),bt.dispose(),y.dispose(),pt.dispose(),Wt.dispose(),At.dispose(),Bt.dispose(),Ct.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Nr),ct.removeEventListener("sessionend",Or),Ri.stop()};function Gt(R){R.preventDefault(),O0("WebGLRenderer: Context Lost."),ht=!0}function ne(){O0("WebGLRenderer: Context Restored."),ht=!1;const R=L.autoReset,k=Pt.enabled,st=Pt.autoUpdate,et=Pt.needsUpdate,K=Pt.type;Et(),L.autoReset=R,Pt.enabled=k,Pt.autoUpdate=st,Pt.needsUpdate=et,Pt.type=K}function Pe(R){De("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Te(R){const k=R.target;k.removeEventListener("dispose",Te),Cn(k)}function Cn(R){hi(R),y.remove(R)}function hi(R){const k=y.get(R).programs;k!==void 0&&(k.forEach(function(st){Ct.releaseProgram(st)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,st,et,K,wt){k===null&&(k=be);const zt=K.isMesh&&K.matrixWorld.determinant()<0,Dt=Ko(R,k,st,et,K);Yt.setMaterial(et,zt);let qt=st.index,Zt=1;if(et.wireframe===!0){if(qt=ut.getWireframeAttribute(st),qt===void 0)return;Zt=2}const ee=st.drawRange,se=st.attributes.position;let Vt=ee.start*Zt,fe=(ee.start+ee.count)*Zt;wt!==null&&(Vt=Math.max(Vt,wt.start*Zt),fe=Math.min(fe,(wt.start+wt.count)*Zt)),qt!==null?(Vt=Math.max(Vt,0),fe=Math.min(fe,qt.count)):se!=null&&(Vt=Math.max(Vt,0),fe=Math.min(fe,se.count));const je=fe-Vt;if(je<0||je===1/0)return;At.setup(K,et,Dt,st,qt);let Ze,Re=ue;if(qt!==null&&(Ze=xt.get(qt),Re=W,Re.setIndex(Ze)),K.isMesh)et.wireframe===!0?(Yt.setLineWidth(et.wireframeLinewidth*ke()),Re.setMode(G.LINES)):Re.setMode(G.TRIANGLES);else if(K.isLine){let hn=et.linewidth;hn===void 0&&(hn=1),Yt.setLineWidth(hn*ke()),K.isLineSegments?Re.setMode(G.LINES):K.isLineLoop?Re.setMode(G.LINE_LOOP):Re.setMode(G.LINE_STRIP)}else K.isPoints?Re.setMode(G.POINTS):K.isSprite&&Re.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)zc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Re.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const hn=K._multiDrawStarts,kt=K._multiDrawCounts,wn=K._multiDrawCount,ae=qt?xt.get(qt).bytesPerElement:1,Dn=y.get(et).currentProgram.getUniforms();for(let Xn=0;Xn<wn;Xn++)Dn.setValue(G,"_gl_DrawID",Xn),Re.render(hn[Xn]/ae,kt[Xn])}else if(K.isInstancedMesh)Re.renderInstances(Vt,je,K.count);else if(st.isInstancedBufferGeometry){const hn=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,kt=Math.min(st.instanceCount,hn);Re.renderInstances(Vt,je,kt)}else Re.render(Vt,je)};function zs(R,k,st){R.transparent===!0&&R.side===da&&R.forceSinglePass===!1?(R.side=Vn,R.needsUpdate=!0,Ma(R,k,st),R.side=er,R.needsUpdate=!0,Ma(R,k,st),R.side=da):Ma(R,k,st)}this.compile=function(R,k,st=null){st===null&&(st=R),V=bt.get(st),V.init(k),B.push(V),st.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(V.pushLight(K),K.castShadow&&V.pushShadow(K))}),R!==st&&R.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(V.pushLight(K),K.castShadow&&V.pushShadow(K))}),V.setupLights();const et=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const wt=K.material;if(wt)if(Array.isArray(wt))for(let zt=0;zt<wt.length;zt++){const Dt=wt[zt];zs(Dt,st,K),et.add(Dt)}else zs(wt,st,K),et.add(wt)}),V=B.pop(),et},this.compileAsync=function(R,k,st=null){const et=this.compile(R,k,st);return new Promise(K=>{function wt(){if(et.forEach(function(zt){y.get(zt).currentProgram.isReady()&&et.delete(zt)}),et.size===0){K(R);return}setTimeout(wt,10)}ye.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Lr=null;function Yo(R){Lr&&Lr(R)}function Nr(){Ri.stop()}function Or(){Ri.start()}const Ri=new Q_;Ri.setAnimationLoop(Yo),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(R){Lr=R,ct.setAnimationLoop(R),R===null?Ri.stop():Ri.start()},ct.addEventListener("sessionstart",Nr),ct.addEventListener("sessionend",Or),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ht===!0)return;const st=ct.enabled===!0&&ct.isPresenting===!0,et=T!==null&&(at===null||st)&&T.begin(U,at);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(k),k=ct.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,k,at),V=bt.get(R,B.length),V.init(k),B.push(V),Ue.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ot.setFromProjectionMatrix(Ue,Fi,k.reversedDepth),Kt=this.localClippingEnabled,Ht=yt.init(this.clippingPlanes,Kt),N=te.get(R,I.length),N.init(),I.push(N),ct.enabled===!0&&ct.isPresenting===!0){const zt=U.xr.getDepthSensingMesh();zt!==null&&Pr(zt,k,-1/0,U.sortObjects)}Pr(R,k,0,U.sortObjects),N.finish(),U.sortObjects===!0&&N.sort(Tt,Nt),ie=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ie&&Lt.addToRenderList(N,R),this.info.render.frame++,Ht===!0&&yt.beginShadows();const K=V.state.shadowsArray;if(Pt.render(K,R,k),Ht===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&T.hasRenderPass())===!1){const zt=N.opaque,Dt=N.transmissive;if(V.setupLights(),k.isArrayCamera){const qt=k.cameras;if(Dt.length>0)for(let Zt=0,ee=qt.length;Zt<ee;Zt++){const se=qt[Zt];nn(zt,Dt,R,se)}ie&&Lt.render(R);for(let Zt=0,ee=qt.length;Zt<ee;Zt++){const se=qt[Zt];pi(N,R,se,se.viewport)}}else Dt.length>0&&nn(zt,Dt,R,k),ie&&Lt.render(R),pi(N,R,k)}at!==null&&$===0&&(q.updateMultisampleRenderTarget(at),q.updateRenderTargetMipmap(at)),et&&T.end(U),R.isScene===!0&&R.onAfterRender(U,R,k),At.resetDefaultState(),ot=-1,Z=null,B.pop(),B.length>0?(V=B[B.length-1],Ht===!0&&yt.setGlobalState(U.clippingPlanes,V.state.camera)):V=null,I.pop(),I.length>0?N=I[I.length-1]:N=null};function Pr(R,k,st,et){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)V.pushLight(R),R.castShadow&&V.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ot.intersectsSprite(R)){et&&me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ue);const zt=Wt.update(R),Dt=R.material;Dt.visible&&N.push(R,zt,Dt,st,me.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ot.intersectsObject(R))){const zt=Wt.update(R),Dt=R.material;if(et&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),me.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),me.copy(zt.boundingSphere.center)),me.applyMatrix4(R.matrixWorld).applyMatrix4(Ue)),Array.isArray(Dt)){const qt=zt.groups;for(let Zt=0,ee=qt.length;Zt<ee;Zt++){const se=qt[Zt],Vt=Dt[se.materialIndex];Vt&&Vt.visible&&N.push(R,zt,Vt,st,me.z,se)}}else Dt.visible&&N.push(R,zt,Dt,st,me.z,null)}}const wt=R.children;for(let zt=0,Dt=wt.length;zt<Dt;zt++)Pr(wt[zt],k,st,et)}function pi(R,k,st,et){const{opaque:K,transmissive:wt,transparent:zt}=R;V.setupLightsView(st),Ht===!0&&yt.setGlobalState(U.clippingPlanes,st),et&&Yt.viewport(w.copy(et)),K.length>0&&dn(K,k,st),wt.length>0&&dn(wt,k,st),zt.length>0&&dn(zt,k,st),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function nn(R,k,st,et){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(V.state.transmissionRenderTarget[et.id]===void 0){const Vt=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");V.state.transmissionRenderTarget[et.id]=new zi(1,1,{generateMipmaps:!0,type:Vt?_a:di,minFilter:wr,samples:Ne.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}const wt=V.state.transmissionRenderTarget[et.id],zt=et.viewport||w;wt.setSize(zt.z*U.transmissionResolutionScale,zt.w*U.transmissionResolutionScale);const Dt=U.getRenderTarget(),qt=U.getActiveCubeFace(),Zt=U.getActiveMipmapLevel();U.setRenderTarget(wt),U.getClearColor(dt),St=U.getClearAlpha(),St<1&&U.setClearColor(16777215,.5),U.clear(),ie&&Lt.render(st);const ee=U.toneMapping;U.toneMapping=Bi;const se=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),V.setupLightsView(et),Ht===!0&&yt.setGlobalState(U.clippingPlanes,et),dn(R,st,et),q.updateMultisampleRenderTarget(wt),q.updateRenderTargetMipmap(wt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let fe=0,je=k.length;fe<je;fe++){const Ze=k[fe],{object:Re,geometry:hn,material:kt,group:wn}=Ze;if(kt.side===da&&Re.layers.test(et.layers)){const ae=kt.side;kt.side=Vn,kt.needsUpdate=!0,Vi(Re,st,et,hn,kt,wn),kt.side=ae,kt.needsUpdate=!0,Vt=!0}}Vt===!0&&(q.updateMultisampleRenderTarget(wt),q.updateRenderTargetMipmap(wt))}U.setRenderTarget(Dt,qt,Zt),U.setClearColor(dt,St),se!==void 0&&(et.viewport=se),U.toneMapping=ee}function dn(R,k,st){const et=k.isScene===!0?k.overrideMaterial:null;for(let K=0,wt=R.length;K<wt;K++){const zt=R[K],{object:Dt,geometry:qt,group:Zt}=zt;let ee=zt.material;ee.allowOverride===!0&&et!==null&&(ee=et),Dt.layers.test(st.layers)&&Vi(Dt,k,st,qt,ee,Zt)}}function Vi(R,k,st,et,K,wt){R.onBeforeRender(U,k,st,et,K,wt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(U,k,st,et,R,wt),K.transparent===!0&&K.side===da&&K.forceSinglePass===!1?(K.side=Vn,K.needsUpdate=!0,U.renderBufferDirect(st,k,et,K,R,wt),K.side=er,K.needsUpdate=!0,U.renderBufferDirect(st,k,et,K,R,wt),K.side=da):U.renderBufferDirect(st,k,et,K,R,wt),R.onAfterRender(U,k,st,et,K,wt)}function Ma(R,k,st){k.isScene!==!0&&(k=be);const et=y.get(R),K=V.state.lights,wt=V.state.shadowsArray,zt=K.state.version,Dt=Ct.getParameters(R,K.state,wt,k,st),qt=Ct.getProgramCacheKey(Dt);let Zt=et.programs;et.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?k.environment:null,et.fog=k.fog;const ee=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;et.envMap=pt.get(R.envMap||et.environment,ee),et.envMapRotation=et.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Zt===void 0&&(R.addEventListener("dispose",Te),Zt=new Map,et.programs=Zt);let se=Zt.get(qt);if(se!==void 0){if(et.currentProgram===se&&et.lightsStateVersion===zt)return Zo(R,Dt),se}else Dt.uniforms=Ct.getUniforms(R),R.onBeforeCompile(Dt,U),se=Ct.acquireProgram(Dt,qt),Zt.set(qt,se),et.uniforms=Dt.uniforms;const Vt=et.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Vt.clippingPlanes=yt.uniform),Zo(R,Dt),et.needsLights=Is(R),et.lightsStateVersion=zt,et.needsLights&&(Vt.ambientLightColor.value=K.state.ambient,Vt.lightProbe.value=K.state.probe,Vt.directionalLights.value=K.state.directional,Vt.directionalLightShadows.value=K.state.directionalShadow,Vt.spotLights.value=K.state.spot,Vt.spotLightShadows.value=K.state.spotShadow,Vt.rectAreaLights.value=K.state.rectArea,Vt.ltc_1.value=K.state.rectAreaLTC1,Vt.ltc_2.value=K.state.rectAreaLTC2,Vt.pointLights.value=K.state.point,Vt.pointLightShadows.value=K.state.pointShadow,Vt.hemisphereLights.value=K.state.hemi,Vt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Vt.spotLightMatrix.value=K.state.spotLightMatrix,Vt.spotLightMap.value=K.state.spotLightMap,Vt.pointShadowMatrix.value=K.state.pointShadowMatrix),et.currentProgram=se,et.uniformsList=null,se}function jo(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Oc.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Zo(R,k){const st=y.get(R);st.outputColorSpace=k.outputColorSpace,st.batching=k.batching,st.batchingColor=k.batchingColor,st.instancing=k.instancing,st.instancingColor=k.instancingColor,st.instancingMorph=k.instancingMorph,st.skinning=k.skinning,st.morphTargets=k.morphTargets,st.morphNormals=k.morphNormals,st.morphColors=k.morphColors,st.morphTargetsCount=k.morphTargetsCount,st.numClippingPlanes=k.numClippingPlanes,st.numIntersection=k.numClipIntersection,st.vertexAlphas=k.vertexAlphas,st.vertexTangents=k.vertexTangents,st.toneMapping=k.toneMapping}function Ko(R,k,st,et,K){k.isScene!==!0&&(k=be),q.resetTextureUnits();const wt=k.fog,zt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?k.environment:null,Dt=at===null?U.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ns,qt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Zt=pt.get(et.envMap||zt,qt),ee=et.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,se=!!st.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Vt=!!st.morphAttributes.position,fe=!!st.morphAttributes.normal,je=!!st.morphAttributes.color;let Ze=Bi;et.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ze=U.toneMapping);const Re=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,hn=Re!==void 0?Re.length:0,kt=y.get(et),wn=V.state.lights;if(Ht===!0&&(Kt===!0||R!==Z)){const rn=R===Z&&et.id===ot;yt.setState(et,R,rn)}let ae=!1;et.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==wn.state.version||kt.outputColorSpace!==Dt||K.isBatchedMesh&&kt.batching===!1||!K.isBatchedMesh&&kt.batching===!0||K.isBatchedMesh&&kt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&kt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&kt.instancing===!1||!K.isInstancedMesh&&kt.instancing===!0||K.isSkinnedMesh&&kt.skinning===!1||!K.isSkinnedMesh&&kt.skinning===!0||K.isInstancedMesh&&kt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&kt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&kt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&kt.instancingMorph===!1&&K.morphTexture!==null||kt.envMap!==Zt||et.fog===!0&&kt.fog!==wt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==yt.numPlanes||kt.numIntersection!==yt.numIntersection)||kt.vertexAlphas!==ee||kt.vertexTangents!==se||kt.morphTargets!==Vt||kt.morphNormals!==fe||kt.morphColors!==je||kt.toneMapping!==Ze||kt.morphTargetsCount!==hn)&&(ae=!0):(ae=!0,kt.__version=et.version);let Dn=kt.currentProgram;ae===!0&&(Dn=Ma(et,k,K));let Xn=!1,mi=!1,kn=!1;const Oe=Dn.getUniforms(),an=kt.uniforms;if(Yt.useProgram(Dn.program)&&(Xn=!0,mi=!0,kn=!0),et.id!==ot&&(ot=et.id,mi=!0),Xn||Z!==R){Yt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Oe.setValue(G,"projectionMatrix",R.projectionMatrix),Oe.setValue(G,"viewMatrix",R.matrixWorldInverse);const gi=Oe.map.cameraPosition;gi!==void 0&&gi.setValue(G,ce.setFromMatrixPosition(R.matrixWorld)),Ne.logarithmicDepthBuffer&&Oe.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Oe.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),Z!==R&&(Z=R,mi=!0,kn=!0)}if(kt.needsLights&&(wn.state.directionalShadowMap.length>0&&Oe.setValue(G,"directionalShadowMap",wn.state.directionalShadowMap,q),wn.state.spotShadowMap.length>0&&Oe.setValue(G,"spotShadowMap",wn.state.spotShadowMap,q),wn.state.pointShadowMap.length>0&&Oe.setValue(G,"pointShadowMap",wn.state.pointShadowMap,q)),K.isSkinnedMesh){Oe.setOptional(G,K,"bindMatrix"),Oe.setOptional(G,K,"bindMatrixInverse");const rn=K.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Oe.setValue(G,"boneTexture",rn.boneTexture,q))}K.isBatchedMesh&&(Oe.setOptional(G,K,"batchingTexture"),Oe.setValue(G,"batchingTexture",K._matricesTexture,q),Oe.setOptional(G,K,"batchingIdTexture"),Oe.setValue(G,"batchingIdTexture",K._indirectTexture,q),Oe.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&Oe.setValue(G,"batchingColorTexture",K._colorsTexture,q));const Un=st.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Ft.update(K,st,Dn),(mi||kt.receiveShadow!==K.receiveShadow)&&(kt.receiveShadow=K.receiveShadow,Oe.setValue(G,"receiveShadow",K.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&k.environment!==null&&(an.envMapIntensity.value=k.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=C1()),mi&&(Oe.setValue(G,"toneMappingExposure",U.toneMappingExposure),kt.needsLights&&nr(an,kn),wt&&et.fog===!0&&Qt.refreshFogUniforms(an,wt),Qt.refreshMaterialUniforms(an,et,gt,Y,V.state.transmissionRenderTarget[R.id]),Oc.upload(G,jo(kt),an,q)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Oc.upload(G,jo(kt),an,q),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Oe.setValue(G,"center",K.center),Oe.setValue(G,"modelViewMatrix",K.modelViewMatrix),Oe.setValue(G,"normalMatrix",K.normalMatrix),Oe.setValue(G,"modelMatrix",K.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const rn=et.uniformsGroups;for(let gi=0,Xi=rn.length;gi<Xi;gi++){const Fr=rn[gi];Bt.update(Fr,Dn),Bt.bind(Fr,Dn)}}return Dn}function nr(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Is(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(R,k,st){const et=y.get(R);et.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),y.get(R.texture).__webglTexture=k,y.get(R.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:st,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){const st=y.get(R);st.__webglFramebuffer=k,st.__useDefaultFramebuffer=k===void 0};const ya=G.createFramebuffer();this.setRenderTarget=function(R,k=0,st=0){at=R,H=k,$=st;let et=null,K=!1,wt=!1;if(R){const Dt=y.get(R);if(Dt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(G.FRAMEBUFFER,Dt.__webglFramebuffer),w.copy(R.viewport),F.copy(R.scissor),rt=R.scissorTest,Yt.viewport(w),Yt.scissor(F),Yt.setScissorTest(rt),ot=-1;return}else if(Dt.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Dt.__hasExternalTextures)q.rebindTextures(R,y.get(R.texture).__webglTexture,y.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ee=R.depthTexture;if(Dt.__boundDepthTexture!==ee){if(ee!==null&&y.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const qt=R.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(wt=!0);const Zt=y.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Zt[k])?et=Zt[k][st]:et=Zt[k],K=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?et=y.get(R).__webglMultisampledFramebuffer:Array.isArray(Zt)?et=Zt[st]:et=Zt,w.copy(R.viewport),F.copy(R.scissor),rt=R.scissorTest}else w.copy(tt).multiplyScalar(gt).floor(),F.copy(_t).multiplyScalar(gt).floor(),rt=Mt;if(st!==0&&(et=ya),Yt.bindFramebuffer(G.FRAMEBUFFER,et)&&Yt.drawBuffers(R,et),Yt.viewport(w),Yt.scissor(F),Yt.setScissorTest(rt),K){const Dt=y.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,Dt.__webglTexture,st)}else if(wt){const Dt=k;for(let qt=0;qt<R.textures.length;qt++){const Zt=y.get(R.textures[qt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+qt,Zt.__webglTexture,st,Dt)}}else if(R!==null&&st!==0){const Dt=y.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Dt.__webglTexture,st)}ot=-1},this.readRenderTargetPixels=function(R,k,st,et,K,wt,zt,Dt=0){if(!(R&&R.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(qt=qt[zt]),qt){Yt.bindFramebuffer(G.FRAMEBUFFER,qt);try{const Zt=R.textures[Dt],ee=Zt.format,se=Zt.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Dt),!Ne.textureFormatReadable(ee)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(se)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-et&&st>=0&&st<=R.height-K&&G.readPixels(k,st,et,K,Rt.convert(ee),Rt.convert(se),wt)}finally{const Zt=at!==null?y.get(at).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(R,k,st,et,K,wt,zt,Dt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(qt=qt[zt]),qt)if(k>=0&&k<=R.width-et&&st>=0&&st<=R.height-K){Yt.bindFramebuffer(G.FRAMEBUFFER,qt);const Zt=R.textures[Dt],ee=Zt.format,se=Zt.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Dt),!Ne.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Vt),G.bufferData(G.PIXEL_PACK_BUFFER,wt.byteLength,G.STREAM_READ),G.readPixels(k,st,et,K,Rt.convert(ee),Rt.convert(se),0);const fe=at!==null?y.get(at).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,fe);const je=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await JS(G,je,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Vt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,wt),G.deleteBuffer(Vt),G.deleteSync(je),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,st=0){const et=Math.pow(2,-st),K=Math.floor(R.image.width*et),wt=Math.floor(R.image.height*et),zt=k!==null?k.x:0,Dt=k!==null?k.y:0;q.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,zt,Dt,K,wt),Yt.unbindTexture()};const Ea=G.createFramebuffer(),ir=G.createFramebuffer();this.copyTextureToTexture=function(R,k,st=null,et=null,K=0,wt=0){let zt,Dt,qt,Zt,ee,se,Vt,fe,je;const Ze=R.isCompressedTexture?R.mipmaps[wt]:R.image;if(st!==null)zt=st.max.x-st.min.x,Dt=st.max.y-st.min.y,qt=st.isBox3?st.max.z-st.min.z:1,Zt=st.min.x,ee=st.min.y,se=st.isBox3?st.min.z:0;else{const an=Math.pow(2,-K);zt=Math.floor(Ze.width*an),Dt=Math.floor(Ze.height*an),R.isDataArrayTexture?qt=Ze.depth:R.isData3DTexture?qt=Math.floor(Ze.depth*an):qt=1,Zt=0,ee=0,se=0}et!==null?(Vt=et.x,fe=et.y,je=et.z):(Vt=0,fe=0,je=0);const Re=Rt.convert(k.format),hn=Rt.convert(k.type);let kt;k.isData3DTexture?(q.setTexture3D(k,0),kt=G.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(q.setTexture2DArray(k,0),kt=G.TEXTURE_2D_ARRAY):(q.setTexture2D(k,0),kt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,k.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,k.unpackAlignment);const wn=G.getParameter(G.UNPACK_ROW_LENGTH),ae=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Dn=G.getParameter(G.UNPACK_SKIP_PIXELS),Xn=G.getParameter(G.UNPACK_SKIP_ROWS),mi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ze.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ze.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Zt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ee),G.pixelStorei(G.UNPACK_SKIP_IMAGES,se);const kn=R.isDataArrayTexture||R.isData3DTexture,Oe=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){const an=y.get(R),Un=y.get(k),rn=y.get(an.__renderTarget),gi=y.get(Un.__renderTarget);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,rn.__webglFramebuffer),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let Xi=0;Xi<qt;Xi++)kn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(R).__webglTexture,K,se+Xi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(k).__webglTexture,wt,je+Xi)),G.blitFramebuffer(Zt,ee,zt,Dt,Vt,fe,zt,Dt,G.DEPTH_BUFFER_BIT,G.NEAREST);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||y.has(R)){const an=y.get(R),Un=y.get(k);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,Ea),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,ir);for(let rn=0;rn<qt;rn++)kn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,an.__webglTexture,K,se+rn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,an.__webglTexture,K),Oe?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Un.__webglTexture,wt,je+rn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Un.__webglTexture,wt),K!==0?G.blitFramebuffer(Zt,ee,zt,Dt,Vt,fe,zt,Dt,G.COLOR_BUFFER_BIT,G.NEAREST):Oe?G.copyTexSubImage3D(kt,wt,Vt,fe,je+rn,Zt,ee,zt,Dt):G.copyTexSubImage2D(kt,wt,Vt,fe,Zt,ee,zt,Dt);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Oe?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(kt,wt,Vt,fe,je,zt,Dt,qt,Re,hn,Ze.data):k.isCompressedArrayTexture?G.compressedTexSubImage3D(kt,wt,Vt,fe,je,zt,Dt,qt,Re,Ze.data):G.texSubImage3D(kt,wt,Vt,fe,je,zt,Dt,qt,Re,hn,Ze):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,wt,Vt,fe,zt,Dt,Re,hn,Ze.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,wt,Vt,fe,Ze.width,Ze.height,Re,Ze.data):G.texSubImage2D(G.TEXTURE_2D,wt,Vt,fe,zt,Dt,Re,hn,Ze);G.pixelStorei(G.UNPACK_ROW_LENGTH,wn),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ae),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Dn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Xn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,mi),wt===0&&k.generateMipmaps&&G.generateMipmap(kt),Yt.unbindTexture()},this.initRenderTarget=function(R){y.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),Yt.unbindTexture()},this.resetState=function(){H=0,$=0,at=null,Yt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const D1=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,U1=`
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const vec3 BLACK = vec3(0.0);
const vec3 PINK  = vec3(233.0, 71.0, 245.0) / 255.0;
const vec3 BLUE  = vec3(47.0,  75.0, 162.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  vec3 col = vec3(0.0);

  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;

  col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) {
    return baseColor;
  }

  vec3 gradientColor;
  
  if (lineGradientCount == 1) {
    gradientColor = lineGradient[0];
  } else {
    float clampedT = clamp(t, 0.0, 0.9999);
    float scaled = clampedT * float(lineGradientCount - 1);
    int idx = int(floor(scaled));
    float f = fract(scaled);
    int idx2 = min(idx + 1, lineGradientCount - 1);

    vec3 c1 = lineGradient[idx];
    vec3 c2 = lineGradient[idx2];
    
    gradientColor = mix(c1, c2, f);
  }
  
  return gradientColor * 0.5;
}

  float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float time = iTime * animationSpeed;

  float x_offset   = offset;
  float x_movement = time * 0.1;
  float amp        = sin(offset + time * 0.2) * 0.3;
  float y          = sin(uv.x + x_offset + x_movement) * amp;

  if (shouldBend) {
    vec2 d = screenUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius); // radial falloff around cursor
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }

  float m = uv.y - y;
  return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;
  
  if (parallax) {
    baseUv += parallaxOffset;
  }

  vec3 col = vec3(0.0);

  vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);

  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }
  
  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.2;
    }
  }

  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi,
        baseUv,
        mouseUv,
        interactive
      );
    }
  }

  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      col += lineCol * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.1;
    }
  }

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`,M_=8;function L1(o){let e=o.trim();e.startsWith("#")&&(e=e.slice(1));let i=255,r=255,l=255;return e.length===3?(i=parseInt(e[0]+e[0],16),r=parseInt(e[1]+e[1],16),l=parseInt(e[2]+e[2],16)):e.length===6&&(i=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),l=parseInt(e.slice(4,6),16)),new it(i/255,r/255,l/255)}function N1({linesGradient:o,enabledWaves:e=["top","middle","bottom"],lineCount:i=[6],lineDistance:r=[5],topWavePosition:l,middleWavePosition:u,bottomWavePosition:d={x:2,y:-.7,rotate:-1},animationSpeed:p=1,interactive:m=!0,bendRadius:h=5,bendStrength:x=-.5,mouseDamping:S=.05,parallax:_=!0,parallaxStrength:E=.2,mixBlendMode:b="screen"}){const C=ti.useRef(null),M=ti.useRef(new Ee(-1e3,-1e3)),v=ti.useRef(new Ee(-1e3,-1e3)),D=ti.useRef(0),P=ti.useRef(0),N=ti.useRef(new Ee(0,0)),V=ti.useRef(new Ee(0,0)),I=ot=>{if(typeof i=="number")return i;if(!e.includes(ot))return 0;const Z=e.indexOf(ot);return i[Z]??6},B=ot=>{if(typeof r=="number")return r;if(!e.includes(ot))return .1;const Z=e.indexOf(ot);return r[Z]??.1},T=e.includes("top")?I("top"):0,U=e.includes("middle")?I("middle"):0,ht=e.includes("bottom")?I("bottom"):0,H=e.includes("top")?B("top")*.01:.01,$=e.includes("middle")?B("middle")*.01:.01,at=e.includes("bottom")?B("bottom")*.01:.01;return ti.useEffect(()=>{if(!C.current)return;const ot=new pM,Z=new Bh(-1,1,1,-1,0,1);Z.position.z=1;const w=new w1({antialias:!0,alpha:!1});w.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),w.domElement.style.width="100%",w.domElement.style.height="100%",w.domElement.style.position="fixed",w.domElement.style.left="0",w.domElement.style.top="0",w.domElement.style.zIndex="0",w.domElement.style.pointerEvents="none",(document.body||C.current).appendChild(w.domElement);const rt={iTime:{value:0},iResolution:{value:new it(1,1,1)},animationSpeed:{value:p},enableTop:{value:e.includes("top")},enableMiddle:{value:e.includes("middle")},enableBottom:{value:e.includes("bottom")},topLineCount:{value:T},middleLineCount:{value:U},bottomLineCount:{value:ht},topLineDistance:{value:H},middleLineDistance:{value:$},bottomLineDistance:{value:at},topWavePosition:{value:new it(l?.x??10,l?.y??.5,l?.rotate??-.4)},middleWavePosition:{value:new it(u?.x??5,u?.y??0,u?.rotate??.2)},bottomWavePosition:{value:new it(d?.x??2,d?.y??-.7,d?.rotate??.4)},iMouse:{value:new Ee(-1e3,-1e3)},interactive:{value:m},bendRadius:{value:h},bendStrength:{value:x},bendInfluence:{value:0},parallax:{value:_},parallaxStrength:{value:E},parallaxOffset:{value:new Ee(0,0)},lineGradient:{value:Array.from({length:M_},()=>new it(1,1,1))},lineGradientCount:{value:0}};if(o&&o.length>0){const Ot=o.slice(0,M_);rt.lineGradientCount.value=Ot.length,Ot.forEach((Ht,Kt)=>{const Ue=L1(Ht);rt.lineGradient.value[Kt].set(Ue.x,Ue.y,Ue.z)})}const dt=new Ai({uniforms:rt,vertexShader:D1,fragmentShader:U1}),St=new qo(2,2),O=new Gi(St,dt);ot.add(O);const Y=new PM,gt=()=>{const Ot=C.current,Ht=Ot.clientWidth||1,Kt=Ot.clientHeight||1;w.setSize(Ht,Kt,!1);const Ue=w.domElement.width,ce=w.domElement.height;rt.iResolution.value.set(Ue,ce,1)};gt();const Tt=typeof ResizeObserver<"u"?new ResizeObserver(gt):null;Tt&&C.current&&Tt.observe(C.current);const Nt=Ot=>{const Ht=w.domElement.getBoundingClientRect(),Kt=Ot.clientX-Ht.left,Ue=Ot.clientY-Ht.top,ce=w.getPixelRatio();if(M.current.set(Kt*ce,(Ht.height-Ue)*ce),D.current=1,_){const me=Ht.width/2,be=Ht.height/2,ie=(Kt-me)/Ht.width,ke=-(Ue-be)/Ht.height;N.current.set(ie*E,ke*E)}},tt=()=>{D.current=0};m&&(window.addEventListener("pointermove",Nt),document.addEventListener("mouseleave",tt));let _t=0;const Mt=()=>{rt.iTime.value=Y.getElapsedTime(),m&&(v.current.lerp(M.current,S),rt.iMouse.value.copy(v.current),P.current+=(D.current-P.current)*S,rt.bendInfluence.value=P.current),_&&(V.current.lerp(N.current,S),rt.parallaxOffset.value.copy(V.current)),w.render(ot,Z),_t=requestAnimationFrame(Mt)};return Mt(),()=>{cancelAnimationFrame(_t),Tt&&C.current&&Tt.disconnect(),m&&(w.domElement.removeEventListener("pointermove",Nt),window.removeEventListener("pointermove",Nt),document.removeEventListener("mouseleave",tt)),St.dispose(),dt.dispose(),w.dispose(),w.domElement.parentElement&&w.domElement.parentElement.removeChild(w.domElement)}},[o,e,i,r,l,u,d,p,m,h,x,S,_,E]),It.jsx("div",{ref:C,className:"w-full h-full relative overflow-hidden floating-lines-container",style:{mixBlendMode:b}})}const y_=[{id:"hero",label:"Home"},{id:"experience",label:"Experience"},{id:"education",label:"Education"},{id:"skills",label:"Skills"},{id:"contact",label:"Contact"}];function O1(){const[o,e]=ti.useState(!1),i=ti.useRef(null);return ti.useEffect(()=>{const r=l=>{l.key==="Escape"&&e(!1)};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[]),ti.useEffect(()=>{if(!o)return;const r=l=>{i.current&&!i.current.contains(l.target)&&e(!1)};return document.addEventListener("pointerdown",r),()=>document.removeEventListener("pointerdown",r)},[o]),It.jsxs("nav",{className:"fixed top-4 left-1/2 transform -translate-x-1/2 z-20 w-[90%] max-w-4xl",children:[It.jsxs("div",{className:"glass flex items-center justify-between px-4 py-2 rounded-xl shadow-md",children:[It.jsx("div",{className:"text-sm font-semibold",children:"NK"}),It.jsx("div",{className:"hidden md:flex gap-3 items-center",children:y_.map(r=>It.jsx("a",{href:`#${r.id}`,className:"text-sm text-white/80 hover:text-white px-3 py-1 rounded-md transition",children:r.label},r.id))}),It.jsx("div",{className:"md:hidden",children:It.jsx("button",{"aria-label":"Toggle menu",onClick:()=>e(r=>!r),className:"p-2 rounded-md bg-white/6 border border-white/6",children:It.jsx("svg",{className:"w-5 h-5 text-white",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:o?It.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}):It.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})})]}),o&&It.jsx("div",{className:"fixed inset-0 z-30 flex items-start justify-center pt-24 px-6",children:It.jsx("div",{ref:i,className:"glass w-full max-w-sm rounded-xl p-4 space-y-3",children:y_.map(r=>It.jsx("a",{href:`#${r.id}`,onClick:()=>e(!1),className:"block text-lg text-white/90 py-2 rounded-md hover:bg-white/4 transition",children:r.label},r.id))})})]})}function Bo({id:o,title:e,children:i}){return It.jsx("section",{id:o,className:"py-20 px-6",children:It.jsxs("div",{className:"max-w-4xl mx-auto",children:[It.jsx("h2",{className:"text-2xl font-bold mb-6",children:e}),It.jsx("div",{className:"glass rounded-xl p-6",children:i})]})})}function Ld({title:o,subtitle:e,date:i,bullets:r=[]}){return It.jsxs("div",{className:"mb-6",children:[It.jsxs("div",{className:"flex items-baseline justify-between",children:[It.jsx("div",{className:"text-lg font-semibold",children:o}),It.jsx("div",{className:"text-sm text-white/70",children:i})]}),It.jsx("div",{className:"text-sm text-white/80 mb-2",children:e}),It.jsx("ul",{className:"list-disc list-inside text-sm text-white/70 space-y-1",children:r.map((l,u)=>It.jsx("li",{children:l},u))})]})}function P1({children:o}){return It.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/6 border border-white/6 mr-2 mb-2",children:o})}const F1="/assets/me-BR7x06BT.jpg";function B1(){return It.jsxs("div",{className:"min-h-screen relative",children:[It.jsx(N1,{enabledWaves:["top","middle","bottom"],lineCount:5,lineDistance:5,bendRadius:5,bendStrength:-.5,interactive:!0,parallax:!0}),It.jsxs("div",{className:"page-content",children:[It.jsx(O1,{}),It.jsxs("main",{className:"pt-28",children:[It.jsx(Bo,{id:"hero",title:"About Me",children:It.jsxs("div",{className:"flex flex-col items-center gap-6",children:[It.jsx("div",{className:"shrink-0",children:It.jsx("img",{src:F1,alt:"Kristóf Németh",className:"w-40 h-40 rounded-full object-cover border-2 border-white/20"})}),It.jsxs("div",{className:"flex-1 space-y-3 text-center",children:[It.jsx("h1",{className:"text-3xl font-bold",children:"Kristóf Németh"}),It.jsx("h3",{className:"text-xl font-semibold",children:"Software Engineer"}),It.jsx("p",{className:"text-sm text-white/80",children:"MSc Computer Engineering | Cyber-Medical Systems Specialization"}),It.jsx("p",{className:"text-sm text-white/70",children:"Software Engineer with an MSc degree and over 2 years of professional experience in critical infrastructure environments. Strong mathematical foundation with expertise in Java (Spring Boot), C#, React, and PostgreSQL. Seeking a Midlevel Software Engineer role in an innovative team."}),It.jsxs("div",{className:"flex flex-col gap-2 text-sm text-white/70 items-center",children:[It.jsxs("p",{children:[It.jsx("span",{className:"font-semibold text-white",children:"Mobile:"})," +36 20 446 2467"]}),It.jsxs("p",{children:[It.jsx("span",{className:"font-semibold text-white",children:"E-mail:"})," n.kristof99@gmail.com"]}),It.jsxs("p",{children:[It.jsx("span",{className:"font-semibold text-white",children:"Languages:"})," English B2"]}),It.jsxs("p",{children:[It.jsx("span",{className:"font-semibold text-white",children:"Hobbies:"})," Basketball, Coffee"]})]})]})]})}),It.jsx(Bo,{id:"experience",title:"Experience",children:It.jsx(Ld,{title:"Software Engineer — Hungarian Banknote Printing Company",subtitle:"Developed backend services and internal tools in critical infrastructure",date:"Oct 2023 – Present",bullets:["Developed and maintained backend services for production support systems within a high-security, critical infrastructure environment","Designed and implemented a company-wide internal directory application (End-to-End) using React, improving internal communication efficiency","Executed system integrations via webMethods for real-time manufacturing process monitoring and order backlog tracking","Developed low-level system components (DLLs) for secure document and microchip personalization","Promoted (Spring 2025) to higher seniority level for outstanding technical performance","Tech Stack: Java, Spring Boot, C#, PostgreSQL, React, Software AG webMethods"]})}),It.jsxs(Bo,{id:"education",title:"Education",children:[It.jsx(Ld,{title:"MSc in Computer Engineering — Óbuda University",subtitle:"Specialization: Cyber-Medical Systems",date:"Feb 2024 – Feb 2026",bullets:["Degree Classification: Good","Thesis: Correcting tests with machine learning and image processing"]}),It.jsx(Ld,{title:"BSc in Computer Engineering — Óbuda University",subtitle:"Specialization: Software Design and Development",date:"Sept 2018 – June 2023",bullets:["Degree Classification: Good","Special Prize at the 56th Scientific Students' Associations Conference (TDK) – Image Processing Section","Thesis: Classifying abstract paintings with machine learning"]})]}),It.jsx(Bo,{id:"skills",title:"Skills",children:It.jsx("div",{className:"flex flex-wrap",children:["Java","Spring Boot","C#","React","PostgreSQL","JavaScript","HTML","CSS","Git","webMethods","Machine Learning","Image Processing"].map(o=>It.jsx(P1,{children:o},o))})}),It.jsx(Bo,{id:"contact",title:"Contact",children:It.jsxs("div",{className:"space-y-2 text-sm text-white/80",children:[It.jsxs("p",{children:[It.jsx("span",{className:"font-semibold text-white",children:"Mobile:"})," +36 20 446 2467"]}),It.jsxs("p",{children:[It.jsx("span",{className:"font-semibold text-white",children:"E-mail:"})," ",It.jsx("a",{href:"mailto:n.kristof99@gmail.com",className:"hover:text-white transition",children:"n.kristof99@gmail.com"})]}),It.jsxs("p",{children:[It.jsx("span",{className:"font-semibold text-white",children:"Location:"})," Budapest, Hungary"]})]})})]})]})]})}gS.createRoot(document.getElementById("root")).render(It.jsx(ti.StrictMode,{children:It.jsx(B1,{})}));
