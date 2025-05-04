// login page 
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const icon = this.querySelector('img');

    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.src = "https://img.icons8.com/ios-glyphs/30/000000/invisible.png"; // Change to hide icon
    } else {
        passwordField.type = "password";
        icon.src = "https://img.icons8.com/ios-glyphs/30/000000/visible.png"; // Change to show icon
    }
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    emailError.innerText = '';
    passwordError.innerText = '';

    if (!validateEmail(email)) {
        emailError.innerText = 'Please enter a valid email.';
        return;
    }

    if (!validatePassword(password)) {
        passwordError.innerText = 'Password must be at least 8 characters long and contain at least one special character.';
        return;
    }

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    alert('Login successful! Redirecting...');
    window.location.href = 'index.html'; // Redirect to homepage
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    return password.length >= 8 && specialCharPattern.test(password);
}
