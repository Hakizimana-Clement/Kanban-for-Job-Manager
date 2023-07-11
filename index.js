const iconMenu = document.querySelector(".main-menu-icon");
const allMenuClass = document.querySelector(".menu");
const test = document.querySelector(".container--job-title_heading");
// sidebar and container
const main = document.querySelector(".menu-container_main");
const allIcon = document.querySelector(".menu-container");

// allMenuClass.classList.remove("class", allMenuClass);
iconMenu.addEventListener("click", function () {
  console.log("I was clicked");

  // if (allMenuClass.classList.contains("menu")) {
  //   console.log("yes");
  // }
  // test.classList.toggle("test10");
  // // allMenuClass.classList.toggle(allIcon);
  // main.classList.toggle("menu-containerr");
  // // allIcon.classList.toggle("test10");
  if (iconMenu.classList.contains("main-menu-icon")) {
    console.log("yes");

    menu.classList.remove("showMenu");
    // closeIcon.style.display = "none";
    // menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    // closeIcon.style.display = "block";
    // menuIcon.style.display = "none";
  }
});
