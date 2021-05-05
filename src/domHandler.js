import { cardStorage } from "./dataLogic";
import { createHtmlElement } from "./helperFunctions";
import Clouds from "../dist/assets/Clouds.svg";
import Clear from "../dist/assets/Clear.svg";
import Rain from "../dist/assets/Rain.svg";
import Drizzle from "../dist/assets/Drizzle.svg";
import Snow from "../dist/assets/Snow.svg";
import ThunderStorm from "../dist/assets/Thunderstorm.svg";
const container = document.querySelector(".container")


const createCards = () =>{
    container.innerHTML="";
    cardStorage.forEach(card =>{
        const weatherWrapper = createHtmlElement("div",card.id,["weatherWrapper"],null);
        container.appendChild(weatherWrapper);

        const weatherCard = createHtmlElement("div",card.id,["weatherCard"],null);
        weatherWrapper.appendChild(weatherCard);





        const currentTemp = createHtmlElement("div",card.id,["currentTemp"],null);
        weatherCard.appendChild(currentTemp);


        const temp = createHtmlElement("span",card.id,["temp"],`${card.temp}&deg`);
        currentTemp.appendChild(temp);

        const location = createHtmlElement("span",card.id,["location"],`${card.name}`);
        currentTemp.appendChild(location);




        const currentWeather = createHtmlElement("div",card.id,["currentWeather"],null);
        weatherCard.appendChild(currentWeather);



        const conditions = createHtmlElement("span",card.id,["conditions"],null);
        currentWeather.appendChild(conditions);

        const img = createHtmlElement("img",card.id,["logo"],null);
        conditions.appendChild(img);

        if(card.weather === "Clouds"){
            img.src=Clouds;
        }
        else if (card.weather === "Rain"){
            img.src=Rain;
        }
        else if (card.weather === "Drizzle"){
            img.src=Drizzle;
        }
        else if (card.weather === "Snow"){
            img.src=Snow;
        }
        else {
            img.src=ThunderStorm;
        }

        
        const info = createHtmlElement("div",card.id,["info"],null);
        currentWeather.appendChild(info);

        const rain = createHtmlElement("span",card.id,["rain"],`${card.humidity}&deg`);
        info.appendChild(rain);

        const wind = createHtmlElement("span",card.id,["wind"],`${card.wind}`);
        info.appendChild(wind);








    })
}

export default createCards