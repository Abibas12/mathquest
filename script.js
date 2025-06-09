function getQuestions() {
  return [
    ["What is the capital of France?", "Paris"],
    ["2 + 2 = ?", "4"],
    ["What color is the sky during the day?", "blue"],
    ["What is the third letter of the alphabet?", "c"], 
    ["How many legs does a spider have?", "8"],
    ["What city has the Statue of Liberty?", "York"],
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
    ["Who directed the movie 'Titanic'?", "Cameron"],
    ["What color do you get when you mix red and blue?", "purple"], 
    ["Which planet is known as the Red Planet?", "Mars"],
    ["What is 7 multiplied by 6?", "42"]
  ];
}

let quizQuestions = getQuestions();
let used = [];
let score = 0;
let typed = "";
let currentQ = null;

const startBtn = document.getElementById("startButton");
const questText = document.getElementById("questText");
const answerContainer = document.getElementById("answerContainer");
const result = document.querySelector(".result");
const keys = document.querySelectorAll(".keyboard .key");
const startScreen = document.querySelector(".start-screen");
const questArea = document.querySelector(".quest-area");

startBtn.onclick = function () {
  startScreen.style.display = "none";
  questArea.style.display = "block";
  score = 0;
  used = [];
  nextQuestion();
};

function nextQuestion() {
  answerContainer.innerHTML = "";
  result.textContent = "";
  typed = "";

  if (used.length === quizQuestions.length) {
    questText.textContent = "Quiz completed!";
    result.textContent = "Correct answers: " + score + " of " + quizQuestions.length;
    startBtn.textContent = "Play Again";
    startScreen.style.display = "block";
    questArea.style.display = "none";
    return;
  }

  let index;
  do {
    index = Math.floor(Math.random() * quizQuestions.length);
  } while (used.includes(index));
  used.push(index);

  currentQ = quizQuestions[index];
  questText.textContent = currentQ[0];

  const input = document.createElement("input");
  input.type = "text";
  input.readOnly = true;
  input.className = "answer-input";
  answerContainer.appendChild(input);
}

keys.forEach(button => {
  button.onclick = () => {
    const key = button.dataset.key;
    const input = document.querySelector(".answer-input");
    if (!input) return;

    if (key === "Backspace") {
      typed = typed.slice(0, -1);
    } else {
      typed += key;
    }

    input.value = typed;
    const correct = currentQ[1];

    if (typed.length === correct.length) {
      if (typed.toLowerCase() === correct.toLowerCase()) {
        input.classList.add("correct");
        score++;
      } else {
        input.classList.add("incorrect");
      }
      setTimeout(nextQuestion, 1000);
    }
  };
});
