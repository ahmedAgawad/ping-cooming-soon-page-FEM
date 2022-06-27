// DOM elements
const form = document.querySelector("main form");
const emailInput = document.querySelector("form input");
const sumbitBtn = document.querySelector("form button");
const errorText = document.querySelector("form .errortext");
const validPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", function (e) {
	if (emailInput.value === "") {
		errorText.textContent = "Whoops! It looks like you forgot to add your email";
		form.classList.add("error");
		e.preventDefault();
	} else if (!emailInput.value.match(validPattern)) {
		errorText.textContent = "Please provide a valid email address";
		form.classList.add("error");
		e.preventDefault();
	}
});
