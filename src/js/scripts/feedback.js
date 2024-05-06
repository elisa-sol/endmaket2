// // let chatButton = document.querySelector('.contact__chat');
// let openFeedback = document.querySelector('.feedback');
// let hideHeader = document.querySelector('.header');
// let sideBar = document.querySelector('.sideBar');
// // let buttonCross = document.querySelector('.feedback__cross');
// // let mainClick = document.querySelector('.page');
// // let closeMain = document.querySelector('.navigation');
// // let sidebarOriginalOpacity;
//
// let width = window.innerWidth;
//
//
//
// let burgerButton = document.querySelector('.upperMenu__burger');
//
//
// function checkWidth() {
//   if (width >= 320 && width < 768) {
//     chatButton.addEventListener('click', function() {
//       if (openFeedback && closeMain) {
//         openFeedback.style.display = 'block';
//         hideHeader.style.display = 'none';
//         closeMain.style.display = 'none';
//         sideBar.style.display = 'none';
//       }
//     });
//
//     buttonCross.addEventListener('click', function() {
//       if (openFeedback && closeMain) {
//         openFeedback.style.display = 'none';
//         hideHeader.style.display = 'none';
//         closeMain.style.display = 'block';
//         sideBar.style.display = 'block';
//       }
//     });
//
//   } else if (width >= 768) {
//     chatButton.addEventListener('click', function() {
//       if (openFeedback && closeMain) {
//         openFeedback.style.display = 'block';
//         closeMain.style.opacity = '0.0008';
//         openFeedback.style.position = 'fixed';
//         openFeedback.style.top = '0';
//         openFeedback.style.right = '0';
//         openFeedback.style.bottom = '0';
//         openFeedback.style.zIndex = '1000';
//         sideBar.style.display = 'block';
//         sideBar.style.opacity = '0.2';
//         burgerButton.style.display = 'block';
//         openFeedback.style.boxShadow = '16px 0px 52px 0px #0E185033';
//       }
//     });
//
//     buttonCross.addEventListener('click', function() {
//       if (openFeedback && closeMain) {
//         openFeedback.style.display = 'none';
//         burgerButton.style.display = 'flex';
//         closeMain.style.opacity = '1';
//         sideBar.style.opacity = '1';
//         burgerButton.style.display = 'none';
//         sideBar.style.display = 'flex';
//         closeMain.style.opacity = '0.08';
//       }
//     });
//
//
//     closeMain.addEventListener('click', function(event) {
//       if (width >= 768 && openFeedback.style.display === 'block' && !openFeedback.contains(event.target) && event.target !== closeMain && event.target !== buttonCross) {
//         openFeedback.style.display = 'none';
//         sideBar.style.display = 'none';
//         closeMain.style.opacity = '1';
//         // burgerButton.style.display = 'flex';
//       }
//     });
//
//   }
// }
//
// //
// //
// //     checkWidth();
// //
//     window.addEventListener('resize', checkWidth);
// //
//

let chatButton2 = document.querySelector('.upperMenu__chat')
// // let chatButton = document.querySelector('.contact__chat');
let openFeedback = document.querySelector('.feedback');
// let hideHeader = document.querySelector('.header');
let sideBar = document.querySelector('.sideBar');
let buttonCross = document.querySelector('.feedback__cross');
let mainClick = document.querySelector('.page');
let closeMain = document.querySelector('.navigation');
let width = window.innerWidth;
let burgerButton = document.querySelector('.upperMenu__burger');
// let footerMargin = document.querySelector('.contact');
//
//
//
chatButton2.addEventListener('click', function() {
  if (width >= 768 && width < 1440
      && openFeedback && mainClick) {
//     console.log('hi')
    // footerMargin.style.marginTop = '210px';
    openFeedback.style.display = 'flex';
    closeMain.style.opacity = '0.008';
    openFeedback.style.position = 'fixed';
    openFeedback.style.top = '0';
    openFeedback.style.right = '0';
    openFeedback.style.bottom = '0';
    openFeedback.style.zIndex = '1000';
    closeMain.style.opacity = '0.08';

    // sideBar.style.display = 'block';
    // sideBar.style.opacity = '0.2';
    // burgerButton.style.display = 'block';
    openFeedback.style.boxShadow = '16px 0px 52px 0px #0E185033';
  }
});
  buttonCross.addEventListener('click', function() {
    if (width >= 768 && width < 1440
      && openFeedback && closeMain) {
      openFeedback.style.display = 'none';
      // burgerButton.style.display = 'flex';
      closeMain.style.opacity = '0.08';
      burgerButton.style.display = 'flex';
      sideBar.style.display = 'none';
      // sideBar.style.opacity = '1';
      closeMain.style.opacity = '1';

    }
});

closeMain.addEventListener('click', function(event) {

  if (width >= 768 && width < 1440
    && openFeedback.style.display === 'block'
    && !openFeedback.contains(event.target)
    && event.target !== closeMain
    && event.target !== buttonCross
    && sideBar.style.display !== 'none'
  ) {
    // console.log('hi');
    openFeedback.style.display = 'none';
    // burgerButton.style.display = 'flex';
    closeMain.style.opacity = '0.08';
    burgerButton.style.display = 'flex';
    sideBar.style.display = 'none';
    // sideBar.style.opacity = '1';
    closeMain.style.opacity = '1';

    // closeMain.style.opacity = '0.08';
    // sideBar.style.opacity = '1';
  // } else if (width >= 1440
  //   && openFeedback.style.display === 'block'
  //   && !openFeedback.contains(event.target)
  //   && event.target !== closeMain
  //   && event.target !== buttonCross) {
  //   openFeedback.style.display = 'none';
  //   sideBar.style.display = 'block';
  //   sideBar.style.opacity = '1';
  //   closeMain.style.opacity = '1';
  //   // footerMargin.style.marginTop = '210px';
  }
});
//
// buttonCross.addEventListener('click', function() {
//   if (openFeedback && closeMain) {
//     openFeedback.style.display = 'none';
//     // burgerButton.style.display = 'flex';
//     closeMain.style.opacity = '1';
//     // burgerButton.style.display = 'none';
//     // sideBar.style.display = 'flex';
//     // sideBar.style.opacity = '1';
//   }
// });
//
// closeMain.addEventListener('click', function(event) {
//       if (width >= 768 && openFeedback.style.display === 'block' && !openFeedback.contains(event.target) && event.target !== closeMain && event.target !== buttonCross) {
//         openFeedback.style.display = 'none';
//         sideBar.style.display = 'none';
//         closeMain.style.opacity = '1';
//         // burgerButton.style.display = 'flex';
//       }
//     });






