const display = document.querySelector(".calculator-display")
const operands = Array.from(document.querySelectorAll(".operands"))
const operators = Array.from(document.querySelectorAll(".operators"))
const equal = document.getElementById("equal")
const decimal = document.getElementById("decimal")
const plusMinus = document.getElementById("plus-minus")
const del = document.getElementById("del")
const clearEntry = document.getElementById("clear-entry")
const clear = document.getElementById("clear")

// Making the operands (number 0 to 9)
operands.forEach((operand) => {
    operand.addEventListener("click", () => {
        display.textContent += operand.value;
    })
})
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

function operate(a, operator, b) {
    if (operator === "+") {
        return add(a, b)
    } else if (operator === "-") {
        return subtract(a, b)
    } else if (operator === "*") {
        return multiplication(a, b)
    } else if (operator === "/") {
        return division(a, b)
    } else {
        return alert("Error: Undefined operator")
    }
}