(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{138:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),f=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=f(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=f(r),d=n,b=l["".concat(a,".").concat(d)]||l[d]||p[d]||o;return r?i.a.createElement(b,c(c({ref:t},s),{},{components:r})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},139:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}));var n=r(141),i=r(140);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,a=o.forcePrependBaseUrl,c=void 0!==a&&a,u=o.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(c)return t+r;var f=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+f:f}(o,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},140:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}))},141:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r(20);t.default=function(){var e=Object(n.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},142:function(e,t,r){"use strict";var n=r(0),i=r.n(n),o=r(11),a=r(140),c=r(9),u=Object(n.createContext)({collectLink:function(){}}),s=r(139),f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r};t.a=function(e){var t,r,l,p=e.isNavLink,d=e.to,b=e.href,v=e.activeClassName,h=e.isActive,O=e["data-noBrokenLinkCheck"],y=f(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),m=Object(s.b)().withBaseUrl,g=Object(n.useContext)(u),w=d||b,j=Object(a.a)(w),k=null==w?void 0:w.replace("pathname://",""),P=void 0!==k?function(e){return e.startsWith("/")}(r=k)?m(r):r:void 0,x=Object(n.useRef)(!1),E=p?o.e:o.c,C=c.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!C&&j&&window.docusaurus.prefetch(P),function(){C&&l&&l.disconnect()}}),[P,C,j]);var S=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,T=!P||!j||S;return P&&j&&!S&&!O&&g.collectLink(P),T?i.a.createElement("a",Object.assign({href:P},w&&!j&&{target:"_blank",rel:"noopener noreferrer"},y)):i.a.createElement(E,Object.assign({},y,{onMouseEnter:function(){x.current||(window.docusaurus.preload(P),x.current=!0)},innerRef:function(e){var t,r;C&&e&&j&&(t=e,r=function(){window.docusaurus.prefetch(P)},(l=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(t),l.disconnect(),r())}))}))).observe(t))},to:P||""},p&&{isActive:h,activeClassName:v}))}},86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return f})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),o=(r(0),r(138)),a=r(139),c=r(142),u={id:"shared-preferences-plugin",title:"Shared Preferences"},s={unversionedId:"features/shared-preferences-plugin",id:"features/shared-preferences-plugin",isDocsHomePage:!1,title:"Shared Preferences",description:"\u2192 See setup instructions for the Shared Preferences plugin",source:"@site/../docs/features/shared-preferences-plugin.mdx",slug:"/features/shared-preferences-plugin",permalink:"/docs/features/shared-preferences-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/features/shared-preferences-plugin.mdx",version:"current",sidebar:"features",previous:{title:"Sandbox",permalink:"/docs/features/sandbox-plugin"},next:{title:"LeakCanary",permalink:"/docs/features/leak-canary-plugin"}},f=[],l={rightToc:f};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u2192 ",Object(o.b)(c.a,{to:Object(a.a)("/docs/setup/shared-preferences-plugin"),mdxType:"Link"},"See setup instructions for the Shared Preferences plugin")),Object(o.b)("p",null,"Easily inspect and modify the data contained within your app's shared preferences."),Object(o.b)("img",{alt:"Shared Preferences Plugin",src:Object(a.a)("img/shared-preferences.png")}),Object(o.b)("p",null,"All changes to the given shared preference file will automatically appear in Flipper. You may also edit the values in Flipper and have them synced to your device. This can be done by clicking on the value of the specific key you wish to edit, editing the value and then pressing enter."))}p.isMDXComponent=!0}}]);