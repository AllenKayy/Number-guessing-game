 
let userName, message, anotherMessage;

userName = prompt("Hi, please input your username");

console.log(`Hi ${userName}, Welcome to my number guessing game!`);

message = "Today, i will think of a number, and you will predict it. Exciting right? "

anotherMessage = "You have 3 lives and for each correct pediction, you will move up a level. yaay..."

console.log(message);

let popUp, minRange, maxRange, userLevel, userPoints, noOfLives, answer;
popUp = prompt("Press enter..");

console.log(anotherMessage);

popUp = prompt("Press enter..");
console.log("Let's do this 😃");
prompt("Press enter..");

play();

function play() {
  minRange = 1;
  maxRange = 2;
  userLevel = 1;
  userPoints = 0;
  noOfLives = 3;
  
  console.log(`Point = ${userPoints} Level = ${userLevel}`);
  
  for (let i = 2; i <=10; i++) {
    let answer = Math.floor(Math.random() * maxRange) + 1;
    let userGuess = parseInt(prompt(`Enter a number between ${minRange} and ${maxRange}`));
    
    if (noOfLives <= 0) {
      console.log("You've run out of lives, better luck next time😭");
    console.log(`Point = ${userPoints} Level = ${userLevel}`);
      break;
    console.log("Press Control+C to exit the game");
    } else if (Number.isNaN(parseInt(userGuess))) {
      prompt(`Please enter a number between ${minRange} and ${maxRange} 😒..`);
    } else if (userGuess < answer) {
      prompt("Your guess is too low, guess higher😪..");
    } else if (userGuess > answer) {
      prompt("Your guess is too high, guess lower🤭..");
    } else {
      userWin();
    }
  } 

  function userWin() {
    console.log("Yaaay you got my number right !!😍");
      userPoints++;
      userLevel++;
      maxRange++;
      console.log(`Point = ${userPoints} Level = ${userLevel}`);
      prompt("Press Enter...");
  }
}
