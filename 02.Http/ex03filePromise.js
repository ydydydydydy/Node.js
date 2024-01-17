const fs = require('fs').promises;
fs.readFile('./file.txt')
.then((data)=>{
    console.log(String(data));
})
.catch((err)=>{
    console.log(err);
})