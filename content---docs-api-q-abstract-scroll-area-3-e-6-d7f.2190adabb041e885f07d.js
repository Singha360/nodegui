(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{173:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return p}));var a=r(0),n=r.n(a),o=n.a.createContext({}),i=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},c=function(e){var t=i(e.components);return n.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(r[a]=e[a]);return r}(e,["components","mdxType","originalType","parentName"]),d=i(r),p=a,b=d[c+"."+p]||d[p]||s[p]||o;return r?n.a.createElement(b,Object.assign({},{ref:t},l,{components:r})):n.a.createElement(b,Object.assign({},{ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return d}));r(0);var a=r(173);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i={sidebar_label:"QAbstractScrollArea",title:"QAbstractScrollArea"},c=[{value:"Static Methods",id:"static-methods",children:[]},{value:"Instance Properties",id:"instance-properties",children:[]},{value:"Instance Methods",id:"instance-methods",children:[{value:"widget.setViewport(widget)",id:"widgetsetviewportwidget",children:[]},{value:"widget.viewport()",id:"widgetviewport",children:[]}]}],l={rightToc:c},s="wrapper";function d(e){var t=e.components,r=o(e,["components"]);return Object(a.b)(s,n({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Abstract class to add functionalities common to all scrollarea based widgets.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"This class implements all methods, properties of Qt's ",Object(a.b)("a",n({parentName:"strong"},{href:"https://doc.qt.io/qt-5/qabstractscrollarea.html"}),"QAbstractScrollArea class")," so that it can be inherited by all scroll based widgets")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"QAbstractScrollArea")," is an abstract class and hence no instances of the same should be created. It exists so that we can add similar functionalities to all scrollable widget's easily. If you wish to create a scrollarea use ",Object(a.b)("a",n({parentName:"p"},{href:"/docs/api/QScrollArea"}),"QScrollArea")," instead."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"QAbstractScrollArea is the base class for all widgets. It inherits from another abstract class ",Object(a.b)("a",n({parentName:"strong"},{href:"/docs/api/NodeWidget"}),"NodeWidget"))),Object(a.b)("p",null,"QAbstractScrollArea will list all methods and properties that are common to all scrollable widgets in the NodeGui world."),Object(a.b)("h2",{id:"static-methods"},"Static Methods"),Object(a.b)("p",null,"QAbstractScrollArea can access all the static methods defined in ",Object(a.b)("a",n({parentName:"p"},{href:"/docs/api/NodeWidget"}),"NodeWidget")),Object(a.b)("h2",{id:"instance-properties"},"Instance Properties"),Object(a.b)("p",null,"QAbstractScrollArea can access all the instance properties defined in ",Object(a.b)("a",n({parentName:"p"},{href:"/docs/api/NodeWidget"}),"NodeWidget")),Object(a.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(a.b)("p",null,"QAbstractScrollArea can access all the instance methods defined in ",Object(a.b)("a",n({parentName:"p"},{href:"/docs/api/NodeWidget"}),"NodeWidget")),Object(a.b)("p",null,"Additionally it also has the following instance methods:"),Object(a.b)("h3",{id:"widgetsetviewportwidget"},Object(a.b)("inlineCode",{parentName:"h3"},"widget.setViewport(widget)")),Object(a.b)("p",null,"Sets the viewport to be the given widget. It calls the native method ",Object(a.b)("a",n({parentName:"p"},{href:"https://doc.qt.io/qt-5/qabstractscrollarea.html#setViewport"}),"QAbstractScrollArea: setViewport"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"widget")," NodeWidget.")),Object(a.b)("h3",{id:"widgetviewport"},Object(a.b)("inlineCode",{parentName:"h3"},"widget.viewport()")),Object(a.b)("p",null,"Returns the viewport widget (NodeWidget). It calls the native method ",Object(a.b)("a",n({parentName:"p"},{href:"https://doc.qt.io/qt-5/qabstractscrollarea.html#viewport"}),"QAbstractScrollArea: viewport"),"."))}d.isMDXComponent=!0}}]);