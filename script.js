const popcat = document.getElementById("popcat");
const counter = document.getElementById("counter");
const sound = document.getElementById("popSound");

let count = 0;

popcat.addEventListener("mousedown", () => {
  popcat.src = "popcat-open.png";
  sound.currentTime = 0;
  sound.play();
  count++;
  counter.textContent = count;
});

popcat.addEventListener("mouseup", () => {
  popcat.src = "popcat-closed.png";
});
