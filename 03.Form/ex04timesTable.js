const http = require('http');
const { parse } = require('path');
const fs = require('fs').promises;
const url = require('url');

http.createServer(async (req, res)=>{
    const file = await fs.readFile('./ex04timesTable.html');
    const parseUrl = url.parse(req.url, true);
    console.log('parseUrl :', parseUrl);

    const num = parseUrl.query.num;

    let data = '<html><body><table border="1px solid balck">';

    for(let i=1; i<=9; i++){
        data+= `<tr><td>${num}X${i}=${num*i}</td></tr>`
    }

    data += '</table></body></html>';

    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    
    parseUrl.pathname==='/' && res.write(file);
    parseUrl.pathname==='/result' && res.write(data);

    res.end();
})
.listen(8000, ()=>{
    console.log('Server is listening on port 8000');
})