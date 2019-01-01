import React, {Component} from 'react'
import {Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import { connect } from 'react-redux';
import {createCard, editCard} from '../redux/actions/cards'

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

    fetch(`http://localhost:3000/cards`, {
      method:"POST",
      headers:{
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        deck_id: this.props.deckId
      })
    }).then(resp => resp.json())
    .then(data => {
      console.log(data)
      this.props.createCard(data.card)
      this.props.handleCardModalClose()
    })
  }
  handleEditCardSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)

    fetch(`http://localhost:3000/cards/${this.props.currentCard.id}`, {
      method:"PATCH",
      headers:{
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        deck_id: this.props.deckId
      })
    }).then(resp => resp.json())
    .then(data =>{
      console.log(data)
      this.props.editCard(data.card)
      this.props.handleCardModalClose()
    })
  }

  render(){
    console.log(this.props)
    return(
      this.props.currentCard ?(
      <Modal show={this.props.show} onHide={this.props.handleCardModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit a Card</Modal.Title>
        </Modal.Header>
        <form onSubmit={this.handleEditCardSubmit}>
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
      </Modal>)
      :(
      <Modal show={this.props.show} onHide={this.props.handleClose}>
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
      </Modal>)
      )
    }
  }
const mapDispatchToProps= dispatch =>{
  return({
    createCard: (card) => dispatch(createCard(card)),
    editCard: (card) => dispatch(editCard(card))
  })
}

export default connect(null, mapDispatchToProps)(CreateCardModal)
