document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const menu = document.querySelector(".menu-links");
  const closeBtn = document.querySelector(".close-btn");
  const menuLinks = document.querySelectorAll(".menu-links a");

  // Toggle menu open/close
  const toggleMenu = () => {
    menu.classList.toggle("open");
    hamburgerIcon.classList.toggle("open");
  };

  // Attach event listeners
  if (hamburgerIcon) hamburgerIcon.addEventListener("click", toggleMenu);
  if (closeBtn) closeBtn.addEventListener("click", toggleMenu);
  if (menuLinks) {
    menuLinks.forEach((link) =>
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        hamburgerIcon.classList.remove("open");
      })
    );
  }
});

// INTERSECTION OBSERVER FOR ANIMATIONS
const observerOptions = {
  threshold: 0.08, // Trigger when 8% of the element is visible
};

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
    else {
      entry.target.classList.remove("visible");
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right, .slide-from-bottom").forEach((el) => {
  el.classList.remove("visible");
  observer.observe(el);
});


function scrollArrowRight() {
  const container = document.querySelector(".certifications-container");
  container.scrollBy({ left: 250, behavior: "smooth" });
}

function scrollArrowLeft() {
  const container = document.querySelector(".certifications-container");
  container.scrollBy({ left: -250, behavior: "smooth" });
}
