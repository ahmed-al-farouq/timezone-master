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

const navbar = () => {
  const main = document.getElementById("js-main");
  const temp = document.createElement("template");
  temp.innerHTML = `
    <header class="flex">
      <div class="logo">
        <a href="/" class="block">
          <img src="${logo_namespaceObject}" alt="logo" />
        </a>
      </div>
      <nav id="navbar" class="navbar">
        <ul class="menu list--unstyled flex close" id="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li class="sub__menu__toggler hot">
            <span class="flex justify--between">
              Latest
              <i class="fa-solid fa-plus"></i>
              <i class="fa-solid fa-minus hidden"></i>
            </span>
            <ul class="flex sub__menu list--unstyled close">
              <li>
                <a href="/">Product List</a>
              </li>
              <li>
                <a href="/">Product Details</a>
              </li>
            </ul>
          </li>
          <li class="sub__menu__toggler">
            <span class="flex justify--between">
              Blog
              <i class="fa-solid fa-plus"></i>
              <i class="fa-solid fa-minus hidden"></i>
            </span>
            <ul class="flex sub__menu list--unstyled close">
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Blog Details</a>
              </li>
            </ul>
          </li>
          <li class="sub__menu__toggler">
            <span class="flex justify--between">
              Pages
              <i class="fa-solid fa-plus"></i>
              <i class="fa-solid fa-minus hidden"></i>
            </span>
            <ul class="flex sub__menu list--unstyled close">
              <li>
                <a href="/">Login</a>
              </li>
              <li>
                <a href="/">Cart</a>
              </li>
              <li>
                <a href="/">Element</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      <ul class="flex list--unstyled right__icons">
        <li>
          <a href="/">
            <span class="sr--only">Search</span>
            <i class="fa-solid fa-magnifying-glass"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <span class="sr--only">Login</span>
            <i class="fa-solid fa-user"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <span class="sr--only">Shopping Cart</span>
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </li>
      </ul>
      <button type="button" class="menu__toggler" id="menu__toggler">
        <span class="sr--only">Menu Toggler</span>
        <i class="fa-sharp fa-solid fa-bars"></i>
      </button>
    </header>`;
  return document.body.insertBefore(temp.content, main);
};
/* harmony default export */ const components_navbar = (navbar);
;// CONCATENATED MODULE: ./src/assets/img/watch.png
const watch_namespaceObject = __webpack_require__.p + "assets/img/watch.png";
;// CONCATENATED MODULE: ./src/components/hero.js

const hero = () => {
  const temp = document.createElement("template");
  temp.innerHTML = `
    <section class="hero flex align--center">
      <div class="container flex align--center">
        <div class="hero__content flex flex--column">
          <h1 class="hero__title">Select Your New Perfect Style</h1>
          <p class="hero__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            labore? Placeat modi tempora fugit, nostrum vel sapiente?
          </p>
          <a href="/" class="btn hero__btn">Shop Now</a>
        </div>
        <div class="hero__img">
          <img src="${watch_namespaceObject}" alt="watch" class="block" />
        </div>
      </div>
    </section>
    `;
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



const newArrivals = () => {
  const temp = document.createElement("template");
  const products = [{
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
  temp.innerHTML = `
  <section class="new-arrivals">
    <div class="container">
      <h2 class="new-arrivals__title">New Arrivals</h2>
      <div class="new-arrivals__products grid">
      ${products.map(product => `
        <div class="new-arrivals__product">
          <div class="new-arrivals__product__img">
            <a href="${product.url}" class="block">
              <img
                src="${product.img}"
                alt="${product.title}"
              />
            </a>
          </div>
          <h3 class="new-arrivals__product__title">
            <a href="${product.url}">${product.title}</a>
          </h3>
          <span class="new-arrivals__product__price">$ ${product.price}</span>
        </div>
        `).join("")}
      </div>
    </div>
  </section>
  `;
  return document.getElementById("js-main").appendChild(temp.content);
};
/* harmony default export */ const components_newArrivals = (newArrivals);
;// CONCATENATED MODULE: ./src/components/gallery.js
const gallery = (photos, rows, columns, gap) => {
  const main = document.getElementById("js-main");
  const temp = document.createElement("template");
  temp.innerHTML = `
    <section class="gallery grid">
      ${photos.map(photo => `<div class="gallery__item"><img src="${photo.url}" alt="${photo.alt}" /></div>`).join('')}
    </section>
  `;
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






const popularItems = () => {
  const temp = document.createElement("template");
  const products = [{
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
  temp.innerHTML = `
  <section class="popular">
    <div class="container">
      <div class="popular__header">
        <h2 class="popular__title">Popular Items</h2>
        <p class="popular__desc">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
        </p>
      </div>
      <div class="popular__products grid">
      ${products.map(product => `
        <div class="popular__product">
          <div class="popular__product__body">
            <!-- <i class="fa-solid fa-heart"></i> -->
            <i class="fa-regular fa-heart"></i>
            <div class="popular__product__img">
              <img
                src="${product.img}"
                alt="${product.title}"
              />
            </div>
            <button type="button" class="btn popular__btn">
              Add to cart
            </button>
          </div>
          <h3 class="popular__product__title">
            <a href="${product.url}">${product.title}</a>
          </h3>
          <span class="popular__product__price">$ ${product.price}</span>
        </div>
        `).join("")}
      </div>
      <a href="/" type="button" class="btn popular__more__btn">View more products</a>
    </div>
  </section>
  `;
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
const header = document.getElementsByTagName("header")[0];
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu__toggler");
const subMenuToggler = document.querySelectorAll(".sub__menu__toggler");
const switchFixedNav = () => {
  // Check if screen is bigger than medium
  console.log(window.innerWidth);
  if (window.innerWidth > 992) {
    // Check if user scrolled more than 200px
    if (window.scrollY > 200) {
      // Check if it already has a fixed class
      if (header.classList.contains("fixed")) return;
      header.style.opacity = 0;
      // Wait until the opacity animation finishes to prevent the first plus animation
      setTimeout(() => {
        header.classList.remove("relative");
        header.classList.add("fixed");
      }, 300);
      return setTimeout(() => header.style.opacity = 1, 800);
    }
    header.classList.add("relative");
    header.classList.remove("fixed");
    return setTimeout(() => header.style.opacity = 1, 700);
  }
  if (header.classList.contains("fixed")) {
    header.classList.remove("fixed");
  }
};

// Make Navbar Fixed after reaching specific point
window.addEventListener("scroll", switchFixedNav);
window.addEventListener("resize", switchFixedNav);

// Toggle Navbar
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("close");
});

// Toggle Navbar subitems
subMenuToggler.forEach(parent => {
  parent.addEventListener("click", () => {
    if (window.innerWidth >= 991) return;
    const subMenu = parent.querySelector(".sub__menu");
    const openIcon = parent.querySelector(".fa-plus");
    const closeIcon = parent.querySelector(".fa-minus");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    subMenu.classList.toggle("close");
  }, true);
});
/******/ })()
;