const firstPasswordBox = document.querySelector("#passOne");
const secondPasswordBox = document.querySelector("#passTwo");

firstPasswordBox.addEventListener("keydown", removeDisabled);
secondPasswordBox.addEventListener("keyup", matchPasswords);

function removeDisabled(e) {
	secondPasswordBox.removeAttribute("disabled");
	firstPasswordBox.classList.add("waitingForPass");
	secondPasswordBox.classList.add("waitingForPass");
}

function matchPasswords(e) {
	if (firstPasswordBox.value.length === secondPasswordBox.value.length) {
		if (firstPasswordBox.value === secondPasswordBox.value) {
			console.log("match");
			firstPasswordBox.classList.remove("waitingForPass");
			secondPasswordBox.classList.remove("waitingForPass");
			firstPasswordBox.classList.remove("passwordNotMatch");
			secondPasswordBox.classList.remove("passwordNotMatch");
			firstPasswordBox.classList.add("passwordMatch");
			secondPasswordBox.classList.add("passwordMatch");
		} else {
			console.log("not matched");
			firstPasswordBox.classList.add("passwordNotMatch");
			secondPasswordBox.classList.add("passwordNotMatch");
		}
	} else if (firstPasswordBox.value.length < secondPasswordBox.value.length) {
		console.log("not match");
		firstPasswordBox.classList.add("passwordNotMatch");
		secondPasswordBox.classList.add("passwordNotMatch");
	} else {
		console.log("waiting for pass");
		firstPasswordBox.classList.add("waitingForPass");
		secondPasswordBox.classList.add("waitingForPass");
	}
}
