console.log(addOne(6)); //here i have declared the functon just down but i am able to access the function here because of this type of syntax
function addOne(num) {
  return num + 1;
}

//another exapmle where i can't access the function before the declaration

console.log(addTwo(7)); //if we are holding values in variable then this type of access is not allowed
const addTwo = function (num) {
  return num + 2;
};
