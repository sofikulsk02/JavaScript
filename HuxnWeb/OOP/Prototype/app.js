//^ Every javascript object has a anonymous property called prototype
//^ Remember functions & arrays are also a object
//^ that prototype will be the parent of that object, prototype property is object by itself, which have some special properties & methods

//! Every object is associated with another object.
//! The object (obj) is associated with [[Prototype]] Object
//! -> which means a object will inherit all properties of Object.prototype || [[Prototype]]

//* We can check the prototype of something in 3 ways:
//* --> obj.__proto__
//* --> obj.constructor.prototype
//* --> Object.getPrototypeOf(a)

const obj = {};
console.log(obj.__proto__);
console.log(obj.__proto__.__proto__);
console.log(obj);

console.log(obj.constructor.prototype);
console.log(Object.getPrototypeOf(obj));

// & Changing the built-in Method:-->not recomendded in real world coding
// like as example we have pop() method which is used to remove the last element from the array,
//so if we want to change the functionality of that method

Array.prototype.pop = function () {
  return "POP IT BABE"; //we have changed the functionality from poping to that text
};

const myArr = [1, 2, 33];
console.log(myArr.pop());

String.prototype.hello = function () {
  //! here we are creating our own hello() method which will convert all smallcase words to upperCase
  console.log(this); //! here 'this' will point towards the prototype object
  console.log(this.toUpperCase());
};

console.log("hello and welcome".hello());
