const loginForm = document.querySelector("#login-form");
const loginEmail = document.querySelector("#email");
const loginPassword = document.querySelector("#password");
const loginError = document.querySelector(".error");
const loginErrorList = document.querySelector(".errors-list");
const errorMessages = [];

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (loginEmail.value === "") {
    e.preventDefault();
    printErrors("Please enter an email.");
  } else if (loginPassword.value === "") {
    e.preventDefault();
    printErrors("Please enter a password.");
  } else {
    window.location.href = "logincomplete.html";
  }
});

function printErrors(message) {
  const li = document.createElement("li");
  li.innerText = message;
  loginErrorList.appendChild("li");
  loginError.classList.add("show");
}
