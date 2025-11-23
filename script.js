(function () {
  // Burger menu
  const topbar = document.querySelector('.topbar');
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('primary-menu');

  function closeMenu() {
    if (!topbar) return;
    topbar.classList.remove('is-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }
  function openMenu() {
    if (!topbar) return;
    topbar.classList.add('is-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }
  function toggleMenu() {
    topbar.classList.toggle('is-open');
    const expanded = topbar.classList.contains('is-open');
    if (toggle) toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }

  if (toggle && menu) {
    toggle.addEventListener('click', toggleMenu);
    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
    // Close when clicking a link
    menu.addEventListener('click', (e) => {
      const t = e.target;
      if (t && t.closest && t.closest('a')) closeMenu();
    });
  }

  // Hero slider
  const hero = document.querySelector('.hero-swiper');
  if (hero && window.Swiper) {
    new Swiper(hero, {
      pagination: { el: '.hero-pagination', clickable: true },
      navigation: { nextEl: '.hero-button-next', prevEl: '.hero-button-prev' },
      a11y: { enabled: true },
      keyboard: { enabled: true },
    });
  }

  // Projects cards slider
  const cards = document.querySelector('.cards-swiper');
  if (cards && window.Swiper) {
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