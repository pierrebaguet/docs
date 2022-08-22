"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[2245],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=d(a),k=n,f=u["".concat(o,".").concat(k)]||u[k]||m[k]||l;return a?r.createElement(f,p(p({ref:e},s),{},{components:a})):r.createElement(f,p({ref:e},s))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8630:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={title:"Sale"},p=void 0,i={unversionedId:"loops/Sale",id:"loops/Sale",title:"Sale",description:"Sale loop provides an access to sale operations defined on your shop.",source:"@site/docs/loops/Sale.md",sourceDirName:"loops",slug:"/loops/Sale",permalink:"/docs/loops/Sale",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/loops/Sale.md",tags:[],version:"current",frontMatter:{title:"Sale"},sidebar:"myAutogeneratedSidebar",previous:{title:"Product sale elements",permalink:"/docs/loops/Product_sale_elements"},next:{title:"State",permalink:"/docs/loops/State"}},o={},d=[{value:"Arguments",id:"sale-arguments",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Order possible values",id:"sale-order-possible-values",level:2}],s={toc:d};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Sale loop provides an access to sale operations defined on your shop.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},'{loop type="sale" name="the-loop-name" [argument="value"], [...]}')),(0,n.kt)("h2",{id:"sale-arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"active"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A boolean value, to get only active (1) or inactive sales (0) or both (*)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},'active="1"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currency"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A currency id, to get the price offset defined for this currency"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The current shop currency"),(0,n.kt)("td",{parentName:"tr",align:"left"},'currency="1"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exclude"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or a list of sale ids to excluded from results."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or a list of sale ids."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A list of values see ",(0,n.kt)("a",{parentName:"td",href:"#sale-order-possible-values"},"sorting possible values")),(0,n.kt)("td",{parentName:"tr",align:"center"},"manual"),(0,n.kt)("td",{parentName:"tr",align:"left"},'order=" random"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"product"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or a list of product IDs. If specified, the loop will return the sales in which these products are selected"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_arguments"},"global arguments")," and ",(0,n.kt)("a",{parentName:"p",href:"./search_arguments"},"search arguments")),(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ACTIVE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"true if the sale is active, false otherwise")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CHAPO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the sale chapo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$DESCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the sale description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$DISPLAY_INITIAL_PRICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"true if the products initial price should be displayed, false otherwise")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$END_DATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the sale end date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$HAS_END_DATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"true if the sale has a end date, false otherwise")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$HAS_START_DATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"true if the sale has a start date, false otherwise")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the content id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$IS_TRANSLATED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"check if the content is translated")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$LOCALE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the locale (e.g. fr_FR) of the returned data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSTSCTIPTUM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the sale postscriptum")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PRICE_OFFSET_SYMBOL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the offset unit symbol, % for a percentage, the currency symbol for an amount")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PRICE_OFFSET_TYPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the price offset type, P for a percentage, A for an amount")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PRICE_OFFSET_VALUE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the price offset value, as a percentage (0-100) or a constant amount.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$SALE_LABEL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the sale advertising label")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$START_DATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the sale start date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TITLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the sale title")))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_arguments"},"global outputs")),(0,n.kt)("h2",{id:"sale-order-possible-values"},"Order possible values"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#sale-arguments"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Ascending value"),(0,n.kt)("th",{parentName:"tr",align:null},"Descending value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Sorted fields"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"active"),(0,n.kt)("td",{parentName:"tr",align:null},"active-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"active")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"alpha"),(0,n.kt)("td",{parentName:"tr",align:null},"alpha-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"created"),(0,n.kt)("td",{parentName:"tr",align:null},"created-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date of sale creation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end-date"),(0,n.kt)("td",{parentName:"tr",align:null},"end-date-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"end date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"id-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"label"),(0,n.kt)("td",{parentName:"tr",align:null},"label-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"label")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start-date"),(0,n.kt)("td",{parentName:"tr",align:null},"start-date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"start date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"updated"),(0,n.kt)("td",{parentName:"tr",align:null},"updated-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date of sale update")))))}m.isMDXComponent=!0}}]);