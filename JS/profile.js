function loadProfilePage() {
  // var changeSection = document.getElementById("nf-section");
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.body.innerHTML =
      this.responseText;
      document.getElementById("change-name").innerHTML = getName();
    document.getElementById("user-name").innerHTML = getName();
    document.getElementById("user-name-1").innerHTML = getName();
      location.hash = "profile";
    }
    xhttp.open("GET", "../Text_files/profile.txt");
    xhttp.send();
  }
  
function getName() {
  const name = localStorage.getItem("name");
  return name || "Your Name";
}

function toggleMenu1() {
  var leftSection = document.getElementById("left");
  leftSection.classList.toggle("hidden");
}

    