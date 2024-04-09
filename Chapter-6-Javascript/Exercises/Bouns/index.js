const colors = generateRandomColors(3); // Generate 3 random colors
let correctColorIndex = Math.floor(Math.random() * 3); // Index of the correct color
let lives = 3; // Number of lives

const rgbValueDisplay = document.getElementById('rgbValue'); // Get reference to RGB value display element
const optionsContainer = document.getElementById('options'); // Get reference to color options container
const messageDisplay = document.getElementById('message'); // Get reference to message display element
const retryButton = document.getElementById('retryButton'); // Get reference to retry button element

// Display RGB value to guess
rgbValueDisplay.textContent = colors[correctColorIndex];

// Display color options
for (let i = 0; i < 3; i++) {
  const option = document.createElement('div'); // Create a new div element
  option.classList.add('option'); // Add 'option' class to the div
  option.style.backgroundColor = colors[i]; // Set background color of the div
  option.addEventListener('click', function() { // Add click event listener to the div
    if (i === correctColorIndex) { // Check if clicked color is correct
      messageDisplay.textContent = 'Correct!'; // Display correct message
    } else {
      messageDisplay.textContent = 'Incorrect!'; // Display incorrect message
      lives--; // Decrease number of lives
    }
    if (lives === 0) { // Check if lives are zero
      endGame(); // Call endGame function
    }
  });
  optionsContainer.appendChild(option); // Append option div to options container
}

// Retry button functionality
retryButton.addEventListener('click', function() {
  resetGame(); // Call resetGame function when retry button is clicked
});

// Function to generate random RGB colors
function generateRandomColors(num) {
  const colorsArray = []; // Initialize empty array for colors
  for (let i = 0; i < num; i++) { // Loop to generate 'num' colors
    const red = Math.floor(Math.random() * 256); // Generate random red value (0-255)
    const green = Math.floor(Math.random() * 256); // Generate random green value (0-255)
    const blue = Math.floor(Math.random() * 256); // Generate random blue value (0-255)
    colorsArray.push(`rgb(${red}, ${green}, ${blue})`); // Push RGB string to colors array
  }
  return colorsArray; // Return array of random colors
}

// Function to end the game
function endGame() {
  messageDisplay.textContent = `Game over! Final score: ${lives}`; // Display final score message
  optionsContainer.innerHTML = ''; // Clear color options
  retryButton.style.display = 'block'; // Display retry button
}

// Function to reset the game
function resetGame() {
  colors.splice(0, colors.length); // Clear colors array
  colors.push(...generateRandomColors(3)); // Generate 3 new random colors
  correctColorIndex = Math.floor(Math.random() * 3); // New index of the correct color
  lives = 3; // Reset lives
  rgbValueDisplay.textContent = colors[correctColorIndex]; // Display new RGB value
  messageDisplay.textContent = ''; // Clear message
  optionsContainer.innerHTML = ''; // Clear options

  // Display new color options
  for (let i = 0; i < 3; i++) {
    const option = document.createElement('div'); // Create a new div element
    option.classList.add('option'); // Add 'option' class to the div
    option.style.backgroundColor = colors[i]; // Set background color of the div
    option.addEventListener('click', function() { // Add click event listener to the div
      if (i === correctColorIndex) { // Check if clicked color is correct
        messageDisplay.textContent = 'Correct!'; // Display correct message
      } else {
        messageDisplay.textContent = 'Incorrect!'; // Display incorrect message
        lives--; // Decrease number of lives
      }
      if (lives === 0) { // Check if lives are zero
        endGame(); // Call endGame function
      }
    });
    optionsContainer.appendChild(option); // Append option div to options container
  }
}
