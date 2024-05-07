let callButton = document.querySelector('.contact__call');
let callButton2 = document.querySelector('.upperMenu__call');
let cancelButton = document.querySelector('.orderCall__cross');
let orderCall = document.querySelector('.orderCall');
let sideBar = document.querySelector('.sideBar');
let closeMain = document.querySelector('.navigation');
let mainClick = document.querySelector('.page');
let burgerButton = document.querySelector('.upperMenu__burger');
let width = window.innerWidth;
let openedByCallButton = false; // Переменная для отслеживания способа открытия orderCall

function checkWidth() {
  if (width >= 320 && width < 768) {
    callButton.addEventListener('click', function() {
      if (orderCall && closeMain) {
        orderCall.style.display = 'flex';
        closeMain.style.display = 'none';
        sideBar.style.display = 'none';
        openedByCallButton = true;
      }
    });

    cancelButton.addEventListener('click', function() {
      if (orderCall && closeMain) {
        orderCall.style.display = 'none';
        closeMain.style.display = 'block';
        sideBar.style.display = 'flex';
        openedByCallButton = false;
      }
    });

  } else if (width >= 768 && width < 1440) {
    callButton.addEventListener('click', function() {
      if (orderCall && closeMain) {
        orderCall.style.display = 'block';
        closeMain.style.opacity = '0.008';
        orderCall.style.position = 'fixed';
        orderCall.style.top = '0';
        orderCall.style.right = '0';
        orderCall.style.bottom = '0';
        orderCall.style.zIndex = '1000';
        sideBar.style.display = 'flex';
        sideBar.style.opacity = '0.2';
        burgerButton.style.display = 'flex';
        orderCall.style.boxShadow = '16px 0px 52px 0px #0E185033';
        openedByCallButton = true;
      }
    });

    cancelButton.addEventListener('click', function() {
      if (orderCall && closeMain) {
        orderCall.style.display = 'none';
        burgerButton.style.display = 'flex';
        closeMain.style.opacity = '0.08';
        burgerButton.style.display = 'none';
        sideBar.style.display = 'flex';
        sideBar.style.opacity = '1';
        openedByCallButton = false;
      }
    });

  } else if (width >= 1440) {
    callButton.addEventListener('click', function() {
      if (orderCall && closeMain) {
        orderCall.style.display = 'block';
        closeMain.style.opacity = '0.08';
        orderCall.style.position = 'fixed';
        orderCall.style.top = '0';
        orderCall.style.right = '0';
        orderCall.style.bottom = '0';
        orderCall.style.zIndex = '1000';
        sideBar.style.display = 'flex';
        sideBar.style.opacity = '0.08';
        burgerButton.style.display = 'block';
        orderCall.style.boxShadow = '16px 0px 52px 0px #0E185033';
        openedByCallButton = true;
      }
    });

    cancelButton.addEventListener('click', function() {
      if (orderCall && closeMain) {
        orderCall.style.display = 'none';
        burgerButton.style.display = 'flex';
        closeMain.style.opacity = '1';
        burgerButton.style.display = 'none';
        sideBar.style.display = 'flex';
        sideBar.style.opacity = '1';
        closeMain.style.opacity = '1';
        openedByCallButton = false;
      }
    });
  }

  closeMain.addEventListener('click', function(event) {
    if (width >= 768 && width < 1440
      && orderCall.style.display === 'block'
      && !orderCall.contains(event.target)
      && event.target !== closeMain
      && event.target !== cancelButton) {
      orderCall.style.display = 'none';
      closeMain.style.display = 'block';
      closeMain.style.opacity = '1';
      sideBar.style.opacity = '1';

    } else if (width >= 1440
      && orderCall.style.display === 'block'
      && !orderCall.contains(event.target)
      && event.target !== closeMain
      && event.target !== cancelButton) {
      orderCall.style.display = 'none';
      sideBar.style.display = 'flex';
      sideBar.style.opacity = '1';
      closeMain.style.opacity = '1';
    }
  });
}


callButton2.addEventListener('click', function() {
  if (width >= 768 && width < 1440
    && orderCall
    && mainClick) {
    orderCall.style.display = 'flex';
    closeMain.style.opacity = '0.008';
    orderCall.style.position = 'fixed';
    orderCall.style.top = '0';
    orderCall.style.right = '0';
    orderCall.style.bottom = '0';
    orderCall.style.zIndex = '1000';
    closeMain.style.opacity = '0.08';
    orderCall.style.boxShadow = '16px 0px 52px 0px #0E185033';
  }
});

cancelButton.addEventListener('click', function() {
  if (width >= 768 && width < 1440
    && orderCall && closeMain) {
    orderCall.style.display = 'none';
    closeMain.style.opacity = '0.08';
    burgerButton.style.display = 'flex';
    sideBar.style.display = 'none';
    closeMain.style.opacity = '1';
  }
});


mainClick.addEventListener('click', function() {
  if (width >= 768 && width < 1440
    && orderCall
    && closeMain
    && orderCall.style.display === 'flex') {
    orderCall.style.display = 'none';
    sideBar.style.display = 'none';
    closeMain.style.opacity = '1';
  }
});

checkWidth();

window.addEventListener('resize', checkWidth);
