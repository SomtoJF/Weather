import './index.css';
import {default as displayLoc} from './displayLoc';
import {default as displayTemp} from "./displayTemp";
import {default as displayCondition} from './displayCondition';
import {getData} from './displayLoc';
import {default as storageAvailable} from './storage';

if(storageAvailable('localStorage') && localStorage.getItem('lastSearch')){
    getData(localStorage.getItem('lastSearch'));
}
else{
    getData('Lagos');
};