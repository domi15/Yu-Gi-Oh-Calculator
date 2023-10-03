var e = new Date(), igrac1, igrac2, pocz;
var a = f = prompt("Starting Life Points");
m = prompt("Name of Player 1");
n = prompt("Name of Player 2");
document.getElementById("player1").innerHTML = m;
document.getElementById("player2").innerHTML = n;
document.getElementById("zivotni1").innerHTML = a;
document.getElementById("zivotni2").innerHTML = f;
function oduzimanje() {
    var d = parseInt(prompt("Number"));
    if (Number.isNaN(d)){
        d=0
    }
    var u = parseInt(a);
    document.getElementById("zivotni1").innerHTML = a = u - d;
}
function oduzimanje1() {
    var g = parseInt(prompt("Number"));
    var h = parseInt(f);
    if (Number.isNaN(g)){
        g=0
    }
    document.getElementById("zivotni2").innerHTML = f = h - g;
}