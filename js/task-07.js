const controlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

controlEl.addEventListener('input', (event) => {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
});