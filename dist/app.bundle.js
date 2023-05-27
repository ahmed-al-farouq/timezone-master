/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/gallery.js":
/*!***********************************!*\
  !*** ./src/components/gallery.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var gallery = function gallery(photos, rows, columns, gap) {
  var main = document.getElementById("js-main");
  var temp = document.createElement("template");
  temp.innerHTML = "\n    <section class=\"gallery grid\">\n      ".concat(photos.map(function (photo) {
    return "<div class=\"gallery__item\"><img src=\"".concat(photo.url, "\" alt=\"").concat(photo.alt, "\" /></div>");
  }).join(''), "\n    </section>\n  ");
  return main.appendChild(temp.content);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallery);

/***/ }),

/***/ "./src/components/hero.js":
/*!********************************!*\
  !*** ./src/components/hero.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_img_watch_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/watch.png */ "./src/assets/img/watch.png");

var hero = function hero() {
  var temp = document.createElement("template");
  temp.innerHTML = "\n    <section class=\"hero flex align--center\">\n      <div class=\"container flex align--center\">\n        <div class=\"hero__content flex flex--column\">\n          <h1 class=\"hero__title\">Select Your New Perfect Style</h1>\n          <p class=\"hero__desc\">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,\n            labore? Placeat modi tempora fugit, nostrum vel sapiente?\n          </p>\n          <a href=\"/\" class=\"btn hero__btn\">Shop Now</a>\n        </div>\n        <div class=\"hero__img\">\n          <img src=\"".concat(_assets_img_watch_png__WEBPACK_IMPORTED_MODULE_0__, "\" alt=\"watch\" class=\"block\" />\n        </div>\n      </div>\n    </section>\n    ");
  return document.getElementById("js-main").appendChild(temp.content);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hero);

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/logo.png */ "./src/assets/img/logo.png");

var navbar = function navbar() {
  var main = document.getElementById("js-main");
  var temp = document.createElement("template");
  temp.innerHTML = "\n    <header class=\"flex\">\n      <div class=\"logo\">\n        <a href=\"/\" class=\"block\">\n          <img src=\"".concat(_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_0__, "\" alt=\"logo\" />\n        </a>\n      </div>\n      <nav id=\"navbar\" class=\"navbar\">\n        <ul class=\"menu list--unstyled flex close\" id=\"menu\">\n          <li>\n            <a href=\"/\">Home</a>\n          </li>\n          <li>\n            <a href=\"/\">Shop</a>\n          </li>\n          <li>\n            <a href=\"/\">About</a>\n          </li>\n          <li class=\"sub__menu__toggler hot\">\n            <span class=\"flex justify--between\">\n              Latest\n              <i class=\"fa-solid fa-plus\"></i>\n              <i class=\"fa-solid fa-minus hidden\"></i>\n            </span>\n            <ul class=\"flex sub__menu list--unstyled close\">\n              <li>\n                <a href=\"/\">Product List</a>\n              </li>\n              <li>\n                <a href=\"/\">Product Details</a>\n              </li>\n            </ul>\n          </li>\n          <li class=\"sub__menu__toggler\">\n            <span class=\"flex justify--between\">\n              Blog\n              <i class=\"fa-solid fa-plus\"></i>\n              <i class=\"fa-solid fa-minus hidden\"></i>\n            </span>\n            <ul class=\"flex sub__menu list--unstyled close\">\n              <li>\n                <a href=\"/\">Blog</a>\n              </li>\n              <li>\n                <a href=\"/\">Blog Details</a>\n              </li>\n            </ul>\n          </li>\n          <li class=\"sub__menu__toggler\">\n            <span class=\"flex justify--between\">\n              Pages\n              <i class=\"fa-solid fa-plus\"></i>\n              <i class=\"fa-solid fa-minus hidden\"></i>\n            </span>\n            <ul class=\"flex sub__menu list--unstyled close\">\n              <li>\n                <a href=\"/\">Login</a>\n              </li>\n              <li>\n                <a href=\"/\">Cart</a>\n              </li>\n              <li>\n                <a href=\"/\">Element</a>\n              </li>\n            </ul>\n          </li>\n          <li>\n            <a href=\"/\">Contact</a>\n          </li>\n        </ul>\n      </nav>\n      <ul class=\"flex list--unstyled right__icons\">\n        <li>\n          <a href=\"/\">\n            <span class=\"sr--only\">Search</span>\n            <i class=\"fa-solid fa-magnifying-glass\"></i>\n          </a>\n        </li>\n        <li>\n          <a href=\"/\">\n            <span class=\"sr--only\">Login</span>\n            <i class=\"fa-solid fa-user\"></i>\n          </a>\n        </li>\n        <li>\n          <a href=\"/\">\n            <span class=\"sr--only\">Shopping Cart</span>\n            <i class=\"fa-solid fa-cart-shopping\"></i>\n          </a>\n        </li>\n      </ul>\n      <button type=\"button\" class=\"menu__toggler\" id=\"menu__toggler\">\n        <span class=\"sr--only\">Menu Toggler</span>\n        <i class=\"fa-sharp fa-solid fa-bars\"></i>\n      </button>\n    </header>");
  return document.body.insertBefore(temp.content, main);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);

/***/ }),

/***/ "./src/components/newArrivals.js":
/*!***************************************!*\
  !*** ./src/components/newArrivals.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_img_new_product1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/new_product1.png */ "./src/assets/img/new_product1.png");
/* harmony import */ var _assets_img_new_product2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/new_product2.png */ "./src/assets/img/new_product2.png");
/* harmony import */ var _assets_img_new_product3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/new_product3.png */ "./src/assets/img/new_product3.png");



var newArrivals = function newArrivals() {
  var temp = document.createElement("template");
  var products = [{
    title: "Thermo Ball Etip Gloves",
    url: "/",
    img: _assets_img_new_product1_png__WEBPACK_IMPORTED_MODULE_0__,
    price: "45,743"
  }, {
    title: "Thermo Ball Etip Gloves",
    url: "/",
    img: _assets_img_new_product2_png__WEBPACK_IMPORTED_MODULE_1__,
    price: "45,743"
  }, {
    title: "Thermo Ball Etip Gloves",
    url: "/",
    img: _assets_img_new_product3_png__WEBPACK_IMPORTED_MODULE_2__,
    price: "45,743"
  }];
  temp.innerHTML = "\n  <section class=\"new-arrivals\">\n    <div class=\"container\">\n      <h2 class=\"new-arrivals__title\">New Arrivals</h2>\n      <div class=\"new-arrivals__products grid\">\n      ".concat(products.map(function (product) {
    return "\n        <div class=\"new-arrivals__product\">\n          <div class=\"new-arrivals__product__img\">\n            <a href=\"".concat(product.url, "\" class=\"block\">\n              <img\n                src=\"").concat(product.img, "\"\n                alt=\"").concat(product.title, "\"\n              />\n            </a>\n          </div>\n          <h3 class=\"new-arrivals__product__title\">\n            <a href=\"").concat(product.url, "\">").concat(product.title, "</a>\n          </h3>\n          <span class=\"new-arrivals__product__price\">$ ").concat(product.price, "</span>\n        </div>\n        ");
  }).join(""), "\n      </div>\n    </div>\n  </section>\n  ");
  return document.getElementById("js-main").appendChild(temp.content);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newArrivals);

/***/ }),

/***/ "./src/components/popularItems.js":
/*!****************************************!*\
  !*** ./src/components/popularItems.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_img_popular1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/popular1.png */ "./src/assets/img/popular1.png");
/* harmony import */ var _assets_img_popular2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/popular2.png */ "./src/assets/img/popular2.png");
/* harmony import */ var _assets_img_popular3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/popular3.png */ "./src/assets/img/popular3.png");
/* harmony import */ var _assets_img_popular4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/popular4.png */ "./src/assets/img/popular4.png");
/* harmony import */ var _assets_img_popular5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/popular5.png */ "./src/assets/img/popular5.png");
/* harmony import */ var _assets_img_popular6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/popular6.png */ "./src/assets/img/popular6.png");






var popularItems = function popularItems() {
  var temp = document.createElement("template");
  var products = [{
    title: "Thermo Ball Etip Gloves",
    url: "/",
    img: _assets_img_popular1_png__WEBPACK_IMPORTED_MODULE_0__,
    price: "45,743"
  }, {
    title: "Thermo Ball Etip Gloves",
    url: "/",
    img: _assets_img_popular2_png__WEBPACK_IMPORTED_MODULE_1__,
    price: "45,743"
  }, {
    title: "Thermo Ball Etip Gloves",
    url: "/",
    img: _assets_img_popular3_png__WEBPACK_IMPORTED_MODULE_2__,
    price: "45,743"
  }, {
    title: "Thermo Ball Etip Gloves",
    url: "/",
    img: _assets_img_popular4_png__WEBPACK_IMPORTED_MODULE_3__,
    price: "45,743"
  }, {
    title: "Thermo Ball Etip Gloves",
    url: "/",
    img: _assets_img_popular5_png__WEBPACK_IMPORTED_MODULE_4__,
    price: "45,743"
  }, {
    title: "Thermo Ball Etip Gloves",
    url: "/",
    img: _assets_img_popular6_png__WEBPACK_IMPORTED_MODULE_5__,
    price: "45,743"
  }];
  temp.innerHTML = "\n  <section class=\"popular\">\n    <div class=\"container\">\n      <div class=\"popular__header\">\n        <h2 class=\"popular__title\">Popular Items</h2>\n        <p class=\"popular__desc\">\n          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.\n        </p>\n      </div>\n      <div class=\"popular__products grid\">\n      ".concat(products.map(function (product) {
    return "\n        <div class=\"popular__product\">\n          <div class=\"popular__product__body\">\n            <!-- <i class=\"fa-solid fa-heart\"></i> -->\n            <i class=\"fa-regular fa-heart\"></i>\n            <div class=\"popular__product__img\">\n              <img\n                src=\"".concat(product.img, "\"\n                alt=\"").concat(product.title, "\"\n              />\n            </div>\n            <button type=\"button\" class=\"btn popular__btn\">\n              Add to cart\n            </button>\n          </div>\n          <h3 class=\"popular__product__title\">\n            <a href=\"").concat(product.url, "\">").concat(product.title, "</a>\n          </h3>\n          <span class=\"popular__product__price\">$ ").concat(product.price, "</span>\n        </div>\n        ");
  }).join(""), "\n      </div>\n      <a href=\"/\" type=\"button\" class=\"btn popular__more__btn\">View more products</a>\n    </div>\n  </section>\n  ");
  return document.getElementById("js-main").appendChild(temp.content);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popularItems);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Global */\n.container {\n  width: 100%;\n  max-width: 960px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  transition: 0.3s;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\na,\nspan {\n  font-family: \"Josefin Sans\", sans-serif;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\np,\nli {\n  font-family: \"Roboto\", sans-serif;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\nimg {\n  width: 100%;\n}\n\n/* Start Navbar */\nheader {\n  padding: 20px 25px;\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  z-index: 2;\n  transition: 0.8s;\n}\n\nheader.fixed {\n  -webkit-box-shadow: 0 10px 15px rgba(25,25,25,0.1);\n  box-shadow: 0 10px 15px rgba(25,25,25,0.1);\n}\n\nheader .logo img {\n  width: 132px;\n}\n\n.navbar {\n  background-color: #fff;\n  width: 100%;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 2;\n}\n\n.menu__toggler {\n  border: none;\n  outline: none;\n  padding: 0;\n  background: none;\n  font-size: 35px;\n  color: #ff2020;\n  cursor: pointer;\n}\n\n.navbar .menu {\n  flex-direction: column;\n  gap: 20px;\n  max-height: 1500px;\n  overflow: hidden;\n  transition: max-height 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\n\n.navbar .menu.close {\n  max-height: 0;\n}\n\n.navbar .menu > li {\n  position: relative;\n  cursor: pointer;\n  padding: 0 25px;\n}\n\n.navbar .menu > li:first-child {\n  padding-top: 30px;\n}\n\n.navbar .menu > li:last-child {\n  padding-bottom: 30px;\n}\n\n.navbar .menu li .fa-plus {\n  font-size: 13px;\n}\n\n.navbar .menu li .sub__menu {\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 10px;\n  text-indent: 20px;\n  max-height: 1500px;\n  transition: 0.5s;\n  overflow: hidden;\n}\n\n.navbar .menu li ul.sub__menu.close {\n  max-height: 0;\n  margin-top: 0px;\n}\n\n.navbar .menu li::after {\n  display: none;\n}\n\nheader .right__icons {\n  position: absolute;\n  right: 25px;\n  bottom: -40px;\n  gap: 20px;\n  font-size: 20px;\n}\n\nheader .right__icons li {\n  cursor: pointer;\n}\n\n/* Start Hero */\n.hero {\n  min-height: 400px;\n  background-color: #f0f0f2;\n  overflow: hidden;\n}\n\n.hero .hero__content {\n  overflow: hidden;\n}\n\n.hero .hero__content .hero__title {\n  position: relative;\n  color: #0b1c39;\n  font-size: 33px;\n  line-height: 1.2;\n  margin-bottom: 18px;\n  animation: fading-slide-in 1s;\n}\n\n.hero .hero__content .hero__desc {\n  position: relative;\n  color: #212025;\n  font-size: 17px;\n  line-height: 1.6;\n  margin-bottom: 18px;\n  animation: fading-slide-in 1s 0.1s;\n}\n\n.hero .hero__btn {\n  position: relative;\n  background-color: #4a4a4b;\n  margin-top: 26px;\n  animation: fading-slide-in 1s 0.2s;\n}\n\n.hero .hero__btn::before {\n  background-color: #ff2020;\n}\n\n.hero .hero__img {\n  display: none;\n  position: relative;\n  animation: pulse 1s infinite alternate;\n}\n\n/* Start New Arrivals */\n.new-arrivals {\n  margin: 120px 0;\n}\n\n.new-arrivals .new-arrivals__title {\n  margin-bottom: 30px;\n  font-size: 35px;\n  font-weight: 700;\n  line-height: 1;\n}\n\n.new-arrivals .new-arrivals__products {\n  justify-content: center;\n  grid-template: auto / auto;\n  text-align: center;\n  gap: 20px;\n}\n\n.new-arrivals\n  .new-arrivals__products\n  .new-arrivals__product\n  .new-arrivals__product__title\n  a {\n  display: block;\n  width: 100%;\n  color: #444444;\n  font-weight: 700;\n  font-size: 18px;\n  margin: 20px 0 12px 0;\n}\n\n.new-arrivals\n  .new-arrivals__products\n  .new-arrivals__product\n  .new-arrivals__product__img {\n  overflow: hidden;\n}\n\n.new-arrivals\n  .new-arrivals__products\n  .new-arrivals__product\n  .new-arrivals__product__img:hover\n  img {\n  transform: scale(1.04);\n  transition: 0.4s ease-out;\n}\n\n.new-arrivals\n  .new-arrivals__products\n  .new-arrivals__product\n  .new-arrivals__product__price {\n  color: #ff2020;\n  font-size: 18px;\n  font-weight: 500;\n  display: block;\n}\n\n/* Start Gallery */\n.gallery {\n  min-height: 700px;\n  display: grid;\n  grid-template-columns: 1;\n  grid-gap: 30px;\n  margin: 40px 0;\n}\n\n.gallery .gallery__item {\n  overflow: hidden;\n  position: relative;\n}\n\n.gallery .gallery__item::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(1, 10, 28, 0.3);\n  z-index: 1;\n  opacity: 0;\n  transition: all 0.3s linear;\n}\n\n.gallery .gallery__item:hover::before {\n  opacity: 1;\n}\n\n.gallery .gallery__item img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transform: scale(1.03);\n  transition-timing-function: linear;\n}\n\n.gallery .gallery__item:hover img {\n  transform: scale(1);\n}\n\n/* Start Popular Items */\n.popular {\n  text-align: center;\n  margin: 150px 0;\n}\n\n.popular .popular__header {\n  margin: auto;\n}\n\n.popular .popular__header .popular__title {\n  font-size: 48px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.popular .popular__header .popular__desc {\n  color: #777;\n  font-size: 16px;\n  line-height: 30px;\n  margin-bottom: 15px;\n}\n\n.popular .popular__products {\n  margin-top: 60px;\n  grid-template-columns: auto;\n  gap: 50px;\n}\n\n.popular .popular__products .popular__product .popular__product__body {\n  position: relative;\n}\n\n.popular\n  .popular__products\n  .popular__product\n  .popular__product__body\n  .fa-heart {\n  font-size: 30px;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.popular\n  .popular__products\n  .popular__product\n  .popular__product__body:hover\n  .fa-heart {\n  opacity: 1;\n}\n\n.popular\n  .popular__products\n  .popular__product\n  .popular__product__body\n  .popular__btn {\n  font-size: 16px;\n  text-transform: none;\n  padding: 0;\n  border-bottom: 3px solid #ff2020;\n  width: 100%;\n  height: 0;\n  position: absolute;\n  bottom: 0;\n}\n\n.popular\n  .popular__products\n  .popular__product\n  .popular__product__body:hover\n  .popular__btn {\n  height: 15%;\n  max-height: 1000px;\n  padding: 12px 0;\n}\n\n.popular\n  .popular__products\n  .popular__product\n  .popular__product__body\n  .popular__btn:hover::before {\n  display: none;\n}\n\n.popular .popular__products .popular__product .popular__product__title {\n  color: #444444;\n  font-weight: 700;\n  font-size: 20px;\n  margin: 15px 0;\n}\n\n.popular .popular__products .popular__product .popular__product__price {\n  color: #444444;\n  font-size: 20px;\n}\n\n.popular .popular__more__btn {\n  margin: auto;\n  margin-top: 50px;\n  width: 250px;\n}\n/* Start Media Queries\n********************************************************/\n@media screen and (min-width: 576px) {\n  /* Start Utilities */\n  .container {\n    max-width: 550px;\n  }\n\n  /* Start Hero */\n  .hero .hero__btn {\n    margin-top: 0;\n  }\n\n  /* Start New Arrivals */\n  .new-arrivals .new-arrivals__products {\n    grid-template: auto / auto auto;\n  }\n\n  /* Start Gallery */\n  .gallery {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n  }\n\n  .gallery .gallery__item:nth-child(1) {\n    grid-column: 1 / span 1;\n    grid-row: 1 / span 3;\n  }\n\n  .gallery .gallery__item:nth-child(2) {\n    grid-column: 2 / span 1;\n    grid-row: 1 / span 3;\n  }\n\n  .gallery .gallery__item:nth-child(3) {\n    grid-column: 1 / span 1;\n    grid-row: 4 / span 2;\n  }\n\n  .gallery .gallery__item:nth-child(4) {\n    grid-column: 2 / span 1;\n    grid-row: 4 / span 2;\n  }\n}\n\n/* Styles for tablet and above screens */\n@media screen and (min-width: 768px) {\n  /* Start Utilities */\n  .container {\n    max-width: 765px;\n  }\n\n  /* Start Navbar */\n  header .right__icons {\n    top: 50%;\n    right: 120px;\n    bottom: unset;\n    transform: translateY(-50%);\n  }\n\n  header .right__icons a:hover {\n    color: #ff2020;\n  }\n\n  /* Start Hero */\n  .hero .hero__content .hero__title {\n    font-size: 50px;\n    font-weight: 700;\n  }\n\n  .hero .hero__img {\n    display: block;\n  }\n\n  /* Start New Arrivals */\n  .new-arrivals .new-arrivals__title {\n    font-size: 48px;\n  }\n\n  .new-arrivals .new-arrivals__products {\n    grid-template: auto / auto auto auto;\n  }\n\n  .new-arrivals\n    .new-arrivals__products\n    .new-arrivals__product\n    .new-arrivals__product__title\n    a {\n    font-size: 24px;\n  }\n\n  /* Start Popular Items  */\n  .popular .popular__products {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n  }\n\n  .popular .popular__header {\n    max-width: 83.333333%;\n  }\n\n  .popular .popular__products .popular__product .popular__product__title {\n    font-size: 24px;\n  }\n\n  .popular .popular__products .popular__product .popular__product__price {\n    font-size: 18px;\n  }\n}\n\n/* Styles for desktop and above */\n@media screen and (min-width: 992px) {\n  /* Start Utilities */\n  .container {\n    max-width: 960px;\n  }\n\n  /* Start Navbar */\n  header {\n    padding: 20px 45px;\n  }\n\n  .menu__toggler {\n    display: none;\n  }\n\n  .navbar {\n    position: static;\n    transform: translate(0%);\n    padding: 23px 20px;\n    display: flex;\n    justify-content: center;\n  }\n\n  .navbar .menu {\n    flex-direction: row;\n    gap: 0;\n    overflow: visible;\n  }\n\n  .navbar .menu.close {\n    max-height: 1500px;\n  }\n\n  .navbar .menu > li:hover {\n    color: #ff2020;\n  }\n\n  .navbar .menu > li:first-child {\n    padding-top: 0;\n  }\n\n  .navbar .menu > li:last-child {\n    padding-bottom: 0;\n  }\n\n  .navbar .menu li a,\n  .navbar .menu li span {\n    font-family: \"Josefin Sans\", sans-serif;\n  }\n\n  .navbar .menu .fa-plus,\n  .navbar .menu .fa-minus {\n    display: none;\n  }\n\n  .navbar .menu li .sub__menu {\n    padding: 20px 0;\n    min-width: 180px;\n    position: absolute;\n    top: 210%;\n    left: 0;\n    background-color: white;\n    border-top: 2px solid #ff2020;\n    border-radius: 10px;\n    overflow: visible;\n    visibility: hidden;\n    opacity: 0;\n    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);\n  }\n\n  .navbar .menu li.sub__menu__toggler:hover .sub__menu {\n    visibility: visible;\n    opacity: 1;\n  }\n\n  .navbar .menu li .sub__menu::before {\n    content: \"\";\n    display: block;\n    width: 5px;\n    border: 8px solid #ff2020;\n    border-bottom-color: #fff;\n    border-top-color: #fff;\n    border-right-color: #fff;\n    position: absolute;\n    top: -20px;\n    left: 25px;\n    transform: rotate(-90deg);\n  }\n\n  .navbar .menu li ul.sub__menu.close {\n    max-height: 1500px;\n  }\n\n  .navbar .menu li ul.sub__menu li a {\n    color: #0b1c39;\n  }\n\n  .navbar .menu li ul.sub__menu li a:hover {\n    color: #ff2020;\n  }\n\n  .navbar .menu li::after {\n    display: block;\n  }\n\n  header .right__icons {\n    position: static;\n    transform: none;\n  }\n\n  /* Start Hero */\n  .hero .hero__content .hero__title {\n    font-size: 60px;\n  }\n\n  .hero .container {\n    justify-content: space-between;\n  }\n\n  .hero .hero__img {\n    width: 50%;\n    right: -100px;\n  }\n\n  /* Start Gallery */\n  .gallery {\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n  }\n\n  .gallery .gallery__item:nth-child(1) {\n    grid-column: 1 / span 2;\n    grid-row: 1 / span 2;\n  }\n\n  .gallery .gallery__item:nth-child(2) {\n    grid-column: 3 / span 1;\n    grid-row: 1 / span 2;\n  }\n\n  .gallery .gallery__item:nth-child(3) {\n    grid-column: 4 / span 1;\n    grid-row: 1 / span 1;\n  }\n\n  .gallery .gallery__item:nth-child(4) {\n    grid-column: 4 / span 1;\n    grid-row: 2 / span 1;\n  }\n\n  /* Start Popular Items  */\n  .popular .popular__products {\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n  }\n}\n\n/* Style for large screens */\n@media screen and (min-width: 1200px) {\n  /* Start Utilities */\n  .container {\n    max-width: 1170px;\n  }\n\n  /* Start Hero */\n  .hero .hero__content .hero__title {\n    font-size: 96px;\n  }\n\n  .hero .hero__img {\n    right: -60px;\n  }\n\n  /* Start New arrivals */\n  .new-arrivals .new-arrivals__products {\n    grid-template: auto / auto auto auto;\n  }\n\n  /* Start Popular Items */\n  .popular .popular__header {\n    max-width: 58.333333%;\n  }\n}\n\n/* Start Animation */\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n\n  100% {\n    transform: scale(1.05);\n  }\n}\n\n@keyframes fading-slide-in {\n  0% {\n    left: -100%;\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 0;\n  }\n\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["/* Global */\n.container {\n  width: 100%;\n  max-width: 960px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  transition: 0.3s;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\na,\nspan {\n  font-family: \"Josefin Sans\", sans-serif;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\np,\nli {\n  font-family: \"Roboto\", sans-serif;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\nimg {\n  width: 100%;\n}\n\n/* Start Navbar */\nheader {\n  padding: 20px 25px;\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  z-index: 2;\n  transition: 0.8s;\n}\n\nheader.fixed {\n  -webkit-box-shadow: 0 10px 15px rgba(25,25,25,0.1);\n  box-shadow: 0 10px 15px rgba(25,25,25,0.1);\n}\n\nheader .logo img {\n  width: 132px;\n}\n\n.navbar {\n  background-color: #fff;\n  width: 100%;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 2;\n}\n\n.menu__toggler {\n  border: none;\n  outline: none;\n  padding: 0;\n  background: none;\n  font-size: 35px;\n  color: #ff2020;\n  cursor: pointer;\n}\n\n.navbar .menu {\n  flex-direction: column;\n  gap: 20px;\n  max-height: 1500px;\n  overflow: hidden;\n  transition: max-height 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\n\n.navbar .menu.close {\n  max-height: 0;\n}\n\n.navbar .menu > li {\n  position: relative;\n  cursor: pointer;\n  padding: 0 25px;\n}\n\n.navbar .menu > li:first-child {\n  padding-top: 30px;\n}\n\n.navbar .menu > li:last-child {\n  padding-bottom: 30px;\n}\n\n.navbar .menu li .fa-plus {\n  font-size: 13px;\n}\n\n.navbar .menu li .sub__menu {\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 10px;\n  text-indent: 20px;\n  max-height: 1500px;\n  transition: 0.5s;\n  overflow: hidden;\n}\n\n.navbar .menu li ul.sub__menu.close {\n  max-height: 0;\n  margin-top: 0px;\n}\n\n.navbar .menu li::after {\n  display: none;\n}\n\nheader .right__icons {\n  position: absolute;\n  right: 25px;\n  bottom: -40px;\n  gap: 20px;\n  font-size: 20px;\n}\n\nheader .right__icons li {\n  cursor: pointer;\n}\n\n/* Start Hero */\n.hero {\n  min-height: 400px;\n  background-color: #f0f0f2;\n  overflow: hidden;\n}\n\n.hero .hero__content {\n  overflow: hidden;\n}\n\n.hero .hero__content .hero__title {\n  position: relative;\n  color: #0b1c39;\n  font-size: 33px;\n  line-height: 1.2;\n  margin-bottom: 18px;\n  animation: fading-slide-in 1s;\n}\n\n.hero .hero__content .hero__desc {\n  position: relative;\n  color: #212025;\n  font-size: 17px;\n  line-height: 1.6;\n  margin-bottom: 18px;\n  animation: fading-slide-in 1s 0.1s;\n}\n\n.hero .hero__btn {\n  position: relative;\n  background-color: #4a4a4b;\n  margin-top: 26px;\n  animation: fading-slide-in 1s 0.2s;\n}\n\n.hero .hero__btn::before {\n  background-color: #ff2020;\n}\n\n.hero .hero__img {\n  display: none;\n  position: relative;\n  animation: pulse 1s infinite alternate;\n}\n\n/* Start New Arrivals */\n.new-arrivals {\n  margin: 120px 0;\n}\n\n.new-arrivals .new-arrivals__title {\n  margin-bottom: 30px;\n  font-size: 35px;\n  font-weight: 700;\n  line-height: 1;\n}\n\n.new-arrivals .new-arrivals__products {\n  justify-content: center;\n  grid-template: auto / auto;\n  text-align: center;\n  gap: 20px;\n}\n\n.new-arrivals\n  .new-arrivals__products\n  .new-arrivals__product\n  .new-arrivals__product__title\n  a {\n  display: block;\n  width: 100%;\n  color: #444444;\n  font-weight: 700;\n  font-size: 18px;\n  margin: 20px 0 12px 0;\n}\n\n.new-arrivals\n  .new-arrivals__products\n  .new-arrivals__product\n  .new-arrivals__product__img {\n  overflow: hidden;\n}\n\n.new-arrivals\n  .new-arrivals__products\n  .new-arrivals__product\n  .new-arrivals__product__img:hover\n  img {\n  transform: scale(1.04);\n  transition: 0.4s ease-out;\n}\n\n.new-arrivals\n  .new-arrivals__products\n  .new-arrivals__product\n  .new-arrivals__product__price {\n  color: #ff2020;\n  font-size: 18px;\n  font-weight: 500;\n  display: block;\n}\n\n/* Start Gallery */\n.gallery {\n  min-height: 700px;\n  display: grid;\n  grid-template-columns: 1;\n  grid-gap: 30px;\n  margin: 40px 0;\n}\n\n.gallery .gallery__item {\n  overflow: hidden;\n  position: relative;\n}\n\n.gallery .gallery__item::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(1, 10, 28, 0.3);\n  z-index: 1;\n  opacity: 0;\n  transition: all 0.3s linear;\n}\n\n.gallery .gallery__item:hover::before {\n  opacity: 1;\n}\n\n.gallery .gallery__item img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transform: scale(1.03);\n  transition-timing-function: linear;\n}\n\n.gallery .gallery__item:hover img {\n  transform: scale(1);\n}\n\n/* Start Popular Items */\n.popular {\n  text-align: center;\n  margin: 150px 0;\n}\n\n.popular .popular__header {\n  margin: auto;\n}\n\n.popular .popular__header .popular__title {\n  font-size: 48px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.popular .popular__header .popular__desc {\n  color: #777;\n  font-size: 16px;\n  line-height: 30px;\n  margin-bottom: 15px;\n}\n\n.popular .popular__products {\n  margin-top: 60px;\n  grid-template-columns: auto;\n  gap: 50px;\n}\n\n.popular .popular__products .popular__product .popular__product__body {\n  position: relative;\n}\n\n.popular\n  .popular__products\n  .popular__product\n  .popular__product__body\n  .fa-heart {\n  font-size: 30px;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.popular\n  .popular__products\n  .popular__product\n  .popular__product__body:hover\n  .fa-heart {\n  opacity: 1;\n}\n\n.popular\n  .popular__products\n  .popular__product\n  .popular__product__body\n  .popular__btn {\n  font-size: 16px;\n  text-transform: none;\n  padding: 0;\n  border-bottom: 3px solid #ff2020;\n  width: 100%;\n  height: 0;\n  position: absolute;\n  bottom: 0;\n}\n\n.popular\n  .popular__products\n  .popular__product\n  .popular__product__body:hover\n  .popular__btn {\n  height: 15%;\n  max-height: 1000px;\n  padding: 12px 0;\n}\n\n.popular\n  .popular__products\n  .popular__product\n  .popular__product__body\n  .popular__btn:hover::before {\n  display: none;\n}\n\n.popular .popular__products .popular__product .popular__product__title {\n  color: #444444;\n  font-weight: 700;\n  font-size: 20px;\n  margin: 15px 0;\n}\n\n.popular .popular__products .popular__product .popular__product__price {\n  color: #444444;\n  font-size: 20px;\n}\n\n.popular .popular__more__btn {\n  margin: auto;\n  margin-top: 50px;\n  width: 250px;\n}\n/* Start Media Queries\n********************************************************/\n@media screen and (min-width: 576px) {\n  /* Start Utilities */\n  .container {\n    max-width: 550px;\n  }\n\n  /* Start Hero */\n  .hero .hero__btn {\n    margin-top: 0;\n  }\n\n  /* Start New Arrivals */\n  .new-arrivals .new-arrivals__products {\n    grid-template: auto / auto auto;\n  }\n\n  /* Start Gallery */\n  .gallery {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n  }\n\n  .gallery .gallery__item:nth-child(1) {\n    grid-column: 1 / span 1;\n    grid-row: 1 / span 3;\n  }\n\n  .gallery .gallery__item:nth-child(2) {\n    grid-column: 2 / span 1;\n    grid-row: 1 / span 3;\n  }\n\n  .gallery .gallery__item:nth-child(3) {\n    grid-column: 1 / span 1;\n    grid-row: 4 / span 2;\n  }\n\n  .gallery .gallery__item:nth-child(4) {\n    grid-column: 2 / span 1;\n    grid-row: 4 / span 2;\n  }\n}\n\n/* Styles for tablet and above screens */\n@media screen and (min-width: 768px) {\n  /* Start Utilities */\n  .container {\n    max-width: 765px;\n  }\n\n  /* Start Navbar */\n  header .right__icons {\n    top: 50%;\n    right: 120px;\n    bottom: unset;\n    transform: translateY(-50%);\n  }\n\n  header .right__icons a:hover {\n    color: #ff2020;\n  }\n\n  /* Start Hero */\n  .hero .hero__content .hero__title {\n    font-size: 50px;\n    font-weight: 700;\n  }\n\n  .hero .hero__img {\n    display: block;\n  }\n\n  /* Start New Arrivals */\n  .new-arrivals .new-arrivals__title {\n    font-size: 48px;\n  }\n\n  .new-arrivals .new-arrivals__products {\n    grid-template: auto / auto auto auto;\n  }\n\n  .new-arrivals\n    .new-arrivals__products\n    .new-arrivals__product\n    .new-arrivals__product__title\n    a {\n    font-size: 24px;\n  }\n\n  /* Start Popular Items  */\n  .popular .popular__products {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n  }\n\n  .popular .popular__header {\n    max-width: 83.333333%;\n  }\n\n  .popular .popular__products .popular__product .popular__product__title {\n    font-size: 24px;\n  }\n\n  .popular .popular__products .popular__product .popular__product__price {\n    font-size: 18px;\n  }\n}\n\n/* Styles for desktop and above */\n@media screen and (min-width: 992px) {\n  /* Start Utilities */\n  .container {\n    max-width: 960px;\n  }\n\n  /* Start Navbar */\n  header {\n    padding: 20px 45px;\n  }\n\n  .menu__toggler {\n    display: none;\n  }\n\n  .navbar {\n    position: static;\n    transform: translate(0%);\n    padding: 23px 20px;\n    display: flex;\n    justify-content: center;\n  }\n\n  .navbar .menu {\n    flex-direction: row;\n    gap: 0;\n    overflow: visible;\n  }\n\n  .navbar .menu.close {\n    max-height: 1500px;\n  }\n\n  .navbar .menu > li:hover {\n    color: #ff2020;\n  }\n\n  .navbar .menu > li:first-child {\n    padding-top: 0;\n  }\n\n  .navbar .menu > li:last-child {\n    padding-bottom: 0;\n  }\n\n  .navbar .menu li a,\n  .navbar .menu li span {\n    font-family: \"Josefin Sans\", sans-serif;\n  }\n\n  .navbar .menu .fa-plus,\n  .navbar .menu .fa-minus {\n    display: none;\n  }\n\n  .navbar .menu li .sub__menu {\n    padding: 20px 0;\n    min-width: 180px;\n    position: absolute;\n    top: 210%;\n    left: 0;\n    background-color: white;\n    border-top: 2px solid #ff2020;\n    border-radius: 10px;\n    overflow: visible;\n    visibility: hidden;\n    opacity: 0;\n    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);\n  }\n\n  .navbar .menu li.sub__menu__toggler:hover .sub__menu {\n    visibility: visible;\n    opacity: 1;\n  }\n\n  .navbar .menu li .sub__menu::before {\n    content: \"\";\n    display: block;\n    width: 5px;\n    border: 8px solid #ff2020;\n    border-bottom-color: #fff;\n    border-top-color: #fff;\n    border-right-color: #fff;\n    position: absolute;\n    top: -20px;\n    left: 25px;\n    transform: rotate(-90deg);\n  }\n\n  .navbar .menu li ul.sub__menu.close {\n    max-height: 1500px;\n  }\n\n  .navbar .menu li ul.sub__menu li a {\n    color: #0b1c39;\n  }\n\n  .navbar .menu li ul.sub__menu li a:hover {\n    color: #ff2020;\n  }\n\n  .navbar .menu li::after {\n    display: block;\n  }\n\n  header .right__icons {\n    position: static;\n    transform: none;\n  }\n\n  /* Start Hero */\n  .hero .hero__content .hero__title {\n    font-size: 60px;\n  }\n\n  .hero .container {\n    justify-content: space-between;\n  }\n\n  .hero .hero__img {\n    width: 50%;\n    right: -100px;\n  }\n\n  /* Start Gallery */\n  .gallery {\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n  }\n\n  .gallery .gallery__item:nth-child(1) {\n    grid-column: 1 / span 2;\n    grid-row: 1 / span 2;\n  }\n\n  .gallery .gallery__item:nth-child(2) {\n    grid-column: 3 / span 1;\n    grid-row: 1 / span 2;\n  }\n\n  .gallery .gallery__item:nth-child(3) {\n    grid-column: 4 / span 1;\n    grid-row: 1 / span 1;\n  }\n\n  .gallery .gallery__item:nth-child(4) {\n    grid-column: 4 / span 1;\n    grid-row: 2 / span 1;\n  }\n\n  /* Start Popular Items  */\n  .popular .popular__products {\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n  }\n}\n\n/* Style for large screens */\n@media screen and (min-width: 1200px) {\n  /* Start Utilities */\n  .container {\n    max-width: 1170px;\n  }\n\n  /* Start Hero */\n  .hero .hero__content .hero__title {\n    font-size: 96px;\n  }\n\n  .hero .hero__img {\n    right: -60px;\n  }\n\n  /* Start New arrivals */\n  .new-arrivals .new-arrivals__products {\n    grid-template: auto / auto auto auto;\n  }\n\n  /* Start Popular Items */\n  .popular .popular__header {\n    max-width: 58.333333%;\n  }\n}\n\n/* Start Animation */\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n\n  100% {\n    transform: scale(1.05);\n  }\n}\n\n@keyframes fading-slide-in {\n  0% {\n    left: -100%;\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 0;\n  }\n\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/utilities.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/utilities.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Utilities */\n.sr--only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.list--unstyled {\n  list-style: none;\n}\n\n.relative {\n  position: relative;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.block {\n  display: block;\n}\n\n.grid {\n  display: grid;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex--column {\n  flex-direction: column;\n}\n\n.justify--between {\n  justify-content: space-between;\n}\n\n.justify--center {\n  justify-content: center;\n}\n\n.align--center {\n  align-items: center;\n}\n\n.hidden {\n  display: none;\n}\n\n.hot::after {\n  content: \"Hot\";\n  display: block;\n  padding: 5px 10px;\n  position: absolute;\n  top: -30px;\n  right: 0;\n  background-color: #ff003c;\n  color: #fff;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 12px;\n  border-radius: 7px;\n  box-shadow: 0 0 2px #4a0000;\n}\n\n.btn {\n  display: block;\n  width: 150px;\n  min-width: 150px;\n  text-align: center;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 600;\n  text-transform: uppercase;\n  line-height: 0;\n  position: relative;\n  padding: 30px 28px;\n  background-color: #ff2020;\n  color: #fff;\n  outline: none;\n  border: none;\n  overflow: hidden;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  z-index: 1;\n}\n\n.btn::before {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #4a4a4b;\n  transform-origin: 0 0;\n  transform: scaleX(0);\n  z-index: -1;\n  transition: 0.4s cubic-bezier(0.5, 1.6, 0.4, 0.7);\n}\n\n.btn:hover::before {\n  transform: scaleX(1);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/utilities.css"],"names":[],"mappings":"AAAA,cAAc;AACd;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,yBAAyB;EACzB,WAAW;EACX,uCAAuC;EACvC,eAAe;EACf,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,uCAAuC;EACvC,gBAAgB;EAChB,yBAAyB;EACzB,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;EACtB,yBAAyB;EACzB,iBAAiB;EACjB,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,cAAc;EACd,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,yBAAyB;EACzB,qBAAqB;EACrB,oBAAoB;EACpB,WAAW;EACX,iDAAiD;AACnD;;AAEA;EACE,oBAAoB;AACtB","sourcesContent":["/* Utilities */\n.sr--only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.list--unstyled {\n  list-style: none;\n}\n\n.relative {\n  position: relative;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.block {\n  display: block;\n}\n\n.grid {\n  display: grid;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex--column {\n  flex-direction: column;\n}\n\n.justify--between {\n  justify-content: space-between;\n}\n\n.justify--center {\n  justify-content: center;\n}\n\n.align--center {\n  align-items: center;\n}\n\n.hidden {\n  display: none;\n}\n\n.hot::after {\n  content: \"Hot\";\n  display: block;\n  padding: 5px 10px;\n  position: absolute;\n  top: -30px;\n  right: 0;\n  background-color: #ff003c;\n  color: #fff;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 12px;\n  border-radius: 7px;\n  box-shadow: 0 0 2px #4a0000;\n}\n\n.btn {\n  display: block;\n  width: 150px;\n  min-width: 150px;\n  text-align: center;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 600;\n  text-transform: uppercase;\n  line-height: 0;\n  position: relative;\n  padding: 30px 28px;\n  background-color: #ff2020;\n  color: #fff;\n  outline: none;\n  border: none;\n  overflow: hidden;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  z-index: 1;\n}\n\n.btn::before {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #4a4a4b;\n  transform-origin: 0 0;\n  transform: scaleX(0);\n  z-index: -1;\n  transition: 0.4s cubic-bezier(0.5, 1.6, 0.4, 0.7);\n}\n\n.btn:hover::before {\n  transform: scaleX(1);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/utilities.css":
/*!**********************************!*\
  !*** ./src/styles/utilities.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_utilities_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./utilities.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/utilities.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_utilities_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_utilities_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_utilities_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_utilities_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/img/gallery1.png":
/*!*************************************!*\
  !*** ./src/assets/img/gallery1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/gallery1.png";

/***/ }),

/***/ "./src/assets/img/gallery2.png":
/*!*************************************!*\
  !*** ./src/assets/img/gallery2.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/gallery2.png";

/***/ }),

/***/ "./src/assets/img/gallery3.png":
/*!*************************************!*\
  !*** ./src/assets/img/gallery3.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/gallery3.png";

/***/ }),

/***/ "./src/assets/img/gallery4.png":
/*!*************************************!*\
  !*** ./src/assets/img/gallery4.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/gallery4.png";

/***/ }),

/***/ "./src/assets/img/logo.png":
/*!*********************************!*\
  !*** ./src/assets/img/logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/logo.png";

/***/ }),

/***/ "./src/assets/img/new_product1.png":
/*!*****************************************!*\
  !*** ./src/assets/img/new_product1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/new_product1.png";

/***/ }),

/***/ "./src/assets/img/new_product2.png":
/*!*****************************************!*\
  !*** ./src/assets/img/new_product2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/new_product2.png";

/***/ }),

/***/ "./src/assets/img/new_product3.png":
/*!*****************************************!*\
  !*** ./src/assets/img/new_product3.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/new_product3.png";

/***/ }),

/***/ "./src/assets/img/popular1.png":
/*!*************************************!*\
  !*** ./src/assets/img/popular1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/popular1.png";

/***/ }),

/***/ "./src/assets/img/popular2.png":
/*!*************************************!*\
  !*** ./src/assets/img/popular2.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/popular2.png";

/***/ }),

/***/ "./src/assets/img/popular3.png":
/*!*************************************!*\
  !*** ./src/assets/img/popular3.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/popular3.png";

/***/ }),

/***/ "./src/assets/img/popular4.png":
/*!*************************************!*\
  !*** ./src/assets/img/popular4.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/popular4.png";

/***/ }),

/***/ "./src/assets/img/popular5.png":
/*!*************************************!*\
  !*** ./src/assets/img/popular5.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/popular5.png";

/***/ }),

/***/ "./src/assets/img/popular6.png":
/*!*************************************!*\
  !*** ./src/assets/img/popular6.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/popular6.png";

/***/ }),

/***/ "./src/assets/img/watch.png":
/*!**********************************!*\
  !*** ./src/assets/img/watch.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/watch.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_img_gallery1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/img/gallery1.png */ "./src/assets/img/gallery1.png");
/* harmony import */ var _assets_img_gallery2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/gallery2.png */ "./src/assets/img/gallery2.png");
/* harmony import */ var _assets_img_gallery3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img/gallery3.png */ "./src/assets/img/gallery3.png");
/* harmony import */ var _assets_img_gallery4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img/gallery4.png */ "./src/assets/img/gallery4.png");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_utilities_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/utilities.css */ "./src/styles/utilities.css");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar */ "./src/components/navbar.js");
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/hero */ "./src/components/hero.js");
/* harmony import */ var _components_newArrivals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/newArrivals */ "./src/components/newArrivals.js");
/* harmony import */ var _components_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/gallery */ "./src/components/gallery.js");
/* harmony import */ var _components_popularItems__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/popularItems */ "./src/components/popularItems.js");
// Import Gallery Images




// Import Styles


// Import Components






// Components
(0,_components_navbar__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_components_hero__WEBPACK_IMPORTED_MODULE_7__["default"])();
(0,_components_newArrivals__WEBPACK_IMPORTED_MODULE_8__["default"])();
(0,_components_gallery__WEBPACK_IMPORTED_MODULE_9__["default"])([{
  url: _assets_img_gallery1_png__WEBPACK_IMPORTED_MODULE_0__,
  alt: "gallery1"
}, {
  url: _assets_img_gallery2_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "gallery2"
}, {
  url: _assets_img_gallery3_png__WEBPACK_IMPORTED_MODULE_2__,
  alt: "gallery3"
}, {
  url: _assets_img_gallery4_png__WEBPACK_IMPORTED_MODULE_3__,
  alt: "gallery4"
}], 2, 1, 20);
(0,_components_popularItems__WEBPACK_IMPORTED_MODULE_10__["default"])();

// Navbar
var header = document.getElementsByTagName("header")[0];
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menu__toggler");
var subMenuToggler = document.querySelectorAll(".sub__menu__toggler");
var switchFixedNav = function switchFixedNav() {
  // Check if screen is bigger than medium
  console.log(window.innerWidth);
  if (window.innerWidth > 992) {
    // Check if user scrolled more than 200px
    if (window.scrollY > 200) {
      // Check if it already has a fixed class
      if (header.classList.contains("fixed")) return;
      header.style.opacity = 0;
      // Wait until the opacity animation finishes to prevent the first plus animation
      setTimeout(function () {
        header.classList.remove("relative");
        header.classList.add("fixed");
      }, 300);
      return setTimeout(function () {
        return header.style.opacity = 1;
      }, 800);
    }
    header.classList.add("relative");
    header.classList.remove("fixed");
    return setTimeout(function () {
      return header.style.opacity = 1;
    }, 700);
  }
  if (header.classList.contains("fixed")) {
    header.classList.remove("fixed");
  }
};

// Make Navbar Fixed after reaching specific point
window.addEventListener("scroll", switchFixedNav);
window.addEventListener("resize", switchFixedNav);

// Toggle Navbar
menuBtn.addEventListener("click", function () {
  menu.classList.toggle("close");
});

// Toggle Navbar subitems
subMenuToggler.forEach(function (parent) {
  parent.addEventListener("click", function () {
    if (window.innerWidth >= 991) return;
    var subMenu = parent.querySelector(".sub__menu");
    var openIcon = parent.querySelector(".fa-plus");
    var closeIcon = parent.querySelector(".fa-minus");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    subMenu.classList.toggle("close");
  }, true);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxTQUFTLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sUUFBUSxZQUFZLE9BQU8sU0FBUyxZQUFZLGFBQWEsT0FBTyxRQUFRLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFNBQVMsVUFBVSxNQUFNLFNBQVMsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sU0FBUyxVQUFVLFlBQVksV0FBVyxPQUFPLFNBQVMsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxTQUFTLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxV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TyxDQUFDZ0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDdENqQixJQUFJLENBQUNVLFNBQVMsQ0FBQ1EsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUNoQyxDQUFDLENBQUM7O0FBRUY7QUFDQWhCLGNBQWMsQ0FBQ2lCLE9BQU8sQ0FBQyxVQUFDQyxNQUFNLEVBQUs7RUFDakNBLE1BQU0sQ0FBQ0gsZ0JBQWdCLENBQ3JCLE9BQU8sRUFDUCxZQUFNO0lBQ0osSUFBSVYsTUFBTSxDQUFDQyxVQUFVLElBQUksR0FBRyxFQUFFO0lBQzlCLElBQU1hLE9BQU8sR0FBR0QsTUFBTSxDQUFDRSxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ2xELElBQU1DLFFBQVEsR0FBR0gsTUFBTSxDQUFDRSxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQ2pELElBQU1FLFNBQVMsR0FBR0osTUFBTSxDQUFDRSxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ25EQyxRQUFRLENBQUNiLFNBQVMsQ0FBQ1EsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNuQ00sU0FBUyxDQUFDZCxTQUFTLENBQUNRLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDcENHLE9BQU8sQ0FBQ1gsU0FBUyxDQUFDUSxNQUFNLENBQUMsT0FBTyxDQUFDO0VBQ25DLENBQUMsRUFDRCxJQUFJLENBQ0w7QUFDSCxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbWV6b25lLW1hc3Rlci8uL3NyYy9jb21wb25lbnRzL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vdGltZXpvbmUtbWFzdGVyLy4vc3JjL2NvbXBvbmVudHMvaGVyby5qcyIsIndlYnBhY2s6Ly90aW1lem9uZS1tYXN0ZXIvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vdGltZXpvbmUtbWFzdGVyLy4vc3JjL2NvbXBvbmVudHMvbmV3QXJyaXZhbHMuanMiLCJ3ZWJwYWNrOi8vdGltZXpvbmUtbWFzdGVyLy4vc3JjL2NvbXBvbmVudHMvcG9wdWxhckl0ZW1zLmpzIiwid2VicGFjazovL3RpbWV6b25lLW1hc3Rlci8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3RpbWV6b25lLW1hc3Rlci8uL3NyYy9zdHlsZXMvdXRpbGl0aWVzLmNzcyIsIndlYnBhY2s6Ly90aW1lem9uZS1tYXN0ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RpbWV6b25lLW1hc3Rlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RpbWV6b25lLW1hc3Rlci8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vdGltZXpvbmUtbWFzdGVyLy4vc3JjL3N0eWxlcy91dGlsaXRpZXMuY3NzPzRjYzMiLCJ3ZWJwYWNrOi8vdGltZXpvbmUtbWFzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RpbWV6b25lLW1hc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGltZXpvbmUtbWFzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RpbWV6b25lLW1hc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aW1lem9uZS1tYXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90aW1lem9uZS1tYXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90aW1lem9uZS1tYXN0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGltZXpvbmUtbWFzdGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RpbWV6b25lLW1hc3Rlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGltZXpvbmUtbWFzdGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGltZXpvbmUtbWFzdGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGltZXpvbmUtbWFzdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGltZXpvbmUtbWFzdGVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RpbWV6b25lLW1hc3Rlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGltZXpvbmUtbWFzdGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdhbGxlcnkgPSAocGhvdG9zLCByb3dzLCBjb2x1bW5zLCBnYXApID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtbWFpblwiKTtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgdGVtcC5pbm5lckhUTUwgPSBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJnYWxsZXJ5IGdyaWRcIj5cbiAgICAgICR7cGhvdG9zLm1hcChcbiAgICAgICAgKHBob3RvKSA9PiBgPGRpdiBjbGFzcz1cImdhbGxlcnlfX2l0ZW1cIj48aW1nIHNyYz1cIiR7cGhvdG8udXJsfVwiIGFsdD1cIiR7cGhvdG8uYWx0fVwiIC8+PC9kaXY+YFxuICAgICAgKS5qb2luKCcnKX1cbiAgICA8L3NlY3Rpb24+XG4gIGA7XG4gIHJldHVybiBtYWluLmFwcGVuZENoaWxkKHRlbXAuY29udGVudCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYWxsZXJ5O1xuIiwiaW1wb3J0IHdhdGNoIGZyb20gXCIuLi9hc3NldHMvaW1nL3dhdGNoLnBuZ1wiO1xuXG5jb25zdCBoZXJvID0gKCkgPT4ge1xuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICB0ZW1wLmlubmVySFRNTCA9IGBcbiAgICA8c2VjdGlvbiBjbGFzcz1cImhlcm8gZmxleCBhbGlnbi0tY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGZsZXggYWxpZ24tLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVyb19fY29udGVudCBmbGV4IGZsZXgtLWNvbHVtblwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cImhlcm9fX3RpdGxlXCI+U2VsZWN0IFlvdXIgTmV3IFBlcmZlY3QgU3R5bGU8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzPVwiaGVyb19fZGVzY1wiPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTWFnbmksXG4gICAgICAgICAgICBsYWJvcmU/IFBsYWNlYXQgbW9kaSB0ZW1wb3JhIGZ1Z2l0LCBub3N0cnVtIHZlbCBzYXBpZW50ZT9cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzcz1cImJ0biBoZXJvX19idG5cIj5TaG9wIE5vdzwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZXJvX19pbWdcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIiR7d2F0Y2h9XCIgYWx0PVwid2F0Y2hcIiBjbGFzcz1cImJsb2NrXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYDtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtbWFpblwiKS5hcHBlbmRDaGlsZCh0ZW1wLmNvbnRlbnQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVybzsiLCJpbXBvcnQgbG9nbyBmcm9tIFwiLi4vYXNzZXRzL2ltZy9sb2dvLnBuZ1wiO1xuXG5jb25zdCBuYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLW1haW5cIik7XG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG4gIHRlbXAuaW5uZXJIVE1MID0gYFxuICAgIDxoZWFkZXIgY2xhc3M9XCJmbGV4XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzPVwiYmxvY2tcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIiR7bG9nb31cIiBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmF2IGlkPVwibmF2YmFyXCIgY2xhc3M9XCJuYXZiYXJcIj5cbiAgICAgICAgPHVsIGNsYXNzPVwibWVudSBsaXN0LS11bnN0eWxlZCBmbGV4IGNsb3NlXCIgaWQ9XCJtZW51XCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5Ib21lPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5TaG9wPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5BYm91dDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInN1Yl9fbWVudV9fdG9nZ2xlciBob3RcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleCBqdXN0aWZ5LS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIExhdGVzdFxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdXNcIj48L2k+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtbWludXMgaGlkZGVuXCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiZmxleCBzdWJfX21lbnUgbGlzdC0tdW5zdHlsZWQgY2xvc2VcIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+UHJvZHVjdCBMaXN0PC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5Qcm9kdWN0IERldGFpbHM8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3ViX19tZW51X190b2dnbGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsZXgganVzdGlmeS0tYmV0d2VlblwiPlxuICAgICAgICAgICAgICBCbG9nXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1c1wiPjwvaT5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1taW51cyBoaWRkZW5cIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJmbGV4IHN1Yl9fbWVudSBsaXN0LS11bnN0eWxlZCBjbG9zZVwiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5CbG9nPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5CbG9nIERldGFpbHM8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwic3ViX19tZW51X190b2dnbGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsZXgganVzdGlmeS0tYmV0d2VlblwiPlxuICAgICAgICAgICAgICBQYWdlc1xuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdXNcIj48L2k+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtbWludXMgaGlkZGVuXCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiZmxleCBzdWJfX21lbnUgbGlzdC0tdW5zdHlsZWQgY2xvc2VcIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+TG9naW48L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPkNhcnQ8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPkVsZW1lbnQ8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5Db250YWN0PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICAgIDx1bCBjbGFzcz1cImZsZXggbGlzdC0tdW5zdHlsZWQgcmlnaHRfX2ljb25zXCI+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci0tb25seVwiPlNlYXJjaDwvc3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtbWFnbmlmeWluZy1nbGFzc1wiPjwvaT5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci0tb25seVwiPkxvZ2luPC9zcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS11c2VyXCI+PC9pPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLS1vbmx5XCI+U2hvcHBpbmcgQ2FydDwvc3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2FydC1zaG9wcGluZ1wiPjwvaT5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtZW51X190b2dnbGVyXCIgaWQ9XCJtZW51X190b2dnbGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3ItLW9ubHlcIj5NZW51IFRvZ2dsZXI8L3NwYW4+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc2hhcnAgZmEtc29saWQgZmEtYmFyc1wiPjwvaT5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvaGVhZGVyPmA7XG4gIHJldHVybiBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZSh0ZW1wLmNvbnRlbnQsIG1haW4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyO1xuIiwiaW1wb3J0IHByb2R1Y3QxIGZyb20gXCIuLi9hc3NldHMvaW1nL25ld19wcm9kdWN0MS5wbmdcIjtcbmltcG9ydCBwcm9kdWN0MiBmcm9tIFwiLi4vYXNzZXRzL2ltZy9uZXdfcHJvZHVjdDIucG5nXCI7XG5pbXBvcnQgcHJvZHVjdDMgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvbmV3X3Byb2R1Y3QzLnBuZ1wiO1xuXG5jb25zdCBuZXdBcnJpdmFscyA9ICgpID0+IHtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgY29uc3QgcHJvZHVjdHMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiVGhlcm1vIEJhbGwgRXRpcCBHbG92ZXNcIixcbiAgICAgIHVybDogXCIvXCIsXG4gICAgICBpbWc6IHByb2R1Y3QxLFxuICAgICAgcHJpY2U6IFwiNDUsNzQzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJUaGVybW8gQmFsbCBFdGlwIEdsb3Zlc1wiLFxuICAgICAgdXJsOiBcIi9cIixcbiAgICAgIGltZzogcHJvZHVjdDIsXG4gICAgICBwcmljZTogXCI0NSw3NDNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlRoZXJtbyBCYWxsIEV0aXAgR2xvdmVzXCIsXG4gICAgICB1cmw6IFwiL1wiLFxuICAgICAgaW1nOiBwcm9kdWN0MyxcbiAgICAgIHByaWNlOiBcIjQ1LDc0M1wiLFxuICAgIH0sXG4gIF07XG4gIHRlbXAuaW5uZXJIVE1MID0gYFxuICA8c2VjdGlvbiBjbGFzcz1cIm5ldy1hcnJpdmFsc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMiBjbGFzcz1cIm5ldy1hcnJpdmFsc19fdGl0bGVcIj5OZXcgQXJyaXZhbHM8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cIm5ldy1hcnJpdmFsc19fcHJvZHVjdHMgZ3JpZFwiPlxuICAgICAgJHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+XG4gICAgICAgIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5ldy1hcnJpdmFsc19fcHJvZHVjdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuZXctYXJyaXZhbHNfX3Byb2R1Y3RfX2ltZ1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiR7cHJvZHVjdC51cmx9XCIgY2xhc3M9XCJibG9ja1wiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiJHtwcm9kdWN0LmltZ31cIlxuICAgICAgICAgICAgICAgIGFsdD1cIiR7cHJvZHVjdC50aXRsZX1cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMyBjbGFzcz1cIm5ldy1hcnJpdmFsc19fcHJvZHVjdF9fdGl0bGVcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIke3Byb2R1Y3QudXJsfVwiPiR7cHJvZHVjdC50aXRsZX08L2E+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5ldy1hcnJpdmFsc19fcHJvZHVjdF9fcHJpY2VcIj4kICR7cHJvZHVjdC5wcmljZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgICApLmpvaW4oXCJcIil9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuICBgO1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1tYWluXCIpLmFwcGVuZENoaWxkKHRlbXAuY29udGVudCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXdBcnJpdmFscztcbiIsImltcG9ydCBwb3B1bGFyMSBmcm9tIFwiLi4vYXNzZXRzL2ltZy9wb3B1bGFyMS5wbmdcIjtcbmltcG9ydCBwb3B1bGFyMiBmcm9tIFwiLi4vYXNzZXRzL2ltZy9wb3B1bGFyMi5wbmdcIjtcbmltcG9ydCBwb3B1bGFyMyBmcm9tIFwiLi4vYXNzZXRzL2ltZy9wb3B1bGFyMy5wbmdcIjtcbmltcG9ydCBwb3B1bGFyNCBmcm9tIFwiLi4vYXNzZXRzL2ltZy9wb3B1bGFyNC5wbmdcIjtcbmltcG9ydCBwb3B1bGFyNSBmcm9tIFwiLi4vYXNzZXRzL2ltZy9wb3B1bGFyNS5wbmdcIjtcbmltcG9ydCBwb3B1bGFyNiBmcm9tIFwiLi4vYXNzZXRzL2ltZy9wb3B1bGFyNi5wbmdcIjtcblxuY29uc3QgcG9wdWxhckl0ZW1zID0gKCkgPT4ge1xuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICBjb25zdCBwcm9kdWN0cyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJUaGVybW8gQmFsbCBFdGlwIEdsb3Zlc1wiLFxuICAgICAgdXJsOiBcIi9cIixcbiAgICAgIGltZzogcG9wdWxhcjEsXG4gICAgICBwcmljZTogXCI0NSw3NDNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlRoZXJtbyBCYWxsIEV0aXAgR2xvdmVzXCIsXG4gICAgICB1cmw6IFwiL1wiLFxuICAgICAgaW1nOiBwb3B1bGFyMixcbiAgICAgIHByaWNlOiBcIjQ1LDc0M1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiVGhlcm1vIEJhbGwgRXRpcCBHbG92ZXNcIixcbiAgICAgIHVybDogXCIvXCIsXG4gICAgICBpbWc6IHBvcHVsYXIzLFxuICAgICAgcHJpY2U6IFwiNDUsNzQzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJUaGVybW8gQmFsbCBFdGlwIEdsb3Zlc1wiLFxuICAgICAgdXJsOiBcIi9cIixcbiAgICAgIGltZzogcG9wdWxhcjQsXG4gICAgICBwcmljZTogXCI0NSw3NDNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlRoZXJtbyBCYWxsIEV0aXAgR2xvdmVzXCIsXG4gICAgICB1cmw6IFwiL1wiLFxuICAgICAgaW1nOiBwb3B1bGFyNSxcbiAgICAgIHByaWNlOiBcIjQ1LDc0M1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiVGhlcm1vIEJhbGwgRXRpcCBHbG92ZXNcIixcbiAgICAgIHVybDogXCIvXCIsXG4gICAgICBpbWc6IHBvcHVsYXI2LFxuICAgICAgcHJpY2U6IFwiNDUsNzQzXCIsXG4gICAgfSxcbiAgXTtcbiAgdGVtcC5pbm5lckhUTUwgPSBgXG4gIDxzZWN0aW9uIGNsYXNzPVwicG9wdWxhclwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3B1bGFyX19oZWFkZXJcIj5cbiAgICAgICAgPGgyIGNsYXNzPVwicG9wdWxhcl9fdGl0bGVcIj5Qb3B1bGFyIEl0ZW1zPC9oMj5cbiAgICAgICAgPHAgY2xhc3M9XCJwb3B1bGFyX19kZXNjXCI+XG4gICAgICAgICAgQ29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gUXVpcyBpcHN1bSBzdXNwZW5kaXNzZSB1bHRyaWNlcyBncmF2aWRhLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3B1bGFyX19wcm9kdWN0cyBncmlkXCI+XG4gICAgICAke3Byb2R1Y3RzXG4gICAgICAgIC5tYXAoXG4gICAgICAgICAgKHByb2R1Y3QpID0+XG4gICAgICAgICAgICBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1bGFyX19wcm9kdWN0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVsYXJfX3Byb2R1Y3RfX2JvZHlcIj5cbiAgICAgICAgICAgIDwhLS0gPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1oZWFydFwiPjwvaT4gLS0+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtaGVhcnRcIj48L2k+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdWxhcl9fcHJvZHVjdF9faW1nXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCIke3Byb2R1Y3QuaW1nfVwiXG4gICAgICAgICAgICAgICAgYWx0PVwiJHtwcm9kdWN0LnRpdGxlfVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIHBvcHVsYXJfX2J0blwiPlxuICAgICAgICAgICAgICBBZGQgdG8gY2FydFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgzIGNsYXNzPVwicG9wdWxhcl9fcHJvZHVjdF9fdGl0bGVcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIke3Byb2R1Y3QudXJsfVwiPiR7cHJvZHVjdC50aXRsZX08L2E+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcHVsYXJfX3Byb2R1Y3RfX3ByaWNlXCI+JCAke3Byb2R1Y3QucHJpY2V9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgICAgICApXG4gICAgICAgIC5qb2luKFwiXCIpfVxuICAgICAgPC9kaXY+XG4gICAgICA8YSBocmVmPVwiL1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBwb3B1bGFyX19tb3JlX19idG5cIj5WaWV3IG1vcmUgcHJvZHVjdHM8L2E+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgYDtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtbWFpblwiKS5hcHBlbmRDaGlsZCh0ZW1wLmNvbnRlbnQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9wdWxhckl0ZW1zO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHbG9iYWwgKi9cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA5NjBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuYSxcXG5zcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbnAsXFxubGkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogU3RhcnQgTmF2YmFyICovXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDIwcHggMjVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMjtcXG4gIHRyYW5zaXRpb246IDAuOHM7XFxufVxcblxcbmhlYWRlci5maXhlZCB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHJnYmEoMjUsMjUsMjUsMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHJnYmEoMjUsMjUsMjUsMC4xKTtcXG59XFxuXFxuaGVhZGVyIC5sb2dvIGltZyB7XFxuICB3aWR0aDogMTMycHg7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLm1lbnVfX3RvZ2dsZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgY29sb3I6ICNmZjIwMjA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXZiYXIgLm1lbnUge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIG1heC1oZWlnaHQ6IDE1MDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzLCAwLjUxNSwgMC45NTUpO1xcbn1cXG5cXG4ubmF2YmFyIC5tZW51LmNsb3NlIHtcXG4gIG1heC1oZWlnaHQ6IDA7XFxufVxcblxcbi5uYXZiYXIgLm1lbnUgPiBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwIDI1cHg7XFxufVxcblxcbi5uYXZiYXIgLm1lbnUgPiBsaTpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG59XFxuXFxuLm5hdmJhciAubWVudSA+IGxpOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5uYXZiYXIgLm1lbnUgbGkgLmZhLXBsdXMge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4ubmF2YmFyIC5tZW51IGxpIC5zdWJfX21lbnUge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICB0ZXh0LWluZGVudDogMjBweDtcXG4gIG1heC1oZWlnaHQ6IDE1MDBweDtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubmF2YmFyIC5tZW51IGxpIHVsLnN1Yl9fbWVudS5jbG9zZSB7XFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbn1cXG5cXG4ubmF2YmFyIC5tZW51IGxpOjphZnRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5oZWFkZXIgLnJpZ2h0X19pY29ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMjVweDtcXG4gIGJvdHRvbTogLTQwcHg7XFxuICBnYXA6IDIwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmhlYWRlciAucmlnaHRfX2ljb25zIGxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogU3RhcnQgSGVybyAqL1xcbi5oZXJvIHtcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5oZXJvIC5oZXJvX19jb250ZW50IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5oZXJvIC5oZXJvX19jb250ZW50IC5oZXJvX190aXRsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogIzBiMWMzOTtcXG4gIGZvbnQtc2l6ZTogMzNweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbiAgYW5pbWF0aW9uOiBmYWRpbmctc2xpZGUtaW4gMXM7XFxufVxcblxcbi5oZXJvIC5oZXJvX19jb250ZW50IC5oZXJvX19kZXNjIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiAjMjEyMDI1O1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XFxuICBhbmltYXRpb246IGZhZGluZy1zbGlkZS1pbiAxcyAwLjFzO1xcbn1cXG5cXG4uaGVybyAuaGVyb19fYnRuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGI7XFxuICBtYXJnaW4tdG9wOiAyNnB4O1xcbiAgYW5pbWF0aW9uOiBmYWRpbmctc2xpZGUtaW4gMXMgMC4ycztcXG59XFxuXFxuLmhlcm8gLmhlcm9fX2J0bjo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjIwMjA7XFxufVxcblxcbi5oZXJvIC5oZXJvX19pbWcge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFuaW1hdGlvbjogcHVsc2UgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG5cXG4vKiBTdGFydCBOZXcgQXJyaXZhbHMgKi9cXG4ubmV3LWFycml2YWxzIHtcXG4gIG1hcmdpbjogMTIwcHggMDtcXG59XFxuXFxuLm5ldy1hcnJpdmFscyAubmV3LWFycml2YWxzX190aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4ubmV3LWFycml2YWxzIC5uZXctYXJyaXZhbHNfX3Byb2R1Y3RzIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5uZXctYXJyaXZhbHNcXG4gIC5uZXctYXJyaXZhbHNfX3Byb2R1Y3RzXFxuICAubmV3LWFycml2YWxzX19wcm9kdWN0XFxuICAubmV3LWFycml2YWxzX19wcm9kdWN0X190aXRsZVxcbiAgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICM0NDQ0NDQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luOiAyMHB4IDAgMTJweCAwO1xcbn1cXG5cXG4ubmV3LWFycml2YWxzXFxuICAubmV3LWFycml2YWxzX19wcm9kdWN0c1xcbiAgLm5ldy1hcnJpdmFsc19fcHJvZHVjdFxcbiAgLm5ldy1hcnJpdmFsc19fcHJvZHVjdF9faW1nIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5uZXctYXJyaXZhbHNcXG4gIC5uZXctYXJyaXZhbHNfX3Byb2R1Y3RzXFxuICAubmV3LWFycml2YWxzX19wcm9kdWN0XFxuICAubmV3LWFycml2YWxzX19wcm9kdWN0X19pbWc6aG92ZXJcXG4gIGltZyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcXG59XFxuXFxuLm5ldy1hcnJpdmFsc1xcbiAgLm5ldy1hcnJpdmFsc19fcHJvZHVjdHNcXG4gIC5uZXctYXJyaXZhbHNfX3Byb2R1Y3RcXG4gIC5uZXctYXJyaXZhbHNfX3Byb2R1Y3RfX3ByaWNlIHtcXG4gIGNvbG9yOiAjZmYyMDIwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBTdGFydCBHYWxsZXJ5ICovXFxuLmdhbGxlcnkge1xcbiAgbWluLWhlaWdodDogNzAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xcbiAgZ3JpZC1nYXA6IDMwcHg7XFxuICBtYXJnaW46IDQwcHggMDtcXG59XFxuXFxuLmdhbGxlcnkgLmdhbGxlcnlfX2l0ZW0ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmdhbGxlcnkgLmdhbGxlcnlfX2l0ZW06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxMCwgMjgsIDAuMyk7XFxuICB6LWluZGV4OiAxO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXG59XFxuXFxuLmdhbGxlcnkgLmdhbGxlcnlfX2l0ZW06aG92ZXI6OmJlZm9yZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZ2FsbGVyeSAuZ2FsbGVyeV9faXRlbSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbn1cXG5cXG4uZ2FsbGVyeSAuZ2FsbGVyeV9faXRlbTpob3ZlciBpbWcge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLyogU3RhcnQgUG9wdWxhciBJdGVtcyAqL1xcbi5wb3B1bGFyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMTUwcHggMDtcXG59XFxuXFxuLnBvcHVsYXIgLnBvcHVsYXJfX2hlYWRlciB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5wb3B1bGFyIC5wb3B1bGFyX19oZWFkZXIgLnBvcHVsYXJfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbn1cXG5cXG4ucG9wdWxhciAucG9wdWxhcl9faGVhZGVyIC5wb3B1bGFyX19kZXNjIHtcXG4gIGNvbG9yOiAjNzc3O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ucG9wdWxhciAucG9wdWxhcl9fcHJvZHVjdHMge1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLnBvcHVsYXIgLnBvcHVsYXJfX3Byb2R1Y3RzIC5wb3B1bGFyX19wcm9kdWN0IC5wb3B1bGFyX19wcm9kdWN0X19ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBvcHVsYXJcXG4gIC5wb3B1bGFyX19wcm9kdWN0c1xcbiAgLnBvcHVsYXJfX3Byb2R1Y3RcXG4gIC5wb3B1bGFyX19wcm9kdWN0X19ib2R5XFxuICAuZmEtaGVhcnQge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ucG9wdWxhclxcbiAgLnBvcHVsYXJfX3Byb2R1Y3RzXFxuICAucG9wdWxhcl9fcHJvZHVjdFxcbiAgLnBvcHVsYXJfX3Byb2R1Y3RfX2JvZHk6aG92ZXJcXG4gIC5mYS1oZWFydCB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucG9wdWxhclxcbiAgLnBvcHVsYXJfX3Byb2R1Y3RzXFxuICAucG9wdWxhcl9fcHJvZHVjdFxcbiAgLnBvcHVsYXJfX3Byb2R1Y3RfX2JvZHlcXG4gIC5wb3B1bGFyX19idG4ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZjIwMjA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLnBvcHVsYXJcXG4gIC5wb3B1bGFyX19wcm9kdWN0c1xcbiAgLnBvcHVsYXJfX3Byb2R1Y3RcXG4gIC5wb3B1bGFyX19wcm9kdWN0X19ib2R5OmhvdmVyXFxuICAucG9wdWxhcl9fYnRuIHtcXG4gIGhlaWdodDogMTUlO1xcbiAgbWF4LWhlaWdodDogMTAwMHB4O1xcbiAgcGFkZGluZzogMTJweCAwO1xcbn1cXG5cXG4ucG9wdWxhclxcbiAgLnBvcHVsYXJfX3Byb2R1Y3RzXFxuICAucG9wdWxhcl9fcHJvZHVjdFxcbiAgLnBvcHVsYXJfX3Byb2R1Y3RfX2JvZHlcXG4gIC5wb3B1bGFyX19idG46aG92ZXI6OmJlZm9yZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucG9wdWxhciAucG9wdWxhcl9fcHJvZHVjdHMgLnBvcHVsYXJfX3Byb2R1Y3QgLnBvcHVsYXJfX3Byb2R1Y3RfX3RpdGxlIHtcXG4gIGNvbG9yOiAjNDQ0NDQ0O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbjogMTVweCAwO1xcbn1cXG5cXG4ucG9wdWxhciAucG9wdWxhcl9fcHJvZHVjdHMgLnBvcHVsYXJfX3Byb2R1Y3QgLnBvcHVsYXJfX3Byb2R1Y3RfX3ByaWNlIHtcXG4gIGNvbG9yOiAjNDQ0NDQ0O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ucG9wdWxhciAucG9wdWxhcl9fbW9yZV9fYnRuIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxufVxcbi8qIFN0YXJ0IE1lZGlhIFF1ZXJpZXNcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xcbiAgLyogU3RhcnQgVXRpbGl0aWVzICovXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXG4gIH1cXG5cXG4gIC8qIFN0YXJ0IEhlcm8gKi9cXG4gIC5oZXJvIC5oZXJvX19idG4ge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcblxcbiAgLyogU3RhcnQgTmV3IEFycml2YWxzICovXFxuICAubmV3LWFycml2YWxzIC5uZXctYXJyaXZhbHNfX3Byb2R1Y3RzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIGF1dG8gYXV0bztcXG4gIH1cXG5cXG4gIC8qIFN0YXJ0IEdhbGxlcnkgKi9cXG4gIC5nYWxsZXJ5IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gIH1cXG5cXG4gIC5nYWxsZXJ5IC5nYWxsZXJ5X19pdGVtOm50aC1jaGlsZCgxKSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMztcXG4gIH1cXG5cXG4gIC5nYWxsZXJ5IC5nYWxsZXJ5X19pdGVtOm50aC1jaGlsZCgyKSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMztcXG4gIH1cXG5cXG4gIC5nYWxsZXJ5IC5nYWxsZXJ5X19pdGVtOm50aC1jaGlsZCgzKSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xcbiAgICBncmlkLXJvdzogNCAvIHNwYW4gMjtcXG4gIH1cXG5cXG4gIC5nYWxsZXJ5IC5nYWxsZXJ5X19pdGVtOm50aC1jaGlsZCg0KSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xcbiAgICBncmlkLXJvdzogNCAvIHNwYW4gMjtcXG4gIH1cXG59XFxuXFxuLyogU3R5bGVzIGZvciB0YWJsZXQgYW5kIGFib3ZlIHNjcmVlbnMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLyogU3RhcnQgVXRpbGl0aWVzICovXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA3NjVweDtcXG4gIH1cXG5cXG4gIC8qIFN0YXJ0IE5hdmJhciAqL1xcbiAgaGVhZGVyIC5yaWdodF9faWNvbnMge1xcbiAgICB0b3A6IDUwJTtcXG4gICAgcmlnaHQ6IDEyMHB4O1xcbiAgICBib3R0b206IHVuc2V0O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB9XFxuXFxuICBoZWFkZXIgLnJpZ2h0X19pY29ucyBhOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZjIwMjA7XFxuICB9XFxuXFxuICAvKiBTdGFydCBIZXJvICovXFxuICAuaGVybyAuaGVyb19fY29udGVudCAuaGVyb19fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB9XFxuXFxuICAuaGVybyAuaGVyb19faW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAvKiBTdGFydCBOZXcgQXJyaXZhbHMgKi9cXG4gIC5uZXctYXJyaXZhbHMgLm5ldy1hcnJpdmFsc19fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICB9XFxuXFxuICAubmV3LWFycml2YWxzIC5uZXctYXJyaXZhbHNfX3Byb2R1Y3RzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIGF1dG8gYXV0byBhdXRvO1xcbiAgfVxcblxcbiAgLm5ldy1hcnJpdmFsc1xcbiAgICAubmV3LWFycml2YWxzX19wcm9kdWN0c1xcbiAgICAubmV3LWFycml2YWxzX19wcm9kdWN0XFxuICAgIC5uZXctYXJyaXZhbHNfX3Byb2R1Y3RfX3RpdGxlXFxuICAgIGEge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICB9XFxuXFxuICAvKiBTdGFydCBQb3B1bGFyIEl0ZW1zICAqL1xcbiAgLnBvcHVsYXIgLnBvcHVsYXJfX3Byb2R1Y3RzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIH1cXG5cXG4gIC5wb3B1bGFyIC5wb3B1bGFyX19oZWFkZXIge1xcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzMyU7XFxuICB9XFxuXFxuICAucG9wdWxhciAucG9wdWxhcl9fcHJvZHVjdHMgLnBvcHVsYXJfX3Byb2R1Y3QgLnBvcHVsYXJfX3Byb2R1Y3RfX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgfVxcblxcbiAgLnBvcHVsYXIgLnBvcHVsYXJfX3Byb2R1Y3RzIC5wb3B1bGFyX19wcm9kdWN0IC5wb3B1bGFyX19wcm9kdWN0X19wcmljZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG59XFxuXFxuLyogU3R5bGVzIGZvciBkZXNrdG9wIGFuZCBhYm92ZSAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAvKiBTdGFydCBVdGlsaXRpZXMgKi9cXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xcbiAgfVxcblxcbiAgLyogU3RhcnQgTmF2YmFyICovXFxuICBoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4IDQ1cHg7XFxuICB9XFxuXFxuICAubWVudV9fdG9nZ2xlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubmF2YmFyIHtcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpO1xcbiAgICBwYWRkaW5nOiAyM3B4IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLm5hdmJhciAubWVudSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMDtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICB9XFxuXFxuICAubmF2YmFyIC5tZW51LmNsb3NlIHtcXG4gICAgbWF4LWhlaWdodDogMTUwMHB4O1xcbiAgfVxcblxcbiAgLm5hdmJhciAubWVudSA+IGxpOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZjIwMjA7XFxuICB9XFxuXFxuICAubmF2YmFyIC5tZW51ID4gbGk6Zmlyc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLXRvcDogMDtcXG4gIH1cXG5cXG4gIC5uYXZiYXIgLm1lbnUgPiBsaTpsYXN0LWNoaWxkIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICB9XFxuXFxuICAubmF2YmFyIC5tZW51IGxpIGEsXFxuICAubmF2YmFyIC5tZW51IGxpIHNwYW4ge1xcbiAgICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICB9XFxuXFxuICAubmF2YmFyIC5tZW51IC5mYS1wbHVzLFxcbiAgLm5hdmJhciAubWVudSAuZmEtbWludXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm5hdmJhciAubWVudSBsaSAuc3ViX19tZW51IHtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjEwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZmYyMDIwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIH1cXG5cXG4gIC5uYXZiYXIgLm1lbnUgbGkuc3ViX19tZW51X190b2dnbGVyOmhvdmVyIC5zdWJfX21lbnUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgLm5hdmJhciAubWVudSBsaSAuc3ViX19tZW51OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA1cHg7XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkICNmZjIwMjA7XFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0yMHB4O1xcbiAgICBsZWZ0OiAyNXB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgfVxcblxcbiAgLm5hdmJhciAubWVudSBsaSB1bC5zdWJfX21lbnUuY2xvc2Uge1xcbiAgICBtYXgtaGVpZ2h0OiAxNTAwcHg7XFxuICB9XFxuXFxuICAubmF2YmFyIC5tZW51IGxpIHVsLnN1Yl9fbWVudSBsaSBhIHtcXG4gICAgY29sb3I6ICMwYjFjMzk7XFxuICB9XFxuXFxuICAubmF2YmFyIC5tZW51IGxpIHVsLnN1Yl9fbWVudSBsaSBhOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZjIwMjA7XFxuICB9XFxuXFxuICAubmF2YmFyIC5tZW51IGxpOjphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgaGVhZGVyIC5yaWdodF9faWNvbnMge1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxuXFxuICAvKiBTdGFydCBIZXJvICovXFxuICAuaGVybyAuaGVyb19fY29udGVudCAuaGVyb19fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICB9XFxuXFxuICAuaGVybyAuY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLmhlcm8gLmhlcm9fX2ltZyB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHJpZ2h0OiAtMTAwcHg7XFxuICB9XFxuXFxuICAvKiBTdGFydCBHYWxsZXJ5ICovXFxuICAuZ2FsbGVyeSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxuXFxuICAuZ2FsbGVyeSAuZ2FsbGVyeV9faXRlbTpudGgtY2hpbGQoMSkge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDI7XFxuICB9XFxuXFxuICAuZ2FsbGVyeSAuZ2FsbGVyeV9faXRlbTpudGgtY2hpbGQoMikge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDI7XFxuICB9XFxuXFxuICAuZ2FsbGVyeSAuZ2FsbGVyeV9faXRlbTpudGgtY2hpbGQoMykge1xcbiAgICBncmlkLWNvbHVtbjogNCAvIHNwYW4gMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDE7XFxuICB9XFxuXFxuICAuZ2FsbGVyeSAuZ2FsbGVyeV9faXRlbTpudGgtY2hpbGQoNCkge1xcbiAgICBncmlkLWNvbHVtbjogNCAvIHNwYW4gMTtcXG4gICAgZ3JpZC1yb3c6IDIgLyBzcGFuIDE7XFxuICB9XFxuXFxuICAvKiBTdGFydCBQb3B1bGFyIEl0ZW1zICAqL1xcbiAgLnBvcHVsYXIgLnBvcHVsYXJfX3Byb2R1Y3RzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuXFxuLyogU3R5bGUgZm9yIGxhcmdlIHNjcmVlbnMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC8qIFN0YXJ0IFV0aWxpdGllcyAqL1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTE3MHB4O1xcbiAgfVxcblxcbiAgLyogU3RhcnQgSGVybyAqL1xcbiAgLmhlcm8gLmhlcm9fX2NvbnRlbnQgLmhlcm9fX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiA5NnB4O1xcbiAgfVxcblxcbiAgLmhlcm8gLmhlcm9fX2ltZyB7XFxuICAgIHJpZ2h0OiAtNjBweDtcXG4gIH1cXG5cXG4gIC8qIFN0YXJ0IE5ldyBhcnJpdmFscyAqL1xcbiAgLm5ldy1hcnJpdmFscyAubmV3LWFycml2YWxzX19wcm9kdWN0cyB7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyBhdXRvIGF1dG8gYXV0bztcXG4gIH1cXG5cXG4gIC8qIFN0YXJ0IFBvcHVsYXIgSXRlbXMgKi9cXG4gIC5wb3B1bGFyIC5wb3B1bGFyX19oZWFkZXIge1xcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzMyU7XFxuICB9XFxufVxcblxcbi8qIFN0YXJ0IEFuaW1hdGlvbiAqL1xcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkaW5nLXNsaWRlLWluIHtcXG4gIDAlIHtcXG4gICAgbGVmdDogLTEwMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQVc7QUFDWDtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7Ozs7OztFQVFFLHVDQUF1QztFQUN2QyxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxpQ0FBaUM7RUFDakMsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFF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QkFBd0I7RUFDeEI7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsT0FBTztJQUNQLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdsb2JhbCAqL1xcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDk2MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5hLFxcbnNwYW4ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxucCxcXG5saSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBTdGFydCBOYXZiYXIgKi9cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogMjBweCAyNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB6LWluZGV4OiAyO1xcbiAgdHJhbnNpdGlvbjogMC44cztcXG59XFxuXFxuaGVhZGVyLmZpeGVkIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDE1cHggcmdiYSgyNSwyNSwyNSwwLjEpO1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggcmdiYSgyNSwyNSwyNSwwLjEpO1xcbn1cXG5cXG5oZWFkZXIgLmxvZ28gaW1nIHtcXG4gIHdpZHRoOiAxMzJweDtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ubWVudV9fdG9nZ2xlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBjb2xvcjogI2ZmMjAyMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdmJhciAubWVudSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWF4LWhlaWdodDogMTUwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMsIDAuNTE1LCAwLjk1NSk7XFxufVxcblxcbi5uYXZiYXIgLm1lbnUuY2xvc2Uge1xcbiAgbWF4LWhlaWdodDogMDtcXG59XFxuXFxuLm5hdmJhciAubWVudSA+IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAgMjVweDtcXG59XFxuXFxuLm5hdmJhciAubWVudSA+IGxpOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG5cXG4ubmF2YmFyIC5tZW51ID4gbGk6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLm5hdmJhciAubWVudSBsaSAuZmEtcGx1cyB7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5uYXZiYXIgLm1lbnUgbGkgLnN1Yl9fbWVudSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHRleHQtaW5kZW50OiAyMHB4O1xcbiAgbWF4LWhlaWdodDogMTUwMHB4O1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5uYXZiYXIgLm1lbnUgbGkgdWwuc3ViX19tZW51LmNsb3NlIHtcXG4gIG1heC1oZWlnaHQ6IDA7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxufVxcblxcbi5uYXZiYXIgLm1lbnUgbGk6OmFmdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmhlYWRlciAucmlnaHRfX2ljb25zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAyNXB4O1xcbiAgYm90dG9tOiAtNDBweDtcXG4gIGdhcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuaGVhZGVyIC5yaWdodF9faWNvbnMgbGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBTdGFydCBIZXJvICovXFxuLmhlcm8ge1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmhlcm8gLmhlcm9fX2NvbnRlbnQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmhlcm8gLmhlcm9fX2NvbnRlbnQgLmhlcm9fX3RpdGxlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiAjMGIxYzM5O1xcbiAgZm9udC1zaXplOiAzM3B4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XFxuICBhbmltYXRpb246IGZhZGluZy1zbGlkZS1pbiAxcztcXG59XFxuXFxuLmhlcm8gLmhlcm9fX2NvbnRlbnQgLmhlcm9fX2Rlc2Mge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6ICMyMTIwMjU7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcXG4gIGFuaW1hdGlvbjogZmFkaW5nLXNsaWRlLWluIDFzIDAuMXM7XFxufVxcblxcbi5oZXJvIC5oZXJvX19idG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YjtcXG4gIG1hcmdpbi10b3A6IDI2cHg7XFxuICBhbmltYXRpb246IGZhZGluZy1zbGlkZS1pbiAxcyAwLjJzO1xcbn1cXG5cXG4uaGVybyAuaGVyb19fYnRuOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjAyMDtcXG59XFxuXFxuLmhlcm8gLmhlcm9fX2ltZyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYW5pbWF0aW9uOiBwdWxzZSAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbi8qIFN0YXJ0IE5ldyBBcnJpdmFscyAqL1xcbi5uZXctYXJyaXZhbHMge1xcbiAgbWFyZ2luOiAxMjBweCAwO1xcbn1cXG5cXG4ubmV3LWFycml2YWxzIC5uZXctYXJyaXZhbHNfX3RpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbi5uZXctYXJyaXZhbHMgLm5ldy1hcnJpdmFsc19fcHJvZHVjdHMge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLm5ldy1hcnJpdmFsc1xcbiAgLm5ldy1hcnJpdmFsc19fcHJvZHVjdHNcXG4gIC5uZXctYXJyaXZhbHNfX3Byb2R1Y3RcXG4gIC5uZXctYXJyaXZhbHNfX3Byb2R1Y3RfX3RpdGxlXFxuICBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogIzQ0NDQ0NDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW46IDIwcHggMCAxMnB4IDA7XFxufVxcblxcbi5uZXctYXJyaXZhbHNcXG4gIC5uZXctYXJyaXZhbHNfX3Byb2R1Y3RzXFxuICAubmV3LWFycml2YWxzX19wcm9kdWN0XFxuICAubmV3LWFycml2YWxzX19wcm9kdWN0X19pbWcge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm5ldy1hcnJpdmFsc1xcbiAgLm5ldy1hcnJpdmFsc19fcHJvZHVjdHNcXG4gIC5uZXctYXJyaXZhbHNfX3Byb2R1Y3RcXG4gIC5uZXctYXJyaXZhbHNfX3Byb2R1Y3RfX2ltZzpob3ZlclxcbiAgaW1nIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xcbn1cXG5cXG4ubmV3LWFycml2YWxzXFxuICAubmV3LWFycml2YWxzX19wcm9kdWN0c1xcbiAgLm5ldy1hcnJpdmFsc19fcHJvZHVjdFxcbiAgLm5ldy1hcnJpdmFsc19fcHJvZHVjdF9fcHJpY2Uge1xcbiAgY29sb3I6ICNmZjIwMjA7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIFN0YXJ0IEdhbGxlcnkgKi9cXG4uZ2FsbGVyeSB7XFxuICBtaW4taGVpZ2h0OiA3MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxuICBncmlkLWdhcDogMzBweDtcXG4gIG1hcmdpbjogNDBweCAwO1xcbn1cXG5cXG4uZ2FsbGVyeSAuZ2FsbGVyeV9faXRlbSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZ2FsbGVyeSAuZ2FsbGVyeV9faXRlbTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEwLCAyOCwgMC4zKTtcXG4gIHotaW5kZXg6IDE7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xcbn1cXG5cXG4uZ2FsbGVyeSAuZ2FsbGVyeV9faXRlbTpob3Zlcjo6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5nYWxsZXJ5IC5nYWxsZXJ5X19pdGVtIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxufVxcblxcbi5nYWxsZXJ5IC5nYWxsZXJ5X19pdGVtOmhvdmVyIGltZyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4vKiBTdGFydCBQb3B1bGFyIEl0ZW1zICovXFxuLnBvcHVsYXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxNTBweCAwO1xcbn1cXG5cXG4ucG9wdWxhciAucG9wdWxhcl9faGVhZGVyIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnBvcHVsYXIgLnBvcHVsYXJfX2hlYWRlciAucG9wdWxhcl9fdGl0bGUge1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxufVxcblxcbi5wb3B1bGFyIC5wb3B1bGFyX19oZWFkZXIgLnBvcHVsYXJfX2Rlc2Mge1xcbiAgY29sb3I6ICM3Nzc7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5wb3B1bGFyIC5wb3B1bGFyX19wcm9kdWN0cyB7XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ucG9wdWxhciAucG9wdWxhcl9fcHJvZHVjdHMgLnBvcHVsYXJfX3Byb2R1Y3QgLnBvcHVsYXJfX3Byb2R1Y3RfX2JvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucG9wdWxhclxcbiAgLnBvcHVsYXJfX3Byb2R1Y3RzXFxuICAucG9wdWxhcl9fcHJvZHVjdFxcbiAgLnBvcHVsYXJfX3Byb2R1Y3RfX2JvZHlcXG4gIC5mYS1oZWFydCB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5wb3B1bGFyXFxuICAucG9wdWxhcl9fcHJvZHVjdHNcXG4gIC5wb3B1bGFyX19wcm9kdWN0XFxuICAucG9wdWxhcl9fcHJvZHVjdF9fYm9keTpob3ZlclxcbiAgLmZhLWhlYXJ0IHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wb3B1bGFyXFxuICAucG9wdWxhcl9fcHJvZHVjdHNcXG4gIC5wb3B1bGFyX19wcm9kdWN0XFxuICAucG9wdWxhcl9fcHJvZHVjdF9fYm9keVxcbiAgLnBvcHVsYXJfX2J0biB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmMjAyMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4ucG9wdWxhclxcbiAgLnBvcHVsYXJfX3Byb2R1Y3RzXFxuICAucG9wdWxhcl9fcHJvZHVjdFxcbiAgLnBvcHVsYXJfX3Byb2R1Y3RfX2JvZHk6aG92ZXJcXG4gIC5wb3B1bGFyX19idG4ge1xcbiAgaGVpZ2h0OiAxNSU7XFxuICBtYXgtaGVpZ2h0OiAxMDAwcHg7XFxuICBwYWRkaW5nOiAxMnB4IDA7XFxufVxcblxcbi5wb3B1bGFyXFxuICAucG9wdWxhcl9fcHJvZHVjdHNcXG4gIC5wb3B1bGFyX19wcm9kdWN0XFxuICAucG9wdWxhcl9fcHJvZHVjdF9fYm9keVxcbiAgLnBvcHVsYXJfX2J0bjpob3Zlcjo6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wb3B1bGFyIC5wb3B1bGFyX19wcm9kdWN0cyAucG9wdWxhcl9fcHJvZHVjdCAucG9wdWxhcl9fcHJvZHVjdF9fdGl0bGUge1xcbiAgY29sb3I6ICM0NDQ0NDQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luOiAxNXB4IDA7XFxufVxcblxcbi5wb3B1bGFyIC5wb3B1bGFyX19wcm9kdWN0cyAucG9wdWxhcl9fcHJvZHVjdCAucG9wdWxhcl9fcHJvZHVjdF9fcHJpY2Uge1xcbiAgY29sb3I6ICM0NDQ0NDQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5wb3B1bGFyIC5wb3B1bGFyX19tb3JlX19idG4ge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIHdpZHRoOiAyNTBweDtcXG59XFxuLyogU3RhcnQgTWVkaWEgUXVlcmllc1xcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XFxuICAvKiBTdGFydCBVdGlsaXRpZXMgKi9cXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xcbiAgfVxcblxcbiAgLyogU3RhcnQgSGVybyAqL1xcbiAgLmhlcm8gLmhlcm9fX2J0biB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxuXFxuICAvKiBTdGFydCBOZXcgQXJyaXZhbHMgKi9cXG4gIC5uZXctYXJyaXZhbHMgLm5ldy1hcnJpdmFsc19fcHJvZHVjdHMge1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gYXV0byBhdXRvO1xcbiAgfVxcblxcbiAgLyogU3RhcnQgR2FsbGVyeSAqL1xcbiAgLmdhbGxlcnkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbiAgfVxcblxcbiAgLmdhbGxlcnkgLmdhbGxlcnlfX2l0ZW06bnRoLWNoaWxkKDEpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XFxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAzO1xcbiAgfVxcblxcbiAgLmdhbGxlcnkgLmdhbGxlcnlfX2l0ZW06bnRoLWNoaWxkKDIpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XFxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAzO1xcbiAgfVxcblxcbiAgLmdhbGxlcnkgLmdhbGxlcnlfX2l0ZW06bnRoLWNoaWxkKDMpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XFxuICAgIGdyaWQtcm93OiA0IC8gc3BhbiAyO1xcbiAgfVxcblxcbiAgLmdhbGxlcnkgLmdhbGxlcnlfX2l0ZW06bnRoLWNoaWxkKDQpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XFxuICAgIGdyaWQtcm93OiA0IC8gc3BhbiAyO1xcbiAgfVxcbn1cXG5cXG4vKiBTdHlsZXMgZm9yIHRhYmxldCBhbmQgYWJvdmUgc2NyZWVucyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAvKiBTdGFydCBVdGlsaXRpZXMgKi9cXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDc2NXB4O1xcbiAgfVxcblxcbiAgLyogU3RhcnQgTmF2YmFyICovXFxuICBoZWFkZXIgLnJpZ2h0X19pY29ucyB7XFxuICAgIHRvcDogNTAlO1xcbiAgICByaWdodDogMTIwcHg7XFxuICAgIGJvdHRvbTogdW5zZXQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIH1cXG5cXG4gIGhlYWRlciAucmlnaHRfX2ljb25zIGE6aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmMjAyMDtcXG4gIH1cXG5cXG4gIC8qIFN0YXJ0IEhlcm8gKi9cXG4gIC5oZXJvIC5oZXJvX19jb250ZW50IC5oZXJvX190aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIH1cXG5cXG4gIC5oZXJvIC5oZXJvX19pbWcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC8qIFN0YXJ0IE5ldyBBcnJpdmFscyAqL1xcbiAgLm5ldy1hcnJpdmFscyAubmV3LWFycml2YWxzX190aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gIH1cXG5cXG4gIC5uZXctYXJyaXZhbHMgLm5ldy1hcnJpdmFsc19fcHJvZHVjdHMge1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gYXV0byBhdXRvIGF1dG87XFxuICB9XFxuXFxuICAubmV3LWFycml2YWxzXFxuICAgIC5uZXctYXJyaXZhbHNfX3Byb2R1Y3RzXFxuICAgIC5uZXctYXJyaXZhbHNfX3Byb2R1Y3RcXG4gICAgLm5ldy1hcnJpdmFsc19fcHJvZHVjdF9fdGl0bGVcXG4gICAgYSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gIH1cXG5cXG4gIC8qIFN0YXJ0IFBvcHVsYXIgSXRlbXMgICovXFxuICAucG9wdWxhciAucG9wdWxhcl9fcHJvZHVjdHMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgfVxcblxcbiAgLnBvcHVsYXIgLnBvcHVsYXJfX2hlYWRlciB7XFxuICAgIG1heC13aWR0aDogODMuMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5wb3B1bGFyIC5wb3B1bGFyX19wcm9kdWN0cyAucG9wdWxhcl9fcHJvZHVjdCAucG9wdWxhcl9fcHJvZHVjdF9fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICB9XFxuXFxuICAucG9wdWxhciAucG9wdWxhcl9fcHJvZHVjdHMgLnBvcHVsYXJfX3Byb2R1Y3QgLnBvcHVsYXJfX3Byb2R1Y3RfX3ByaWNlIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcbn1cXG5cXG4vKiBTdHlsZXMgZm9yIGRlc2t0b3AgYW5kIGFib3ZlICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC8qIFN0YXJ0IFV0aWxpdGllcyAqL1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogOTYwcHg7XFxuICB9XFxuXFxuICAvKiBTdGFydCBOYXZiYXIgKi9cXG4gIGhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDIwcHggNDVweDtcXG4gIH1cXG5cXG4gIC5tZW51X190b2dnbGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5uYXZiYXIge1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSk7XFxuICAgIHBhZGRpbmc6IDIzcHggMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAubmF2YmFyIC5tZW51IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAwO1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIH1cXG5cXG4gIC5uYXZiYXIgLm1lbnUuY2xvc2Uge1xcbiAgICBtYXgtaGVpZ2h0OiAxNTAwcHg7XFxuICB9XFxuXFxuICAubmF2YmFyIC5tZW51ID4gbGk6aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmMjAyMDtcXG4gIH1cXG5cXG4gIC5uYXZiYXIgLm1lbnUgPiBsaTpmaXJzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgfVxcblxcbiAgLm5hdmJhciAubWVudSA+IGxpOmxhc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIH1cXG5cXG4gIC5uYXZiYXIgLm1lbnUgbGkgYSxcXG4gIC5uYXZiYXIgLm1lbnUgbGkgc3BhbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIH1cXG5cXG4gIC5uYXZiYXIgLm1lbnUgLmZhLXBsdXMsXFxuICAubmF2YmFyIC5tZW51IC5mYS1taW51cyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubmF2YmFyIC5tZW51IGxpIC5zdWJfX21lbnUge1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxuICAgIG1pbi13aWR0aDogMTgwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMTAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmZjIwMjA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgfVxcblxcbiAgLm5hdmJhciAubWVudSBsaS5zdWJfX21lbnVfX3RvZ2dsZXI6aG92ZXIgLnN1Yl9fbWVudSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICAubmF2YmFyIC5tZW51IGxpIC5zdWJfX21lbnU6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgYm9yZGVyOiA4cHggc29saWQgI2ZmMjAyMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTIwcHg7XFxuICAgIGxlZnQ6IDI1cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICB9XFxuXFxuICAubmF2YmFyIC5tZW51IGxpIHVsLnN1Yl9fbWVudS5jbG9zZSB7XFxuICAgIG1heC1oZWlnaHQ6IDE1MDBweDtcXG4gIH1cXG5cXG4gIC5uYXZiYXIgLm1lbnUgbGkgdWwuc3ViX19tZW51IGxpIGEge1xcbiAgICBjb2xvcjogIzBiMWMzOTtcXG4gIH1cXG5cXG4gIC5uYXZiYXIgLm1lbnUgbGkgdWwuc3ViX19tZW51IGxpIGE6aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmMjAyMDtcXG4gIH1cXG5cXG4gIC5uYXZiYXIgLm1lbnUgbGk6OmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICBoZWFkZXIgLnJpZ2h0X19pY29ucyB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gIH1cXG5cXG4gIC8qIFN0YXJ0IEhlcm8gKi9cXG4gIC5oZXJvIC5oZXJvX19jb250ZW50IC5oZXJvX190aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gIH1cXG5cXG4gIC5oZXJvIC5jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAuaGVybyAuaGVyb19faW1nIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcmlnaHQ6IC0xMDBweDtcXG4gIH1cXG5cXG4gIC8qIFN0YXJ0IEdhbGxlcnkgKi9cXG4gIC5nYWxsZXJ5IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG5cXG4gIC5nYWxsZXJ5IC5nYWxsZXJ5X19pdGVtOm50aC1jaGlsZCgxKSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMjtcXG4gIH1cXG5cXG4gIC5nYWxsZXJ5IC5nYWxsZXJ5X19pdGVtOm50aC1jaGlsZCgyKSB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gc3BhbiAxO1xcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMjtcXG4gIH1cXG5cXG4gIC5nYWxsZXJ5IC5nYWxsZXJ5X19pdGVtOm50aC1jaGlsZCgzKSB7XFxuICAgIGdyaWQtY29sdW1uOiA0IC8gc3BhbiAxO1xcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMTtcXG4gIH1cXG5cXG4gIC5nYWxsZXJ5IC5nYWxsZXJ5X19pdGVtOm50aC1jaGlsZCg0KSB7XFxuICAgIGdyaWQtY29sdW1uOiA0IC8gc3BhbiAxO1xcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMTtcXG4gIH1cXG5cXG4gIC8qIFN0YXJ0IFBvcHVsYXIgSXRlbXMgICovXFxuICAucG9wdWxhciAucG9wdWxhcl9fcHJvZHVjdHMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbn1cXG5cXG4vKiBTdHlsZSBmb3IgbGFyZ2Ugc2NyZWVucyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLyogU3RhcnQgVXRpbGl0aWVzICovXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMTcwcHg7XFxuICB9XFxuXFxuICAvKiBTdGFydCBIZXJvICovXFxuICAuaGVybyAuaGVyb19fY29udGVudCAuaGVyb19fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDk2cHg7XFxuICB9XFxuXFxuICAuaGVybyAuaGVyb19faW1nIHtcXG4gICAgcmlnaHQ6IC02MHB4O1xcbiAgfVxcblxcbiAgLyogU3RhcnQgTmV3IGFycml2YWxzICovXFxuICAubmV3LWFycml2YWxzIC5uZXctYXJyaXZhbHNfX3Byb2R1Y3RzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIGF1dG8gYXV0byBhdXRvO1xcbiAgfVxcblxcbiAgLyogU3RhcnQgUG9wdWxhciBJdGVtcyAqL1xcbiAgLnBvcHVsYXIgLnBvcHVsYXJfX2hlYWRlciB7XFxuICAgIG1heC13aWR0aDogNTguMzMzMzMzJTtcXG4gIH1cXG59XFxuXFxuLyogU3RhcnQgQW5pbWF0aW9uICovXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRpbmctc2xpZGUtaW4ge1xcbiAgMCUge1xcbiAgICBsZWZ0OiAtMTAwJTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgbGVmdDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVXRpbGl0aWVzICovXFxuLnNyLS1vbmx5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IC0xcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLmxpc3QtLXVuc3R5bGVkIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5yZWxhdGl2ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5maXhlZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi5ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZsZXgtLWNvbHVtbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uanVzdGlmeS0tYmV0d2VlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5qdXN0aWZ5LS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hbGlnbi0tY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhvdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIkhvdFxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMzBweDtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAzYztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYm94LXNoYWRvdzogMCAwIDJweCAjNGEwMDAwO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgbWluLXdpZHRoOiAxNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAzMHB4IDI4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMDIwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYnRuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGI7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgdHJhbnNpdGlvbjogMC40cyBjdWJpYy1iZXppZXIoMC41LCAxLjYsIDAuNCwgMC43KTtcXG59XFxuXFxuLmJ0bjpob3Zlcjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3V0aWxpdGllcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYztBQUNkO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx1Q0FBdUM7RUFDdkMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVXRpbGl0aWVzICovXFxuLnNyLS1vbmx5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IC0xcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLmxpc3QtLXVuc3R5bGVkIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5yZWxhdGl2ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5maXhlZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi5ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZsZXgtLWNvbHVtbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uanVzdGlmeS0tYmV0d2VlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5qdXN0aWZ5LS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hbGlnbi0tY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhvdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIkhvdFxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMzBweDtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAzYztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYm94LXNoYWRvdzogMCAwIDJweCAjNGEwMDAwO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgbWluLXdpZHRoOiAxNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAzMHB4IDI4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMDIwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYnRuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGI7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgdHJhbnNpdGlvbjogMC40cyBjdWJpYy1iZXppZXIoMC41LCAxLjYsIDAuNCwgMC43KTtcXG59XFxuXFxuLmJ0bjpob3Zlcjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91dGlsaXRpZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91dGlsaXRpZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIEltcG9ydCBHYWxsZXJ5IEltYWdlc1xyXG5pbXBvcnQgZ2FsbGVyeTEgZnJvbSBcIi4vYXNzZXRzL2ltZy9nYWxsZXJ5MS5wbmdcIjtcclxuaW1wb3J0IGdhbGxlcnkyIGZyb20gXCIuL2Fzc2V0cy9pbWcvZ2FsbGVyeTIucG5nXCI7XHJcbmltcG9ydCBnYWxsZXJ5MyBmcm9tIFwiLi9hc3NldHMvaW1nL2dhbGxlcnkzLnBuZ1wiO1xyXG5pbXBvcnQgZ2FsbGVyeTQgZnJvbSBcIi4vYXNzZXRzL2ltZy9nYWxsZXJ5NC5wbmdcIjtcclxuLy8gSW1wb3J0IFN0eWxlc1xyXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5jc3NcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMvdXRpbGl0aWVzLmNzc1wiO1xyXG4vLyBJbXBvcnQgQ29tcG9uZW50c1xyXG5pbXBvcnQgbmF2YmFyIGZyb20gXCIuL2NvbXBvbmVudHMvbmF2YmFyXCI7XHJcbmltcG9ydCBoZXJvIGZyb20gXCIuL2NvbXBvbmVudHMvaGVyb1wiO1xyXG5pbXBvcnQgbmV3QXJyaXZhbHMgZnJvbSBcIi4vY29tcG9uZW50cy9uZXdBcnJpdmFsc1wiO1xyXG5pbXBvcnQgZ2FsbGVyeSBmcm9tIFwiLi9jb21wb25lbnRzL2dhbGxlcnlcIjtcclxuaW1wb3J0IHBvcHVsYXJJdGVtcyBmcm9tIFwiLi9jb21wb25lbnRzL3BvcHVsYXJJdGVtc1wiO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5uYXZiYXIoKTtcclxuaGVybygpO1xyXG5uZXdBcnJpdmFscygpO1xyXG5nYWxsZXJ5KFxyXG4gIFtcclxuICAgIHtcclxuICAgICAgdXJsOiBnYWxsZXJ5MSxcclxuICAgICAgYWx0OiBcImdhbGxlcnkxXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6IGdhbGxlcnkyLFxyXG4gICAgICBhbHQ6IFwiZ2FsbGVyeTJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogZ2FsbGVyeTMsXHJcbiAgICAgIGFsdDogXCJnYWxsZXJ5M1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiBnYWxsZXJ5NCxcclxuICAgICAgYWx0OiBcImdhbGxlcnk0XCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgMixcclxuICAxLFxyXG4gIDIwXHJcbik7XHJcbnBvcHVsYXJJdGVtcygpO1xyXG5cclxuLy8gTmF2YmFyXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZGVyXCIpWzBdO1xyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xyXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51X190b2dnbGVyXCIpO1xyXG5jb25zdCBzdWJNZW51VG9nZ2xlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3ViX19tZW51X190b2dnbGVyXCIpO1xyXG5cclxuY29uc3Qgc3dpdGNoRml4ZWROYXYgPSAoKSA9PiB7XHJcbiAgLy8gQ2hlY2sgaWYgc2NyZWVuIGlzIGJpZ2dlciB0aGFuIG1lZGl1bVxyXG4gIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5OTIpIHtcclxuICAgIC8vIENoZWNrIGlmIHVzZXIgc2Nyb2xsZWQgbW9yZSB0aGFuIDIwMHB4XHJcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiAyMDApIHtcclxuICAgICAgLy8gQ2hlY2sgaWYgaXQgYWxyZWFkeSBoYXMgYSBmaXhlZCBjbGFzc1xyXG4gICAgICBpZiAoaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcImZpeGVkXCIpKSByZXR1cm47XHJcbiAgICAgIGhlYWRlci5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgLy8gV2FpdCB1bnRpbCB0aGUgb3BhY2l0eSBhbmltYXRpb24gZmluaXNoZXMgdG8gcHJldmVudCB0aGUgZmlyc3QgcGx1cyBhbmltYXRpb25cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJyZWxhdGl2ZVwiKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImZpeGVkXCIpO1xyXG4gICAgICB9LCAzMDApO1xyXG5cclxuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoKCkgPT4gKGhlYWRlci5zdHlsZS5vcGFjaXR5ID0gMSksIDgwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJyZWxhdGl2ZVwiKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiZml4ZWRcIik7XHJcblxyXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoKCkgPT4gKGhlYWRlci5zdHlsZS5vcGFjaXR5ID0gMSksIDcwMCk7XHJcbiAgfVxyXG4gIGlmIChoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZml4ZWRcIikpIHtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiZml4ZWRcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gTWFrZSBOYXZiYXIgRml4ZWQgYWZ0ZXIgcmVhY2hpbmcgc3BlY2lmaWMgcG9pbnRcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc3dpdGNoRml4ZWROYXYpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBzd2l0Y2hGaXhlZE5hdik7XHJcblxyXG4vLyBUb2dnbGUgTmF2YmFyXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJjbG9zZVwiKTtcclxufSk7XHJcblxyXG4vLyBUb2dnbGUgTmF2YmFyIHN1Yml0ZW1zXHJcbnN1Yk1lbnVUb2dnbGVyLmZvckVhY2goKHBhcmVudCkgPT4ge1xyXG4gIHBhcmVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJjbGlja1wiLFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gOTkxKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHN1Yk1lbnUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi5zdWJfX21lbnVcIik7XHJcbiAgICAgIGNvbnN0IG9wZW5JY29uID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtcGx1c1wiKTtcclxuICAgICAgY29uc3QgY2xvc2VJY29uID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtbWludXNcIik7XHJcbiAgICAgIG9wZW5JY29uLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgICAgIGNsb3NlSWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gICAgICBzdWJNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJjbG9zZVwiKTtcclxuICAgIH0sXHJcbiAgICB0cnVlXHJcbiAgKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJnYWxsZXJ5IiwicGhvdG9zIiwicm93cyIsImNvbHVtbnMiLCJnYXAiLCJtYWluIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRlbXAiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY29uY2F0IiwibWFwIiwicGhvdG8iLCJ1cmwiLCJhbHQiLCJqb2luIiwiYXBwZW5kQ2hpbGQiLCJjb250ZW50Iiwid2F0Y2giLCJoZXJvIiwibG9nbyIsIm5hdmJhciIsImJvZHkiLCJpbnNlcnRCZWZvcmUiLCJwcm9kdWN0MSIsInByb2R1Y3QyIiwicHJvZHVjdDMiLCJuZXdBcnJpdmFscyIsInByb2R1Y3RzIiwidGl0bGUiLCJpbWciLCJwcmljZSIsInByb2R1Y3QiLCJwb3B1bGFyMSIsInBvcHVsYXIyIiwicG9wdWxhcjMiLCJwb3B1bGFyNCIsInBvcHVsYXI1IiwicG9wdWxhcjYiLCJwb3B1bGFySXRlbXMiLCJnYWxsZXJ5MSIsImdhbGxlcnkyIiwiZ2FsbGVyeTMiLCJnYWxsZXJ5NCIsImhlYWRlciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibWVudSIsIm1lbnVCdG4iLCJzdWJNZW51VG9nZ2xlciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzd2l0Y2hGaXhlZE5hdiIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic2Nyb2xsWSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic3R5bGUiLCJvcGFjaXR5Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGUiLCJmb3JFYWNoIiwicGFyZW50Iiwic3ViTWVudSIsInF1ZXJ5U2VsZWN0b3IiLCJvcGVuSWNvbiIsImNsb3NlSWNvbiJdLCJzb3VyY2VSb290IjoiIn0=