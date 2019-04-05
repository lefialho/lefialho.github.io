import {
  active
} from './config.js';

export default function initCollapse() {
  const accordionList = document.querySelectorAll('[data-anime="collapse"] dt');

  if (accordionList.length) {
    accordionList[0].classList.add(active);
    accordionList[0].nextElementSibling.classList.add(active);

    function activeCollapse() {
      // console.log(this);
      this.classList.toggle(active);
      this.nextElementSibling.classList.toggle(active);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeCollapse)
    });
  }
}