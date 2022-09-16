let weatherContainer = document.getElementById('Weather');
import {changeIcon} from './background';
import './displayTemp.css';

// Takes Main weather, temperature and weather description
function displayTemp (main, tempAndWeather){
    weatherContainer.innerHTML = '';
    for(let i = 0; i < tempAndWeather.length; i++){
        if(tempAndWeather[i] !== ''){
            let div = document.createElement('div');
            if(i == 0){
                tempAndWeather[i] = kelvintoCelcius(tempAndWeather[i]);
            };
            if(i == 1){
                let icondiv = document.createElement('div');
                changeIcon(icondiv, main);
                icondiv.setAttribute('id', 'icon');
                div.appendChild(icondiv);

                let weatherdiv = document.createElement('div');
                weatherdiv.textContent = tempAndWeather[i];
                div.appendChild(weatherdiv);
                weatherContainer.appendChild(div);
                continue;
            }
            div.textContent = tempAndWeather[i];
            weatherContainer.appendChild(div);
        }
    };
};

function kelvintoCelcius(temperature) {
    temperature = (((temperature * 100) - 27315)/100).toFixed(2);
    return temperature + '°C';
}
export default displayTemp;
export { kelvintoCelcius };