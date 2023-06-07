window.addEventListener("load", function() {
  var navbar = document.querySelector(".hidden-navbar");
  navbar.classList.add("visible-navbar");
});

// Get the current page URL
var currentUrl = window.location.href;

// Get all menu items
var menuItems = document.querySelectorAll('.menu-nav .menu-item');

// Loop through each menu item
menuItems.forEach(function(item) {
  // Get the link URL of the menu item
  var menuItemUrl = item.querySelector('a').href;

  // Compare the current URL with the menu item URL
  if (currentUrl === menuItemUrl) {
    // Add the "active" class to the menu item
    item.classList.add('active');
  }
});

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}