/* 4.	Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  */
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const answer = document.getElementById("answer");
const mainDiv = document.getElementById("mainDiv");
const resultLabel = document.querySelector("label[for='answer']");
const calculate = document.getElementById("calculate");
const errorMessage = document.createElement("p");

const addNumbers = () => {
    const num1 = firstNumber.value;
    const num2 = secondNumber.value;
    if (num1 === "" || num2 === "") {
        errorMessage.textContent = "";
        errorMessage.textContent = `Please Enter a number in the input area`;
        mainDiv.appendChild(errorMessage);
        return;
    }
    mainDiv.removeChild(errorMessage);
    let sum = 0;
    if (num1 === num2)
        sum = 3 * num1;
    else
        sum = parseFloat(num1) + parseFloat(num2);
    answer.value = sum;
    answer.classList.toggle("hidden");
    resultLabel.classList.toggle("hidden");
    firstNumber.value = "";
    secondNumber.value = "";
}

calculate.addEventListener("click", addNumbers);