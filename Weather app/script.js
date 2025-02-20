function getWeather(){
    const apikey = 'e179018826b8b4ad9978726249a1b69e';
    const city = document.getElementById('city').value;
    if (!city){
        alert('Please enter a city');
        return;
    }

    //Current weather and forecast 
    const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}';
    const forecastUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}';
    
    //Get current weather data using current url
    fetch(currentWeatherUrl)
        .then(Response => Response.json())
        .then(data => {displayWeather(data);})
        .catch(error => {console.error('Error fetching current weather data:', error);
            alert('Erro fetching current weather data. Please try again.');
        });
    //Get the weather data using forecasturl
    fetch(forecastUrl)
        .then(Response => Response.json())
        .then(data => {displayHourlyForast(data.list);})
        .catch(error => {console.error('Error fetching hourly forecast data:', error);
            alert('Erro fetching hourly forecast data. Please try again.');
        });
}

//Get references to all html elements where the weather app will be displayed

function displayWeather(data){

    const tempDinInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('waether-info');
    const WeatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv =document.getElementById('hourly-forecast');

    //clear all content from previous html that is displaying
    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDinInfo.innerHTML = '';

    //error code
    if(data.cod === 404)
    {
        weatherInfoDiv.innerHTML = '<p>${data.message}</p>';
    }
    else
    {
        //extract any info from this data
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15); //convert to celsius
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = 'https://api.openweathermap.org/img/wn/${iconCode}@4x.png';

        const temperatureHTML = '<p>${temperature}°C</p>';
        const weatherHtml = `
            <p>${cityName}</p>
            <p>${description}</p>
        `;

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHtml;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();
    }
}

function displayHourlyForecast(hourlyData) {
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

    const next24Hours = hourlyData.slice(0, 8); // Display the next 24 hours (3-hour intervals)

    next24Hours.forEach(item => {
        const dateTime = new Date(item.dt * 1000); // Convert timestamp to milliseconds
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15); // Convert to Celsius
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHtml = `
            <div class="hourly-item">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Hourly Weather Icon">
                <span>${temperature}°C</span>
            </div>
        `;

        hourlyForecastDiv.innerHTML += hourlyItemHtml;
    });
}

function showImage() {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block'; // Make the image visible once it's loaded
}
