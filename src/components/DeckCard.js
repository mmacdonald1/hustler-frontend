import React, {Component} from 'react'
import {Panel, ButtonToolbar, ButtonGroup, Button, Glyphicon} from 'react-bootstrap'



class DeckCard extends Component{
  handleDeckClick=()=>{
    console.log('You have clicked on a deck');
  }

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
        <Panel.Body onClick={this.handleDeckClick}>{this.props.deck.name}</Panel.Body>
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

export default DeckCard
