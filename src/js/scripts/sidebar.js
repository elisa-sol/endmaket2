
let closeMain = document.querySelector('.page');
let openSideBar = document.querySelector('.sideBar');
let burgerButton = document.querySelector('.upperMenu__burger');
let hideHeader = document.querySelector('.header');
let crossButton = document.querySelector('.sideBar__cross');
let group = document.querySelector('.upperMenu__group');
let width = window.innerWidth;

function checkWidth() {
  if (width >= 320 && width < 768) {
    burgerButton.addEventListener('click', function() {
      if (openSideBar && closeMain) {
        openSideBar.style.display = 'flex';
        hideHeader.style.display = 'none';
        closeMain.style.display = 'none';
      }
    });

    crossButton.addEventListener('click', function() {
      if (openSideBar && closeMain) {
        openSideBar.style.display = 'none';
        hideHeader.style.display = 'block';
        closeMain.style.display = 'block';
      }
    });
  } else if (width >= 768 && width <= 1440) {
    burgerButton.addEventListener('click', function() {
      if (openSideBar && closeMain) {
        // burgerButton.style.display = 'none';
        // group.style.display = 'none';
        // hideHeader.style.position = 'absolute';
        // hideHeader.style.right = '20px';

        openSideBar.style.display = 'flex';
        hideHeader.style.display = 'none';
        // hideHeader.style.display = 'flex';
        hideHeader.style.opacity = '0.08';
        closeMain.style.opacity = '0.08';
      }
    });

    crossButton.addEventListener('click', function() {
      if (openSideBar && closeMain) {
        // burgerButton.style.display = 'flex';
        // group.style.display = 'flex';
        // hideHeader.style.right = '0';

        openSideBar.style.display = 'none';
        // hideHeader.style.position = 'sticky';
        hideHeader.style.opacity = '1';
        hideHeader.style.display = 'block';
        closeMain.style.opacity = '1';
      }
    });
  }
}

closeMain.addEventListener('click', function(event) {
  if ((width >= 768 && width <= 1440) && !openSideBar.contains(event.target)) {
    burgerButton.style.display = 'flex';
    group.style.display = 'flex';
    hideHeader.style.right = '0';

    openSideBar.style.display = 'none';
    hideHeader.style.position = 'sticky';
    hideHeader.style.opacity = '1';
    hideHeader.style.display = 'block';
    closeMain.style.opacity = '1';
  }
});


checkWidth();

window.addEventListener('resize', checkWidth);
