/*
node_modules : 내가 장을 봐온 물건들이 실제 들어있는 곳(장바구니)
package.json : 물건들 리스트 (영수증)

장바구니를 전부 다 옮기기에는 무거우니까 장바구니를 빼고 나머지를 옮기자 
=>영수증을 보고 필요한 물건들을 다운받을 수 있음

npm install =>입력시 package.json 기반 모듈 다운
*/

const express = require('express');
const app = express();
const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const session = require('express-session');
const fileStore = require('session-file-store')(session);

app.set('port', process.env.PORT || 8000);
app.set('view engine','html');
nunjucks.configure('views', {
    express : app,
    watch : true
});

app.use(bodyParser.urlencoded({extended : true}));
app.use(session({
    httpOnly : true, // HTTP 프로토콜을 통한 접근만 가능
    resave : false, // 불필요한 세션 저장 방지
    secret : 'secret', // 암호화 키
    store: new fileStore() // 세션 저장소
}))
app.use(express.static(__dirname+'/public'))
app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(app.get('port'), () => {
    console.log(`Server is listening on port ${app.get('port')}`);
})