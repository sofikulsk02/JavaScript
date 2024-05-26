let str1 = "This is a string ";
let str2 = "this is another string";
let str3 = str1 + str2;
console.log(str3);
console.log(`this is a modern way to write a string `);
const gameName = new String("rajib-sk");
console.log(typeof String);
console.log(gameName);
console.log(typeof gameName);

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //checking which character is present at index 2
console.log(gameName.indexOf("j")); //we are finding the index of j here
const newString = gameName.substring(0, 4);
console.log(newString);

const anotherName = gameName.slice(-8, 4);
console.log(anotherName);

const newStringOne = "     rajib sk";
console.log(newStringOne.trim());

const url = "https://rajib.com/rajib%20seikh";
console.log(url.replace("%20", "-")); //replacing %20 with a -
console.log(url.includes("rajib")); //checking if it has anything called rajib or not
console.log(url.split("%20")); //in which basic you are splitting the string
//practice in mdn and use backtics it's a good practice
