(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{7913:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},c=n(2199),l=n(1587),u=n(7215);function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i={};function s(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[t+"%"+n+(o?"%"+o:"")]=!0}}var d=a.default.forwardRef((function(e,t){var n,o=e.legacyBehavior,d=void 0===o?!0!==Boolean(!1):o,p=e.href,v=e.as,h=e.children,y=e.prefetch,b=e.passHref,g=e.replace,m=e.shallow,_=e.scroll,j=e.locale,E=e.onClick,M=e.onMouseEnter,O=f(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=h,d&&"string"===typeof n&&(n=a.default.createElement("a",null,n));var w,x=!1!==y,k=l.useRouter(),L=a.default.useMemo((function(){var e=c.resolveHref(k,p,!0),t=r(e,2),n=t[0],o=t[1];return{href:n,as:v?c.resolveHref(k,v):o||n}}),[k,p,v]),C=L.href,R=L.as,I=a.default.useRef(C),P=a.default.useRef(R);d&&(w=a.default.Children.only(n));var N=d?w&&"object"===typeof w&&w.ref:t,H=u.useIntersection({rootMargin:"200px"}),S=r(H,3),T=S[0],U=S[1],K=S[2],B=a.default.useCallback((function(e){P.current===R&&I.current===C||(K(),P.current=R,I.current=C),T(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[R,N,C,K,T]);a.default.useEffect((function(){var e=U&&x&&c.isLocalURL(C),t="undefined"!==typeof j?j:k&&k.locale,n=i[C+"%"+R+(t?"%"+t:"")];e&&!n&&s(k,C,R,{locale:t})}),[R,C,U,j,x,k]);var D={ref:B,onClick:function(e){d||"function"!==typeof E||E(e),d&&w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:l}))}(e,k,C,R,g,m,_,j)},onMouseEnter:function(e){d||"function"!==typeof M||M(e),d&&w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),c.isLocalURL(C)&&s(k,C,R,{priority:!0})}};if(!d||b||"a"===w.type&&!("href"in w.props)){var X="undefined"!==typeof j?j:k&&k.locale,q=k&&k.isLocaleDomain&&c.getDomainLocale(R,X,k&&k.locales,k&&k.domainLocales);D.href=q||c.addBasePath(c.addLocale(R,X,k&&k.defaultLocale))}return d?a.default.cloneElement(w,D):a.default.createElement("a",Object.assign({},O,D),n)}));t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7215:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,f=e.disabled||!c,i=o.useRef(),s=o.useState(!1),d=r(s,2),p=d[0],v=d[1],h=o.useState(t?t.current:null),y=r(h,2),b=y[0],g=y[1],m=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),f||p||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),u.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){if(c.delete(e),a.unobserve(e),0===c.size){a.disconnect(),l.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&v(e)}),{root:b,rootMargin:n}))}),[f,b,n,p]),_=o.useCallback((function(){v(!1)}),[]);return o.useEffect((function(){if(!c&&!p){var e=a.requestIdleCallback((function(){return v(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){t&&g(t.current)}),[t]),[m,p,_]};var o=n(7294),a=n(8065),c="undefined"!==typeof IntersectionObserver;var l=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},6599:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(1664),o=n.n(r),a=n(5893);function c(e){var t=e.title,n=e.description,r=(e.id,e.slug),c=e.date;return(0,a.jsx)("div",{class:"card mb-4",children:(0,a.jsxs)("div",{class:"card-body",children:[(0,a.jsx)("div",{class:"small text-muted",dangerouslySetInnerHTML:{__html:c}}),(0,a.jsx)("h2",{class:"card-title h4",children:t}),(0,a.jsx)("p",{class:"card-text",dangerouslySetInnerHTML:{__html:n}}),(0,a.jsx)(o(),{href:"/".concat(r),children:(0,a.jsx)("a",{class:"btn btn-primary",href:"/".concat(r),children:"Read more \u2192"})})]})})}},5149:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/post",function(){return n(6599)}])},1664:function(e,t,n){e.exports=n(7913)}},function(e){e.O(0,[774,888,179],(function(){return t=5149,e(e.s=t);var t}));var t=e.O();_N_E=t}]);