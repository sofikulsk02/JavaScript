//* A factory function is a type of function that is used to create and return objects.
//* It's a design pattern that provides an alternative way to create objects compared to
// * using constructors and the new keyword.

let soma = {
  firstName: "soma",
  lastName: "sultana",
  fullName: function () {
    return `hello my name is ${this.firstName} ${this.lastName} and i love js`;
  },
};
let rajib = {
  firstName: "rajib",
  lastName: "sk",
  fullName: function () {
    return `hello my name is ${this.firstName} ${this.lastName} and i love js`;
  },
};

//^ the main problem with this approach is if we want to create multiple objects then again agian we have create one by one
// ^ so we can make use of factory function
function createPerson(firstName, lastName, pl) {
  return {
    fisrtName: firstName, //'firstName also works here
    lastName: lastName,
    pl: pl,
    fullName: function () {
      console.log(
        `hello my name is ${this.firstName} ${this.lastName} and i love ${pl}`
      );
    },
  };
}
const naaz = createPerson("naaz", "moon", "c++");
console.log(naaz.fullName()); //will get an undefind also because of two console.log
naaz.fullName(); //* right output

const myself = createPerson("rajib", "sk", "c++");
myself.fullName();

//! challenge
function vehichle(type, brand, model, year) {
  return {
    type: type,
    brand: brand,
    model: model,
    year: year,
  };
}

const honda = vehichle("Car", "Honda", "Carmry", 2020);
console.log(honda);
