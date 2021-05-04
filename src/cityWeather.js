class WeatherCard {
    constructor (name,temp,feelsLike,humidity){
        this.name = name;
        this.temp =  temp ;
        this.feelsLike = Math.round( feelsLike)
        this.humidity = humidity;
    }
}

export default WeatherCard