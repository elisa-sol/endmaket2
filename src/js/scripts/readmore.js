document.addEventListener("DOMContentLoaded", function () {
  let readText = document.querySelector(".mainBlock__text1");
  let hiddenText = document.querySelector(".mainBlock__text2");
  readText.style.display = 'block';
  hiddenText.style.display = 'none';


  let readMoreButton = document.querySelector(".buttonBlock__readMore");
  let isExpanded = false;


  readMoreButton.addEventListener("click", function () {
    if (!isExpanded) {
      readMoreButton.textContent = "Скрыть";
      const arrow = document.querySelector('.downArrow');
      arrow.classList.toggle('rotate');
      arrow.style.transform = 'rotate(180deg)';
      readText.style.display = 'block';
      hiddenText.style.display = 'block';
      hiddenText.style.opacity = '1'; //
      isExpanded = true;
    } else {
      readMoreButton.textContent = "Читать далее";
      readText.style.display = 'block';
      hiddenText.style.display = 'none';
      hiddenText.style.opacity = '0'; //
      const arrow = document.querySelector('.downArrow');
      arrow.classList.remove('rotate');
      arrow.style.transform = 'rotate(0deg)';
      isExpanded = false;
    }
  });
});

