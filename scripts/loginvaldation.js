function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;

}
function validateForm() {
    const form = document.getElementById('loginForm');
    const email = form.email.value;
    const password = form.password.value;

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    emailError.innerHTML = '';
    passwordError.innerHTML = '';

    if (email === '') {
        emailError.innerHTML = 'Please enter your email address';
        return false;
    }

    if (password === '') {
        passwordError.innerHTML = 'Please enter your password';
        return false;
    }

    if (email == 'admin@admin' && password == '0000') {
        window.location.href = "admin.html"
    }
    if (email == 'mena@gmail.com' && password == '1234') {
        window.location.href = "shop.html"
    }

    alert('Login successful');
    form.reset();
    return false;
}
