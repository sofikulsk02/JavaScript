// const randomColor = function () {
//   const hex = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += hex[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };
// const bgColorchange = function () {
//   document.body.style.backgroundColor = randomColor();
// };
// let intervalId;
// const startChanging = function () {
//   intervalId = setInterval(bgColorchange, 1000);
// };
// const stopChangingcolor = function () {
//   clearInterval(intervalId);
//   intervalId = null;
// };
// document.getElementById("one").addEventListener("click", startChanging);
// document.getElementById("two").addEventListener("click", stopChangingcolor);

const randomcolor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
const bgColorchange = function () {
  document.body.style.background = randomcolor();
};
let intervalId;
const startChanging = function () {
  intervalId = setInterval(bgColorchange, 1000);
};
const stopChangingcolor = function () {
  clearInterval(intervalId);
  intervalId = null;
};
document.getElementById("one").addEventListener("click", startChanging);
document.getElementById("two").addEventListener("click", stopChangingcolor);
