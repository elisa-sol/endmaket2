
let chatButton2 = document.querySelector('.upperMenu__chat');
let chatButton = document.querySelector('.contact__chat');
let openFeedback = document.querySelector('.feedback');
let sideBar = document.querySelector('.sideBar');
let buttonCross = document.querySelector('.feedback__cross');
let closeMain = document.querySelector('.navigation');
let burgerButton = document.querySelector('.upperMenu__burger');
let width = window.innerWidth;

function small() {
  if (width >= 320 && width < 768) {
    chatButton.addEventListener('click', function() {
      if (openFeedback && closeMain) {
        openFeedback.style.display = 'flex';
        closeMain.style.display = 'none';
        sideBar.style.display = 'none';
        document.body.classList.add('modal-open');
      }
    });

    buttonCross.addEventListener('click', function() {
      if (openFeedback && closeMain) {
        openFeedback.style.display = 'none';
        closeMain.style.display = 'block';
        sideBar.style.display = 'flex';
        document.body.classList.remove('modal-open');
      }
    });
  }
}

function medium() {
  if (width >= 768 && width < 1440) {
    let openedByChatButton = false;
    let sideBarOpened = false;

    let closeFeedback = function() {
      openFeedback.style.display = 'none';
      closeMain.style.opacity = '1';
      openedByChatButton = false;
      sideBar.removeEventListener("click", sidebarClickHandler);
      document.body.classList.remove('modal-open');
    };

    let closedSideBar = function() {
      sideBar.style.display = 'none';
      closeMain.style.opacity = '1';
      sideBarOpened = false;
      document.body.classList.remove('modal-open');
    };

    let sidebarClickHandler = function(event) {
      event.stopPropagation();
      if (openedByChatButton) {
        closeFeedback();
      }
    };

    function openOpenFeedback() {
      if (sideBarOpened) {
        closedSideBar();
      }

      openFeedback.style.animationName = "extension2";
      openFeedback.style.display = 'block';
      closeMain.style.opacity = '0.08';
      openFeedback.style.position = 'fixed';
      openFeedback.style.top = '0';
      openFeedback.style.right = '0';
      openFeedback.style.bottom = '0';
      openFeedback.style.zIndex = '1000';
      burgerButton.style.display = 'flex';
      openFeedback.style.boxShadow = '16px 0px 52px 0px #0E185033';
      openedByChatButton = true;

      setTimeout(function() {
        if (openedByChatButton) {
          sideBar.addEventListener("click", sidebarClickHandler);
        }
      }, 100);

      document.body.classList.add('modal-open');
    }

    function openedSideBar() {
      if (openedByChatButton) {
        closeFeedback();
      }

      sideBar.style.display = 'flex';
      sideBar.style.opacity = '1';
      closeMain.style.opacity = '0.08';
      sideBarOpened = true;
      document.body.classList.add('modal-open');
    }

    chatButton.addEventListener('click', function() {
      openOpenFeedback();
    });

    chatButton2.addEventListener('click', function(event) {
      event.stopPropagation();
      openOpenFeedback();
    });

    burgerButton.addEventListener('click', function(event) {
      event.stopPropagation();
      if (sideBarOpened) {
        closedSideBar();
      } else {
        openedSideBar();
      }
    });

    closeMain.addEventListener("click", function(event) {
      event.stopPropagation();
      if (openFeedback.style.display !== "none") {
        closeFeedback();
      }
      if (sideBarOpened) {
        closedSideBar();
      }
    });

    buttonCross.addEventListener('click', function() {
      closeFeedback();
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
        document.body.classList.add('modal-open'); // Блокировка скролла
      }
    });

    buttonCross.addEventListener('click', function() {
      if (openFeedback && closeMain) {
        openFeedback.style.display = 'none';
        // burgerButton.style.display = 'flex';
        closeMain.style.opacity = '1';
        burgerButton.style.display = 'none';
        sideBar.style.display = 'flex';
        sideBar.style.opacity = '1';
        closeMain.style.opacity = '1';
        openedByChatButton = false;
        document.body.classList.remove('modal-open');
      }
    });

    closeMain.addEventListener("click", function() {
      if (openFeedback.style.display !== "none") {
        openFeedback.style.display = 'none';
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
