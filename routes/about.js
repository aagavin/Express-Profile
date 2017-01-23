/*
  Aaron Fernandes - 300773526 
  COMP 308 - Assignment 1
  https://circuat.herokuapp.com/

  This file determines the about route
*/

let express = require('express');
let router = express.Router();

/* GET about page */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('about', {});
});

module.exports = router;
