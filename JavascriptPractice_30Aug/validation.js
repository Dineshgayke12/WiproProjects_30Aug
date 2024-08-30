// Function to validate email format
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to validate mobile number
function validateMobile(mobile) {
    const mobilePattern = /^\d{10}$/;
    return mobilePattern.test(mobile);
}

// Event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Get the input values
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Validate email and mobile number
    let isValid = true;

    // Validate email
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = "";
    }

    // Validate mobile number
    if (!validateMobile(mobile)) {
        document.getElementById('mobileError').textContent = "Mobile number must be exactly 10 numeric characters.";
        isValid = false;
    } else {
        document.getElementById('mobileError').textContent = "";
    }

    // If any validation fails, prevent form submission
    if (!isValid) {
        event.preventDefault();
    }
});
