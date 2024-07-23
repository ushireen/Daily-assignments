document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    

    document.querySelector("#userError").textContent = "";
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";
    document.querySelector("#confirmPassError").textContent = "";
    document.querySelector("#numberError").textContent = "";

    // Get form values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirmpass").value;
    const number = document.getElementById("number").value;

    // Validation patterns
    const usernamePattern = /^[A-Za-z]{3,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const phonePattern = /^\d{10}$/;   
    
    let isValid = true;

   
    if (!usernamePattern.test(username)) {
      document.getElementById("userError").textContent = "Username must be at least 3 characters long and contain only letters";
      document.getElementById("userError").style.display = "block";
      isValid = false;
    }
    
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    }

    if (!passwordPattern.test(password)) {
      document.getElementById("passwordError").textContent ="Password must be at least 8 characters with numbers, upper case and lowercse letters ";
      document.getElementById("passwordError").style.display = "block";
      isValid = false;
    }
    if (password  !== confirmPass) {
        document.getElementById("confirmPassError").textContent ="Password donot match ";
        document.getElementById("confirmPassError").style.display = "block";
        isValid = false;

    if (!phonePattern.test(number)) {
        document.getElementById("numberError").textContent = "Phone number should contain 10 digits";
        document.getElementById("numberError").style.display = "block";
        isValid = false;
      }

    if (isValid) {
      alert("Registration successful!");
    } 
}
});
