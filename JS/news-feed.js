function loadNewsFeedPage() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.body.innerHTML =
      this.responseText;
      document.getElementById("user-name-3").innerHTML = getName();
    document.getElementById("user-name-4").innerHTML = getName();
      location.hash = "news-feed";
    }
    xhttp.open("GET", "../Text_files/news_feed.txt");
    xhttp.send();
  }

  function toggleMenu() {
    var leftSection = document.getElementById("left-sec");
    leftSection.classList.toggle("hidden");
  }
  