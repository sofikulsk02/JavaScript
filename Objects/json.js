//destructuring

const course = {
  courseName: "js in english",
  price: 3000,
  tutor: "rajib",
};

//course.tutor

const { courseName: nam } = course;
console.log(nam);
