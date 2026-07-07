/* Brave Ronil Foundation — small interactions: mobile nav, scroll reveal,
   donation amount selector. No dependencies. */
(function () {
  "use strict";

  // Mark JS active so reveal animations engage (content is visible without JS).
  document.documentElement.classList.add("js");

  // --- Mobile nav toggle ---
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // close on link click (mobile)
    header.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () { header.classList.remove("open"); });
    });
  }

  // --- Reveal on scroll ---
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // --- Donation amount selector ---
  var amounts = document.querySelectorAll(".donate-amounts .amt");
  amounts.forEach(function (a) {
    a.addEventListener("click", function () {
      amounts.forEach(function (x) { x.classList.remove("sel"); });
      a.classList.add("sel");
    });
  });

  // --- Contact form (demo only) ---
  var form = document.querySelector("form[data-demo]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector(".form-note");
      if (note) { note.textContent = "Thank you — this is a demo form. Connect it to your backend to receive messages."; note.hidden = false; }
      form.reset();
    });
  }

  // --- Footer year ---
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
