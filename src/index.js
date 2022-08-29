import './index.css';
import {default as displayLoc} from './displayLoc';
import {default as displayTemp} from "./displayTemp";
import {default as displayCondition} from './displayCondition';

displayLoc('London', new Date().getTime());
displayTemp('', '');
displayCondition('', '', '');