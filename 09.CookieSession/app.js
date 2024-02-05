const express = require('express');
const app = express();
/*
Cookie
(1) cookie-parser 설치 : npm install cookie-parser
    => 쿠키를 확인할 수 있도록 하는 모듈
(2) cookieParser 호출
(3) cookie 미들웨어

Session
(1) express-session, session-file-store 설치
    : npm install express-session session-file-store
    express-session => 세션 기능
    session-file-store => 세션 저장소

(2) expressSession, fileStore 호출
(3) 미들웨어
 */

const cookieRouter = require('./routes/cookie');
const sessionRouter = require('./routes/session');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const fileStore = require('session-file-store')(session);

app.use(cookieParser());
app.use('/cookie', cookieRouter);

app.use(session({
    httpOnly : true, // HTTP 프로토콜을 통한 접근만 가능
    resave : false, // 불필요한 세션 저장 방지
    secret : 'secret', // 암호화 키
    store: new fileStore() // 세션 저장소
}))
app.use('/session', sessionRouter);

app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), ()=>{
    console.log(`Server is listening on port ${app.get('port')}`);
})