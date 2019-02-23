const mysql =require('mysql');
var config = require('config');
var dbConfig = config.get('MySql.dbConfig');
var connPool = mysql.createPool(dbConfig);
module.exports =connPool;


