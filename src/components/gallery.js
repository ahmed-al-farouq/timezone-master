const gallery = (items) => {
  const main = document.getElementById("js-main");
  const temp = document.createElement("template");
  temp.innerHTML = `
    <section class="gallery grid">
      ${items
        .map(
          (item) =>
            `<div class="gallery__item"><img class="lozad" data-src="${item.url}" alt="${item.alt}" /></div>`
        )
        .join("")}
    </section>
  `;
  return main.appendChild(temp.content);
};

export default gallery;
