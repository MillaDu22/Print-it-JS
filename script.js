const slide = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.png"];

const tagLine = [
  "Impressions tous formats <span>en boutique et en ligne</span>",
  "Tirages haute définition grand format <span>pour vos bureaux et events</ span>",
  "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  "Autocollants <span>avec découpe laser sur mesure</span>" 
];

function Slider () {
  const btnPrev = document.querySelector('.prev');
  const btnNext = document.querySelector('.next');
  const dotsSlide = document.querySelector('.dots-container'); 
  let currentSlide = 0;

  const activeDot = function (slider) { 
    document.querySelectorAll('.dot').forEach((dot) =>  dot.classList.remove('active')); 
    document.querySelector(`.dot[data-slide="${slider}"]`).classList.add('active'); 
  };
  activeDot(currentSlide);

  function ChangeSlide(){
    document.getElementById("img").src = "./images/" + slide[currentSlide]; 
    document.getElementById("p").innerHTML =""+ tagLine[currentSlide];
  }
  ChangeSlide();

  btnNext.addEventListener('click', () => { 
    currentSlide++;
    if (slide.length - 1 < currentSlide) {
      currentSlide = 0;
    }
  ChangeSlide();
  activeDot(currentSlide);
  });

  btnPrev.addEventListener('click', () => { 
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = 3;
  }
  ChangeSlide();
  activeDot(currentSlide);
  });

  dotsSlide.addEventListener('click', e => { 
    if (e.target.classList.contains('dot')) {
      const {slide} = e.target.dataset; 
      currentSlide = Number(slide); 
      ChangeSlide(); 
      activeDot(slide);
    }
  });
}
Slider();