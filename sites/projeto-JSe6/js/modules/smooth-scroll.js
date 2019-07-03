import {
  active
} from './config.js';

export default function initSmoothScroll() {
  const insideLinks = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]');
  // console.log(insideLinks);

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    // console.log(href);
    const section = document.querySelector(href);
    // console.log(section);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    //Forma alternativa
    // const topSection = section.offsetTop;
    // console.log(topSection);
    // window.scrollTo({
    //   top: topSection,
    //   behavior: 'smooth'
    // })
  }
  insideLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}