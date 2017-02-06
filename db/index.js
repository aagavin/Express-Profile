/*
  Aaron Fernandes - 300773526 
  COMP 308 - Assignment 1
  https://circuat.herokuapp.com/

  This file sets up database information
*/

let emailListSchema = require('./modules/emailList')
let mongoose = require("mongoose")
let localConnectionString = "mongodb://localhost/emaillist";

mongoose.connect(process.env.CONNECTIONSTRING || localConnectionString)

// get db object 
let db = mongoose.connection;

// check for error
db.on('error',(err)=>{
	console.log('error with connecting to database:\n');
	console.log(err);
}).once('open',()=>{
	console.log('connected to database');
});

let emailList = mongoose.model('EmailList', emailListSchema);


module.exports = emailList;