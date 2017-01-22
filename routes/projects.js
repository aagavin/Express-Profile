let express = require('express');
let router = express.Router();

/* GET contact page. */
router.get('/', (req, res, next)=>{
  res.render('projects', {});
});

module.exports = router;
