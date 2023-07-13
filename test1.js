const menu = document.body.querySelector(".menu-button");
const nav = document.body.querySelector("nav");
const container = document.body.querySelector(".container");
const allContainer = document.body.querySelector(".others");
// event Listener
menu.addEventListener("click", function () {
  console.log("I was clicked");
  if (menu.classList.contains("menu-button")) {
    nav.classList.toggle("change");
    container.classList.toggle("no");
    allContainer.classList.toggle("others");
  }
});
