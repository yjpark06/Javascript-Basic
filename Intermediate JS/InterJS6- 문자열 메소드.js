//1. 여러가지
// ', ", `   (작은따옴표, 큰따옴표, 빽틱)
// html, 문장, ${}을 표현할때 좋음


//----------------------------------------------------
//2. 빽틱- 여러줄을 포함 할수있다.

let desc = `안녕하세요
저는 000입니다.
잘부탁드립니다.`;

// 따옴표라면?

let desc1 = '안녕하세요\n저는 000입니다.\n잘부탁드립니다.'   // \n을 써야함


//----------------------------------------------------
//3. length: 문자열 길이를 구함 (배열의 길이도 포함)

let desc2 = '안녕하시오.';

desc2.length // 6

// 보통 회원가입 시 아이디, 비번 몇자이상~몇자이하로 제한할때 사용함.


//----------------------------------------------------
//4. length[]: 문자열도 배열처럼 특정 문자에 접근가능.

let desc3 = '나는천재다.';

const result = desc3[2] // 천
console.log(result);

// 반대로 값을 지정해서 바꾸는건 불가능함!!


//----------------------------------------------------
//5. toUpperCase(): 모든 문자열을 대문자로 바꿔줌 
//   toLowerCase(): 모든 문자열을 소문자로 바꿔줌


//----------------------------------------------------
//6. str.indexOf(문장이 들어감)    //str은 변수를 나타냄

let desc5 = "나는 몇번째 있을까요?";
const result2= desc5.indexOf('번');
console.log(result2);                   // 4번째  //단어로 치면 첫글자로 기준을 함  

// 만약 찾는 문자열이 없다면 -1을 반환함
// if문 응용
if(desc5.indexOf("나") > -1){           // "나"가 인덱스 0이기 때문에 false로 됨 => 이것은 if문에서 실행안됨 => 따라서 -1보다 크다고 설정함.
    console.log('"나"가 포함된 문장입니다.');
}


//----------------------------------------------------
//7. str.slice(n, m): 특정 범위 문자열만 뽑는다.

let desc6 = "World";

const result3= desc6.slice(0, 3)  // 0~2 인덱스 범위만 뽑음  // "Wor" 
console.log(result3);

//desc6.slice(2) // 인덱스 2부터 끝까지 반환 // "rld"
//desc6.slice(1,-1) //  인덱스 1부터 끝에서 1번째 위치까지 반환 // "orl"


//----------------------------------------------------
//8. str.substring(n, m): 위와 동일하지만 다른점은 그냥 n ~ m 사이라고 생각하는게 편함
//따라서 (n, m) or (m, n)이라고 적어도 무방
//그리고 음수는 0으로 인식


//----------------------------------------------------
//9. str.substr(n, m): n부터 시작해서, m개를 가져옴

let desc11 = "ABCDEFG";
const good1= desc11.substr(1,3)
console.log(good1);              // BCD


//----------------------------------------------------
//10. str.trim(): 앞 뒤 공백 제거
//    str.repeat(n): n번 반복

let desc12 = "hi";
const good2= desc12.repeat(3)
console.log(good2);          // hihihi


//----------------------------------------------------
//11. 문자열 비교 및 아스키 코드번호 추출하기

// 1 < 3
// "a" < "c"      //아스키 코드

"a".codePointAt(0);        // 97
String.fromCodePoint(97)   // "a"



