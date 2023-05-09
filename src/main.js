// Import Gallery Images
import gallery1 from "./assets/img/gallery1.png";
import gallery2 from "./assets/img/gallery2.png";
import gallery3 from "./assets/img/gallery3.png";
import gallery4 from "./assets/img/gallery4.png";
// Import Styles
import "./styles/index.css";
// Import Components
import navbar from "./components/navbar";
import hero from "./components/hero";
import newArrivals from "./components/newArrivals";
import gallery from "./components/gallery";

// Components
navbar();
hero();
newArrivals();
gallery(
  [
    {
      url: gallery1,
      alt: "gallery1",
    },
    {
      url: gallery2,
      alt: "gallery2",
    },
    {
      url: gallery3,
      alt: "gallery3",
    },
    {
      url: gallery4,
      alt: "gallery4",
    },
  ],
  2,
  1,
  20
);

// Navbar
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu__toggler");
const subMenuToggler = document.querySelectorAll(".sub__menu__toggler");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("close");
});

subMenuToggler.forEach((parent) => {
  parent.addEventListener(
    "click",
    () => {
      if (window.innerWidth >= 991) return;
      const subMenu = parent.querySelector(".sub__menu");
      const openIcon = parent.querySelector(".fa-plus");
      const closeIcon = parent.querySelector(".fa-minus");
      openIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
      subMenu.classList.toggle("close");
    },
    true
  );
});
