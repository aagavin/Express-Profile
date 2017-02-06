/*
  
*/
let express = require('express');
let router = express.Router();
let markdownpdf = require("markdown-pdf")
let fs = require("fs");

/* GET docs page. */
router.get('/', (req, res, next)=>{

	markdownpdf()
	.from(__dirname + '/../docs/README.md')
	.to(__dirname + '/../docs/README.pdf', ()=>{

		fs.createReadStream(__dirname + '/../docs/README.pdf').pipe(res);
	})

  // res.render('index', { title: 'Express' });
});

module.exports = router;
