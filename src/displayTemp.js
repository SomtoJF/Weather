let weatherContainer = document.getElementById('Weather');
import './displayTemp.css';

function displayTemp (temperature, Weather){
    for(let i = 0; i < arguments.length; i++){
        let div = document.createElement('div');
        div.textContent = arguments[i];
        weatherContainer.appendChild(div);
    }
};
export default displayTemp;