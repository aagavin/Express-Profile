/*
  Aaron Fernandes - 300773526 
  COMP 308 - Assignment 1
  https://circuat.herokuapp.com/

  This file determines the contact route, and handles 
  the post request for form handling
*/

let express = require('express');
// let db = require('../db/index').db;
let EmailList = require('../db/index');
let router = express.Router();

/* GET contact page. */
router.get('/', (req, res, next)=>{
  res.render('contact', {'messageAvailable': false});
});

router.get('/all', (req, res)=>{
  EmailList.find({}, (err, emailLists)=>{
    if (err) throw err;

    res.send(emailLists[0]);

  });

});

router.post('/', (req, res)=>{

  let email = new EmailList({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });
  email.save((err)=>{
    if(err){
      console.err(err);
    }
    else{
      console.log('Saved email');
    }
  });
  res.render('contact', {'messageAvailable': true, 'message': `Thanks ${req.body.name} for submitting. As soon as I read your message I'll get back to you at ${req.body.email}.`});

  res.end();
});

module.exports = router;


