// Your code here
let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left;
    let left = parseInt(leftNumbers);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    };
};

function moveDodgerRight() {
    let leftNumbers = dodger.style.left;
    let left = parseInt(leftNumbers);
   
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    };
};

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    };
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    };
});

