const increaseBtn = document.querySelector("#increaseBtn");
const resetBtn = document.querySelector("#resetBtn");
const decreaseBtn = document.querySelector("#decreaseBtn");
const countLabel = document.querySelector("#countLabel");
let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.innerText = count;
};
decreaseBtn.onclick = function () {
  count--;
  countLabel.innerText = count;
};
resetBtn.onclick = function () {
  count = 0;
  countLabel.innerText = count;
};
