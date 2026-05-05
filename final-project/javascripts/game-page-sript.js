const colorModeToggle = document.getElementById("color-mode-toggle");
const pageBody = document.body;

let currentMode;

if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    currentMode = "light";
} else {
    currentMode = "dark";
}

function setColorMode(mode) {
    pageBody.classList.remove("theme-light", "theme-dark");

    if (mode === "light") {
        pageBody.classList.add("theme-light");
        colorModeToggle.textContent = "Switch to Dark Mode";
        colorModeToggle.setAttribute("aria-pressed", "true");
        currentMode = "light";
    } else {
        pageBody.classList.add("theme-dark");
        colorModeToggle.textContent = "Switch to Light Mode";
        colorModeToggle.setAttribute("aria-pressed", "false");
        currentMode = "dark";
    }
}

function toggleColorMode() {
    if (currentMode === "dark") {
        setColorMode("light");
    } else {
        setColorMode("dark");
    }
}

setColorMode(currentMode);

colorModeToggle.addEventListener("click", toggleColorMode);