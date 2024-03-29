"use strict";(self.webpackChunkwonderfullcity_crm=self.webpackChunkwonderfullcity_crm||[]).push([[185],{4268:(e,s,a)=>{a.d(s,{A:()=>n});a(5043);var t=a(289),l=a(6558),o=a(579);const n=e=>{let{label:s,name:a,required:n,required_text:i,warning:r}=e;return(0,o.jsx)(t.A.Item,{label:r?(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:s}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{children:r})]}):(0,o.jsx)("div",{children:s}),name:a,rules:[{required:n,message:i}],children:(0,o.jsx)(l.A,{})})}},9185:(e,s,a)=>{a.r(s),a.d(s,{default:()=>I});var t=a(5043),l=a(289),o=a(8193),n=a(9800),i=a(1645),r=a(4406),d=a(2895),u=a(1802),c=a(2907),m=a(9888),p=a(8710),v=a(3216),g=a(4556),h=a(6213),f=a(4268),A=a(9488),x=a(579);const y={name:"",slotId:null,imageId:[]},I=()=>{const[e]=l.A.useForm(),s=(0,v.Zp)(),{editId:a}=(0,g.d4)((e=>e.editData)),I=(0,g.wA)(),[j,w]=(0,t.useState)([]),{data:b,refetch:S}=(0,c.useQuery)("get-slot",(()=>m.A.getData("/Slot")),{enabled:!1}),{mutate:F,data:E,isLoading:D,isSuccess:L}=(0,c.useMutation)((e=>{let{url:s,formData:a}=e;return m.A.postData(s,a)}),{onSuccess:()=>{o.Ay.success("Success")},onError:e=>{for(let s in e.response.data)o.Ay.error("".concat(s,": ").concat(e.response.data[s]))}}),{mutate:V,data:C,isLoading:q,isSuccess:M}=(0,c.useMutation)((e=>{let{url:s,data:a}=e;return m.A.postData(s,a)}),{onSuccess:()=>{o.Ay.success("Success")},onError:e=>{for(let s in e.response.data)o.Ay.error("".concat(s,": ").concat(e.response.data[s]))}}),{isLoading:H,data:T,refetch:k,isSuccess:O}=(0,c.useQuery)(["edit-house",a],(()=>m.A.getDataByID("/House",a)),{enabled:!1}),{mutate:_,isLoading:P,data:R,isSuccess:U}=(0,c.useMutation)((e=>{let{url:s,data:a,id:t}=e;return m.A.editData(s,a,t)}),{onSuccess:()=>{o.Ay.success("Success")},onError:e=>{for(let s in e.response.data)o.Ay.error("".concat(s,": ").concat(e.response.data[s]))}}),{mutate:J}=(0,c.useMutation)((e=>{let{url:s,ids:a}=e;return m.A.deleteImages(s,a)}),{onSuccess:()=>o.Ay.success("Success"),onError:e=>o.Ay.error(e.message)});(0,t.useEffect)((()=>{U&&I({type:h.aT,payload:""}),(M||U)&&s("/house")}),[C,R]),(0,t.useEffect)((()=>{""!==a&&k()}),[a]),(0,t.useEffect)((()=>{""===a&&e.setFieldsValue(y),S()}),[]),(0,t.useEffect)((()=>{let s=null;var a,t;void 0!==T&&(s=[{uid:null===T||void 0===T||null===(a=T.image)||void 0===a?void 0:a.id,name:null===T||void 0===T||null===(t=T.image)||void 0===t?void 0:t.id,status:"done",url:"".concat("http://95.46.96.124/","/").concat(null===T||void 0===T?void 0:T.image.path)}]);if(O){var l;const a={name:null===T||void 0===T?void 0:T.name,slotId:null===T||void 0===T||null===(l=T.slot)||void 0===l?void 0:l.id,imageId:s};w(s),e.setFieldsValue(a)}}),[T]);(0,t.useEffect)((()=>{const s=JSON.parse(localStorage.getItem("myFormValues"));s&&(s.images=[],e.setFieldsValue(s));const a=()=>{localStorage.setItem("myFormValues",JSON.stringify(e.getFieldsValue()))};return window.addEventListener("beforeunload",a),()=>{localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",a)}}),[]),(0,t.useEffect)((()=>{if(L){const s=[{uid:null===E||void 0===E?void 0:E.id,name:null===E||void 0===E?void 0:E.id,status:"done",url:"".concat("http://95.46.96.124/","/").concat(null===E||void 0===E?void 0:E.path)}];e.setFieldsValue({imageId:s}),w(s)}}),[E]);const N=(0,t.useMemo)((()=>{var e;return null===b||void 0===b||null===(e=b.result)||void 0===e?void 0:e.map((e=>({value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name})))}),[b]);return(0,x.jsx)("div",{children:q||H||P||D?(0,x.jsx)(p.HE,{}):(0,x.jsxs)(l.A,{form:e,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:y,onFinish:e=>{var s;const t={name:e.name,slotId:e.slotId,imageId:null===(s=j[0])||void 0===s?void 0:s.uid};O?_({url:"/House",data:t,id:a}):V({url:"/House/",data:t})},onFinishFailed:e=>{console.log("Failed:",e)},autoComplete:"off",children:[(0,x.jsxs)(n.A,{gutter:20,children:[(0,x.jsx)(i.A,{span:12,children:(0,x.jsx)(l.A.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043b\u043e\u0442",name:"slotId",rules:[{required:!0,message:"\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u043b\u043e\u0442"}],wrapperCol:{span:24},children:(0,x.jsx)(r.A,{style:{width:"100%"},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u0441\u043b\u043e\u0442",optionLabelProp:"label",options:N})})}),(0,x.jsx)(i.A,{span:12,children:(0,x.jsx)(f.A,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u043c",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u043c",name:"name"})})]}),(0,x.jsx)(n.A,{gutter:20,children:(0,x.jsx)(i.A,{span:12,children:(0,x.jsx)(l.A.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0434\u043e\u043c\u0430",name:"imageId",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}],children:(0,x.jsx)(A.A,{children:(0,x.jsx)(d.A,{maxCount:1,fileList:j,listType:"picture-card",onChange:e=>{let{fileList:s}=e;const a=new FormData;0!==s.length&&(a.append("fromFile",s[0].originFileObj),F({url:"/Image/",formData:a}))},onPreview:async e=>{let s=e.url;s||(s=await new Promise((s=>{const a=new FileReader;a.readAsDataURL(e.originFileObj),a.onload=()=>s(a.result)})));const a=new Image;a.src=s;const t=window.open(s);null===t||void 0===t||t.document.write(a.outerHTML)},onRemove:s=>{const a=null===s||void 0===s?void 0:s.uid;J({url:"/Image/".concat(a)}),e.setFieldsValue({imageId:[]}),w([])},beforeUpload:()=>!1,children:j.length>0?"":"Upload"})})})})}),(0,x.jsx)(u.A,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:O?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})}}}]);
//# sourceMappingURL=185.0a2a087c.chunk.js.map