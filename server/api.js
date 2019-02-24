const express = require('express');
const config = require('config');
var DBQuery = config.get('DBQuery');
const connPool = require('./connection');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  connPool.getConnection(function(err, connection) {
    console.log("conneted to facebook database successfully!..")
    connection.query(DBQuery.GET_ALL_POST,(err,result,fields)=>{
      if(err){
        console.error('error :',err.message);
      }
      res.send(result);
    })
    connection.release();
  });

});

router.get('/bar', (req, res) => {
  connPool.getConnection(function(err, connection) {
    console.log("conneted to charts database successfully!..")
    connection.query(DBQuery.GET_PIE_CHART,(err,result,fields)=>{
      if(err){
        console.error('error :',err.message);
      }
      res.send(result);
    })
    connection.release();
  });

});


module.exports = router;


