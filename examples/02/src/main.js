import '../styles/main.scss';

import users from './data';
import renderUsers from './renderUsers';

const $container = document.querySelector('#users-container');
$container.innerHTML = renderUsers(users);
