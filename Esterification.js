// JavaScript code for interactive elements and functionality

// JavaScript code for interactive elements and functionality

// Get DOM elements
var startButton = document.getElementById('start-button');
var resetButton = document.getElementById('reset-button');
var beaker = document.getElementById('beaker');


// Add event listeners
startButton.addEventListener('click', startExperiment);
resetButton.addEventListener('click', resetExperiment);

// Functions
function startExperiment() {
    // Add classes to display the ester
    beaker.classList.add('show');

    // Set background image of the ester
    beaker.style.backgroundImage = "url('Icons/Ester.png')";
}

function resetExperiment() {
    // Remove classes to reset the experiment
    beaker.classList.remove('show');
 
   
    // Reset background image of the beaker
    beaker.style.backgroundImage = "none";
}

