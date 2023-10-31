// Function to generate a random color
function getRandomColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}
// Function to create and populate the grid
function createGrid(count) {
  const container = document.getElementById("gridContainer");
  container.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.style.backgroundColor = getRandomColor();
    container.appendChild(box);
  }
}

// Function to animate the grid
function autoPlay() {
  let count = 5;
  let subtract = false;

  setInterval(() => {
    if (count === 30) {
      subtract = true;
    } else if (count === 0) {
      subtract = false;
    }

    if (subtract) {
      count--;
    } else {
      count++;
    }

    document.getElementById("countInput").value = count;
    createGrid(count);
  }, 50);
}

// Event listener to handle input changes
document.getElementById("countInput").addEventListener("input", function () {
  const newCount = parseInt(this.value);
  if (!isNaN(newCount)) {
    createGrid(newCount);
  }
});

// Initial setup
createGrid(5);
autoPlay();
