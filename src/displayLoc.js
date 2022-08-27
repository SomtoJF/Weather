let locationContainer = document.getElementById('Location');
let weatherContainer = document.getElementById('Weather');
import {attributeSetter, childAppender} from './DOMmethods';
import {default as displayTemp} from "./displayTemp";
import {default as changeBackground} from './background';
import './displayLoc.css';

function displayLoc(city){
    let form = document.createElement('form');
    let inputLocation = document.createElement('input');
    inputLocation = attributeSetter(inputLocation, ['id', 'inputLocation'], ['required', ''], ['placeholder', city]);

    let submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');

    form = childAppender(form, [inputLocation, submitButton]);
    locationContainer.appendChild(form);

    form.addEventListener('submit', (e)=>
    {
        getData(inputLocation.value);
        locationContainer.innerHTML = '';
        displayLoc(inputLocation.value);
        e.preventDefault();
    }
    );
};


async function getData(location){
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=7a05c54f9c2f27e1237267d2d7d1c58f`, 
    {
        mode: 'cors'
    });
    response = await response.json();
    console.log(response);
    changeBackground(response.weather[0].main);
    weatherContainer.innerHTML = '';
    displayTemp(response.weather[0].main, [response.main.temp,toTitlecase(response.weather[0].description)]);
    return response;
}
getData().catch((response)=>{
    alert('Error');
})
export default displayLoc;

function toTitlecase(string){
    string = string.split(' ');
    for(let i = 0; i < string.length; i++){
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    };
    return string.join(' ');
};