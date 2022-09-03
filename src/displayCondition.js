import './displayCondition.css';
import rainPercent from "./images/rain%.png";
import humidityPercent from "./images/water%.png";
import windSpeed from "./images/wind.png";
let condition = document.getElementById('Conditions');

function displayCondition(wind, rain, humidity){
    condition.innerHTML = '';
    let infoArray = [windSpeed, rainPercent, humidityPercent, wind, rain, humidity, 'Wind | km/h', 'Chance of Rain | %', 'Humidity | %'];
    infoArray[4] *= 100;
    for(let i = 0; i < infoArray.length; i++){
        let div = document.createElement('div');
        if(i < 3){
            div.style.backgroundImage = `url(${infoArray[i]})`;
            condition.appendChild(div);
        }
        else{
        div.textContent = infoArray[i];
        condition.appendChild(div);
        };
    }; 
};
export default displayCondition;