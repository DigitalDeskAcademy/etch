"use strict"; // Enforce strict mode for better error-checking

// Code goes here

// Selectors
const newGridBtn = document.querySelector("#btnAskGridSize");

// Btn listeners

newGridBtn.addEventListener("click", function () {
  const userGridSize = prompt("Enter the number of squares per side: ");
  if (userGridSize && !isNaN(userGridSize) && userGridSize > 0) {
    createDivs(userGridSize);
  } else {
    alert("Please enter a valid number!");
  }
});

const createDivs = (gridSize = 16) => {
  const container = document.getElementById("container");
  container.innerHTML = ""; //Clear existing divs.

  const containerWidth = container.clientWidth;
  const squareSize = containerWidth / gridSize; 

  Array.from({ length: gridSize ** 2 }, (_, i) => {
    const div = document.createElement("div");
    div.style.width = `${squareSize}px`
    div.style.height = `${squareSize}px`
    div.classList.add('grid-item')
    
    div.addEventListener("mouseenter", function () {
      div.style.backgroundColor = "#d8d7d7"; // Change to the desired hover color
    });
    container.appendChild(div);
  });
};

createDivs();
