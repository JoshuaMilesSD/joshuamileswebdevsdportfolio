import { useState, useEffect } from 'react'
import './WeatherApp.css'

function WeatherApp() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [city, setCity] = useState('')

  const API_KEY = 'demo_key'

  const fetchWeatherByLocation = () => {
    if (navigator.geolocation) {
      setLoading(true)
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeatherData(position.coords.latitude, position.coords.longitude)
        },
        () => {
          setError('Unable to get your location')
          setLoading(false)
        }
      )
    } else {
      setError('Geolocation is not supported by this browser')
    }
  }

  const fetchWeatherByCity = async (cityName) => {
    if (!cityName.trim()) return
    
    setLoading(true)
    setError('')
    
    try {
      const mockWeatherData = {
        name: cityName,
        main: {
          temp: Math.floor(Math.random() * 30) + 10,
          feels_like: Math.floor(Math.random() * 30) + 10,
          humidity: Math.floor(Math.random() * 50) + 30
        },
        weather: [
          {
            main: ['Sunny', 'Cloudy', 'Rainy', 'Snow'][Math.floor(Math.random() * 4)],
            description: 'Clear sky',
            icon: '01d'
          }
        ],
        wind: {
          speed: Math.floor(Math.random() * 10) + 1
        }
      }
      
      setWeather(mockWeatherData)
    } catch (err) {
      setError('Failed to fetch weather data')
    } finally {
      setLoading(false)
    }
  }

  const fetchWeatherData = async (lat, lon) => {
    try {
      const mockWeatherData = {
        name: 'Your Location',
        main: {
          temp: Math.floor(Math.random() * 30) + 10,
          feels_like: Math.floor(Math.random() * 30) + 10,
          humidity: Math.floor(Math.random() * 50) + 30
        },
        weather: [
          {
            main: ['Sunny', 'Cloudy', 'Rainy', 'Snow'][Math.floor(Math.random() * 4)],
            description: 'Clear sky',
            icon: '01d'
          }
        ],
        wind: {
          speed: Math.floor(Math.random() * 10) + 1
        }
      }
      
      setWeather(mockWeatherData)
    } catch (err) {
      setError('Failed to fetch weather data')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchWeatherByCity(city)
  }

  const getWeatherIcon = (iconCode) => {
    const iconMap = {
      'Sunny': '☀️',
      'Cloudy': '☁️',
      'Rainy': '🌧️',
      'Snow': '❄️'
    }
    return iconMap[weather?.weather[0]?.main] || '🌤️'
  }

  useEffect(() => {
    fetchWeatherByLocation()
  }, [])

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      
      <div className="search-container">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
            className="city-input"
          />
          <button type="submit" className="search-btn">Search</button>
        </form>
        <button onClick={fetchWeatherByLocation} className="location-btn">
          Use My Location
        </button>
      </div>

      {loading && <div className="loading">Loading...</div>}
      
      {error && <div className="error">{error}</div>}
      
      {weather && !loading && (
        <div className="weather-card">
          <div className="weather-header">
            <h2>{weather.name}</h2>
            <div className="weather-icon">
              {getWeatherIcon(weather.weather[0].icon)}
            </div>
          </div>
          
          <div className="weather-info">
            <div className="temperature">
              <span className="temp-value">{Math.round(weather.main.temp)}°C</span>
              <span className="temp-desc">{weather.weather[0].description}</span>
            </div>
            
            <div className="weather-details">
              <div className="detail-item">
                <span className="label">Feels like:</span>
                <span className="value">{Math.round(weather.main.feels_like)}°C</span>
              </div>
              <div className="detail-item">
                <span className="label">Humidity:</span>
                <span className="value">{weather.main.humidity}%</span>
              </div>
              <div className="detail-item">
                <span className="label">Wind Speed:</span>
                <span className="value">{weather.wind.speed} m/s</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="app-note">
        <p><em>Note: This demo uses mock data. In a production app, this would connect to a real weather API.</em></p>
      </div>
    </div>
  )
}

export default WeatherApp