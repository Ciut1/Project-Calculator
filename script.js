const operandsButton = document.querySelectorAll(".operands")
const operatorsButton = document.querySelectorAll(".operators")
const equalButton = document.getElementById("equal")
const decimalButton = document.getElementById("decimal")
const clearButton = document.getElementById("clear")
const deleteButton = document.getElementById("del")
const displaySecondary = document.querySelector(".secondary-display")
const displayMain = document.querySelector(".main-display")

clearButton.addEventListener("click", clear)
function clear() {
    displayMain.textContent = ""
    displaySecondary.textContent = ""
}

deleteButton.addEventListener("click", del)
function del() {
    displayMain.textContent = displayMain.textContent.slice(0, -1)
}

operandsButton.forEach((operand) => {
    operand.addEventListener("click", () => {
        displayMain.textContent += operand.value
    })
})

operatorsButton.forEach((operator) => {
    operator.addEventListener("click", () => {
        displayMain.textContent += operator.value
    })
})

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}


equalButton.addEventListener("click", compute)
function compute(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b)
        case "-":
            return subtract(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return divide(a, b)
    }
}
let answer;
function evaluate() {
    answer = compute(a, b)
    displayMain.textContent = answer
}