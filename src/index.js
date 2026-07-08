import './styles.css';
import {fetchWeather} from './modules/weatherApi.js';
import {renderWeather} from './modules/domController.js';

const searchBtn = document.getElementById('search-button');

searchBtn.addEventListener('click', () => {
    const location = document.getElementById('location-input').value;

    fetchWeather(location)
        .then(summary => {
            renderWeather(summary);
        })
        .catch(error => console.log("error occurred:", error));
});