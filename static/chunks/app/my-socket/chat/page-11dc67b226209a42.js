(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74],{8213:(e,t,a)=>{Promise.resolve().then(a.bind(a,5607))},2278:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var s=a(7437),r=a(2265);let i=function(e){let{text_btn:t="Create",header:a="Props header none",placeholder:i="...",children:n,ls_name:l="io_name",handles:c=!1}=e,[o,u]=(0,r.useState)("");return(0,r.useEffect)(()=>{{let e=localStorage.getItem(l);e&&u(e.toString())}},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"text_shadow",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"fs-1 pb-1 d-block",children:a}),n,(0,s.jsx)("form",{onSubmit:e=>{e.preventDefault(),localStorage&&localStorage.setItem(l,o),c&&c(o)},children:(0,s.jsxs)("div",{className:"input-group mb-3",children:[(0,s.jsx)("input",{type:"text",value:o,onChange:e=>u(e.target.value),className:"form-control",placeholder:i,"aria-label":i}),(0,s.jsx)("button",{className:"btn btn-outline-light",type:"submit",children:t})]})})]})})})}},9887:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var s=a(7437),r=a(6648);let i=function(e){let{pic_url_pc_web:t,pic_url_pc_other:a,pic_url_mob_web:i,pic_url_mob_other:n,pic_url:l,alt:c,head:o,children:u,after_head:d,styles_container:h={},st_container:m="min-vh-100"}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("header",{className:"container-fluid position-relative",children:[(0,s.jsxs)("picture",{className:"bg_img",children:[(0,s.jsx)("source",{srcSet:t,type:"image/webp",media:"(min-width: 769px)"}),(0,s.jsx)("source",{srcSet:a,type:"image/jpeg",media:"(min-width: 769px)"}),(0,s.jsx)("source",{srcSet:i,type:"image/webp",media:"(max-width: 768px)"}),(0,s.jsx)("source",{srcSet:n,type:"image/jpeg",media:"(max-width: 768px)"}),(0,s.jsx)(r.default,{src:l,alt:c,width:100,height:100})]}),(0,s.jsx)("div",{className:"container-lg d-flex justify-content-center align-items-center ".concat(m),children:(0,s.jsxs)("div",{style:h,className:"py-4",children:[o||d?(0,s.jsxs)("div",{className:"pb-5",children:[(0,s.jsx)("h1",{className:"text_shadow display-2",style:{fontWeight:400},children:o}),d]}):null,u]})})]})})}},5607:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var s=a(7437),r=a(2265),i=a(6463),n=a(9887),l=a(6485),c=a(2278);let o=function(){let[e,t]=(0,r.useState)(""),a=(0,i.useRouter)();return(0,r.useEffect)(()=>(l.socket.connect(),()=>l.socket.disconnect(!0)),[a]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(n.Z,{pic_url_pc_web:"./../gif/Mario-chat.gif",pic_url_pc_other:"./../gif/Mario-chat.gif",pic_url_mob_web:"./../gif/mob-Mario-chat.gif",pic_url_mob_other:"./../gif/mob-Mario-chat.gif",pic_url:"/../gif/Mario-chat.gif",alt:"My Socket Gif Working",head:'Welcome to the "Chat" page.',children:[(0,s.jsx)(c.Z,{header:"Create your login",placeholder:"Your login?",ls:!0}),(0,s.jsx)("div",{className:"text_shadow",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"fs-1 pb-1 d-block",children:"Create your own chat."}),(0,s.jsx)("form",{onSubmit:t=>{t.preventDefault();let s=e.split(" ").join("_");e&&(l.socket.disconnect(!0),a.push("/my-socket/chat/".concat(s)))},children:(0,s.jsxs)("div",{className:"input-group mb-3",children:[(0,s.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),className:"form-control",placeholder:"Enter chat name","aria-label":"Enter chat name"}),(0,s.jsx)("button",{className:"btn btn-outline-light",type:"submit",children:"Create"})]})})]})})]})})}},6648:(e,t,a)=>{"use strict";a.d(t,{default:()=>r.a});var s=a(5601),r=a.n(s)},6463:(e,t,a)=>{"use strict";var s=a(1169);a.o(s,"usePathname")&&a.d(t,{usePathname:function(){return s.usePathname}}),a.o(s,"useRouter")&&a.d(t,{useRouter:function(){return s.useRouter}})},5601:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return c},getImageProps:function(){return l}});let s=a(9920),r=a(497),i=a(8173),n=s._(a(1241));function l(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let c=i.Image},6485:(e,t,a)=>{"use strict";a.r(t),a.d(t,{socket:()=>s});let s=(0,a(5040).io)()}},e=>{var t=t=>e(e.s=t);e.O(0,[173,40,130,215,744],()=>t(8213)),_N_E=e.O()}]);