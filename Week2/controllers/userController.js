 'use strict';
 const userModel = require('../models/userModel');
 const userSchema = require('../models/user');
 const users = userModel.users;

 const user_list_get = (req, res) => {
   res.json(users);
 };

 const user_get = (req, res) => {
   console.log('user id', req.params);
   const user = users.filter(user => user.id === req.params.id).pop();
   delete user.password;
   res.json(user);
 };

 const user_post = (req, res) => {
   console.log('data from ', req.body);
    
 };
 const user_db_get = async(req, res) =>{
   const user = await userSchema.find();
   res.send(user);
 }

 module.exports = {
   user_get,
   user_list_get,
   user_post,
   user_db_get,
 };

