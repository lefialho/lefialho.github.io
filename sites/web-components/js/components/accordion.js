(function accordion(win, doc) {
  // ------- Accordion next -------
  const accordionGroup = doc.querySelectorAll('[data-accordion="group"]');

  if (accordionGroup.length) {
    accordionGroup.forEach((accordion) => {
      const accordionItem = accordion.querySelectorAll('[data-accordion="title"]');

      accordionItem[0].classList.add('active');
      accordionItem[0].nextElementSibling.classList.add('active');

      function activeCollapse() {
        accordionItem.forEach((item) => {
          if (!this.classList.contains('active')) {
            item.classList.remove('active');
            item.nextElementSibling.classList.remove('active');
          }
        });

        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('active');
      }

      accordionItem.forEach((item) => {
        item.addEventListener('click', activeCollapse)
      });
    })
  }

  //------ Accordion child -------
  // const accordionGroupChild = doc.querySelectorAll('[data-accordion="group-child"]');

  // accordionGroupChild.forEach((accordion, index, group) => {
  //   const accordionItem = group[index].querySelectorAll('[data-accordion="title"]');

  //   if (accordionGroupChild.length) {
  //     accordionItem[0].classList.add('active');
  //     accordionItem[0].querySelector('[data-accordion="content"]').classList.add('active');

  //     function activeCollapseList() {
  //       accordionItem.forEach((item) => {
  //         if (!this.classList.contains('active')) {
  //           item.classList.remove('active');
  //           item.querySelector('[data-accordion="content"]').classList.remove('active');
  //         }
  //       });

  //       this.classList.toggle('active');
  //       this.querySelector('[data-accordion="content"]').classList.toggle('active');
  //     }

  //     accordionItem.forEach((item) => {
  //       item.addEventListener('click', activeCollapseList)
  //     });
  //   }
  // });
})(window, document);