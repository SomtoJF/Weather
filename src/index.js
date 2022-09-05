import './index.css';
import {getCurrentWeather, getForecastWeather} from './displayLoc';
import {default as storageAvailable} from './storage';

if(storageAvailable('localStorage') && localStorage.getItem('lastSearch')){
    getCurrentWeather(localStorage.getItem('lastSearch'));
    getForecastWeather(localStorage.getItem('lastSearch'));
}
else{
    getCurrentWeather('Lagos');
};