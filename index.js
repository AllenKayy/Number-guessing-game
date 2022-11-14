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

// function play() {
//   minRange = 1;
//   maxRange = 2;
//   userLevel = 1;
//   userPoints = 0;
//   noOfLives = 3;
//   answer = randomAnswer();

//   conditions();

//   function conditions() {
//     let userGuess = parseInt(prompt(`Enter a number between ${minRange} and ${maxRange}`));
//     /** for (let i = 2; i < 10; i++) {
//        const answer = Math.floor(Math.random() * i) + 1;
//        let userGuess = parseInt(prompt(`Enter a number between ${minRange} and ${i}`));*/

//     while (userGuess !== answer) {
//       if (noOfLives <= 0) {
//         userLoose();
//         //break;
//       } else if (Number.isNaN(userGuess)) {
//         prompt(`Please enter a number between ${minRange} and ${maxRange} 😒..`);
//       } else if (userGuess < answer) {
//         prompt("Your guess is too low, guess higher😪..");
//       } else if (userGuess > answer) {
//         prompt("Your guess is too high, guess lower🤭..");
//       } else {
//         userWin();
//         //break;
//         //console.log("Press Control+C to exit the game");
//       }
//     }
//   }

//   function userWin() {
//     console.log("Yaaay you got my number right !!😍");
//     prompt("Press Enter...");
//     userLevel++;
//     userPoints++;
//     maxRange++;
//     //console.log(userPoints, userLevel);
//     answer = randomAnswer();

//     conditions();

//   }

//   function userLoose() {
//     console.log("You've run out of lives, better luck next time😭");

//     console.log(userPoints + userLevel);
//     return;
//   }

//   function randomAnswer() {
//     return Math.floor(Math.random() * maxRange) + 1;
//   }
// }


function play() {
  minRange = 1;
  maxRange = 2;
  userLevel = 1;
  userPoints = 0;
  noOfLives = 3;
  answer = randomNumber();

  conditions();

  function conditions() {
    let userGuess = parseInt(prompt(`Enter a number between ${minRange} and ${maxRange}`));

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
    answer = randomNumberNumber();

    noOfLives = 3 + Math.floor(userLevel / userPoin);

    conditions();
  }

  function userLoose() {
    console.log("You've run out of lives, better luck next time😭");
    console.log(`Point = ${userPoints} Level = ${userLevel}`);
    console.log("Press Control+C to exit the game");
    return;
  }

  function randomNumber() {
    return Math.floor(Math.random() * maxRange) + 1 ;
  }
}
play()