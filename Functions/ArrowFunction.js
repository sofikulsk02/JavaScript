const user = {
  username: "rajib sk",
  id: 22,
  wellcome: function () {
    console.log(`${this.username},wellcome to our website`);
  },
};
user.username = "asif";
console.log(user.wellcome());

const Addition = () => {
  console.log("This is an arrow function");
};

console.log(Addition());

const sub = (num1, num2) => {
  return num1 - num2;
};

const result = sub(88, 21);
console.log(result);
