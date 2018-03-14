!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("classnames"),require("object-assign"),require("prop-types"),require("react-swipe-views")):"function"==typeof define&&define.amd?define(["react","classnames","object-assign","prop-types","react-swipe-views"],t):"object"==typeof exports?exports.ReactSwiper=t(require("react"),require("classnames"),require("object-assign"),require("prop-types"),require("react-swipe-views")):e.ReactSwiper=t(e.react,e.classnames,e["object-assign"],e["prop-types"],e["react-swipe-views"])}(this,function(e,t,n,r,o){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=r(o);t.default=i.default},function(t,n){t.exports=e},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(6);var f=n(9),l=r(f),p=n(1),d=n(10),h=n(7),v=r(h),b=n(8),y=(r(b),function(t){function n(e){i(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._onChange=function(e){var n=t.refs.swiper;t.setState({activeIndex:n.state.activeIndex})},t.state={activeIndex:e.activeIndex,children:e.children},t._dotLength=e.children.length,t}return s(n,t),c(n,[{key:"componentWillReceiveProps",value:function(e,t){var n=e.children,r=e.activeIndex;this.equalChildren(e)||(this._dotLength=n.length,this.setState({children:n,activeIndex:r}))}},{key:"equalChildren",value:function(e){var t=e.children.map(function(e){return e.key}),n=this.props.children.map(function(e){return e.key});return n=t.length!==n.length?n.slice(1,-1):n,n.join("__JOIN__")===t.join("__JOIN__")}},{key:"generateDots",value:function(){var t=this,n=new Array(this._dotLength).join().split(",");return n=Object.keys(n),n.map(function(n){return e.createElement("span",{key:n,"data-active":t.state.activeIndex==n})})}},{key:"render",value:function(){var t=this.props,n=t.dot,r=(t.children,t.duration),i=(t.activeIndex,t.followFinger,t.extra),a=o(t,["dot","children","duration","activeIndex","followFinger","extra"]);return e.createElement("div",u({},a,{className:(0,v.default)("react-swiper",this.props.className)}),n&&e.createElement("div",{className:"react-swiper-dots"},this.generateDots()),i,e.createElement(d.ReactSwipeViewsInfinite,{unit:"width",ref:"swiper",onChange:this._onChange,duration:r},this.state.children))}}]),n}(p.PureComponent));y.propTypes={className:l.default.string,duration:l.default.number,dot:l.default.bool,activeIndex:l.default.number,extra:l.default.number},y.defaultProps={duration:.3,dot:!0,activeIndex:0},t.default=y}).call(t,n(1))},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,".react-swiper{position:relative}.react-swiper-dots{width:100%;left:50%;transform:translate3d(-50%,0,0);-webkit-transform:translate3d(-50%,0,0);position:absolute;bottom:10px;z-index:2;text-align:center}.react-swiper-dots>span{color:#fff;margin:0 5px;display:inline-block;width:10px;height:10px;border-radius:10px;background:#fff}.react-swiper-dots>span[data-active=true]{background:#f60}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(c(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],u=o[3],c={css:a,media:s,sourceMap:u};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function i(e,t){var n=b(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var i=m++;n=y||(y=s(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=p.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=l.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function l(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=h(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],u=d[s.id];u.refs--,i.push(u)}if(e){var c=o(e);r(c,t)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete d[u.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.id,r,""]]);n(5)(r,{});r.locals&&(e.exports=r.locals)},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o}])});
//# sourceMappingURL=react-swiper.js.map