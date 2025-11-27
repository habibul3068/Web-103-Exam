var weatherInfo = [
    { district: "Dhaka", temperature: 32, condition: "Sunny" },
    { district: "Sylhet", temperature: 27, condition: "Rainy" },
    { district: "Khulna", temperature: 30, condition: "Cloudy" }
];

function checkWeather(){
    var selectBox  = document.getElementById("select");
    var userChoice = selectBox.value;

    var imageTag = document.getElementById("image");
    var errorTag = document.getElementById("error");
    var statusTag = document.getElementById("status"); // NEW TEXT

    // Reset display
    imageTag.style.display = "none";
    statusTag.innerHTML = "";
    errorTag.innerHTML = "";

    if(userChoice === ""){
        errorTag.innerHTML = "Warning: Please select a city!";
    } 
    else {
        var result = weatherInfo.find(item => item.district === userChoice);

        if(result){
            // Set image
            imageTag.src = "../img/" + result.condition + ".png"; 
            imageTag.style.display = "inline-block";

            // Set weather text
            statusTag.innerHTML = "Weather Status: " + result.condition;
        }
    }
}
