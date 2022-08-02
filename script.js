const container = document.getElementById('container');
const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white'];
const SQUARES = 500;

for(let i = 0; i < SQUARES; i++) {
   const square = document.createElement('div');
   square.classList.add('square');
   
   square.addEventListener('mouseover', () => setColor(square))

   square.addEventListener('mouseout', () => removeColor(square))

   container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor()
}

function removeColor(element) {
    
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}