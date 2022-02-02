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
