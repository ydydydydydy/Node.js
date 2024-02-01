const express = require('express');
const router = express.Router();

// 메인 페이지
router.get('/', (req, res) => {
    console.log('main page');
    res.render('main');
})

// 회원가입 페이지
router.get('/signup', (req, res) => {
    console.log('signup page');
    res.render('signup');
})

// 로그인 페이지
router.get('/signin', (req, res) => {
    console.log('signin page');
    res.render('signin');
})

module.exports = router;