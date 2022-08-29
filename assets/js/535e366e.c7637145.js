"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[8557],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>s});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=m(a),s=n,k=u["".concat(p,".").concat(s)]||u[s]||g[s]||l;return a?r.createElement(k,i(i({ref:e},d),{},{components:a})):r.createElement(k,i({ref:e},d))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8643:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const l={title:"Image"},i=void 0,o={unversionedId:"loops/Image",id:"loops/Image",title:"Image",description:"The image loop process, cache and display images, categories, contents and folders images.",source:"@site/docs/loops/Image.md",sourceDirName:"loops",slug:"/loops/Image",permalink:"/docs/loops/Image",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/loops/Image.md",tags:[],version:"current",frontMatter:{title:"Image"},sidebar:"myAutogeneratedSidebar",previous:{title:"Folder tree",permalink:"/docs/loops/FolderTree"},next:{title:"Import",permalink:"/docs/loops/Import"}},p={},m=[{value:"Arguments",id:"image-arguments",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Examples",id:"examples",level:2},{value:"Order possible values",id:"image-order-possible-values",level:2},{value:"effects expected values",id:"image-effects-expected-values",level:2},{value:"Souce expected values",id:"image-source-expected-values",level:2}],d={toc:m};function g(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The image loop process, cache and display images, categories, contents and folders images.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},'{loop type="image" name="the-loop-name" [argument="value"], [...]}')),(0,n.kt)("h2",{id:"image-arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"allow_zoom"),(0,n.kt)("td",{parentName:"tr",align:null},"If true, the loop il allowed to resize an image to match the required width and height, causing, in most cases, a quality loss. If false, the image will never be zoomed. Default is false."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'allow_zoom="true"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"background_color"),(0,n.kt)("td",{parentName:"tr",align:null},"The color applied to empty image parts during processing. Use rgb or rrggbb color format"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'background_color="cc8000" or background_color="fff"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"base64"),(0,n.kt)("td",{parentName:"tr",align:null},"If true, the loop will have a new output with the image in base64"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'base64="true"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"brand **"),(0,n.kt)("td",{parentName:"tr",align:null},"a brand identifier. The loop will return this brand's images"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'brand="2"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"category **"),(0,n.kt)("td",{parentName:"tr",align:null},"a category identifier. The loop will return this category's images"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'category="2"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"content **"),(0,n.kt)("td",{parentName:"tr",align:null},"a content identifier. The loop will return this content's images"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'content="2"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"effects"),(0,n.kt)("td",{parentName:"tr",align:null},"One or more comma separated effects definitions, that will be applied to the image in the specified order. Please see below a detailed description of available effects ",(0,n.kt)("br",null)," ",(0,n.kt)("a",{parentName:"td",href:"#image-effects-expected-values"},"Expected values")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'effects="greyscale,gamma:0.7,vflip"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exclude"),(0,n.kt)("td",{parentName:"tr",align:null},"A single or a comma-separated list of image IDs to exclude from the list."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'exclude="456,123"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"folder **"),(0,n.kt)("td",{parentName:"tr",align:null},"a folder identifier. The loop will return this folder's images"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'folder="2"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"height"),(0,n.kt)("td",{parentName:"tr",align:null},"A height in pixels, for resizing image. If only the height is provided, the image ratio is preserved."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'height="200"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"A single or a list of image ids."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'id="2", id="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ignore_processing_errors"),(0,n.kt)("td",{parentName:"tr",align:null},"If true, the loop will return a result even if the image processing fails, and set the PROCESSING_ERROR variable to true if an error occurs. If false, images for which the processing fails are not returned."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'ignore_processing_errors="false"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lang"),(0,n.kt)("td",{parentName:"tr",align:null},"A language identifier, to specify the language in which the image information will be returned"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:null},"A list of values see ",(0,n.kt)("a",{parentName:"td",href:"#image-order-possible-values"},"sorting possible values")),(0,n.kt)("td",{parentName:"tr",align:null},"manual"),(0,n.kt)("td",{parentName:"tr",align:null},'order="alpha_reverse"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"product **"),(0,n.kt)("td",{parentName:"tr",align:null},"a product identifier. The loop will return this product's images"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'product="2"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quality"),(0,n.kt)("td",{parentName:"tr",align:null},"The generated image quality, from 0(!) to 100%. The default value is 75% (you can hange this in the Administration panel)"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'quality="70"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resize_mode"),(0,n.kt)("td",{parentName:"tr",align:null},"If 'crop', the image will have the exact specified width and height, and will be cropped if required. If the source image is smaller than the required width and/or height, you have to set allow_zoom to true, otherwise the generated image will be smaller than required. If 'borders', the image will have the exact specified width and height, and some borders may be added. The border color is the one specified by 'background_color'. If 'none' or missing, the image ratio is preserved, and depending od this ratio, may not have the exact width and height required."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'resize_mode="crop"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rotation"),(0,n.kt)("td",{parentName:"tr",align:null},"The rotation angle in degrees (positive or negative) applied to the image. The background color of the empty areas is the one specified by 'background_color'"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'rotation="90"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"source **"),(0,n.kt)("td",{parentName:"tr",align:null},"see ",(0,n.kt)("a",{parentName:"td",href:"#image-source-expected-values"},"Expected values")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'source="category"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"source_id"),(0,n.kt)("td",{parentName:"tr",align:null},'The identifier of the object provided in the "source" parameter. Only considered if the "source" argument is present'),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'source_id="2"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"visible"),(0,n.kt)("td",{parentName:"tr",align:null},"A boolean value."),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},'visible="no"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"width"),(0,n.kt)("td",{parentName:"tr",align:null},"A width in pixels, for resizing image. If only the width is provided, the image ratio is preserved."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'width="200"')))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_arguments"},"global arguments")),(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Variable"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$CHAPO"),(0,n.kt)("td",{parentName:"tr",align:null},"the image chapo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$DESCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:null},"the image description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$ID"),(0,n.kt)("td",{parentName:"tr",align:null},"the image ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$IMAGE_BASE64"),(0,n.kt)("td",{parentName:"tr",align:null},"only available if base64 param is set to true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$IMAGE_PATH"),(0,n.kt)("td",{parentName:"tr",align:null},"The absolute path to the generated image file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$IMAGE_URL"),(0,n.kt)("td",{parentName:"tr",align:null},"The absolute URL to the generated image.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$LOCALE"),(0,n.kt)("td",{parentName:"tr",align:null},"The locale used for this research")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$OBJECT_ID"),(0,n.kt)("td",{parentName:"tr",align:null},"The object ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$OBJECT_TYPE"),(0,n.kt)("td",{parentName:"tr",align:null},"The object type (e.g., produc, category, etc. see 'source' parameter for possible values)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$ORIGINAL_IMAGE_PATH"),(0,n.kt)("td",{parentName:"tr",align:null},"The absolute path to the original image file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$ORIGINAL_IMAGE_URL"),(0,n.kt)("td",{parentName:"tr",align:null},"The absolute URL to the original image")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$POSITION"),(0,n.kt)("td",{parentName:"tr",align:null},"the position of this image in the object's image list")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$POSTSCRIPTUM"),(0,n.kt)("td",{parentName:"tr",align:null},"the image postscriptum")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$PROCESSING_ERROR"),(0,n.kt)("td",{parentName:"tr",align:null},"true if the image processing fails. In this case, $IMAGE_URL, $ORIGINAL_IMAGE_URL, and $IMAGE_PATH will be empty.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$TITLE"),(0,n.kt)("td",{parentName:"tr",align:null},"the image title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$VISIBLE"),(0,n.kt)("td",{parentName:"tr",align:null},"true if the image is visible. False otherwise")))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_arguments"},"global outputs")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Example 1   "),(0,n.kt)("p",null,"Resize category images the 200x100, adding (white) borders if required.   "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-smarty"},'{loop type="image" name="image_test" category="$ID" width="200" height="100" resize_mode="borders"}\n    <img src="{$IMAGE_URL}" alt="{$TITLE}" />\n{/loop}\n')),(0,n.kt)("p",null,"Same behaviour, using the \u201csource\u201d style parameters   "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-smarty"},'{loop type="image" name="image_test" source="category" source_id="$ID" width="200" height="100" resize_mode="borders"}\n    <img src="{$IMAGE_URL}" alt="{$TITLE}" />\n{/loop}\n')),(0,n.kt)("p",null,"Example 2   "),(0,n.kt)("p",null,"Resize 1 category images the 200x100, cropping id necessary, and transforming the image in grayscale, with a gamma razised to 1.1   "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-smarty"},'="grayscale,gamma:1.1" limit="1"}\n    <a href="{$ORIGINAL_IMAGE_URL}"><img src="{$IMAGE_URL}" alt="{$TITLE}" /></a>\n{/loop}\n')),(0,n.kt)("h2",{id:"image-order-possible-values"},"Order possible values"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#image-arguments"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Ascending value"),(0,n.kt)("th",{parentName:"tr",align:null},"Descending value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Sorted fields"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"alpha"),(0,n.kt)("td",{parentName:"tr",align:null},"alpha_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"manual"),(0,n.kt)("td",{parentName:"tr",align:null},"manual-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"position")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"random"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:"left"},"pseudo-random order")))),(0,n.kt)("h2",{id:"image-effects-expected-values"},"effects expected values"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#image-arguments"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Exemple"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blur"),(0,n.kt)("td",{parentName:"tr",align:null},"blur the image"),(0,n.kt)("td",{parentName:"tr",align:"left"},"blur:5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"colorize:color"),(0,n.kt)("td",{parentName:"tr",align:null},"apply a color mask to the image. The color format is $rgb or $rrggbb."),(0,n.kt)("td",{parentName:"tr",align:"left"},"colorize:$ff2244")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gamma:value"),(0,n.kt)("td",{parentName:"tr",align:null},"change the image Gamma to the specified value."),(0,n.kt)("td",{parentName:"tr",align:"left"},"gamma:0.7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"grayscale or greyscale"),(0,n.kt)("td",{parentName:"tr",align:null},"switch image to grayscale"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hflip or horizontal_flip"),(0,n.kt)("td",{parentName:"tr",align:null},"flip the image horizontally."),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"negative"),(0,n.kt)("td",{parentName:"tr",align:null},"transform the image in its negative equivalent."),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"vflip or vertical_flip"),(0,n.kt)("td",{parentName:"tr",align:null},"flip the image vertically."),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h2",{id:"image-source-expected-values"},"Souce expected values"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#image-arguments"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"brand")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"category")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"content")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"folder")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"module")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"product")))))}g.isMDXComponent=!0}}]);