  let questions = [
      "What is the capital of France?", "2 + 2 = ?", "What color is the sky during the day?",
      "What is the third letter of the alphabet?", "How many legs does a spider have?",
      "What city have Statue of Liberty?", "How long is 10/2?", "What planet is closest to the Sun?",
      "What animal says 'meow'?", "What day of the week is it today?", "What creates when you suddenly cool down lava?",
      "In which country do gunpowder was invented?", "Who is the richest man on the Earth?",
      "Who is the best golfer?", "Which Minecraft mob is the WORST?",
      "Which Fortnite Marvel skin is the best?", "What is the capital of Japan?",
      "Who directed the movie 'Titanic'?", "What color do you get when you mix red and blue?",
      "Which planet is known as the Red Planet?", "What is 7 multiplied by 6?"
    ];

    let answers = [
      "Paris", "4", "blue", "C", "8", "New York", "5", "Mercury", "cat", "monday",
      "obsidian", "China", "Elon", "Scheffler", "phantom", "Deadpool", "Tokyo", "James Cameron",
      "Purple", "Mars", "42"
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
        questionBox.textContent = "Quiz completed!";
        document.getElementById("answerContainer").innerHTML = "";
        document.querySelector(".result").textContent = "Correct answers: " + correctAnswers;
        return;
      }

      questionBox.textContent = questions[currentQuestionIndex];
      let container = document.getElementById("answerContainer");
      container.innerHTML = "";

      answerInput = document.createElement("input");
      answerInput.type = "text";
      answerInput.readOnly = true;
      container.appendChild(answerInput);
    }

    keys.forEach(key => {
      key.addEventListener("click", () => {
        if (!answerInput) return;
        let symbol = key.textContent;

        if (symbol === "Backspace") {
          answerInput.value = answerInput.value.slice(0, -1);
        } else {
          answerInput.value += symbol;
        }

        let expected = answers[currentQuestionIndex];
        if (expected && answerInput.value.length >= expected.length) {
          if (answerInput.value.toLowerCase() === expected.toLowerCase()) {
            correctAnswers++;
          }
          currentQuestionIndex++;
          setTimeout(showQuestion, 500);
        }
      });
    });
