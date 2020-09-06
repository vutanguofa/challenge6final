function citySearch() {
    // Create a variable called `searchCity` that will use `document.querySelector()` to target the `id` of the input
    // Use `.value` to capture the value of the input and store it in the variable
    var searchCity = document.querySelector('#searchCity').value;
    localStorage.setItem("City1", searchCity);

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
            var searchedCity = data.city.name;
            var date1 = data.list[0].dt_txt;
            var description1 = data.list[0].weather[0].description;
            var humidity1 = data.list[0].main.humidity;
            var temp1 = data.list[0].main.temp;
            var speed1 = data.list[0].wind.speed;

            // Add to previous search list
            $("#prevSearch").prepend("<p>" + searchedCity + "</p>");

            // Current weather forecast
            var conditionsD1 = description1;
            switch (conditionsD1) {
                case 'clear sky':
                    $("#currentIcon").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/01d.png\n" + "></center></p>");
                    break;
                case 'few clouds':
                    $("#currentIcon").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/02d.png\n" + "></center></p>");
                    break;
                case 'scattered clouds':
                    $("#currentIcon").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/03d.png\n" + "></center></p>");
                    break;
                case 'broken clouds':
                    $("#currentIcon").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/04d.png\n" + "></center></p>");
                    break;
                case 'shower rain':
                    $("#currentIcon").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/09d.png\n" + "></center></p>");
                    break;
                case 'rain':
                    $("#currentIcon").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/10d.png\n" + "></center></p>");
                    break;
                case 'thunderstorm':
                    $("#currentIcon").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/11d.png\n" + "></center></p>");
                    break;
                case 'snow':
                    $("#currentIcon").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/13d.png\n" + "></center></p>");
                    break;
                case 'mist':
                    $("#currentIcon").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/50d.png\n" + "></center></p>");
                    break;
                default:
                    $("#currentIcon").replaceWith("<p><center><img src=\n" + "./assets/images/zombies.jpg\n" + "></center></p>");
                    break;
            };
            document.getElementById("#currentWeather").innerHTML =
                searchedCity + " (" + date1 + ")" + "<br />" +
                "Condition: " + description1 + "<br />" +
                "Humidity: " + humidity1 + "<br />" +
                "Temperature: " + temp1 + "<br />" +
                "Wind Speed: " + speed1;

            //Forecast for Day 1
            //Switch statement for icon representation of weather condition
            var conditionsD1 = description1;
            switch (conditionsD1) {
                case 'clear sky':
                    $("#weatherIcon1").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/01d.png\n" + "></center></p>");
                    break;
                case 'few clouds':
                    $("#weatherIcon1").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/02d.png\n" + "></center></p>");
                    break;
                case 'scattered clouds':
                    $("#weatherIcon1").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/03d.png\n" + "></center></p>");
                    break;
                case 'broken clouds':
                    $("#weatherIcon1").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/04d.png\n" + "></center></p>");
                    break;
                case 'shower rain':
                    $("#weatherIcon1").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/09d.png\n" + "></center></p>");
                    break;
                case 'rain':
                    $("#weatherIcon1").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/10d.png\n" + "></center></p>");
                    break;
                case 'thunderstorm':
                    $("#weatherIcon1").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/11d.png\n" + "></center></p>");
                    break;
                case 'snow':
                    $("#weatherIcon1").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/13d.png\n" + "></center></p>");
                    break;
                case 'mist':
                    $("#weatherIcon1").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/50d.png\n" + "></center></p>");
                    break;
                default:
                    $("#weatherIcon1").replaceWith("<p><center><img src=\n" + "./assets/images/zombies.jpg\n" + "></center></p>");
                    break;
            };

            document.getElementById("#foreCast1").innerHTML =
                date1 + "<br />" +
                "Condition: " + description1 + "<br />" +
                "Humidity: " + humidity1 + "<br />" +
                "Temperature: " + temp1 + "<br />" +
                "Wind Speed: " + speed1;

            //Store in local storage
            localStorage.setItem("Date1", date1);
            localStorage.setItem("Weather description1", description1);
            localStorage.setItem("Humidity1", humidity1);
            localStorage.setItem("Temperature1", temp1);
            localStorage.setItem("Wind speed1", speed1);

            //and the UV index
            //End of forecast for Day 1

            //Forecast for Day 2
            var date2 = data.list[1].dt_txt;
            var description2 = data.list[1].weather[0].description;
            var humidity2 = data.list[1].main.humidity;
            var temp2 = data.list[1].main.temp;
            var speed2 = data.list[1].wind.speed;

            //Switch statement for icon representation of weather condition
            var conditionsD2 = description2;
            switch (conditionsD2) {
                case 'clear sky':
                    $("#weatherIcon2").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/01d.png\n" + "></center></p>");
                    break;
                case 'few clouds':
                    $("#weatherIcon2").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/02d.png\n" + "></center></p>");
                    break;
                case 'scattered clouds':
                    $("#weatherIcon2").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/03d.png\n" + "></center></p>");
                    break;
                case 'broken clouds':
                    $("#weatherIcon2").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/04d.png\n" + "></center></p>");
                    break;
                case 'shower rain':
                    $("#weatherIcon2").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/09d.png\n" + "></center></p>");
                    break;
                case 'rain':
                    $("#weatherIcon2").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/10d.png\n" + "></center></p>");
                    break;
                case 'thunderstorm':
                    $("#weatherIcon2").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/11d.png\n" + "></center></p>");
                    break;
                case 'snow':
                    $("#weatherIcon2").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/13d.png\n" + "></center></p>");
                    break;
                case 'mist':
                    $("#weatherIcon2").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/50d.png\n" + "></center></p>");
                    break;
                default:
                    $("#weatherIcon2").replaceWith("<p><center><img src=\n" + "./assets/images/zombies.jpg\n" + "></center></p>");
                    break;
            };

            document.getElementById("#foreCast2").innerHTML =
                date2 + "<br />" +
                "Condition: " + description2 + "<br />" +
                "Humidity: " + humidity2 + "<br />" +
                "Temperature: " + temp2 + "<br />" +
                "Wind Speed: " + speed2;

            //Store in local storage
            localStorage.setItem("Date2", date2);
            localStorage.setItem("Weather description2", description2);
            localStorage.setItem("Humidity2", humidity2);
            localStorage.setItem("Temperature2", temp2);
            localStorage.setItem("Wind speed2", speed2);

            //and the UV index
            //End of forecast for Day 2

            //Forecast for Day 3
            var date3 = data.list[2].dt_txt;
            var description3 = data.list[2].weather[0].description;
            var humidity3 = data.list[2].main.humidity;
            var temp3 = data.list[2].main.temp;
            var speed3 = data.list[2].wind.speed;

            //Switch statement for icon representation of weather condition
            var conditionsD3 = description3;
            switch (conditionsD3) {
                case 'clear sky':
                    $("#weatherIcon3").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/01d.png\n" + "></center></p>");
                    break;
                case 'few clouds':
                    $("#weatherIcon3").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/02d.png\n" + "></center></p>");
                    break;
                case 'scattered clouds':
                    $("#weatherIcon3").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/03d.png\n" + "></center></p>");
                    break;
                case 'broken clouds':
                    $("#weatherIcon3").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/04d.png\n" + "></center></p>");
                    break;
                case 'shower rain':
                    $("#weatherIcon3").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/09d.png\n" + "></center></p>");
                    break;
                case 'rain':
                    $("#weatherIcon3").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/10d.png\n" + "></center></p>");
                    break;
                case 'thunderstorm':
                    $("#weatherIcon3").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/11d.png\n" + "></center></p>");
                    break;
                case 'snow':
                    $("#weatherIcon3").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/13d.png\n" + "></center></p>");
                    break;
                case 'mist':
                    $("#weatherIcon3").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/50d.png\n" + "></center></p>");
                    break;
                default:
                    $("#weatherIcon3").replaceWith("<p><center><img src=\n" + "./assets/images/zombies.jpg\n" + "></center></p>");
                    break;
            };

            document.getElementById("#foreCast3").innerHTML =
                date3 + "<br />" +
                "Condition: " + description3 + "<br />" +
                "Humidity: " + humidity3 + "<br />" +
                "Temperature: " + temp3 + "<br />" +
                "Wind Speed: " + speed3;

            //Store in local storage
            localStorage.setItem("Date3", date3);
            localStorage.setItem("Weather description3", description3);
            localStorage.setItem("Humidity3", humidity3);
            localStorage.setItem("Temperature3", temp3);
            localStorage.setItem("Wind speed3", speed3);

            //and the UV index
            //End of forecast for Day 3

            //Forecast for Day 4
            var date4 = data.list[3].dt_txt;
            var description4 = data.list[3].weather[0].description;
            var humidity4 = data.list[3].main.humidity;
            var temp4 = data.list[3].main.temp;
            var speed4 = data.list[3].wind.speed;

            //Switch statement for icon representation of weather condition
            var conditionsD4 = description4;
            switch (conditionsD4) {
                case 'clear sky':
                    $("#weatherIcon4").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/01d.png\n" + "></center></p>");
                    break;
                case 'few clouds':
                    $("#weatherIcon4").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/02d.png\n" + "></center></p>");
                    break;
                case 'scattered clouds':
                    $("#weatherIcon4").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/03d.png\n" + "></center></p>");
                    break;
                case 'broken clouds':
                    $("#weatherIcon4").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/04d.png\n" + "></center></p>");
                    break;
                case 'shower rain':
                    $("#weatherIcon4").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/09d.png\n" + "></center></p>");
                    break;
                case 'rain':
                    $("#weatherIcon4").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/10d.png\n" + "></center></p>");
                    break;
                case 'thunderstorm':
                    $("#weatherIcon4").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/11d.png\n" + "></center></p>");
                    break;
                case 'snow':
                    $("#weatherIcon4").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/13d.png\n" + "></center></p>");
                    break;
                case 'mist':
                    $("#weatherIcon4").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/50d.png\n" + "></center></p>");
                    break;
                default:
                    $("#weatherIcon4").replaceWith("<p><center><img src=\n" + "./assets/images/zombies.jpg\n" + "></center></p>");
                    break;
            };

            document.getElementById("#foreCast4").innerHTML =
                date4 + "<br />" +
                "Condition: " + description4 + "<br />" +
                "Humidity: " + humidity4 + "<br />" +
                "Temperature: " + temp4 + "<br />" +
                "Wind Speed: " + speed4;

            //Store in local storage
            localStorage.setItem("Date4", date4);
            localStorage.setItem("Weather description4", description4);
            localStorage.setItem("Humidity4", humidity4);
            localStorage.setItem("Temperature4", temp4);
            localStorage.setItem("Wind speed4", speed4);

            //and the UV index
            //End of forecast for Day 4

            //Forecast for Day 5
            var date5 = data.list[4].dt_txt;
            var description5 = data.list[4].weather[0].description;
            var humidity5 = data.list[4].main.humidity;
            var temp5 = data.list[4].main.temp;
            var speed5 = data.list[4].wind.speed;

            //Switch statement for icon representation of weather condition
            var conditionsD5 = description5;
            switch (conditionsD5) {
                case 'clear sky':
                    $("#weatherIcon5").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/01d.png\n" + "></center></p>");
                    break;
                case 'few clouds':
                    $("#weatherIcon5").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/02d.png\n" + "></center></p>");
                    break;
                case 'scattered clouds':
                    $("#weatherIcon5").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/03d.png\n" + "></center></p>");
                    break;
                case 'broken clouds':
                    $("#weatherIcon5").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/04d.png\n" + "></center></p>");
                    break;
                case 'shower rain':
                    $("#weatherIcon5").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/09d.png\n" + "></center></p>");
                    break;
                case 'rain':
                    $("#weatherIcon5").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/10d.png\n" + "></center></p>");
                    break;
                case 'thunderstorm':
                    $("#weatherIcon5").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/11d.png\n" + "></center></p>");
                    break;
                case 'snow':
                    $("#weatherIcon5").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/13d.png\n" + "></center></p>");
                    break;
                case 'mist':
                    $("#weatherIcon5").replaceWith("<p><center><img src=\n" + "http://openweathermap.org/img/wn/50d.png\n" + "></center></p>");
                    break;
                default:
                    $("#weatherIcon5").replaceWith("<p><center><img src=\n" + "./assets/images/zombies.jpg\n" + "></center></p>");
                    break;
            };

            document.getElementById("#foreCast5").innerHTML =
                date5 + "<br />" +
                "Condition: " + description5 + "<br />" +
                "Humidity: " + humidity5 + "<br />" +
                "Temperature: " + temp5 + "<br />" +
                "Wind Speed: " + speed5;

            //Store in local storage
            localStorage.setItem("Date5", date5);
            localStorage.setItem("Weather description5", description5);
            localStorage.setItem("Humidity5", humidity5);
            localStorage.setItem("Temperature5", temp5);
            localStorage.setItem("Wind speed5", speed5);

            //and the UV index
            //End of forecast for Day 5

        })
        .catch((error) => {
            console.error('Error:', error);
        });
};


/*
document.getElementById("#prevCity").innerHTML = localStorage.getItem("City1");
document.getElementById("#prevCast1").innerHTML = localStorage.getItem("Date1");
document.getElementById("#prevCast2").innerHTML = localStorage.getItem("Weather description1");
document.getElementById("#prevCast3").innerHTML = localStorage.getItem("Humidity1");
document.getElementById("#prevCast4").innerHTML = localStorage.getItem("Temperature1");
document.getElementById("#prevCast5").innerHTML = localStorage.getItem("Wind speed1");
*/
document.getElementById("myBtn").addEventListener("click", function () {
    citySearch();
});