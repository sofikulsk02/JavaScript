const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

function randomcolor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
let intervalId;
let intervalId_span;
function bgChanger() {
  document.body.style.backgroundColor = randomcolor();
}

function startChangingColor() {
  intervalId = setInterval(bgChanger, 1000);
  intervalId_span = setInterval(() => {
    const span = document.querySelector("#span");
    span.innerHTML = randomcolor();
  }, 1000);
}
function stopChangingColor() {
  clearInterval(intervalId);
  clearInterval(intervalId_span);
}

start.addEventListener("click", startChangingColor);
stop.addEventListener("click", stopChangingColor);
