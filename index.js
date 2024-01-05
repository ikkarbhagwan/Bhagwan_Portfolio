function handleSubmit() {
    alert("Form submitted successfully...");

}

// Event Listener for submission 

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    handleSubmit();
});

