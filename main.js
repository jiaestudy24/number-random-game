// 랜덤번호 지정
// 유저가 번호를 입력한다 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호 < 유저버호 이면 Down!
// 랜덤번호 > 유저번호 이면 up!
// reset 버튼을 누르면 게임이 리셋된다
// 5번의 기회를 다쓰면 게임이 끝난다(더 이상 추측불가, 버튼이 disable)
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깎지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깎지 않는다.

let computerNum = 0;
let playButton = document.getElementById("play-button");
console.log(playButton)
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history=[];

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus", function(){userInput.value=""});

function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답",computerNum);
}


function play() {
    console.log("게임시작!")
    let userValue = userInput.value;

    if(userValue<1 || userValue>100) {
        resultArea.textContent="1과 100 사이 숫자를 입력해주세요.";
        return;
    }

    if(history.includes(userValue)) {
        resultArea.textContent="이미 입력한 숫자입니다! 다른 숫자를 입력해주세요";
        return;
    }
    chances --;
    chanceArea.textContent=`남은 기회 :${chances}번`;
    console.log("chance",chances);

    console.log(userValue);
    if(userValue < computerNum) {
        resultArea.textContent = "up!!"
        
    }else if(userValue > computerNum) {
        resultArea.textContent = "down!!"
        
    }else {
        
        resultArea.textContent = "맞췄습니다!!"
        gameOver = true;
    }

    history.push(userValue);
    console.log(history);


    if(chances<1) {
        gameOver = true;
    }

    if(gameOver==true) {
        playButton.disabled = true;
    }
}



function reset() {
    userInput.value ="";
    pickRandomNum();

    resultArea.textContent = "결과값이 여기 나옵니다~";

}

pickRandomNum();