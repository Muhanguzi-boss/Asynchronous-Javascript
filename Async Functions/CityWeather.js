const API_KEY = "68f22559370ea008f244dacd9b56d111";
async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    //Variabales for different weather conditions
    const description = data.weather[0].description;
    const temperature = data.main.temp;
    const feelsLike = data.main.feels_like;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    //Output of the different weather conditions
    console.log(`🌍 Weather in ${city}:
       - Description : ${description};
       - Temperature : ${temperature}°C;
       - Feels Like : ${feelsLike}°C;
       - Humidity : ${humidity}%;
       - Wind Speed : ${windSpeed}m/s;

        `);
  } catch (error) {
    console.log("Error fetching weather: ", error);
  }
}
getWeather("Kampala");
