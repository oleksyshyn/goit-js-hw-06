const inputEl = document.querySelector('#validation-input');
const dataLengthEl = document.querySelector('input[data-length="6"]');

inputEl.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === Number(dataLengthEl.dataset.length)) {
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid');
    }
});

