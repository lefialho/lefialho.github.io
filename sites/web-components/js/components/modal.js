(function modal(win, doc) {
  const openButton = doc.querySelectorAll('[data-modal="open"]');
  const closeButton = doc.querySelectorAll('[data-modal="close"]');
  const containerModal = doc.querySelectorAll('[data-modal="container"]');

  if (openButton && closeButton) {
    function openModal(event) {
      event.preventDefault();
      const target = event.currentTarget.getAttribute('aria-controls');
      const thisModal = doc.querySelectorAll(target);
      
      thisModal.forEach((item) => {
        item.classList.add('active')
      })
    }

    function closeModal(event) {
      event.preventDefault();
      containerModal.forEach((item) => {
        item.classList.remove('active')
      })
    }

    function clickOutsideModal(event) {
      event.preventDefault();
      if (event.target === this)
        closeModal(event)
    }

    openButton.forEach((button) => {
      button.addEventListener('click', openModal);
    })
    containerModal.forEach((item) => {
      item.addEventListener('click', clickOutsideModal)
    })
    closeButton.forEach((button) => {
      button.addEventListener('click', closeModal)
    })
  }
})(window, document);