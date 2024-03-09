import { checkResponse } from "../utils/api.js";

const latitude = 42.36;
const longitude = -71.05;
const APIkey = "6979e3eb862bfbec92f2555b8e476ef5";

export const getForecastWeather = () => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  )
    .then((res) => {
      return checkResponse(res);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      throw error;
    });
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = data.main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  };
  // console.log(temperature);
  return weather;
};

// weather.temperature.F = `${Math.round(data.main.temp)}°F`;
// weather.temperature.C = `${Math.round((data.main.temp - 32) * 5/9)}°C`;
