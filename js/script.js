
// Variables
let feedbackSubmitted = false;
const maxAttempts = 3;
let attempts = 0;


// Collection (Array)
const feedbackMessages = [];


// validateForm(): Validates the form data and adds it to the feedbackMessages array
function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting by default
    const name = document.getElementById('name-feedback').value;
    const email = document.getElementById('email-feedback').value;
    const feedback = document.getElementById('feedback').value;


    // Simple validation 
    if (name === "" || email === "" || feedback === "") {
        alert("All fields are required.");
        return false;
    }

    feedbackMessages.push({ name, email, feedback });
    feedbackSubmitted = true;
    alert("Thank you for your feedback!");
    attempts = 0; // Reset attempts after successful submission
    document.querySelector("form").reset(); // Clear the form
    return true;
}


// handleSubmit(): Manages form submissions and limits the number of attempts
function handleSubmit(event) {
    if (attempts < maxAttempts) {
        validateForm(event);
        attempts++;
    } else {
        alert("Maximum submission attempts reached.");
    }
}


// Event listener for form submission
document.querySelector("form").addEventListener("submit", handleSubmit);



// displayFeedbackMessages(): Iterates through feedbackMessages using a loop and displays them in the console
function displayFeedbackMessages() {
    feedbackMessages.forEach((message, index) => {
        console.log(`Message ${index + 1}:`, message);
    });
}


// Optional: Call this function to display all feedback messages in the console
displayFeedbackMessages();

