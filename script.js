



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








//******** */ For the shopping cart ***********//

//cart data
/*let cart = [
    { id: 1, name: "Modern Lamp", price: 50.00, quantity: 1 },
    { id: 2, name: "Desk Lamp", price: 30.00, quantity: 2 }
];

let taxRate = 0.1; // 10% tax
let shippingCost = 5.00; // Fixed shipping cost

function updateCart() {
    const cartTable = document.getElementById('cart-table');
    cartTable.innerHTML = ""; // Clear the table
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        // Add rows dynamically
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1"
                onchange="updateQuantity(${item.id}, this.value)">
            </td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td><button onclick="removeItem(${item.id})">Remove</button></td>
        `;
        cartTable.appendChild(row);
    });

    // Update price breakdown
    const tax = subtotal * taxRate;
    const total = subtotal + tax + shippingCost;

    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('tax').textContent = tax.toFixed(2);
    document.getElementById('shipping').textContent = shippingCost.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
}

function updateQuantity(id, quantity) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = parseInt(quantity);
        updateCart();
    }
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Initialize the cart
updateCart();

*/
//---------------------------------------------------------
/*

//add new key=>value to the HTML5 storage
function SaveItem(name) {
	var currentQuantity = parseInt(localStorage.getItem(name));
	var newQuantity = 0;
	if currentQuantity.isInteger(){
		newQuantity = currentQuantity + 1;
	}
	else{
		newQuantity = 1;
	}
		
	var newQuantity = currentQuantity + 1;
	localStorage.setItem(name, newQuantity);
}
//------------------------------------------------------------------------------
//change an existing key=>value in the HTML5 storage
function ModifyItem() {
	var name1 = document.forms.ShoppingList.name.value;
	var data1 = document.forms.ShoppingList.data.value;
	//check if name1 is already exists
	
			//check if key exists
			if (localStorage.getItem(name1) !=null)
			{
			  //update
			  localStorage.setItem(name1,data1);
			  document.forms.ShoppingList.data.value = localStorage.getItem(name1);
			}
		
	
	doShowAll();
}
//-------------------------------------------------------------------------
//delete an existing key=>value from the HTML5 storage
function RemoveItem(name) {
	localStorage.removeItem(name);
}
//-------------------------------------------------------------------------------------
//restart the local storage
function ClearAll() {
	localStorage.clear();
	doShowAll();
}
//--------------------------------------------------------------------------------------
// dynamically populate the table with shopping list items
//below step can be done via PHP and AJAX too. 
function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr><th>Item</th><th>Value</th></tr>\n";
		var i = 0;
		//for more advance feature, you can set cap on max items in the cart
		for (i = 0; i <= localStorage.length-1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td></tr>\n";
		}
		//if no item exists in the cart
		if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		//bind the data to html table
		//you can use jQuery too....
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot save shopping list as your browser does not support HTML 5');
	}
}

/*
 =====> Checking the browser support
 //this step may not be required as most of modern browsers do support HTML5
 
 //below function may be redundant
function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}*/
//-------------------------------------------------
/*
You can extend this script by inserting data to database or adding payment processing API to shopping cart..
*/

