import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import { hashHistory } from 'react-router';
import Checkbox from 'material-ui/Checkbox';
import cookie from 'react-cookie';

class CardDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: this.props.card,
            like: 0 | this.props.likeCount.get(this.props.card.id),
            dislike: 0 | this.props.dislikeCount.get(this.props.card.id),
            bookmark: false | this.props.bookmarkStatus.get(this.props.card.id),
            shadow: 1
        }
    }
    change(message, event) {
        event.stopPropagation();
        if (message === "like") {
            this.props.like(this.props.card.id, this.state.like + 1);
            this.setState({ like: this.state.like + 1 });
        }
        else if (message === 'dislike') {
            this.props.dislike(this.props.card.id, this.state.dislike + 1);
            this.setState({ dislike: this.state.dislike + 1 });
        }
        else if (message === 'bookmark') {
            this.props.bookmark(this.props.card.id, !this.state.bookmark);
            this.setState({ bookmark: !this.state.bookmark });
        }
    }
    details() {
        this.props.activeCard(this.props.card);
        cookie.save('activeCard',this.props.card);
        hashHistory.push(`/details/${this.props.card.id}`);
    }
    onMouseOver() {
        this.setState({ shadow: 5 });
    }
    onMouseOut() {
        this.setState({ shadow: 1 });
    }
    truncateText(str) {
        return str.slice(0, 256) + "....";
    }
    render() {
        var description;
        let flag;
        if (this.props.card.body.length > 256) {
            flag = 1
            description = this.truncateText(this.props.card.body);
        }
        else {
            flag = 0;
            description = this.props.card.body;
        }


        const styles = {
            checkbox: {
                marginBottom: 16,
                marginLeft:15
            },
            card:{
                overflow:'auto',
                height:580,
                position:'relative'
            },
            cardAction:{
                marginTop:'15px',
                position:'absolute',
                bottom:'10px'
            },
            header:{
                color:'red'
            }
        };
        return (
            <div className="col-xs-12 col-sm-6 col-md-4">
                <Card
                    style={styles.card}
                    onMouseOver={this.onMouseOver.bind(this)}
                    onMouseOut={this.onMouseOut.bind(this)}
                    zDepth={this.state.shadow}
                    onClick={this.details.bind(this)}>
                    <CardHeader
                        style={styles.header}
                        onClick={this.details.bind(this)}
                        title={this.state.card.title}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <Checkbox
                        label="Bookmark"
                        style={styles.checkbox}
                        onClick={this.change.bind(this, 'bookmark')}
                        checked={this.state.bookmark ? true : false}
                    />
                    <img src={this.props.card.thumbnailUrl} height="200px" className="cardImg col-xs-11" />
                    {(flag) ?
                        <CardText expandable={false} className="col-xs-12">
                            {description}
                            <a onClick={this.details.bind(this)}>Read More</a>
                        </CardText>
                        :
                        <CardText expandable={false} onClick={this.details.bind(this)} className="col-md-8 col-xs-12 col-sm-8 pull-right">
                            {description}
                        </CardText>
                    }
                    <CardActions style={styles.cardAction} className="cardAction">
                        <span>
                        <FlatButton label="Like" primary={true} onClick={this.change.bind(this, "like")} />
                        <Badge
                            badgeContent={this.state.like}
                            primary={true}
                        >
                        </Badge>
                        </span>
                        <span>
                        <FlatButton label="Dislike" secondary={true} onClick={this.change.bind(this, "dislike")} />
                        <Badge
                            badgeContent={this.state.dislike}
                            secondary={true}
                        >
                        </Badge>
                        </span>

                    </CardActions>


                </Card>
                <br />
            </div>)
    }
}

export default CardDetails;