// Array example
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);

const hobbies = ['Soccer', 'programming', 'music'];

console.log(hobbies);

// Accessing Elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];

console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3])

// Update Elements
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados'


// Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments = ['Mayo'];
console.log(condiments);
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
utensils[3] = 'Spoon'
console.log(utensils)

// The .length property
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

// The .push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('shower', 'sweep')
console.log(chores)


// The .pop() Method
const chore = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chore.pop()
console.log(chore)


// More Array Methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList.slice(1, 4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);