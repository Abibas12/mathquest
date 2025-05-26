  let questionsList = [
    "What is the capital of France?", "2 + 2 = ?", "What color is the sky during the day?",
    "What is the third letter of the alphabet?", "How many legs does a spider have?",
    "What city has the Statue of Liberty?", "How long is 10/2?", "What planet is closest to the Sun?",
    "What animal says 'meow'?", "What day of the week is it today?", "What is created when you suddenly cool down lava?",
    "In which country was gunpowder invented?", "Who is the richest man on Earth?",
    "Who is the best golfer?", "Which Minecraft mob is the WORST?",
    "Which Fortnite Marvel skin is the best?", "What is the capital of Japan?",
    "Who directed the movie 'Titanic'?", "What color do you get when you mix red and blue?",
    "Which planet is known as the Red Planet?", "What is 7 multiplied by 6?"
  ];

  let answersList = [
    "Paris", "4", "blue", "C", "8", "New York", "5", "Mercury", "cat", "monday",
    "obsidian", "China", "Elon", "Scheffler", "phantom", "Deadpool", "Tokyo", "James Cameron",
    "Purple", "Mars", "42"
  ];

  let step = 0;
  let score = 0;
  let currentAnswer = "";

  let keyboardBox = document.querySelector(".keyboard");
  let keyButtons = keyboardBox.querySelectorAll("p");

  document.querySelector(".start").addEventListener("click", function () {
    step = 0;
    score = 0;
    currentAnswer = "";
    document.querySelector(".result").textContent = "";
    showQuestionStep();
  });

  function showQuestionStep() {
    let questionBox = document.querySelector(".Quest");
    let inputZone = document.querySelector(".answerContainer");
    inputZone.innerHTML = "";

    if (step >= questionsList.length || questionsList[step] === "") {
      questionBox.textContent = "Quiz completed!";
      document.querySelector(".result").textContent = "Correct answers: " + score;
      return;
    }

    questionBox.textContent = questionsList[step];
    let input = document.createElement("input");
    input.type = "text";
    input.readOnly = true;
    inputZone.appendChild(input);
    currentAnswer = "";

    keyButtons.forEach(function (keyElement) {
      keyElement.onclick = function () {
        if (!input) return;

        let char = keyElement.textContent;

        if (char === "Backspace") {
          currentAnswer = currentAnswer.slice(0, -1);
        } else {
          currentAnswer += char;
        }

        input.value = currentAnswer;

        let expectedAnswer = answersList[step];
        if (
          currentAnswer.length >= expectedAnswer.length &&
          currentAnswer.trim().toLowerCase() === expectedAnswer.trim().toLowerCase()
        ) {
          score += 1;
          step += 1;
          setTimeout(showQuestionStep, 400);
        } else if (currentAnswer.length >= expectedAnswer.length) {
          step += 1;
          setTimeout(showQuestionStep, 400);
        }
      };
    });
  }
