const loginForm = document.querySelector("#login-form");
const loginEmail = document.querySelector("#email");
const loginPassword = document.querySelector("#password");
const loginError = document.querySelector(".error");
const loginErrorList = document.querySelector(".errors-list");

loginForm.addEventListener("submit", (e) => {
  const errorMessages = [];
  clearErrors();
  if (loginEmail.value === "") {
    errorMessages.push("Please enter an email.");
  }

  if (loginPassword.value === "") {
    errorMessages.push("Please enter a password.");
  }
  if (errorMessages.length !== 0) {
    e.preventDefault();
    printErrors(errorMessages);
  }
});

function printErrors(errorMessages) {
  errorMessages.forEach((error) => {
    const li = document.createElement("li");
    li.innerText = error;
    loginErrorList.appendChild(li);
  });

  loginError.classList.add("show");
}

function clearErrors() {
  while (loginErrorList.children[0] != undefined || null) {
    console.log(loginErrorList.children[0]);
    loginErrorList.removeChild(loginErrorList.children[0]);
  }
  loginError.classList.remove("show");
}
