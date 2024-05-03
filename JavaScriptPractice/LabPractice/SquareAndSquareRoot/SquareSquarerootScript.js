/* 6.	Write a JavaScript program that read an integer
 number and find the square, if it is negative and otherwise 
 square root, accept the number as a parameter. */

const number = document.getElementById("inputNumber");
const calcBtn = document.getElementById("findBtn");
const answer = document.getElementById("answer");

const calculate = () => {
    answer.textContent = "";
    let num = number.value;
    if (num === "") {
        answer.textContent = "Please enter a number!!!";
        return;
    }

    num = parseFloat(num);
    if (num < 0)
        answer.textContent = `The Square of ${num} is ${num ** 2}`;
    else
        answer.textContent = `The Square root of ${num} is ${Math.sqrt(num)}`;
    number.value = "";
}

calcBtn.addEventListener("click", calculate);