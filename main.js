//first grabbed the id of the button and added an event listener and function name
document.querySelector('#btn').addEventListener('click', validate)
//created the function
function validate() {
  //assigned the password and confirmPassword inputs to various variables
  let password = document.querySelector("#password");
  let confirmPassword = document.querySelector("#confirmPassword");
  //added a thin solid red border(like an error class) if the input values are empty
  if (password.value === "") {
    password.style.border = "thin solid red";
  } else {
    password.style.border = "1px solid rgba(199, 196, 196, 0.521)";
  }
  if (confirmPassword.value === "") {
    confirmPassword.style.border = "thin solid red";
  } else {
    confirmPassword.style.border = "1px solid rgba(199, 196, 196, 0.521)";
  }
  //added a thin solid red border and some text "Passwords do not match" incase the passwords do not match
  if (password.value !== confirmPassword.value) {
    password.style.border = "thin solid red";
    confirmPassword.style.border = "thin solid red";
    confirmPassword.value = "Passwords do not match";
    password.value = "Passwords do not match";
  }
}