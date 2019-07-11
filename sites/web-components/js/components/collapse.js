(function collapse(win, doc) {
  const collapseGroup = doc.querySelectorAll('[data-collapseGroup]');

  collapseGroup.forEach((collapse) => {
    const collapseItem = collapse.querySelectorAll('[data-collapse="title"]');

    if (collapseGroup.length) {
      collapseItem[0].classList.add('active');
      collapseItem[0].nextElementSibling.classList.add('active');

      function activeCollapse() {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('active');
      }

      collapseItem.forEach((item) => {
        item.addEventListener('click', activeCollapse)
      });
    }
  })
})(window, document);



