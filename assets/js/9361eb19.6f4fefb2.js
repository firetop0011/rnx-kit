"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[6050],{5333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=r(5893),n=r(1151);const o={},i="metro-resolver-symlinks",l={id:"tools/metro-resolver-symlinks",title:"metro-resolver-symlinks",description:"@rnx-kit/metro-resolver-symlinks is a Metro resolver with proper support for",source:"@site/docs/tools/metro-resolver-symlinks.md",sourceDirName:"tools",slug:"/tools/metro-resolver-symlinks",permalink:"/rnx-kit/docs/tools/metro-resolver-symlinks",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/metro-resolver-symlinks.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"metro-plugin-typescript",permalink:"/rnx-kit/docs/tools/metro-plugin-typescript"},next:{title:"metro-serializer",permalink:"/rnx-kit/docs/tools/metro-serializer"}},a={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"<code>remapModule</code>",id:"remapmodule",level:3}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"metro-resolver-symlinks",children:"metro-resolver-symlinks"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"@rnx-kit/metro-resolver-symlinks"})," is a Metro resolver with proper support for\nsymlinks. This is especially useful in monorepos, or repos using package\nmanagers that make heavy use of symlinks (such as pnpm)."]}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"yarn add @rnx-kit/metro-resolver-symlinks --dev\n"})}),"\n",(0,s.jsx)(t.p,{children:"or if you're using npm"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm add --save-dev @rnx-kit/metro-resolver-symlinks\n"})}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(t.p,{children:["Import and assign the resolver to ",(0,s.jsx)(t.code,{children:"resolver.resolveRequest"})," in your\n",(0,s.jsx)(t.code,{children:"metro.config.js"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-diff",children:' const { makeMetroConfig } = require("@rnx-kit/metro-config");\n+const MetroSymlinksResolver = require("@rnx-kit/metro-resolver-symlinks");\n\n module.exports = makeMetroConfig({\n   resolver: {\n+    resolveRequest: MetroSymlinksResolver(),\n   },\n });\n'})}),"\n",(0,s.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Option"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"remapModule"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"(moduleId: string) => string"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"A custom function for remapping additional modules."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"experimental_retryResolvingFromDisk"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"boolean"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"[Experimental] Whether to retry module resolution on disk if not found in Haste map. This option is useful for scenarios where you want to reduce the number of watched files (and thus the initial time spent on crawling). Note that enabling this will likely be slower than having a warm cache."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"remapmodule",children:(0,s.jsx)(t.code,{children:"remapModule"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"remapModule"})," allows additional remapping of modules. For instance, there is a\n",(0,s.jsx)(t.code,{children:"remapImportPath"})," utility that remaps requests of ",(0,s.jsx)(t.code,{children:"lib/**/*.js"})," to\n",(0,s.jsx)(t.code,{children:"src/**/*.ts"}),". This is useful for packages that don't correctly export\neverything in their main JS file."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-diff",children:' const { makeMetroConfig } = require("@rnx-kit/metro-config");\n const MetroSymlinksResolver = require("@rnx-kit/metro-resolver-symlinks");\n\n module.exports = makeMetroConfig({\n   projectRoot: __dirname,\n   resolver: {\n     resolveRequest: MetroSymlinksResolver({\n+      remapModule: MetroSymlinksResolver.remapImportPath({\n+        test: (moduleId) => moduleId.startsWith("@rnx-kit/"),\n+        extensions: [".ts", ".tsx"],     // optional\n+        mainFields: ["module", "main"],  // optional\n+      }),\n     }),\n   },\n });\n'})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"[!TIP]"}),"\n",(0,s.jsxs)(t.p,{children:["When Metro releases a version with the ability to set a\n",(0,s.jsx)(t.a,{href:"https://github.com/facebook/metro/commit/96fb6e904e1660b37f4d1f5353ca1e5477c4afbf",children:"custom resolver for Haste requests"}),",\nthis way of remapping modules is preferable over\n",(0,s.jsx)(t.code,{children:"@rnx-kit/babel-plugin-import-path-remapper"}),". The Babel plugin mutates the AST\nand requires a second pass."]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>i});var s=r(7294);const n={},o=s.createContext(n);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);