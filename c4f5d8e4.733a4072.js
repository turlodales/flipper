(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{121:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var a=t(0),r=t.n(a),i=t(165),l=t(144),o=(t(156),t(161));function c(){return r.a.createElement(i.a,{title:"Extensible mobile app debugger"},r.a.createElement("div",null,r.a.createElement("div",{className:"splash"},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Extensible mobile app\xa0debugger"),r.a.createElement("h2",null,"Flipper is a platform for debugging iOS, Android and React Native apps. Visualize, inspect, and control your apps from a simple desktop interface. Use Flipper as is or extend it using the plugin API."),r.a.createElement(o.FbInternalOnly,null,r.a.createElement("div",null,r.a.createElement("p",{className:"landing-btn landing-btn-left landing-btn-label"},"Download"),r.a.createElement("a",{className:"landing-btn landing-btn-middle primary",target:"_top",href:"munki://detail-Flipper"},"Mac"),r.a.createElement("a",{className:"landing-btn landing-btn-middle primary",target:"_top",href:"https://fburl.com/flipper-linux-download"},"Linux (Beta)"),r.a.createElement("a",{className:"landing-btn landing-btn-right primary",target:"_top",href:"https://fburl.com/flipper-windows-download"},"Windows (Beta)"),r.a.createElement("a",{className:"landing-btn",href:Object(l.a)("docs/features/index")},"Learn more"))),r.a.createElement(o.OssOnly,null,r.a.createElement("div",null,r.a.createElement("p",{className:"landing-btn landing-btn-left landing-btn-label"},"Download"),r.a.createElement("a",{className:"landing-btn landing-btn-middle primary",href:"https://www.facebook.com/fbflipper/public/mac"},"Mac"),r.a.createElement("a",{className:"landing-btn landing-btn-middle primary",href:"https://www.facebook.com/fbflipper/public/linux"},"Linux"),r.a.createElement("a",{className:"landing-btn landing-btn-right primary",href:"https://www.facebook.com/fbflipper/public/windows"},"Windows"),r.a.createElement("a",{className:"landing-btn",href:Object(l.a)("docs/features/index")},"Learn more"))),r.a.createElement("div",{className:"slideshow"},r.a.createElement("img",{src:Object(l.a)("img/logs.png"),className:"splashScreen"}),r.a.createElement("img",{src:Object(l.a)("img/layout.png"),className:"splashScreen"}),r.a.createElement("img",{src:Object(l.a)("img/network.png"),className:"splashScreen"}),r.a.createElement("img",{src:Object(l.a)("img/crashreporterplugin.png"),className:"splashScreen"})),r.a.createElement("div",{className:"shadow"}))),r.a.createElement("div",{className:"content row"},r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:Object(l.a)("img/inspector.png"),srcSet:Object(l.a)("img/inspector.png")+" 1x, "+Object(l.a)("img/inspector@2x.png")+" 2x"})),r.a.createElement("div",{className:"col"},r.a.createElement("h4",null,"Tools"),r.a.createElement("h3",null,"Mobile development"),r.a.createElement("p",null,"Flipper aims to be your number one companion for mobile app development on iOS and Android. Therefore, we provide a bunch of useful tools including a log viewer, interactive layout inspector, and network inspector."),r.a.createElement("a",{className:"learnmore",href:Object(l.a)("docs/features/index")},"Learn more"))),r.a.createElement("div",{className:"content row"},r.a.createElement("div",{className:"col"},r.a.createElement("h4",null,"Plugins"),r.a.createElement("h3",null,"Extending Flipper"),r.a.createElement("p",null,"Flipper is built as a platform. In addition to using the tools already included, you can create your own plugins to visualize and debug data from your mobile apps. Flipper takes care of sending data back and forth, calling functions, and listening for events on the mobile app."),r.a.createElement("a",{className:"learnmore",href:Object(l.a)("docs/extending/index")},"Learn more")),r.a.createElement("div",{className:"col center"},r.a.createElement("img",{src:Object(l.a)("img/FlipperKit.png"),srcSet:Object(l.a)("img/FlipperKit.png")+" 1x, "+Object(l.a)("img/FlipperKit@2x.png")+" 2x"}))),r.a.createElement("div",{className:"content row"},r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:Object(l.a)("img/plugins.png"),srcSet:Object(l.a)("img/plugins.png")+" 1x, "+Object(l.a)("img/plugins@2x.png")+" 2x"})),r.a.createElement("div",{className:"col"},r.a.createElement("h4",null,"Open Source"),r.a.createElement("h3",null,"Contributing to Flipper"),r.a.createElement("p",null,"Both Flipper's desktop app and native mobile SDKs are open-source and MIT licensed. This enables you to see and understand how we are building plugins, and of course join the community and help improve Flipper. We are excited to see what you will build on this platform."),r.a.createElement("a",{className:"learnmore",href:"https://github.com/facebook/flipper",target:"_blank"},"Explore the source on GitHub"))),r.a.createElement("div",{className:"wrapper landing-cta"},r.a.createElement("a",{href:Object(l.a)("docs/getting-started/index"),className:"landing-btn primary"},"Integrate Flipper In Your App"),r.a.createElement(o.OssOnly,null,r.a.createElement("a",{href:"https://www.facebook.com/fbflipper/public/mac",target:"_blank",className:"landing-btn"},"Download Flipper")))))}},157:function(e,n,t){"use strict";var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,i){function l(e){try{c(a.next(e))}catch(n){i(n)}}function o(e){try{c(a.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,o)}c((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,i=0;const l={};n.call=function(e){return a(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in l||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?l[n].resolve(e.data.response):l[n].reject(new Error(e.data.error)),delete l[n]})));const n=i++,t=new Promise(((e,t)=>{l[n]={resolve:e,reject:t}})),a={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},o="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,o),t}))}},161:function(e,n,t){"use strict";(function(e){var a=this&&this.__createBinding||(Object.create?function(e,n,t,a){void 0===a&&(a=t),Object.defineProperty(e,a,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,a){void 0===a&&(a=t),e[a]=n[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&a(n,e,t);return r(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.uidocs=n.bloks=void 0,n.bloks=i(t(163)),n.uidocs=i(t(164));const l=["internal","external"];let o;try{o=t(156).usePluginData}catch(m){o=null}function c(e){return u(e),d()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${l}. Instead got ${e}`);if(!Object.keys(e).find((e=>l.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${l}`);const n=Object.keys(e).filter((e=>!l.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${l}`)}function d(){return e.env.FB_INTERNAL||o&&o("internaldocs-fb").FB_INTERNAL}n.fbContent=c,n.fbInternalOnly=function(e){return c({internal:e})},n.validateFbContentArgs=u,n.isInternal=d,n.FbInternalOnly=function(e){return d()?e.children:null},n.OssOnly=function(e){return d()?null:e.children}}).call(this,t(162))},162:function(e,n){var t,a,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{a="function"==typeof clearTimeout?clearTimeout:l}catch(e){a=l}}();var c,s=[],u=!1,d=-1;function m(){u&&c&&(u=!1,c.length?s=c.concat(s):d=-1,s.length&&p())}function p(){if(!u){var e=o(m);u=!0;for(var n=s.length;n;){for(c=s,s=[];++d<n;)c&&c[d].run();d=-1,n=s.length}c=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===l||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(n){try{return a.call(null,e)}catch(n){return a.call(this,e)}}}(e)}}function f(e,n){this.fun=e,this.array=n}function g(){}r.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];s.push(new f(e,n)),1!==s.length||u||o(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},163:function(e,n,t){"use strict";var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,i){function l(e){try{c(a.next(e))}catch(n){i(n)}}function o(e){try{c(a.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,o)}c((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const r=t(157);n.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},164:function(e,n,t){"use strict";var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,i){function l(e){try{c(a.next(e))}catch(n){i(n)}}function o(e){try{c(a.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,o)}c((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const r=t(157);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return a(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:a}=e;return yield r.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:a}})}))}}}]);