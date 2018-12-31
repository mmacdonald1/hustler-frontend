import React, {Component} from 'react'
import {Panel, ButtonToolbar, ButtonGroup, Button, Glyphicon} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {deleteDeck} from '../redux/actions/decks'


class DeckCard extends Component{
  handleEditClick=()=>{
    console.log('You are trying to edit a deck')
    this.props.handleEditForm(this.props.deck)
  }
  handleDeleteClick=()=>{
    let token = localStorage.getItem('token')
    fetch(`http://localhost:3000/decks/${this.props.deck.id}`,{
      method:"DELETE",
      headers:{
        "Authentication" : `Bearer ${token}`
      }
    }).then(resp => resp.json())
    .then(data => this.props.deleteDeck(data))
  }
  render(){
    return(
      <Panel>
        <Panel.Body>
          <Link to={`/decks/${this.props.deck.id}`}>{this.props.deck.name}</Link>
        </Panel.Body>
        <ButtonToolbar>
          <ButtonGroup>
            <Button bsSize="xsmall" onClick={this.handleEditClick}>
              <Glyphicon glyph="pencil" />
            </Button>
            <Button bsSize="xsmall" onClick={this.handleDeleteClick}>
              <Glyphicon glyph="remove" />
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Panel>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return({
    deleteDeck: (deck) => dispatch(deleteDeck(deck))
  })
}

export default connect(null, mapDispatchToProps)(DeckCard)
