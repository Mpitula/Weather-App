## Weather App

A simple and intuitive weather application built with React that allows users to search for real-time weather information for any city worldwide. The app uses the OpenWeatherMap API to fetch weather data and displays it in a clean and user-friendly interface.

## Features

+ Real-Time Weather Data: Get current weather information, including temperature, humidity, and wind speed.
+ City Search: Search for weather details by entering a city name.
+ Dynamic Icons: Weather conditions are represented with visually appealing icons (e.g., sunny, cloudy, rainy).
+ Responsive Design: The app is designed to work seamlessly on both desktop and mobile devices.
+ Error Handling: Displays user-friendly error messages for invalid city names or API issues.

## Screenshots
<figure>
    <figcaption>Weather App UI</figcaption>
    <img src="/src/assets/Screenshot 2025-03-12 174619.png" alt="Weather App UI">
</figure>

## Live Demo
Check out the live demo of the app: [Weather App Live Demo]()

## Technologies Used

1. React: A JavaScript library for building user interfaces.

2. OpenWeatherMap API: Provides real-time weather data.

3. CSS: For styling the application.

4. Vite: A fast build tool for modern web development.

## Installation

**Follow these steps to set up the project locally on your machine:**

Prerequisites
+ Node.js (v16 or higher)
+ npm (Node Package Manager)
+ An API key from OpenWeatherMap

**Steps**

**1. Clone the Repository:**
- Copy: git clone https://github.com/your-username/weather-app.git
- cd weather-app

**2. Install Dependencies:**
- Copy: npm install

**3. Set Up Environment Variables:**
- Create a .env file in the root directory.

**4. Add your OpenWeatherMap API key:**
- VITE_WEATHER_API_KEY=your_api_key_here

**5. Run the App:**
- Copy: npm run dev
- The app will start on http://localhost:3000.

## Usage

+ Search for a City:
+ Enter the name of a city in the search bar.
+ Press the "Enter" key or click the search icon to fetch weather data.
+ View Weather Details: The app will display the current temperature, humidity, wind speed, and weather condition icon.
+Error Handling:If the city name is invalid or the API call fails, an error message will be displayed.

# API Reference

The app uses the OpenWeatherMap API to fetch weather data. Below are the details of the API endpoint used:

+ Endpoint: https://api.openweathermap.org/data/2.5/weather
+ Parameters:
+ q: City name (e.g., London).
+ units: Temperature unit (metric for Celsius).
+ appid: Your OpenWeatherMap API key.

Example API Call: **https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=your_api_key_here**

## This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

**Currently, two official plugins are available:**

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

**Expanding the ESLint configuration**

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## License

This project is licensed under the MIT License. See the [LICENSE](https://license/) file for details.

## Acknowledgments

OpenWeatherMap for providing the weather data API.<br>React and Vite for making the development process smooth and efficient.

## Contact

Please feel free to Email: [Alonemapitlula@gmail.com](Alonemapitlula@gmail.com) for any questions or inquiries.