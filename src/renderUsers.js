'use strict';

const Handlebars = require('handlebars/dist/handlebars.min');

const template = `
<div class="users">
  {{#each users}}
    <h2>{{name}}</h2>
    <p>{{body}}</p>
  {{/each}}
</div>
`;

function renderUsers(users) {
  return Handlebars.compile(template)(users);
}

module.exports = renderUsers;
