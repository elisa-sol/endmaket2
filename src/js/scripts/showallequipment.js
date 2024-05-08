let num = window.innerWidth;
let newCount = 0;

if (num >= 768 && num <= 1439) {
  newCount = 3;
} else {
  newCount = 4;
}

document.addEventListener("DOMContentLoaded", function () {
  let equipItems = document.querySelectorAll(".equipRepair__equipment");

  for (let i = newCount; i < equipItems.length; i++) {
    equipItems[i].style.display = "none";
  }

  let showAllButton = document.querySelector(".buttonBlock__show-all-button2");
  let isExpanded = false;

  let style = document.querySelector(".equipRepair__equipment");
  let s = window.getComputedStyle(style);

  showAllButton.addEventListener("click", function () {
    if (!isExpanded) {
      for (let i = newCount; i < equipItems.length; i++) {
        equipItems[i].style.display = s.display;
      }
      showAllButton.textContent = "Скрыть";
      const arrow = document.querySelector('.down2')
      arrow.classList.toggle('rotate')
      arrow.style.transform = 'rotate(180deg)'
      isExpanded = true;
    } else {
      for (let i = newCount; i < equipItems.length; i++) {
        equipItems[i].style.display = "none";
      }
      showAllButton.textContent = "Показать все";
      const arrow = document.querySelector('.down2');
      arrow.classList.remove('rotate');
      arrow.style.transform = 'rotate(0deg)';
      isExpanded = false;
    }
  });
});

