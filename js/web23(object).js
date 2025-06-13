let start = new Date('2025-05-01'); 
let now = new Date();

let pass_day = now.getTime() - start.getTime();
pass_day = Math.round(pass_day /1000/60/60/24);
document.getElementById('day').innerText = pass_day