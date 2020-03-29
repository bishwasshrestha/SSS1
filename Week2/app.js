'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const catsRoute = require('./routes/catRoute');
const usersRoute = require('./routes/userRoute');

const passport = require('./utils/pass');
const authRoute = require('./routes/authRoute');

const cors = require('cors');
const app = express();
const db = require('./models/db');
const port = 3000;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/auth', authRoute);
app.use('/cat', passport.authenticate('jwt', {session:false}), catsRoute);
app.use('/user',passport.authenticate('jwt', {session:false}), usersRoute);

//db.on('connected', () => {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//});
