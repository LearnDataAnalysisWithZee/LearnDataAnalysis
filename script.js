document.addEventListener("DOMContentLoaded", () => {
  // Highlight elements as they scroll into view
  const faders = document.querySelectorAll(".fade-in, .slide-up");

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -20px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
});
