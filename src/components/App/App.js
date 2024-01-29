import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "../../utils/WeatherApi";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const weatherTemp = 75;

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temperature, setTemp] = useState(0);
  const [image, setImage] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  // console.log(image);

  const handleOnChange = (imageValue) => {
    console.log("imageValue", imageValue);
    setImage(imageValue);
  };

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);
  console.log(currentTemperatureUnit);
  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temperature}
              onSelectCard={handleSelectedCard}
              temp={temperature}
            />
          </Route>
          <Route path="/profile">Profile</Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <ModalWithForm title="New Garment" onclose={handleCloseModal}>
            <div className="modal__overlay">
              <label className="modal__input-label">
                Name
                <input
                  className="modal__input"
                  type="text"
                  name="name"
                  minLength="1"
                  maxLength="30"
                  placeholder="Name"
                />
              </label>
              <label className="modal__input-label">
                Image
                <input
                  className="modal__input"
                  type="url"
                  name="link"
                  minLength="1"
                  maxLength="30"
                  placeholder="Image URL"
                  onChange={(input) => handleOnChange(input.target.value)}
                />
              </label>
              <p>Select the weather type:</p>
              <div className="weather_selector">
                <div className="modal__buttons">
                  <input
                    type="radio"
                    id="hot"
                    name="weather"
                    value="hot"
                    className="input__button"
                  />
                  <label htmlFor="hot">Hot</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="warm"
                    name="weather"
                    value="warm"
                    className="input__button"
                  />
                  <label htmlFor="warm">Warm</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="cold"
                    name="weather"
                    value="cold"
                    className="input__button"
                  />
                  <label htmlFor="cold">Cold</label>
                </div>
              </div>
            </div>
          </ModalWithForm>
        )}
        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onclose={handleCloseModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}
export default App;
