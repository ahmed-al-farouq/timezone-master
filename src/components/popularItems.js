const popularItems = (products) => {
  const temp = document.createElement("template");
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
      ${products
        .map(
          (product) =>
            `
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
        `
        )
        .join("")}
      </div>
      <a href="/" type="button" class="btn popular__more__btn">View more products</a>
    </div>
  </section>
  `;
  return document.getElementById("js-main").appendChild(temp.content);
};

export default popularItems;
