/* ===== SIMULATED STATES ===== */

function simulateLogin() {
  const status = document.getElementById("loginStatus");
  status.textContent = "Encrypting connection...";
  setTimeout(() => status.textContent = "Verifying credentials...", 1200);
  setTimeout(() => status.textContent = "Access granted ✔", 2500);
}

function simulateSignup() {
  const status = document.getElementById("signupStatus");
  status.textContent = "Generating secure identity...";
  setTimeout(() => status.textContent = "Mission registered ✔", 2000);
}
