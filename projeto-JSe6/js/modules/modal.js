import {
  active
} from './config.js';

export default function initModal() {
  const openButton = document.querySelectorAll('[data-modal="open"]');
  const closeButton = document.querySelectorAll('[data-modal="close"]');
  const containerModal = document.querySelectorAll('[data-modal="container"]');

  if (openButton && closeButton) {
    function openModal(event) {
      event.preventDefault();
      const target = event.currentTarget.getAttribute('for');
      // console.log(target);
      const thisModal = document.querySelectorAll(target);
      console.log(thisModal)
      thisModal.forEach((item) => {
        item.classList.add(active)
      })

      // thisModal.classList.add(active);
    }

    function closeModal(event) {
      event.preventDefault();
      containerModal.forEach((item) => {
        item.classList.remove(active)
      })
    }

    function clickOutsideModal(event) {
      event.preventDefault();
      // console.log(event.target);
      // console.log(this);
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


// import {
//   active
// } from './config.js';

// export default function initModal() {
//   const openButton = document.querySelector('[data-modal="open"]');
//   const closeButton = document.querySelector('[data-modal="close"]');
//   const containerModal = document.querySelector('[data-modal="container"]');
//   // console.log(openButton, closeButton, containerModal);

//   if (openButton && closeButton && containerModal) {
//     function toggleModal(event) {
//       event.preventDefault();
//       containerModal.classList.toggle(active);
//     }

//     function clickOutsideModal(event) {
//       event.preventDefault();
//       // console.log(event.target);
//       // console.log(this);
//       if (event.target === this)
//         toggleModal(event);
//     }

//     openButton.addEventListener('click', toggleModal);
//     closeButton.addEventListener('click', toggleModal);
//     containerModal.addEventListener('click', clickOutsideModal);
//   }
// }