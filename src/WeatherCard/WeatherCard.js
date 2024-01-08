const weatherOptions = [
  { ur: require("../images/day-sunny.svg").default, day: true, type: "sunny" },
  {
    ur: require("../images/day-cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    ur: require("../images/day-rainy.svg").default,
    day: true,
    type: "rainy",
  },
  {
    ur: require("../images/day-stormy.svg").default,
    day: true,
    type: "stormy",
  },
  {
    ur: require("../images/day-snowy.svg").default,
    day: true,
    type: "snowy",
  },
  {
    ur: require("../images/day-foggy.svg").default,
    day: true,
    type: "foggy",
  },
  {
    ur: require("../images/night-clear.svg").default,
    day: false,
    type: "clear",
  },
  {
    ur: require("../images/night-cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    ur: require("../images/night-rainy.svg").default,
    day: false,
    type: "rainy",
  },
  {
    ur: require("../images/night-stormy.svg").default,
    day: false,
    type: "stormy",
  },
  {
    ur: require("../images/night-snowy.svg").default,
    day: false,
    type: "snowy",
  },
  {
    ur: require("../images/night-foggy.svg").default,
    day: false,
    type: "foggy",
  },
];

const WeatherCard = ({ day, type }) => {
  console.log("weather card");
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });

  console.log(imageSrc);
  console.log(imageSrc[0].url);

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather__info">65F</div>

      <img src={imageSrcUrl} alt="weather display" className="weather__image" />
    </section>
  );
};

export default WeatherCard;
