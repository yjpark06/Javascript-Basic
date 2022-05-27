// 1. arr.sort(): 배열 재정렬(배열 자체가 변경되니 주의)


let arr = [27, 8, 5, 13];


arr.sort((a, b)=>{
    console.log(a, b);
    return a -b;
});

console.log(arr);


// 2. Lodash
// 2-1. __.sortBy(arr): 숫자, 문자, 객체든 원하는 기준으로 정렬해줌
// https://lodash.com/ 에서 학습하길 권장함.



// 3. arr.reduce(): 
// 예시(forEach문을 쓰지않고 손쉽게 작성가능한 메소드)
// 배열을 선언하고, reduce문을 써서 누적값을 구하라.

let arr1 = [26, 28, 54, 56];

const result1 = arr1.reduce((prev, cur)=>{         // prev = 누적된 값
 return prev + cur;                                // cur = 현재 더할값     return 최종계산값
}, 0)                                              // 계속돌면서 누적값이 됨. 0은 초기값 선언한것(쓰는게 편함)

console.log(result1);                              // 164 



// 예시2
// 배열을 생성하고, 성인인지를 구분하여 새 배열을 반환하라.

let userList = [
    { name: "Hursy", age: 17 },
    { name: "Kain", age: 26 },
    { name: "Ruda", age: 33 },
    { name: "Chokie", age: 14 },
    { name: "Woofoo", age: 52 },
    { name: "Sony", age: 12 },
]

let result2 = userList.reduce((prev, cur)=>{
    if(cur.age > 19){          //현재 나이가 19세보다 많다면?
        prev.push(cur.name);   //빈 배열에 현재 이름을 넣어라
    }
    return prev;               //완성된 배열을 반환하라
}, [])

console.log(result2);          //결과 출력


// 나이의 합
let userList1 = [
    { name: "Hursy", age: 17 },
    { name: "Kain", age: 26 },
    { name: "Ruda", age: 33 },
    { name: "Chokie", age: 14 },
    { name: "Woofoo", age: 52 },
    { name: "Sony", age: 12 },
]

let result3 = userList1.reduce((prev, cur)=>{
    return (prev += cur.age);               
}, 0);

console.log(result3);          //결과 출력


// 이름이 4자리 이하 사람 찾기
let userList2 = [
    { name: "Hursy", age: 17 },
    { name: "Kain", age: 26 },
    { name: "Ruda", age: 33 },
    { name: "Cokie", age: 14 },
    { name: "Wofoo", age: 52 },
    { name: "Sny", age: 12 },
]

let result4 = userList2.reduce((prev, cur)=>{
    if(cur.name.length <= 4){
        prev.push(cur.name);        
    }              
    return prev;
}, []);

console.log(result4); 