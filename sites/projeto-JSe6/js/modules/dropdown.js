import {
  active,
  events
} from './config.js';

import outSideClick from './outside-click.js'

export default function initDropDown() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  if (dropdownMenus) {
    function handleClick(event) {
      event.preventDefault()
      this.classList.add(active);
      outSideClick(this, events, () => {
        this.classList.remove(active);
      });
      // console.log(event);
    }

    dropdownMenus.forEach(menu => {
      events.forEach(userEvent => {
        menu.addEventListener(userEvent, handleClick)
      });
    });
  }
}