const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const answer = document.getElementById("answer");
const multiply = document.getElementById("multiply");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const divide = document.getElementById("divide");

const checkInput = (number) => {
    answer.textContent = "";
    
    if (number.value === "") {
        answer.textContent = "Please enter a number";
        return true;
    }
    return false;
}

const addition = () => {
    if (checkInput(firstNumber) || checkInput(secondNumber))
        return;
    let ans = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
    answer.textContent = "";
    answer.textContent = `The Result is ${ans}`;
}


const multiplication = () => {
    if (checkInput(firstNumber) || checkInput(secondNumber)) 
        return;
    let fNum = parseFloat(firstNumber.value);
    let sNum = parseFloat(secondNumber.value);
    console.log(fNum);
    console.log(sNum);
    let ans = fNum * sNum;
    answer.textContent = "";
    answer.textContent = `The Result is ${ans}`;
    
}

const subtraction = () => {
    if (checkInput(firstNumber) || checkInput(secondNumber)) 
        return;
    let ans = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
    answer.textContent = "";
    answer.textContent = `The Result is ${ans}`;   
}

const division = () => {
    if (checkInput(firstNumber) || checkInput(secondNumber))
        return;
    let fNum = parseFloat(firstNumber.value);
    let sNum = parseFloat(secondNumber.value);
    answer.textContent = "";
    if (sNum === 0) {
        answer.textContent = "Please enter a non zero number for 'SecondNumber'";
        return;
    }

    let ans = fNum / sNum;
    answer.textContent = `The Result is ${ans}`;
}

multiply.addEventListener("click", multiplication);
add.addEventListener("click", addition);
subtract.addEventListener("click", subtraction);
divide.addEventListener("click", division);