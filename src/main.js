'use strict';

require('../styles/main.scss');

const users = require('./data');
const renderUsers = require('./renderUsers');

const $container = document.querySelector('#users-container');
$container.innerHTML = renderUsers(users);
