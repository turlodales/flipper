(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(138)),o={id:"search-and-filter",title:"Searching and Filtering"},l={unversionedId:"extending/search-and-filter",id:"extending/search-and-filter",isDocsHomePage:!1,title:"Searching and Filtering",description:"Many plugins need the ability to make their content searchable and filterable. Flipper provides a component for this use-case called Searchable. This is a higher-order-component that can be used to wrap any table, list, or generic React component and adds Flipper's search bar on top of it.",source:"@site/../docs/extending/search-and-filter.mdx",slug:"/extending/search-and-filter",permalink:"/docs/extending/search-and-filter",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/search-and-filter.mdx",version:"current",sidebar:"extending",previous:{title:"Styling Components",permalink:"/docs/extending/styling-components"},next:{title:"Client Plugin API",permalink:"/docs/extending/create-plugin"}},c=[{value:"Filters",id:"filters",children:[]},{value:"Higher Order Component",id:"higher-order-component",children:[{value:"Example",id:"example",children:[]}]}],p={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Many plugins need the ability to make their content searchable and filterable. Flipper provides a component for this use-case called ",Object(i.b)("inlineCode",{parentName:"p"},"Searchable"),". This is a higher-order-component that can be used to wrap any table, list, or generic React component and adds Flipper's search bar on top of it."),Object(i.b)("p",null,"We differentiate between search and filter, but both functionalities are provided by the ",Object(i.b)("inlineCode",{parentName:"p"},"Searchable")," component. Search is a custom string entered by the user. Filters cannot be added by the user directly, but are added programmatically from within your plugin."),Object(i.b)("h2",{id:"filters"},"Filters"),Object(i.b)("p",null,"Every filter has a key and a value. The key represents an attribute of the items you are filtering, and the value is the value that is compared with the items to see if the attribute matches. As an example, if you were filtering rows of a table, a filter key would be the id of a column."),Object(i.b)("p",null,"There are two different types of filters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"include/exclude filters"),": An arbitrary string that must (or must not) be included in the filterable item."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"enum"),": Allows the user to select one or more from a set of values, using a dropdown.")),Object(i.b)("h2",{id:"higher-order-component"},"Higher Order Component"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Searchable()")," function adds three props to a React component:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"addFilter: (filter: Filter) => void")),Object(i.b)("p",null,"Function allowing the component to add filters."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"searchTerm: string")),Object(i.b)("p",null,"The search term entered into the search bar by the user."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"filters: Array<Filter>")),Object(i.b)("p",null,"The list of filters that are currently applied."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"import type {SearchableProps} from 'flipper';\nimport {Searchable} from 'flipper';\n\nclass MyPluginTable extends Component<{\n  ...SearchableProps\n}> {\n  getRows() {\n    const {rows, searchTerm, filters} = this.props;\n    return rows.filter(row => {\n      // filter rows for searchTerm and applied filters\n    });\n  }\n\n  addFilter () {\n    this.props.addFilter({\n      type: 'include',\n      key: '...',\n      value: '...',\n    });\n  }\n\n  render() {\n    return <div>\n      <Button onClick={this.addFilter}>Filter</Button>\n      <Table rows={this.getRows()} />\n    </div>\n  }\n}\n\nexport default SearchableTable = Searchable(MyPluginTable);\n")))}s.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,f=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?a.a.createElement(f,l(l({ref:t},p),{},{components:n})):a.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);