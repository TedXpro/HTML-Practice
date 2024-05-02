/* 7.	Write a JavaScript program that find the Fibonacci
 series of a given number(example if you enter 8 the fibonacci 
series 0 1 1 2 3 5 8 13 21 34 will be displayed). 
 */

const number = document.getElementById("inputNumber");
const answer = document.getElementById("answer");
const button = document.getElementById("FibonachiNumbers");

const fibonacci = () => {
    if (number.value === "") {
        answer.textContent = "";
        answer.textContent = "Please Enter a number!";
        return;
    }
    const memo = { 0: 0, 1: 1, 2: 1 };
    let arr = [0, 1, 1];
    let num = parseFloat(number.value);
    

    const getFibonachi = (num) => {
        if (num in memo)
            return memo[num];

        let res = getFibonachi(num - 1) + getFibonachi(num - 2);
        memo[num] = res;
        arr.push(res);
        return res;
    }

    let _result = getFibonachi(num + 1);

    let ans = `The ${num} Fibonachi Numbers are: `;
    arr.forEach((curr, index) => {
        if (index === arr.length - 1)
            ans += curr;
        else
            ans += curr + ', ';
    });
    answer.textContent = "";
    number.value = "";
    answer.textContent = ans;
}

button.addEventListener("click", fibonacci);