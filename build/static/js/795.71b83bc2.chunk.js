"use strict";(self.webpackChunkwebfile=self.webpackChunkwebfile||[]).push([[795],{6037:function(e,t,n){var r=n(4942),o=n(1413),a=n(5987),i=n(6934),c=n(4554),l=n(7639),s=n(9293),u=n(3967),d=n(4697),h=n(3504),p=n(184),f=["className"],x=(0,i.ZP)(h.rU)((function(e){var t=e.theme;return"\n        color: ".concat(t.palette.text.primary,";\n        display: flex;\n        text-decoration: none;\n        width: 53px;\n        margin: 0 auto;\n        font-weight: ").concat(t.typography.fontWeightBold,";\n")})),m=(0,i.ZP)(c.Z)((function(){return"\n        width: 52px;\n        height: 38px;\n"})),g=(0,i.ZP)(c.Z)((function(e){var t=e.theme;return"\n        background: ".concat(t.general.reactFrameworkColor,";\n        width: 18px;\n        height: 18px;\n        border-radius: ").concat(t.general.borderRadiusSm,';\n        position: relative;\n        transform: rotate(45deg);\n        top: 3px;\n        left: 17px;\n\n        &:after, \n        &:before {\n            content: "";\n            display: block;\n            width: 18px;\n            height: 18px;\n            position: absolute;\n            top: -1px;\n            right: -20px;\n            transform: rotate(0deg);\n            border-radius: ').concat(t.general.borderRadiusSm,";\n        }\n\n        &:before {\n            background: ").concat(t.palette.primary.main,";\n            right: auto;\n            left: 0;\n            top: 20px;\n        }\n\n        &:after {\n            background: ").concat(t.palette.secondary.main,";\n        }\n")})),j=(0,i.ZP)(c.Z)((function(e){var t=e.theme;return"\n        width: 16px;\n        height: 16px;\n        position: absolute;\n        top: 12px;\n        left: 12px;\n        z-index: 5;\n        border-radius: ".concat(t.general.borderRadiusSm,";\n        background: ").concat(t.header.background,";\n")})),v=(0,i.ZP)((function(e){var t=e.className,n=(0,a.Z)(e,f);return(0,p.jsx)(l.Z,(0,o.Z)((0,o.Z)({},n),{},{classes:{popper:t}}))}))((function(e){var t,n=e.theme;return t={},(0,r.Z)(t,"& .".concat(s.Z.tooltip),{backgroundColor:n.colors.alpha.trueWhite[100],color:n.palette.getContrastText(n.colors.alpha.trueWhite[100]),fontSize:n.typography.pxToRem(12),fontWeight:"bold",borderRadius:n.general.borderRadiusSm,boxShadow:"0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)"}),(0,r.Z)(t,"& .".concat(s.Z.arrow),{color:n.colors.alpha.trueWhite[100]}),t}));t.Z=function(){var e=(0,u.Z)();return(0,p.jsx)(v,{title:"Tokyo Free White React Typescript Admin Dashboard",arrow:!0,children:(0,p.jsx)(x,{to:"/dashboard/overview",children:(0,p.jsx)(d.Z,{sx:{".MuiBadge-badge":{fontSize:e.typography.pxToRem(11),right:-2,top:8}},overlap:"circular",color:"success",badgeContent:"2.0",children:(0,p.jsx)(m,{children:(0,p.jsx)(g,{children:(0,p.jsx)(j,{})})})})})})}},8795:function(e,t,n){n.r(t);var r=n(885),o=n(2791),a=n(4554),i=n(890),c=n(8029),l=n(6151),s=n(266),u=n(8096),d=n(3466),h=n(7071),p=n(4721),f=n(7639),x=n(3400),m=n(6907),g=n(6037),j=n(6934),v=n(2093),Z=n(4668),b=n(1880),y=n(6688),w=n(184),k=(0,j.ZP)(a.Z)((function(){return"\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"})),M=(0,j.ZP)(i.Z)((function(e){var t=e.theme;return"\n  font-size: ".concat(t.typography.pxToRem(75),";\n")})),O=(0,j.ZP)(i.Z)((function(e){var t=e.theme;return"\n  color: ".concat(t.colors.alpha.black[50],";\n")})),P=(0,j.ZP)(c.Z)((function(e){var t=e.theme;return"\n    background-color: ".concat(t.colors.alpha.white[100],";\n")})),W=(0,j.ZP)(l.Z)((function(e){var t=e.theme;return"\n    margin-right: -".concat(t.spacing(1),";\n")}));t.default=function(){var e=function(){var e=+new Date("2023")-+new Date,t={};return e>0&&(t={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),t},t=(0,o.useState)(e()),n=(0,r.Z)(t,2),c=n[0],l=n[1];(0,o.useEffect)((function(){setTimeout((function(){l(e())}),1e3)}));var j=[];return Object.keys(c).forEach((function(e){c[e]&&j.push((0,w.jsxs)(a.Z,{textAlign:"center",px:3,children:[(0,w.jsx)(M,{variant:"h1",children:c[e]}),(0,w.jsx)(O,{variant:"h3",children:e})]}))})),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m.ql,{children:(0,w.jsx)("title",{children:"Status - Coming Soon"})}),(0,w.jsx)(k,{children:(0,w.jsxs)(s.Z,{maxWidth:"md",children:[(0,w.jsx)(g.Z,{}),(0,w.jsxs)(a.Z,{textAlign:"center",mb:3,children:[(0,w.jsxs)(s.Z,{maxWidth:"xs",children:[(0,w.jsx)(i.Z,{variant:"h1",sx:{mt:4,mb:2},children:"Coming Soon"}),(0,w.jsx)(i.Z,{variant:"h3",color:"text.secondary",fontWeight:"normal",sx:{mb:4},children:"We're working on implementing the last features before our launch!"})]}),(0,w.jsx)("img",{alt:"Coming Soon",height:200,src:"/static/images/status/coming-soon.svg"})]}),(0,w.jsx)(a.Z,{display:"flex",justifyContent:"center",children:j.length?j:(0,w.jsx)(w.Fragment,{children:"Time's up!"})}),(0,w.jsx)(s.Z,{maxWidth:"sm",children:(0,w.jsxs)(a.Z,{sx:{textAlign:"center",p:4},children:[(0,w.jsxs)(u.Z,{variant:"outlined",fullWidth:!0,children:[(0,w.jsx)(P,{type:"text",placeholder:"Enter your email address here...",endAdornment:(0,w.jsx)(d.Z,{position:"end",children:(0,w.jsx)(W,{variant:"contained",size:"small",children:"Notify Me"})}),startAdornment:(0,w.jsx)(d.Z,{position:"start",children:(0,w.jsx)(y.Z,{})})}),(0,w.jsx)(h.Z,{children:"We'll email you once our website is launched!"})]}),(0,w.jsx)(p.Z,{sx:{my:4}}),(0,w.jsxs)(a.Z,{sx:{textAlign:"center"},children:[(0,w.jsx)(f.Z,{arrow:!0,placement:"top",title:"Facebook",children:(0,w.jsx)(x.Z,{color:"primary",children:(0,w.jsx)(v.Z,{})})}),(0,w.jsx)(f.Z,{arrow:!0,placement:"top",title:"Twitter",children:(0,w.jsx)(x.Z,{color:"primary",children:(0,w.jsx)(Z.Z,{})})}),(0,w.jsx)(f.Z,{arrow:!0,placement:"top",title:"Instagram",children:(0,w.jsx)(x.Z,{color:"primary",children:(0,w.jsx)(b.Z,{})})})]})]})})]})})]})}},2093:function(e,t,n){var r=n(4836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var c=o?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(r,a,c):r[a]=e[a]}r.default=e,n&&n.set(e,r)}(n(2791));var o=r(n(5649)),a=n(184);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}var c=(0,o.default)((0,a.jsx)("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook");t.Z=c},1880:function(e,t,n){var r=n(4836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var c=o?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(r,a,c):r[a]=e[a]}r.default=e,n&&n.set(e,r)}(n(2791));var o=r(n(5649)),a=n(184);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}var c=(0,o.default)((0,a.jsx)("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram");t.Z=c},6688:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5649)),a=n(184),i=(0,o.default)([(0,a.jsx)("path",{d:"M20 6H4l8 4.99zM4 8v10h16V8l-8 5z",opacity:".3"},"0"),(0,a.jsx)("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z"},"1")],"MailTwoTone");t.Z=i},4668:function(e,t,n){var r=n(4836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var c=o?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(r,a,c):r[a]=e[a]}r.default=e,n&&n.set(e,r)}(n(2791));var o=r(n(5649)),a=n(184);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}var c=(0,o.default)((0,a.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");t.Z=c}}]);
//# sourceMappingURL=795.71b83bc2.chunk.js.map