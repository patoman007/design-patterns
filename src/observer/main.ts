import { WeatherData } from "./models/weather-data.class";
import { CurrentConditionsDisplay } from "./weather-display-elements/current-conditions-display.class";
import { ForecastDisplay } from "./weather-display-elements/forecast-display.class";
import { StatiscsDisplay } from "./weather-display-elements/statiscs-display.class";

(() => {
  const weatherData = new WeatherData();
  const currentConditions = new CurrentConditionsDisplay(weatherData);
  const forecast = new ForecastDisplay(weatherData);
  const statiscs = new StatiscsDisplay(weatherData);

  weatherData.setMeasurements(80, 65, 30.4);
  weatherData.setMeasurements(82, 70, 29.2);
  weatherData.setMeasurements(78, 90, 29.2);
})();
