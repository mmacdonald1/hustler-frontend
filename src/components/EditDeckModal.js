import React, {Component} from 'react'
import {Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import { connect } from 'react-redux';
import {editDeckFetch} from '../redux/actions/decks'


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
    this.props.editDeckFetch(this.props.currentDeck.id, this.state.name, this.props.id)
    this.props.handleEditFormClose()
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
    editDeckFetch: (deckId, deckName, user_id) => dispatch(editDeckFetch(deckId, deckName, user_id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDeckModal)
