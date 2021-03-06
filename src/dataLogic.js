import WeatherCard from "./cityWeather";
import createCards from "./domHandler";

const cardStorage= [];

const getWeatherData = async () => {

   const value = document.querySelector("input").value;

   const response  = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=495c40655917fc17c9f840b125a97e5e`,{mode: 'cors'});
   const data = await response.json();
   console.log(data)
   const newCard = new WeatherCard(data.name,data.main.temp,data.weather[0].main,data.main.humidity,data.wind.speed);
   cardStorage.push(newCard)
   console.log(cardStorage)  
   createCards();

}





export  {getWeatherData, cardStorage}