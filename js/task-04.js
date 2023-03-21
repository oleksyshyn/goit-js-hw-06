let counterValue = 0;
const valueEl = document.querySelector('#value');

const buttonDecrement = document.querySelector('[data-action="decrement"]');

buttonDecrement.addEventListener("click", () => {
    counterValue -= 1; 
    valueEl.textContent = counterValue;
});

const buttonIncrement = document.querySelector('[data-action="increment"]');

buttonIncrement.addEventListener("click", () => {
    counterValue += 1; 
    valueEl.textContent = counterValue;
});