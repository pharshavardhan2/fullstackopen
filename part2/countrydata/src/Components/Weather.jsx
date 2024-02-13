import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ lat, lon, city }) => {
  const [ weatherData, setWeatherData ] = useState(null)

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY
    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then(response => setWeatherData(response.data))
  }, [])
      
  if (weatherData) {
    return (
      <div>
        <h2>Weather in {city}</h2>
        <p>temperature {weatherData.main.temp} celsius</p>
        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} width={100}/>
        <p>wind {weatherData.wind.speed} m/s</p>
      </div>
    )
  }
}

export default Weather