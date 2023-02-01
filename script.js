const img = document.querySelectorAll(".slider-img");
img[0].src = "./images/slide1.jpg";
img[1].src = "./images/slide2.jpg";
img[2].src = "./images/slide3.jpg";
img[3].src = "./images/slide4.png";

const txtSlides = document.querySelectorAll('p');
txtSlides[0].innerHTML = 'Impressions tous formats <span>en boutique et en ligne</span>';
txtSlides[1].innerHTML = 'Tirages haute définition grand format <span>pour vos bureaux et events</span>';
txtSlides[2].innerHTML = 'Grand choix de couleurs <span>de CMJN aux pantones</span>';
txtSlides[3].innerHTML = 'Autocollants <span>avec découpe laser sur mesure</span>';

function Slider() {
    const carouselSlides = document.querySelectorAll('.slide');
    const btnPrev = document.querySelector('.prev');
    btnPrev.src = "./images/arrow_left.png";
    const btnNext = document.querySelector('.next');
    btnNext.src = "./images/arrow_right.png";
    const dotsSlide = document.querySelector('.dots-container');
    let currentSlide = 0;

    const activeDot = function (slide) {
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');
    };
    activeDot(currentSlide);

    const changeSlide = function (slides) {
        carouselSlides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slides)}%)`));
    };
    changeSlide(currentSlide);

    btnNext.addEventListener('click', function () {
        currentSlide++; 
        if (carouselSlides.length - 1 < currentSlide) {
            currentSlide = 0;
        };
        changeSlide(currentSlide);
        activeDot(currentSlide);
});
console.log[btnNext];

    btnPrev.addEventListener('click', function () {
        currentSlide--;
        if (0 >= currentSlide) {
            currentSlide = 3;
        }; 
        changeSlide(currentSlide);
        activeDot(currentSlide);
    });
    console.log[btnPrev]

    dotsSlide.addEventListener('click', function (e) {
        if (e.target.classList.contains('dot')) {
            const slide = e.target.dataset.slide;
            changeSlide(slide);
            activeDot(slide);
        }
    });
    console.log[dotsSlide]
    };
Slider();











