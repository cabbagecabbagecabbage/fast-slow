var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const fs = require('fs');
const path = require('path');
let {PythonShell} = require('python-shell');
const { resourceLimits } = require('worker_threads');

router.post('/run', (req, res) => {
  let files = req.body;
  files.fast = 
`
import sys
FILE = open("fastAns.txt", "w")
data = open("testData.txt", "r")
sys.stdout = FILE
input = data.readline
`
+ files.fast + 
`
FILE.close()
data.close()
`;
files.slow = 
`
import sys
FILE = open("slowAns.txt", "w")
data = open("testData.txt", "r")
sys.stdout = FILE
input = data.readline
`
+ files.slow + 
`
FILE.close()
data.close()
`;

  files.generator = 
`
import sys
data = open("testData.txt","w")
sys.stdout = data
`
+ files.generator + 
`
data.close()
`;

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
  PythonShell.run('main.py', null, function (err) {
    if (err) throw err;
    console.log('finished');
    fs.readFile(path.join(__dirname,'../result.txt'), 'utf8', function(err, result_file) {
      fs.readFile(path.join(__dirname,'../fastAns.txt'), 'utf8', function(err, fast_ans_file) {
        fs.readFile(path.join(__dirname,'../slowAns.txt'), 'utf8', function(err, slow_ans_file) {
          console.log(result_file);
          let output = {
            result: result_file,
            fast_ans: fast_ans_file,
            slow_ans: slow_ans_file,
          }
          res.end(JSON.stringify(output));
        });
      });
    });
  });
  
  
});

module.exports = router;