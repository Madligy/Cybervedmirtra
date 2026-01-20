function updateAuthUI() {
  const authActions = document.getElementById("authActions");
  const logoutBtn = document.getElementById("logoutBtn");

  const isLoggedIn = localStorage.getItem("cvm_logged_in") === "true";

  if (authActions) {
    authActions.style.display = isLoggedIn ? "none" : "flex";
  }

  if (logoutBtn) {
    logoutBtn.style.display = isLoggedIn ? "inline-block" : "none";
  }
}







/* ===============================
   CyberVedMitra - Main Script
   =============================== */

console.log("CyberVedMitra main.js loaded");

/* ===============================
   DOM READY
   =============================== */
document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     AUTH STATE HANDLING
     =============================== */
  const authActions = document.getElementById("authActions");
  const isLoggedIn = localStorage.getItem("cvm_logged_in");

  if (authActions) {
    authActions.style.display = (isLoggedIn === "true") ? "none" : "flex";
  }

  /* ===============================
     ABOUT – GET STARTED BUTTON
     =============================== */
  const aboutBtn = document.querySelector(".about-btn");
  if (aboutBtn) {
    aboutBtn.addEventListener("click", () => {
      alert("Welcome to CyberVedMitra 👋\nLet’s start learning cybersecurity!");
    });
  }

  /* ===============================
     SMOOTH SCROLL – ABOUT
     =============================== */
  if (window.location.hash === "#about") {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  /* ===============================
     SMOOTH SCROLL – CONTACT
     =============================== */
  const contactLink = document.querySelector(".contact-link");
  const contactSection = document.getElementById("contact");

  if (contactLink && contactSection) {
    contactLink.addEventListener("click", (e) => {
      e.preventDefault();
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ===============================
     ARE YOU BEING WATCHED?
     =============================== */
  const revealBtn = document.getElementById("revealBtn");
  const watchData = document.getElementById("watchData");

  if (revealBtn && watchData) {
    revealBtn.addEventListener("click", () => {
      const items = watchData.querySelectorAll("span");
      if (items.length >= 3) {
        items[0].textContent = "Your City (Approx.)";
        items[1].textContent = navigator.platform;
        items[2].textContent = navigator.userAgent.split(" ")[0];
      }
    });
  }

  /* ===============================
     HACK CHALLENGE
     =============================== */
  const challengeButtons = document.querySelectorAll(".challenge-options button");
  const challengeResult = document.getElementById("challengeResult");

  challengeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (!challengeResult) return;

      if (btn.dataset.answer === "true") {
        challengeResult.textContent = "🎉 Correct! Strong passwords protect you.";
        challengeResult.style.color = "lime";
      } else {
        challengeResult.textContent = "❌ Weak password. Hackers guess these easily.";
        challengeResult.style.color = "red";
      }
    });
  });

});

/* ===============================
   CYBER SAFETY SCORE
   =============================== */
function setScore(score) {
  const result = document.getElementById("scoreResult");
  if (!result) return;

  if (score >= 20) {
    result.textContent = "🕵️ Digital Detective – Great habits!";
  } else {
    result.textContent = "🔰 Safety Seeker – Let’s improve together!";
  }
}

/* ===============================
   LOGOUT (USED LATER)
   =============================== */
function logoutUser() {
  localStorage.removeItem("cvm_logged_in");
  window.location.reload();
}
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Clear session
    localStorage.removeItem("cvm_logged_in");

    // Update UI immediately
    updateAuthUI();

    // Redirect cleanly
    setTimeout(() => {
      window.location.href = "index.html";
    }, 200);
  });
}
