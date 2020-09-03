// Create a function called `myFunction()`
function citySearch() {
    // Create a variable called `searchCity` that will use `document.querySelector()` to target the `id` of the input
    // Use `.value` to capture the value of the input and store it in the variable
    var searchCity = document.querySelector('#searchCity').value;

    // Make a `fetch` request concatenating the `searchCity` to the query URL
    // Remember to add your API key at the end
    var key = '4d2fb1b99bcf745d9291a380bc0ac375';
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + searchCity + ',us' + '&appid=' + key)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //https://openweathermap.org/weather-data

            //city name
            $("#cityName").append("<div>" + "City: " + data.city.name + "</div>").addClass("style");

            //Forecast for Day 1
            //the date
            $("#date1").append("<div>" + "The date is, " + data.list[0].dt_txt + "</div>").addClass("style");
            //the humidity
            $("#humidity1").append("<div>" + "The humidty is, " + data.list[0].main.humidity + "</div>").addClass("style");
            //the temperature
            $("#temp1").append("<div>" + "The temperature is, " + data.list[0].main.temp + "</div>").addClass("style");
            //the wind speed
            $("#wind1").append("<div>" + "The wind speed is, " + data.list[0].wind.speed + "</div>").addClass("style");
            //an icon representation of weather conditions
            //and the UV index

            //Forecast for Day 2
            //the date
            $("#date2").append("<div>" + "The date is, " + data.list[1].dt_txt + "</div>").addClass("style");
            //the humidity
            $("#humidity2").append("<div>" + "The humidty is, " + data.list[1].main.humidity + "</div>").addClass("style");
            //the temperature
            $("#temp2").append("<div>" + "The temperature is, " + data.list[1].main.temp + "</div>").addClass("style");
            //the wind speed
            $("#wind2").append("<div>" + "The wind speed is, " + data.list[1].wind.speed + "</div>").addClass("style");
            //an icon representation of weather conditions
            //and the UV index

            //Forecast for Day 3
            //the date
            $("#date3").append("<div>" + "The date is, " + data.list[2].dt_txt + "</div>").addClass("style");
            //the humidity
            $("#humidity3").append("<div>" + "The humidty is, " + data.list[2].main.humidity + "</div>").addClass("style");
            //the temperature
            $("#temp3").append("<div>" + "The temperature is, " + data.list[2].main.temp + "</div>").addClass("style");
            //the wind speed
            $("#wind3").append("<div>" + "The wind speed is, " + data.list[2].wind.speed + "</div>").addClass("style");
            //an icon representation of weather conditions
            //and the UV index

            //Forecast for Day 4
            //the date
            $("#date4").append("<div>" + "The date is, " + data.list[3].dt_txt + "</div>").addClass("style");
            //the humidity
            $("#humidity4").append("<div>" + "The humidty is, " + data.list[3].main.humidity + "</div>").addClass("style");
            //the temperature
            $("#temp4").append("<div>" + "The temperature is, " + data.list[3].main.temp + "</div>").addClass("style");
            //the wind speed
            $("#wind4").append("<div>" + "The wind speed is, " + data.list[3].wind.speed + "</div>").addClass("style");
            //an icon representation of weather conditions
            //and the UV index

            //Forecast for Day 5
            //the date
            $("#date5").append("<div>" + "The date is, " + data.list[4].dt_txt + "</div>").addClass("style");
            //the humidity
            $("#humidity5").append("<div>" + "The humidty is, " + data.list[4].main.humidity + "</div>").addClass("style");
            //the temperature
            $("#temp5").append("<div>" + "The temperature is, " + data.list[4].main.temp + "</div>").addClass("style");
            //the wind speed
            $("#wind5").append("<div>" + "The wind speed is, " + data.list[4].wind.speed + "</div>").addClass("style");
            //an icon representation of weather conditions
            //and the UV index
            console.dir(data);

            /*
var foreCastList = "";
var i;
for (i = 0; i < data.list.length; i += 8) {
    foreCastList += "The forecast is: " + data.list[i] + "<br>";
    console.log(document);
}
$("#foreCast").append("<div>" + foreCastList + "</div>").addClass("style");
*/

        })
        .catch(function () {
            // catch any errors
        });
}

document.getElementById("myBtn").addEventListener("click", function () {
    citySearch();
});