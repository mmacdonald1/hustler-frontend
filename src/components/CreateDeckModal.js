import React, {Component} from 'react'
import {Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import { connect } from 'react-redux';
<<<<<<< HEAD
import {createDeck} from '../redux/actions/decks'
=======
import {createDeckFetch} from '../redux/actions/decks'
>>>>>>> quiz-feature

class CreateDeckModal extends Component{
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
  handleCreateDeckSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.name)
    this.props.createDeckFetch(this.state.name,this.props.id)
    this.props.handleClose()
  }


  render(){
    console.log(this.props)
    return(
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Deck</Modal.Title>
        </Modal.Header>
        <form onSubmit={this.handleCreateDeckSubmit}>
          <Modal.Body>

              <FormGroup>
                <ControlLabel>Deck Name</ControlLabel>
                <FormControl
                  name= "name"
                  type="text"
                  value={this.state.name}
                  placeholder="Enter deck name"
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
    createDeckFetch: (deckName, user_id) => dispatch(createDeckFetch(deckName, user_id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeckModal)
