var weatherInfo = [
    { district: "Dhaka", temperature: 32, condition: "Sunny" },
    { district: "Sylhet", temperature: 27, condition: "Rainy" },
    { district: "Khulna", temperature: 30, condition: "Cloudy" }
];

// --- PART B: The Function ---
function checkWeather(){
    var selectBox  = document.getElementById("select");
    var userChoice = selectBox.value;

    var imageTag = document.getElementById("image");
    var errorTag = document.getElementById("error");

    // Reset display
    imageTag.style.display = "none";
    errorTag.innerHTML = "";

    if(userChoice === ""){
        errorTag.innerHTML = "Warning: Please select a city!";
    } 
    else(userChoice === "")
    {
        var result = weatherInfo.find(item => item.district === userChoice);

        if(result){
            imageTag.src = "../img/" + result.condition + ".png"; 
            imageTag.style.display = "inline-block";
        }
    }
}