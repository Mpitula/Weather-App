function getWeather(){
    const apikey = 'e179018826b8b4ad9978726249a1b69e';
    const city = document.getElementById('city').value;
    if (!city){
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}';
    const forecastUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}';
    
}

