// import logo from "";
import "./App.css";
import Header from "../Components/Header/Header";
import WeatherCard from "../Components/WeatherCard/WeatherCard";

function App() {
  return (
    <div>
      <Header />
      <WeatherCard day={false} type="cloudy" />
      <main className="main">
        <section id="card-section">Card Section</section>
      </main>
    </div>
  );
}

export default App;
