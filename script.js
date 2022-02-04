"use strict";

// TABS
function changeContent(index,id){
    var contents = document.querySelectorAll(".content");
    var tabButtons = document.querySelectorAll(".buttontab");

    for(let i = 0; i < contents.length; i++){
        contents[i].classList.remove("display");
        contents[i].classList.remove("transform");
        tabButtons[i].classList.remove("active");
    }

    var element = document.getElementById(id);
    element.classList.add("display");
    tabButtons[index].classList.add("active");
    

    setTimeout(function(){
        element.classList.add("transform");
    },100);
}

// SWIPER JS

const swiper = new Swiper('.swiper', {
  // Optional parameters
   direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  speed: 1000,
  breakpoints: {

      720: {
          slidesperView: 2,
          slidesPerGroup: 2,
          allowSlideNext: true,
          allowSlidePrev: true,
      },

      1280: {
          slidesperView: 3,
          slidesPerGroup: 3,
          allowSlideNext: true,
          allowSlidePrev: true,
      }

    },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

// BURGER MENU

var burger = document.getElementById("burger");
var sideMenu = document.getElementById("side-menu");

burger.addEventListener("click", function(){
    sideMenu.classList.toggle("width");
    this.classList.toggle("rotateZ");
});

window.addEventListener("resize",function(){
    if(window.innerWidth > 760) {
        sideMenu.classList.remove("width");
        burger.classList.remove("rotateZ");
    }
})
