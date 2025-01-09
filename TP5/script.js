const formData = {
    firstName: null,
    lastName: null,
    email: null,
};

const firstNameInput = document.getElementById('first_name');
const lastNameInput = document.getElementById('last_name');
const emailInput = document.getElementById('email');
const errorName = document.getElementById('error_name');
const form = document.getElementById('mon_form');

firstNameInput.addEventListener('input', (e) => {
    formData.firstName = e.target.value;
    if (formData.firstName) {
        errorName.style.display = 'none';
        firstNameInput.classList.remove('error');
    }
    console.log('Données du formulaire:', formData);
});

lastNameInput.addEventListener('input', (e) => {
    formData.lastName = e.target.value;
    console.log('Données du formulaire:', formData);
});

emailInput.addEventListener('input', (e) => {
    formData.email = e.target.value;
    console.log('Données du formulaire:', formData);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!formData.firstName) {
        errorName.style.display = 'block';
        firstNameInput.classList.add('error');
        errorName.innerText = 'Veuillez entrer votre prénom.';
        return;
    }

    if (!formData.lastName) {
        alert('Veuillez entrer votre nom.');
        return;
    }

    if (!formData.email || !validateEmail(formData.email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }

    console.log('Formulaire soumis avec succès :', formData);
    alert('Formulaire soumis avec succès !');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
