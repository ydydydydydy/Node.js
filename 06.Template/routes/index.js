const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    console.log('Main Page');
    // res.render(file)
    // => views 내 파일
    res.render('main', {name : 'heejae park'});
})

// /mypage => mypage.html
router.get('/mypage', (req, res)=>{
    res.render('mypage');
})

module.exports = router;