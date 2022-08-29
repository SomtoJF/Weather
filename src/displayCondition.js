import './displayCondition.css';
import pressure from "./images/pressure.png";
import humidityPercent from "./images/water%.png";
import windSpeed from "./images/wind.png";
let condition = document.getElementById('Conditions');

function displayCondition(wind, rain, humidity){
    condition.innerHTML = '';
    let infoArray = [windSpeed, pressure, humidityPercent, wind, rain, humidity, 'Wind | km/h', 'Pressure | pa', 'Humidity | %'];
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