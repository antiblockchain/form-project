const form = document.getElementById('form'); 
const email = document.getElementById('email'); 
const country = document.getElementById('country'); 
const zipcode = document.getElementById('zipcode'); 
const password = document.getElementById('password'); 
const passwordConfirm = document.getElementById('passwordconfirm');
const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    parseInput();
})

function parseInput() {
    let emailInput = email.value.trim();
    let countryInput = country.value.trim();
    let zipcodeInput = zipcode.value.trim();
    let passwordInput = password.value.trim();
    let passwordConfirmInput = passwordConfirm.value.trim();
    let inputs = [
        emailInput,
        countryInput,
        zipcodeInput,
        passwordInput,
        passwordConfirmInput,
    ];
    let elements = [
        email,
        country,
        zipcode,
        password,
        passwordConfirm,
    ];
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i] == '') {
            elements[i].className = 'forms invalid';
        } else {
            elements[i].className = 'forms valid';
        }
    }
}