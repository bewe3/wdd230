const lat = '10.82';
const lon = '106.62';
const apikey = '5713a25d9f52bc928360f20c28da67f0';
const weatherIcon = document.querySelector('#weatherIcon');
const descriptionObj = document.querySelector("#description");
const windspeedobj = document.querySelector("#windspeed");
const windchillobj = document.querySelector("#windchill");
const tempobj = document.querySelector("#temperature");


const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;

function displayResults(weatherData) {

    temperature.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    windspeedobj.textContent = `${weatherData.wind.speed}`;

    tempobj.textContent = `${weatherData.main.temp.toFixed(0)}`;

    const icon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    const description = weatherData.weather[0].main;

    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', description);
    descriptionObj.innerHTML = description;

    if (weatherData.weather[0].icon <= 50 && weatherData.wind.speed > 3){
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(weatherData.wind.speed,0.16)) + (0.4275*temp*Math.pow(weatherData.wind.speed,0.16)));
        chillmsg = `${chill}`;
        windchillobj.innerHTML = chillmsg + '&deg;F';

    } else {
      windchillobj.innerHTML = 'N/A';
    }
  }

  async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  