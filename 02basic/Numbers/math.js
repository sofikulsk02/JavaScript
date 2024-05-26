console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9));
console.log(Math.sqrt(4));
console.log(Math.max(4, 2, 45, 66));

console.log(Math.random()); //number between 0 and 1;
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * 10) + 10);

const thisMax = 30;
const thismin = 20;
const rajib = Math.floor(Math.random() * (thisMax - thismin + 1) + thismin);

console.log(rajib);
