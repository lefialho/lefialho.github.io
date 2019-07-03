function dropdown() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  const events = ['touchstart', 'click'];

  if (dropdownMenus) {
    function handleClick(event) {
      event.preventDefault()
      this.classList.toggle('active');
      outSideClick(this, events, () => {
        this.classList.remove('active');
      });
    }

    dropdownMenus.forEach(menu => {
      events.forEach(userEvent => {
        menu.addEventListener(userEvent, handleClick)
      });
    });
  }
}
dropdown();

function outSideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if (!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });
    element.setAttribute(outside, '');
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick);
      })
      callback();
    }
  }
}