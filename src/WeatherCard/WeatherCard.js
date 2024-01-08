const weatherOptions = [
  { ur: "../images/day-sunny.svg", day: true, type: "sunny" },
  { ur: "../images/day-cloudy.svg", day: true, type: "cloudy" },
  { ur: "../images/day-rainy.svg", day: true, type: "rainy" },
  { ur: "../images/day-stormy.svg", day: true, type: "stormy" },
  { ur: "../images/day-snowy.svg", day: true, type: "snowy" },
  { ur: "../images/day-foggy.svg", day: true, type: "foggy" },
  { ur: "../images/night-clear.svg", day: false, type: "clear" },
  { ur: "../images/night-cloudy.svg", day: false, type: "cloudy" },
  { ur: "../images/night-rainy.svg", day: false, type: "rainy" },
  { ur: "../images/night-stormy.svg", day: false, type: "stormy" },
  { ur: "../images/night-snowy.svg", day: false, type: "snowy" },
  { ur: "../images/night-foggy.svg", day: false, type: "foggy" },
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
