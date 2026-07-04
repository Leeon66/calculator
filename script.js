// Get a reference to the display input element
const display = document.getElementById('display');

// Appends numbers or operators to the screen
function appendValue(input) {
    display.value += input;
}

// Clears the entire display screen
function clearDisplay() {
    display.value = '';
}

// Computes the math equation safely
function calculateResult() {
    try {
        // handles basic expression strings like "7*8+2" natively
        if (display.value !== '') {
            display.value = eval(display.value);
        }
    } catch (error) {
        // If the user inputs broken math logic (e.g. "7++*5")
        display.value = 'Error';
    }
}