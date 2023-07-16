// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "0";

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.code === "ArrowRight") {
    moveDodgerRight();
  }
});

function moveDodgerLeft(event) {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}

function moveDodgerRight() {
  const rightNumbers = dodger.style.left.replace("px", "");
  const right = parseInt(rightNumbers);

  if (right !== 360) {
    dodger.style.left = `${right + 10}px`;
  }
}
