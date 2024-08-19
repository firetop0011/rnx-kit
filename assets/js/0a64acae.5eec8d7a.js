"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[2261],{4212:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var d=n(5893),t=n(1151);const r={},s="config",c={id:"tools/config",title:"config",description:"Query for a package's configuration.",source:"@site/docs/tools/config.md",sourceDirName:"tools",slug:"/tools/config",permalink:"/rnx-kit/docs/tools/config",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/config.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"cli",permalink:"/rnx-kit/docs/tools/cli"},next:{title:"console",permalink:"/rnx-kit/docs/tools/console"}},l={},o=[{value:"Schema",id:"schema",level:2},{value:"<code>KitConfig</code>",id:"kitconfig",level:3},{value:"<code>BundleConfig</code> inherits <code>BundleParameters</code>",id:"bundleconfig-inherits-bundleparameters",level:3},{value:"<code>AllPlatforms</code>",id:"allplatforms",level:3},{value:"<code>BundleParameters</code>",id:"bundleparameters",level:3},{value:"<code>CyclicDetectorOptions</code>",id:"cyclicdetectoroptions",level:3},{value:"<code>DuplicateDetectorOptions</code>",id:"duplicatedetectoroptions",level:3},{value:"<code>TypeScriptValidationOptions</code>",id:"typescriptvalidationoptions",level:3},{value:"<code>ServerConfig</code>",id:"serverconfig",level:3},{value:"API",id:"api",level:2},{value:"<code>getKitConfig({module, cwd})</code>",id:"getkitconfigmodule-cwd",level:3},{value:"<code>getBundleConfig(config, id)</code>",id:"getbundleconfigconfig-id",level:3},{value:"<code>getPlatformBundleConfig(bundle, platform)</code>",id:"getplatformbundleconfigbundle-platform",level:3},{value:"<code>getKitCapabilities(config)</code>",id:"getkitcapabilitiesconfig",level:3},{value:"<code>KitCapabilities</code>",id:"kitcapabilities",level:4}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.header,{children:(0,d.jsx)(i.h1,{id:"config",children:"config"})}),"\n",(0,d.jsx)(i.p,{children:"Query for a package's configuration."}),"\n",(0,d.jsx)(i.p,{children:"Configuration influences how the CLI behaves. If you're not using the CLI, and\ninstead using a specific tool programmatically, you can use this library to read\nconfiguration data and use it as tool input."}),"\n",(0,d.jsx)(i.h2,{id:"schema",children:"Schema"}),"\n",(0,d.jsxs)(i.p,{children:["Package configuration is under the top-level ",(0,d.jsx)(i.code,{children:"rnx-kit"})," entry in package.json. It\nis of type ",(0,d.jsx)(i.code,{children:"KitConfig"}),"."]}),"\n",(0,d.jsx)(i.h3,{id:"kitconfig",children:(0,d.jsx)(i.code,{children:"KitConfig"})}),"\n",(0,d.jsx)(i.p,{children:"Configuration information for an rnx-kit package. This is retrieved from\n'rnx-kit' in package.json."}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Name"}),(0,d.jsx)(i.th,{children:"Type"}),(0,d.jsx)(i.th,{children:"Description"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"kitType"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:'"app" | "library" | undefined'})}),(0,d.jsxs)(i.td,{children:["Library or App package. Used by the dependency manager when projecting capabilities into ",(0,d.jsx)(i.code,{children:"dependencies"}),", ",(0,d.jsx)(i.code,{children:"devDependencies"}),", and ",(0,d.jsx)(i.code,{children:"peerDependencies"}),". Library package dependencies are private, in dev and peer. App package dependencies are public."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"reactNativeVersion"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string | undefined"})}),(0,d.jsx)(i.td,{children:"React Native version (or range) which this package supports."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"reactNativeDevVersion"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string | undefined"})}),(0,d.jsxs)(i.td,{children:["React Native version to use during development of this package. If not specified, the minimum ",(0,d.jsx)(i.code,{children:"reactNativeVersion"})," is used."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"bundle"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"BundleConfig | BundleConfig[] | undefined"})}),(0,d.jsx)(i.td,{children:"Specifies how the package is bundled."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"server"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"ServerConfig | undefined"})}),(0,d.jsx)(i.td,{children:"Specifies how the package's bundle server is configured."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"capabilities"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"Capability[] | undefined"})}),(0,d.jsxs)(i.td,{children:["List of ",(0,d.jsx)(i.a,{href:"https://github.com/microsoft/rnx-kit/tree/main/packages/dep-check#capabilities",children:"capabilities"})," that this package needs. A capability is a well-known name (string)."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"customProfiles"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string | undefined"})}),(0,d.jsxs)(i.td,{children:["Path to a file containing ",(0,d.jsx)(i.a,{href:"https://github.com/microsoft/rnx-kit/tree/main/packages/dep-check#custom-profiles",children:"custom profiles"}),"."]})]})]})]}),"\n",(0,d.jsxs)(i.h3,{id:"bundleconfig-inherits-bundleparameters",children:[(0,d.jsx)(i.code,{children:"BundleConfig"})," inherits ",(0,d.jsx)(i.code,{children:"BundleParameters"})]}),"\n",(0,d.jsx)(i.p,{children:"Defines how a package is bundled. Includes shared bundling parameters with\nplatform-specific overrides."}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Name"}),(0,d.jsx)(i.th,{children:"Type"}),(0,d.jsx)(i.th,{children:"Description"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"id"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string | undefined"})}),(0,d.jsx)(i.td,{children:"Unique identifier for this bundle definition. Only used as a reference within the build system."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"targets"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"AllPlatforms[] | undefined"})}),(0,d.jsx)(i.td,{children:"The platform(s) for which this package may be bundled."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"platforms"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"Record<AllPlatforms, BundleDefinition> | undefined"})}),(0,d.jsx)(i.td,{children:"Platform-specific overrides for bundling parameters. Any parameter not listed in an override gets its value from the shared bundle definition, or falls back to defaults."})]})]})]}),"\n",(0,d.jsx)(i.h3,{id:"allplatforms",children:(0,d.jsx)(i.code,{children:"AllPlatforms"})}),"\n",(0,d.jsx)(i.p,{children:'Union of: "ios", "android", "windows", "win32", "macos"'}),"\n",(0,d.jsx)(i.h3,{id:"bundleparameters",children:(0,d.jsx)(i.code,{children:"BundleParameters"})}),"\n",(0,d.jsx)(i.p,{children:"Parameters controlling how a bundle is constructed."}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Name"}),(0,d.jsx)(i.th,{children:"Type"}),(0,d.jsx)(i.th,{children:"Description"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"entryFile"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string | undefined"})}),(0,d.jsx)(i.td,{children:"Path to the .js file which is the entry-point for building the bundle. Either absolute, or relative to the package."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"bundleOutput"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string | undefined"})}),(0,d.jsx)(i.td,{children:"Path to the output bundle file. Either absolute or relative to the package."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"bundleEncoding"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string | undefined"})}),(0,d.jsxs)(i.td,{children:[(0,d.jsx)(i.a,{href:"https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings",children:"Encoding scheme"})," to use when writing the bundle file. Currently limited to UTF-8, UTF-16 (little endian), and 7-bit ASCII."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"sourcemapOutput"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string | undefined"})}),(0,d.jsx)(i.td,{children:"Path to use when creating the bundle source map file. Either absolute, or relative to the package."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"sourcemapSourcesRoot"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string | undefined"})}),(0,d.jsx)(i.td,{children:"Path to the package's source files. Used to make source-map paths relative and therefore portable."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"sourcemapUseAbsolutePath"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"boolean | undefined"})}),(0,d.jsx)(i.td,{children:"Controls whether or not SourceMapURL is reported as a full path or just a file name."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"assetsDest"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string | undefined"})}),(0,d.jsx)(i.td,{children:"Path where all bundle assets (strings, images, fonts, sounds, ...) are written. Either absolute, or relative to the package."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"indexedBundleFormat"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"boolean | undefined"})}),(0,d.jsxs)(i.td,{children:['Force the "Indexed RAM" bundle file format, even when targeting Android. Only applies to the ',(0,d.jsx)(i.code,{children:"rnx-ram-bundle"})," command."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"plugins"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"(string | [string, any])[]"})}),(0,d.jsxs)(i.td,{children:["List of plugins to apply. If unset, it falls back to ",(0,d.jsx)(i.code,{children:'["@rnx-kit/metro-plugin-cyclic-dependencies-detector", "@rnx-kit/metro-plugin-duplicates-checker", "@rnx-kit/metro-plugin-typescript"]'}),"."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"treeShake"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"boolean | undefined"})}),(0,d.jsx)(i.td,{children:"Choose whether to enable tree shaking."})]})]})]}),"\n",(0,d.jsx)(i.h3,{id:"cyclicdetectoroptions",children:(0,d.jsx)(i.code,{children:"CyclicDetectorOptions"})}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Name"}),(0,d.jsx)(i.th,{children:"Type"}),(0,d.jsx)(i.th,{children:"Default"}),(0,d.jsx)(i.th,{children:"Description"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"includeNodeModules"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"boolean | undefined"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"false"})}),(0,d.jsx)(i.td,{children:"When scanning for circular dependencies, include all external packages from node_modules."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"linesOfContext"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"number | undefined"})}),(0,d.jsx)(i.td,{children:"1"}),(0,d.jsx)(i.td,{children:"When a cycle is detected, this controls the size of the module backtrace that is printed with the error message."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"throwOnError"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"boolean | undefined"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"true"})}),(0,d.jsx)(i.td,{children:"Whether or not to throw an exception when a cycle is detected."})]})]})]}),"\n",(0,d.jsx)(i.h3,{id:"duplicatedetectoroptions",children:(0,d.jsx)(i.code,{children:"DuplicateDetectorOptions"})}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Name"}),(0,d.jsx)(i.th,{children:"Type"}),(0,d.jsx)(i.th,{children:"Default"}),(0,d.jsx)(i.th,{children:"Description"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"ignoredModules"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string[] | undefined"})}),(0,d.jsx)(i.td,{}),(0,d.jsx)(i.td,{children:"List of modules to ignore when scanning for duplicate dependencies."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"bannedModules"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string[] | undefined"})}),(0,d.jsx)(i.td,{}),(0,d.jsx)(i.td,{children:"List of modules that always cause a failure, regardless of whether or not they are duplicated."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"throwOnError"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"boolean | undefined"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"true"})}),(0,d.jsx)(i.td,{children:"Whether or not to throw an exception when a duplicate or banned module is detected."})]})]})]}),"\n",(0,d.jsx)(i.h3,{id:"typescriptvalidationoptions",children:(0,d.jsx)(i.code,{children:"TypeScriptValidationOptions"})}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Name"}),(0,d.jsx)(i.th,{children:"Type"}),(0,d.jsx)(i.th,{children:"Default"}),(0,d.jsx)(i.th,{children:"Description"})]})}),(0,d.jsx)(i.tbody,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"throwOnError"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"boolean | undefined"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"true"})}),(0,d.jsx)(i.td,{children:"Controls whether an error is thrown when type-validation fails."})]})})]}),"\n",(0,d.jsx)(i.h3,{id:"serverconfig",children:(0,d.jsx)(i.code,{children:"ServerConfig"})}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Name"}),(0,d.jsx)(i.th,{children:"Type"}),(0,d.jsx)(i.th,{children:"Description"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"projectRoot"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string | undefined"})}),(0,d.jsx)(i.td,{children:"Path to the root of your react-native application. The bundle server uses this root path to resolve all web requests. The root path should contain your Babel config, otherwise Metro won't be able to find it. Either absolute, or relative to the package."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"assetPlugins"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string[] | undefined"})}),(0,d.jsx)(i.td,{children:"Additional asset plugins to be used by the Metro Babel transformer. Comma-separated list containing plugin modules and/or absolute paths to plugin packages."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"sourceExts"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string[] | undefined"})}),(0,d.jsx)(i.td,{children:"Additional source-file extensions to include when generating bundles. Comma-separated list, excluding the leading dot."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"plugins"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"(string | [string, any])[]"})}),(0,d.jsxs)(i.td,{children:["List of plugins to apply. If unset, it falls back to ",(0,d.jsx)(i.code,{children:'["@rnx-kit/metro-plugin-cyclic-dependencies-detector", "@rnx-kit/metro-plugin-duplicates-checker", "@rnx-kit/metro-plugin-typescript"]'}),"."]})]})]})]}),"\n",(0,d.jsx)(i.h2,{id:"api",children:"API"}),"\n",(0,d.jsx)(i.h3,{id:"getkitconfigmodule-cwd",children:(0,d.jsx)(i.code,{children:"getKitConfig({module, cwd})"})}),"\n",(0,d.jsx)(i.p,{children:"Query for a package's rnx-kit configuration."}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Parameter"}),(0,d.jsx)(i.th,{children:"Type"}),(0,d.jsx)(i.th,{children:"Description"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"module"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string | undefined"})}),(0,d.jsxs)(i.td,{children:["Read package configuration from the named module. When given, this takes precedence over ",(0,d.jsx)(i.code,{children:"cwd"}),"."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"cwd"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string | undefined"})}),(0,d.jsxs)(i.td,{children:["Read package configuration from the given directory. Ignored when ",(0,d.jsx)(i.code,{children:"module"})," is given."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"[Return]"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"KitConfig | null"})}),(0,d.jsxs)(i.td,{children:["Package configuration, or ",(0,d.jsx)(i.code,{children:"null"})," if nothing was found."]})]})]})]}),"\n",(0,d.jsx)(i.h3,{id:"getbundleconfigconfig-id",children:(0,d.jsx)(i.code,{children:"getBundleConfig(config, id)"})}),"\n",(0,d.jsx)(i.p,{children:"Get a bundle configuration from the rnx-kit configuration."}),"\n",(0,d.jsx)(i.p,{children:"If an id is given, search for the matching bundle definition. Otherwise, use the\nfirst bundle definition."}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Parameter"}),(0,d.jsx)(i.th,{children:"Type"}),(0,d.jsx)(i.th,{children:"Description"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"config"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"KitConfig"})}),(0,d.jsx)(i.td,{children:"The package's rnx-kit configuration"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"id"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string | undefined"})}),(0,d.jsx)(i.td,{children:"Optional identity of the target bundle configuration"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"[Return]"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"BundleDefinition"})}),(0,d.jsxs)(i.td,{children:["Bundle configuration, or ",(0,d.jsx)(i.code,{children:"undefined"})," if nothing was found"]})]})]})]}),"\n",(0,d.jsx)(i.h3,{id:"getplatformbundleconfigbundle-platform",children:(0,d.jsx)(i.code,{children:"getPlatformBundleConfig(bundle, platform)"})}),"\n",(0,d.jsx)(i.p,{children:"Resolves the platform selector for a bundle configuration."}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Parameter"}),(0,d.jsx)(i.th,{children:"Type"}),(0,d.jsx)(i.th,{children:"Description"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"bundle"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"BundleConfig"})}),(0,d.jsx)(i.td,{children:"Bundle config to resolve (includes the optional platform selectors)"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"platform"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"AllPlatforms"})}),(0,d.jsx)(i.td,{children:"Target platform"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"[Return]"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"BundleDefinition"})}),(0,d.jsx)(i.td,{children:"Bundle config containing platform-specific overrides"})]})]})]}),"\n",(0,d.jsx)(i.h3,{id:"getkitcapabilitiesconfig",children:(0,d.jsx)(i.code,{children:"getKitCapabilities(config)"})}),"\n",(0,d.jsx)(i.p,{children:"Get capability information from the package configuration."}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Parameter"}),(0,d.jsx)(i.th,{children:"Type"}),(0,d.jsx)(i.th,{children:"Description"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"config"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"KitConfig"})}),(0,d.jsx)(i.td,{children:"Package configuration."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"[Return]"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"KitCapabilities"})}),(0,d.jsx)(i.td,{children:"Capability information."})]})]})]}),"\n",(0,d.jsx)(i.h4,{id:"kitcapabilities",children:(0,d.jsx)(i.code,{children:"KitCapabilities"})}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Name"}),(0,d.jsx)(i.th,{children:"Type"}),(0,d.jsx)(i.th,{children:"Default"}),(0,d.jsx)(i.th,{children:"Description"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"kitType"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:'"app" | "library" | undefined'})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:'"library"'})}),(0,d.jsxs)(i.td,{children:["Library or App package. Used by the dependency manager when projecting capabilities into ",(0,d.jsx)(i.code,{children:"dependencies"}),", ",(0,d.jsx)(i.code,{children:"devDependencies"}),", and ",(0,d.jsx)(i.code,{children:"peerDependencies"}),". Library package dependencies are private, in dev and peer. App package dependencies are public."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"reactNativeVersion"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string"})}),(0,d.jsx)(i.td,{}),(0,d.jsx)(i.td,{children:"React Native version (or range) which this package supports."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"reactNativeDevVersion"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string "})}),(0,d.jsxs)(i.td,{children:["Min version in ",(0,d.jsx)(i.code,{children:"reactNativeVersion"})]}),(0,d.jsxs)(i.td,{children:["React Native version to use during development of this package. If not specified, the minimum ",(0,d.jsx)(i.code,{children:"reactNativeVersion"})," is used."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"capabilities"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"Capability[]"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"[]"})}),(0,d.jsxs)(i.td,{children:["List of ",(0,d.jsx)(i.a,{href:"https://github.com/microsoft/rnx-kit/tree/main/packages/dep-check#capabilities",children:"capabilities"})," that this package needs. A capability is a well-known name (string)."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"customProfiles"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"string | undefined"})}),(0,d.jsx)(i.td,{}),(0,d.jsxs)(i.td,{children:["Path to a file containing ",(0,d.jsx)(i.a,{href:"https://github.com/microsoft/rnx-kit/tree/main/packages/dep-check#custom-profiles",children:"custom profiles"}),"."]})]})]})]})]})}function a(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>s});var d=n(7294);const t={},r=d.createContext(t);function s(e){const i=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),d.createElement(r.Provider,{value:i},e.children)}}}]);