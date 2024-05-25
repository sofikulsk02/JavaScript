const myArr = [1, 2, 34, 45];
const myArr2 = [99, 34, 24, 35];
const myResult = myArr.concat(myArr2);
console.log(myResult);

const nums = [...myArr, ...myArr2];
console.log(nums);

const anotherArray = [1, 2, 3, [12, 234, 43], [343, 354], 34, 4, 3, [3, 5]];
const anotherResult = anotherArray.flat(Infinity); //to merge all the arrays into one
console.log("third time:", anotherResult);

//important methods
console.log(Array.isArray("Rajib sk"));
console.log(Array.from("RajibSeikh")); //it will create all the chacters into an array
console.log(Array.from({ name: "rajib" })); //it will show a random empty array
