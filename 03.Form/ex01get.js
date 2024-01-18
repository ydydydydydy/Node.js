const http = require('http');
const fs = require('fs').promises;
const url = require('url');

http.createServer(async (req, res)=>{
    const file = await fs.readFile('./ex01get.html');
    console.log('req url : ', req.url);
    const parseUrl = url.parse(req.url, true);
    console.log('parseUrl : ', parseUrl);

    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    switch(parseUrl.pathname){
        case '/' :
        res.write(file); break;
        case '/result' :
        res.write(`좋아하는 음식 : ${parseUrl.query.food}`); break;
    }
    res.end();

})
.listen(8001, ()=>{
    console.log('Server is listening on port 8001');
})