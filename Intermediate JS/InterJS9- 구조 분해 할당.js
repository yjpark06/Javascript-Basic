// 구조 분해 할당: 배열이나 객체의 속성을 분해해서 
//                -> 그 값을 변수에 담을 수 있게 하는 표현식

//-------------------------------------------------------
//1. 배열 구조 분해

let [x, y] = [1, 2];

console.log(x);  // 1
console.log(y);  // 2



let users = ['A', 'B', 'C'];
let [user1, user2, user3] = users;

console.log(user1);
console.log(user2);
console.log(user3);


//-------------------------------------------------------
//2. 배열 구조 분해: 자리 바꿔치기

//a값을 b로, b의 값을 a로 바꾸고 싶다면?

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);   // a = 2 
console.log(b);   // b = 1


//-------------------------------------------------------
//3. 객체 구조 분해

let user = {name: 'Ace', age: 26};


let {name, age} = user;     // 아래 코드와 같고 순서를 바꿔도 동일함
// let name = user.name;
// let age = user.age;

console.log(name);
console.log(age);


//참고로 
let {name: 키값재설정1, age: 키값재설정2} = user;
//이라고 한다면

console.log(키값재설정1); // 'Ace'
console.log(키값재설정2); // 26 

// 이렇게 출력도 됨