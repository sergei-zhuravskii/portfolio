
// function for desktop (screen > 1050px)
function flipPortfolioDesktop() {

  // DOM elements inizialisation
  const btnPrevious = document.querySelector('.btns-switching__btn-previous');
  const btnNext = document.querySelector('.btns-switching__btn-next');
  const sliderDesktop = document.querySelectorAll('.portfolio-list__portfolio-item_desktop');
  const positions = document.querySelectorAll('[data-name="switching-position"]');

  let slideIndex = 1; // slide start index

  let switchingIndex = 1; // position start index

  switchSlides(slideIndex); // slides

  switchPosition(slideIndex); // positions

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
  }

  // function to show position in portfolio
  function switchPosition(index) {
    if (index > positions.length) {
      switchingIndex = 1;
    }
    if (index < 1) {
      switchingIndex = positions.length;
    }
    for (let position of positions) {
      position.style.backgroundColor = '#ffffff';
    }

    positions[switchingIndex - 1].style.backgroundColor = '#ffff00';
  }

  // event by click btnPrevious to switch items and show position in portfolio
  btnPrevious.addEventListener('click', showPreviousSlide);

  function showPreviousSlide() {
    switchSlides(slideIndex -= 1);
    switchPosition(switchingIndex -= 1);
  }

  // event by click btnNext to switch items and show position in portfolio
  btnNext.addEventListener('click', showNextSlide);

  function showNextSlide() {
    switchSlides(slideIndex += 1);
    switchPosition(switchingIndex += 1);
  }

  console.log('Hello from DESKTOP')

}

// function for desktop (screen < 1049.98px)
function flipPortfolioMobile() {

  // DOM elements inizialisation
  const sliderMobile = document.querySelector('.portfolio__portfolio-list_mobile');
  const slides = Array.from(document.querySelectorAll('.portfolio-list__portfolio-item_mobile'))

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

    // events by mouse
    // slide.addEventListener('mousedown', touchStart(index));
    // slide.addEventListener('mouseup', touchEnd);
    // slide.addEventListener('mouseleave', touchEnd);
    // slide.addEventListener('mousemove', touchMove);
  })

  // Disable context menu
  // window.oncontextmenu = function (event) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   return false;
  // }

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
  }

  // function for touchMove
  function touchMove(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      currentTranslate = prevTranslate + currentPosition - startPosition;
    }
  }

  // function for getPositionX
  function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  }

  // function for animation
  function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
  }

  function setSliderPosition() {
    sliderMobile.style.transform = `translateX(${currentTranslate}px)`;
  }

  function setPositionByIndex() {
    currentTranslate = currentIndex * (-window.innerWidth);
    prevTranslate = currentTranslate;
    setSliderPosition();
  }

  console.log('Hello from MOBILE')

}

// condition for screen size
if (window.innerWidth > 576) {
  flipPortfolioDesktop();
} else {
  flipPortfolioMobile();
}
