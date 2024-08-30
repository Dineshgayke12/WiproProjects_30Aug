// Function to filter out negative and odd numbers
function filterArray(arr, callback) {
    return arr.filter(callback);
}

// Callback function to check for non-negative even numbers
function isNonNegativeEven(number) {
    return number >= 0 && number % 2 === 0;
}

// Function to handle the filter button click
function filterNumbers() {
    // Get the input value and split it into an array
    let input = document.getElementById('numbers').value;
    let numbers = input.split(',').map(Number);

    // Filter the array using the callback function
    let filteredArray = filterArray(numbers, isNonNegativeEven);

    // Display the filtered array
    document.getElementById('result').textContent = filteredArray.join(', ');
}
