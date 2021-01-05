let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });

  function moveDodgerRight() {
      let rightNumbers = dodger.style.left.replace("px", "");
      let left = parseInt(rightNumbers, 10);

      if (left < 360) {
          dodger.style.left = `${ left + 1 }px`;
      }
  }