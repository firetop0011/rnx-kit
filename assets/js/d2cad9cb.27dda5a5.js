"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[3626],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5343:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={},a="third-party-notices",l={unversionedId:"tools/third-party-notices",id:"tools/third-party-notices",title:"third-party-notices",description:"@rnx-kit/third-party-notices provides a helper library to create a",source:"@site/docs/tools/third-party-notices.md",sourceDirName:"tools",slug:"/tools/third-party-notices",permalink:"/rnx-kit/docs/tools/third-party-notices",draft:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/third-party-notices.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"react-native-lazy-index",permalink:"/rnx-kit/docs/tools/react-native-lazy-index"},next:{title:"tools-language",permalink:"/rnx-kit/docs/tools/tools-language"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Commandline",id:"commandline",level:3},{value:"As a library",id:"as-a-library",level:3},{value:"As a plugin",id:"as-a-plugin",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"third-party-notices"},"third-party-notices"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@rnx-kit/third-party-notices")," provides a helper library to create a\nthird-party-notices text file based on a output bundle. It also provides a cli\ninterface to the library for integration into build steps like just-scripts"),(0,o.kt)("p",null,"This function will read the sourcemap file and tries to find all files that are\nreferenced in the sourcemap by assuming that all dependencies are represented as\n",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules\\moduleName")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules\\@scope\\moduleName")," It will then look\nin the package.json file to see if it finds a licence claration or it will look\nfor the file called ",(0,o.kt)("inlineCode",{parentName:"p"},"LICENCE")," in the root. And aggregate all ese files in the\noutput file."),(0,o.kt)("p",null,"This package works for npm, yarn and pnpm package layouts formats."),(0,o.kt)("p",null,"At the moment this package only supports webpack based bundles, there is nothing\npreventing adding metro support, the current customers of this module are\nbasedon webpack at the moment."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"commandline"},"Commandline"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx @rnx-kit/third-party-notices \\\n    --rootPath <myPackage> \\\n    --sourceMapFile <myPackage/dist/myPackage.js.map>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Options:\n  --help            Show help                                          [boolean]\n  --version         Show version number                                [boolean]\n  --rootPath        The root of the repo where to start resolving modules from.\n                                                             [string] [required]\n  --sourceMapFile   The sourceMap file to generate licence contents for.\n                                                             [string] [required]\n  --outputFile      The output file to write the licence file to.       [string]\n  --json            Output license information as a JSON\n                                                      [boolean] [default: false]\n  --ignoreScopes    Npm scopes to ignore and not emit licence information for\n                                                                         [array]\n  --ignoreModules   Modules (js packages) to not emit licence information for\n                                                                         [array]\n  --preambleText    A list of lines to prepend at the start of the generated\n                    licence file.                                        [array]\n  --additionalText  A list of lines to append at the end of the generated\n                    licence file.                                        [array]\n")),(0,o.kt)("h3",{id:"as-a-library"},"As a library"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { writeThirdPartyNotices } from "@rnx-kit/third-party-notices";\n\nwriteThirdPartyNotices({\n  rootPath: ".",\n  sourceMapFile: "./dist/myPackage.js.map",\n});\n')),(0,o.kt)("h3",{id:"as-a-plugin"},"As a plugin"),(0,o.kt)("p",null,"Import and add the plugin to ",(0,o.kt)("inlineCode",{parentName:"p"},"ThirdPartyNotices")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"metro.config.js"),", and\noptionally configure it to your liking:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},' const { makeMetroConfig } = require("@rnx-kit/metro-config");\n+const { ThirdPartyNotices } = require("@rnx-kit/third-party-notices");\n+const { MetroSerializer } = require("@rnx-kit/metro-serializer");\n\n module.exports = makeMetroConfig({\n   serializer: {\n+    customSerializer: MetroSerializer([\n+      ThirdPartyNotices(),\n+    ]),\n   },\n });\n')))}u.isMDXComponent=!0}}]);