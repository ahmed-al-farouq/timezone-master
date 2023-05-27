/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/img/gallery1.png
const gallery1_namespaceObject = __webpack_require__.p + "assets/img/gallery1.png";
;// CONCATENATED MODULE: ./src/assets/img/gallery2.png
const gallery2_namespaceObject = __webpack_require__.p + "assets/img/gallery2.png";
;// CONCATENATED MODULE: ./src/assets/img/gallery3.png
const gallery3_namespaceObject = __webpack_require__.p + "assets/img/gallery3.png";
;// CONCATENATED MODULE: ./src/assets/img/gallery4.png
const gallery4_namespaceObject = __webpack_require__.p + "assets/img/gallery4.png";
;// CONCATENATED MODULE: ./src/assets/img/logo.png
const logo_namespaceObject = __webpack_require__.p + "assets/img/logo.png";
;// CONCATENATED MODULE: ./src/components/navbar.js

var navbar = function navbar() {
  var main = document.getElementById("js-main");
  var temp = document.createElement("template");
  temp.innerHTML = "\n    <header class=\"flex\">\n      <div class=\"logo\">\n        <a href=\"/\" class=\"block\">\n          <img src=\"".concat(logo_namespaceObject, "\" alt=\"logo\" />\n        </a>\n      </div>\n      <nav id=\"navbar\" class=\"navbar\">\n        <ul class=\"menu list--unstyled flex close\" id=\"menu\">\n          <li>\n            <a href=\"/\">Home</a>\n          </li>\n          <li>\n            <a href=\"/\">Shop</a>\n          </li>\n          <li>\n            <a href=\"/\">About</a>\n          </li>\n          <li class=\"sub__menu__toggler hot\">\n            <span class=\"flex justify--between\">\n              Latest\n              <i class=\"fa-solid fa-plus\"></i>\n              <i class=\"fa-solid fa-minus hidden\"></i>\n            </span>\n            <ul class=\"flex sub__menu list--unstyled close\">\n              <li>\n                <a href=\"/\">Product List</a>\n              </li>\n              <li>\n                <a href=\"/\">Product Details</a>\n              </li>\n            </ul>\n          </li>\n          <li class=\"sub__menu__toggler\">\n            <span class=\"flex justify--between\">\n              Blog\n              <i class=\"fa-solid fa-plus\"></i>\n              <i class=\"fa-solid fa-minus hidden\"></i>\n            </span>\n            <ul class=\"flex sub__menu list--unstyled close\">\n              <li>\n                <a href=\"/\">Blog</a>\n              </li>\n              <li>\n                <a href=\"/\">Blog Details</a>\n              </li>\n            </ul>\n          </li>\n          <li class=\"sub__menu__toggler\">\n            <span class=\"flex justify--between\">\n              Pages\n              <i class=\"fa-solid fa-plus\"></i>\n              <i class=\"fa-solid fa-minus hidden\"></i>\n            </span>\n            <ul class=\"flex sub__menu list--unstyled close\">\n              <li>\n                <a href=\"/\">Login</a>\n              </li>\n              <li>\n                <a href=\"/\">Cart</a>\n              </li>\n              <li>\n                <a href=\"/\">Element</a>\n              </li>\n            </ul>\n          </li>\n          <li>\n            <a href=\"/\">Contact</a>\n          </li>\n        </ul>\n      </nav>\n      <ul class=\"flex list--unstyled right__icons\">\n        <li>\n          <a href=\"/\">\n            <span class=\"sr--only\">Search</span>\n            <i class=\"fa-solid fa-magnifying-glass\"></i>\n          </a>\n        </li>\n        <li>\n          <a href=\"/\">\n            <span class=\"sr--only\">Login</span>\n            <i class=\"fa-solid fa-user\"></i>\n          </a>\n        </li>\n        <li>\n          <a href=\"/\">\n            <span class=\"sr--only\">Shopping Cart</span>\n            <i class=\"fa-solid fa-cart-shopping\"></i>\n          </a>\n        </li>\n      </ul>\n      <button type=\"button\" class=\"menu__toggler\" id=\"menu__toggler\">\n        <span class=\"sr--only\">Menu Toggler</span>\n        <i class=\"fa-sharp fa-solid fa-bars\"></i>\n      </button>\n    </header>");
  return document.body.insertBefore(temp.content, main);
};
/* harmony default export */ const components_navbar = (navbar);
;// CONCATENATED MODULE: ./src/assets/img/watch.png
const watch_namespaceObject = __webpack_require__.p + "assets/img/watch.png";
;// CONCATENATED MODULE: ./src/components/hero.js

var hero = function hero() {
  var temp = document.createElement("template");
  temp.innerHTML = "\n    <section class=\"hero flex align--center\">\n      <div class=\"container flex align--center\">\n        <div class=\"hero__content flex flex--column\">\n          <h1 class=\"hero__title\">Select Your New Perfect Style</h1>\n          <p class=\"hero__desc\">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,\n            labore? Placeat modi tempora fugit, nostrum vel sapiente?\n          </p>\n          <a href=\"/\" class=\"btn hero__btn\">Shop Now</a>\n        </div>\n        <div class=\"hero__img\">\n          <img src=\"".concat(watch_namespaceObject, "\" alt=\"watch\" class=\"block\" />\n        </div>\n      </div>\n    </section>\n    ");
  return document.getElementById("js-main").appendChild(temp.content);
};
/* harmony default export */ const components_hero = (hero);
;// CONCATENATED MODULE: ./src/assets/img/new_product1.png
const new_product1_namespaceObject = __webpack_require__.p + "assets/img/new_product1.png";
;// CONCATENATED MODULE: ./src/assets/img/new_product2.png
const new_product2_namespaceObject = __webpack_require__.p + "assets/img/new_product2.png";
;// CONCATENATED MODULE: ./src/assets/img/new_product3.png
const new_product3_namespaceObject = __webpack_require__.p + "assets/img/new_product3.png";
;// CONCATENATED MODULE: ./src/components/newArrivals.js



var newArrivals = function newArrivals() {
  var temp = document.createElement("template");
  var products = [{
    title: "Thermo Ball Etip Gloves",
    url: "/",
    img: new_product1_namespaceObject,
    price: "45,743"
  }, {
    title: "Thermo Ball Etip Gloves",
    url: "/",
    img: new_product2_namespaceObject,
    price: "45,743"
  }, {
    title: "Thermo Ball Etip Gloves",
    url: "/",
    img: new_product3_namespaceObject,
    price: "45,743"
  }];
  temp.innerHTML = "\n  <section class=\"new-arrivals\">\n    <div class=\"container\">\n      <h2 class=\"new-arrivals__title\">New Arrivals</h2>\n      <div class=\"new-arrivals__products grid\">\n      ".concat(products.map(function (product) {
    return "\n        <div class=\"new-arrivals__product\">\n          <div class=\"new-arrivals__product__img\">\n            <a href=\"".concat(product.url, "\" class=\"block\">\n              <img\n                src=\"").concat(product.img, "\"\n                alt=\"").concat(product.title, "\"\n              />\n            </a>\n          </div>\n          <h3 class=\"new-arrivals__product__title\">\n            <a href=\"").concat(product.url, "\">").concat(product.title, "</a>\n          </h3>\n          <span class=\"new-arrivals__product__price\">$ ").concat(product.price, "</span>\n        </div>\n        ");
  }).join(""), "\n      </div>\n    </div>\n  </section>\n  ");
  return document.getElementById("js-main").appendChild(temp.content);
};
/* harmony default export */ const components_newArrivals = (newArrivals);
;// CONCATENATED MODULE: ./src/components/gallery.js
var gallery = function gallery(photos, rows, columns, gap) {
  var main = document.getElementById("js-main");
  var temp = document.createElement("template");
  temp.innerHTML = "\n    <section class=\"gallery grid\">\n      ".concat(photos.map(function (photo) {
    return "<div class=\"gallery__item\"><img src=\"".concat(photo.url, "\" alt=\"").concat(photo.alt, "\" /></div>");
  }).join(''), "\n    </section>\n  ");
  return main.appendChild(temp.content);
};
/* harmony default export */ const components_gallery = (gallery);
;// CONCATENATED MODULE: ./src/assets/img/popular1.png
const popular1_namespaceObject = __webpack_require__.p + "assets/img/popular1.png";
;// CONCATENATED MODULE: ./src/assets/img/popular2.png
const popular2_namespaceObject = __webpack_require__.p + "assets/img/popular2.png";
;// CONCATENATED MODULE: ./src/assets/img/popular3.png
const popular3_namespaceObject = __webpack_require__.p + "assets/img/popular3.png";
;// CONCATENATED MODULE: ./src/assets/img/popular4.png
const popular4_namespaceObject = __webpack_require__.p + "assets/img/popular4.png";
;// CONCATENATED MODULE: ./src/assets/img/popular5.png
const popular5_namespaceObject = __webpack_require__.p + "assets/img/popular5.png";
;// CONCATENATED MODULE: ./src/assets/img/popular6.png
const popular6_namespaceObject = __webpack_require__.p + "assets/img/popular6.png";
;// CONCATENATED MODULE: ./src/components/popularItems.js






var popularItems = function popularItems() {
  var temp = document.createElement("template");
  var products = [{
    title: "Thermo Ball Etip Gloves",
    url: "/",
    img: popular1_namespaceObject,
    price: "45,743"
  }, {
    title: "Thermo Ball Etip Gloves",
    url: "/",
    img: popular2_namespaceObject,
    price: "45,743"
  }, {
    title: "Thermo Ball Etip Gloves",
    url: "/",
    img: popular3_namespaceObject,
    price: "45,743"
  }, {
    title: "Thermo Ball Etip Gloves",
    url: "/",
    img: popular4_namespaceObject,
    price: "45,743"
  }, {
    title: "Thermo Ball Etip Gloves",
    url: "/",
    img: popular5_namespaceObject,
    price: "45,743"
  }, {
    title: "Thermo Ball Etip Gloves",
    url: "/",
    img: popular6_namespaceObject,
    price: "45,743"
  }];
  temp.innerHTML = "\n  <section class=\"popular\">\n    <div class=\"container\">\n      <div class=\"popular__header\">\n        <h2 class=\"popular__title\">Popular Items</h2>\n        <p class=\"popular__desc\">\n          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.\n        </p>\n      </div>\n      <div class=\"popular__products grid\">\n      ".concat(products.map(function (product) {
    return "\n        <div class=\"popular__product\">\n          <div class=\"popular__product__body\">\n            <!-- <i class=\"fa-solid fa-heart\"></i> -->\n            <i class=\"fa-regular fa-heart\"></i>\n            <div class=\"popular__product__img\">\n              <img\n                src=\"".concat(product.img, "\"\n                alt=\"").concat(product.title, "\"\n              />\n            </div>\n            <button type=\"button\" class=\"btn popular__btn\">\n              Add to cart\n            </button>\n          </div>\n          <h3 class=\"popular__product__title\">\n            <a href=\"").concat(product.url, "\">").concat(product.title, "</a>\n          </h3>\n          <span class=\"popular__product__price\">$ ").concat(product.price, "</span>\n        </div>\n        ");
  }).join(""), "\n      </div>\n      <a href=\"/\" type=\"button\" class=\"btn popular__more__btn\">View more products</a>\n    </div>\n  </section>\n  ");
  return document.getElementById("js-main").appendChild(temp.content);
};
/* harmony default export */ const components_popularItems = (popularItems);
;// CONCATENATED MODULE: ./src/index.js
// Import Gallery Images




// Import Styles


// Import Components






// Components
components_navbar();
components_hero();
components_newArrivals();
components_gallery([{
  url: gallery1_namespaceObject,
  alt: "gallery1"
}, {
  url: gallery2_namespaceObject,
  alt: "gallery2"
}, {
  url: gallery3_namespaceObject,
  alt: "gallery3"
}, {
  url: gallery4_namespaceObject,
  alt: "gallery4"
}], 2, 1, 20);
components_popularItems();

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
/******/ })()
;