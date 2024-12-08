//Contact form validation and confirmation message


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const subjectInput = document.getElementById("subject").value;
    const messageInput = document.getElementById("message").value.trim();
    const confirmationMessage = document.getElementById("contact-confirmation-message");

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate inputs
    if (nameInput === "") {
        alert("Please enter your name.");
        return;
    }
    if (!emailRegex.test(emailInput)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (subjectInput === "") {
        alert("Please select a subject.");
        return;
    }
    if (messageInput === "") {
        alert("Please enter a message.");
        return;
    }

    // Show confirmation message
    confirmationMessage.classList.remove("hidden");
    confirmationMessage.textContent = `Thank you, ${nameInput}, for contacting us! We will get back to you soon.`;

    // Clear the form
    document.getElementById("contact-form").reset();
});
