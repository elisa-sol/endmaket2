
let makeImage = function (tagName, className, src, alt) {
  let element = document.createElement(tagName);
  element.classList.add(className);
  element.src = src;
  element.alt = alt;

  return element;
};

const addAdditionalElement = (svg, alt, apple) => {
  let brand = document.querySelector(".brand");

  let additionalElement = document.createElement("div");
  additionalElement.classList.add("brand__company");

  let img = makeImage("img", "image", svg, alt);

  let s = window.getComputedStyle(document.querySelector(".image"));


  additionalElement.appendChild(img);

  let button = makeImage("img", "button", "../assets/img/svg/button.svg", "Button");
  additionalElement.appendChild(button);

  brand.appendChild(additionalElement);
}


addAdditionalElement("src/assets/img/svg/lenovo.svg", "Lenovo", false);
addAdditionalElement("src/assets/img/svg/samsung.svg", "Samsung", false);
addAdditionalElement("src/assets/img/svg/apple.svg", "Apple", true);

let num = window.innerWidth;
let newCount = 0;

if (num >= 768 && num <= 1439) {
  newCount = 6;
} else {
  newCount = 8;
}

document.addEventListener("DOMContentLoaded", function () {
  let brandItems = document.querySelectorAll(".brand__company");

  for (let i = newCount; i < brandItems.length; i++) {
    brandItems[i].style.display = "none";
  }

  let showAllButton = document.querySelector(".buttonBlock__show-all-button");
  let isExpanded = false;

  let style = document.querySelector(".brand__company");
  let s = window.getComputedStyle(style);

  showAllButton.addEventListener("click", function () {
    if (!isExpanded) {
      for (let i = newCount; i < brandItems.length; i++) {
        brandItems[i].style.display = s.display;
      }
      showAllButton.textContent = "Скрыть";
      const arrow = document.querySelector('.down')
      arrow.classList.toggle('rotate')
      arrow.style.transform = 'rotate(180deg)'
      isExpanded = true;
    } else {
      for (let i = newCount; i < brandItems.length; i++) {
        brandItems[i].style.display = "none";
      }
      showAllButton.textContent = "Показать все";
      const arrow = document.querySelector('.down');
      arrow.classList.remove('rotate');
      arrow.style.transform = 'rotate(0deg)';
      isExpanded = false;
    }
  });
});

