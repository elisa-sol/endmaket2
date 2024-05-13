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
      }
    });

    cancelButton.addEventListener('click', function() {
      if (orderCall && closeMain) {
        orderCall.style.display = 'none';
        closeMain.style.display = 'block';
        sideBar.style.display = 'flex';
      }
    });
  }
}

function medium() {
  if (width >= 768 && width < 1440) {
    let openedByCallButton = false;
    let sideBarFlag = false;

    let sidebarClickHandler = function(event) {
      event.stopPropagation();
      if (openedByCallButton) {
        orderCall.style.display = 'none';
        sideBar.style.opacity = '1';
        closeMain.style.opacity = '0.08';
        openedByCallButton = false;
        sideBar.removeEventListener("click", sidebarClickHandler);
        sideBarFlag = true;
      }
    };

    callButton.addEventListener('click', function() {
      if (orderCall && closeMain) {
        orderCall.style.animationName = "extension2"
        orderCall.style.display = 'block';
        closeMain.style.opacity = '0.008';
        closeMain.style.position = 'fixed';
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
        sideBarFlag = true;

        setTimeout(function() {
          if (openedByCallButton) {
            sideBar.addEventListener("click", sidebarClickHandler);
          }
        }, 100);
      }
    });

    callButton2.addEventListener('click', function(event) {
      event.stopPropagation();
      if (orderCall && mainClick) {
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

    closeMain.addEventListener("click", function(event) {
      event.stopPropagation();
      let sideBarFlag1 = sideBar.style.display !== 'none' && sideBar.style.display !== '';

      if (orderCall.style.display !== "none" && sideBarFlag) {
        if (!sideBarFlag1) {
          if (sideBar.style.display === 'none' && !sideBarFlag) {
            orderCall.style.display = 'none';
            sideBar.style.display = 'flex';
            sideBar.style.opacity = '1';
            closeMain.style.opacity = '0.08';
          } else if (sideBar.style.display === 'none' && !sideBarFlag) {
            sideBarFlag = true
          } else {
            closeMain.style.opacity = '1';
            orderCall.style.display = 'none';
          }
        } else {
          orderCall.style.display = 'none';
          sideBar.style.display = 'flex';
          closeMain.style.opacity = '0.08';
          sideBar.style.opacity = '1';
        }
      }
      else if (orderCall.style.display !== "none" && !sideBarFlag) {
        if (sideBar.style.display === '' || sideBar.style.display === 'none') {
          closeMain.style.opacity = '1';
          orderCall.style.display = 'none';
        } else {
          closeMain.style.opacity = '0.08';
          orderCall.style.display = 'none';
        }
      }
    });

    cancelButton.addEventListener('click', function() {
      let sideBarFlag1 = sideBar.style.display !== 'none' && sideBar.style.display !== '';
      let sideBarFlag2 = sideBar.style.display === 'none' || sideBar.style.display === ''

      if (sideBarFlag1) {
        orderCall.style.display = 'none';
        closeMain.style.display = 'block';
        sideBar.style.opacity = '1';
        closeMain.style.opacity = '0.08';
      } else if (sideBarFlag2) {
        orderCall.style.display = 'none';
        closeMain.style.opacity = '1';
      }
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

    closeMain.addEventListener("click", function() {
      if (orderCall.style.display !== "none") {
        orderCall.style.display = 'none';
        closeMain.style.opacity = '1';
        sideBar.style.opacity = '1';
      }
    });
  }
}

small()
medium()
large()

