const signinButton = document.querySelector("#sign-in-btn");
const signupButton = document.querySelector("#sign-up-btn");
const container=document.querySelector(".container");
const signinButton2 = document.querySelector("#sign-in-mob");
const signupButton2 = document.querySelector("#sign-up-mob");

signupButton.addEventListener("click", ()=>{
  container.classList.add("sign-up-mode");
});
signinButton.addEventListener("click", ()=>{
  container.classList.remove("sign-up-mode");
});
signupButton2.addEventListener("click", ()=>{
  container.classList.add("sign-up-mode2");
});
signinButton2.addEventListener("click", ()=>{
  container.classList.remove("sign-up-mode2");
});


  var email = document.forms['form']['email'];
  var password = document.forms['form']['password'];
  // var name = document.forms['form']['name'];
  
  var email_error = document.getElementById('email_error');
  var pass_error = document.getElementById('pass_error');
  
  email.addEventListener('textInput', email_Verify);
  password.addEventListener('textInput', pass_Verify);
  
  function validated(){
    if (email.value.length < 9) {
      email.style.border = "1px solid red";
      email_error.style.display = "block";
      email.focus();
      return false;
    }
    if (password.value.length < 6) {
      password.style.border = "1px solid red";
      pass_error.style.display = "block";
      password.focus();
      return false;
    }
  
  }
  function email_Verify(){
    if (email.value.length >= 8) {
      email.style.border = "1px solid silver";
      email_error.style.display = "none";
      return true;
    }
  }
  function pass_Verify(){
    if (password.value.length >= 5) {
      password.style.border = "1px solid silver";
      pass_error.style.display = "none";
      return true;
    }
  }
  
  