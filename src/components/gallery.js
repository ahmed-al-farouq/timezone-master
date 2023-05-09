const gallery = (photos, rows, columns, gap) => {
  const main = document.getElementById("js-main");
  const temp = document.createElement("template");
  temp.innerHTML = `
    <section class="gallery grid">
      ${photos.map(
        (photo) => `<div class="gallery__item"><img src="${photo.url}" alt="${photo.alt}" /></div>`
      ).join('')}
    </section>
  `;
  return main.appendChild(temp.content);
};

export default gallery;
