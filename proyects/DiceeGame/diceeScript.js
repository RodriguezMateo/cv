function diceeThrow() {
    var dicee = Math.floor(Math.random() * 6 + 1);
    return dicee;
}

var btn = document.querySelector(".btn");
btn.onclick = function(){
// Tirar Dados
var d1 = diceeThrow();
document.querySelector(".img1").src = "images/dice" + d1 + ".png";
var d2 = diceeThrow();
document.querySelector(".img2").src = "images/dice" + d2 + ".png";

// Chequear ganador
if (d1 > d2){
    document.querySelector("h1").innerText = "Player 1 Wins";
} else if (d1 < d2) {
    document.querySelector("h1").innerText = "Player 2 Wins";
} else {
    document.querySelector("h1").innerText = "It's a tie";
}
}

