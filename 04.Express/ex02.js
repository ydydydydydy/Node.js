const express = require('express');
const app = express();
const indexRouter = require('./routes');

/*
body-parser => POST 방식 응답 데이터 추출 모듈
urlencoded() => req.body 속성 추가
extended : true => 객체 안의 객체를 파싱
*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

app.set('port', process.env.PORT || 8000);

app.use(express.static(__dirname+'/public'));

// router 미들웨어
app.use('/', indexRouter);

app.listen(app.get('port'), ()=>{
    console.log('Server is listening on port 8000');
})