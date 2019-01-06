import React, {Component} from 'react'
import {Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import { connect } from 'react-redux';
import {editDeck} from '../redux/actions/decks'

class EditDeckModal extends Component{
  constructor() {
      super();
      this.state = {
        name:""
      };
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]:value})
  }

  handleEditDeckSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.name)

    fetch(`http://localhost:3000/decks/${this.props.currentDeck.id}`, {
      method:"PATCH",
      headers:{
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        user_id: this.props.id
      })
    }).then(resp => resp.json())
    .then(data =>{
      console.log(data)
      this.props.editDeck(data.deck)
      this.props.handleEditFormClose()
    })
  }

  render(){
    console.log(this.props)
    return(

      <Modal show={this.props.editShow} onHide={this.props.handleEditFormClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit a Deck</Modal.Title>
        </Modal.Header>
        <form onSubmit={this.handleEditDeckSubmit}>
          <Modal.Body>
              <FormGroup>
                <ControlLabel>Deck Name</ControlLabel>
                <FormControl
                  name= "name"
                  type="text"
                  value={this.state.name}
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
const mapStateToProps= state =>{
  return({
    id: state.users.id
  })
}
const mapDispatchToProps= dispatch =>{
  return({
    editDeck: (deck) => dispatch(editDeck(deck))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDeckModal)
