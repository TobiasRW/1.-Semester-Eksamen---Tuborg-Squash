// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Comparison Slider
const slideContainer = document.querySelector('.slide-container')
document.querySelector('.slider').addEventListener('input', (e) => {
    slideContainer.style.setProperty('--position', `${e.target.value}%`);
});

// Fade Animations
const faders = document.querySelectorAll('.fade-in'); 
const sliders = document.querySelectorAll('slide-in'); 
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
       entry.target.classList.add('appear');
       appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

// Image Automatic Slider
var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("working");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("working");
  
  index++;
  
  setTimeout(changeSlide,4000);
  
}

changeSlide();

{}