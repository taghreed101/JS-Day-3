const batch = 1; // change to your own batch id
const baseUrl = "https://recode-chat.herokuapp.com/";
// Your turn to code!
var  list = document.getElementsByClassName("list-unstyled")[0];
var my_func = function(event) {
  var newMassege= document.createElement("li");
  newMassege.innerHTML=document.getElementById("your-message").value;
  list.appendChild(newMassege);
  event.preventDefault();
};
// your form
var form = document.getElementById("comment-form");
// attach event listener
form.addEventListener("submit", my_func, true);
fetch('https://recode-chat.herokuapp.com/:channel/messages')
.then(response => response.json())
.then(data => {
  console.log(data) // Prints result from `response.json()` in getRequest
})

const message = { author:"Arnold",content: "Are you done yet?" };
const url = "https://recode-chat.herokuapp.com/:channel/messages";
fetch(url, {
  method: 'POST',
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(message)
})
.then(response => response.json())
.then((data) => {
  console.log(data);
});



