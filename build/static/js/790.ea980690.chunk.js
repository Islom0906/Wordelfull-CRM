"use strict";(self.webpackChunkwonderfullcity_crm=self.webpackChunkwonderfullcity_crm||[]).push([[790],{4790:(e,l,n)=>{n.r(l),n.d(l,{default:()=>O});var o=n(5043),t=n(768),a=n(4954),r=n(4435),i=n(1802),s=n(6059),d=n(8914),c=n(7407),u=n(1966),v=n(4556),p=n(6213),m=n(3216),h=n(579);const f=e=>{let{data:l,deleteHandle:n}=e;const o=(0,v.wA)(),f=(0,m.Zp)(),A=[{title:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430",dataIndex:"name",id:"name",render:e=>(0,h.jsx)("p",{children:e})},{title:"\u041f\u043b\u043e\u0449\u0430\u0434\u044c",dataIndex:"size",id:"size",render:e=>(0,h.jsxs)("p",{children:[e,"\u043c\xb2"]})},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e ",dataIndex:"roomCount",id:"roomCount",render:e=>(0,h.jsx)("p",{children:e})},{title:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c",dataIndex:"price",id:"price",render:e=>(0,h.jsxs)("p",{children:[e,"$"]})},{title:"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435",dataIndex:"status",id:"status",render:e=>(0,h.jsx)(t.A,{color:1===e?"#008000":2===e?"#f5c306":"#ff0000",children:1===e?"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e":2===e?"\u0417\u0430\u043d\u044f\u0442\u043e":"\u041f\u0440\u043e\u0434\u0430\u043d\u043e"})},{title:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",dataIndex:"homeImage",id:"homeImage",render:e=>(0,h.jsx)(a.A,{width:50,src:"".concat("https://crm.wonderfulcity.uz/","/").concat(null===e||void 0===e?void 0:e.path)})},{title:"\u0421\u043e\u0431\u044b\u0442\u0438\u0435",id:"action",render:(e,l)=>(0,h.jsxs)(r.A,{size:20,children:[(0,h.jsx)(i.A,{onClick:()=>{return e=l.id,localStorage.setItem("editDataId",e),o({type:p.aT,payload:e}),void f("/apartment/add");var e},type:"primary",icon:(0,h.jsx)(c.A,{}),children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),(0,h.jsx)(s.A,{title:"Are you sure to delete this task?",description:"Delete the task ",onConfirm:()=>(async e=>{n("/Apartment",e)})(l.id),children:(0,h.jsx)(i.A,{type:"danger",icon:(0,h.jsx)(u.A,{}),children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]})}];return(0,h.jsx)("div",{children:(0,h.jsx)(d.A,{columns:A,dataSource:l,rowKey:e=>e.id})})};var A=n(289),x=n(8193),I=n(9800),y=n(1645),g=n(6558),C=n(4406),j=n(5397),b=n(5337),w=n(9888),E=n(2907),k=n(3002);const O=()=>{const[e]=A.A.useForm(),l=(0,m.Zp)(),n=(0,v.wA)(),[t,a]=(0,o.useState)({slotId:null,houseId:null,floorId:null}),{data:s,refetch:d}=(0,E.useQuery)("get-slot",(()=>w.A.getData("/Slot")),{enabled:!1}),{data:c,refetch:u,remove:O}=(0,E.useQuery)("get-house",(()=>w.A.getData("/House?slotId=".concat(null===t||void 0===t?void 0:t.slotId))),{enabled:!1}),{data:P,refetch:S,remove:z}=(0,E.useQuery)("get-floor",(()=>w.A.getData("/Floor?housId=".concat(null===t||void 0===t?void 0:t.houseId))),{enabled:!1}),{mutate:N,isSuccess:D,isLoading:T}=(0,E.useMutation)((e=>{let{url:l,id:n}=e;return w.A.deleteData(l,n)}),{onSuccess:()=>{x.Ay.success("Success")},onError:e=>{x.Ay.error(e.message)}}),{data:V,isLoading:q,refetch:H}=(0,E.useQuery)("apartment-get",(()=>w.A.getData("/Apartment?".concat(null!==t&&void 0!==t&&t.slotId?"&SlotId=".concat(null===t||void 0===t?void 0:t.slotId):"").concat(null!==t&&void 0!==t&&t.houseId?"&HouseId=".concat(null===t||void 0===t?void 0:t.houseId):"").concat(null!==t&&void 0!==t&&t.floorId?"&FlorId=".concat(null===t||void 0===t?void 0:t.floorId):""))),{onError:e=>{x.Ay.error(e.message)}}),[L,M]=(0,o.useState)([]),[F,Q]=(0,o.useState)(!1);(0,o.useEffect)((()=>{D&&H()}),[D]),(0,o.useEffect)((()=>{H()}),[t]),(0,o.useEffect)((()=>{d()}),[]),(0,o.useEffect)((()=>{null!==t&&void 0!==t&&t.slotId&&u()}),[null===t||void 0===t?void 0:t.slotId]),(0,o.useEffect)((()=>{null!==t&&void 0!==t&&t.houseId&&S()}),[null===t||void 0===t?void 0:t.houseId]);const B=(0,o.useMemo)((()=>{var e;return null===s||void 0===s||null===(e=s.result)||void 0===e?void 0:e.map((e=>({value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name})))}),[s]),R=(0,o.useMemo)((()=>{var e;return null===c||void 0===c||null===(e=c.result)||void 0===e?void 0:e.map((e=>({value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name})))}),[c]),K=(0,o.useMemo)((()=>{var e;return null===P||void 0===P||null===(e=P.result)||void 0===e?void 0:e.map((e=>({value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name})))}),[P]);return(0,h.jsx)("div",{className:"site-space-compact-wrapper",children:(0,h.jsxs)(r.A,{direction:"vertical",style:{width:"100%"},children:[(0,h.jsxs)(I.A,{gutter:20,children:[(0,h.jsx)(y.A,{span:16,children:(0,h.jsx)(g.A,{onChange:e=>(e=>{var l;Q(""!==e);const n=null===V||void 0===V||null===(l=V.result)||void 0===l?void 0:l.filter((l=>l.name.toLowerCase().includes(e.toLowerCase())));M(n)})(e.target.value)})}),(0,h.jsx)(y.A,{span:8,children:(0,h.jsx)(i.A,{type:"primary",icon:(0,h.jsx)(b.A,{}),style:{width:"100%"},onClick:()=>{n({type:p.aT,payload:""}),l("/apartment/add")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]}),(0,h.jsx)(A.A,{form:e,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},autoComplete:"off",children:(0,h.jsxs)(I.A,{gutter:20,children:[(0,h.jsx)(y.A,{span:8,children:(0,h.jsx)(A.A.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043b\u043e\u0442",name:"slotId",wrapperCol:{span:24},children:(0,h.jsx)(C.A,{style:{width:"100%"},optionLabelProp:"label",onChange:l=>{e.setFieldsValue({houseId:null,floorId:null}),a({slotId:l,houseId:null,floorId:null})},options:B})})}),(0,h.jsx)(y.A,{span:8,children:(0,h.jsx)(A.A.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u043e\u043c",name:"houseId",wrapperCol:{span:24},children:(0,h.jsx)(C.A,{style:{width:"100%"},optionLabelProp:"label",onChange:l=>{e.setFieldsValue({floorId:null}),a((e=>({...e,houseId:l,floorId:null})))},options:R})})}),(0,h.jsx)(y.A,{span:8,children:(0,h.jsx)(A.A.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u044d\u0442\u0430\u0436",name:"floorId",wrapperCol:{span:24},children:(0,h.jsx)(C.A,{style:{width:"100%"},optionLabelProp:"label",options:K,onChange:e=>{a((l=>({...l,floorId:e})))}})})})]})}),(0,h.jsx)(I.A,{children:(0,h.jsx)(y.A,{offset:18,span:6,children:(0,h.jsx)(i.A,{type:"dashed",icon:(0,h.jsx)(k.UCj,{}),style:{width:"100%"},onClick:()=>{e.setFieldsValue({slotId:null,houseId:null,floorId:null,status:""}),a({slotId:null,houseId:null,floorId:null}),O(),z()},children:"\u041e\u0447\u0438\u0441\u0442\u043a\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u0430"})})}),(0,h.jsx)(j.A,{size:"medium",spinning:q||T,children:(0,h.jsx)(f,{data:F?L:null===V||void 0===V?void 0:V.result,deleteHandle:(e,l)=>{N({url:e,id:l})}})})]})})}},1966:(e,l,n)=>{n.d(l,{A:()=>s});var o=n(9379),t=n(5043);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};var r=n(2172),i=function(e,l){return t.createElement(r.A,(0,o.A)((0,o.A)({},e),{},{ref:l,icon:a}))};const s=t.forwardRef(i)},5337:(e,l,n)=>{n.d(l,{A:()=>s});var o=n(9379),t=n(5043);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};var r=n(2172),i=function(e,l){return t.createElement(r.A,(0,o.A)((0,o.A)({},e),{},{ref:l,icon:a}))};const s=t.forwardRef(i)},6059:(e,l,n)=>{n.d(l,{A:()=>j});var o=n(8168),t=n(5544),a=n(1376),r=n(8139),i=n.n(r),s=n(8678),d=n(5001),c=n(5043),u=n(5296),v=n(6282),p=n(2701),m=n(1802),h=n(3085),f=n(8046),A=n(8097),x=n(8376),I=n(8986),y=function(e){var l=e.prefixCls,n=e.okButtonProps,t=e.cancelButtonProps,a=e.title,r=e.cancelText,i=e.okText,s=e.okType,d=e.icon,v=e.showCancel,p=void 0===v||v,y=e.close,g=e.onConfirm,C=e.onCancel,j=c.useContext(u.QO).getPrefixCls;return c.createElement(A.A,{componentName:"Popconfirm",defaultLocale:x.A.Popconfirm},(function(e){return c.createElement("div",{className:"".concat(l,"-inner-content")},c.createElement("div",{className:"".concat(l,"-message")},d&&c.createElement("span",{className:"".concat(l,"-message-icon")},d),c.createElement("div",{className:"".concat(l,"-message-title")},(0,I.b)(a))),c.createElement("div",{className:"".concat(l,"-buttons")},p&&c.createElement(m.A,(0,o.A)({onClick:C,size:"small"},t),null!==r&&void 0!==r?r:e.cancelText),c.createElement(f.A,{buttonProps:(0,o.A)((0,o.A)({size:"small"},(0,h.D)(s)),n),actionFn:g,close:y,prefixCls:j("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==i&&void 0!==i?i:e.okText)))}))},g=void 0,C=function(e,l){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&l.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(o=Object.getOwnPropertySymbols(e);t<o.length;t++)l.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(n[o[t]]=e[o[t]])}return n};const j=c.forwardRef((function(e,l){var n=e.prefixCls,r=e.placement,m=void 0===r?"top":r,h=e.trigger,f=void 0===h?"click":h,A=e.okType,x=void 0===A?"primary":A,I=e.icon,j=void 0===I?c.createElement(a.A,null):I,b=e.children,w=e.overlayClassName,E=e.onOpenChange,k=e.onVisibleChange,O=C(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),P=c.useContext(u.QO).getPrefixCls,S=(0,s.A)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),z=(0,t.A)(S,2),N=z[0],D=z[1],T=function(e,l){D(e,!0),null===k||void 0===k||k(e,l),null===E||void 0===E||E(e,l)},V=P("popover",n),q=P("popconfirm",n),H=i()(q,w);return c.createElement(v.A,(0,o.A)({},O,{trigger:f,prefixCls:V,placement:m,onOpenChange:function(l){var n=e.disabled;void 0!==n&&n||T(l)},open:N,ref:l,overlayClassName:H,_overlay:c.createElement(y,(0,o.A)({okType:x,icon:j},e,{prefixCls:V,close:function(e){T(!1,e)},onConfirm:function(l){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(g,l)},onCancel:function(l){var n;T(!1,l),null===(n=e.onCancel)||void 0===n||n.call(g,l)}}))}),(0,p.Ob)(b,{onKeyDown:function(e){var l,n;c.isValidElement(b)&&(null===(n=null===b||void 0===b?void 0:(l=b.props).onKeyDown)||void 0===n||n.call(l,e)),function(e){e.keyCode===d.A.ESC&&N&&T(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=790.ea980690.chunk.js.map