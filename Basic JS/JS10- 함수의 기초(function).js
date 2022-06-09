// 1. 함수 작성(함수명호출)

// function Error(){
//   alert("에러입니다. 다시 해주세요.")
// }

// Error();


// 2. 매개변수가 있는 함수(Hello, Mike 출력)

// function say(name){
//  const msg = `Hello, ${name}.`;
//  console.log(msg);
// }
//  say('yongjun');


//3. 전역변수, 지역변수(를 쓰는게 좋음)

// let msg = "welcome";
// console.log(msg)

// function say(name){
//  let msg = "Hello"
//  console.log(msg + ' ' + name);
// }

// say('Tom');
// console.log(msg)



//4. 응용( || 연산자)
// "Hello, friend", "Hello, Jane"를 출력하시오.

// function say(name){
//   let newname = name || 'friend'  // name 이거나 friend 둘중 하나 채택
//   let msg = `Hello, ${newname}`
//   console.log(msg)
// }

// say();
// say('Jane');

//4. 위 코드를 더 깔끔하게 변경
// function say(name="friend"){
//   let msg = `Hello, ${name}`
//   console.log(msg)
// }

// say();
// say('Jane');


//5. return 으로 값 반환(add 함수 사용)

function add(num1, num2){
  return num1 + num2;
}

const result = add(2, 3);
console.log(result)

