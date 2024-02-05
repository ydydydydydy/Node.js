const express = require('express');
const router = express.Router();

/* 
세션 (Session)
- 서버가 클라이언트에게 암호화된 아이디 (session ID)를 부여
- 쿠키와 다른 점?
    > 세션은 서버의 자원을 사용, 너무 많은 세션을 낭비하지 않는 게 좋음
    > 브라우저 종료 시 세션 자동 삭제
- 로그인, 로그아웃

(1) 세션 생성하기 : req.session.key = value
(2) 세션 확인하기 : req.session.key // value
(3) 세션 삭제하기 : req.session.key = "" // 하나만 삭제
                   req.session.destroy(); // 전체삭제
*/

// (1) 세션 생성하기
router.get('/setSession', (req,res)=>{
    req.session.nickname = '라이언';
    res.send(`
    <html>
        <body>
            <h3>세션 생성 완료</h3>
            <a href='/session/getSession'>세션 확인</a>
        </body>
    </html>
    `)

})

// (2) 세션 확인하기
router.get('/getSession', (req,res)=>{
    res.send(`
    <html>
        <body>
            <h3>세션 확인</h3>
            <p>닉네임 : ${req.session.nickname}</p>
        </body>
    </html>
    `)

})

// (3) 세션 삭제하기
router.get('/delSession', (req,res)=>{
    req.session.nickname = ""; // 데이터 하나만 삭제
    req.session.destroy(); // 전체 삭제
    res.send(`
    <html>
        <body>
            <h3>세션 삭제</h3>
        </body>
    </html>
    `)
})


module.exports = router;