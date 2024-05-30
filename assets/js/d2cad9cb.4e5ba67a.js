"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[3626],{5654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(5893),r=n(1151);const o={},a="third-party-notices",s={id:"tools/third-party-notices",title:"third-party-notices",description:"@rnx-kit/third-party-notices provides a helper library to create a",source:"@site/docs/tools/third-party-notices.md",sourceDirName:"tools",slug:"/tools/third-party-notices",permalink:"/rnx-kit/docs/tools/third-party-notices",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/third-party-notices.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"react-native-lazy-index",permalink:"/rnx-kit/docs/tools/react-native-lazy-index"},next:{title:"tools-android",permalink:"/rnx-kit/docs/tools/tools-android"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Commandline",id:"commandline",level:3},{value:"As a library",id:"as-a-library",level:3},{value:"As a plugin",id:"as-a-plugin",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"third-party-notices",children:"third-party-notices"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"@rnx-kit/third-party-notices"})," provides a helper library to create a\nthird-party-notices text file based on a output bundle. It also provides a cli\ninterface to the library for integration into build steps like just-scripts"]}),"\n",(0,i.jsxs)(t.p,{children:["This function will read the sourcemap file and tries to find all files that are\nreferenced in the sourcemap by assuming that all dependencies are represented as\n",(0,i.jsx)(t.code,{children:"node_modules\\moduleName"})," or ",(0,i.jsx)(t.code,{children:"node_modules\\@scope\\moduleName"})," It will then look\nin the package.json file to see if it finds a licence claration or it will look\nfor the file called ",(0,i.jsx)(t.code,{children:"LICENCE"})," in the root. And aggregate all ese files in the\noutput file."]}),"\n",(0,i.jsx)(t.p,{children:"This package works for npm, yarn and pnpm package layouts formats."}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.h3,{id:"commandline",children:"Commandline"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"npx @rnx-kit/third-party-notices \\\n    --rootPath <myPackage> \\\n    --sourceMapFile <myPackage/dist/myPackage.js.map>\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Options:\n  --help             Show help                                         [boolean]\n  --version          Show version number                               [boolean]\n  --rootPath         The root of the repo where to start resolving modules from.\n                                                             [string] [required]\n  --sourceMapFile    The sourceMap file to generate license contents for.\n                                                             [string] [required]\n  --json             Output license information as a JSON\n                                                      [boolean] [default: false]\n  --outputFile       The output file to write the license file to.      [string]\n  --ignoreScopes     Npm scopes to ignore and not emit license information for\n                                                                         [array]\n  --ignoreModules    Modules (js packages) to not emit license information for\n                                                                         [array]\n  --preambleText     A list of lines to prepend at the start of the generated\n                     license file.                                       [array]\n  --additionalText   A list of lines to append at the end of the generated\n                     license file.                                       [array]\n  --fullLicenseText  Include full license text in the JSON output\n                                                      [boolean] [default: false]\n"})}),"\n",(0,i.jsx)(t.h3,{id:"as-a-library",children:"As a library"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:'import { writeThirdPartyNotices } from "@rnx-kit/third-party-notices";\n\nwriteThirdPartyNotices({\n  rootPath: ".",\n  sourceMapFile: "./dist/myPackage.js.map",\n});\n'})}),"\n",(0,i.jsx)(t.h3,{id:"as-a-plugin",children:"As a plugin"}),"\n",(0,i.jsxs)(t.p,{children:["Import and add the plugin to ",(0,i.jsx)(t.code,{children:"ThirdPartyNotices"})," in your ",(0,i.jsx)(t.code,{children:"metro.config.js"}),", and\noptionally configure it to your liking:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-diff",children:' const { makeMetroConfig } = require("@rnx-kit/metro-config");\n+const { ThirdPartyNotices } = require("@rnx-kit/third-party-notices");\n+const { MetroSerializer } = require("@rnx-kit/metro-serializer");\n\n module.exports = makeMetroConfig({\n   serializer: {\n+    customSerializer: MetroSerializer([\n+      ThirdPartyNotices(),\n+    ]),\n   },\n });\n'})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var i=n(7294);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);