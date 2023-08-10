
  //hamburguer menu
  document.addEventListener("DOMContentLoaded", function () {
    const menuSwitcher = document.querySelector(".menu-switcher-mobile");
    const navbar = document.querySelector(".navbar");
  
    menuSwitcher.addEventListener("click", function () {
      navbar.classList.toggle("show");
    });
  });
  

  ScrollReveal().reveal('.header')
  ScrollReveal().reveal('.navbar', {delay:300, duration: 300, easing:'ease-in'}) ;ScrollReveal().reveal('.navbar', {delay:900, duration: 900, interval:400, easing:'ease-in', origin:'top'}) ;  
  ScrollReveal().reveal('.container', {delay:500, easing: 'ease-in'}) ; 
  ScrollReveal().reveal('.imgHead', {delay:900, duration: 500, easing:'ease-in', interval:600, distance: '70px', origin:'top'}) ; 
  ScrollReveal().reveal('.title', {delay:900, duration: 500, easing:'ease-in', interval:600, distance: '70px', origin:'top'}) ; 
  ScrollReveal().reveal('.category-text', {delay:900, duration: 500, easing:'ease-in', interval:600, distance: '70px', origin:'left'}) ; 
  ScrollReveal().reveal('.footer', {delay:500, duration: 500, easing:'ease-in', interval:400, distance: '70px',origin:'bottom'}) ;  
