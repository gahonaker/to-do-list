var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let reset = document.getElementById('reset')

// clears text for input
function clearText(){
	input.value = '';
}

function inputLength() {
	return input.value.length;
}

// new list items
function createListElement() {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
	// creates butttons
		var btn = document.createElement("button");
		btn.innerHTML = "Complete!";
		li.appendChild(btn);
	// remove element
		btn.addEventListener("click", function() {
			li.parentNode.removeChild(li);
		})
	// toggle done class
		li.addEventListener("click", function() {
			li.classList.toggle("done");
		})
	// continued	
		ul.appendChild(li);
		input.value = "";

}

function addListAfterClick() {
		if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
		if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
reset.addEventListener('click', clearText);
input.addEventListener("keypress", addListAfterKeypress);

