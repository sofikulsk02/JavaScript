//it will count the date from 1 jan 1970
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023
console.log(myCreatedDate.toLocaleString());

let myTimeStap = Date.now();

console.log(myTimeStap); //miliSecond time
console.log(myCreatedDate.getTime()); //miliSecond time

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString("default ", {
  weekday: "long",
});
