// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get the hamburger icon and nav links container
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Add a click event to the hamburger icon
hamburger.addEventListener('click', function (){
  // Check if navLinks already has the 'active' class
  if (navLinks.classList.contains('active')) {
    // If it has, remove it to hide the menu
    navLinks.classList.remove('active');
  } else {
    // If not, add it to show the menu
    navLinks.classList.add('active');
  }
});
});
