import React from 'react';
import ReactDOM from 'react-dom';
import CardDetails from '../../components/cards/cardDetails';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import * as links from '../../config/index';

class Cards extends React.Component {
    constructor(props){
        super(props);
        this.state={
            search:''
        }
    }
    componentDidMount() {
        this.props.getCards(links.cardData);
    }
    search(event) {
        this.setState({ search: event.target.value })
    }
    render() {
        const style = {
            position: 'absolute',
            left: "45%",
            top: "40%",
            search:{
        width:'100%',
        fontcolor:'black'
            }
        }
        var data;
        if (this.state.search) {
            data = this.props.cardData.map((item, index) => {
                if (item.title.slice(0, this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >= 0)
                    return <CardDetails card={item} key={Math.random() * index} {...this.props}></CardDetails>
            })
        }
        else {
            data = this.props.cardData.map((item, index) => {
                return <CardDetails card={item} key={Math.random() * index} {...this.props}></CardDetails>
            })
        }
        if (this.props.loading)
            return (
                <CircularProgress style={style} size={150} thickness={10} />
            )
        else return (
            <div className="container">
                <TextField
                    hintText="Search"
                    style={style.search}
                    onChange={this.search.bind(this)}
                /><br />
                {data}
            </div>
        )
    }

}

export default Cards;
