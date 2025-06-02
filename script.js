  function getQuestions() {
      return [
        ["What is the capital of France?", "Paris"],
        ["2 + 2 = ?", "4"],
        ["What color is the sky during the day?", "blue"],
        ["What is the third letter of the alphabet?", "C"],
        ["How many legs does a spider have?", "8"],
        ["What city has the Statue of Liberty?", "New York"],
        ["How long is 10/2?", "5"],
        ["What planet is closest to the Sun?", "Mercury"],
        ["What animal says 'meow'?", "cat"],
        ["What day of the week is it today?", "monday"],
        ["What is created when you suddenly cool down lava?", "obsidian"],
        ["In which country was gunpowder invented?", "China"],
        ["Who is the richest man on Earth?", "Elon"],
        ["Who is the best golfer?", "Scheffler"],
        ["Which Minecraft mob is the WORST?", "phantom"],
        ["Which Fortnite Marvel skin is the best?", "Deadpool"],
        ["What is the capital of Japan?", "Tokyo"],
        ["Who directed the movie 'Titanic'?", "James Cameron"],
        ["What color do you get when you mix red and blue?", "Purple"],
        ["Which planet is known as the Red Planet?", "Mars"],
        ["What is 7 multiplied by 6?", "42"]
      ];
    }

    let quiz = getQuestions();
    let current = 0;
    let score = 0;
    let typed = "";
    let activeInput = false;

    function showQuestion() {
      let questBox = document.querySelector(".Quest");
      let ansBox = document.querySelector(".answerContainer");
      questBox.textContent = quiz[current][0];
      ansBox.innerHTML = "";
      let input = document.createElement("input");
      input.type = "text";
      input.readOnly = true;
      ansBox.appendChild(input);
      typed = "";
      activeInput = input;
    }

    document.querySelector(".start").onclick = function () {
      current = 0;
      score = 0;
      document.querySelector(".result").textContent = "";
      showQuestion();
    };

    document.querySelectorAll(".keyboard p").forEach(function (key) {
      key.onclick = function () {
        if (!activeInput) return;

        let val = key.textContent;
        if (val === "Backspace") {
          typed = typed.slice(0, -1);
        } else {
          typed += val;
        }

        activeInput.value = typed;

        let answer = quiz[current][1];
        if (typed.length >= answer.length) {
          if (typed.trim().toLowerCase() === answer.trim().toLowerCase()) {
            score++;
          }
          current++;
          if (current < quiz.length) {
            setTimeout(showQuestion, 300);
          } else {
            document.querySelector(".Quest").textContent = "Quiz completed!";
            document.querySelector(".answerContainer").innerHTML = "";
            document.querySelector(".result").textContent = "Correct answers: " + score;
          }
        }
      }
    });
