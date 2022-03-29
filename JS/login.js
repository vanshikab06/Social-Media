function loadLoginPage() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.body.innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "../Text_files/login.txt");
    xhttp.send();
    location.hash = "login";
  }


function li_submit() {
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    if (input_email.value == "" || input_password.value == "") {
        alert("Please enter correct Email Id and Password.");
    }
    else if (input_email.value == email && input_password.value == password) {
        loadNewsFeedPage();
    }
    else {
        alert("Incorrect Email Id or Password.");
    }
}