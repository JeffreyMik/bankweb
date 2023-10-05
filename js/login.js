document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  emailField.value = " ";
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  // Define multiple username and password combinations
  const validCredentials = [
    { email: "sahoss@gmail.com", password: "1234" },
    { email: "jeffrey@gmail.com", password: "0404" },
    { email: "tom@test.nl", password: "0101" },
    { email: "loes@test.nl", password: "0202" },
    { email: "rutger@test.nl", password: "0303" },
    // Add more username and password combinations here
  ];

  // Check if the entered email and password match any of the valid combinations
  const isValid = validCredentials.some((credentials) => {
    return credentials.email === email && credentials.password === password;
  });

  if (isValid) {
    window.location.href = 'dashboard.html';
  } else {
    alert("Please enter a valid email address and password");
  }
});