"use strict";
/*select an element:
console.log(document.querySelector(".message").textContent);
//Document object model :structure representation of html documents allows js to access html elements and styles to manipulate.
document.querySelector(".message").textContent = "Correct Number!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 23;
document.querySelector(".guess").value; //to get the input value*/

let secret = Math.trunc(Math.random() * 20) + 1; //(0-1)so *2 and +1 for 19.999=20;
let score = 20; //it should bw outside not inside
let highest = 0;
const dispaly = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  //reacts to an action that happens on the website
  const guess = Number(document.querySelector(".guess").value); //javascript engine calls the fun as soon as the event happens
  console.log(guess, typeof guess); //the values taken from the user interfaces are string
  if (!guess) {
    //when no number is entered
    dispaly("No Number❗");
  } else if (guess === secret) {
    //when user wins
    //document.querySelector(".message").textContent = "Correct❗✌";
    dispaly("Correct❗✌");
    document.querySelector(".number").textContent = secret;

    document.querySelector("body").style.backgroundColor = "#60b347"; //css manipulation-camel case
    document.querySelector(".number").style.width = "30rem"; //always use ""
    if (score > highest) {
      highest = score;
      document.querySelector(".highscore").textContent = highest; //always keep a record of it outside the event
    }
  } else {
    /*when the guess is wrong
    document.querySelector(".message").textContent =
      guess > secret ? "📈Too high!" : "📉Too low!";*/
    dispaly(guess > secret ? "📈Too high!" : "📉Too low!");
    if (score > 0) {
      score--;
      document.querySelector(".score").textContent = score;
    }
    // document.querySelector(".message").textContent = "🧨 You Lost the Game!";
    else dispaly("🧨 You Lost the Game!");
  }
});
document.querySelector(".again").addEventListener("click", function () {
  //restore the values---initials**
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector(".message").textContent = "Start Guessing...";
  dispaly("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
