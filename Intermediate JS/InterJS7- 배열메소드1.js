// push(): 뒤에 삽입
// pop(): 뒤에 삭제
// unshift(): 앞에 삽입
// shift(): 앞에 삭제

// 1. arr.splice(n, m): 특정 요소 지움 (인덱스 n에서 시작, m개 지움)

// 2. arr.splice(n, m, x): 특정 요소 지우고 추가 (인덱스 n에서 시작, m개 지움, x추가)
//    arr.splice(1, 3, 25, 26, 27) => 인덱스 1에서 3개 지우고, 25~27 추가
//    arr.splice(1, 0, "안녕", "하이") => 0은 아무것도 안지움, 그냥 추가

// 인덱스:     0        1         2
let arr = ["서울은", "특별시", "입니다"]
arr.splice(1, 0, "사람", "문화")         //인덱스 1 전에 추가됨.
// ["서울은", "사람", "문화", "특별시", "입니다"]


// 3. arr.splice()을 result 대입해서 반환하면 삭제한 것을 출력함

// 4. arr.slice(n, m): n부터 m까지 반환 (n~m)
//             (n) 이라고 쓰면 시작은 n , 끝까지 출력
//             () 아무것도 안넣으면 배열이 복사되서 출력


// 5. arr.concat(arr2, arr3...): 합쳐서 새 배열 반환

let arr2 = [1,2];
arr.concat([3,4]);      //[1,2,3,4]
arr.concat([3,4],[5,6]) //[1,2,3,4,5,6]
//        ([3,4],5,6) 도 동일함


// 6. arr.forEach(fn): 배열 반복

let users = ['Mike', 'Tom', 'Jane'];

users.forEach((item, index, arr) => {    //item: Mike,Tom,Jane (값)
    //console.log(item)                  //index: 0, 1, 2      (인덱스)
});                                      //arr: users          (함수명)


// 7. arr.indexOf / arr.lastIndexOf (앞에서 탐색, 끝에서 탐색)
arr.indexOf(3)     // 숫자 3은 몇번째 인덱스인가 출력함
arr.indexOf(3,3)   // 두번째 인수 3은 인덱스 3부터 시작해서 첫번째 인수 3을 찾아 몇번째 인덱스인가 출력함
arr.lastIndexOf(3) // 끝에서 첫번째로 만나는 숫자 3은 몇번째 인덱스인가 출력


// 8. arr.includes(): 포함하는지 확인 (포함하면 true 아니면 false)


// 9. arr.find(fn) / arr.findIndex(fn) (조건에 맞는 값을 찾아냄, 조건에 맞는 인덱스를 찾아냄)
// 첫번째 true 값만 반환하고 끝   (짝수를 찾을때 2,4,6이 있으면 2만 나옴)
// 만약 없으면 undefined 를 반환

// 객체로 값을 찾을때 유용함


// 10. arr.filter(fn): 만족하는 모든 요소를 배열로 반환 (위 find 메소드는 하나만 찾은 반면 얘는 모든요소)
// 값을 찾고, 배열로 반환함


// 11. arr.reverse(): 배열을 역순으로 재정렬
// 이용사례
// 최근 가입된 유저부터 보여주는 기능
// 최근 작성된 글 순서를 보여주는 기능 


// 12. arr.map(fn): 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
// 실무에서 많이씀 
// 기존 객체에 새로운 값을 추가함


// 13. arr.join():  배열을 합쳐서 문자열로 표현
//             ("  "): 공백을 줘서 띄어쓰기로 합침(그외 여러가지 가능)     

//     arr.split(): 문자열을 나눠서 배열로 표현
//              (","): 쉼표(,)를 나눠서 배열로 표현
//              (""): 각 글자마다 쉼표로 나눠서 배열로 표현 


// 14. Array.isArray(): 배열인지 아닌지 확인
// Javascript에서 배열은 객체에 속하기 때문에 typeof은 둘다 객체라고함
// 따라서 쓰이는데..

// 객체
let user = {
    name: "Cake",
    age: 20,
};

//배열
let userList = ["Tom", "Jane", "Mark"];

console.log(Array.isArray(user));         // false = 객체라서..
console.log(Array.isArray(userList));     // true = 배열임



