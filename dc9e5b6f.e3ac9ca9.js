(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var i=n(3),o=n(7),r=(n(0),n(138)),a=n(139),p=n(142),c={id:"android-native",title:"Set up your Android app",sidebar_label:"Android"},l={unversionedId:"getting-started/android-native",id:"getting-started/android-native",isDocsHomePage:!1,title:"Set up your Android app",description:"To set up Flipper for Android, you need to add the neccessary dependencies to your",source:"@site/../docs/getting-started/android-native.mdx",slug:"/getting-started/android-native",permalink:"/docs/getting-started/android-native",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/getting-started/android-native.mdx",version:"current",sidebar_label:"Android",sidebar:"setup",previous:{title:"Desktop App",permalink:"/docs/getting-started/index"},next:{title:"Set up your iOS app",permalink:"/docs/getting-started/ios-native"}},s=[{value:"Dependencies",id:"dependencies",children:[]},{value:"Application Setup",id:"application-setup",children:[]},{value:"Diagnostics",id:"diagnostics",children:[]},{value:"Android Snapshots",id:"android-snapshots",children:[]},{value:"Enabling plugins",id:"enabling-plugins",children:[]},{value:"Having trouble?",id:"having-trouble",children:[]}],d={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To set up Flipper for Android, you need to add the neccessary dependencies to your\napp, initialize the Flipper client and enable the plugins you want to use. Optionally,\nyou can hook up the diagnostics Activity to help you troubleshoot connection issues."),Object(r.b)("h2",{id:"dependencies"},"Dependencies"),Object(r.b)("p",null,"Flipper is distributed via JCenter. Add the dependencies to your ",Object(r.b)("inlineCode",{parentName:"p"},"build.gradle")," file.\nYou should also explicitly depend on ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/facebook/soloader"}),Object(r.b)("inlineCode",{parentName:"a"},"soloader")),"\ninstead of relying on transitive dependency resolution which is getting deprecated\nwith Gradle 5."),Object(r.b)("p",null,'We provide a "no-op" implementation of some oft-used Flipper interfaces you can\nuse to make it easier to strip Flipper from your release builds.'),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-groovy"}),"repositories {\n  jcenter()\n}\n\ndependencies {\n  debugImplementation 'com.facebook.flipper:flipper:0.66.0'\n  debugImplementation 'com.facebook.soloader:soloader:0.9.0'\n\n  releaseImplementation 'com.facebook.flipper:flipper-noop:0.66.0'\n}\n")),Object(r.b)("div",{class:"warning"},Object(r.b)("p",null,"Please note that our ",Object(r.b)("inlineCode",{parentName:"p"},"flipper-noop")," package provides a limited subset of the\nAPIs provided by the ",Object(r.b)("inlineCode",{parentName:"p"},"flipper")," package and does not provide any plugin stubs.\nIt is recommended that you keep all Flipper instantiation code in a separate\nbuild variant to ensure it doesn't accidentally make it into your production\nbuilds. Check out ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/facebook/flipper/tree/master/android/sample/src"}),"the sample\napp")," to\nsee how to organise your Flipper initialization into debug and release\nvariants."),Object(r.b)("p",null,"Alternatively, have a look at the third-party\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/theGlenn/flipper-android-no-op"}),"flipper-android-no-op"),"\nrepository, which provides empty implementations for several Flipper plugins.")),Object(r.b)("h2",{id:"application-setup"},"Application Setup"),Object(r.b)("p",null,"Now you can initialize Flipper in your Application's ",Object(r.b)("inlineCode",{parentName:"p"},"onCreate")," method, which involves\ninitializing SoLoader (for loading the C++ part of Flipper) and starting a ",Object(r.b)("inlineCode",{parentName:"p"},"FlipperClient"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"import com.facebook.flipper.android.AndroidFlipperClient;\nimport com.facebook.flipper.android.utils.FlipperUtils;\nimport com.facebook.flipper.core.FlipperClient;\nimport com.facebook.flipper.plugins.inspector.DescriptorMapping;\nimport com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin;\n\n\npublic class MyApplication extends Application {\n\n  @Override\n  public void onCreate() {\n    super.onCreate();\n    SoLoader.init(this, false);\n\n    if (BuildConfig.DEBUG && FlipperUtils.shouldEnableFlipper(this)) {\n      final FlipperClient client = AndroidFlipperClient.getInstance(this);\n      client.addPlugin(new InspectorFlipperPlugin(this, DescriptorMapping.withDefaults()));\n      client.start();\n    }\n  }\n}\n")),Object(r.b)("h2",{id:"diagnostics"},"Diagnostics"),Object(r.b)("p",null,"It's recommended that you add the following activity to the manifest, which can help diagnose integration issues and other problems:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-xml"}),'<activity android:name="com.facebook.flipper.android.diagnostics.FlipperDiagnosticActivity"\n        android:exported="true"/>\n')),Object(r.b)("h2",{id:"android-snapshots"},"Android Snapshots"),Object(r.b)("p",null,"Feeling adventurous? We publish Android snapshot releases directly off of ",Object(r.b)("inlineCode",{parentName:"p"},"master"),"."),Object(r.b)("p",null,"You can get the latest version by adding the Maven Snapshot repository to your sources\nand pointing to the most recent ",Object(r.b)("inlineCode",{parentName:"p"},"-SNAPSHOT")," version."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-groovy"}),"repositories {\n  maven { url 'https://oss.sonatype.org/content/repositories/snapshots/' }\n}\n\ndependencies {\n  debugImplementation 'com.facebook.flipper:flipper:0.66.1-SNAPSHOT'\n  debugImplementation 'com.facebook.soloader:soloader:0.9.0'\n\n  releaseImplementation 'com.facebook.flipper:flipper-noop:0.66.1-SNAPSHOT'\n}\n")),Object(r.b)("h2",{id:"enabling-plugins"},"Enabling plugins"),Object(r.b)("p",null,"Finally, you need to add plugins to your Flipper client. Above, we have only added the Layout Inspector plugin to get you started. See ",Object(r.b)(p.a,{to:Object(a.a)("/docs/setup/network-plugin"),mdxType:"Link"},"Network Plugin")," and ",Object(r.b)(p.a,{to:Object(a.a)("/docs/setup/layout-plugin"),mdxType:"Link"},"Layout Inspector Plugin")," for information on how to add them, and also enable Litho or ComponentKit support. You can check the sample apps in the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/facebook/flipper"}),"GitHub repo")," for examples of integrating other plugins."),Object(r.b)("h2",{id:"having-trouble"},"Having trouble?"),Object(r.b)("p",null,"See the ",Object(r.b)(p.a,{to:Object(a.a)("/docs/troubleshooting"),mdxType:"Link"},"troubleshooting page")," for help with known problems."))}u.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),b=i,f=d["".concat(a,".").concat(b)]||d[b]||u[b]||r;return n?o.a.createElement(f,p(p({ref:t},l),{},{components:n})):o.a.createElement(f,p({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<r;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},139:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var i=n(141),o=n(140);function r(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,a=r.forcePrependBaseUrl,p=void 0!==a&&a,c=r.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(p)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(r,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},140:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}))},141:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n(20);t.default=function(){var e=Object(i.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},142:function(e,t,n){"use strict";var i=n(0),o=n.n(i),r=n(11),a=n(140),p=n(9),c=Object(i.createContext)({collectLink:function(){}}),l=n(139),s=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};t.a=function(e){var t,n,d,u=e.isNavLink,b=e.to,f=e.href,m=e.activeClassName,g=e.isActive,h=e["data-noBrokenLinkCheck"],v=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),O=Object(l.b)().withBaseUrl,y=Object(i.useContext)(c),j=b||f,w=Object(a.a)(j),k=null==j?void 0:j.replace("pathname://",""),C=void 0!==k?function(e){return e.startsWith("/")}(n=k)?O(n):n:void 0,N=Object(i.useRef)(!1),A=u?r.e:r.c,P=p.a.canUseIntersectionObserver;Object(i.useEffect)((function(){return!P&&w&&window.docusaurus.prefetch(C),function(){P&&d&&d.disconnect()}}),[C,P,w]);var x=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,F=!C||!w||x;return C&&w&&!x&&!h&&y.collectLink(C),F?o.a.createElement("a",Object.assign({href:C},j&&!w&&{target:"_blank",rel:"noopener noreferrer"},v)):o.a.createElement(A,Object.assign({},v,{onMouseEnter:function(){N.current||(window.docusaurus.preload(C),N.current=!0)},innerRef:function(e){var t,n;P&&e&&w&&(t=e,n=function(){window.docusaurus.prefetch(C)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:C||""},u&&{isActive:g,activeClassName:m}))}}}]);