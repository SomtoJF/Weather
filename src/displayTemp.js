let weatherContainer = document.getElementById('Weather');
import './displayTemp.css';

function displayTemp (temperature, Weather){
    weatherContainer.innerHTML = '';
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] !== ''){
            let parameter = arguments[i];
            let div = document.createElement('div');
            if(i == 0){
                parameter = (((parameter * 100) - 27315)/100).toFixed(2);
                parameter += '°C';
            };
            div.textContent = parameter;
            weatherContainer.appendChild(div);
        }
    };
};
export default displayTemp;