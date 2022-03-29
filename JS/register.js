function loadSignupPage() {
    var change = document.getElementById("change");
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        change.innerHTML =
      this.responseText;
      location.hash = "register";
    }
    xhttp.open("GET", "../Text_files/signup.txt");
    xhttp.send();
  }

function check_fields() {
    var inputName = document.getElementById("name");
    localStorage.setItem("name", inputName.value);

    var inputUsername = document.getElementById("username");
    localStorage.setItem("username", inputUsername.value);

    var inputEmail = document.getElementById("email");
    var re_email = new RegExp("^[a-zA-Z0-6_.]+@[a-z]+\.[a-z]{2,3}$");
    if (re_email.test(inputEmail.value)) {
        localStorage.setItem("email", inputEmail.value);
    }
    else {
        alert("Please enter a valid email address");
        return false;
    }

    var inputPassword = document.getElementById("password");
    var re_password = new RegExp("^[a-zA-Z0-9!@#$%^&*]{8,16}$");
    if (re_password.test(inputPassword.value)) {
        localStorage.setItem("password", inputPassword.value);
    }
    else {
        alert("Please enter a valid password");
        return false;
    }

    var inputConPassword = document.getElementById("confirmPassword");
    if (inputConPassword.value != inputPassword.value) {
        alert("Confirmation password is not same. Please enter again.");
        return false;
    }
    else {
        localStorage.setItem("confirmPassword", inputConPassword.value);
    }
    if (inputUsername.value == "" || inputName.value == "" || inputEmail.value == "" || inputPassword.value == "" || inputConPassword.value == "") {
        alert("Please complete all the fields.");
        return false;
    }
    return true;

}
function su_submit() {

    var check = check_fields();
    if (check == true) {
        alert("You are successfully registered. Please login to your account.");
    }

}

