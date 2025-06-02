function getQuestions() {
    return [
        ["What is the capital of France?", "Paris"],
        ["2 + 2 = ?", "4"],
        ["What color is the sky during the day?", "blue"],
        ["What is the third letter of the alphabet?", "c"], 
        ["How many legs does a spider have?", "8"],
        ["What city has the Statue of Liberty?", "New York"],
        ["How long is 10/2?", "5"],
        ["What planet is closest to the Sun?", "Mercury"],
        ["What animal says 'meow'?", "cat"],
        ["What day of the week is it today?", "Monday"],
        ["What is created when you suddenly cool down lava?", "obsidian"],
        ["In which country was gunpowder invented?", "China"],
        ["Who is the richest man on Earth?", "Elon"], 
        ["Who is the best golfer?", "Scheffler"],
        ["Which Minecraft mob is the WORST?", "phantom"],
        ["Which Fortnite Marvel skin is the best?", "Deadpool"],
        ["What is the capital of Japan?", "Tokyo"],
        ["Who directed the movie 'Titanic'?", "James Cameron"],
        ["What color do you get when you mix red and blue?", "purple"], 
        ["Which planet is known as the Red Planet?", "Mars"],
        ["What is 7 multiplied by 6?", "42"]
    ];
}
let quizQuestions = getQuestions();
let currentQuestionIndex = 0;
let score = 0;
let typedAnswer = "";
let currentAnswerInput = null; 
const startButton = document.getElementById("startButton");
const startScreen = document.querySelector(".start-screen"); 
const questArea = document.querySelector(".quest-area");    
const questTextElement = document.getElementById("questText"); 
const answerInputContainer = document.getElementById("answerContainer");
const resultDisplay = document.querySelector(".result");
const keyboardButtons = document.querySelectorAll(".keyboard button.key");
function showQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        const [question, correctAnswer] = quizQuestions[currentQuestionIndex];

        questTextElement.textContent = question;
        answerInputContainer.innerHTML = ""; 

        const input = document.createElement("input");
        input.type = "text";
        input.readOnly = true; 
        input.classList.add('answer-input'); 
        answerInputContainer.appendChild(input);
        currentAnswerInput = input; 
        typedAnswer = ""; 
        currentAnswerInput.value = typedAnswer;
    } else {
        endQuiz();
    }
}
function checkAnswer() {
    if (!currentAnswerInput) return; 
    const correctAnswer = quizQuestions[currentQuestionIndex][1];
    if (typedAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
        score++;
        currentAnswerInput.classList.remove('incorrect');
        currentAnswerInput.classList.add('correct'); 
        setTimeout(goToNextQuestion, 500); 
    } else {
        currentAnswerInput.classList.add('incorrect');
    }
}
function goToNextQuestion() {
    currentQuestionIndex++;
    currentAnswerInput.classList.remove('correct', 'incorrect');
    showQuestion();
}
function endQuiz() {
    questTextElement.textContent = "Quiz completed!";
    answerInputContainer.innerHTML = ""; // Clear input field
    resultDisplay.textContent = `Correct answers: ${score} out of ${quizQuestions.length}`;
    startButton.textContent = "Play Again";
    startScreen.style.display = 'block'; 
    questArea.style.display = 'none';   
}
startButton.addEventListener("click", function () {
    currentQuestionIndex = 0;
    score = 0;
    resultDisplay.textContent = ""; 
    startScreen.style.display = 'none'; 
    questArea.style.display = 'block';   
    showQuestion();
});
keyboardButtons.forEach(function (keyButton) {
    keyButton.addEventListener("click", function () {
        if (!currentAnswerInput) return; 
        const keyValue = keyButton.dataset.key; 
        if (keyValue === "Backspace") {
            typedAnswer = typedAnswer.slice(0, -1);
        } else {
            typedAnswer += keyValue;
        }
        currentAnswerInput.value = typedAnswer;
        const correctAnswer = quizQuestions[currentQuestionIndex][1];
        if (typedAnswer.length === correctAnswer.length) {
            checkAnswer();
        } else if (typedAnswer.length > correctAnswer.length) {
            currentAnswerInput.classList.add('incorrect');
            setTimeout(goToNextQuestion, 500);
        }
    });
});
questArea.style.display = 'none';
