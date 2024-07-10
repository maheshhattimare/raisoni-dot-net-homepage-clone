const ninaAssistant = document.getElementById("nina-assistant");
const ninaHover = document.getElementById("nina-hover");
const assistantCloseBtn = document.getElementById("assistant-close-btn");

window.document.addEventListener("DOMContentLoaded", () => {
  ninaAssistant.addEventListener("mouseover", () => {
    ninaHover.style.display = "block";
  });
});

assistantCloseBtn.addEventListener("click", () => {
  ninaHover.style.display = "none";
});
