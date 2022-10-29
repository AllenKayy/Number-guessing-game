 // temper justice with mercy, i'm a complete beginner😪😭 

let userName, message, anotherMessage;

userName = prompt("Hi, please input your username");

console.log(`Hi ${userName}, Welcome to my number guessing game!`);

message = "Today, i will think of a number, and you will predict it. Exciting right? "

anotherMessage = "You have 3 lives and for each correct pediction, you will move up a level. yaay..."

console.log(message);

let popUp , minRange, maxRange, userLevel, userPoints, noOfLives; 
popUp = prompt("Press enter..");

console.log(anotherMessage);

popUp = prompt("Press enter..");
console.log("Let's do this");

minRange = 1;
//maxRange = 2;
userLevel = 1;
userPoints = 0;
noOfLives = 3;

  function play() {
    for (let i = 2; i < 10; i++){
      const answer = Math.floor(Math.random() *i) + 1;
      let userGuess = parseInt(prompt(`Enter a number between ${minRange} and ${i}`));
      
    if (userGuess < minRange || userGuess > i){
       prompt(`Please enter a number between ${minRange} and ${i}`);
    }
    else if (userGuess < answer){
        --noOfLives;
      prompt("Your guess is too low, guess higher😪..");
    } else if (userGuess > answer){
        --noOfLives;
        prompt("Your guess is too high, guess lower🤭..");
    } else if (userGuess == answer){
        --noOfLives;
        prompt("Yaaay you got my number right !!😍");
      popUp = prompt("Press enter..");
    } else if (noOfLives <= 0) {
      console.log("You've run out of lives, better luck next time😭");
      console.log("Press Control+C to exit the game");
    return;
    }
  }
}
play()

