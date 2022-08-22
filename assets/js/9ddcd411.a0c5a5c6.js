"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[5488],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||p[c]||o;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={title:"Extending Thelia",sidebar_position:3,toc_max_heading_level:6},l="Create a module",i={unversionedId:"extending_thelia",id:"extending_thelia",title:"Extending Thelia",description:"We advise to create only one module for all your own logic, don't create one module by feature or something else.",source:"@site/docs/extending_thelia.md",sourceDirName:".",slug:"/extending_thelia",permalink:"/docs/docs/extending_thelia",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/extending_thelia.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Extending Thelia",sidebar_position:3,toc_max_heading_level:6},sidebar:"myAutogeneratedSidebar",previous:{title:"Dockerize your Thelia",permalink:"/docs/docs/getting_started/docker"},next:{title:"Update",permalink:"/docs/docs/update"}},s={},d=[{value:"Structure",id:"structure",level:2},{value:"Base file (MyProject.php)",id:"base-file-myprojectphp",level:2},{value:"Controllers",id:"controllers",level:2},{value:"Delivery modules",id:"delivery-modules",level:2},{value:"Implementing a delivery module",id:"implementing-a-delivery-module",level:3},{value:"<code>isValidDelivery()</code>",id:"isvaliddelivery",level:4},{value:"<code>getPostage()</code>",id:"getpostage",level:4},{value:"Payment modules",id:"payment-modules",level:2},{value:"Payment process",id:"payment-process",level:3},{value:"Standard templates",id:"standard-templates",level:3},{value:"Implementing a payment module",id:"implementing-a-payment-module",level:3},{value:"<code>isValidPayment()</code>",id:"isvalidpayment",level:4},{value:"<code>pay()</code>",id:"pay",level:4},{value:"<code>manageStockOnCreation()</code>",id:"managestockoncreation",level:4},{value:"Processing of payment system callback",id:"processing-of-payment-system-callback",level:3},{value:"Create a payment callback route",id:"create-a-payment-callback-route",level:4}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-module"},"Create a module"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We advise to create only one module for all your own logic, don't create one module by feature or something else.",(0,r.kt)("br",{parentName:"p"}),"\n","The only reason to create a separate module is if you want to share it with the community \ud83d\ude09")),(0,r.kt)("p",null,"To extend to Thelia you need to create a module in general for the main module we call it with the same name as the project."),(0,r.kt)("p",null,"A command can help you to create the base files :"),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php Thelia module:generate MyProject\n")),(0,r.kt)("p",null,"This will generate this structure in the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"local\\modules")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\\MyProject\n  MyProject.php <- mandatory\n  composer.json\n  \\Config\n    config.xml   <- mandatory\n    module.xml   <- mandatory\n    routing.xml\n    schema.xml\n  ...\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MyProject.php")," is the base file of your module it will help you to set up some behaviour  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"module.xml")," contains information about module like version of the module, compatibility and dependencies with other modules, author, ...    "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config.xml")," to declare your services, event listener, loops, forms, commands or hooks. But thanks to symfony autowiring most of the time you won't need to do this."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"routing.xml")," to list your application's routes, like config.xml this file is not very useful anymore because we can put the routes directly in the controllers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schema.xml")," to describe the database table related to your module."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"composer.json")," help you to share your module with the community")),(0,r.kt)("p",null,"Once the module is created you can go to your shop back-office and active it in the module list."),(0,r.kt)("h2",{id:"base-file-myprojectphp"},"Base file (MyProject.php)"),(0,r.kt)("p",null,"This file must extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"Thelia\\Module\\BaseModule")," class (except for payments and deliveries modules)\nDuring the lifecycle of a module these function are called and allow you to apply your own logic by overwriting them :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"install(ConnectionInterface $con = null);")," This method is called when the plugin is installed for the first time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preActivation(ConnectionInterface $con = null);")," This method is called before the module activation, and may prevent it by returning false."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"postActivation(ConnectionInterface $con = null);")," This method is called after was successfully activated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preDeactivation(ConnectionInterface $con = null);")," This method is called before the module deactivation, and may prevent it by returning false."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"postDeactivation(ConnectionInterface $con = null);")," This method is called after was successfully deactivated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"update($currentVersion, $newVersion, ConnectionInterface $con = null);")," This method is called on a module refresh if the previous version in module.xml is different than the current version")),(0,r.kt)("h2",{id:"controllers"},"Controllers"),(0,r.kt)("p",null,"Controllers work the same as Symfony controllers except that in Thelia there is 2 types of Controllers :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Front controllers which extends ",(0,r.kt)("inlineCode",{parentName:"li"},"BaseFrontController")," and when you call a render in it Thelia will search template in frontOffice directory"),(0,r.kt)("li",{parentName:"ul"},"Admin controllers which extend ",(0,r.kt)("inlineCode",{parentName:"li"},"BaseAdminController"),"  when you call a render in it Thelia will search template in backOffice directory, and all routes in these controllers are automatically secured and only logged admins can call them.")),(0,r.kt)("h2",{id:"delivery-modules"},"Delivery modules"),(0,r.kt)("h3",{id:"implementing-a-delivery-module"},"Implementing a delivery module"),(0,r.kt)("p",null,"For a delivery module the main class should extends the ",(0,r.kt)("inlineCode",{parentName:"p"},"Thelia\\Module\\AbstractDeliveryModule")," interface and implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"getPostage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"isValidDelivery")," methods."),(0,r.kt)("h4",{id:"isvaliddelivery"},(0,r.kt)("inlineCode",{parentName:"h4"},"isValidDelivery()")),(0,r.kt)("p",null,"This method should return a ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),".",(0,r.kt)("br",{parentName:"p"}),"\n","If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the delivery module is displayed on the front office by the delivery loop. If ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the module is not displayed."),(0,r.kt)("p",null,"This is useful if the delivery solution have some limitations and can't be used. For example, Colissimo can't be used if the total weight of the customer cart is greater than 30 Kg."),(0,r.kt)("p",null,"You may also use this method to restrict access to your module to some IP addresses the during test phase."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * This method is called by the Delivery loop, to check if the current module has to be displayed to the customer.\n * Override it to implements your delivery rules/\n *\n * If you return true, the delivery method will de displayed to the customer\n * If you return false, the delivery method will not be displayed\n *\n * @param Country $country the country to deliver to.\n *\n * @return boolean\n */\npublic abstract function isValidDelivery(Country $country)\n{\n    // Retrieve the cart weight\n    $cartWeight = $this->getRequest()->getSession()->getCart()->getWeight();\n\n    return $cartWeight <= 30;\n}\n")),(0,r.kt)("h4",{id:"getpostage"},(0,r.kt)("inlineCode",{parentName:"h4"},"getPostage()")),(0,r.kt)("p",null,"This method have an argument : The country for which the delivery price should be calculated."),(0,r.kt)("p",null,"If the module can't calculate the price for some reasons, it should throw a DeliveryException, with a internationalized message which describes the problem."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * Calculate and return delivery price in the shop\'s default currency\n *\n * @param Country $country the country to deliver to.\n *\n * @return float the delivery price\n * @throws DeliveryException if the postage price cannot be calculated.\n */\npublic function getPostage(Country $country)\n{\n    if (! $this->isValidDelivery($country)) {\n        throw new DeliveryException(\n            Translator::getInstance()->trans("This module cannot be used on the current cart.")\n        );\n    }\n\n    $postage = $this->giveMeThePriceOfTheDeliveryInThisCountry($country);\n\n    return $postage;\n}\n')),(0,r.kt)("h2",{id:"payment-modules"},"Payment modules"),(0,r.kt)("h3",{id:"payment-process"},"Payment process"),(0,r.kt)("p",null,"Once the customer has put some products in his cart, logged-in (or created his account) and selected a delivery method, the payment  becomes possible. Here is a typical payment process :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The customer selects the Payment module"),(0,r.kt)("li",{parentName:"ol"},'The customer trigger the payment (by clicking a "Pay" button on the front office'),(0,r.kt)("li",{parentName:"ol"},"The pay() method of the selected payment module is called by the Thelia core"),(0,r.kt)("li",{parentName:"ol"},"The pay() method manages the payment process, which could consists in :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Invoking a web service or a platform specific API."),(0,r.kt)("li",{parentName:"ul"},"Submitting a form that contains payment parameters to a payment gateway."),(0,r.kt)("li",{parentName:"ul"},"Nothing (like in Cheque or Bank Transfer)."),(0,r.kt)("li",{parentName:"ul"},"Other specific stuff."))),(0,r.kt)("li",{parentName:"ol"},'If the payment is successful, the customer is redirected to a "thank you" page.'),(0,r.kt)("li",{parentName:"ol"},'If the payment fails, the customer is redirected to a "oops, sorry" page.')),(0,r.kt)("h3",{id:"standard-templates"},"Standard templates"),(0,r.kt)("p",null,"In the standard front-office template, three template files provides a common and standard way to interact with the customer :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"order-placed.html"),", to tell the customer his payment is successful."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"order-failed.html"),", to tell the customer his payment failed, and offer a way to try again."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"order-payment-gateway.html"),", to provide a standard template to submit data to the payment gateway. This template file is not used by modules that do not send form-data to payment gateway.")),(0,r.kt)("p",null,"These templates allow an immediate module integration in a shop template, but it's always possible for a module to provide its own templates."),(0,r.kt)("h3",{id:"implementing-a-payment-module"},"Implementing a payment module"),(0,r.kt)("p",null,"For a payment module the main class should extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"Thelia\\Module\\AbstractPaymentModule")," interface and implement the  ",(0,r.kt)("inlineCode",{parentName:"p"},"isValidPayment")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pay")," methods."),(0,r.kt)("h4",{id:"isvalidpayment"},(0,r.kt)("inlineCode",{parentName:"h4"},"isValidPayment()")),(0,r.kt)("p",null,"This method should return a ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the payment module is displayed on the front office by the payment loop. If ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the module is not displayed."),(0,r.kt)("p",null,"This is useful if the payment solution have some limitations and can't be used. For example, PayPal can't be used if there are more than 10 products in customer's cart and/or if total order amount is greater than 8000 \u20ac."),(0,r.kt)("p",null,"You may also use this method to restrict access to your module to some IP addresses the during test phase."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n*\n* This method is called by the Payment loop.\n*\n* If you return true, the payment method will be displayed\n* If you return false, the payment method will not be displayed\n*\n* @return boolean\n*/\npublic function isValidPayment()\n{\n    // At this point, the order does not exist yet in the database. We have to get\n    // item count from the customer cart.\n\n    /** @var Session $session */\n    $session = $this->getRequest()->getSession();\n\n    /** @var Cart $cart */\n    $cart = $session->getCart();\n\n    $cartContentCount = $cart->countCartItems();\n\n    // BaseModule::getCurrentOrderTotalAmount() is a convenient methods \n    // to get order total from the current customer cart.\n\n    $orderTotal = $this->getCurrentOrderTotalAmount();\n\n    return $cartContentCount <= 10 && $orderTotal < 8000;\n}\n")),(0,r.kt)("h4",{id:"pay"},(0,r.kt)("inlineCode",{parentName:"h4"},"pay()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pay()")," method is the most useful method of a payment module: it performs the payment of the current order, accordingly to the payment system requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"submit a form that directs the customer to the payment gateway,"),(0,r.kt)("li",{parentName:"ul"},"invoke a web service, a specific API, etc. to perform the payment from inside the method, and redirects the user to the result (success / failure) ant the end of the process"),(0,r.kt)("li",{parentName:"ul"},"start a specific process, managed by a module controller"),(0,r.kt)("li",{parentName:"ul"},"whatever your requirements are :)")),(0,r.kt)("p",null,"The current order is passed as a parameter to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pay()")," method."),(0,r.kt)("p",null,"The method should return a ",(0,r.kt)("inlineCode",{parentName:"p"},"Thelia\\Core\\HttpFoundation\\Response")," object. Alternatively, depending on your specific needs, you can redirect the customer to another URL."),(0,r.kt)("p",null,"To use the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"order-payment-gateway.html")," template, just generate an array of (name, value) couples with the , and send it the template along with the payment gateway URL using the ",(0,r.kt)("inlineCode",{parentName:"p"},"generateGatewayFormResponse($order, $gateway_url, $form_data)")," method.\nThe form will be automatically submitted, and the customer will be directed to the payment gateway."),(0,r.kt)("p",null,"Example for the Payzen payment module :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Payment gateway invocation\n *\n * @param  Order $order processed order\n * @return Response the payment form\n */\nprotected function pay(Order $order)\n{\n    $payzen_params = $this->getPayzenParameters($order, 'SINGLE');\n\n    // Convert files into standard var => value array\n    $html_params = array();\n\n    /** @var PayzenField $field */\n    foreach($payzen_params as $name => $field)\n        $html_params[$name] = $field->getValue();\n\n    // Be sure to have a valid platform URL, otherwise give up\n    if (false === $platformUrl = PayzenConfigQuery::read('platform_url', false)) {\n        throw new \\InvalidArgumentException(Translator::getInstance()->trans(\"The platform URL is not defined, please check Payzen module configuration.\"));\n    }\n\n    // Generate the form\n    return $this->generateGatewayFormResponse($order, $platformUrl, $html_params);\n}\n")),(0,r.kt)("p",null,"If you have a specific API, call it with the required parameters, and depending on the result, redirect to the success or failure page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Payment gateway invocation\n *\n * @param  Order $order processed order\n * @return Response the payment form\n */\nprotected function pay(Order $order)\n{\n    $api = new SamplePaymentApi();\n\n    // Invoke API\n    $result = $api->performPayment($with_some_parameters);\n\n    $returnUrl = $result === API::SUCCESS ? $this->getPaymentSuccessPageUrl(): $this->getPaymentFailurePageUrl();\n\n    Redirect::exec($returnUrl);\n }\n")),(0,r.kt)("h4",{id:"managestockoncreation"},(0,r.kt)("inlineCode",{parentName:"h4"},"manageStockOnCreation()")),(0,r.kt)("p",null,'You can decide with this function if your payment module decrease stock when the order is created or when the order status change to "paid" by default it\'s ',(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"Return true for decrementing stock on order creation.",(0,r.kt)("br",{parentName:"p"}),"\n",'Return false for decrementing stock when order status change to "paid".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n* Decrement stock on order creation\n**/\npublic function manageStockOnCreation()\n{\n    return true;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n* Decrement stock when status change to paid\n**/\npublic function manageStockOnCreation()\n{\n    return false;\n}\n")),(0,r.kt)("h3",{id:"processing-of-payment-system-callback"},"Processing of payment system callback"),(0,r.kt)("p",null,"Most payment platforms offers a callback system, to notify your module of the payment result. The callback often consists in calling an URL on your server, the Return URL."),(0,r.kt)("h4",{id:"create-a-payment-callback-route"},"Create a payment callback route"),(0,r.kt)("p",null,"The callback URL will invoke a method in your payment controller. This controller may extend the abstract ",(0,r.kt)("inlineCode",{parentName:"p"},"Thelia\\Modules\\BasePaymentModuleController")," class, which provides useful methods for payment confirmation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"getLog()")," : returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Tlog")," instance to a module specific log file. The file name is ",(0,r.kt)("em",{parentName:"p"},"module_code"),".log, and is located in the log directory. For example, the Payzen module log file is ",(0,r.kt)("inlineCode",{parentName:"p"},"payzen.log"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"confirmPayment($orderId)")," : call this method to confirm the payment of the order with ID ",(0,r.kt)("inlineCode",{parentName:"p"},"$orderId"),". The method updates the order status to PAID, and dispatch the required events.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cancelPayment($orderId)")," : Some payment systems may notify a cancellation of an already paid order through the return URL. Call this method in this case, to cancel the payment of an already paid order with ID ",(0,r.kt)("inlineCode",{parentName:"p"},"$orderId"),". The order status will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"NOT_PAID"),", and the required events will be dispatched.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"getOrder($orderId)")," : returns the Order object for order ID ",(0,r.kt)("inlineCode",{parentName:"p"},"$orderId"),", or log an error the order can't be found.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"redirectToSuccessPage($orderId)")," : redirects the customer to the standard successful payment page. Use it only if your controller is invoked in the customer request scope.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"redirectToFailurePage($orderId)")," :  redirects the customer to the standard failed payment page. Use it only if your controller is invoked in the customer request scope."))),(0,r.kt)("p",null,"Your controller should implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"getModuleCode()"),' method, which returns your module code, that is the name of the module main class. For example "Payzen" for the Payzen module.'),(0,r.kt)("p",null,"Your controller should perform all required check before calling ",(0,r.kt)("inlineCode",{parentName:"p"},"confirmPayment()"),", to be sure that the customer payment is valid."))}p.isMDXComponent=!0}}]);