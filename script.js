// Get references to the input fields, result div, and rating div
const effectiveRateInput = document.getElementById('effective-rate');
const correctRateInput = document.getElementById('correct-rate');
const costRatioSelect = document.getElementById('cost-ratio');
const resultDiv = document.getElementById('result');
const ratingDiv = document.getElementById('rating');

// Function to calculate the Principle Score (P) and determine the rating
function calculatePrincipleScore() {
    // Get values from input fields
    const E = parseFloat(effectiveRateInput.value)/100;
    const C = parseFloat(correctRateInput.value)/100;
    const R = parseFloat(costRatioSelect.value);

    // Calculate the Principle Score (P)
    const P = 100 * E * (C * R - (1 - C));


    // Determine the rating based on P
    let rating = '';
    let ratingColor = '';
    if (P < 0) {
        rating = 'Bad';
        ratingColor = 'red';
    } else if (P < 25) {
        rating = 'Meh';
        ratingColor = 'gray';
    } else if (P < 50) {
        rating = 'Average';
        ratingColor = 'lightgreen';
    } else if (P < 100) {
        rating = 'Good';
        ratingColor = 'green';
    } else if (P < 200) {
        rating = 'Great';
        ratingColor = 'darkgreen';
    } else {    
        rating = 'Exceptional';
        ratingColor = 'gold';
    }

    // Display the result
    resultDiv.innerHTML = `<span style='color:${ratingColor}' >${P.toFixed(2)}</span>`;
    ratingDiv.innerHTML = `<span style='color:${ratingColor}' >${rating}</span>`;
}

// Add a click event listener to the "Calculate" button
const calculateButton = document.getElementById('calculate-button');
calculateButton.addEventListener('click', calculatePrincipleScore);
