/* ============================================================
   SHTATTO' — interactions
   i18n engine · menu renderer · language switcher · motion
   ============================================================ */
(function () {
  'use strict';

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.prototype.slice.call((c || document).querySelectorAll(s));
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const LANGS = window.LANGS || [];
  const I18N  = window.I18N  || {};
  let lang = 'en';

  function t(key) {
    const dict = I18N[lang] || I18N.en || {};
    if (dict[key] != null) return dict[key];
    if (I18N.en && I18N.en[key] != null) return I18N.en[key];
    return key;
  }
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function isRTL() { return document.documentElement.dir === 'rtl'; }

  /* ============================================================
     PRELOADER — logo intro, then hand off to the hero entrance
     ============================================================ */
  const preloader = $('#preloader');
  let readyDone = false;
  function siteReady() {
    if (readyDone) return;
    readyDone = true;
    if (preloader) preloader.classList.add('is-done');
    document.body.classList.add('is-ready');
  }
  let seen = false;
  try { seen = sessionStorage.getItem('shtatto-seen') === '1'; } catch (e) {}
  try { sessionStorage.setItem('shtatto-seen', '1'); } catch (e) {}
  const t0 = Date.now();
  const minTime = seen ? 250 : 950;
  function maybeReady() {
    const wait = Math.max(0, minTime - (Date.now() - t0));
    setTimeout(siteReady, wait);
  }
  if (document.readyState === 'complete') maybeReady();
  else window.addEventListener('load', maybeReady);
  setTimeout(siteReady, 2600); // hard fallback

  /* ============================================================
     i18n — apply a language to the whole page
     ============================================================ */
  const lbPrev = $('#lbPrev');
  const lbNext = $('#lbNext');

  function applyLang(code, save) {
    if (!I18N[code]) code = 'en';
    lang = code;
    const meta = LANGS.filter(function (l) { return l.code === code; })[0];
    const dir = (meta && meta.dir) || 'ltr';

    document.documentElement.lang = code;
    document.documentElement.dir = dir;

    const year = String(new Date().getFullYear());
    $$('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n')).replace('{year}', year);
    });
    $$('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    $$('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
    $$('[data-i18n-title]').forEach(function (el) {
      el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
    });
    $$('[data-i18n-alt]').forEach(function (el) {
      el.setAttribute('alt', t(el.getAttribute('data-i18n-alt')));
    });

    document.title = t('seo.title');
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', t('seo.desc'));

    const label = $('#langLabel');
    if (label) label.textContent = code.toUpperCase();
    const flagEl = $('#langFlag');
    if (flagEl) flagEl.innerHTML = FLAG_SVG[code] || '';
    $$('.lang__opt').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-lang') === code);
    });

    if (lbPrev && lbNext) {
      lbPrev.textContent = dir === 'rtl' ? '\u203A' : '\u2039'; // › : ‹
      lbNext.textContent = dir === 'rtl' ? '\u2039' : '\u203A';
    }

    renderMenu();

    if (save !== false) {
      try { localStorage.setItem('shtatto-lang', code); } catch (e) {}
    }
  }

  /* ============================================================
     MENU — render the 89-item carte from menu-data.js
     ============================================================ */
  const menuGrid = $('#menuGrid');
  let activeCat = 'all';

  function renderMenu() {
    if (!menuGrid || !window.MENU) return;
    const steamCats = window.STEAM_CATS || [];

    menuGrid.innerHTML = window.MENU.map(function (g, i) {
      const steam = steamCats.indexOf(g.cat) > -1
        ? '<span class="steam" aria-hidden="true"><i></i><i></i><i></i></span>' : '';
      const items = g.items.map(function (it) {
        const em = (it.e && it.e[lang]) || '';
        const name = esc(it.n) + (em ? ' <em>' + esc(em) + '</em>' : '');
        const price = it.p + ' ' + (lang === 'ar' ? '\u062F\u0631\u0647\u0645' : 'dh');
        const desc = (it.d && it.d[lang])
          ? '<p class="dish__desc">' + esc(it.d[lang]) + '</p>' : '';
        return '<li' + (it.note ? ' class="menu-note"' : '') + '><div class="dish">' +
          '<span class="dish__name">' + name + '</span>' +
          '<span class="dish__dots"></span>' +
          '<span class="dish__price">' + price + '</span></div>' + desc + '</li>';
      }).join('');

      return '<div class="menu-group reveal" data-cat="' + g.cat +
        '" style="transition-delay:' + (i % 6) * 70 + 'ms">' +
        '<h3 class="menu-group__title"><span class="menu-group__ic">' +
        '<svg class="menu-group__icon" viewBox="0 0 24 24" aria-hidden="true">' + g.icon + '</svg>' +
        steam + '</span>' + esc(t(g.titleKey)) + '</h3>' +
        '<ul class="menu-list">' + items + '</ul></div>';
    }).join('');

    observeReveals(menuGrid);
    filterMenu(activeCat, false);
  }

  function filterMenu(cat, animate) {
    activeCat = cat;
    const cats = cat.split(',');
    let visIdx = 0;
    $$('.menu-group', menuGrid).forEach(function (g) {
      const show = cats.indexOf('all') > -1 || cats.indexOf(g.getAttribute('data-cat')) > -1;
      g.classList.toggle('is-hidden', !show);
      if (show && animate) {
        g.classList.add('is-visible');
        g.classList.remove('is-enter');
        void g.offsetWidth; // reflow so the animation can retrigger
        g.style.animationDelay = (visIdx * 55) + 'ms';
        g.classList.add('is-enter');
        visIdx++;
        setTimeout(function () { g.classList.remove('is-enter'); }, 750 + visIdx * 55);
      }
    });
  }

  /* ---------- Menu tabs ---------- */
  $$('.tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      $$('.tab').forEach(function (x) {
        x.classList.remove('is-active');
        x.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      filterMenu(tab.getAttribute('data-cat'), !REDUCED);
    });
  });

  /* ---------- Print menu (button + Ctrl+P) ---------- */
  function unhideAllForPrint() {
    $$('.menu-group.is-hidden').forEach(function (g) { g.classList.remove('is-hidden'); });
  }
  const printBtn = $('#printMenu');
  if (printBtn) {
    printBtn.addEventListener('click', function () {
      unhideAllForPrint();
      window.print();
      setTimeout(function () { filterMenu(activeCat, false); }, 400);
    });
  }
  window.addEventListener('beforeprint', unhideAllForPrint);
  window.addEventListener('afterprint', function () { filterMenu(activeCat, false); });

  /* ============================================================
     LANGUAGE SWITCHER
     ============================================================ */
  const langWrap = $('#lang');
  const langBtn  = $('#langBtn');
  const langMenu = $('#langMenu');

  /* Tiny SVG flags for the switcher (codes stay visible, no language names) */
  const FLAG_SVG = {
    en: '<svg viewBox="0 0 60 30" aria-hidden="true"><rect width="60" height="30" fill="#012169"/><path d="M0 0l60 30M60 0L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30M60 0L0 30" stroke="#C8102E" stroke-width="2.4"/><rect x="25" width="10" height="30" fill="#fff"/><rect y="10" width="60" height="10" fill="#fff"/><rect x="26.5" width="7" height="30" fill="#C8102E"/><rect y="11.5" width="60" height="7" fill="#C8102E"/></svg>',
    fr: '<svg viewBox="0 0 60 30" aria-hidden="true"><rect width="20" height="30" fill="#002395"/><rect x="20" width="20" height="30" fill="#fff"/><rect x="40" width="20" height="30" fill="#ED2939"/></svg>',
    ar: '<svg viewBox="0 0 60 30" aria-hidden="true"><rect width="60" height="30" fill="#C1272D"/><path d="M30 5l5.88 18.09L20.49 11.91h19.02L24.12 23.09z" fill="none" stroke="#006233" stroke-width="2.4" stroke-linejoin="round"/></svg>',
    es: '<svg viewBox="0 0 60 30" aria-hidden="true"><rect width="60" height="30" fill="#AA151B"/><rect y="7.5" width="60" height="15" fill="#F1BF00"/></svg>',
    de: '<svg viewBox="0 0 60 30" aria-hidden="true"><rect width="60" height="10" fill="#000"/><rect y="10" width="60" height="10" fill="#DD0000"/><rect y="20" width="60" height="10" fill="#FFCE00"/></svg>',
    it: '<svg viewBox="0 0 60 30" aria-hidden="true"><rect width="20" height="30" fill="#009246"/><rect x="20" width="20" height="30" fill="#fff"/><rect x="40" width="20" height="30" fill="#CE2B37"/></svg>',
    ru: '<svg viewBox="0 0 60 30" aria-hidden="true"><rect width="60" height="10" fill="#fff"/><rect y="10" width="60" height="10" fill="#0039A6"/><rect y="20" width="60" height="10" fill="#D52B1E"/></svg>'
  };

  if (langMenu && LANGS.length) {
    langMenu.innerHTML = LANGS.map(function (l) {
      return '<li><button type="button" class="lang__opt" role="option" data-lang="' + l.code + '" aria-label="' + l.native + '">' +
        '<span class="lang__flag" aria-hidden="true">' + (FLAG_SVG[l.code] || '') + '</span>' +
        '<span class="lang__code">' + l.code.toUpperCase() + '</span></button></li>';
    }).join('');

    langMenu.addEventListener('click', function (e) {
      const b = e.target.closest('.lang__opt');
      if (!b) return;
      applyLang(b.getAttribute('data-lang'));
      closeLang();
    });
  }
  function openLang() {
    langWrap.classList.add('is-open');
    langMenu.hidden = false;
    langBtn.setAttribute('aria-expanded', 'true');
  }
  function closeLang() {
    langWrap.classList.remove('is-open');
    langMenu.hidden = true;
    langBtn.setAttribute('aria-expanded', 'false');
  }
  if (langBtn) {
    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (langMenu.hidden) openLang(); else closeLang();
    });
    document.addEventListener('click', function (e) {
      if (!langMenu.hidden && !langWrap.contains(e.target)) closeLang();
    });
  }

  /* ============================================================
     HEADER — scroll state + progress bar
     ============================================================ */
  const header = $('#header');
  const progressBar = $('#progressBar');
  const parEls = $$('[data-par]');
  let parTicking = false;

  function parallax() {
    parTicking = false;
    if (REDUCED) return;
    const vh = window.innerHeight;
    for (let i = 0; i < parEls.length; i++) {
      const el = parEls[i];
      const r = el.getBoundingClientRect();
      if (r.bottom < -120 || r.top > vh + 120) continue;
      const delta = (r.top + r.height / 2) - vh / 2;
      const sp = parseFloat(el.getAttribute('data-par')) || 0.1;
      el.style.transform = 'translate3d(0,' + (-delta * sp).toFixed(1) + 'px,0)';
    }
  }

  function onScroll() {
    const y = window.scrollY || window.pageYOffset;
    header.classList.toggle('is-scrolled', y > 40);

    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    if (progressBar) progressBar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';

    if (parEls.length && !parTicking) {
      parTicking = true;
      requestAnimationFrame(parallax);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  /* ============================================================
     MOBILE MENU
     ============================================================ */
  const burger = $('#burger');
  const nav = $('#nav');

  function closeMenu() {
    header.classList.remove('menu-open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  burger.addEventListener('click', function () {
    const open = header.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeMenu(); closeLang(); }
  });

  /* ============================================================
     ACTIVE NAV LINK ON SCROLL
     ============================================================ */
  const sections = $$('section[id]');
  const navLinks = $$('.nav__link');

  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ============================================================
     REVEAL ON SCROLL (shared observer — also used for the menu)
     ============================================================ */
  let revealIO = null;
  function observeReveals(root) {
    const els = $$('.reveal:not(.is-visible)', root || document);
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    if (!revealIO) {
      revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    }
    els.forEach(function (el) { revealIO.observe(el); });
  }
  observeReveals(document);

  /* ============================================================
     STATS — count-up when visible
     ============================================================ */
  function countUp(el) {
    const finalText = el.textContent;
    const m = finalText.match(/\d+/);
    if (!m) return;
    const target = parseInt(m[0], 10);
    if (!target || REDUCED) return;
    const start = performance.now();
    const dur = 1500;
    (function frame(now) {
      const p = Math.min(1, (now - start) / dur);
      const val = Math.round(target * (1 - Math.pow(1 - p, 3)));
      el.textContent = finalText.replace(/\d+/, String(val));
      if (p < 1) requestAnimationFrame(frame);
    })(performance.now());
  }
  if ('IntersectionObserver' in window) {
    const statIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        countUp(en.target);
        statIO.unobserve(en.target);
      });
    }, { threshold: 0.6 });
    $$('.stat__n').forEach(function (el) { statIO.observe(el); });
  }

  /* ============================================================
     HERO DUST MOTES
     ============================================================ */
  const dustBox = $('#heroDust');
  if (dustBox && !REDUCED) {
    for (let i = 0; i < 16; i++) {
      const s = document.createElement('span');
      s.className = 'dust';
      const size = (2 + Math.random() * 4).toFixed(1);
      const dx = Math.round(Math.random() * 60 - 30);
      s.style.left = (Math.random() * 100).toFixed(1) + '%';
      s.style.top = (55 + Math.random() * 50).toFixed(1) + '%';
      s.style.width = size + 'px';
      s.style.height = size + 'px';
      s.style.setProperty('--dx', dx + 'px');
      s.style.animationDuration = (7 + Math.random() * 8).toFixed(1) + 's';
      s.style.animationDelay = '-' + (Math.random() * 12).toFixed(1) + 's';
      dustBox.appendChild(s);
    }
  }

  /* ============================================================
     DISH CARD TILT
     ============================================================ */
  if (!REDUCED && window.matchMedia('(hover: hover)').matches) {
    $$('.dish-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          'translateY(-8px) rotateX(' + (-py * 6).toFixed(2) + 'deg) rotateY(' +
          (px * 7).toFixed(2) + 'deg)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  /* ============================================================
     LIGHTBOX
     ============================================================ */
  const lightbox = $('#lightbox');
  const lbImg = $('#lbImg');
  const lbCaption = $('#lbCaption');
  const lbClose = $('#lbClose');
  const items = $$('.gallery__item');
  let current = 0;
  let lastFocus = null;

  function render(index) {
    current = (index + items.length) % items.length;
    const item = items[current];
    lbImg.src = item.getAttribute('data-src');
    lbImg.alt = item.querySelector('img').alt;
    lbCaption.textContent = item.getAttribute('data-cap') ? t(item.getAttribute('data-cap')) : '';
  }
  function open(index) {
    lastFocus = document.activeElement;
    render(index);
    lightbox.hidden = false;
    requestAnimationFrame(function () { lightbox.classList.add('is-open'); });
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }
  function close() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(function () { lightbox.hidden = true; lbImg.src = ''; }, 320);
    if (lastFocus) lastFocus.focus();
  }

  items.forEach(function (item, i) {
    item.addEventListener('click', function () { open(i); });
  });
  lbClose.addEventListener('click', close);
  lbPrev.addEventListener('click', function () { render(current - 1); });
  lbNext.addEventListener('click', function () { render(current + 1); });
  lightbox.addEventListener('click', function (e) { if (e.target === lightbox) close(); });

  document.addEventListener('keydown', function (e) {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft')  render(current + (isRTL() ? 1 : -1));
    if (e.key === 'ArrowRight') render(current + (isRTL() ? -1 : 1));
  });

  /* touch swipe */
  let touchX = null;
  lightbox.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; }, { passive: true });
  lightbox.addEventListener('touchend', function (e) {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) render(current + (dx < 0 ? 1 : -1));
    touchX = null;
  }, { passive: true });

  /* ============================================================
     SMOOTH ANCHOR OFFSET FOR FIXED HEADER
     ============================================================ */
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - (header.offsetHeight - 10);
      window.scrollTo({ top: top, behavior: REDUCED ? 'auto' : 'smooth' });
    });
  });

  /* ============================================================
     BOOT — pick the language, then everything comes alive
     ============================================================ */
  let initial = null;
  try { initial = localStorage.getItem('shtatto-lang'); } catch (e) {}
  if (!initial || !I18N[initial]) {
    const nl = (navigator.language || 'en').slice(0, 2).toLowerCase();
    initial = I18N[nl] ? nl : 'en';
  }
  applyLang(initial, false);
})();
