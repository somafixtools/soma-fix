/* app.js — Somafix shared interactions */

// ── NAVBAR SCROLL ────────────────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ── HAMBURGER ────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.innerHTML = navLinks.classList.contains('open')
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });
  document.addEventListener('click', e => {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
}

// ── LANGUAGE SWITCHER ─────────────────────────────
let currentLang = localStorage.getItem('sfxLang') || 'ar';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('sfxLang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';

  // Update all elements with data-ar / data-en
  document.querySelectorAll('[data-ar]').forEach(el => {
    const text = lang === 'ar' ? el.dataset.ar : el.dataset.en;
    if (text !== undefined) el.innerHTML = text;
  });

  // Toggle button label
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'ar' ? 'EN' : 'ع';
}

const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    applyLang(currentLang === 'ar' ? 'en' : 'ar');
  });
}

// Init language
applyLang(currentLang);

// ── FADE-UP ON SCROLL ─────────────────────────────
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => obs.observe(el));
}

// ── COVERAGE BAR ANIMATION ───────────────────────
const barFills = document.querySelectorAll('.bar-fill');
if (barFills.length) {
  const bObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.target || e.target.style.width;
        bObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  barFills.forEach(b => {
    b.dataset.target = b.style.width;
    b.style.width = '0%';
    bObs.observe(b);
  });
}
