import watch from "../assets/img/watch.png";

const hero = () => {
  const temp = document.createElement("template");
  temp.innerHTML = `
    <section class="hero flex align--center">
      <div class="container flex align--center">
        <div class="hero__content flex flex--column">
          <h1 class="hero__title">Select Your New Perfect Style</h1>
          <p class="hero__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            labore? Placeat modi tempora fugit, nostrum vel sapiente?
          </p>
          <a href="/" class="btn hero__btn">Shop Now</a>
        </div>
        <div class="hero__img">
          <img class="lozad block" data-src="${watch}" alt="watch" />
        </div>
      </div>
    </section>
    `;
  return document.getElementById("js-main").appendChild(temp.content);
};

export default hero;