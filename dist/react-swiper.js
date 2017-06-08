!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("classnames"),require("prop-types"),require("react-swipe-views")):"function"==typeof define&&define.amd?define(["react","classnames","prop-types","react-swipe-views"],t):"object"==typeof exports?exports.ReactSwiper=t(require("react"),require("classnames"),require("prop-types"),require("react-swipe-views")):e.ReactSwiper=t(e.react,e.classnames,e["prop-types"],e["react-swipe-views"])}(this,function(e,t,r,n){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),i=n(o);t.default=i.default},function(t,r){t.exports=e},function(e,t,r){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(6);var f=r(8),l=n(f),p=r(1),d=r(9),h=r(7),v=n(h),y=function(t){function r(e){i(this,r);var t=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t._onChange=function(e){var r=t.refs.swiper;t.setState({activeIndex:r.state.activeIndex})},t.state={activeIndex:e.activeIndex},t._dotLength=e.children.length,t}return s(r,t),c(r,[{key:"componentWillReceiveProps",value:function(e,t){e.children!==this.props.children&&(this._dotLength=e.children.length,this.setState(e))}},{key:"generateDots",value:function(){var t=this,r=Array.from(Array(this._dotLength).keys());return r.map(function(r){return e.createElement("span",{key:r,"data-active":t.state.activeIndex==r})})}},{key:"render",value:function(){var t=this.props,r=t.dot,n=t.children,i=t.duration,a=(t.activeIndex,t.followFinger),s=o(t,["dot","children","duration","activeIndex","followFinger"]);return e.createElement("div",u({},s,{className:(0,v.default)("react-swiper",this.props.className)}),r&&e.createElement("div",{className:"react-swiper-dots"},this.generateDots()),e.createElement(d.ReactSwipeViewsInfinite,{followFinger:a,unit:"width",ref:"swiper",onChange:this._onChange,duration:i},n))}}]),r}(p.PureComponent);y.propTypes={className:l.default.string,followFinger:l.default.bool,duration:l.default.number,dot:l.default.bool,activeIndex:l.default.number},y.defaultProps={followFinger:!0,duration:.3,dot:!0,activeIndex:0},t.default=y}).call(t,r(1))},function(e,t,r){t=e.exports=r(4)(),t.push([e.id,".react-swiper{position:relative}.react-swiper-dots{width:100%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);position:absolute;bottom:10px;z-index:2;text-align:center}.react-swiper-dots>span{color:#fff;margin:0 5px;display:inline-block;width:10px;height:10px;border-radius:10px;background:#fff}.react-swiper-dots>span[data-active=true]{background:#f60}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=d[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(c(n.parts[i],t))}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(c(n.parts[i],t));d[n.id]={id:n.id,refs:1,parts:a}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],i=o[0],a=o[1],s=o[2],u=o[3],c={css:a,media:s,sourceMap:u};r[i]?r[i].parts.push(c):t.push(r[i]={id:i,parts:[c]})}return t}function i(e,t){var r=y(),n=g[g.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function c(e,t){var r,n,o;if(t.singleton){var i=m++;r=b||(b=s(t)),n=f.bind(null,r,i,!1),o=f.bind(null,r,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=u(t),n=p.bind(null,r),o=function(){a(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(t),n=l.bind(null,r),o=function(){a(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function f(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function l(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function p(e,t){var r=t.css,n=t.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var i=[],a=0;a<r.length;a++){var s=r[a],u=d[s.id];u.refs--,i.push(u)}if(e){var c=o(e);n(c,t)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete d[u.id]}}}};var w=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){var n=r(3);"string"==typeof n&&(n=[[e.id,n,""]]);r(5)(n,{});n.locals&&(e.exports=n.locals)},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n}])});
//# sourceMappingURL=react-swiper.js.map