let reviews = document.getElementById("reviews");
let contacts = document.getElementById("contacts");
let product = document.getElementById("products");


let login = document.getElementById("login");

login.addEventListener("click", function(){
    let loginPage = document.querySelector(".loginPage").style.display="block";
 
})

let loged = document.getElementById("loged");

loged.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" || pass.value == ""){
        alert("Please Enter Email Password")
    }else{
        alert("You Loged In")
        document.querySelector(".loginPage").style.display="none";
    }

})

let submit = document.getElementById("submit");

submit.addEventListener("click", function(){
    console.log("Aa");
    let names = document.getElementById("name");
    let password = document.getElementById("pass");

    console.log(names.value);
    if(names.value == "" || password == ""){
        alert("Please Enter Name and Password")
    }else{
        alert("Thanks for connecting")
    }
})