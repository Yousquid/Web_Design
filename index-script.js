const today = new Date();
const day = today.getDay();

const weekdayText = document.getElementById("weekday");
const siteLogo = document.querySelector("#site-logo path");
const modeToggle = document.getElementById("mode-toggle");
const modeLabel = document.getElementById("mode-label");
const pageBody = document.body;

if (day === 0) {
    weekdayText.textContent = "Hello Sunday";
} else if (day === 1) {
    weekdayText.textContent = "Hello Monday";
} else if (day === 2) {
    weekdayText.textContent = "Hello Tuesday";
} else if (day === 3) {
    weekdayText.textContent = "Hello Wednesday";
} else if (day === 4) {
    weekdayText.textContent = "Hello Thursday";
} else if (day === 5) {
    weekdayText.textContent = "Hello Friday";
} else if (day === 6) {
    weekdayText.textContent = "Hello Saturday";
}

if (day === 2 || day === 4) {
    siteLogo.style.fill = "#FFB703";
} else {
    siteLogo.style.fill = "#FFFFFF";
}

function toggleColorMode() {
    pageBody.classList.toggle("light-mode");

    if (pageBody.classList.contains("light-mode")) {
        modeLabel.textContent = "Dark Mode";
    } else {
        modeLabel.textContent = "Light Mode";
    }
}

modeToggle.addEventListener("click", toggleColorMode);