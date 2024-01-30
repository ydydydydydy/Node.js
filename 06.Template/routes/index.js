const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    console.log('Main Page');
    // res.render(file)
    // => views 내 파일
    res.render('main', {name : 'heejae park'});
})

module.exports = router;