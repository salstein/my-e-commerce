let reviews = document.getElementById("reviews") as HTMLElement;
let contacts = document.getElementById("contacts") as HTMLElement;
let product = document.getElementById("products") as HTMLElement;

let login = document.getElementById("login") as HTMLElement;
let loginPage = document.querySelector(".loginPage") as HTMLElement;
login.addEventListener("click", function () {
  loginPage.style.display = "block";
});

let loged = document.getElementById("loged") as HTMLElement;

loged.addEventListener("click", function () {
  let email = document.getElementById("email") as HTMLInputElement;
  let pass = document.getElementById("pass") as HTMLInputElement;

  if (email?.value == "" || pass?.value == "") {
    alert("Please Enter Email Password");
  } else {
    alert("You Loged In");
    loginPage.style.display = "none";
  }
});

let submit = document.getElementById("submit") as HTMLButtonElement;

submit.addEventListener("click", function () {
  console.log("Aa");
  let names = document.getElementById("name") as HTMLInputElement;
  let password = document.getElementById("pass") as HTMLInputElement;

  if (names?.value == "" || password?.value == "") {
    alert("Please Enter Name and Password");
  } else {
    alert("Thanks for connecting");
  }
});
