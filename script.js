const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");

const result = document.getElementById("result");


function getNumbers() {

    const firstNumber = Number(num1.value);
    const secondNumber = Number(num2.value);

    if (num1.value === "" || num2.value === "") {
        alert("Please enter both numbers");
        return null;
    }

    return [firstNumber, secondNumber];
}


// Addition
addBtn.addEventListener("click", function () {

    const numbers = getNumbers();

    if (numbers === null) {
        return;
    }

    const [firstNumber, secondNumber] = numbers;

    const answer = firstNumber + secondNumber;

    result.textContent = `Result: ${answer}`;
});


// Subtraction
subtractBtn.addEventListener("click", function () {

    const numbers = getNumbers();

    if (numbers === null) {
        return;
    }

    const [firstNumber, secondNumber] = numbers;

    const answer = firstNumber - secondNumber;

    result.textContent = `Result: ${answer}`;
});


// Multiplication
multiplyBtn.addEventListener("click", function () {

    const numbers = getNumbers();

    if (numbers === null) {
        return;
    }

    const [firstNumber, secondNumber] = numbers;

    const answer = firstNumber * secondNumber;

    result.textContent = `Result: ${answer}`;
});


// Division
divideBtn.addEventListener("click", function () {

    const numbers = getNumbers();

    if (numbers === null) {
        return;
    }

    const [firstNumber, secondNumber] = numbers;

    if (secondNumber === 0) {
        alert("Cannot divide by zero");
        return;
    }

    const answer = firstNumber / secondNumber;

    result.textContent = `Result: ${answer}`;
});