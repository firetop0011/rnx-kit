"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[141],{8894:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=t(4848),s=t(8453);const a={},r="Dependency Management",c={id:"architecture/dependency-management",title:"Dependency Management",description:"dep-check was recently renamed to align-deps to avoid name clashes and",source:"@site/docs/architecture/dependency-management.md",sourceDirName:"architecture",slug:"/architecture/dependency-management",permalink:"/rnx-kit/docs/architecture/dependency-management",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/architecture/dependency-management.md",tags:[],version:"current",frontMatter:{},sidebar:"architectureSidebar",previous:{title:"Architecture Overview",permalink:"/rnx-kit/docs/architecture/overview"}},o={},l=[{value:"Terminology",id:"terminology",level:2},{value:"Motivation",id:"motivation",level:2},{value:"1. Which packages should I use?",id:"1-which-packages-should-i-use",level:3},{value:"2. How do I align all of my code on the same set of packages and versions?",id:"2-how-do-i-align-all-of-my-code-on-the-same-set-of-packages-and-versions",level:3},{value:"3. How do I align all apps on the same set of packages and versions?",id:"3-how-do-i-align-all-apps-on-the-same-set-of-packages-and-versions",level:3},{value:"Design",id:"design",level:2},{value:"Capabilities",id:"capabilities",level:3},{value:"Profiles",id:"profiles",level:3},{value:"Putting it all together",id:"putting-it-all-together",level:3},{value:"Zero-config",id:"zero-config",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Alternatives",id:"alternatives",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"dependency-management",children:"Dependency Management"})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"dep-check"})," was recently renamed to ",(0,i.jsx)(n.code,{children:"align-deps"})," to avoid name clashes and\ngeneral confusion. Unless noted otherwise, this document is still valid."]}),(0,i.jsxs)(n.p,{children:["You can read more about the changes in this RFC:\n",(0,i.jsxs)(n.a,{href:"https://github.com/microsoft/rnx-kit/blob/rfcs/text/0001-dep-check-v2.md",children:[(0,i.jsx)(n.code,{children:"dep-check"})," v2"]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"../tools/align-deps",children:"dep-check"})," is a dependency manager and linter that aims to\nbring alignment to all React Native developers who are working in any-size\nrepositories, from small self-contained repositories to big, enterprise\nmonorepos."]}),"\n",(0,i.jsx)(n.h2,{id:"terminology",children:"Terminology"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"experience"})," \u2014 As opposed to apps that get shipped in e.g. App Store or Play\nStore, experiences may be a single screen (or multiple) integrated into an\napp. They are normally not shipped as standalone apps."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"monorepo"})," \u2014 A single repository in which many projects live. These can\nrange from single-purpose libraries to experiences or full-fledged apps. For\ninstance, ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/rnx-kit",children:"https://github.com/microsoft/rnx-kit"})," is a monorepo containing many\nuseful tools, including ",(0,i.jsx)(n.code,{children:"dep-check"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,i.jsxs)(n.p,{children:["The design of ",(0,i.jsx)(n.code,{children:"dep-check"})," is driven mainly by the following questions:"]}),"\n",(0,i.jsx)(n.h3,{id:"1-which-packages-should-i-use",children:"1. Which packages should I use?"}),"\n",(0,i.jsx)(n.p,{children:"There is currently no centralized place where developers can go to and get a\nlist of recommended modules, and which versions they should be using when\ntargeting a specific version of React Native. How do you know whether a module\nis still maintained? Are the maintainers still around to review PRs? Is the\nmodule being used by others?"}),"\n",(0,i.jsxs)(n.p,{children:["Take ",(0,i.jsx)(n.code,{children:"AsyncStorage"})," as an example. This is a module that used to ship with React\nNative. It then got moved out to the React Native Community organization as\n",(0,i.jsx)(n.code,{children:"@react-native-community/async-storage"})," as part of the Lean Core effort. It\nlater got ejected from React Native Community, and was renamed\n",(0,i.jsx)(n.code,{children:"@react-native-async-storage/async-storage"}),". If you don't know the full story of\nwhat happened here, there is little chance you know that ",(0,i.jsx)(n.code,{children:"AsyncStorage"})," from\ncore, ",(0,i.jsx)(n.code,{children:"@react-native-community/async-storage"}),", and\n",(0,i.jsx)(n.code,{children:"@react-native-async-storage/async-storage"})," are all the same module. Or that\n",(0,i.jsx)(n.code,{children:"@react-native-community/netinfo"})," was a fork of ",(0,i.jsx)(n.code,{children:"react-native-netinfo"}),' that\nlater became the "official" one.']}),"\n",(0,i.jsx)(n.h3,{id:"2-how-do-i-align-all-of-my-code-on-the-same-set-of-packages-and-versions",children:"2. How do I align all of my code on the same set of packages and versions?"}),"\n",(0,i.jsxs)(n.p,{children:["Ideally, all apps are always on the latest version of ",(0,i.jsx)(n.code,{children:"react-native"})," and are\nusing a common set of well maintained community modules. Unfortunately, the\nreality is that some apps are on a two year old version of ",(0,i.jsx)(n.code,{children:"react-native"})," and\nsome modules that are no longer maintained, while others are on a somewhat\nrecent version of ",(0,i.jsx)(n.code,{children:"react-native"})," but on an older version of WebView than what\nothers use. When you're responsible for an experience that goes into many apps,\nyou may be forced to provide support for both scenarios (and others), and that's\nwhere most feel the pain. How can you make sure that your experiences'\ndependencies play well with each other or even other experiences? The pain is\nmagnified in a monorepo with many developers as breakages can come from a single\npackage being out of sync with the others. Breakages caused by such packages are\nhard to debug and pinpoint the cause. In a monorepo, it is very important to\nensure that all packages are on the same versions."]}),"\n",(0,i.jsx)(n.h3,{id:"3-how-do-i-align-all-apps-on-the-same-set-of-packages-and-versions",children:"3. How do I align all apps on the same set of packages and versions?"}),"\n",(0,i.jsx)(n.p,{children:"When integrating multiple experiences into an existing app, it can sometimes be\ndifficult to determine the dependencies that need to be installed. For example,\ngiven two experiences with dependencies as below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "experience-A",\n  "version": "1.0.0",\n  "peerDependencies": {\n    "react-native": "^0.63 || ^0.64",\n    "react-native-netinfo": "^5.7.1 || ^6.0.0"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "experience-B",\n  "version": "1.0.0",\n  "peerDependencies": {\n    "react-native": "^0.63",\n    "react-native-netinfo": "^5.7.1 || ^6.0.0"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, it's not so hard to see that the integrating app should be\nusing ",(0,i.jsx)(n.code,{children:"react-native"})," 0.63 and ",(0,i.jsx)(n.code,{children:"react-native-netinfo"})," 6.0.0. However, imagine\nthat there are multiple experiences and many more dependencies. It's not hard to\nsee that it can quickly become very messy to go through all of them and make\nsure that the app's ",(0,i.jsx)(n.code,{children:"package.json"})," satisfies all of them, and without causing\nany conflicts. And you'll have to do this every time one or more packages get\nupdated. Not all experiences will be declaring their dependencies correctly,\ne.g. putting ",(0,i.jsx)(n.code,{children:"react-native-netinfo"})," under ",(0,i.jsx)(n.code,{children:"dependencies"})," and causing multiple\nversions of ",(0,i.jsx)(n.code,{children:"react-native-netinfo"})," to be bundled. When it is time to update\nReact Native to the latest version, can you do that and still be confident that\nall your modules will still work?"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@rnx-kit/dep-check"})," works by reading a configuration, and suggests changes that\nneed to be made. It can optionally also write said changes to the\n",(0,i.jsx)(n.code,{children:"package.json"}),". The configuration must be manually written by the package owner.\nIt declares which React Native versions the package supports, and which\ncapabilities it requires. For instance, lets say we have a library,\n",(0,i.jsx)(n.code,{children:"awesome-library"}),", which supports React Native versions 0.63 and 0.64, and needs\nsomething that provides network information. We would declare the following in\nour ",(0,i.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "name": "awesome-library",\n  "version": "1.0.0",\n  ...\n  "rnx-kit": {\n    "reactNativeVersion": "^0.63 || ^0.64",\n    "capabilities": [\n      "core-android",\n      "core-ios",\n      "netinfo"\n    ]\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If we run ",(0,i.jsx)(n.code,{children:"@rnx-kit/dep-check"})," now, it will suggest that we change\n",(0,i.jsx)(n.code,{children:"peerDependencies"})," and ",(0,i.jsx)(n.code,{children:"devDependencies"})," to the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "name": "awesome-library",\n  "version": "1.0.0",\n  ...\n  "peerDependencies": {\n    "@react-native-community/netinfo": "^5.7.1 || ^6.0.0",\n    "react-native": "^0.63.2 || ^0.64.1"\n  },\n  "devDependencies": {\n    "@react-native-community/netinfo": "^5.7.1",\n    "react-native": "^0.63.2"\n  },\n  "rnx-kit": {\n    "reactNativeVersion": "^0.63 || ^0.64",\n    "capabilities": [\n      "core-android",\n      "core-ios",\n      "netinfo"\n    ]\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Now our ",(0,i.jsx)(n.code,{children:"package.json"})," correctly declares that it supports React Native 0.63 and\n0.64 to consumers. It also added ",(0,i.jsx)(n.code,{children:"@react-native-community/netinfo"}),", a package\nthat provides network information. At the same time, it also sets the versions\nwe'll need during development."]}),"\n",(0,i.jsxs)(n.p,{children:["For apps that use ",(0,i.jsx)(n.code,{children:"@rnx-kit/dep-check"}),", the process is similar but you'll also\nneed to declare that the package is an app by adding ",(0,i.jsx)(n.code,{children:'"kitType": "app"'}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "name": "awesome-app",\n  "version": "1.0.0",\n  ...\n  "dependencies": {\n    "@react-native-community/netinfo": "^6.0.0",\n    "awesome-library": "1.0.0",\n    "react-native": "^0.64.1"\n  },\n  "rnx-kit": {\n    "reactNativeVersion": "^0.64",\n    "kitType": "app",\n    "capabilities": [\n      "core-android",\n      "core-ios"\n    ]\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Now, we see that ",(0,i.jsx)(n.code,{children:"@rnx-kit/dep-check"})," added ",(0,i.jsx)(n.code,{children:"@react-native-community/netinfo"}),"\neven though it wasn't declared in capabilities. This is because when a package\nis an app, it needs to fulfill the requirements of its dependencies. In this\nexample, because ",(0,i.jsx)(n.code,{children:"awesome-library"})," needs the ",(0,i.jsx)(n.code,{children:"netinfo"})," capability, it gets added\nto ",(0,i.jsx)(n.code,{children:"awesome-app"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"design",children:"Design"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"dep-check"})," attempts to solve these issues by aligning users on a centralized\nrepository of dependencies. Initially, the repository will be seeded with\npopular packages, but the goal for it is to become crowd-sourced so that we all\ncan benefit from the latest fixes and features without all having to be\nup-to-date on everything that goes within the React Native community."]}),"\n",(0,i.jsx)(n.h3,{id:"capabilities",children:"Capabilities"}),"\n",(0,i.jsxs)(n.p,{children:["Modules usually provide one or more features. For instance,\n",(0,i.jsx)(n.code,{children:"@react-native-async-storage/async-storage"})," provides a simple key-value storage,\n",(0,i.jsx)(n.code,{children:"react-native-webview"})," provides a web view component, and so on. Knowing which\nmodules are providing the desired features can be tricky. With ",(0,i.jsx)(n.code,{children:"dep-check"}),", we\npropose the use of generic names, or capabilities as we call them, that map\ndirectly to a package:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Capability"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Package"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"netinfo"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Device network information"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"@react-native-community/netinfo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"storage"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Key-value storage"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"@react-native-async-storage/async-storage"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"webview"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"WebView component"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"react-native-webview"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"dep-check"})," also defines a set of ",(0,i.jsx)(n.strong,{children:"core"})," capabilities. These are capabilities\nthat provide platform support, and are currently defined in the below table:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Capability"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Platform"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Package"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"core-android"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Android"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"react-native"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"core-ios"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"iOS"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"react-native"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"core-macos"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"macOS"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"react-native-macos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"core-visionos"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"visionOS"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"@callstack/react-native-visionos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"core-windows"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Windows"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"react-native-windows"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"With generic names, we are more resilient against module renames since we can\nrecommend the old name in one version, and the new name in the next. We could\neven provide a fork with security fixes or backwards compatibility shims for\nlong term support. We will see how this can be achieved with profiles in the\nnext section."}),"\n",(0,i.jsx)(n.h3,{id:"profiles",children:"Profiles"}),"\n",(0,i.jsxs)(n.p,{children:["We cannot force everyone to be on the latest version of ",(0,i.jsx)(n.code,{children:"react-native"}),".\nSometimes it's not desirable, e.g. due to bugs, or feasible due to constraints\nor lack of expertise. What we can do, however, is to try lessen the pain of\nsupporting multiple versions of ",(0,i.jsx)(n.code,{children:"react-native"})," and community modules. To that\nend, ",(0,i.jsx)(n.code,{children:"dep-check"})," introduces the concept of profiles. A profile is a single set\nof all capability to package@version mappings, usually tied to a single version\nof ",(0,i.jsx)(n.code,{children:"react-native"}),". For instance, the following table is a partial profile for\n",(0,i.jsx)(n.code,{children:"react-native"})," 0.63\n(",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/rnx-kit/blob/769e9fa290929effd5111884f1637c21326b5a95/packages/dep-check/src/profiles/profile-0.63.ts#L9",children:"full listing here"}),"):"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Capability"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Package"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"core-android"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"react-native@^0.63.2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"core-ios"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"react-native@^0.63.2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"core-macos"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"react-native-macos@^0.63.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"core-windows"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"react-native-windows@^0.63.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"netinfo"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"@react-native-community/netinfo@^5.7.1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"react"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"react@16.13.1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"storage"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"@react-native-community/async-storage@^1.12.1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"webview"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"react-native-webview@^11.4.2"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Here's the partial profile for react-native 0.64\n(",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/rnx-kit/blob/769e9fa290929effd5111884f1637c21326b5a95/packages/dep-check/src/profiles/profile-0.64.ts#L8",children:"full listing here"}),"):"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Capability"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Package"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"core-android"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"react-native@^0.64.2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"core-ios"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"react-native@^0.64.2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"core-macos"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"react-native-macos@^0.64.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"core-windows"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"react-native-windows@^0.64.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"netinfo"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"@react-native-community/netinfo@^6.0.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"react"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"react@17.0.1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"storage"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"@react-native-async-storage/async-storage@^1.15.3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"webview"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"react-native-webview@^11.4.2"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["A package declares what capabilities it requires, which versions of\n",(0,i.jsx)(n.code,{children:"react-native"})," it supports, and ",(0,i.jsx)(n.code,{children:"dep-check"})," will populate the package's\n",(0,i.jsx)(n.code,{children:"package.json"})," with the modules and versions that it should use. For instance,\nif a package that supports ",(0,i.jsx)(n.code,{children:"react-native"})," 0.63 requires ",(0,i.jsx)(n.code,{children:"core-ios"}),", ",(0,i.jsx)(n.code,{children:"netinfo"}),",\nand ",(0,i.jsx)(n.code,{children:"react"}),", ",(0,i.jsx)(n.code,{children:"dep-check"})," will add ",(0,i.jsx)(n.code,{children:"react-native@^0.63.2"}),",\n",(0,i.jsx)(n.code,{children:"@react-native-community/netinfo@^5.7.1"}),", and ",(0,i.jsx)(n.code,{children:"react@16.13.1"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When the package is migrated from one profile version to the next, the author\nshould be prompted to bump a few packages. For instance, besides bumping\n",(0,i.jsx)(n.code,{children:"react-native"}),", they also should bump ",(0,i.jsx)(n.code,{children:"react"})," to 17.0.1, and\n",(0,i.jsx)(n.code,{children:"@react-native-community/netinfo"})," to ^6.0.0. We also note that\n",(0,i.jsx)(n.code,{children:"@react-native-community/async-storage"})," was renamed to\n",(0,i.jsx)(n.code,{children:"@react-native-async-storage/async-storage"}),". While users are on older profiles,\nthey should be warned of upcoming, potentially breaking changes so they can be\nprepared."]}),"\n",(0,i.jsx)(n.p,{children:"Besides package renames, we can also recommend alternative modules that provide\nthe same capability, or forks that include security fixes or shims for backwards\ncompatibility where long term support is a concern."}),"\n",(0,i.jsx)(n.h3,{id:"putting-it-all-together",children:"Putting it all together"}),"\n",(0,i.jsxs)(n.p,{children:["Now that we know the basic concepts, let's take a look at how it works. We'll\nstart with configuring the examples from earlier. ",(0,i.jsx)(n.code,{children:"experience-A"})," depends on\n",(0,i.jsx)(n.code,{children:"react-native"})," and ",(0,i.jsx)(n.code,{children:"react-native-netinfo"}),". According to our list of\ncapabilities, they correspond to ",(0,i.jsx)(n.code,{children:"core-android"}),"/",(0,i.jsx)(n.code,{children:"core-ios"})," and ",(0,i.jsx)(n.code,{children:"netinfo"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:' {\n   "name": "experience-A",\n   "version": "1.0.0",\n   "peerDependencies": {\n     "react-native": "^0.63 || ^0.64",\n     "react-native-netinfo": "^5.7.1 || ^6.0.0"\n   },\n+  "rnx-kit": {\n+    "reactNativeVersion": "^0.63 || ^0.64",\n+    "capabilities": ["core-android", "core-ios", "netinfo"]\n+  }\n }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Likewise for ",(0,i.jsx)(n.code,{children:"experience-B"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:' {\n   "name": "experience-B",\n   "version": "1.0.0",\n   "peerDependencies": {\n     "react-native": "^0.63",\n     "react-native-netinfo": "^5.7.1 || ^6.0.0"\n   },\n+  "rnx-kit": {\n+    "reactNativeVersion": "^0.63",\n+    "capabilities": ["core-android", "core-ios", "netinfo"]\n+  }\n }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If we run ",(0,i.jsx)(n.code,{children:"dep-check"})," now, it will complain because ",(0,i.jsx)(n.code,{children:"experience-B"})," only needs to\nsupport ",(0,i.jsx)(n.code,{children:"react-native-netinfo"}),"@^5.7.1:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:' {\n   "name": "experience-B",\n   "version": "1.0.0",\n   "peerDependencies": {\n     "react-native": "^0.63",\n-    "react-native-netinfo": "^5.7.1 || ^6.0.0"\n+    "react-native-netinfo": "^5.7.1"\n   },\n   "rnx-kit": {\n     "reactNativeVersion": "^0.63",\n     "capabilities": ["core-android", "core-ios", "netinfo"]\n   }\n }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["We try to avoid breaking changes (major version bumps) within a single profile\nversion. That's why ",(0,i.jsx)(n.code,{children:"dep-check"})," will recommend 5.x only for ",(0,i.jsx)(n.code,{children:"react-native"})," 0.63."]}),"\n",(0,i.jsxs)(n.p,{children:["If we add ",(0,i.jsx)(n.code,{children:"webview"})," to capabilities now, ",(0,i.jsx)(n.code,{children:"dep-check"})," will ask you to add\n",(0,i.jsx)(n.code,{children:"react-native-webview"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:' {\n   "name": "experience-B",\n   "version": "1.0.0",\n   "peerDependencies": {\n     "react-native": "^0.63",\n     "react-native-netinfo": "^5.7.1",\n+    "react-native-webview": "^11.4.2"\n   },\n   "rnx-kit": {\n     "reactNativeVersion": "^0.63",\n     "capabilities": ["core-android", "core-ios", "netinfo", "webview"]\n   }\n }\n'})}),"\n",(0,i.jsx)(n.p,{children:"The user need not know what package to use, only the desired feature."}),"\n",(0,i.jsx)(n.p,{children:"Let's move on to configuring our app:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:' {\n   "name": "app",\n   "version": "1.0.0",\n   "dependencies": {\n     "experience-A": "^1.0.0",\n     "experience-B": "^1.0.0",\n     "react-native": "^0.63.2"\n   },\n+  "rnx-kit": {\n+    "reactNativeVersion": "^0.63",\n+    "kitType": "app",\n+    "capabilities": ["core-android", "core-ios"]\n+  }\n }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The first thing you should note here is that we need to declare that this is an\napp by setting ",(0,i.jsx)(n.code,{children:'"kitType": "app"'}),". This will tell ",(0,i.jsx)(n.code,{children:"dep-check"})," to also scan\ndependencies. By default, this is set to ",(0,i.jsx)(n.code,{children:"library"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Running ",(0,i.jsx)(n.code,{children:"dep-check"})," now, the first thing it does is to scan through all your\ndependencies and gather all required capabilities. ",(0,i.jsx)(n.code,{children:"dep-check"})," will then resolve\nall capabilities, and finally make sure the ",(0,i.jsx)(n.code,{children:"dependencies"})," section in\n",(0,i.jsx)(n.code,{children:"package.json"})," contains all the needed packages and at the correct versions. In\nour example, our list of capabilities will contain ",(0,i.jsx)(n.code,{children:'["netinfo", "webview"]'}),".\n",(0,i.jsx)(n.code,{children:"dep-check"})," sees that there are missing dependencies in your ",(0,i.jsx)(n.code,{children:"package.json"})," and\nwill output an error message telling you to add them:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:' {\n   "name": "app",\n   "version": "1.0.0",\n   "dependencies": {\n     "experience-A": "^1.0.0",\n     "experience-B": "^1.0.0",\n     "react-native": "^0.63.2",\n+    "react-native-netinfo": "^5.7.1",\n+    "react-native-webview": "^11.4.2"\n   },\n   "rnx-kit": {\n     "reactNativeVersion": "^0.63",\n     "capabilities": ["core-android", "core-ios"]\n   }\n }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Re-running the command with ",(0,i.jsx)(n.code,{children:"--write"})," will let ",(0,i.jsx)(n.code,{children:"dep-check"})," add them for you."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"dep-check"})," makes sure that your declared dependencies always matches your list\nof capabilities. It will make sure that your dependencies are declare in the\nright sections, i.e. under ",(0,i.jsx)(n.code,{children:"dependencies"})," if you're an app, and under\n",(0,i.jsx)(n.code,{children:"peerDependencies"})," if you're a library. It will also report partial ones,\nmeaning it will catch scenarios such as when you declare support for 0.63 and\n0.64, but are missing ",(0,i.jsx)(n.code,{children:"react-native-netinfo"}),"@^6.0.0."]}),"\n",(0,i.jsx)(n.h3,{id:"zero-config",children:"Zero-config"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"dep-check"})," is currently opt-in. Packages need to have a configuration that\n",(0,i.jsx)(n.code,{children:"dep-check"})," can run against. However, there is still a need to align packages\nacross repositories without having to configure all packages. ",(0,i.jsx)(n.code,{children:"dep-check"})," should\nstill be useful without a configuration."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--init"})," \u2014 When configuring a package, it can be cumbersome to know what\npackages map to what capabilities. ",(0,i.jsx)(n.code,{children:"--init"})," is a best-effort command that\nscans all your dependencies and adds a configuration with all the capabilities\nit thinks are required. You'll likely have to clean up the list, but at least\nyou won't have to start from scratch."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--vigilant"})," \u2014 Without configuring any packages, you can still benefit from\n",(0,i.jsx)(n.code,{children:"dep-check"})," with ",(0,i.jsx)(n.code,{children:"--vigilant"}),". This mode will scan all dependencies and make\nsure that their dependencies align with the specified profiles. For instance,\n",(0,i.jsx)(n.code,{children:"--vigilant 0.63,0.64"})," will compare dependencies against all known modules in\nprofile version 0.63 and 0.64."]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.code,{children:"align-deps"}),", we've changed the configuration schema to make it more generic\nand not tied to a specific dependency (i.e. ",(0,i.jsx)(n.code,{children:"react-native"}),"). The ",(0,i.jsx)(n.code,{children:"--vigilant"}),"\nflag had to be replaced as well. The equivalent of ",(0,i.jsx)(n.code,{children:"--vigilant 0.63,0.64"})," in the\nnew schema is ",(0,i.jsx)(n.code,{children:"--requirements 'react-native@0.63 || 0.64'"}),"."]}),(0,i.jsxs)(n.p,{children:["You can read more about the changes in this RFC:\n",(0,i.jsxs)(n.a,{href:"https://github.com/microsoft/rnx-kit/blob/rfcs/text/0001-dep-check-v2.md",children:[(0,i.jsx)(n.code,{children:"dep-check"})," v2"]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"extensions",children:"Extensions"}),"\n",(0,i.jsxs)(n.p,{children:["The list of capabilities may be limited for some usage scenarios. ",(0,i.jsx)(n.code,{children:"dep-check"}),"\ntherefore also allows users to specify additional profiles via configuration,\n",(0,i.jsx)(n.code,{children:"customProfiles"}),", or the equivalent flag, ",(0,i.jsx)(n.code,{children:"--custom-profiles"}),". The value can be\na path to a ",(0,i.jsx)(n.code,{children:".js"}),", ",(0,i.jsx)(n.code,{children:".json"}),", or module name, e.g.\n",(0,i.jsx)(n.code,{children:"my-custom-capability-resolver"}),", and must default export an object containing\nprofiles keyed by its version number. Example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'module.exports = {\n  "0.63": {\n    "my-capability": {\n      name: "my-module",\n      version: "1.0.0",\n    },\n  },\n  "0.64": {\n    "my-capability": {\n      name: "my-module",\n      version: "1.1.0",\n    },\n  },\n};\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The profiles are appended to the default ones and may override capabilities.\nThis format is explicitly chosen to be compatible with ",(0,i.jsx)(n.code,{children:"--vigilant"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.code,{children:"align-deps"}),", we've deprecated ",(0,i.jsx)(n.code,{children:"customProfiles"})," in favour of ",(0,i.jsx)(n.code,{children:"presets"}),". A\npreset is just a collection of profiles like in the example above. This new\nproperty allows you to specify multiple presets and/or replace the built-in\n",(0,i.jsx)(n.code,{children:"react-native"})," preset. The command line flag, ",(0,i.jsx)(n.code,{children:"--custom-profiles"}),", was replaced\nwith ",(0,i.jsx)(n.code,{children:"--presets"}),"."]}),(0,i.jsxs)(n.p,{children:["You can read more about the changes in this RFC:\n",(0,i.jsxs)(n.a,{href:"https://github.com/microsoft/rnx-kit/blob/rfcs/text/0001-dep-check-v2.md",children:[(0,i.jsx)(n.code,{children:"dep-check"})," v2"]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"alternatives",children:"Alternatives"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"peerDependencies"})," \u2014 What's the difference between ",(0,i.jsx)(n.code,{children:"dep-check"})," and just using\nthe ",(0,i.jsx)(n.code,{children:"peerDependencies"})," field in ",(0,i.jsx)(n.code,{children:"package.json"}),"?","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["JS package managers are inconsistent when it comes to installing peer\ndependencies. npm has been\n",(0,i.jsx)(n.a,{href:"https://blog.npmjs.org/post/110924823920/npm-weekly-5.html",children:"back"})," and\n",(0,i.jsx)(n.a,{href:"https://github.blog/2021-02-02-npm-7-is-now-generally-available/#peer-dependencies",children:"forth"}),"\non this. Yarn only emits warnings when they are unsatisfied. The only sure\nway to get them installed is ensure that the dependencies are added\nappropriately. However, people tend to ignore warnings in our experience."]}),"\n",(0,i.jsxs)(n.li,{children:["There is no central control over what gets added to ",(0,i.jsx)(n.code,{children:"peerDependencies"}),". One\npackage could add ",(0,i.jsx)(n.code,{children:"react-native-webview"}),"@^11.4.2, while another has\n",(0,i.jsx)(n.code,{children:"react-native-webview"}),"@^10.10.2. Or worse, they could be adding them under\n",(0,i.jsx)(n.code,{children:"dependencies"})," instead, potentially causing two copies to be bundled with\nyour app."]}),"\n",(0,i.jsxs)(n.li,{children:["Similarly, package managers don't care whether you're using\n",(0,i.jsx)(n.code,{children:"@react-native-community/netinfo"})," or ",(0,i.jsx)(n.code,{children:"react-native-netinfo"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/JamieMason/syncpack/",children:"syncpack"})," \u2014 syncpack is a tool to\nmanage dependencies within a monorepo. It has some overlap with ",(0,i.jsx)(n.code,{children:"dep-check"}),"\nbut doesn't cover everything we need. In particular:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It doesn't have a central repository of dependencies, so it cannot align\nmultiple repositories on the same packages and versions for the same set of\ncapabilities."}),"\n",(0,i.jsx)(n.li,{children:"From a cursory glance, it doesn't allow packages to support multiple\nversions of react-native."}),"\n",(0,i.jsx)(n.li,{children:"It supports version groups, which may be useful for some usage scenarios,\nbut are potentially dangerous within react-native repos."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(6540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);