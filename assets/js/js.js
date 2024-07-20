const ninaAssistant = document.getElementById("nina-assistant");
const ninaHover = document.getElementById("nina-hover");
const assistantCloseBtn = document.getElementById("assistant-close-btn");
const ninaChatCloseBtn = document.getElementById("nina-chat-close-btn");
const ninaChatBlock = document.getElementById("nina-chat-block");

//nina assistant
window.document.addEventListener("DOMContentLoaded", () => {
  ninaHover.style.display = "block";
});
assistantCloseBtn.addEventListener("click", () => {
  ninaHover.style.display = "none";
});

ninaAssistant.addEventListener("click", () => {
  ninaChatBlock.style.display = "block";
  ninaChatBlock.classList.add("in-amin");
});
ninaChatCloseBtn.addEventListener("click", () => {
  ninaChatBlock.style.display = "none";
});
// nina assistant end

	
