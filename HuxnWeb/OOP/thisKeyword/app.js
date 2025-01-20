console.log(window);

console.log(this); //we are getting the same as window object

console.log(this === window); //it is giving true

window.firstName = "rajib";
console.log(window);

//.............................................

function printThis() {
  return this;
}
const result = printThis();
console.log(result);

const obj = {
  firstName: "rajib",
  lastName: "sk",
  fullNameL: function () {
    return `${this.firstName} ${this.lastName}`; //as this is inside obj so 'this' will refer to this object only
  },
};

const res = obj.fullNameL();
console.log(res); //! it's giving the object of obj

const obJ = {
  firstName: "sofikul",
  lastName: "sk",
  fullName: () => {
    //& the arrow function does not even know what the fuck the arrow function is
    return this;
  },
};

const response = obJ.fullName();
console.log(response); //! it's giving the window object,isn't that crazy, this is because of we are using the arrow function

const person = {
  firstName: "soma",
  lastName: "sultana",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
};

const resFromPerson = person.fullName(); //~ we will get undefined as the result because we are using arrow function and that's why the 'this' will search in the window object as there is anything present like window.firstname and window.lastName as the this keyword will not find anything like this so it will return undefined undefind
console.log(resFromPerson);

// ^ Challnege

const person2 = {
  name: "sofikul sk",
  age: 20,
  greetRegular: function () {
    return `my name is ${this.name} and i'm ${this.age} year's old`;
  },
  greetArrow: () => {
    return `my name is ${this.name} and i'm ${this.age} year's old`;
  },
};

const data1 = person2.greetRegular();
console.log(data1); //getting the actual output
const data2 = person2.greetArrow();
console.log(data2); //getting undefind and undefined
//! the above discussion is very important
