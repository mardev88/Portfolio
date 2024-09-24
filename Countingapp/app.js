const increaseBtn = document.querySelector("#increaseBtn");
const resetBtn = document.querySelector("#resetBtn");
const decreaseBtn = document.querySelector("#decreaseBtn");
const countLabel = document.querySelector("#countLabel");
let count = 0;
increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
function increase() {
  count++;
  countLabel.innerText = count;
}
function decrease() {
  count--;
  countLabel.innerText = count;
}
function reset() {
  count = 0;
  countLabel.innerText = count;
}
