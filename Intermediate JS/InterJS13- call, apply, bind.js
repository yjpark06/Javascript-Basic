// call, apply, bind: 
// 함수 호출 방식과 관계없이 this 를 지정할 수 있음


// 1. call: 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있음.

const mike = {
    name: "Mike",
    message: "안녕 나는 누구게?",
}

const cake = {
    name: "Cake",
    message: "너는 누구야?",
}

function showThisName() {
    console.log(this.name);
    console.log(this.message);
}

showThisName.call(mike);



// 2. apply: 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같음.
//        call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, aplly는 매개변수를 배열로 받음.

const nums = [5, 2, 4, 3, 1];

//const minNum = Math.min.apply(null, nums);    // nums가 배열이니 그냥 넣어도 됨
//=> const minNum = Math.min.apply(null, [5, 2, 4, 3, 1]);  와 같음   // 두번째 매개변수는 배열을 넣으면 됨

//const maxNum = Math.max.call(null, ...nums);  // call은 두번째 매개변수 배열을 넣을때 순서대로 넣어야 됨. 따라서 ... 를 써서 쓰자.
//=> const maxNum = Math.max.apply(null, 5, 2, 4, 3, 1)

console.log(maxNum);
//console.log(minNum);



// 3. bind: 함수의 this 값을 영구히 바꿀 수 있습니다.  