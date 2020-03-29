//model is in strict mode by default
/*  
const mongoose = require('mongoose');
require('dotenv').config();

(async() => {
  try{
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser:true, 
      useUnifiedTopology:true
    });
    console.log('DB connected successfully!');
  } catch(err) {
    console.error('connection to db failed with error: ', err);
  }
})();

module.exports = mongoose.connection;
*/