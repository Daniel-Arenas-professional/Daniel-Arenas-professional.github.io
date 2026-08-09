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
  }

  menuToggle.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
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

  /* ------------------------------------------------------------------ */
  /* Header sticky con blur al hacer scroll                             */
  /* ------------------------------------------------------------------ */
  const header = document.getElementById('siteHeader');
  let ticking = false;

  function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 40);
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });
  updateHeader();

  /* ------------------------------------------------------------------ */
  /* Reveal on scroll                                                    */
  /* ------------------------------------------------------------------ */
  const revealItems = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach(function (item) {
    revealObserver.observe(item);
  });

  /* ------------------------------------------------------------------ */
  /* Contadores animados                                                 */
  /* ------------------------------------------------------------------ */
  function animateCount(el) {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';

    if (reduceMotion) {
      el.textContent = target + suffix;
      return;
    }

    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }
    requestAnimationFrame(tick);
  }

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

  /* ------------------------------------------------------------------ */
  /* Palabras rotativas del hero                                         */
  /* ------------------------------------------------------------------ */
  const rotatingWord = document.getElementById('rotatingWord');
  const words = ['redes de distribución', 'flotas y rutas', 'cadenas de suministro', 'procesos con datos'];
  let wordIndex = 0;

  if (rotatingWord && !reduceMotion) {
    setInterval(function () {
      rotatingWord.classList.add('swap');
      setTimeout(function () {
        wordIndex = (wordIndex + 1) % words.length;
        rotatingWord.textContent = words[wordIndex];
        rotatingWord.classList.remove('swap');
      }, 250);
    }, 2600);
  }

  /* ------------------------------------------------------------------ */
  /* Timeline                                                             */
  /* ------------------------------------------------------------------ */
  const timelineObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        timelineObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.timeline-item').forEach(function (item) {
    timelineObserver.observe(item);
  });

  /* ------------------------------------------------------------------ */
  /* Anillos de habilidades                                              */
  /* ------------------------------------------------------------------ */
  const RING_CIRCUMFERENCE = 326.7;

  function animateRing(ring) {
    const percent = parseInt(ring.getAttribute('data-percent'), 10) || 0;
    const fillCircle = ring.querySelector('.ring-fill');
    const percentLabel = ring.querySelector('.ring-percent');
    const offset = RING_CIRCUMFERENCE * (1 - percent / 100);

    if (fillCircle) {
      fillCircle.style.strokeDashoffset = reduceMotion ? offset : RING_CIRCUMFERENCE;
      requestAnimationFrame(function () {
        fillCircle.style.strokeDashoffset = offset;
      });
    }

    if (percentLabel) {
      if (reduceMotion) {
        percentLabel.textContent = percent + '%';
      } else {
        const duration = 1200;
        const start = performance.now();
        (function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          percentLabel.textContent = Math.round(eased * percent) + '%';
          if (progress < 1) requestAnimationFrame(tick);
        })(start);
      }
    }
  }

  const ringObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateRing(entry.target);
        ringObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.skill-ring').forEach(function (ring) {
    ringObserver.observe(ring);
  });

  /* ------------------------------------------------------------------ */
  /* Botones magnéticos                                                  */
  /* ------------------------------------------------------------------ */
  if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.magnetic').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        const strength = 0.25;
        btn.style.transform = 'translate(' + (relX * strength).toFixed(1) + 'px, ' + (relY * strength).toFixed(1) + 'px)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.transform = 'translate(0, 0)';
      });
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
      title: 'Charla de Orientación al alumnado',
      description: 'Gracias a mi amplia experiencia en el ámbito de la formación profesional, tanto en clase como en empresas, ayudo a alumnos de la ESO a encontrar su motivación y su camino laboral para que les sea más fácil el cambio a estudios superiores. En esta charla comparto mi experiencia personal, consejos y recursos para que los estudiantes puedan tomar las mejores decisiones y no tengan miedo a equivocarse.',
      image: 'assets/Charla FP.png',
      tags: ['Comunicación', 'Desarrollo personal', 'Motivación']
    },
    {
      id: 1,
      title: 'Ágora, un espacio ecológico',
      description: 'Idea de empresa que hice junto a mi grupo en una clase de emprendimiento que tuvo lugar en la Universidad de Marketing y Gestión de Málaga, impartida por Diverxia. Gracias al trabajo que hicimos ese día conseguimos ganar el segundo premio del concurso de ideas de negocio, y el premio a la mejor presentación.',
      image: 'assets/Agora.png',
      tags: ['Sostenibilidad', 'Emprendimiento', 'Creatividad']
    }
  ];

  window.openModal = function (index) {
    const project = projects[index];
    if (!project) return;
    const modal = document.getElementById('projectModal');

    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalImage').alt = project.title;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;

    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = project.tags.map(function (tag) {
      return '<span class="modal-tag">' + tag + '</span>';
    }).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function () {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('projectModal');
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });

    document.querySelectorAll('.bento-card').forEach(function (card) {
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  });
})();
