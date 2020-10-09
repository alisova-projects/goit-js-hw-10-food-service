import menuItemTpl from '../templates/menu-items.hbs';
import menu from '../menu.json';

const menuContainer = document.querySelector('ul.js-menu');
const menuMarkup = menuItemTpl(menu);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);
