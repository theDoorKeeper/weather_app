import getWeatherData from "../dataLogic";


const search = document.querySelector(".searchBtn");

search.addEventListener("click", ()=>{
     getWeatherData();
    const searchBar = document.querySelector("input");
    searchBar.value="";
    
/*     const testing =   new WeatherCard(searchBar.value,data.main.temp,data.main.feels_like,data.main.humidty); */

})