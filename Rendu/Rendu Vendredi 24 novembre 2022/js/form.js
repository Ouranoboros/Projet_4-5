// Open Modal
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
	modal.style.display = 'block';
}

// Close
function closeModal() {
	modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}

// form Vérification
const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const messageValue = message.value.trim();

	if (usernameValue === '') {
		setErrorFor(username, 'Le nom ne peut pas être vide');
	} else {
		setSuccessFor(username);
	}

	if (emailValue === '') {
		setErrorFor(email, "L'email ne peut pas être vide");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "L'email n'est pas valide'");
	} else {
		setSuccessFor(email);
	}

	if (messageValue === '') {
		setErrorFor(message, 'Le message ne peut pas être vide');
	} else {
		setSuccessFor(message);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	alert('Votre message a bien été envoyé');
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}
