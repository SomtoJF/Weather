let locationContainer = document.getElementById('Location');
import {attributeSetter, childAppender} from './DOMmethods';
import {default as displayTemp} from "./displayTemp";
import {default as changeBackground} from './background';
import {default as displayCondition} from './displayCondition';
import {format} from 'date-fns';
import './displayLoc.css';

function displayLoc(city, timestamp){
    let form = document.createElement('form');
    let inputLocation = document.createElement('input');
    inputLocation = attributeSetter(inputLocation, ['id', 'inputLocation'], ['required', ''], ['placeholder', city]);

    let submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');

    let dateContainer = document.createElement('div');
    dateContainer.setAttribute('id', 'date');
    let date = new Date(timestamp);
    dateContainer.textContent = format(date, "hh:mm aaa '-' EEEE, PP");

    form = childAppender(form, [inputLocation, submitButton]);
    childAppender(locationContainer, [form, dateContainer]);

    form.addEventListener('submit', (e)=>
    {
        getData(inputLocation.value);
        locationContainer.innerHTML = '';
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
    displayLoc(location, timezoneToTimestamp(response.timezone));
    displayTemp(response.weather[0].main, [response.main.temp, toTitlecase(response.weather[0].description)]);
    displayCondition(response.wind.speed, response.main.pressure, response.main.humidity);
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

function timezoneToTimestamp(timezone) {
    let d = new Date();
    let localTime = d.getTime();
    let localOffset = d.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    let timestamp = utc + (1000 * timezone);
    return timestamp;
};