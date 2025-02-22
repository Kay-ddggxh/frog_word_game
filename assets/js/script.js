let correctAnswer = "BOARD";
let attempts = 0;

function checkAnswer() {
  const userGuess = document
    .getElementById("guess-input")
    .value.trim()
    .toUpperCase();
  const resultMessage = document.getElementById("result-message");
  attempts++;

  document.getElementById(`attempt${attempts}`).style.backgroundColor = "red";

  if (userGuess === correctAnswer) {
    document.getElementById("frog").style.left = "50%";
    document.getElementById("lily-pad").innerText = "🌿";
    resultMessage.innerText = "Correct! The frog leaps to safety!";
    resultMessage.style.color = "green";
  } else if (attempts >= 5) {
    resultMessage.innerText = "The frog gets swept upriver! Try again.";
    resultMessage.style.color = "red";
    resetGame();
  } else {
    resultMessage.innerText = `Wrong! Attempt ${attempts} of 5.`;
    resultMessage.style.color = "orange";
  }
}

function resetGame() {
  attempts = 0;
  document.getElementById("guess-input").value = "";
  document.getElementById("lily-pad").innerHTML =
    '<input type="text" id="guess-input" placeholder="GUESS">';
  document.getElementById("result-message").innerText = "";
  for (let i = 1; i <= 5; i++) {
    document.getElementById(`attempt${i}`).style.backgroundColor = "gray";
  }
}
