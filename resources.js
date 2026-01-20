/* ===============================
   Resources Page - Auth Logic
   =============================== */

console.log("resources.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const authActions = document.getElementById("authActions");

  if (!authActions) {
    console.warn("authActions not found on Resources page");
    return;
  }

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  authActions.style.display =
    (isLoggedIn === "true") ? "none" : "flex";
});
