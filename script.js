let books = document.getElementById("books");
let reviews = document.getElementById("reviews");
let contacts = document.getElementById("contacts");
let product = document.getElementById("products");

books.addEventListener("click", function(){
    books.style.color="red";
    reviews.style.color="black";
    contacts.style.color="black";
    products.style.color="black";

})

reviews.addEventListener("click", function(){
    books.style.color="black";
    reviews.style.color="red";
    contacts.style.color="black";
    products.style.color="black";

})

products.addEventListener("click", function(){
    books.style.color="black";
    reviews.style.color="black";
    contacts.style.color="black";
    products.style.color="red";

})


contacts.addEventListener("click", function(){
    books.style.color="black";
    reviews.style.color="black";
    contacts.style.color="red";
    products.style.color="black";

})

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