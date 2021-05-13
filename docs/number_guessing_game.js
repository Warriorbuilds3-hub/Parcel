let randomnumber = Math.floor(Math.random() * 100) + 1;
      
const guesses = document.querySelector('.guesses');
const lastresult = document.querySelector('.lastresult');
const loworhi = document.querySelector('.loworhi');
      
const guessSubmit = document.querySelector('.guessSubmit');
const guessfield = document.querySelector('.guessfield');
      
let guesscount = 1;
let resetbutton;
      
function checkguess() {
  let userGuess = Number(guessfield.value);
  if (guesscount === 1) {
    guesses.textContent = "Previous Guesses: ";
  }
  guesses.textContent += userGuess + ' ';
        
  if (userGuess === randomnumber) {
    lastresult.textContent = "Congrats! You got it right!";
    lastresult.style.backgroundColor = 'green';
    loworhi.textContent = '';
    setGameOver();
  } else if (guesscount === 10) {
    lastresult.textContent = "Game Over!";
    setGameOver();
  } else {
    lastresult.textContent = "Incorrect!";
    lastresult.style.backgroundColor = "red;
    if (userguess > randomnumber) {
      loworhi.textContent = "Your guess was too high!"; 
    } else if (userguess < randomnumber) {
      loworhi.textContent = "Your guess was too low!"; 
    }
  }
  guesscount++;
  guessfield.value = '';
  guessfield.focus;
}
      
guessSubmit.addEventListener('click', checkguess);
      
function setGameOver() {
  guessfield.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("Button");
  resetButton.textContent = "Start New Game?";
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame)
}
      
function resetGame() {
  guesscount = 1;
        
  const resetparas = document.querySelectorAll(".resultParas p");
   for (let i = 0 ; i < resetparas.length ; i++) {
     resetparas[i].textContent = '';
   }
        
   resetButton.parentNode.removeChild(resetButton);
        
   guessfield.disabled = false;
   guessSubmit.disabled = false;
   guessfield.value = '';
   guessfield.focus();
        
   lastresult.style.backgroundColor = "white";
   randomnumber = Math.floor(Math.random() * 100) + 1;
}
