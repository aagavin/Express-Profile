/*
  Aaron Fernandes - 300773526 
  COMP 308 - Assignment 1
  https://circuat.herokuapp.com/

  This file sets up database information
*/

let emailListSchema = require("mongoose").Schema({
	name: String,
	email: String,
	message: String
});


module.exports = emailListSchema;