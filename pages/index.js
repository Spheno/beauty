'use strict'

const menuIcon = document.querySelector('.header__menu')
if (menuIcon) {
  const menuList = document.querySelector('.header__nav')
  const menuSpan = document.querySelector('.header__menu-span')
  menuIcon.addEventListener("click", function (e) {
    const page = document.querySelector('.page')
    page.classList.toggle('lock');
    menuSpan.classList.toggle('header__menu-span_active');
    menuIcon.classList.toggle('header__menu_active');
    menuList.classList.toggle('active');
  })
}
