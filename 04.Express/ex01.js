/*
Express
- Node.js를 위한 빠르고 개방적인 간결한 웹 프레임워크
- 단순(서버 새성, 요청, 응답) => 복잡(DB 연결, 라우팅 작업)

사용방법
(1) npm init -y
    - package.json 파일 생성
        => 현재 프로젝트 관련 정보 및 설치 모듈 관리
        => package.json : 프로젝트 정보 정의, 의존하는 패키지 버전 정보 명시
        => package-lock.json : 패키지의 정확한 버전 정보 명시
(2) npm install express
    - node_modules 폴더 생성
    - express 제공 모듈 사용
(3) 분업화 폴더 및 메인 js 파일 생성
    - 일반적으로 app.js 사용 (리액트 App.js와 구분)
    - 수업 예제 ex01.js, ex02.js, ...
        
분업화
- middleward : 사용자의 요청에 따른 기능을 정의
- config : 환경변수 정보 저장 (DB 연결 정보, API 키 값 등)
- public : 정적인 파일 저장
- routes : 라우팅 파일 저장
- views : 동적인 파일 저장
*/

/*
- app.method(path, callback)
  app.get('/', (req,res)=>{~})
  => 지정된 경로에서 HTTP 요청을 해당하는 콜백 함수로 라우팅
  
- app.set('title', 'mySite')
  => express 객체 안에 저장 가능

- app.get('title') // mySite
  => express 안에 저장한 값 반환

- express.static(root)
  => 정적 파일을 제공하기 위한 내장 미들웨어 함수
  -> __dirname : 현재 파일이 위치한 디렉토리의 절대 경로
  ** 정적인 파일을 클라이언트에게 상대 경로로 바로 응답 x
     미들웨어를 하나 거치고 절대 경로로 응답
*/


// (1) express 불러오기
const express = require('express');

// (2) express 실행하기
const app = express();

// 포트번호 설정
// const port = 8000;
app.set('port', process.env.PORT || 8000);

app.use(express.static(__dirname+'/public'));


// (3) 서버 생성
app.get('/', (req, res)=>{
    console.log('create server!');

    // Case 1. 단순 문자열 응답 : send
    // res.send('Hello World!');

    // Case 2. HTML 문서 응답
    // res.sendFile('C:/Users/smhrd/Desktop/NodeJS/04.Express/public/ex01.html');
    res.sendFile(__dirname+'/public/ex01.html')
})

// (4) 포트번호 지정
app.listen(app.get('port'), ()=>{
    console.log('Server is listening on port 8000');
})