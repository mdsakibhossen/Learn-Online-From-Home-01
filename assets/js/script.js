const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const bars = document.querySelector(".bars");
const times = document.querySelector(".times");
const nav = document.querySelector(".header__container nav");


// Header Scroll Effect
window.addEventListener("scroll",()=>{
    if(window.scrollY>0){
        header.classList.add("sticky-header");
    }else{
        header.classList.remove("sticky-header");
    }
});
// Nav Open & Close
menuBtn.addEventListener("click",()=>{
    if (bars.style.display === "block"){
        bars.style.display = "none";
        times.style.display = "block";
        nav.classList.add("active");
    }else{
        bars.style.display = "block";
        times.style.display = "none"; 
        nav.classList.remove("active");
    }
});