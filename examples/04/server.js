'use strict';

const express = require('express');
const app = express();

const port = 3001;

app.use('/dist', express.static(`${__dirname}/dist`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});
