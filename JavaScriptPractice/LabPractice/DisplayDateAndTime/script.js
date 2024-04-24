const dateBtn = document.getElementById("disDate");
const answer = document.getElementById("answer");

const displayDate = () => {
    const date = new Date();
    answer.textContent = date;
}

dateBtn.addEventListener("click", displayDate);