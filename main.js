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

playButton.addEventListener("click",play)

function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답",computerNum);
}


function play() {
    console.log("게임시작!")
    let userValue = userInput.value;
    console.log(userValue);
    if(userValue < computerNum) {
        resultArea.textContent = "up!!"
        
    }else if(userValue > computerNum) {
        resultArea.textContent = "down!!"
        
    }else {
        
        resultArea.textContent = "맞췄습니다!!"
    }
}

pickRandomNum();