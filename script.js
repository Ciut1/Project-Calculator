const operandsButton = document.querySelectorAll(".operands")
const operatorsButton = document.querySelectorAll(".operators")
const equalButton = document.getElementById("equal")
const decimalButton = document.getElementById("decimal")
const clearButton = document.getElementById("clear")
const deleteButton = document.getElementById("del")
const displaySecondary = document.querySelector(".secondary-display")
const displayMain = document.querySelector(".main-display")

let firstNumber;
let secondNumber;

operandsButton.forEach((operand), () => {
    operand.addEventListener("click", () => {

    })
})

clearButton.addEventListener("click", () => {
    displayMain.innerHTML = "0"
    displaySecondary.innerHTML = ""
})

deleteButton.addEventListener("click", () => {
    displayMain.value = displayMain.value.slice(0, -1)
})

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber
}

function multiplication(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}

function division(firstNumber, secondNumber) {
    return firstNumber / secondNumber
}

function compute(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiplication(firstNumber, secondNumber);
        case "/":
            return division(firstNumber, secondNumber);
    }
}