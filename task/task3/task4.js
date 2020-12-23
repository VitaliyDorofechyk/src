'use strict'
const elemSubmenu = document.querySelector('.nav_menu_submenu');
const elemNavMenu = document.querySelector('.nav');
function dispOn () {
    elemSubmenu.style.display = 'block';
};
function dispOff () {
    elemSubmenu.style.display = '';
};
elemNavMenu.addEventListener('mouseover', dispOn);
elemNavMenu.addEventListener('mouseout', dispOff);
