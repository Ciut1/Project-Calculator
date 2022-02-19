const operandsButton = document.querySelectorAll(".operands")
const operatorsButton = document.querySelectorAll(".operators")
const equalButton = document.getElementById("equal")
const decimalButton = document.getElementById("decimal")
const deleteButton = document.getElementById("del")
const clearButton = document.getElementById("clear")
const previousOperand = document.querySelector(".previous-operand")
const currentOperand = document.querySelector(".current-operand")

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

operandsButton.forEach(button => {
    button.addEventListener("click", () => {

    })
})

operatorsButton.forEach(button => {
    button.addEventListener("click", () => {
        
    })
})