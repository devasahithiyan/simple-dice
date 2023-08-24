

var randomvariable = Math.floor(Math.random() * 6) + 1;
var diceimage = "dice"+randomvariable+".png";

var imagesource = "images/"+diceimage;


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imagesource);


var randomvariable2 = Math.floor(Math.random()*6)+1;

var diceimage2= "dice"+randomvariable2+".png";


var randomimage2 = "images/"+diceimage2;


var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimage2);


if(randomvariable > randomvariable2){
  document.querySelector("h1").innerHTML = "Player 1 wins"
} else if( randomvariable < randomvariable2){
    document.querySelector("h1").innerHTML = "Player 2 wins"
} else {
    document.querySelector("h1").innerHTML = "Draw"
}
