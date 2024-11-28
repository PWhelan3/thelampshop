<<<<<<< HEAD
//Loading and displaying the json about file
//Fetch the text from the json file
document.addEventListener('DOMContentLoaded', function() {
    // Fetch the content from the JSON file
    fetch('about/about.json')
        .then(response => response.json())
        .then(data => {
            // Get the 'aboutText' array from the JSON
            const aboutTextArray = data.aboutText;
            const aboutSection = document.getElementById('about-section');

            // Clear the "Loading..." text
            aboutSection.innerHTML = '';

            // Loop through each paragraph and create a <p> element
            aboutTextArray.forEach(paragraph => {
                const p = document.createElement('p');
                p.textContent = paragraph;
                aboutSection.appendChild(p);
            });
        })
        //Found this structure from stach overflow
        .catch(error => {
            console.error('Error fetching about section:', error);
            document.getElementById('about-section').textContent = 'Failed to load about section.';
        });
});


//For the carousel
const carousel = document.querySelector('.carousel');
const carouselContainer = document.querySelector('.carousel-container');

// Pause the carousel on hover
carouselContainer.addEventListener('mouseenter', function() {
    carousel.style.animationPlayState = 'paused';
});

carouselContainer.addEventListener('mouseleave', function() {
    carousel.style.animationPlayState = 'running';
});

// Adjust the animation to loop seamlessly
carousel.addEventListener('animationiteration', () => {
    // After one cycle (when the animation completes), reset the position
    carousel.style.animation = 'none';
    carousel.offsetHeight; // Trigger reflow to reset the animation
    carousel.style.animation = 'moveCarousel 30s linear infinite'; // Reapply the animation
});



//For signing up to the newsletter
document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const confirmationMessage = document.getElementById("confirmation-message");

    //Had to read the documentation on regex to try an add the validation functionality
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

    // Show confirmation message
    confirmationMessage.classList.remove("hidden");
    confirmationMessage.textContent = `Thank you, ${nameInput}, for signing up!`;

    //clear the form
    document.getElementById("newsletter-form").reset();
});


//Basically the same as above form validation except some extra inputs and tried to add confirmation message
// For the contact form validation
document.querySelector(".contact-form form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent default form submission

    // Get values from the form inputs
    const nameInput = document.getElementById("name").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const subjectInput = document.getElementById("subject").value;
    const messageInput = document.getElementById("message").value.trim();

    // Create a confirmation message element
    const confirmationMessage = document.createElement("p");
    confirmationMessage.classList.add("confirmation-message");

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Clear any previous confirmation message
    const existingConfirmation = document.querySelector(".confirmation-message");
    if (existingConfirmation) {
        existingConfirmation.remove();
    }

    // Validate the inputs
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

    // If validation passes, show confirmation message
    confirmationMessage.textContent = `Thank you, ${nameInput}, for contacting us! We will get back to you soon.`;
    document.querySelector(".contact-form").appendChild(confirmationMessage); // Append message to the form

    // Reset the form after successful submission
    document.querySelector(".contact-form form").reset();
});
=======
//Loading and displaying the json about file
//Fetch the text from the json file
document.addEventListener('DOMContentLoaded', function() {
    // Fetch the content from the JSON file
    fetch('about/about.json')
        .then(response => response.json())
        .then(data => {
            // Get the 'aboutText' array from the JSON
            const aboutTextArray = data.aboutText;
            const aboutSection = document.getElementById('about-section');

            // Clear the "Loading..." text
            aboutSection.innerHTML = '';

            // Loop through each paragraph and create a <p> element
            aboutTextArray.forEach(paragraph => {
                const p = document.createElement('p');
                p.textContent = paragraph;
                aboutSection.appendChild(p);
            });
        })
        //Found this structure from stach overflow
        .catch(error => {
            console.error('Error fetching about section:', error);
            document.getElementById('about-section').textContent = 'Failed to load about section.';
        });
});


//For the carousel
const carousel = document.querySelector('.carousel');
const carouselContainer = document.querySelector('.carousel-container');

// Pause the carousel on hover
carouselContainer.addEventListener('mouseenter', function() {
    carousel.style.animationPlayState = 'paused';
});

carouselContainer.addEventListener('mouseleave', function() {
    carousel.style.animationPlayState = 'running';
});

// Adjust the animation to loop seamlessly
carousel.addEventListener('animationiteration', () => {
    // After one cycle (when the animation completes), reset the position
    carousel.style.animation = 'none';
    carousel.offsetHeight; // Trigger reflow to reset the animation
    carousel.style.animation = 'moveCarousel 30s linear infinite'; // Reapply the animation
});



//For signing up to the newsletter
document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const confirmationMessage = document.getElementById("confirmation-message");

    //Had to read the documentation on regex to try an add the validation functionality
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

    // Show confirmation message
    confirmationMessage.classList.remove("hidden");
    confirmationMessage.textContent = `Thank you, ${nameInput}, for signing up!`;

    //clear the form
    document.getElementById("newsletter-form").reset();
});


//Basically the same as above form validation except some extra inputs and tried to add confirmation message
// For the contact form validation
document.querySelector(".contact-form form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent default form submission

    // Get values from the form inputs
    const nameInput = document.getElementById("name").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const subjectInput = document.getElementById("subject").value;
    const messageInput = document.getElementById("message").value.trim();

    // Create a confirmation message element
    const confirmationMessage = document.createElement("p");
    confirmationMessage.classList.add("confirmation-message");

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Clear any previous confirmation message
    const existingConfirmation = document.querySelector(".confirmation-message");
    if (existingConfirmation) {
        existingConfirmation.remove();
    }

    // Validate the inputs
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

    // If validation passes, show confirmation message
    confirmationMessage.textContent = `Thank you, ${nameInput}, for contacting us! We will get back to you soon.`;
    document.querySelector(".contact-form").appendChild(confirmationMessage); // Append message to the form

    // Reset the form after successful submission
    document.querySelector(".contact-form form").reset();
});
>>>>>>> 3db2b42807ab866f5ea9bc7ba9e96651a3070868
