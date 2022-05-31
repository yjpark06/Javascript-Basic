//1. 인수 전달

function showName(name) {
    console.log(name);
}

showName("Aoke");
// showName("Aoke", "Tode"); // 오류 발생은 안함 , 매개변수에는 개수 제한이 없음
// showName() // 오류 발생 x, undefined만 찍힘


//2. 함수의 인수를 얻는 방법 
//2-1. arguments: 과거에는 이것만 씀()
//2-2. 나머지 매개변수: 정해지지 않은 갯수의 인수를 배열로 나타낼수있게 함
//                     => undefined가 나오지 않음

//예시

function showName1(...names){
    console.log(names);
}

showName1(); // []  빈 객체
showName1('X'); // ['X']
showName1('X', 'Y'); // ['X', 'Y']



//3. 전개 구문: 배열
let arr1 = [1,2,3];
let arr2 = [4,5,6];


// 사용법
// 1. let result = [...arr1, ...arr2];
// 2. let result = [0, ...arr1, ...arr2, 7, 8, 9]; 

//push, splice, concat 구문을 보다 쉽게 사용하기 위함임



//4.. 전개 구문: 객체, 복제도 가능
//object.assign 을 쓸 필요 없음

 