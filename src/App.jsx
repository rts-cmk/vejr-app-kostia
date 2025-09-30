import { useState, useEffect } from "react"
import WeatherCard from "./components/WeatherCard"
import SearchBar from "./components/SearchBar"

const API_KEY = "a4c1a999a5f59b1ae04c5fba9554baab"

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export default function App() {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("Roskilde");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!searchCity) return;

    fetch(`${BASE_URL}?q=${searchCity}&appid=${API_KEY}`)
      .then((res) => {
        if(!res.ok){
          throw new Error("byen ikke fundet")
        }
        return res.json()
      } 
      )
      .then((json) => setData(json))
      .catch((err) => {
        alert(err.message)
        setData(null)
      })
  }, [searchCity]);

  function handleSearch(e) {
    e.preventDefault();
    setSearchCity(city);
  }

  return (
    <section>
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
      <WeatherCard data={data} />
    </section>
  );
}
