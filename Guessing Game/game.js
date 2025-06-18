
    let randomNumber = parseInt(Math.random() * 100 + 1);

    const submit = document.querySelector("#submit");
    const userInput = document.querySelector("#userInput");
    const guessesSlot = document.querySelector(".guesses");
    const lastResult = document.querySelector(".lastResult");
    const loworHIght = document.querySelector(".low");
    const resultParas = document.querySelector(".resultParas");

    const p = document.createElement("p");

    let prevGeuss = [];
    let NumGuess = 1;

    let playGame = true;

    if (playGame) {
      submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validteGuess(guess);
      });
    }

    function validteGuess(guess) {
      if (isNaN(guess)) {
        alert("please enter a valid number");
      } else if (guess < 1) {
        alert("please enter number more than 1");
      } else if (guess > 100) {
        alert("please enter a number less than 100 ");
      } else {
        prevGeuss.push(guess);

        if (NumGuess === 11) {
          displayGuess(guess);
          displayMassae(
            `Your Guesses Limit Is Over. Random Number is ${randomNumber}`
          );
          endGame();
        } else {
          displayGuess(guess);
          checkGuess(guess);
        }
      }
    }

    function checkGuess(guess) {
      if (guess === randomNumber) {
        displayMassae(`Congraculation you Guess the Number`);
        endGame();
      } else if (guess < randomNumber) {
        displayMassae(`Your Number is low`);
      } else if (guess > randomNumber) {
        displayMassae(`Your Number is High`);
      }
    }

    function displayGuess(guess) {
      userInput.value = "";
      guessesSlot.innerHTML += `${guess}-`;
      NumGuess++;
      lastResult.innerHTML = `${10 - NumGuess}`;
    }

    function displayMassae(massage) {
      loworHIght.innerHTML = `<h2> ${massage}</h2>`;
    }

    function endGame() {
      userInput.value = "";
      userInput.setAttribute("disabled", "");
      p.classList.add("button");
      p.innerHTML = `<h2 id="newGame">Start New Game </h2>`;
      resultParas.appendChild(p);
      playGame = false;
      newGame();
    }

    function newGame() {
      const newGameButton = document.querySelector("#newGame");
      newGameButton.addEventListener("click", function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGeuss = [];
        NumGuess = 1;
        guessesSlot.innerHTML = "";
        lastResult.innerHTML = `${11 - NumGuess}`;
        userInput.removeAttribute("disabled");
        resultParas.removeChild(p);
        playGame = true;
        displayMassae("");
      });
    }
