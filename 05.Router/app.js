/*
라우터
- 특정 URL 경로 요청에 대한 함수를 등록하여
  해당 요청이 들어왔을 때 어떤 동작을 수행할지를 정의
  ex) www.naver.com/news => 뉴스 페이지
      www.naver.com/webtoon => 웹툰 페이지

라우트 매개변수
- 특정 값을 가지는 경로에서 그 값을 매개변수로 추출하여
    서버에서 활용할 수 있음
- /:name 문자 그대로를 의미하는 것이 아니라
    :뒤의 내가 작성한 값이 매개변수로 들어감
- localhost:8000/user/se0 => name : se0
    req.params.name // se0
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

