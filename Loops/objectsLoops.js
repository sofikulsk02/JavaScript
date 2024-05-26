const myObject = {
  js: "javaScript",
  cpp: "C++",
  rb: "Ruby",
  py: "Python",
};

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}
