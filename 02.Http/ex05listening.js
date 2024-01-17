const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('서버 생성 완료!');
})
server.listen(8001);
server.on('listening', ()=>{
    console.log('서버 대기중~~');
})