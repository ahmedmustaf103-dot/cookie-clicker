let cookies = 0;

const cookieImg = document.getElementById("cookie");
const countEl = document.getElementById("count");
const doubleBtn = document.getElementById("double");
const restartBtn = document.getElementById("restart");
const container = document.querySelector(".container");

// COOKIE CLICK
cookieImg.addEventListener("click", () => {
  cookies += 1;
  countEl.textContent = cookies;

  if (cookies >= 25) {
    doubleBtn.style.display = "inline-block";
    container.style.backgroundColor = "pink";
  } else {
    container.style.backgroundColor = "white";
  }
});

// 2x BUTTON → DOUBLE NUMBER
doubleBtn.addEventListener("click", () => {
  cookies = cookies * 2;
  countEl.textContent = cookies;
});

// RESTART
restartBtn.addEventListener("click", () => {
  cookies = 0;
  countEl.textContent = cookies;
  container.style.backgroundColor = "white";
  doubleBtn.style.display = "none";
});
