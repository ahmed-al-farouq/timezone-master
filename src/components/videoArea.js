import videoAreaBG from "../assets/img/video_area.jpg";
import nextVideoBG from "../assets/img/video_more.jpg";

const videoArea = () => {
  const main = document.getElementById("js-main");
  const temp = document.createElement("template");
  temp.innerHTML = `
  <section class="video-area" style="background: url(${videoAreaBG}) no-repeat center; background-size: cover;">
    <div class="play__btn__container">
      <button type="button" class="btn">
        <span class="sr-only">Play Video Button</span>
        <i class="fas fa-play"></i>
      </button>
    </div>
    <!-- Arrow -->
    <div class="next__video flex" style="background: url(${nextVideoBG}) no-repeat center; background-size: cover;">
      <h3>Next Video</h3>
      <a href="#">
        <i class="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  </section>
  `;
  return main.appendChild(temp.content);
};

export default videoArea;
