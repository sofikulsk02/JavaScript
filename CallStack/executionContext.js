// falsy values
//false ,0, -0, BigInt, 0n, null,undefined,NaN

//truthy values
//"0", 'false'," ",{},function(){}

const user = [];
if (user.length === 0) {
  console.log("The user has no elements");
} else {
  console.log("Hello pw");
}

console.log(user);

const myObj = {};

if (Object.keys(myObj).length === 0) {
  console.log("operator");
} else {
  console.log("important");
}

//Nullish Coalesing operator  (??) :null undefind

let val1;
val1 = 5 ?? 10;
console.log(val1);

//ternary operator
const example = 100;
if (val1) {
}
