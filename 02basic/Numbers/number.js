const score = 400;
console.log(score);

const balance = new Number(100); //specially it's telling that it's a number
console.log(balance);
console.log(balance.toString()); //by converting the number into string we can use properties of strings
console.log(balance.toString().length); //length of the string
console.log(balance.toFixed(2)); //it will help to give value after the decimal

const otherNumber = 23.9786;

console.log(otherNumber.toPrecision(3)); //important it will only give priorties before the decimal

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); //it will convert the number into indian number system with the help of commas
