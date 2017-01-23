
/*
  Aaron Fernandes - 300773526 
  COMP 308 - Assignment 1
  https://circuat.herokuapp.com/

  This file determines the services route and
	stores the services object
*/
let express = require('express');
let router = express.Router();

/* GET services page. */
router.get('/', (req, res, next)=>{

	// services object
	let services = [
		{
			title: 'System Adminstration',
			about: 'Able to Administrate all UNIX based systems from System V to Plan 9'
		},
		{
			title: 'ARPANET Web Site',
			about: '5 years experience in creating Web applications for the ARPANET'
		},
		{
			title: 'COBAL Programming',
			about: '10 years experience in creating user facing high latency applications for mainframes'
		}
	]
  res.render('services', { 'services': services });
});

module.exports = router;
