const loginButton = document.querySelector("#login-btn");
const joinButton = document.querySelector("#signup-btn");
const homePageButton = document.querySelector("#homepage-btn");

loginButton.addEventListener("click", () => {
  window.location.href = "login.html";
});

joinButton.addEventListener("click", () => {
  window.location.href = "SignUp.html";
});

homePageButton.addEventListener("click", () => {
  window.location.href = "LandingPage.html";
});
