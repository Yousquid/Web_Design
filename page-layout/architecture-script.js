const summaryButton = document.getElementById("summary-button");
const resetButton = document.getElementById("reset-button");
const analysisTextMain = document.getElementById("analysis-text-main");
const analysisSketchBox = document.getElementById("analysis-sketch-box");
const analysisImage = document.getElementById("analysis-image");
const analysisTextBox = document.getElementById("analysis-text-box");

const fullAnalysisText = `Let’s begin with the façade of One Hanover Square. First, it is very clear that all elements on the façade of One Hanover Square are symmetrical, following the central axis of the building. And the elements on the façade are on a proportion: all windows have the same horizontal distances and they are all aligned on the same vertical lines. These designs make me feel rational and logical. Second, I can see the use of classical elements on the façade of One Hanover Square: segmental and triangular pediments and Corithian columns. Third, on the top end of the building, there are classical cornices. All these three features are suggesting that it is built in Italian Renaissance style. Moreover, here are more features of its façade that indicate that One Hanover Square was specifically built in Italian high Renaissance style. Forth, the façade of One Hanover Square is hierarchical and dynamic: visually, the ground layer with segmental pediments are the heaviest layer because it has the biggest windows, and the top layer are the lightest layer because it has no pediments and the smallest windows. This hierarchical and dynamic façade reminds me of the façade of Palazzo Farnese designed by Antonio da Sangallo the Younger and Michelangelo, which had a similar hierarchical and dynamic façade that feels heavier on the bottom and lighter on the top. Fifth, the pediments and decorations on the window frames are reliefs which feel sculptural, showing another feature of Italian high Renaissance.`;

const shortSummaryText = `Quick Summary: One Hanover Square uses symmetry, classical window pediments, Corinthian columns, and a strong top-to-bottom hierarchy to create the stable and rational visual language associated with the Italian High Renaissance.`;

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