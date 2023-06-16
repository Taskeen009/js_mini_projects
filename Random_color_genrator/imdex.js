const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

const colorContainerEl = document.querySelectorAll(".color-container");
console.log(colorContainerEl);
genrateColor();
function genrateColor() {
  colorContainerEl.forEach((colorContainerEl) => {
    const newColorCode = randomColor();
    console.log(newColorCode);
    colorContainerEl.style.backgroundColor ="#"+newColorCode; 

    colorContainerEl.innerText= "#"+newColorCode

    colorContainerEl.addEventListener("click", function () {
      document.body.style.backgroundColor = "#"+newColorCode
    });
  });
}





function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let color = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.ceil(Math.random() * chars.length);
    color += chars.substring(randomNum, randomNum + 1);
  }
  return color;
}
randomColor();
