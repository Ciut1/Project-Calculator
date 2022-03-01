const operandsButton = document.querySelectorAll(".operands")
const operatorsButton = document.querySelectorAll(".operators")
const equalButton = document.getElementById("equal")
const decimalButton = document.getElementById("decimal")
const clearButton = document.getElementById("clear")
const deleteButton = document.getElementById("del")
const displaySecondary = document.querySelector(".secondary-display")
const displayMain = document.querySelector(".main-display")

/*operandsButton.forEach((operand), () => {
    operand.addEventListener("click", () => {

    })
})*/

clearButton.addEventListener("click", () => {
    displayMain.innerHTML = "0"
    displaySecondary.innerHTML = ""
})

deleteButton.addEventListener("click", () => {
    displayMain.value = displayMain.value.slice(0, -1)
})

operandsButton.forEach((operand) => {
    operand.addEventListener("click", () => {
        displayMain.innerHTML = operand.value
    })
})

operatorsButton.forEach((operator) => {
    operator.addEventListener("click", () => {
        displayMain.innerHTML = operator.value
    })
}

function compute(firstNumber, operator, secondNumber) {
    let computation;
    const first = parseFloat(firstNumber)
    const second = parseFloat(secondNumber)
    if (isNaN(second) || isNaN(first)) {
    switch (operator) {
        case "+":
            computation = firstNumber + secondNumber
            break;
        case "-":
            computation = firstNumber - secondNumber
            break;
        case "*":
            computation = firstNumber * secondNumber
            break;
        case "/":
            computation = firstNumber / secondNumber
            break;
    }
}