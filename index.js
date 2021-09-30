"use strict"

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li")
const infoContainer = document.querySelector(".info-container")




const navSlider = () => {
    burger.addEventListener("click", () => {
//Toggle 
        nav.classList.toggle("nav-active");
    
//Animate links
navLinks.forEach((link, index) => {
    if(link.style.animation){
     link.style.animation = ""
     infoContainer.style.opacity="1"
    }else{
        infoContainer.style.opacity="0"
     link.style.animation = `navFade 0.5s ease forwards ${index/7 + 0.5}s `
    }
    })
    //Burger animation 
    burger.classList.toggle("toggle");
  
    //turn off
   
}) 
}


/*
const sliderOff = () => {nav.addEventListener("click", () =>{
    document.body.classList.remove("nav-active")
    infoContainer.style.opacity="1"
    burger.classList.toggle("toggle")
})
}
*/
navSlider();
//sliderOff();

