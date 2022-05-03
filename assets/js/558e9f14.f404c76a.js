"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[9098],{5318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9070:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(5773),a=n(808),o=(n(7378),n(5318)),i=["components"],c={},s="react-native-auth",u={unversionedId:"tools/react-native-auth",id:"tools/react-native-auth",title:"react-native-auth",description:"",source:"@site/docs/tools/react-native-auth.mdx",sourceDirName:"tools",slug:"/tools/react-native-auth",permalink:"/rnx-kit/docs/tools/react-native-auth",editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/react-native-auth.mdx",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"metro-serializer-esbuild",permalink:"/rnx-kit/docs/tools/metro-serializer-esbuild"},next:{title:"react-native-lazy-index",permalink:"/rnx-kit/docs/tools/react-native-lazy-index"}},l={},p=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Motivation",id:"motivation",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-native-auth"},"react-native-auth"),(0,o.kt)("p",null,"@rnx-kit/react-native-auth provides a cross-app uniform API for user\nauthentication."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"Add the dependency to your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm add @rnx-kit/react-native-auth\n")),(0,o.kt)("p",null,"If you're using a different manager, swap out ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," with your package manager of\nchoice."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { acquireToken } from "@rnx-kit/react-native-auth";\n\nconst scopes = ["user.read"];\nconst userPrincipalName = "arnold@contoso.com";\n\nconst result = await acquireToken(\n  scopes,\n  userPrincipalName,\n  "MicrosoftAccount"\n);\n')),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Many features we build require authentication. The tricky thing about\nauthentication in brownfield apps (i.e. a native app hosting a React Native\ninstance) is that we want to reuse the auth code that the hosting app already\nhas to access the keychain and enable single sign-on. This excludes the use of\nmost React Native auth libraries out there since they are more geared towards\nstandalone use. Additionally, all apps implement this in different ways, so most\nfeature teams implement their own solution for providing access tokens to their\nfeatures during the development loop, or they rely on their hosting app to\nprovide such a solution. Solutions are often custom-made for the current app and\ncannot be shared with others without significant effort. They will also have to\nduplicate this effort when integrating into other apps."),(0,o.kt)("p",null,"This module aims to define a standard way to acquire access tokens so that React\nNative feature authors no longer have to care about the underlying\nimplementations. The idea is that by abstracting away the implementation\ndetails, React Native features can more easily be integrated into any app that\nprovides an implementation of this module, without having to duplicate the\neffort of others."))}f.isMDXComponent=!0}}]);