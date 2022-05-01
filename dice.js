function rolldice() {
  var dicenumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  document.getElementById("diceN").innerHTML = dicenumber;
}