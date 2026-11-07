// Küçük terminal yazı efekti ve sayfa etkileşimleri için hazır alan.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.add('navigating');
    setTimeout(() => document.body.classList.remove('navigating'), 350);
  });
});
const crashBtn = document.getElementById("crashBtn");
const crashScreen = document.getElementById("crashScreen");
const rebootBtn = document.getElementById("rebootBtn");
const terminalText = document.getElementById("terminalText");

crashBtn.addEventListener("click", () => {
  crashScreen.classList.add("active");

  const messages = [
    "> WARNING: UNAUTHORIZED ACCESS",
    "> USER DETECTED: TOPRAK",
    "> BRAIN.EXE NOT FOUND",
    "> DELETING EGO...",
    "> TWO AI BOTS ARE IN LOVE",
    "> ERROR 404"
  ];

  terminalText.innerHTML = messages.join("<br>");
});

rebootBtn.addEventListener("click", () => {
  crashScreen.classList.remove("active");
});
