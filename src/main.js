'use strict';

const users = require('./data');
const renderUsers = require('./renderUsers');

const $container = document.querySelector('#users-container');
$container.innerHTML = renderUsers(users);
