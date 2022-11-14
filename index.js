// temper justice with mercy, i'm a complete beginner😪😭 

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
console.log("Let's do this");

play();

function play() {
  minRange = 1;
  maxRange = 2;
  userLevel = 1;
  userPoints = 0;
  noOfLives = 3;
  answer = randomNumber();
  
//sconsole.log(`Point = ${userPoints} Level = ${userLevel}`);
  
  conditions();

  function conditions() {
    let userGuess = prompt(`Enter a number between ${minRange} and ${maxRange}`);

    while (userGuess !== answer) {
      if (noOfLives <= 0) {
        userLoose();
        break;
      } else if (Number.isNaN(parseInt(userGuess))) {
        prompt(`Please enter a number between ${minRange} and ${maxRange} 😒..`);
      } else if (userGuess < answer) {
        --noOfLives;
        prompt("Your guess is too low, guess higher😪..");
      } else if (userGuess > answer) {
        --noOfLives;
        prompt("Your guess is too high, guess lower🤭..");
      } else {
        userWin();
        break;
      }
    }
  }
  function userWin() {
    console.log("Yaaay you got my number right !!😍");
    console.log(`Point = ${userPoints} Level = ${userLevel}`);
    prompt("Press Enter...");
    userLevel++;
    userPoints++;
    maxRange++;
    answer = randomNumber();

    //noOfLives = 3 + Math.floor(userLevel / 3);

    conditions();
  }

  function userLoose() {
    console.log("You've run out of lives, better luck next time😭");
    console.log(`Point = ${userPoints} Level = ${userLevel}`);
    console.log("Press Control+C to exit the game");
    return;
  }

  function randomNumber() {
    return Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
  }
}
