const express = require('express');
const router = express.Router();
const conn = require('../config/database');

// 회원가입 기능
router.post('/handleSignuUp', (req,res)=>{
    console.log('signup data', req.body);
    const {userId, userPw, userNick} = req.body;
    // conn.query(sql, (values), callback);
    // const sql = 'insert into nodejs_member values ("testId", "testPw", "testNick")'
    const sql = 'insert into nodejs_member values (?, ?, ?)';
    conn.query(sql, [userId, userPw, userNick], (err, rows)=>{
        console.log('rows', rows);
        console.log('err', err);
        if (rows) {
            console.log('회원가입 성공');
            res.redirect('/');
        } else {
            console.log('회원가입 실패');
            res.send(`<script>
            alert('회원가입 실패');
            location.href = '/signup';
            </script>`)
        }
    })
})

module.exports = router;