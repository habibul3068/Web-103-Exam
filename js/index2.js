// Weather data (array of objects)
const weather = [
    {district: "Dhaka",  temp: 32, condition: "Sunny"},
    {district: "Sylhet", temp: 27, condition: "Rainy"},
    {district: "Khulna", temp: 30, condition: "Cloudy"},
];

function showWeather() {
    let city = document.getElementById("district").value;
    let warning = document.getElementById("warning");
    let output = document.getElementById("output");

    // Reset previous content
    warning.innerHTML = "";
    output.innerHTML = "";

    // Hide images
    document.getElementById("sunny").style.display = "none";
    document.getElementById("rainy").style.display = "none";
    document.getElementById("cloudy").style.display = "none";

    // If no city selected
    if (city === "") {
        warning.innerHTML = "Please select a district!";
        return;
    }

    // Get selected district data
    let data = weather.find(item => item.district === city);

    // Display result
    output.innerHTML = `
        <span style="color:#0d6efd; font-size:22px;">${city}</span><br>
        Temperature: ${data.temp}°C <br>
        Condition: ${data.condition}
    `;

    // Show matching image
    if (data.condition === "Sunny") {
        document.getElementById("sunny").style.display = "block";
    }
    else if (data.condition === "Rainy") {
        document.getElementById("rainy").style.display = "block";
    }
    else if (data.condition === "Cloudy") {
        document.getElementById("cloudy").style.display = "block";
    }
}
