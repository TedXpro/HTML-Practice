const answer = document.getElementById("answer");
const side1 = document.getElementById("side1");
const side2 = document.getElementById("side2");
const side3 = document.getElementById("side3");
const calArea = document.getElementById("area");

const calculateArea = () => {
    let s1 = parseFloat(side1.value);
    let s2 = parseFloat(side2.value);
    let s3 = parseFloat(side3.value);
    let p = (s1 + s2 + s3) / 2;
    let ans = parseFloat(Math.sqrt(p * (p - s1) * (p - s2) * (p - s3)));
    answer.innerHTML = "";
    answer.innerHTML = `Area of Answer <br> ${ans}`;
}

calArea.addEventListener("click", calculateArea);