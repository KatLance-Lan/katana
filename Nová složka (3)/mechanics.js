document.addEventListener("DOMContentLoaded", function () {
  let totalAmount = 0;

  document.querySelectorAll(".kc").forEach((row) => {
    const plusBtn = row.querySelector(".plus");
    const minusBtn = row.querySelector(".minus");
    const countDisplay = row.querySelector(".count");
    const value = parseInt(row.querySelector("h5").innerText.replace(" Kč", ""), 10);

    let count = 0;

    function createBubble() {
      let bubble = document.createElement("img");
      bubble.src = "bb.gif";
      bubble.className = "bb";
      bubble.style.position = "absolute";
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.bottom = "0";
      bubble.style.animationDuration = `${Math.random() * 3 + 2}s`;

      document.body.appendChild(bubble);

      setTimeout(() => {
        bubble.remove();
      }, 4000);
    }

    plusBtn.addEventListener("click", () => {
      count++;
      totalAmount += value;
      countDisplay.innerText = count;
      document.getElementById("sum").innerText = `Celková částka: ${totalAmount} Kč`;
      createBubble();
    });

    minusBtn.addEventListener("click", () => {
      if (count > 0) {
        count--;
        totalAmount -= value;
        countDisplay.innerText = count;
        document.getElementById("sum").innerText = `Celková částka: ${totalAmount} Kč`;
        createBubble();
      }
    });
  });

  // Reset Button Functionality
  document.getElementById("reset").addEventListener("click", () => {
    totalAmount = 0;
    document.getElementById("sum").innerText = `Celková částka: ${totalAmount} Kč`;

    document.querySelectorAll(".kc .count").forEach((countDisplay) => {
      countDisplay.innerText = "0";
    });
  });
});

