import Swiper from "./swiper/swiper-bundle.min";
// import "swiper/css";

let init = false;
let swiper;

function swiperCard() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
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
    console.log("11111");
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}

swiperCard();
window.addEventListener("resize", swiperCard);
console.log("2222");
