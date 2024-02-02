

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form');
    form.addEventListener('submit', function (event) {
        
        event.preventDefault();
        
        validateForm();
    });
});

function validateForm() {
    
    resetErrorMessages();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;
    var age = document.getElementById('age').value;
    var phone = document.getElementById('phone').value;

    var isValid = true;

    
    var usernameRegex = /^[a-zA-Z]+$/;
    if (!usernameRegex.test(username)) {
        displayError('username', 'Username should contain only letters.');
        isValid = false;
    }

    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError('email', 'Invalid email format.');
        isValid = false;
    }

    
    if (password.length < 6) {
        displayError('password', 'Password should be at least 6 characters.');
        isValid = false;
    }

    
    if (password !== password2) {
        displayError('password2', 'Passwords do not match.');
        isValid = false;
    }

    
    if (isNaN(age) || parseInt(age) <= 18) {
        displayError('age', 'children not allowed.');
        isValid = false;
    }

    
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        displayError('phone', 'Phone number should be 10 digits.');
        isValid = false;
    }

    
    if (isValid) {
        alert('Registration successful!');
        document.getElementById('form').submit();
    }
}

function displayError(fieldId, errorMessage) {
    var errorDiv = document.querySelector(`#${fieldId} + .error`);
    errorDiv.innerText = errorMessage;
}

function resetErrorMessages() {
    var errorDivs = document.querySelectorAll('.error');
    errorDivs.forEach(function (errorDiv) {
        errorDiv.innerText = '';
    });
}
