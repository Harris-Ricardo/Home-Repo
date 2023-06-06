// Example using jQuery
$(document).ready(function() {
  $('.menu-icon').click(function() {
    $('.menu').toggleClass('active');
  });
});

// Example using vanilla JavaScript
window.addEventListener('resize', function() {
  if (window.innerWidth < 768) {
    // Adjust layout for small screens
    // e.g., change grid to a single column layout
  } else {
    // Adjust layout for larger screens
    // e.g., change grid to a multi-column layout
  }
});

// Example using vanilla JavaScript
var imgElement = document.querySelector('.responsive-image');

if (window.innerWidth < 768) {
  imgElement.src = 'small-image.jpg';
} else {
  imgElement.src = 'large-image.jpg';
}
