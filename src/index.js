import { getWeatherData } from "./dataLogic";



const search = document.querySelector(".searchBtn");

search.addEventListener("click", ()=>{
     getWeatherData();
    const searchBar = document.querySelector("input");
    searchBar.value="";

})