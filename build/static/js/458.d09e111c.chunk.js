"use strict";(self.webpackChunkwonderfullcity_crm=self.webpackChunkwonderfullcity_crm||[]).push([[458],{6458:(e,n,t)=>{t.r(n),t.d(n,{default:()=>E});var r=t(5043),o=t(4954),a=t(4435),l=t(1802),i=t(6059),c=t(8914),s=t(7407),d=t(1966),u=t(4556),v=t(6213),f=t(3216),p=t(579);const m=e=>{let{data:n,deleteHandle:t}=e;const r=(0,u.wA)(),m=(0,f.Zp)(),h=[{title:"\u0418\u043c\u044f",dataIndex:"name",id:"name",render:e=>(0,p.jsx)("p",{children:e})},{title:"\u0421\u043b\u043e\u0442",dataIndex:"slot",id:"slot",render:e=>(0,p.jsx)("p",{children:null===e||void 0===e?void 0:e.name})},{title:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",dataIndex:"image",id:"image",render:e=>(0,p.jsx)(o.A,{width:50,src:"".concat("http://95.46.96.124/","/").concat(null===e||void 0===e?void 0:e.path)})},{title:"Action",id:"action",render:(e,n)=>(0,p.jsxs)(a.A,{size:20,children:[(0,p.jsx)(l.A,{onClick:()=>{return e=n.id,localStorage.setItem("editDataId",e),r({type:v.aT,payload:e}),void m("/house/add");var e},type:"primary",icon:(0,p.jsx)(s.A,{}),children:"Edit"}),(0,p.jsx)(i.A,{title:"Are you sure to delete this task?",description:"Delete the task ",onConfirm:()=>(async e=>{t("/House",e)})(n.id),children:(0,p.jsx)(l.A,{type:"danger",icon:(0,p.jsx)(d.A,{}),children:"Delete"})})]})}];return(0,p.jsx)("div",{children:(0,p.jsx)(c.A,{columns:h,dataSource:n,rowKey:e=>e.id})})};var h=t(8193),A=t(9800),g=t(1645),x=t(6558),y=t(5397),C=t(5337),j=t(9888),w=t(2907);const E=()=>{const e=(0,f.Zp)(),n=(0,u.wA)(),{mutate:t,isSuccess:o,isLoading:i}=(0,w.useMutation)((e=>{let{url:n,id:t}=e;return j.A.deleteData(n,t)}),{onSuccess:()=>{h.Ay.success("Success")},onError:e=>{h.Ay.error(e.message)}}),{data:c,isLoading:s,refetch:d}=(0,w.useQuery)("house-get",(()=>j.A.getData("/House")),{onError:e=>{h.Ay.error(e.message)}}),[E,b]=(0,r.useState)([]),[k,O]=(0,r.useState)(!1);(0,r.useEffect)((()=>{o&&d()}),[o]);return(0,p.jsx)("div",{className:"site-space-compact-wrapper",children:(0,p.jsxs)(a.A,{direction:"vertical",style:{width:"100%"},children:[(0,p.jsxs)(A.A,{gutter:20,children:[(0,p.jsx)(g.A,{span:16,children:(0,p.jsx)(x.A,{onChange:e=>(e=>{var n;O(""!==e);const t=null===c||void 0===c||null===(n=c.result)||void 0===n?void 0:n.filter((n=>n.name.toLowerCase().includes(e.toLowerCase())));b(t)})(e.target.value)})}),(0,p.jsx)(g.A,{span:8,children:(0,p.jsx)(l.A,{type:"primary",icon:(0,p.jsx)(C.A,{}),style:{width:"100%"},onClick:()=>{n({type:v.aT,payload:""}),e("/house/add")},children:"Add"})})]}),(0,p.jsx)(y.A,{size:"medium",spinning:s||i,children:(0,p.jsx)(m,{data:k?E:null===c||void 0===c?void 0:c.result,deleteHandle:(e,n)=>{t({url:e,id:n})}})})]})})}},1966:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(9379),o=t(5043);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};var l=t(2172),i=function(e,n){return o.createElement(l.A,(0,r.A)((0,r.A)({},e),{},{ref:n,icon:a}))};const c=o.forwardRef(i)},7407:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(9379),o=t(5043);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};var l=t(2172),i=function(e,n){return o.createElement(l.A,(0,r.A)((0,r.A)({},e),{},{ref:n,icon:a}))};const c=o.forwardRef(i)},5337:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(9379),o=t(5043);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};var l=t(2172),i=function(e,n){return o.createElement(l.A,(0,r.A)((0,r.A)({},e),{},{ref:n,icon:a}))};const c=o.forwardRef(i)},8046:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(8168),o=t(5544),a=t(8566),l=t(5043),i=t(1802),c=t(3085);function s(e){return!(!e||!e.then)}const d=function(e){var n=l.useRef(!1),t=l.useRef(null),d=(0,a.A)(!1),u=(0,o.A)(d,2),v=u[0],f=u[1],p=e.close,m=function(){null===p||void 0===p||p.apply(void 0,arguments)};l.useEffect((function(){var n=null;return e.autoFocus&&(n=setTimeout((function(){var e;null===(e=t.current)||void 0===e||e.focus()}))),function(){n&&clearTimeout(n)}}),[]);var h=e.type,A=e.children,g=e.prefixCls,x=e.buttonProps;return l.createElement(i.A,(0,r.A)({},(0,c.D)(h),{onClick:function(t){var r=e.actionFn;if(!n.current)if(n.current=!0,r){var o;if(e.emitEvent){if(o=r(t),e.quitOnNullishReturnValue&&!s(o))return n.current=!1,void m(t)}else if(r.length)o=r(p),n.current=!1;else if(!(o=r()))return void m();!function(e){s(e)&&(f(!0),e.then((function(){f(!1,!0),m.apply(void 0,arguments),n.current=!1}),(function(e){return f(!1,!0),n.current=!1,Promise.reject(e)})))}(o)}else m()},loading:v,prefixCls:g},x,{ref:t}),A)}},6059:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(8168),o=t(5544),a=t(1376),l=t(8139),i=t.n(l),c=t(8678),s=t(5001),d=t(5043),u=t(5296),v=t(6282),f=t(2701),p=t(1802),m=t(3085),h=t(8046),A=t(8097),g=t(8376),x=t(8986),y=function(e){var n=e.prefixCls,t=e.okButtonProps,o=e.cancelButtonProps,a=e.title,l=e.cancelText,i=e.okText,c=e.okType,s=e.icon,v=e.showCancel,f=void 0===v||v,y=e.close,C=e.onConfirm,j=e.onCancel,w=d.useContext(u.QO).getPrefixCls;return d.createElement(A.A,{componentName:"Popconfirm",defaultLocale:g.A.Popconfirm},(function(e){return d.createElement("div",{className:"".concat(n,"-inner-content")},d.createElement("div",{className:"".concat(n,"-message")},s&&d.createElement("span",{className:"".concat(n,"-message-icon")},s),d.createElement("div",{className:"".concat(n,"-message-title")},(0,x.b)(a))),d.createElement("div",{className:"".concat(n,"-buttons")},f&&d.createElement(p.A,(0,r.A)({onClick:j,size:"small"},o),null!==l&&void 0!==l?l:e.cancelText),d.createElement(h.A,{buttonProps:(0,r.A)((0,r.A)({size:"small"},(0,m.D)(c)),t),actionFn:C,close:y,prefixCls:w("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==i&&void 0!==i?i:e.okText)))}))},C=void 0,j=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};const w=d.forwardRef((function(e,n){var t=e.prefixCls,l=e.placement,p=void 0===l?"top":l,m=e.trigger,h=void 0===m?"click":m,A=e.okType,g=void 0===A?"primary":A,x=e.icon,w=void 0===x?d.createElement(a.A,null):x,E=e.children,b=e.overlayClassName,k=e.onOpenChange,O=e.onVisibleChange,z=j(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),N=d.useContext(u.QO).getPrefixCls,P=(0,c.A)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),T=(0,o.A)(P,2),q=T[0],H=T[1],S=function(e,n){H(e,!0),null===O||void 0===O||O(e,n),null===k||void 0===k||k(e,n)},D=N("popover",t),L=N("popconfirm",t),R=i()(L,b);return d.createElement(v.A,(0,r.A)({},z,{trigger:h,prefixCls:D,placement:p,onOpenChange:function(n){var t=e.disabled;void 0!==t&&t||S(n)},open:q,ref:n,overlayClassName:R,_overlay:d.createElement(y,(0,r.A)({okType:g,icon:w},e,{prefixCls:D,close:function(e){S(!1,e)},onConfirm:function(n){var t;return null===(t=e.onConfirm)||void 0===t?void 0:t.call(C,n)},onCancel:function(n){var t;S(!1,n),null===(t=e.onCancel)||void 0===t||t.call(C,n)}}))}),(0,f.Ob)(E,{onKeyDown:function(e){var n,t;d.isValidElement(E)&&(null===(t=null===E||void 0===E?void 0:(n=E.props).onKeyDown)||void 0===t||t.call(n,e)),function(e){e.keyCode===s.A.ESC&&q&&S(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=458.d09e111c.chunk.js.map