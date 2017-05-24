import React from 'react';
import ReactDOM from 'react-dom';


class Cards extends React.Component{
    componentDidMount(){
        this.props.getCards("https://api.myjson.com/bins/111d9l");
    }
    render(){
        var data;

        data=this.props.cardData.map((item,index)=>{
            return <h3>{item.id}</h3>
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
