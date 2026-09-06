/**
 * HSM Hydro Control Pvt. Ltd.
 * main.js — Navigation, Scroll Effects, Accordion & Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initAccordions();
  initScrollObserver();
  initTabs();
  initCounters();
});

/**
 * Header scroll state
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile menu toggle & accordion submenus
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu-close');
  const overlay = document.querySelector('.mobile-menu-overlay');

  if (!toggleBtn || !mobileMenu) return;

  const openMenu = () => {
    mobileMenu.classList.add('is-open');
    if (overlay) overlay.classList.add('is-visible');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-visible');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // Mobile submenu accordion
  const mobileSubmenuToggles = mobileMenu.querySelectorAll('.mobile-nav-item--has-submenu > .mobile-nav-link');
  mobileSubmenuToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = toggle.closest('.mobile-nav-item');
      parent.classList.toggle('is-open');
    });
  });
}

/**
 * Accordion component (FAQ, etc.)
 */
function initAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const body = item.querySelector('.accordion-body');
      const isExpanded = header.getAttribute('aria-expanded') === 'true';

      // Optionally close sibling accordions in same container
      const container = item.closest('.accordion');
      if (container && container.dataset.single === 'true') {
        container.querySelectorAll('.accordion-item').forEach(sibling => {
          if (sibling !== item) {
            sibling.classList.remove('is-open');
            const sibHeader = sibling.querySelector('.accordion-header');
            const sibBody = sibling.querySelector('.accordion-body');
            if (sibHeader) sibHeader.setAttribute('aria-expanded', 'false');
            if (sibBody) sibBody.style.maxHeight = null;
          }
        });
      }

      if (isExpanded) {
        item.classList.remove('is-open');
        header.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        header.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
}

/**
 * Scroll reveal with IntersectionObserver
 */
function initScrollObserver() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback
    reveals.forEach(el => el.classList.add('visible'));
  }
}

/**
 * Filter tabs (Blog, Services, etc.)
 */
function initTabs() {
  const tabFilters = document.querySelectorAll('[data-filter]');
  if (!tabFilters.length) return;

  tabFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.filter;
      const container = btn.closest('.blog-section, .services-section') || document;
      
      // Toggle button active state
      btn.closest('.blog-filters, .tab-group').querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      const cards = container.querySelectorAll('[data-category]');
      cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Animated Stat Counters
 */
function initCounters() {
  const counters = document.querySelectorAll('.counter[data-target]');
  if (!counters.length) return;

  const startCounter = (el) => {
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || '';
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target.toLocaleString() + suffix;
        clearInterval(timer);
      } else {
        el.textContent = current.toLocaleString() + suffix;
      }
    }, 16);
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  } else {
    counters.forEach(c => startCounter(c));
  }
}
