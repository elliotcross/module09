//Use getElementById to access the button 
let button = document.getElementById("clear");
//Create event handler to produce dots on page when clicked
  window.addEventListener("click", event => {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
  });
 //stop dots from forming on the button when clicked by using stop propagation
button.addEventListener("click", function (event){
event.stopPropagation();
	});
//clear page when button is clicked
button.addEventListener("click", () => {
window.location.reload()
	});
