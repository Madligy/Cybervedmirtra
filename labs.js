/* ===============================
   Labs Page - Auth Button Logic
   =============================== */

console.log("labs.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const authActions = document.getElementById("authActions");

  if (!authActions) {
    console.warn("authActions not found on Labs page");
    return;
  }

  // Check login state
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    // User logged in → hide Login & Signup
    authActions.style.display = "none";
  } else {
    // User not logged in → show Login & Signup
    authActions.style.display = "flex";
  }
});
