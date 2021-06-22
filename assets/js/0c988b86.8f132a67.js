(self.webpackChunkparty_js_docs=self.webpackChunkparty_js_docs||[]).push([[5411],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),k=o(a),u=r,c=k["".concat(p,".").concat(u)]||k[u]||d[u]||i;return a?n.createElement(c,l(l({ref:e},m),{},{components:a})):n.createElement(c,l({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=k;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8613:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l={id:"systems_variation",title:"Module: systems/variation",sidebar_label:"systems/variation",sidebar_position:0,custom_edit_url:null},s={unversionedId:"api/modules/systems_variation",id:"api/modules/systems_variation",isDocsHomePage:!1,title:"Module: systems/variation",description:"Type aliases",source:"@site/docs/api/modules/systems_variation.md",sourceDirName:"api/modules",slug:"/api/modules/systems_variation",permalink:"/docs/api/modules/systems_variation",editUrl:null,version:"current",sidebar_label:"systems/variation",sidebarPosition:0,frontMatter:{id:"systems_variation",title:"Module: systems/variation",sidebar_label:"systems/variation",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"Module: systems/sources",permalink:"/docs/api/modules/systems_sources"},next:{title:"Module: templates",permalink:"/docs/api/modules/templates"}},p=[{value:"Type aliases",id:"type-aliases",children:[{value:"Variation",id:"variation",children:[]}]},{value:"Functions",id:"functions",children:[{value:"evaluateVariation",id:"evaluatevariation",children:[]},{value:"gradientSample",id:"gradientsample",children:[]},{value:"range",id:"range",children:[]},{value:"skew",id:"skew",children:[]},{value:"skewRelative",id:"skewrelative",children:[]},{value:"splineSample",id:"splinesample",children:[]}]}],o={toc:p};function m(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,i.kt)("h3",{id:"variation"},"Variation"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"Variation"),"<T",">",": ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"[] ","|"," () => ",(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("p",null,'Represents a junction of types that can be used as a variation on a value.\nAt any point in time, the variation can be evaluated to retrieve a "primitive" value.\nThe variation can consist of a constant, an array or an evaluateable function.'),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/42b74b3/src/systems/variation.ts#L10"},"systems/variation.ts:10")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"evaluatevariation"},"evaluateVariation"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"evaluateVariation"),"<T",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"variation"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("p",null,"Returns a value instance of a variation."),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"variation")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/systems_variation#variation"},"Variation"),"<T",">")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/42b74b3/src/systems/variation.ts#L15"},"systems/variation.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gradientsample"},"gradientSample"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"gradientSample"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"gradient"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/systems_variation#variation"},"Variation"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components_color.color"},"Color"),">"),(0,i.kt)("p",null,"Creates a variation function that returns a random sample from the given gradient."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"remarks")),"\nThis function is an alias for the spline variation, since a gradient is just\na spline under the hood."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"gradient")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/components_gradient.gradient"},"Gradient")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The gradient to sample from.")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/systems_variation#variation"},"Variation"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components_color.color"},"Color"),">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/42b74b3/src/systems/variation.ts#L70"},"systems/variation.ts:70")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"range"},"range"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"range"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"min"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/systems_variation#variation"},"Variation"),"<number",">"),(0,i.kt)("p",null,"Creates a variation function that returns a random number from min to max."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"min")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"max")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/systems_variation#variation"},"Variation"),"<number",">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/42b74b3/src/systems/variation.ts#L24"},"systems/variation.ts:24")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"skew"},"skew"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"skew"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"amount"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/systems_variation#variation"},"Variation"),"<number",">"),(0,i.kt)("p",null,"Creates a variation function that skews the specified value by a specified, absolute\namount. This means that instead of the value itself, a random number that deviates\nat most by the specified amount is returned."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"remarks")),"\nIf you want to skew by a percentage instead, use ",(0,i.kt)("inlineCode",{parentName:"p"},"skewRelative"),"."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/systems_variation#variation"},"Variation"),"<number",">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/42b74b3/src/systems/variation.ts#L36"},"systems/variation.ts:36")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"skewrelative"},"skewRelative"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"skewRelative"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"percentage"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/systems_variation#variation"},"Variation"),"<number",">"),(0,i.kt)("p",null,"Creates a variation function that skews the specified value by a specified percentage.\nThis means that instead of the value itself, a random number that deviates by a maximum\nof the specified percentage is returned."),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"percentage")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/systems_variation#variation"},"Variation"),"<number",">"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/42b74b3/src/systems/variation.ts#L45"},"systems/variation.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"splinesample"},"splineSample"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"splineSample"),"<T",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"spline"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/systems_variation#variation"},"Variation"),"<T",">"),(0,i.kt)("p",null,"Creates a variation function that returns a random sample from the given spline."),(0,i.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"spline")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/components_spline.spline"},"Spline"),"<T",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The spline to sample from.")))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/systems_variation#variation"},"Variation"),"<T",">"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/42b74b3/src/systems/variation.ts#L57"},"systems/variation.ts:57")))}m.isMDXComponent=!0}}]);