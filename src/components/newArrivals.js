import product1 from "../assets/img/new_product1.png";
import product2 from "../assets/img/new_product2.png";
import product3 from "../assets/img/new_product3.png";

const newArrivals = () => {
  const temp = document.createElement("template");
  const products = [
    {
      title: "Thermo Ball Etip Gloves",
      url: "/",
      img: product1,
      price: "45,743",
    },
    {
      title: "Thermo Ball Etip Gloves",
      url: "/",
      img: product2,
      price: "45,743",
    },
    {
      title: "Thermo Ball Etip Gloves",
      url: "/",
      img: product3,
      price: "45,743",
    },
  ];
  temp.innerHTML = `
  <section class="new-arrivals">
    <div class="container">
      <h2 class="new-arrivals__title">New Arrivals</h2>
      <div class="new-arrivals__products grid justify--between">
      ${products.map((product) =>
        `
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
        `
      ).join("")}
      </div>
    </div>
  </section>
  `;
  console.log(temp.content.cloneNode(true));
  return document.getElementById("js-main").appendChild(temp.content);
};

export default newArrivals;
