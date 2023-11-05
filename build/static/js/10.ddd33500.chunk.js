"use strict";(self.webpackChunkwebfile=self.webpackChunkwebfile||[]).push([[10],{6010:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(885),a=n(4554),o=n(3767),u=n(6598),i=n(2791),c=n(4142),s=n(3239),f=n(184),l=function(e){var t=e.loading,n=e.children;return t?(0,f.jsx)(s.Z,{sx:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}}):(0,f.jsx)(f.Fragment,{children:n})},p=n(1315),d=n(2479),h=function(e){var t=(0,i.useState)(null),n=(0,r.Z)(t,2),s=n[0],h=n[1],x=(0,i.useState)(!0),m=(0,r.Z)(x,2),v=m[0],Z=m[1],g=(0,i.useState)(1),w=(0,r.Z)(g,2),j=w[0],S=w[1],y=e.file;(0,i.useEffect)((function(){(0,p.Sv)(y.name).then((function(e){console.log(e);var t=new Blob([e],{type:"application/pdf"}),n=new FileReader;n.readAsDataURL(t),n.addEventListener("load",(function(){var e=n.result;h(e.split(",")[1]),Z(!1)}))}))}),[]);var b="data:application/pdf;base64,"+s;if(!s)return null;return s?(0,f.jsx)(l,{loading:v,children:(0,f.jsx)(u.Z,{children:(0,f.jsxs)(o.Z,{spacing:1,alignContent:"center",pt:3,pb:3,children:[(0,f.jsx)(a.Z,{justifyContent:"center",display:"flex",children:"\u8fc7\u671f\u65f6\u95f4:".concat((0,d.u)(y.expire))}),(0,f.jsx)(a.Z,{justifyContent:"center",display:"flex",children:"\u5269\u4f59\u4f7f\u7528\u6b21\u6570:".concat(y.useLimit-y.use-1)}),(0,f.jsx)(a.Z,{justifyContent:"center",display:"flex",sx:{objectFit:"contain"},children:(0,f.jsx)(c.Z,{scale:.8,workerSrc:"pdf.worker.js",file:b,onDocumentComplete:function(e){console.log(e),S(e)},page:1})}),(0,f.jsx)(a.Z,{justifyContent:"center",display:"flex",children:"1"}),j>1&&function(e){for(var t=[],n=2;n<=e;n++)t.push((0,f.jsx)(a.Z,{justifyContent:"center",display:"flex",sx:{objectFit:"contain"},children:(0,f.jsx)(c.Z,{workerSrc:"pdf.worker.js",page:n,scale:.8,file:b},"x".concat(n))},n)),t.push((0,f.jsx)(a.Z,{justifyContent:"center",display:"flex",children:n},"c".concat(n)));return t}(j)]})})}):null},x=n(4005),m=n(8830),v=n(1914),Z=n(1948),g=n(6871),w=function(){var e=(0,g.TH)().state;return document.querySelector('meta[name="viewport"]').setAttribute("content","width=device-width, initial-scale=1.0"),(0,f.jsx)(x.zt,{of:v.v,memo:!0,children:(0,f.jsx)(x.zt,{of:m.c,memo:!0,children:(0,f.jsx)(x.zt,{of:Z.P,memo:!0,children:(0,f.jsx)(h,{file:e})})})})}},1315:function(e,t,n){n.d(t,{Cl:function(){return i},RX:function(){return c},Sv:function(){return h},fD:function(){return f},lE:function(){return l},u5:function(){return p},v3:function(){return d},x4:function(){return s}});var r=n(4165),a=n(5861),o=n(4569),u=n.n(o);function i(e,t){var n=localStorage.getItem("username");return{id:e,name:t.fileName,size:t.fileSize,state:n==t.owner?"owned":"fromShared",owner:t.owner,use:t.use,useLimit:t.useLimit,expire:t.expire}}function c(e,t){var n=localStorage.getItem("username");return{id:e,name:t.fileName,size:t.fileSize,state:n==t.target?"owned":"fromShared",owner:t.target,use:t.use,useLimit:t.useLimit,expire:t.expire}}var s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().post("/login",{userName:t,passWord:n});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/file",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/user",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().post("/file/share",t,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/file/share",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/file/download?filename=".concat(t),{responseType:"blob",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1948:function(e,t,n){n.d(t,{P:function(){return s}});var r=n(1413),a=n(885),o=n(2791),u=n(4005),i=n(8830),c=n(1914);function s(){var e=(0,u.oR)(c.v),t=(0,u.oR)(i.c),n=(0,o.useState)([]),s=(0,a.Z)(n,2),f=s[0],l=s[1],p=(0,o.useState)(!1),d=(0,a.Z)(p,2),h=d[0],x=d[1],m=(0,o.useState)(!1),v=(0,a.Z)(m,2),Z=v[0],g=v[1];return(0,r.Z)((0,r.Z)((0,r.Z)({},e),t),{},{rows:f,setRows:l,editorDialogOpen:h,setEditorDialogOpen:x,updateDialogOpen:Z,setUpdateDialogOpen:g})}},2479:function(e,t,n){function r(e){return new Date(e).toLocaleString()}n.d(t,{u:function(){return r}})}}]);
//# sourceMappingURL=10.ddd33500.chunk.js.map