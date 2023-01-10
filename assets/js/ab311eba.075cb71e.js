"use strict";(self.webpackChunkoocradio_docs=self.webpackChunkoocradio_docs||[]).push([[205],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i="Get Current Song",p={unversionedId:"api/currentSong",id:"api/currentSong",title:"Get Current Song",description:"This endpoint is solely responsible for getting the current song playing.",source:"@site/docs/api/currentSong.md",sourceDirName:"api",slug:"/api/currentSong",permalink:"/docs/api/currentSong",draft:!1,editUrl:"https://github.com/oocradio/api-docs/tree/main/docs/api/currentSong.md",tags:[],version:"current",lastUpdatedAt:1673390999,formattedLastUpdatedAt:"Jan 10, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction to the API",permalink:"/docs/intro"},next:{title:"Get Next Live",permalink:"/docs/api/nextLive"}},c={},l=[{value:"Endpoint URL",id:"endpoint-url",level:3},{value:"Example request with curl",id:"example-request-with-curl",level:3},{value:"Example response",id:"example-response",level:3}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-current-song"},"Get Current Song"),(0,o.kt)("p",null,"This endpoint is solely responsible for getting the current song playing."),(0,o.kt)("h3",{id:"endpoint-url"},"Endpoint URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://oocradio.com/api/1.1/wf/get_song\n")),(0,o.kt)("h3",{id:"example-request-with-curl"},"Example request with curl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl "https://oocradio.com/api/1.1/wf/get_song" \\\n  -X GET \\\n  -H "Accept: application/json" \\\n  -H "Content-Type: application/json"\n}\'\n')),(0,o.kt)("h3",{id:"example-response"},"Example response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nContent-Type: application/json\n{\n    "status": "success",\n    "response": {\n        "Artist": "DJ Khaled, Drake, Lil Baby",\n        "Title": "STAYING ALIVE (feat. Drake & Lil Baby)",\n        "Cover": "https://i.scdn.co/image/ab67616d0000b273b690b30a50c94c6da49ba948"\n    }\n}\n')))}u.isMDXComponent=!0}}]);