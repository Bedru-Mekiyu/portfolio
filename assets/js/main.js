/* ==========================================================================
   MAIN.JS – Bedru Mekiyuh Portfolio
   Purpose: Smooth scroll, dynamic header, animations
   Updated: 2025
   ========================================================================== */

/* Smooth scroll for internal anchor links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* Sticky header style switcher on scroll */
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 80) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

/* Animate On Scroll initialisation */
if (typeof AOS !== 'undefined') {
  AOS.init({
    once: true,
    duration: 900,
    easing: 'ease-in-out',
  });
}

/* Fade-in intersection observer (fallback for browsers without AOS) */
if (!window.AOS) {
  const fadeElements = document.querySelectorAll('.fade-in-up');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15 });
  fadeElements.forEach(el => observer.observe(el));
}

/* Mobile navigation toggler (for small screens) */
const toggle = document.querySelector('.mobile-nav-toggle');
const navMenu = document.querySelector('nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

/* Optional: Back-to-top button */
const toTop = document.createElement('button');
toTop.innerHTML = '<i class="bi bi-arrow-up-short"></i>';
Object.assign(toTop.style, {
  position: 'fixed',
  bottom: '25px',
  right: '25px',
  zIndex: '999',
  background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)',
  border: 'none',
  color: 'white',
  borderRadius: '50%',
  width: '45px',
  height: '45px',
  boxShadow: '0 4px 25px rgba(6,182,212,0.3)',
  cursor: 'pointer',
  opacity: '0',
  transition: '0.4s ease',
});

document.body.appendChild(toTop);
window.addEventListener('scroll', () => {
  toTop.style.opacity = window.scrollY > 600 ? '1' : '0';
});
toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
