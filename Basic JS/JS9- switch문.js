// if else 문과 비슷

//과일 이름 입력을 받고 얼마인지 출력하는 코드
//사과 : 100원
//바나나: 200원
//포도: 300원

let fruit = prompt("이름을 적으면 가격을 알려드립니다.");

switch(fruit){
  case '사과' :
    console.log("100원 입니다.");
    break;   // break를 넣어야 아래 코드가 실행이 안됨. (필수로 넣자)
  case '바나나' :
    console.log("200원 입니다.");
    break;
  case '포도' :
    console.log("300원 입니다.");
    break;
}