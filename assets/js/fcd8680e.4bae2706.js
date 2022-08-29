"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[4268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||l;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={title:"Template",sidebar_position:5},o=void 0,i={unversionedId:"template",id:"template",title:"Template",description:"The template engine used in Thelia is Smarty.",source:"@site/docs/template.md",sourceDirName:".",slug:"/template",permalink:"/docs/template",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/template.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Template",sidebar_position:5},sidebar:"myAutogeneratedSidebar",previous:{title:"Propel",permalink:"/docs/propel"},next:{title:"Smarty plugins",permalink:"/docs/smarty_plugins/"}},p={},m=[{value:"Templates structure",id:"templates-structure",level:3},{value:"Features",id:"features",level:3},{value:"Loops",id:"loops",level:4},{value:"Smarty plugins",id:"smarty-plugins",level:4}],s={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The template engine used in Thelia is ",(0,r.kt)("a",{parentName:"p",href:"https://smarty-php.github.io/smarty/"},"Smarty"),".\nThere is 4 types of templates :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"frontOffice : for templates rendered from a controller that extend ",(0,r.kt)("inlineCode",{parentName:"li"},"BaseFrontController")),(0,r.kt)("li",{parentName:"ul"},"backOffice : for templates rendered from a controller that extend ",(0,r.kt)("inlineCode",{parentName:"li"},"BaseAdminController")),(0,r.kt)("li",{parentName:"ul"},"pdf : for pdf documents like invoices"),(0,r.kt)("li",{parentName:"ul"},"mail : for mail sent by Thelia")),(0,r.kt)("p",null,"For each of this types you can choose an active template. Either by the configuration page in back office or by these environment variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ACTIVE_FRONT_TEMPLATE    \nACTIVE_ADMIN_TEMPLATE    \nACTIVE_MAIL_TEMPLATE   \nACTIVE_PDF_TEMPLATE   \n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"It's strongly recommended to never modify the defaults templates but copy and rename it with the name of your project.",(0,r.kt)("br",{parentName:"p"}),"\n","Like this you can always update Thelia and the defaults templates without loosing your changes")),(0,r.kt)("h3",{id:"templates-structure"},"Templates structure"),(0,r.kt)("p",null,"Thelia Smarty templates are located in the templates sub-directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\\templates\n  \\frontOffice\n    \\default\n    \\myTemplate\n  \\backOffice\n    \\default\n    ...  \n  \\pdf\n    \\default\n    ...  \n  \\mail\n    \\default\n    ...\n")),(0,r.kt)("p",null,"This is the structure of all Thelia templates, it can be located either at the root of your project or in each module folder.\nIf same file are in multiple templates location, Thelia apply this priority to know which has to be rendered (the first file found is the file rendered)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"active")," template in root templates directory"),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"active")," template in each module subdirectory located in root templates directory"),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"active")," template in each module templates directory"),(0,r.kt)("li",{parentName:"ol"},'In the "default" template in root templates directory'),(0,r.kt)("li",{parentName:"ol"},'In the "default" template in each module subdirectory located in root templates directory'),(0,r.kt)("li",{parentName:"ol"},'In the "default" template in each module templates directory')),(0,r.kt)("p",null,"For example if you have this structure :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\\local\n    \\modules\n        \\MyProject\n            \\templates\n                \\frontOffice\n                    \\default\n                        template.html\n\\templates\n  \\frontOffice\n    \\default\n        template.html\n    \\myTemplate\n        template.html\n        \\modules\n            \\myproject\n                template.html\n")),(0,r.kt)("p",null,"It will check all these directories in this order :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"\\templates\\frontOffice\\myTemplate\\")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"\\templates\\frontOffice\\myTemplate\\modules\\myproject")," * this for each activated modules"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"\\local\\modules\\MyProject\\templates\\frontOffice\\myTemplate")," * this for each activated modules"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"\\templates\\frontOffice\\default\\")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"\\templates\\frontOffice\\default\\modules\\myproject")," * this for each activated modules"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"\\local\\modules\\MyProject\\templates\\frontOffice\\default")," * this for each activated modules")),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("h4",{id:"loops"},"Loops"),(0,r.kt)("p",null,"Loops allow to get data from your shop back-end and display them in your front view. More documentation can be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/loops/"},"here"),"."),(0,r.kt)("h4",{id:"smarty-plugins"},"Smarty plugins"),(0,r.kt)("p",null,"Smarty plugins are used to execute functions from templates. More documentation can be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/smarty_plugins/"},"here"),"."))}c.isMDXComponent=!0}}]);