// let heading = document.getElementById('heading');
//         heading.onclick = function() {
//             heading.style.color = 'green';
//         }

// alert("홈페이지에 오신 것을 환영합니다")
// confirm("저장 하시겠습니까?")
// prompt("이름을 입력하세요")

// document.writeln("<h1>안녕하세요</h1>");

// console.log("안녕하세요");

// let name = prompt("이름을 입력해주세요");
// document.writeln(`${name}님 안녕하세요`)

// let width = 200;
// let height = 50;
// let area = width * height
// console.log(area);

// const PI = 3.14;
// let radius = prompt("반지름을 입력하세요");

// let area = PI * radius ** 2
// console.log(area)

// let userNumber = (prompt('숫자를 입력하세요.'));

// if (userNumber != null){
//     // if (userNumber % 3 === 0)
//     //     console.log('3의 배수입니다.');
//     // else
//     //     console.log('3의 배수가 아닙니다.');
//     (parseInt(userNumber) % 3 == 0)? console.log('3의 배수입니다.') :console.log('3의 배수가 아닙니다.');
// }
// else
//     console.log('입력이 취소됐습니다.')

/*
let subject1 = parseInt(prompt('1과목 점수를 입력하세요'));
let subject2 = parseInt(prompt('2과목 점수를 입력하세요'));
let subject3 = parseInt(prompt('3과목 점수를 입력하세요'));

let avg = (subject1 + subject2 + subject3)/3;
if (avg >= 60 && subject1 >= 40 && subject2 >= 40 && subject3 >= 40){
    console.log('합격');
}
else{
    console.log('불합격');
}
*/


// let session = prompt('관심 세션을 선택해 주새요. 1-마케팅, 2-개발, 3-디자인');

// switch(session){
//     case "1": document.writeln("마케팅 세션은 <b>201호</b>에서 진행됩니다.")
//         break;
//     case "2": document.writeln("개발 세션은 <b>203호</b>에서 진행됩니다.")
//         break;
//     case "3": document.writeln("디자인 세션은 <b>205호</b>에서 진행됩니다.")
//         break;
//     default: alert("잘못 입력했습니다.");
// }


/* for(let i = 1; i<10; i++){
    for(let ii = 1; ii<10; ii++){
        console.log(`${i} * ${ii} = ${i * ii}`)
    }
} */

// let stars = parseInt(prompt('별을 몇 개 표시할까요?'));

/* while (stars > 0){
    document.writeln("*");
    stars--;
} */

// do{
//     document.writeln("*");
//     stars--;
// }while (stars > 0);


// let userN = parseInt(prompt('몇 까지 3의 배수를 찾을까요?'))
// let hap = 0
// for (let i = 1; i<= userN; i++){
//     if (i % 3 === 0){
//         document.writeln(i);
//         hap ++;
//     }
// }
// document.writeln(`<p class="qotn">${userN}까지 3의 배수의 개수: ${hap}</p>`)



// function addNumbdr(){
//     let num1 = 2;
//     let num2 = 3;
//     let sum = num1 + num2;
//     console.log(`결괏값: ${sum}`)
// }

// addNumbdr();
// addNumbdr();

// var sum = 0;
// function addNumber(){
//     var result;
//     sum = 10 + 20;
//     result = 10 * 20;
// }

// addNumber()
// console.log(sum);
// console.log(result)

// var x = 10;
// function displayNumber(){
//     console.log(`x is ${x}`);
//     console.log(`y is ${y}`);
//     var y = 20;
// }

// displayNumber();


// var a = 3;
// var a = 5;
// console.log(a);

// let b = 4;
// b = 5;


// function multiple(a, b = 5, c = 10){
//     return a * b + c;
// }

// console.log(multiple(5, 10, 20));
// console.log(multiple(10, 20));
// console.log(multiple(30));


// let sum = function(a, b){
//     return a + b;
// }
// console.log(`함수 실행 결과: ${sum(10, 20)}`)


let sum = (a, b) => a + b;
console.log(`함수 실행 결과: ${sum(10, 20)}`)

// (function(a, b){
//     sum = a + b;
// }(100, 200));

// console.log(`함수 실행 결과: ${sum}`)