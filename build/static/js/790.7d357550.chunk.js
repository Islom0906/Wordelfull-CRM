"use strict";(self.webpackChunkwonderfullcity_crm=self.webpackChunkwonderfullcity_crm||[]).push([[790],{4790:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var r=n(5043),o=n(768),a=n(4954),i=n(4435),l=n(1802),c=n(6059),s=n(8914),d=n(7407),u=n(1966),f=n(4556),v=n(6213),p=n(3216),m=n(579);const h=e=>{let{data:t,deleteHandle:n}=e;const r=(0,f.wA)(),h=(0,p.Zp)(),A=[{title:"\u0418\u043c\u044f",dataIndex:"name",id:"name",render:e=>(0,m.jsx)("p",{children:e})},{title:"\u041f\u043b\u043e\u0449\u0430\u0434\u044c",dataIndex:"size",id:"size",render:e=>(0,m.jsxs)("p",{children:[e,"\u043c\xb2"]})},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u043e\u043c\u0435\u0440\u043e\u0432",dataIndex:"roomCount",id:"roomCount",render:e=>(0,m.jsx)("p",{children:e})},{title:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u043d\u043e\u043c\u0435\u0440\u0430",dataIndex:"price",id:"price",render:e=>(0,m.jsxs)("p",{children:[e,"$"]})},{title:"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043d\u043e\u043c\u0435\u0440\u0430",dataIndex:"status",id:"status",render:e=>(0,m.jsx)(o.A,{color:0===e?"#0232f6":1===e?"#f5c306":"#ff0000",children:0===e?"Empty":1===e?"Busied":"Buyed"})},{title:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u043d\u0430\u0442\u044b",dataIndex:"homeImage",id:"homeImage",render:e=>(0,m.jsx)(a.A,{width:50,src:"".concat("http://95.46.96.124/","/").concat(null===e||void 0===e?void 0:e.path)})},{title:"Action",id:"action",render:(e,t)=>(0,m.jsxs)(i.A,{size:20,children:[(0,m.jsx)(l.A,{onClick:()=>{return e=t.id,localStorage.setItem("editDataId",e),r({type:v.aT,payload:e}),void h("/apartment/add");var e},type:"primary",icon:(0,m.jsx)(d.A,{}),children:"Edit"}),(0,m.jsx)(c.A,{title:"Are you sure to delete this task?",description:"Delete the task ",onConfirm:()=>(async e=>{n("/Apartment",e)})(t.id),children:(0,m.jsx)(l.A,{type:"danger",icon:(0,m.jsx)(u.A,{}),children:"Delete"})})]})}];return(0,m.jsx)("div",{children:(0,m.jsx)(s.A,{columns:A,dataSource:t,rowKey:e=>e.id})})};var A=n(8193),x=n(9800),y=n(1645),g=n(6558),C=n(5397),j=n(5337),w=n(9888),E=n(2907);const b=()=>{const e=(0,p.Zp)(),t=(0,f.wA)(),{mutate:n,isSuccess:o,isLoading:a}=(0,E.useMutation)((e=>{let{url:t,id:n}=e;return w.A.deleteData(t,n)}),{onSuccess:()=>{A.Ay.success("Success")},onError:e=>{A.Ay.error(e.message)}}),{data:c,isLoading:s,refetch:d}=(0,E.useQuery)("apartment-get",(()=>w.A.getData("/Apartment")),{onError:e=>{A.Ay.error(e.message)}}),[u,b]=(0,r.useState)([]),[k,O]=(0,r.useState)(!1);(0,r.useEffect)((()=>{o&&d()}),[o]);return(0,m.jsx)("div",{className:"site-space-compact-wrapper",children:(0,m.jsxs)(i.A,{direction:"vertical",style:{width:"100%"},children:[(0,m.jsxs)(x.A,{gutter:20,children:[(0,m.jsx)(y.A,{span:16,children:(0,m.jsx)(g.A,{onChange:e=>(e=>{var t;O(""!==e);const n=null===c||void 0===c||null===(t=c.result)||void 0===t?void 0:t.filter((t=>t.name.toLowerCase().includes(e.toLowerCase())));b(n)})(e.target.value)})}),(0,m.jsx)(y.A,{span:8,children:(0,m.jsx)(l.A,{type:"primary",icon:(0,m.jsx)(j.A,{}),style:{width:"100%"},onClick:()=>{t({type:v.aT,payload:""}),e("/apartment/add")},children:"Add"})})]}),(0,m.jsx)(C.A,{size:"medium",spinning:s||a,children:(0,m.jsx)(h,{data:k?u:null===c||void 0===c?void 0:c.result,deleteHandle:(e,t)=>{n({url:e,id:t})}})})]})})}},1966:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(9379),o=n(5043);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};var i=n(2172),l=function(e,t){return o.createElement(i.A,(0,r.A)((0,r.A)({},e),{},{ref:t,icon:a}))};const c=o.forwardRef(l)},7407:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(9379),o=n(5043);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};var i=n(2172),l=function(e,t){return o.createElement(i.A,(0,r.A)((0,r.A)({},e),{},{ref:t,icon:a}))};const c=o.forwardRef(l)},5337:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(9379),o=n(5043);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};var i=n(2172),l=function(e,t){return o.createElement(i.A,(0,r.A)((0,r.A)({},e),{},{ref:t,icon:a}))};const c=o.forwardRef(l)},8046:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(8168),o=n(5544),a=n(8566),i=n(5043),l=n(1802),c=n(3085);function s(e){return!(!e||!e.then)}const d=function(e){var t=i.useRef(!1),n=i.useRef(null),d=(0,a.A)(!1),u=(0,o.A)(d,2),f=u[0],v=u[1],p=e.close,m=function(){null===p||void 0===p||p.apply(void 0,arguments)};i.useEffect((function(){var t=null;return e.autoFocus&&(t=setTimeout((function(){var e;null===(e=n.current)||void 0===e||e.focus()}))),function(){t&&clearTimeout(t)}}),[]);var h=e.type,A=e.children,x=e.prefixCls,y=e.buttonProps;return i.createElement(l.A,(0,r.A)({},(0,c.D)(h),{onClick:function(n){var r=e.actionFn;if(!t.current)if(t.current=!0,r){var o;if(e.emitEvent){if(o=r(n),e.quitOnNullishReturnValue&&!s(o))return t.current=!1,void m(n)}else if(r.length)o=r(p),t.current=!1;else if(!(o=r()))return void m();!function(e){s(e)&&(v(!0),e.then((function(){v(!1,!0),m.apply(void 0,arguments),t.current=!1}),(function(e){return v(!1,!0),t.current=!1,Promise.reject(e)})))}(o)}else m()},loading:f,prefixCls:x},y,{ref:n}),A)}},6059:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(8168),o=n(5544),a=n(1376),i=n(8139),l=n.n(i),c=n(8678),s=n(5001),d=n(5043),u=n(5296),f=n(6282),v=n(2701),p=n(1802),m=n(3085),h=n(8046),A=n(8097),x=n(8376),y=n(8986),g=function(e){var t=e.prefixCls,n=e.okButtonProps,o=e.cancelButtonProps,a=e.title,i=e.cancelText,l=e.okText,c=e.okType,s=e.icon,f=e.showCancel,v=void 0===f||f,g=e.close,C=e.onConfirm,j=e.onCancel,w=d.useContext(u.QO).getPrefixCls;return d.createElement(A.A,{componentName:"Popconfirm",defaultLocale:x.A.Popconfirm},(function(e){return d.createElement("div",{className:"".concat(t,"-inner-content")},d.createElement("div",{className:"".concat(t,"-message")},s&&d.createElement("span",{className:"".concat(t,"-message-icon")},s),d.createElement("div",{className:"".concat(t,"-message-title")},(0,y.b)(a))),d.createElement("div",{className:"".concat(t,"-buttons")},v&&d.createElement(p.A,(0,r.A)({onClick:j,size:"small"},o),null!==i&&void 0!==i?i:e.cancelText),d.createElement(h.A,{buttonProps:(0,r.A)((0,r.A)({size:"small"},(0,m.D)(c)),n),actionFn:C,close:g,prefixCls:w("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==l&&void 0!==l?l:e.okText)))}))},C=void 0,j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const w=d.forwardRef((function(e,t){var n=e.prefixCls,i=e.placement,p=void 0===i?"top":i,m=e.trigger,h=void 0===m?"click":m,A=e.okType,x=void 0===A?"primary":A,y=e.icon,w=void 0===y?d.createElement(a.A,null):y,E=e.children,b=e.overlayClassName,k=e.onOpenChange,O=e.onVisibleChange,z=j(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),N=d.useContext(u.QO).getPrefixCls,P=(0,c.A)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),T=(0,o.A)(P,2),I=T[0],q=T[1],S=function(e,t){q(e,!0),null===O||void 0===O||O(e,t),null===k||void 0===k||k(e,t)},D=N("popover",n),L=N("popconfirm",n),H=l()(L,b);return d.createElement(f.A,(0,r.A)({},z,{trigger:h,prefixCls:D,placement:p,onOpenChange:function(t){var n=e.disabled;void 0!==n&&n||S(t)},open:I,ref:t,overlayClassName:H,_overlay:d.createElement(g,(0,r.A)({okType:x,icon:w},e,{prefixCls:D,close:function(e){S(!1,e)},onConfirm:function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(C,t)},onCancel:function(t){var n;S(!1,t),null===(n=e.onCancel)||void 0===n||n.call(C,t)}}))}),(0,v.Ob)(E,{onKeyDown:function(e){var t,n;d.isValidElement(E)&&(null===(n=null===E||void 0===E?void 0:(t=E.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===s.A.ESC&&I&&S(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=790.7d357550.chunk.js.map