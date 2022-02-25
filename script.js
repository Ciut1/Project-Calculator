const operandsButton = document.querySelectorAll(".operands")
const operatorsButton = document.querySelectorAll(".operators")
const equalButton = document.getElementById("equal")
const decimalButton = document.getElementById("decimal")
const deleteButton = document.getElementById("del")
const clearButton = document.getElementById("clear")
const previousOperandText = document.querySelector(".previous-operand")
const currentOperandText = document.querySelector(".current-operand")

let a;
let b;
let currentNum;
let previousNum;

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

function clear() {
    previousOperandText = ""
    currentOperandText = ""
}

clearButton.addEventListener("click", () => {
    clear()
})

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

function updateDisplay() {
    currentOperandText.innerHTML = currentNum
}
function appendNum(number) {
    currentNum = number
}

operandsButton.forEach(button => {
    button.addEventListener("click", () => {
        button.appendNum(currentNum.innerHTML)
    })
})

operatorsButton.forEach(button => {
    button.addEventListener("click", () => {
        
    })
})