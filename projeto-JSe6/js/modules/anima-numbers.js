import {
  active
} from './config.js';

export default function initAnimaNumbers() {
  function numbersAnimate() {
    const numbers = document.querySelectorAll('[data-number]')

    numbers.forEach((number) => {
      const total = +number.innerText;
      const increment = Math.round(total / 100);

      let count = 0
      const timer = setInterval(() => {
        count += increment;
        number.innerText = count;

        if (count > total) {
          number.innerText = total;
          clearInterval(timer)
        }
      }, 25 * Math.random())
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains(active)) {
      observer.disconnect();
      numbersAnimate();
    }
  }

  const observerTarget = document.querySelector('.numbers');
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, {
    attributes: true
  });
}