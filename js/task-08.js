const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    
    const email = formElements.email.value;
    const password = formElements.password.value;
   
    if (email === '' || password === '') {
        const message = 'All fields must be filled!';
        alert(message);
    } else {
        const formData = {
            email,
            password,
        };
        
        console.log(formData);
        document.querySelector('.login-form').reset();
    }
    
}