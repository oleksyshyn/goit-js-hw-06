function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls > input');

const createButton = document.querySelector('[data-create]');

createButton.addEventListener('click', () => {
  createBoxes(inputEl.value);
});

let elements = [];

const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.height = `${30 + 10 * i}px`;
    elements.push(divEl);
  }
  
  boxesEl.append(...elements);
}

const destroyButton = document.querySelector('[data-destroy]');

destroyButton.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
  elements = [];
}
