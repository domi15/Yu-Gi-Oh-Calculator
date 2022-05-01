function rollTheDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice").innerHTML = randomNumber1
}