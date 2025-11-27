var weatherInfo = [
    { district: "Dhaka", temperature: 32, condition: "Sunny" },
    { district: "Sylhet", temperature: 27, condition: "Rainy" },
    { district: "Khulna", temperature: 30, condition: "Cloudy" }
];

function checkWeather() {
    var selectBox = document.getElementById("select");
    var userChoice = selectBox.value;

    var imageTag = document.getElementById("image");
    var errorTag = document.getElementById("error");
    var statusTag = document.getElementById("statusText"); // New variable for text

    // Reset display (hide everything first)
    imageTag.style.display = "none";
    statusTag.style.display = "none";
    errorTag.innerHTML = "";

    if (userChoice === "") {
        errorTag.innerHTML = "Warning: Please select a city!";
    } 
    else {
        // Find the city in the array
        var result = weatherInfo.find(item => item.district === userChoice);

        if (result) {
            // 1. Update Image
            imageTag.src = "../img/" + result.condition + ".png"; 
            imageTag.style.display = "block";

            // 2. Update Status Text (The new requirement)
            statusTag.innerText = "Weather Status: " + result.condition;
            statusTag.style.display = "block";
        }
    }
}