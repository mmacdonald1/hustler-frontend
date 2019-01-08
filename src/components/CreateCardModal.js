import React, {Component} from 'react'
import {Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import { connect } from 'react-redux';
import {createCardFetch} from '../redux/actions/cards'


class CreateCardModal extends Component{
  constructor() {
      super();
      this.state = {
        title:"",
        content:""
      };
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]:value})
  }
  handleCreateCardSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.createCardFetch(this.state.title,this.state.content,this.props.deckId)
    this.props.handleCardModalClose()
  }


  render(){
    console.log(this.props)
    return(

      <Modal show={this.props.show} onHide={this.props.handleCardModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Card</Modal.Title>
        </Modal.Header>
        <form onSubmit={this.handleCreateCardSubmit}>
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
    createCardFetch: (title,content,deck_id) => dispatch(createCardFetch(title,content,deck_id))
  })
}

export default connect(null, mapDispatchToProps)(CreateCardModal)
