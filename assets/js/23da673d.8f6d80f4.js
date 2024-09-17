"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[9963],{8055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(4848),r=n(8453);const s={},a="react-native-auth",o={id:"tools/react-native-auth",title:"react-native-auth",description:"Build",source:"@site/docs/tools/react-native-auth.md",sourceDirName:"tools",slug:"/tools/react-native-auth",permalink:"/rnx-kit/docs/tools/react-native-auth",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/react-native-auth.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"metro-serializer-esbuild",permalink:"/rnx-kit/docs/tools/metro-serializer-esbuild"},next:{title:"react-native-host",permalink:"/rnx-kit/docs/tools/react-native-host"}},c={},d=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Motivation",id:"motivation",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"react-native-auth",children:"react-native-auth"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/microsoft/rnx-kit/actions/workflows/build.yml",children:(0,i.jsx)(t.img,{src:"https://github.com/microsoft/rnx-kit/actions/workflows/build.yml/badge.svg",alt:"Build"})}),"\n",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/@rnx-kit/react-native-auth",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/npm/v/@rnx-kit/react-native-auth",alt:"npm version"})})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"@rnx-kit/react-native-auth"})," provides a cross-app uniform API for user\nauthentication."]}),"\n",(0,i.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(t.p,{children:"Add the dependency to your project:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"npm add @rnx-kit/react-native-auth\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If you're using a different manager, swap out ",(0,i.jsx)(t.code,{children:"npm"})," with your package manager of\nchoice."]}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'import {\n  acquireTokenWithScopes,\n  isAvailable,\n} from "@rnx-kit/react-native-auth";\n\nconst scopes = ["user.read"];\nconst userPrincipalName = "arnold@contoso.com";\n\nif (isAvailable()) {\n  const result = await acquireTokenWithScopes(\n    scopes,\n    userPrincipalName,\n    "MicrosoftAccount"\n  );\n} else {\n  // Use an alternate authentication method\n}\n'})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Category"}),(0,i.jsx)(t.th,{children:"Type Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"types"}),(0,i.jsx)(t.td,{children:"AccountType"}),(0,i.jsx)(t.td,{children:"Account types. Current valid types are Microsoft accounts (or MSA) and organizational (M365), but can be extended to support other types, e.g. Apple, Google, etc."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"types"}),(0,i.jsx)(t.td,{children:"AuthErrorAndroid"}),(0,i.jsx)(t.td,{children:"The authentication error object contains a stack trace on Android."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"types"}),(0,i.jsx)(t.td,{children:"AuthErrorIOS"}),(0,i.jsx)(t.td,{children:"The authentication error object contains a stack trace on iOS."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"types"}),(0,i.jsx)(t.td,{children:"AuthErrorNative"}),(0,i.jsx)(t.td,{children:"The authentication error object. May contain a native stack trace."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"types"}),(0,i.jsx)(t.td,{children:"AuthErrorType"}),(0,i.jsx)(t.td,{children:"The type of error that occurred during authentication."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"types"}),(0,i.jsx)(t.td,{children:"AuthErrorUserInfo"}),(0,i.jsx)(t.td,{children:"Authentication error details provided by the underlying implementation. This object can be used to provide the inner exception, or a more user friendly error message."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"types"}),(0,i.jsx)(t.td,{children:"AuthResult"}),(0,i.jsx)(t.td,{children:"Authentication result returned on success."})]})]})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Category"}),(0,i.jsx)(t.th,{children:"Function"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"acquireTokenWithResource(resource, userPrincipalName, accountType)"})}),(0,i.jsx)(t.td,{children:"Acquires a token for a resource."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"acquireTokenWithScopes(scopes, userPrincipalName, accountType)"})}),(0,i.jsx)(t.td,{children:"Acquires a token with specified scopes."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"isAvailable()"})}),(0,i.jsx)(t.td,{children:"Returns whether this module is available."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,i.jsx)(t.p,{children:"Many features we build require authentication. The tricky thing about\nauthentication in brownfield apps (i.e. a native app hosting a React Native\ninstance) is that we want to reuse the auth code that the hosting app already\nhas to access the keychain and enable single sign-on. This excludes the use of\nmost React Native auth libraries out there since they are more geared towards\nstandalone use. Additionally, all apps implement this in different ways, so most\nfeature teams implement their own solution for providing access tokens to their\nfeatures during the development loop, or they rely on their hosting app to\nprovide such a solution. Solutions are often custom-made for the current app and\ncannot be shared with others without significant effort. They will also have to\nduplicate this effort when integrating into other apps."}),"\n",(0,i.jsx)(t.p,{children:"This module aims to define a standard way to acquire access tokens so that React\nNative feature authors no longer have to care about the underlying\nimplementations. The idea is that by abstracting away the implementation\ndetails, React Native features can more easily be integrated into any app that\nprovides an implementation of this module, without having to duplicate the\neffort of others."})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(6540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);