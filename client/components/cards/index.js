import React from 'react';
import ReactDOM from 'react-dom';
import CardDetails from '../../components/cards/cardDetails';

class Cards extends React.Component{
    componentDidMount(){
        this.props.getCards("https://api.myjson.com/bins/9qfgp");
    }
    render(){
        var data;

        data=this.props.cardData.map((item,index)=>{
            return <CardDetails card={item} key={Math.random()*index} {...this.props}></CardDetails>
        })
        return(
            <div>
            <h1>Cards</h1>
            {data}
            </div>
        )
    }

}

export default Cards;
