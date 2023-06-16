document.getElementById('login-form'). addEventListener('submit'), function(event) {
 event.preventDefault();

 var emailPhoneInput= document.getElementById('email-phone-input').value.trim();
 var passwordInput= document.getElementById('password-input').value.trim();
 if(validateLoginInputs(emailPhoneInput, passwordInput)) {
  // Simulate login request
  setTimeout(function() {
   // Simulate successful login
   alert('Login successful');
   // Redirect to home page or perform any other desired action
  }, 1000);
 }
}

document.getEmelentById('forgot-password').addEventListener('click'), function(event) {
  event.preventDefault();

  var emailPhoneInput= document.getElementById('email-phone-input').value.trim();
  if(emailPhoneInput) {
   // Simulate password recovery request
   setTimeout(function(){
    //Simulate password recovery email/phone sent
    alert('password recovery email/phone sent!');
    // Redirect to password recovery page or perform any desired action
   }, 1000);
  } else {
   alert('Please enter your email or phone to recovery your password.');
  }
}

document.getElementById('Signup-link').addEventListener('click'), function (event) {
 event.preventDefault();

 // Redirect to the registration page or perform any other desired action
 alert('Redirect to the registration page...');
}

function  validateLoginInputs(emailPhone, password) {
 if(!emailPhone || !password) {
  alert('Please enter both email or phone and password');
 }

 // Perform addition validation if needed
 return true;
}