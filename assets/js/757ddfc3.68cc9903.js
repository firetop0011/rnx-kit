"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[326],{8403:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=t(4848),r=t(8453);const s={},o="metro-plugin-duplicates-checker",l={id:"tools/metro-plugin-duplicates-checker",title:"metro-plugin-duplicates-checker",description:"@rnx-kit/metro-plugin-duplicates-checker checks for duplicate packages in your",source:"@site/docs/tools/metro-plugin-duplicates-checker.md",sourceDirName:"tools",slug:"/tools/metro-plugin-duplicates-checker",permalink:"/rnx-kit/docs/tools/metro-plugin-duplicates-checker",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/metro-plugin-duplicates-checker.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"metro-plugin-cyclic-dependencies-detector",permalink:"/rnx-kit/docs/tools/metro-plugin-cyclic-dependencies-detector"},next:{title:"metro-plugin-typescript",permalink:"/rnx-kit/docs/tools/metro-plugin-typescript"}},c={},a=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Resolving Duplicates",id:"resolving-duplicates",level:2},{value:"Manual Dedupe",id:"manual-dedupe",level:3},{value:"Using Tools",id:"using-tools",level:3},{value:"Help Metro Resolve Correct Version",id:"help-metro-resolve-correct-version",level:3},{value:"Last Resort: Force Resolution",id:"last-resort-force-resolution",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"metro-plugin-duplicates-checker",children:"metro-plugin-duplicates-checker"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@rnx-kit/metro-plugin-duplicates-checker"})," checks for duplicate packages in your\nbundle."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"There are several ways to use this package."}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"recommended"})," way is to add it as a plugin in your ",(0,i.jsx)(n.code,{children:"metro.config.js"})," using\n",(0,i.jsx)(n.code,{children:"@rnx-kit/metro-serializer"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:' const { makeMetroConfig } = require("@rnx-kit/metro-config");\n+const {\n+  DuplicateDependencies,\n+} = require("@rnx-kit/metro-plugin-duplicates-checker");\n+const { MetroSerializer } = require("@rnx-kit/metro-serializer");\n\n module.exports = makeMetroConfig({\n   serializer: {\n+    customSerializer: MetroSerializer([DuplicateDependencies()]),\n   },\n });\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can also check for duplicate packages after a bundle is created:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const {\n  checkForDuplicatePackagesInFile,\n} = require("@rnx-kit/metro-plugin-duplicates-checker");\n\ncheckForDuplicatePackagesInFile(pathToSourceMapFile, {\n  ignoredModules: [],\n  bannedModules: [],\n});\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If you have a source map object, you can pass that directly to\n",(0,i.jsx)(n.code,{children:"checkForDuplicatePackages()"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const {\n  checkForDuplicatePackages,\n} = require("@rnx-kit/metro-plugin-duplicates-checker");\n\ncheckForDuplicatePackages(mySourceMap, {\n  ignoredModules: [],\n  bannedModules: [],\n});\n'})}),"\n",(0,i.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Key"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Default"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"bannedModules"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"string[]"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"[]"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"List of modules that are banned."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"ignoredModules"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"string[]"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"[]"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"List of modules that can be ignored."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"throwOnError"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"boolean"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Whether to throw when duplicates are found."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"resolving-duplicates",children:"Resolving Duplicates"}),"\n",(0,i.jsx)(n.p,{children:"So you have duplicates in your bundle, now what? Depending on your specific\nneeds, we have several options."}),"\n",(0,i.jsx)(n.p,{children:"Let's use a specific example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"error @fluentui-react-native/text (found 2 copies)\nwarn   0.21.14 /~/node_modules/@fluentui-react-native/text\nwarn   0.22.7 /~/node_modules/@fluentui-react-native/link/node_modules/@fluentui-react-native/text\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This one occurs because ",(0,i.jsx)(n.code,{children:"@fluentui-react-native/link"})," declares a dependency on\n",(0,i.jsx)(n.code,{children:"@fluentui-react-native/text"})," using a wide version range, ",(0,i.jsx)(n.code,{children:">=0.21.14 <1.0.0"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Our project depends on ",(0,i.jsx)(n.code,{children:"@fluentui-react-native/text@^0.21.14"}),", but package\nmanagers will typically still try to resolve ",(0,i.jsx)(n.code,{children:">=0.21.14 <1.0.0"})," instead of using\nthe existing resolution. This results in the duplicate error we see above."]}),"\n",(0,i.jsx)(n.p,{children:"From here, we have several options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#manual-dedupe",children:"Manual Dedupe"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#using-tools",children:"Using Tools"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#help-metro-resolve-correct-version",children:"Help Metro Resolve Correct Version"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#last-resort-force-resolution",children:"Last Resort: Force Resolution"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"manual-dedupe",children:"Manual Dedupe"}),"\n",(0,i.jsx)(n.p,{children:"This method is error-prone, especially if you have a lot of duplicates. It works\nif you have very few entries. It varies a lot depending on the package manager\nyou're using."}),"\n",(0,i.jsxs)(n.p,{children:["The project in our example uses Yarn Classic: Open ",(0,i.jsx)(n.code,{children:"yarn.lock"})," and look for\n",(0,i.jsx)(n.code,{children:"@fluentui-react-native/text"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'"@fluentui-react-native/text@0.21.14", "@fluentui-react-native/text@^0.21.14":\n  version "0.21.14"\n  resolved "https://registry.yarnpkg.com/@fluentui-react-native/text/-/text-0.21.14.tgz#04918a9558770ec551cbdac87ca1534bfccaeffb"\n  integrity sha1-BJGKlVh3DsVRy9rIfKFTS/zK7/s=\n  dependencies:\n    "@fluentui-react-native/adapters" ">=0.11.3 <1.0.0"\n    "@fluentui-react-native/framework" "0.11.10"\n    "@fluentui-react-native/interactive-hooks" ">=0.24.12 <1.0.0"\n    "@fluentui-react-native/theme-tokens" ">=0.25.4 <1.0.0"\n    "@fluentui-react-native/tokens" ">=0.21.6 <1.0.0"\n    "@uifabricshared/foundation-compose" "^1.14.12"\n    tslib "^2.3.1"\n\n"@fluentui-react-native/text@>=0.21.14 <1.0.0":\n  version "0.22.7"\n  resolved "https://registry.yarnpkg.com/@fluentui-react-native/text/-/text-0.22.7.tgz#bd11768d3cd69337ad2ec4be76ee88d6749ca24f"\n  integrity sha1-vRF2jTzWkzetLsS+du6I1nScok8=\n  dependencies:\n    "@fluentui-react-native/adapters" ">=0.12.0 <1.0.0"\n    "@fluentui-react-native/framework" "0.13.6"\n    "@fluentui-react-native/interactive-hooks" ">=0.25.7 <1.0.0"\n    "@fluentui-react-native/theme-tokens" ">=0.26.5 <1.0.0"\n    "@fluentui-react-native/tokens" ">=0.22.5 <1.0.0"\n    "@uifabricshared/foundation-compose" "^1.14.20"\n    tslib "^2.3.1"\n'})}),"\n",(0,i.jsx)(n.p,{children:"We can see there are two entries, one being resolved to 0.21.14 and the other to\n0.22.7. In this case, since we want to keep 0.21.x and the version ranges just\nhappens to be satisfied by this. We can merge the two entries like below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'"@fluentui-react-native/text@0.21.14", "@fluentui-react-native/text@>=0.21.14 <1.0.0", "@fluentui-react-native/text@^0.21.14":\n  version "0.21.14"\n  resolved "https://registry.yarnpkg.com/@fluentui-react-native/text/-/text-0.21.14.tgz#04918a9558770ec551cbdac87ca1534bfccaeffb"\n  integrity sha1-BJGKlVh3DsVRy9rIfKFTS/zK7/s=\n  dependencies:\n    "@fluentui-react-native/adapters" ">=0.11.3 <1.0.0"\n    "@fluentui-react-native/framework" "0.11.10"\n    "@fluentui-react-native/interactive-hooks" ">=0.24.12 <1.0.0"\n    "@fluentui-react-native/theme-tokens" ">=0.25.4 <1.0.0"\n    "@fluentui-react-native/tokens" ">=0.21.6 <1.0.0"\n    "@uifabricshared/foundation-compose" "^1.14.12"\n    tslib "^2.3.1"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Now we should only have one copy of ",(0,i.jsx)(n.code,{children:"@fluentui-react-native/text"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Our example is relatively simple. Sometimes you have to go further up the\ndependency chain and dedupe dependees."}),"\n",(0,i.jsx)(n.p,{children:"Fortunately, we can use tools in most cases."}),"\n",(0,i.jsx)(n.h3,{id:"using-tools",children:"Using Tools"}),"\n",(0,i.jsxs)(n.p,{children:["If you're using Yarn Classic, there is a tool, ",(0,i.jsx)(n.a,{href:"https://github.com/scinos/yarn-deduplicate",children:(0,i.jsx)(n.code,{children:"yarn-deduplicate"})}),", for\ndeduplicating everything in ",(0,i.jsx)(n.code,{children:"yarn.lock"}),". You can run it like so:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npx yarn-deduplicate\n"})}),"\n",(0,i.jsxs)(n.p,{children:["By default, it will try to dedupe to the highest version. In our example,\nhowever, we want to keep using 0.21.x. We should also limit the number of\npackages that get deduped to make it easier to review later. ",(0,i.jsx)(n.code,{children:"yarn-deduplicate"}),"\nprovides many options, but we'll be using the ",(0,i.jsx)(n.code,{children:"fewer"})," strategy and the\n",(0,i.jsx)(n.code,{children:"--scopes"})," flag to only target ",(0,i.jsx)(n.code,{children:"@fluentui-react-native"})," packages:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npx yarn-deduplicate --strategy fewer --scopes @fluentui-react-native\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can read more about ",(0,i.jsx)(n.code,{children:"yarn-deduplicate"})," and available options here:\n",(0,i.jsx)(n.a,{href:"https://github.com/scinos/yarn-deduplicate#readme",children:"https://github.com/scinos/yarn-deduplicate#readme"})]}),"\n",(0,i.jsx)(n.p,{children:"If you're using modern Yarn or other package managers, check out their built-in\ndedupe command:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Yarn:"})," ",(0,i.jsx)(n.a,{href:"https://yarnpkg.com/cli/dedupe",children:"https://yarnpkg.com/cli/dedupe"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"npm:"})," ",(0,i.jsx)(n.a,{href:"https://docs.npmjs.com/cli/commands/npm-dedupe",children:"https://docs.npmjs.com/cli/commands/npm-dedupe"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"pnpm:"})," ",(0,i.jsx)(n.a,{href:"https://pnpm.io/cli/dedupe",children:"https://pnpm.io/cli/dedupe"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"help-metro-resolve-correct-version",children:"Help Metro Resolve Correct Version"}),"\n",(0,i.jsxs)(n.p,{children:["If, for some reason, you cannot dedupe the package, you can instead configure\nMetro to resolve the correct version by telling it which version to use (with\n",(0,i.jsx)(n.a,{href:"https://metrobundler.dev/docs/configuration/#extranodemodules",children:(0,i.jsx)(n.code,{children:"resolver.extraNodeModules"})}),") and blocking every other copy (with\n",(0,i.jsx)(n.a,{href:"https://metrobundler.dev/docs/configuration/#blocklist",children:(0,i.jsx)(n.code,{children:"resolver.blockList"})}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'module.exports = {\n  resolver: {\n    extraNodeModules: {\n      "@fluentui-react-native/text":\n        "/~/my-project/node_modules/@fluentui-react-native/text",\n    },\n    blockList: [\n      /(?<!\\/~\\/my-project)\\/node_modules\\/@fluentui-react-native\\/text\\/.*/,\n    ],\n  },\n};\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You don't have to write these entries manually. We have helper functions in\n",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/rnx-kit/blob/main/packages/metro-config/README.md#ensuring-a-single-instance-of-a-package",children:(0,i.jsx)(n.code,{children:"@rnx-kit/metro-config"})})," for generating them dynamically."]}),"\n",(0,i.jsx)(n.h3,{id:"last-resort-force-resolution",children:"Last Resort: Force Resolution"}),"\n",(0,i.jsx)(n.p,{children:"As a last resort, if everything else fails, you can manually override package\nresolutions. We don't recommend this solution because it forces a single version\nin all workspaces. For example, if you have two projects that have nothing to do\nwith each other, they will both be forced to use the same version even though\nthey could be using different versions. It also adds maintenance overhead\nbecause you will have to manually update the version as dependees update theirs."}),"\n",(0,i.jsx)(n.p,{children:"If you've decided that you have no other options, you can find the appropriate\ndocumentation for your package manager below:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Yarn:"})," ",(0,i.jsx)(n.a,{href:"https://yarnpkg.com/configuration/manifest#resolutions",children:"https://yarnpkg.com/configuration/manifest#resolutions"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"npm:"})," ",(0,i.jsx)(n.a,{href:"https://docs.npmjs.com/cli/v10/configuring-npm/package-json#overrides",children:"https://docs.npmjs.com/cli/v10/configuring-npm/package-json#overrides"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"pnpm:"})," ",(0,i.jsx)(n.a,{href:"https://pnpm.io/package_json#pnpmoverrides",children:"https://pnpm.io/package_json#pnpmoverrides"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);