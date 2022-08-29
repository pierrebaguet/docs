"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[3339],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"smarty_plugins/{postage}",id:"smarty_plugins/{postage}",title:"{postage}",description:"The postage Smarty block retrieves the postage amount of the current cart if it exists.",source:"@site/docs/smarty_plugins/{postage}.md",sourceDirName:"smarty_plugins",slug:"/smarty_plugins/{postage}",permalink:"/docs/smarty_plugins/{postage}",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/smarty_plugins/{postage}.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"{navigate}",permalink:"/docs/smarty_plugins/{navigate}"},next:{title:"{set_previous_url}",permalink:"/docs/smarty_plugins/{set_previous_url}"}},s={},p=[{value:"Outputs",id:"outputs",level:2},{value:"An implementation for the default front office template",id:"an-implementation-for-the-default-front-office-template",level:2}],c={toc:p};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The postage Smarty block retrieves the postage amount of the current cart if it exists."),(0,a.kt)("p",null,"The delivery country is choosen with the first available value :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Either the country of the delivery address of the customer related to the cart if it exists"),(0,a.kt)("li",{parentName:"ol"},"Or the country saved in cookie if customer have changed the default country"),(0,a.kt)("li",{parentName:"ol"},"Or the default country for the shop if it exists")),(0,a.kt)("p",null,"The function select the cheapest delivery for this country."),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("p",null,"Inside the postage block these variables are defined :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"$country_id")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The country id or ",(0,a.kt)("inlineCode",{parentName:"td"},"null"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"$delivery_id")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The delivery id or ",(0,a.kt)("inlineCode",{parentName:"td"},"null"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"$postage")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The postage amount or ",(0,a.kt)("inlineCode",{parentName:"td"},"0.0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"$is_customizable")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Indicate if the postage can be customized. False When customer is signed and have a valid delivery address")))),(0,a.kt)("h2",{id:"an-implementation-for-the-default-front-office-template"},"An implementation for the default front office template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-smarty"},'    <tbody>\n        {postage}\n            {assign var="postageAmount" value=$postage }\n            <tr>\n                <td class="product" colspan="2">\n                    <form action="{url path="/cart/country"}" class="form-inline" method="post">\n                        <h3>\n                            {intl l="Estimated shipping "}\n                            {if $is_customizable == false}\n                                {loop type="country" name="countryLoop" id="$country_id"}\n                                {intl l="for"} {$TITLE}\n                                {/loop}\n                            {/if}\n                        </h3>\n                        {if $is_customizable}\n                        <div>\n                            <label for="cart-country">{intl l="Select your country:"}</label>\n                            <select id="cart-country" name="country">\n                            {loop type="country" name="countryLoop" with_area="true"}\n                                <option value="{$ID}" {if $ID == $country_id }selected="selected" {/if}>{$TITLE}</option>\n                            {/loop}\n                            </select>\n                            <a class="btn btn-change-country" href="#"><i class="icon-refresh"></i> {intl l="update"}</a>\n                        </div>\n                        {/if}\n                        {if $delivery_id != 0 }\n                        <div>\n                            {intl l="with:"} {loop type="delivery" name="deliveryLoop" id=$delivery_id}{$TITLE} {/loop}\n                        </div>\n                        {else}\n                        <div class="alert alert-danger">\n                            {intl l="No deliveries available for this cart and this country"}\n                        </div>\n                        {/if}\n                    </form>\n                </td>\n                <td class="unitprice">{$postage} {currency attr="symbol"}</td>\n                <td class="qty">-</td>\n                <td class="subprice">{$postage} {currency attr="symbol"}</td>\n            </tr>\n        {/postage}\n    </tbody>\n    <tfoot>\n        <tr>\n            <td colspan="3" class="empty">&nbsp;</td>\n            <th class="total">{intl l="Total"}</th>\n            <td class="total">\n                <div class="total-price">\n                    {assign var="totalAmount" value={cart attr=\'total_taxed_price_without_discount\'} + $postageAmount }\n                    <span class="price">{$totalAmount} {currency attr="symbol"}</span>\n                </div>\n            </td>\n        </tr>\n    </tfoot>\n')))}u.isMDXComponent=!0}}]);