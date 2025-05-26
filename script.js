let questions = [
"What is the capital of France?", 
"2 + 2 = ?", 
"What color is the sky during the day?",
"What is the third letter of the alphabet?",
"How many legs does a spider have?", 
"What city have Statue of Liberty?", 
"How long is 10/2?",
"What planet is closest to the Sun?", 
"What animal says 'meow'?",
"What day of the week is it today?",
"What creates when you suddenly cool down lava?",
"In which country do gunpowder was invented?",
"Who is the richest man on the Earth?",
"Who is the best golfer?",
"Which Minecraft mob is the WORST?", 
"Which Fortnite Marvel skin is the best?",
"What is the capital of Japan?",
"Who directed the movie 'Titanic'?",
"What color do you get when you mix red and blue?",
"Which planet is known as the Red Planet?",
"What is 7 multiplied by 6?"
];

let answers = [
"Paris", "4", "blue", "C", "8", "New York", "5", "Mercury", "cat", "monday",
"obsidian", "China", "Elon", "Scheffler", "phantom", "Deadpool","Tokyo","James Cameron","Purple","Mars","42"
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let answerInput = null;

let keyboard = document.querySelector(".keyboard");
  let keys = [];

  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < chars.length; i++) {
    let key = document.createElement("p");
    key.className = "alphabet";
    key.textContent = chars[i];
    keyboard.appendChild(key);
    keys.push(key);
  }

  let backspace = document.createElement("p");
  backspace.className = "alphabet";
  backspace.textContent = "Backspace";
  keyboard.appendChild(backspace);
  keys.push(backspace);

  document.querySelector(".start").addEventListener("click", () => {
    correctAnswers = 0;
    currentQuestionIndex = 0;
    document.querySelector(".result").textContent = "";
    showQuestion();
  });

  function showQuestion() {
    let questionBox = document.querySelector(".Quest");
    if (currentQuestionIndex >= questions.length || questions[currentQuestionIndex] === "") {
      questionBox.textContent = "Тест завершено!";
      document.getElementById("answerContainer").innerHTML = "";
      document.querySelector(".result").textContent = "Правильних відповідей: " + correctAnswers;
      return;
    }
