const http = require('http'); // 서버 생성을 위한 모듈 불러오기
const fs = require('fs').promises; // 파일 읽어오기 위한 모듈 불러오기

http
// 서버 생성
.createServer(async (req, res)=>{
    const data = await fs.readFile('./index.html')
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.write(data);
    res.end();
})
// 포트번호 설정
.listen(8001, ()=>{
    console.log('서버 대기중~');
})