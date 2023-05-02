let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = '';

if (age > 18 && registeredEarly) {
  console.log(`You will race at 9:30am with race number ${raceNumber += 1000}.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`You will race at 11:00am with race number ${raceNumber += 1000}.`);
} else if (age < 18){
  console.log(`You will race at 12:30pm with rance number ${raceNumber}.`);
} else {
  console.log('See the registration desk.')
}