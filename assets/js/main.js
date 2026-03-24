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
const header = document.querySelector('header');
const navMenu = header ? header.querySelector('nav') : null;
if (toggle && navMenu) {
  const backdrop = document.createElement('div');
  backdrop.className = 'mobile-nav-backdrop';
  document.body.appendChild(backdrop);

  const setMenuState = (isOpen) => {
    navMenu.classList.toggle('open', isOpen);
    backdrop.classList.toggle('show', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.innerHTML = isOpen
      ? '<i class="bi bi-x"></i>'
      : '<i class="bi bi-list"></i>';
  };

  toggle.addEventListener('click', () => {
    const isOpen = !navMenu.classList.contains('open');
    setMenuState(isOpen);
  });

  backdrop.addEventListener('click', () => setMenuState(false));

  navMenu.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link) {
      return;
    }

    const href = (link.getAttribute('href') || '').trim();
    if (!href) {
      return;
    }

    event.preventDefault();
    setMenuState(false);

    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, '', href);
      }
      return;
    }

    window.setTimeout(() => {
      window.location.href = href;
    }, 120);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuState(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      setMenuState(false);
    }
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
