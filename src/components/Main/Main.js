import { defaultClothingItems } from "../util/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemModal/ItemCard";

function Main({ weatherTemp }) {
  return (
    <main className="main">
      <WeatherCard day={false} type="rainy" weatherTemp={weatherTemp} />
      <section id="card-section" className="card__section">
        <div>Today is {weatherTemp}. You may want to wear:</div>
        <div className="card__items">
          {defaultClothingItems.map((x) => (
            <ItemCard x={x} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
