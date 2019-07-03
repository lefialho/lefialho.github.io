import {
  active
} from './config.js';

export default function initCollapse() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');

  if (accordionList.length) {
    accordionList[0].classList.add(active);
    accordionList[0].nextElementSibling.classList.add(active);

    function activeCollapse() {
      // console.log(this);
      accordionList.forEach((item) => {
        item.nextElementSibling.classList.remove(active);
        item.classList.remove(active);
      });

      this.classList.toggle(active);
      this.nextElementSibling.classList.toggle(active);

      // this.addEventListener('click', () => {
      //   if (this.classList.contains(active)) {
      //     this.classList.toggle(active);
      //     this.nextElementSibling.classList.toggle(active);
      //   }
      // })
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeCollapse)
    });
  }
}