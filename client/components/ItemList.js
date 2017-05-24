import React from 'react';
import { connect } from 'react-redux';
import { 
    getCards,deleteData,isLoading,like,dislike
} from '../actions/index';
import Main from './Main.component';

  const mapStateToProps = (state) => {
        return {
            cardData:state.cardData,
            loading:state.loading,
            likeCount:state.likeCount,
            dislikeCount:state.dislikeCount
        };
    }

const mapDispatchToProps = (dispatch) => {
        return {
            getCards: (url) => dispatch(getCards(url)),
            deleteData:()=>dispatch(deleteData()),
            isLoading:(bool)=>dispatch(isLoading(bool)),
            like:(id,count)=>dispatch(like(id,count)),
            dislike:(id,count)=>dispatch(dislike(id,count))
        };
    }
    var App=connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;
