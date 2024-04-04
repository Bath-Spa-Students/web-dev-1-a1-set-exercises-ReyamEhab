<script>
  // Function to calculate the total cost
  function calculateTotal() {
    // Get the values from the inputs
    var petrolCost = parseFloat(document.getElementById('petrolCost').value);
    var liters = parseFloat(document.getElementById('liters').value);
    
    // Calculate the total cost
    var totalCost = petrolCost * liters;
    
    // Display the total cost
    document.getElementById('totalCost').innerText = "Total Cost: $" + totalCost.toFixed(2);
  }
</script>