// The for loop
for (let counter = 5; counter <= 10; counter++) {
    console.log(counter);
  }
  
 // The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--) {
    console.log(counter);
  }
  
  // Looping through Arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`);
}

// Nested Loops
let bobsFollowers = ['Benja', 'Emma', 'Miracle', 'Shadrack'];
let tinasFollowers = ['Mathew', ' Benja', 'Emma'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

// The While loop
const cards = ['diamond', 'spade', 'heart', 'club']
let currentCard;

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// Do...While Statements
let cupsOfSugarNeeded = 2;
let cupsAdded = 0;

// do {
//   cupsAdded = cupsAdded + 1; 
//   cupsAdded++;
// } while (cupsAdded < cupsOfSugarNeeded)
//   console.log(cupsAdded);

  do {
 cupsAdded++
 console.log(cupsAdded + ' cup was added') 
} while (cupsAdded < cupsOfSugarNeeded);

// The break Keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i])
  if (rapperArray[i] === "Notorious B.I.G.") {
  break;
}
}
 console.log("Notorious B.I.G.");
console.log("And if you don't know, now you know.");



   
  