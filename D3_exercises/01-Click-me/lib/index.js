



const displayAlertOnButtonClick = () => {
  // TODO: Select the big green button

  // TODO: Bind the `click` event to the button
  // TODO: On click, display `Thank you!` in a JavaScript alert!
  var clickButton=document.getElementById("click");
  clickButton.addEventListener("click",aletMassge);
 
};

function aletMassge()
{
  alert("Thank you!"); // Of course you can remove this line
}

displayAlertOnButtonClick(); // Do not remove!

