
const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.Location-not-found');

const weather_body = document.querySelector('.weatherbody');

async function checkWeather(city) {
    const api_key = "f4229bfd2c4cbc73ef02b329c4a3a8e3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
    if (weather_data.cod === `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch (weather_data.weather[0].main) {
        case 'clouds':
            weather_img.src = "cloud.png";
            break;
        case 'clear':
            weather_img.src = "clear.png";
            break;
        case 'rain':
            weather_img.src = "rain.png";
            break;
        case 'mist':
            weather_img.src = "mist.png";
            break;
        case 'snow':
            weather_img.src = "snow.png";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});


