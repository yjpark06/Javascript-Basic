// 1. 함수 선언문과 함수 표현식 비교
//  function say(){
//  console.log("Hello");
//}

//say();

// 위 아래 코드는 같다

// let say = function(){
//  console.log("hello");
// }

// say();



//2. 화살표 함수 

// 2-1. 함수 선언식
// function error(){
//   console.log("에러");
// }

// error();


// 2-2. 함수 표현식
// let error = function(){
//   console.log("에러2");
// }

// error();


// 2-3. 화살표 함수
// let error = ()=>{
//   console.log("에러3");
// }

// error();



// 3. 화살표 함수 응용1
// 함수선언식
// function say(name){
//  const msg = `Hello, ${name}`;
//  console.log(msg);
// }
// say("yjp0")

// 함수표현식
// const say = function(name){
//  const msg = `Hello, ${name}`;
//  console.log(msg)
// }
// say("yjp")

// 화살표함수
// let say = name =>{
//  const msg =`Hello, ${name}`;
//  console.log(msg)
// }
// say("yjp2")



// 4. 화살표 함수 응용2 (인수가 2개, return이 있는예제)
// 함수 선언식
// function add(num1, num2){
//  const result = num1 + num2;
//  return num1 + num2;
// }
//const result = add(3, 3);
// console.log(result)

// 함수 표현식
// const add = function (num1, num2){
//  const result = num1 + num2;
//  return result;
// };

// 화살표 함수
const add = (num1, num2)=> num1 + num2;  // () 생략도 가능 (return 도 생략함)
const result = add(4, 4);
console.log(result)
//