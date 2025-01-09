const formData = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmPassword: null,
};

const firstNameInput = document.getElementById('first_name');
const lastNameInput = document.getElementById('last_name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');
const form = document.getElementById('mon_form');

const errorName = document.getElementById('error_name');
const errorLastName = document.getElementById('error_last_name');
const errorEmail = document.getElementById('error_email');
const errorPassword = document.getElementById('error_password');
const errorConfirmPassword = document.getElementById('error_confirm_password');

firstNameInput.addEventListener('input', (e) => {
    formData.firstName = e.target.value;
    if (formData.firstName.length >= 1) {
        errorName.style.display = 'none';
        firstNameInput.classList.remove('error');
    } else {
        errorName.style.display = 'block';
        firstNameInput.classList.add('error');
    }
});

lastNameInput.addEventListener('input', (e) => {
    formData.lastName = e.target.value;
    if (formData.lastName.length >= 1) {
        errorLastName.style.display = 'none';
        lastNameInput.classList.remove('error');
    } else {
        errorLastName.style.display = 'block';
        lastNameInput.classList.add('error');
    }
});

emailInput.addEventListener('input', (e) => {
    formData.email = e.target.value;
    if (validateEmail(formData.email)) {
        errorEmail.style.display = 'none';
        emailInput.classList.remove('error');
    } else {
        errorEmail.style.display = 'block';
        emailInput.classList.add('error');
    }
});

passwordInput.addEventListener('input', (e) => {
    formData.password = e.target.value;
    if (formData.password.length >= 8) {
        errorPassword.style.display = 'none';
        passwordInput.classList.remove('error');
    } else {
        errorPassword.style.display = 'block';
        passwordInput.classList.add('error');
    }
});

confirmPasswordInput.addEventListener('input', (e) => {
    formData.confirmPassword = e.target.value;
    if (formData.confirmPassword === formData.password) {
        errorConfirmPassword.style.display = 'none';
        confirmPasswordInput.classList.remove('error');
    } else {
        errorConfirmPassword.style.display = 'block';
        confirmPasswordInput.classList.add('error');
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    if (!formData.firstName || formData.firstName.length < 3) {
        errorName.style.display = 'block';
        firstNameInput.classList.add('error');
        isValid = false;
    }

    if (!formData.lastName || formData.lastName.length < 3) {
        errorLastName.style.display = 'block';
        lastNameInput.classList.add('error');
        isValid = false;
    }

    if (!formData.email || !validateEmail(formData.email)) {
        errorEmail.style.display = 'block';
        emailInput.classList.add('error');
        isValid = false;
    }

    if (!formData.password || formData.password.length < 8) {
        errorPassword.style.display = 'block';
        passwordInput.classList.add('error');
        isValid = false;
    }

    if (formData.confirmPassword !== formData.password) {
        errorConfirmPassword.style.display = 'block';
        confirmPasswordInput.classList.add('error');
        isValid = false;
    }

    if (isValid) {
        console.log('Formulaire soumis avec succès :', formData);
        alert('Formulaire soumis avec succès !');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
