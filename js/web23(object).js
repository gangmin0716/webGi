// let start = new Date('2025-05-01'); 
// let now = new Date();

// let pass_day = now.getTime() - start.getTime();
// pass_day = Math.round(pass_day /1000/60/60/24);
// document.getElementById('day').innerText = pass_day



// 당첨자 뽑기

// let people = parseInt(prompt("전체 응모자수: "));
// document.getElementById('people').innerText = people;
// let randam = Math.floor((Math.random() * people) +1);
// document.getElementById('randam').innerText = randam;


// 팝업창
const b_left = screenX;
const b_top = screenY;

const p_left = b_left + 100;
const p_top = b_top + 100;

function win() {
    let wini = open('popup.html', '공지', `width=500, height=400, left = ${p_left}, top=${p_top}`)
    if (wini == null){
        alert("팝업이 차단되었습니다.")
    }
}

