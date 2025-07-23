document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll('.fade-in, .slide-up');

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  });

  fadeEls.forEach(el => revealOnScroll.observe(el));

  // Optionally highlight sections when clicked or hovered (future enhancement)
});

