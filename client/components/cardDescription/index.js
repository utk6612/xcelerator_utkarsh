import React from 'react';

class CardDescription extends React.Component{
    render(){
        return(
            <h2>{this.props.cardActive.id}</h2>
        )
    }
}

export default CardDescription;