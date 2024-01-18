const http = require('http');
const fs = require('fs').promises;
const url = require('url');

http.createServer(async (req, res)=>{
    const file = await fs.readFile('./ex01get.html');
    /*
    req.url => 클라이언트의 요청 URL에 접근
    get 통신시 데이터 url 뒤 쿼리스트링으로 전송
    ~?food=pizza&beverage=americano
    */
    console.log('req url : ', req.url);

    /*
    url.parse() => URL분석
    첫 번째 인자 : 분석할 URL
    두 번째 인자 : true로 설정시 query를 객체로 반환
    */
    const parseUrl = url.parse(req.url, true);
    console.log('parseUrl : ', parseUrl);

    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    switch(parseUrl.pathname){
        case '/' :
        res.write(file); break;
        case '/result' :
        let data = `
        <html>
            <body>
                <p>내가 좋아하는 음식 : ${parseUrl.query.food}</p>
                <p>내가 좋아하는 음료 : ${parseUrl.query.beverage}</p>
            </body>
        </html>
        `
        res.write(data); break;
    }
    res.end();

})
.listen(8001, ()=>{
    console.log('Server is listening on port 8001');
})