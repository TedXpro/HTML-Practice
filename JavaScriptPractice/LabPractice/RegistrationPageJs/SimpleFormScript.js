const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const date = document.getElementById("date");
const newDiv = document.createElement("div");

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let summary = `<p>Name: ${firstName.value} ${lastName.value}</p>`;
    summary += `<p>Age: ${age.value}</p>`;
    summary += `<p>Date: ${date.value}</p>`;
    
    newDiv.innerHTML = summary;
    form.appendChild(newDiv);
});

form.addEventListener("reset", (event) => {
    
    form.removeChild(newDiv);
})