let express = require('express');
let router = express.Router();

/* GET contact page. */
router.get('/', (req, res, next)=>{
  let projects = [
    {
      name: 'Bank of Evil',
      about: 'The Bank of Evil is a bank exclusively for supervillains. It is owned by Mr. Perkins.',
      img: 'images/bankofevil.jpg',
      problem: 'Too much money',
      solutions: [
        'Replaced all banks money with cookies',
        'Reduced productivity',
        'Upgraded Sysco switches'
        ]
    },
    {
      name: 'Rogers Communication',
      about: 'a Canadian communications and media company. It operates particularly in the field of wireless communications, cable television, telephone, and Internet connectivity with significant additional telecommunications and mass media',
      img: 'images/rogers-logo.png',
      problem: 'Customer satisfaction too high',
      solutions: [
        'Increased network latency',
        'Upgraded phone systems to tin can and string',
        'Removed chairs from all employees'
      ]
    },
    {
      name: 'Los Pollos Hermanos',
      about: 'A family friendly fried-chicken restaurant chain in the southwest U.S., but was in fact a cover for a multi-million-dollar drug distribution network.',
      img: 'images/lospollos.jpg',
      problem: 'Too much money',
      solutions: [
        'Replaced all banks money with cookies',
        'Reduced productivity',
        'Upgraded Sysco switches'
        ]
    }
  ]

  res.render('projects', {'projects': projects});
});

module.exports = router;
