"use strict";(self.webpackChunkwonderfullcity_crm=self.webpackChunkwonderfullcity_crm||[]).push([[582],{1582:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(5043),o=n(768),r=n(4435),l=n(1802),i=n(6059),c=n(8914),s=n(7407),d=n(1966),u=n(4556),p=n(6213),v=n(3216),m=n(579);const f=e=>{let{data:t,deleteHandle:n}=e;const a=(0,u.wA)(),f=(0,v.Zp)(),h=[{title:"\u0418\u043c\u044f",dataIndex:"name",id:"name",render:e=>(0,m.jsx)("p",{children:e})},{title:"\u0421\u043a\u0438\u0434\u043a\u0430",dataIndex:"discount",id:"discount",render:e=>(0,m.jsx)("p",{children:e})},{title:"\u041f\u0435\u0440\u0432\u044b\u0439 \u0432\u0437\u043d\u043e\u0441",dataIndex:"fristPay",id:"fristPay",render:e=>(0,m.jsx)("p",{children:e})},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0441\u044f\u0446\u0435\u0432",dataIndex:"monthCount",id:"monthCount",render:e=>(0,m.jsx)("p",{children:e})},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0441\u044f\u0446\u0435\u0432",dataIndex:"activate",id:"activate",render:e=>(0,m.jsx)(o.A,{color:e?"#007fd0":"#ff0000",children:e?"Active":"No active"})},{title:"Action",id:"action",render:(e,t)=>(0,m.jsxs)(r.A,{size:20,children:[(0,m.jsx)(l.A,{onClick:()=>{return e=t.id,localStorage.setItem("editDataId",e),a({type:p.aT,payload:e}),void f("/payment/add");var e},type:"primary",icon:(0,m.jsx)(s.A,{}),children:"Edit"}),(0,m.jsx)(i.A,{title:"Are you sure to delete this task?",description:"Delete the task ",onConfirm:()=>(async e=>{n("/PaymentMetod",e)})(t.id),children:(0,m.jsx)(l.A,{type:"danger",icon:(0,m.jsx)(d.A,{}),children:"Delete"})})]})}];return(0,m.jsx)("div",{children:(0,m.jsx)(c.A,{columns:h,dataSource:t,rowKey:e=>e.id})})};var h=n(8193),A=n(9800),y=n(1645),x=n(6558),g=n(5397),C=n(5337),j=n(9888),w=n(2907);const b=()=>{const e=(0,v.Zp)(),t=(0,u.wA)(),{mutate:n,isSuccess:o,isLoading:i}=(0,w.useMutation)((e=>{let{url:t,id:n}=e;return j.A.deleteData(t,n)}),{onSuccess:()=>{h.Ay.success("Success")},onError:e=>{h.Ay.error(e.message)}}),{data:c,isLoading:s,refetch:d}=(0,w.useQuery)("payment-get",(()=>j.A.getData("/PaymentMetod")),{onError:e=>{h.Ay.error(e.message)}}),[b,E]=(0,a.useState)([]),[k,O]=(0,a.useState)(!1);(0,a.useEffect)((()=>{o&&d()}),[o]);return(0,m.jsx)("div",{className:"site-space-compact-wrapper",children:(0,m.jsxs)(r.A,{direction:"vertical",style:{width:"100%"},children:[(0,m.jsxs)(A.A,{gutter:20,children:[(0,m.jsx)(y.A,{span:16,children:(0,m.jsx)(x.A,{onChange:e=>(e=>{var t;O(""!==e);const n=null===c||void 0===c||null===(t=c.result)||void 0===t?void 0:t.filter((t=>t.name.toLowerCase().includes(e.toLowerCase())));E(n)})(e.target.value)})}),(0,m.jsx)(y.A,{span:8,children:(0,m.jsx)(l.A,{type:"primary",icon:(0,m.jsx)(C.A,{}),style:{width:"100%"},onClick:()=>{t({type:p.aT,payload:""}),e("/payment/add")},children:"Add"})})]}),(0,m.jsx)(g.A,{size:"medium",spinning:s||i,children:(0,m.jsx)(f,{data:k?b:null===c||void 0===c?void 0:c.result,deleteHandle:(e,t)=>{n({url:e,id:t})}})})]})})}},1966:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(9379),o=n(5043);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};var l=n(2172),i=function(e,t){return o.createElement(l.A,(0,a.A)((0,a.A)({},e),{},{ref:t,icon:r}))};const c=o.forwardRef(i)},5337:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(9379),o=n(5043);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};var l=n(2172),i=function(e,t){return o.createElement(l.A,(0,a.A)((0,a.A)({},e),{},{ref:t,icon:r}))};const c=o.forwardRef(i)},6059:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(8168),o=n(5544),r=n(1376),l=n(8139),i=n.n(l),c=n(8678),s=n(5001),d=n(5043),u=n(5296),p=n(6282),v=n(2701),m=n(1802),f=n(3085),h=n(8046),A=n(8097),y=n(8376),x=n(8986),g=function(e){var t=e.prefixCls,n=e.okButtonProps,o=e.cancelButtonProps,r=e.title,l=e.cancelText,i=e.okText,c=e.okType,s=e.icon,p=e.showCancel,v=void 0===p||p,g=e.close,C=e.onConfirm,j=e.onCancel,w=d.useContext(u.QO).getPrefixCls;return d.createElement(A.A,{componentName:"Popconfirm",defaultLocale:y.A.Popconfirm},(function(e){return d.createElement("div",{className:"".concat(t,"-inner-content")},d.createElement("div",{className:"".concat(t,"-message")},s&&d.createElement("span",{className:"".concat(t,"-message-icon")},s),d.createElement("div",{className:"".concat(t,"-message-title")},(0,x.b)(r))),d.createElement("div",{className:"".concat(t,"-buttons")},v&&d.createElement(m.A,(0,a.A)({onClick:j,size:"small"},o),null!==l&&void 0!==l?l:e.cancelText),d.createElement(h.A,{buttonProps:(0,a.A)((0,a.A)({size:"small"},(0,f.D)(c)),n),actionFn:C,close:g,prefixCls:w("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==i&&void 0!==i?i:e.okText)))}))},C=void 0,j=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};const w=d.forwardRef((function(e,t){var n=e.prefixCls,l=e.placement,m=void 0===l?"top":l,f=e.trigger,h=void 0===f?"click":f,A=e.okType,y=void 0===A?"primary":A,x=e.icon,w=void 0===x?d.createElement(r.A,null):x,b=e.children,E=e.overlayClassName,k=e.onOpenChange,O=e.onVisibleChange,P=j(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),N=d.useContext(u.QO).getPrefixCls,S=(0,c.A)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),T=(0,o.A)(S,2),q=T[0],z=T[1],D=function(e,t){z(e,!0),null===O||void 0===O||O(e,t),null===k||void 0===k||k(e,t)},I=N("popover",n),H=N("popconfirm",n),M=i()(H,E);return d.createElement(p.A,(0,a.A)({},P,{trigger:h,prefixCls:I,placement:m,onOpenChange:function(t){var n=e.disabled;void 0!==n&&n||D(t)},open:q,ref:t,overlayClassName:M,_overlay:d.createElement(g,(0,a.A)({okType:y,icon:w},e,{prefixCls:I,close:function(e){D(!1,e)},onConfirm:function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(C,t)},onCancel:function(t){var n;D(!1,t),null===(n=e.onCancel)||void 0===n||n.call(C,t)}}))}),(0,v.Ob)(b,{onKeyDown:function(e){var t,n;d.isValidElement(b)&&(null===(n=null===b||void 0===b?void 0:(t=b.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===s.A.ESC&&q&&D(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=582.aad70430.chunk.js.map