const input = document.querySelector("input");
const mailError = document.getElementById("mail-error");
const form = document.querySelector("form");

input.addEventListener("blur", handleInput);

function handleInput() {
    if (input.validity.valueMissing) {
        mailError.textContent = "Whoops! It looks like you forgot to add your email";
        mailError.classList.add("visible-error");
        input.classList.add("invalid");
        console.log("Email cannot be empty");
    } else if (input.validity.typeMismatch) {
        mailError.textContent = "Please provide a valid email address";
        input.classList.add("invalid");
        mailError.classList.add("visible-error");
        console.log("Please provide a valid email address");
    } else {
        mailError.textContent = "";
        input.classList.remove("invalid");
        mailError.classList.remove("visible-error");
    }
}

form.addEventListener("submit", event => {
    event.preventDefault();
    handleInput.call();
})