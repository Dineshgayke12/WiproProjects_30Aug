// Function to calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
    let interest = (principal * rate * time) / 100;
    return interest;
}

// Example usage
let principal = 1000; // Principal amount
let rate = 5;         // Annual interest rate in percentage
let time = 2;         // Time period in years

let simpleInterest = calculateSimpleInterest(principal, rate, time);
console.log("Simple Interest is: " + simpleInterest);
