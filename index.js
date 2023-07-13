// select
const menuButton = document.body.querySelector(".main-menu-icon");
const menu = document.body.querySelector(".menu"); // this no working 100%
const menuSidebar = document.body.querySelector(".menu-containerr");
const jobContent = document.body.querySelector(".menu-container-main");
const mainContent = document.body.querySelector(".container");

// toggle menu
const toggleMenu = () => {
  if (menuButton.classList.contains("main-menu-icon")) {
    menuSidebar.classList.toggle("no-menu");
    jobContent.classList.toggle("no-menu");
    mainContent.classList.toggle("show-container");
  }
};
// click event

menuButton.addEventListener("click", toggleMenu);
// menuButton.addEventListener("click", function () {
//   if (menuButton.classList.contains("main-menu-icon")) {
//     menuSidebar.classList.toggle("no-menu");
//     jobContent.classList.toggle("no-menu");
//     mainContent.classList.toggle("show-container");
//   } else {
//     console.log("No");
//   }
// });
