_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery,i=void 0!==a&&a;return n||o&&i}},"/GRZ":function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},"48fX":function(t,e,n){var r=n("qhzo");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"5fIB":function(t,e,n){var r=n("7eYB");t.exports=function(t){if(Array.isArray(t))return r(t)}},"7eYB":function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},"8Kt/":function(t,e,n){"use strict";n("oI91");e.__esModule=!0,e.defaultHead=p,e.default=void 0;var r,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=r?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function p(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var l=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(f,[]).reverse().concat(p(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);t.has(c)?a=!1:t.add(c)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var u=0,s=l.length;u<s;u++){var p=l[u];if(o.props.hasOwnProperty(p))if("charSet"===p)n.has(p)?a=!1:n.add(p);else{var f=o.props[p],d=r[p]||new Set;"name"===p&&i||!d.has(f)?(d.add(f),r[p]=d):a=!1}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}function h(t){var e=t.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},e)}h.rewind=function(){};var m=h;e.default=m},"C+bE":function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.HeadManagerContext=o},HDwi:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n("rfmo")}])},KckH:function(t,e,n){var r=n("7eYB");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},OWiz:function(t,e,n){t.exports={articleContainer:"blog_page_articleContainer__3ejFe"}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},T0f4:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},Xuae:function(t,e,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),u=n("T0f4");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}e.__esModule=!0,e.default=void 0;var p=n("q1tI"),f=function(t){i(n,t);var e=s(n);function n(t){var a;return o(this,n),(a=e.call(this,t))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(p.Component);e.default=f},g4pe:function(t,e,n){t.exports=n("8Kt/")},i2R6:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},mPvQ:function(t,e,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");t.exports=function(t){return r(t)||o(t)||a(t)||i()}},oI91:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},qXWd:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},qhzo:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},rfmo:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return u})),n.d(e,"default",(function(){return s}));var r=n("nKUr"),o=(n("q1tI"),n("g4pe")),a=n.n(o),i=n("OWiz"),c=n.n(i),u=!0;function s(t){var e=t.meta,n=t.content,o={"@context":"http://schema.org","@graph":[{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":"https://josteph.github.io/blog/".concat(e.slug),name:e.title}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:"https://josteph.github.io/blog/".concat(e.slug),alternateName:"Joshua Stephen",name:e.title,headline:e.title,description:e.description,author:{"@type":"Person",name:"Joshua Stephen"},publisher:{"@type":"Organization",url:"https://josteph.github.io",logo:"icons/apple-icon.png",name:"Joshua Stephen"},mainEntityOfPage:{"@type":"WebSite","@id":"https://josteph.github.io"}}]};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{children:e.title}),Object(r.jsx)("meta",{content:e.description,name:"description"}),Object(r.jsx)("meta",{property:"og:site_name",content:e.title}),Object(r.jsx)("meta",{property:"og:description",content:e.description}),Object(r.jsx)("meta",{property:"og:title",content:e.title}),Object(r.jsx)("meta",{name:"twitter:title",content:e.title}),Object(r.jsx)("meta",{name:"twitter:description",content:e.description}),Object(r.jsx)("link",{rel:"preload",href:"https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css",as:"script"}),Object(r.jsx)("link",{href:"https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css",rel:"stylesheet"}),Object(r.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o)}})]}),Object(r.jsx)("main",{className:"main-container",children:Object(r.jsx)("article",{className:c.a.articleContainer,dangerouslySetInnerHTML:{__html:n}})})]})}},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},tCBg:function(t,e,n){var r=n("C+bE"),o=n("qXWd");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}}},[["HDwi",0,1]]]);