import './styles.css';
import {fetchWeather} from './modules/weatherApi.js';
import {renderWeather} from './modules/domController.js';

fetchWeather('Portland,ME')
  .then(summary => {
      renderWeather(summary);
  })
  .catch(error => console.log("error occurred:", error));