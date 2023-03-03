let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let reset = document.getElementById('reset')

// clears text for input
const clearText= () => input.value = '';



const inputLength = () => input.value.length;

// new list items
const createListElement = () => {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
	// creates butttons
		let btn = document.createElement("button");
		btn.innerHTML = "DONE";
		li.appendChild(btn);
	// remove element
		btn.addEventListener("click", () => {
			li.parentNode.removeChild(li);
		})
	// toggle done class
		li.addEventListener("click", () => {
			li.classList.toggle("done");
		})
	// continued	
		ul.appendChild(li);
		input.value = "";

}

const addListAfterClick = () => {
		if (inputLength() > 0) {
		createListElement();
	}
}

const addListAfterKeypress = (event) => {
		if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
reset.addEventListener('click', clearText);
input.addEventListener("keypress", addListAfterKeypress);

