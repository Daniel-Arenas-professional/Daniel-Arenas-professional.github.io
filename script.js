(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------ */
  /* Menú hamburguesa                                                    */
  /* ------------------------------------------------------------------ */
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  function closeMenu() {
    navMenu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
  }

  menuToggle.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', function (e) {
    if (navMenu.classList.contains('active') &&
        !navMenu.contains(e.target) &&
        !menuToggle.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      closeMenu();
      menuToggle.focus();
    }
  });

  /* ------------------------------------------------------------------ */
  /* Header: borde al hacer scroll                                       */
  /* ------------------------------------------------------------------ */
  const header = document.getElementById('siteHeader');
  let ticking = false;

  function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 10);
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });
  updateHeader();

  /* ------------------------------------------------------------------ */
  /* Aparición suave                                                     */
  /* ------------------------------------------------------------------ */
  const revealItems = document.querySelectorAll('[data-reveal]');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  } else {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Contadores (el valor final ya está en el HTML)                      */
  /* ------------------------------------------------------------------ */
  function animateCount(el) {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1100;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = prefix + Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    el.textContent = prefix + '0' + suffix;
    requestAnimationFrame(tick);
  }

  if (!reduceMotion && 'IntersectionObserver' in window) {
    const statObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const numberEl = entry.target.querySelector('.stat-number');
          if (numberEl) animateCount(numberEl);
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    document.querySelectorAll('.stat-item').forEach(function (item) {
      statObserver.observe(item);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Nav link activo según sección visible                              */
  /* ------------------------------------------------------------------ */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector('.nav-link[href="#' + id + '"]');
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(function (l) { l.classList.remove('active'); });
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  /* ------------------------------------------------------------------ */
  /* Proyectos / Modal                                                   */
  /* ------------------------------------------------------------------ */
  const projects = [
    {
      id: 0,
      title: 'Charla de orientación al alumnado',
      description: 'Ayudé a alumnos de la ESO a encontrar su motivación y su camino laboral, compartiendo mi experiencia, consejos y recursos.',
      image: 'assets/charla-fp.jpg',
      alt: 'Portada de la presentación «Orientación a la FP», con ilustraciones de estudiantes leyendo sobre libros',
      tags: ['Desarrollo personal', 'Motivación']
    },
    {
      id: 1,
      title: 'Ágora, un espacio ecológico',
      description: 'Idea de empresa desarrollada en una formación de emprendimiento impartida por Diverxia.',
      image: 'assets/agora.jpg',
      alt: 'Portada del proyecto Ágora S.L., supermercado ecológico, con ilustraciones de personas comprando productos frescos',
      tags: ['Sostenibilidad', 'Emprendimiento', 'Creatividad']
    }
  ];

  const modal = document.getElementById('projectModal');

  window.openModal = function (index) {
    const project = projects[index];
    if (!project) return;

    const image = document.getElementById('modalImage');
    image.src = project.image;
    image.alt = project.alt;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;

    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.textContent = '';
    project.tags.forEach(function (tag) {
      const span = document.createElement('span');
      span.className = 'modal-tag';
      span.textContent = tag;
      tagsContainer.appendChild(span);
    });

    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function () {
    if (typeof modal.close === 'function') {
      modal.close();
    } else {
      modal.removeAttribute('open');
    }
    document.body.style.overflow = '';
  };

  modal.addEventListener('close', function () {
    document.body.style.overflow = '';
  });

  // Cerrar al pulsar fuera de la hoja
  modal.addEventListener('click', function (e) {
    if (e.target === modal) window.closeModal();
  });

  modal.querySelector('.modal-close').addEventListener('click', window.closeModal);

  document.querySelectorAll('.project-open').forEach(function (button) {
    button.addEventListener('click', function () {
      window.openModal(parseInt(button.getAttribute('data-project'), 10));
    });
  });
})();
