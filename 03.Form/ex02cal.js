const http = require('http');
const fs = require('fs').promises;
const url = require('url');

http.createServer(async(req,res)=>{
    const file = await fs.readFile('./ex02cal.html');
    const parseUrl = url.parse(req.url, true);
    console.log('parseUrl :', parseUrl);

    console.log(typeof parseUrl.query.num1);
    const num1 = Number(parseUrl.query.num1);
    const num2 = Number(parseUrl.query.num2);

    const data = `
    <html>
        <body>
            <p>첫 번째 숫자 : ${num1}</p>
            <p>두 번째 숫자 : ${num2}</p>
            <p>연산 결과 : ${num1+num2}</p>
        </body>
    </html>
    `
    /*
    (mission) 경로에 따라 응답 다르게 설정
    / => html file
    /result => data
    */
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.write(file);
    res.end();
}).listen(8001, ()=>{
    console.log('Server is listening on port 8001');
})
