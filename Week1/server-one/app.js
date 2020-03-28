'use strict'
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = express.Router();

app.get('/', (req, res) => {
// console.log('req has the following: ', req);
  res.sendfile('./public/index.html');
});

app.get('/catinfo', (req, res) => {
  const cat = {
    'name': 'Frank',
    'age': 6,
    'weight': 5,
  };
  res.json(cat);
});

app.use('/', router);
app.listen(port, () => console.log( `App listening on port ${port}!`));