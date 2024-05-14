
let callButton = document.querySelector('.contact__call');
let callButton2 = document.querySelector('.upperMenu__call');
let cancelButton = document.querySelector('.orderCall__cross');
let orderCall = document.querySelector('.orderCall');
let sideBar = document.querySelector('.sideBar');
let closeMain = document.querySelector('.navigation');
let mainClick = document.querySelector('.page');
let burgerButton = document.querySelector('.upperMenu__burger');
let width = window.innerWidth;

function small() {
  if (width >= 320 && width < 768) {
    callButton.addEventListener('click', function() {
      if (orderCall && closeMain) {
        orderCall.style.display = 'flex';
        closeMain.style.display = 'none';
        sideBar.style.display = 'none';
        document.body.classList.add('modal-open');
      }
    });

    cancelButton.addEventListener('click', function() {
      if (orderCall && closeMain) {
        orderCall.style.display = 'none';
        closeMain.style.display = 'block';
        sideBar.style.display = 'flex';
        document.body.classList.remove('modal-open');
      }
    });
  }
}

function medium() {
  if (width >= 768 && width < 1440) {
    let openedByCallButton = false;
    let sideBarOpened = false;

    let closeOrderCall = function() {
      orderCall.style.display = 'none';
      closeMain.style.opacity = '1';
      openedByCallButton = false;
      sideBar.removeEventListener("click", sidebarClickHandler);
      document.body.classList.remove('modal-open');
    };

    let closeSideBar = function() {
      sideBar.style.display = 'none';
      closeMain.style.opacity = '1';
      sideBarOpened = false;
      document.body.classList.remove('modal-open');
    };

    let sidebarClickHandler = function(event) {
      event.stopPropagation();
      if (openedByCallButton) {
        closeOrderCall();
      }
    };

    function openOrderCall() {
      if (sideBarOpened) {
        closeSideBar();
      }

      orderCall.style.animationName = "extension2";
      orderCall.style.display = 'block';
      closeMain.style.opacity = '0.08';
      orderCall.style.position = 'fixed';
      orderCall.style.top = '0';
      orderCall.style.right = '0';
      orderCall.style.bottom = '0';
      orderCall.style.zIndex = '1000';
      burgerButton.style.display = 'flex';
      orderCall.style.boxShadow = '16px 0px 52px 0px #0E185033';
      openedByCallButton = true;

      setTimeout(function() {
        if (openedByCallButton) {
          sideBar.addEventListener("click", sidebarClickHandler);
        }
      }, 100);

      document.body.classList.add('modal-open');
    }

    function openSideBar() {
      if (openedByCallButton) {
        closeOrderCall();
      }

      sideBar.style.display = 'flex';
      sideBar.style.opacity = '1';
      closeMain.style.opacity = '0.08';
      sideBarOpened = true;
      document.body.classList.add('modal-open');
    }

    callButton.addEventListener('click', function() {
      openOrderCall();
    });

    callButton2.addEventListener('click', function(event) {
      event.stopPropagation();
      openOrderCall();
    });

    burgerButton.addEventListener('click', function(event) {
      event.stopPropagation();
      if (sideBarOpened) {
        closeSideBar();
      } else {
        openSideBar();
      }
    });

    closeMain.addEventListener("click", function(event) {
      event.stopPropagation();
      if (orderCall.style.display !== "none") {
        closeOrderCall();
      }
      if (sideBarOpened) {
        closeSideBar();
      }
    });

    cancelButton.addEventListener('click', function() {
      closeOrderCall();
    });
  }
}

function large() {
  if (width >= 1440) {
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
        document.body.classList.add('modal-open');
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
        document.body.classList.remove('modal-open');
      }
    });

    closeMain.addEventListener("click", function() {
      if (orderCall.style.display !== "none") {
        orderCall.style.display = 'none';
        closeMain.style.opacity = '1';
        sideBar.style.opacity = '1';
        document.body.classList.remove('modal-open');
      }
    });
  }
}

small();
medium();
large();
