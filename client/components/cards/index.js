import React from 'react';
import ReactDOM from 'react-dom';
import CardDetails from '../../components/cards/cardDetails';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import * as links from '../../config/index';
import FlatButton from 'material-ui/FlatButton';
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter
} from 'react-modal-bootstrap';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            isOpen: false,
            open: false
        }
    }
    componentDidMount() {
        this.props.getCards(links.cardData);
    }
    search(event) {
        this.setState({ search: event.target.value })
    }
    openModal() {

        this.setState({
            isOpen: true,
            open: false
        });
    };

    hideModal() {
        this.setState({
            isOpen: false
        });
    };
    createCard() {
        var title = ReactDOM.findDOMNode(this.refs.title).value;
        var body = ReactDOM.findDOMNode(this.refs.description).value;
        var thumbnailUrl = ReactDOM.findDOMNode(this.refs.imgUrl).value;
        var obj = {
            id: Math.random() * Math.random() * 999,
            title,
            body,
            thumbnailUrl
        }
        this.props.addCard(obj);
        console.log(links.add);
        this.props.addCardBackend(links.add,obj)
        this.setState({ isOpen: false });

    }
    render() {
        const style = {
            position: 'absolute',
            left: "45%",
            top: "40%",
            search: {
                width: '100%',
                fontcolor: 'black'
            }
        }
        var data;
        if (this.state.search) {
            data = this.props.cardData.map((item, index) => {
                if (item.title.toUpperCase().search(this.state.search.toUpperCase()) >= 0)
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
                <input type="button" value="Add Card" className="btn btn-primary" onClick={this.openModal.bind(this)}></input>
                <br />
                <br />
                <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal.bind(this)}>
                    <ModalHeader>
                        <ModalClose onClick={this.hideModal.bind(this)} />
                        <ModalTitle>Create New Card</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <label>Enter Title</label>
                        <input className='form-input form-control' type="text" ref="title" />
                        <br />
                        <div>
                            <label>Description</label>
                            <textarea cols="30" rows="10" className="form-control" ref="description"></textarea>
                        </div>
                        <br />
                        <div>
                            <label>Image Url</label>
                            <input className='form-input form-control' value="https://lh4.ggpht.com/mJDgTDUOtIyHcrb69WM0cpaxFwCNW6f0VQ2ExA7dMKpMDrZ0A6ta64OCX3H-NMdRd20=w300" type="text" ref="imgUrl" />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-primary' onClick={this.createCard.bind(this)}>
                            Create
    </button>
                        <button className='btn btn-default' onClick={this.hideModal.bind(this)}>
                            Cancel
    </button>
                    </ModalFooter>
                </Modal>
                {data}
            </div>
        )
    }

}

export default Cards;
