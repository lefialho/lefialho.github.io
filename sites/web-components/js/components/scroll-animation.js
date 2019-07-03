function scrollAnimation() {
  const sections = document.querySelectorAll('[data-anime^="scroll"]');

  if (sections.length) {
    const halfWindow = window.innerHeight * 0.6;

    function scrollAnimation() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - halfWindow) < 0;

        if (isSectionVisible) {
          section.classList.add('active');
        }
        else if (section.classList.contains('active'))
          section.classList.remove('active');
      })
    }
    scrollAnimation();

    window.addEventListener('scroll', scrollAnimation);
  }
}
scrollAnimation()