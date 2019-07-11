(function MenuMobile(win, doc) {
  const menuMobileButton = doc.querySelector('[data-menu="button"]');
  const menuList = doc.querySelector('[data-menu="list"]');
  const bgBlack = doc.querySelector('[data-bgBlack]');

  if (menuMobileButton) {
    function openMenu() {
      this.classList.toggle('active');
      menuList.classList.toggle('active');
      bgBlack.classList.toggle('active');
    }

    function closeMenu() {
      this.classList.remove('active');
      menuMobileButton.classList.remove('active');
      menuList.classList.remove('active');
    }

    menuMobileButton.addEventListener('click', openMenu)
    bgBlack.addEventListener('click', closeMenu)
  }
})(window, document);