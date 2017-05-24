import React from 'react';
import ReactDOM from 'react-dom';
import CardDetails from '../../components/cards/cardDetails';
import CircularProgress from 'material-ui/CircularProgress';

class Cards extends React.Component{
    componentDidMount(){
        this.props.getCards("https://api.myjson.com/bins/9qfgp");
    }

    render(){
        const style={
            position:'absolute',
            left:"45%",
            top:"40%"
        }
        var data;

        data=this.props.cardData.map((item,index)=>{
            return <CardDetails card={item} key={Math.random()*index} {...this.props}></CardDetails>
        })
        if(this.props.loading)
        return(
            <CircularProgress style={style} size={150} thickness={10} />
        )
        else return(
            <div>
            <h1>Cards</h1>
            {data}
            </div>
        )
    }

}

export default Cards;
