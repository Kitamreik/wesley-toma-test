// DOM Event Steps:

// 1. select hamburger icon --> event target
const hamburgerIcon = document.querySelector("");
const navUl = document.querySelector("");

// 2. event handler --> show/hide

// 3. bind with event listener --> attach hamburger icon to event listener, NOT Menu Items
hamburgerIcon.addEventListener("click", () => {
    navUl.classList.toggle("open-sesame");
});

// slideshow
// show slides based off the counter

let slideCount = 0;
showSlides();

function showSlides() {
  let i;
  // init the index
  let slides = document.getElementsByClassName("slide-img");
  // DOM manipulation to target the images
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideCount++;
  if (slideCount > slides.length) {slideCount = 1}
  slides[slideCount-1].style.display = "block";  
  setTimeout(showSlides, 6000); // Change image every 6 seconds
}


// loading bar functionality



// back to top arrow button

//Get the button
let scrollbutton = document.getElementById("scroll-button");

// When the user scrolls down 2px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // 200 works
    // limit
  if (document.body.scrollTop > 3 || document.documentElement.scrollTop > 3) {
    scrollbutton.style.display = "block";
  } else {
    scrollbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}