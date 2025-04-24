var swiper = new Swiper(".swiper", {
    initialSlide: 0,
    centeredSlides: true,
    loop: true,
    speed: 900,
    grabCursor: true,
    allowTouchMove: true,
    effect: "coverflow",
    coverflowEffect:{
        rotate: -15,
        stretch: -45,
        depth: 90,
        modifier: 1,
        slideShadows: true,
    },
    mousewheel:{
        thresholdDelta: 50,
        sensitivity: 1,
    },
    pagination:{
        el: ".swiper-pagination",
    },
    breakpoints:{
        0:{
            slidesPerView: 1.2,
            spaceBetween:20,
        },
        600:{
            slidesPerView: 2.5,
        },
        1200:{
            slidesPerView: 5,
            spaceBetween:50,
        },
  
    },
  
  
});

/*const card = document.querySelectorAll('.swiper-slide');
card.forEach(element => {
  element.addEventListener('click', function() {
    element.classList.toggle('flipped');
  });
});*/

/*const slides = document.querySelectorAll('.swiper-slide');

function flip(){
    const activeSlide = document.querySelector('swipper-slide-active');
    const button = activeSlide.querySelector('button');

    if (button){
        button.addEventListener("click", (event) =>{
            event.stopPropagation();
            activeSlide.classList.add('flipped');

        });
    }
}

flip();

slides.forEach((slide) => {
    slide.addEventListener("click", () => {
        if(
            slide.classList.contains('swiper-slide-active') &&
            slide.classList.contains('flipped')
        ){
           slide.classList.remove('flipped') 
        }
    });
});*/

const slides = document.querySelectorAll('.swiper-slide');

slides.forEach((slide) => {
    slide.addEventListener("click", () => {
        if (slide.classList.contains('swiper-slide-active')) {
            slide.classList.toggle('flipped'); // Toggle the "flipped" class
        }
    });
});




