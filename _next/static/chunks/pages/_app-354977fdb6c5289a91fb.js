(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888,179],{6071:function(e,n,r){"use strict";var t=r(3848),o=r(9448);n.default=void 0;var c=o(r(7294)),a=r(1689),u=r(2441),i=r(5749),f={};function s(e,n,r,t){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;f[n+"%"+r+(o?"%"+o:"")]=!0}}var l=function(e){var n=!1!==e.prefetch,r=(0,u.useRouter)(),o=r&&r.pathname||"/",l=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),r=t(n,2),c=r[0],u=r[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):u||c}}),[o,e.href,e.as]),p=l.href,d=l.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var O=c.Children.only(v),j=O&&"object"===typeof O&&O.ref,m=(0,i.useIntersection)({rootMargin:"200px"}),w=t(m,2),E=w[0],_=w[1],P=c.default.useCallback((function(e){E(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,E]);(0,c.useEffect)((function(){var e=_&&n&&(0,a.isLocalURL)(p),t="undefined"!==typeof g?g:r&&r.locale,o=f[p+"%"+d+(t?"%"+t:"")];e&&!o&&s(r,p,d,{locale:t})}),[d,p,_,g,n,r]);var L={ref:P,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,c,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(r))&&(e.preventDefault(),null==u&&(u=t.indexOf("#")<0),n[o?"replace":"push"](r,t,{shallow:c,locale:i,scroll:u}))}(e,r,p,d,h,b,y,g)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),s(r,p,d,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var k="undefined"!==typeof g?g:r&&r.locale,C=r&&r.isLocaleDomain&&(0,a.getDomainLocale)(d,k,r&&r.locales,r&&r.domainLocales);L.href=C||(0,a.addBasePath)((0,a.addLocale)(d,k,r&&r.defaultLocale))}return c.default.cloneElement(O,L)};n.default=l},5749:function(e,n,r){"use strict";var t=r(3848);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!a,i=(0,o.useRef)(),f=(0,o.useState)(!1),s=t(f,2),l=s[0],p=s[1],d=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),r||l||e&&e.tagName&&(i.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=u.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return u.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,c=t.observer,a=t.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),u.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[r,n,l]);return(0,o.useEffect)((function(){if(!a&&!l){var e=(0,c.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[l]),[d,l]};var o=r(7294),c=r(8391),a="undefined"!==typeof IntersectionObserver;var u=new Map},5463:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return f}});var t=r(5893),o=r(6265),c=(r(7294),r(1664)),a=function(){return(0,t.jsx)("header",{className:"navbar",children:(0,t.jsx)("nav",{className:"nav-wrapper",children:(0,t.jsx)("div",{className:"nav-logo",children:(0,t.jsx)(c.default,{href:"/",children:"Josteph"})})})})};r(6677);function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var f=function(e){var n=e.Component,r=e.pageProps;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{}),(0,t.jsx)(n,i({},r))]})}},6363:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5463)}])},6677:function(){},1664:function(e,n,r){e.exports=r(6071)},6265:function(e,n,r){"use strict";function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}r.d(n,{Z:function(){return t}})},4453:function(){}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,597],(function(){return n(6363),n(2441)}));var r=e.O();_N_E=r}]);