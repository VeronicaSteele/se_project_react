//

const latitude = 44.34;
const longitude = 10.99;
const APIkey = "6979e3eb862bfbec92f2555b8e476ef5";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    console.log(res);
    if (res.ok) {
      return parseWeatherData(res.json());
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};

const parseWeatherData = (data) => {
  console.log(data);
  const weather = data.main;
  // const temperature = main && main[0].temp;
  // console.log(temperature);
  // return temperature;
};

const response = {
  coord: {
    lon: 10.99,
    lat: 44.34,
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04n",
    },
  ],
  base: "stations",
  main: {
    temp: 29.52,
    feels_like: 25.92,
    temp_min: 24.03,
    temp_max: 32.27,
    pressure: 1026,
    humidity: 86,
    sea_level: 1026,
    grnd_level: 935,
  },
};
