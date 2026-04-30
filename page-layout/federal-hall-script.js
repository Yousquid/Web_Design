const summaryButton = document.getElementById("summary-button");
const resetButton = document.getElementById("reset-button");
const analysisTextMain = document.getElementById("analysis-text-main");
const analysisSketchBox = document.getElementById("analysis-sketch-box");
const analysisImage = document.getElementById("analysis-image");
const analysisTextBox = document.getElementById("analysis-text-box");

const fullAnalysisText = `The façade presents the classic Doric Temple type – first, 8 columns are built with mostly un-decorative capitals; second, 8 columns seem relatively masculine because of the ratio between the column’s height and the entablature’s width; third, the pediment and entablature are also un-decorative; fourth, the positions and orders of the triglyphs and metopes on the frieze alternate correctly making that the triglyphs are positioning on the top of the columns; and fifth, the columns are directly on the top of stylobate without bases. However, there are indeed some parts of The Federal Hall National Memorial that are not very “classical”: the ratio between the number of columns in the façade and the number of columns in the side is not the classical “2n + 1” of the Parthenon because it has 8 columns on the façade but it has only 15 columns on the side.`;

const shortSummaryText = `Quick Summary: Federal Hall uses a Doric temple façade, strong column order, and classical restraint to associate the building with democracy, civic authority, and the political ideals of ancient Greece.`;

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