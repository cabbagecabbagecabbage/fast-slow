var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const fs = require('fs');

router.post('/run', (req, res) => {
  let files = req.body;
  console.log(files.fast);
  fs.writeFile("fast.py", files.fast, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
  fs.writeFile("slow.py", files.slow, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
  fs.writeFile("gen.py", files.generator, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
  
});

module.exports = router;