const express = require('express');
const router = express.Router();
const conn = require('../config/database');

// 회원가입 기능
router.post('/handleSignuUp', (req,res)=>{
    console.log('signup data', req.body);
    const {userId, userPw, userNick} = req.body;

    // 회원 중복 검사
    const sql2 = 'select id from nodejs_member where id=?'
    conn.query(sql2, [userId], (err,rows)=>{
        if (rows.length>0){
            res.send(`<script>
            alert('이미 사용중인 아이디입니다.');
            location.href='./signup';
            </script>`)
        } else {
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

        }
    })

})

// 로그인 기능
router.post('/handleSignIn', (req, res)=>{
    console.log('sign data', req.body);
    const {userId, userPw} = req.body;
    const sql = 'select id, nick from nodejs_member where id=? and pw=?';
    conn.query(sql, [userId, userPw], (err, rows)=>{
        console.log('err', err);
        console.log('rows', rows);
        if (rows.length>0){
            console.log('로그인 성공');
            req.session.nickname = rows[0].nick;
            // res.redirect('/')
            res.send(`<script>location.href='/'</script>`);
        } else {
            console.log('로그인 실패');
            res.send(`<script>
            alert('로그인 실패!');
            location.href = './signin';
            </script>`)
        }
    })
})

// 회원목록 기능
router.get('/showList', (req,res)=>{
    console.log(req.query);
    if (req.query.userId) {
        // 특정회원
        const sql = 'select id, nick from nodejs_member where id=?';
        conn.query(sql, [req.query.userId], (err, rows)=>{
            console.log('rows', rows);
            res.render('list', {rows : rows});       
        })
    } else {
        // 전체회원
        const sql = 'select id, nick from nodejs_member';
        conn.query(sql, (err, rows)=>{
            console.log('rows', rows);
            res.render('list', {rows : rows});
        })
    }
})

// 회원탈퇴 기능
router.post('/handleDelete', (req, res)=>{
    console.log('delete data', req.body);
    const {userId, userPw} = req.body;
    const sql = 'delete from nodejs_member where id=? and pw=?'
    conn.query(sql, [userId, userPw], (err, rows)=>{
        console.log('rows', rows);
        if(rows.affectedRows>0){
            res.redirect('/');
        } else {
            res.send(`<script>
            alert('존재하지 않는 회원 정보입니다.');
            location.href='/delete';
            </script>`);
        }
    })
})

// 로그아웃 기능
router.get('./signout', (req, res)=>{
    req.session.destroy();
    res.redirect('/');
})

module.exports = router;