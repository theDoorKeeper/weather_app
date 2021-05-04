import { cardStorage } from "./dataLogic";
import { createHtmlElement } from "./helperFunctions";
const container = document.querySelector(".container")


const createCards = () =>{
    container.innerHTML="";
    cardStorage.forEach(card =>{
        const cardSkeleton = createHtmlElement("div",card.id,["cardSkeleton"],null);
        container.appendChild(cardSkeleton);
        cardSkeleton.textContent=`City : ${card.name}  temparature : ${card.temp}°C feels Like : ${card.feelsLike}°C humidity: ${card.humidity}`


    })
}

export default createCards