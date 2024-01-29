const express = require('express');
const app = express();

/*
body-parser => POST 방식 응답 데이터 추출 모듈
urlencoded() => req.body 속성 추가
extended : true => 객체 안의 객체를 파싱
*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

app.set('port', process.env.PORT || 8000);

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res)=>{
    console.log('create server!');
    // (mission) ex02.html 응답하기
    res.sendFile(__dirname+'/public/ex02.html')
})


/*
express GET
데이터 가져오는 방법 => req.query
 */
app.get('/get', (req,res)=>{
    console.log('get success!', req.query);
    const {sat, sun} = req.query;
    res.send(`
    <html>
        <body>
            <h1>토요일의 활동 : ${sat}</h1>
            <h1>일요일의 활동 : ${sun}</h1>
        </body>
    </html>
    `)
})

app.post('/post', (req, res)=>{
    console.log('post success!', req.body);
    const {id, pw} = req.query;

    /*
    (mission) 아이디 admin, 비밀번호 1234
              일치 => ex02success.html
              불일치 => ex02fail.html
    */
   const {userId, userPw} = req.body;
   userId ==='admin' && userPw === '1234'
   ? res.sendFile(__dirname+'/public/ex02success.html')
   : res.sendFile(__dirname+'/public/ex02fail.html');
})


app.listen(app.get('port'), ()=>{
    console.log('Server is listening on port 8000');
})