import "./WeatherCard.css";

const weatherOptions = [
  {
    url: require("../../images/day-sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../../images/day-cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../../images/day-rainy.svg").default,
    day: true,
    type: "rainy",
  },
  {
    url: require("../../images/day-stormy.svg").default,
    day: true,
    type: "stormy",
  },
  {
    url: require("../../images/day-snowy.svg").default,
    day: true,
    type: "snowy",
  },
  {
    url: require("../../images/day-foggy.svg").default,
    day: true,
    type: "foggy",
  },
  {
    url: require("../../images/night-clear.svg").default,
    day: false,
    type: "clear",
  },
  {
    url: require("../../images/night-cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../../images/night-rainy.svg").default,
    day: false,
    type: "rainy",
  },
  {
    url: require("../../images/night-stormy.svg").default,
    day: false,
    type: "stormy",
  },
  {
    url: require("../../images/night-snowy.svg").default,
    day: false,
    type: "snowy",
  },
  {
    url: require("../../images/night-foggy.svg").default,
    day: false,
    type: "foggy",
  },
];

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  // console.log("weather card");
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  // console.log(imageSrc);
  // console.log(imageSrc[0].url);

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp} F</div>

      <img src={imageSrcUrl} alt="weather display" className="weather__image" />
    </section>
  );
};

export default WeatherCard;
