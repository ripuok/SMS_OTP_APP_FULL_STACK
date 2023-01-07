require('dotenv').config();       
const mysql = require('mysql2');

// var mysql2 = require('mysql');

//DB configuration for CleverCloud domain 
var con = mysql.createPool({
    host: "bergxmxnrh47mjtrl1ws-mysql.services.clever-cloud.com",
    user: "ubgbi1lqtefxmgjx",
    password: process.env.PASSWORD,
    database: "bergxmxnrh47mjtrl1ws"
});

module.exports= con;









