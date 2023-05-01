// Forecast in kelvin
const kelvin = 293;

// Determining celsius
const celsius = kelvin - 273;

// Changing to fahrenheit
const fahrenheit = celsius * (9/5) + 32;

// Rounding down fahrenheit 
fahrenheit == Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

const Newton = celsius * (33/100);
Newton == Math.floor(Newton);
console.log(`The temperature is ${Newton} degrees Fahrenheit.`)


