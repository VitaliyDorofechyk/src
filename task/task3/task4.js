'use strict'
const elemPodmenu = document.querySelector('.nav_menu_podmenu');
const elemNavMenu = document.querySelector('.nav');
function dispOn () {
    elemPodmenu.style.display = 'block';
};
function dispOff () {
    elemPodmenu.style.display = 'none';
};
elemNavMenu.addEventListener('mouseover', dispOn);
elemNavMenu.addEventListener('mouseout', dispOff);
