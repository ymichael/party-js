(self.webpackChunkparty_js_docs=self.webpackChunkparty_js_docs||[]).push([[1673],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return c}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=n,k=m["".concat(d,".").concat(c)]||m[c]||p[c]||l;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3825:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d},default:function(){return u}});var r=a(2122),n=a(9756),l=(a(7294),a(3905)),i={id:"systems_modules.modulebuilder",title:"Class: ModuleBuilder",sidebar_label:"ModuleBuilder",custom_edit_url:null},o={unversionedId:"api/classes/systems_modules.modulebuilder",id:"api/classes/systems_modules.modulebuilder",isDocsHomePage:!1,title:"Class: ModuleBuilder",description:"systems/modules.ModuleBuilder",source:"@site/docs/api/classes/systems_modules.modulebuilder.md",sourceDirName:"api/classes",slug:"/api/classes/systems_modules.modulebuilder",permalink:"/docs/api/classes/systems_modules.modulebuilder",editUrl:null,version:"current",sidebar_label:"ModuleBuilder",frontMatter:{id:"systems_modules.modulebuilder",title:"Class: ModuleBuilder",sidebar_label:"ModuleBuilder",custom_edit_url:null},sidebar:"api",previous:{title:"Class: Scene",permalink:"/docs/api/classes/scene.scene-1"},next:{title:"Class: Lazy<T>",permalink:"/docs/api/classes/util_lazy.lazy"}},d=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"build",id:"build",children:[]},{value:"by",id:"by",children:[]},{value:"drive",id:"drive",children:[]},{value:"relative",id:"relative",children:[]},{value:"through",id:"through",children:[]}]}],s={toc:d};function u(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/systems_modules"},"systems/modules"),".ModuleBuilder"),(0,l.kt)("p",null,"Represents a builder for particle modules. Returns an evaluatable module\nfunction, that can be consumed by emitters."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"remarks")),'\nNot all properties can be driven. TypeScript will validate this at compile time,\nbut no internal validation is performed due to performance reasons. Also, note\nthat the driving factor is "lifetime" by default.'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'new ModuleBuilder()\n    .drive("size")\n    .by((t) => t * 2)\n    .through("lifetime")\n    .build();\n')),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"new ModuleBuilder"),"()"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"build"},"build"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"build"),"(): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/systems_modules#modulefunction"},"ModuleFunction")),(0,l.kt)("p",null,"Consumes the builder and returns an evaluatable module function."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"remarks")),"\nNote that you need to specify the driving key and value, otherwise an error\nwill be thrown."),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/systems_modules#modulefunction"},"ModuleFunction")),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/42b74b3/src/systems/modules.ts#L144"},"systems/modules.ts:144")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"by"},"by"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"by"),"<TDriver",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"driver"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/index#modulebuilder"},"ModuleBuilder")),(0,l.kt)("p",null,"Specifies the value to drive the module behaviour by. This can be a constant,\na spline or an evaluable function. Note that in the last case, the driving\nfactor is passed as a parameter."),(0,l.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TDriver")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TDriver"),": ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/systems_modules#drivabletype"},"DrivableType"))))),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"driver")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/systems_modules#moduledrivervalue"},"ModuleDriverValue"),"<TDriver",">")))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/index#modulebuilder"},"ModuleBuilder")),(0,l.kt)("p",null,"The chained builder instance."),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/42b74b3/src/systems/modules.ts#L108"},"systems/modules.ts:108")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"drive"},"drive"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"drive"),"<TKey",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"key"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/index#modulebuilder"},"ModuleBuilder")),(0,l.kt)("p",null,"Specifies the key in the particle that should be driven."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"remarks")),"\nNote that not all of a particle's properties are drivable through modules. If you\nneed full control of a particle inside of a module, you can use a module function directly."),(0,l.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TKey")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TKey"),": ",(0,l.kt)("inlineCode",{parentName:"td"},'"color"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"opacity"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"rotation"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"size"'))))),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"key")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TKey"))))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/index#modulebuilder"},"ModuleBuilder")),(0,l.kt)("p",null,"The chained builder instance."),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/42b74b3/src/systems/modules.ts#L86"},"systems/modules.ts:86")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"relative"},"relative"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"relative"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"isRelative?"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/index#modulebuilder"},"ModuleBuilder")),(0,l.kt)("p",null,"Specifies that the module function is supposed to act relative to the\nproperties initial value."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"remarks")),'\nNote that this is only possible if an "initial*" property exists on the\nparticle object. The operation applied to the initial and new value\nis dependant on their type:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Vector"),": Both vectors are added."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"number"),": Both numbers are multiplied.")),(0,l.kt)("p",null,"For more advanced relative customizations, consider using the particle\nobject in the driver value function instead, like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},".by((t, p) => p.initialSize + t * 2);\n")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"isRelative")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},"true")))),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/index#modulebuilder"},"ModuleBuilder")),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/42b74b3/src/systems/modules.ts#L132"},"systems/modules.ts:132")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"through"},"through"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"through"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"factor"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/index#modulebuilder"},"ModuleBuilder")),(0,l.kt)("p",null,'Specifies the factor to drive the evaluated value by. Supports "lifetime" and "size".'),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"factor")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/systems_modules#drivablefactor"},"DrivableFactor"))))),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/index#modulebuilder"},"ModuleBuilder")),(0,l.kt)("p",null,"The chained builder instance."),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/yiliansource/party-js/blob/42b74b3/src/systems/modules.ts#L96"},"systems/modules.ts:96")))}u.isMDXComponent=!0}}]);