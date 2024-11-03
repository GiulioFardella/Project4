//// BOTTONE 
window.addEventListener("scroll", function() {
    const headerHeight = document.querySelector("header").offsetHeight;
    const navbutton = document.getElementById("navbutton");
  
    if (window.scrollY > headerHeight) {
      navbutton.classList.add("scrolled");
    } else {
      navbutton.classList.remove("scrolled");
    }
  });
 //// NAVBAR 
  window.addEventListener("scroll", function() {
    const headerHeight = document.querySelector("header").offsetHeight;
      const navBar = document.querySelector("nav");
    
    if (window.scrollY > headerHeight) {
      navBar.classList.add("navbar-scrolled");
     } else{ 
      navBar.classList.remove("navbar-scrolled");
    }
  });
  
 