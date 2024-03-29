import "./currentweather.css";

function CurrentWeather({ data }) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDay = days[currentDate.getDay()];

  return (
    <div className="weather">
      <div className="current-day">
        <p>{currentDay}</p>
      </div>
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weatherdescr">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        ></img>
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like:</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed}mph</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Air Pressure</span>
            <span className="parameter-value"> {data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
