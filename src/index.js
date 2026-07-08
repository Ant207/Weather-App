import './styles.css';
import {fetchWeather} from './modules/weatherApi.js';
import {renderWeather} from './modules/domController.js';

const searchBtn = document.getElementById('search-button');

searchBtn.addEventListener('click', () => {
    const container = document.getElementById('container');
    const location = document.getElementById('location-input').value;
    container.textContent = "Loading...";
    fetchWeather(location)
        .then(summary => {
            renderWeather(summary);
        })
        .catch(error => container.textContent = "Please enter a valid location.");
});