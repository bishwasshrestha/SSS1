'use strict';

const passport = require('passport');
const strategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const userModel = require('../models/userModel');

//local strategy for username and password
passport.use(
  new strategy((username, password, done)=> {
    try{
      const user = userModel.getUserLogin(username);
      console.log('local stragetegy', user);

      if(user === undefined){
        return done(null, false, {
          message:'Incorrect Login'
        });
      }

      if(user.password != password){
          return done(null, false, {
            message:' incorrect login' 
          });
      }
      
      return done(null, {...user},{
        message:'Logged in Successfully! '
      });
      
    }catch(err){
      return done(err);
    }
  })
);

//JWT strategy for handling bearer token

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey:'MY_SECRET_KEY'
    },
    (jwtPayload, done) => {
      console.log('paylog: ', jwtPayload);
      const user = userModel.getUser(jwtPayload.id);
      console.log('p1 user', user);
      if(!!user){
        return done(null, user);
      }else{
        return done(null, false);
      }
    }
  )
);

module.exports = passport;