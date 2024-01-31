import React, { useEffect } from "react";
import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, weatherTemp }) => {
  // useEffect(() => {
  //   fetch("http://localhost:3001/items").then((data) => console.log(data));
  // }, []);

  // console.log("weather card");
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      {weatherTemp !== null && (
        <div className="weather__info">{weatherTemp} F</div>
      )}
      <img src={imageSrcUrl} alt="weather display" className="weather__image" />
    </section>
  );
};

export default WeatherCard;
