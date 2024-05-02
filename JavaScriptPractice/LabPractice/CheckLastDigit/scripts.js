// 5.	Write a JavaScript program that checks whether the last digit of three positive integers is the same.
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const thirdNumber = document.getElementById("thirdNumber");
const submitButton = document.getElementById("checkLastDigit"); 
const answer = document.getElementById("answer");

const checkDigits = () => {
    let num1 = firstNumber.value;
    let num2 = secondNumber.value;
    let num3 = thirdNumber.value;
    answer.textContent = "";
    if (num1 === "" || num2 === "" || num3 === "") {
        answer.textContent = "Please enter the numbers in the input field";
        return;
    }
    num1 = num1.charAt(num1.length - 1);
    num2 = num2.charAt(num2.length - 1);
    num3 = num3.charAt(num3.length - 1);
    let ans = "";
    if (num1 === num2 && num1 === num3 && num2 === num3)
        ans = "All the three numbers last digit are THE SAME!";
    else
        ans = "All the three numbers last digit are NOT THE SAME!";
    answer.textContent = ans;
}

submitButton.addEventListener("click", checkDigits)