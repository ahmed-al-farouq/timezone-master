let menu = document.getElementById("menu");
let menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("close");
});