import {
  events,
  active
} from './config.js';

import outSideClick from './outside-click.js';

export default function initMenuMobile() {
  const menuMobileButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const bgBlack = document.querySelector('[data-bgblack]');

  if (menuMobileButton) {
    function openMenu() {
      this.classList.toggle(active);
      menuList.classList.toggle(active);
      bgBlack.classList.toggle(active);

      // outSideClick(menuList, events, () => {
      //   this.classList.remove(active);
      //   menuList.classList.remove(active);
      // })
    }

    function closeMenu() {
      this.classList.remove(active);
      menuMobileButton.classList.remove(active);
      menuList.classList.remove(active);
    }

    menuMobileButton.addEventListener('click', openMenu)
    bgBlack.addEventListener('click', closeMenu)
  }
}