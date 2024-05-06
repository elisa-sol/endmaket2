let chatButton2 = document.querySelector('.upperMenu__chat')
let chatButton = document.querySelector('.contact__chat');
let openFeedback = document.querySelector('.feedback');
let sideBar = document.querySelector('.sideBar');
let buttonCross = document.querySelector('.feedback__cross');
let closeMain = document.querySelector('.navigation');
let mainClick = document.querySelector('.page');
let burgerButton = document.querySelector('.upperMenu__burger');
let width = window.innerWidth;



function checkWidth() {
  if (width >= 320 && width < 768) {
    chatButton.addEventListener('click', function() {
      if (openFeedback && closeMain) {
        openFeedback.style.display = 'block';
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

  } else if (width >= 768 && width < 1440) {
    chatButton.addEventListener('click', function() {
      if (openFeedback && closeMain) {
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
      }
    });

    buttonCross.addEventListener('click', function() {
      if (openFeedback && closeMain) {
        openFeedback.style.display = 'none';
        burgerButton.style.display = 'flex';
        closeMain.style.opacity = '0.08';
        burgerButton.style.display = 'none';
        sideBar.style.display = 'flex';
        sideBar.style.opacity = '1';
      }
    });

  } else if (width >= 1440) {
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
      }
    });
  }


    closeMain.addEventListener('click', function(event) {
      if (width >= 768 && width < 1440
        && openFeedback.style.display === 'block'
        && !openFeedback.contains(event.target)
        && event.target !== closeMain
        && event.target !== buttonCross) {
        openFeedback.style.display = 'none';
        closeMain.style.display = 'block';
        closeMain.style.opacity = '1';
        sideBar.style.opacity = '1';

      } else if (width >= 1440
        && openFeedback.style.display === 'block'
        && !openFeedback.contains(event.target)
        && event.target !== closeMain
        && event.target !== buttonCross) {
          openFeedback.style.display = 'none';
          sideBar.style.display = 'flex';
          sideBar.style.opacity = '1';
          closeMain.style.opacity = '1';
      }
    });
}


chatButton2.addEventListener('click', function() {
  if (width >= 768 && width < 1440
    && openFeedback && mainClick) {
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

buttonCross.addEventListener('click', function() {
  if (width >= 768 && width < 1440
    && openFeedback && closeMain) {
    openFeedback.style.display = 'none';
    closeMain.style.opacity = '0.08';
    burgerButton.style.display = 'flex';
    sideBar.style.display = 'none';
    closeMain.style.opacity = '1';

  }
});

mainClick.addEventListener('click', function() {
  if (width >= 768 && width < 1440 && openFeedback && closeMain) {
    openFeedback.style.display = 'none';
    sideBar.style.display = 'none';
    closeMain.style.opacity = '1';
  }
});


checkWidth();

window.addEventListener('resize', checkWidth);
