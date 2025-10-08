"use strict";

let reviews = document.getElementById("reviews");
let contacts = document.getElementById("contacts");
let product = document.getElementById("products");
let login = document.getElementById("login");
let loginPage = document.querySelector(".loginPage");

// Show login page
login.addEventListener("click", function () {
  loginPage.style.display = "block";
});

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate password strength (min 6 chars, one number, one uppercase)
function isValidPassword(password) {
  const passRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  return passRegex.test(password);
}

// LOGIN FORM
let loged = document.getElementById("loged");
loged.addEventListener("click", function () {
  let email = document.getElementById("email");
  let pass = document.getElementById("pass");

  if (!email.value || !pass.value) {
    alert("Please enter both email and password.");
    return;
  }

  if (!isValidEmail(email.value)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!isValidPassword(pass.value)) {
    alert("Password must be at least 6 characters long, contain one uppercase letter and one number.");
    return;
  }

  alert("You are logged in!");
  loginPage.style.display = "none";
});

// CONTACT FORM
let submit = document.getElementById("submit");
submit.addEventListener("click", function () {
  let nameField = document.getElementById("name");
  let passwordField = document.getElementById("pass");

  if (!nameField.value || !passwordField.value) {
    alert("Please enter both name and password.");
    return;
  }

  if (nameField.value.length < 3) {
    alert("Name must be at least 3 characters long.");
    return;
  }

  if (!isValidPassword(passwordField.value)) {
    alert("Password must be at least 6 characters long, contain one uppercase letter and one number.");
    return;
  }

  alert("Thanks for connecting!");
});
