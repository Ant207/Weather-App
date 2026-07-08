

function renderWeather(summary) {
    const container = document.querySelector('#container');
    const location = document.createElement('div');
    location.classList.add('location');
    location.textContent = summary.location;

    const temp = document.createElement('div');
    temp.classList.add('temp');
    temp.textContent = summary.temp;

    const feelslike = document.createElement('div');
    feelslike.classList.add('feelslike');
    feelslike.textContent = summary.feelslike;

    const conditions = document.createElement('div');
    conditions.classList.add('conditions');
    conditions.textContent = summary.conditions;

    const icon = document.createElement('div');
    icon.classList.add('icon');
    icon.textContent = summary.icon;

    const humidity = document.createElement('div');
    humidity.classList.add('humidity');
    humidity.textContent = summary.humidity;

    const windspeed = document.createElement('div');
    windspeed.classList.add('windspeed');
    windspeed.textContent = summary.windspeed;

    container.append(location, temp, feelslike, conditions, icon, humidity, windspeed);
}

export {renderWeather};