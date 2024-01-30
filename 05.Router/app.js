/*
라우터
- 특정 URL 경로 요청에 대한 함수를 등록하여
  해당 요청이 들어왔을 때 어떤 동작을 수행할지를 정의
  ex) www.naver.com/news => 뉴스 페이지
      www.naver.com/webtoon => 웹툰 페이지
*/

const express = require('express');
const app = express();
const indexRouter = require('./routes'); //index는 파일명 생략 가능
const userRouter = require('./routes/user');

// 기본 라우터
app.use('/', indexRouter);
// user 라우터
app.use('/user', userRouter);

app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), ()=>{
    console.log(`Server is listening on port ${app.get('port')}`);
})

app.use(express.static('public'));
