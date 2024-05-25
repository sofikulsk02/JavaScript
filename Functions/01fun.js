function sayMyName() {
  console.log("this is rajib");
}

function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}

//sayMyName();

function addTwoNum(num1, num2) {
  console.log(num1 + num2);
}

const result = addTwoNum(2, 4);
console.log(result); //vvi

const result2 = sum(8, 23);
console.log(result2); // this is very important

function lofinUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter a user name");
    return;
  }
  return `${username} just logged in`;
}

console.log(lofinUserMessage("rajib"));
console.log(lofinUserMessage(""));
console.log(lofinUserMessage()); //very important

const user = {
  username: "Rajib sk",
  userId: 12,
};

const data = {
  price: 12000,
  totalAmout: 30000,
};

const user1 = `the user is ${user.username} and the price is ${data.price}`;
console.log(user1);

const des = { ...user, ...data };
console.log(Object.keys(des));
console.log(Object.values(des));

const myNewArray = [200, 400, 450, 500];
function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
