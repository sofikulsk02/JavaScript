// const tinderUser = new Object(); singleton object
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Rajib sk";
tinderUser.isLogedIn = false;

//console.table(tinderUser);
const regularUser = {
  email: "rajibsk@gmail.com",
  fullName: {
    userFullname: {
      firstName: "Sofikul",
      lastName: "sk",
    },
  },
};
console.log(regularUser.fullName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = { obj1, obj2 };
console.log(obj3);
const obj4 = Object.assign({}, obj1, obj2); //good practice
console.log(obj4);
