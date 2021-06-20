const board = document.querySelector('#board');
const SQUARES_NUMBER = 300;
const colors = ['rgb(169, 197, 248)', 'rgba(43, 85, 161, 0.637)', 'rgba(191, 172, 236, 0.637)', 'rgba(61, 14, 168, 0.637)']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)
    board.append(square)
}

function setColor(evt) {
    const element = evt.target;
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 20px ${color}`;
}

function removeColor(evt) {
    const element = evt.target;
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}