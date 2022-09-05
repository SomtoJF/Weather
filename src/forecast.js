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
    for(let i = 0; i < list.length; i++){
        displayForecastData(format(new Date(list[i].dt_txt), 'EEEE, h:mm aaa'), kelvintoCelcius(list[i].main.temp), list[i].weather[0].main)
    }
}
export default getForecastData;