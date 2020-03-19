'use strict'
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send("Hello Duniya walon!"));
app.listen(port, () => console.log( `App listening on port ${port}!`));


app.get('/catinfo', (req, res) => {
  const cat = {
    'name': 'Frank',
    'age': 6,
    'weight': 5,
  };
  res.json(cat);
});