function checkPassword() {
    const input = document.getElementById("password-input").value;
    const correctPassword = "openheart"; // Change this password
  
    if (input === correctPassword) {
      document.getElementById("password-section").style.display = "none";
      document.querySelector(".container").style.display = "block";
    } else {
      document.getElementById("error-msg").textContent = "❌ Incorrect password. Try again.";
    }
  }
  