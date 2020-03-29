'use strict';

const jwt = require('jsonwebtoken');
const passport = require('passport');

const auth = (req, res, next) => {
  passport.authenticate('local', {session:false}, (err, user, info)=>{
    console.error('error: ', err);
    if(err){
      return next(err);
    }
    if(!user){
      return res.status(400).json({
        message: 'Something is not right.'
      });
    }
    req.login(user, {session: false}, err => {
      if(err){
        res.send(err);
      }
      //generate a signed web token with the contents of user object and return in the response
      const token = jwt.sign(user, 'MY_SECRET_KEY');
      return res.json({user, token});
    });
  })(req, res);
};

module.exports = {
  auth,
};