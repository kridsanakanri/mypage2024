let score1 = 0;
let score2 = 0;


function checkAnswer(answer) {
    const result = document.getElementById('result1');
    if (answer === 'a') {
        score1 = 1;
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
    } else {
        score1 = 0;

        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    
}
function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    if (answer === 'd') {
        score2 = 1;
        result.textContent = "ถูกต้อง ชื่อย่อของโรงเรียนสายธรรมจันทร์ คือ ส.ธ.จ";
        result.style.color = 'green';
    } else {
        score2 = 0;
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    
}
function checkfinish() {
    let totalscore = score1 + score2;
    alert("คะแนนรวม " + totalscore);
}
