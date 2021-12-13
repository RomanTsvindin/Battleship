function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

let x1 = getRandomInt(0, 5);
let x2 = x1 + 1;
let x3 = x1 + 2;

let location1 = x1;
let location2 = x2;
let location3 = x3;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;
let hit1;
let hit2;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number 0-6):");
  if (guess < 0 || guess > 6) {
    alert('Enter correctly, sucker!');
  } else if(guess == hit1 ||
    guess == hit2) {
      alert('You have hit here already!')
    } else {
    guesses++;
    if (guess == location1 ||
      guess == location2 ||
      guess == location3) {
      alert("HIT!");
      hits++;
      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      } else {
        if (hits <= 1) {
          hit1 = guess;
        } else {
          hit2 = guess;
        }
      }
    } else {
      alert("MISS");
    }
  }
}
alert(`Your accuracy is ${(hits / guesses) * 100} %.`)
