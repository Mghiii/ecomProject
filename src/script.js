// Fonction pour gérer le menu principal
export function toggleMenu() {
  const menuList = document.getElementById('menuList');
  const subMenu = document.getElementById('sub-menu-wrap');
  const dropMenu = document.getElementById('sub-menu-wrap-two');

  if (menuList.style.maxHeight === '0px' || !menuList.style.maxHeight) {
    menuList.style.maxHeight = '300px';
    subMenu.classList.remove('open-class'); // Ferme Dropdown 1
    dropMenu.classList.remove('open-class-two'); // Ferme Dropdown 2
  } else {
    menuList.style.maxHeight = '0px';
  }
}

// Fonction pour gérer Dropdown 1
export function toggleSubMenu() {
  const subMenu = document.getElementById('sub-menu-wrap');
  const menuList = document.getElementById('menuList');
  const dropMenu = document.getElementById('sub-menu-wrap-two');

  subMenu.classList.toggle('open-class');
  if (subMenu.classList.contains('open-class')) {
    menuList.style.maxHeight = '0px'; // Ferme le menu principal
    dropMenu.classList.remove('open-class-two'); // Ferme Dropdown 2
  }
}

// Fonction pour gérer Dropdown 2
export function toggleDropMenu() {
  const dropMenu = document.getElementById('sub-menu-wrap-two');
  const menuList = document.getElementById('menuList');
  const subMenu = document.getElementById('sub-menu-wrap');

  dropMenu.classList.toggle('open-class-two');
  if (dropMenu.classList.contains('open-class-two')) {
    menuList.style.maxHeight = '0px'; // Ferme le menu principal
    subMenu.classList.remove('open-class'); // Ferme Dropdown 1
  }
}
