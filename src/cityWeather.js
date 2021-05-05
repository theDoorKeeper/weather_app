import { ID } from "./helperFunctions";

class WeatherCard {
    constructor (name,temp,weather,humidity,wind){
        this.name = name;
        this.temp =  Math.round( temp - 273.15 ) ;
        this.humidity = humidity;
        this.weather = weather;
        this.wind=wind;
        this.id=ID();


    }

    
}

export default WeatherCard