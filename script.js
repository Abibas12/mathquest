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

    let questionStep = 0;
    let score = 0;
    let answerField;

    let keyboardBlock = document.querySelector(".keyboard");
    let keyButtons = keyboardBlock.querySelectorAll("p");

    document.querySelector(".start").addEventListener("click", function() {
      score = 0;
      questionStep = 0;
      document.querySelector(".result").textContent = "";
      loadQuestion();
    });

    function loadQuestion() {
      let questionBox = document.querySelector(".Quest");
      if (questionStep >= questionsList.length || questionsList[questionStep] === "") {
        questionBox.textContent = "Quiz completed!";
        document.querySelector(".answerContainer").innerHTML = "";
        document.querySelector(".result").textContent = "Correct answers: " + score;
        return;
      }

      questionBox.textContent = questionsList[questionStep];
      let answerBox = document.querySelector(".answerContainer");
      answerBox.innerHTML = "";
      answerField = document.createElement("input");
      answerField.type = "text";
      answerField.readOnly = true;
      answerBox.appendChild(answerField);
    }

    for (let k of keyButtons) {
      k.addEventListener("click", function() {
        if (!answerField) return;
        let keyChar = k.textContent;

        if (keyChar === "Backspace") {
          answerField.value = answerField.value.slice(0, -1);
        } else {
          answerField.value += keyChar;
        }

        let correctAnswer = answersList[questionStep];
        if (correctAnswer && answerField.value.length >= correctAnswer.length) {
          if (answerField.value.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
            score++;
          }
          questionStep++;
          setTimeout(loadQuestion, 500);
        }
      });
    }
