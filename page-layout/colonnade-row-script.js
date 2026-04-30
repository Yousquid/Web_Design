const summaryButton = document.getElementById("summary-button");
const resetButton = document.getElementById("reset-button");
const analysisTextMain = document.getElementById("analysis-text-main");
const analysisSketchBox = document.getElementById("analysis-sketch-box");
const analysisImage = document.getElementById("analysis-image");
const analysisTextBox = document.getElementById("analysis-text-box");

const fullAnalysisText = `Let’s get to the façade of Colonnade Row. The most observable feature of this building is its Corinthian orders: 13 columns with leaf-like capitals, bases, and fluting equally divide the space of the façade proportionally and rhythmically. Besides, the entablature and frieze are on top of the columns, fulfilling the structure of the orders. However, on its façade, there is no pediment. Behind the columns is the wall and the windows on two different floors. Under the columns, there is still one first floor. The outside wall of the first floor still follows the vertical rhythms of the columns and windows. Even though these columns are the most important elements of Colonnade Row, Colonnade Row uses walls to carry the weight rather than the columns, and these Greek elements are just decorations outside on its façade. Also, the façade of Colonnade Row was built in an ancient Greek Temple style, but it was actually built as houses for people to live.`;

const shortSummaryText = `Quick Summary: Colonnade Row adopts Greek Revival decoration, especially its Corinthian colonnade, to associate domestic architecture with ideals of democracy, order, and cultural prestige.`;

function showQuickSummary() {
    analysisTextMain.textContent = shortSummaryText;
}

function showFullAnalysis() {
    analysisTextMain.textContent = fullAnalysisText;
}

function highlightSketch() {
    analysisSketchBox.classList.add("is-highlighted");
    analysisTextBox.classList.add("is-emphasized");
}

function removeHighlight() {
    analysisSketchBox.classList.remove("is-highlighted");
    analysisTextBox.classList.remove("is-emphasized");
}

summaryButton.addEventListener("click", showQuickSummary);
resetButton.addEventListener("click", showFullAnalysis);

analysisImage.addEventListener("mouseenter", highlightSketch);
analysisImage.addEventListener("mouseleave", removeHighlight);
analysisImage.addEventListener("focus", highlightSketch);
analysisImage.addEventListener("blur", removeHighlight);