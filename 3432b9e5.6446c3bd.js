(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{140:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,f=s["".concat(a,".").concat(b)]||s[b]||d[b]||i;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},141:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(20);t.default=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},142:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(141),o=n(143);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,p=i.absolute,l=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},143:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),i=(n(0),n(140)),a=n(142),c={id:"index",title:"Desktop App"},p={unversionedId:"getting-started/index",id:"getting-started/index",isDocsHomePage:!1,title:"Desktop App",description:"Flipper helps you debug Android and iOS apps running in an emulator/simulator or connected physical development devices. Flipper consists of two parts:",source:"@site/../docs/getting-started/index.mdx",slug:"/getting-started/index",permalink:"/docs/getting-started/index",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/getting-started/index.mdx",version:"current",sidebar:"setup",next:{title:"Adding Flipper to Android apps with Gradle",permalink:"/docs/getting-started/android-native"}},l=[],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Flipper helps you debug Android and iOS apps running in an emulator/simulator or connected physical development devices. Flipper consists of two parts:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The desktop app"),Object(i.b)("li",{parentName:"ul"},"The native mobile SDKs for Android and iOS")),Object(i.b)("p",null,"To use Flipper, you need to add the mobile SDK to your app. If you are using React Native 0.62 or higher, this is largely done automatically for you."),Object(i.b)("hr",null),Object(i.b)("p",null,"The desktop part of Flipper doesn't need any particular setup. Simply download the latest build for ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.facebook.com/fbflipper/public/mac"}),"Mac"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.facebook.com/fbflipper/public/linux"}),"Linux")," or ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.facebook.com/fbflipper/public/windows"}),"Windows")," and launch it. In order to work properly, Flipper requires a working installation of the Android and (if where applicable) iOS development tools on your system, as well as the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.openssl.org"}),"OpenSSL")," binary on your ",Object(i.b)("inlineCode",{parentName:"p"},"$PATH"),"."),Object(i.b)("p",null,"A compatible OpenSSL for Windows can be downloaded ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://slproweb.com/products/Win32OpenSSL.html"}),"here")," or from Chocolatey with ",Object(i.b)("inlineCode",{parentName:"p"},"choco install openssl"),"."),Object(i.b)("p",null,"Once you start Flipper and launch an emulator/simulator or connect a device, you will already be able to see the device logs in Flipper. To see app specific data, you need to integrate our native SDKs with your app."),Object(i.b)("img",{alt:"Logs plugin",src:Object(a.a)("img/initial.png")}))}s.isMDXComponent=!0}}]);