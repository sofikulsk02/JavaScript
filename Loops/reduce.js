const myNum = [1, 2, 3];
let initialValue = 0;
const myTotal = myNum.reduce((acc, curr) => acc + curr, initialValue);
console.log(myTotal);

const mySum = myNum.reduce((acc, curr) => {
  console.log(`acc:${acc} and curr:${curr}`);
  return acc + curr;
}, initialValue);

console.log(mySum);
