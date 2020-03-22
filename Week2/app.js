'use strict';
const express = require('express');
const app = express();
const port = 3000;
const cats = require('./routes/catRoute');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use('/cat', cats);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
