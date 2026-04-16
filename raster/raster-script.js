const img = document.getElementById("random-image");

const randomPosition = Math.floor(Math.random() * 5);

img.style.top = "";
img.style.left = "";
img.style.right = "";
img.style.bottom = "";
img.style.transform = "";

if (randomPosition === 0) {
    img.style.top = "20px";
    img.style.left = "20px";

} else if (randomPosition === 1) {
    img.style.top = "20px";
    img.style.right = "20px";

} else if (randomPosition === 2) {
    img.style.bottom = "20px";
    img.style.left = "20px";

} else if (randomPosition === 3) {
    img.style.bottom = "20px";
    img.style.right = "20px";

} else if (randomPosition === 4) {
    img.style.top = "50%";
    img.style.left = "50%";
    img.style.transform = "translate(-50%, -50%)";
}