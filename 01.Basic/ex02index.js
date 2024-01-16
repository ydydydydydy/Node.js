/*
모듈: NodeJS에서 만들어놓은 기능들의 단위
모듈 내보내기 => module.exports
모듈 가져오기 => require('모듈이름')
*/

// const variable = require('./ex02var');
// console.log(variable);

const {odd, even} = require('./ex02var');
// console.log(odd, even);

let num = 5;
let result = num%2===1 ? odd : even
console.log(result);