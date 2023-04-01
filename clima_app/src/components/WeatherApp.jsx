import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const apiKey = '9f88c837ec4d1eb91454b7e343fd30a5';

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeather(response.data);
    } catch (error) {
      console.error(error);
      setWeather(null);
    }
  };

  useEffect(() => {
    const initialCity = 'São Paulo';
    setCity(initialCity);
    fetchWeather(initialCity);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  return (
    <div>
      <h1>Aplicativo de Clima</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Digite uma cidade" />
        <button type="submit">Buscar Clima</button>
      </form>
      {weather && (
        <div>
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p>Temperatura: {weather.main.temp}°C</p>
          <p>Condição: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
