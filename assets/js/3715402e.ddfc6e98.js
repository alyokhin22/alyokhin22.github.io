"use strict";(self.webpackChunkalyokhin22_org=self.webpackChunkalyokhin22_org||[]).push([[3602],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||a;return r?n.createElement(d,l(l({ref:t},f),{},{components:r})):n.createElement(d,l({ref:t},f))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9020:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={slug:"cra-scaffold",title:"CRA Scaffold",authors:"alyokhin",tags:["\u043f\u0435\u0442-\u043f\u0440\u043e\u0435\u043a\u0442\u044b","cra-scaffold"]},l=void 0,c={permalink:"/blog/cra-scaffold",source:"@site/blog/2022-07-04-cra-scaffold.md",title:"CRA Scaffold",description:"\u0412 \u043c\u0438\u0440\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0435\u0441\u0442\u044c \u0442\u0430\u043a\u0430\u044f \u0448\u0442\u0443\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f scaffold (\u043d\u0435 \u0437\u043d\u0430\u044e, \u043a\u0430\u043a \u043f\u043e-\u0440\u0443\u0441\u0441\u043a\u0438).",date:"2022-07-04T00:00:00.000Z",formattedDate:"4 \u0438\u044e\u043b\u044f 2022 \u0433.",tags:[{label:"\u043f\u0435\u0442-\u043f\u0440\u043e\u0435\u043a\u0442\u044b",permalink:"/blog/tags/\u043f\u0435\u0442-\u043f\u0440\u043e\u0435\u043a\u0442\u044b"},{label:"cra-scaffold",permalink:"/blog/tags/cra-scaffold"}],readingTime:.905,truncated:!0,authors:[{name:"Alexander Developer",title:"MERN stack developer",url:"https://alyokhin22.org",imageURL:"https://github.com/alyokhin22.png",key:"alyokhin"}],frontMatter:{slug:"cra-scaffold",title:"CRA Scaffold",authors:"alyokhin",tags:["\u043f\u0435\u0442-\u043f\u0440\u043e\u0435\u043a\u0442\u044b","cra-scaffold"]},prevItem:{title:"\u042f \u0441\u0434\u0435\u043b\u0430\u043b \u0431\u043e\u0442\u0430 \u0434\u043b\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 InCon",permalink:"/blog/incon-bot"},nextItem:{title:"\u041f\u043e\u0447\u0435\u043c\u0443 Hoolie?",permalink:"/blog/why-hoolie"}},i={authorsImageUrls:[void 0]},p=[],f={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0412 \u043c\u0438\u0440\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0435\u0441\u0442\u044c \u0442\u0430\u043a\u0430\u044f \u0448\u0442\u0443\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f scaffold (\u043d\u0435 \u0437\u043d\u0430\u044e, \u043a\u0430\u043a \u043f\u043e-\u0440\u0443\u0441\u0441\u043a\u0438)."),(0,o.kt)("p",null,"\u0421\u043a\u0430\u0444\u0444\u043e\u043b\u0434\u044b \u043f\u043e\u043c\u043e\u0433\u0430\u044e\u0442 \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u043d\u0430\u0447\u0430\u0442\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0438\u043b\u0438 \u0435\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u043f\u0443\u0442\u0451\u043c \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u0432\u0435\u0441\u044c \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043a\u043e\u0434 \u0443\u0436\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043d."),(0,o.kt)("p",null,"\u041e\u043a\u043e\u043b\u043e \u0433\u043e\u0434\u0430 \u043d\u0430\u0437\u0430\u0434 \u044f \u043d\u0430\u043f\u0438\u0441\u0430\u043b \u0441\u0432\u043e\u0439 \u0441\u043a\u0430\u0444\u0444\u043e\u043b\u0434 \u0434\u043b\u044f \u0441\u0432\u043e\u0438\u0445 \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u0444\u0440\u043e\u043d\u0442\u044d\u043d\u0434\u043e\u0432. \u0422\u0430\u043c \u0443\u0436\u0435 \u0441\u0432\u0451\u0440\u0441\u0442\u0430\u043d\u044b \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b (\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438,\n\u043a\u043d\u043e\u043f\u043a\u0438, \u043f\u043e\u043b\u044f, \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438 \u0442.\u0434.). \u042d\u0442\u043e\u0442 \u0441\u043a\u0430\u0444\u0444\u043e\u043b\u0434 \u043b\u0435\u0436\u0430\u043b \u0432 \u043c\u043e\u0451\u043c \u0437\u0430\u043a\u0440\u044b\u0442\u043e\u043c \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u043d\u0430 GitHub \u0438 \u044f \u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b \u0435\u0433\u043e, \u0432\n\u0447\u0430\u0441\u0442\u043d\u043e\u0441\u0442\u0438, \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 Fylik, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0434\u043b\u044f \u0430\u0434\u043c\u0438\u043d\u0441\u043a\u0438\u0445 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432 \u0438 \u0441\u0432\u043e\u0435\u0446 \u0441\u043e\u0446. \u0441\u0435\u0442\u0438."),(0,o.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u044f \u0437\u0430\u043c\u043e\u0440\u043e\u0437\u0438\u043b \u0441\u0432\u043e\u044e \u0441\u0442\u0443\u0434\u0438\u044e \u0438 \u0441\u0435\u0439\u0447\u0430\u0441 \u043e\u043d\u0430 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0441\u0442\u0430\u0434\u0438\u044e \u043f\u0435\u0440\u0435\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f, \u044f \u0440\u0435\u0448\u0438\u043b \u0442\u0430\u043a\u0436\u0435 \u043f\u0435\u0440\u0435\u0434\u0435\u043b\u0430\u0442\u044c \u0443\u0436\u0435\n\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b, \u0447\u0442\u043e\u0431\u044b \u0443\u043b\u0443\u0447\u0448\u0438\u0442\u044c \u0438 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0438\u0445. \u041d\u0430\u0447\u0430\u043b, \u0440\u0430\u0437\u0443\u043c\u0435\u0435\u0442\u0441\u044f, \u0441\u043e \u0441\u043a\u0430\u0444\u0444\u043e\u043b\u0434\u0430 \u0434\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 React. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0432\n\u044d\u0442\u043e\u0442 \u0440\u0430\u0437 \u0435\u0433\u043e \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u043b\u044e\u0431\u043e\u0439 \u0436\u0435\u043b\u0430\u044e\u0449\u0438\u0439 \u043c\u043e\u0433 \u043e\u0446\u0435\u043d\u0438\u0442\u044c \u043a\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0433\u043e\u0434\u0430, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\n\u043c\u043e\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u044b."),(0,o.kt)("p",null,"\u041d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0441\u0432\u0435\u0440\u0441\u0442\u0430\u043b \u0432\u0441\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0438 \u0441\u0434\u0435\u043b\u0430\u043b \u0432\u0451\u0440\u0441\u0442\u043a\u0443 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0433\u0438\u0431\u043a\u043e\u0439. \u042d\u0442\u043e \u0433\u043e\u0432\u043e\u0440\u0438\u0442 \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u043d\u0430\u0447\u0430\u0432 \u0434\u0435\u043b\u0430\u0442\u044c\n\u043b\u044e\u0431\u043e\u0439 \u043f\u0440\u043e\u0435\u043a\u0442, \u044f \u043d\u0435 \u0431\u0443\u0434\u0443 \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0432\u0440\u0435\u043c\u044f \u043d\u0430 \u043f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u0443\u044e \u0432\u0451\u0440\u0441\u0442\u043a\u0443 \u0432\u0441\u0435\u0445 \u043a\u043d\u043e\u043f\u043e\u043a, \u043f\u043e\u043b\u0435\u0439, \u043f\u043e\u043f\u0430\u043f\u043e\u0432, \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u0438 \u0442.\u0434."),(0,o.kt)("p",null,"\u041f\u043e\u0449\u0443\u043f\u0430\u0442\u044c \u0432\u0441\u0451 \u043c\u043e\u0436\u043d\u043e \u0442\u0443\u0442: ",(0,o.kt)("a",{parentName:"p",href:"https://git.hoolie.org/cra-scaffold"},"https://git.hoolie.org/cra-scaffold")),(0,o.kt)("p",null,"\u0418\u0441\u0445\u043e\u0434\u043d\u0438\u043a\u0438: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hoolie-projects/cra-scaffold"},"https://github.com/hoolie-projects/cra-scaffold")))}s.isMDXComponent=!0}}]);