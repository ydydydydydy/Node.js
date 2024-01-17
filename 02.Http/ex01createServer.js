/*
(1) 모듈 불러오기
http 모듈 : 현재 파일을 서버로 만들어주는 모듈
** http 프로토콜로 클라이언트와 서버간 소통!
*/
const { log } = require('console');
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
    console.log('서버 ip 주소는 :', ipRes);
    let ipReq = req.connection.remoteAddress
    console.log('클라이언트 IP주소는', ipReq);
    /*
    // (3) 요청 처리
    클라이언트로부터의 요청에 대한
    응답(response)을 생성하고 전송

    res.writeHead : HTTP 응답의 헤더를 설정
    - 첫 번째 인자 : HTTP 상태 코드
      200은 정상적으로 응답했음을 의미
    - 두 번째 인자 : 헤더 객체 전달

    res.end : 응답 완료
    */
   // console.log(res);
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'})
    /*
    한글 데이터 인코딩
    - utf-8 : 조합형, 뷍 -> ㅂㅜㅔㅇ -> 뷍
    - euc-kr : 완성형, 뷍 -> 뷍 -> 깨짐
    */

    let data = `
    <html>
      <body>
          <h1>서버 생성</h1>
          <p>내 IP는 ${ipRes}</p>
      </body>
    </html>
    `
    res.write(data);
    res.end();
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