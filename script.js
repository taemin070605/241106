const words = [
    { definition: "오용(남용) 하다", word: "abuse" },
    { definition: "그에 맞춰", word: "accordingly" },
    { definition: "조정하다", word: "adjust" },
    { definition: "알리다", word: "alert" },
    { definition: "대략", word: "approximately" },
    { definition: "측면", word: "aspect" },
    { definition: "붙이다", word: "attach" },
    { definition: "(잠에서) 깨우다", word: "awaken" },
    { definition: "신장시키다, 북돋우다", word: "boost" },
    { definition: "침입", word: "break-in" },
    { definition: "상황, 환경", word: "condition" },
    { definition: "지속적인", word: "continuous" },
    { definition: "위기", word: "crisis" },
    { definition: "현재", word: "currently" },
    { definition: "감지, 탐지", word: "detection" },
    { definition: "당뇨병", word: "diabetes" },
    { definition: "일회용의", word: "disposable" },
    { definition: "배수관", word: "drain" },
    { definition: "전자의", word: "electronic" },
    { definition: "시행하다", word: "implement" },
    { definition: "개입", word: "intervention" },
    { definition: "시작하다", word: "launch" },
    { definition: "조작하다, 처리하다", word: "manipulate" },
    { definition: "단지, 그저", word: "merely" },
    { definition: "습기", word: "moisture" },
    { definition: "낙관적인", word: "optimistic" },
    { definition: "상쾌하게 하다", word: "refresh" },
    { definition: "조절하다", word: "regulate" },
    { definition: "원격으로", word: "remotely" },
    { definition: "전송하다", word: "transmit" },
    { definition: "비용-효율이 좋은", word: "cost-effective" },
    { definition: "방해하다", word: "hinder" },
];

let currentWordIndex = 0;
let score = 0;

document.getElementById("submit-button").addEventListener("click", checkAnswer);
document.getElementById("answer").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

function displayQuestion() {
    document.getElementById("definition").textContent = words[currentWordIndex].definition;
    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = words[currentWordIndex].word.toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById("result").textContent = "정답!";
        document.getElementById("result").className = "correct";
        score += 10;
    } else {
        document.getElementById("result").textContent = "오답입니다. 다시 시도하세요.";
        document.getElementById("result").className = "incorrect";
        score = Math.max(0, score - 5);  // 감점 시 0점 이하로 내려가지 않음
    }

    document.getElementById("score").textContent = `점수: ${score}`;

    if (score >= 100) {
        showCelebration();
    } else {
        nextQuestion();
    }
}

function nextQuestion() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    displayQuestion();
}

function showCelebration() {
    const celebrationDiv = document.getElementById("celebration");
    celebrationDiv.classList.remove("hidden");

    setTimeout(() => {
        celebrationDiv.classList.add("hidden");
        score = 0;  // 점수 초기화
        document.getElementById("score").textContent = "점수: 0";
        currentWordIndex = 0;
        displayQuestion();
    }, 3000);  // 3초 후 축하 메시지 숨기기
}

// 첫 번째 문제 표시
displayQuestion();
