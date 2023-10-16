"use strict";
let reviews = document.getElementById("reviews");
let contacts = document.getElementById("contacts");
let product = document.getElementById("products");
let login = document.getElementById("login");
let loginPage = document.querySelector(".loginPage");
login.addEventListener("click", function () {
    loginPage.style.display = "block";
});
let loged = document.getElementById("loged");
loged.addEventListener("click", function () {
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    if ((email === null || email === void 0 ? void 0 : email.value) == "" || (pass === null || pass === void 0 ? void 0 : pass.value) == "") {
        alert("Please Enter Email Password");
    }
    else {
        alert("You Loged In");
        loginPage.style.display = "none";
    }
});
let submit = document.getElementById("submit");
submit.addEventListener("click", function () {
    console.log("Aa");
    let names = document.getElementById("name");
    let password = document.getElementById("pass");
    if ((names === null || names === void 0 ? void 0 : names.value) == "" || (password === null || password === void 0 ? void 0 : password.value) == "") {
        alert("Please Enter Name and Password");
    }
    else {
        alert("Thanks for connecting");
    }
});
