function volume_sphere() {
    // Get the radius input element
    let radiusInput = document.getElementById("radius").value;
    
    // Convert input to a floating-point number
    let radius = parseFloat(radiusInput);
    
    // Get the volume input field
    let volumeField = document.getElementById("volume");

    // Validate input: Check if radius is a positive number
    if (isNaN(radius) || radius < 0) {
        volumeField.value = "NaN"; // Show 'NaN' for invalid inputs
        return;
    }

    // Calculate the volume using the formula V = (4/3) * π * r³
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places and update the output field
    volumeField.value = volume.toFixed(4);
}

// Attach event listener to handle form submission
document.getElementById("MyForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
    volume_sphere(); // Call function to calculate volume
});
