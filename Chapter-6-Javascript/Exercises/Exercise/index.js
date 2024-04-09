// Function to calculate the total cost
function calculateTotal() {
    // Get the values from the inputs
    var petrolCost = parseFloat(document.getElementById('petrolCost').value); // Get petrol cost value
    var liters = parseFloat(document.getElementById('liters').value); // Get liters value
    
    // Calculate the total cost
    var totalCost = petrolCost * liters; // Calculate total cost
    
    // Display the total cost
    document.getElementById('totalCost').innerText = "Total Cost: ﹩" + totalCost.toFixed(2); // Display total cost with 2 decimal places
}
