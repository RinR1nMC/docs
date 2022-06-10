"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3840],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return a?r.createElement(g,i(i({ref:t},l),{},{components:a})):r.createElement(g,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9239:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],p={sidebar_label:"Grouping arenas",title:"How to group arenas",sidebar_position:2.4},u=void 0,s={unversionedId:"BedWars1058/setup/arena-groups",id:"BedWars1058/setup/arena-groups",title:"How to group arenas",description:"Why use a group?",source:"@site/docs/BedWars1058/setup/arena-groups.md",sourceDirName:"BedWars1058/setup",slug:"/BedWars1058/setup/arena-groups",permalink:"/docs/BedWars1058/setup/arena-groups",editUrl:"https://github.com/andrei1058/docs/edit/main/docs/BedWars1058/setup/arena-groups.md",tags:[],version:"current",lastUpdatedBy:"ajgeiss0702",lastUpdatedAt:1642279546,formattedLastUpdatedAt:"1/15/2022",sidebarPosition:2.4,frontMatter:{sidebar_label:"Grouping arenas",title:"How to group arenas",sidebar_position:2.4},sidebar:"bw1058",previous:{title:"Joining arenas",permalink:"/docs/BedWars1058/setup/how-to-join-arenas"},next:{title:"Commands and Permissions",permalink:"/docs/BedWars1058/configuration/permissions"}},l=[{value:"Why use a group?",id:"why-use-a-group",children:[],level:3},{value:"How to create an arena group",id:"how-to-create-an-arena-group",children:[],level:3},{value:"How to add an arena to a group",id:"how-to-add-an-arena-to-a-group",children:[],level:3},{value:"How to delete an arena group",id:"how-to-delete-an-arena-group",children:[],level:3},{value:"Video tutorial",id:"video-tutorial",children:[],level:3}],c={toc:l};function d(e){var t=e.components,p=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"why-use-a-group"},"Why use a group?"),(0,o.kt)("p",null,"You can group arenas by type, like solo, duals and 4v4 etc. Groups can have custom ",(0,o.kt)("a",{parentName:"p",href:"scoreboards-configuration"},"scoreboards"),", custom ",(0,o.kt)("a",{parentName:"p",href:"upgrades/upgrades-configuration"},"team upgrades"),", custom ",(0,o.kt)("a",{parentName:"p",href:"generators-configuration"},"generators"),". Let's suppose that you've just created a new arena with ",(0,o.kt)("inlineCode",{parentName:"p"},"max-in-team = 1"),". This means that it could be grouped as a ",(0,o.kt)("em",{parentName:"p"},'"Solo"')," arena. Players could want to play alone in a team and they will just search for an arena in the join gui with ",(0,o.kt)("em",{parentName:"p"},'"Solo"')," in its lore. Or they may click on a ",(0,o.kt)("a",{parentName:"p",href:"citizens-hook"},"join NPC")," called ",(0,o.kt)("em",{parentName:"p"},'"Solo"')," or maybe via command ",(0,o.kt)("inlineCode",{parentName:"p"},"/bw join Solo"),". An arena added to the ",(0,o.kt)("em",{parentName:"p"},'"Solo"')," group will show like this on ",(0,o.kt)("a",{parentName:"p",href:"how-to-join-arenas#join-gui"},"join GUI"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"new-gui",src:a(8641).Z})),(0,o.kt)("h3",{id:"how-to-create-an-arena-group"},"How to create an arena group"),(0,o.kt)("p",null,"Type ",(0,o.kt)("inlineCode",{parentName:"p"},"/bw arenaGroup create <name>")," where ",(0,o.kt)("em",{parentName:"p"},"name")," is the group name."),(0,o.kt)("h3",{id:"how-to-add-an-arena-to-a-group"},"How to add an arena to a group"),(0,o.kt)("p",null,"Type ",(0,o.kt)("inlineCode",{parentName:"p"},"/bw arenaGroup  set <arenaName> <groupName>")," where ",(0,o.kt)("em",{parentName:"p"},"groupName")," is the group's name and ",(0,o.kt)("em",{parentName:"p"},"arenaName")," the arena's name."),(0,o.kt)("h3",{id:"how-to-delete-an-arena-group"},"How to delete an arena group"),(0,o.kt)("p",null,"Type ",(0,o.kt)("inlineCode",{parentName:"p"},"/bw arenaGroup remove <name>")," where ",(0,o.kt)("em",{parentName:"p"},"name")," is the group name."),(0,o.kt)("h3",{id:"video-tutorial"},"Video tutorial"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=FJj1SvbIBA4",title:"Tutorial"},(0,o.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/FJj1SvbIBA4/0.jpg",alt:"Video tutorial"}))))}d.isMDXComponent=!0},8641:function(e,t,a){t.Z=a.p+"assets/images/new-gui-94c5575a399ce36330afa26e73fd5ac2.png"}}]);