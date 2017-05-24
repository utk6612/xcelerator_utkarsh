import React from 'react';
import { connect } from 'react-redux';
import { 
    getCards,deleteData,isLoading
} from '../actions/index';
import Main from './Main.component';

  const mapStateToProps = (state) => {
        return {
            cardData:state.cardData,
            loading:state.loading,
        };
    }

const mapDispatchToProps = (dispatch) => {
        return {
            getCards: (url) => dispatch(getCards(url)),
            deleteData:()=>dispatch(deleteData()),
            isLoading:(bool)=>dispatch(isLoading(bool))
        };
    }
    var App=connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;
