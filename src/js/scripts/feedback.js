let chatButton2 = document.querySelector('.upperMenu__chat')
let chatButton = document.querySelector('.contact__chat');
let openFeedback = document.querySelector('.feedback');
let sideBar = document.querySelector('.sideBar');
let buttonCross = document.querySelector('.feedback__cross');
let closeMain = document.querySelector('.navigation');
let mainClick = document.querySelector('.page');
let burgerButton = document.querySelector('.upperMenu__burger');
let width = window.innerWidth;


function small() {
  if (width >= 320 && width < 768) {
    chatButton.addEventListener('click', function() {
      if (openFeedback && closeMain) {
        openFeedback.style.display = 'flex';
        closeMain.style.display = 'none';
        sideBar.style.display = 'none';
      }
    });

    buttonCross.addEventListener('click', function() {
      if (openFeedback && closeMain) {
        openFeedback.style.display = 'none';
        closeMain.style.display = 'block';
        sideBar.style.display = 'flex';
      }
    });
  }
}

function medium() {
  if (width >= 768 && width < 1440) {
    let openedByChatButton = false;
    let sideBarFlag = false;

    let sidebarClickHandler = function(event) {
      event.stopPropagation();
      if (openedByChatButton) {
        openFeedback.style.display = 'none';
        sideBar.style.opacity = '1';
        closeMain.style.opacity = '0.08';
        openedByChatButton = false;
        sideBar.removeEventListener("click", sidebarClickHandler);
        sideBarFlag = true;
      }
    };

    chatButton.addEventListener('click', function() {
      if (openFeedback && closeMain) {
        openFeedback.style.animationName = "extension2"
        openFeedback.style.display = 'block';
        closeMain.style.opacity = '0.008';
        openFeedback.style.position = 'fixed';
        openFeedback.style.top = '0';
        openFeedback.style.right = '0';
        openFeedback.style.bottom = '0';
        openFeedback.style.zIndex = '1000';
        sideBar.style.display = 'flex';
        sideBar.style.opacity = '0.2';
        burgerButton.style.display = 'flex';
        openFeedback.style.boxShadow = '16px 0px 52px 0px #0E185033';
        openedByChatButton = true;
        sideBarFlag = true;

        setTimeout(function() {
          if (openedByChatButton) {
            sideBar.addEventListener("click", sidebarClickHandler);
          }
        }, 100);
      }
    });

    chatButton2.addEventListener('click', function(event) {
      event.stopPropagation();
      if (openFeedback && mainClick) {
        openFeedback.style.display = 'flex';
        closeMain.style.opacity = '0.008';
        openFeedback.style.position = 'fixed';
        openFeedback.style.top = '0';
        openFeedback.style.right = '0';
        openFeedback.style.bottom = '0';
        openFeedback.style.zIndex = '1000';
        closeMain.style.opacity = '0.08';
        openFeedback.style.boxShadow = '16px 0px 52px 0px #0E185033';
      }
    });

    closeMain.addEventListener("click", function(event) {
      event.stopPropagation();
      let sideBarFlag1 = sideBar.style.display !== 'none' && sideBar.style.display !== '';

      if (openFeedback.style.display !== "none" && sideBarFlag) {
        if (!sideBarFlag1) {
          if (sideBar.style.display === 'none' && !sideBarFlag) {
            openFeedback.style.display = 'none';
            sideBar.style.display = 'flex';
            sideBar.style.opacity = '1';
            closeMain.style.opacity = '0.08';
          } else if (sideBar.style.display === 'none' && !sideBarFlag) {
            sideBarFlag = true
          } else {
            closeMain.style.opacity = '1';
            openFeedback.style.display = 'none';
          }
        } else {
          openFeedback.style.display = 'none';
          sideBar.style.display = 'flex';
          closeMain.style.opacity = '0.08';
          sideBar.style.opacity = '1';
        }
      }
      else if (openFeedback.style.display !== "none" && !sideBarFlag) {
        if (sideBar.style.display === '' || sideBar.style.display === 'none') {
          closeMain.style.opacity = '1';
          openFeedback.style.display = 'none';
        } else {
          closeMain.style.opacity = '0.08';
          openFeedback.style.display = 'none';
        }
      }
    });

    buttonCross.addEventListener('click', function() {
      let sideBarFlag1 = sideBar.style.display !== 'none' && sideBar.style.display !== '';
      let sideBarFlag2 = sideBar.style.display === 'none' || sideBar.style.display === ''

      if (sideBarFlag1) {
        openFeedback.style.display = 'none';
        closeMain.style.display = 'block';
        sideBar.style.opacity = '1';
        closeMain.style.opacity = '0.08';
      } else if (sideBarFlag2) {
        openFeedback.style.display = 'none';
        closeMain.style.opacity = '1';
      }
    });
  }
}

function large() {
  if (width >= 1440) {
    chatButton.addEventListener('click', function() {
      if (openFeedback && closeMain) {
        openFeedback.style.display = 'block';
        closeMain.style.opacity = '0.08';
        openFeedback.style.position = 'fixed';
        openFeedback.style.top = '0';
        openFeedback.style.right = '0';
        openFeedback.style.bottom = '0';
        openFeedback.style.zIndex = '1000';
        sideBar.style.display = 'flex';
        sideBar.style.opacity = '0.08';
        burgerButton.style.display = 'block';
        openFeedback.style.boxShadow = '16px 0px 52px 0px #0E185033';
        openedByChatButton = true;
      }
    });

    buttonCross.addEventListener('click', function() {
      if (openFeedback && closeMain) {
        openFeedback.style.display = 'none';
        burgerButton.style.display = 'flex';
        closeMain.style.opacity = '1';
        burgerButton.style.display = 'none';
        sideBar.style.display = 'flex';
        sideBar.style.opacity = '1';
        closeMain.style.opacity = '1';
        openedByChatButton = false;
      }
    });

    closeMain.addEventListener("click", function() {
      if (openFeedback.style.display !== "none") {
        openFeedback.style.display = 'none';
        closeMain.style.opacity = '1';
        sideBar.style.opacity = '1';
      }
    });
  }
}





small()
medium()
large()

