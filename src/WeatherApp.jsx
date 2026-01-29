import React from 'react'
import SearchBox from './SearchBox.jsx'
import InfoBox from './InfoBox.jsx'

const WeatherApp = () => {
    const [weatherData, setWeatherData] = React.useState({
        city: "Delhi",
        temperature: 20.12,
        temp_min: 17.26,
        temp_max: 23.54,
        humidity: 42,
        feelsLike: 21.14,
        weather: "Cloudy"
    });

    let updateWeatherData = (newData) => {
        setWeatherData(newData);
    }

  return (
    <div style={{textAlign: "center"}}>
        <h1>Weather App</h1>
        <SearchBox updateWeatherData={updateWeatherData} />
        <InfoBox info={weatherData} />
    </div>
  )
}

export default WeatherApp