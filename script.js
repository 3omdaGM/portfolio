/* ════════════════════════════════════════════════════════
   Mohamed El-Taher — Portfolio JavaScript
   ════════════════════════════════════════════════════════ */

"use strict";

/* ── DOM Ready ───────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavbar();
  initSmoothScroll();
  initScrollReveal();
  initCounters();
  initSkillBars();
  initProjectFilter();
  initContactForm();
  initScrollTop();
});

/* ════════════════════════════════════════════════════════
   THEME: DARK / LIGHT
   ════════════════════════════════════════════════════════ */
function initTheme() {
  const toggle = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");
  const html = document.documentElement;

  // Load saved preference
  const saved = localStorage.getItem("theme") || "dark";
  applyTheme(saved);

  toggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      icon.className = "fas fa-moon";
    } else {
      icon.className = "fas fa-sun";
    }
  }
}

/* ════════════════════════════════════════════════════════
   NAVBAR: Scroll behavior + active link
   ════════════════════════════════════════════════════════ */
function initNavbar() {
  const nav = document.getElementById("mainNav");
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Shrink navbar on scroll
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 60) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
      updateActiveLink(sections, links);
    },
    { passive: true },
  );

  // Close mobile menu on link click
  links.forEach((link) => {
    link.addEventListener("click", () => {
      const collapseEl = document.getElementById("navMenu");
      const bsCollapse = bootstrap.Collapse.getInstance(collapseEl);
      if (bsCollapse) bsCollapse.hide();
    });
  });
}

function updateActiveLink(sections, links) {
  let current = "";
  const offset = 120;

  sections.forEach((section) => {
    const top = section.offsetTop - offset;
    if (window.scrollY >= top) current = section.getAttribute("id");
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

/* ════════════════════════════════════════════════════════
   SMOOTH SCROLL
   ════════════════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* ════════════════════════════════════════════════════════
   SCROLL REVEAL
   ════════════════════════════════════════════════════════ */
function initScrollReveal() {
  const elements = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add small delay for children in grid
          const parent = entry.target.closest(".row");
          if (parent) {
            const siblings = [
              ...parent.querySelectorAll(
                ".reveal-up, .reveal-left, .reveal-right",
              ),
            ];
            const index = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * 0.08}s`;
          }
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  elements.forEach((el) => observer.observe(el));
}

/* ════════════════════════════════════════════════════════
   COUNTERS (profile stats)
   ════════════════════════════════════════════════════════ */
function initCounters() {
  const counters = document.querySelectorAll(".stat-num");
  let started = false;

  const startCounters = () => {
    if (started) return;
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target"));
      let current = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        counter.textContent = current;
        if (current >= target) clearInterval(timer);
      }, 40);
    });
    started = true;
  };

  // Start on first scroll or after short delay
  window.addEventListener("scroll", startCounters, {
    once: true,
    passive: true,
  });
  setTimeout(startCounters, 1800);
}

/* ════════════════════════════════════════════════════════
   SKILL BARS
   ════════════════════════════════════════════════════════ */
function initSkillBars() {
  const bars = document.querySelectorAll(".skill-fill");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.getAttribute("data-width");
          // Delay slightly so CSS transition kicks in after paint
          requestAnimationFrame(() => {
            setTimeout(() => {
              bar.style.width = width + "%";
            }, 100);
          });
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.3 },
  );

  bars.forEach((bar) => observer.observe(bar));
}

/* ════════════════════════════════════════════════════════
   PROJECT FILTER
   ════════════════════════════════════════════════════════ */
function initProjectFilter() {
  const btns = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".project-item");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      items.forEach((item) => {
        const cats = item.getAttribute("data-category") || "";
        if (filter === "all" || cats.includes(filter)) {
          item.classList.remove("hidden");
          // Re-trigger reveal animation
          item.style.opacity = "0";
          item.style.transform = "translateY(20px)";
          requestAnimationFrame(() => {
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            }, 50);
          });
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}

/* ════════════════════════════════════════════════════════
   CONTACT FORM
   ════════════════════════════════════════════════════════ */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Basic validation
    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    if (!name || !email || !message) return;

    // Simulate sending (replace with real fetch/API call later)
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML =
        '<i class="fas fa-paper-plane me-2"></i>Send Message';
      success.classList.remove("d-none");
      setTimeout(() => success.classList.add("d-none"), 5000);
    }, 1500);
  });
}

/* ════════════════════════════════════════════════════════
   SCROLL TO TOP BUTTON
   ════════════════════════════════════════════════════════ */
function initScrollTop() {
  const btn = document.getElementById("scrollTop");
  if (!btn) return;

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 400) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    },
    { passive: true },
  );

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ════════════════════════════════════════════════════════
   PROFILE CARD 3D TILT
   (Mouse-tracking for desktop hover effect)
   ════════════════════════════════════════════════════════ */
(function initCardTilt() {
  const card = document.querySelector(".profile-card");
  if (!card) return;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const inner = card.querySelector(".profile-card-inner");
    if (inner) {
      inner.style.transform = `
        rotateY(${x * 10}deg)
        rotateX(${-y * 8}deg)
        scale(1.03)
      `;
    }
  });

  card.addEventListener("mouseleave", () => {
    const inner = card.querySelector(".profile-card-inner");
    if (inner) {
      inner.style.transform = "rotateY(0) rotateX(0) scale(1)";
    }
  });
})();
