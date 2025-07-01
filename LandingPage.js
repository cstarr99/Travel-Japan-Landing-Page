const loginButton = document.querySelector("#login-btn");
const joinButton = document.querySelector("#signup-btn");
const homePageButton = document.querySelector("#homepage-btn");

joinButton.addEventListener("click", () => {
  window.location.href = "SignUp.html";
});

loginButton.addEventListener("click", () => {
  window.location.href = "login.html";
});
