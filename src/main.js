import "./styles/index.css";
import navbar from "./components/navbar";
import hero from "./components/hero";
import newArrivals from "./components/newArrivals";

// Components
navbar();
hero();
newArrivals();

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
