import logo from "../assets/img/logo.png";

const navbar = () => {
  const main = document.getElementById("js-main");
  const temp = document.createElement("template");
  temp.innerHTML = `    <header class="flex">
  <div class="logo">
    <a href="/" class="block">
      <img src="${logo}" alt="logo" />
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
  <button type="button" class="menu__toggler" id="menu__toggler">
    <span class="sr--only">Menu Toggler</span>
    <i class="fa-sharp fa-solid fa-bars"></i>
  </button>
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
</header>`;
  return document.body.insertBefore(temp.content, main);
};

export default navbar;
