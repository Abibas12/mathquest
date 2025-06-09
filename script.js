let questions = [
    ["What is the capital of France?", "paris"],
    ["2 + 2 = ?", "4"],
    ["What color is the sky during the day?", "blue"],
    ["What is the third letter of the alphabet?", "c"],
    ["How many legs does a spider have?", "8"],
    ["What city has the Statue of Liberty?", "new york"],
    ["How long is 10/2?", "5"],
    ["What planet is closest to the Sun?", "mercury"],
    ["What animal says 'meow'?", "cat"],
    ["What day of the week is it today?", "monday"],
    ["What is created when you suddenly cool down lava?", "obsidian"],
    ["In which country was gunpowder invented?", "china"],
    ["Who is the richest man on Earth?", "elon"],
    ["Who is the best golfer?", "scheffler"],
    ["Which Minecraft mob is the WORST?", "phantom"],
    ["Which Fortnite Marvel skin is the best?", "deadpool"],
    ["What is the capital of Japan?", "tokyo"],
    ["Who directed the movie 'Titanic'?", "james cameron"],
    ["What color do you get when you mix red and blue?", "purple"],
    ["Which planet is known as the Red Planet?", "mars"],
    ["What is 7 multiplied by 6?", "42"]
];

let score = 0;
let usedQuestionIndices = [];
let currentQuestion = null;
let typedAnswer = "";

let startButton = document.getElementById("startButton");
let startScreen = document.querySelector(".start-screen");
let questArea = document.querySelector(".quest-area");
let questText = document.getElementById("questText");
let answerContainer = document.getElementById("answerContainer");
let resultText = document.querySelector(".result");

let answerInput;

startButton.addEventListener("click", startGame);

document.addEventListener("keydown", handleKeyDown);

function startGame() {
    score = 0;
    usedQuestionIndices = [];
    startScreen.style.display = "none";
    questArea.style.display = "flex";
    nextQuestion();
}

function nextQuestion() {
    answerContainer.innerHTML = "";
    resultText.innerHTML = "";
    typedAnswer = "";

    if (usedQuestionIndices.length === questions.length) {
        questText.innerText = "Quiz Done!";
        resultText.innerText = `Score: ${score} / ${questions.length}`;
        startButton.innerText = "Play Again";
        startScreen.style.display = "block";
        questArea.style.display = "none";
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestionIndices.includes(randomIndex));

    usedQuestionIndices.push(randomIndex);
    currentQuestion = questions[randomIndex];

    questText.innerText = currentQuestion[0];

    answerInput = document.createElement("input");
    answerInput.type = "text";
    answerInput.id = "answerInput";
    answerInput.classList.add("answer-input");
    answerInput.readOnly = true;
    answerInput.value = typedAnswer;
    answerContainer.appendChild(answerInput);
}

function handleKeyDown(event) {
    if (questArea.style.display === "flex" && currentQuestion) {
        const key = event.key;
        const correct = currentQuestion[1];

        if (key === "Backspace") {
            typedAnswer = typedAnswer.slice(0, -1);
        } else if (key.length === 1 && /[a-zA-Z0-9 ]/.test(key)) {
            typedAnswer += key;
        }

        answerInput.value = typedAnswer;

        if (typedAnswer.length === correct.length) {
            if (typedAnswer.toLowerCase() === correct.toLowerCase()) {
                answerInput.classList.remove("incorrect");
                answerInput.classList.add("correct");
                resultText.innerText = "Correct!";
                score += 1;
            } else {
                answerInput.classList.remove("correct");
                answerInput.classList.add("incorrect");
                resultText.innerText = "Incorrect.";
            }
            setTimeout(nextQuestion, 1000);
        } else {
            answerInput.classList.remove("correct", "incorrect");
            resultText.innerText = "";
        }
    }
}
