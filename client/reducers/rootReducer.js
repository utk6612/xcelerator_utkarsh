import { combineReducers } from 'redux';
import {cardData,loading,likeCount,dislikeCount,bookmarkStatus, cardActive} from './items';

var rootReducer= combineReducers({
    cardData,
    loading,
    likeCount,
    dislikeCount,
    bookmarkStatus,
    cardActive
});

export default rootReducer;