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
let used = [];
let current = null;
let typed = "";

let startButton = document.getElementById("startButton");
let startScreen = document.getElementById("startScreen");
let questArea = document.getElementById("questArea");
let questText = document.getElementById("questText");
let answerContainer = document.getElementById("answerContainer");
let keyboard = document.getElementById("keyboardArea");
let resultText = document.getElementById("resultText");

startButton.addEventListener("click", startGame);

function startGame() {
  score = 0;
  used = [];
  startScreen.style.display = "none";
  questArea.style.display = "block";
  nextQuestion();
}

function nextQuestion() {
  answerContainer.innerHTML = "";
  resultText.innerHTML = "";
  typed = "";

  if (used.length == questions.length) {
    questText.innerText = "Quiz Done!";
    resultText.innerText = "Score: " + score + " / " + questions.length;
    startButton.innerText = "Play Again";
    startScreen.style.display = "block";
    questArea.style.display = "none";
    return;
  }

  let index;
  do {
    index = Math.floor(Math.random() * questions.length);
  } while (used.includes(index));

  used.push(index);
  current = questions[index];

  questText.innerText = current[0];

  let input = document.createElement("input");
  input.type = "text";
  input.id = "answerInput";
  input.readOnly = true;
  answerContainer.appendChild(input);
}

keyboard.addEventListener("click", function (event) {
  let button = event.target;
  let key = button.getAttribute("data-key");

  if (!key) return;

  let input = document.getElementById("answerInput");
  if (!input) return;

  if (key === "Backspace") {
    typed = typed.slice(0, typed.length - 1);
  } else {
    typed += key;
  }

  input.value = typed;

  let correct = current[1];

  if (typed.length === correct.length) {
    if (typed.toLowerCase() === correct.toLowerCase()) {
      input.style.border = "2px solid green";
      score += 1;
    } else {
      input.style.border = "2px solid red";
    }

    setTimeout(nextQuestion, 1000);
  }
});
