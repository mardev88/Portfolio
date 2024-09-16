const rollBtn = document.querySelector("#rollBtn");
const label1 = document.querySelector("#label1");
const label2 = document.querySelector("#label2");
const label3 = document.querySelector("#label3");
const min = 1;
const max = 6;
let randomNumber1;
let randomNumber2;
let randomNumber3;
rollBtn.onclick = function () {
  randomNumber1 = Math.floor(Math.random() * max) + min;
  randomNumber2 = Math.floor(Math.random() * max) + min;
  randomNumber3 = Math.floor(Math.random() * max) + min;
  label1.innerText = randomNumber1;
  label2.innerText = randomNumber2;
  label3.innerText = randomNumber3;
};
