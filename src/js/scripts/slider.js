import Swiper from "swiper";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

let init = false;
let swiper;

function initSwiper() {
  if (window.innerWidth < 768 && !init) {
    init = true;
    swiper = new Swiper(".swiper", {
      modules: [Pagination],
      loop: true,
      speed: 1000,
      freeMode: true,
      slidesPerView: 1.2,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

initSwiper();
