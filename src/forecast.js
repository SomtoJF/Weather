import './forecast.css';
import { changeIcon } from './background';
import { format } from "date-fns";
import { kelvintoCelcius } from "./displayTemp";
let forecast = document.getElementById('forecast');

function displayForecastData(date, temperature, weather){
    let div = document.createElement('div');
    for(let i = 0; i < arguments.length; i++){
        let information = document.createElement('div');
        if(i == 2)
        {
            changeIcon(information, weather);
        }
        else
        {
            information.textContent = arguments[i];
        };
        div.appendChild(information);
    }
    forecast.appendChild(div);
};

function getForecastData(list){
    forecast.innerHTML = '';
    for(let i = 0; i < list.length; i++){
        let timestamp = Date.parse(list[i].dt_txt);
        let date = format(new Date(timestamp), 'EEEE, h:mm aaa');
        let temperature = kelvintoCelcius(list[i].main.temp)
        displayForecastData(date, temperature, list[i].weather[0].main)
    }
}
export default getForecastData;