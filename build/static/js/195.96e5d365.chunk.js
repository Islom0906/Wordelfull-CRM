"use strict";(self.webpackChunkwonderfullcity_crm=self.webpackChunkwonderfullcity_crm||[]).push([[195],{8195:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var o=n(5043),a=n(768),l=n(4435),r=n(1802),i=n(6059),c=n(8914),s=n(7407),d=n(1966),u=n(4556),v=n(6213),p=n(3216),m=n(6178),f=n.n(m),h=n(579);const A=e=>{let{data:t,deleteHandle:n}=e;const o=(0,u.wA)(),m=(0,p.Zp)(),A=[{title:"Name",dataIndex:"name",id:"name",render:e=>(0,h.jsx)("p",{children:e})},{title:"Finished Date",dataIndex:"finishedDate",id:"finishedDate",render:e=>(0,h.jsx)(a.A,{children:f()(e).format("L")})},{title:"Action",id:"action",render:(e,t)=>(0,h.jsxs)(l.A,{size:20,children:[(0,h.jsx)(r.A,{onClick:()=>{return e=t.id,localStorage.setItem("editDataId",e),o({type:v.aT,payload:e}),void m("/slot/add");var e},type:"primary",icon:(0,h.jsx)(s.A,{}),children:"Edit"}),(0,h.jsx)(i.A,{title:"Are you sure to delete this task?",description:"Delete the task ",onConfirm:()=>(async e=>{n("/Slot",e)})(t.id),children:(0,h.jsx)(r.A,{type:"danger",icon:(0,h.jsx)(d.A,{}),children:"Delete"})})]})}];return(0,h.jsx)("div",{children:(0,h.jsx)(c.A,{columns:A,dataSource:t,rowKey:e=>e.id})})};var y=n(8193),x=n(9800),g=n(1645),C=n(6558),j=n(5397),w=n(5337),b=n(9888),E=n(2907);const k=()=>{const e=(0,p.Zp)(),t=(0,u.wA)(),{mutate:n,isSuccess:a,isLoading:i}=(0,E.useMutation)((e=>{let{url:t,id:n}=e;return b.A.deleteData(t,n)}),{onSuccess:()=>{y.Ay.success("Success")},onError:e=>{y.Ay.error(e.message)}}),{data:c,isLoading:s,refetch:d}=(0,E.useQuery)("slot-get",(()=>b.A.getData("/Slot")),{onError:e=>{y.Ay.error(e.message)}}),[m,f]=(0,o.useState)([]),[k,O]=(0,o.useState)(!1);(0,o.useEffect)((()=>{a&&d()}),[a]);return(0,h.jsx)("div",{className:"site-space-compact-wrapper",children:(0,h.jsxs)(l.A,{direction:"vertical",style:{width:"100%"},children:[(0,h.jsxs)(x.A,{gutter:20,children:[(0,h.jsx)(g.A,{span:16,children:(0,h.jsx)(C.A,{onChange:e=>(e=>{var t;O(""!==e);const n=null===c||void 0===c||null===(t=c.result)||void 0===t?void 0:t.filter((t=>t.name.toLowerCase().includes(e.toLowerCase())));f(n)})(e.target.value)})}),(0,h.jsx)(g.A,{span:8,children:(0,h.jsx)(r.A,{type:"primary",icon:(0,h.jsx)(w.A,{}),style:{width:"100%"},onClick:()=>{t({type:v.aT,payload:""}),e("/slot/add")},children:"Add"})})]}),(0,h.jsx)(j.A,{size:"medium",spinning:s||i,children:(0,h.jsx)(A,{data:k?m:null===c||void 0===c?void 0:c.result,deleteHandle:(e,t)=>{n({url:e,id:t})}})})]})})}},1966:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(9379),a=n(5043);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};var r=n(2172),i=function(e,t){return a.createElement(r.A,(0,o.A)((0,o.A)({},e),{},{ref:t,icon:l}))};const c=a.forwardRef(i)},5337:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(9379),a=n(5043);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};var r=n(2172),i=function(e,t){return a.createElement(r.A,(0,o.A)((0,o.A)({},e),{},{ref:t,icon:l}))};const c=a.forwardRef(i)},6059:(e,t,n)=>{n.d(t,{A:()=>w});var o=n(8168),a=n(5544),l=n(1376),r=n(8139),i=n.n(r),c=n(8678),s=n(5001),d=n(5043),u=n(5296),v=n(6282),p=n(2701),m=n(1802),f=n(3085),h=n(8046),A=n(8097),y=n(8376),x=n(8986),g=function(e){var t=e.prefixCls,n=e.okButtonProps,a=e.cancelButtonProps,l=e.title,r=e.cancelText,i=e.okText,c=e.okType,s=e.icon,v=e.showCancel,p=void 0===v||v,g=e.close,C=e.onConfirm,j=e.onCancel,w=d.useContext(u.QO).getPrefixCls;return d.createElement(A.A,{componentName:"Popconfirm",defaultLocale:y.A.Popconfirm},(function(e){return d.createElement("div",{className:"".concat(t,"-inner-content")},d.createElement("div",{className:"".concat(t,"-message")},s&&d.createElement("span",{className:"".concat(t,"-message-icon")},s),d.createElement("div",{className:"".concat(t,"-message-title")},(0,x.b)(l))),d.createElement("div",{className:"".concat(t,"-buttons")},p&&d.createElement(m.A,(0,o.A)({onClick:j,size:"small"},a),null!==r&&void 0!==r?r:e.cancelText),d.createElement(h.A,{buttonProps:(0,o.A)((0,o.A)({size:"small"},(0,f.D)(c)),n),actionFn:C,close:g,prefixCls:w("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==i&&void 0!==i?i:e.okText)))}))},C=void 0,j=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};const w=d.forwardRef((function(e,t){var n=e.prefixCls,r=e.placement,m=void 0===r?"top":r,f=e.trigger,h=void 0===f?"click":f,A=e.okType,y=void 0===A?"primary":A,x=e.icon,w=void 0===x?d.createElement(l.A,null):x,b=e.children,E=e.overlayClassName,k=e.onOpenChange,O=e.onVisibleChange,N=j(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),S=d.useContext(u.QO).getPrefixCls,D=(0,c.A)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),P=(0,a.A)(D,2),T=P[0],q=P[1],z=function(e,t){q(e,!0),null===O||void 0===O||O(e,t),null===k||void 0===k||k(e,t)},H=S("popover",n),V=S("popconfirm",n),L=i()(V,E);return d.createElement(v.A,(0,o.A)({},N,{trigger:h,prefixCls:H,placement:m,onOpenChange:function(t){var n=e.disabled;void 0!==n&&n||z(t)},open:T,ref:t,overlayClassName:L,_overlay:d.createElement(g,(0,o.A)({okType:y,icon:w},e,{prefixCls:H,close:function(e){z(!1,e)},onConfirm:function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(C,t)},onCancel:function(t){var n;z(!1,t),null===(n=e.onCancel)||void 0===n||n.call(C,t)}}))}),(0,p.Ob)(b,{onKeyDown:function(e){var t,n;d.isValidElement(b)&&(null===(n=null===b||void 0===b?void 0:(t=b.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===s.A.ESC&&T&&z(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=195.96e5d365.chunk.js.map