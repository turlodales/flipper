(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(140)),o=n(142),c=n(144),u={id:"react-native",title:"Set up your React Native App",sidebar_label:"React Native"},l={unversionedId:"getting-started/react-native",id:"getting-started/react-native",isDocsHomePage:!1,title:"Set up your React Native App",description:"Starting with React Native 0.62, after generating your project with react-native init, the Flipper integration is ready out of the box for debug builds:",source:"@site/../docs/getting-started/react-native.mdx",slug:"/getting-started/react-native",permalink:"/docs/getting-started/react-native",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/getting-started/react-native.mdx",version:"current",sidebar_label:"React Native",sidebar:"setup",previous:{title:"Adding Flipper to iOS apps",permalink:"/docs/getting-started/ios-native"},next:{title:"Manually set up your React Native Android App",permalink:"/docs/getting-started/react-native-android"}},p=[{value:"Manual Setup",id:"manual-setup",children:[]}],s={rightToc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Starting with React Native 0.62, after generating your project with ",Object(i.b)("inlineCode",{parentName:"p"},"react-native init"),", the Flipper integration is ready out of the box for debug builds:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For Android, start the Flipper Desktop application, and start your project using ",Object(i.b)("inlineCode",{parentName:"li"},"yarn android"),". Your application will appear in Flipper."),Object(i.b)("li",{parentName:"ul"},"For iOS, run ",Object(i.b)("inlineCode",{parentName:"li"},"pod install")," once in the ",Object(i.b)("inlineCode",{parentName:"li"},"ios")," directory of your project. After that, run ",Object(i.b)("inlineCode",{parentName:"li"},"yarn ios")," and start Flipper. Your application will show up in Flipper.")),Object(i.b)("p",null,"By default, the following plugins will be available:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Layout Inspector"),Object(i.b)("li",{parentName:"ul"},"Network"),Object(i.b)("li",{parentName:"ul"},"Databases"),Object(i.b)("li",{parentName:"ul"},"Images"),Object(i.b)("li",{parentName:"ul"},"Shared Preferences"),Object(i.b)("li",{parentName:"ul"},"Crash Reporter"),Object(i.b)("li",{parentName:"ul"},"React DevTools"),Object(i.b)("li",{parentName:"ul"},"Metro Logs")),Object(i.b)("p",null,"Additional plugins can be installed through the plugin manager."),Object(i.b)("p",null,"To create your own plugins and integrate with Flipper using JavaScript, check out our ",Object(i.b)(c.a,{to:Object(o.a)("/docs/tutorial/react-native"),mdxType:"Link"},"writing plugins for React Native")," tutorial!"),Object(i.b)("p",null,"To update the Flipper SDK in your project, you bump the version in the ",Object(i.b)("inlineCode",{parentName:"p"},"ios/Podfile")," and ",Object(i.b)("inlineCode",{parentName:"p"},"android/gradle.properties")," files of your project."),Object(i.b)("h2",{id:"manual-setup"},"Manual Setup"),Object(i.b)("p",null,"If you are not using a default React Native template or cannot use the upgrade tool,\nyou can find instructions for how to integate Flipper into your projects in these guides:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:Object(o.a)("/docs/getting-started/react-native-android")},"React Native for Android")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:Object(o.a)("/docs/getting-started/react-native-ios")},"React Native for iOS"))))}b.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,f=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},141:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(20);t.default=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},142:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(141),a=n(143);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},143:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},144:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(11),o=n(143),c=n(9),u=Object(r.createContext)({collectLink:function(){}}),l=n(142),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,s,b=e.isNavLink,d=e.to,f=e.href,v=e.activeClassName,O=e.isActive,g=e["data-noBrokenLinkCheck"],j=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),m=Object(l.b)().withBaseUrl,y=Object(r.useContext)(u),h=d||f,w=Object(o.a)(h),N=null==h?void 0:h.replace("pathname://",""),k=void 0!==N?function(e){return e.startsWith("/")}(n=N)?m(n):n:void 0,C=Object(r.useRef)(!1),x=b?i.e:i.c,P=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!P&&w&&window.docusaurus.prefetch(k),function(){P&&s&&s.disconnect()}}),[k,P,w]);var S=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,E=!k||!w||S;return k&&w&&!S&&!g&&y.collectLink(k),E?a.a.createElement("a",Object.assign({href:k},h&&!w&&{target:"_blank",rel:"noopener noreferrer"},j)):a.a.createElement(x,Object.assign({},j,{onMouseEnter:function(){C.current||(window.docusaurus.preload(k),C.current=!0)},innerRef:function(e){var t,n;P&&e&&w&&(t=e,n=function(){window.docusaurus.prefetch(k)},(s=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t),s.disconnect(),n())}))}))).observe(t))},to:k||""},b&&{isActive:O,activeClassName:v}))}}}]);