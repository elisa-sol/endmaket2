
let mainClick = document.querySelector('.page');
let closeMain = document.querySelector('.navigation');
let openSideBar = document.querySelector('.sideBar');
let burgerButton = document.querySelector('.upperMenu__burger');
let crossButton = document.querySelector('.sideBar__cross');
let group = document.querySelector('.upperMenu__group');
let navigation = document.querySelector('.navigation');
let width = window.innerWidth;

function checkWidth() {
  width = window.innerWidth;

  if (width >= 320 && width < 768) {
    openSideBar.style.display = 'none';
    navigation.style.marginLeft = "0";

    burgerButton.addEventListener('click', function() {
      if (openSideBar && closeMain) {
        openSideBar.style.display = 'flex';
        if (width >= 360 && width < 768) {
          closeMain.style.opacity = '0.08';
          openSideBar.style.zIndex = '10000';
          openSideBar.style.opacity = '1';
        }
      }
    });

    crossButton.addEventListener('click', function() {
      if (openSideBar && closeMain) {
        console.log(3)
        openSideBar.style.display = 'none';
        closeMain.style.display = 'block';
        closeMain.style.opacity = '1';
      }
    });

  } else if (width >= 768 && width < 1440) {
    openSideBar.style.display = 'none';
    navigation.style.marginLeft = "0";
    burgerButton.addEventListener('click', function() {
      if (openSideBar && closeMain) {
        burgerButton.style.display = 'flex';
        openSideBar.style.display = 'flex';
        openSideBar.style.opacity = '1';
        closeMain.style.opacity = '0.08';
      }
    });

    crossButton.addEventListener('click', function() {
      if (openSideBar && closeMain) {
        burgerButton.style.display = 'flex';
        group.style.display = 'flex';
        openSideBar.style.display = 'none';
        closeMain.style.opacity = '1';
      }
    });
  } else {
    closeMain.style.marginLeft = '320px';
    navigation.style.position = 'relative';
    openSideBar.style.position = 'fixed';
    openSideBar.style.top = '0';
    openSideBar.style.bottom = '0';
    openSideBar.style.zIndex = '1000';
    openSideBar.style.display = 'flex';
  }
}

  mainClick.addEventListener('click', function(event) {
    if (width >= 360 && width < 1440
      && openSideBar.style.display === 'flex'
      && !openSideBar.contains(event.target)
      && event.target !== closeMain
      && event.target !== crossButton) {
      openSideBar.style.display = 'none';
      closeMain.style.opacity = '1';
      burgerButton.style.display = 'flex';
    }
  });


checkWidth();

window.addEventListener('resize', checkWidth);
