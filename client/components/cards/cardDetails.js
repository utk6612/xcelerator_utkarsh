import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import { hashHistory } from 'react-router';
import Checkbox from 'material-ui/Checkbox';

class CardDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: this.props.card,
            like: 0 | this.props.likeCount.get(this.props.card.id),
            dislike: 0 | this.props.dislikeCount.get(this.props.card.id),
            bookmark: false | this.props.bookmarkStatus.get(this.props.card.id)
        }
    }
    change(message) {
        if (message === "like") {
            this.props.like(this.props.card.id, this.state.like + 1);
            this.setState({ like: this.state.like + 1 });
        }
        else if (message === 'dislike') {
            this.props.dislike(this.props.card.id, this.state.dislike + 1);
            this.setState({ dislike: this.state.dislike + 1 });
        }
        else if(message==='bookmark'){
            this.props.bookmark(this.props.card.id, !this.state.bookmark);
            this.setState({ bookmark:!this.state.bookmark });
        }
    }
    details() {
        hashHistory.push(`/details/`);
    }

    render() {
        const styles = {
            checkbox: {
                marginBottom: 16,
            }
        };
        return (
            <Card>
                <CardHeader
                    onClick={this.details.bind(this)}
                    title={this.state.card.title}
                    subtitle="Subtitle"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <img src={this.props.card.thumbnailUrl} alt=""/>

                <CardText expandable={false}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
                <CardActions>
                    <FlatButton label="Like" primary={true} onClick={this.change.bind(this, "like")} />
                    <Badge
                        badgeContent={this.state.like}
                        primary={true}
                    >
                    </Badge>

                    <FlatButton label="Dislike" secondary={true} onClick={this.change.bind(this, "dislike")} />
                    <Badge
                        badgeContent={this.state.dislike}
                        secondary={true}
                    >
                    </Badge>
                    <Checkbox
                        label="Bookmark"
                        style={styles.checkbox}
                        onClick={this.change.bind(this,'bookmark')}
                        checked={this.state.bookmark?true:false}
                    />

                </CardActions>


            </Card>)
    }
}

export default CardDetails;