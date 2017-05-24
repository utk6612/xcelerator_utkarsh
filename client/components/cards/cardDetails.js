import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';

class CardDetails extends React.Component{
    constructor(props){
        super(props);
        console.log("hello");
        this.state={
            card:this.props.card,
            like:0,
            dislike:0,
            bookmark:false
        }
        console.log("sdj");
    }
    change(message){
        if(message==="like")
        {
            this.setState({like:this.state.like+1});
        }
        else if(message === 'dislike')
        {
            
            this.setState({dislike:this.state.dislike+1});
        }    
    }

    render(){
        console.log("hi");
        return(
        <Card onClick={this.details.bind(this)}>
    <CardHeader
      title={this.state.card.name}
      subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={false}
    />
    <CardActions>
      <FlatButton label="Like" primary={true} onClick={this.change.bind(this,"like")} />
          <Badge
      badgeContent={this.state.like}
      primary={true}
    >
    </Badge>
      
      <FlatButton label="Dislike" secondary={true} onClick={this.change.bind(this,"dislike")}/>
          <Badge
      badgeContent={this.state.dislike}
      secondary={true}
    >
    </Badge>
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