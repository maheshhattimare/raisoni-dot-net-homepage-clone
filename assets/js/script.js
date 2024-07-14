document.addEventListener("DOMContentLoaded", function () {
  fetch("/assets/components/header/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("Error loading header:", error));

  fetch("/assets/components/footer/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
  fetch("/assets/components/header/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));

  fetch("/assets/components/header/assistance-and-fab.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("assistance-and-fab").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
});


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
