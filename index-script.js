const today = new Date();
const day = today.getDay(); 


const weekdayText = document.getElementById("weekday");
const siteLogo = document.getElementById("site-logo");

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