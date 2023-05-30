const newArrivals = (products) => {
  const temp = document.createElement("template");
  temp.innerHTML = `
  <section class="new-arrivals">
    <div class="container">
      <h2 class="new-arrivals__title">New Arrivals</h2>
      <div class="new-arrivals__products grid">
      ${products
        .map(
          (product) =>
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
        )
        .join("")}
      </div>
    </div>
  </section>
  `;
  return document.getElementById("js-main").appendChild(temp.content);
};

export default newArrivals;
