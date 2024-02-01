/*
 (1) mysql 모듈 설치
 npm install mysql2;

 (2) mysql 모듈 가져오기
 const mysql = require('mysql2');

 (3) 
 */

 const mysql = require('mysql2');

 const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'nodejs'
 });

 conn.connect();

 module.exports = conn;