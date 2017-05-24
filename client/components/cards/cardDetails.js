import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class CardDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            card:this.props.card
        }
    }
    render(){
        return(
        <Card>
    <CardHeader
      title={this.state.card.name}
      subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={false}
    />
    <CardActions>
      <FlatButton label="Like" />
      <FlatButton label="Dislike" />
    </CardActions>
    <CardText expandable={false}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>)
    }
}

export default CardDetails;