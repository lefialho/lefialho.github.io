function MenuMobile() {
  const menuMobileButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const bgBlack = document.querySelector('[data-bgBlack]');

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
}
MenuMobile()