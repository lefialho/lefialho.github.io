import {
  active
} from './global.js';

export default function inititAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="collapse"] dt');

  if (accordionList.length) {
    accordionList[0].classList.add(active);
    accordionList[0].nextElementSibling.classList.add(active);

    function activeAcordion() {
      // console.log(this);
      accordionList.forEach((item) => {
        item.nextElementSibling.classList.remove(active);
      })
      this.classList.toggle(active);
      this.nextElementSibling.classList.toggle(active);
    }

    accordionList.forEach((item, index) => {
      item.addEventListener('click', activeAcordion);
    });
  }
}