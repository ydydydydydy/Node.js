const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8000);

app.get('/', (req, res)=>{
    console.log('create server!');
    res.sendFile(__dirname+'/public/ex02.html')
})

app.listen(app.get('port'), ()=>{
    console.log('Server is listening on port 8000');
})