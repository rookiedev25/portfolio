// defining the scroll-to-top button functionality
// const scrollToTopBtn = document.getElementsByClassName("scrollToTopBtn")[0]; -- using class
const scrollToTopBtn = document.getElementById("scrollToTopBtn"); // using id

// now we need to show the button only when user scrolls down
window.onscroll = function () {
  if (document.body.scrollTop > 7 || document.documentElement.scrollTop > 7) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// this is the function that will work when this scrollToTopBtn is clicked, it should take the user to the top of the page.
scrollToTopBtn.onclick = function () {
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
};

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
