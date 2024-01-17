/*
Destructing assignment (구조 분해 할당)
구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여
그 값을 개별 변수에 담을 수 있게 하는 Javascript 표현식
*/

const [num1, num2] = [1, 2];
console.log(num1, num2);

const array = [3, 4]
const [num3, num4] = array;
console.log(num3, num4);

const {num5, num6} = {num5 : 5, num6 : 6};
console.log(num5, num6);

const object = {num7 : 7, num8 : 8};
const {num7, num8} = object;
console.log(num7, num8);