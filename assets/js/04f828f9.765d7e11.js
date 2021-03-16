(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(t),b=i,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||r;return t?a.a.createElement(m,l(l({ref:n},c),{},{components:t})):a.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=b;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},150:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}));var i=t(16),a=t(151);function r(){var e=Object(i.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,r=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,i){var r=void 0===i?{}:i,o=r.forcePrependBaseUrl,l=void 0!==o&&o,p=r.absolute,c=void 0!==p&&p;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(l)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return c?e+u:u}(r,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,r().withBaseUrl)(e,n)}},151:function(e,n,t){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return a}))},70:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return b}));var i,a=t(3),r=t(7),o=(t(0),t(149)),l=t(150),p={id:"android",title:"Building an Android Plugin"},c={unversionedId:"tutorial/android",id:"tutorial/android",isDocsHomePage:!1,title:"Building an Android Plugin",description:"For the purpose of the tutorial, we will assume you already have an existing",source:"@site/../docs/tutorial/android.mdx",slug:"/tutorial/android",permalink:"/docs/tutorial/android",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/tutorial/android.mdx",version:"current",sidebar:"extending",previous:{title:"Building an iOS Plugin",permalink:"/docs/tutorial/ios"},next:{title:"Building a React Native Plugin",permalink:"/docs/tutorial/react-native"}},u=[{value:"Creating a Plugin",id:"creating-a-plugin",children:[]},{value:"Registering your Plugin",id:"registering-your-plugin",children:[]},{value:"What next",id:"what-next",children:[]}],s=(i="FbInternalOnly",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),d={toc:u};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("img",{alt:"Android Tutorial App",src:Object(l.a)("img/android-tutorial-app.png")}),Object(o.b)("p",null,"For the purpose of the tutorial, we will assume you already have an existing\nAndroid application in which you have a feed or list of items. As the Flipper\nteam, we obviously concern ourselves mostly with sea mammals, so this is what\nour app displays. The actual display logic is not what's interesting here,\nbut how we can make this data available in our Flipper desktop app."),Object(o.b)("p",null,"Part of what makes Flipper so useful is allowing users to inspect the\ninternals of their app. In this case, we'd like to see the specific\nsea mammal data the app is handling, so let's write a plugin to make that\neasy."),Object(o.b)("p",null,"You can find the source code of the project ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/flipper/tree/7dae5771d96ea76b75796d3b3a2c78746e581e3f/android/tutorial"},"on GitHub"),"."),Object(o.b)("h2",{id:"creating-a-plugin"},"Creating a Plugin"),Object(o.b)(s,{mdxType:"FbInternalOnly"},Object(o.b)("div",{class:"warning"},"[FB-Only] Depending the options selected during scaffolding (see intro), some of the following code might already have been generated by `scarf`.")),Object(o.b)("p",null,"On Android, a Flipper plugin is a class that implements the\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/master/android/src/main/java/com/facebook/flipper/core/FlipperPlugin.java"},Object(o.b)("inlineCode",{parentName:"a"},"FlipperPlugin")),"\ninterface."),Object(o.b)("p",null,"The interface is rather small and only comprises four methods:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"getId() -> String"),": Specify a unique string so the JavaScript side knows where to talk to. This must match the name attribute in the ",Object(o.b)("inlineCode",{parentName:"li"},"package.json")," we will look into later in this tutorial."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onConnect(FlipperConnection)"),": This method is called when the desktop app connects to the mobile client and is ready to receive or send data."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onDisconnect()"),": We're sure you can figure this one out."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"runInBackground() -> Boolean"),": Unless this is true, only the currently selected plugin in the Flipper UI can communicate with the device.")),Object(o.b)("p",null,"Let's implement these methods for our sealife app:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'import com.facebook.flipper.core.FlipperConnection\nimport com.facebook.flipper.core.FlipperObject\nimport com.facebook.flipper.core.FlipperPlugin\nimport com.facebook.flipper.sample.tutorial.MarineMammals\n\nclass SeaMammalFlipperPlugin : FlipperPlugin {\n    private var connection: FlipperConnection? = null\n\n    override fun getId(): String = "sea-mammals"\n\n    override fun onConnect(connection: FlipperConnection?) {\n        this.connection = connection\n\n        MarineMammals.list.mapIndexed { index, (title, picture_url) ->\n            FlipperObject.Builder()\n                    .put("id", index)\n                    .put("title", title)\n                    .put("url", picture_url).build()\n        }.forEach(this::newRow)\n    }\n\n    override fun onDisconnect() {\n        connection = null\n    }\n\n    override fun runInBackground(): Boolean = false\n\n    private fun newRow(row: FlipperObject) {\n        connection?.send("newRow", row)\n    }\n}\n')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"See ",Object(o.b)("a",{parentName:"em",href:"https://github.com/facebook/flipper/blob/5afb148ffa9e267e5b24e0dfae198d1cf46cc396/android/tutorial/src/main/java/com/facebook/flipper/sample/tutorial/plugin/SeaMammalFlipperPlugin.kt"},"SeaMammalFlipperPlugin.kt"))),Object(o.b)("p",null,"The two interesting bits here are ",Object(o.b)("inlineCode",{parentName:"p"},"onConnect")," and ",Object(o.b)("inlineCode",{parentName:"p"},"newRow"),". ",Object(o.b)("inlineCode",{parentName:"p"},"newRow"),' sends a message\nto the desktop app and is identified with the same name "newRow".'),Object(o.b)("p",null,"For our sample app, we're dealing with a static data source. However, in real\nlife, you will likely dynamically receive new data as the user interacts with\nthe app. So while we just send all the data we have at once in ",Object(o.b)("inlineCode",{parentName:"p"},"onConnect"),",\nyou would normally set up a listener here to instead call ",Object(o.b)("inlineCode",{parentName:"p"},"newRow")," as new data\narrives."),Object(o.b)("p",null,"You may have noticed that we don't just send random ",Object(o.b)("inlineCode",{parentName:"p"},"Object"),"s over the wire but\nuse ",Object(o.b)("inlineCode",{parentName:"p"},"FlipperObject"),"s instead. What are they? A ",Object(o.b)("inlineCode",{parentName:"p"},"FlipperObject")," works similar\nto a JSON dictionary and has a limited set of supported types like strings,\nintegers and arrays. Before sending an object from your native app to the\ndesktop, you first need to break it down into ",Object(o.b)("inlineCode",{parentName:"p"},"FlipperObject"),"-serializable parts."),Object(o.b)("h2",{id:"registering-your-plugin"},"Registering your Plugin"),Object(o.b)("p",null,"Now all you need to do is let Flipper know about your new plugin. You do this\nby calling ",Object(o.b)("inlineCode",{parentName:"p"},"addPlugin")," on your ",Object(o.b)("inlineCode",{parentName:"p"},"FlipperClient"),", which is normally created\nat application startup."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"val flipperClient = AndroidFlipperClient.getInstance(this)\n// Add all sorts of other amazing plugins here ...\nflipperClient.addPlugin(SeaMammalFlipperPlugin())\nflipperClient.start()\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"See ",Object(o.b)("a",{parentName:"em",href:"https://github.com/facebook/flipper/blob/5afb148ffa9e267e5b24e0dfae198d1cf46cc396/android/tutorial/src/main/java/com/facebook/flipper/sample/tutorial/TutorialApplication.kt"},Object(o.b)("inlineCode",{parentName:"a"},"TutorialApplication.kt")))),Object(o.b)("h2",{id:"what-next"},"What next"),Object(o.b)("p",null,'When starting your application now, Flipper will tell the desktop application\nabout the plugin it supports, including "sea-mammals" and will look for a\ncorresponding JavaScript plugin by that name. Let\'s build that next.'))}b.isMDXComponent=!0}}]);