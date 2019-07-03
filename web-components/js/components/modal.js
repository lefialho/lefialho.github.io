function modal() {
  const openButton = document.querySelectorAll('[data-modal="open"]');
  const closeButton = document.querySelectorAll('[data-modal="close"]');
  const containerModal = document.querySelectorAll('[data-modal="container"]');

  if (openButton && closeButton) {
    function openModal(event) {
      event.preventDefault();
      const target = event.currentTarget.getAttribute('aria-controls');
      const thisModal = document.querySelectorAll(target);
      
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
}
modal();