// function to add two numbers
function add(a, b) {
    return a + b;
}

// function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

