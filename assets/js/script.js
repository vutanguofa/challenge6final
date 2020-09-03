// Create a function called `myFunction()`
function citySearch() {
    // Create a variable called `searchCity` that will use `document.querySelector()` to target the `id` of the input
    // Use `.value` to capture the value of the input and store it in the variable
    var searchCity = document.querySelector('#searchCity').value;

    // Make a `fetch` request concatenating the `searchCity` to the query URL
    // Adding API key to the end of the URL
    var key = '4d2fb1b99bcf745d9291a380bc0ac375';
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + searchCity + ',us' + '&appid=' + key)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.dir(data);
            //city name
            $("#cityName").append("<div>" + "City: " + data.city.name + "</div>");

            //Forecast for Day 1
            $("#foreCast1").addClass("col-md-4 card mt-2 card-body");
            $("#foreCast1").append("<h4>" + data.list[0].dt_txt + "<br />" + "<br />" + "</h4>").addClass("card-title");

            //Switch statement for icon representation of weather condition
            var conditionsD1 = data.list[0].weather[0].description;
            switch (conditionsD1) {
                case 'clear sky':
                    $("#foreCast1").append("<img src=\"" + "http://openweathermap.org/img/wn/01d.png" + "\">");
                    break;
                case 'few clouds':
                    $("#foreCast1").append("<img src=\"" + "http://openweathermap.org/img/wn/02d.png" + "\">");
                    break;
                case 'scattered clouds':
                    $("#foreCast1").append("<img src=\"" + "http://openweathermap.org/img/wn/03d.png" + "\">");
                    break;
                case 'broken clouds':
                    $("#foreCast1").append("<img src=\"" + "http://openweathermap.org/img/wn/04d.png" + "\">");
                    break;
                case 'shower rain':
                    $("#foreCast1").append("<img src=\"" + "http://openweathermap.org/img/wn/09d.png" + "\">");
                    break;
                case 'rain':
                    $("#foreCast1").append("<img src=\"" + "http://openweathermap.org/img/wn/10d.png" + "\">");
                    break;
                case 'thunderstorm':
                    $("#foreCast1").append("<img src=\"" + "http://openweathermap.org/img/wn/11d.png" + "\">");
                    break;
                case 'snow':
                    $("#foreCast1").append("<img src=\"" + "http://openweathermap.org/img/wn/13d.png" + "\">");
                    break;
                case 'mist':
                    $("#foreCast1").append("<img src=\"" + "http://openweathermap.org/img/wn/50d.png" + "\">");
                    break;
                default:
                    $("#foreCast1").append("<img src=\"" + "./assets/images/zombies.jpg" + "\">");
                    break;
            };
            $("#foreCast1").append("<h5>" + "The weather is, " + data.list[0].weather[0].description + "<br />" + "</h5>").addClass("card-title");
            $("#foreCast1").append("<p>" +
                "The humidity is, " + data.list[0].main.humidity + "<br />" +
                "The temperature is, " + data.list[0].main.temp + "<br />" +
                "The wind speed is, " + data.list[0].wind.speed + "<br />" +
                "</p>").addClass("card-text");
            //and the UV index
            //End of forecast for Day 1

            //Forecast for Day 2
            $("#foreCast2").addClass("col-md-4 card mt-2 card-body");
            $("#foreCast2").append("<h4>" + data.list[1].dt_txt + "<br />" + "<br />" + "</h4>").addClass("card-title");

            //Switch statement for icon representation of weather condition
            var conditionsD2 = data.list[1].weather[0].description;
            switch (conditionsD2) {
                case 'clear sky':
                    $("#foreCast2").append("<img src=\"" + "http://openweathermap.org/img/wn/01d.png" + "\">");
                    break;
                case 'few clouds':
                    $("#foreCast2").append("<img src=\"" + "http://openweathermap.org/img/wn/02d.png" + "\">");
                    break;
                case 'scattered clouds':
                    $("#foreCast2").append("<img src=\"" + "http://openweathermap.org/img/wn/03d.png" + "\">");
                    break;
                case 'broken clouds':
                    $("#foreCast2").append("<img src=\"" + "http://openweathermap.org/img/wn/04d.png" + "\">");
                    break;
                case 'shower rain':
                    $("#foreCast2").append("<img src=\"" + "http://openweathermap.org/img/wn/09d.png" + "\">");
                    break;
                case 'rain':
                    $("#foreCast2").append("<img src=\"" + "http://openweathermap.org/img/wn/10d.png" + "\">");
                    break;
                case 'thunderstorm':
                    $("#foreCast2").append("<img src=\"" + "http://openweathermap.org/img/wn/11d.png" + "\">");
                    break;
                case 'snow':
                    $("#foreCast2").append("<img src=\"" + "http://openweathermap.org/img/wn/13d.png" + "\">");
                    break;
                case 'mist':
                    $("#foreCast2").append("<img src=\"" + "http://openweathermap.org/img/wn/50d.png" + "\">");
                    break;
                default:
                    $("#foreCast2").append("<img src=\"" + "./assets/images/zombies.jpg" + "\">");
                    break;
            };

            $("#foreCast2").append("<h5>" + "The weather is, " + data.list[1].weather[0].description + "<br />" + "</h5>").addClass("card-title");
            $("#foreCast2").append("<p>" +
                "The humidity is, " + data.list[1].main.humidity + "<br />" +
                "The temperature is, " + data.list[1].main.temp + "<br />" +
                "The wind speed is, " + data.list[1].wind.speed + "<br />" +
                "</p>").addClass("card-text");
            //and the UV index
            //End of forecast for Day 2

            //Forecast for Day 3
            $("#foreCast3").addClass("col-md-4 card mt-2 card-body");
            $("#foreCast3").append("<h4>" + data.list[2].dt_txt + "<br />" + "<br />" + "</h4>").addClass("card-title");

            //Switch statement for icon representation of weather condition
            var conditionsD3 = data.list[2].weather[0].description;
            switch (conditionsD3) {
                case 'clear sky':
                    $("#foreCast3").append("<img src=\"" + "http://openweathermap.org/img/wn/01d.png" + "\">");
                    break;
                case 'few clouds':
                    $("#foreCast3").append("<img src=\"" + "http://openweathermap.org/img/wn/02d.png" + "\">");
                    break;
                case 'scattered clouds':
                    $("#foreCast3").append("<img src=\"" + "http://openweathermap.org/img/wn/03d.png" + "\">");
                    break;
                case 'broken clouds':
                    $("#foreCast3").append("<img src=\"" + "http://openweathermap.org/img/wn/04d.png" + "\">");
                    break;
                case 'shower rain':
                    $("#foreCast3").append("<img src=\"" + "http://openweathermap.org/img/wn/09d.png" + "\">");
                    break;
                case 'rain':
                    $("#foreCast3").append("<img src=\"" + "http://openweathermap.org/img/wn/10d.png" + "\">");
                    break;
                case 'thunderstorm':
                    $("#foreCast3").append("<img src=\"" + "http://openweathermap.org/img/wn/11d.png" + "\">");
                    break;
                case 'snow':
                    $("#foreCast3").append("<img src=\"" + "http://openweathermap.org/img/wn/13d.png" + "\">");
                    break;
                case 'mist':
                    $("#foreCast3").append("<img src=\"" + "http://openweathermap.org/img/wn/50d.png" + "\">");
                    break;
                default:
                    $("#foreCast3").append("<img src=\"" + "./assets/images/zombies.jpg" + "\">");
                    break;
            };

            $("#foreCast3").append("<h5>" + "The weather is, " + data.list[2].weather[0].description + "<br />" + "</h5>").addClass("card-title");
            $("#foreCast3").append("<p>" +
                "The humidity is, " + data.list[2].main.humidity + "<br />" +
                "The temperature is, " + data.list[2].main.temp + "<br />" +
                "The wind speed is, " + data.list[2].wind.speed + "<br />" +
                "</p>").addClass("card-text");
            //and the UV index
            //End of forecast for Day 3

            //Forecast for Day 4
            $("#foreCast4").addClass("col-md-4 card mt-2 card-body");
            $("#foreCast4").append("<h4>" + data.list[3].dt_txt + "<br />" + "<br />" + "</h4>").addClass("card-title");

            //Switch statement for icon representation of weather condition
            var conditionsD4 = data.list[3].weather[0].description;
            switch (conditionsD4) {
                case 'clear sky':
                    $("#foreCast4").append("<img src=\"" + "http://openweathermap.org/img/wn/01d.png" + "\">");
                    break;
                case 'few clouds':
                    $("#foreCast4").append("<img src=\"" + "http://openweathermap.org/img/wn/02d.png" + "\">");
                    break;
                case 'scattered clouds':
                    $("#foreCast4").append("<img src=\"" + "http://openweathermap.org/img/wn/03d.png" + "\">");
                    break;
                case 'broken clouds':
                    $("#foreCast4").append("<img src=\"" + "http://openweathermap.org/img/wn/04d.png" + "\">");
                    break;
                case 'shower rain':
                    $("#foreCast4").append("<img src=\"" + "http://openweathermap.org/img/wn/09d.png" + "\">");
                    break;
                case 'rain':
                    $("#foreCast4").append("<img src=\"" + "http://openweathermap.org/img/wn/10d.png" + "\">");
                    break;
                case 'thunderstorm':
                    $("#foreCast4").append("<img src=\"" + "http://openweathermap.org/img/wn/11d.png" + "\">");
                    break;
                case 'snow':
                    $("#foreCast4").append("<img src=\"" + "http://openweathermap.org/img/wn/13d.png" + "\">");
                    break;
                case 'mist':
                    $("#foreCast4").append("<img src=\"" + "http://openweathermap.org/img/wn/50d.png" + "\">");
                    break;
                default:
                    $("#foreCast4").append("<img src=\"" + "./assets/images/zombies.jpg" + "\">");
                    break;
            };

            $("#foreCast4").append("<h5>" + "The weather is, " + data.list[3].weather[0].description + "<br />" + "</h5>").addClass("card-title");
            $("#foreCast4").append("<p>" +
                "The humidity is, " + data.list[3].main.humidity + "<br />" +
                "The temperature is, " + data.list[3].main.temp + "<br />" +
                "The wind speed is, " + data.list[3].wind.speed + "<br />" +
                "</p>").addClass("card-text");
            //and the UV index
            //End of forecast for Day 4

            //Forecast for Day 5
            $("#foreCast5").addClass("col-md-4 card mt-2 card-body");
            $("#foreCast5").append("<h4>" + data.list[4].dt_txt + "<br />" + "<br />" + "</h4>").addClass("card-title");
            //Switch statement for icon representation of weather condition
            var conditionsD5 = data.list[4].weather[0].description;
            switch (conditionsD5) {
                case 'clear sky':
                    $("#foreCast5").append("<img src=\"" + "http://openweathermap.org/img/wn/01d.png" + "\">");
                    break;
                case 'few clouds':
                    $("#foreCast5").append("<img src=\"" + "http://openweathermap.org/img/wn/02d.png" + "\">");
                    break;
                case 'scattered clouds':
                    $("#foreCast5").append("<img src=\"" + "http://openweathermap.org/img/wn/03d.png" + "\">");
                    break;
                case 'broken clouds':
                    $("#foreCast5").append("<img src=\"" + "http://openweathermap.org/img/wn/04d.png" + "\">");
                    break;
                case 'shower rain':
                    $("#foreCast5").append("<img src=\"" + "http://openweathermap.org/img/wn/09d.png" + "\">");
                    break;
                case 'rain':
                    $("#foreCast5").append("<img src=\"" + "http://openweathermap.org/img/wn/10d.png" + "\">");
                    break;
                case 'thunderstorm':
                    $("#foreCast5").append("<img src=\"" + "http://openweathermap.org/img/wn/11d.png" + "\">");
                    break;
                case 'snow':
                    $("#foreCast5").append("<img src=\"" + "http://openweathermap.org/img/wn/13d.png" + "\">");
                    break;
                case 'mist':
                    $("#foreCast5").append("<img src=\"" + "http://openweathermap.org/img/wn/50d.png" + "\">");
                    break;
                default:
                    $("#foreCast5").append("<img src=\"" + "./assets/images/zombies.jpg" + "\">");
                    break;
            };

            $("#foreCast5").append("<h5>" + "The weather is, " + data.list[4].weather[0].description + "<br />" + "</h5>").addClass("card-title");
            $("#foreCast5").append("<p>" +
                "The humidity is, " + data.list[4].main.humidity + "<br />" +
                "The temperature is, " + data.list[4].main.temp + "<br />" +
                "The wind speed is, " + data.list[4].wind.speed + "<br />" +
                "</p>").addClass("card-text");
            //and the UV index
            //End of forecast for Day 5
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

document.getElementById("myBtn").addEventListener("click", function () {
    citySearch();
});








