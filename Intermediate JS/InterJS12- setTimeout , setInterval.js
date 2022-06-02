//setTimeout: 일정 시간이 지난 후 함수를 실행

function fn() {
    console.log(3)     //3초뒤에 로그를 찍음
}
setTimeout(fn, 3000);  //두개의 매개변수 = (일정 시간이 지난 후 시행하는 함수, 시간) 

// setTimeout(function(){
// console.log(3)
// }, 3000) 

// 이렇게 작성해도 됨

// delay = 0 을 준다면?
// setTimeout(function(){
// console.log(2)
// }, 0)                       // 바로 실행되지 않음
// console.log(1);




//setInterval: 일정 시간 간격으로 함수를 반복 

function showName(name) {
    console.log(name);     
}
const tld = setTimeout(showName, 3000, 'Mike');

// 3초마다 Mike가 찍힘
// 중간에 중단하려면 clearInterval(tId); 를 실행하면 됨



// 응용1: setInterval, clearInterval
// 코드 실행시 문장이 1초에 따라 몇초가 지났는가를 반복하여 나타내시오
// (조건: 5초 이상일시 시간브리핑을 멈추시오.)

let num = 1;               //초기값 선언

function showName1() {
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
    if (num > 5){
        clearInterval(tId);
    }
}

const tId = setInterval(showName1, 1000);