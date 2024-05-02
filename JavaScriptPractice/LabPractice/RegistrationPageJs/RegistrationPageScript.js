/* This js code is for the registration page that is inside the Practice directory/loginPage file */
const form = document.getElementById("form");
const fullName = document.getElementById("nameInput");
const phone = document.getElementById("phoneInput");
const age = document.getElementById("ageInputageInput");

const summaryDiv = document.createElement("div");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    
    let summary = `<p>Name: ${fullName.value}</p>`;
    summary += `<p> Age: ${age.value}</p>`;
    summary += `<p>Phone: ${phone.value} </p>`;
    
    summaryDiv.innerHTML = summary;
    form.appendChild(summaryDiv);
});


// const color = document.getElementById("colorInput");
// const date = document.getElementById("dateInput");
// const gender = document.getElementsByName("gender");
// const skills = document.getElementsByName("skills");
// const country = document.getElementsById("selectInput");


// summary += `<p>Color: ${color.value}</p>`;
// summary += `<p>BirthDate: ${date.value}</p>`;
// summary += `<p>Password${password.value}</p>`;