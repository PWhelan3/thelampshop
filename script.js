// Our main JS file for the page handling the global scripts used across website!


//*********** Creating a light and dark mode option for the website ****************/
// Select the toggle button
const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun'); // Switch to sun icon
} else {
    document.body.classList.remove('dark-mode');
    themeIcon.classList.replace('fa-sun', 'fa-moon'); // Switch to moon icon
}

// Toggle theme and icon on button click
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun'); // Switch to sun icon
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('fa-sun', 'fa-moon'); // Switch to moon icon
    }
});

// Check and apply saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});




//For the image carousel on the homepage
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



//For signing up to the newsletter on homepage
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
