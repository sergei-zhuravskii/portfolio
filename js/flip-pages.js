
// DOM elements inizialisation
const navLink1 = document.querySelector('#nav-link-1');
const navLink2 = document.querySelector('#nav-link-2');
const navLink3 = document.querySelector('#nav-link-3');
const pagePersonalCard = document.querySelector('.main-content__personal-card');
const pagePortfolio = document.querySelector('.main-content__portfolio');
const pageContacts = document.querySelector('.main-content__contacts');
const navLinks = document.querySelectorAll('.header-nav__item-link');
const pages = document.querySelectorAll('[data-name="content-page"]');
const portfolioBtn = document.querySelector('.personal-card__portfolio-btn');

// click events for items in nav
navLink1.addEventListener('click', showMain);
navLink2.addEventListener('click', showPortfolio);
navLink3.addEventListener('click', showContacts);

// click event for portfolio btn
portfolioBtn.addEventListener('click', showPortfolio);

// function to show Main page
function showMain() {
  navLinks.forEach((link) => link.style.color = '#C8C8C8');
  navLink1.style.color = '#0ff3d0';
  pages.forEach((page) => page.style.display = 'none');
  pagePersonalCard.style.display = 'flex';
};

// function to show Portfolio page
function showPortfolio() {
  navLinks.forEach((link) => link.style.color = '#C8C8C8');
  navLink2.style.color = '#0ff3d0';
  pages.forEach((page) => page.style.display = 'none');
  pagePortfolio.style.display = 'flex';
};

// function to show Contacts page
function showContacts() {
  navLinks.forEach((link) => link.style.color = '#C8C8C8');
  navLink3.style.color = '#0ff3d0';
  pages.forEach((page) => page.style.display = 'none');
  pageContacts.style.display = 'flex';
};
