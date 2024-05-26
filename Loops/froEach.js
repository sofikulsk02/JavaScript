const arr = ["cpp", "Ruby", "python", "swift"];

arr.forEach(function (element) {
  console.log(element);
});

arr.forEach((element) => {
  console.log(element);
});

//important
const myCoding = [
  {
    languageName: "JavaScript",
    languageFilename: "js",
  },
  {
    languageName: "python",
    languageFilename: "py",
  },
  {
    languageName: "java",
    languageFilename: "java",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
