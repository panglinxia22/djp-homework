const menuBtn1 = document.getElementById('menu-1-button');
const menuBtn2 = document.getElementById('menu-2-button');
const menuBtn3 = document.getElementById('menu-3-button');
const submenu1 = document.getElementById('menu-1');
const submenu2 = document.getElementById('menu-2');
const submenu3 = document.getElementById('menu-3');
const hamburgeMenu = document.getElementById('menu-trigger');
const sideMenu = document.getElementById('side-menu');
const sideMenuClose = document.getElementById('menu-close');

//  hide submenu
function submenuHide() {
  submenu1.classList.remove('show');
  submenu2.classList.remove('show');
  submenu3.classList.remove('show');
}

// show first menu when your mouse enters the first menu button  
function submenu1Show() {
  submenuHide();
  submenu1.classList.add('show');
}

// show sencond menu when your mouse enters the sencond menu button 
function submenu2Show() {
  submenuHide();
  submenu2.classList.add('show');
}

// show third menu when your mouse enters the third menu button 
function submenu3Show() {
  submenuHide();
  submenu3.classList.add('show');
}

// Show sideMenu 
function sideMenuShow() {
  sideMenu.classList.add('show-menu');
}

// Hide sideMenu
function sideMenuHide() {
  sideMenu.classList.remove('show-menu');
}

// menuBtn hover event
menuBtn1.addEventListener('mouseover', submenu1Show);
menuBtn2.addEventListener('mouseover', submenu2Show);
menuBtn3.addEventListener('mouseover', submenu3Show);

// submenu mouseleave event
submenu1.addEventListener('mouseleave', submenuHide);
submenu2.addEventListener('mouseleave', submenuHide);
submenu3.addEventListener('mouseleave', submenuHide);

// hamburgeMenu click event
hamburgeMenu.addEventListener('click', sideMenuShow);

// sideMenuClose click event
sideMenuClose.addEventListener('click', sideMenuHide);

