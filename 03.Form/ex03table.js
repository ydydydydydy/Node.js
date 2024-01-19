const http = require('http');
const fs = require('fs').promises;
const url = require('url');

http.createServer(async (req, res)=>{
    const file = await fs.readFile('./ex03table.html');
    const parseUrl = url.parse(req.url, true);
    console.log('parseUrl :', parseUrl);
    console.log(typeof parseUrl.query.num);
    const num = Number(parseUrl.query.num);

    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    let data = '';
    data += `<html><body><table border="1px solid black"><tr>`
    for(let i=1; i<=num; i++){
        data += `<td>${i}</td>`
    }
    data += `</tr></table></body></html>`
    parseUrl.pathname === '/' && res.write(file);
    parseUrl.pathname === '/result' && res.write(data);
    res.end();
})
.listen(8000, ()=>{
    console.log('Server is listening on port 8000');
})