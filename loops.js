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
let bobsFollowers = ['Isaac', 'David', 'Miracle', 'Shadrack'];
let tinasFollowers = ['Mathew', 'Isaac', 'David'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}


  
   
  