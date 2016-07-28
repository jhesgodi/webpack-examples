import '../styles/main.scss';

import users from './data';
import renderUsers from './renderUsers';
import './hotModuleTest';

// Hot module replacement simple example
if (module.hot) {
  module.hot.accept('./hotModuleTest', () => {
    require('./hotModuleTest'); // Require this again
  });
}

const $container = document.querySelector('#users-container');
$container.innerHTML = renderUsers(users);
