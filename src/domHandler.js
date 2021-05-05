import { cardStorage } from "./dataLogic";
import { createHtmlElement } from "./helperFunctions";
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


        const temp = createHtmlElement("span",card.id,["temp"],"25");
        currentTemp.appendChild(temp);

        const location = createHtmlElement("span",card.id,["location"],"brusells");
        currentTemp.appendChild(location);




        const currentWeather = createHtmlElement("div",card.id,["currentWeather"],null);
        weatherCard.appendChild(currentWeather);



        const conditions = createHtmlElement("span",card.id,["conditions"],null);
        currentWeather.appendChild(conditions);

        const img = createHtmlElement("img",card.id,["logo"],null);
        conditions.appendChild(img);
        
        const info = createHtmlElement("div",card.id,["info"],null);
        currentWeather.appendChild(info);

        const rain = createHtmlElement("span",card.id,["rain"],"26");
        info.appendChild(rain);

        const wind = createHtmlElement("span",card.id,["wind"],"12");
        info.appendChild(wind);








    })
}

export default createCards