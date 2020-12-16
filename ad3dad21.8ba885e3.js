(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),a=(n(0),n(140)),i=n(142),l=n(144),c={id:"js-table",title:"Showing a table"},s={unversionedId:"tutorial/js-table",id:"tutorial/js-table",isDocsHomePage:!1,title:"Showing a table",description:"The APIs described on this page are currently being revised, if you are looking for a plugin that does more than displaying a table, we recommend to skip to the Custom Plugin page right away.",source:"@site/../docs/tutorial/js-table.mdx",slug:"/tutorial/js-table",permalink:"/docs/tutorial/js-table",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/tutorial/js-table.mdx",version:"current",sidebar:"extending",previous:{title:"Building a Desktop Plugin",permalink:"/docs/tutorial/js-setup"},next:{title:"Building A Custom Desktop Plugin",permalink:"/docs/tutorial/js-custom"}},u=[{value:"Building a Table",id:"building-a-table",children:[{value:"Row Types",id:"row-types",children:[]},{value:"Columns",id:"columns",children:[]},{value:"Sidebar",id:"sidebar",children:[]},{value:"Building Rows",id:"building-rows",children:[]},{value:"Putting it all to work",id:"putting-it-all-to-work",children:[]}]},{value:"What&#39;s next?",id:"whats-next",children:[]}],d={rightToc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("img",{alt:"Android Tutorial App",src:Object(i.a)("img/android-tutorial-desktop.png")}),Object(a.b)("div",{class:"warning"},Object(a.b)("p",null,"The APIs described on this page are currently being revised, if you are looking for a plugin that does more than displaying a table, we recommend to skip to the ",Object(a.b)(l.a,{to:Object(i.a)("/docs/tutorial/js-custom"),mdxType:"Link"},"Custom Plugin")," page right away.\nIf you want to follow the steps on this page, ",Object(a.b)("strong",{parentName:"p"},"remove")," ",Object(a.b)("inlineCode",{parentName:"p"},"flipper-plugin")," from the (peer)dependencies in the ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," of your scaffolded plugin.")),Object(a.b)("h2",{id:"building-a-table"},"Building a Table"),Object(a.b)("p",null,"We have found that one of the most useful things you can do to understand how your app works\nis to give you easy access to the underlying data used to display items on screen. A very\neasy way of doing this is by showing the data in a table. We have optimized for this\nparticular use case that makes it dead-simple to expose your data in a table that you\ncan sort, filter and select items for more detailed information."),Object(a.b)("h3",{id:"row-types"},"Row Types"),Object(a.b)("p",null,"We start by defining what our table rows look like as types:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"type Id = number;\n\ntype Row = {\n  id: Id,\n  title: string,\n  url: string,\n};\n")),Object(a.b)("p",null,"It is important that you have some unique identifier for every row so\nthat we know when something new was added to the table. We will use the\n",Object(a.b)("inlineCode",{parentName:"p"},"id")," field here for this purpose."),Object(a.b)("h3",{id:"columns"},"Columns"),Object(a.b)("p",null,"Next, we define which columns to show and how to display them:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const columns = {\n  title: {\n    value: 'Title',\n  },\n  url: {\n    value: 'URL',\n  },\n};\n\nconst columnSizes = {\n  title: '15%',\n  url: 'flex',\n};\n")),Object(a.b)("p",null,"The keys used here will show up again in the next step when building\nyour rows, so keep them consistent. The ",Object(a.b)("inlineCode",{parentName:"p"},"value")," we define for each column will show up as the header at the top of the table."),Object(a.b)("p",null,"For the size you can either choose a fixed proportion or choose ",Object(a.b)("inlineCode",{parentName:"p"},"flex"),"\nto distribute the remaining available space."),Object(a.b)("h3",{id:"sidebar"},"Sidebar"),Object(a.b)("p",null,"When clicking on an element in your table, you can display a sidebar\nwhich gives more detail about an object than what is shown inline in the\ntable. You could, for instance, show images that you referenced.\nFor this tutorial, however, we will just show the full object by\nusing our ",Object(a.b)("inlineCode",{parentName:"p"},"ManagedDataInspector")," UI component:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import {Panel, ManagedDataInspector} from 'flipper';\n\nfunction renderSidebar(row: Row) {\n  return (\n    <Panel floating={false} heading={'Info'}>\n      <ManagedDataInspector data={row} expandRoot={true} />\n    </Panel>\n  );\n}\n")),Object(a.b)("p",null,"You'll notice how the function takes the ",Object(a.b)("inlineCode",{parentName:"p"},"Row")," type we have defined\nbefore and returns a React component. What you render in this sidebar is\nentirely up to you."),Object(a.b)("h3",{id:"building-rows"},"Building Rows"),Object(a.b)("p",null,"In the same way that we create our sidebar from a ",Object(a.b)("inlineCode",{parentName:"p"},"Row"),", we\nalso render individual rows in our table but instead of a React\ncomponent, we provide a description of the data based\non the column keys we have set up before."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"function buildRow(row: Row): TableBodyRow {\n  return {\n    columns: {\n      title: {\n        value: <Text>{row.title}</Text>,\n        filterValue: row.title,\n      },\n      url: {\n        value: <Text>{row.url}</Text>,\n        filterValue: row.url,\n      },\n    },\n    key: row.id,\n    copyText: JSON.stringify(row),\n    filterValue: `${row.title} ${row.url}`,\n  };\n}\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"title")," and ",Object(a.b)("inlineCode",{parentName:"p"},"url")," fields correspond to the keys\nwe have previously set up as part of the ",Object(a.b)("inlineCode",{parentName:"p"},"columns"),"\nobject."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"filterValue")," is used to power the search bar at the top\nof the table. Defining ",Object(a.b)("inlineCode",{parentName:"p"},"copyText")," allows you to come up\nwith a serialization scheme so users can right-click on\nany row and copy the content to their clipboard."),Object(a.b)("h3",{id:"putting-it-all-to-work"},"Putting it all to work"),Object(a.b)("p",null,"Now that we've build all the individual pieces, we\njust need to hook it all up using ",Object(a.b)("inlineCode",{parentName:"p"},"createTablePlugin"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"export default createTablePlugin<Row>({\n  method: 'newRow',\n  columns,\n  columnSizes,\n  renderSidebar,\n  buildRow,\n});\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"See ",Object(a.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/facebook/flipper/blob/master/desktop/plugins/seamammals/src/index.tsx"}),"index.tsx"))),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"method")," we define here corresponds to the name\nof the function we call on the native side to inform\nthe desktop about new data we want to display."),Object(a.b)("p",null,"And that's it! Starting Flipper will now compile your\nplugin and connect to the native side. It's a good\nidea to start Flipper from the command line to see\nany potential errors. The console in the DevTools\nis a great source of information if something doesn't\nwork as expected, too."),Object(a.b)("h2",{id:"whats-next"},"What's next?"),Object(a.b)("p",null,"You now have an interactive table that you can sort,\nfilter and use to get additional information about\nthe stuff you see on screen."),Object(a.b)("p",null,"For many cases, this is already all you need. However,\nsometimes you want to go the extra mile and want\nto build something a bit more custom. That's what\nwe're going to do in the next part of our tutorial."))}b.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,h=d["".concat(i,".").concat(p)]||d[p]||b[p]||a;return n?r.a.createElement(h,l(l({ref:t},s),{},{components:n})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},141:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(20);t.default=function(){var e=Object(o.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},142:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var o=n(141),r=n(143);function a(){var e=Object(o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var a=void 0===o?{}:o,i=a.forcePrependBaseUrl,l=void 0!==i&&i,c=a.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},143:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}))},144:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(11),i=n(143),l=n(9),c=Object(o.createContext)({collectLink:function(){}}),s=n(142),u=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};t.a=function(e){var t,n,d,b=e.isNavLink,p=e.to,h=e.href,f=e.activeClassName,m=e.isActive,w=e["data-noBrokenLinkCheck"],g=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),j=Object(s.b)().withBaseUrl,O=Object(o.useContext)(c),y=p||h,v=Object(i.a)(y),k=null==y?void 0:y.replace("pathname://",""),x=void 0!==k?function(e){return e.startsWith("/")}(n=k)?j(n):n:void 0,N=Object(o.useRef)(!1),T=b?a.e:a.c,C=l.a.canUseIntersectionObserver;Object(o.useEffect)((function(){return!C&&v&&window.docusaurus.prefetch(x),function(){C&&d&&d.disconnect()}}),[x,C,v]);var P=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,R=!x||!v||P;return x&&v&&!P&&!w&&O.collectLink(x),R?r.a.createElement("a",Object.assign({href:x},y&&!v&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(T,Object.assign({},g,{onMouseEnter:function(){N.current||(window.docusaurus.preload(x),N.current=!0)},innerRef:function(e){var t,n;C&&e&&v&&(t=e,n=function(){window.docusaurus.prefetch(x)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:x||""},b&&{isActive:m,activeClassName:f}))}}}]);