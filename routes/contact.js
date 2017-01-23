let express = require('express');
let router = express.Router();

/* GET contact page. */
router.get('/', (req, res, next)=>{
  res.render('contact', {});
});

router.post('/', (req, res)=>{

  // console.log(req);
  console.log(req.body)
  res.end();
});

module.exports = router;


