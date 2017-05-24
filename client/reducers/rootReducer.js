import { combineReducers } from 'redux';
import {cardData,loading} from './items';

var rootReducer= combineReducers({
    cardData,
    loading
});

export default rootReducer;