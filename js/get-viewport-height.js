
// get viewport height
let vh = window.innerHeight * 0.01;

// set value in --vh to root
document.documentElement.style.setProperty('--vh', `${vh}px`);

// listen resize event
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
