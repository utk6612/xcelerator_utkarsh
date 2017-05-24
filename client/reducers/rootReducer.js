import { combineReducers } from 'redux';
import {cardData,loading,likeCount,dislikeCount} from './items';

var rootReducer= combineReducers({
    cardData,
    loading,
    likeCount,
    dislikeCount
});

export default rootReducer;