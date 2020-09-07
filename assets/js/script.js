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

            // Setting variables with respone object
            var searchedCity = data.city.name;
            var date1 = data.list[0].dt_txt;
            var description1 = data.list[0].weather[0].description;
            var humidity1 = data.list[0].main.humidity;
            var temp1 = data.list[0].main.temp;
            var speed1 = data.list[0].wind.speed;
            var lat = data.city.coord.lat;
            var lon = data.city.coord.lon;

            fetch('http://api.openweathermap.org/data/2.5/uvi?appid=' + key + '&lat=' + lat + '&lon=' + lon)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.dir(data);
                    var uvIndex = data.value;
                    document.getElementById("uvCondition").innerHTML = "UV Index: " + uvIndex;
                    if (uvIndex >= 0 && uvIndex <= 2) {
                        $("#uvCondition").addClass("favorable");
                    } else if (uvIndex >= 3 && uvIndex <= 7) {
                        $("#uvCondition").addClass("moderate");
                    } else {
                        $("#uvCondition").addClass("severe");
                    };
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

            // Add to previous search list
            $("#prevSearch").prepend("<p>" + searchedCity + "</p>");

            // Current weather forecast
            var conditionsD1 = description1;
            switch (conditionsD1) {
                case 'clear sky':
                    function currentIcon1() {
                        document.getElementById("currentIcon").src = "http://openweathermap.org/img/wn/01d.png";
                        $("#conditionStyle").addClass("favorable");
                    };
                    currentIcon1();
                    break;
                case 'few clouds':
                    function currentIcon2() {
                        document.getElementById("currentIcon").src = "http://openweathermap.org/img/wn/02d.png";
                        $("#conditionStyle").addClass("favorable");
                    };
                    currentIcon2();
                    break;
                case 'scattered clouds':
                    function currentIcon3() {
                        document.getElementById("currentIcon").src = "http://openweathermap.org/img/wn/03d.png";
                        $("#conditionStyle").addClass("moderate");
                    };
                    currentIcon3();
                    break;
                case 'broken clouds':
                    function currentIcon4() {
                        document.getElementById("currentIcon").src = "http://openweathermap.org/img/wn/04d.png";
                        $("#conditionStyle").addClass("moderate");
                    };
                    currentIcon4();
                    break;
                case 'shower rain':
                    function currentIcon5() {
                        document.getElementById("currentIcon").src = "http://openweathermap.org/img/wn/09d.png";
                        $("#conditionStyle").addClass("severe");
                    };
                    currentIcon5();
                    break;
                case 'rain':
                    function currentIcon6() {
                        document.getElementById("currentIcon").src = "http://openweathermap.org/img/wn/10d.png";
                        $("#conditionStyle").addClass("moderate");
                    };
                    currentIcon6();
                    break;
                case 'thunderstorm':
                    function currentIcon7() {
                        document.getElementById("currentIcon").src = "http://openweathermap.org/img/wn/11d.png";
                        $("#conditionStyle").addClass("severe");
                    };
                    currentIcon7();
                    break;
                case 'snow':
                    function currentIcon8() {
                        document.getElementById("currentIcon").src = "http://openweathermap.org/img/wn/13d.png";
                        $("#conditionStyle").addClass("severe");
                    };
                    currentIcon8();
                    break;
                case 'mist':
                    function currentIcon9() {
                        document.getElementById("currentIcon").src = "http://openweathermap.org/img/wn/50d.png";
                        $("#conditionStyle").addClass("severe");
                    };
                    currentIcon9();
                    break;
                default:
                    function currentIcon10() {
                        document.getElementById("currentIcon").src = "./assets/images/zombies.jpg";
                        $("#conditionStyle").addClass("severe");
                    };
                    currentIcon10();
                    break;
            };

            document.getElementById("currentWeather").innerHTML =
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
                    function currentIcon1() {
                        document.getElementById("weatherIcon1").src = "http://openweathermap.org/img/wn/01d.png";
                        $("#conditionStyle1").addClass("favorable");
                    };
                    currentIcon1();
                    break;
                case 'few clouds':
                    function currentIcon2() {
                        document.getElementById("weatherIcon1").src = "http://openweathermap.org/img/wn/02d.png";
                        $("#conditionStyle1").addClass("favorable");
                    };
                    currentIcon2();
                    break;
                case 'scattered clouds':
                    function currentIcon3() {
                        document.getElementById("weatherIcon1").src = "http://openweathermap.org/img/wn/03d.png";
                        $("#conditionStyle1").addClass("moderate");
                    };
                    currentIcon3();
                    break;
                case 'broken clouds':
                    function currentIcon4() {
                        document.getElementById("weatherIcon1").src = "http://openweathermap.org/img/wn/04d.png";
                        $("#conditionStyle1").addClass("moderate");
                    };
                    currentIcon4();
                    break;
                case 'shower rain':
                    function currentIcon5() {
                        document.getElementById("weatherIcon1").src = "http://openweathermap.org/img/wn/09d.png";
                        $("#conditionStyle1").addClass("severe");
                    };
                    currentIcon5();
                    break;
                case 'rain':
                    function currentIcon6() {
                        document.getElementById("weatherIcon1").src = "http://openweathermap.org/img/wn/10d.png";
                        $("#conditionStyle1").addClass("moderate");
                    };
                    currentIcon6();
                    break;
                case 'thunderstorm':
                    function currentIcon7() {
                        document.getElementById("weatherIcon1").src = "http://openweathermap.org/img/wn/11d.png";
                        $("#conditionStyle1").addClass("severe");
                    };
                    currentIcon7();
                    break;
                case 'snow':
                    function currentIcon8() {
                        document.getElementById("weatherIcon1").src = "http://openweathermap.org/img/wn/13d.png";
                        $("#conditionStyle1").addClass("severe");
                    };
                    currentIcon8();
                    break;
                case 'mist':
                    function currentIcon9() {
                        document.getElementById("weatherIcon1").src = "http://openweathermap.org/img/wn/50d.png";
                        $("#conditionStyle1").addClass("severe");
                    };
                    currentIcon9();
                    break;
                default:
                    function currentIcon10() {
                        document.getElementById("weatherIcon1").src = "./assets/images/zombies.jpg";
                        $("#conditionStyle1").addClass("severe");
                    };
                    currentIcon10();
                    break;
            };

            document.getElementById("foreCast1").innerHTML =
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
                    function currentIcon1() {
                        document.getElementById("weatherIcon2").src = "http://openweathermap.org/img/wn/01d.png";
                        $("#conditionStyle2").addClass("favorable");
                    };
                    currentIcon1();
                    break;
                case 'few clouds':
                    function currentIcon2() {
                        document.getElementById("weatherIcon2").src = "http://openweathermap.org/img/wn/02d.png";
                        $("#conditionStyle2").addClass("favorable");
                    };
                    currentIcon2();
                    break;
                case 'scattered clouds':
                    function currentIcon3() {
                        document.getElementById("weatherIcon2").src = "http://openweathermap.org/img/wn/03d.png";
                        $("#conditionStyle2").addClass("moderate");
                    };
                    currentIcon3();
                    break;
                case 'broken clouds':
                    function currentIcon4() {
                        document.getElementById("weatherIcon2").src = "http://openweathermap.org/img/wn/04d.png";
                        $("#conditionStyle2").addClass("moderate");
                    };
                    currentIcon4();
                    break;
                case 'shower rain':
                    function currentIcon5() {
                        document.getElementById("weatherIcon2").src = "http://openweathermap.org/img/wn/09d.png";
                        $("#conditionStyle2").addClass("severe");
                    };
                    currentIcon5();
                    break;
                case 'rain':
                    function currentIcon6() {
                        document.getElementById("weatherIcon2").src = "http://openweathermap.org/img/wn/10d.png";
                        $("#conditionStyle2").addClass("moderate");
                    };
                    currentIcon6();
                    break;
                case 'thunderstorm':
                    function currentIcon7() {
                        document.getElementById("weatherIcon2").src = "http://openweathermap.org/img/wn/11d.png";
                        $("#conditionStyle2").addClass("severe");
                    };
                    currentIcon7();
                    break;
                case 'snow':
                    function currentIcon8() {
                        document.getElementById("weatherIcon2").src = "http://openweathermap.org/img/wn/13d.png";
                        $("#conditionStyle2").addClass("severe");
                    };
                    currentIcon8();
                    break;
                case 'mist':
                    function currentIcon9() {
                        document.getElementById("weatherIcon2").src = "http://openweathermap.org/img/wn/50d.png";
                        $("#conditionStyle2").addClass("severe");
                    };
                    currentIcon9();
                    break;
                default:
                    function currentIcon10() {
                        document.getElementById("weatherIcon2").src = "./assets/images/zombies.jpg";
                        $("#conditionStyle2").addClass("severe");
                    };
                    currentIcon10();
                    break;
            };

            document.getElementById("foreCast2").innerHTML =
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
                    function currentIcon1() {
                        document.getElementById("weatherIcon3").src = "http://openweathermap.org/img/wn/01d.png";
                        $("#conditionStyle3").addClass("favorable");
                    };
                    currentIcon1();
                    break;
                case 'few clouds':
                    function currentIcon2() {
                        document.getElementById("weatherIcon3").src = "http://openweathermap.org/img/wn/02d.png";
                        $("#conditionStyle3").addClass("favorable");
                    };
                    currentIcon2();
                    break;
                case 'scattered clouds':
                    function currentIcon3() {
                        document.getElementById("weatherIcon3").src = "http://openweathermap.org/img/wn/03d.png";
                        $("#conditionStyle3").addClass("moderate");
                    };
                    currentIcon3();
                    break;
                case 'broken clouds':
                    function currentIcon4() {
                        document.getElementById("weatherIcon3").src = "http://openweathermap.org/img/wn/04d.png";
                        $("#conditionStyle3").addClass("moderate");
                    };
                    currentIcon4();
                    break;
                case 'shower rain':
                    function currentIcon5() {
                        document.getElementById("weatherIcon3").src = "http://openweathermap.org/img/wn/09d.png";
                        $("#conditionStyle3").addClass("severe");
                    };
                    currentIcon5();
                    break;
                case 'rain':
                    function currentIcon6() {
                        document.getElementById("weatherIcon3").src = "http://openweathermap.org/img/wn/10d.png";
                        $("#conditionStyle3").addClass("moderate");
                    };
                    currentIcon6();
                    break;
                case 'thunderstorm':
                    function currentIcon7() {
                        document.getElementById("weatherIcon3").src = "http://openweathermap.org/img/wn/11d.png";
                        $("#conditionStyle3").addClass("severe");
                    };
                    currentIcon7();
                    break;
                case 'snow':
                    function currentIcon8() {
                        document.getElementById("weatherIcon3").src = "http://openweathermap.org/img/wn/13d.png";
                        $("#conditionStyle3").addClass("severe");
                    };
                    currentIcon8();
                    break;
                case 'mist':
                    function currentIcon9() {
                        document.getElementById("weatherIcon3").src = "http://openweathermap.org/img/wn/50d.png";
                        $("#conditionStyle3").addClass("severe");
                    };
                    currentIcon9();
                    break;
                default:
                    function currentIcon10() {
                        document.getElementById("weatherIcon3").src = "./assets/images/zombies.jpg";
                        $("#conditionStyle3").addClass("severe");
                    };
                    currentIcon10();
                    break;
            };

            document.getElementById("foreCast3").innerHTML =
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
                    function currentIcon1() {
                        document.getElementById("weatherIcon4").src = "http://openweathermap.org/img/wn/01d.png";
                        $("#conditionStyle4").addClass("favorable");
                    };
                    currentIcon1();
                    break;
                case 'few clouds':
                    function currentIcon2() {
                        document.getElementById("weatherIcon4").src = "http://openweathermap.org/img/wn/02d.png";
                        $("#conditionStyle4").addClass("favorable");
                    };
                    currentIcon2();
                    break;
                case 'scattered clouds':
                    function currentIcon3() {
                        document.getElementById("weatherIcon4").src = "http://openweathermap.org/img/wn/03d.png";
                        $("#conditionStyle4").addClass("moderate");
                    };
                    currentIcon3();
                    break;
                case 'broken clouds':
                    function currentIcon4() {
                        document.getElementById("weatherIcon4").src = "http://openweathermap.org/img/wn/04d.png";
                        $("#conditionStyle4").addClass("moderate");
                    };
                    currentIcon4();
                    break;
                case 'shower rain':
                    function currentIcon5() {
                        document.getElementById("weatherIcon4").src = "http://openweathermap.org/img/wn/09d.png";
                        $("#conditionStyle4").addClass("severe");
                    };
                    currentIcon5();
                    break;
                case 'rain':
                    function currentIcon6() {
                        document.getElementById("weatherIcon4").src = "http://openweathermap.org/img/wn/10d.png";
                        $("#conditionStyle4").addClass("moderate");
                    };
                    currentIcon6();
                    break;
                case 'thunderstorm':
                    function currentIcon7() {
                        document.getElementById("weatherIcon4").src = "http://openweathermap.org/img/wn/11d.png";
                        $("#conditionStyle4").addClass("severe");
                    };
                    currentIcon7();
                    break;
                case 'snow':
                    function currentIcon8() {
                        document.getElementById("weatherIcon4").src = "http://openweathermap.org/img/wn/13d.png";
                        $("#conditionStyle4").addClass("severe");
                    };
                    currentIcon8();
                    break;
                case 'mist':
                    function currentIcon9() {
                        document.getElementById("weatherIcon4").src = "http://openweathermap.org/img/wn/50d.png";
                        $("#conditionStyle4").addClass("severe");
                    };
                    currentIcon9();
                    break;
                default:
                    function currentIcon10() {
                        document.getElementById("weatherIcon4").src = "./assets/images/zombies.jpg";
                        $("#conditionStyle4").addClass("severe");
                    };
                    currentIcon10();
                    break;
            };

            document.getElementById("foreCast4").innerHTML =
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
                    function currentIcon1() {
                        document.getElementById("weatherIcon5").src = "http://openweathermap.org/img/wn/01d.png";
                        $("#conditionStyle5").addClass("favorable");
                    };
                    currentIcon1();
                    break;
                case 'few clouds':
                    function currentIcon2() {
                        document.getElementById("weatherIcon5").src = "http://openweathermap.org/img/wn/02d.png";
                        $("#conditionStyle5").addClass("favorable");
                    };
                    currentIcon2();
                    break;
                case 'scattered clouds':
                    function currentIcon3() {
                        document.getElementById("weatherIcon5").src = "http://openweathermap.org/img/wn/03d.png";
                        $("#conditionStyle5").addClass("moderate");
                    };
                    currentIcon3();
                    break;
                case 'broken clouds':
                    function currentIcon4() {
                        document.getElementById("weatherIcon5").src = "http://openweathermap.org/img/wn/04d.png";
                        $("#conditionStyle5").addClass("moderate");
                    };
                    currentIcon4();
                    break;
                case 'shower rain':
                    function currentIcon5() {
                        document.getElementById("weatherIcon5").src = "http://openweathermap.org/img/wn/09d.png";
                        $("#conditionStyle5").addClass("severe");
                    };
                    currentIcon5();
                    break;
                case 'rain':
                    function currentIcon6() {
                        document.getElementById("weatherIcon5").src = "http://openweathermap.org/img/wn/10d.png";
                        $("#conditionStyle5").addClass("moderate");
                    };
                    currentIcon6();
                    break;
                case 'thunderstorm':
                    function currentIcon7() {
                        document.getElementById("weatherIcon5").src = "http://openweathermap.org/img/wn/11d.png";
                        $("#conditionStyle5").addClass("severe");
                    };
                    currentIcon7();
                    break;
                case 'snow':
                    function currentIcon8() {
                        document.getElementById("weatherIcon5").src = "http://openweathermap.org/img/wn/13d.png";
                        $("#conditionStyle5").addClass("severe");
                    };
                    currentIcon8();
                    break;
                case 'mist':
                    function currentIcon9() {
                        document.getElementById("weatherIcon5").src = "http://openweathermap.org/img/wn/50d.png";
                        $("#conditionStyle5").addClass("severe");
                    };
                    currentIcon9();
                    break;
                default:
                    function currentIcon10() {
                        document.getElementById("weatherIcon5").src = "./assets/images/zombies.jpg";
                        $("#conditionStyle5").addClass("severe");
                    };
                    currentIcon10();
                    break;
            };

            document.getElementById("foreCast5").innerHTML =
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