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

function operate(firstNumber,op,secondNumber) {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
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


let firstNumber = "";
let secondNumber = "";
let op = "";
let result = "";

const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const clear = document.querySelector(".clear")
const operator = document.querySelectorAll(".operator");
const dele = document.querySelector(".del");
const dot = document.querySelector(".dot");

function show(str) {
    display.innerHTML = "";
    display.innerHTML += str;
    return;
}

function clearAll() {
    firstNumber = ""
    secondNumber = ""
    op = ""
    result = ""
    display.innerHTML = ""
    return;
}

function del() { 
    display.innerHTML = display.innerHTML.slice(0, -1); 
    if(op === "") {
        firstNumber = firstNumber.slice(0,-1);
    } else {
        secondNumber = secondNumber.slice(0,-1);
    }
    return;
}

function decimal() {
    if(display.innerHTML.includes(".")) return;
    if (op === "") {
        firstNumber += ".";
        show(firstNumber);
    } else {
        secondNumber += ".";
        show(secondNumber);
    }
    return
}


numbers.forEach(number => number.addEventListener("click", (e) => {  
    if (op === "") {
        firstNumber += e.target.innerHTML;
        show(firstNumber);
    } else {
        if (result !== "") {
            firstNumber = result;  
            secondNumber += e.target.innerHTML;
            show(secondNumber);
        } else {
            secondNumber += e.target.innerHTML;
            show(secondNumber);
        }
    }
}))

operator.forEach(item => item.addEventListener("click", (e) => {
    if (e.target.innerHTML !== "=") {
        if (secondNumber !== "") {
            op = e.target.innerHTML;
            result = operate(firstNumber, op, secondNumber);
            show(result);
            secondNumber = "";
        } else {
            op = e.target.innerHTML;
        }
    } else {
        result = operate(firstNumber,op,secondNumber);
        show(result);
        secondNumber = "";
    }
}))

clear.addEventListener('click', clearAll);

dele.addEventListener('click', del);

dot.addEventListener('click', decimal);