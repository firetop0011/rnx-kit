"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[4698],{1274:(e,n,a)=>{a.d(n,{ZP:()=>c,d$:()=>l});var t=a(5893),r=a(1151),s=a(4866),i=a(5162);const l=[];function o(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(s.Z,{groupId:"package-manager",children:[(0,t.jsxs)(i.Z,{value:"yarn",label:"Yarn",default:!0,children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"yarn rnx-align-deps --init app\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"yarn rnx-align-deps --init library\n"})})]}),(0,t.jsxs)(i.Z,{value:"pnpm",label:"pnpm",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm rnx-align-deps --init app\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm rnx-align-deps --init library\n"})})]}),(0,t.jsxs)(i.Z,{value:"npm",label:"npm",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npx rnx-align-deps --init app\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npx rnx-align-deps --init library\n"})})]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8851:(e,n,a)=>{a.d(n,{ZP:()=>u,d$:()=>o});var t=a(5893),r=a(1151),s=a(4866),i=a(5162),l=a(9286);const o=[];function c(e){return(0,t.jsxs)(s.Z,{groupId:"package-manager",children:[(0,t.jsx)(i.Z,{value:"yarn",label:"Yarn",default:!0,children:(0,t.jsxs)(l.Z,{language:"sh",children:["yarn ",e.yarnArgs||e.args]})}),(0,t.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsxs)(l.Z,{language:"sh",children:["pnpm ",e.pnpmArgs||e.args]})}),(0,t.jsx)(i.Z,{value:"npm",label:"npm",children:(0,t.jsxs)(l.Z,{language:"sh",children:["npm ",e.npmArgs||e.args]})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},916:(e,n,a)=>{a.d(n,{ZP:()=>u,d$:()=>o});var t=a(5893),r=a(1151),s=a(4866),i=a(5162),l=a(9286);const o=[];function c(e){return(0,t.jsxs)(s.Z,{groupId:"package-manager",children:[(0,t.jsx)(i.Z,{value:"yarn",label:"Yarn",default:!0,children:(0,t.jsxs)(l.Z,{language:"sh",children:["yarn ",e.yarnArgs||e.args]})}),(0,t.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsxs)(l.Z,{language:"sh",children:["pnpm ",e.pnpmArgs||e.args]})}),(0,t.jsx)(i.Z,{value:"npm",label:"npm",children:(0,t.jsxs)(l.Z,{language:"sh",children:["npx ",e.npxArgs||e.args]})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},6401:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var t=a(5893),r=a(1151),s=a(1274),i=a(8851),l=a(916);const o={},c="Getting Started",u={id:"guides/getting-started",title:"Getting Started",description:"Welcome! A good place to start with any React Native project is the dependency",source:"@site/docs/guides/getting-started.mdx",sourceDirName:"guides",slug:"/guides/getting-started",permalink:"/rnx-kit/docs/guides/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/guides/getting-started.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Type Safety",permalink:"/rnx-kit/docs/type-safety"},next:{title:"Dependency Management",permalink:"/rnx-kit/docs/guides/dependency-management"}},d={},p=[...i.d$,...s.d$,...l.d$];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsx)(n.p,{children:"Welcome! A good place to start with any React Native project is the dependency\nmanager. It keeps your React Native dependencies up-to-date and healthy using\nautomation which ties into your developer workflows."}),"\n",(0,t.jsx)(n.p,{children:"This guide gets you off and running with the dependency manager. To begin,\nchoose a package that uses React Native and open a terminal window."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you want to learn more about this project before jumping in, head to the\n",(0,t.jsx)(n.a,{href:"/docs/introduction",children:"introduction"})," page."]})}),"\n",(0,t.jsx)(n.p,{children:"Start by adding the dependency manager to your package."}),"\n",(0,t.jsx)(i.ZP,{yarnArgs:"add @rnx-kit/align-deps --dev",pnpmArgs:"add -D @rnx-kit/align-deps",npmArgs:"add --save-dev @rnx-kit/align-deps"}),"\n",(0,t.jsxs)(n.p,{children:["Next, generate the dependency manager configuration for your package. If your\npackage produces a bundle, it's an ",(0,t.jsx)(n.code,{children:"app"}),". Otherwise, it's a ",(0,t.jsx)(n.code,{children:"library"}),"."]}),"\n",(0,t.jsx)(s.ZP,{}),"\n",(0,t.jsx)(n.p,{children:"Fix any React Native package versions that might have compatibility issues."}),"\n",(0,t.jsx)(l.ZP,{args:"rnx-align-deps --write"}),"\n",(0,t.jsx)(n.p,{children:"Review the changes. They should be limited to package.json and your Yarn / npm /\npnpm lock file."}),"\n",(0,t.jsx)(n.admonition,{title:"Test Your Package",type:"info",children:(0,t.jsx)(n.p,{children:"If any dependency versions changed, test your package to be sure everything is\nstill in working order."})}),"\n",(0,t.jsxs)(n.p,{children:["Congratulations! You can now automatically maintain your package as the React\nNative ecosystem grows and changes. Take a look at the\n",(0,t.jsx)(n.a,{href:"/docs/guides/dependency-management",children:"dependency management"})," guide to learn how."]})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5162:(e,n,a)=>{a.d(n,{Z:()=>i});a(7294);var t=a(512);const r={tabItem:"tabItem_Ymn6"};var s=a(5893);function i(e){let{children:n,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,i),hidden:a,children:n})}},4866:(e,n,a)=>{a.d(n,{Z:()=>k});var t=a(7294),r=a(512),s=a(2466),i=a(6550),l=a(469),o=a(1980),c=a(7392),u=a(812);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:a}=e;const r=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=p(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=g({queryString:a,groupId:r}),[m,x]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),f=(()=>{const e=c??m;return h({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(5893);function y(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const n=e.currentTarget,a=o.indexOf(n),r=l[a].value;r!==t&&(c(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(y,{...n,...e}),(0,b.jsx)(j,{...n,...e})]})}function k(e){const n=(0,x.Z)();return(0,b.jsx)(v,{...e,children:d(e.children)},String(n))}}}]);