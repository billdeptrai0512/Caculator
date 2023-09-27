function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}

let firstNumber;
let secondNumber;
let op;

function operate(firstNumber,op,secondNumber) {
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    if(op === `+`) {
        return add(firstNumber,secondNumber);
    }
    else if(op === `-`) {
        return subtract(firstNumber,secondNumber);
    }
    else if(op === `*`) {
        return multiply(firstNumber,secondNumber);
    }
    else if(op === `/`) {
        return divide(firstNumber, secondNumber);
    }
}

const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const clear = document.querySelector(".clear")

numbers.forEach(number => number.addEventListener("click", () => {
    display.innerHTML += number.innerHTML;
}))

clear.addEventListener("click", () => {
    display.innerHTML = ""
});