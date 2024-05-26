const myNum = [1, 2, 3];
let initialValue = 0;
const myTotal = myNum.reduce((acc, curr) => acc + curr, initialValue);
console.log(myTotal);

const mySum = myNum.reduce((acc, curr) => {
  console.log(`acc:${acc} and curr:${curr}`);
  return acc + curr;
}, initialValue);

console.log(mySum);

const eCommerce = [
  {
    course: "Python",
    price: 999,
  },
  {
    course: "Data scince",
    price: 12999,
  },
  {
    course: "Mobile",
    price: 5999,
  },
  {
    course: "WebDev",
    price: 1299,
  },
];

const taotalBillToPay = eCommerce.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log(taotalBillToPay);
