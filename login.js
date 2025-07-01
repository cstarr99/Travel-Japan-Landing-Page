const loginForm = document.querySelector("#login-form");
const loginEmail = document.querySelector("#email");
const loginPassword = document.querySelector("#password");
const loginError = document.querySelector(".error");
const loginErrorList = document.querySelector(".errors-list");

//form that when submitted checks to make sure each input meets the below parameters, and if it meets it will submit or else it will not submit and show errors.
loginForm.addEventListener("submit", (e) => {
  const errorMessages = [];
  clearErrors();
  if (loginEmail.value === "") {
    errorMessages.push("Please enter an email.");
  }

  if (loginPassword.value < 6) {
    errorMessages.push("Password needs to be more than 6 characters.");
  }
  if (errorMessages.length !== 0) {
    e.preventDefault();
    printErrors(errorMessages);
  }
});

//function that prints all errors that are present in the given array by making a li and adding it to existing list.
function printErrors(errorMessages) {
  errorMessages.forEach((error) => {
    const li = document.createElement("li");
    li.innerText = error;
    loginErrorList.appendChild(li);
  });

  loginError.classList.add("show");
}

//function that clears previous errors when called.
function clearErrors() {
  while (loginErrorList.children[0] != undefined || null) {
    console.log(loginErrorList.children[0]);
    loginErrorList.removeChild(loginErrorList.children[0]);
  }
  loginError.classList.remove("show");
}
