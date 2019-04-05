import {
  active
} from './config.js';

export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]')

  if (tooltips) {
    function onMouseOver(event) {
      const tooltipBox = createTooltipBox(this);

      onMouseMove.tooltipBox = tooltipBox
      this.addEventListener('mousemove', onMouseMove);

      onMouseLeave.tooltipBox = tooltipBox;
      onMouseLeave.element = this;
      this.addEventListener('mouseleave', onMouseLeave);

      // console.log(tooltipBox.style)
      // console.log(event)
    }

    const onMouseLeave = {
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleave', onMouseLeave);
        this.element.removeEventListener('mousemove', onMouseMove);
      }
    }

    const onMouseMove = {
      handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + -60 + 'px';
        this.tooltipBox.style.left = event.pageX + 10 + 'px';
        this.tooltipBox.classList.add(active);
      }
    }

    function createTooltipBox(element) {
      const tooltipBox = document.createElement('div');
      const tooltipText = element.getAttribute('aria-label');
      tooltipBox.classList.add('tooltip');
      tooltipBox.innerHTML = tooltipText;
      document.body.appendChild(tooltipBox);
      return tooltipBox;
      // console.log(tooltipBox);
    }

    tooltips.forEach((tooltip) => {
      tooltip.addEventListener('mouseover', onMouseOver)
    })
  }
}