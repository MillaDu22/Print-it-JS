
const slide = document.querySelectorAll(".slider-img"); const tagLine = document.querySelectorAll('p');
const slides = document.querySelectorAll('.slider')[

slide[0].src = "./images/slide1.jpg",
tagLine[0].innerHTML = 'Impressions tous formats <span>en boutique et en ligne</span>',

slide[1].src = "./images/slide2.jpg",
tagLine[1].innerHTML = 'Tirages haute définition grand format <span>pour vos bureaux et events</span>',

slide[2].src = "./images/slide3.jpg",
tagLine[2].innerHTML = 'Grand choix de couleurs <span>de CMJN aux pantones</span>',

slide[3].src = "./images/slide4.png",
tagLine[3].innerHTML = 'Autocollants <span>avec découpe laser sur mesure</span>'
];

function Slider() {
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const dotsSlide = document.querySelector('.dots-container');
let currentSlide = 0;

const activeDot = function (slider) { 
    document.querySelectorAll('.dot').forEach (dot =>dot.classList.remove('active')); 
    document.querySelector(`.dot[data-slide="${slider}"]`).classList.add('active');
};
activeDot(currentSlide);

const changeSlide = function (sliders) {
    slide.forEach((slider, index)=> (slider.style.transform = `translate(${100 *(index - sliders)}%)`));
    tagLine.forEach((slider, index)=> (slider.style.transform = `translate(${100 * (index - sliders)}%)`));
};
changeSlide(currentSlide);

btnNext.addEventListener('click', function () { 
    currentSlide++;
    if (slide.length -1 < currentSlide) {
    currentSlide = 0; 
};
changeSlide(currentSlide) 
activeDot(currentSlide);
});

btnPrev.addEventListener('click', function () { 
    currentSlide--;
    if (0 > currentSlide) {
    currentSlide = 3; 
};
changeSlide(currentSlide);
activeDot(currentSlide); 
});

dotsSlide.addEventListener('click', function (e) { 
    if (e.target.classList.contains('dot')) {
    const slide = e.target.dataset.slide;
changeSlide(slide);
activeDot(slide); 
}
});
}; Slider();











