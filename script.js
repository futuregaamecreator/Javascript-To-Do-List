var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength(){
	return input.value.length;
}
function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click",toggleDone);
	ul.appendChild(li);	
	input.value = "";

}

function addListAfterClick(){
	if(inputLength() > 0 ){
	createListElement();
	}

}

function addListAfterKeypress(event) {
if(inputLength() > 0 && event.which === 13){
	createListElement();
	}
	}

function toggleDone(event) {
event.target.classList.toggle('done');
}
button.addEventListener("click",addListAfterClick)

input.addEventListener("keypress",addListAfterKeypress)


