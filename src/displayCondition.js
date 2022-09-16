import './displayCondition.css';
import pressureIcon from "./images/pressure.png";
import humidityPercent from "./images/water%.png";
import windSpeed from "./images/wind.png";
let condition = document.getElementById('Conditions');

// Takes wind speed, pressure and humidity
function displayCondition(wind, pressure, humidity){
    condition.innerHTML = '';
    let infoArray = [windSpeed, pressureIcon, humidityPercent, wind, pressure, humidity, 'Wind | km/h', 'Pressure | hPa', 'Humidity | %'];
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