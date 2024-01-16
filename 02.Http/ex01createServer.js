/*
(1) 모듈 불러오기
http 모듈 : 현재 파일을 서버로 만들어주는 모듈
** http 프로토콜로 클라이언트와 서버간 소통!
*/
const http = require('http');
const ip = require('ip');

http.createServer((req, res)=>{
    /*
    (2) 요청(request)이 들어올 때마다 실행되는 콜백함수
    - 첫 번째 인자 : req(request), 요청 객체
      요청에 관한 정보들, 클라이언트가 주는 정보들
    - 두 번째 인자 : res(response), 응답 객체
      응답에 관한 정보들, 서버가 주는 정보들
    */
    console.log('create server!');
    let ipRes = ip.address();
    console.log('접근한 ip 주소는 :', ipRes);
    // (3) 요청 처리
})
/*
// (4) 서버 리스닝
클라이언트로부터 요청을 받을 포트번호 설정
 */
.listen(8001, ()=>{
    console.log('8001번 서버에서 대기중..');
})
/*
(5) 서버 실행
터미널 => node 파일명.js
url => http://ip주소:port번호
*/