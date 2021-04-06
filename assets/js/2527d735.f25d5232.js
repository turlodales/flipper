(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,b=p["".concat(r,".").concat(h)]||p[h]||u[h]||i;return n?a.a.createElement(b,s(s({ref:t},c),{},{components:n})):a.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(3),a=n(7),i=(n(0),n(157)),r={id:"supporting-layout",title:"Implementing Layout Inspection"},s={unversionedId:"extending/supporting-layout",id:"extending/supporting-layout",isDocsHomePage:!1,title:"Implementing Layout Inspection",description:"To enable the Flipper layout inspector on a new platform, just implement a client plugin with id Inspector which implements the following interface:",source:"@site/../docs/extending/supporting-layout.mdx",slug:"/extending/supporting-layout",permalink:"/docs/extending/supporting-layout",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/supporting-layout.mdx",version:"current",sidebar:"setup",previous:{title:"Secure Communication",permalink:"/docs/extending/establishing-a-connection"},next:{title:"Layout Inspector Setup",permalink:"/docs/setup/layout-plugin"}},l=[{value:"Node",id:"node",children:[]},{value:"Plugin Interface",id:"plugin-interface",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To enable the Flipper layout inspector on a new platform, just implement a client plugin with id ",Object(i.b)("inlineCode",{parentName:"p"},"Inspector")," which implements the following interface:"),Object(i.b)("p",null,"Note that we're using ",Object(i.b)("a",{parentName:"p",href:"https://flow.org/en/docs/types/objects/"},"Flow")," syntax to specify this JSON API."),Object(i.b)("h3",{id:"node"},"Node"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"type NodeId = string;\n\ntype InspectorValue = {\n  __type__: 'auto' | 'text' | 'number' | 'boolean' | 'enum' | 'color',\n  __mutable__: boolean,\n  value: number | string | boolean,\n};\n\ntype Node = {\n  id: NodeId,\n  name: string,\n  data: ?{string: Object},\n  children: Array<NodeId>,\n  attributes: ?Array<{name: string, value: string}>,\n  decoration: ?string,\n};\n")),Object(i.b)("p",null,"Node is the core data type of the layout inspector. The Flipper desktop plugin visualizes a tree of nodes with associated data and attributes. Any UI or data model which can be modeled as a tree of nodes can be inspected using the layout inspector. Data associated with the nodes can also be edited."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"id")," is a stable globally unique node identifier."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"name")," is the user facing identifier for this node. It does not need to be unique. Typically the class name of the node is used as the node's name."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"data")," is a set of named JSON objects representing data associated with the node. This data will be rendered as immutable by default, to the user of the plugin but can be made mutable by wrapping any value in a InspectorValue with the ",Object(i.b)("inlineCode",{parentName:"p"},"__mutable__")," attribute set to true."),Object(i.b)("p",null,"InspectorValue can also be used to change the parsed type of the value, such as parsing a number as a color to show the value in a color picker."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"children")," is a list of identifiers pointing to children of this node. This is a list of identifiers instead of a list of nodes to allow nodes to be lazily fetched and instantiated."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"attributes")," is a list of key:value pairs which are displayed alongside the name in the layout inspector."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"decoration")," is a string identifying the optional icon used to decorate a node in the layout inspector. Adding new decoration options requires adding an icon file to the Sonar desktop app. Currently componentkit and litho decorations are supported."),Object(i.b)("h3",{id:"plugin-interface"},"Plugin Interface"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"interface ClientLayoutPlugin {\n  Node getRoot();\n  GetNodesResponse getNodes({ids: Array<NodeId>});\n  GetAllNodesResponse getAllNodes();\n  void setData({id: NodeId, path: Array<string>, value: any});\n  void setHighlighted({id: ?NodeId});\n  void setSearchActive({active: boolean});\n  GetSearchResultsResponse getSearchResults({query: string});\n};\n\ninterface DesktopLayoutPlugin {\n  void invalidate({id: NodeId});\n  void select({path: Array<NodeId>});\n};\n\ntype GetNodesResponse = {\n  elements: Array<Node>\n};\ntype GetAllNodesResponse = {\n  elements: Array<Node>,\n  rootElement: NodeId\n};\ntype GetSearchResultsResponse = {\n  results: ?SearchResultNode,\n  query: string\n};\n\ntype SearchResultNode = {\n  id: NodeId,\n  isMatch: boolean,\n  element: Node,\n  children: ?Array<SearchResultNode>\n}\ntype NodeId = string;\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"getRoot"),": Return the root node of your hierarchy. This is the entry point of Flipper's traversal of your layout."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"getNodes"),": Map a set of NodeIds to their corresponding nodes. This call is used to among other things query the children of a node."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"getAllNodes"),": Similar to getNodes, this should return all nodes in the current layout tree. Ordinarily, nodes are requested lazily, however this exists for taking snapshots of the current state."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"setData"),": Set the data of an mutable data object returned as part of the data field of a node. The id parameter identifies the node, the path parameter is a index path into an object, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"['bounds', 'left']")," and the value parameter is a value of appropriate type to be used as an override."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"setHighlighted"),": Mark a node as highlighted. It is expected that implementations adds a colored overlay to the node identified by id on screen, so that as the user browses the layout tree in flipper, they can easily see on the the client display the nodes they are interacting with. Passing a null id parameter removes the current highlight without highlighting a new node."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"setSearchActive"),": The user has clicked on the crosshair button in Sonar. This feature allows the user to click on an element in the client UI to cause flipper to highlight the corresponding node in the layout tree. A colored overlay should be shown over the whole screen until ",Object(i.b)("inlineCode",{parentName:"p"},"setSearchActive")," is called with ",Object(i.b)("inlineCode",{parentName:"p"},"active: false"),". While ",Object(i.b)("inlineCode",{parentName:"p"},"setSearchActive")," is true, clicking an element in the client UI should trigger a ",Object(i.b)("inlineCode",{parentName:"p"},"select")," call to the flipper desktop, with the path of ids from root to selected node e.g ",Object(i.b)("inlineCode",{parentName:"p"},"select(['node1', 'node6', 'node65'])")," to select a grandchild of ",Object(i.b)("inlineCode",{parentName:"p"},"node1"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"getSearchResults"),": Execute a query on all nodes in the tree, and return a subtree of the layout tree that contains all matching nodes and those on the path to the from the root. A parent that does not itself match the query but exists on the path to a node that does, should have attribute ",Object(i.b)("inlineCode",{parentName:"p"},"isMatch: false")," and only the matching nodes should have ",Object(i.b)("inlineCode",{parentName:"p"},"isMatch: true"),". Nodes not on the path from root to a match need not be included in the returned tree. Be careful not to confuse this method with the unrelated ",Object(i.b)("inlineCode",{parentName:"p"},"setSearchActive"),", which unfortunately shares a similar name."),Object(i.b)("p",null,"Whenever a node or subtree changes it is expected that the client sends a ",Object(i.b)("inlineCode",{parentName:"p"},"invalidate")," command to the desktop app over the active connection. This will invalidate the cache of the subtree anchored by the node with the given id."))}d.isMDXComponent=!0}}]);