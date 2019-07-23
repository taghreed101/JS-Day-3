// TODO: Autocomplete the input with AJAX calls.

search.addEventListener("keyup", loadFile);

function loadFile(event) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);
      obj["words"].forEach(word => {
        console.log(8);
      });
      document.getElementById("li").innerHTML = obj["words"];
    }
  };
  xhttp.open("GET", "https://recode-dictionary.herokuapp.com/autocomplete/" + search.value, true);
  xhttp.send();
}