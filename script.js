<<<<<<< HEAD
/* File: script.js */
// Why: proper Swiper init with a11y-friendly controls
const swiper = new Swiper('.slider-container', {
  effect: 'slide',
  speed: 1300,
  loop: true,
  grabCursor: true,
  keyboard: { enabled: true },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  // autoplay: { delay: 4500, disableOnInteraction: false }, // enable if desired
=======
/* File: script.js */
// Why: proper Swiper init with a11y-friendly controls
const swiper = new Swiper('.slider-container', {
  effect: 'slide',
  speed: 1300,
  loop: true,
  grabCursor: true,
  keyboard: { enabled: true },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  // autoplay: { delay: 4500, disableOnInteraction: false }, // enable if desired
>>>>>>> db4d2e537c6f221dfdc894eed2be932906fc059c
});