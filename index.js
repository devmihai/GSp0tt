"use strict"

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li")



/*const navSlider = () => { */
    burger.addEventListener("click", () => {
//Toggle 
        burger.classList.toggle("nav-active")
        nav.classList.toggle("nav-active");
    
//Animate links
navLinks.forEach((link, index) => {
    if(link.style.animation){
     link.style.animation = `navFade 1.5s forwards ${index/10 + 0.5}s `
    }else{
     link.style.animation = `navFade 0.5s ease forwards ${index/7 + 0.5}s `
    }
    })
    //Burger animation 
    burger.classList.toggle("toggle");
  
    //turn off
    navLinks.forEach(n=> n.addEventListener("click", () =>{
        burger.classList.remove("nav-active");
        nav.classList.remove("nav-active")
        burger.classList.remove("toggle")
    }))
}) 

//gsap.fromTo(".logo", {opacity:0}, {opacity:0.5, duration:1});
/*
gsap.from(".logo", {duration: 1.5, ease: "bounce.out", x:-100});
gsap.from(".nav-links", {duration:2.5, ease: "elastic.inOut(0.8, 0.7)", y: -150})
*/
   

   

/*
const sliderOff = () => {nav.addEventListener("click", () =>{
    document.body.classList.remove("nav-active")
    infoContainer.style.opacity="1"
    burger.classList.toggle("toggle")
})
}
*/

//sliderOff();

