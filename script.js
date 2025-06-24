const loginButton = document.querySelector("#login");
const joinButton = document.querySelector("#Join");

loginButton.addEventListener("click", () => {
  window.location.href = "login.html";
});

joinButton.addEventListener("click", () => {
  window.location.href = "SignUp.html";
});
