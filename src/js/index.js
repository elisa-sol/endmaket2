import '../scss/base/fonts.scss'
import '../scss/style.scss'

import '../js/scripts/slider.js'
import '../scss/blocks/swiper.scss'





//
// let makeImage = function (tagName, className, src, alt) {
//   let element = document.createElement(tagName);
//   element.classList.add(className);
//   element.src = src;
//   element.alt = alt;
//
//   return element;
// };
//
// const addAdditionalElement = (svg, alt, apple) => {
//   let brand = document.querySelector(".brand");
//
//   let additionalElement = document.createElement("div");
//   additionalElement.classList.add("brand__company");
//
//   let img = makeImage("img", "image", svg, alt);
//
//   let s = window.getComputedStyle(document.querySelector(".image"));
//
//   img.style.width = s.width;
//   img.style.height = s.height;
//   if (apple) {
//     img.style.width = "44px"
//   }
//
//   additionalElement.appendChild(img);
//
//
//   let button = makeImage("img", "button", "../assets/img/svg/button.svg", "Button");
//   additionalElement.appendChild(button);
//
//   brand.appendChild(additionalElement);
// }
//
// addAdditionalElement("../assets/img/svg/lenovo.svg", "Lenovo", false);
// addAdditionalElement("../assets/img/svg/samsung.svg", "Samsung", false);
// addAdditionalElement("../assets/img/svg/apple.svg", "Apple", true);
//
//
//
// let num = window.innerWidth;
// let newCount = 0;
//
// if (num >= 768 && num <= 1119) {
//   newCount = 6;
// } else {
//   newCount = 8;
// }
//
// document.addEventListener("DOMContentLoaded", function () {
//   let brandItems = document.querySelectorAll(".brand__company");
//
//   for (let i = newCount; i < brandItems.length; i++) {
//     brandItems[i].style.display = "none";
//   }
//
//   let showAllButton = document.querySelector(".buttonBlock__show-all-button");
//   let isExpanded = false;
//
//   let style = document.querySelector(".brand__company");
//   let s = window.getComputedStyle(style);
//
//   showAllButton.addEventListener("click", function () {
//     if (!isExpanded) {
//       for (let i = newCount; i < brandItems.length; i++) {
//         brandItems[i].style.display = s.display;
//       }
//       showAllButton.textContent = "Скрыть";
//       document.querySelector('.up').style.display = 'block';
//       document.querySelector('.down').style.display = 'none';
//       isExpanded = true;
//     } else {
//       for (let i = newCount; i < brandItems.length; i++) {
//         brandItems[i].style.display = "none";
//       }
//       showAllButton.textContent = "Показать все";
//       document.querySelector('.up').style.display = 'none';
//       document.querySelector('.down').style.display = 'block';
//       isExpanded = false;
//     }
//   });
// });
//
// console.log('Works!')
