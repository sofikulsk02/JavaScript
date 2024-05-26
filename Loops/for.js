//for

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("This is the end");
const array = [1, 2, 4, 56, 7, 88, 8];
for (let i = 0; i < array.length; i++) {
  if (array[i] === 5) {
    console.log("5 is the best element");
  }
}
array.forEach((element) => {
  console.log(element);
});
