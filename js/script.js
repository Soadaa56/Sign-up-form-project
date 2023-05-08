let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let phone = document.getElementById("phone-number");
let password = document.getElementById("password");
let confirm = document.getElementById("password-confirm");
const passwordError = document.getElementById("password-error");
const emailError = document.getElementById("email-error");
const emailErrorSpacing = document.getElementById("email-error-spacing");

let passwordValid = false;
let formValid = false;
let emailValid = false;

function checkPassword() {
  if (password.value == confirm.value && !password.validity.valueMissing) {
    password.style.border = "0.5px solid green";
    confirm.style.border = "0.5px solid green";
    passwordError.innerText = "";
    passwordValid = true;
  } else {
    password.style.border = "0.5px solid #b91c1c";
    confirm.style.border = "0.5px solid #b91c1c";
    passwordError.textContent = "*Passwords does not match";
    passwordError.style.color = "#b91c1c";
    passwordValid = false;
  }
};

function checkValidity() {
  if (firstName.validity.valid && lastName.validity.valid && phone.validity.valid) {
    formValid = true;
  } else {
    formValid = false;
  }
};

function checkEmail() {
  if (email.validity.valid) {
    email.style.border = "0.5px solid green";
    emailError.innerText = "";
    emailErrorSpacing.innerText = "";
    emailValid = true
  } else {
    email.style.border = "0.5px solid #b91c1c";
    emailError.innerText = "*A valid email is required";
    emailErrorSpacing.innerText = "*";
    emailErrorSpacing.style.color = "transparent";
  }
};

function submitForm() {
  checkValidity();
  if (passwordValid && formValid && emailValid) {
    document.forms["sign-up"].submit();
  } else {
    alert("Please fill out the form");
    console.log("Form submit error");
  }
};



