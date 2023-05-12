(()=>{"use strict";var n={771:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([n.id,'/* Global */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  transition: 0.3s;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\na,\nspan {\n  font-family: "Josefin Sans", sans-serif;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\np,\nli {\n  font-family: "Roboto", sans-serif;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\nimg {\n  width: 100%;\n}\n\n/* Utilities */\n.container {\n  width: 100%;\n  max-width: 960px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.sr--only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.list--unstyled {\n  list-style: none;\n}\n\n.block {\n  display: block;\n}\n\n.grid {\n  display: grid;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex--column {\n  flex-direction: column;\n}\n\n.justify--between {\n  justify-content: space-between;\n}\n\n.justify--center {\n  justify-content: center;\n}\n\n.align--center {\n  align-items: center;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.hot::after {\n  content: "Hot";\n  display: block;\n  padding: 5px 10px;\n  position: absolute;\n  top: -30px;\n  right: 0;\n  background-color: #ff003c;\n  color: #fff;\n  font-family: "Josefin Sans", sans-serif;\n  font-size: 12px;\n  border-radius: 7px;\n  box-shadow: 0 0 2px #4a0000;\n}\n\n.btn {\n  position: relative;\n  width: 150px;\n  min-width: 150px;\n  display: block;\n  padding: 15px 20px;\n  background-color: #ff2020;\n  color: #fff;\n  outline: none;\n  text-align: center;\n  font-family: "Josefin Sans", sans-serif;\n  font-weight: 600;\n  text-transform: uppercase;\n  overflow: hidden;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n  z-index: 1;\n}\n\n.btn::before {\n  content: "";\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #4a4a4b;\n  transform-origin: 0 0;\n  transform: scaleX(0);\n  transition: 0.5s;\n  z-index: -1;\n}\n\n.btn:hover::before {\n  transform: scaleX(1);\n}\n\n/* Start Navbar */\nheader {\n  padding: 20px 25px;\n  position: relative;\n  justify-content: space-between;\n  align-items: center;\n}\n\nheader .logo img {\n  width: 132px;\n}\n\n.navbar {\n  background-color: #fff;\n  width: 100%;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 2;\n}\n\n.menu__toggler {\n  border: none;\n  outline: none;\n  padding: 0;\n  background: none;\n  font-size: 35px;\n  color: #ff2020;\n  cursor: pointer;\n}\n\n.navbar .menu {\n  flex-direction: column;\n  gap: 20px;\n  max-height: 1500px;\n  overflow: hidden;\n  transition: max-height 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\n\n.navbar .menu.close {\n  max-height: 0;\n}\n\n.navbar .menu > li {\n  position: relative;\n  cursor: pointer;\n  padding: 0 25px;\n}\n\n.navbar .menu > li:first-child {\n  padding-top: 30px;\n}\n\n.navbar .menu > li:last-child {\n  padding-bottom: 30px;\n}\n\n.navbar .menu li .fa-plus {\n  font-size: 13px;\n}\n\n.navbar .menu li .sub__menu {\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 10px;\n  text-indent: 20px;\n  max-height: 1500px;\n  transition: 0.5s;\n  overflow: hidden;\n}\n\n.navbar .menu li ul.sub__menu.close {\n  max-height: 0;\n  margin-top: 0px;\n}\n\n.navbar .menu li::after {\n  display: none;\n}\n\nheader .right__icons {\n  position: absolute;\n  right: 25px;\n  bottom: -40px;\n  gap: 20px;\n  font-size: 20px;\n}\n\nheader .right__icons li {\n  cursor: pointer;\n}\n\n/* Start Hero */\n.hero {\n  min-height: 400px;\n  background-color: #f0f0f2;\n  overflow: hidden;\n}\n\n.hero .hero__content {\n  overflow: hidden;\n}\n\n.hero .hero__content .hero__title {\n  position: relative;\n  color: #0b1c39;\n  font-size: 33px;\n  line-height: 1.2;\n  margin-bottom: 18px;\n  animation: fading-slide-in 1s;\n}\n\n.hero .hero__content .hero__desc {\n  position: relative;\n  color: #212025;\n  font-size: 17px;\n  line-height: 1.6;\n  margin-bottom: 18px;\n  animation: fading-slide-in 1s 0.1s;\n}\n\n.hero .hero__btn {\n  position: relative;\n  background-color: #4a4a4b;\n  margin-top: 26px;\n  animation: fading-slide-in 1s 0.2s;\n}\n\n.hero .hero__btn::before {\n  background-color: #ff2020;\n}\n\n.hero .hero__img {\n  display: none;\n  position: relative;\n  right: -60px;\n  animation: pulse 1s infinite alternate;\n}\n\n/* Start New Arrivals */\n.new-arrivals {\n  margin: 120px 0;\n}\n\n.new-arrivals .new-arrivals__title {\n  margin-bottom: 30px;\n  font-size: 35px;\n  font-weight: 700;\n  line-height: 1;\n}\n\n.new-arrivals .new-arrivals__products {\n  grid-template: auto / auto;\n  text-align: center;\n  gap: 20px;\n}\n\n.new-arrivals\n  .new-arrivals__products\n  .new-arrivals__product\n  .new-arrivals__product__title\n  a {\n  display: block;\n  width: 100%;\n  color: #444444;\n  font-weight: 700;\n  font-size: 18px;\n  margin: 20px 0 12px 0;\n}\n\n.new-arrivals\n  .new-arrivals__products\n  .new-arrivals__product\n  .new-arrivals__product__img {\n  overflow: hidden;\n}\n\n.new-arrivals\n  .new-arrivals__products\n  .new-arrivals__product\n  .new-arrivals__product__img:hover\n  img {\n  transform: scale(1.04);\n  transition: 0.4s ease-out;\n}\n\n.new-arrivals\n  .new-arrivals__products\n  .new-arrivals__product\n  .new-arrivals__product__price {\n  color: #ff2020;\n  font-size: 18px;\n  font-weight: 500;\n  display: block;\n}\n\n/* Start Gallery */\n.gallery {\n  min-height: 700px;\n  display: grid;\n  grid-template-columns: 1;\n  grid-gap: 30px;\n  margin: 40px 0;\n}\n\n.gallery .gallery__item {\n  overflow: hidden;\n  position: relative;\n}\n\n.gallery .gallery__item::before {\n  content: "";\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(1, 10, 28, 0.3);\n  z-index: 1;\n  opacity: 0;\n  transition: all 0.3s linear;\n}\n\n.gallery .gallery__item:hover::before {\n  opacity: 1;\n}\n\n.gallery .gallery__item img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transform: scale(1.03);\n  transition-timing-function: linear;\n}\n\n.gallery .gallery__item:hover img {\n  transform: scale(1);\n}\n\n/* Start Media Queries\n********************************************************/\n@media screen and (min-width: 576px) {\n  /* Start Utilities */\n  .container {\n    max-width: 550px;\n  }\n\n  /* Start Hero */\n  .hero .hero__btn {\n    margin-top: 0;\n  }\n\n  /* Start New Arrivals */\n  .new-arrivals .new-arrivals__products {\n    grid-template: auto / auto auto;\n  }\n\n  /* Start Gallery */\n  .gallery {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n  }\n\n  .gallery .gallery__item:nth-child(1) {\n    grid-column: 1 / span 1;\n    grid-row: 1 / span 3;\n  }\n\n  .gallery .gallery__item:nth-child(2) {\n    grid-column: 2 / span 1;\n    grid-row: 1 / span 3;\n  }\n\n  .gallery .gallery__item:nth-child(3) {\n    grid-column: 1 / span 1;\n    grid-row: 4 / span 2;\n  }\n\n  .gallery .gallery__item:nth-child(4) {\n    grid-column: 2 / span 1;\n    grid-row: 4 / span 2;\n  }\n}\n\n/* Styles for tablet and above screens */\n@media screen and (min-width: 768px) {\n  /* Start Utilities */\n  .container {\n    max-width: 765px;\n  }\n\n  /* Start Navbar */\n  header .right__icons {\n    top: 50%;\n    right: 120px;\n    bottom: unset;\n    transform: translateY(-50%);\n  }\n\n  header .right__icons a:hover {\n    color: #ff2020;\n  }\n\n  /* Start Hero */\n  .hero .hero__content .hero__title {\n    font-size: 50px;\n    font-weight: 700;\n  }\n\n  .hero .hero__img {\n    display: block;\n  }\n\n  /* Start New Arrivals */\n  .new-arrivals .new-arrivals__title {\n    font-size: 48px;\n  }\n\n  .new-arrivals .new-arrivals__products {\n    grid-template: auto / auto auto auto;\n  }\n\n  .new-arrivals\n    .new-arrivals__products\n    .new-arrivals__product\n    .new-arrivals__product__title\n    a {\n    font-size: 24px;\n  }\n}\n\n/* Styles for desktop and above */\n@media screen and (min-width: 992px) {\n  /* Start Utilities */\n  .container {\n    max-width: 960px;\n  }\n\n  /* Start Navbar */\n  header {\n    padding: 20px 45px;\n  }\n\n  .menu__toggler {\n    display: none;\n  }\n\n  .navbar {\n    position: static;\n    transform: translate(0%);\n    padding: 23px 20px;\n    display: flex;\n    justify-content: center;\n  }\n\n  .navbar .menu {\n    flex-direction: row;\n    gap: 0;\n    overflow: visible;\n  }\n\n  .navbar .menu.close {\n    max-height: 1500px;\n  }\n\n  .navbar .menu > li:hover {\n    color: #ff2020;\n  }\n\n  .navbar .menu > li:first-child {\n    padding-top: 0;\n  }\n\n  .navbar .menu > li:last-child {\n    padding-bottom: 0;\n  }\n\n  .navbar .menu li a,\n  .navbar .menu li span {\n    font-family: "Josefin Sans", sans-serif;\n  }\n\n  .navbar .menu .fa-plus,\n  .navbar .menu .fa-minus {\n    display: none;\n  }\n\n  .navbar .menu li .sub__menu {\n    padding: 20px 0;\n    min-width: 180px;\n    position: absolute;\n    top: 210%;\n    left: 0;\n    background-color: white;\n    border-top: 2px solid #ff2020;\n    border-radius: 10px;\n    overflow: visible;\n    visibility: hidden;\n    opacity: 0;\n    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);\n  }\n\n  .navbar .menu li.sub__menu__toggler:hover .sub__menu {\n    visibility: visible;\n    opacity: 1;\n  }\n\n  .navbar .menu li .sub__menu::before {\n    content: "";\n    display: block;\n    width: 5px;\n    border: 8px solid #ff2020;\n    border-bottom-color: #fff;\n    border-top-color: #fff;\n    border-right-color: #fff;\n    position: absolute;\n    top: -20px;\n    left: 25px;\n    transform: rotate(-90deg);\n  }\n\n  .navbar .menu li ul.sub__menu.close {\n    max-height: 1500px;\n  }\n\n  .navbar .menu li ul.sub__menu li a {\n    color: #0b1c39;\n  }\n\n  .navbar .menu li ul.sub__menu li a:hover {\n    color: #ff2020;\n  }\n\n  .navbar .menu li::after {\n    display: block;\n  }\n\n  header .right__icons {\n    position: static;\n    transform: none;\n  }\n\n  /* Start Hero */\n  .hero .hero__content .hero__title {\n    font-size: 60px;\n  }\n\n  .hero .container {\n    justify-content: space-between;\n  }\n\n  .hero .hero__img {\n    width: 50%;\n    right: -100px;\n  }\n\n  /* Start Gallery */\n  .gallery {\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n  }\n\n  .gallery .gallery__item:nth-child(1) {\n    grid-column: 1 / span 2;\n    grid-row: 1 / span 2;\n  }\n\n  .gallery .gallery__item:nth-child(2) {\n    grid-column: 3 / span 1;\n    grid-row: 1 / span 2;\n  }\n\n  .gallery .gallery__item:nth-child(3) {\n    grid-column: 4 / span 1;\n    grid-row: 1 / span 1;\n  }\n\n  .gallery .gallery__item:nth-child(4) {\n    grid-column: 4 / span 1;\n    grid-row: 2 / span 1;\n  }\n}\n\n/* Style for large screens */\n@media screen and (min-width: 1200px) {\n  /* Start Utilities */\n  .container {\n    max-width: 1170px;\n  }\n\n  /* Start Hero */\n  .hero .hero__content .hero__title {\n    font-size: 96px;\n  }\n\n  /* Start New arrivals */\n  .new-arrivals .new-arrivals__products {\n    grid-template: auto / auto auto auto;\n  }\n}\n\n/* Start Animation */\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n\n  100% {\n    transform: scale(1.05);\n  }\n}\n\n@keyframes fading-slide-in {\n  0% {\n    left: -100%;\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 0;\n  }\n\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n',""]);const l=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(o[s]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);r&&o[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},o=[],l=0;l<n.length;l++){var s=n[l],c=r.base?s[0]+r.base:s[0],p=i[c]||0,d="".concat(c," ").concat(p);i[c]=p+1;var u=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=a(f,r);r.byIndex=l,e.splice(l,0,{identifier:d,updater:m,references:1})}o.push(d)}return o}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var l=t(i[o]);e[l].references--}for(var s=r(n,a),c=0;c<i.length;c++){var p=t(i[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!n;)n=r[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{const n=t.p+"assets/img/gallery1.png",e=t.p+"assets/img/gallery2.png",r=t.p+"assets/img/gallery3.png",a=t.p+"assets/img/gallery4.png";var i=t(379),o=t.n(i),l=t(795),s=t.n(l),c=t(569),p=t.n(c),d=t(565),u=t.n(d),f=t(216),m=t.n(f),g=t(589),h=t.n(g),_=t(771),v={};v.styleTagTransform=h(),v.setAttributes=u(),v.insert=p().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=m(),o()(_.Z,v),_.Z&&_.Z.locals&&_.Z.locals;const b=t.p+"assets/img/logo.png",y=t.p+"assets/img/watch.png",x=t.p+"assets/img/new_product1.png",w=t.p+"assets/img/new_product2.png",S=t.p+"assets/img/new_product3.png";(()=>{const n=document.getElementById("js-main"),e=document.createElement("template");e.innerHTML=`\n    <header class="flex">\n      <div class="logo">\n        <a href="/" class="block">\n          <img src="${b}" alt="logo" />\n        </a>\n      </div>\n      <nav id="navbar" class="navbar">\n        <ul class="menu list--unstyled flex close" id="menu">\n          <li>\n            <a href="/">Home</a>\n          </li>\n          <li>\n            <a href="/">Shop</a>\n          </li>\n          <li>\n            <a href="/">About</a>\n          </li>\n          <li class="sub__menu__toggler hot">\n            <span class="flex justify--between">\n              Latest\n              <i class="fa-solid fa-plus"></i>\n              <i class="fa-solid fa-minus hidden"></i>\n            </span>\n            <ul class="flex sub__menu list--unstyled close">\n              <li>\n                <a href="/">Product List</a>\n              </li>\n              <li>\n                <a href="/">Product Details</a>\n              </li>\n            </ul>\n          </li>\n          <li class="sub__menu__toggler">\n            <span class="flex justify--between">\n              Blog\n              <i class="fa-solid fa-plus"></i>\n              <i class="fa-solid fa-minus hidden"></i>\n            </span>\n            <ul class="flex sub__menu list--unstyled close">\n              <li>\n                <a href="/">Blog</a>\n              </li>\n              <li>\n                <a href="/">Blog Details</a>\n              </li>\n            </ul>\n          </li>\n          <li class="sub__menu__toggler">\n            <span class="flex justify--between">\n              Pages\n              <i class="fa-solid fa-plus"></i>\n              <i class="fa-solid fa-minus hidden"></i>\n            </span>\n            <ul class="flex sub__menu list--unstyled close">\n              <li>\n                <a href="/">Login</a>\n              </li>\n              <li>\n                <a href="/">Cart</a>\n              </li>\n              <li>\n                <a href="/">Element</a>\n              </li>\n            </ul>\n          </li>\n          <li>\n            <a href="/">Contact</a>\n          </li>\n        </ul>\n      </nav>\n      <ul class="flex list--unstyled right__icons">\n        <li>\n          <a href="/">\n            <span class="sr--only">Search</span>\n            <i class="fa-solid fa-magnifying-glass"></i>\n          </a>\n        </li>\n        <li>\n          <a href="/">\n            <span class="sr--only">Login</span>\n            <i class="fa-solid fa-user"></i>\n          </a>\n        </li>\n        <li>\n          <a href="/">\n            <span class="sr--only">Shopping Cart</span>\n            <i class="fa-solid fa-cart-shopping"></i>\n          </a>\n        </li>\n      </ul>\n      <button type="button" class="menu__toggler" id="menu__toggler">\n        <span class="sr--only">Menu Toggler</span>\n        <i class="fa-sharp fa-solid fa-bars"></i>\n      </button>\n    </header>`,document.body.insertBefore(e.content,n)})(),(()=>{const n=document.createElement("template");n.innerHTML=`\n    <section class="hero flex align--center">\n      <div class="container flex align--center">\n        <div class="hero__content flex flex--column">\n          <h1 class="hero__title">Select Your New Perfect Style</h1>\n          <p class="hero__desc">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,\n            labore? Placeat modi tempora fugit, nostrum vel sapiente?\n          </p>\n          <a href="/" class="btn hero__btn">Shop Now</a>\n        </div>\n        <div class="hero__img">\n          <img src="${y}" alt="watch" class="block" />\n        </div>\n      </div>\n    </section>\n    `,document.getElementById("js-main").appendChild(n.content)})(),(()=>{const n=document.createElement("template"),e=[{title:"Thermo Ball Etip Gloves",url:"/",img:x,price:"45,743"},{title:"Thermo Ball Etip Gloves",url:"/",img:w,price:"45,743"},{title:"Thermo Ball Etip Gloves",url:"/",img:S,price:"45,743"}];n.innerHTML=`\n  <section class="new-arrivals">\n    <div class="container">\n      <h2 class="new-arrivals__title">New Arrivals</h2>\n      <div class="new-arrivals__products grid justify--between">\n      ${e.map((n=>`\n        <div class="new-arrivals__product">\n          <div class="new-arrivals__product__img">\n            <a href="${n.url}" class="block">\n              <img\n                src="${n.img}"\n                alt="${n.title}"\n              />\n            </a>\n          </div>\n          <h3 class="new-arrivals__product__title">\n            <a href="${n.url}">${n.title}</a>\n          </h3>\n          <span class="new-arrivals__product__price">$ ${n.price}</span>\n        </div>\n        `)).join("")}\n      </div>\n    </div>\n  </section>\n  `,document.getElementById("js-main").appendChild(n.content)})(),((n,e,t,r)=>{const a=document.getElementById("js-main"),i=document.createElement("template");i.innerHTML=`\n    <section class="gallery grid">\n      ${n.map((n=>`<div class="gallery__item"><img src="${n.url}" alt="${n.alt}" /></div>`)).join("")}\n    </section>\n  `,a.appendChild(i.content)})([{url:n,alt:"gallery1"},{url:e,alt:"gallery2"},{url:r,alt:"gallery3"},{url:a,alt:"gallery4"}]);const k=document.getElementById("menu"),E=document.getElementById("menu__toggler"),j=document.querySelectorAll(".sub__menu__toggler");E.addEventListener("click",(()=>{k.classList.toggle("close")})),j.forEach((n=>{n.addEventListener("click",(()=>{if(window.innerWidth>=991)return;const e=n.querySelector(".sub__menu"),t=n.querySelector(".fa-plus"),r=n.querySelector(".fa-minus");t.classList.toggle("hidden"),r.classList.toggle("hidden"),e.classList.toggle("close")}),!0)}))})()})();