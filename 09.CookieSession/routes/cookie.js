const express = require('express');
const router = express.Router();

/*
쿠키 (Cookie)
- 클라이언트 웹 브라우저에 저장되는 정보
- 쿠키는 서버의 자원을 사용하지 않고, 클라이언트의 자원
- 놀이공원에서 자유이용권은 손님이 늘 가지고 다니는 것과 같음
- 쿠키는 사용자가 브라우저를 종료하더라도 그 기록이 남아있음
- 그 만료 시기 또한 저장 가능(ex. 7일간 보지 않기, 오늘은 그만 보기, ...)
- 장바구니, 로그인시 아이디 기억 등 기능 사용 기능

(1) 쿠키 저장하기 : res.cookie(key, value)
(2) 쿠키 확인하기 : req.cookies.key // value
(3) 쿠키 삭제하기 : req.clearCookie(key)
*/

// (1) 쿠키 저장하기
router.get('/setCookie', (req, res)=>{
    console.log('set cookie🍪');

    // res.cookie(key, value)
    res.cookie('nickname', '춘식이');

    // 만료 설정 방법 1 : maxAge
    // - 쿠키의 수명을 밀리초단위로 설정
    // 1초 => 1000밀리초
    res.cookie('coffee','아메리카노',{
        maxAge : 3000
    })

    // 만료 설정 방법 2 : expires
    // - 쿠키의 수명을 만료 날짜로 설정
    // 1000*60*60*24*day
    res.cookie('football', '모드리치',{
        expires : new Date(Date.now() + 1000*60*60*24*3)
    })
    res.send(`
    <html>
        <body>
            <h3>쿠키 생성 완료</h3>
            <a href='/cookie/getCookie'>쿠키 확인하기</a>
        </body>
    </html>
    `)
})

// (2) 쿠키 확인하기
router.get('/getCookie', (req, res)=>{
    console.log('🍪', req.cookies);
    res.send(`
    <html>
        <body>
            <h3>쿠키 확인</h3>
            <p>닉네임 : ${req.cookies.nickname}</p>
            <p>좋아하는 커피 : ${req.cookies.coffee}</p>
            <p>좋아하는 축구선수 : ${req.cookies.football}</p>
        </body>
    </html>
    `)
})

// (3) 쿠키 삭제하기
router.get('/clearCookie', (req, res)=>{
    res.clearCookie('nickname');
    res.send(`
    <html>
        <body>
            <h3>쿠키 삭제</h3>
        </body>
    </html>
    `)
})

module.exports = router;