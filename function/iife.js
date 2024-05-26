//if you want to execute a function immedetely after the declaration of the function
//to remove the polution the global execution

(function chai() {
  console.log("This is a iife");
})(); //semi colon is need it's important

//in arrow function
((name) => {
  console.log(`this is db2 ${name}`);
})("Rajib sk");

(function () {
  console.log("This is something new");
})();
