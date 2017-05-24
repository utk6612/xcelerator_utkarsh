import React from 'react';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Badge from 'material-ui/Badge';
import cookie from 'react-cookie';

class CardDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: this.props.cardActive,
            like: 0 | this.props.likeCount.get(this.props.cardActive.id),
            dislike: 0 | this.props.dislikeCount.get(this.props.cardActive.id),
            bookmark: false | this.props.bookmarkStatus.get(this.props.cardActive.id)
        }
    }

    change(message) {
        if (message === "like") {
            this.props.like(this.props.cardActive.id, this.state.like + 1);
            this.setState({ like: this.state.like + 1 });
        }
        else if (message === 'dislike') {
            this.props.dislike(this.props.cardActive.id, this.state.dislike + 1);
            this.setState({ dislike: this.state.dislike + 1 });
        }
        else if (message === 'bookmark') {
            this.props.bookmark(this.props.cardActive.id, !this.state.bookmark);
            this.setState({ bookmark: !this.state.bookmark });
        }
    }
    render() {
        const styles = {
            overflow: 'auto',
            height: 500,
            margin: 20,
            padding: 20,
            textAlign: 'center',
            position:'relative',
            checkbox: {
                marginBottom: 16,
            }
        };

        return (
            <div className="container">
                <h3>{this.props.cardActive.title}</h3>
                <Checkbox
                    label="Bookmark"
                    style={styles.checkbox}
                    onClick={this.change.bind(this, 'bookmark')}
                    checked={this.state.bookmark ? true : false}
                />
                <Paper style={styles} zDepth={5} rounded={false} className="col-xs-11" >
                    <img src={this.props.cardActive.thumbnailUrl} width="150" height="250" className="col-xs-12 col-sm-4" alt="" />
                    <p className="cardDescription col-xs-12 col-sm-8">
                        {this.props.cardActive.body}
                    </p>
                    <CardActions className="col-md-offset-6 cardAction">
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

                    </CardActions>

                </Paper>
            </div>
        );
    }
}

export default CardDescription;