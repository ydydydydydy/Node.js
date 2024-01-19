const http = require('http');
const fs = require('fs').promises;
const url = require('url');

http.createServer(async(req, res) => {
    const file = await fs.readFile('./ex02cal.html');
    const parseUrl = url.parse(req.url, true);
    console.log('parseUrl :', parseUrl);

    /* 
    반환되는 num1과 num2의 데이터 타입이 String
    => 연산 작업을 위한 Number 타입으로 형변환 필요
    */
    console.log(typeof parseUrl.query.num1);
    const num1 = Number(parseUrl.query.num1);
    const num2 = Number(parseUrl.query.num2);
    
    let result = '';
    switch(parseUrl.query.cal) {
        case 'plus' : result = num1 + num2; break;
        case 'minus' : result = num1 - num2; break;
        case 'multiply' : result = num1 * num2; break;
        case 'divie' : result = num1 / num2; break;
    }

    const data = `
    <html>
        <body>
            <p>첫번째 숫자 : ${num1}</p>
            <p>두번째 숫자 : ${num2}</p>
            <p>연산 결과 : ${result}</p>
        </body>
    </html>
    `
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});

    /* 
    (mission) 경로에 따라 응답 다르게 설정
    / => html file
    /result => data
    */
   parseUrl.pathname === '/' && res.write(file);
   parseUrl.pathname === '/result' && res.write(data);
    res.end();
})
.listen(8000, () => {
    console.log('Server is listening on port 8000');
})