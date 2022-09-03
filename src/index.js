import './index.css';
import {getData} from './displayLoc';
import {default as storageAvailable} from './storage';

if(storageAvailable('localStorage') && localStorage.getItem('lastSearch')){
    getData(localStorage.getItem('lastSearch'));
}
else{
    getData('Lagos');
};