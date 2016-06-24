var express = require('express');
var router = express.Router();
var mysql = require("./mysql");

/* GET home page. */
router.get('/', function(req, res, next) {
  mysql.query('SELECT * FROM gps', function(err, rows, field){
    if(err){
      console.log(err);
      res.end(err);
    }else{
      res.render('index', { data:rows });
    }
  });
});

module.exports = router;
