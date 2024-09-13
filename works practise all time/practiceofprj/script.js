const quesAns = [
    ["4+2 ?", "1", "5", "6", "3", "3"],
    ["4-2 ?", "2", "5", "6", "3", "1"],
    ["4*4 ?", "1", "5", "16", "3", "3"],
    ["4/4 ?", "1", "5", "6", "0", "4"],
    ["4%2 ?", "0", "5", "6", "3", "1"]
];
let x = 0;
let rightans = 0;
let wrongans = 0;
let score = 0;

function printQA() {
    document.getElementById("ques").innerHTML = quesAns[x][0];
    document.getElementById("a1").innerHTML = quesAns[x][1];
    document.getElementById("a2").innerHTML = quesAns[x][2];
    document.getElementById("a3").innerHTML = quesAns[x][3];
    document.getElementById("a4").innerHTML = quesAns[x][4];
}

printQA();  

function submitAns(ans) {
    if (ans == quesAns[x][5]) {
        rightans++;
        score = score + 5;
    } else {
        wrongans++;
    }

    if (x == quesAns.length - 1) {
        document.getElementById("quiz").innerHTML = `
        <h1>Quiz end</h1>
        <p>score : ${score}</p>
        <p>right : ${rightans}</p>
        <p>wrong : ${wrongans}</p>              
        `
    }
    else {
        ++x;
        printQA();
    }

}