const form = document.querySelector(".join-waitlist");
const errorMessage = document.querySelector(".error-message");
const regex = /.+\@.+\..+/;

form.addEventListener("submit", function (e) {
	e.preventDefault();
	const email = document.getElementById("email").value;

	if (!email) {
		errorMessage.innerHTML =
			"Whoops! It looks like you forgot to add your email";
		form.classList.add("error");
	} else if (!email.match(regex)) {
		errorMessage.innerHTML = "Please provide a valid email address";
		form.classList.add("error");
	} else {
		form.classList.remove("error");
		form.reset();
	}
});
