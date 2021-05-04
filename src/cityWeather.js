class WeatherCard {
    constructor (name,temp,feelsLike,humidity){
        this.name = name;
        this.temp =  Math.round( temp - 273.15 ) ;
        this.feelsLike = Math.round( feelsLike - 273.15 );
        this.humidity = humidity;
    }

    
}

export default WeatherCard