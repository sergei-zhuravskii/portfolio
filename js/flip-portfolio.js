
// function for desktop (screen > 1050px)
function flipPortfolioDesktop() {

  // DOM elements inizialisation
  const btnPrevious = document.querySelector('.btns-switching__btn-previous');
  const btnNext = document.querySelector('.btns-switching__btn-next');
  const sliderDesktop = document.querySelectorAll('.portfolio-list__portfolio-item_desktop');

  let slideIndex = 1; // slide start index

  switchSlides(slideIndex); // slides

  // function to switch items in portfolio
  function switchSlides(index) {
    if (index > sliderDesktop.length) {
      slideIndex = 1;
    }
    if (index < 1) {
      slideIndex = sliderDesktop.length;
    }
    for (let slide of sliderDesktop) {
      slide.style.display = 'none';
    }

    sliderDesktop[slideIndex - 1].style.display = 'flex';

    // show position in portfolio
    const positionIndexDesktop = slideIndex;
    showPositionInPortfolio(positionIndexDesktop);
  }

  // event by click btnPrevious to switch items and show position in portfolio
  btnPrevious.addEventListener('click', showPreviousSlide);

  function showPreviousSlide() {
    switchSlides(slideIndex -= 1);
  }

  // event by click btnNext to switch items and show position in portfolio
  btnNext.addEventListener('click', showNextSlide);

  function showNextSlide() {
    switchSlides(slideIndex += 1);
  }

}

// function for desktop (screen < 1049.98px)
function flipPortfolioMobile() {

  // DOM elements inizialisation
  const sliderMobile = document.querySelector('.portfolio__portfolio-list_mobile');
  const slides = Array.from(document.querySelectorAll('.portfolio-list__portfolio-item_mobile'));

  // variables inizialisation
  let isDragging = false;
  let startPosition = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID = 0;
  let currentIndex = 0;

  // events for each slide

  slides.forEach((slide, index) => {

    // events by touch
    slide.addEventListener('touchstart', touchStart(index));
    slide.addEventListener('touchend', touchEnd);
    slide.addEventListener('touchmove', touchMove);

  })

  // function for touchStart
  function touchStart(index) {
    return function (event) {
      currentIndex = index;
      startPosition = getPositionX(event);
      isDragging = true;
      animationID = requestAnimationFrame(animation);
    }
  }

  // function for touchEnd
  function touchEnd() {

    isDragging = false;

    cancelAnimationFrame(animationID);

    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && currentIndex < slides.length - 1) {
      currentIndex = currentIndex + 1;
    };

    if (movedBy > 100 && currentIndex > 0) {
      currentIndex = currentIndex - 1;
    };

    setPositionByIndex();

    // show position in portfolio
    const positionIndexMobile = currentIndex + 1;
    showPositionInPortfolio(positionIndexMobile);

  }

  // function for touchMove
  function touchMove(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      currentTranslate = prevTranslate + currentPosition - startPosition;
    }
  }

  // function getPositionX
  function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  }

  // function animation
  function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
  }

  // function setSliderPosition
  function setSliderPosition() {
    sliderMobile.style.transform = `translateX(${currentTranslate}px)`;
  }

  // function setPositionByIndex
  function setPositionByIndex() {
    currentTranslate = currentIndex * (-window.innerWidth);
    prevTranslate = currentTranslate;
    setSliderPosition();
  }

}

// function show position in portfolio

function showPositionInPortfolio(positionIndex) {

  // DOM elements inizialisation
  const positionItem1 = document.querySelector('[data-position="1"]');
  const positionItem2 = document.querySelector('[data-position="2"]');
  const positionItem3 = document.querySelector('[data-position="3"]');
  const positionItem4 = document.querySelector('[data-position="4"]');
  const positionItem5 = document.querySelector('[data-position="5"]');

  if (positionIndex == 1) {
    positionItem1.style.backgroundColor = '#ffff00';
    positionItem1.style.outlineColor = '#ffff00';
    positionItem2.style.backgroundColor = '#000101';
    positionItem2.style.outlineColor = '#ffffff';
    positionItem3.style.backgroundColor = '#000101';
    positionItem3.style.outlineColor = '#ffffff';
    positionItem4.style.backgroundColor = '#000101';
    positionItem4.style.outlineColor = '#ffffff';
    positionItem5.style.backgroundColor = '#000101';
    positionItem5.style.outlineColor = '#ffffff';
  }

  if (positionIndex == 2) {
    positionItem1.style.backgroundColor = '#000101';
    positionItem1.style.outlineColor = '#ffffff';
    positionItem2.style.backgroundColor = '#ffff00';
    positionItem2.style.outlineColor = '#ffff00';
    positionItem3.style.backgroundColor = '#000101';
    positionItem3.style.outlineColor = '#ffffff';
    positionItem4.style.backgroundColor = '#000101';
    positionItem4.style.outlineColor = '#ffffff';
    positionItem5.style.backgroundColor = '#000101';
    positionItem5.style.outlineColor = '#ffffff';
  }

  if (positionIndex == 3) {
    positionItem1.style.backgroundColor = '#000101';
    positionItem1.style.outlineColor = '#ffffff';
    positionItem2.style.backgroundColor = '#000101';
    positionItem2.style.outlineColor = '#ffffff';
    positionItem3.style.backgroundColor = '#ffff00';
    positionItem3.style.outlineColor = '#ffff00';
    positionItem4.style.backgroundColor = '#000101';
    positionItem4.style.outlineColor = '#ffffff';
    positionItem5.style.backgroundColor = '#000101';
    positionItem5.style.outlineColor = '#ffffff';
  }

  if (positionIndex == 4) {
    positionItem1.style.backgroundColor = '#000101';
    positionItem1.style.outlineColor = '#ffffff';
    positionItem2.style.backgroundColor = '#000101';
    positionItem2.style.outlineColor = '#ffffff';
    positionItem3.style.backgroundColor = '#000101';
    positionItem3.style.outlineColor = '#ffffff';
    positionItem4.style.backgroundColor = '#ffff00';
    positionItem4.style.outlineColor = '#ffff00';
    positionItem5.style.backgroundColor = '#000101';
    positionItem5.style.outlineColor = '#ffffff';
  }

  if (positionIndex == 5) {
    positionItem1.style.backgroundColor = '#000101';
    positionItem1.style.outlineColor = '#ffffff';
    positionItem2.style.backgroundColor = '#000101';
    positionItem2.style.outlineColor = '#ffffff';
    positionItem3.style.backgroundColor = '#000101';
    positionItem3.style.outlineColor = '#ffffff';
    positionItem4.style.backgroundColor = '#000101';
    positionItem4.style.outlineColor = '#ffffff';
    positionItem5.style.backgroundColor = '#ffff00';
    positionItem5.style.outlineColor = '#ffff00';
  }

}

// launch functions according to screen size
if (window.innerWidth > 576) {
  flipPortfolioDesktop(); // desktop (screen > 1050px)
} else {
  flipPortfolioMobile(); // mobile (screen < 1049.98px)
}
