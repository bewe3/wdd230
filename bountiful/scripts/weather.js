document.addEventListener('DOMContentLoaded', () => {

    // Define the API endpoint and parameters
    const apiKey = '5713a25d9f52bc928360f20c28da67f0'; // Replace with your OpenWeather API key
    const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    const lat = '33.1581'; // Replace with the latitude of Carlsbad, CA
    const lon = '-117.3506'; // Replace with the longitude of Carlsbad, CA
    const units = 'imperial'; // Use Fahrenheit for temperature

    // Select the HTML elements to be populated with data
    const dayOne = document.querySelector('#day-one');
    const dayTwo = document.querySelector('#day-two');
    const dayThree = document.querySelector('#day-three');

    // Fetch the forecast data from the OpenWeather API
    fetch(`${apiUrl}?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Extract the forecast data for the next 3 days
            const forecast = data.list.filter(item => {
                const date = new Date(item.dt_txt);
                return date.getHours() === 12; // Return only data for noon each day
            }).slice(0, 3);

            // Populate the HTML with the forecast data
            forecast.forEach((item, index) => {
                const section = index === 0 ? dayOne : index === 1 ? dayTwo : dayThree; // Select the correct section for the day
                const date = new Date(item.dt_txt).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' }); // Format the date as MM/DD/YY
                const temp = Math.round(item.main.temp) + '°F'; // Round the temperature to the nearest whole number and add the unit
                const condition = item.weather[0].description; // Get the condition description
                const humidity = item.main.humidity + '%'; // Add the unit to the humidity

                section.querySelector('.date').textContent = date;
                section.querySelector('.temp').textContent = temp;
                section.querySelector('.condition').textContent = condition;
                section.querySelector('.humidity').textContent = humidity + " humidity";
            });
        })
        .catch(error => {
            console.error(error);
        });
});