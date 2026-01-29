import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SearchBox.css';

const SearchBox = ({ updateWeatherData }) => {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "749ffd530bf682b3a111430a93ef58fb";

  const [city, setCity] = React.useState("");
  const [error, setError] = React.useState(false);

  const getWeatherInfo = async (city) => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const jsonResponse = await response.json();

      return {
        city: jsonResponse.name,
        temperature: jsonResponse.main.temp,
        temp_min: jsonResponse.main.temp_min,
        temp_max: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
    } catch (err) {
      setError(true);
      return null;
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    const info = await getWeatherInfo(city);

    if (info) {
      updateWeatherData(info);
      setCity("");
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /><br />

        <Button variant="contained" type="submit">
          Search
        </Button>

        {error && (
          <p style={{ color: "red" }}>
            Could not fetch the data. Please check the city name.
          </p>
        )}
      </form>
    </div>
  );
};

export default SearchBox;
