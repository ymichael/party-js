(window.webpackJsonp=window.webpackJsonp||[]).push([[18],Array(52).concat([function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var i=r(3),n=r(9),o=(r(0),r(107)),a=r(136),s=r(137),u={title:"Simple"},c={unversionedId:"examples/simple",id:"examples/simple",isDocsHomePage:!1,title:"Simple",description:"Confetti",source:"@site/docs/examples/01-simple.mdx",sourceDirName:"examples",slug:"/examples/simple",permalink:"/docs/examples/simple",editUrl:"https://github.com/yiliansource/party-js/edit/main/docs/docs/examples/01-simple.mdx",version:"current",sidebarPosition:1,frontMatter:{title:"Simple"},sidebar:"sidebar",previous:{title:"Utilities",permalink:"/docs/utilities"},next:{title:"Advanced",permalink:"/docs/examples/advanced"}},l=[{value:"Confetti",id:"confetti",children:[]},{value:"Sparkles",id:"sparkles",children:[]}],p={toc:l};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"confetti"},"Confetti"),Object(o.b)("p",null,"A demonstration of the ",Object(o.b)("a",{parentName:"p",href:"/docs/templates#confetti"},"confetti template"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const element = document.getElementById("demoConfetti");\nparty.confetti(element, {\n    size: party.variation.range(0.6, 1),\n});\n')),Object(o.b)(a.a,{demoMethod:s.a,mdxType:"DemoButton"}),Object(o.b)("h2",{id:"sparkles"},"Sparkles"),Object(o.b)("p",null,"A demonstration of the ",Object(o.b)("a",{parentName:"p",href:"/docs/templates#sparkles"},"sparkles template"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const element = document.getElementById("demoSparkles");\nparty.sparkles(element);\n')),Object(o.b)(a.a,{demoMethod:s.c,mdxType:"DemoButton"}))}d.isMDXComponent=!0},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var i=r(0),n=r.n(i);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),l=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),f=i,h=p["".concat(a,".").concat(f)]||p[f]||d[f]||o;return r?n.a.createElement(h,s(s({ref:t},c),{},{components:r})):n.a.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},function(e,t,r){"use strict";var i=this&&this.__spreadArray||function(e,t){for(var r=0,i=t.length,n=e.length;r<i;r++,n++)e[n]=t[r];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.Vector=void 0;var n=r(109),o=function(){function e(e,t,r){void 0===e&&(e=0),void 0===t&&(t=0),void 0===r&&(r=0),this.values=new Float32Array(3),this.xyz=[e,t,r]}return Object.defineProperty(e.prototype,"x",{get:function(){return this.values[0]},set:function(e){this.values[0]=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.values[1]},set:function(e){this.values[1]=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"z",{get:function(){return this.values[2]},set:function(e){this.values[2]=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"xyz",{get:function(){return[this.x,this.y,this.z]},set:function(e){this.values[0]=e[0],this.values[1]=e[1],this.values[2]=e[2]},enumerable:!1,configurable:!0}),e.prototype.magnitude=function(){return Math.sqrt(this.sqrMagnitude())},e.prototype.sqrMagnitude=function(){return this.x*this.x+this.y*this.y+this.z*this.z},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z)},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z)},e.prototype.scale=function(t){return"number"==typeof t?new e(this.x*t,this.y*t,this.z*t):new e(this.x*t.x,this.y*t.y,this.z*t.z)},e.prototype.normalized=function(){var t=this.magnitude();return 0!==t?this.scale(1/t):new(e.bind.apply(e,i([void 0],this.xyz)))},e.prototype.angle=function(e){return n.rad2deg*Math.acos((this.x*e.x+this.y*e.y+this.z*e.z)/(this.magnitude()*e.magnitude()))},e.prototype.cross=function(t){return new e(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},e.prototype.dot=function(e){return this.magnitude()*e.magnitude()*Math.cos(n.deg2rad*this.angle(e))},e.prototype.toString=function(){return"Vector("+this.values.join(", ")+")"},e.from2dAngle=function(t){return new e(Math.cos(t*n.deg2rad),Math.sin(t*n.deg2rad))},e.zero=new e(0,0,0),e.one=new e(1,1,1),e.right=new e(1,0,0),e.up=new e(0,1,0),e.forward=new e(0,0,1),e}();t.Vector=o},function(e,t,r){"use strict";function i(e,t,r){return(1-r)*e+r*t}Object.defineProperty(t,"__esModule",{value:!0}),t.approximately=t.clamp=t.invlerp=t.slerp=t.lerp=t.epsilon=t.rad2deg=t.deg2rad=void 0,t.deg2rad=Math.PI/180,t.rad2deg=180/Math.PI,t.epsilon=1e-6,t.lerp=i,t.slerp=function(e,t,r){return i(e,t,(1-Math.cos(r*Math.PI))/2)},t.invlerp=function(e,t,r){return(r-e)/(t-e)},t.clamp=function(e,t,r){return Math.min(r,Math.max(t,e))},t.approximately=function(e,r){return Math.abs(e-r)<t.epsilon}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.gradientSample=t.splineSample=t.skewRelative=t.skew=t.range=t.evaluateVariation=void 0;var i=r(121);function n(e){return function(){return e.evaluate(Math.random())}}t.evaluateVariation=function(e){return Array.isArray(e)?i.pick(e):"function"==typeof e?e():e},t.range=function(e,t){return function(){return i.randomRange(e,t)}},t.skew=function(e,t){return function(){return e+i.randomRange(-t,t)}},t.skewRelative=function(e,t){return function(){return e*(1+i.randomRange(-t,t))}},t.splineSample=n,t.gradientSample=function(e){return n(e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.overrideDefaults=void 0,t.overrideDefaults=function(e,t){return Object.assign({},e,t)}},,function(e,t,r){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),t.forceInitialize=t.scene=t.util=t.math=t.random=t.modules=t.modifier=t.variation=t.settings=void 0;var o=r(138),a=r(127),s=r(120);Object.defineProperty(t,"settings",{enumerable:!0,get:function(){return s.settings}}),n(r(130),t),n(r(128),t),t.variation=r(110),t.modifier=r(123),t.modules=r(151),t.random=r(121),t.math=r(109),t.util=r(114),n(r(115),t),n(r(155),t),n(r(131),t),t.scene=new a.default((function(){if("undefined"==typeof document||"undefined"==typeof window)throw new Error("It seems like you are trying to run party.js in a non-browser environment, which is not supported.");return new o.Scene})),t.forceInitialize=function(){t.scene.current}},function(e,t,r){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(111),t),n(r(146),t),n(r(129),t),n(r(150),t)},function(e,t,r){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(122),t),n(r(147),t),n(r(148),t),n(r(149),t),n(r(108),t)},,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.settings=void 0,t.settings={debug:!1,gravity:800,zIndex:99999}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.randomInsideRect=t.randomUnitVector=t.pick=t.randomRange=void 0;var i=r(108),n=r(109);function o(e,t){return void 0===e&&(e=0),void 0===t&&(t=1),n.lerp(e,t,Math.random())}t.randomRange=o,t.pick=function(e){return 0===e.length?void 0:e[Math.floor(Math.random()*e.length)]},t.randomUnitVector=function(){var e=o(0,2*Math.PI),t=o(-1,1);return new i.Vector(Math.sqrt(1-t*t)*Math.cos(e),Math.sqrt(1-t*t)*Math.sin(e),t)},t.randomInsideRect=function(e){return new i.Vector(e.x+o(0,e.width),e.y+o(0,e.height))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Colour=void 0;var i=r(109),n=function(){function e(e,t,r){this.values=new Float32Array(3),this.rgb=[e,t,r]}return Object.defineProperty(e.prototype,"r",{get:function(){return this.values[0]},set:function(e){this.values[0]=Math.floor(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"g",{get:function(){return this.values[1]},set:function(e){this.values[1]=Math.floor(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"b",{get:function(){return this.values[2]},set:function(e){this.values[2]=Math.floor(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rgb",{get:function(){return[this.r,this.g,this.b]},set:function(e){this.r=e[0],this.g=e[1],this.b=e[2]},enumerable:!1,configurable:!0}),e.prototype.mix=function(t,r){return void 0===r&&(r=.5),new e(i.lerp(this.r,t.r,r),i.lerp(this.g,t.g,r),i.lerp(this.b,t.b,r))},e.prototype.toHex=function(){var e=function(e){return e.toString(16).padStart(2,"0")};return"#"+e(this.r)+e(this.g)+e(this.b)},e.prototype.toString=function(){return"rgb("+this.values.join(", ")+")"},e.fromHex=function(t){return t.startsWith("#")&&(t=t.substr(1)),new e(parseInt(t.substr(0,2),16),parseInt(t.substr(2,2),16),parseInt(t.substr(4,2),16))},e.fromHsl=function(t,r,i){if(t/=360,i/=100,0===(r/=100))return new e(i,i,i);var n=function(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e},o=function(e){return Math.min(255,256*e)},a=i<.5?i*(1+r):i+r-i*r,s=2*i-a;return new e(o(n(s,a,t+1/3)),o(n(s,a,t)),o(n(s,a,t-1/3)))},e.white=new e(255,255,255),e.black=new e(0,0,0),e}();t.Colour=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.evaluateModifier=void 0,t.evaluateModifier=function(e,t){if("object"==typeof e&&"evaluate"in e){var r=(t.initialLifetime-t.lifetime)/t.lifetime;return e.evaluate(r)}return"function"==typeof e?e(t):e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ParticleModifierModule=void 0;var i=function(){};t.ParticleModifierModule=i},,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.particleContainer=t.debugContainer=t.rootContainer=void 0;var i=r(113),n=r(127);function o(e,t){Object.assign(e.style,t)}function a(e){return e&&e.isConnected}t.rootContainer=new n.default((function(){var e=document.createElement("div");return e.id="party-js-container",o(e,{position:"fixed",left:"0",top:"0",bottom:"0",right:"0",pointerEvents:"none",userSelect:"none",zIndex:i.settings.zIndex.toString()}),document.body.appendChild(e),e}),a),t.debugContainer=new n.default((function(){var e=document.createElement("div");return e.id="party-js-debug",o(e,{position:"absolute",top:"0",left:"0",margin:"0.5em",padding:"0.5em 1em",border:"2px solid rgb(0, 0, 0, 0.2)",background:"rgb(0, 0, 0, 0.1)",color:"#555",fontFamily:"monospace"}),t.rootContainer.current.appendChild(e),e}),a),t.particleContainer=new n.default((function(){var e=document.createElement("div");return e.id="party-js-particles",o(e,{width:"100%",height:"100%",perspective:"400px"}),t.rootContainer.current.appendChild(e),e}),a)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(t,r){void 0===r&&(r=e.defaultExists),this.factory=t,this.exists=r}return Object.defineProperty(e.prototype,"current",{get:function(){return this.exists(this.value)||(this.value=this.factory()),this.value},enumerable:!1,configurable:!0}),e.defaultExists=function(e){return void 0!==e},e}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Emitter=void 0;var i=r(108),n=r(120),o=r(121),a=r(110),s=r(111),u=r(140),c=r(130),l=function(){function e(e){this.particles=[],this.modules=[],this.durationTimer=0,this.emissionTimer=0,this.currentLoop=0,this.attemptedBurstIndices=[],this.options=s.overrideDefaults(u.getDefaultEmitterOptions(),null==e?void 0:e.emitterOptions),this.emission=s.overrideDefaults(u.getDefaultEmissionOptions(),null==e?void 0:e.emissionOptions),this.shape=s.overrideDefaults(u.getDefaultShapeOptions(),null==e?void 0:e.shapeOptions),this.renderer=s.overrideDefaults(u.getDefaultRendererOptions(),null==e?void 0:e.rendererOptions)}return Object.defineProperty(e.prototype,"isExpired",{get:function(){return this.options.loops>=0&&this.currentLoop>=this.options.loops},enumerable:!1,configurable:!0}),e.prototype.addModule=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var i=new e(t);return this.modules.push(i),i},e.prototype.tick=function(e){if(!this.isExpired){if(this.durationTimer+=e,this.durationTimer>=this.options.duration){if(this.currentLoop++,this.isExpired)return;this.durationTimer=0,this.attemptedBurstIndices=[]}for(var t=0,r=0,i=this.emission.bursts;r<i.length;r++){var n=i[r];if(n.time<=this.durationTimer&&!this.attemptedBurstIndices.includes(t)){for(var o=a.evaluateVariation(n.count),s=0;s<o;s++)this.emitParticle();this.attemptedBurstIndices.push(t)}t++}this.emissionTimer+=e;for(var u=1/this.emission.rate;this.emissionTimer>u;)this.emissionTimer-=u,this.emitParticle();var c=function(t){var r=l.particles[t];l.tickParticle(r,e),l.options.despawningRules.some((function(e){return e(r)}))&&l.particles.splice(t,1)},l=this;for(s=this.particles.length-1;s>=0;s--)c(s)}},e.prototype.tickParticle=function(e,t){e.lifetime-=t,this.options.useGravity&&(e.velocity=e.velocity.add(i.Vector.up.scale(n.settings.gravity*t))),e.location=e.location.add(e.velocity.scale(t));for(var r=0,o=this.modules;r<o.length;r++){o[r].apply(e)}},e.prototype.emitParticle=function(){var e=c.createParticle({location:o.randomInsideRect(this.shape.source),lifetime:a.evaluateVariation(this.options.initialLifetime),velocity:i.Vector.from2dAngle(a.evaluateVariation(this.shape.angle)).scale(a.evaluateVariation(this.options.initialSpeed)),size:a.evaluateVariation(this.options.initialSize),rotation:a.evaluateVariation(this.options.initialRotation),colour:a.evaluateVariation(this.options.initialColour)});return this.particles.push(e),this.particles.length>this.options.maxParticles&&this.particles.shift(),e},e}();t.Emitter=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.despawningRules=void 0,t.despawningRules={lifetime:function(e){return e.lifetime<=0},bounds:function(e){var t=document.documentElement.scrollHeight;return e.location.y>t}}},function(e,t,r){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.createParticle=void 0;var n=r(122),o=r(108),a=r(111);t.createParticle=function(e){var t=a.overrideDefaults({lifetime:0,size:1,location:o.Vector.zero,rotation:o.Vector.zero,velocity:o.Vector.zero,colour:n.Colour.white},e);return i(i({id:Symbol()},t),{initialLifetime:t.lifetime,initialSize:t.size,initialRotation:t.rotation})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resolveShapeFactory=t.resolvableShapes=void 0;var i=r(110);t.resolvableShapes={square:'<div style="height: 10px; width: 10px;"></div>',rectangle:'<div style="height: 6px; width: 10px;"></div>',circle:'<svg viewBox="-1 -1 2 2" width="10" height="10"><path fill="currentColor" d="M0,1 C0.551915024494,1 1,0.551915024494 1,0 C1,-0.551915024494 0.551915024494,-1 0,-1 C-0.551915024494,-1 -1,-0.551915024494 -1,0 C-1,0.551915024494 -0.551915024494,1 0,1 Z"/></svg>',roundedSquare:'<div style="height: 10px; width: 10px; border-radius: 3px;"></div>',roundedRectangle:'<div style="height: 6px; width: 10px; border-radius: 3px;"></div>',star:'<svg viewBox="0 0 512 512" width="20" height="20"><polygon fill="currentColor" points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 255.898,401.21 416.035,502.431 369.263,318.842"/></svg>'},t.resolveShapeFactory=function(e){var r=i.evaluateVariation(e);if("string"==typeof r){var n=t.resolvableShapes[r];if(!n)throw new Error("Failed to resolve shape key '"+r+"'.");var o=document.createElement("div");return o.innerHTML=n,o.firstElementChild}return r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Spline=void 0;var i=r(109),n=function(){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(0===e.length)throw new Error("Splines require at least one key.");if(Array.isArray(e[0]))throw new Error("You are trying to pass an array to the spline constructor, which is not supported. Try to spread the array into the constructor instead.");this.keys=e}return e.prototype.evaluate=function(e){if(0===this.keys.length)throw new Error("Attempt to evaluate a spline with no keys.");if(1===this.keys.length)return this.keys[0].value;var t=this.keys.sort((function(e,t){return e.time-t.time})),r=t.findIndex((function(t){return t.time>e}));if(0===r)return t[0].value;if(-1===r)return t[t.length-1].value;var n=t[r-1],o=t[r],a=i.invlerp(n.time,o.time,e);return this.interpolate(n.value,o.value,a)},e}();t.Spline=n},,,,function(e,t,r){"use strict";var i=r(0),n=r.n(i);t.a=function(e){var t=e.demoMethod,r=Object(i.useRef)(null);return n.a.createElement("div",{ref:r,id:t.name,className:"demoButton",onClick:function(){return t.call(null,r.current)}},n.a.createElement("img",{src:"/img/cursor.svg"}))}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return a}));var i=r(113);function n(e){i.confetti(e,{size:i.variation.range(.6,1)})}function o(e){i.sparkles(e)}function a(e){var t=i.util.sourceToRect(e);i.resolvableShapes.heart||(i.resolvableShapes.heart='<svg viewBox="0 0 512 512" height="20" width="20"><path d="M316.722,29.761c66.852,0,121.053,54.202,121.053,121.041c0,110.478-218.893,257.212-218.893,257.212S0,266.569,0,150.801 C0,67.584,54.202,29.761,121.041,29.761c40.262,0,75.827,19.745,97.841,49.976C240.899,49.506,276.47,29.761,316.722,29.761z"/></svg>');var r=i.scene.current.createEmitter({emitterOptions:{loops:1,useGravity:!1,initialSpeed:400,initialColour:i.variation.gradientSample(i.Gradient.simple(i.Colour.fromHex("#ffa68d"),i.Colour.fromHex("#fd3a84")))},emissionOptions:{rate:0,bursts:[{time:0,count:i.variation.skew(20,10)}]},shapeOptions:{angle:i.variation.range(0,360),source:t},rendererOptions:{shapeFactory:"heart",applyLighting:void 0}});r.addModule(i.modules.RotationModifier).rotation=function(e){return new i.Vector(0,0,100).scale(e.initialLifetime-e.lifetime)},r.addModule(i.modules.SizeModifier).size=function(e){return.5+.3*(Math.cos(10*(e.initialLifetime-e.lifetime))+1)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Scene=void 0;var i=r(139),n=r(128),o=r(145),a=function(){function e(){this.emitters=[],this.debug=new i.Debug(this),this.renderer=new o.Renderer,this.scheduledTickId=void 0,this.lastTickTimestamp=performance.now(),this.tick=this.tick.bind(this),this.scheduleTick()}return e.prototype.createEmitter=function(e){var t=new n.Emitter(e);return this.emitters.push(t),t},e.prototype.scheduleTick=function(){this.scheduledTickId=window.requestAnimationFrame(this.tick)},e.prototype.cancelTick=function(){window.cancelAnimationFrame(this.scheduledTickId)},e.prototype.tick=function(e){var t=(e-this.lastTickTimestamp)/1e3;try{for(var r=0;r<this.emitters.length;r++){(o=this.emitters[r]).tick(t),o.isExpired&&this.emitters.splice(r--,1)}}catch(c){console.error("An error occurred while updating the scene's emitters:\n\""+c+'"')}try{this.renderer.begin();for(var i=0,n=this.emitters;i<n.length;i++)for(var o=n[i],a=0,s=o.particles;a<s.length;a++){var u=s[a];this.renderer.renderParticle(u,o)}this.renderer.end()}catch(c){console.error("An error occurred while rendering the scene's particles:\n\""+c+'"')}this.debug.tick(t),this.lastTickTimestamp=e,this.scheduleTick()},e}();t.Scene=a},function(e,t,r){"use strict";var i=this&&this.__spreadArray||function(e,t){for(var r=0,i=t.length,n=e.length;r<i;r++,n++)e[n]=t[r];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.Debug=void 0;var n=r(126),o=r(120),a=function(){function e(e){this.scene=e,this.refreshRate=8,this.refreshTimer=1/this.refreshRate}return e.prototype.tick=function(e){var t=n.debugContainer.current,r=o.settings.debug?"block":"none";t.style.display!==r&&(t.style.display=r),o.settings.debug&&(this.refreshTimer+=e,this.refreshTimer>1/this.refreshRate&&(this.refreshTimer=0,t.innerHTML=this.getDebugInformation(e).join("<br>")))},e.prototype.getDebugInformation=function(e){var t=this.scene.emitters.length,r=this.scene.emitters.reduce((function(e,t){return e+t.particles.length}),0),n=["<b>party.js Debug</b>","--------------","FPS: "+Math.round(1/e),"Emitters: "+t,"Particles: "+r],o=this.scene.emitters.map((function(e,t){return"Emitter #"+(t+1)+" ("+["\u03a3p: "+e.particles.length,"\u03a3t: "+e.durationTimer.toFixed(3)+"s"].join(", ")+")"}));return n.push.apply(n,i(["--------------"],o)),n},e}();t.Debug=a},function(e,t,r){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(141),t),n(r(142),t),n(r(143),t),n(r(144),t)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultEmitterOptions=void 0;var i=r(122),n=r(108),o=r(129);t.getDefaultEmitterOptions=function(){return{duration:5,loops:-1,initialLifetime:5,initialSpeed:5,initialSize:1,initialRotation:n.Vector.zero,initialColour:i.Colour.white,useGravity:!0,maxParticles:300,despawningRules:[o.despawningRules.lifetime,o.despawningRules.bounds]}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultShapeOptions=void 0,t.getDefaultShapeOptions=function(){return{source:{x:0,y:0,width:0,height:0},angle:0}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultEmissionOptions=void 0,t.getDefaultEmissionOptions=function(){return{rate:10,bursts:[]}}},function(e,t,r){"use strict";function i(e,t){var r=e.toHex();switch(t.nodeName.toLowerCase()){case"div":t.style.background=r;break;case"svg":t.style.fill=t.style.color=r;break;default:t.style.color=r}}function n(e,t){t.style.filter="brightness("+(.5+Math.abs(e))+")"}function o(e,t){t.style.transform="translateX("+e.location.x.toFixed(3)+"px) translateY("+e.location.y.toFixed(3)+"px) translateZ("+e.location.z.toFixed(3)+"px) rotateX("+e.rotation.x.toFixed(3)+"deg) rotateY("+e.rotation.y.toFixed(3)+"deg) rotateZ("+e.rotation.z.toFixed(3)+"deg) scale("+e.size.toFixed(3)+")"}Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultRendererOptions=void 0,t.getDefaultRendererOptions=function(){return{shapeFactory:"square",applyColour:i,applyLighting:n,applyTransform:o}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Renderer=void 0;var i=r(108),n=r(126),o=r(131),a=r(114),s=function(){function e(){this.elements=new Map,this.light=new i.Vector(0,0,1)}return e.prototype.begin=function(){this.renderedParticles=[]},e.prototype.end=function(){for(var e=this.elements.keys(),t=e.next();!t.done;){var r=t.value;this.renderedParticles.includes(r)||(this.elements.get(r).remove(),this.elements.delete(r)),t=e.next()}return this.renderedParticles.length},e.prototype.renderParticle=function(e,t){var r=t.renderer,i=this.elements.has(e.id)?this.elements.get(e.id):this.createParticleElement(e,r);if(r.applyColour&&r.applyColour(e.colour,i),r.applyLighting){var n=a.rotationToNormal(e.rotation).dot(this.light);r.applyLighting(n,i)}r.applyTransform&&r.applyTransform(e,i),this.renderedParticles.push(e.id)},e.prototype.createParticleElement=function(e,t){var r=o.resolveShapeFactory(t.shapeFactory).cloneNode(!0);return r.style.position="absolute",this.elements.set(e.id,n.particleContainer.current.appendChild(r)),r},e}();t.Renderer=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rotationToNormal=void 0;var i=r(115),n=r(109);t.rotationToNormal=function(e){var t=e.x*n.deg2rad,r=e.y*n.deg2rad,o=new i.Vector(Math.cos(r),0,Math.sin(r)),a=new i.Vector(0,Math.cos(t),Math.sin(t));return o.cross(a)}},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__spreadArray||function(e,t){for(var r=0,i=t.length,n=e.length;r<i;r++,n++)e[n]=t[r];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.Gradient=void 0;var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.interpolate=function(e,t,r){return e.mix(t,r)},t.solid=function(e){return new t({value:e,time:.5})},t.simple=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var i=1/(e.length-1);return new(t.bind.apply(t,o([void 0],e.map((function(e,t){return{value:e,time:t*i}})))))},t}(r(132).Spline);t.Gradient=a},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.NumericSpline=void 0;var o=r(109),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.interpolate=function(e,t,r){return o.slerp(e,t,r)},t}(r(132).Spline);t.NumericSpline=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sourceToRect=void 0,t.sourceToRect=function(e){return"x"in e&&"y"in e?{x:e.x,y:e.y,width:0,height:0}:"clientLeft"in e&&"clientTop"in e?e.getBoundingClientRect():{x:e.clientX,y:e.clientY,width:0,height:0}}},function(e,t,r){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(152),t),n(r(153),t),n(r(154),t)},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.CustomModifier=void 0;var o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.modifier=void 0,t}return n(t,e),t.prototype.apply=function(e){this.modifier&&this.modifier(e)},t}(r(124).ParticleModifierModule);t.CustomModifier=o},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.SizeModifier=void 0;var o=r(123),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.size=1,t}return n(t,e),t.prototype.apply=function(e){e.size=e.initialSize*o.evaluateModifier(this.size,e)},t}(r(124).ParticleModifierModule);t.SizeModifier=a},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.RotationModifier=void 0;var o=r(108),a=r(123),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rotation=o.Vector.zero,t}return n(t,e),t.prototype.apply=function(e){e.rotation=e.initialRotation.add(a.evaluateModifier(this.rotation,e))},t}(r(124).ParticleModifierModule);t.RotationModifier=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sparkles=t.confetti=void 0;var i=r(156);Object.defineProperty(t,"confetti",{enumerable:!0,get:function(){return i.confetti}});var n=r(157);Object.defineProperty(t,"sparkles",{enumerable:!0,get:function(){return n.sparkles}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.confetti=void 0;var i=r(113),n=r(115),o=r(110),a=r(114),s=r(111);t.confetti=function(e,t){var r=s.overrideDefaults({count:o.range(20,40),spread:40,speed:o.range(300,600),size:o.skew(1,.2),rotation:function(){return i.random.randomUnitVector().scale(180)},colour:function(){return n.Colour.fromHsl(i.random.randomRange(0,360),100,70)},sizeOverLifetime:function(e){return Math.min(1,3*(e.initialLifetime-e.lifetime))},rotationOverLifetime:function(e){return new n.Vector(140,200,260).scale(e.initialLifetime-e.lifetime)},shapes:["square","circle"]},t),u=a.sourceToRect(e),c=i.scene.current.createEmitter({emitterOptions:{loops:1,duration:8,initialLifetime:o.range(6,8),initialSpeed:r.speed,initialSize:r.size,initialRotation:r.rotation,initialColour:r.colour},emissionOptions:{rate:0,bursts:[{time:0,count:r.count}]},shapeOptions:{angle:o.skew(-90,o.evaluateVariation(r.spread)),source:u},rendererOptions:{shapeFactory:r.shapes}});return c.addModule(i.modules.RotationModifier).rotation=r.rotationOverLifetime,c.addModule(i.modules.SizeModifier).size=r.sizeOverLifetime,c}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sparkles=void 0;var i=r(113),n=r(115),o=r(110),a=r(114),s=r(111);t.sparkles=function(e,t){var r=s.overrideDefaults({count:o.range(10,20),speed:o.range(100,200),size:o.range(.5,1.5),rotation:function(){return new n.Vector(0,0,i.random.randomRange(0,360))},colour:function(){return n.Colour.fromHsl(50,100,i.random.randomRange(55,85))},sizeOverLifetime:new n.NumericSpline({time:0,value:0},{time:.3,value:1},{time:.7,value:1},{time:1,value:0}),rotationOverLifetime:function(e){return new n.Vector(0,0,200).scale(e.initialLifetime-e.lifetime)}},t),u=a.sourceToRect(e),c=i.scene.current.createEmitter({emitterOptions:{loops:1,duration:3,useGravity:!1,initialLifetime:o.range(1,2),initialSpeed:r.speed,initialSize:r.size,initialRotation:r.rotation,initialColour:r.colour},emissionOptions:{rate:0,bursts:[{time:0,count:r.count}]},shapeOptions:{angle:o.range(0,360),source:u},rendererOptions:{applyLighting:void 0,shapeFactory:"star"}});return c.addModule(i.modules.RotationModifier).rotation=r.rotationOverLifetime,c.addModule(i.modules.SizeModifier).size=r.sizeOverLifetime,c}}])]);