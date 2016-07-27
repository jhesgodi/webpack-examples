'use strict';

require('../styles/main.scss');

const users = require('./data');
const renderUsers = require('./renderUsers');

const $container = document.getElementById('users-container');
$container.innerHTML = renderUsers(users);
