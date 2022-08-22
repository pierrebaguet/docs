"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[6593],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>f});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),p=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(a),f=n,c=u["".concat(d,".").concat(f)]||u[f]||s[f]||i;return a?r.createElement(c,l(l({ref:e},m),{},{components:a})):r.createElement(c,l({ref:e},m))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6130:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={},l=void 0,o={unversionedId:"smarty_plugins/substitutions/{lang}",id:"smarty_plugins/substitutions/{lang}",title:"{lang}",description:"Lang Substitution provides current lang in session.",source:"@site/docs/smarty_plugins/substitutions/{lang}.md",sourceDirName:"smarty_plugins/substitutions",slug:"/smarty_plugins/substitutions/{lang}",permalink:"/docs/smarty_plugins/substitutions/{lang}",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/smarty_plugins/substitutions/{lang}.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"{folder}",permalink:"/docs/smarty_plugins/substitutions/{folder}"},next:{title:"{order}",permalink:"/docs/smarty_plugins/substitutions/{order}"}},d={},p=[{value:"Attributes",id:"attributes",level:2},{value:"Date Time optional parameters",id:"date-time-optional-parameters",level:3}],m={toc:p};function s(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Lang Substitution provides current lang in session.\n",(0,n.kt)("inlineCode",{parentName:"p"},'{lang attr="one_of_the_following"}')),(0,n.kt)("h2",{id:"attributes"},"Attributes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Attribute name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Data returned"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"id")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"title")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"code")),(0,n.kt)("td",{parentName:"tr",align:"left"},"ISO 639-1 Code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"locale")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The language locale code eg: fr_FR, en_US, ...")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"url")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom URL for language")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"decimals")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Decimal places")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"decimal_separator")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The separator for the decimal point")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"thousands_separator")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The thousands separator")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"date_format")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The date format. The syntax used is identical to the PHP date() function. eg: d/m/Y")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"time_format")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The time format. The syntax used is identical to the PHP date() function. eg: H:i:s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"datetime_format")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The date time format. The syntax used is identical to the PHP date() function. eg: d/m/y H:i:s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"position")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"by_default")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"true")," if the category is the default currency, ",(0,n.kt)("inlineCode",{parentName:"td"},"false")," otherwise")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"createdAt")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The date of creation formatted by  ",(0,n.kt)("a",{parentName:"td",href:"#date-time-optional-parameters"},"Date time parameter"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"updatedAt")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The date of last modification formatted by  ",(0,n.kt)("a",{parentName:"td",href:"#date-time-optional-parameters"},"Date time parameter"))))),(0,n.kt)("h3",{id:"date-time-optional-parameters"},"Date Time optional parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"output")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Take ",(0,n.kt)("inlineCode",{parentName:"td"},"date"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"datetime")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"time")," as value to select the return type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"format")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Take a ",(0,n.kt)("a",{parentName:"td",href:"https://www.php.net/manual/fr/datetime.format.php"},"PHP date format"),",  the format for the current locale will be used if this parameter is empty")))))}s.isMDXComponent=!0}}]);