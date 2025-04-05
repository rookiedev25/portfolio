// defining the scroll-to-top button functionality
// const scrollToTopBtn = document.getElementsByClassName("scrollToTopBtn")[0]; -- using class
const scrollToTopBtn = document.getElementById("scrollToTopBtn"); // using id

// now we need to show the button only when user scrolls down
window.onscroll = function () {
  if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
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
