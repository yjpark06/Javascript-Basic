//console.log(10>5);
//console.log(10 == 10);
//console.log(10 != 10);

//"==="은 타입까지 비교해서 참,거짓을 알려줌(일치연산자)

//나이가 20살 이상이면, "출입가능" / 20살 미만이면, "출입 불가능" 코드를 만드시오
//나이는 랜덤

//const age = 16;

//if(age > 20){
// console.log("출입 가능");  
//} else {
// console.log("출입 불가능");
//}


// 조건 추가: 만약 19살이면 "수능 잘봐 ㅋㅋ"을 출력하시오.
const age = 19;

if(age > 20){
 console.log("출입 가능");  
} else if(age === 19){
  console.log("수능 잘봐 ㅋㅋ");
} else {
 console.log("출입 불가능");
}
