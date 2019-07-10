function popOver() {
  const popovers = document.querySelectorAll('[data-popover]');
  const events = ['touchstart', 'click'];

  if (popovers) {
    function handleClick(event) {
      event.preventDefault()
      this.classList.toggle('active');
      
      outSideClick(this, events, () => {
        this.classList.remove('active');
      });
    }

    popovers.forEach(popover => {
      events.forEach(userEvent => {
        popover.addEventListener(userEvent, handleClick)
      });
    });
  }

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
}
popOver();