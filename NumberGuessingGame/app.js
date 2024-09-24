const minNumb = 1;
const maxNumb = 100;
const answer = Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb;

let attempts = 0;
let guess;
let isRuning = true;

while (isRuning) {
  guess = window.prompt(`Guess a number between ${minNumb} - ${maxNumb}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please insert a valid number");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("TOO LOW! TRY AGAIN!");
    } else if (guess > answer) {
      window.alert("TOO HIGH! TRY AGAIN!");
    } else {
      window.alert(
        `CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`
      );
      isRuning = false;
    }
  }
}
