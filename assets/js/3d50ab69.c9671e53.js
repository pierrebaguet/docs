"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[7538],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>c});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),i=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):d(d({},e),t)),r},s=function(t){var e=i(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=i(r),c=n,f=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return r?a.createElement(f,d(d({ref:e},s),{},{components:r})):a.createElement(f,d({ref:e},s))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,d=new Array(l);d[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,d[1]=o;for(var i=2;i<l;i++)d[i]=r[i];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5093:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=r(7462),n=(r(7294),r(3905));const l={title:"Order address"},d=void 0,o={unversionedId:"loops/OrderAddress",id:"loops/OrderAddress",title:"Order address",description:"Order address loop displays order addresses information.",source:"@site/docs/loops/OrderAddress.md",sourceDirName:"loops",slug:"/loops/OrderAddress",permalink:"/docs/loops/OrderAddress",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/loops/OrderAddress.md",tags:[],version:"current",frontMatter:{title:"Order address"},sidebar:"myAutogeneratedSidebar",previous:{title:"Order",permalink:"/docs/loops/Order"},next:{title:"Order coupon",permalink:"/docs/loops/OrderCoupon"}},p={},i=[{value:"Arguments",id:"order-arguments",level:2},{value:"Outputs",id:"outputs",level:2}],s={toc:i};function m(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Order address loop displays order addresses information.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},'{loop type="order_address" name="the-loop-name" [argument="value"], [...]}')),(0,n.kt)("h2",{id:"order-arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id *"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single order address id"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'id="2"')))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_arguments"},"global arguments")," "),(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ADDRESS1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the first order address line")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ADDRESS2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the second order address line")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ADDRESS3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the third order address line")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CELLPHONE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order address cellphone")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CITY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order address city")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$COMPANY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order address company")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$COUNTRY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order address country which might be use in ",(0,n.kt)("a",{parentName:"td",href:"./Country"},"country loop"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$FIRSTNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order address firstname")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order address id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$LASTNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order address lastname")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PHONE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order address phone")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TITLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order address title which might be use in ",(0,n.kt)("a",{parentName:"td",href:"./Title"},"title loop"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ZIPCODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order address zipcode")))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_arguments"},"global outputs")))}m.isMDXComponent=!0}}]);