//for of
const arr = [1, 2, 4, 5, 6];

for (const num of arr) {
  console.log(num);
}

const greetings = "hello world";
for (const greet of greetings) {
  console.log(greet);
}

//maps

const map = new Map();

map.set("IN", "india");
map.set("Usa", "America");
map.set("ca", "canada");
console.log(map);

for (const i of map) {
  console.log(i);
}
