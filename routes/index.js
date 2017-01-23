/*
  Aaron Fernandes - 300773526 
  COMP 308 - Assignment 1
  https://circuat.herokuapp.com/

  This file determines the index route
*/
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=>{
  res.render('index', {  });
});

module.exports = router;
