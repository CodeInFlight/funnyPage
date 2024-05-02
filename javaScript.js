// Function to add funny effects when hovering or touching elements
function addFunnyEffects() {
  const elements = document.querySelectorAll('h1, h2, p, a, img, section');

  elements.forEach(element => {
    // Add event listeners for mouseover and touchstart events
    element.addEventListener('mouseover', applyFunnyEffect);
    element.addEventListener('touchstart', applyFunnyEffect);
  });
}

// Function to apply funny effects
function applyFunnyEffect(event) {
  const element = event.target;

  // Rotate the element
  element.style.transform = 'rotate(' + (Math.random() * 20 - 10) + 'deg)';
  
  // Change the background color randomly
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  element.style.backgroundColor = randomColor;

  // Add a border with a random color and width
  element.style.border = '3px solid #' + Math.floor(Math.random()*16777215).toString(16);
  
  // Shake the element
  const originalPosition = element.style.transform;
  element.style.animation = 'shake 0.5s ease';
  setTimeout(() => {
    element.style.animation = '';
    element.style.transform = originalPosition;
  }, 500);
}

// Call the function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', addFunnyEffects);

// CSS animation for shaking effect
const style = document.createElement('style');
style.textContent = '@keyframes shake { 0% { transform: translateX(0); } 25% { transform: translateX(-5px); } 50% { transform: translateX(5px); } 75% { transform: translateX(-5px); } 100% { transform: translateX(0); } }';
document.head.appendChild(style);