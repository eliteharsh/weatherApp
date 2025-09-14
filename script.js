
        const apiKey = "e6bcaf9631bcf918a7e75c708f9c6714";
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city) {
            try {
                const response = await fetch(`${apiURL}&q=${city}&appid=${apiKey}`);
                if (!response.ok) {
                    throw new Error("City not found");
                }
                const data = await response.json();

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

                if (data.weather[0].main == "Clouds") {
                    weatherIcon.src = "clouds.png";
                } else if (data.weather[0].main == "Mist") {
                    weatherIcon.src = "mist.png";
                } else if (data.weather[0].main == "Drizzle") {
                    weatherIcon.src = "drizzle.png";
                } else if (data.weather[0].main == "Rain") {
                    weatherIcon.src = "rain.png";
                } else if (data.weather[0].main == "Snow") {
                    weatherIcon.src = "snow.png";
                } else if (data.weather[0].main == "Clear") {
                    weatherIcon.src = "clear.png";
                }
            } catch (error) {
                console.error(error.message);
                document.querySelector(".city").innerHTML = "Error: " + error.message;
            }
        }

        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        });
