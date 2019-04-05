import {
  active
} from './config.js';

export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(active);

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(active);
      });
      // console.log(tabContent[index]);
      // console.log(tabContent[index].dataset.anime);
      const animeDirection = tabContent[index].dataset.anime;
      tabContent[index].classList.add(active, animeDirection);
    }

    tabMenu.forEach((itemMenu, index) => {
      // console.log(itemMenu, index);
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}