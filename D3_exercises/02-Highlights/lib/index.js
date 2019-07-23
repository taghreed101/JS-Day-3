// TODO: write your code here!

//var active = document.activeElement.tagName;


var gridButtons = document.getElementsByClassName("clickable");
Array.prototype.forEach.call(gridButtons, function (boutton) { updateboutton(boutton); });


function updateboutton(boutton) {
  boutton.addEventListener("click", function (event) {
    if (boutton.classList.length == 1)
      boutton.classList.add("active");
    else 
      boutton.classList.remove("active");
    
  });
}
