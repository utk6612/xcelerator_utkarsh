import { combineReducers } from 'redux';
import {cardData,loading,likeCount,dislikeCount,bookmarkStatus} from './items';

var rootReducer= combineReducers({
    cardData,
    loading,
    likeCount,
    dislikeCount,
    bookmarkStatus
});

export default rootReducer;