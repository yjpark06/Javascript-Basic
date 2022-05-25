// toString()
// 10진수 -> 2 / 16진수로 바꿔보는 방법

// 1. 숫자 10을 그냥 출력
let num = 10;
const result = num.toString();
console.log(result);                    // 10 

// 2. 숫자 255를 16진수로 출력 
let num1 = 255;
const result1 = num1.toString(16);      // 2진수로 변환함
console.log(result1);                   // ff

// -------------------------------------------------------
// 3. Math
const result2 = Math.PI;
console.log(result2);

// 3-1. Math.ceil(): 올림(소수점 이하는 버림)
let nums1 = 5.1;
let nums2 = 6.7;

const result3 = Math.ceil(nums1);
console.log(result3);                    // 5.1 -> 6
const result4 = Math.ceil(nums2);         
console.log(result4);                    // 6.7 -> 7

// 3-2. Math.floor(): 내림(소수점 이하는 버림)
// 사용법은 위와 동일

// 3-3. Math.round(): 반올림(소수점 이하는 버림)
// 사용법은 위와 동일

// 3-4. 소수점 자릿수
// 문제) 소수점 둘째자리 까지 표현 => 셋째 자리에서 반올림
// 방법1  
let userRate = 30.1234; 
const sosu = Math.round(userRate * 100)/100   
console.log(sosu);            // 3012.34  => 3012 => 30.12
                              // 100을 곱 - 반올림 - 100 나눗셈
                              
// 방법2: toFixed() => 괄호안에 몇째자리까지 표현할건지 숫자로 적음
let userRate1 = 40.1234; 
const sosu2 = userRate1.toFixed(2);
console.log(sosu2);

// 그 외 특징
// toFixed(0) => 정수만 남음.
// toFixed(6) => 기존 자릿수보다 클 경우 0으로 채워줌 => 30.123400
// 이 함수들은 통계나 자료정리할때 많이 씀.


// 매우 주의할점!!!
// toFixed()은 문자열을 반환한다는 점. 
// 따라서 반환한 이후, Number()로 묶어서 최종 반환해야됨.

let userRate2 = 50.1234; 
const sosu3 = Number(userRate2.toFixed(2));
console.log(sosu3);



// -------------------------------------------------------
// 4. isNaN(): NaN인지 아닌지 판단해줌. (NaN = Not a Number, 어떤 값이 숫자로 변환될 수 있는지를 알려주는 함수)

let x = Number('x');
console.log(x);        //NaN

// 4-1. NaN특징(외울것)
x == NaN // false
x === NaN // false
NaN == NaN // false

// 4-2. true가 나오는 경우
let x2 = Number('ok');
const resultx= isNaN(x2)
console.log(resultx);      // true

// 아래는 간단한 결론
isNaN(x2) // true
isNaN(3) // false


// NaN을 반환하는 다섯가지 종류를 알아보자.
// 1. 숫자로서 읽을수가 없음 - parseInt("어쩌구"), Number(undefined)
// 2. 결과가 허수인 수학 계산식 - Math.sqrt(-1)
// 3. 피연산자가 NaN - 7 ** NaN
// 4. 정의할 수 없는 계산식 - 0 * Infinity
// 5. 문자열을 포함하면서 덧셈이 아닌 계산식 - "가" / 3



// -------------------------------------------------------
// 5. Parselnt(): 문자열을 숫자열로 바꿔줌.
// 첫글자가 무조건 숫자여야 읽음

let margin = '10px';

parseInt(margin);  // 10  => 읽을수있는 부분만 읽고 반환
Number(margin);    // NaN => 못읽음

// 첫 글자가 숫자가 아닌경우

let margin2 = 'f3'; // 첫 글자가 f이므로

parseInt(margin2);  // NaN => 못읽음


// parseInt(margin2, 값지정)
let margin3 = 'f3'; // 첫 글자가 f이지만?

parseInt(margin3, 16);  // f3을 16진수로 출력함 => 243 반환

// parseInt('11', 2)  => 문자 11을 숫자 11로 바꾸고, 2진수로 반환


// -------------------------------------------------------
// 6. ParseFloat(): 문자열을 숫자열로 바꿔주지만 소수점까지 읽음
// 소수점까지 다 읽는다는 것에 집중

let padding = '18.5%';

parseInt(padding);   // 18    얘는 소수점 앞에까지만 반환
parseFloat(padding); // 18.5  얘즌 소수점이후 숫자까지 반환



// -------------------------------------------------------
// 7. Math.random(): 0~1 사이 무작위 숫자 생성
// 응용) 1~100까지 임의의 숫자를 뽑고 싶다면?

const random = Math.floor(Math.random() * 100) +1
console.log(random);

// math.random() * 100 => 0.6789 * 100 = > 67.89
// math.floor(67.89) => 소수점 이하 버리고 내림 => 67
// +1은 0부터 나오는것을 방지하기 위함. 
// 최종으로 68 뽑음 



// -------------------------------------------------------
// 8. Math.max, Math.min (최대값, 최소값 반환)

Math.max(1, 3, 5);    // 5
Math.min(1, 3, 5);    // 1



// -------------------------------------------------------
// 9. Math.abs(): 절대값

Math.abs(-100)      // 100



// -------------------------------------------------------
// 10. Math.pow(n, m): 제곱

Math.pow(2, 10);   // 2의 10승 => 1024



// -------------------------------------------------------
// 11. Math.sqrt(): 제곱근

Math.sqrt(16)      // 루트 16 => 4








// 숫자, 수학함수의 이용사례 

// 쇼핑몰
// 통계
// 지표

