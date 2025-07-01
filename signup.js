const signupForm = document.querySelector("#signup-form");
const username = document.querySelector("#name1");
const email = document.querySelector("#email1");
const password = document.querySelector("#password1");
const passwordConfirmation = document.querySelector("#confirm-password1");
const signupErrorsList = document.querySelector(".errors-list");
const errors = document.querySelector(".error");

//form that when submitted checks to make sure each input meets the below parameters, and if it meets it will submit or else it will not submit and show errors.
signupForm.addEventListener("submit", (e) => {
  const errorMessages = [];
  clearErrors();
  if (username.value < 4) {
    errorMessages.push("Name needs to be more than 4 characters.");
  }
  if (email.value === "") {
    errorMessages.push("Please enter an email");
  }
  if (password.value < 6) {
    errorMessages.push("Password needs to be more than 6 characters.");
  }
  if (password.value !== passwordConfirmation.value) {
    errorMessages.push("Passwords do not match.");
  }
  if (errorMessages != 0) {
    e.preventDefault();
    printErrors(errorMessages);
  }
});

//function that clears previous errors when called.
function clearErrors() {
  while (signupErrorsList.children[0] != undefined || null) {
    signupErrorsList.removeChild(signupErrorsList.children[0]);
  }
  errors.classList.remove("show");
}

//function that prints all errors that are present in the given array by making a li and adding it to existing list.
function printErrors(errorMessages) {
  errorMessages.forEach((error) => {
    const li = document.createElement("li");
    li.innerText = error;
    signupErrorsList.appendChild(li);
  });
  errors.classList.add("show");
}
