'use strict'
const answer = document.querySelector('.answer');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear')
const showAns = document.querySelector('.enter')
let firstNum = '';
let curOp = null;

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        firstNum += e.target.textContent;
        updateDisplay();
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        const clickedOperator = e.target.textContent;
        if (firstNum !== '') {
            if (curOp !== null) {
                calculate();
            }
            curOp = clickedOperator;
            firstNum += curOp;
        }
    });
});

function calculate() {
    if (curOp !== null) {
        const operatorIndex = firstNum.indexOf(curOp);
        const firstNumber = parseFloat(firstNum.slice(0, operatorIndex));
        const secondNumber = parseFloat(firstNum.slice(operatorIndex + 1));
        switch (curOp) {
            case '+':
                firstNum = (firstNumber + secondNumber).toString();
                break;
            case '-':
                firstNum = (firstNumber - secondNumber).toString();
                break;
            case '*':
                firstNum = (firstNumber * secondNumber).toString();
                break;
            case '%':
                firstNum = (firstNumber / secondNumber).toString();
                break;
            default:
                break;
        }
        curOp = null;
        updateDisplay();
    }
}
// showAns.addEventListener('click', updateDisplay)
clearBtn.addEventListener('click',clearScreen)
function clearScreen() {
    firstNum = '';
    curOp = null;
    updateDisplay();
}

function updateDisplay() {
    answer.textContent = firstNum;
}