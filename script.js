(function () {
  // Hero slider
  const hero = document.querySelector('.hero-swiper');
  if (hero) {
    new Swiper(hero, {
      pagination: { el: '.hero-pagination', clickable: true },
      navigation: { nextEl: '.hero-button-next', prevEl: '.hero-button-prev' },
      a11y: { enabled: true },
      keyboard: { enabled: true },
    });
  }

  // Projects cards slider
  const cards = document.querySelector('.cards-swiper');
  if (cards) {
    new Swiper(cards, {
      slidesPerView: 1.1,
      spaceBetween: 14,
      breakpoints: {
        640: { slidesPerView: 2.1 },
        880: { slidesPerView: 3.1 },
        1120: { slidesPerView: 4 },
      },
      pagination: { el: '.cards-pagination', clickable: true },
      navigation: { nextEl: '.cards-button-next', prevEl: '.cards-button-prev' },
      a11y: { enabled: true },
      keyboard: { enabled: true },
    });
  }
})();