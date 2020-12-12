const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const messages = document.querySelectorAll(".message");

form.addEventListener("submit", (e)=>{
    
checkInput()
messages.forEach((message) =>{
    if (message.innerHTML !== ""){
e.preventDefault();
    }
})
})

function checkInput(){
    const nameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const emailValue = email.value.trim();
    const password2Value = password2.value.trim();
    if(nameValue === ""){
  setError(username, "Username cannot be blank")
}else{
    setSuccess(username);
}

if (emailValue === "") {
setError(email, "Email is required")
}else if(!isEmail(emailValue)){
setError(email, "Insert a valid email")
}else{
    setSuccess(email);
}

if (passwordValue === ""){
    setError(password, "Password is required");
} else if (!isPass(passwordValue)){
    setError(password, "Passwords must have at least 8 characters, 1 lowercase, 1 uppercase, 1 number, and 1 symbol (!@#$%^&*).")
} else {
    setSuccess(password);
}

if(password2Value === ""){
    setError(password2, "Please re-enter your password")
}else if(password2Value !== passwordValue){
    setError(password2, "Passwords do not match")
}else{
    setSuccess(password2);
}
}
function setError(input, error){
const inputDiv = input.parentElement;
const message = inputDiv.querySelector(".message");
inputDiv.className = 'input-div error';
// inputDiv.classList.remove("success");
// inputDiv.classList.add("error");
message.textContent = error;
}

function setSuccess(input){
const inputDiv = input.parentElement;
const message = inputDiv.querySelector(".message");
inputDiv.className = 'input-div success';
// inputDiv.classList.remove("error");
// inputDiv.classList.add("success");
message.textContent = "";
}

function isEmail(email){
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isPass(password){
    const re = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
    return re.test(password);
}