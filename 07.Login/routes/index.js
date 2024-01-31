const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res)=>{
    console.log('create server');
    res.sendFile(path.join(__dirname, '..', 'public'))
})

router.post('/welcome', (req, res)=>{
    console.log('welcome page', req.body);
    res.render('welcome', {data : req.body});
})

router.post('/result', (req, res)=>{
    console.log('result page', req.body);
    const {userId, userPw} = req.body;
    const result = 
    userId === 'admin' && userPw === '1234'
    ? '성공' : '실패';
    res.render('result', {result : result});
})

module.exports = router;
