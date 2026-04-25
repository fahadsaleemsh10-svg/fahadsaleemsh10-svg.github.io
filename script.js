// mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.onclick = () => {
  navLinks.classList.toggle("active");}

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// // close mobile menu on link click
// document.querySelectorAll(".nav-links a").forEach(link => {
//   link.addEventListener("click", () => {
//     navLinks.classList.remove("show");
//   });
// });

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    navLinks.classList.remove("active");
  });
});

// reveal on scroll
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.88;

  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// counter animation
const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function runCounters() {
  if (counterStarted) return;

  const statsSection = document.querySelector(".stats");
  const rect = statsSection.getBoundingClientRect();

  if (rect.top < window.innerHeight - 100) {
    counterStarted = true;

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const speed = 120;
      const increment = Math.ceil(target / speed);

      let count = 0;

      const updateCounter = () => {
        count += increment;
        if (count < target) {
          counter.innerText = count;
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target + "+";
        }
      };

      updateCounter();
    });
  }
}

window.addEventListener("scroll", runCounters);
window.addEventListener("load", runCounters);

// tilt effect for service cards
const tiltCards = document.querySelectorAll(".tilt-card");

tiltCards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  });
});

// parallax blur background
const blurs = document.querySelectorAll(".bg-blur");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  blurs.forEach((blur, index) => {
    const moveX = (x - 0.5) * (20 + index * 8);
    const moveY = (y - 0.5) * (20 + index * 8);
    blur.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});









menuBtn.onclick = () => {
  navLinks.classList.toggle("active");
};
