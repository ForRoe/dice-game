var obraz1 = document.querySelector(".img1");
var obraz2 = document.querySelector(".img2");

var randomNumber1 = Math.floor(Math.random() * 6) +1;

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) +1;


obraz1.src = "images/dice"+randomNumber1+".png";
obraz2.src = "images/dice"+randomNumber2+".png";

if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} else if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}
