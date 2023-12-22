/*! For license information please see 293.75ecd475.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkwebfile=self.webpackChunkwebfile||[]).push([[293],{5923:function(t,r,e){var n=e(3967),o=e(3400),a=e(653),i=e(3044),u=e(9900),c=e(184);r.Z=function(t){var r=t.groupName,e=t.icon,s=t.description,f=t.onClick,l=(0,n.Z)();return(0,c.jsxs)(o.Z,{sx:{width:"100%",display:"flex",justifyContent:"flex-start"},onClick:f,children:[(0,c.jsx)(a.Z,{children:(0,c.jsx)(i.Z,{sx:{backgroundColor:l.colors.primary.light},children:e})}),(0,c.jsx)(u.Z,{sx:{textAlign:"start",fontSize:20,fontWeight:"bold"},primary:r,secondary:s})]})}},9505:function(t,r,e){var n=e(8596),o=e(6330),a=e(493),i=e(4852),u=e(184),c=(0,n.Z)((function(t){return(0,o.Z)({root:{width:"100%",justifyContent:"start",userSelect:"none"}})}));r.Z=function(t){var r=t.items,e=t.onItemClicked,n=c();return(0,u.jsx)(a.Z,{component:"nav",className:n.root,"aria-label":"contacts",children:null===r||void 0===r?void 0:r.map((function(t,r){return(0,u.jsx)(i.ZP,{alignItems:"center",onClick:function(){return e?e(r):null},children:t},r)}))})}},3293:function(t,r,e){e.r(r),e.d(r,{default:function(){return y}});var n=e(4165),o=e(5861),a=e(9439),i=e(2791),u=(0,e(8499).Z)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),c=e(5923),s=e(9505),f=e(6871),l=e(627),h=e(4554),p=e(1315),d=e(184),v=[{icon:(0,d.jsx)(u,{}),name:"\u7531\u6211\u5171\u4eab",description:"0\u9879"},{icon:(0,d.jsx)(u,{}),name:"\u5171\u4eab\u7ed9\u6211",description:"0\u9879"}],g=function(){var t=(0,f.s0)(),r=(0,i.useState)(0),e=(0,a.Z)(r,2),u=e[0],g=e[1],y=(0,i.useState)(0),m=(0,a.Z)(y,2),w=m[0],x=m[1];(0,i.useEffect)((function(){var t=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,p.v3)().then((function(t){t&&200===t.code&&g(t.data.length)})),(0,p.zU)().then((function(t){t&&200===t.code&&x(t.data.length)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t(),v[0].description=u.toString()+"\u9879",v[1].description=w.toString()+"\u9879"}),[]);var Z=function(r){switch(r){case 0:if(0==u)break;t("/fileshare/sharedbyme");break;case 1:if(0==w)break;t("/fileshare/sharedtome")}};return(0,d.jsx)(l.Z,{in:!0,children:(0,d.jsx)(h.Z,{children:(0,d.jsx)(s.Z,{items:[(0,d.jsx)(c.Z,{groupName:v[0].name,description:u.toString()+"\u9879",icon:v[0].icon,onClick:function(){return Z(0)}},0),(0,d.jsx)(c.Z,{groupName:v[1].name,description:w.toString()+"\u9879",icon:v[1].icon,onClick:function(){return Z(1)}},1)]})})})},y=function(){return(0,d.jsx)(g,{})}},1315:function(t,r,e){e.d(r,{RX:function(){return u},SN:function(){return y},Sv:function(){return v},cT:function(){return g},fD:function(){return f},lE:function(){return l},u5:function(){return h},v3:function(){return p},x4:function(){return c},z2:function(){return s},zU:function(){return d}});var n=e(4165),o=e(5861),a=e(4569),i=e.n(a);function u(t,r){var e=localStorage.getItem("username");return{id:t,fileName:r.fileName,size:r.fileSize,state:e==r.target?"owned":"fromShared",owner:r.target,isAllow:r.isAllow,use:r.use,useLimit:r.useLimit,expire:r.expire}}var c=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r,e){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().post("/user/login",{username:r,password:e});case 2:return o=t.sent,t.abrupt("return",o.data);case 4:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}(),s=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r,e,o){var a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().post("/user/register",{username:r,password:e,retry_password:o});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));return function(r,e,n){return t.apply(this,arguments)}}(),f=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/file/list",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/user/list",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("\u8bf7\u6c42\u53c2\u6570",r),t.next=3,i().post("/user/share",r,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:return e=t.sent,t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/file/share",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/file/be-share",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r,e){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/file/download?filename=".concat(r,"&state=").concat(e),{responseType:"blob",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return o=t.sent,t.abrupt("return",o.data);case 4:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}(),g=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().post("/admin/upload",r,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),y=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/file/shareDelete?id=".concat(r),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},6330:function(t,r,e){function n(t){return t}e.d(r,{Z:function(){return n}})},5861:function(t,r,e){function n(t,r,e,n,o,a,i){try{var u=t[a](i),c=u.value}catch(s){return void e(s)}u.done?r(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,a){var i=t.apply(r,e);function u(t){n(i,o,a,u,c,"next",t)}function c(t){n(i,o,a,u,c,"throw",t)}u(void 0)}))}}e.d(r,{Z:function(){return o}})},4165:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(1002);function o(){o=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(N){f=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),u=new E(n||[]);return a(i,"_invoke",{value:k(t,e,u)}),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var p={};function d(){}function v(){}function g(){}var y={};f(y,u,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(z([])));w&&w!==r&&e.call(w,u)&&(y=w);var x=g.prototype=d.prototype=Object.create(y);function Z(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function o(a,i,u,c){var s=h(t[a],t,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==(0,n.Z)(l)&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):r.resolve(l).then((function(t){f.value=t,u(f)}),(function(t){return o("throw",t,u,c)}))}c(s.arg)}var i;a(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function k(t,r,e){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var u=L(i,e);if(u){if(u===p)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=h(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}function L(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=h(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,p;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function z(t){if(t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return v.prototype=g,a(x,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:v,configurable:!0}),v.displayName=f(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,f(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},Z(b.prototype),f(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new b(l(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},Z(x),f(x,s,"Generator"),f(x,u,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=z,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),c=e.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:z(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}}}]);
//# sourceMappingURL=293.75ecd475.chunk.js.map