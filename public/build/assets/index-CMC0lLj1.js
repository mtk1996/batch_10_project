var z={},H={},G={exports:{}},u={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var B=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;function we(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Pe(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},o=0;o<10;o++)t["_"+String.fromCharCode(o)]=o;var r=Object.getOwnPropertyNames(t).map(function(i){return t[i]});if(r.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(i){n[i]=i}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Ce=Pe()?Object.assign:function(e,t){for(var o,r=we(e),n,i=1;i<arguments.length;i++){o=Object(arguments[i]);for(var s in o)be.call(o,s)&&(r[s]=o[s]);if(B){n=B(o);for(var a=0;a<n.length;a++)Oe.call(o,n[a])&&(r[n[a]]=o[n[a]])}}return r};/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T=Ce,d=typeof Symbol=="function"&&Symbol.for,S=d?Symbol.for("react.element"):60103,Ie=d?Symbol.for("react.portal"):60106,Ee=d?Symbol.for("react.fragment"):60107,xe=d?Symbol.for("react.strict_mode"):60108,je=d?Symbol.for("react.profiler"):60114,ke=d?Symbol.for("react.provider"):60109,qe=d?Symbol.for("react.context"):60110,He=d?Symbol.for("react.forward_ref"):60112,Te=d?Symbol.for("react.suspense"):60113,Ne=d?Symbol.for("react.memo"):60115,$e=d?Symbol.for("react.lazy"):60116,U=typeof Symbol=="function"&&Symbol.iterator;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J={};function m(e,t,o){this.props=e,this.context=t,this.refs=J,this.updater=o||Y}m.prototype.isReactComponent={};m.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(_(85));this.updater.enqueueSetState(this,e,t,"setState")};m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function K(){}K.prototype=m.prototype;function N(e,t,o){this.props=e,this.context=t,this.refs=J,this.updater=o||Y}var $=N.prototype=new K;$.constructor=N;T($,m.prototype);$.isPureReactComponent=!0;var F={current:null},Q=Object.prototype.hasOwnProperty,X={key:!0,ref:!0,__self:!0,__source:!0};function Z(e,t,o){var r,n={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Q.call(t,r)&&!X.hasOwnProperty(r)&&(n[r]=t[r]);var a=arguments.length-2;if(a===1)n.children=o;else if(1<a){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+2];n.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)n[r]===void 0&&(n[r]=a[r]);return{$$typeof:S,type:e,key:i,ref:s,props:n,_owner:F.current}}function Fe(e,t){return{$$typeof:S,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function M(e){return typeof e=="object"&&e!==null&&e.$$typeof===S}function Me(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(o){return t[o]})}var ee=/\/+/g,b=[];function te(e,t,o,r){if(b.length){var n=b.pop();return n.result=e,n.keyPrefix=t,n.func=o,n.context=r,n.count=0,n}return{result:e,keyPrefix:t,func:o,context:r,count:0}}function re(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>b.length&&b.push(e)}function j(e,t,o,r){var n=typeof e;(n==="undefined"||n==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(n){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case S:case Ie:i=!0}}if(i)return o(r,e,t===""?"."+x(e,0):t),1;if(i=0,t=t===""?".":t+":",Array.isArray(e))for(var s=0;s<e.length;s++){n=e[s];var a=t+x(n,s);i+=j(n,a,o,r)}else if(e===null||typeof e!="object"?a=null:(a=U&&e[U]||e["@@iterator"],a=typeof a=="function"?a:null),typeof a=="function")for(e=a.call(e),s=0;!(n=e.next()).done;)n=n.value,a=t+x(n,s++),i+=j(n,a,o,r);else if(n==="object")throw o=""+e,Error(_(31,o==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":o,""));return i}function k(e,t,o){return e==null?0:j(e,"",t,o)}function x(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Me(e.key):t.toString(36)}function Ae(e,t){e.func.call(e.context,t,e.count++)}function Ve(e,t,o){var r=e.result,n=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,r,o,function(i){return i}):e!=null&&(M(e)&&(e=Fe(e,n+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(ee,"$&/")+"/")+o)),r.push(e))}function q(e,t,o,r,n){var i="";o!=null&&(i=(""+o).replace(ee,"$&/")+"/"),t=te(t,i,r,n),k(e,Ve,t),re(t)}var ne={current:null};function g(){var e=ne.current;if(e===null)throw Error(_(321));return e}var De={ReactCurrentDispatcher:ne,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:F,IsSomeRendererActing:{current:!1},assign:T};u.Children={map:function(e,t,o){if(e==null)return e;var r=[];return q(e,r,null,t,o),r},forEach:function(e,t,o){if(e==null)return e;t=te(null,null,t,o),k(e,Ae,t),re(t)},count:function(e){return k(e,function(){return null},null)},toArray:function(e){var t=[];return q(e,t,null,function(o){return o}),t},only:function(e){if(!M(e))throw Error(_(143));return e}};u.Component=m;u.Fragment=Ee;u.Profiler=je;u.PureComponent=N;u.StrictMode=xe;u.Suspense=Te;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=De;u.cloneElement=function(e,t,o){if(e==null)throw Error(_(267,e));var r=T({},e.props),n=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=F.current),t.key!==void 0&&(n=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Q.call(t,l)&&!X.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=o;else if(1<l){a=Array(l);for(var f=0;f<l;f++)a[f]=arguments[f+2];r.children=a}return{$$typeof:S,type:e.type,key:n,ref:i,props:r,_owner:s}};u.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:qe,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:ke,_context:e},e.Consumer=e};u.createElement=Z;u.createFactory=function(e){var t=Z.bind(null,e);return t.type=e,t};u.createRef=function(){return{current:null}};u.forwardRef=function(e){return{$$typeof:He,render:e}};u.isValidElement=M;u.lazy=function(e){return{$$typeof:$e,_ctor:e,_status:-1,_result:null}};u.memo=function(e,t){return{$$typeof:Ne,type:e,compare:t===void 0?null:t}};u.useCallback=function(e,t){return g().useCallback(e,t)};u.useContext=function(e,t){return g().useContext(e,t)};u.useDebugValue=function(){};u.useEffect=function(e,t){return g().useEffect(e,t)};u.useImperativeHandle=function(e,t,o){return g().useImperativeHandle(e,t,o)};u.useLayoutEffect=function(e,t){return g().useLayoutEffect(e,t)};u.useMemo=function(e,t){return g().useMemo(e,t)};u.useReducer=function(e,t,o){return g().useReducer(e,t,o)};u.useRef=function(e){return g().useRef(e)};u.useState=function(e){return g().useState(e)};u.version="16.14.0";G.exports=u;var oe=G.exports,ie={exports:{}},Le="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Be=Le,Ue=Be;function ae(){}function se(){}se.resetWarningCache=ae;var We=function(){function e(r,n,i,s,a,l){if(l!==Ue){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:se,resetWarningCache:ae};return o.PropTypes=o,o};ie.exports=We();var le=ie.exports,A={},ue={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function o(){for(var i="",s=0;s<arguments.length;s++){var a=arguments[s];a&&(i=n(i,r(a)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return o.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var s="";for(var a in i)t.call(i,a)&&i[a]&&(s=n(s,a));return s}function n(i,s){return s?i?i+" "+s:i+s:i}e.exports?(o.default=o,e.exports=o):window.classNames=o})()})(ue);var ze=ue.exports;Object.defineProperty(A,"__esModule",{value:!0});var Ge=function(){function e(t,o){for(var r=0;r<o.length;r++){var n=o[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),Ye=oe,R=V(Ye),Je=ze,Ke=V(Je),Qe=le,c=V(Qe);function V(e){return e&&e.__esModule?e:{default:e}}function Xe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ze(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function et(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var fe=function(e){et(t,e);function t(){return Xe(this,t),Ze(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return Ge(t,[{key:"render",value:function(){var r=this.props,n=r.changeRating,i=r.hoverOverStar,s=r.unHoverOverStar,a=r.svgIconViewBox,l=r.svgIconPath;return R.default.createElement("div",{className:"star-container",style:this.starContainerStyle,onMouseEnter:i,onMouseLeave:s,onClick:n},R.default.createElement("svg",{viewBox:a,className:this.starClasses,style:this.starSvgStyle},R.default.createElement("path",{className:"star",style:this.pathStyle,d:l})))}},{key:"starContainerStyle",get:function(){var r=this.props,n=r.changeRating,i=r.starSpacing,s=r.isFirstStar,a=r.isLastStar,l=r.ignoreInlineStyles,f={position:"relative",display:"inline-block",verticalAlign:"middle",paddingLeft:s?void 0:i,paddingRight:a?void 0:i,cursor:n?"pointer":void 0};return l?{}:f}},{key:"starSvgStyle",get:function(){var r=this.props,n=r.ignoreInlineStyles,i=r.isCurrentHoveredStar,s=r.starDimension,a={width:s,height:s,transition:"transform .2s ease-in-out",transform:i?"scale(1.1)":void 0};return n?{}:a}},{key:"pathStyle",get:function(){var r=this.props,n=r.isStarred,i=r.isPartiallyFullStar,s=r.isHovered,a=r.hoverMode,l=r.starEmptyColor,f=r.starRatedColor,O=r.starHoverColor,w=r.gradientPathName,P=r.fillId,C=r.ignoreInlineStyles,h=void 0;a?s?h=O:h=l:i?h="url('"+w+"#"+P+"')":n?h=f:h=l;var I={fill:h,transition:"fill .2s ease-in-out"};return C?{}:I}},{key:"starClasses",get:function(){var r=this.props,n=r.isSelected,i=r.isPartiallyFullStar,s=r.isHovered,a=r.isCurrentHoveredStar,l=r.ignoreInlineStyles,f=(0,Ke.default)({"widget-svg":!0,"widget-selected":n,"multi-widget-selected":i,hovered:s,"current-hovered":a});return l?{}:f}}]),t}(R.default.Component);fe.propTypes={fillId:c.default.string.isRequired,changeRating:c.default.func,hoverOverStar:c.default.func,unHoverOverStar:c.default.func,isStarred:c.default.bool.isRequired,isPartiallyFullStar:c.default.bool.isRequired,isHovered:c.default.bool.isRequired,hoverMode:c.default.bool.isRequired,isCurrentHoveredStar:c.default.bool.isRequired,isFirstStar:c.default.bool.isRequired,isLastStar:c.default.bool.isRequired,starDimension:c.default.string.isRequired,starSpacing:c.default.string.isRequired,starHoverColor:c.default.string.isRequired,starRatedColor:c.default.string.isRequired,starEmptyColor:c.default.string.isRequired,gradientPathName:c.default.string.isRequired,ignoreInlineStyles:c.default.bool.isRequired,svgIconPath:c.default.string.isRequired,svgIconViewBox:c.default.string.isRequired};A.default=fe;Object.defineProperty(H,"__esModule",{value:!0});var tt=function(){function e(t,o){for(var r=0;r<o.length;r++){var n=o[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),rt=oe,v=D(rt),nt=le,p=D(nt),ot=A,it=D(ot);function D(e){return e&&e.__esModule?e:{default:e}}function at(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function st(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var L=function(e){st(t,e);function t(){var o,r,n,i;at(this,t);for(var s=arguments.length,a=Array(s),l=0;l<s;l++)a[l]=arguments[l];return i=(r=(n=W(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this].concat(a))),n),n.state={highestStarHovered:-1/0},n.fillId="starGrad"+Math.random().toFixed(15).slice(2),n.hoverOverStar=function(f){return function(){n.setState({highestStarHovered:f})}},n.unHoverOverStar=function(){n.setState({highestStarHovered:-1/0})},r),W(n,i)}return tt(t,[{key:"stopColorStyle",value:function(r){var n={stopColor:r,stopOpacity:"1"};return this.props.ignoreInlineStyles?{}:n}},{key:"render",value:function(){var r=this.props,n=r.starRatedColor,i=r.starEmptyColor;return v.default.createElement("div",{className:"star-ratings",title:this.titleText,style:this.starRatingsStyle},v.default.createElement("svg",{className:"star-grad",style:this.starGradientStyle},v.default.createElement("defs",null,v.default.createElement("linearGradient",{id:this.fillId,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},v.default.createElement("stop",{offset:"0%",className:"stop-color-first",style:this.stopColorStyle(n)}),v.default.createElement("stop",{offset:this.offsetValue,className:"stop-color-first",style:this.stopColorStyle(n)}),v.default.createElement("stop",{offset:this.offsetValue,className:"stop-color-final",style:this.stopColorStyle(i)}),v.default.createElement("stop",{offset:"100%",className:"stop-color-final",style:this.stopColorStyle(i)})))),this.renderStars)}},{key:"starRatingsStyle",get:function(){var r={position:"relative",boxSizing:"border-box",display:"inline-block"};return this.props.ignoreInlineStyles?{}:r}},{key:"starGradientStyle",get:function(){var r={position:"absolute",zIndex:"0",width:"0",height:"0",visibility:"hidden"};return this.props.ignoreInlineStyles?{}:r}},{key:"titleText",get:function(){var r=this.props,n=r.typeOfWidget,i=r.rating,s=this.state.highestStarHovered,a=s>0?s:i,l=parseFloat(a.toFixed(2)).toString();Number.isInteger(a)&&(l=String(a));var f=n+"s";return l==="1"&&(f=n),l+" "+f}},{key:"offsetValue",get:function(){var r=this.props.rating,n=Number.isInteger(r),i="0%";if(!n){var s=r.toFixed(2).split(".")[1].slice(0,2);i=s+"%"}return i}},{key:"renderStars",get:function(){var r=this,n=this.props,i=n.changeRating,s=n.rating,a=n.numberOfStars,l=n.starDimension,f=n.starSpacing,O=n.starRatedColor,w=n.starEmptyColor,P=n.starHoverColor,C=n.gradientPathName,h=n.ignoreInlineStyles,I=n.svgIconPath,ce=n.svgIconViewBox,pe=n.name,E=this.state.highestStarHovered,de=Array.apply(null,Array(a));return de.map(function(ct,ye){var y=ye+1,ve=y<=s,ge=E>0,he=y<=E,me=y===E,Se=y>s&&y-1<s,_e=y===1,Re=y===a;return v.default.createElement(it.default,{key:y,fillId:r.fillId,changeRating:i?function(){return i(y,pe)}:null,hoverOverStar:i?r.hoverOverStar(y):null,unHoverOverStar:i?r.unHoverOverStar:null,isStarred:ve,isPartiallyFullStar:Se,isHovered:he,hoverMode:ge,isCurrentHoveredStar:me,isFirstStar:_e,isLastStar:Re,starDimension:l,starSpacing:f,starHoverColor:P,starRatedColor:O,starEmptyColor:w,gradientPathName:C,ignoreInlineStyles:h,svgIconPath:I,svgIconViewBox:ce})})}}]),t}(v.default.Component);L.propTypes={rating:p.default.number.isRequired,numberOfStars:p.default.number.isRequired,changeRating:p.default.func,starHoverColor:p.default.string.isRequired,starRatedColor:p.default.string.isRequired,starEmptyColor:p.default.string.isRequired,starDimension:p.default.string.isRequired,starSpacing:p.default.string.isRequired,gradientPathName:p.default.string.isRequired,ignoreInlineStyles:p.default.bool.isRequired,svgIconPath:p.default.string.isRequired,svgIconViewBox:p.default.string.isRequired,name:p.default.string};L.defaultProps={rating:0,typeOfWidget:"Star",numberOfStars:5,changeRating:null,starHoverColor:"rgb(230, 67, 47)",starRatedColor:"rgb(109, 122, 130)",starEmptyColor:"rgb(203, 211, 227)",starDimension:"50px",starSpacing:"7px",gradientPathName:"",ignoreInlineStyles:!1,svgIconPath:"m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z",svgIconViewBox:"0 0 51 48"};H.default=L;Object.defineProperty(z,"__esModule",{value:!0});var lt=H,ut=ft(lt);function ft(e){return e&&e.__esModule?e:{default:e}}Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};var pt=z.default=ut.default;export{pt as _};
