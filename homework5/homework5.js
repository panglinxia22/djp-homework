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

/**
 * show submenu when your mouse enters the first menu button 
 * @param  submenu 
 */
function submenuShow(submenu) {
  submenuHide();
  submenu && submenu.classList.add('show');
}

// menuBtn hover event
menuBtn1.addEventListener('mouseenter', () => submenuShow(submenu1));
menuBtn2.addEventListener('mouseenter', () => submenuShow(submenu2));
menuBtn3.addEventListener('mouseenter', () => submenuShow(submenu3));

// submenu mouseleave event
submenu1.addEventListener('mouseleave', submenuHide);
submenu2.addEventListener('mouseleave', submenuHide);
submenu3.addEventListener('mouseleave', submenuHide);

// hamburgeMenu click event
hamburgeMenu.addEventListener('click', () => sideMenu.classList.toggle('show-menu'));

// sideMenuClose click event
sideMenuClose.addEventListener('click', () => sideMenu.classList.remove('show-menu'));

// Escape key  keydown event
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    sideMenu.classList.remove('show-menu');
  }
});


