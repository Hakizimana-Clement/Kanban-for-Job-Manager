// select
const menuButton = document.body.querySelector(".main-menu-icon");
const menuSidebar = document.body.querySelector(".container--job-title");
const jobContent = document.body.querySelector(".menu-container");
const mainContent = document.body.querySelector(".container");

// toggle menu function
const toggleMenu = () => {
  if (menuButton.classList.contains("main-menu-icon")) {
    menuSidebar.classList.toggle("show-menu");
    jobContent.classList.toggle("no-menu");
    mainContent.classList.toggle("show-container");
  }
};

// click event
menuButton.addEventListener("click", toggleMenu);
