# Kanban for job manager

This web page showcases kaban for job manager, a design by <b>Roman Cherepivskiy</b>. <br>
The resource is [Kanban for job manager by Roman Cherepivskiy](https://dribbble.com/shots/7024782-Kanban-for-Job-Manager)

## Table of contents

- [Installation](#installation)
- [Overview](#overview)
  - [The task](#the-task)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Installation

To use the Modern Art Gallery website locally, follow these steps:

1. Clone the repository: git clone https://github.com/Hakizimana-Clement/Kanban-for-Job-Manager.git

2. Navigate to the project directory: cd modern-art-gallery

3. Open the home page (index.html) in a web browser

## Overview

### The Task

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- On mobile screen size, the humbuge icon needs to be interactive

### Links

- Github repository URL: [Kanban-for-Job-Manager](https://github.com/Hakizimana-Clement/Kanban-for-Job-Manager)
- Live Site URL: [Kanban for job manager](https://hakizimana-clement.github.io/Kanban-for-Job-Manager/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- javaScript

### What I learned

1. I learned how to make a navbar with javascript.<br>
   It was fun to create some classes that had no display on the page and then use javascript ClassList toggle and contains to show or hide them when the user clicked on them.

```js
// select
const menuButton = document.body.querySelector(".main-menu-icon");
const menuSidebar = document.body.querySelector(".container--job-content");
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
```

2. I learned how to write media query more awesome.

Form this:

```css
@media (min-width: 600px) and (max-width: 900px) {
}
```

To this:

```css
@media (600px <= width <= 9000px) {
}
```

### Continued development

I’m working on making the css code more readable and DRY (don’t repeat yourself), as you can see. The code still requires more refactoring.

### Useful resources

- [Web Dev Simplified](https://www.youtube.com/shorts/IQqpnu6AhE8) - This helped me for Know how to write media query easy way.. I really liked this pattern and will use it going forward.

## Author

- Github - [Hakizimana Clement](https://github.com/Hakizimana-Clement/)
- Twitter - [@HakizimanaClem5](https://www.twitter.com/HakizimanaClem5)
