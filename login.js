let registerBtn = document.getElementById('registerBtn');
let loginBtn = document.getElementById('loginBtn');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');

loginBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Log in";
    registerBtn.classList.add("disable");
    loginBtn.classList.remove("disable");
}

registerBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Register";
    registerBtn.classList.remove("disable");
    loginBtn.classList.add("disable");
}

document.getElementById('registerBtn').addEventListener('click', function(event) {
    const inputEmail = document.getElementsByClassName('email')[0]; // Access the first element of the HTMLCollection
    const newInputEmail = inputEmail.value;
    if (!newInputEmail.includes('@')) {
        event.preventDefault(); // Prevent form submission
        window.alert("Please input a valid Email");
    }
});