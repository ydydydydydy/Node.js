const http = require('http');
const fs = require('fs').promises;

/*
 querystring 모듈 : querystring 관련 모듈
 qs.parse() : 쿼리 문자열 -> 객체
 */
const qs = require('querystring');

http.createServer(async (req, res)=>{
    console.log('create server');
    const file = await fs.readFile('./ex05post.html');

    /*
    req.on(event type, callback): 이벤트처리
    
    data
    - 클라이언트 데이터가 전송될 때 발생
    
    end
    - 모든 데이터가 전송되어 클라이언트 요청이 완료될 때 발생
    */

    // 클라이언트 전송 데이터 누적 공간
    let body = '';

    req.on('data', (data)=>{
        // console.log(data);
        body += data;
        console.log(body);
    })
    
    // 데이터 수식 및 누적이 끝나면 데이터 출력
    req.on('end', ()=>{
        const parseQs = qs.parse(body)
        console.log('parseQs : ', parseQs);
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        req.url==='/' && res.write(file);
        req.url==='/result' && res.write(`
        <html>
        <body>
            <p>내가 좋아하는 가수는 ${parseQs.musician}이며</p>
            <p>내가 좋아하는 음악은 ${parseQs.music}입니다.</p>
        </body>
        </html>
        `);
        res.end();
    })
})      
.listen(8000, ()=>{
    console.log('Server is listening on port 8000');
})