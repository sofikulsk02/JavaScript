//* Built-in constructors, also known as native constructors, are standard constructors provided by JavaScript that allow you
//*to create objects of various data types. These constructors are available globally and do not need to be explicitly defined.
//* They provide a convenient way to create instances of primitive data types and built-in objects.

const num1 = new Number(10); //^object
const num2 = 10; //^ number
console.log(typeof num2);
console.log(typeof num1);

const str1 = new String("soma sultana"); //^ built in string constructor
console.log(str1);

const bool1 = new Boolean(false);
console.log(bool1);

const arr1 = new Array(1, 2, 3, 4);
console.log(arr1);

console.log(typeof arr1); //^ object

// & The Object.create() method creates a new object ,using an existing as the
// & object as the prototype of the newly created object

let person = {
  greet: function () {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
    //! we are initializing firstName and lastName
  },
};

const rajib = Object.create(person);
rajib.firstName = "rajib";
rajib.lastName = "sk";
rajib.greet();

let soma = Object.create(person, {
  firstName: { value: "soma" },
  lastName: { value: "sultana" },
});

soma.greet();
