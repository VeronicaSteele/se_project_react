import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "../../utils/WeatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { deleteItems, addItems, getItems } from "../../utils/api.js";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile.js";
import { defaultClothingItems } from "../../utils/constants.js";
import ClothesSection from "../ClothesSection/ClothesSection.js";

function App() {
  const weatherTemp = 75;
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [image, setImage] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [cards, setCards] = useState([]);
  const [location, setLocation] = useState("");

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
  const handleDeleteModal = (card) => {
    // console.log(card);
    deleteItems(card._id)
      .then(() => {
        handleCloseModal();
        //close the modal
        const updatedCards = cards.filter((item) => item._id !== card._id);
        setCards(updatedCards);
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  const onAddItem = (values) => {
    // console.log(values);

    addItems(values).then((res) => {
      setCards((cards) => [res, ...cards]); // Add new card to the start
      handleCloseModal();
    });
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        // console.log(data);
        const temperature = parseWeatherData(data);
        // console.log(temperature);
        setTemp(temperature);
        getItems().then((data) => setCards(data));
        setLocation(data.name);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <Header onCreateModal={handleCreateModal} location={location} />
      <Switch>
        <Route exact path="/">
          <Main
            weatherTemp={temp}
            onSelectCard={handleSelectedCard}
            cards={cards}
          />
        </Route>
        <Route path="/profile">
          <Profile
            onSelectCard={handleSelectedCard}
            onCreateModal={handleCreateModal}
            cards={cards}
          />
        </Route>
      </Switch>
      <Footer />
      {activeModal === "create" && (
        <AddItemModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "create"}
          onAddItem={onAddItem}
        />
      )}
      {activeModal === "preview" && (
        <ItemModal
          selectedCard={selectedCard}
          onClose={handleCloseModal}
          onCardDelete={handleDeleteModal}
        />
      )}
    </CurrentTemperatureUnitContext.Provider>
  );
}
export default App;
