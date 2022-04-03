import './style.css';
import { generateNavMenu, menuModel } from './mobile-nav-menu';

const contentDiv = document.getElementById('content');
contentDiv.appendChild(generateNavMenu(menuModel));
