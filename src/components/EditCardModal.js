import React, {Component} from 'react'
import {Modal, Button, FormGroup, ControlLabel, FormControl, Alert} from 'react-bootstrap'
import { connect } from 'react-redux';
import {editCardFetch} from '../redux/actions/cards'


class EditCardModal extends Component{
  constructor() {
      super();
      this.state = {
        title:"",
        content:"",
        error:null
      };
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]:value})
  }

  handleErrorMessage = () =>{
    const reducer = (acc, cur) => {
      if (!cur[1]) {
        return [...acc, cur[0]];
      } else {
        return acc;
      }
    }
    let ret = Object.entries(this.state.error).reduce(reducer, []);

    return `Invalid ${ret.join(", ")}. Must be at least 1 character.`
  }

  handleEditCardSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    let errors = {title: this.state.title.length>0, content:this.state.content.length>0}
    if(!Object.keys(errors).some(x => errors[x]=== false)){
      this.setState({error:null})
      this.props.editCardFetch(this.props.currentCard.id, this.state.title, this.state.content, this.props.deckId)
      this.props.handleEditFormClose()
    }
    else{
      this.setState({error: errors})
    }
  }

  render(){
    console.log(this.props)
    return(
      <Modal show={this.props.editShow} onHide={this.props.handleEditFormClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit a Card</Modal.Title>
        </Modal.Header>
        {this.state.error ? <Alert bsStyle="danger">{this.handleErrorMessage()}</Alert>: null}
        <form onSubmit={(e)=>this.handleEditCardSubmit(e)}>
          <Modal.Body>
          <FormGroup>
            <ControlLabel>Card Title</ControlLabel>
            <FormControl
              name= "title"
              type="text"
              value={this.state.title}
              placeholder="Enter card title"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Card Content</ControlLabel>
            <FormControl
              name= "content"
              type="text"
              value={this.state.content}
              placeholder="Enter card content"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>

          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Submit</Button>
          </Modal.Footer>
        </form>
      </Modal>
      )
    }
  }
const mapDispatchToProps= dispatch =>{
  return({
    editCardFetch: (cardId, title ,content, deckId) => dispatch(editCardFetch(cardId, title ,content, deckId))
  })
}

export default connect(null, mapDispatchToProps)(EditCardModal)
