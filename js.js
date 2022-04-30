var e = new Date(), igrac1, igrac2, pocz;
var a = f = prompt("Starting Life Points");
m = prompt("Name of Player 1");
n = prompt("Name of Player 2");
document.getElementById("player1").innerHTML = m;
document.getElementById("player2").innerHTML = n;
document.getElementById("zivotni1").innerHTML = a;
document.getElementById("zivotni2").innerHTML = f;
function oduzimanje() {
    var b = parseInt(prompt("Number"));
    var d = parseInt(a);
    document.getElementById("zivotni1").innerHTML = a = b + d;
}
function oduzimanje1() {
    var g = parseInt(prompt("Number"));
    var h = parseInt(f);
    document.getElementById("zivotni2").innerHTML = f = g + h;
}