"use strict";

let reviews = document.getElementById("reviews");
let contacts = document.getElementById("contacts");
let product = document.getElementById("products");
let login = document.getElementById("login");
let loginPage = document.querySelector(".loginPage");
let logout = document.getElementById("logout"); // Add this button in your HTML

// --- Validation Helpers ---
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  const passRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  return passRegex.test(password);
}

// --- Show Login Page ---
login.addEventListener("click", function () {
  loginPage.style.display = "block";
});

// --- LOGIN FUNCTIONALITY ---
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

  // Store login data (for demo; do NOT store real passwords this way)
  localStorage.setItem("userEmail", email.value);
  alert("You are logged in!");

  loginPage.style.display = "none";
  updateLoginState();
});

// --- CONTACT FORM ---
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

// --- LOGOUT FUNCTIONALITY ---
logout.addEventListener("click", function () {
  localStorage.removeItem("userEmail");
  alert("You have been logged out!");
  updateLoginState();
});

// --- AUTO LOGIN STATE CHECK ---
function updateLoginState() {
  const userEmail = localStorage.getItem("userEmail");

  if (userEmail) {
    login.style.display = "none";
    logout.style.display = "inline-block";
    console.log(`Logged in as: ${userEmail}`);
  } else {
    login.style.display = "inline-block";
    logout.style.display = "none";
  }
}

// --- Initialize State on Page Load ---
window.addEventListener("DOMContentLoaded", updateLoginState);
