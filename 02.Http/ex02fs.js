// fs(file system) 모듈 : 파일 입출력 처리를 할 때 사용하는 모듈
const fs = require('fs');

fs.readFile('./file.txt', (err, data)=>{
    /*
    파일을 읽어올 때 실행되는 콜백함수
    - 첫 번째 인자 : 에러를 처리
    - 두 번째 인자 : 파일 데이터를 처리
    */
   err
   ?console.log(err)
   :console.log(String(data));
})

const sysncFs = fs.readFileSync('./file.txt')
console.log(sysncFs);