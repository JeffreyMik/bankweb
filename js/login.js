


document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  emailField.value = " ";
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  if (email === "sahoss@gmail.com" && password === "1234") {
    window.location.href = 'dashboard.html';
  } else {
   alert("Please enter a valid email address and password");    
  }
});
