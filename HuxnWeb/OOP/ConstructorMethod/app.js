//& Constructor functions in JavaScript are regular functions
//& used with the new keyword to create and initialize objects
//& with shared properties and methods. They act as blueprints
//& for creating multiple instances of objects with the same
//& structure and behavior.

function CreatePeople(firstName, lastName, pl) {
  (this.firstName = firstName), (this.lastName = lastName), (this.pl = pl);
}

const rajib = new CreatePeople("rajib", "sk", "c++");
console.log(rajib);

// * new KEYWORD
// ^1. first create empty object {}
//^ 2.Sets 'this' to point to that object
//^ 3.we can omit the return statement using 'new' keyword

// !task
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.info = function () {
    return `my name is ${name} and i'm ${age} year's old and i'm a ${gender} `;
  };
}

const data = new Person("soma", 21, "female");
console.log(data.info());

// ! task(level2)
function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.start = function () {
    return `the ${make} ${model} has started it's built in ${year} and has a ${color} color`;
  };
  this.stop = function () {
    return `the ${make} has stopped`;
  };
}

const bmw = new Car("BMW", "20Cf", 1998, "white");

console.log(bmw.start());

//! task3
function scholar(name, age, education, country) {
  this.name = name;
  this.age = age;
  this.country = country;
  this.education = education;
  this.isHafidth = function () {
    console.log(
      `Assalamalekum i'm ${name} from ${country} and i'm ${age} year's old from ${education} university`
    );
  };
}

const mdAli = new scholar("muhhamad ali", 29, "cambridge", "england");
mdAli.isHafidth();
