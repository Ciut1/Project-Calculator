const operandsButton = document.querySelectorAll(".operands")
const operatorsButton = document.querySelectorAll(".operators")
const equalButton = document.getElementById("equal")
const decimalButton = document.getElementById("decimal")
const deleteButton = document.getElementById("del")
const clearButton = document.getElementById("clear")
const displaySecondary = document.querySelector(".secondary-display")
const displayMain = document.querySelector(".main-display")

let firstNumber;
let secondNumber;

// Calculator operation
function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiplication(a, b) {
    return a * b
}

function division(a, b) {
    return a / b
}

function compute(a, operator, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiplication(a, b);
        case "/":
            return division(a, b);
    }
}


function clear() {
    displayMain = ""
    displaySecondary = ""
}

clearButton.addEventListener("click", () => {
    clear()
})