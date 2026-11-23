/* ==========================================================================
   Site behavior: mobile menu, footer year, scroll reveal,
   gallery filters + lightbox, and the contact form.
   You normally won't need to edit this file.
   ========================================================================== */

document.documentElement.classList.remove("no-js");

/* ---- Mobile navigation toggle ---- */
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    siteNav.classList.toggle("is-open", !open);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && siteNav.classList.contains("is-open")) {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
      navToggle.focus();
    }
  });
}

/* ---- Current year in the footer ---- */
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

/* ---- Fade sections in as they scroll into view ---- */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

/* ---- Gallery filters ---- */
const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    filterBtns.forEach((b) => {
      b.classList.toggle("is-active", b === btn);
      b.setAttribute("aria-pressed", String(b === btn));
    });
    galleryItems.forEach((item) => {
      item.hidden = !(filter === "all" || item.dataset.category === filter);
    });
  });
});

/* ---- Gallery lightbox ---- */
const lightbox = document.querySelector(".lightbox");
if (lightbox) {
  const lbImg = lightbox.querySelector("img");
  const lbTitle = lightbox.querySelector("h3");
  const lbText = lightbox.querySelector("p");

  document.querySelectorAll(".gallery-link").forEach((link) => {
    link.addEventListener("click", () => {
      const item = link.closest(".gallery-item");
      const img = item.querySelector("img");
      lbImg.src = link.dataset.full || img.src;
      lbImg.alt = img.alt;
      lbTitle.textContent = item.querySelector("h3").textContent;
      lbText.textContent = link.dataset.description || "";
      lightbox.showModal();
    });
  });

  lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
  // Close when clicking the dark backdrop
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.close();
  });
}

/* ---- Contact form (works with Formspree; see README) ---- */
const form = document.querySelector("#contact-form");
if (form) {
  const status = form.querySelector(".form-status");
  form.addEventListener("submit", async (e) => {
    const action = form.getAttribute("action") || "";
    // Until you add your Formspree ID, show a friendly preview message instead of sending.
    if (action.includes("YOUR_FORM_ID")) {
      e.preventDefault();
      status.className = "form-status is-error";
      status.textContent =
        "This form isn't connected yet. Add your Formspree form ID in contact.html (see README).";
      return;
    }
    e.preventDefault();
    const button = form.querySelector("button[type=submit]");
    button.disabled = true;
    status.className = "form-status";
    status.textContent = "Sending…";
    try {
      const res = await fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      form.reset();
      status.className = "form-status is-success";
      status.textContent = "Thanks! Your message has been sent. I'll be in touch soon.";
    } catch {
      status.className = "form-status is-error";
      status.textContent = "Sorry, something went wrong. Please email me directly instead.";
    } finally {
      button.disabled = false;
    }
  });
}
