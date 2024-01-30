const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    console.log('Main page');
    res.send(`
    <html>
        <body>
            <h1>Main Page</h1>
            <a href="/user">User Page</a>
            <a href="/login">Login Page</a>
        </body>
    </html>
    `)
})

router.get('/login', (req, res)=>{
    res.send(`
    <html>
        <body>
            <h1>Login Page</h1>
            <a href="/user/hee">희수 로그인</a>
            <a href="/user/tae">태호 로그인</a>
            <a href="/user/hyuck">재혁 로그인</a>
        </body>
    </html>
    `)
})



module.exports = router;