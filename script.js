document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const menu = document.querySelector(".menu-links");
  const closeBtn = document.querySelector(".close-btn");
  const menuLinks = document.querySelectorAll(".menu-links a");
  const scrollLeftButton = document.querySelector(".scroll-btn.left");
  const scrollRightButton = document.querySelector(".scroll-btn.right");
  const scrollContainer = document.querySelector(".certifications-container");

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

  // Scroll Left Functionality
  const scrollArrowLeft = () => {
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  // Scroll Right Functionality
  const scrollArrowRight = () => {
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  // Attach Event Listeners
  if (scrollLeftButton) {
    scrollLeftButton.addEventListener("click", scrollArrowLeft);
  }

  if (scrollRightButton) {
    scrollRightButton.addEventListener("click", scrollArrowRight);
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


