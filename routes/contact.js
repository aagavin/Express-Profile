/*
  Aaron Fernandes - 300773526 
  COMP 308 - Assignment 1
  https://circuat.herokuapp.com/

  This file determines the contact route, and handles 
  the post request for form handling
*/

let express = require('express');
let router = express.Router();

/* GET contact page. */
router.get('/', (req, res, next)=>{
  res.render('contact', {'messageAvailable': false});
});

router.post('/', (req, res)=>{

  // console.log(req);
  console.log(req.body);
  res.render('contact', {'messageAvailable': true, 'message': `Thanks ${req.body.name} for submitting. As soon as I read your message I'll get back to you at ${req.body.email}`});
  res.end();
});

module.exports = router;


