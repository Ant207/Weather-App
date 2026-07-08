const img = document.querySelector('img');

export function getWeatherSummary(data) {
    const current = data.currentConditions;
    return {
        location: data.resolvedAddress,
        temp: current.temp,
        feelslike: current.feelslike,
        conditions: current.conditions,
        icon: current.icon,
        humidity: current.humidity,
        windspeed: current.windspeed,
    };
}

export function fetchWeather(location) {
    return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=KEJHPFZKH7E6FFFV676MLEXTS`)
        .then(response => response.json())
        .then(response => getWeatherSummary(response));
}
