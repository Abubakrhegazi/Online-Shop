function Error(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function validateForm(contactForm) {

    var password = form.password.value;
    var email = form.email.value;

    var passworderr = emailErr = true;

    if (email == "") {
        Error("emailErr", "Please enter your email address");
    }
    else if (email == "admin@admin" && password == "0000") {
        window.location.href = "admin.html";

    }
    else {

        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            Error("emailErr", "Please enter a valid email address");
        } else {
            Error("emailErr", "");
            emailErr = false;
        }

        if (password == "") {
            printError("passwordErr", "Please enter your password");
        } else {
            var regex = /^[1-9]\d{9}$/;
            if (regex.test(password) === false) {
                printError("passwordErr", "Please enter a valid password");
            } else {
                printError("passwordErr", "");
                passworderr = false;
            }
        }



    }
}