const SHEET_API_URL = "https://script.google.com/macros/s/AKfycbyi-x3qzmAPGAzVkCRIqNQGXJL7YVR6S294cDy_uTvVGb2HhKQH5Oel9Pc1pfl1zXqZ/exec";


// Open Login Form
function openLogin() {
  document.getElementById("choicePanel").style.display = "none";
  document.getElementById("loginForm").classList.remove("hidden");
}

// Open Signup Form
function openSignup() {
  document.getElementById("choicePanel").style.display = "none";
  document.getElementById("signupForm").classList.remove("hidden");
}

// Back to Home
function goHome() {
  window.location.href = "../index.html";
}

// Simulated login
function simulateLogin() {
  const form = document.getElementById("loginForm");
  const identifier = form.querySelector('input[type="text"]').value;

  const status = document.getElementById("loginStatus");
  status.innerText = "Verifying credentials...";

  fetch(SHEET_API_URL, {
    method: "POST",
    body: JSON.stringify({
      type: "login",
      email: identifier,
      method: "login"
    })
  })
  .then(res => res.json())
  .then(() => {
    status.innerText = "Login successful ✔ Redirecting...";

    // ✅ SET LOGIN STATE (THIS WAS MISSING)
    localStorage.setItem("cvm_logged_in", "true");

    // ✅ REDIRECT TO HOME
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 1200);
  })
  .catch(() => {
    status.innerText = "Login failed ❌";
  });
}



// Simulated signup
function simulateSignup() {
  const form = document.getElementById("signupForm");

  const name = form.querySelector('input[placeholder="Full Name"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const mobile = form.querySelector('input[placeholder="Mobile Number"]').value;

  document.getElementById("signupStatus").innerText = "Saving data...";

  fetch(SHEET_API_URL, {
    method: "POST",
    body: JSON.stringify({
      type: "signup",
      name: name,
      email: email,
      mobile: mobile,
      method: "email/mobile"
    })
  })
  .then(() => {
  document.getElementById("signupStatus").innerText =
    "Signup successful ✔ Redirecting to home...";

  // Mark user as logged in
  localStorage.setItem("cvm_logged_in", "true");

  // Redirect after short delay
  setTimeout(() => {
    window.location.href = "../index.html";
  }, 1200);
})

}