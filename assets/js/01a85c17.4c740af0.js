"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[4013],{6013:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(808),r=a(7378),l=a(8944),c=a(2676),i=a(1884),s="sidebar_k3AJ",m="sidebarItemTitle_KLf2",o="sidebarItemList_y0e6",u="sidebarItem_hZwW",g="sidebarItemLink_RCuc",d="sidebarItemLinkActive_wdkZ",E=a(9213);function b(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,E.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),r.createElement("ul",{className:o},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var f=["sidebar","toc","children"];function v(e){var t=e.sidebar,a=e.toc,i=e.children,s=(0,n.Z)(e,f),m=t&&t.items.length>0;return r.createElement(c.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},m&&r.createElement("aside",{className:"col col--3"},r.createElement(b,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&r.createElement("div",{className:"col col--2"},a))))}},9794:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7378),r=a(6013),l=a(4823),c=a(1309),i="tag_ImVg";function s(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:i},n.createElement(l.Z,e))}))),n.createElement("hr",null))}function m(e){var t=e.tags,a=(0,c.PZ)(t);return n.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return n.createElement(s,{key:e.letter,letterEntry:e})})))}var o=a(1867),u=a(8944);function g(e){var t=e.tags,a=e.sidebar,l=(0,c.MA)();return n.createElement(c.FG,{className:(0,u.Z)(c.kM.wrapper.blogPages,c.kM.page.blogTagsListPage)},n.createElement(c.d,{title:l}),n.createElement(o.Z,{tag:"blog_tags_list"}),n.createElement(r.Z,{sidebar:a},n.createElement("h1",null,l),n.createElement(m,{tags:Object.values(t)})))}},4823:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7378),r=a(8944),l=a(1884),c="tag_VWGF",i="tagRegular_sIPu",s="tagWithCount_YgKf";function m(e){var t=e.permalink,a=e.name,m=e.count;return n.createElement(l.Z,{href:t,className:(0,r.Z)(c,m?s:i)},a,m&&n.createElement("span",null,m))}}}]);