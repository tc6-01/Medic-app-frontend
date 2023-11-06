/*! For license information please see 293.44d28d5b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkwebfile=self.webpackChunkwebfile||[]).push([[293],{5923:function(t,e,r){var n=r(3967),o=r(3400),i=r(653),a=r(3044),c=r(9900),u=r(184);e.Z=function(t){var e=t.groupName,r=t.icon,s=t.description,f=t.onClick,l=(0,n.Z)();return(0,u.jsxs)(o.Z,{sx:{width:"100%",display:"flex",justifyContent:"flex-start"},onClick:f,children:[(0,u.jsx)(i.Z,{children:(0,u.jsx)(a.Z,{sx:{backgroundColor:l.colors.primary.light},children:r})}),(0,u.jsx)(c.Z,{sx:{textAlign:"start",fontSize:20,fontWeight:"bold"},primary:e,secondary:s})]})}},9505:function(t,e,r){var n=r(8596),o=r(6330),i=r(493),a=r(4852),c=r(184),u=(0,n.Z)((function(t){return(0,o.Z)({root:{width:"100%",justifyContent:"start",userSelect:"none"}})}));e.Z=function(t){var e=t.items,r=t.onItemClicked,n=u();return(0,c.jsx)(i.Z,{component:"nav",className:n.root,"aria-label":"contacts",children:null===e||void 0===e?void 0:e.map((function(t,e){return(0,c.jsx)(a.ZP,{alignItems:"center",onClick:function(){return r?r(e):null},children:t},e)}))})}},3293:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var n=r(4165),o=r(5861),i=r(2791),a=(0,r(8499).Z)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),c=r(5923),u=r(9505),s=r(6871),f=r(627),l=r(4554),h=r(1315),p=r(184),d=[{icon:(0,p.jsx)(a,{}),name:"\u7531\u6211\u5171\u4eab",description:"0\u9879"},{icon:(0,p.jsx)(a,{}),name:"\u5171\u4eab\u7ed9\u6211",description:"0\u9879"}],v=function(){var t=(0,s.s0)();(0,i.useEffect)((function(){var t=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,h.v3)().then((function(t){t&&0===t.code&&(d[0].description=t.data.length.toString()+"\u9879")})),(0,h.fD)().then((function(t){t&&0===t.code&&(d[1].description=t.data.length.toString()+"\u9879")}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]);return(0,p.jsx)(f.Z,{in:!0,children:(0,p.jsx)(l.Z,{children:(0,p.jsx)(u.Z,{items:d.map((function(e,r){return(0,p.jsx)(c.Z,{groupName:e.name,description:e.description,icon:e.icon,onClick:function(){return function(e){switch(e){case 0:t("/fileshare/sharedbyme");break;case 1:t("/fileshare/sharedtome")}}(r)}},r)}))})})})},m=function(){return(0,p.jsx)(v,{})}},1315:function(t,e,r){r.d(e,{Cl:function(){return c},RX:function(){return u},Sv:function(){return d},fD:function(){return f},lE:function(){return l},u5:function(){return h},v3:function(){return p},x4:function(){return s}});var n=r(4165),o=r(5861),i=r(4569),a=r.n(i);function c(t,e){var r=localStorage.getItem("username");return{id:t,name:e.fileName,size:e.fileSize,state:r==e.owner?"owned":"fromShared",owner:e.owner,use:e.use,useLimit:e.useLimit,expire:e.expire}}function u(t,e){var r=localStorage.getItem("username");return{id:t,name:e.fileName,size:e.fileSize,state:r==e.target?"owned":"fromShared",owner:e.target,use:e.use,useLimit:e.useLimit,expire:e.expire}}var s=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e,r){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a().post("/login",{userName:e,passWord:r});case 2:return o=t.sent,t.abrupt("return",o.data);case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),f=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a().get("/file",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a().get("/user",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a().post("/file/share",e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a().get("/file/share",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a().get("/file/download?filename=".concat(e),{responseType:"blob",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},6330:function(t,e,r){function n(t){return t}r.d(e,{Z:function(){return n}})},5861:function(t,e,r){function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},4165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(O){f=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),c=new S(n||[]);return i(a,"_invoke",{value:L(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var p={};function d(){}function v(){}function m(){}var y={};f(y,c,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(_([])));w&&w!==e&&r.call(w,c)&&(y=w);var x=m.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function Z(t,e){function o(i,a,c,u){var s=h(t[i],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==(0,n.Z)(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return v.prototype=m,i(x,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:v,configurable:!0}),v.displayName=f(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(Z.prototype),f(Z.prototype,u,(function(){return this})),t.AsyncIterator=Z,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new Z(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),f(x,s,"Generator"),f(x,c,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}}}]);
//# sourceMappingURL=293.44d28d5b.chunk.js.map