const apiKey = "884b09ee569cfa2fbc222503b301c0ea";
const units = "metric"; // Units for temperature, can be metric, imperial, or standard

const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=${units}&appid=${apiKey}`;

const searchBox = document.querySelector(".inputs input");
const searchBtn = document.querySelector(".inputs button");

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiURL}&q=${city}`);
        const data = await response.json();
        console.log(data);
        document.querySelector(".cityname").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
