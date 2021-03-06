(function dropdown(win, doc) {
  const dropdownMenus = doc.querySelectorAll('[data-dropdown="link"]');
  const dropdownMenusContent = doc.querySelectorAll('[data-dropdown="content"]');
  const events = ['click'];

  if (dropdownMenus) {
    function handleClick(event) {
      event.preventDefault()
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');

      outSideClick(this, events, () => {
        this.classList.remove('active');
        this.nextElementSibling.classList.remove('active');
      });
    }

    dropdownMenus.forEach(menu => {
      events.forEach(userEvent => {
        menu.addEventListener(userEvent, handleClick, false)
      });
    });
  }
})(window, document);

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