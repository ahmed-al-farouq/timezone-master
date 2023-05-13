// Import Gallery Images
import gallery1 from "./assets/img/gallery1.png";
import gallery2 from "./assets/img/gallery2.png";
import gallery3 from "./assets/img/gallery3.png";
import gallery4 from "./assets/img/gallery4.png";
// Import Styles
import "./styles/index.css";
import "./styles/utilities.css";
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
const header = document.getElementsByTagName("header")[0];
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu__toggler");
const subMenuToggler = document.querySelectorAll(".sub__menu__toggler");

// Make Navbar Fixed after reaching specific point
window.addEventListener("scroll", () => {
  // Check if screen is bigger than medium
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

      return setTimeout(() => (header.style.opacity = 1), 800);
    }
    
    header.classList.add("relative");
    header.classList.remove("fixed");

    return setTimeout(() => (header.style.opacity = 1), 700);
  }
});

// Toggle Navbar
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("close");
});

// Toggle Navbar subitems
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
