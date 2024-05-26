const myArr = [0, 1, 2, 3, 4, 5];
const myArr2 = new Array(1, 2, 3, 4, 5);
const myHeoros = ["ironman", "batman"];
myArr.push(8);
console.log(myArr);
console.log(myArr.length);
myArr.unshift(99); //insert at first index
console.log(myArr);
console.log(myHeoros.includes("ironman"));

//slice and splice

console.log("A", myArr);
let myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);

//splice
const myn2 = myArr.splice(1, 3);
console.log("c", myArr);
console.log(myn2);
console.log(typeof Array);
