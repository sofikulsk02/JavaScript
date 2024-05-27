function randomcolor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.round(Math.random() * 16)];
  }
  console.log(color);
  return color;
}

randomcolor();

console.log(Math.floor(Math.random() * 20));
