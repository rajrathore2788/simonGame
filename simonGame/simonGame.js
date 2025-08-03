let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let color = ["green", "yellow", "purple", "red"];

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game started");
    started = true;
    levelUp();
  }
});

let h2 = document.querySelector("h2");

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randClr = Math.floor(Math.random() * 3);
  randClr = color[randClr];
  let randBtn = document.querySelector(`.${randClr}`);
  gameSeq.push(randClr);
  console.log(gameSeq);
  gameflash(randBtn);
}
function checkAns(idx) {
  // console.log("curr level :", level);
  if (userSeq[idx] === gameSeq[idx]) {
    if (gameSeq.length == userSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = "Game Over! Press any key to start.";
    reset();
  }
}

function btnPress() {
  let btn = this;
  userflash(btn);

  let userClr = btn.getAttribute("id");
  userSeq.push(userClr);
  console.log(userSeq);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  gameSeq = [];
  userSeq = [];
  started = false;
  level = 0;
}
